// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SageMakerRuntimeServiceException as __BaseException } from "./SageMakerRuntimeServiceException";

/**
 * <p>Your request caused an exception with an internal dependency. Contact customer
 *             support. </p>
 * @public
 */
export class InternalDependencyException extends __BaseException {
  readonly name: "InternalDependencyException" = "InternalDependencyException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
 * <p> An internal failure occurred. </p>
 * @public
 */
export class InternalFailure extends __BaseException {
  readonly name: "InternalFailure" = "InternalFailure";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
   * <p>The name of the endpoint that you specified when you created the endpoint using the
   *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>Provides input data, in the format specified in the <code>ContentType</code>
   *     request header. Amazon SageMaker passes all of the data in the body to the model. </p>
   *          <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data
   *         Formats-Inference</a>.</p>
   * @public
   */
  Body: Uint8Array | undefined;

  /**
   * <p>The MIME type of the input data in the request body.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The desired MIME type of the inference response from the model container.</p>
   * @public
   */
  Accept?: string | undefined;

  /**
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
   * @public
   */
  CustomAttributes?: string | undefined;

  /**
   * <p>The model to request for inference when invoking a multi-model endpoint.</p>
   * @public
   */
  TargetModel?: string | undefined;

  /**
   * <p>Specify the production variant to send the inference request to when invoking an
   *         endpoint that is running two or more variants. Note that this parameter overrides the
   *         default behavior for the endpoint, which is to distribute the invocation traffic based
   *         on the variant weights.</p>
   *          <p>For information about how to use variant targeting to perform a/b testing, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html">Test models in
   *             production</a>
   *          </p>
   * @public
   */
  TargetVariant?: string | undefined;

  /**
   * <p>If the endpoint hosts multiple containers and is configured to use direct invocation,
   *         this parameter specifies the host name of the container to invoke.</p>
   * @public
   */
  TargetContainerHostname?: string | undefined;

  /**
   * <p>If you provide a value, it is added to the captured data when you enable data capture
   *             on the endpoint. For information about data capture, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-capture.html">Capture
   *             Data</a>.</p>
   * @public
   */
  InferenceId?: string | undefined;

  /**
   * <p>An optional JMESPath expression used to override the <code>EnableExplanations</code>
   *             parameter of the <code>ClarifyExplainerConfig</code> API. See the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-enable">EnableExplanations</a> section in the developer guide for more information.
   *         </p>
   * @public
   */
  EnableExplanations?: string | undefined;

  /**
   * <p>If the endpoint hosts one or more inference components, this parameter specifies the
   *             name of inference component to invoke.</p>
   * @public
   */
  InferenceComponentName?: string | undefined;

  /**
   * <p>Creates a stateful session or identifies an existing one. You can do one of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>Create a stateful session by specifying the value
   *                     <code>NEW_SESSION</code>.</p>
   *             </li>
   *             <li>
   *                <p>Send your request to an existing stateful session by specifying the ID of that
   *                     session.</p>
   *             </li>
   *          </ul>
   *          <p>With a stateful session, you can send multiple requests to a stateful model. When you
   *             create a session with a stateful model, the model must create the session ID and set the
   *             expiration time. The model must also provide that information in the response to your
   *             request. You can get the ID and timestamp from the <code>NewSessionId</code> response
   *             parameter. For any subsequent request where you specify that session ID, SageMaker routes the request to the same instance that supports the session.</p>
   * @public
   */
  SessionId?: string | undefined;
}

/**
 * @public
 */
export interface InvokeEndpointOutput {
  /**
   * <p>Includes the inference provided by the model. </p>
   *          <p>For information about the format of the response body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data
   *             Formats-Inference</a>.</p>
   *          <p>If the explainer is activated, the body includes the explanations provided by the
   *             model. For more information, see the <b>Response section</b>
   *             under <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response">Invoke the Endpoint</a> in the Developer Guide.</p>
   * @public
   */
  Body: Uint8Array | undefined;

  /**
   * <p>The MIME type of the inference returned from the model container.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>Identifies the production variant that was invoked.</p>
   * @public
   */
  InvokedProductionVariant?: string | undefined;

  /**
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
   * @public
   */
  CustomAttributes?: string | undefined;

  /**
   * <p>If you created a stateful session with your request, the ID and expiration time that
   *             the model assigns to that session.</p>
   * @public
   */
  NewSessionId?: string | undefined;

  /**
   * <p>If you closed a stateful session with your request, the ID of that session.</p>
   * @public
   */
  ClosedSessionId?: string | undefined;
}

/**
 * <p> Model (owned by the customer in the container) returned 4xx or 5xx error code.
 *         </p>
 * @public
 */
export class ModelError extends __BaseException {
  readonly name: "ModelError" = "ModelError";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p> Original status code. </p>
   * @public
   */
  OriginalStatusCode?: number | undefined;

  /**
   * <p> Original message. </p>
   * @public
   */
  OriginalMessage?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the log stream. </p>
   * @public
   */
  LogStreamArn?: string | undefined;
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
 * <p>Either a serverless endpoint variant's resources are still being provisioned, or a
 *             multi-model endpoint is still downloading or loading the target model. Wait and try your
 *             request again.</p>
 * @public
 */
export class ModelNotReadyException extends __BaseException {
  readonly name: "ModelNotReadyException" = "ModelNotReadyException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p> The service is unavailable. Try your call again. </p>
 * @public
 */
export class ServiceUnavailable extends __BaseException {
  readonly name: "ServiceUnavailable" = "ServiceUnavailable";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
 * <p> Inspect your request and try again. </p>
 * @public
 */
export class ValidationError extends __BaseException {
  readonly name: "ValidationError" = "ValidationError";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
   * <p>The name of the endpoint that you specified when you created the endpoint using the
   *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The MIME type of the input data in the request body.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The desired MIME type of the inference response from the model container.</p>
   * @public
   */
  Accept?: string | undefined;

  /**
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
   * @public
   */
  CustomAttributes?: string | undefined;

  /**
   * <p>The identifier for the inference request. Amazon SageMaker will generate an
   *             identifier for you if none is specified. </p>
   * @public
   */
  InferenceId?: string | undefined;

  /**
   * <p>The Amazon S3 URI where the inference request payload is stored.</p>
   * @public
   */
  InputLocation: string | undefined;

  /**
   * <p>Maximum age in seconds a request can be in the queue before it is marked as expired.
   *             The default is 6 hours, or 21,600 seconds.</p>
   * @public
   */
  RequestTTLSeconds?: number | undefined;

  /**
   * <p>Maximum amount of time in seconds a request can be processed before it is marked as
   *             expired. The default is 15 minutes, or 900 seconds.</p>
   * @public
   */
  InvocationTimeoutSeconds?: number | undefined;
}

/**
 * @public
 */
export interface InvokeEndpointAsyncOutput {
  /**
   * <p>Identifier for an inference request. This will be the same as the
   *                 <code>InferenceId</code> specified in the input. Amazon SageMaker will generate
   *             an identifier for you if you do not specify one.</p>
   * @public
   */
  InferenceId?: string | undefined;

  /**
   * <p>The Amazon S3 URI where the inference response payload is stored.</p>
   * @public
   */
  OutputLocation?: string | undefined;

  /**
   * <p>The Amazon S3 URI where the inference failure response payload is
   *             stored.</p>
   * @public
   */
  FailureLocation?: string | undefined;
}

/**
 * <p>The stream processing failed because of an unknown error, exception or failure. Try your request again.</p>
 * @public
 */
export class InternalStreamFailure extends __BaseException {
  readonly name: "InternalStreamFailure" = "InternalStreamFailure";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
   * <p>The name of the endpoint that you specified when you created the endpoint using the
   *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>Provides input data, in the format specified in the <code>ContentType</code>
   *     request header. Amazon SageMaker passes all of the data in the body to the model. </p>
   *          <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data
   *         Formats-Inference</a>.</p>
   * @public
   */
  Body: Uint8Array | undefined;

  /**
   * <p>The MIME type of the input data in the request body.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The desired MIME type of the inference response from the model container.</p>
   * @public
   */
  Accept?: string | undefined;

  /**
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
   * @public
   */
  CustomAttributes?: string | undefined;

  /**
   * <p>Specify the production variant to send the inference request to when invoking an
   *         endpoint that is running two or more variants. Note that this parameter overrides the
   *         default behavior for the endpoint, which is to distribute the invocation traffic based
   *         on the variant weights.</p>
   *          <p>For information about how to use variant targeting to perform a/b testing, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html">Test models in
   *             production</a>
   *          </p>
   * @public
   */
  TargetVariant?: string | undefined;

  /**
   * <p>If the endpoint hosts multiple containers and is configured to use direct invocation,
   *         this parameter specifies the host name of the container to invoke.</p>
   * @public
   */
  TargetContainerHostname?: string | undefined;

  /**
   * <p>An identifier that you assign to your request.</p>
   * @public
   */
  InferenceId?: string | undefined;

  /**
   * <p>If the endpoint hosts one or more inference components, this parameter specifies the
   *             name of inference component to invoke for a streaming response.</p>
   * @public
   */
  InferenceComponentName?: string | undefined;

  /**
   * <p>The ID of a stateful session to handle your request.</p>
   *          <p>You can't create a stateful session by using the
   *                 <code>InvokeEndpointWithResponseStream</code> action. Instead, you can create one by
   *             using the <code>
   *                <a>InvokeEndpoint</a>
   *             </code> action. In your request, you
   *             specify <code>NEW_SESSION</code> for the <code>SessionId</code> request parameter. The
   *             response to that request provides the session ID for the <code>NewSessionId</code>
   *             response parameter.</p>
   * @public
   */
  SessionId?: string | undefined;
}

/**
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
 * @public
 */
export class ModelStreamError extends __BaseException {
  readonly name: "ModelStreamError" = "ModelStreamError";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
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
   * @public
   */
  ErrorCode?: string | undefined;
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
 * <p>A wrapper for pieces of the payload that's returned in response to a streaming
 *         inference request. A streaming inference response consists of one or more payload parts.
 *     </p>
 * @public
 */
export interface PayloadPart {
  /**
   * <p>A blob that contains part of the response for your streaming inference request.</p>
   * @public
   */
  Bytes?: Uint8Array | undefined;
}

/**
 * <p>A stream of payload parts. Each part contains a portion of the response for a
 *             streaming inference request.</p>
 * @public
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
   * <p>A wrapper for pieces of the payload that's returned in response to a streaming
   *         inference request. A streaming inference response consists of one or more payload parts.
   *     </p>
   * @public
   */
  export interface PayloadPartMember {
    PayloadPart: PayloadPart;
    ModelStreamError?: never;
    InternalStreamFailure?: never;
    $unknown?: never;
  }

  /**
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
   * @public
   */
  export interface ModelStreamErrorMember {
    PayloadPart?: never;
    ModelStreamError: ModelStreamError;
    InternalStreamFailure?: never;
    $unknown?: never;
  }

  /**
   * <p>The stream processing failed because of an unknown error, exception or failure. Try your request again.</p>
   * @public
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
   * <p>A stream of payload parts. Each part contains a portion of the response for a
   *             streaming inference request.</p>
   * @public
   */
  Body: AsyncIterable<ResponseStream> | undefined;

  /**
   * <p>The MIME type of the inference returned from the model container.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>Identifies the production variant that was invoked.</p>
   * @public
   */
  InvokedProductionVariant?: string | undefined;

  /**
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
   * @public
   */
  CustomAttributes?: string | undefined;
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
