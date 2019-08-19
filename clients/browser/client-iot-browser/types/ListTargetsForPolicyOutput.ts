import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTargetsForPolicyOutput shape
 */
export interface ListTargetsForPolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The policy targets.</p>
   */
  targets?: Array<string>;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
