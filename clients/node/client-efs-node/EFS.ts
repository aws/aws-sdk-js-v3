import { EFSClient } from "./EFSClient";
import { BadRequest } from "./types/BadRequest";
import { CreateFileSystemInput } from "./types/CreateFileSystemInput";
import { CreateFileSystemOutput } from "./types/CreateFileSystemOutput";
import { CreateMountTargetInput } from "./types/CreateMountTargetInput";
import { CreateMountTargetOutput } from "./types/CreateMountTargetOutput";
import { CreateTagsInput } from "./types/CreateTagsInput";
import { CreateTagsOutput } from "./types/CreateTagsOutput";
import { DeleteFileSystemInput } from "./types/DeleteFileSystemInput";
import { DeleteFileSystemOutput } from "./types/DeleteFileSystemOutput";
import { DeleteMountTargetInput } from "./types/DeleteMountTargetInput";
import { DeleteMountTargetOutput } from "./types/DeleteMountTargetOutput";
import { DeleteTagsInput } from "./types/DeleteTagsInput";
import { DeleteTagsOutput } from "./types/DeleteTagsOutput";
import { DependencyTimeout } from "./types/DependencyTimeout";
import { DescribeFileSystemsInput } from "./types/DescribeFileSystemsInput";
import { DescribeFileSystemsOutput } from "./types/DescribeFileSystemsOutput";
import { DescribeLifecycleConfigurationInput } from "./types/DescribeLifecycleConfigurationInput";
import { DescribeLifecycleConfigurationOutput } from "./types/DescribeLifecycleConfigurationOutput";
import { DescribeMountTargetSecurityGroupsInput } from "./types/DescribeMountTargetSecurityGroupsInput";
import { DescribeMountTargetSecurityGroupsOutput } from "./types/DescribeMountTargetSecurityGroupsOutput";
import { DescribeMountTargetsInput } from "./types/DescribeMountTargetsInput";
import { DescribeMountTargetsOutput } from "./types/DescribeMountTargetsOutput";
import { DescribeTagsInput } from "./types/DescribeTagsInput";
import { DescribeTagsOutput } from "./types/DescribeTagsOutput";
import { FileSystemAlreadyExists } from "./types/FileSystemAlreadyExists";
import { FileSystemInUse } from "./types/FileSystemInUse";
import { FileSystemLimitExceeded } from "./types/FileSystemLimitExceeded";
import { FileSystemNotFound } from "./types/FileSystemNotFound";
import { IncorrectFileSystemLifeCycleState } from "./types/IncorrectFileSystemLifeCycleState";
import { IncorrectMountTargetState } from "./types/IncorrectMountTargetState";
import { InsufficientThroughputCapacity } from "./types/InsufficientThroughputCapacity";
import { InternalServerError } from "./types/InternalServerError";
import { IpAddressInUse } from "./types/IpAddressInUse";
import { ModifyMountTargetSecurityGroupsInput } from "./types/ModifyMountTargetSecurityGroupsInput";
import { ModifyMountTargetSecurityGroupsOutput } from "./types/ModifyMountTargetSecurityGroupsOutput";
import { MountTargetConflict } from "./types/MountTargetConflict";
import { MountTargetNotFound } from "./types/MountTargetNotFound";
import { NetworkInterfaceLimitExceeded } from "./types/NetworkInterfaceLimitExceeded";
import { NoFreeAddressesInSubnet } from "./types/NoFreeAddressesInSubnet";
import { PutLifecycleConfigurationInput } from "./types/PutLifecycleConfigurationInput";
import { PutLifecycleConfigurationOutput } from "./types/PutLifecycleConfigurationOutput";
import { SecurityGroupLimitExceeded } from "./types/SecurityGroupLimitExceeded";
import { SecurityGroupNotFound } from "./types/SecurityGroupNotFound";
import { SubnetNotFound } from "./types/SubnetNotFound";
import { ThroughputLimitExceeded } from "./types/ThroughputLimitExceeded";
import { TooManyRequests } from "./types/TooManyRequests";
import { UnsupportedAvailabilityZone } from "./types/UnsupportedAvailabilityZone";
import { UpdateFileSystemInput } from "./types/UpdateFileSystemInput";
import { UpdateFileSystemOutput } from "./types/UpdateFileSystemOutput";
import { CreateFileSystemCommand } from "./commands/CreateFileSystemCommand";
import { CreateMountTargetCommand } from "./commands/CreateMountTargetCommand";
import { CreateTagsCommand } from "./commands/CreateTagsCommand";
import { DeleteFileSystemCommand } from "./commands/DeleteFileSystemCommand";
import { DeleteMountTargetCommand } from "./commands/DeleteMountTargetCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DescribeFileSystemsCommand } from "./commands/DescribeFileSystemsCommand";
import { DescribeLifecycleConfigurationCommand } from "./commands/DescribeLifecycleConfigurationCommand";
import { DescribeMountTargetSecurityGroupsCommand } from "./commands/DescribeMountTargetSecurityGroupsCommand";
import { DescribeMountTargetsCommand } from "./commands/DescribeMountTargetsCommand";
import { DescribeTagsCommand } from "./commands/DescribeTagsCommand";
import { ModifyMountTargetSecurityGroupsCommand } from "./commands/ModifyMountTargetSecurityGroupsCommand";
import { PutLifecycleConfigurationCommand } from "./commands/PutLifecycleConfigurationCommand";
import { UpdateFileSystemCommand } from "./commands/UpdateFileSystemCommand";

export class EFS extends EFSClient {
  /**
   * <p>Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's AWS account with the specified creation token, this operation does the following:</p> <ul> <li> <p>Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state <code>creating</code>.</p> </li> <li> <p>Returns with the description of the created file system.</p> </li> </ul> <p>Otherwise, this operation returns a <code>FileSystemAlreadyExists</code> error with the ID of the existing file system.</p> <note> <p>For basic use cases, you can use a randomly generated UUID for the creation token.</p> </note> <p> The idempotent operation allows you to retry a <code>CreateFileSystem</code> call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the <code>FileSystemAlreadyExists</code> error.</p> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>creating</code>. You can check the file system creation status by calling the <a>DescribeFileSystems</a> operation, which among other things returns the file system state.</p> </note> <p>This operation also takes an optional <code>PerformanceMode</code> parameter that you choose for your file system. We recommend <code>generalPurpose</code> performance mode for most file systems. File systems using the <code>maxIO</code> performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html">Amazon EFS: Performance Modes</a>.</p> <p>After the file system is fully created, Amazon EFS sets its lifecycle state to <code>available</code>, at which point you can create one or more mount targets for the file system in your VPC. For more information, see <a>CreateMountTarget</a>. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p> This operation requires permissions for the <code>elasticfilesystem:CreateFileSystem</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {FileSystemAlreadyExists} <p>Returned if the file system you are trying to create already exists, with the creation token you provided.</p>
   *   - {FileSystemLimitExceeded} <p>Returned if the AWS account has already created the maximum number of file systems allowed per account.</p>
   *   - {InsufficientThroughputCapacity} <p>Returned if there's not enough capacity to provision additional throughput. This value might be returned when you try to create a file system in provisioned throughput mode, when you attempt to increase the provisioned throughput of an existing file system, or when you attempt to change an existing file system from bursting to provisioned throughput mode.</p>
   *   - {ThroughputLimitExceeded} <p>Returned if the throughput mode or amount of provisioned throughput can't be changed because the throughput limit of 1024 MiB/s has been reached.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFileSystem(
    args: CreateFileSystemInput
  ): Promise<CreateFileSystemOutput>;
  public createFileSystem(
    args: CreateFileSystemInput,
    cb: (err: any, data?: CreateFileSystemOutput) => void
  ): void;
  public createFileSystem(
    args: CreateFileSystemInput,
    cb?: (err: any, data?: CreateFileSystemOutput) => void
  ): Promise<CreateFileSystemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFileSystemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target.</p> <p>You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p> <p>In the request, you also specify a file system ID for which you are creating the mount target and the file system's lifecycle state must be <code>available</code>. For more information, see <a>DescribeFileSystems</a>.</p> <p>In the request, you also provide a subnet ID, which determines the following:</p> <ul> <li> <p>VPC in which Amazon EFS creates the mount target</p> </li> <li> <p>Availability Zone in which Amazon EFS creates the mount target</p> </li> <li> <p>IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)</p> </li> </ul> <p>After creating the mount target, Amazon EFS returns a response that includes, a <code>MountTargetId</code> and an <code>IpAddress</code>. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html#how-it-works-implementation">How it Works: Implementation Overview</a>. </p> <p>Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:</p> <ul> <li> <p>Must belong to the same VPC as the subnets of the existing mount targets</p> </li> <li> <p>Must not be in the same Availability Zone as any of the subnets of the existing mount targets</p> </li> </ul> <p>If the request satisfies the requirements, Amazon EFS does the following:</p> <ul> <li> <p>Creates a new mount target in the specified subnet.</p> </li> <li> <p>Also creates a new network interface in the subnet as follows:</p> <ul> <li> <p>If the request provides an <code>IpAddress</code>, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 <code>CreateNetworkInterface</code> call does when a request does not specify a primary private IP address).</p> </li> <li> <p>If the request provides <code>SecurityGroups</code>, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.</p> </li> <li> <p>Assigns the description <code>Mount target <i>fsmt-id</i> for file system <i>fs-id</i> </code> where <code> <i>fsmt-id</i> </code> is the mount target ID, and <code> <i>fs-id</i> </code> is the <code>FileSystemId</code>.</p> </li> <li> <p>Sets the <code>requesterManaged</code> property of the network interface to <code>true</code>, and the <code>requesterId</code> value to <code>EFS</code>.</p> </li> </ul> <p>Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the <code>NetworkInterfaceId</code> field in the mount target's description to the network interface ID, and the <code>IpAddress</code> field to its address. If network interface creation fails, the entire <code>CreateMountTarget</code> operation fails.</p> </li> </ul> <note> <p>The <code>CreateMountTarget</code> call returns only after creating the network interface, but while the mount target state is still <code>creating</code>, you can check the mount target creation status by calling the <a>DescribeMountTargets</a> operation, which among other things returns the mount target state.</p> </note> <p>We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see <a href="http://aws.amazon.com/efs/">Amazon EFS</a>. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target. </p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:CreateMountTarget</code> </p> </li> </ul> <p>This operation also requires permissions for the following Amazon EC2 actions:</p> <ul> <li> <p> <code>ec2:DescribeSubnets</code> </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaces</code> </p> </li> <li> <p> <code>ec2:CreateNetworkInterface</code> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {FileSystemNotFound} <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the requester's AWS account.</p>
   *   - {IncorrectFileSystemLifeCycleState} <p>Returned if the file system's lifecycle state is not "available".</p>
   *   - {MountTargetConflict} <p>Returned if the mount target would violate one of the specified restrictions based on the file system's existing mount targets.</p>
   *   - {SubnetNotFound} <p>Returned if there is no subnet with ID <code>SubnetId</code> provided in the request.</p>
   *   - {NoFreeAddressesInSubnet} <p>Returned if <code>IpAddress</code> was not specified in the request and there are no free IP addresses in the subnet.</p>
   *   - {IpAddressInUse} <p>Returned if the request specified an <code>IpAddress</code> that is already in use in the subnet.</p>
   *   - {NetworkInterfaceLimitExceeded} <p>The calling account has reached the limit for elastic network interfaces for the specific AWS Region. The client should try to delete some elastic network interfaces or get the account limit raised. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_Limits.html">Amazon VPC Limits</a> in the <i>Amazon VPC User Guide </i> (see the Network interfaces per VPC entry in the table). </p>
   *   - {SecurityGroupLimitExceeded} <p>Returned if the size of <code>SecurityGroups</code> specified in the request is greater than five.</p>
   *   - {SecurityGroupNotFound} <p>Returned if one of the specified security groups doesn't exist in the subnet's VPC.</p>
   *   - {UnsupportedAvailabilityZone} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createMountTarget(
    args: CreateMountTargetInput
  ): Promise<CreateMountTargetOutput>;
  public createMountTarget(
    args: CreateMountTargetInput,
    cb: (err: any, data?: CreateMountTargetOutput) => void
  ): void;
  public createMountTarget(
    args: CreateMountTargetInput,
    cb?: (err: any, data?: CreateMountTargetOutput) => void
  ): Promise<CreateMountTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateMountTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the <code>Name</code> tag to your file system, Amazon EFS returns it in the response to the <a>DescribeFileSystems</a> operation. </p> <p>This operation requires permission for the <code>elasticfilesystem:CreateTags</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {FileSystemNotFound} <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the requester's AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTags(args: CreateTagsInput): Promise<CreateTagsOutput>;
  public createTags(
    args: CreateTagsInput,
    cb: (err: any, data?: CreateTagsOutput) => void
  ): void;
  public createTags(
    args: CreateTagsInput,
    cb?: (err: any, data?: CreateTagsOutput) => void
  ): Promise<CreateTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.</p> <p> You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see <a>DescribeMountTargets</a> and <a>DeleteMountTarget</a>. </p> <note> <p>The <code>DeleteFileSystem</code> call returns while the file system state is still <code>deleting</code>. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the <a>DescribeFileSystems</a> returns a <code>404 FileSystemNotFound</code> error.</p> </note> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystem</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {FileSystemNotFound} <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the requester's AWS account.</p>
   *   - {FileSystemInUse} <p>Returned if a file system has mount targets.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFileSystem(
    args: DeleteFileSystemInput
  ): Promise<DeleteFileSystemOutput>;
  public deleteFileSystem(
    args: DeleteFileSystemInput,
    cb: (err: any, data?: DeleteFileSystemOutput) => void
  ): void;
  public deleteFileSystem(
    args: DeleteFileSystemInput,
    cb?: (err: any, data?: DeleteFileSystemOutput) => void
  ): Promise<DeleteFileSystemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFileSystemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified mount target.</p> <p>This operation forcibly breaks any mounts of the file system by using the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes might be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC by using another mount target.</p> <p>This operation requires permissions for the following action on the file system:</p> <ul> <li> <p> <code>elasticfilesystem:DeleteMountTarget</code> </p> </li> </ul> <note> <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target descriptions for the given file system. </p> </note> <p>The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:</p> <ul> <li> <p> <code>ec2:DeleteNetworkInterface</code> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {DependencyTimeout} <p>The service timed out trying to fulfill the request, and the client should try the call again.</p>
   *   - {MountTargetNotFound} <p>Returned if there is no mount target with the specified ID found in the caller's account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteMountTarget(
    args: DeleteMountTargetInput
  ): Promise<DeleteMountTargetOutput>;
  public deleteMountTarget(
    args: DeleteMountTargetInput,
    cb: (err: any, data?: DeleteMountTargetOutput) => void
  ): void;
  public deleteMountTarget(
    args: DeleteMountTargetInput,
    cb?: (err: any, data?: DeleteMountTargetOutput) => void
  ): Promise<DeleteMountTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteMountTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified tags from a file system. If the <code>DeleteTags</code> request includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DeleteTags</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {FileSystemNotFound} <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the requester's AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTags(args: DeleteTagsInput): Promise<DeleteTagsOutput>;
  public deleteTags(
    args: DeleteTagsInput,
    cb: (err: any, data?: DeleteTagsOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsInput,
    cb?: (err: any, data?: DeleteTagsOutput) => void
  ): Promise<DeleteTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the description of a specific Amazon EFS file system if either the file system <code>CreationToken</code> or the <code>FileSystemId</code> is provided. Otherwise, it returns descriptions of all file systems owned by the caller's AWS account in the AWS Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxItems</code> parameter to limit the number of descriptions in a response. Currently, this number is automatically set to 10. If more file system descriptions remain, Amazon EFS returns a <code>NextMarker</code>, an opaque token, in the response. In this case, you should send a subsequent request with the <code>Marker</code> request parameter set to the value of <code>NextMarker</code>. </p> <p>To retrieve a list of your file system descriptions, this operation is used in an iterative process, where <code>DescribeFileSystems</code> is called first without the <code>Marker</code> and then the operation continues to call it with the <code>Marker</code> parameter set to the value of the <code>NextMarker</code> from the previous response until the response has no <code>NextMarker</code>. </p> <p> The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multi-call iteration is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystems</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {FileSystemNotFound} <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the requester's AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFileSystems(
    args: DescribeFileSystemsInput
  ): Promise<DescribeFileSystemsOutput>;
  public describeFileSystems(
    args: DescribeFileSystemsInput,
    cb: (err: any, data?: DescribeFileSystemsOutput) => void
  ): void;
  public describeFileSystems(
    args: DescribeFileSystemsInput,
    cb?: (err: any, data?: DescribeFileSystemsOutput) => void
  ): Promise<DescribeFileSystemsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFileSystemsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the current <code>LifecycleConfiguration</code> object for the specified Amazon EFS file system. EFS lifecycle management uses the <code>LifecycleConfiguration</code> object to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system without a <code>LifecycleConfiguration</code> object, the call returns an empty array in the response.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {FileSystemNotFound} <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the requester's AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLifecycleConfiguration(
    args: DescribeLifecycleConfigurationInput
  ): Promise<DescribeLifecycleConfigurationOutput>;
  public describeLifecycleConfiguration(
    args: DescribeLifecycleConfigurationInput,
    cb: (err: any, data?: DescribeLifecycleConfigurationOutput) => void
  ): void;
  public describeLifecycleConfiguration(
    args: DescribeLifecycleConfigurationInput,
    cb?: (err: any, data?: DescribeLifecycleConfigurationOutput) => void
  ): Promise<DescribeLifecycleConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLifecycleConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>.</p> <p>This operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {MountTargetNotFound} <p>Returned if there is no mount target with the specified ID found in the caller's account.</p>
   *   - {IncorrectMountTargetState} <p>Returned if the mount target is not in the correct state for the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMountTargetSecurityGroups(
    args: DescribeMountTargetSecurityGroupsInput
  ): Promise<DescribeMountTargetSecurityGroupsOutput>;
  public describeMountTargetSecurityGroups(
    args: DescribeMountTargetSecurityGroupsInput,
    cb: (err: any, data?: DescribeMountTargetSecurityGroupsOutput) => void
  ): void;
  public describeMountTargetSecurityGroups(
    args: DescribeMountTargetSecurityGroupsInput,
    cb?: (err: any, data?: DescribeMountTargetSecurityGroupsOutput) => void
  ): Promise<DescribeMountTargetSecurityGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMountTargetSecurityGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified.</p> <p>This operation requires permissions for the <code>elasticfilesystem:DescribeMountTargets</code> action, on either the file system ID that you specify in <code>FileSystemId</code>, or on the file system of the mount target that you specify in <code>MountTargetId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {FileSystemNotFound} <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the requester's AWS account.</p>
   *   - {MountTargetNotFound} <p>Returned if there is no mount target with the specified ID found in the caller's account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMountTargets(
    args: DescribeMountTargetsInput
  ): Promise<DescribeMountTargetsOutput>;
  public describeMountTargets(
    args: DescribeMountTargetsInput,
    cb: (err: any, data?: DescribeMountTargetsOutput) => void
  ): void;
  public describeMountTargets(
    args: DescribeMountTargetsInput,
    cb?: (err: any, data?: DescribeMountTargetsOutput) => void
  ): Promise<DescribeMountTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMountTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the tags associated with a file system. The order of tags returned in the response of one <code>DescribeTags</code> call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified. </p> <p> This operation requires permissions for the <code>elasticfilesystem:DescribeTags</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {FileSystemNotFound} <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the requester's AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTags(args: DescribeTagsInput): Promise<DescribeTagsOutput>;
  public describeTags(
    args: DescribeTagsInput,
    cb: (err: any, data?: DescribeTagsOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsInput,
    cb?: (err: any, data?: DescribeTagsOutput) => void
  ): Promise<DescribeTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the set of security groups in effect for a mount target.</p> <p>When you create a mount target, Amazon EFS also creates a new network interface. For more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the network interface associated with a mount target, with the <code>SecurityGroups</code> provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not <code>deleted</code>. </p> <p>The operation requires permissions for the following actions:</p> <ul> <li> <p> <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount target's file system. </p> </li> <li> <p> <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network interface. </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {MountTargetNotFound} <p>Returned if there is no mount target with the specified ID found in the caller's account.</p>
   *   - {IncorrectMountTargetState} <p>Returned if the mount target is not in the correct state for the operation.</p>
   *   - {SecurityGroupLimitExceeded} <p>Returned if the size of <code>SecurityGroups</code> specified in the request is greater than five.</p>
   *   - {SecurityGroupNotFound} <p>Returned if one of the specified security groups doesn't exist in the subnet's VPC.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyMountTargetSecurityGroups(
    args: ModifyMountTargetSecurityGroupsInput
  ): Promise<ModifyMountTargetSecurityGroupsOutput>;
  public modifyMountTargetSecurityGroups(
    args: ModifyMountTargetSecurityGroupsInput,
    cb: (err: any, data?: ModifyMountTargetSecurityGroupsOutput) => void
  ): void;
  public modifyMountTargetSecurityGroups(
    args: ModifyMountTargetSecurityGroupsInput,
    cb?: (err: any, data?: ModifyMountTargetSecurityGroupsOutput) => void
  ): Promise<ModifyMountTargetSecurityGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyMountTargetSecurityGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables lifecycle management by creating a new <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object defines when files in an Amazon EFS file system are automatically transitioned to the lower-cost EFS Infrequent Access (IA) storage class. A <code>LifecycleConfiguration</code> applies to all files in a file system.</p> <p>Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a <code>LifecycleConfiguration</code> object already exists for the specified file system, a <code>PutLifecycleConfiguration</code> call modifies the existing configuration. A <code>PutLifecycleConfiguration</code> call with an empty <code>LifecyclePolicies</code> array in the request body deletes any existing <code>LifecycleConfiguration</code> and disables lifecycle management.</p> <p>In the request, specify the following: </p> <ul> <li> <p>The ID for the file system for which you are enabling, disabling, or modifying lifecycle management.</p> </li> <li> <p>A <code>LifecyclePolicies</code> array of <code>LifecyclePolicy</code> objects that define when files are moved to the IA storage class. The array can contain only one <code>LifecyclePolicy</code> item.</p> </li> </ul> <p>This operation requires permissions for the <code>elasticfilesystem:PutLifecycleConfiguration</code> operation.</p> <p>To apply a <code>LifecycleConfiguration</code> object to an encrypted file system, you need the same AWS Key Management Service (AWS KMS) permissions as when you created the encrypted file system. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {FileSystemNotFound} <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the requester's AWS account.</p>
   *   - {IncorrectFileSystemLifeCycleState} <p>Returned if the file system's lifecycle state is not "available".</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putLifecycleConfiguration(
    args: PutLifecycleConfigurationInput
  ): Promise<PutLifecycleConfigurationOutput>;
  public putLifecycleConfiguration(
    args: PutLifecycleConfigurationInput,
    cb: (err: any, data?: PutLifecycleConfigurationOutput) => void
  ): void;
  public putLifecycleConfiguration(
    args: PutLifecycleConfigurationInput,
    cb?: (err: any, data?: PutLifecycleConfigurationOutput) => void
  ): Promise<PutLifecycleConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutLifecycleConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the throughput mode or the amount of provisioned throughput of an existing file system.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
   *   - {FileSystemNotFound} <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the requester's AWS account.</p>
   *   - {IncorrectFileSystemLifeCycleState} <p>Returned if the file system's lifecycle state is not "available".</p>
   *   - {InsufficientThroughputCapacity} <p>Returned if there's not enough capacity to provision additional throughput. This value might be returned when you try to create a file system in provisioned throughput mode, when you attempt to increase the provisioned throughput of an existing file system, or when you attempt to change an existing file system from bursting to provisioned throughput mode.</p>
   *   - {InternalServerError} <p>Returned if an error occurred on the server side.</p>
   *   - {ThroughputLimitExceeded} <p>Returned if the throughput mode or amount of provisioned throughput can't be changed because the throughput limit of 1024 MiB/s has been reached.</p>
   *   - {TooManyRequests} <p>Returned if you don’t wait at least 24 hours before changing the throughput mode, or decreasing the Provisioned Throughput value.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFileSystem(
    args: UpdateFileSystemInput
  ): Promise<UpdateFileSystemOutput>;
  public updateFileSystem(
    args: UpdateFileSystemInput,
    cb: (err: any, data?: UpdateFileSystemOutput) => void
  ): void;
  public updateFileSystem(
    args: UpdateFileSystemInput,
    cb?: (err: any, data?: UpdateFileSystemOutput) => void
  ): Promise<UpdateFileSystemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFileSystemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
