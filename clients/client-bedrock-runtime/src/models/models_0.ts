// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BedrockRuntimeServiceException as __BaseException } from "./BedrockRuntimeServiceException";

/**
 * @public
 * <p>The request is denied because of missing access permissions.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * <p>An internal server error occurred. Retry your request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * @public
 */
export interface InvokeModelRequest {
  /**
   * @public
   * <p>Input data in the format specified in the content-type request header. To see the format and content of this field for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>.</p>
   */
  body: Uint8Array | undefined;

  /**
   * @public
   * <p>The MIME type of the input data in the request. The default value is
   *             <code>application/json</code>.</p>
   */
  contentType?: string;

  /**
   * @public
   * <p>The desired MIME type of the inference body in the response. The default value is
   *             <code>application/json</code>.</p>
   */
  accept?: string;

  /**
   * @public
   * <p>Identifier of the model. </p>
   */
  modelId: string | undefined;
}

/**
 * @public
 */
export interface InvokeModelResponse {
  /**
   * @public
   * <p>Inference response from the model in the format specified in the content-type header field. To see the format and content of this field for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>.</p>
   */
  body: Uint8Array | undefined;

  /**
   * @public
   * <p>The MIME type of the inference result.</p>
   */
  contentType: string | undefined;
}

/**
 * @public
 * <p>The request failed due to an error while processing the model.</p>
 */
export class ModelErrorException extends __BaseException {
  readonly name: "ModelErrorException" = "ModelErrorException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The original status code.</p>
   */
  originalStatusCode?: number;

  /**
   * @public
   * <p>The resource name.</p>
   */
  resourceName?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelErrorException, __BaseException>) {
    super({
      name: "ModelErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelErrorException.prototype);
    this.originalStatusCode = opts.originalStatusCode;
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 * <p>The model specified in the request is not ready to serve inference requests.</p>
 */
export class ModelNotReadyException extends __BaseException {
  readonly name: "ModelNotReadyException" = "ModelNotReadyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelNotReadyException, __BaseException>) {
    super({
      name: "ModelNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelNotReadyException.prototype);
  }
}

/**
 * @public
 * <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
 */
export class ModelTimeoutException extends __BaseException {
  readonly name: "ModelTimeoutException" = "ModelTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelTimeoutException, __BaseException>) {
    super({
      name: "ModelTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelTimeoutException.prototype);
  }
}

/**
 * @public
 * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * @public
 * <p>Input validation failed. Check your request parameters and retry the request.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface InvokeModelWithResponseStreamRequest {
  /**
   * @public
   * <p>Inference input in the format specified by the
   *          content-type. To see the format and content of this field for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>.</p>
   */
  body: Uint8Array | undefined;

  /**
   * @public
   * <p>The MIME type of the input data in the request. The default value is
   *             <code>application/json</code>.</p>
   */
  contentType?: string;

  /**
   * @public
   * <p>The desired MIME type of the inference body in the response. The default value is
   *             <code>application/json</code>.</p>
   */
  accept?: string;

  /**
   * @public
   * <p>Id of the model to invoke using the streaming request.</p>
   */
  modelId: string | undefined;
}

/**
 * @public
 * <p>Payload content included in the response.</p>
 */
export interface PayloadPart {
  /**
   * @public
   * <p>Base64-encoded bytes of payload data.</p>
   */
  bytes?: Uint8Array;
}

/**
 * @public
 * <p>An error occurred while streaming the response.</p>
 */
export class ModelStreamErrorException extends __BaseException {
  readonly name: "ModelStreamErrorException" = "ModelStreamErrorException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The original status code.</p>
   */
  originalStatusCode?: number;

  /**
   * @public
   * <p>The original message.</p>
   */
  originalMessage?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelStreamErrorException, __BaseException>) {
    super({
      name: "ModelStreamErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelStreamErrorException.prototype);
    this.originalStatusCode = opts.originalStatusCode;
    this.originalMessage = opts.originalMessage;
  }
}

/**
 * @public
 * <p>Definition of content in the response stream.</p>
 */
export type ResponseStream =
  | ResponseStream.ChunkMember
  | ResponseStream.InternalServerExceptionMember
  | ResponseStream.ModelStreamErrorExceptionMember
  | ResponseStream.ModelTimeoutExceptionMember
  | ResponseStream.ThrottlingExceptionMember
  | ResponseStream.ValidationExceptionMember
  | ResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace ResponseStream {
  /**
   * @public
   * <p>Content included in the response.</p>
   */
  export interface ChunkMember {
    chunk: PayloadPart;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An internal server error occurred. Retry your request.</p>
   */
  export interface InternalServerExceptionMember {
    chunk?: never;
    internalServerException: InternalServerException;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>An error occurred while streaming the response.</p>
   */
  export interface ModelStreamErrorExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException: ModelStreamErrorException;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Input validation failed. Check your request parameters and retry the request.</p>
   */
  export interface ValidationExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException: ValidationException;
    throttlingException?: never;
    modelTimeoutException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   */
  export interface ThrottlingExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException: ThrottlingException;
    modelTimeoutException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
   */
  export interface ModelTimeoutExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException: ModelTimeoutException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    chunk: (value: PayloadPart) => T;
    internalServerException: (value: InternalServerException) => T;
    modelStreamErrorException: (value: ModelStreamErrorException) => T;
    validationException: (value: ValidationException) => T;
    throttlingException: (value: ThrottlingException) => T;
    modelTimeoutException: (value: ModelTimeoutException) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ResponseStream, visitor: Visitor<T>): T => {
    if (value.chunk !== undefined) return visitor.chunk(value.chunk);
    if (value.internalServerException !== undefined)
      return visitor.internalServerException(value.internalServerException);
    if (value.modelStreamErrorException !== undefined)
      return visitor.modelStreamErrorException(value.modelStreamErrorException);
    if (value.validationException !== undefined) return visitor.validationException(value.validationException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    if (value.modelTimeoutException !== undefined) return visitor.modelTimeoutException(value.modelTimeoutException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface InvokeModelWithResponseStreamResponse {
  /**
   * @public
   * <p>Inference response from the model in the format specified by Content-Type. To see the format and content of this field for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>.</p>
   */
  body: AsyncIterable<ResponseStream> | undefined;

  /**
   * @public
   * <p>The MIME type of the inference result.</p>
   */
  contentType: string | undefined;
}

/**
 * @internal
 */
export const InvokeModelRequestFilterSensitiveLog = (obj: InvokeModelRequest): any => ({
  ...obj,
  ...(obj.body && { body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeModelResponseFilterSensitiveLog = (obj: InvokeModelResponse): any => ({
  ...obj,
  ...(obj.body && { body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeModelWithResponseStreamRequestFilterSensitiveLog = (
  obj: InvokeModelWithResponseStreamRequest
): any => ({
  ...obj,
  ...(obj.body && { body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PayloadPartFilterSensitiveLog = (obj: PayloadPart): any => ({
  ...obj,
  ...(obj.bytes && { bytes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResponseStreamFilterSensitiveLog = (obj: ResponseStream): any => {
  if (obj.chunk !== undefined) return { chunk: SENSITIVE_STRING };
  if (obj.internalServerException !== undefined) return { internalServerException: obj.internalServerException };
  if (obj.modelStreamErrorException !== undefined) return { modelStreamErrorException: obj.modelStreamErrorException };
  if (obj.validationException !== undefined) return { validationException: obj.validationException };
  if (obj.throttlingException !== undefined) return { throttlingException: obj.throttlingException };
  if (obj.modelTimeoutException !== undefined) return { modelTimeoutException: obj.modelTimeoutException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvokeModelWithResponseStreamResponseFilterSensitiveLog = (
  obj: InvokeModelWithResponseStreamResponse
): any => ({
  ...obj,
  ...(obj.body && { body: "STREAMING_CONTENT" }),
});
