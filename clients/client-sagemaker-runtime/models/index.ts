import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
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
  export function isa(o: any): o is InternalFailure {
    return __isa(o, "InternalFailure");
  }
}

export interface InvokeEndpointInput {
  __type?: "InvokeEndpointInput";
  /**
   * <p>The desired MIME type of the inference in the response.</p>
   */
  Accept?: string;

  /**
   * <p>Provides input data, in the format specified in the <code>ContentType</code>
   *             request header. Amazon SageMaker passes all of the data in the body to the model. </p>
   *         <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data
   *                 Formats—Inference</a>.</p>
   */
  Body: Uint8Array | undefined;

  /**
   * <p>The MIME type of the input data in the request body.</p>
   */
  ContentType?: string;

  /**
   * <p>Provides additional information about a request for an inference submitted to a model
   *             hosted at an Amazon SageMaker endpoint. The information is an opaque value that is
   *             forwarded verbatim. You could use this value, for example, to provide an ID that you can
   *             use to track a request or to provide other metadata that a service endpoint was
   *             programmed to process. The value must consist of no more than 1024 visible US-ASCII
   *             characters as specified in <a href="https://tools.ietf.org/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value
   *                 Components</a> of the Hypertext Transfer Protocol (HTTP/1.1). This feature is
   *             currently supported in the AWS SDKs but not in the Amazon SageMaker Python SDK.</p>
   */
  CustomAttributes?: string;

  /**
   * <p>The name of the endpoint that you specified when you created the endpoint using the
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API. </p>
   */
  EndpointName: string | undefined;

  /**
   * <p>Specifies the model to be requested for an inference when invoking a multi-model endpoint. </p>
   */
  TargetModel?: string;
}

export namespace InvokeEndpointInput {
  export function isa(o: any): o is InvokeEndpointInput {
    return __isa(o, "InvokeEndpointInput");
  }
}

export interface InvokeEndpointOutput {
  __type?: "InvokeEndpointOutput";
  /**
   * <p>Includes the inference provided by the model.</p>
   *         <p>For information about the format of the response body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data
   *                 Formats—Inference</a>.</p>
   */
  Body: Uint8Array | undefined;

  /**
   * <p>The MIME type of the inference returned in the response body.</p>
   */
  ContentType?: string;

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
   *         <p>This feature is currently supported in the AWS SDKs but not in the Amazon SageMaker
   *             Python SDK.</p>
   */
  CustomAttributes?: string;

  /**
   * <p>Identifies the production variant that was invoked.</p>
   */
  InvokedProductionVariant?: string;
}

export namespace InvokeEndpointOutput {
  export function isa(o: any): o is InvokeEndpointOutput {
    return __isa(o, "InvokeEndpointOutput");
  }
}

/**
 * <p> Model (owned by the customer in the container) returned 4xx or 5xx error code.
 *         </p>
 */
export interface ModelError extends __SmithyException, $MetadataBearer {
  name: "ModelError";
  $fault: "client";
  /**
   * <p> The Amazon Resource Name (ARN) of the log stream. </p>
   */
  LogStreamArn?: string;

  Message?: string;
  /**
   * <p> Original message. </p>
   */
  OriginalMessage?: string;

  /**
   * <p> Original status code. </p>
   */
  OriginalStatusCode?: number;
}

export namespace ModelError {
  export function isa(o: any): o is ModelError {
    return __isa(o, "ModelError");
  }
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
  export function isa(o: any): o is ServiceUnavailable {
    return __isa(o, "ServiceUnavailable");
  }
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
  export function isa(o: any): o is ValidationError {
    return __isa(o, "ValidationError");
  }
}
