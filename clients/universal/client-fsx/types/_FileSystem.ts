import {
  _FileSystemFailureDetails,
  _UnmarshalledFileSystemFailureDetails
} from "./_FileSystemFailureDetails";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _WindowsFileSystemConfiguration,
  _UnmarshalledWindowsFileSystemConfiguration
} from "./_WindowsFileSystemConfiguration";
import {
  _LustreFileSystemConfiguration,
  _UnmarshalledLustreFileSystemConfiguration
} from "./_LustreFileSystemConfiguration";

/**
 * <p>A description of a specific Amazon FSx file system.</p>
 */
export interface _FileSystem {
  /**
   * <p>The AWS account that created the file system. If the file system was created by an AWS Identity and Access Management (IAM) user, the AWS account to which the IAM user belongs is the owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The system-generated, unique 17-digit ID of the file system.</p>
   */
  FileSystemId?: string;

  /**
   * <p>The type of Amazon FSx file system, either <code>LUSTRE</code> or <code>WINDOWS</code>.</p>
   */
  FileSystemType?: "WINDOWS" | "LUSTRE" | string;

  /**
   * <p>The lifecycle status of the file system:</p> <ul> <li> <p> <code>AVAILABLE</code> indicates that the file system is reachable and available for use.</p> </li> <li> <p> <code>CREATING</code> indicates that Amazon FSx is in the process of creating the new file system.</p> </li> <li> <p> <code>DELETING</code> indicates that Amazon FSx is in the process of deleting the file system.</p> </li> <li> <p> <code>FAILED</code> indicates that Amazon FSx was not able to create the file system.</p> </li> <li> <p> <code>MISCONFIGURED</code> indicates that the file system is in a failed but recoverable state.</p> </li> <li> <p> <code>UPDATING</code> indicates that the file system is undergoing a customer initiated update.</p> </li> </ul>
   */
  Lifecycle?:
    | "AVAILABLE"
    | "CREATING"
    | "FAILED"
    | "DELETING"
    | "MISCONFIGURED"
    | "UPDATING"
    | string;

  /**
   * <p>A structure providing details of any failures that occur when creating the file system has failed.</p>
   */
  FailureDetails?: _FileSystemFailureDetails;

  /**
   * <p>The storage capacity of the file system in gigabytes (GB).</p>
   */
  StorageCapacity?: number;

  /**
   * <p>The ID of the primary VPC for the file system.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the subnet to contain the endpoint for the file system. One and only one is supported. The file system is launched in the Availability Zone associated with this subnet.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>The IDs of the elastic network interface from which a specific file system is accessible. The elastic network interface is automatically created in the same VPC that the Amazon FSx file system was created in. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic Network Interfaces</a> in the <i>Amazon EC2 User Guide.</i> </p> <p>For an Amazon FSx for Windows File Server file system, you can have one network interface ID. For an Amazon FSx for Lustre file system, you can have more than one.</p>
   */
  NetworkInterfaceIds?: Array<string> | Iterable<string>;

  /**
   * <p>The DNS name for the file system.</p>
   */
  DNSName?: string;

  /**
   * <p>The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for an Amazon FSx for Windows File Server file system.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the file system resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The tags to associate with the file system. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Amazon EC2 Resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The configuration for this Microsoft Windows file system.</p>
   */
  WindowsConfiguration?: _WindowsFileSystemConfiguration;

  /**
   * <p>The configuration for the Amazon FSx for Lustre file system.</p>
   */
  LustreConfiguration?: _LustreFileSystemConfiguration;
}

export interface _UnmarshalledFileSystem extends _FileSystem {
  /**
   * <p>The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A structure providing details of any failures that occur when creating the file system has failed.</p>
   */
  FailureDetails?: _UnmarshalledFileSystemFailureDetails;

  /**
   * <p>The ID of the subnet to contain the endpoint for the file system. One and only one is supported. The file system is launched in the Availability Zone associated with this subnet.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>The IDs of the elastic network interface from which a specific file system is accessible. The elastic network interface is automatically created in the same VPC that the Amazon FSx file system was created in. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic Network Interfaces</a> in the <i>Amazon EC2 User Guide.</i> </p> <p>For an Amazon FSx for Windows File Server file system, you can have one network interface ID. For an Amazon FSx for Lustre file system, you can have more than one.</p>
   */
  NetworkInterfaceIds?: Array<string>;

  /**
   * <p>The tags to associate with the file system. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Amazon EC2 Resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>The configuration for this Microsoft Windows file system.</p>
   */
  WindowsConfiguration?: _UnmarshalledWindowsFileSystemConfiguration;

  /**
   * <p>The configuration for the Amazon FSx for Lustre file system.</p>
   */
  LustreConfiguration?: _UnmarshalledLustreFileSystemConfiguration;
}
