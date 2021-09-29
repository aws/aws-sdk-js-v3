import { MgnClient } from "./MgnClient";
import {
  ChangeServerLifeCycleStateCommand,
  ChangeServerLifeCycleStateCommandInput,
  ChangeServerLifeCycleStateCommandOutput,
} from "./commands/ChangeServerLifeCycleStateCommand";
import {
  CreateReplicationConfigurationTemplateCommand,
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "./commands/CreateReplicationConfigurationTemplateCommand";
import { DeleteJobCommand, DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteReplicationConfigurationTemplateCommand,
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "./commands/DeleteReplicationConfigurationTemplateCommand";
import {
  DeleteSourceServerCommand,
  DeleteSourceServerCommandInput,
  DeleteSourceServerCommandOutput,
} from "./commands/DeleteSourceServerCommand";
import {
  DescribeJobLogItemsCommand,
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "./commands/DescribeJobLogItemsCommand";
import {
  DescribeJobsCommand,
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput,
} from "./commands/DescribeJobsCommand";
import {
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "./commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  DescribeSourceServersCommand,
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "./commands/DescribeSourceServersCommand";
import {
  DisconnectFromServiceCommand,
  DisconnectFromServiceCommandInput,
  DisconnectFromServiceCommandOutput,
} from "./commands/DisconnectFromServiceCommand";
import {
  FinalizeCutoverCommand,
  FinalizeCutoverCommandInput,
  FinalizeCutoverCommandOutput,
} from "./commands/FinalizeCutoverCommand";
import {
  GetLaunchConfigurationCommand,
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
} from "./commands/GetLaunchConfigurationCommand";
import {
  GetReplicationConfigurationCommand,
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
} from "./commands/GetReplicationConfigurationCommand";
import {
  InitializeServiceCommand,
  InitializeServiceCommandInput,
  InitializeServiceCommandOutput,
} from "./commands/InitializeServiceCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  MarkAsArchivedCommand,
  MarkAsArchivedCommandInput,
  MarkAsArchivedCommandOutput,
} from "./commands/MarkAsArchivedCommand";
import {
  RetryDataReplicationCommand,
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "./commands/RetryDataReplicationCommand";
import {
  StartCutoverCommand,
  StartCutoverCommandInput,
  StartCutoverCommandOutput,
} from "./commands/StartCutoverCommand";
import { StartTestCommand, StartTestCommandInput, StartTestCommandOutput } from "./commands/StartTestCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateTargetInstancesCommand,
  TerminateTargetInstancesCommandInput,
  TerminateTargetInstancesCommandOutput,
} from "./commands/TerminateTargetInstancesCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateLaunchConfigurationCommand,
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
} from "./commands/UpdateLaunchConfigurationCommand";
import {
  UpdateReplicationConfigurationCommand,
  UpdateReplicationConfigurationCommandInput,
  UpdateReplicationConfigurationCommandOutput,
} from "./commands/UpdateReplicationConfigurationCommand";
import {
  UpdateReplicationConfigurationTemplateCommand,
  UpdateReplicationConfigurationTemplateCommandInput,
  UpdateReplicationConfigurationTemplateCommandOutput,
} from "./commands/UpdateReplicationConfigurationTemplateCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The Application Migration Service service.</p>
 */
export class Mgn extends MgnClient {
  /**
   * <p>Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)</p>
   */
  public changeServerLifeCycleState(
    args: ChangeServerLifeCycleStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangeServerLifeCycleStateCommandOutput>;
  public changeServerLifeCycleState(
    args: ChangeServerLifeCycleStateCommandInput,
    cb: (err: any, data?: ChangeServerLifeCycleStateCommandOutput) => void
  ): void;
  public changeServerLifeCycleState(
    args: ChangeServerLifeCycleStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangeServerLifeCycleStateCommandOutput) => void
  ): void;
  public changeServerLifeCycleState(
    args: ChangeServerLifeCycleStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ChangeServerLifeCycleStateCommandOutput) => void),
    cb?: (err: any, data?: ChangeServerLifeCycleStateCommandOutput) => void
  ): Promise<ChangeServerLifeCycleStateCommandOutput> | void {
    const command = new ChangeServerLifeCycleStateCommand(args);
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
   * <p>Creates a new ReplicationConfigurationTemplate.</p>
   */
  public createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationConfigurationTemplateCommandOutput>;
  public createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    cb: (err: any, data?: CreateReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  public createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  public createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateReplicationConfigurationTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateReplicationConfigurationTemplateCommandOutput) => void
  ): Promise<CreateReplicationConfigurationTemplateCommandOutput> | void {
    const command = new CreateReplicationConfigurationTemplateCommand(args);
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
   * <p>Deletes a single Job by ID.</p>
   */
  public deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
  public deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
  public deleteJob(
    args: DeleteJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;
  public deleteJob(
    args: DeleteJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteJobCommandOutput) => void
  ): Promise<DeleteJobCommandOutput> | void {
    const command = new DeleteJobCommand(args);
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
   * <p>Deletes a single Replication Configuration Template by ID</p>
   */
  public deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationConfigurationTemplateCommandOutput>;
  public deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    cb: (err: any, data?: DeleteReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  public deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  public deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteReplicationConfigurationTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteReplicationConfigurationTemplateCommandOutput) => void
  ): Promise<DeleteReplicationConfigurationTemplateCommandOutput> | void {
    const command = new DeleteReplicationConfigurationTemplateCommand(args);
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
   * <p>Deletes a single source server by ID.</p>
   */
  public deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSourceServerCommandOutput>;
  public deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    cb: (err: any, data?: DeleteSourceServerCommandOutput) => void
  ): void;
  public deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSourceServerCommandOutput) => void
  ): void;
  public deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSourceServerCommandOutput) => void),
    cb?: (err: any, data?: DeleteSourceServerCommandOutput) => void
  ): Promise<DeleteSourceServerCommandOutput> | void {
    const command = new DeleteSourceServerCommand(args);
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
   * <p>Retrieves detailed Job log with paging.</p>
   */
  public describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobLogItemsCommandOutput>;
  public describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    cb: (err: any, data?: DescribeJobLogItemsCommandOutput) => void
  ): void;
  public describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobLogItemsCommandOutput) => void
  ): void;
  public describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobLogItemsCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobLogItemsCommandOutput) => void
  ): Promise<DescribeJobLogItemsCommandOutput> | void {
    const command = new DescribeJobLogItemsCommand(args);
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
   * <p>Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normaly created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.</p>
   */
  public describeJobs(
    args: DescribeJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobsCommandOutput>;
  public describeJobs(args: DescribeJobsCommandInput, cb: (err: any, data?: DescribeJobsCommandOutput) => void): void;
  public describeJobs(
    args: DescribeJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobsCommandOutput) => void
  ): void;
  public describeJobs(
    args: DescribeJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobsCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobsCommandOutput) => void
  ): Promise<DescribeJobsCommandOutput> | void {
    const command = new DescribeJobsCommand(args);
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
   * <p>Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.</p>
   */
  public describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationConfigurationTemplatesCommandOutput>;
  public describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    cb: (err: any, data?: DescribeReplicationConfigurationTemplatesCommandOutput) => void
  ): void;
  public describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationConfigurationTemplatesCommandOutput) => void
  ): void;
  public describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeReplicationConfigurationTemplatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeReplicationConfigurationTemplatesCommandOutput) => void
  ): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> | void {
    const command = new DescribeReplicationConfigurationTemplatesCommand(args);
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
   * <p>Retrieves all SourceServers or multiple SourceServers by ID.</p>
   */
  public describeSourceServers(
    args: DescribeSourceServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSourceServersCommandOutput>;
  public describeSourceServers(
    args: DescribeSourceServersCommandInput,
    cb: (err: any, data?: DescribeSourceServersCommandOutput) => void
  ): void;
  public describeSourceServers(
    args: DescribeSourceServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSourceServersCommandOutput) => void
  ): void;
  public describeSourceServers(
    args: DescribeSourceServersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSourceServersCommandOutput) => void),
    cb?: (err: any, data?: DescribeSourceServersCommandOutput) => void
  ): Promise<DescribeSourceServersCommandOutput> | void {
    const command = new DescribeSourceServersCommand(args);
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
   * <p>Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communciating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.</p>
   */
  public disconnectFromService(
    args: DisconnectFromServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectFromServiceCommandOutput>;
  public disconnectFromService(
    args: DisconnectFromServiceCommandInput,
    cb: (err: any, data?: DisconnectFromServiceCommandOutput) => void
  ): void;
  public disconnectFromService(
    args: DisconnectFromServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectFromServiceCommandOutput) => void
  ): void;
  public disconnectFromService(
    args: DisconnectFromServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisconnectFromServiceCommandOutput) => void),
    cb?: (err: any, data?: DisconnectFromServiceCommandOutput) => void
  ): Promise<DisconnectFromServiceCommandOutput> | void {
    const command = new DisconnectFromServiceCommand(args);
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
   * <p>Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.</p>
   */
  public finalizeCutover(
    args: FinalizeCutoverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FinalizeCutoverCommandOutput>;
  public finalizeCutover(
    args: FinalizeCutoverCommandInput,
    cb: (err: any, data?: FinalizeCutoverCommandOutput) => void
  ): void;
  public finalizeCutover(
    args: FinalizeCutoverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FinalizeCutoverCommandOutput) => void
  ): void;
  public finalizeCutover(
    args: FinalizeCutoverCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FinalizeCutoverCommandOutput) => void),
    cb?: (err: any, data?: FinalizeCutoverCommandOutput) => void
  ): Promise<FinalizeCutoverCommandOutput> | void {
    const command = new FinalizeCutoverCommand(args);
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
   * <p>Lists all LaunchConfigurations available, filtered by Source Server IDs.</p>
   */
  public getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchConfigurationCommandOutput>;
  public getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    cb: (err: any, data?: GetLaunchConfigurationCommandOutput) => void
  ): void;
  public getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchConfigurationCommandOutput) => void
  ): void;
  public getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLaunchConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetLaunchConfigurationCommandOutput) => void
  ): Promise<GetLaunchConfigurationCommandOutput> | void {
    const command = new GetLaunchConfigurationCommand(args);
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
   * <p>Lists all ReplicationConfigurations, filtered by Source Server ID.</p>
   */
  public getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReplicationConfigurationCommandOutput>;
  public getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    cb: (err: any, data?: GetReplicationConfigurationCommandOutput) => void
  ): void;
  public getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReplicationConfigurationCommandOutput) => void
  ): void;
  public getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReplicationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetReplicationConfigurationCommandOutput) => void
  ): Promise<GetReplicationConfigurationCommandOutput> | void {
    const command = new GetReplicationConfigurationCommand(args);
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
   * <p>Initialize Application Migration Service.</p>
   */
  public initializeService(
    args: InitializeServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitializeServiceCommandOutput>;
  public initializeService(
    args: InitializeServiceCommandInput,
    cb: (err: any, data?: InitializeServiceCommandOutput) => void
  ): void;
  public initializeService(
    args: InitializeServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitializeServiceCommandOutput) => void
  ): void;
  public initializeService(
    args: InitializeServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InitializeServiceCommandOutput) => void),
    cb?: (err: any, data?: InitializeServiceCommandOutput) => void
  ): Promise<InitializeServiceCommandOutput> | void {
    const command = new InitializeServiceCommand(args);
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
   * <p>List all tags for your Application Migration Service resources.</p>
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
   * <p>Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle.state which equals DISCONNECTED or CUTOVER.</p>
   */
  public markAsArchived(
    args: MarkAsArchivedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MarkAsArchivedCommandOutput>;
  public markAsArchived(
    args: MarkAsArchivedCommandInput,
    cb: (err: any, data?: MarkAsArchivedCommandOutput) => void
  ): void;
  public markAsArchived(
    args: MarkAsArchivedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MarkAsArchivedCommandOutput) => void
  ): void;
  public markAsArchived(
    args: MarkAsArchivedCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MarkAsArchivedCommandOutput) => void),
    cb?: (err: any, data?: MarkAsArchivedCommandOutput) => void
  ): Promise<MarkAsArchivedCommandOutput> | void {
    const command = new MarkAsArchivedCommand(args);
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
   * <p>Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.</p>
   */
  public retryDataReplication(
    args: RetryDataReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetryDataReplicationCommandOutput>;
  public retryDataReplication(
    args: RetryDataReplicationCommandInput,
    cb: (err: any, data?: RetryDataReplicationCommandOutput) => void
  ): void;
  public retryDataReplication(
    args: RetryDataReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryDataReplicationCommandOutput) => void
  ): void;
  public retryDataReplication(
    args: RetryDataReplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RetryDataReplicationCommandOutput) => void),
    cb?: (err: any, data?: RetryDataReplicationCommandOutput) => void
  ): Promise<RetryDataReplicationCommandOutput> | void {
    const command = new RetryDataReplicationCommand(args);
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
   * <p>Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.</p>
   */
  public startCutover(
    args: StartCutoverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCutoverCommandOutput>;
  public startCutover(args: StartCutoverCommandInput, cb: (err: any, data?: StartCutoverCommandOutput) => void): void;
  public startCutover(
    args: StartCutoverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCutoverCommandOutput) => void
  ): void;
  public startCutover(
    args: StartCutoverCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartCutoverCommandOutput) => void),
    cb?: (err: any, data?: StartCutoverCommandOutput) => void
  ): Promise<StartCutoverCommandOutput> | void {
    const command = new StartCutoverCommand(args);
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
   * <p>Lauches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.</p>
   */
  public startTest(args: StartTestCommandInput, options?: __HttpHandlerOptions): Promise<StartTestCommandOutput>;
  public startTest(args: StartTestCommandInput, cb: (err: any, data?: StartTestCommandOutput) => void): void;
  public startTest(
    args: StartTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTestCommandOutput) => void
  ): void;
  public startTest(
    args: StartTestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartTestCommandOutput) => void),
    cb?: (err: any, data?: StartTestCommandOutput) => void
  ): Promise<StartTestCommandOutput> | void {
    const command = new StartTestCommand(args);
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
   * <p>Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.</p>
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
   * <p>Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.</p>
   */
  public terminateTargetInstances(
    args: TerminateTargetInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateTargetInstancesCommandOutput>;
  public terminateTargetInstances(
    args: TerminateTargetInstancesCommandInput,
    cb: (err: any, data?: TerminateTargetInstancesCommandOutput) => void
  ): void;
  public terminateTargetInstances(
    args: TerminateTargetInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateTargetInstancesCommandOutput) => void
  ): void;
  public terminateTargetInstances(
    args: TerminateTargetInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateTargetInstancesCommandOutput) => void),
    cb?: (err: any, data?: TerminateTargetInstancesCommandOutput) => void
  ): Promise<TerminateTargetInstancesCommandOutput> | void {
    const command = new TerminateTargetInstancesCommand(args);
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
   * <p>Deletes the specified set of tags from the specified set of Application Migration Service resources.</p>
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
   * <p>Updates multiple LaunchConfigurations by Source Server ID.</p>
   */
  public updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLaunchConfigurationCommandOutput>;
  public updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    cb: (err: any, data?: UpdateLaunchConfigurationCommandOutput) => void
  ): void;
  public updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLaunchConfigurationCommandOutput) => void
  ): void;
  public updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLaunchConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateLaunchConfigurationCommandOutput) => void
  ): Promise<UpdateLaunchConfigurationCommandOutput> | void {
    const command = new UpdateLaunchConfigurationCommand(args);
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
   * <p>Allows you to update multiple ReplicationConfigurations by Source Server ID.</p>
   */
  public updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReplicationConfigurationCommandOutput>;
  public updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    cb: (err: any, data?: UpdateReplicationConfigurationCommandOutput) => void
  ): void;
  public updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReplicationConfigurationCommandOutput) => void
  ): void;
  public updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateReplicationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateReplicationConfigurationCommandOutput) => void
  ): Promise<UpdateReplicationConfigurationCommandOutput> | void {
    const command = new UpdateReplicationConfigurationCommand(args);
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
   * <p>Updates multiple ReplicationConfigurationTemplates by ID.</p>
   */
  public updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReplicationConfigurationTemplateCommandOutput>;
  public updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    cb: (err: any, data?: UpdateReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  public updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  public updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateReplicationConfigurationTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateReplicationConfigurationTemplateCommandOutput) => void
  ): Promise<UpdateReplicationConfigurationTemplateCommandOutput> | void {
    const command = new UpdateReplicationConfigurationTemplateCommand(args);
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
