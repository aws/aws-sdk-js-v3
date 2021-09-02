import { EFSClient } from "./EFSClient";
import {
  CreateAccessPointCommand,
  CreateAccessPointCommandInput,
  CreateAccessPointCommandOutput,
} from "./commands/CreateAccessPointCommand";
import {
  CreateFileSystemCommand,
  CreateFileSystemCommandInput,
  CreateFileSystemCommandOutput,
} from "./commands/CreateFileSystemCommand";
import {
  CreateMountTargetCommand,
  CreateMountTargetCommandInput,
  CreateMountTargetCommandOutput,
} from "./commands/CreateMountTargetCommand";
import { CreateTagsCommand, CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import {
  DeleteAccessPointCommand,
  DeleteAccessPointCommandInput,
  DeleteAccessPointCommandOutput,
} from "./commands/DeleteAccessPointCommand";
import {
  DeleteFileSystemCommand,
  DeleteFileSystemCommandInput,
  DeleteFileSystemCommandOutput,
} from "./commands/DeleteFileSystemCommand";
import {
  DeleteFileSystemPolicyCommand,
  DeleteFileSystemPolicyCommandInput,
  DeleteFileSystemPolicyCommandOutput,
} from "./commands/DeleteFileSystemPolicyCommand";
import {
  DeleteMountTargetCommand,
  DeleteMountTargetCommandInput,
  DeleteMountTargetCommandOutput,
} from "./commands/DeleteMountTargetCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DescribeAccessPointsCommand,
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput,
} from "./commands/DescribeAccessPointsCommand";
import {
  DescribeAccountPreferencesCommand,
  DescribeAccountPreferencesCommandInput,
  DescribeAccountPreferencesCommandOutput,
} from "./commands/DescribeAccountPreferencesCommand";
import {
  DescribeBackupPolicyCommand,
  DescribeBackupPolicyCommandInput,
  DescribeBackupPolicyCommandOutput,
} from "./commands/DescribeBackupPolicyCommand";
import {
  DescribeFileSystemPolicyCommand,
  DescribeFileSystemPolicyCommandInput,
  DescribeFileSystemPolicyCommandOutput,
} from "./commands/DescribeFileSystemPolicyCommand";
import {
  DescribeFileSystemsCommand,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "./commands/DescribeFileSystemsCommand";
import {
  DescribeLifecycleConfigurationCommand,
  DescribeLifecycleConfigurationCommandInput,
  DescribeLifecycleConfigurationCommandOutput,
} from "./commands/DescribeLifecycleConfigurationCommand";
import {
  DescribeMountTargetSecurityGroupsCommand,
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput,
} from "./commands/DescribeMountTargetSecurityGroupsCommand";
import {
  DescribeMountTargetsCommand,
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput,
} from "./commands/DescribeMountTargetsCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyMountTargetSecurityGroupsCommand,
  ModifyMountTargetSecurityGroupsCommandInput,
  ModifyMountTargetSecurityGroupsCommandOutput,
} from "./commands/ModifyMountTargetSecurityGroupsCommand";
import {
  PutAccountPreferencesCommand,
  PutAccountPreferencesCommandInput,
  PutAccountPreferencesCommandOutput,
} from "./commands/PutAccountPreferencesCommand";
import {
  PutBackupPolicyCommand,
  PutBackupPolicyCommandInput,
  PutBackupPolicyCommandOutput,
} from "./commands/PutBackupPolicyCommand";
import {
  PutFileSystemPolicyCommand,
  PutFileSystemPolicyCommandInput,
  PutFileSystemPolicyCommandOutput,
} from "./commands/PutFileSystemPolicyCommand";
import {
  PutLifecycleConfigurationCommand,
  PutLifecycleConfigurationCommandInput,
  PutLifecycleConfigurationCommandOutput,
} from "./commands/PutLifecycleConfigurationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateFileSystemCommand,
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput,
} from "./commands/UpdateFileSystemCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon Elastic File System</fullname>
 *          <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use
 *       with Amazon EC2 instances in the Amazon Web Services Cloud. With Amazon EFS, storage capacity is elastic,
 *       growing and shrinking automatically as you add and remove files, so your applications have the
 *       storage they need, when they need it. For more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">Amazon Elastic File System API Reference</a> and the <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">Amazon Elastic File System User Guide</a>.</p>
 */
export class EFS extends EFSClient {
  /**
   * <p>Creates an EFS access point. An access point is an application-specific view into an EFS
   *       file system that applies an operating system user and group, and a file system path, to any
   *       file system request made through the access point. The operating system user and group
   *       override any identity information provided by the NFS client. The file system path is exposed
   *       as the access point's root directory. Applications using the access point can only access data
   *       in its own directory and below. To learn more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a file system using EFS access
   *         points</a>.</p>
   *          <p>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</p>
   */
  public createAccessPoint(
    args: CreateAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPointCommandOutput>;
  public createAccessPoint(
    args: CreateAccessPointCommandInput,
    cb: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): void;
  public createAccessPoint(
    args: CreateAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): void;
  public createAccessPoint(
    args: CreateAccessPointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccessPointCommandOutput) => void),
    cb?: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): Promise<CreateAccessPointCommandOutput> | void {
    const command = new CreateAccessPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new, empty file system. The operation requires a creation token in the
   *       request that Amazon EFS uses to ensure idempotent creation (calling the operation with same
   *       creation token has no effect). If a file system does not currently exist that is owned by the
   *       caller's Amazon Web Services account with the specified creation token, this operation does the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>Creates a new, empty file system. The file system will have an Amazon EFS assigned
   *           ID, and an initial lifecycle state <code>creating</code>.</p>
   *             </li>
   *             <li>
   *                <p>Returns with the description of the created file system.</p>
   *             </li>
   *          </ul>
   *          <p>Otherwise, this operation returns a <code>FileSystemAlreadyExists</code> error with the
   *       ID of the existing file system.</p>
   *          <note>
   *             <p>For basic use cases, you can use a randomly generated UUID for the creation
   *         token.</p>
   *          </note>
   *          <p> The idempotent operation allows you to retry a <code>CreateFileSystem</code> call without
   *       risk of creating an extra file system. This can happen when an initial call fails in a way
   *       that leaves it uncertain whether or not a file system was actually created. An example might
   *       be that a transport level timeout occurred or your connection was reset. As long as you use
   *       the same creation token, if the initial call had succeeded in creating a file system, the
   *       client can learn of its existence from the <code>FileSystemAlreadyExists</code> error.</p>
   *          <p>For more information, see
   *       <a href="https://docs.aws.amazon.com/efs/latest/ug/creating-using-create-fs.html#creating-using-create-fs-part1">Creating a file system</a>
   *      in the <i>Amazon EFS User Guide</i>.</p>
   *
   *          <note>
   *             <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle
   *         state is still <code>creating</code>. You can check the file system creation status by
   *         calling the <a>DescribeFileSystems</a> operation, which among other things returns the file
   *         system state.</p>
   *          </note>
   *
   *          <p>This operation accepts an optional <code>PerformanceMode</code> parameter that you
   *       choose for your file system. We recommend <code>generalPurpose</code> performance mode for
   *       most file systems. File systems using the <code>maxIO</code> performance mode can scale to
   *       higher levels of aggregate throughput and operations per second with a tradeoff of slightly
   *       higher latencies for most file operations. The performance mode can't be changed after
   *       the file system has been created. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html">Amazon EFS performance
   *         modes</a>.</p>
   *
   *          <p>You can set the throughput mode for the file system using the <code>ThroughputMode</code> parameter.</p>
   *
   *          <p>After the file system is fully created, Amazon EFS sets its lifecycle state to
   *         <code>available</code>, at which point you can create one or more mount targets for the file
   *       system in your VPC. For more information, see <a>CreateMountTarget</a>. You mount your Amazon EFS file system on an EC2 instances in
   *       your VPC by using the mount target. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p>
   *
   *          <p> This operation requires permissions for the
   *         <code>elasticfilesystem:CreateFileSystem</code> action. </p>
   */
  public createFileSystem(
    args: CreateFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFileSystemCommandOutput>;
  public createFileSystem(
    args: CreateFileSystemCommandInput,
    cb: (err: any, data?: CreateFileSystemCommandOutput) => void
  ): void;
  public createFileSystem(
    args: CreateFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFileSystemCommandOutput) => void
  ): void;
  public createFileSystem(
    args: CreateFileSystemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFileSystemCommandOutput) => void),
    cb?: (err: any, data?: CreateFileSystemCommandOutput) => void
  ): Promise<CreateFileSystemCommandOutput> | void {
    const command = new CreateFileSystemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a mount target for a file system. You can then mount the file system on EC2
   *       instances by using the mount target.</p>
   *          <p>You can create one mount target in each Availability Zone in your VPC. All EC2
   *       instances in a VPC within a given Availability Zone share a single mount target for a given
   *       file system. If you have multiple subnets in an Availability Zone, you create a mount target
   *       in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target
   *       in order to access their file system.</p>
   *          <p>You can create only one mount target for an EFS file system using One Zone storage
   *       classes. You must create that mount target in the same Availability Zone in which the file
   *       system is located. Use the <code>AvailabilityZoneName</code> and
   *         <code>AvailabiltyZoneId</code> properties in the <a>DescribeFileSystems</a>
   *       response object to get this information. Use the <code>subnetId</code> associated with the
   *       file system's Availability Zone when creating the mount target.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p>
   *          <p>To create a mount target for a file system, the file system's lifecycle state must be
   *         <code>available</code>. For more information, see <a>DescribeFileSystems</a>.</p>
   *          <p>In the request, provide the following:</p>
   *          <ul>
   *             <li>
   *                <p>The file system ID for which you are creating the mount
   *         target.</p>
   *             </li>
   *             <li>
   *                <p>A subnet ID, which determines the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>The VPC in which Amazon EFS creates the mount target</p>
   *                   </li>
   *                   <li>
   *                      <p>The Availability Zone in which Amazon EFS creates the mount target</p>
   *                   </li>
   *                   <li>
   *                      <p>The IP address range from which Amazon EFS selects the IP address of the mount target
   *               (if you don't specify an IP address in the request)</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   *          <p>After creating the mount target, Amazon EFS returns a response that includes, a
   *         <code>MountTargetId</code> and an <code>IpAddress</code>. You use this IP address when
   *       mounting the file system in an EC2 instance. You can also use the mount target's DNS name
   *       when mounting the file system. The EC2 instance on which you mount the file system by using
   *       the mount target can resolve the mount target's DNS name to its IP address. For more
   *       information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html#how-it-works-implementation">How it Works:
   *         Implementation Overview</a>. </p>
   *          <p>Note that you can create mount targets for a file system in only one VPC, and there can
   *       be only one mount target per Availability Zone. That is, if the file system already has one or
   *       more mount targets created for it, the subnet specified in the request to add another mount
   *       target must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Must belong to the same VPC as the subnets of the existing mount targets</p>
   *             </li>
   *             <li>
   *                <p>Must not be in the same Availability Zone as any of the subnets of the existing
   *           mount targets</p>
   *             </li>
   *          </ul>
   *
   *          <p>If the request satisfies the requirements, Amazon EFS does the following:</p>
   *          <ul>
   *             <li>
   *                <p>Creates a new mount target in the specified subnet.</p>
   *             </li>
   *             <li>
   *                <p>Also creates a new network interface in the subnet as follows:</p>
   *                <ul>
   *                   <li>
   *                      <p>If the request provides an <code>IpAddress</code>, Amazon EFS assigns that IP
   *               address to the network interface. Otherwise, Amazon EFS assigns a free address in the
   *               subnet (in the same way that the Amazon EC2 <code>CreateNetworkInterface</code> call
   *               does when a request does not specify a primary private IP address).</p>
   *                   </li>
   *                   <li>
   *                      <p>If the request provides <code>SecurityGroups</code>, this network interface is
   *               associated with those security groups. Otherwise, it belongs to the default security
   *               group for the subnet's VPC.</p>
   *                   </li>
   *                   <li>
   *                      <p>Assigns the description <code>Mount target <i>fsmt-id</i> for
   *                 file system <i>fs-id</i>
   *                         </code> where <code>
   *                            <i>fsmt-id</i>
   *                         </code> is the mount target ID, and <code>
   *                            <i>fs-id</i>
   *                         </code> is the <code>FileSystemId</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Sets the <code>requesterManaged</code> property of the network interface to
   *                 <code>true</code>, and the <code>requesterId</code> value to
   *               <code>EFS</code>.</p>
   *                   </li>
   *                </ul>
   *                <p>Each Amazon EFS mount target has one corresponding requester-managed EC2 network
   *           interface. After the network interface is created, Amazon EFS sets the
   *             <code>NetworkInterfaceId</code> field in the mount target's description to the
   *           network interface ID, and the <code>IpAddress</code> field to its address. If network
   *           interface creation fails, the entire <code>CreateMountTarget</code> operation
   *           fails.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>CreateMountTarget</code> call returns only after creating the network
   *         interface, but while the mount target state is still <code>creating</code>, you can check
   *         the mount target creation status by calling the <a>DescribeMountTargets</a> operation, which among other things returns the mount
   *         target state.</p>
   *          </note>
   *          <p>We recommend that you create a mount target in each of the Availability Zones. There
   *       are cost considerations for using a file system in an Availability Zone through a mount target
   *       created in another Availability Zone. For more information, see <a href="http://aws.amazon.com/efs/">Amazon EFS</a>. In addition, by always using a mount target local to the
   *       instance's Availability Zone, you eliminate a partial failure scenario. If the
   *       Availability Zone in which your mount target is created goes down, then you can't access
   *       your file system through that mount target. </p>
   *          <p>This operation requires permissions for the following action on the file
   *       system:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>elasticfilesystem:CreateMountTarget</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>This operation also requires permissions for the following Amazon EC2
   *       actions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeSubnets</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeNetworkInterfaces</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:CreateNetworkInterface</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createMountTarget(
    args: CreateMountTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMountTargetCommandOutput>;
  public createMountTarget(
    args: CreateMountTargetCommandInput,
    cb: (err: any, data?: CreateMountTargetCommandOutput) => void
  ): void;
  public createMountTarget(
    args: CreateMountTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMountTargetCommandOutput) => void
  ): void;
  public createMountTarget(
    args: CreateMountTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMountTargetCommandOutput) => void),
    cb?: (err: any, data?: CreateMountTargetCommandOutput) => void
  ): Promise<CreateMountTargetCommandOutput> | void {
    const command = new CreateMountTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <note>
   *             <p>DEPRECATED - CreateTags is deprecated and not maintained. Please use the
   *        API action to create tags for EFS resources.</p>
   *          </note>
   *          <p>Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If
   *       a tag key specified in the request already exists on the file system, this operation
   *       overwrites its value with the value provided in the request. If you add the <code>Name</code>
   *       tag to your file system, Amazon EFS returns it in the response to the <a>DescribeFileSystems</a> operation. </p>
   *          <p>This operation requires permission for the <code>elasticfilesystem:CreateTags</code>
   *       action.</p>
   */
  public createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
  public createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
  public createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  public createTags(
    args: CreateTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTagsCommandOutput) => void),
    cb?: (err: any, data?: CreateTagsCommandOutput) => void
  ): Promise<CreateTagsCommandOutput> | void {
    const command = new CreateTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified access point. After deletion is complete, new clients can no
   *       longer connect to the access points. Clients connected to the access point at the time of
   *       deletion will continue to function until they terminate their connection.</p>
   *          <p>This operation requires permissions for the <code>elasticfilesystem:DeleteAccessPoint</code> action.</p>
   */
  public deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPointCommandOutput>;
  public deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    cb: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): void;
  public deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): void;
  public deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessPointCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): Promise<DeleteAccessPointCommandOutput> | void {
    const command = new DeleteAccessPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a file system, permanently severing access to its contents. Upon return, the
   *       file system no longer exists and you can't access any contents of the deleted file
   *       system.</p>
   *          <p> You can't delete a file system that is in use. That is, if the file system has
   *       any mount targets, you must first delete them. For more information, see <a>DescribeMountTargets</a> and <a>DeleteMountTarget</a>. </p>
   *
   *          <note>
   *             <p>The <code>DeleteFileSystem</code> call returns while the file system state is still
   *           <code>deleting</code>. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> operation, which returns a list of file systems in your
   *         account. If you pass file system ID or creation token for the deleted file system, the <a>DescribeFileSystems</a> returns a <code>404 FileSystemNotFound</code>
   *         error.</p>
   *          </note>
   *
   *          <p>This operation requires permissions for the
   *         <code>elasticfilesystem:DeleteFileSystem</code> action.</p>
   */
  public deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFileSystemCommandOutput>;
  public deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    cb: (err: any, data?: DeleteFileSystemCommandOutput) => void
  ): void;
  public deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFileSystemCommandOutput) => void
  ): void;
  public deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFileSystemCommandOutput) => void),
    cb?: (err: any, data?: DeleteFileSystemCommandOutput) => void
  ): Promise<DeleteFileSystemCommandOutput> | void {
    const command = new DeleteFileSystemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the <code>FileSystemPolicy</code> for the specified file system.
   *       The default <code>FileSystemPolicy</code> goes into effect once the existing policy is deleted.
   *       For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/res-based-policies-efs.html">Using Resource-based Policies with EFS</a>.</p>
   *          <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystemPolicy</code> action.</p>
   */
  public deleteFileSystemPolicy(
    args: DeleteFileSystemPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFileSystemPolicyCommandOutput>;
  public deleteFileSystemPolicy(
    args: DeleteFileSystemPolicyCommandInput,
    cb: (err: any, data?: DeleteFileSystemPolicyCommandOutput) => void
  ): void;
  public deleteFileSystemPolicy(
    args: DeleteFileSystemPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFileSystemPolicyCommandOutput) => void
  ): void;
  public deleteFileSystemPolicy(
    args: DeleteFileSystemPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFileSystemPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteFileSystemPolicyCommandOutput) => void
  ): Promise<DeleteFileSystemPolicyCommandOutput> | void {
    const command = new DeleteFileSystemPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified mount target.</p>
   *
   *          <p>This operation forcibly breaks any mounts of the file system by using the mount target
   *       that is being deleted, which might disrupt instances or applications using those mounts. To
   *       avoid applications getting cut off abruptly, you might consider unmounting any mounts of the
   *       mount target, if feasible. The operation also deletes the associated network interface.
   *       Uncommitted writes might be lost, but breaking a mount target using this operation does not
   *       corrupt the file system itself. The file system you created remains. You can mount an EC2
   *       instance in your VPC by using another mount target.</p>
   *          <p>This operation requires permissions for the following action on the file
   *       system:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>elasticfilesystem:DeleteMountTarget</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still
   *           <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target
   *         descriptions for the given file system. </p>
   *          </note>
   *
   *          <p>The operation also requires permissions for the following Amazon EC2 action on the
   *       mount target's network interface:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ec2:DeleteNetworkInterface</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteMountTarget(
    args: DeleteMountTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMountTargetCommandOutput>;
  public deleteMountTarget(
    args: DeleteMountTargetCommandInput,
    cb: (err: any, data?: DeleteMountTargetCommandOutput) => void
  ): void;
  public deleteMountTarget(
    args: DeleteMountTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMountTargetCommandOutput) => void
  ): void;
  public deleteMountTarget(
    args: DeleteMountTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMountTargetCommandOutput) => void),
    cb?: (err: any, data?: DeleteMountTargetCommandOutput) => void
  ): Promise<DeleteMountTargetCommandOutput> | void {
    const command = new DeleteMountTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <note>
   *             <p>DEPRECATED - DeleteTags is deprecated and not maintained. Please use the
   *        API action to remove tags from EFS resources.</p>
   *          </note>
   *          <p>Deletes the specified tags from a file system. If the <code>DeleteTags</code> request
   *       includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an
   *       error. For more information about tags and related restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Tag restrictions</a> in the
   *         <i>Billing and Cost Management User Guide</i>.</p>
   *
   *          <p>This operation requires permissions for the <code>elasticfilesystem:DeleteTags</code>
   *       action.</p>
   */
  public deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  public deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTagsCommandOutput) => void),
    cb?: (err: any, data?: DeleteTagsCommandOutput) => void
  ): Promise<DeleteTagsCommandOutput> | void {
    const command = new DeleteTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the description of a specific Amazon EFS access point if the <code>AccessPointId</code> is provided.
   *       If you provide an EFS <code>FileSystemId</code>, it returns descriptions of all access points for that file system.
   *       You can provide either an <code>AccessPointId</code> or a <code>FileSystemId</code> in the request, but not both. </p>
   *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
   */
  public describeAccessPoints(
    args: DescribeAccessPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccessPointsCommandOutput>;
  public describeAccessPoints(
    args: DescribeAccessPointsCommandInput,
    cb: (err: any, data?: DescribeAccessPointsCommandOutput) => void
  ): void;
  public describeAccessPoints(
    args: DescribeAccessPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccessPointsCommandOutput) => void
  ): void;
  public describeAccessPoints(
    args: DescribeAccessPointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccessPointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccessPointsCommandOutput) => void
  ): Promise<DescribeAccessPointsCommandOutput> | void {
    const command = new DescribeAccessPointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the account preferences settings for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region.
   *       For more information, see <a href="efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.</p>
   */
  public describeAccountPreferences(
    args: DescribeAccountPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountPreferencesCommandOutput>;
  public describeAccountPreferences(
    args: DescribeAccountPreferencesCommandInput,
    cb: (err: any, data?: DescribeAccountPreferencesCommandOutput) => void
  ): void;
  public describeAccountPreferences(
    args: DescribeAccountPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountPreferencesCommandOutput) => void
  ): void;
  public describeAccountPreferences(
    args: DescribeAccountPreferencesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountPreferencesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountPreferencesCommandOutput) => void
  ): Promise<DescribeAccountPreferencesCommandOutput> | void {
    const command = new DescribeAccountPreferencesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the backup policy for the specified EFS file system.</p>
   */
  public describeBackupPolicy(
    args: DescribeBackupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupPolicyCommandOutput>;
  public describeBackupPolicy(
    args: DescribeBackupPolicyCommandInput,
    cb: (err: any, data?: DescribeBackupPolicyCommandOutput) => void
  ): void;
  public describeBackupPolicy(
    args: DescribeBackupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupPolicyCommandOutput) => void
  ): void;
  public describeBackupPolicy(
    args: DescribeBackupPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBackupPolicyCommandOutput) => void),
    cb?: (err: any, data?: DescribeBackupPolicyCommandOutput) => void
  ): Promise<DescribeBackupPolicyCommandOutput> | void {
    const command = new DescribeBackupPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the <code>FileSystemPolicy</code> for the specified EFS file system.</p>
   *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystemPolicy</code> action.</p>
   */
  public describeFileSystemPolicy(
    args: DescribeFileSystemPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFileSystemPolicyCommandOutput>;
  public describeFileSystemPolicy(
    args: DescribeFileSystemPolicyCommandInput,
    cb: (err: any, data?: DescribeFileSystemPolicyCommandOutput) => void
  ): void;
  public describeFileSystemPolicy(
    args: DescribeFileSystemPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFileSystemPolicyCommandOutput) => void
  ): void;
  public describeFileSystemPolicy(
    args: DescribeFileSystemPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFileSystemPolicyCommandOutput) => void),
    cb?: (err: any, data?: DescribeFileSystemPolicyCommandOutput) => void
  ): Promise<DescribeFileSystemPolicyCommandOutput> | void {
    const command = new DescribeFileSystemPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the description of a specific Amazon EFS file system if either the file system
   *         <code>CreationToken</code> or the <code>FileSystemId</code> is provided. Otherwise, it
   *       returns descriptions of all file systems owned by the caller's Amazon Web Services account in the
   *       Amazon Web Services Region of the endpoint that you're calling.</p>
   *
   *          <p>When retrieving all file system descriptions, you can optionally specify the
   *         <code>MaxItems</code> parameter to limit the number of descriptions in a response.
   *       Currently, this number is automatically set to 10. If more file system descriptions remain,
   *       Amazon EFS returns a <code>NextMarker</code>, an opaque token, in the response. In this case,
   *       you should send a subsequent request with the <code>Marker</code> request parameter set to the
   *       value of <code>NextMarker</code>. </p>
   *
   *          <p>To retrieve a list of your file system descriptions, this operation is used in an
   *       iterative process, where <code>DescribeFileSystems</code> is called first without the
   *         <code>Marker</code> and then the operation continues to call it with the <code>Marker</code>
   *       parameter set to the value of the <code>NextMarker</code> from the previous response until the
   *       response has no <code>NextMarker</code>. </p>
   *
   *          <p> The order of file systems returned in the response of one
   *         <code>DescribeFileSystems</code> call and the order of file systems returned across the
   *       responses of a multi-call iteration is unspecified. </p>
   *          <p> This operation requires permissions for the
   *         <code>elasticfilesystem:DescribeFileSystems</code> action. </p>
   */
  public describeFileSystems(
    args: DescribeFileSystemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFileSystemsCommandOutput>;
  public describeFileSystems(
    args: DescribeFileSystemsCommandInput,
    cb: (err: any, data?: DescribeFileSystemsCommandOutput) => void
  ): void;
  public describeFileSystems(
    args: DescribeFileSystemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFileSystemsCommandOutput) => void
  ): void;
  public describeFileSystems(
    args: DescribeFileSystemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFileSystemsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFileSystemsCommandOutput) => void
  ): Promise<DescribeFileSystemsCommandOutput> | void {
    const command = new DescribeFileSystemsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the current <code>LifecycleConfiguration</code> object for the specified Amazon
   *       EFS file system. EFS lifecycle management uses the <code>LifecycleConfiguration</code> object
   *       to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system
   *       without a <code>LifecycleConfiguration</code> object, the call returns an empty array in the
   *       response.</p>
   *          <p>When EFS Intelligent Tiering is enabled, <code>TransitionToPrimaryStorageClass</code> has a value of <code>AFTER_1_ACCESS</code>.</p>
   *          <p>This operation requires permissions for the
   *         <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>
   */
  public describeLifecycleConfiguration(
    args: DescribeLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLifecycleConfigurationCommandOutput>;
  public describeLifecycleConfiguration(
    args: DescribeLifecycleConfigurationCommandInput,
    cb: (err: any, data?: DescribeLifecycleConfigurationCommandOutput) => void
  ): void;
  public describeLifecycleConfiguration(
    args: DescribeLifecycleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLifecycleConfigurationCommandOutput) => void
  ): void;
  public describeLifecycleConfiguration(
    args: DescribeLifecycleConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLifecycleConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeLifecycleConfigurationCommandOutput) => void
  ): Promise<DescribeLifecycleConfigurationCommandOutput> | void {
    const command = new DescribeLifecycleConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the descriptions of all the current mount targets, or a specific mount target,
   *       for a file system. When requesting all of the current mount targets, the order of mount
   *       targets returned in the response is unspecified.</p>
   *
   *          <p>This operation requires permissions for the
   *         <code>elasticfilesystem:DescribeMountTargets</code> action, on either the file system ID
   *       that you specify in <code>FileSystemId</code>, or on the file system of the mount target that
   *       you specify in <code>MountTargetId</code>.</p>
   */
  public describeMountTargets(
    args: DescribeMountTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMountTargetsCommandOutput>;
  public describeMountTargets(
    args: DescribeMountTargetsCommandInput,
    cb: (err: any, data?: DescribeMountTargetsCommandOutput) => void
  ): void;
  public describeMountTargets(
    args: DescribeMountTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMountTargetsCommandOutput) => void
  ): void;
  public describeMountTargets(
    args: DescribeMountTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMountTargetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeMountTargetsCommandOutput) => void
  ): Promise<DescribeMountTargetsCommandOutput> | void {
    const command = new DescribeMountTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the security groups currently in effect for a mount target. This operation
   *       requires that the network interface of the mount target has been created and the lifecycle
   *       state of the mount target is not <code>deleted</code>.</p>
   *          <p>This operation requires permissions for the following actions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount
   *           target's file system. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's
   *           network interface. </p>
   *             </li>
   *          </ul>
   */
  public describeMountTargetSecurityGroups(
    args: DescribeMountTargetSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMountTargetSecurityGroupsCommandOutput>;
  public describeMountTargetSecurityGroups(
    args: DescribeMountTargetSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeMountTargetSecurityGroupsCommandOutput) => void
  ): void;
  public describeMountTargetSecurityGroups(
    args: DescribeMountTargetSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMountTargetSecurityGroupsCommandOutput) => void
  ): void;
  public describeMountTargetSecurityGroups(
    args: DescribeMountTargetSecurityGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMountTargetSecurityGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeMountTargetSecurityGroupsCommandOutput) => void
  ): Promise<DescribeMountTargetSecurityGroupsCommandOutput> | void {
    const command = new DescribeMountTargetSecurityGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <note>
   *             <p>DEPRECATED - The DeleteTags action is deprecated and not maintained. Please use the
   *          API action to remove tags from EFS resources.</p>
   *          </note>
   *          <p>Returns the tags associated with a file system. The order of tags returned in the
   *       response of one <code>DescribeTags</code> call and the order of tags returned across the
   *       responses of a multiple-call iteration (when using pagination) is unspecified. </p>
   *          <p> This operation requires permissions for the
   *         <code>elasticfilesystem:DescribeTags</code> action. </p>
   */
  public describeTags(
    args: DescribeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagsCommandOutput>;
  public describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTagsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTagsCommandOutput) => void
  ): Promise<DescribeTagsCommandOutput> | void {
    const command = new DescribeTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all tags for a top-level EFS resource. You must provide the ID of the resource that you want to retrieve the tags for.</p>
   *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the set of security groups in effect for a mount target.</p>
   *          <p>When you create a mount target, Amazon EFS also creates a new network interface. For
   *       more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the
   *       network interface associated with a mount target, with the <code>SecurityGroups</code>
   *       provided in the request. This operation requires that the network interface of the mount
   *       target has been created and the lifecycle state of the mount target is not
   *         <code>deleted</code>. </p>
   *          <p>The operation requires permissions for the following actions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount
   *           target's file system. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network
   *           interface. </p>
   *             </li>
   *          </ul>
   */
  public modifyMountTargetSecurityGroups(
    args: ModifyMountTargetSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyMountTargetSecurityGroupsCommandOutput>;
  public modifyMountTargetSecurityGroups(
    args: ModifyMountTargetSecurityGroupsCommandInput,
    cb: (err: any, data?: ModifyMountTargetSecurityGroupsCommandOutput) => void
  ): void;
  public modifyMountTargetSecurityGroups(
    args: ModifyMountTargetSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyMountTargetSecurityGroupsCommandOutput) => void
  ): void;
  public modifyMountTargetSecurityGroups(
    args: ModifyMountTargetSecurityGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyMountTargetSecurityGroupsCommandOutput) => void),
    cb?: (err: any, data?: ModifyMountTargetSecurityGroupsCommandOutput) => void
  ): Promise<ModifyMountTargetSecurityGroupsCommandOutput> | void {
    const command = new ModifyMountTargetSecurityGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Use this operation to set the account preference in the current Amazon Web Services Region to use either long 17 character (63 bit) or short 8 character (32 bit) IDs for
   *       new EFS file systems and mount targets created. All existing resource IDs are not affected by any changes you make. You can set the ID preference during the
   *       opt-in period as EFS transitions to long resource IDs. For more information,
   *       see <a href="efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.</p>
   */
  public putAccountPreferences(
    args: PutAccountPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountPreferencesCommandOutput>;
  public putAccountPreferences(
    args: PutAccountPreferencesCommandInput,
    cb: (err: any, data?: PutAccountPreferencesCommandOutput) => void
  ): void;
  public putAccountPreferences(
    args: PutAccountPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountPreferencesCommandOutput) => void
  ): void;
  public putAccountPreferences(
    args: PutAccountPreferencesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAccountPreferencesCommandOutput) => void),
    cb?: (err: any, data?: PutAccountPreferencesCommandOutput) => void
  ): Promise<PutAccountPreferencesCommandOutput> | void {
    const command = new PutAccountPreferencesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system. </p>
   */
  public putBackupPolicy(
    args: PutBackupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBackupPolicyCommandOutput>;
  public putBackupPolicy(
    args: PutBackupPolicyCommandInput,
    cb: (err: any, data?: PutBackupPolicyCommandOutput) => void
  ): void;
  public putBackupPolicy(
    args: PutBackupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBackupPolicyCommandOutput) => void
  ): void;
  public putBackupPolicy(
    args: PutBackupPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutBackupPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutBackupPolicyCommandOutput) => void
  ): Promise<PutBackupPolicyCommandOutput> | void {
    const command = new PutBackupPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies an Amazon EFS <code>FileSystemPolicy</code> to an Amazon EFS file system.
   *       A file system policy is an IAM resource-based policy and can contain multiple policy statements.
   *       A file system always has exactly one file system policy, which can be the default policy or
   *       an explicit policy set or updated using this API operation.
   *       EFS file system policies have a 20,000 character limit.
   *       When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see
   *       <a href="https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html#default-filesystempolicy">Default EFS File System Policy</a>.
   *     </p>
   *          <p>EFS file system policies have a 20,000 character limit.</p>
   *          <p>This operation requires permissions for the <code>elasticfilesystem:PutFileSystemPolicy</code> action.</p>
   */
  public putFileSystemPolicy(
    args: PutFileSystemPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFileSystemPolicyCommandOutput>;
  public putFileSystemPolicy(
    args: PutFileSystemPolicyCommandInput,
    cb: (err: any, data?: PutFileSystemPolicyCommandOutput) => void
  ): void;
  public putFileSystemPolicy(
    args: PutFileSystemPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFileSystemPolicyCommandOutput) => void
  ): void;
  public putFileSystemPolicy(
    args: PutFileSystemPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutFileSystemPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutFileSystemPolicyCommandOutput) => void
  ): Promise<PutFileSystemPolicyCommandOutput> | void {
    const command = new PutFileSystemPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables lifecycle management by creating a new <code>LifecycleConfiguration</code>
   *       object. A <code>LifecycleConfiguration</code> object defines when files in an Amazon EFS file
   *       system are automatically transitioned to the lower-cost EFS Infrequent Access (IA) storage class.
   *       To enable EFS Intelligent Tiering, set the value of <code>TransitionToPrimaryStorageClass</code> to <code>AFTER_1_ACCESS</code>.
   *       For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html">EFS Lifecycle Management</a>.</p>
   *          <p>A <code>LifecycleConfiguration</code> applies to all files in a file system.</p>
   *          <p>Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a
   *         <code>LifecycleConfiguration</code> object already exists for the specified file system, a
   *         <code>PutLifecycleConfiguration</code> call modifies the existing configuration. A
   *         <code>PutLifecycleConfiguration</code> call with an empty <code>LifecyclePolicies</code>
   *       array in the request body deletes any existing <code>LifecycleConfiguration</code> and
   *       disables lifecycle management.</p>
   *
   *
   *          <p>In the request, specify the following: </p>
   *          <ul>
   *             <li>
   *                <p>The ID for the file system for which you are enabling, disabling, or modifying lifecycle management.</p>
   *             </li>
   *             <li>
   *                <p>A <code>LifecyclePolicies</code> array of <code>LifecyclePolicy</code> objects that
   *           define when files are moved to the IA storage class. The array can contain only one
   *             <code>LifecyclePolicy</code> item.</p>
   *             </li>
   *          </ul>
   *
   *          <p>This operation requires permissions for the
   *         <code>elasticfilesystem:PutLifecycleConfiguration</code> operation.</p>
   *          <p>To apply a <code>LifecycleConfiguration</code> object to an encrypted file system, you
   *       need the same Key Management Service permissions as when you created the encrypted
   *       file system. </p>
   */
  public putLifecycleConfiguration(
    args: PutLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLifecycleConfigurationCommandOutput>;
  public putLifecycleConfiguration(
    args: PutLifecycleConfigurationCommandInput,
    cb: (err: any, data?: PutLifecycleConfigurationCommandOutput) => void
  ): void;
  public putLifecycleConfiguration(
    args: PutLifecycleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLifecycleConfigurationCommandOutput) => void
  ): void;
  public putLifecycleConfiguration(
    args: PutLifecycleConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutLifecycleConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutLifecycleConfigurationCommandOutput) => void
  ): Promise<PutLifecycleConfigurationCommandOutput> | void {
    const command = new PutLifecycleConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a tag for an EFS resource. You can create tags for EFS file systems and access points using this API operation.</p>
   *          <p>This operation requires permissions for the <code>elasticfilesystem:TagResource</code> action.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes tags from an EFS resource. You can remove tags from EFS file systems and access points using this API operation.</p>
   *          <p>This operation requires permissions for the <code>elasticfilesystem:UntagResource</code> action.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the throughput mode or the amount of provisioned throughput of an existing file
   *       system.</p>
   */
  public updateFileSystem(
    args: UpdateFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFileSystemCommandOutput>;
  public updateFileSystem(
    args: UpdateFileSystemCommandInput,
    cb: (err: any, data?: UpdateFileSystemCommandOutput) => void
  ): void;
  public updateFileSystem(
    args: UpdateFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFileSystemCommandOutput) => void
  ): void;
  public updateFileSystem(
    args: UpdateFileSystemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFileSystemCommandOutput) => void),
    cb?: (err: any, data?: UpdateFileSystemCommandOutput) => void
  ): Promise<UpdateFileSystemCommandOutput> | void {
    const command = new UpdateFileSystemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
