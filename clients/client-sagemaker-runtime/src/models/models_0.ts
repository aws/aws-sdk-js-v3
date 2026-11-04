// smithy-typescript generated code
import type { InternalStreamFailure, ModelStreamError } from "./errors";

/**
 * @public
 */
export interface InvokeEndpointInput {
  /**
   * The name of the endpoint that you specified when you created the endpoint using the [CreateEndpoint](https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html) API.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * Provides input data, in the format specified in the `ContentType` request header. Amazon SageMaker AI passes all of the data in the body to the model.
   *
   * For information about the format of the request body, see [Common Data Formats-Inference](https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html).
   *
   * @public
   */
  Body: Uint8Array | undefined;

  /**
   * The MIME type of the input data in the request body.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The desired MIME type of the inference response from the model container.
   *
   * @public
   */
  Accept?: string | undefined;

  /**
   * Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker AI endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in [Section 3.3.6. Field Value Components](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) of the Hypertext Transfer Protocol (HTTP/1.1).
   *
   * The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with `Trace ID:` in your post-processing function.
   *
   * This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker AI Python SDK.
   *
   * @public
   */
  CustomAttributes?: string | undefined;

  /**
   * The model to request for inference when invoking a multi-model endpoint.
   *
   * @public
   */
  TargetModel?: string | undefined;

  /**
   * Specify the production variant to send the inference request to when invoking an endpoint that is running two or more variants. Note that this parameter overrides the default behavior for the endpoint, which is to distribute the invocation traffic based on the variant weights.
   *
   * For information about how to use variant targeting to perform a/b testing, see [Test models in production](https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html)
   *
   * @public
   */
  TargetVariant?: string | undefined;

  /**
   * If the endpoint hosts multiple containers and is configured to use direct invocation, this parameter specifies the host name of the container to invoke.
   *
   * @public
   */
  TargetContainerHostname?: string | undefined;

  /**
   * If you provide a value, it is added to the captured data when you enable data capture on the endpoint. For information about data capture, see [Capture Data](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-capture.html).
   *
   * @public
   */
  InferenceId?: string | undefined;

  /**
   * An optional JMESPath expression used to override the `EnableExplanations` parameter of the `ClarifyExplainerConfig` API. See the [EnableExplanations](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-enable) section in the developer guide for more information.
   *
   * @public
   */
  EnableExplanations?: string | undefined;

  /**
   * If the endpoint hosts one or more inference components, this parameter specifies the name of inference component to invoke.
   *
   * @public
   */
  InferenceComponentName?: string | undefined;

  /**
   * Creates a stateful session or identifies an existing one. You can do one of the following:
   *
   * - Create a stateful session by specifying the value `NEW_SESSION`.
   * - Send your request to an existing stateful session by specifying the ID of that session.
   *
   * With a stateful session, you can send multiple requests to a stateful model. When you create a session with a stateful model, the model must create the session ID and set the expiration time. The model must also provide that information in the response to your request. You can get the ID and timestamp from the `NewSessionId` response parameter. For any subsequent request where you specify that session ID, SageMaker AI routes the request to the same instance that supports the session.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * An optional, stable identifier that serves as a routing hint for prefix-aware routing. The service routes requests with the same prefix and the same identifier to the same instance. If requests from different applications might have the same prompt prefix, set a different identifier for each application to differentiate their routing decisions.
   *
   * Applies only to endpoints configured with a `RoutingStrategy` of `PREFIX_AWARE`.
   *
   * @public
   */
  PrefixAwareId?: string | undefined;
}

/**
 * @public
 */
export interface InvokeEndpointOutput {
  /**
   * Includes the inference provided by the model.
   *
   * For information about the format of the response body, see [Common Data Formats-Inference](https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html).
   *
   * If the explainer is activated, the body includes the explanations provided by the model. For more information, see the **Response section** under [Invoke the Endpoint](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response) in the Developer Guide.
   *
   * @public
   */
  Body: Uint8Array | undefined;

  /**
   * The MIME type of the inference returned from the model container.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Identifies the production variant that was invoked.
   *
   * @public
   */
  InvokedProductionVariant?: string | undefined;

  /**
   * Provides additional information in the response about the inference returned by a model hosted at an Amazon SageMaker AI endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to return an ID received in the `CustomAttributes` header of a request or other metadata that a service endpoint was programmed to produce. The value must consist of no more than 1024 visible US-ASCII characters as specified in [Section 3.3.6. Field Value Components](https://tools.ietf.org/html/rfc7230#section-3.2.6) of the Hypertext Transfer Protocol (HTTP/1.1). If the customer wants the custom attribute returned, the model must set the custom attribute to be included on the way back.
   *
   * The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with `Trace ID:` in your post-processing function.
   *
   * This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker AI Python SDK.
   *
   * @public
   */
  CustomAttributes?: string | undefined;

  /**
   * If you created a stateful session with your request, the ID and expiration time that the model assigns to that session.
   *
   * @public
   */
  NewSessionId?: string | undefined;

  /**
   * If you closed a stateful session with your request, the ID of that session.
   *
   * @public
   */
  ClosedSessionId?: string | undefined;
}

/**
 * @public
 */
export interface InvokeEndpointAsyncInput {
  /**
   * The name of the endpoint that you specified when you created the endpoint using the [CreateEndpoint](https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html) API.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The MIME type of the input data in the request body.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The desired MIME type of the inference response from the model container.
   *
   * @public
   */
  Accept?: string | undefined;

  /**
   * Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker AI endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in [Section 3.3.6. Field Value Components](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) of the Hypertext Transfer Protocol (HTTP/1.1).
   *
   * The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with `Trace ID:` in your post-processing function.
   *
   * This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker AI Python SDK.
   *
   * @public
   */
  CustomAttributes?: string | undefined;

  /**
   * The identifier for the inference request. Amazon SageMaker AI will generate an identifier for you if none is specified.
   *
   * @public
   */
  InferenceId?: string | undefined;

  /**
   * The Amazon S3 URI where the inference request payload is stored.
   *
   * @public
   */
  InputLocation?: string | undefined;

  /**
   * The path extension that is appended to the Amazon S3 output path where the inference response payload is stored.
   *
   * @public
   */
  S3OutputPathExtension?: string | undefined;

  /**
   * The filename for the inference response payload stored in Amazon S3. If not specified, Amazon SageMaker AI generates a filename based on the inference ID.
   *
   * @public
   */
  Filename?: string | undefined;

  /**
   * Maximum age in seconds a request can be in the queue before it is marked as expired. The default is 6 hours, or 21,600 seconds.
   *
   * @public
   */
  RequestTTLSeconds?: number | undefined;

  /**
   * Maximum amount of time in seconds a request can be processed before it is marked as expired. The default is 15 minutes, or 900 seconds.
   *
   * @public
   */
  InvocationTimeoutSeconds?: number | undefined;

  /**
   * Provides inline input data for the inference request, in the format specified in the `ContentType` request header. Use this parameter to send the request payload directly in the API call instead of uploading it to Amazon S3 and referencing it with `InputLocation`. The inline payload can be up to 128,000 bytes.
   *
   * `Body` and `InputLocation` are mutually exclusive. Provide exactly one of them.
   *
   * For information about the format of the request body, see [Common Data Formats-Inference](https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html).
   *
   * @public
   */
  Body?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface InvokeEndpointAsyncOutput {
  /**
   * Identifier for an inference request. This will be the same as the `InferenceId` specified in the input. Amazon SageMaker AI will generate an identifier for you if you do not specify one.
   *
   * @public
   */
  InferenceId?: string | undefined;

  /**
   * The Amazon S3 URI where the inference response payload is stored.
   *
   * @public
   */
  OutputLocation?: string | undefined;

  /**
   * The Amazon S3 URI where the inference failure response payload is stored.
   *
   * @public
   */
  FailureLocation?: string | undefined;
}

/**
 * @public
 */
export interface InvokeEndpointWithResponseStreamInput {
  /**
   * The name of the endpoint that you specified when you created the endpoint using the [CreateEndpoint](https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html) API.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * Provides input data, in the format specified in the `ContentType` request header. Amazon SageMaker AI passes all of the data in the body to the model.
   *
   * For information about the format of the request body, see [Common Data Formats-Inference](https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html).
   *
   * @public
   */
  Body: Uint8Array | undefined;

  /**
   * The MIME type of the input data in the request body.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The desired MIME type of the inference response from the model container.
   *
   * @public
   */
  Accept?: string | undefined;

  /**
   * Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker AI endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in [Section 3.3.6. Field Value Components](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6) of the Hypertext Transfer Protocol (HTTP/1.1).
   *
   * The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with `Trace ID:` in your post-processing function.
   *
   * This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker AI Python SDK.
   *
   * @public
   */
  CustomAttributes?: string | undefined;

  /**
   * Specify the production variant to send the inference request to when invoking an endpoint that is running two or more variants. Note that this parameter overrides the default behavior for the endpoint, which is to distribute the invocation traffic based on the variant weights.
   *
   * For information about how to use variant targeting to perform a/b testing, see [Test models in production](https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html)
   *
   * @public
   */
  TargetVariant?: string | undefined;

  /**
   * If the endpoint hosts multiple containers and is configured to use direct invocation, this parameter specifies the host name of the container to invoke.
   *
   * @public
   */
  TargetContainerHostname?: string | undefined;

  /**
   * An identifier that you assign to your request.
   *
   * @public
   */
  InferenceId?: string | undefined;

  /**
   * If the endpoint hosts one or more inference components, this parameter specifies the name of inference component to invoke for a streaming response.
   *
   * @public
   */
  InferenceComponentName?: string | undefined;

  /**
   * The ID of a stateful session to handle your request.
   *
   * You can't create a stateful session by using the `InvokeEndpointWithResponseStream` action. Instead, you can create one by using the `InvokeEndpoint` action. In your request, you specify `NEW_SESSION` for the `SessionId` request parameter. The response to that request provides the session ID for the `NewSessionId` response parameter.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * An optional, stable identifier that serves as a routing hint for prefix-aware routing. The service routes requests with the same prefix and the same identifier to the same instance. If requests from different applications might have the same prompt prefix, set a different identifier for each application to differentiate their routing decisions.
   *
   * Applies only to endpoints configured with a `RoutingStrategy` of `PREFIX_AWARE`.
   *
   * @public
   */
  PrefixAwareId?: string | undefined;
}

/**
 * A wrapper for pieces of the payload that's returned in response to a streaming inference request. A streaming inference response consists of one or more payload parts.
 *
 * @public
 */
export interface PayloadPart {
  /**
   * A blob that contains part of the response for your streaming inference request.
   *
   * @public
   */
  Bytes?: Uint8Array | undefined;
}

/**
 * A stream of payload parts. Each part contains a portion of the response for a streaming inference request.
 *
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
   * A wrapper for pieces of the payload that's returned in response to a streaming inference request. A streaming inference response consists of one or more payload parts.
   *
   * @public
   */
  export interface PayloadPartMember {
    PayloadPart: PayloadPart;
    ModelStreamError?: never;
    InternalStreamFailure?: never;
    $unknown?: never;
  }

  /**
   * An error occurred while streaming the response body. This error can have the following error codes:
   *
   * - **ModelInvocationTimeExceeded**
   *
   *   The model failed to finish sending the response within the timeout period allowed by Amazon SageMaker AI.
   *
   * - **StreamBroken**
   *
   *   The Transmission Control Protocol (TCP) connection between the client and the model was reset or closed.
   *
   * @public
   */
  export interface ModelStreamErrorMember {
    PayloadPart?: never;
    ModelStreamError: ModelStreamError;
    InternalStreamFailure?: never;
    $unknown?: never;
  }

  /**
   * The stream processing failed because of an unknown error, exception or failure. Try your request again.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PayloadPart: (value: PayloadPart) => T;
    ModelStreamError: (value: ModelStreamError) => T;
    InternalStreamFailure: (value: InternalStreamFailure) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeEndpointWithResponseStreamOutput {
  /**
   * A stream of payload parts. Each part contains a portion of the response for a streaming inference request.
   *
   * @public
   */
  Body: AsyncIterable<ResponseStream> | undefined;

  /**
   * The MIME type of the inference returned from the model container.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * Identifies the production variant that was invoked.
   *
   * @public
   */
  InvokedProductionVariant?: string | undefined;

  /**
   * Provides additional information in the response about the inference returned by a model hosted at an Amazon SageMaker AI endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to return an ID received in the `CustomAttributes` header of a request or other metadata that a service endpoint was programmed to produce. The value must consist of no more than 1024 visible US-ASCII characters as specified in [Section 3.3.6. Field Value Components](https://tools.ietf.org/html/rfc7230#section-3.2.6) of the Hypertext Transfer Protocol (HTTP/1.1). If the customer wants the custom attribute returned, the model must set the custom attribute to be included on the way back.
   *
   * The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with `Trace ID:` in your post-processing function.
   *
   * This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker AI Python SDK.
   *
   * @public
   */
  CustomAttributes?: string | undefined;
}
