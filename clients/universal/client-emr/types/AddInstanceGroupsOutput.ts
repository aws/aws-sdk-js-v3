import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Output from an AddInstanceGroups call.</p>
 */
export interface AddInstanceGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The job flow ID in which the instance groups are added.</p>
   */
  JobFlowId?: string;

  /**
   * <p>Instance group IDs of the newly created instance groups.</p>
   */
  InstanceGroupIds?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
