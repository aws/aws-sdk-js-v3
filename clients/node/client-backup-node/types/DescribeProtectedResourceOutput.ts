import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProtectedResourceOutput shape
 */
export interface DescribeProtectedResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The type of AWS resource saved as a recovery point; for example, an EBS volume or an Amazon RDS database.</p>
   */
  ResourceType?: string;

  /**
   * <p>The date and time that a resource was last backed up, in Unix format and Coordinated Universal Time (UTC). The value of <code>LastBackupTime</code> is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  LastBackupTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
