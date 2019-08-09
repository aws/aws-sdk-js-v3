import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDeploymentTargetsOutput shape
 */
export interface ListDeploymentTargetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The unique IDs of deployment targets. </p>
   */
  targetIds?: Array<string>;

  /**
   * <p> If a large amount of information is returned, a token identifier is also returned. It can be used in a subsequent <code>ListDeploymentTargets</code> call to return the next set of deployment targets in the list. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
