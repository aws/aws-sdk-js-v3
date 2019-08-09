import { _TagSpecification } from "./_TagSpecification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for CreateVolume.</p>
 */
export interface CreateVolumeInput {
  /**
   * <p>The Availability Zone in which to create the volume.</p>
   */
  AvailabilityZone: string;

  /**
   * <p>Specifies whether the volume should be encrypted. The effect of setting the encryption state to <code>true</code> depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default">Encryption by Default</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported Instance Types</a>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) to provision for the volume, with a maximum ratio of 50 IOPS/GiB. Range is 100 to 64,000 IOPS for volumes in most Regions. Maximum IOPS of 64,000 is guaranteed only on <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based instances</a>. Other instance families guarantee performance up to 32,000 IOPS. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS Volume Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>This parameter is valid only for Provisioned IOPS SSD (io1) volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption. If this parameter is not specified, your AWS managed CMK for EBS is used. If <code>KmsKeyId</code> is specified, the encrypted state must be <code>true</code>.</p> <p>You can specify the CMK using any of the following:</p> <ul> <li> <p>Key ID. For example, key/1234abcd-12ab-34cd-56ef-1234567890ab.</p> </li> <li> <p>Key alias. For example, alias/ExampleAlias.</p> </li> <li> <p>Key ARN. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:key/<i>abcd1234-a123-456a-a12b-a123b4cd56ef</i>.</p> </li> <li> <p>Alias ARN. For example, arn:aws:kms:<i>us-east-1</i>:<i>012345678910</i>:alias/<i>ExampleAlias</i>.</p> </li> </ul> <p>AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The size of the volume, in GiBs.</p> <p>Constraints: 1-16,384 for <code>gp2</code>, 4-16,384 for <code>io1</code>, 500-16,384 for <code>st1</code>, 500-16,384 for <code>sc1</code>, and 1-1,024 for <code>standard</code>. If you specify a snapshot, the volume size must be equal to or larger than the snapshot size.</p> <p>Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.</p> <note> <p>At least one of Size or SnapshotId is required.</p> </note>
   */
  Size?: number;

  /**
   * <p>The snapshot from which to create the volume.</p> <note> <p>At least one of Size or SnapshotId are required.</p> </note>
   */
  SnapshotId?: string;

  /**
   * <p>The volume type. This can be <code>gp2</code> for General Purpose SSD, <code>io1</code> for Provisioned IOPS SSD, <code>st1</code> for Throughput Optimized HDD, <code>sc1</code> for Cold HDD, or <code>standard</code> for Magnetic volumes.</p> <p>Defaults: If no volume type is specified, the default is <code>standard</code> in us-east-1, eu-west-1, eu-central-1, us-west-2, us-west-1, sa-east-1, ap-northeast-1, ap-northeast-2, ap-southeast-1, ap-southeast-2, ap-south-1, us-gov-west-1, and cn-north-1. In all other Regions, EBS defaults to <code>gp2</code>.</p>
   */
  VolumeType?: "standard" | "io1" | "gp2" | "sc1" | "st1" | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the volume during creation.</p>
   */
  TagSpecifications?: Array<_TagSpecification> | Iterable<_TagSpecification>;

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
