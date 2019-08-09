import { _Ec2Config } from "./_Ec2Config";
import { _TagListEntry } from "./_TagListEntry";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>CreateLocationEfsRequest</p>
 */
export interface CreateLocationEfsInput {
  /**
   * <p>A subdirectory in the location’s path. This subdirectory in the EFS file system is used to read data from the EFS source location or write data to the EFS destination. By default, AWS DataSync uses the root directory.</p>
   */
  Subdirectory?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon EFS file system.</p>
   */
  EfsFilesystemArn: string;

  /**
   * <p>The subnet and security group that the Amazon EFS file system uses. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified.</p> <p>The exact relationship between security group M (of the mount target) and security group S (which you provide for DataSync to use at this stage) is as follows: </p> <ul> <li> <p> Security group M (which you associate with the mount target) must allow inbound access for the Transmission Control Protocol (TCP) on the NFS port (2049) from security group S. You can enable inbound connections either by IP address (CIDR range) or security group. </p> </li> <li> <p>Security group S (provided to DataSync to access EFS) should have a rule that enables outbound connections to the NFS port on one of the file system’s mount targets. You can enable outbound connections either by IP address (CIDR range) or security group.</p> <p>For information about security groups and mount targets, see Security Groups for Amazon EC2 Instances and Mount Targets in the <i>Amazon EFS User Guide.</i> </p> </li> </ul>
   */
  Ec2Config: _Ec2Config;

  /**
   * <p>The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.</p>
   */
  Tags?: Array<_TagListEntry> | Iterable<_TagListEntry>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
