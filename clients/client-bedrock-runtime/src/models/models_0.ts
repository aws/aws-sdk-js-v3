// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BedrockRuntimeServiceException as __BaseException } from "./BedrockRuntimeServiceException";

/**
 * <p>The request is denied because of missing access permissions.</p>
 * @public
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
 * <p>An internal server error occurred. Retry your request.</p>
 * @public
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
 * @enum
 */
export const Trace = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type Trace = (typeof Trace)[keyof typeof Trace];

/**
 * @public
 */
export interface InvokeModelRequest {
  /**
   * <p>The prompt and inference parameters in the format specified in the <code>contentType</code> in the header. To see the format and content of the request and response bodies for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html">Run inference</a> in the Bedrock User Guide.</p>
   * @public
   */
  body: Uint8Array | undefined;

  /**
   * <p>The MIME type of the input data in the request. The default value is
   *             <code>application/json</code>.</p>
   * @public
   */
  contentType?: string;

  /**
   * <p>The desired MIME type of the inference body in the response. The default value is <code>application/json</code>.</p>
   * @public
   */
  accept?: string;

  /**
   * <p>The unique identifier of the model to invoke to run inference.</p>
   *          <p>The <code>modelId</code> to provide depends on the type of model that you use:</p>
   *          <ul>
   *             <li>
   *                <p>If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns">Amazon Bedrock base model IDs (on-demand throughput)</a> in the Amazon Bedrock User Guide.</p>
   *             </li>
   *             <li>
   *                <p>If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html">Run inference using a Provisioned Throughput</a> in the Amazon Bedrock User Guide.</p>
   *             </li>
   *             <li>
   *                <p>If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html">Use a custom model in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   *             </li>
   *          </ul>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>Specifies whether to enable or disable the Bedrock trace. If enabled, you can see the full Bedrock trace.</p>
   * @public
   */
  trace?: Trace;

  /**
   * <p>The unique identifier of the guardrail that you want to use. If you don't provide a value, no guardrail is applied
   *             to the invocation.</p>
   *          <p>An error will be thrown in the following situations.</p>
   *          <ul>
   *             <li>
   *                <p>You don't provide a guardrail identifier but you specify the <code>amazon-bedrock-guardrailConfig</code> field in the request body.</p>
   *             </li>
   *             <li>
   *                <p>You enable the guardrail but the <code>contentType</code> isn't <code>application/json</code>.</p>
   *             </li>
   *             <li>
   *                <p>You provide a guardrail identifier, but <code>guardrailVersion</code> isn't specified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  guardrailIdentifier?: string;

  /**
   * <p>The version number for the guardrail. The value can also be <code>DRAFT</code>.</p>
   * @public
   */
  guardrailVersion?: string;
}

/**
 * @public
 */
export interface InvokeModelResponse {
  /**
   * <p>Inference response from the model in the format specified in the <code>contentType</code> header. To see the format and content of the request and response bodies for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>.</p>
   * @public
   */
  body: Uint8Array | undefined;

  /**
   * <p>The MIME type of the inference result.</p>
   * @public
   */
  contentType: string | undefined;
}

/**
 * <p>The request failed due to an error while processing the model.</p>
 * @public
 */
export class ModelErrorException extends __BaseException {
  readonly name: "ModelErrorException" = "ModelErrorException";
  readonly $fault: "client" = "client";
  /**
   * <p>The original status code.</p>
   * @public
   */
  originalStatusCode?: number;

  /**
   * <p>The resource name.</p>
   * @public
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
 * <p>The model specified in the request is not ready to serve inference requests.</p>
 * @public
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
 * <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
 * @public
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
 * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 * @public
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
 * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 * @public
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
 * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 * @public
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
 * <p>Input validation failed. Check your request parameters and retry the request.</p>
 * @public
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
   * <p>The prompt and inference parameters in the format specified in the <code>contentType</code> in the header. To see the format and content of the request and response bodies for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html">Run inference</a> in the Bedrock User Guide.</p>
   * @public
   */
  body: Uint8Array | undefined;

  /**
   * <p>The MIME type of the input data in the request. The default value is
   *             <code>application/json</code>.</p>
   * @public
   */
  contentType?: string;

  /**
   * <p>The desired MIME type of the inference body in the response. The default value is
   *             <code>application/json</code>.</p>
   * @public
   */
  accept?: string;

  /**
   * <p>The unique identifier of the model to invoke to run inference.</p>
   *          <p>The <code>modelId</code> to provide depends on the type of model that you use:</p>
   *          <ul>
   *             <li>
   *                <p>If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns">Amazon Bedrock base model IDs (on-demand throughput)</a> in the Amazon Bedrock User Guide.</p>
   *             </li>
   *             <li>
   *                <p>If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html">Run inference using a Provisioned Throughput</a> in the Amazon Bedrock User Guide.</p>
   *             </li>
   *             <li>
   *                <p>If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html">Use a custom model in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
   *             </li>
   *          </ul>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>Specifies whether to enable or disable the Bedrock trace. If enabled, you can see the full Bedrock trace.</p>
   * @public
   */
  trace?: Trace;

  /**
   * <p>The unique identifier of the guardrail that you want to use. If you don't provide a value, no guardrail is applied
   *             to the invocation.</p>
   *          <p>An error is thrown in the following situations.</p>
   *          <ul>
   *             <li>
   *                <p>You don't provide a guardrail identifier but you specify the <code>amazon-bedrock-guardrailConfig</code> field in the request body.</p>
   *             </li>
   *             <li>
   *                <p>You enable the guardrail but the <code>contentType</code> isn't <code>application/json</code>.</p>
   *             </li>
   *             <li>
   *                <p>You provide a guardrail identifier, but <code>guardrailVersion</code> isn't specified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  guardrailIdentifier?: string;

  /**
   * <p>The version number for the guardrail. The value can also be <code>DRAFT</code>.</p>
   * @public
   */
  guardrailVersion?: string;
}

/**
 * <p>Payload content included in the response.</p>
 * @public
 */
export interface PayloadPart {
  /**
   * <p>Base64-encoded bytes of payload data.</p>
   * @public
   */
  bytes?: Uint8Array;
}

/**
 * <p>An error occurred while streaming the response. Retry your request.</p>
 * @public
 */
export class ModelStreamErrorException extends __BaseException {
  readonly name: "ModelStreamErrorException" = "ModelStreamErrorException";
  readonly $fault: "client" = "client";
  /**
   * <p>The original status code.</p>
   * @public
   */
  originalStatusCode?: number;

  /**
   * <p>The original message.</p>
   * @public
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
 * <p>Definition of content in the response stream.</p>
 * @public
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
   * <p>Content included in the response.</p>
   * @public
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
   * <p>An internal server error occurred. Retry your request.</p>
   * @public
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
   * <p>An error occurred while streaming the response. Retry your request.</p>
   * @public
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
   * <p>Input validation failed. Check your request parameters and retry the request.</p>
   * @public
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
   * <p>The number or frequency of requests exceeds the limit. Resubmit your request later.</p>
   * @public
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
   * <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
   * @public
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
   * <p>Inference response from the model in the format specified by the <code>contentType</code> header. To see the format and content of this field for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>.</p>
   * @public
   */
  body: AsyncIterable<ResponseStream> | undefined;

  /**
   * <p>The MIME type of the inference result.</p>
   * @public
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
