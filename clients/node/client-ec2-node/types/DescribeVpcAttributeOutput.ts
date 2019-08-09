import { _UnmarshalledAttributeBooleanValue } from "./_AttributeBooleanValue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVpcAttributeOutput shape
 */
export interface DescribeVpcAttributeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates whether the instances launched in the VPC get DNS hostnames. If this attribute is <code>true</code>, instances in the VPC get DNS hostnames; otherwise, they do not.</p>
   */
  EnableDnsHostnames?: _UnmarshalledAttributeBooleanValue;

  /**
   * <p>Indicates whether DNS resolution is enabled for the VPC. If this attribute is <code>true</code>, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not.</p>
   */
  EnableDnsSupport?: _UnmarshalledAttributeBooleanValue;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
