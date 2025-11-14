import { NormalizedSchema, TypeRegistry } from "@smithy/core/schema";
import { decorateServiceException, ServiceException as SDKBaseServiceException } from "@smithy/smithy-client";
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
    let namespace = defaultNamespace;
    let errorName = errorIdentifier;
    if (errorIdentifier.includes("#")) {
      [namespace, errorName] = errorIdentifier.split("#");
    }

    const errorMetadata: ErrorMetadataBearer = {
      $metadata: metadata,
      $fault: response.statusCode < 500 ? ("client" as const) : ("server" as const),
    };

    const registry = TypeRegistry.for(namespace);

    try {
      const errorSchema =
        getErrorSchema?.(registry, errorName) ?? (registry.getSchema(errorIdentifier) as StaticErrorSchema);
      return { errorSchema, errorMetadata };
    } catch (e) {
      dataObject.message = dataObject.message ?? dataObject.Message ?? "UnknownError";
      const synthetic = TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace);
      const baseExceptionSchema = synthetic.getBaseException();
      if (baseExceptionSchema) {
        const ErrorCtor = synthetic.getErrorCtor(baseExceptionSchema) ?? Error;
        throw this.decorateServiceException(
          Object.assign(new ErrorCtor({ name: errorName }), errorMetadata),
          dataObject
        );
      }
      throw this.decorateServiceException(Object.assign(new Error(errorName), errorMetadata), dataObject);
    }
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
      const error = decorateServiceException(exception, additions);
      if (msg) {
        (error as any).Message = msg;
        (error as any).message = msg;
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
