import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface PutScalingPolicyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Descriptive label that is associated with a scaling policy. Policy names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
