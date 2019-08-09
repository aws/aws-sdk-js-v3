import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCompanyNetworkConfigurationOutput shape
 */
export interface DescribeCompanyNetworkConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The VPC with connectivity to associated websites.</p>
   */
  VpcId?: string;

  /**
   * <p>The subnets used for X-ENI connections from Amazon WorkLink rendering containers.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>The security groups associated with access to the provided subnets.</p>
   */
  SecurityGroupIds?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
