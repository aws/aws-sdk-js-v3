import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InvokeEndpointInput shape
 */
export interface InvokeEndpointInput {
  /**
   * <p>The name of the endpoint that you specified when you created the endpoint using the <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API. </p>
   */
  EndpointName: string;

  /**
   * <p>Provides input data, in the format specified in the <code>ContentType</code> request header. Amazon SageMaker passes all of the data in the body to the model. </p> <p>For information about the format of the request body, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data Formats—Inference</a>.</p>
   */
  Body: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The MIME type of the input data in the request body.</p>
   */
  ContentType?: string;

  /**
   * <p>The desired MIME type of the inference in the response.</p>
   */
  Accept?: string;

  /**
   * <p/>
   */
  CustomAttributes?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
