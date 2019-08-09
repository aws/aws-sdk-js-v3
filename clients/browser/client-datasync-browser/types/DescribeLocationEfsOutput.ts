import { _UnmarshalledEc2Config } from "./_Ec2Config";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DescribeLocationEfsResponse</p>
 */
export interface DescribeLocationEfsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon resource Name (ARN) of the EFS location that was described.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the EFS location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified. </p>
   */
  Ec2Config?: _UnmarshalledEc2Config;

  /**
   * <p>The time that the EFS location was created.</p>
   */
  CreationTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
