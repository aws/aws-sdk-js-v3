// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateNodeCommand,
  AssociateNodeCommandInput,
  AssociateNodeCommandOutput,
} from "./commands/AssociateNodeCommand";
import {
  CreateBackupCommand,
  CreateBackupCommandInput,
  CreateBackupCommandOutput,
} from "./commands/CreateBackupCommand";
import {
  CreateServerCommand,
  CreateServerCommandInput,
  CreateServerCommandOutput,
} from "./commands/CreateServerCommand";
import {
  DeleteBackupCommand,
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput,
} from "./commands/DeleteBackupCommand";
import {
  DeleteServerCommand,
  DeleteServerCommandInput,
  DeleteServerCommandOutput,
} from "./commands/DeleteServerCommand";
import {
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeBackupsCommand,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
} from "./commands/DescribeBackupsCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeNodeAssociationStatusCommand,
  DescribeNodeAssociationStatusCommandInput,
  DescribeNodeAssociationStatusCommandOutput,
} from "./commands/DescribeNodeAssociationStatusCommand";
import {
  DescribeServersCommand,
  DescribeServersCommandInput,
  DescribeServersCommandOutput,
} from "./commands/DescribeServersCommand";
import {
  DisassociateNodeCommand,
  DisassociateNodeCommandInput,
  DisassociateNodeCommandOutput,
} from "./commands/DisassociateNodeCommand";
import {
  ExportServerEngineAttributeCommand,
  ExportServerEngineAttributeCommandInput,
  ExportServerEngineAttributeCommandOutput,
} from "./commands/ExportServerEngineAttributeCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RestoreServerCommand,
  RestoreServerCommandInput,
  RestoreServerCommandOutput,
} from "./commands/RestoreServerCommand";
import {
  StartMaintenanceCommand,
  StartMaintenanceCommandInput,
  StartMaintenanceCommandOutput,
} from "./commands/StartMaintenanceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateServerCommand,
  UpdateServerCommandInput,
  UpdateServerCommandOutput,
} from "./commands/UpdateServerCommand";
import {
  UpdateServerEngineAttributesCommand,
  UpdateServerEngineAttributesCommandInput,
  UpdateServerEngineAttributesCommandOutput,
} from "./commands/UpdateServerEngineAttributesCommand";
import { OpsWorksCMClient } from "./OpsWorksCMClient";

/**
 * <fullname>AWS OpsWorks CM</fullname>
 *          <p>AWS OpsWorks for configuration management (CM) is a service that runs and manages
 *       configuration management servers. You can use AWS OpsWorks CM to create and manage AWS
 *       OpsWorks for Chef Automate and AWS OpsWorks for Puppet Enterprise servers, and add or remove
 *       nodes for the servers to manage.</p>
 *          <p>
 *             <b>Glossary of terms</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Server</b>: A configuration management server that can be
 *         highly-available. The configuration management server runs on
 *       an Amazon Elastic Compute Cloud (EC2) instance, and may use various other AWS services, such as Amazon Relational
 *       Database Service (RDS) and Elastic Load Balancing. A server is a generic abstraction over the configuration
 *       manager that you want to use, much like Amazon RDS. In AWS OpsWorks CM, you do not start
 *       or stop servers. After you create servers, they continue to run until they are deleted.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Engine</b>: The engine is the specific configuration manager
 *         that you want to use. Valid values in this release include <code>ChefAutomate</code> and <code>Puppet</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Backup</b>: This
 *       is an application-level backup of the data that the configuration manager
 *       stores. AWS OpsWorks CM
 *       creates an S3 bucket for backups when you launch the first
 *       server. A backup maintains a snapshot of a server's configuration-related
 *       attributes at the time the backup starts.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Events</b>:
 *       Events are always related to a server. Events are written
 *       during server creation, when health checks run, when backups
 *       are created, when system maintenance is performed, etc. When you delete a server, the server's events are
 *       also deleted.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Account attributes</b>:
 *       Every account has attributes that are assigned in the AWS OpsWorks CM
 *       database. These attributes store information about configuration limits (servers,
 *       backups, etc.) and your customer account.
 *       </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>AWS OpsWorks CM supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Your servers
 *       can only be accessed or managed within the endpoint in which they are created.</p>
 *          <ul>
 *             <li>
 *                <p>opsworks-cm.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.us-east-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.us-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.us-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.ap-northeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.ap-southeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.ap-southeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.eu-central-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.eu-west-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/opsworks-service.html">AWS OpsWorks endpoints and quotas</a> in the AWS General Reference.</p>
 *          <p>
 *             <b>Throttling limits</b>
 *          </p>
 *          <p>All API operations allow for five requests per second with a burst of 10 requests per second.</p>
 */
export class OpsWorksCM extends OpsWorksCMClient {
  /**
   * <p> Associates a new node with the server. For more information about how to disassociate a node, see <a>DisassociateNode</a>.</p>
   *          <p>
   *       On a Chef server: This command is an alternative to  <code>knife bootstrap</code>.</p>
   *          <p>
   *         Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>CHEF_ORGANIZATION</i>,Value=default" "Name=<i>CHEF_NODE_PUBLIC_KEY</i>,Value=<i>public-key-pem</i>"</code>
   *          </p>
   *          <p>
   *       On a Puppet server, this command is an alternative to the <code>puppet cert sign</code> command that signs a Puppet node CSR.
   *     </p>
   *          <p>
   *         Example (Puppet): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>PUPPET_NODE_CSR</i>,Value=<i>csr-pem</i>"</code>
   *          </p>
   *          <p>
   *       A node can can only be associated with servers that are in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown.
   *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
   *       The AssociateNode API call can be integrated into Auto Scaling configurations, AWS Cloudformation templates, or the user data of a server's instance.
   *     </p>
   */
  public associateNode(
    args: AssociateNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateNodeCommandOutput>;
  public associateNode(
    args: AssociateNodeCommandInput,
    cb: (err: any, data?: AssociateNodeCommandOutput) => void
  ): void;
  public associateNode(
    args: AssociateNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateNodeCommandOutput) => void
  ): void;
  public associateNode(
    args: AssociateNodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateNodeCommandOutput) => void),
    cb?: (err: any, data?: AssociateNodeCommandOutput) => void
  ): Promise<AssociateNodeCommandOutput> | void {
    const command = new AssociateNodeCommand(args);
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
   * <p>
   *       Creates an application-level backup of a server. While the
   *       server is in the <code>BACKING_UP</code> state, the server cannot be
   *       changed, and no additional backup can be created.
   *     </p>
   *          <p>
   *       Backups can be created for servers in <code>RUNNING</code>, <code>HEALTHY</code>, and <code>UNHEALTHY</code> states. By default, you can create a maximum of 50
   *       manual backups.
   *     </p>
   *          <p>
   *       This operation is asynchronous.
   *     </p>
   *          <p>
   *       A <code>LimitExceededException</code> is thrown when the maximum number of manual backups is reached.
   *       An <code>InvalidStateException</code> is thrown when the server is not in any of the following states: RUNNING, HEALTHY, or UNHEALTHY.
   *       A <code>ResourceNotFoundException</code> is thrown when the server is not found.
   *       A <code>ValidationException</code> is thrown when parameters of the request are not valid.
   *     </p>
   */
  public createBackup(
    args: CreateBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackupCommandOutput>;
  public createBackup(args: CreateBackupCommandInput, cb: (err: any, data?: CreateBackupCommandOutput) => void): void;
  public createBackup(
    args: CreateBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackupCommandOutput) => void
  ): void;
  public createBackup(
    args: CreateBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBackupCommandOutput) => void),
    cb?: (err: any, data?: CreateBackupCommandOutput) => void
  ): Promise<CreateBackupCommandOutput> | void {
    const command = new CreateBackupCommand(args);
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
   * <p>
   *       Creates and immedately starts a new server. The server is ready to use when it is in the <code>HEALTHY</code> state. By default, you can create a maximum of 10 servers.
   *     </p>
   *          <p>
   *       This operation is asynchronous.
   *     </p>
   *          <p>
   *       A <code>LimitExceededException</code> is thrown when you have created the maximum number of servers (10). A <code>ResourceAlreadyExistsException</code>
   *       is thrown when a server with the same name already exists in the account. A <code>ResourceNotFoundException</code> is thrown when you
   *       specify a backup ID that is not valid or is for a backup that does not exist. A <code>ValidationException</code> is thrown when parameters
   *       of the request are not valid.
   *     </p>
   *          <p>
   *       If you do not specify a security group by adding the <code>SecurityGroupIds</code> parameter, AWS OpsWorks creates a new security group.
   *     </p>
   *          <p>
   *             <i>Chef Automate:</i> The default security group opens the Chef server to the world on TCP port 443. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22.
   *     </p>
   *          <p>
   *             <i>Puppet Enterprise:</i> The default security group opens TCP ports 22, 443, 4433, 8140, 8142, 8143, and 8170. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22.
   *     </p>
   *          <p>By default, your server is accessible from any IP address. We
   *       recommend that you update your security group rules to allow
   *       access from known IP addresses and address ranges only. To edit security group rules, open Security Groups
   *       in the navigation pane of the EC2 management console.
   *     </p>
   *          <p>To specify your own domain for a server, and provide your own self-signed or CA-signed certificate and private key, specify values for <code>CustomDomain</code>,
   *       <code>CustomCertificate</code>, and <code>CustomPrivateKey</code>.</p>
   */
  public createServer(
    args: CreateServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServerCommandOutput>;
  public createServer(args: CreateServerCommandInput, cb: (err: any, data?: CreateServerCommandOutput) => void): void;
  public createServer(
    args: CreateServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServerCommandOutput) => void
  ): void;
  public createServer(
    args: CreateServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServerCommandOutput) => void),
    cb?: (err: any, data?: CreateServerCommandOutput) => void
  ): Promise<CreateServerCommandOutput> | void {
    const command = new CreateServerCommand(args);
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
   * <p>
   *       Deletes a backup. You can delete both manual and automated backups. This operation is asynchronous.
   *     </p>
   *          <p>
   *       An <code>InvalidStateException</code> is thrown when a backup deletion is already in progress.
   *       A <code>ResourceNotFoundException</code> is thrown when the backup does not exist.
   *       A <code>ValidationException</code> is thrown when parameters of the request are not valid.
   *     </p>
   */
  public deleteBackup(
    args: DeleteBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupCommandOutput>;
  public deleteBackup(args: DeleteBackupCommandInput, cb: (err: any, data?: DeleteBackupCommandOutput) => void): void;
  public deleteBackup(
    args: DeleteBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;
  public deleteBackup(
    args: DeleteBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackupCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupCommandOutput) => void
  ): Promise<DeleteBackupCommandOutput> | void {
    const command = new DeleteBackupCommand(args);
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
   * <p>
   *       Deletes the server and the underlying AWS CloudFormation stacks
   *       (including the server's EC2 instance). When you run this command, the server state is updated
   *       to <code>DELETING</code>. After the server is deleted, it is no longer returned by
   *       <code>DescribeServer</code> requests. If the AWS CloudFormation stack cannot be deleted, the server cannot be deleted.
   *     </p>
   *          <p>
   *       This operation is asynchronous.
   *     </p>
   *          <p>
   *       An <code>InvalidStateException</code> is thrown when a server deletion is already in progress.
   *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
   *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
   *     </p>
   *          <p>
   *     </p>
   */
  public deleteServer(
    args: DeleteServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServerCommandOutput>;
  public deleteServer(args: DeleteServerCommandInput, cb: (err: any, data?: DeleteServerCommandOutput) => void): void;
  public deleteServer(
    args: DeleteServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServerCommandOutput) => void
  ): void;
  public deleteServer(
    args: DeleteServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServerCommandOutput) => void),
    cb?: (err: any, data?: DeleteServerCommandOutput) => void
  ): Promise<DeleteServerCommandOutput> | void {
    const command = new DeleteServerCommand(args);
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
   * <p>
   *       Describes your OpsWorks-CM account attributes.
   *     </p>
   *          <p>
   *       This operation is synchronous.
   *     </p>
   */
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): Promise<DescribeAccountAttributesCommandOutput> | void {
    const command = new DescribeAccountAttributesCommand(args);
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
   * <p>
   *       Describes backups. The results are ordered by time, with newest backups first.
   *       If you do not specify a BackupId or ServerName, the command returns all backups.
   *     </p>
   *          <p>
   *       This operation is synchronous.
   *     </p>
   *          <p>
   *       A <code>ResourceNotFoundException</code> is thrown when the backup does not exist.
   *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
   *     </p>
   */
  public describeBackups(
    args: DescribeBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupsCommandOutput>;
  public describeBackups(
    args: DescribeBackupsCommandInput,
    cb: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): void;
  public describeBackups(
    args: DescribeBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): void;
  public describeBackups(
    args: DescribeBackupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBackupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): Promise<DescribeBackupsCommandOutput> | void {
    const command = new DescribeBackupsCommand(args);
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
   * <p>
   *       Describes events for a specified server. Results are ordered by time, with newest events first.
   *     </p>
   *          <p>
   *       This operation is synchronous.
   *     </p>
   *          <p>
   *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
   *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
   *     </p>
   */
  public describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  public describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventsCommandOutput) => void
  ): Promise<DescribeEventsCommandOutput> | void {
    const command = new DescribeEventsCommand(args);
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
   * <p>
   *       Returns the current status of an existing association or disassociation request.
   *     </p>
   *          <p>
   *       A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found,
   *       or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
   *     </p>
   */
  public describeNodeAssociationStatus(
    args: DescribeNodeAssociationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNodeAssociationStatusCommandOutput>;
  public describeNodeAssociationStatus(
    args: DescribeNodeAssociationStatusCommandInput,
    cb: (err: any, data?: DescribeNodeAssociationStatusCommandOutput) => void
  ): void;
  public describeNodeAssociationStatus(
    args: DescribeNodeAssociationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNodeAssociationStatusCommandOutput) => void
  ): void;
  public describeNodeAssociationStatus(
    args: DescribeNodeAssociationStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNodeAssociationStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeNodeAssociationStatusCommandOutput) => void
  ): Promise<DescribeNodeAssociationStatusCommandOutput> | void {
    const command = new DescribeNodeAssociationStatusCommand(args);
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
   * <p>
   *       Lists all configuration management servers that are identified with your account.
   *       Only the stored results from Amazon DynamoDB
   *       are returned. AWS OpsWorks CM does not query other services.
   *     </p>
   *          <p>
   *       This operation is synchronous.
   *     </p>
   *          <p>
   *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
   *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
   *     </p>
   */
  public describeServers(
    args: DescribeServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServersCommandOutput>;
  public describeServers(
    args: DescribeServersCommandInput,
    cb: (err: any, data?: DescribeServersCommandOutput) => void
  ): void;
  public describeServers(
    args: DescribeServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServersCommandOutput) => void
  ): void;
  public describeServers(
    args: DescribeServersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServersCommandOutput) => void),
    cb?: (err: any, data?: DescribeServersCommandOutput) => void
  ): Promise<DescribeServersCommandOutput> | void {
    const command = new DescribeServersCommand(args);
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
   * <p>
   *       Disassociates a node from an AWS OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated,
   *       the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>.
   *     </p>
   *          <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown.
   *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
   *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
   *     </p>
   */
  public disassociateNode(
    args: DisassociateNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateNodeCommandOutput>;
  public disassociateNode(
    args: DisassociateNodeCommandInput,
    cb: (err: any, data?: DisassociateNodeCommandOutput) => void
  ): void;
  public disassociateNode(
    args: DisassociateNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateNodeCommandOutput) => void
  ): void;
  public disassociateNode(
    args: DisassociateNodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateNodeCommandOutput) => void),
    cb?: (err: any, data?: DisassociateNodeCommandOutput) => void
  ): Promise<DisassociateNodeCommandOutput> | void {
    const command = new DisassociateNodeCommand(args);
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
   * <p>
   *       Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server.
   *     </p>
   *          <p>
   *       This operation is synchronous.
   *     </p>
   *          <p>
   *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
   *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
   *       An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED,
   *       FAILED or DELETING.
   *     </p>
   */
  public exportServerEngineAttribute(
    args: ExportServerEngineAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportServerEngineAttributeCommandOutput>;
  public exportServerEngineAttribute(
    args: ExportServerEngineAttributeCommandInput,
    cb: (err: any, data?: ExportServerEngineAttributeCommandOutput) => void
  ): void;
  public exportServerEngineAttribute(
    args: ExportServerEngineAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportServerEngineAttributeCommandOutput) => void
  ): void;
  public exportServerEngineAttribute(
    args: ExportServerEngineAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportServerEngineAttributeCommandOutput) => void),
    cb?: (err: any, data?: ExportServerEngineAttributeCommandOutput) => void
  ): Promise<ExportServerEngineAttributeCommandOutput> | void {
    const command = new ExportServerEngineAttributeCommand(args);
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
   * <p>Returns a list of tags that are applied to the specified AWS OpsWorks for Chef Automate or
   *       AWS OpsWorks for Puppet Enterprise servers or backups.</p>
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
   * <p>
   *       Restores a backup to a server that is in a <code>CONNECTION_LOST</code>, <code>HEALTHY</code>, <code>RUNNING</code>, <code>UNHEALTHY</code>, or <code>TERMINATED</code> state.
   *       When you run RestoreServer, the server's EC2 instance is deleted, and a new EC2 instance is configured. RestoreServer maintains
   *       the existing server endpoint, so configuration management of the server's client devices (nodes) should continue to work.
   *     </p>
   *          <p>Restoring from a backup is performed by creating a new EC2 instance. If restoration is successful, and the server is in a <code>HEALTHY</code> state,
   *       AWS OpsWorks CM switches traffic over to the new instance. After restoration is finished, the old EC2 instance is maintained in a
   *       <code>Running</code> or <code>Stopped</code> state, but is eventually terminated.</p>
   *          <p>
   *       This operation is asynchronous.
   *     </p>
   *          <p>
   *       An <code>InvalidStateException</code> is thrown when the server is not in a valid state. A <code>ResourceNotFoundException</code> is thrown
   *       when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
   *     </p>
   */
  public restoreServer(
    args: RestoreServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreServerCommandOutput>;
  public restoreServer(
    args: RestoreServerCommandInput,
    cb: (err: any, data?: RestoreServerCommandOutput) => void
  ): void;
  public restoreServer(
    args: RestoreServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreServerCommandOutput) => void
  ): void;
  public restoreServer(
    args: RestoreServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreServerCommandOutput) => void),
    cb?: (err: any, data?: RestoreServerCommandOutput) => void
  ): Promise<RestoreServerCommandOutput> | void {
    const command = new RestoreServerCommand(args);
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
   * <p>
   *       Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying
   *       cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress.
   *     </p>
   *          <p>
   *       Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown.
   *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
   *     </p>
   */
  public startMaintenance(
    args: StartMaintenanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMaintenanceCommandOutput>;
  public startMaintenance(
    args: StartMaintenanceCommandInput,
    cb: (err: any, data?: StartMaintenanceCommandOutput) => void
  ): void;
  public startMaintenance(
    args: StartMaintenanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMaintenanceCommandOutput) => void
  ): void;
  public startMaintenance(
    args: StartMaintenanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMaintenanceCommandOutput) => void),
    cb?: (err: any, data?: StartMaintenanceCommandOutput) => void
  ): Promise<StartMaintenanceCommandOutput> | void {
    const command = new StartMaintenanceCommand(args);
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
   * <p>Applies tags to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server, or to server backups.</p>
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
   * <p>Removes specified tags from an AWS OpsWorks-CM server or backup.</p>
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
   * <p>
   *       Updates settings for a server.
   *     </p>
   *          <p>
   *       This operation is synchronous.
   *     </p>
   */
  public updateServer(
    args: UpdateServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServerCommandOutput>;
  public updateServer(args: UpdateServerCommandInput, cb: (err: any, data?: UpdateServerCommandOutput) => void): void;
  public updateServer(
    args: UpdateServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServerCommandOutput) => void
  ): void;
  public updateServer(
    args: UpdateServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServerCommandOutput) => void),
    cb?: (err: any, data?: UpdateServerCommandOutput) => void
  ): Promise<UpdateServerCommandOutput> | void {
    const command = new UpdateServerCommand(args);
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
   * <p>
   *       Updates engine-specific attributes on a specified server. The server
   *       enters the <code>MODIFYING</code> state when this operation
   *       is in progress. Only one update can occur at a time.
   *       You can use this command to reset a Chef server's public key (<code>CHEF_PIVOTAL_KEY</code>) or a Puppet server's
   *       admin password (<code>PUPPET_ADMIN_PASSWORD</code>).
   *     </p>
   *          <p>
   *       This operation is asynchronous.
   *     </p>
   *          <p>
   *       This operation can only be called for servers in <code>HEALTHY</code> or <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is raised.
   *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
   *     </p>
   */
  public updateServerEngineAttributes(
    args: UpdateServerEngineAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServerEngineAttributesCommandOutput>;
  public updateServerEngineAttributes(
    args: UpdateServerEngineAttributesCommandInput,
    cb: (err: any, data?: UpdateServerEngineAttributesCommandOutput) => void
  ): void;
  public updateServerEngineAttributes(
    args: UpdateServerEngineAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServerEngineAttributesCommandOutput) => void
  ): void;
  public updateServerEngineAttributes(
    args: UpdateServerEngineAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServerEngineAttributesCommandOutput) => void),
    cb?: (err: any, data?: UpdateServerEngineAttributesCommandOutput) => void
  ): Promise<UpdateServerEngineAttributesCommandOutput> | void {
    const command = new UpdateServerEngineAttributesCommand(args);
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
