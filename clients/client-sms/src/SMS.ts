// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CreateAppCommand, CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateReplicationJobCommand,
  CreateReplicationJobCommandInput,
  CreateReplicationJobCommandOutput,
} from "./commands/CreateReplicationJobCommand";
import { DeleteAppCommand, DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteAppLaunchConfigurationCommand,
  DeleteAppLaunchConfigurationCommandInput,
  DeleteAppLaunchConfigurationCommandOutput,
} from "./commands/DeleteAppLaunchConfigurationCommand";
import {
  DeleteAppReplicationConfigurationCommand,
  DeleteAppReplicationConfigurationCommandInput,
  DeleteAppReplicationConfigurationCommandOutput,
} from "./commands/DeleteAppReplicationConfigurationCommand";
import {
  DeleteAppValidationConfigurationCommand,
  DeleteAppValidationConfigurationCommandInput,
  DeleteAppValidationConfigurationCommandOutput,
} from "./commands/DeleteAppValidationConfigurationCommand";
import {
  DeleteReplicationJobCommand,
  DeleteReplicationJobCommandInput,
  DeleteReplicationJobCommandOutput,
} from "./commands/DeleteReplicationJobCommand";
import {
  DeleteServerCatalogCommand,
  DeleteServerCatalogCommandInput,
  DeleteServerCatalogCommandOutput,
} from "./commands/DeleteServerCatalogCommand";
import {
  DisassociateConnectorCommand,
  DisassociateConnectorCommandInput,
  DisassociateConnectorCommandOutput,
} from "./commands/DisassociateConnectorCommand";
import {
  GenerateChangeSetCommand,
  GenerateChangeSetCommandInput,
  GenerateChangeSetCommandOutput,
} from "./commands/GenerateChangeSetCommand";
import {
  GenerateTemplateCommand,
  GenerateTemplateCommandInput,
  GenerateTemplateCommandOutput,
} from "./commands/GenerateTemplateCommand";
import { GetAppCommand, GetAppCommandInput, GetAppCommandOutput } from "./commands/GetAppCommand";
import {
  GetAppLaunchConfigurationCommand,
  GetAppLaunchConfigurationCommandInput,
  GetAppLaunchConfigurationCommandOutput,
} from "./commands/GetAppLaunchConfigurationCommand";
import {
  GetAppReplicationConfigurationCommand,
  GetAppReplicationConfigurationCommandInput,
  GetAppReplicationConfigurationCommandOutput,
} from "./commands/GetAppReplicationConfigurationCommand";
import {
  GetAppValidationConfigurationCommand,
  GetAppValidationConfigurationCommandInput,
  GetAppValidationConfigurationCommandOutput,
} from "./commands/GetAppValidationConfigurationCommand";
import {
  GetAppValidationOutputCommand,
  GetAppValidationOutputCommandInput,
  GetAppValidationOutputCommandOutput,
} from "./commands/GetAppValidationOutputCommand";
import {
  GetConnectorsCommand,
  GetConnectorsCommandInput,
  GetConnectorsCommandOutput,
} from "./commands/GetConnectorsCommand";
import {
  GetReplicationJobsCommand,
  GetReplicationJobsCommandInput,
  GetReplicationJobsCommandOutput,
} from "./commands/GetReplicationJobsCommand";
import {
  GetReplicationRunsCommand,
  GetReplicationRunsCommandInput,
  GetReplicationRunsCommandOutput,
} from "./commands/GetReplicationRunsCommand";
import { GetServersCommand, GetServersCommandInput, GetServersCommandOutput } from "./commands/GetServersCommand";
import {
  ImportAppCatalogCommand,
  ImportAppCatalogCommandInput,
  ImportAppCatalogCommandOutput,
} from "./commands/ImportAppCatalogCommand";
import {
  ImportServerCatalogCommand,
  ImportServerCatalogCommandInput,
  ImportServerCatalogCommandOutput,
} from "./commands/ImportServerCatalogCommand";
import { LaunchAppCommand, LaunchAppCommandInput, LaunchAppCommandOutput } from "./commands/LaunchAppCommand";
import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import {
  NotifyAppValidationOutputCommand,
  NotifyAppValidationOutputCommandInput,
  NotifyAppValidationOutputCommandOutput,
} from "./commands/NotifyAppValidationOutputCommand";
import {
  PutAppLaunchConfigurationCommand,
  PutAppLaunchConfigurationCommandInput,
  PutAppLaunchConfigurationCommandOutput,
} from "./commands/PutAppLaunchConfigurationCommand";
import {
  PutAppReplicationConfigurationCommand,
  PutAppReplicationConfigurationCommandInput,
  PutAppReplicationConfigurationCommandOutput,
} from "./commands/PutAppReplicationConfigurationCommand";
import {
  PutAppValidationConfigurationCommand,
  PutAppValidationConfigurationCommandInput,
  PutAppValidationConfigurationCommandOutput,
} from "./commands/PutAppValidationConfigurationCommand";
import {
  StartAppReplicationCommand,
  StartAppReplicationCommandInput,
  StartAppReplicationCommandOutput,
} from "./commands/StartAppReplicationCommand";
import {
  StartOnDemandAppReplicationCommand,
  StartOnDemandAppReplicationCommandInput,
  StartOnDemandAppReplicationCommandOutput,
} from "./commands/StartOnDemandAppReplicationCommand";
import {
  StartOnDemandReplicationRunCommand,
  StartOnDemandReplicationRunCommandInput,
  StartOnDemandReplicationRunCommandOutput,
} from "./commands/StartOnDemandReplicationRunCommand";
import {
  StopAppReplicationCommand,
  StopAppReplicationCommandInput,
  StopAppReplicationCommandOutput,
} from "./commands/StopAppReplicationCommand";
import {
  TerminateAppCommand,
  TerminateAppCommandInput,
  TerminateAppCommandOutput,
} from "./commands/TerminateAppCommand";
import { UpdateAppCommand, UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import {
  UpdateReplicationJobCommand,
  UpdateReplicationJobCommandInput,
  UpdateReplicationJobCommandOutput,
} from "./commands/UpdateReplicationJobCommand";
import { SMSClient } from "./SMSClient";

/**
 * <important>
 *             <p>
 *                <b>Product update</b>
 *             </p>
 *             <p>We recommend <a href="http://aws.amazon.com/application-migration-service">Amazon Web Services Application Migration Service</a> (Amazon Web Services
 *                 MGN) as the primary migration service for lift-and-shift migrations. If Amazon Web Services MGN is
 *                 unavailable in a specific Amazon Web Services Region, you can use the Server Migration Service APIs through March
 *                 2023.</p>
 *          </important>
 *
 *         <p>Server Migration Service (Server Migration Service) makes it easier and faster for you to migrate your
 *             on-premises workloads to Amazon Web Services. To learn more about Server Migration Service, see the following
 *             resources:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="http://aws.amazon.com/server-migration-service/">Server Migration Service
 *                     product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/">Server Migration Service User Guide</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class SMS extends SMSClient {
  /**
   * <p>Creates an application. An application consists of one or more server groups. Each
   *             server group contain one or more servers.</p>
   */
  public createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
  public createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
  public createApp(
    args: CreateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;
  public createApp(
    args: CreateAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAppCommandOutput) => void),
    cb?: (err: any, data?: CreateAppCommandOutput) => void
  ): Promise<CreateAppCommandOutput> | void {
    const command = new CreateAppCommand(args);
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
   * <p>Creates a replication job. The replication job schedules periodic replication runs
   *             to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image
   *             (AMI).</p>
   */
  public createReplicationJob(
    args: CreateReplicationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationJobCommandOutput>;
  public createReplicationJob(
    args: CreateReplicationJobCommandInput,
    cb: (err: any, data?: CreateReplicationJobCommandOutput) => void
  ): void;
  public createReplicationJob(
    args: CreateReplicationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationJobCommandOutput) => void
  ): void;
  public createReplicationJob(
    args: CreateReplicationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReplicationJobCommandOutput) => void),
    cb?: (err: any, data?: CreateReplicationJobCommandOutput) => void
  ): Promise<CreateReplicationJobCommandOutput> | void {
    const command = new CreateReplicationJobCommand(args);
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
   * <p>Deletes the specified application. Optionally deletes the launched stack associated with
   *             the application and all Server Migration Service replication jobs for servers in the application.</p>
   */
  public deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
  public deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
  public deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;
  public deleteApp(
    args: DeleteAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppCommandOutput) => void
  ): Promise<DeleteAppCommandOutput> | void {
    const command = new DeleteAppCommand(args);
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
   * <p>Deletes the launch configuration for the specified application.</p>
   */
  public deleteAppLaunchConfiguration(
    args: DeleteAppLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppLaunchConfigurationCommandOutput>;
  public deleteAppLaunchConfiguration(
    args: DeleteAppLaunchConfigurationCommandInput,
    cb: (err: any, data?: DeleteAppLaunchConfigurationCommandOutput) => void
  ): void;
  public deleteAppLaunchConfiguration(
    args: DeleteAppLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppLaunchConfigurationCommandOutput) => void
  ): void;
  public deleteAppLaunchConfiguration(
    args: DeleteAppLaunchConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppLaunchConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppLaunchConfigurationCommandOutput) => void
  ): Promise<DeleteAppLaunchConfigurationCommandOutput> | void {
    const command = new DeleteAppLaunchConfigurationCommand(args);
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
   * <p>Deletes the replication configuration for the specified application.</p>
   */
  public deleteAppReplicationConfiguration(
    args: DeleteAppReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppReplicationConfigurationCommandOutput>;
  public deleteAppReplicationConfiguration(
    args: DeleteAppReplicationConfigurationCommandInput,
    cb: (err: any, data?: DeleteAppReplicationConfigurationCommandOutput) => void
  ): void;
  public deleteAppReplicationConfiguration(
    args: DeleteAppReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppReplicationConfigurationCommandOutput) => void
  ): void;
  public deleteAppReplicationConfiguration(
    args: DeleteAppReplicationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppReplicationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppReplicationConfigurationCommandOutput) => void
  ): Promise<DeleteAppReplicationConfigurationCommandOutput> | void {
    const command = new DeleteAppReplicationConfigurationCommand(args);
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
   * <p>Deletes the validation configuration for the specified application.</p>
   */
  public deleteAppValidationConfiguration(
    args: DeleteAppValidationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppValidationConfigurationCommandOutput>;
  public deleteAppValidationConfiguration(
    args: DeleteAppValidationConfigurationCommandInput,
    cb: (err: any, data?: DeleteAppValidationConfigurationCommandOutput) => void
  ): void;
  public deleteAppValidationConfiguration(
    args: DeleteAppValidationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppValidationConfigurationCommandOutput) => void
  ): void;
  public deleteAppValidationConfiguration(
    args: DeleteAppValidationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppValidationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppValidationConfigurationCommandOutput) => void
  ): Promise<DeleteAppValidationConfigurationCommandOutput> | void {
    const command = new DeleteAppValidationConfigurationCommand(args);
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
   * <p>Deletes the specified replication job.</p>
   *         <p>After you delete a replication job, there are no further replication runs. Amazon Web Services
   *             deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created
   *             by the replication runs are not deleted.</p>
   */
  public deleteReplicationJob(
    args: DeleteReplicationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationJobCommandOutput>;
  public deleteReplicationJob(
    args: DeleteReplicationJobCommandInput,
    cb: (err: any, data?: DeleteReplicationJobCommandOutput) => void
  ): void;
  public deleteReplicationJob(
    args: DeleteReplicationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationJobCommandOutput) => void
  ): void;
  public deleteReplicationJob(
    args: DeleteReplicationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReplicationJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteReplicationJobCommandOutput) => void
  ): Promise<DeleteReplicationJobCommandOutput> | void {
    const command = new DeleteReplicationJobCommand(args);
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
   * <p>Deletes all servers from your server catalog.</p>
   */
  public deleteServerCatalog(
    args: DeleteServerCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServerCatalogCommandOutput>;
  public deleteServerCatalog(
    args: DeleteServerCatalogCommandInput,
    cb: (err: any, data?: DeleteServerCatalogCommandOutput) => void
  ): void;
  public deleteServerCatalog(
    args: DeleteServerCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServerCatalogCommandOutput) => void
  ): void;
  public deleteServerCatalog(
    args: DeleteServerCatalogCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServerCatalogCommandOutput) => void),
    cb?: (err: any, data?: DeleteServerCatalogCommandOutput) => void
  ): Promise<DeleteServerCatalogCommandOutput> | void {
    const command = new DeleteServerCatalogCommand(args);
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
   * <p>Disassociates the specified connector from Server Migration Service.</p>
   *         <p>After you disassociate a connector, it is no longer available to support
   *             replication jobs.</p>
   */
  public disassociateConnector(
    args: DisassociateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateConnectorCommandOutput>;
  public disassociateConnector(
    args: DisassociateConnectorCommandInput,
    cb: (err: any, data?: DisassociateConnectorCommandOutput) => void
  ): void;
  public disassociateConnector(
    args: DisassociateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateConnectorCommandOutput) => void
  ): void;
  public disassociateConnector(
    args: DisassociateConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateConnectorCommandOutput) => void),
    cb?: (err: any, data?: DisassociateConnectorCommandOutput) => void
  ): Promise<DisassociateConnectorCommandOutput> | void {
    const command = new DisassociateConnectorCommand(args);
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
   * <p>Generates a target change set for a currently launched stack and writes it to an Amazon S3
   *             object in the customer’s Amazon S3 bucket.</p>
   */
  public generateChangeSet(
    args: GenerateChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateChangeSetCommandOutput>;
  public generateChangeSet(
    args: GenerateChangeSetCommandInput,
    cb: (err: any, data?: GenerateChangeSetCommandOutput) => void
  ): void;
  public generateChangeSet(
    args: GenerateChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateChangeSetCommandOutput) => void
  ): void;
  public generateChangeSet(
    args: GenerateChangeSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GenerateChangeSetCommandOutput) => void),
    cb?: (err: any, data?: GenerateChangeSetCommandOutput) => void
  ): Promise<GenerateChangeSetCommandOutput> | void {
    const command = new GenerateChangeSetCommand(args);
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
   * <p>Generates an CloudFormation template based on the current launch configuration and writes it to
   *             an Amazon S3 object in the customer’s Amazon S3 bucket.</p>
   */
  public generateTemplate(
    args: GenerateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateTemplateCommandOutput>;
  public generateTemplate(
    args: GenerateTemplateCommandInput,
    cb: (err: any, data?: GenerateTemplateCommandOutput) => void
  ): void;
  public generateTemplate(
    args: GenerateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateTemplateCommandOutput) => void
  ): void;
  public generateTemplate(
    args: GenerateTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GenerateTemplateCommandOutput) => void),
    cb?: (err: any, data?: GenerateTemplateCommandOutput) => void
  ): Promise<GenerateTemplateCommandOutput> | void {
    const command = new GenerateTemplateCommand(args);
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
   * <p>Retrieve information about the specified application.</p>
   */
  public getApp(args: GetAppCommandInput, options?: __HttpHandlerOptions): Promise<GetAppCommandOutput>;
  public getApp(args: GetAppCommandInput, cb: (err: any, data?: GetAppCommandOutput) => void): void;
  public getApp(
    args: GetAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppCommandOutput) => void
  ): void;
  public getApp(
    args: GetAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAppCommandOutput) => void),
    cb?: (err: any, data?: GetAppCommandOutput) => void
  ): Promise<GetAppCommandOutput> | void {
    const command = new GetAppCommand(args);
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
   * <p>Retrieves the application launch configuration associated with the specified application.</p>
   */
  public getAppLaunchConfiguration(
    args: GetAppLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppLaunchConfigurationCommandOutput>;
  public getAppLaunchConfiguration(
    args: GetAppLaunchConfigurationCommandInput,
    cb: (err: any, data?: GetAppLaunchConfigurationCommandOutput) => void
  ): void;
  public getAppLaunchConfiguration(
    args: GetAppLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppLaunchConfigurationCommandOutput) => void
  ): void;
  public getAppLaunchConfiguration(
    args: GetAppLaunchConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAppLaunchConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetAppLaunchConfigurationCommandOutput) => void
  ): Promise<GetAppLaunchConfigurationCommandOutput> | void {
    const command = new GetAppLaunchConfigurationCommand(args);
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
   * <p>Retrieves the application replication configuration associated with the specified
   *             application.</p>
   */
  public getAppReplicationConfiguration(
    args: GetAppReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppReplicationConfigurationCommandOutput>;
  public getAppReplicationConfiguration(
    args: GetAppReplicationConfigurationCommandInput,
    cb: (err: any, data?: GetAppReplicationConfigurationCommandOutput) => void
  ): void;
  public getAppReplicationConfiguration(
    args: GetAppReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppReplicationConfigurationCommandOutput) => void
  ): void;
  public getAppReplicationConfiguration(
    args: GetAppReplicationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAppReplicationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetAppReplicationConfigurationCommandOutput) => void
  ): Promise<GetAppReplicationConfigurationCommandOutput> | void {
    const command = new GetAppReplicationConfigurationCommand(args);
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
   * <p>Retrieves information about a configuration for validating an application.</p>
   */
  public getAppValidationConfiguration(
    args: GetAppValidationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppValidationConfigurationCommandOutput>;
  public getAppValidationConfiguration(
    args: GetAppValidationConfigurationCommandInput,
    cb: (err: any, data?: GetAppValidationConfigurationCommandOutput) => void
  ): void;
  public getAppValidationConfiguration(
    args: GetAppValidationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppValidationConfigurationCommandOutput) => void
  ): void;
  public getAppValidationConfiguration(
    args: GetAppValidationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAppValidationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetAppValidationConfigurationCommandOutput) => void
  ): Promise<GetAppValidationConfigurationCommandOutput> | void {
    const command = new GetAppValidationConfigurationCommand(args);
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
   * <p>Retrieves output from validating an application.</p>
   */
  public getAppValidationOutput(
    args: GetAppValidationOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppValidationOutputCommandOutput>;
  public getAppValidationOutput(
    args: GetAppValidationOutputCommandInput,
    cb: (err: any, data?: GetAppValidationOutputCommandOutput) => void
  ): void;
  public getAppValidationOutput(
    args: GetAppValidationOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppValidationOutputCommandOutput) => void
  ): void;
  public getAppValidationOutput(
    args: GetAppValidationOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAppValidationOutputCommandOutput) => void),
    cb?: (err: any, data?: GetAppValidationOutputCommandOutput) => void
  ): Promise<GetAppValidationOutputCommandOutput> | void {
    const command = new GetAppValidationOutputCommand(args);
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
   * <p>Describes the connectors registered with the Server Migration Service.</p>
   */
  public getConnectors(
    args: GetConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectorsCommandOutput>;
  public getConnectors(
    args: GetConnectorsCommandInput,
    cb: (err: any, data?: GetConnectorsCommandOutput) => void
  ): void;
  public getConnectors(
    args: GetConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectorsCommandOutput) => void
  ): void;
  public getConnectors(
    args: GetConnectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectorsCommandOutput) => void),
    cb?: (err: any, data?: GetConnectorsCommandOutput) => void
  ): Promise<GetConnectorsCommandOutput> | void {
    const command = new GetConnectorsCommand(args);
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
   * <p>Describes the specified replication job or all of your replication jobs.</p>
   */
  public getReplicationJobs(
    args: GetReplicationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReplicationJobsCommandOutput>;
  public getReplicationJobs(
    args: GetReplicationJobsCommandInput,
    cb: (err: any, data?: GetReplicationJobsCommandOutput) => void
  ): void;
  public getReplicationJobs(
    args: GetReplicationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReplicationJobsCommandOutput) => void
  ): void;
  public getReplicationJobs(
    args: GetReplicationJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReplicationJobsCommandOutput) => void),
    cb?: (err: any, data?: GetReplicationJobsCommandOutput) => void
  ): Promise<GetReplicationJobsCommandOutput> | void {
    const command = new GetReplicationJobsCommand(args);
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
   * <p>Describes the replication runs for the specified replication job.</p>
   */
  public getReplicationRuns(
    args: GetReplicationRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReplicationRunsCommandOutput>;
  public getReplicationRuns(
    args: GetReplicationRunsCommandInput,
    cb: (err: any, data?: GetReplicationRunsCommandOutput) => void
  ): void;
  public getReplicationRuns(
    args: GetReplicationRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReplicationRunsCommandOutput) => void
  ): void;
  public getReplicationRuns(
    args: GetReplicationRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReplicationRunsCommandOutput) => void),
    cb?: (err: any, data?: GetReplicationRunsCommandOutput) => void
  ): Promise<GetReplicationRunsCommandOutput> | void {
    const command = new GetReplicationRunsCommand(args);
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
   * <p>Describes the servers in your server catalog.</p>
   *         <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
   */
  public getServers(args: GetServersCommandInput, options?: __HttpHandlerOptions): Promise<GetServersCommandOutput>;
  public getServers(args: GetServersCommandInput, cb: (err: any, data?: GetServersCommandOutput) => void): void;
  public getServers(
    args: GetServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServersCommandOutput) => void
  ): void;
  public getServers(
    args: GetServersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServersCommandOutput) => void),
    cb?: (err: any, data?: GetServersCommandOutput) => void
  ): Promise<GetServersCommandOutput> | void {
    const command = new GetServersCommand(args);
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
   * <p>Allows application import from Migration Hub.</p>
   */
  public importAppCatalog(
    args: ImportAppCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportAppCatalogCommandOutput>;
  public importAppCatalog(
    args: ImportAppCatalogCommandInput,
    cb: (err: any, data?: ImportAppCatalogCommandOutput) => void
  ): void;
  public importAppCatalog(
    args: ImportAppCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportAppCatalogCommandOutput) => void
  ): void;
  public importAppCatalog(
    args: ImportAppCatalogCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportAppCatalogCommandOutput) => void),
    cb?: (err: any, data?: ImportAppCatalogCommandOutput) => void
  ): Promise<ImportAppCatalogCommandOutput> | void {
    const command = new ImportAppCatalogCommand(args);
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
   * <p>Gathers a complete list of on-premises servers. Connectors must be installed and
   *             monitoring all servers to import.</p>
   *         <p>This call returns immediately, but might take additional time to retrieve all the
   *             servers.</p>
   */
  public importServerCatalog(
    args: ImportServerCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportServerCatalogCommandOutput>;
  public importServerCatalog(
    args: ImportServerCatalogCommandInput,
    cb: (err: any, data?: ImportServerCatalogCommandOutput) => void
  ): void;
  public importServerCatalog(
    args: ImportServerCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportServerCatalogCommandOutput) => void
  ): void;
  public importServerCatalog(
    args: ImportServerCatalogCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportServerCatalogCommandOutput) => void),
    cb?: (err: any, data?: ImportServerCatalogCommandOutput) => void
  ): Promise<ImportServerCatalogCommandOutput> | void {
    const command = new ImportServerCatalogCommand(args);
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
   * <p>Launches the specified application as a stack in CloudFormation.</p>
   */
  public launchApp(args: LaunchAppCommandInput, options?: __HttpHandlerOptions): Promise<LaunchAppCommandOutput>;
  public launchApp(args: LaunchAppCommandInput, cb: (err: any, data?: LaunchAppCommandOutput) => void): void;
  public launchApp(
    args: LaunchAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LaunchAppCommandOutput) => void
  ): void;
  public launchApp(
    args: LaunchAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: LaunchAppCommandOutput) => void),
    cb?: (err: any, data?: LaunchAppCommandOutput) => void
  ): Promise<LaunchAppCommandOutput> | void {
    const command = new LaunchAppCommand(args);
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
   * <p>Retrieves summaries for all applications.</p>
   */
  public listApps(args: ListAppsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsCommandOutput>;
  public listApps(args: ListAppsCommandInput, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
  public listApps(
    args: ListAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;
  public listApps(
    args: ListAppsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppsCommandOutput) => void),
    cb?: (err: any, data?: ListAppsCommandOutput) => void
  ): Promise<ListAppsCommandOutput> | void {
    const command = new ListAppsCommand(args);
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
   * <p>Provides information to Server Migration Service about whether application validation is successful.</p>
   */
  public notifyAppValidationOutput(
    args: NotifyAppValidationOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyAppValidationOutputCommandOutput>;
  public notifyAppValidationOutput(
    args: NotifyAppValidationOutputCommandInput,
    cb: (err: any, data?: NotifyAppValidationOutputCommandOutput) => void
  ): void;
  public notifyAppValidationOutput(
    args: NotifyAppValidationOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyAppValidationOutputCommandOutput) => void
  ): void;
  public notifyAppValidationOutput(
    args: NotifyAppValidationOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NotifyAppValidationOutputCommandOutput) => void),
    cb?: (err: any, data?: NotifyAppValidationOutputCommandOutput) => void
  ): Promise<NotifyAppValidationOutputCommandOutput> | void {
    const command = new NotifyAppValidationOutputCommand(args);
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
   * <p>Creates or updates the launch configuration for the specified application.</p>
   */
  public putAppLaunchConfiguration(
    args: PutAppLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppLaunchConfigurationCommandOutput>;
  public putAppLaunchConfiguration(
    args: PutAppLaunchConfigurationCommandInput,
    cb: (err: any, data?: PutAppLaunchConfigurationCommandOutput) => void
  ): void;
  public putAppLaunchConfiguration(
    args: PutAppLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppLaunchConfigurationCommandOutput) => void
  ): void;
  public putAppLaunchConfiguration(
    args: PutAppLaunchConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAppLaunchConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutAppLaunchConfigurationCommandOutput) => void
  ): Promise<PutAppLaunchConfigurationCommandOutput> | void {
    const command = new PutAppLaunchConfigurationCommand(args);
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
   * <p>Creates or updates the replication configuration for the specified application.</p>
   */
  public putAppReplicationConfiguration(
    args: PutAppReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppReplicationConfigurationCommandOutput>;
  public putAppReplicationConfiguration(
    args: PutAppReplicationConfigurationCommandInput,
    cb: (err: any, data?: PutAppReplicationConfigurationCommandOutput) => void
  ): void;
  public putAppReplicationConfiguration(
    args: PutAppReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppReplicationConfigurationCommandOutput) => void
  ): void;
  public putAppReplicationConfiguration(
    args: PutAppReplicationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAppReplicationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutAppReplicationConfigurationCommandOutput) => void
  ): Promise<PutAppReplicationConfigurationCommandOutput> | void {
    const command = new PutAppReplicationConfigurationCommand(args);
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
   * <p>Creates or updates a validation configuration for the specified application.</p>
   */
  public putAppValidationConfiguration(
    args: PutAppValidationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAppValidationConfigurationCommandOutput>;
  public putAppValidationConfiguration(
    args: PutAppValidationConfigurationCommandInput,
    cb: (err: any, data?: PutAppValidationConfigurationCommandOutput) => void
  ): void;
  public putAppValidationConfiguration(
    args: PutAppValidationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppValidationConfigurationCommandOutput) => void
  ): void;
  public putAppValidationConfiguration(
    args: PutAppValidationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAppValidationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutAppValidationConfigurationCommandOutput) => void
  ): Promise<PutAppValidationConfigurationCommandOutput> | void {
    const command = new PutAppValidationConfigurationCommand(args);
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
   * <p>Starts replicating the specified application by creating replication jobs for each server in the
   *             application.</p>
   */
  public startAppReplication(
    args: StartAppReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAppReplicationCommandOutput>;
  public startAppReplication(
    args: StartAppReplicationCommandInput,
    cb: (err: any, data?: StartAppReplicationCommandOutput) => void
  ): void;
  public startAppReplication(
    args: StartAppReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAppReplicationCommandOutput) => void
  ): void;
  public startAppReplication(
    args: StartAppReplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAppReplicationCommandOutput) => void),
    cb?: (err: any, data?: StartAppReplicationCommandOutput) => void
  ): Promise<StartAppReplicationCommandOutput> | void {
    const command = new StartAppReplicationCommand(args);
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
   * <p>Starts an on-demand replication run for the specified application.</p>
   */
  public startOnDemandAppReplication(
    args: StartOnDemandAppReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOnDemandAppReplicationCommandOutput>;
  public startOnDemandAppReplication(
    args: StartOnDemandAppReplicationCommandInput,
    cb: (err: any, data?: StartOnDemandAppReplicationCommandOutput) => void
  ): void;
  public startOnDemandAppReplication(
    args: StartOnDemandAppReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOnDemandAppReplicationCommandOutput) => void
  ): void;
  public startOnDemandAppReplication(
    args: StartOnDemandAppReplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartOnDemandAppReplicationCommandOutput) => void),
    cb?: (err: any, data?: StartOnDemandAppReplicationCommandOutput) => void
  ): Promise<StartOnDemandAppReplicationCommandOutput> | void {
    const command = new StartOnDemandAppReplicationCommand(args);
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
   * <p>Starts an on-demand replication run for the specified replication job. This
   *             replication run starts immediately. This replication run is in addition to the ones
   *             already scheduled.</p>
   *         <p>There is a limit on the number of on-demand replications runs that you can request
   *             in a 24-hour period.</p>
   */
  public startOnDemandReplicationRun(
    args: StartOnDemandReplicationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOnDemandReplicationRunCommandOutput>;
  public startOnDemandReplicationRun(
    args: StartOnDemandReplicationRunCommandInput,
    cb: (err: any, data?: StartOnDemandReplicationRunCommandOutput) => void
  ): void;
  public startOnDemandReplicationRun(
    args: StartOnDemandReplicationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOnDemandReplicationRunCommandOutput) => void
  ): void;
  public startOnDemandReplicationRun(
    args: StartOnDemandReplicationRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartOnDemandReplicationRunCommandOutput) => void),
    cb?: (err: any, data?: StartOnDemandReplicationRunCommandOutput) => void
  ): Promise<StartOnDemandReplicationRunCommandOutput> | void {
    const command = new StartOnDemandReplicationRunCommand(args);
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
   * <p>Stops replicating the specified application by deleting the replication job for each server in
   *             the application.</p>
   */
  public stopAppReplication(
    args: StopAppReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAppReplicationCommandOutput>;
  public stopAppReplication(
    args: StopAppReplicationCommandInput,
    cb: (err: any, data?: StopAppReplicationCommandOutput) => void
  ): void;
  public stopAppReplication(
    args: StopAppReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAppReplicationCommandOutput) => void
  ): void;
  public stopAppReplication(
    args: StopAppReplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopAppReplicationCommandOutput) => void),
    cb?: (err: any, data?: StopAppReplicationCommandOutput) => void
  ): Promise<StopAppReplicationCommandOutput> | void {
    const command = new StopAppReplicationCommand(args);
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
   * <p>Terminates the stack for the specified application.</p>
   */
  public terminateApp(
    args: TerminateAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateAppCommandOutput>;
  public terminateApp(args: TerminateAppCommandInput, cb: (err: any, data?: TerminateAppCommandOutput) => void): void;
  public terminateApp(
    args: TerminateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateAppCommandOutput) => void
  ): void;
  public terminateApp(
    args: TerminateAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateAppCommandOutput) => void),
    cb?: (err: any, data?: TerminateAppCommandOutput) => void
  ): Promise<TerminateAppCommandOutput> | void {
    const command = new TerminateAppCommand(args);
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
   * <p>Updates the specified application.</p>
   */
  public updateApp(args: UpdateAppCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAppCommandOutput>;
  public updateApp(args: UpdateAppCommandInput, cb: (err: any, data?: UpdateAppCommandOutput) => void): void;
  public updateApp(
    args: UpdateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppCommandOutput) => void
  ): void;
  public updateApp(
    args: UpdateAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAppCommandOutput) => void),
    cb?: (err: any, data?: UpdateAppCommandOutput) => void
  ): Promise<UpdateAppCommandOutput> | void {
    const command = new UpdateAppCommand(args);
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
   * <p>Updates the specified settings for the specified replication job.</p>
   */
  public updateReplicationJob(
    args: UpdateReplicationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReplicationJobCommandOutput>;
  public updateReplicationJob(
    args: UpdateReplicationJobCommandInput,
    cb: (err: any, data?: UpdateReplicationJobCommandOutput) => void
  ): void;
  public updateReplicationJob(
    args: UpdateReplicationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReplicationJobCommandOutput) => void
  ): void;
  public updateReplicationJob(
    args: UpdateReplicationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateReplicationJobCommandOutput) => void),
    cb?: (err: any, data?: UpdateReplicationJobCommandOutput) => void
  ): Promise<UpdateReplicationJobCommandOutput> | void {
    const command = new UpdateReplicationJobCommand(args);
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
