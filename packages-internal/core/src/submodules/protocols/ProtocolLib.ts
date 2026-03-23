import { NormalizedSchema, TypeRegistry } from "@smithy/core/schema";
import type { ServiceException as SDKBaseServiceException } from "@smithy/smithy-client";
import { decorateServiceException } from "@smithy/smithy-client";
import type { HttpResponse as IHttpResponse, MetadataBearer, ResponseMetadata, StaticErrorSchema } from "@smithy/types";

/**
 * @internal
 */
type ErrorMetadataBearer = MetadataBearer & {
  // $response is set by the deserializer middleware, not Protocol.
  $fault: "client" | "server";
};

/**
 * Shared code for Protocols.
 *
 * @internal
 */
export class ProtocolLib {
  private errorRegistry?: TypeRegistry;

  public constructor(private queryCompat = false) {}

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
        const noPrefixHeaders = httpPrefixHeaders === void 0;
        return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && noPrefixHeaders;
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
    getErrorSchema?: (registry: TypeRegistry, errorName: string) => StaticErrorSchema
  ): Promise<{ errorSchema: StaticErrorSchema; errorMetadata: ErrorMetadataBearer }> {
    let errorName = errorIdentifier;
    if (errorIdentifier.includes("#")) {
      [, errorName] = errorIdentifier.split("#");
    }

    const errorMetadata: ErrorMetadataBearer = {
      $metadata: metadata,
      $fault: response.statusCode < 500 ? ("client" as const) : ("server" as const),
    };

    if (!this.errorRegistry) {
      throw new Error("@aws-sdk/core/protocols - error handler not initialized.");
    }

    try {
      const errorSchema =
        getErrorSchema?.(this.errorRegistry, errorName) ??
        (this.errorRegistry.getSchema(errorIdentifier) as StaticErrorSchema);
      return { errorSchema, errorMetadata };
    } catch (e) {
      dataObject.message = dataObject.message ?? dataObject.Message ?? "UnknownError";
      const synthetic = this.errorRegistry;
      const baseExceptionSchema = synthetic.getBaseException();

      if (baseExceptionSchema) {
        const ErrorCtor = synthetic.getErrorCtor(baseExceptionSchema) ?? Error;
        throw this.decorateServiceException(
          Object.assign(new ErrorCtor({ name: errorName }), errorMetadata),
          dataObject
        );
      }

      const d = dataObject;
      const message = d?.message ?? d?.Message ?? d?.Error?.Message ?? d?.Error?.message;
      throw this.decorateServiceException(
        Object.assign(
          new Error(message),
          {
            name: errorName,
          },
          errorMetadata
        ),
        dataObject
      );
    }
  }

  /**
   * This method exists because in older clients, no `errorTypeRegistries` array is provided to the Protocol
   * implementation. This means that the TypeRegistry queried by the error's namespace or the service's defaultNamespace
   * must be composed into the possibly-empty local compositeErrorRegistry.
   *
   *
   * @param composite - TypeRegistry instance local to instances of HttpProtocol. In newer clients, this instance directly
   * receives the error registries exported by the client.
   * @param errorIdentifier - parsed from the response, used to look up the error schema within the registry.
   * @param defaultNamespace - property of the Protocol implementation pointing to a specific service.
   */
  public compose(composite: TypeRegistry, errorIdentifier: string, defaultNamespace: string): void {
    let namespace = defaultNamespace;
    if (errorIdentifier.includes("#")) {
      [namespace] = errorIdentifier.split("#");
    }
    const staticRegistry = TypeRegistry.for(namespace);
    const defaultSyntheticRegistry = TypeRegistry.for("smithy.ts.sdk.synthetic." + defaultNamespace);
    composite.copyFrom(staticRegistry);
    composite.copyFrom(defaultSyntheticRegistry);
    this.errorRegistry = composite;
  }

  /**
   * Assigns additions onto exception if not already present.
   */
  public decorateServiceException<E extends SDKBaseServiceException>(
    exception: E,
    additions: Record<string, any> = {}
  ): E {
    if (this.queryCompat) {
      const msg = (exception as any).Message ?? additions.Message;
      const error: any = decorateServiceException(exception, additions);
      if (msg) {
        error.message = msg;
      }

      error.Error = {
        ...error.Error,
        Type: error.Error?.Type,
        Code: error.Error?.Code,
        Message: error.Error?.message ?? error.Error?.Message ?? msg,
      };

      const reqId = error.$metadata.requestId;
      if (reqId) {
        error.RequestId = reqId;
      }

      return error;
    }
    return decorateServiceException(exception, additions);
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
        Error[k === "message" ? "Message" : k] = v;
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

  /**
   * Finds the canonical modeled error using the awsQueryError alias.
   * @param registry - service error registry.
   * @param errorName - awsQueryError name or regular qualified shapeId.
   */
  public findQueryCompatibleError(registry: TypeRegistry, errorName: string) {
    try {
      return registry.getSchema(errorName) as StaticErrorSchema;
    } catch (e) {
      return registry.find(
        (schema) => (NormalizedSchema.of(schema).getMergedTraits().awsQueryError as any)?.[0] === errorName
      ) as StaticErrorSchema;
    }
  }
}
