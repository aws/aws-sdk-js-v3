// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { OpsWorksCMClient, OpsWorksCMClientConfig } from "./OpsWorksCMClient";

const commands = {
  AssociateNodeCommand,
  CreateBackupCommand,
  CreateServerCommand,
  DeleteBackupCommand,
  DeleteServerCommand,
  DescribeAccountAttributesCommand,
  DescribeBackupsCommand,
  DescribeEventsCommand,
  DescribeNodeAssociationStatusCommand,
  DescribeServersCommand,
  DisassociateNodeCommand,
  ExportServerEngineAttributeCommand,
  ListTagsForResourceCommand,
  RestoreServerCommand,
  StartMaintenanceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateServerCommand,
  UpdateServerEngineAttributesCommand,
};

export interface OpsWorksCM {
  /**
   * @see {@link AssociateNodeCommand}
   */
  associateNode(args: AssociateNodeCommandInput, options?: __HttpHandlerOptions): Promise<AssociateNodeCommandOutput>;
  associateNode(args: AssociateNodeCommandInput, cb: (err: any, data?: AssociateNodeCommandOutput) => void): void;
  associateNode(
    args: AssociateNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackupCommand}
   */
  createBackup(args: CreateBackupCommandInput, options?: __HttpHandlerOptions): Promise<CreateBackupCommandOutput>;
  createBackup(args: CreateBackupCommandInput, cb: (err: any, data?: CreateBackupCommandOutput) => void): void;
  createBackup(
    args: CreateBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServerCommand}
   */
  createServer(args: CreateServerCommandInput, options?: __HttpHandlerOptions): Promise<CreateServerCommandOutput>;
  createServer(args: CreateServerCommandInput, cb: (err: any, data?: CreateServerCommandOutput) => void): void;
  createServer(
    args: CreateServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackupCommand}
   */
  deleteBackup(args: DeleteBackupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBackupCommandOutput>;
  deleteBackup(args: DeleteBackupCommandInput, cb: (err: any, data?: DeleteBackupCommandOutput) => void): void;
  deleteBackup(
    args: DeleteBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServerCommand}
   */
  deleteServer(args: DeleteServerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServerCommandOutput>;
  deleteServer(args: DeleteServerCommandInput, cb: (err: any, data?: DeleteServerCommandOutput) => void): void;
  deleteServer(
    args: DeleteServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBackupsCommand}
   */
  describeBackups(): Promise<DescribeBackupsCommandOutput>;
  describeBackups(
    args: DescribeBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupsCommandOutput>;
  describeBackups(args: DescribeBackupsCommandInput, cb: (err: any, data?: DescribeBackupsCommandOutput) => void): void;
  describeBackups(
    args: DescribeBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNodeAssociationStatusCommand}
   */
  describeNodeAssociationStatus(
    args: DescribeNodeAssociationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNodeAssociationStatusCommandOutput>;
  describeNodeAssociationStatus(
    args: DescribeNodeAssociationStatusCommandInput,
    cb: (err: any, data?: DescribeNodeAssociationStatusCommandOutput) => void
  ): void;
  describeNodeAssociationStatus(
    args: DescribeNodeAssociationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNodeAssociationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServersCommand}
   */
  describeServers(): Promise<DescribeServersCommandOutput>;
  describeServers(
    args: DescribeServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServersCommandOutput>;
  describeServers(args: DescribeServersCommandInput, cb: (err: any, data?: DescribeServersCommandOutput) => void): void;
  describeServers(
    args: DescribeServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServersCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateNodeCommand}
   */
  disassociateNode(
    args: DisassociateNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateNodeCommandOutput>;
  disassociateNode(
    args: DisassociateNodeCommandInput,
    cb: (err: any, data?: DisassociateNodeCommandOutput) => void
  ): void;
  disassociateNode(
    args: DisassociateNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportServerEngineAttributeCommand}
   */
  exportServerEngineAttribute(
    args: ExportServerEngineAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportServerEngineAttributeCommandOutput>;
  exportServerEngineAttribute(
    args: ExportServerEngineAttributeCommandInput,
    cb: (err: any, data?: ExportServerEngineAttributeCommandOutput) => void
  ): void;
  exportServerEngineAttribute(
    args: ExportServerEngineAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportServerEngineAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreServerCommand}
   */
  restoreServer(args: RestoreServerCommandInput, options?: __HttpHandlerOptions): Promise<RestoreServerCommandOutput>;
  restoreServer(args: RestoreServerCommandInput, cb: (err: any, data?: RestoreServerCommandOutput) => void): void;
  restoreServer(
    args: RestoreServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreServerCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMaintenanceCommand}
   */
  startMaintenance(
    args: StartMaintenanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMaintenanceCommandOutput>;
  startMaintenance(
    args: StartMaintenanceCommandInput,
    cb: (err: any, data?: StartMaintenanceCommandOutput) => void
  ): void;
  startMaintenance(
    args: StartMaintenanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMaintenanceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServerCommand}
   */
  updateServer(args: UpdateServerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServerCommandOutput>;
  updateServer(args: UpdateServerCommandInput, cb: (err: any, data?: UpdateServerCommandOutput) => void): void;
  updateServer(
    args: UpdateServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServerEngineAttributesCommand}
   */
  updateServerEngineAttributes(
    args: UpdateServerEngineAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServerEngineAttributesCommandOutput>;
  updateServerEngineAttributes(
    args: UpdateServerEngineAttributesCommandInput,
    cb: (err: any, data?: UpdateServerEngineAttributesCommandOutput) => void
  ): void;
  updateServerEngineAttributes(
    args: UpdateServerEngineAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServerEngineAttributesCommandOutput) => void
  ): void;
}

/**
 * <fullname>OpsWorks CM</fullname>
 *          <important>
 *             <p>The OpsWorks services have reached end of life and have been disabled for both new and existing customers.
 *         We strongly recommend customers migrate their workloads to other solutions as soon as possible. If you have questions about migration, reach out to the Amazon Web ServicesSupport Team on <a href="https://repost.aws/">Amazon Web Services re:Post</a> or through <a href="https://aws.amazon.com/support">Amazon Web Services Premium Support</a>.</p>
 *          </important>
 *          <p>OpsWorks CM is a service that runs and manages
 *       configuration management servers. You can use OpsWorks CM to create and manage OpsWorks for Chef Automate and
 *       OpsWorks for Puppet Enterprise servers, and add or remove
 *       nodes for the servers to manage.</p>
 *          <p>
 *             <b>Glossary of terms</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Server</b>: A configuration management server that can be
 *         highly-available. The configuration management server runs on
 *         an Amazon Elastic Compute Cloud (EC2) instance, and may use various other Amazon Web Services services, such as Amazon Relational Database Service
 *         (RDS) and Elastic Load Balancing. A server is a generic abstraction over the configuration
 *         manager that you want to use, much like Amazon RDS. In OpsWorks CM, you do not start
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
 *       stores. OpsWorks CM
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
 *         Every account has attributes that are assigned in the OpsWorks CM
 *       database. These attributes store information about configuration limits (servers,
 *       backups, etc.) and your customer account.
 *       </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>OpsWorks CM supports the following endpoints, all HTTPS. You must connect to one of the following endpoints.
 *       Your servers
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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/opsworks-service.html">OpsWorks endpoints and quotas</a> in the Amazon Web Services General Reference.</p>
 *          <p>
 *             <b>Throttling limits</b>
 *          </p>
 *          <p>All API operations allow for five requests per second with a burst of 10 requests per second.</p>
 * @public
 */
export class OpsWorksCM extends OpsWorksCMClient implements OpsWorksCM {}
createAggregatedClient(commands, OpsWorksCM);
