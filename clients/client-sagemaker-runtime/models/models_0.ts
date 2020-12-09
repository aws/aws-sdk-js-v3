import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p> An internal failure occurred. </p>
 */
export interface InternalFailure extends __SmithyException, $MetadataBearer {
  name: "InternalFailure";
  $fault: "server";
  Message?: string;
}

export namespace InternalFailure {
  export const filterSensitiveLog = (obj: InternalFailure): any => ({
    ...obj,
  });
}

export interface InvokeEndpointInput {
  /**
   * <p>The name of the endpoint that you specified when you created the endpoint using the
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API. </p>
   */
  EndpointName: string | undefined;

  /**
   * <p>Provides input data, in the format specified in the <code>ContentType</code>
   *             request header. Amazon SageMaker passes all of the data in the body to the model. </p>
   *         <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data
   *                 Formats-Inference</a>.</p>
   */
  Body: Uint8Array | undefined;

  /**
   * <p>The MIME type of the input data in the request body.</p>
   */
  ContentType?: string;

  /**
   * <p>The desired MIME type of the inference in the response.</p>
   */
  Accept?: string;

  /**
   * <p>Provides additional information about a request for an inference submitted to a model
   *             hosted at an Amazon SageMaker endpoint. The information is an opaque value that is
   *             forwarded verbatim. You could use this value, for example, to provide an ID that you can
   *             use to track a request or to provide other metadata that a service endpoint was
   *             programmed to process. The value must consist of no more than 1024 visible US-ASCII
   *             characters as specified in <a href="https://tools.ietf.org/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value
   *                 Components</a> of the Hypertext Transfer Protocol (HTTP/1.1). </p>
   *         <p>The code in your model is responsible for setting or updating any custom attributes in
   *             the response. If your code does not set this value in the response, an empty value is
   *             returned. For example, if a custom attribute represents the trace ID, your model can
   *             prepend the custom attribute with <code>Trace ID:</code> in your post-processing
   *             function.</p>
   *
   *         <p>This feature is currently supported in the AWS SDKs but not in the Amazon SageMaker Python
   *             SDK.</p>
   */
  CustomAttributes?: string;

  /**
   * <p>The model to request for inference when invoking a multi-model endpoint.</p>
   */
  TargetModel?: string;

  /**
   * <p>Specify the production variant to send the inference request to when invoking an
   *             endpoint that is running two or more variants. Note that this parameter overrides the
   *             default behavior for the endpoint, which is to distribute the invocation traffic based
   *             on the variant weights.</p>
   *         <p>For information about how to use variant targeting to perform a/b testing, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html">Test models in
   *                 production</a>
   *          </p>
   */
  TargetVariant?: string;

  /**
   * <p>If you provide a value, it is added to the captured data when you enable data capture
   *             on the endpoint.
   *             For information about data capture, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-capture.html">Capture Data</a>.</p>
   */
  InferenceId?: string;
}

export namespace InvokeEndpointInput {
  export const filterSensitiveLog = (obj: InvokeEndpointInput): any => ({
    ...obj,
    ...(obj.Body && { Body: SENSITIVE_STRING }),
    ...(obj.CustomAttributes && { CustomAttributes: SENSITIVE_STRING }),
  });
}

export interface InvokeEndpointOutput {
  /**
   * <p>Includes the inference provided by the model.</p>
   *         <p>For information about the format of the response body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data
   *                 Formats-Inference</a>.</p>
   */
  Body: Uint8Array | undefined;

  /**
   * <p>The MIME type of the inference returned in the response body.</p>
   */
  ContentType?: string;

  /**
   * <p>Identifies the production variant that was invoked.</p>
   */
  InvokedProductionVariant?: string;

  /**
   * <p>Provides additional information in the response about the inference returned by a
   *             model hosted at an Amazon SageMaker endpoint. The information is an opaque value that is
   *             forwarded verbatim. You could use this value, for example, to return an ID received in
   *             the <code>CustomAttributes</code> header of a request or other metadata that a service
   *             endpoint was programmed to produce. The value must consist of no more than 1024 visible
   *             US-ASCII characters as specified in <a href="https://tools.ietf.org/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value
   *                 Components</a> of the Hypertext Transfer Protocol (HTTP/1.1). If the customer
   *             wants the custom attribute returned, the model must set the custom attribute to be
   *             included on the way back. </p>
   *         <p>The code in your model is responsible for setting or updating any custom attributes in
   *             the response. If your code does not set this value in the response, an empty value is
   *             returned. For example, if a custom attribute represents the trace ID, your model can
   *             prepend the custom attribute with <code>Trace ID:</code> in your post-processing
   *             function.</p>
   *         <p>This feature is currently supported in the AWS SDKs but not in the Amazon SageMaker Python
   *             SDK.</p>
   */
  CustomAttributes?: string;
}

export namespace InvokeEndpointOutput {
  export const filterSensitiveLog = (obj: InvokeEndpointOutput): any => ({
    ...obj,
    ...(obj.Body && { Body: SENSITIVE_STRING }),
    ...(obj.CustomAttributes && { CustomAttributes: SENSITIVE_STRING }),
  });
}

/**
 * <p> Model (owned by the customer in the container) returned 4xx or 5xx error code.
 *         </p>
 */
export interface ModelError extends __SmithyException, $MetadataBearer {
  name: "ModelError";
  $fault: "client";
  Message?: string;
  /**
   * <p> Original status code. </p>
   */
  OriginalStatusCode?: number;

  /**
   * <p> Original message. </p>
   */
  OriginalMessage?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the log stream. </p>
   */
  LogStreamArn?: string;
}

export namespace ModelError {
  export const filterSensitiveLog = (obj: ModelError): any => ({
    ...obj,
  });
}

/**
 * <p> The service is unavailable. Try your call again. </p>
 */
export interface ServiceUnavailable extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailable";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailable {
  export const filterSensitiveLog = (obj: ServiceUnavailable): any => ({
    ...obj,
  });
}

/**
 * <p> Inspect your request and try again. </p>
 */
export interface ValidationError extends __SmithyException, $MetadataBearer {
  name: "ValidationError";
  $fault: "client";
  Message?: string;
}

export namespace ValidationError {
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
}
