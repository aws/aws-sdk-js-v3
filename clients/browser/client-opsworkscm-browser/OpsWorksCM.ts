import { OpsWorksCMClient } from "./OpsWorksCMClient";
import { AssociateNodeInput } from "./types/AssociateNodeInput";
import { AssociateNodeOutput } from "./types/AssociateNodeOutput";
import { CreateBackupInput } from "./types/CreateBackupInput";
import { CreateBackupOutput } from "./types/CreateBackupOutput";
import { CreateServerInput } from "./types/CreateServerInput";
import { CreateServerOutput } from "./types/CreateServerOutput";
import { DeleteBackupInput } from "./types/DeleteBackupInput";
import { DeleteBackupOutput } from "./types/DeleteBackupOutput";
import { DeleteServerInput } from "./types/DeleteServerInput";
import { DeleteServerOutput } from "./types/DeleteServerOutput";
import { DescribeAccountAttributesInput } from "./types/DescribeAccountAttributesInput";
import { DescribeAccountAttributesOutput } from "./types/DescribeAccountAttributesOutput";
import { DescribeBackupsInput } from "./types/DescribeBackupsInput";
import { DescribeBackupsOutput } from "./types/DescribeBackupsOutput";
import { DescribeEventsInput } from "./types/DescribeEventsInput";
import { DescribeEventsOutput } from "./types/DescribeEventsOutput";
import { DescribeNodeAssociationStatusInput } from "./types/DescribeNodeAssociationStatusInput";
import { DescribeNodeAssociationStatusOutput } from "./types/DescribeNodeAssociationStatusOutput";
import { DescribeServersInput } from "./types/DescribeServersInput";
import { DescribeServersOutput } from "./types/DescribeServersOutput";
import { DisassociateNodeInput } from "./types/DisassociateNodeInput";
import { DisassociateNodeOutput } from "./types/DisassociateNodeOutput";
import { ExportServerEngineAttributeInput } from "./types/ExportServerEngineAttributeInput";
import { ExportServerEngineAttributeOutput } from "./types/ExportServerEngineAttributeOutput";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidStateException } from "./types/InvalidStateException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { RestoreServerInput } from "./types/RestoreServerInput";
import { RestoreServerOutput } from "./types/RestoreServerOutput";
import { StartMaintenanceInput } from "./types/StartMaintenanceInput";
import { StartMaintenanceOutput } from "./types/StartMaintenanceOutput";
import { UpdateServerEngineAttributesInput } from "./types/UpdateServerEngineAttributesInput";
import { UpdateServerEngineAttributesOutput } from "./types/UpdateServerEngineAttributesOutput";
import { UpdateServerInput } from "./types/UpdateServerInput";
import { UpdateServerOutput } from "./types/UpdateServerOutput";
import { ValidationException } from "./types/ValidationException";
import { AssociateNodeCommand } from "./commands/AssociateNodeCommand";
import { CreateBackupCommand } from "./commands/CreateBackupCommand";
import { CreateServerCommand } from "./commands/CreateServerCommand";
import { DeleteBackupCommand } from "./commands/DeleteBackupCommand";
import { DeleteServerCommand } from "./commands/DeleteServerCommand";
import { DescribeAccountAttributesCommand } from "./commands/DescribeAccountAttributesCommand";
import { DescribeBackupsCommand } from "./commands/DescribeBackupsCommand";
import { DescribeEventsCommand } from "./commands/DescribeEventsCommand";
import { DescribeNodeAssociationStatusCommand } from "./commands/DescribeNodeAssociationStatusCommand";
import { DescribeServersCommand } from "./commands/DescribeServersCommand";
import { DisassociateNodeCommand } from "./commands/DisassociateNodeCommand";
import { ExportServerEngineAttributeCommand } from "./commands/ExportServerEngineAttributeCommand";
import { RestoreServerCommand } from "./commands/RestoreServerCommand";
import { StartMaintenanceCommand } from "./commands/StartMaintenanceCommand";
import { UpdateServerCommand } from "./commands/UpdateServerCommand";
import { UpdateServerEngineAttributesCommand } from "./commands/UpdateServerEngineAttributesCommand";

export class OpsWorksCM extends OpsWorksCMClient {
  /**
   * <p> Associates a new node with the server. For more information about how to disassociate a node, see <a>DisassociateNode</a>.</p> <p> On a Chef server: This command is an alternative to <code>knife bootstrap</code>.</p> <p> Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>CHEF_ORGANIZATION</i>,Value=default" "Name=<i>CHEF_NODE_PUBLIC_KEY</i>,Value=<i>public-key-pem</i>"</code> </p> <p> On a Puppet server, this command is an alternative to the <code>puppet cert sign</code> command that signs a Puppet node CSR. </p> <p> Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>PUPPET_NODE_CSR</i>,Value=<i>csr-pem</i>"</code> </p> <p> A node can can only be associated with servers that are in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. The AssociateNode API call can be integrated into Auto Scaling configurations, AWS Cloudformation templates, or the user data of a server's instance. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidStateException} <p>The resource is in a state that does not allow you to perform a specified action. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateNode(args: AssociateNodeInput): Promise<AssociateNodeOutput>;
  public associateNode(
    args: AssociateNodeInput,
    cb: (err: any, data?: AssociateNodeOutput) => void
  ): void;
  public associateNode(
    args: AssociateNodeInput,
    cb?: (err: any, data?: AssociateNodeOutput) => void
  ): Promise<AssociateNodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateNodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Creates an application-level backup of a server. While the server is in the <code>BACKING_UP</code> state, the server cannot be changed, and no additional backup can be created. </p> <p> Backups can be created for servers in <code>RUNNING</code>, <code>HEALTHY</code>, and <code>UNHEALTHY</code> states. By default, you can create a maximum of 50 manual backups. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when the maximum number of manual backups is reached. An <code>InvalidStateException</code> is thrown when the server is not in any of the following states: RUNNING, HEALTHY, or UNHEALTHY. A <code>ResourceNotFoundException</code> is thrown when the server is not found. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidStateException} <p>The resource is in a state that does not allow you to perform a specified action. </p>
   *   - {LimitExceededException} <p>The limit of servers or backups has been reached. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBackup(args: CreateBackupInput): Promise<CreateBackupOutput>;
  public createBackup(
    args: CreateBackupInput,
    cb: (err: any, data?: CreateBackupOutput) => void
  ): void;
  public createBackup(
    args: CreateBackupInput,
    cb?: (err: any, data?: CreateBackupOutput) => void
  ): Promise<CreateBackupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBackupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Creates and immedately starts a new server. The server is ready to use when it is in the <code>HEALTHY</code> state. By default, you can create a maximum of 10 servers. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when you have created the maximum number of servers (10). A <code>ResourceAlreadyExistsException</code> is thrown when a server with the same name already exists in the account. A <code>ResourceNotFoundException</code> is thrown when you specify a backup ID that is not valid or is for a backup that does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p> <p> If you do not specify a security group by adding the <code>SecurityGroupIds</code> parameter, AWS OpsWorks creates a new security group. </p> <p> <i>Chef Automate:</i> The default security group opens the Chef server to the world on TCP port 443. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p> <i>Puppet Enterprise:</i> The default security group opens TCP ports 22, 443, 4433, 8140, 8142, 8143, and 8170. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p>By default, your server is accessible from any IP address. We recommend that you update your security group rules to allow access from known IP addresses and address ranges only. To edit security group rules, open Security Groups in the navigation pane of the EC2 management console. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The limit of servers or backups has been reached. </p>
   *   - {ResourceAlreadyExistsException} <p>The requested resource cannot be created because it already exists. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createServer(args: CreateServerInput): Promise<CreateServerOutput>;
  public createServer(
    args: CreateServerInput,
    cb: (err: any, data?: CreateServerOutput) => void
  ): void;
  public createServer(
    args: CreateServerInput,
    cb?: (err: any, data?: CreateServerOutput) => void
  ): Promise<CreateServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Deletes a backup. You can delete both manual and automated backups. This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a backup deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidStateException} <p>The resource is in a state that does not allow you to perform a specified action. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBackup(args: DeleteBackupInput): Promise<DeleteBackupOutput>;
  public deleteBackup(
    args: DeleteBackupInput,
    cb: (err: any, data?: DeleteBackupOutput) => void
  ): void;
  public deleteBackup(
    args: DeleteBackupInput,
    cb?: (err: any, data?: DeleteBackupOutput) => void
  ): Promise<DeleteBackupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBackupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Deletes the server and the underlying AWS CloudFormation stacks (including the server's EC2 instance). When you run this command, the server state is updated to <code>DELETING</code>. After the server is deleted, it is no longer returned by <code>DescribeServer</code> requests. If the AWS CloudFormation stack cannot be deleted, the server cannot be deleted. </p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a server deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p> <p> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidStateException} <p>The resource is in a state that does not allow you to perform a specified action. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteServer(args: DeleteServerInput): Promise<DeleteServerOutput>;
  public deleteServer(
    args: DeleteServerInput,
    cb: (err: any, data?: DeleteServerOutput) => void
  ): void;
  public deleteServer(
    args: DeleteServerInput,
    cb?: (err: any, data?: DeleteServerOutput) => void
  ): Promise<DeleteServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Describes your OpsWorks-CM account attributes. </p> <p> This operation is synchronous. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput
  ): Promise<DescribeAccountAttributesOutput>;
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput,
    cb: (err: any, data?: DescribeAccountAttributesOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput,
    cb?: (err: any, data?: DescribeAccountAttributesOutput) => void
  ): Promise<DescribeAccountAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAccountAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Describes backups. The results are ordered by time, with newest backups first. If you do not specify a BackupId or ServerName, the command returns all backups. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {InvalidNextTokenException} <p>This occurs when the provided nextToken is not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBackups(
    args: DescribeBackupsInput
  ): Promise<DescribeBackupsOutput>;
  public describeBackups(
    args: DescribeBackupsInput,
    cb: (err: any, data?: DescribeBackupsOutput) => void
  ): void;
  public describeBackups(
    args: DescribeBackupsInput,
    cb?: (err: any, data?: DescribeBackupsOutput) => void
  ): Promise<DescribeBackupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBackupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Describes events for a specified server. Results are ordered by time, with newest events first. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {InvalidNextTokenException} <p>This occurs when the provided nextToken is not valid. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEvents(
    args: DescribeEventsInput
  ): Promise<DescribeEventsOutput>;
  public describeEvents(
    args: DescribeEventsInput,
    cb: (err: any, data?: DescribeEventsOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsInput,
    cb?: (err: any, data?: DescribeEventsOutput) => void
  ): Promise<DescribeEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns the current status of an existing association or disassociation request. </p> <p> A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found, or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNodeAssociationStatus(
    args: DescribeNodeAssociationStatusInput
  ): Promise<DescribeNodeAssociationStatusOutput>;
  public describeNodeAssociationStatus(
    args: DescribeNodeAssociationStatusInput,
    cb: (err: any, data?: DescribeNodeAssociationStatusOutput) => void
  ): void;
  public describeNodeAssociationStatus(
    args: DescribeNodeAssociationStatusInput,
    cb?: (err: any, data?: DescribeNodeAssociationStatusOutput) => void
  ): Promise<DescribeNodeAssociationStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNodeAssociationStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Lists all configuration management servers that are identified with your account. Only the stored results from Amazon DynamoDB are returned. AWS OpsWorks CM does not query other services. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {InvalidNextTokenException} <p>This occurs when the provided nextToken is not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeServers(
    args: DescribeServersInput
  ): Promise<DescribeServersOutput>;
  public describeServers(
    args: DescribeServersInput,
    cb: (err: any, data?: DescribeServersOutput) => void
  ): void;
  public describeServers(
    args: DescribeServersInput,
    cb?: (err: any, data?: DescribeServersOutput) => void
  ): Promise<DescribeServersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeServersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Disassociates a node from an AWS OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated, the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>. </p> <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidStateException} <p>The resource is in a state that does not allow you to perform a specified action. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateNode(
    args: DisassociateNodeInput
  ): Promise<DisassociateNodeOutput>;
  public disassociateNode(
    args: DisassociateNodeInput,
    cb: (err: any, data?: DisassociateNodeOutput) => void
  ): void;
  public disassociateNode(
    args: DisassociateNodeInput,
    cb?: (err: any, data?: DisassociateNodeOutput) => void
  ): Promise<DisassociateNodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateNodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server. </p> <p> This operation is synchronous. </p> <p> A <code>ValidationException</code> is raised when parameters of the request are not valid. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED, FAILED or DELETING. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {InvalidStateException} <p>The resource is in a state that does not allow you to perform a specified action. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public exportServerEngineAttribute(
    args: ExportServerEngineAttributeInput
  ): Promise<ExportServerEngineAttributeOutput>;
  public exportServerEngineAttribute(
    args: ExportServerEngineAttributeInput,
    cb: (err: any, data?: ExportServerEngineAttributeOutput) => void
  ): void;
  public exportServerEngineAttribute(
    args: ExportServerEngineAttributeInput,
    cb?: (err: any, data?: ExportServerEngineAttributeOutput) => void
  ): Promise<ExportServerEngineAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExportServerEngineAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Restores a backup to a server that is in a <code>CONNECTION_LOST</code>, <code>HEALTHY</code>, <code>RUNNING</code>, <code>UNHEALTHY</code>, or <code>TERMINATED</code> state. When you run RestoreServer, the server's EC2 instance is deleted, and a new EC2 instance is configured. RestoreServer maintains the existing server endpoint, so configuration management of the server's client devices (nodes) should continue to work. </p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when the server is not in a valid state. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidStateException} <p>The resource is in a state that does not allow you to perform a specified action. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreServer(args: RestoreServerInput): Promise<RestoreServerOutput>;
  public restoreServer(
    args: RestoreServerInput,
    cb: (err: any, data?: RestoreServerOutput) => void
  ): void;
  public restoreServer(
    args: RestoreServerInput,
    cb?: (err: any, data?: RestoreServerOutput) => void
  ): Promise<RestoreServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress. </p> <p> Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidStateException} <p>The resource is in a state that does not allow you to perform a specified action. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startMaintenance(
    args: StartMaintenanceInput
  ): Promise<StartMaintenanceOutput>;
  public startMaintenance(
    args: StartMaintenanceInput,
    cb: (err: any, data?: StartMaintenanceOutput) => void
  ): void;
  public startMaintenance(
    args: StartMaintenanceInput,
    cb?: (err: any, data?: StartMaintenanceOutput) => void
  ): Promise<StartMaintenanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartMaintenanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Updates settings for a server. </p> <p> This operation is synchronous. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidStateException} <p>The resource is in a state that does not allow you to perform a specified action. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateServer(args: UpdateServerInput): Promise<UpdateServerOutput>;
  public updateServer(
    args: UpdateServerInput,
    cb: (err: any, data?: UpdateServerOutput) => void
  ): void;
  public updateServer(
    args: UpdateServerInput,
    cb?: (err: any, data?: UpdateServerOutput) => void
  ): Promise<UpdateServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Updates engine-specific attributes on a specified server. The server enters the <code>MODIFYING</code> state when this operation is in progress. Only one update can occur at a time. You can use this command to reset a Chef server's public key (<code>CHEF_PIVOTAL_KEY</code>) or a Puppet server's admin password (<code>PUPPET_ADMIN_PASSWORD</code>). </p> <p> This operation is asynchronous. </p> <p> This operation can only be called for servers in <code>HEALTHY</code> or <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is raised. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidStateException} <p>The resource is in a state that does not allow you to perform a specified action. </p>
   *   - {ResourceNotFoundException} <p>The requested resource does not exist, or access was denied. </p>
   *   - {ValidationException} <p>One or more of the provided request parameters are not valid. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateServerEngineAttributes(
    args: UpdateServerEngineAttributesInput
  ): Promise<UpdateServerEngineAttributesOutput>;
  public updateServerEngineAttributes(
    args: UpdateServerEngineAttributesInput,
    cb: (err: any, data?: UpdateServerEngineAttributesOutput) => void
  ): void;
  public updateServerEngineAttributes(
    args: UpdateServerEngineAttributesInput,
    cb?: (err: any, data?: UpdateServerEngineAttributesOutput) => void
  ): Promise<UpdateServerEngineAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateServerEngineAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
