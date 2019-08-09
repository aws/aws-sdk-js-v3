import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for a <a>EstimateTemplateCost</a> action.</p>
 */
export interface EstimateTemplateCostOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An AWS Simple Monthly Calculator URL with a query string that describes the resources required to run the template.</p>
   */
  Url?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
