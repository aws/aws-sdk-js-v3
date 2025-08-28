import { ErrorSchema, NormalizedSchema, TypeRegistry } from "@smithy/core/schema";
import type {
  BodyLengthCalculator,
  HttpResponse as IHttpResponse,
  MetadataBearer,
  ResponseMetadata,
  SerdeFunctions,
} from "@smithy/types";
import { calculateBodyLength } from "@smithy/util-body-length-browser";

/**
 * @internal
 */
type ErrorMetadataBearer = MetadataBearer & {
  $response: IHttpResponse;
  $fault: "client" | "server";
};

/**
 * Shared code for Protocols.
 *
 * @internal
 */
export class ProtocolLib {
  /**
   * @param body - to be inspected.
   * @param serdeContext - this is a subset type but in practice is the client.config having a property called bodyLengthChecker.
   *
   * @returns content-length value for the body if possible.
   * @throws Error and should be caught and handled if not possible to determine length.
   */
  public calculateContentLength(body: any, serdeContext?: SerdeFunctions) {
    const bodyLengthCalculator: BodyLengthCalculator =
      (
        serdeContext as SerdeFunctions & {
          bodyLengthChecker?: BodyLengthCalculator;
        }
      )?.bodyLengthChecker ?? calculateBodyLength;
    return String(bodyLengthCalculator(body));
  }

  /**
   * This is only for REST protocols.
   *
   * @param defaultContentType - of the protocol.
   * @param inputSchema - schema for which to determine content type.
   *
   * @returns content-type header value or undefined when not applicable.
   */
  public resolveRestContentType(defaultContentType: string, inputSchema: NormalizedSchema): string | undefined {
    const members = inputSchema.getMemberSchemas();
    const httpPayloadMember = Object.values(members).find((m) => {
      return !!m.getMergedTraits().httpPayload;
    });

    if (httpPayloadMember) {
      const mediaType = httpPayloadMember.getMergedTraits().mediaType as string;
      if (mediaType) {
        return mediaType;
      } else if (httpPayloadMember.isStringSchema()) {
        return "text/plain";
      } else if (httpPayloadMember.isBlobSchema()) {
        return "application/octet-stream";
      } else {
        return defaultContentType;
      }
    } else if (!inputSchema.isUnitSchema()) {
      const hasBody = Object.values(members).find((m) => {
        const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m.getMergedTraits();
        return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && httpPrefixHeaders === void 0;
      });
      if (hasBody) {
        return defaultContentType;
      }
    }
  }

  /**
   * Shared code for finding error schema or throwing an unmodeled base error.
   * @returns error schema and error metadata.
   *
   * @throws ServiceBaseException or generic Error if no error schema could be found.
   */
  public async getErrorSchemaOrThrowBaseException(
    errorIdentifier: string,
    defaultNamespace: string,
    response: IHttpResponse,
    dataObject: any,
    metadata: ResponseMetadata,
    getErrorSchema?: (registry: TypeRegistry, errorName: string) => ErrorSchema
  ): Promise<{ errorSchema: ErrorSchema; errorMetadata: ErrorMetadataBearer }> {
    let namespace = defaultNamespace;
    let errorName = errorIdentifier;
    if (errorIdentifier.includes("#")) {
      [namespace, errorName] = errorIdentifier.split("#");
    }

    const errorMetadata: ErrorMetadataBearer = {
      $metadata: metadata,
      $response: response,
      $fault: response.statusCode < 500 ? ("client" as const) : ("server" as const),
    };

    const registry = TypeRegistry.for(namespace);

    try {
      const errorSchema = getErrorSchema?.(registry, errorName) ?? (registry.getSchema(errorIdentifier) as ErrorSchema);
      return { errorSchema, errorMetadata };
    } catch (e) {
      if (dataObject.Message) {
        dataObject.message = dataObject.Message;
      }
      const baseExceptionSchema = TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace).getBaseException();
      if (baseExceptionSchema) {
        const ErrorCtor = baseExceptionSchema.ctor;
        throw Object.assign(new ErrorCtor({ name: errorName }), errorMetadata, dataObject);
      }
      throw Object.assign(new Error(errorName), errorMetadata, dataObject);
    }
  }

  /**
   * Reads the x-amzn-query-error header for awsQuery compatibility.
   *
   * @param output - values that will be assigned to an error object.
   * @param response - from which to read awsQueryError headers.
   */
  public setQueryCompatError(output: Record<string, any>, response: IHttpResponse) {
    const queryErrorHeader = response.headers?.["x-amzn-query-error"];

    if (output !== undefined && queryErrorHeader != null) {
      const [Code, Type] = queryErrorHeader.split(";");
      const entries = Object.entries(output);
      const Error = {
        Code,
        Type,
      } as any;
      Object.assign(output, Error);
      for (const [k, v] of entries) {
        Error[k] = v;
      }
      delete Error.__type;
      output.Error = Error;
    }
  }

  /**
   * Assigns Error, Type, Code from the awsQuery error object to the output error object.
   * @param queryCompatErrorData - query compat error object.
   * @param errorData - canonical error object returned to the caller.
   */
  public queryCompatOutput(queryCompatErrorData: any, errorData: any) {
    if (queryCompatErrorData.Error) {
      errorData.Error = queryCompatErrorData.Error;
    }
    if (queryCompatErrorData.Type) {
      errorData.Type = queryCompatErrorData.Type;
    }
    if (queryCompatErrorData.Code) {
      errorData.Code = queryCompatErrorData.Code;
    }
  }
}
