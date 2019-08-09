import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of ApplySecurityGroupsToLoadBalancer.</p>
 */
export interface ApplySecurityGroupsToLoadBalancerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IDs of the security groups associated with the load balancer.</p>
   */
  SecurityGroups?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
