import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *         <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 */
export interface BadRequest extends _smithy.SmithyException, $MetadataBearer {
  __type: "BadRequest";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace BadRequest {
  export function isa(o: any): o is BadRequest {
    return _smithy.isa(o, "BadRequest");
  }
}

/**
 *
 *         <p>The service timed out trying to fulfill the request, and the client should try the
 *             call again.</p>
 *
 */
export interface DependencyTimeout extends _smithy.SmithyException, $MetadataBearer {
  __type: "DependencyTimeout";
  $fault: "server";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace DependencyTimeout {
  export function isa(o: any): o is DependencyTimeout {
    return _smithy.isa(o, "DependencyTimeout");
  }
}

/**
 *
 *         <p>Returned if the file system you are trying to create already exists, with the
 *             creation token you provided.</p>
 *
 */
export interface FileSystemAlreadyExists extends _smithy.SmithyException, $MetadataBearer {
  __type: "FileSystemAlreadyExists";
  $fault: "client";
  ErrorCode: string | undefined;
  FileSystemId: string | undefined;
  Message?: string;
}

export namespace FileSystemAlreadyExists {
  export function isa(o: any): o is FileSystemAlreadyExists {
    return _smithy.isa(o, "FileSystemAlreadyExists");
  }
}

/**
 *
 *         <p>Returned if a file system has mount targets.</p>
 *
 */
export interface FileSystemInUse extends _smithy.SmithyException, $MetadataBearer {
  __type: "FileSystemInUse";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace FileSystemInUse {
  export function isa(o: any): o is FileSystemInUse {
    return _smithy.isa(o, "FileSystemInUse");
  }
}

/**
 *
 *         <p>Returned if the AWS account has already created the maximum number of file systems
 *             allowed per account.</p>
 *
 */
export interface FileSystemLimitExceeded extends _smithy.SmithyException, $MetadataBearer {
  __type: "FileSystemLimitExceeded";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace FileSystemLimitExceeded {
  export function isa(o: any): o is FileSystemLimitExceeded {
    return _smithy.isa(o, "FileSystemLimitExceeded");
  }
}

/**
 *
 *         <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's AWS account.</p>
 *
 *
 */
export interface FileSystemNotFound extends _smithy.SmithyException, $MetadataBearer {
  __type: "FileSystemNotFound";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace FileSystemNotFound {
  export function isa(o: any): o is FileSystemNotFound {
    return _smithy.isa(o, "FileSystemNotFound");
  }
}

/**
 *
 *         <p>Returned if the file system's lifecycle state is not "available".</p>
 *
 */
export interface IncorrectFileSystemLifeCycleState extends _smithy.SmithyException, $MetadataBearer {
  __type: "IncorrectFileSystemLifeCycleState";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace IncorrectFileSystemLifeCycleState {
  export function isa(o: any): o is IncorrectFileSystemLifeCycleState {
    return _smithy.isa(o, "IncorrectFileSystemLifeCycleState");
  }
}

/**
 *
 *         <p>Returned if the mount target is not in the correct state for the
 *             operation.</p>
 *
 */
export interface IncorrectMountTargetState extends _smithy.SmithyException, $MetadataBearer {
  __type: "IncorrectMountTargetState";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace IncorrectMountTargetState {
  export function isa(o: any): o is IncorrectMountTargetState {
    return _smithy.isa(o, "IncorrectMountTargetState");
  }
}

/**
 *
 *         <p>Returned if there's not enough capacity to provision additional throughput. This value
 *             might be returned when you try to create a file system in provisioned throughput mode,
 *             when you attempt to increase the provisioned throughput of an existing file system, or
 *             when you attempt to change an existing file system from bursting to provisioned
 *             throughput mode.</p>
 *
 */
export interface InsufficientThroughputCapacity extends _smithy.SmithyException, $MetadataBearer {
  __type: "InsufficientThroughputCapacity";
  $fault: "server";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace InsufficientThroughputCapacity {
  export function isa(o: any): o is InsufficientThroughputCapacity {
    return _smithy.isa(o, "InsufficientThroughputCapacity");
  }
}

/**
 *
 *         <p>Returned if an error occurred on the server side.</p>
 *
 */
export interface InternalServerError extends _smithy.SmithyException, $MetadataBearer {
  __type: "InternalServerError";
  $fault: "server";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace InternalServerError {
  export function isa(o: any): o is InternalServerError {
    return _smithy.isa(o, "InternalServerError");
  }
}

/**
 *
 *         <p>Returned if the request specified an <code>IpAddress</code> that is already in use
 *             in the subnet.</p>
 *
 */
export interface IpAddressInUse extends _smithy.SmithyException, $MetadataBearer {
  __type: "IpAddressInUse";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace IpAddressInUse {
  export function isa(o: any): o is IpAddressInUse {
    return _smithy.isa(o, "IpAddressInUse");
  }
}

/**
 *
 *         <p>Returned if the mount target would violate one of the specified restrictions based
 *             on the file system's existing mount targets.</p>
 *
 */
export interface MountTargetConflict extends _smithy.SmithyException, $MetadataBearer {
  __type: "MountTargetConflict";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace MountTargetConflict {
  export function isa(o: any): o is MountTargetConflict {
    return _smithy.isa(o, "MountTargetConflict");
  }
}

/**
 *
 *         <p>Returned if there is no mount target with the specified ID found in the
 *             caller's account.</p>
 *
 */
export interface MountTargetNotFound extends _smithy.SmithyException, $MetadataBearer {
  __type: "MountTargetNotFound";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace MountTargetNotFound {
  export function isa(o: any): o is MountTargetNotFound {
    return _smithy.isa(o, "MountTargetNotFound");
  }
}

/**
 *
 *         <p>The calling account has reached the limit for elastic network interfaces for the
 *             specific AWS Region. The client should try to delete some elastic network interfaces or
 *             get the account limit raised. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_Limits.html">Amazon VPC Limits</a>
 *             in the <i>Amazon VPC User Guide </i> (see the Network interfaces per VPC
 *             entry in the table). </p>
 *
 */
export interface NetworkInterfaceLimitExceeded extends _smithy.SmithyException, $MetadataBearer {
  __type: "NetworkInterfaceLimitExceeded";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace NetworkInterfaceLimitExceeded {
  export function isa(o: any): o is NetworkInterfaceLimitExceeded {
    return _smithy.isa(o, "NetworkInterfaceLimitExceeded");
  }
}

/**
 *
 *         <p>Returned if <code>IpAddress</code> was not specified in the request and there are
 *             no free IP addresses in the subnet.</p>
 *
 */
export interface NoFreeAddressesInSubnet extends _smithy.SmithyException, $MetadataBearer {
  __type: "NoFreeAddressesInSubnet";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace NoFreeAddressesInSubnet {
  export function isa(o: any): o is NoFreeAddressesInSubnet {
    return _smithy.isa(o, "NoFreeAddressesInSubnet");
  }
}

/**
 *
 *         <p>Returned if the size of <code>SecurityGroups</code> specified in the request is
 *             greater than five.</p>
 *
 */
export interface SecurityGroupLimitExceeded extends _smithy.SmithyException, $MetadataBearer {
  __type: "SecurityGroupLimitExceeded";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace SecurityGroupLimitExceeded {
  export function isa(o: any): o is SecurityGroupLimitExceeded {
    return _smithy.isa(o, "SecurityGroupLimitExceeded");
  }
}

/**
 *
 *         <p>Returned if one of the specified security groups doesn't exist in the subnet's
 *             VPC.</p>
 *
 */
export interface SecurityGroupNotFound extends _smithy.SmithyException, $MetadataBearer {
  __type: "SecurityGroupNotFound";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace SecurityGroupNotFound {
  export function isa(o: any): o is SecurityGroupNotFound {
    return _smithy.isa(o, "SecurityGroupNotFound");
  }
}

/**
 *
 *         <p>Returned if there is no subnet with ID <code>SubnetId</code> provided in the
 *             request.</p>
 *
 */
export interface SubnetNotFound extends _smithy.SmithyException, $MetadataBearer {
  __type: "SubnetNotFound";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace SubnetNotFound {
  export function isa(o: any): o is SubnetNotFound {
    return _smithy.isa(o, "SubnetNotFound");
  }
}

/**
 *
 *         <p>Returned if the throughput mode or amount of provisioned throughput can't be changed
 *             because the throughput limit of 1024 MiB/s has been reached.</p>
 *
 */
export interface ThroughputLimitExceeded extends _smithy.SmithyException, $MetadataBearer {
  __type: "ThroughputLimitExceeded";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace ThroughputLimitExceeded {
  export function isa(o: any): o is ThroughputLimitExceeded {
    return _smithy.isa(o, "ThroughputLimitExceeded");
  }
}

/**
 *
 *         <p>Returned if you don’t wait at least 24 hours before changing the throughput mode, or
 *             decreasing the Provisioned Throughput value.</p>
 *
 */
export interface TooManyRequests extends _smithy.SmithyException, $MetadataBearer {
  __type: "TooManyRequests";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace TooManyRequests {
  export function isa(o: any): o is TooManyRequests {
    return _smithy.isa(o, "TooManyRequests");
  }
}

/**
 *
 *         <p></p>
 *
 */
export interface UnsupportedAvailabilityZone extends _smithy.SmithyException, $MetadataBearer {
  __type: "UnsupportedAvailabilityZone";
  $fault: "client";
  ErrorCode: string | undefined;
  Message?: string;
}

export namespace UnsupportedAvailabilityZone {
  export function isa(o: any): o is UnsupportedAvailabilityZone {
    return _smithy.isa(o, "UnsupportedAvailabilityZone");
  }
}

export interface CreateFileSystemRequest {
  __type?: "CreateFileSystemRequest";
  /**
   *
   *          <p>A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent
   *       creation.</p>
   *
   */
  CreationToken: string | undefined;

  /**
   *
   *          <p>A Boolean value that, if true, creates an encrypted file system. When creating an
   *       encrypted file system, you have the option of specifying <a>CreateFileSystemRequest$KmsKeyId</a> for an existing AWS Key Management Service (AWS
   *       KMS) customer master key (CMK). If you don't specify a CMK, then the default CMK for
   *       Amazon EFS, <code>/aws/elasticfilesystem</code>, is used to protect the encrypted file system.
   *     </p>
   *
   */
  Encrypted?: boolean;

  /**
   *
   *          <p>The ID of the AWS KMS CMK to be used to protect the encrypted file system. This
   *       parameter is only required if you want to use a nondefault CMK. If this parameter is not
   *       specified, the default CMK for Amazon EFS is used. This ID can be in one of the following
   *       formats:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID - A unique identifier of the key, for example
   *             <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>ARN - An Amazon Resource Name (ARN) for the key, for example
   *             <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Key alias - A previously created display name for a key, for example
   *             <code>alias/projectKey1</code>.</p>
   *             </li>
   *             <li>
   *                <p>Key alias ARN - An ARN for a key alias, for example
   *             <code>arn:aws:kms:us-west-2:444455556666:alias/projectKey1</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>KmsKeyId</code> is specified, the <a>CreateFileSystemRequest$Encrypted</a> parameter must be set to true.</p>
   *
   */
  KmsKeyId?: string;

  /**
   *
   *          <p>The performance mode of the file system. We recommend <code>generalPurpose</code>
   *       performance mode for most file systems. File systems using the <code>maxIO</code> performance
   *       mode can scale to higher levels of aggregate throughput and operations per second with a
   *       tradeoff of slightly higher latencies for most file operations. The performance mode
   *       can't be changed after the file system has been created.</p>
   *
   */
  PerformanceMode?: PerformanceMode | string;

  /**
   *
   *          <p>The throughput, measured in MiB/s, that you want to provision for a file system that
   *       you're creating. Valid values are 1-1024. Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The upper limit for throughput is 1024 MiB/s.
   *       You can get this limit increased by contacting AWS Support. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS Limits That You Can Increase</a>
   *       in the <i>Amazon EFS User Guide.</i>
   *          </p>
   *
   */
  ProvisionedThroughputInMibps?: number;

  /**
   *
   *          <p>A value that specifies to create one or more tags associated with the file system. Each
   *         tag is a user-defined key-value pair. Name your file system on creation by including a
   *           <code>"Key":"Name","Value":"{value}"</code> key-value pair.</p>
   *
   */
  Tags?: Array<Tag>;

  /**
   *
   *          <p>The throughput mode for the file system to be created. There are two throughput modes to
   *       choose from for your file system: <code>bursting</code> and <code>provisioned</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>,
   *       you must also set a value for <code>ProvisionedThroughPutInMibps</code>. You can decrease your file
   *       system's throughput in Provisioned Throughput mode or change between the throughput modes
   *       as long as it’s been more than 24 hours since the last decrease or throughput mode
   *       change. For more,
   *       see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput">Specifying Throughput with Provisioned Mode</a>
   *       in the <i>Amazon EFS User Guide.</i>
   *          </p>
   *
   */
  ThroughputMode?: ThroughputMode | string;
}

export namespace CreateFileSystemRequest {
  export function isa(o: any): o is CreateFileSystemRequest {
    return _smithy.isa(o, "CreateFileSystemRequest");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface CreateMountTargetRequest {
  __type?: "CreateMountTargetRequest";
  /**
   *
   *          <p>The ID of the file system for which to create the mount target.</p>
   *
   */
  FileSystemId: string | undefined;

  /**
   *
   *          <p>Valid IPv4 address within the address range of the specified subnet.</p>
   *
   */
  IpAddress?: string;

  /**
   *
   *          <p>Up to five VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be
   *       for the same VPC as subnet specified.</p>
   *
   *
   */
  SecurityGroups?: Array<string>;

  /**
   *
   *          <p>The ID of the subnet to add the mount target in.</p>
   *
   */
  SubnetId: string | undefined;
}

export namespace CreateMountTargetRequest {
  export function isa(o: any): o is CreateMountTargetRequest {
    return _smithy.isa(o, "CreateMountTargetRequest");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface CreateTagsRequest {
  __type?: "CreateTagsRequest";
  /**
   *
   *          <p>The ID of the file system whose tags you want to modify (String). This operation modifies
   *       the tags only, not the file system.</p>
   *
   */
  FileSystemId: string | undefined;

  /**
   *
   *          <p>An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value
   *       pair. </p>
   *
   */
  Tags: Array<Tag> | undefined;
}

export namespace CreateTagsRequest {
  export function isa(o: any): o is CreateTagsRequest {
    return _smithy.isa(o, "CreateTagsRequest");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface DeleteFileSystemRequest {
  __type?: "DeleteFileSystemRequest";
  /**
   *
   *
   *          <p>The ID of the file system you want to delete.</p>
   *
   *
   *
   */
  FileSystemId: string | undefined;
}

export namespace DeleteFileSystemRequest {
  export function isa(o: any): o is DeleteFileSystemRequest {
    return _smithy.isa(o, "DeleteFileSystemRequest");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface DeleteMountTargetRequest {
  __type?: "DeleteMountTargetRequest";
  /**
   *
   *          <p>The ID of the mount target to delete (String).</p>
   *
   */
  MountTargetId: string | undefined;
}

export namespace DeleteMountTargetRequest {
  export function isa(o: any): o is DeleteMountTargetRequest {
    return _smithy.isa(o, "DeleteMountTargetRequest");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface DeleteTagsRequest {
  __type?: "DeleteTagsRequest";
  /**
   *
   *          <p>The ID of the file system whose tags you want to delete (String).</p>
   *
   */
  FileSystemId: string | undefined;

  /**
   *
   *          <p>A list of tag keys to delete.</p>
   *
   */
  TagKeys: Array<string> | undefined;
}

export namespace DeleteTagsRequest {
  export function isa(o: any): o is DeleteTagsRequest {
    return _smithy.isa(o, "DeleteTagsRequest");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface DescribeFileSystemsRequest {
  __type?: "DescribeFileSystemsRequest";
  /**
   *
   *          <p>(Optional) Restricts the list to the file system with this creation token (String). You
   *       specify a creation token when you create an Amazon EFS file system.</p>
   *
   *
   */
  CreationToken?: string;

  /**
   *
   *          <p>(Optional) ID of the file system whose description you want to retrieve
   *       (String).</p>
   *
   */
  FileSystemId?: string;

  /**
   *
   *          <p>(Optional) Opaque pagination token returned from a previous
   *         <code>DescribeFileSystems</code> operation (String). If present, specifies to continue the
   *       list from where the returning call had left off. </p>
   *
   */
  Marker?: string;

  /**
   *
   *
   *          <p>(Optional) Specifies the maximum number of file systems to return in the response
   *       (integer). Currently, this number is automatically set to 10, and other values are ignored. The response is paginated at 10 per page if you have more than 10 file systems.
   *       </p>
   *
   *
   */
  MaxItems?: number;
}

export namespace DescribeFileSystemsRequest {
  export function isa(o: any): o is DescribeFileSystemsRequest {
    return _smithy.isa(o, "DescribeFileSystemsRequest");
  }
}

export interface DescribeFileSystemsResponse extends $MetadataBearer {
  __type?: "DescribeFileSystemsResponse";
  /**
   *
   *          <p>An array of file system descriptions.</p>
   *
   */
  FileSystems?: Array<FileSystemDescription>;

  /**
   *
   *
   *          <p>Present if provided by caller in the request (String).</p>
   *
   */
  Marker?: string;

  /**
   *
   *          <p>Present if there are more file systems than returned in the response (String). You can
   *       use the <code>NextMarker</code> in the subsequent request to fetch the descriptions.</p>
   *
   *
   */
  NextMarker?: string;
}

export namespace DescribeFileSystemsResponse {
  export function isa(o: any): o is DescribeFileSystemsResponse {
    return _smithy.isa(o, "DescribeFileSystemsResponse");
  }
}

export interface DescribeLifecycleConfigurationRequest {
  __type?: "DescribeLifecycleConfigurationRequest";
  /**
   *
   *          <p>The ID of the file system whose <code>LifecycleConfiguration</code> object you want to
   *       retrieve (String).</p>
   *
   */
  FileSystemId: string | undefined;
}

export namespace DescribeLifecycleConfigurationRequest {
  export function isa(o: any): o is DescribeLifecycleConfigurationRequest {
    return _smithy.isa(o, "DescribeLifecycleConfigurationRequest");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface DescribeMountTargetSecurityGroupsRequest {
  __type?: "DescribeMountTargetSecurityGroupsRequest";
  /**
   *
   *          <p>The ID of the mount target whose security groups you want to retrieve.</p>
   *
   */
  MountTargetId: string | undefined;
}

export namespace DescribeMountTargetSecurityGroupsRequest {
  export function isa(o: any): o is DescribeMountTargetSecurityGroupsRequest {
    return _smithy.isa(o, "DescribeMountTargetSecurityGroupsRequest");
  }
}

export interface DescribeMountTargetSecurityGroupsResponse extends $MetadataBearer {
  __type?: "DescribeMountTargetSecurityGroupsResponse";
  /**
   *
   *          <p>An array of security groups.</p>
   *
   */
  SecurityGroups: Array<string> | undefined;
}

export namespace DescribeMountTargetSecurityGroupsResponse {
  export function isa(o: any): o is DescribeMountTargetSecurityGroupsResponse {
    return _smithy.isa(o, "DescribeMountTargetSecurityGroupsResponse");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface DescribeMountTargetsRequest {
  __type?: "DescribeMountTargetsRequest";
  /**
   *
   *          <p>(Optional) ID of the file system whose mount targets you want to list (String). It must
   *       be included in your request if <code>MountTargetId</code> is not included.</p>
   *
   */
  FileSystemId?: string;

  /**
   *
   *          <p>(Optional) Opaque pagination token returned from a previous
   *         <code>DescribeMountTargets</code> operation (String). If present, it specifies to continue
   *       the list from where the previous returning call left off.</p>
   *
   */
  Marker?: string;

  /**
   *
   *          <p>(Optional) Maximum number of mount targets to return in the response. Currently, this
   *       number is automatically set to
   *       10, and other values are ignored. The response is paginated at 10 per page if you have more than 10 mount targets.</p>
   *
   */
  MaxItems?: number;

  /**
   *
   *          <p>(Optional) ID of the mount target that you want to have described (String). It must be
   *       included in your request if <code>FileSystemId</code> is not included.</p>
   *
   */
  MountTargetId?: string;
}

export namespace DescribeMountTargetsRequest {
  export function isa(o: any): o is DescribeMountTargetsRequest {
    return _smithy.isa(o, "DescribeMountTargetsRequest");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface DescribeMountTargetsResponse extends $MetadataBearer {
  __type?: "DescribeMountTargetsResponse";
  /**
   *
   *          <p>If the request included the <code>Marker</code>, the response returns that value in
   *       this field.</p>
   *
   */
  Marker?: string;

  /**
   *
   *          <p>Returns the file system's mount targets as an array of
   *         <code>MountTargetDescription</code> objects.</p>
   *
   */
  MountTargets?: Array<MountTargetDescription>;

  /**
   *
   *          <p>If a value is present, there are more mount targets to return. In a subsequent request,
   *       you can provide <code>Marker</code> in your request with this value to retrieve the next set
   *       of mount targets.</p>
   *
   */
  NextMarker?: string;
}

export namespace DescribeMountTargetsResponse {
  export function isa(o: any): o is DescribeMountTargetsResponse {
    return _smithy.isa(o, "DescribeMountTargetsResponse");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface DescribeTagsRequest {
  __type?: "DescribeTagsRequest";
  /**
   *
   *          <p>The ID of the file system whose tag set you want to retrieve.</p>
   *
   */
  FileSystemId: string | undefined;

  /**
   *
   *          <p>(Optional) An opaque pagination token returned from a previous
   *         <code>DescribeTags</code> operation (String). If present, it specifies to continue the list
   *       from where the previous call left off.</p>
   *
   */
  Marker?: string;

  /**
   *
   *          <p>(Optional) The maximum number of file system tags to return in the response. Currently,
   *       this number is automatically set to
   *       10, and other values are ignored. The response is paginated at 10 per page if you have more than 10 tags.</p>
   *
   */
  MaxItems?: number;
}

export namespace DescribeTagsRequest {
  export function isa(o: any): o is DescribeTagsRequest {
    return _smithy.isa(o, "DescribeTagsRequest");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface DescribeTagsResponse extends $MetadataBearer {
  __type?: "DescribeTagsResponse";
  /**
   *
   *          <p>If the request included a <code>Marker</code>, the response returns that value in this
   *       field.</p>
   *
   */
  Marker?: string;

  /**
   *
   *          <p>If a value is present, there are more tags to return. In a subsequent request, you can
   *       provide the value of <code>NextMarker</code> as the value of the <code>Marker</code> parameter
   *       in your next request to retrieve the next set of tags.</p>
   *
   */
  NextMarker?: string;

  /**
   *
   *          <p>Returns tags associated with the file system as an array of <code>Tag</code> objects.
   *     </p>
   *
   */
  Tags: Array<Tag> | undefined;
}

export namespace DescribeTagsResponse {
  export function isa(o: any): o is DescribeTagsResponse {
    return _smithy.isa(o, "DescribeTagsResponse");
  }
}

/**
 *
 *          <p>A description of the file system.</p>
 *
 */
export interface FileSystemDescription extends $MetadataBearer {
  __type?: "FileSystemDescription";
  /**
   *
   *
   *          <p>The time that the file system was created, in seconds (since
   *       1970-01-01T00:00:00Z).</p>
   *
   *
   */
  CreationTime: Date | undefined;

  /**
   *
   *          <p>The opaque string specified in the request.</p>
   *
   */
  CreationToken: string | undefined;

  /**
   *
   *          <p>A Boolean value that, if true, indicates that the file system is encrypted.</p>
   *
   */
  Encrypted?: boolean;

  /**
   *
   *
   *          <p>The ID of the file system, assigned by Amazon EFS.</p>
   *
   */
  FileSystemId: string | undefined;

  /**
   *
   *          <p>The ID of an AWS Key Management Service (AWS KMS) customer master key (CMK) that was
   *       used to protect the encrypted file system.</p>
   *
   */
  KmsKeyId?: string;

  /**
   *
   *          <p>The lifecycle phase of the file system.</p>
   *
   */
  LifeCycleState: LifeCycleState | string | undefined;

  /**
   *
   *
   *          <p>You can add tags to a file system, including a <code>Name</code> tag. For more
   *       information, see <a>CreateFileSystem</a>. If the file system has a <code>Name</code> tag, Amazon EFS returns
   *       the value in this field. </p>
   *
   */
  Name?: string;

  /**
   *
   *          <p>The current number of mount targets that the file system has. For more information, see <a>CreateMountTarget</a>.</p>
   *
   */
  NumberOfMountTargets: number | undefined;

  /**
   *
   *          <p>The AWS account that created the file system. If the file system was created by an IAM
   *       user, the parent account to which the user belongs is the owner.</p>
   *
   *
   */
  OwnerId: string | undefined;

  /**
   *
   *          <p>The performance mode of the file system.</p>
   *
   */
  PerformanceMode: PerformanceMode | string | undefined;

  /**
   *
   *          <p>The throughput, measured in MiB/s, that you want to provision for a file system. Valid values are 1-1024.
   *       Required if <code>ThroughputMode</code> is set to <code>provisioned</code>. The limit
   *       on throughput is 1024 MiB/s. You can get these limits increased by contacting AWS Support. For
   *       more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits">Amazon EFS Limits That You Can Increase</a>
   *       in the <i>Amazon EFS User Guide.</i>
   *          </p>
   *
   */
  ProvisionedThroughputInMibps?: number;

  /**
   *
   *          <p>The latest known metered size (in bytes) of data stored in the file system, in its
   *         <code>Value</code> field, and the time at which that size was determined in its
   *         <code>Timestamp</code> field. The <code>Timestamp</code> value is the integer number of
   *       seconds since 1970-01-01T00:00:00Z. The <code>SizeInBytes</code> value doesn't represent
   *       the size of a consistent snapshot of the file system, but it is eventually consistent when
   *       there are no writes to the file system. That is, <code>SizeInBytes</code> represents actual
   *       size only if the file system is not modified for a period longer than a couple of hours.
   *       Otherwise, the value is not the exact size that the file system was at any point in time.
   *     </p>
   *
   */
  SizeInBytes: FileSystemSize | undefined;

  /**
   *
   *          <p>The tags associated with the file system, presented as an array of <code>Tag</code>
   *       objects.</p>
   *
   */
  Tags: Array<Tag> | undefined;

  /**
   *
   *          <p>The throughput mode for a file system. There are two throughput modes to choose from for
   *       your file system: <code>bursting</code> and <code>provisioned</code>. If you set <code>ThroughputMode</code> to <code>provisioned</code>,
   *       you must also set a value for <code>ProvisionedThroughPutInMibps</code>. You can decrease your file system's
   *       throughput in Provisioned Throughput mode or change between the throughput modes as long as
   *       it’s been more than 24 hours since the last decrease or throughput mode change.
   *     </p>
   *
   */
  ThroughputMode?: ThroughputMode | string;
}

export namespace FileSystemDescription {
  export function isa(o: any): o is FileSystemDescription {
    return _smithy.isa(o, "FileSystemDescription");
  }
}

/**
 *
 *
 *          <p>The latest known metered size (in bytes) of data stored in the file system, in its
 *         <code>Value</code> field, and the time at which that size was determined in its
 *         <code>Timestamp</code> field. The value doesn't represent the size of a consistent
 *       snapshot of the file system, but it is eventually consistent when there are no writes to the
 *       file system. That is, the value represents the actual size only if the file system is not
 *       modified for a period longer than a couple of hours. Otherwise, the value is not necessarily
 *       the exact size the file system was at any instant in time.</p>
 *
 */
export interface FileSystemSize {
  __type?: "FileSystemSize";
  /**
   *
   *          <p>The time at which the size of data, returned in the <code>Value</code> field, was
   *       determined. The value is the integer number of seconds since 1970-01-01T00:00:00Z.</p>
   *
   */
  Timestamp?: Date;

  /**
   *
   *          <p>The latest known metered size (in bytes) of data stored in the file system.</p>
   *
   */
  Value: number | undefined;

  /**
   *
   *          <p>The latest known metered size (in bytes) of data stored in the Infrequent Access
   *       storage class.</p>
   *
   */
  ValueInIA?: number;

  /**
   *
   *          <p>The latest known metered size (in bytes) of data stored in the Standard storage
   *       class.</p>
   *
   */
  ValueInStandard?: number;
}

export namespace FileSystemSize {
  export function isa(o: any): o is FileSystemSize {
    return _smithy.isa(o, "FileSystemSize");
  }
}

export enum LifeCycleState {
  AVAILABLE = "available",
  CREATING = "creating",
  DELETED = "deleted",
  DELETING = "deleting",
  UPDATING = "updating",
}

export interface LifecycleConfigurationDescription extends $MetadataBearer {
  __type?: "LifecycleConfigurationDescription";
  /**
   *
   *          <p>An array of lifecycle management policies. Currently, EFS supports a maximum of one
   *       policy per file system.</p>
   *
   */
  LifecyclePolicies?: Array<LifecyclePolicy>;
}

export namespace LifecycleConfigurationDescription {
  export function isa(o: any): o is LifecycleConfigurationDescription {
    return _smithy.isa(o, "LifecycleConfigurationDescription");
  }
}

/**
 *
 *          <p>Describes a policy used by EFS lifecycle management to transition files to the Infrequent
 *       Access (IA) storage class.</p>
 *
 */
export interface LifecyclePolicy {
  __type?: "LifecyclePolicy";
  /**
   *
   *          <p>
   *       A value that describes the period of time that a file is not accessed, after which it transitions to the IA storage class. Metadata
   *       operations such as listing the contents of a directory don't count as file access
   *       events.</p>
   *
   */
  TransitionToIA?: TransitionToIARules | string;
}

export namespace LifecyclePolicy {
  export function isa(o: any): o is LifecyclePolicy {
    return _smithy.isa(o, "LifecyclePolicy");
  }
}

/**
 *
 *          <p></p>
 *
 */
export interface ModifyMountTargetSecurityGroupsRequest {
  __type?: "ModifyMountTargetSecurityGroupsRequest";
  /**
   *
   *          <p>The ID of the mount target whose security groups you want to modify.</p>
   *
   */
  MountTargetId: string | undefined;

  /**
   *
   *          <p>An array of up to five VPC security group IDs.</p>
   *
   */
  SecurityGroups?: Array<string>;
}

export namespace ModifyMountTargetSecurityGroupsRequest {
  export function isa(o: any): o is ModifyMountTargetSecurityGroupsRequest {
    return _smithy.isa(o, "ModifyMountTargetSecurityGroupsRequest");
  }
}

/**
 *
 *          <p>Provides a description of a mount target.</p>
 *
 */
export interface MountTargetDescription extends $MetadataBearer {
  __type?: "MountTargetDescription";
  /**
   *
   *          <p>The ID of the file system for which the mount target is intended.</p>
   *
   */
  FileSystemId: string | undefined;

  /**
   *
   *          <p>Address at which the file system can be mounted by using the mount target.</p>
   *
   */
  IpAddress?: string;

  /**
   *
   *          <p>Lifecycle state of the mount target.</p>
   *
   */
  LifeCycleState: LifeCycleState | string | undefined;

  /**
   *
   *          <p>System-assigned mount target ID.</p>
   *
   */
  MountTargetId: string | undefined;

  /**
   *
   *          <p>The ID of the network interface that Amazon EFS created when it created the mount
   *       target.</p>
   *
   */
  NetworkInterfaceId?: string;

  /**
   *
   *          <p>AWS account ID that owns the resource.</p>
   *
   */
  OwnerId?: string;

  /**
   *
   *          <p>The ID of the mount target's subnet.</p>
   *
   */
  SubnetId: string | undefined;
}

export namespace MountTargetDescription {
  export function isa(o: any): o is MountTargetDescription {
    return _smithy.isa(o, "MountTargetDescription");
  }
}

export enum PerformanceMode {
  GENERAL_PURPOSE = "generalPurpose",
  MAX_IO = "maxIO",
}

export interface PutLifecycleConfigurationRequest {
  __type?: "PutLifecycleConfigurationRequest";
  /**
   *
   *          <p>The ID of the file system for which you are creating the
   *         <code>LifecycleConfiguration</code> object (String).</p>
   *
   */
  FileSystemId: string | undefined;

  /**
   *
   *          <p>An array of <code>LifecyclePolicy</code> objects that define the file system's
   *         <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object
   *       tells lifecycle management when to transition files from the Standard storage class to the
   *       Infrequent Access storage class.</p>
   *
   */
  LifecyclePolicies: Array<LifecyclePolicy> | undefined;
}

export namespace PutLifecycleConfigurationRequest {
  export function isa(o: any): o is PutLifecycleConfigurationRequest {
    return _smithy.isa(o, "PutLifecycleConfigurationRequest");
  }
}

/**
 *
 *          <p>A tag is a key-value pair. Allowed characters are letters, white space, and numbers that
 *       can be represented in UTF-8, and the following characters:<code> + - = . _ : /</code>
 *          </p>
 *
 *
 *
 *
 */
export interface Tag {
  __type?: "Tag";
  /**
   *
   *          <p>The tag key (String). The key can't start with <code>aws:</code>.</p>
   *
   */
  Key: string | undefined;

  /**
   *
   *          <p>The value of the tag key.</p>
   *
   */
  Value: string | undefined;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
}

export enum ThroughputMode {
  BURSTING = "bursting",
  PROVISIONED = "provisioned",
}

export enum TransitionToIARules {
  AFTER_14_DAYS = "AFTER_14_DAYS",
  AFTER_30_DAYS = "AFTER_30_DAYS",
  AFTER_60_DAYS = "AFTER_60_DAYS",
  AFTER_7_DAYS = "AFTER_7_DAYS",
  AFTER_90_DAYS = "AFTER_90_DAYS",
}

export interface UpdateFileSystemRequest {
  __type?: "UpdateFileSystemRequest";
  /**
   *
   *          <p>The ID of the file system that you want to update.</p>
   *
   */
  FileSystemId: string | undefined;

  /**
   *
   *          <p>(Optional) The amount of throughput, in MiB/s, that you want to provision for your file
   *       system. Valid values are 1-1024. Required if <code>ThroughputMode</code> is changed to <code>provisioned</code> on update.
   *       If you're not updating the amount of provisioned throughput for your file system, you
   *       don't need to provide this value in your request. </p>
   *
   */
  ProvisionedThroughputInMibps?: number;

  /**
   *
   *          <p>(Optional) The throughput mode that you want your file system to use. If you're not
   *       updating your throughput mode, you don't need to provide this value in your
   *       request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>.</p>
   *
   */
  ThroughputMode?: ThroughputMode | string;
}

export namespace UpdateFileSystemRequest {
  export function isa(o: any): o is UpdateFileSystemRequest {
    return _smithy.isa(o, "UpdateFileSystemRequest");
  }
}
