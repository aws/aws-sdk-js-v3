// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SageMakerRuntimeServiceException as __BaseException } from "./SageMakerRuntimeServiceException";

/**
 * @public
 * <p>Your request caused an exception with an internal dependency. Contact customer
 *             support. </p>
 */
export class InternalDependencyException extends __BaseException {
  readonly name: "InternalDependencyException" = "InternalDependencyException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalDependencyException, __BaseException>) {
    super({
      name: "InternalDependencyException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalDependencyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p> An internal failure occurred. </p>
 */
export class InternalFailure extends __BaseException {
  readonly name: "InternalFailure" = "InternalFailure";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailure, __BaseException>) {
    super({
      name: "InternalFailure",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailure.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface InvokeEndpointInput {
  /**
   * @public
   * <p>The name of the endpoint that you specified when you created the endpoint using the
   *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>Provides input data, in the format specified in the <code>ContentType</code>
   *     request header. Amazon SageMaker passes all of the data in the body to the model. </p>
   *          <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data
   *         Formats-Inference</a>.</p>
   */
  Body: Uint8Array | undefined;

  /**
   * @public
   * <p>The MIME type of the input data in the request body.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The desired MIME type of the inference response from the model container.</p>
   */
  Accept?: string;

  /**
   * @public
   * <p>Provides additional information about a request for an inference submitted to a model
   *         hosted at an Amazon SageMaker endpoint. The information is an opaque value that is forwarded
   *         verbatim. You could use this value, for example, to provide an ID that you can use to
   *         track a request or to provide other metadata that a service endpoint was programmed to
   *         process. The value must consist of no more than 1024 visible US-ASCII characters as
   *         specified in <a href="https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value Components</a> of the Hypertext Transfer Protocol
   *         (HTTP/1.1). </p>
   *          <p>The code in your model is responsible for setting or updating any custom attributes in
   *         the response. If your code does not set this value in the response, an empty value is
   *         returned. For example, if a custom attribute represents the trace ID, your model can
   *         prepend the custom attribute with <code>Trace ID:</code> in your post-processing
   *         function. </p>
   *          <p>This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker
   *         Python SDK. </p>
   */
  CustomAttributes?: string;

  /**
   * @public
   * <p>The model to request for inference when invoking a multi-model endpoint.</p>
   */
  TargetModel?: string;

  /**
   * @public
   * <p>Specify the production variant to send the inference request to when invoking an
   *         endpoint that is running two or more variants. Note that this parameter overrides the
   *         default behavior for the endpoint, which is to distribute the invocation traffic based
   *         on the variant weights.</p>
   *          <p>For information about how to use variant targeting to perform a/b testing, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html">Test models in
   *             production</a>
   *          </p>
   */
  TargetVariant?: string;

  /**
   * @public
   * <p>If the endpoint hosts multiple containers and is configured to use direct invocation,
   *         this parameter specifies the host name of the container to invoke.</p>
   */
  TargetContainerHostname?: string;

  /**
   * @public
   * <p>If you provide a value, it is added to the captured data when you enable data capture
   *             on the endpoint. For information about data capture, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-capture.html">Capture
   *             Data</a>.</p>
   */
  InferenceId?: string;

  /**
   * @public
   * <p>An optional JMESPath expression used to override the <code>EnableExplanations</code>
   *             parameter of the <code>ClarifyExplainerConfig</code> API. See the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-enable">EnableExplanations</a> section in the developer guide for more information.
   *         </p>
   */
  EnableExplanations?: string;
}

/**
 * @public
 */
export interface InvokeEndpointOutput {
  /**
   * @public
   * <p>Includes the inference provided by the model. </p>
   *          <p>For information about the format of the response body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data
   *             Formats-Inference</a>.</p>
   *          <p>If the explainer is activated, the body includes the explanations provided by the
   *             model. For more information, see the <b>Response section</b>
   *             under <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response">Invoke the Endpoint</a> in the Developer Guide.</p>
   */
  Body: Uint8Array | undefined;

  /**
   * @public
   * <p>The MIME type of the inference returned from the model container.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>Identifies the production variant that was invoked.</p>
   */
  InvokedProductionVariant?: string;

  /**
   * @public
   * <p>Provides additional information in the response about the inference returned by a
   *         model hosted at an Amazon SageMaker endpoint. The information is an opaque value that is
   *         forwarded verbatim. You could use this value, for example, to return an ID received in
   *         the <code>CustomAttributes</code> header of a request or other metadata that a service
   *         endpoint was programmed to produce. The value must consist of no more than 1024 visible
   *         US-ASCII characters as specified in <a href="https://tools.ietf.org/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value
   *             Components</a> of the Hypertext Transfer Protocol (HTTP/1.1). If the customer
   *         wants the custom attribute returned, the model must set the custom attribute to be
   *         included on the way back. </p>
   *          <p>The code in your model is responsible for setting or updating any custom attributes in
   *         the response. If your code does not set this value in the response, an empty value is
   *         returned. For example, if a custom attribute represents the trace ID, your model can
   *         prepend the custom attribute with <code>Trace ID:</code> in your post-processing
   *         function.</p>
   *          <p>This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker
   *         Python SDK.</p>
   */
  CustomAttributes?: string;
}

/**
 * @public
 * <p> Model (owned by the customer in the container) returned 4xx or 5xx error code.
 *         </p>
 */
export class ModelError extends __BaseException {
  readonly name: "ModelError" = "ModelError";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p> Original status code. </p>
   */
  OriginalStatusCode?: number;

  /**
   * @public
   * <p> Original message. </p>
   */
  OriginalMessage?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the log stream. </p>
   */
  LogStreamArn?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelError, __BaseException>) {
    super({
      name: "ModelError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelError.prototype);
    this.Message = opts.Message;
    this.OriginalStatusCode = opts.OriginalStatusCode;
    this.OriginalMessage = opts.OriginalMessage;
    this.LogStreamArn = opts.LogStreamArn;
  }
}

/**
 * @public
 * <p>Either a serverless endpoint variant's resources are still being provisioned, or a
 *             multi-model endpoint is still downloading or loading the target model. Wait and try your
 *             request again.</p>
 */
export class ModelNotReadyException extends __BaseException {
  readonly name: "ModelNotReadyException" = "ModelNotReadyException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p> The service is unavailable. Try your call again. </p>
 */
export class ServiceUnavailable extends __BaseException {
  readonly name: "ServiceUnavailable" = "ServiceUnavailable";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailable, __BaseException>) {
    super({
      name: "ServiceUnavailable",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailable.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p> Inspect your request and try again. </p>
 */
export class ValidationError extends __BaseException {
  readonly name: "ValidationError" = "ValidationError";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationError, __BaseException>) {
    super({
      name: "ValidationError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface InvokeEndpointAsyncInput {
  /**
   * @public
   * <p>The name of the endpoint that you specified when you created the endpoint using the
   *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>The MIME type of the input data in the request body.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The desired MIME type of the inference response from the model container.</p>
   */
  Accept?: string;

  /**
   * @public
   * <p>Provides additional information about a request for an inference submitted to a model
   *         hosted at an Amazon SageMaker endpoint. The information is an opaque value that is forwarded
   *         verbatim. You could use this value, for example, to provide an ID that you can use to
   *         track a request or to provide other metadata that a service endpoint was programmed to
   *         process. The value must consist of no more than 1024 visible US-ASCII characters as
   *         specified in <a href="https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value Components</a> of the Hypertext Transfer Protocol
   *         (HTTP/1.1). </p>
   *          <p>The code in your model is responsible for setting or updating any custom attributes in
   *         the response. If your code does not set this value in the response, an empty value is
   *         returned. For example, if a custom attribute represents the trace ID, your model can
   *         prepend the custom attribute with <code>Trace ID:</code> in your post-processing
   *         function. </p>
   *          <p>This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker
   *         Python SDK. </p>
   */
  CustomAttributes?: string;

  /**
   * @public
   * <p>The identifier for the inference request. Amazon SageMaker will generate an
   *             identifier for you if none is specified. </p>
   */
  InferenceId?: string;

  /**
   * @public
   * <p>The Amazon S3 URI where the inference request payload is stored.</p>
   */
  InputLocation: string | undefined;

  /**
   * @public
   * <p>Maximum age in seconds a request can be in the queue before it is marked as expired.
   *             The default is 6 hours, or 21,600 seconds.</p>
   */
  RequestTTLSeconds?: number;

  /**
   * @public
   * <p>Maximum amount of time in seconds a request can be processed before it is marked as
   *             expired. The default is 15 minutes, or 900 seconds.</p>
   */
  InvocationTimeoutSeconds?: number;
}

/**
 * @public
 */
export interface InvokeEndpointAsyncOutput {
  /**
   * @public
   * <p>Identifier for an inference request. This will be the same as the
   *                 <code>InferenceId</code> specified in the input. Amazon SageMaker will generate
   *             an identifier for you if you do not specify one.</p>
   */
  InferenceId?: string;

  /**
   * @public
   * <p>The Amazon S3 URI where the inference response payload is stored.</p>
   */
  OutputLocation?: string;

  /**
   * @public
   * <p>The Amazon S3 URI where the inference failure response payload is
   *             stored.</p>
   */
  FailureLocation?: string;
}

/**
 * @public
 * <p>The stream processing failed because of an unknown error, exception or failure. Try your request again.</p>
 */
export class InternalStreamFailure extends __BaseException {
  readonly name: "InternalStreamFailure" = "InternalStreamFailure";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalStreamFailure, __BaseException>) {
    super({
      name: "InternalStreamFailure",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalStreamFailure.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface InvokeEndpointWithResponseStreamInput {
  /**
   * @public
   * <p>The name of the endpoint that you specified when you created the endpoint using the
   *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API.</p>
   */
  EndpointName: string | undefined;

  /**
   * @public
   * <p>Provides input data, in the format specified in the <code>ContentType</code>
   *     request header. Amazon SageMaker passes all of the data in the body to the model. </p>
   *          <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data
   *         Formats-Inference</a>.</p>
   */
  Body: Uint8Array | undefined;

  /**
   * @public
   * <p>The MIME type of the input data in the request body.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The desired MIME type of the inference response from the model container.</p>
   */
  Accept?: string;

  /**
   * @public
   * <p>Provides additional information about a request for an inference submitted to a model
   *         hosted at an Amazon SageMaker endpoint. The information is an opaque value that is forwarded
   *         verbatim. You could use this value, for example, to provide an ID that you can use to
   *         track a request or to provide other metadata that a service endpoint was programmed to
   *         process. The value must consist of no more than 1024 visible US-ASCII characters as
   *         specified in <a href="https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value Components</a> of the Hypertext Transfer Protocol
   *         (HTTP/1.1). </p>
   *          <p>The code in your model is responsible for setting or updating any custom attributes in
   *         the response. If your code does not set this value in the response, an empty value is
   *         returned. For example, if a custom attribute represents the trace ID, your model can
   *         prepend the custom attribute with <code>Trace ID:</code> in your post-processing
   *         function. </p>
   *          <p>This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker
   *         Python SDK. </p>
   */
  CustomAttributes?: string;

  /**
   * @public
   * <p>Specify the production variant to send the inference request to when invoking an
   *         endpoint that is running two or more variants. Note that this parameter overrides the
   *         default behavior for the endpoint, which is to distribute the invocation traffic based
   *         on the variant weights.</p>
   *          <p>For information about how to use variant targeting to perform a/b testing, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html">Test models in
   *             production</a>
   *          </p>
   */
  TargetVariant?: string;

  /**
   * @public
   * <p>If the endpoint hosts multiple containers and is configured to use direct invocation,
   *         this parameter specifies the host name of the container to invoke.</p>
   */
  TargetContainerHostname?: string;

  /**
   * @public
   * <p>An identifier that you assign to your request.</p>
   */
  InferenceId?: string;
}

/**
 * @public
 * <p> An error occurred while streaming the response body. This error can have the
 *     following error codes:</p>
 *          <dl>
 *             <dt>ModelInvocationTimeExceeded</dt>
 *             <dd>
 *                <p>The model failed to finish sending the response within the timeout period allowed by Amazon SageMaker.</p>
 *             </dd>
 *             <dt>StreamBroken</dt>
 *             <dd>
 *                <p>The Transmission Control Protocol (TCP) connection between the client and
 *                     the model was reset or closed.</p>
 *             </dd>
 *          </dl>
 */
export class ModelStreamError extends __BaseException {
  readonly name: "ModelStreamError" = "ModelStreamError";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>This error can have the following error codes:</p>
   *          <dl>
   *             <dt>ModelInvocationTimeExceeded</dt>
   *             <dd>
   *                <p>The model failed to finish sending the response within the timeout period
   *                         allowed by Amazon SageMaker.</p>
   *             </dd>
   *             <dt>StreamBroken</dt>
   *             <dd>
   *                <p>The Transmission Control Protocol (TCP) connection between the client and
   *                         the model was reset or closed.</p>
   *             </dd>
   *          </dl>
   */
  ErrorCode?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelStreamError, __BaseException>) {
    super({
      name: "ModelStreamError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelStreamError.prototype);
    this.Message = opts.Message;
    this.ErrorCode = opts.ErrorCode;
  }
}

/**
 * @public
 * <p>A wrapper for pieces of the payload that's returned in response to a streaming
 *         inference request. A streaming inference response consists of one or more payload parts.
 *     </p>
 */
export interface PayloadPart {
  /**
   * @public
   * <p>A blob that contains part of the response for your streaming inference request.</p>
   */
  Bytes?: Uint8Array;
}

/**
 * @public
 * <p>A stream of payload parts. Each part contains a portion of the response for a
 *             streaming inference request.</p>
 */
export type ResponseStream =
  | ResponseStream.InternalStreamFailureMember
  | ResponseStream.ModelStreamErrorMember
  | ResponseStream.PayloadPartMember
  | ResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace ResponseStream {
  /**
   * @public
   * <p>A wrapper for pieces of the payload that's returned in response to a streaming
   *         inference request. A streaming inference response consists of one or more payload parts.
   *     </p>
   */
  export interface PayloadPartMember {
    PayloadPart: PayloadPart;
    ModelStreamError?: never;
    InternalStreamFailure?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p> An error occurred while streaming the response body. This error can have the
   *     following error codes:</p>
   *          <dl>
   *             <dt>ModelInvocationTimeExceeded</dt>
   *             <dd>
   *                <p>The model failed to finish sending the response within the timeout period allowed by Amazon SageMaker.</p>
   *             </dd>
   *             <dt>StreamBroken</dt>
   *             <dd>
   *                <p>The Transmission Control Protocol (TCP) connection between the client and
   *                     the model was reset or closed.</p>
   *             </dd>
   *          </dl>
   */
  export interface ModelStreamErrorMember {
    PayloadPart?: never;
    ModelStreamError: ModelStreamError;
    InternalStreamFailure?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The stream processing failed because of an unknown error, exception or failure. Try your request again.</p>
   */
  export interface InternalStreamFailureMember {
    PayloadPart?: never;
    ModelStreamError?: never;
    InternalStreamFailure: InternalStreamFailure;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PayloadPart?: never;
    ModelStreamError?: never;
    InternalStreamFailure?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    PayloadPart: (value: PayloadPart) => T;
    ModelStreamError: (value: ModelStreamError) => T;
    InternalStreamFailure: (value: InternalStreamFailure) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ResponseStream, visitor: Visitor<T>): T => {
    if (value.PayloadPart !== undefined) return visitor.PayloadPart(value.PayloadPart);
    if (value.ModelStreamError !== undefined) return visitor.ModelStreamError(value.ModelStreamError);
    if (value.InternalStreamFailure !== undefined) return visitor.InternalStreamFailure(value.InternalStreamFailure);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface InvokeEndpointWithResponseStreamOutput {
  /**
   * @public
   * <p>A stream of payload parts. Each part contains a portion of the response for a
   *             streaming inference request.</p>
   */
  Body: AsyncIterable<ResponseStream> | undefined;

  /**
   * @public
   * <p>The MIME type of the inference returned from the model container.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>Identifies the production variant that was invoked.</p>
   */
  InvokedProductionVariant?: string;

  /**
   * @public
   * <p>Provides additional information in the response about the inference returned by a
   *         model hosted at an Amazon SageMaker endpoint. The information is an opaque value that is
   *         forwarded verbatim. You could use this value, for example, to return an ID received in
   *         the <code>CustomAttributes</code> header of a request or other metadata that a service
   *         endpoint was programmed to produce. The value must consist of no more than 1024 visible
   *         US-ASCII characters as specified in <a href="https://tools.ietf.org/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value
   *             Components</a> of the Hypertext Transfer Protocol (HTTP/1.1). If the customer
   *         wants the custom attribute returned, the model must set the custom attribute to be
   *         included on the way back. </p>
   *          <p>The code in your model is responsible for setting or updating any custom attributes in
   *         the response. If your code does not set this value in the response, an empty value is
   *         returned. For example, if a custom attribute represents the trace ID, your model can
   *         prepend the custom attribute with <code>Trace ID:</code> in your post-processing
   *         function.</p>
   *          <p>This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker
   *         Python SDK.</p>
   */
  CustomAttributes?: string;
}

/**
 * @internal
 */
export const InvokeEndpointInputFilterSensitiveLog = (obj: InvokeEndpointInput): any => ({
  ...obj,
  ...(obj.Body && { Body: SENSITIVE_STRING }),
  ...(obj.CustomAttributes && { CustomAttributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeEndpointOutputFilterSensitiveLog = (obj: InvokeEndpointOutput): any => ({
  ...obj,
  ...(obj.Body && { Body: SENSITIVE_STRING }),
  ...(obj.CustomAttributes && { CustomAttributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeEndpointAsyncInputFilterSensitiveLog = (obj: InvokeEndpointAsyncInput): any => ({
  ...obj,
  ...(obj.CustomAttributes && { CustomAttributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeEndpointWithResponseStreamInputFilterSensitiveLog = (
  obj: InvokeEndpointWithResponseStreamInput
): any => ({
  ...obj,
  ...(obj.Body && { Body: SENSITIVE_STRING }),
  ...(obj.CustomAttributes && { CustomAttributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PayloadPartFilterSensitiveLog = (obj: PayloadPart): any => ({
  ...obj,
  ...(obj.Bytes && { Bytes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResponseStreamFilterSensitiveLog = (obj: ResponseStream): any => {
  if (obj.PayloadPart !== undefined) return { PayloadPart: PayloadPartFilterSensitiveLog(obj.PayloadPart) };
  if (obj.ModelStreamError !== undefined) return { ModelStreamError: obj.ModelStreamError };
  if (obj.InternalStreamFailure !== undefined) return { InternalStreamFailure: obj.InternalStreamFailure };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvokeEndpointWithResponseStreamOutputFilterSensitiveLog = (
  obj: InvokeEndpointWithResponseStreamOutput
): any => ({
  ...obj,
  ...(obj.Body && { Body: "STREAMING_CONTENT" }),
  ...(obj.CustomAttributes && { CustomAttributes: SENSITIVE_STRING }),
});
