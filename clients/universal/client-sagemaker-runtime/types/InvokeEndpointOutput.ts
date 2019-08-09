import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InvokeEndpointOutput shape
 */
export interface InvokeEndpointOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Includes the inference provided by the model.</p> <p>For information about the format of the response body, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data Formats—Inference</a>.</p>
   */
  Body: Uint8Array;

  /**
   * <p>The MIME type of the inference returned in the response body.</p>
   */
  ContentType?: string;

  /**
   * <p>Identifies the production variant that was invoked.</p>
   */
  InvokedProductionVariant?: string;

  /**
   * <p/>
   */
  CustomAttributes?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
