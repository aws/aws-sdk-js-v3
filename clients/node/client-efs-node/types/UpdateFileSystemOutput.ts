import { _UnmarshalledFileSystemSize } from "./_FileSystemSize";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A description of the file system.</p>
 */
export interface UpdateFileSystemOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The AWS account that created the file system. If the file system was created by an IAM user, the parent account to which the user belongs is the owner.</p>
   */
  OwnerId: string;

  /**
   * <p>The opaque string specified in the request.</p>
   */
  CreationToken: string;

  /**
   * <p>The ID of the file system, assigned by Amazon EFS.</p>
   */
  FileSystemId: string;

  /**
   * <p>The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z).</p>
   */
  CreationTime: Date;

  /**
   * <p>The lifecycle phase of the file system.</p>
   */
  LifeCycleState:
    | "creating"
    | "available"
    | "updating"
    | "deleting"
    | "deleted"
    | string;

  /**
   * <p>You can add tags to a file system, including a <code>Name</code> tag. For more information, see <a>CreateFileSystem</a>. If the file system has a <code>Name</code> tag, Amazon EFS returns the value in this field. </p>
   */
  Name?: string;

  /**
   * <p>The current number of mount targets that the file system has. For more information, see <a>CreateMountTarget</a>.</p>
   */
  NumberOfMountTargets: number;

  /**
   * <p>The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The <code>Timestamp</code> value is the integer number of seconds since 1970-01-01T00:00:00Z. The <code>SizeInBytes</code> value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, <code>SizeInBytes</code> represents actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not the exact size that the file system was at any point in time. </p>
   */
  SizeInBytes: _UnmarshalledFileSystemSize;

  /**
   * <p>The performance mode of the file system.</p>
   */
  PerformanceMode: "generalPurpose" | "maxIO" | string;

  /**
   * <p>A Boolean value that, if true, indicates that the file system is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The ID of an AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to protect the encrypted file system.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The throughput mode for a file system. There are two throughput modes to choose from for your file system: <code>bursting</code> and <code>provisioned</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughPutInMibps</code>. You can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes as long as it’s been more than 24 hours since the last decrease or throughput mode change. </p>
   */
  ThroughputMode?: "bursting" | "provisioned" | string;

  /**
   * <p>The throughput, measured in MiB/s, that you want to provision for a file system. Valid values are 1-1024. Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The limit on throughput is 1024 MiB/s. You can get these limits increased by contacting AWS Support. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS Limits That You Can Increase</a> in the <i>Amazon EFS User Guide.</i> </p>
   */
  ProvisionedThroughputInMibps?: number;

  /**
   * <p>The tags associated with the file system, presented as an array of <code>Tag</code> objects.</p>
   */
  Tags: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
