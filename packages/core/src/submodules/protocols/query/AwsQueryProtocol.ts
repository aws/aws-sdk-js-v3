import { collectBody, RpcProtocol } from "@smithy/core/protocols";
import { deref, ErrorSchema, NormalizedSchema, SCHEMA, TypeRegistry } from "@smithy/core/schema";
import {
  Codec,
  EndpointBearer,
  HandlerExecutionContext,
  HttpRequest,
  MetadataBearer,
  OperationSchema,
  ResponseMetadata,
  SerdeFunctions,
} from "@smithy/types";
import type { HttpResponse as IHttpResponse } from "@smithy/types/dist-types/http";
import { calculateBodyLength } from "@smithy/util-body-length-browser";

import { XmlShapeDeserializer } from "../xml/XmlShapeDeserializer";
import { QueryShapeSerializer } from "./QueryShapeSerializer";

/**
 * @alpha
 */
export class AwsQueryProtocol extends RpcProtocol {
  protected serializer: QueryShapeSerializer;
  protected deserializer: XmlShapeDeserializer;

  public constructor(
    public options: {
      defaultNamespace: string;
      xmlNamespace: string;
      version: string;
    }
  ) {
    super({
      defaultNamespace: options.defaultNamespace,
    });
    const settings = {
      timestampFormat: {
        useTrait: true,
        default: SCHEMA.TIMESTAMP_DATE_TIME,
      },
      httpBindings: false,
      xmlNamespace: options.xmlNamespace,
      serviceNamespace: options.defaultNamespace,
      serializeEmptyLists: true,
    };
    this.serializer = new QueryShapeSerializer(settings);
    this.deserializer = new XmlShapeDeserializer(settings);
  }

  public getShapeId(): string {
    return "aws.protocols#awsQuery";
  }

  public setSerdeContext(serdeContext: SerdeFunctions) {
    this.serializer.setSerdeContext(serdeContext);
    this.deserializer.setSerdeContext(serdeContext);
  }

  public getPayloadCodec(): Codec<any, any> {
    throw new Error("AWSQuery protocol has no payload codec.");
  }

  public async serializeRequest<Input extends object>(
    operationSchema: OperationSchema,
    input: Input,
    context: HandlerExecutionContext & SerdeFunctions & EndpointBearer
  ): Promise<HttpRequest> {
    const request = await super.serializeRequest(operationSchema, input, context);
    if (!request.path.endsWith("/")) {
      request.path += "/";
    }
    Object.assign(request.headers, {
      "content-type": `application/x-www-form-urlencoded`,
    });
    if (deref(operationSchema.input) === "unit" || !request.body) {
      request.body = "";
    }
    request.body = `Action=${operationSchema.name.split("#")[1]}&Version=${this.options.version}` + request.body;
    if (request.body.endsWith("&")) {
      request.body = request.body.slice(-1);
    }

    try {
      request.headers["content-length"] = String(calculateBodyLength(request.body));
    } catch (e) {}
    return request;
  }

  public async deserializeResponse<Output extends MetadataBearer>(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext & SerdeFunctions,
    response: IHttpResponse
  ): Promise<Output> {
    const deserializer = this.deserializer;
    const ns = NormalizedSchema.of(operationSchema.output);

    const dataObject: any = {};

    if (response.statusCode >= 300) {
      const bytes: Uint8Array = await collectBody(response.body, context as SerdeFunctions);
      if (bytes.byteLength > 0) {
        Object.assign(dataObject, await deserializer.read(SCHEMA.DOCUMENT, bytes));
      }
      await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
    }

    for (const header in response.headers) {
      const value = response.headers[header];
      delete response.headers[header];
      response.headers[header.toLowerCase()] = value;
    }

    const awsQueryResultKey =
      ns.isStructSchema() && this.useNestedResult() ? operationSchema.name.split("#")[1] + "Result" : undefined;
    const bytes: Uint8Array = await collectBody(response.body, context as SerdeFunctions);
    if (bytes.byteLength > 0) {
      Object.assign(dataObject, await deserializer.read(ns, bytes, awsQueryResultKey));
    }

    const output: Output = {
      $metadata: this.deserializeMetadata(response),
      ...dataObject,
    };

    return output;
  }

  /**
   * EC2 Query overrides this.
   */
  protected useNestedResult(): boolean {
    return true;
  }

  protected async handleError(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext & SerdeFunctions,
    response: IHttpResponse,
    dataObject: any,
    metadata: ResponseMetadata
  ): Promise<never> {
    const errorIdentifier = this.loadQueryErrorCode(response, dataObject) ?? "Unknown";
    let namespace = this.options.defaultNamespace;
    let errorName = errorIdentifier;
    if (errorIdentifier.includes("#")) {
      [namespace, errorName] = errorIdentifier.split("#");
    }

    const errorData = this.loadQueryError(dataObject);
    const errorMetadata = {
      $metadata: metadata,
      $response: response,
      $fault: response.statusCode <= 500 ? ("client" as const) : ("server" as const),
    };

    const registry = TypeRegistry.for(namespace);
    let errorSchema: ErrorSchema;

    try {
      errorSchema = registry.find(
        (schema) => (NormalizedSchema.of(schema).getMergedTraits().awsQueryError as any)?.[0] === errorName
      ) as ErrorSchema;
      if (!errorSchema) {
        errorSchema = registry.getSchema(errorIdentifier) as ErrorSchema;
      }
    } catch (e) {
      if (errorData.Message) {
        errorData.message = errorData.Message;
      }
      const baseExceptionSchema = TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace).getBaseException();
      if (baseExceptionSchema) {
        const ErrorCtor = baseExceptionSchema.ctor;
        throw Object.assign(new ErrorCtor({ name: errorName }), errorMetadata, dataObject);
      }
      throw Object.assign(new Error(errorName), errorMetadata, errorData);
    }

    const ns = NormalizedSchema.of(errorSchema);
    const message = this.loadQueryErrorMessage(dataObject);
    const exception = new errorSchema.ctor(message);

    const output = {} as any;

    for (const [name, member] of ns.structIterator()) {
      const target = member.getMergedTraits().xmlName ?? name;
      const value = errorData[target] ?? dataObject[target];
      output[name] = this.deserializer.readSchema(member, value);
    }

    throw Object.assign(
      exception,
      errorMetadata,
      {
        $fault: ns.getMergedTraits().error,
        message,
      },
      output
    );
  }

  /**
   * The variations in the error and error message locations are attributed to
   * divergence between AWS Query and EC2 Query behavior.
   */
  protected loadQueryErrorCode(output: IHttpResponse, data: any): string | undefined {
    const code = (data.Errors?.[0]?.Error ?? data.Errors?.Error ?? data.Error)?.Code;
    if (code !== undefined) {
      return code;
    }
    if (output.statusCode == 404) {
      return "NotFound";
    }
  }

  protected loadQueryError(data: any): any | undefined {
    return data.Errors?.[0]?.Error ?? data.Errors?.Error ?? data.Error;
  }

  protected loadQueryErrorMessage(data: any): string {
    const errorData = this.loadQueryError(data);
    return errorData?.message ?? errorData?.Message ?? data.message ?? data.Message ?? "Unknown";
  }

  /**
   * @override
   */
  protected getDefaultContentType(): string {
    return "application/x-www-form-urlencoded";
  }
}
