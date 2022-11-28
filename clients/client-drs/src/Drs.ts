// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateExtendedSourceServerCommand,
  CreateExtendedSourceServerCommandInput,
  CreateExtendedSourceServerCommandOutput,
} from "./commands/CreateExtendedSourceServerCommand";
import {
  CreateReplicationConfigurationTemplateCommand,
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "./commands/CreateReplicationConfigurationTemplateCommand";
import { DeleteJobCommand, DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteRecoveryInstanceCommand,
  DeleteRecoveryInstanceCommandInput,
  DeleteRecoveryInstanceCommandOutput,
} from "./commands/DeleteRecoveryInstanceCommand";
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
  DescribeRecoveryInstancesCommand,
  DescribeRecoveryInstancesCommandInput,
  DescribeRecoveryInstancesCommandOutput,
} from "./commands/DescribeRecoveryInstancesCommand";
import {
  DescribeRecoverySnapshotsCommand,
  DescribeRecoverySnapshotsCommandInput,
  DescribeRecoverySnapshotsCommandOutput,
} from "./commands/DescribeRecoverySnapshotsCommand";
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
  DisconnectRecoveryInstanceCommand,
  DisconnectRecoveryInstanceCommandInput,
  DisconnectRecoveryInstanceCommandOutput,
} from "./commands/DisconnectRecoveryInstanceCommand";
import {
  DisconnectSourceServerCommand,
  DisconnectSourceServerCommandInput,
  DisconnectSourceServerCommandOutput,
} from "./commands/DisconnectSourceServerCommand";
import {
  GetFailbackReplicationConfigurationCommand,
  GetFailbackReplicationConfigurationCommandInput,
  GetFailbackReplicationConfigurationCommandOutput,
} from "./commands/GetFailbackReplicationConfigurationCommand";
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
  ListExtensibleSourceServersCommand,
  ListExtensibleSourceServersCommandInput,
  ListExtensibleSourceServersCommandOutput,
} from "./commands/ListExtensibleSourceServersCommand";
import {
  ListStagingAccountsCommand,
  ListStagingAccountsCommandInput,
  ListStagingAccountsCommandOutput,
} from "./commands/ListStagingAccountsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RetryDataReplicationCommand,
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "./commands/RetryDataReplicationCommand";
import {
  ReverseReplicationCommand,
  ReverseReplicationCommandInput,
  ReverseReplicationCommandOutput,
} from "./commands/ReverseReplicationCommand";
import {
  StartFailbackLaunchCommand,
  StartFailbackLaunchCommandInput,
  StartFailbackLaunchCommandOutput,
} from "./commands/StartFailbackLaunchCommand";
import {
  StartRecoveryCommand,
  StartRecoveryCommandInput,
  StartRecoveryCommandOutput,
} from "./commands/StartRecoveryCommand";
import {
  StartReplicationCommand,
  StartReplicationCommandInput,
  StartReplicationCommandOutput,
} from "./commands/StartReplicationCommand";
import {
  StopFailbackCommand,
  StopFailbackCommandInput,
  StopFailbackCommandOutput,
} from "./commands/StopFailbackCommand";
import {
  StopReplicationCommand,
  StopReplicationCommandInput,
  StopReplicationCommandOutput,
} from "./commands/StopReplicationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateRecoveryInstancesCommand,
  TerminateRecoveryInstancesCommandInput,
  TerminateRecoveryInstancesCommandOutput,
} from "./commands/TerminateRecoveryInstancesCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateFailbackReplicationConfigurationCommand,
  UpdateFailbackReplicationConfigurationCommandInput,
  UpdateFailbackReplicationConfigurationCommandOutput,
} from "./commands/UpdateFailbackReplicationConfigurationCommand";
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
import { DrsClient } from "./DrsClient";

/**
 * <p>AWS Elastic Disaster Recovery Service.</p>
 */
export class Drs extends DrsClient {
  /**
   * <p>Create an extended source server in the target Account based on the source server in staging account.</p>
   */
  public createExtendedSourceServer(
    args: CreateExtendedSourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExtendedSourceServerCommandOutput>;
  public createExtendedSourceServer(
    args: CreateExtendedSourceServerCommandInput,
    cb: (err: any, data?: CreateExtendedSourceServerCommandOutput) => void
  ): void;
  public createExtendedSourceServer(
    args: CreateExtendedSourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExtendedSourceServerCommandOutput) => void
  ): void;
  public createExtendedSourceServer(
    args: CreateExtendedSourceServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateExtendedSourceServerCommandOutput) => void),
    cb?: (err: any, data?: CreateExtendedSourceServerCommandOutput) => void
  ): Promise<CreateExtendedSourceServerCommandOutput> | void {
    const command = new CreateExtendedSourceServerCommand(args);
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
   * <p>Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.</p>
   */
  public deleteRecoveryInstance(
    args: DeleteRecoveryInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecoveryInstanceCommandOutput>;
  public deleteRecoveryInstance(
    args: DeleteRecoveryInstanceCommandInput,
    cb: (err: any, data?: DeleteRecoveryInstanceCommandOutput) => void
  ): void;
  public deleteRecoveryInstance(
    args: DeleteRecoveryInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecoveryInstanceCommandOutput) => void
  ): void;
  public deleteRecoveryInstance(
    args: DeleteRecoveryInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRecoveryInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteRecoveryInstanceCommandOutput) => void
  ): Promise<DeleteRecoveryInstanceCommandOutput> | void {
    const command = new DeleteRecoveryInstanceCommand(args);
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
   * <p>Deletes a single Source Server by ID. The Source Server must be disconnected first.</p>
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
   * <p>Retrieves a detailed Job log with pagination.</p>
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
   * <p>Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.</p>
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
   * <p>Lists all Recovery Instances or multiple Recovery Instances by ID.</p>
   */
  public describeRecoveryInstances(
    args: DescribeRecoveryInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecoveryInstancesCommandOutput>;
  public describeRecoveryInstances(
    args: DescribeRecoveryInstancesCommandInput,
    cb: (err: any, data?: DescribeRecoveryInstancesCommandOutput) => void
  ): void;
  public describeRecoveryInstances(
    args: DescribeRecoveryInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecoveryInstancesCommandOutput) => void
  ): void;
  public describeRecoveryInstances(
    args: DescribeRecoveryInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRecoveryInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeRecoveryInstancesCommandOutput) => void
  ): Promise<DescribeRecoveryInstancesCommandOutput> | void {
    const command = new DescribeRecoveryInstancesCommand(args);
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
   * <p>Lists all Recovery Snapshots for a single Source Server.</p>
   */
  public describeRecoverySnapshots(
    args: DescribeRecoverySnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecoverySnapshotsCommandOutput>;
  public describeRecoverySnapshots(
    args: DescribeRecoverySnapshotsCommandInput,
    cb: (err: any, data?: DescribeRecoverySnapshotsCommandOutput) => void
  ): void;
  public describeRecoverySnapshots(
    args: DescribeRecoverySnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecoverySnapshotsCommandOutput) => void
  ): void;
  public describeRecoverySnapshots(
    args: DescribeRecoverySnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRecoverySnapshotsCommandOutput) => void),
    cb?: (err: any, data?: DescribeRecoverySnapshotsCommandOutput) => void
  ): Promise<DescribeRecoverySnapshotsCommandOutput> | void {
    const command = new DescribeRecoverySnapshotsCommand(args);
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
   * <p>Lists all Source Servers or multiple Source Servers filtered by ID.</p>
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
   * <p>Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.</p>
   */
  public disconnectRecoveryInstance(
    args: DisconnectRecoveryInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectRecoveryInstanceCommandOutput>;
  public disconnectRecoveryInstance(
    args: DisconnectRecoveryInstanceCommandInput,
    cb: (err: any, data?: DisconnectRecoveryInstanceCommandOutput) => void
  ): void;
  public disconnectRecoveryInstance(
    args: DisconnectRecoveryInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectRecoveryInstanceCommandOutput) => void
  ): void;
  public disconnectRecoveryInstance(
    args: DisconnectRecoveryInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisconnectRecoveryInstanceCommandOutput) => void),
    cb?: (err: any, data?: DisconnectRecoveryInstanceCommandOutput) => void
  ): Promise<DisconnectRecoveryInstanceCommandOutput> | void {
    const command = new DisconnectRecoveryInstanceCommand(args);
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
   * <p>Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.</p>
   */
  public disconnectSourceServer(
    args: DisconnectSourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectSourceServerCommandOutput>;
  public disconnectSourceServer(
    args: DisconnectSourceServerCommandInput,
    cb: (err: any, data?: DisconnectSourceServerCommandOutput) => void
  ): void;
  public disconnectSourceServer(
    args: DisconnectSourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectSourceServerCommandOutput) => void
  ): void;
  public disconnectSourceServer(
    args: DisconnectSourceServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisconnectSourceServerCommandOutput) => void),
    cb?: (err: any, data?: DisconnectSourceServerCommandOutput) => void
  ): Promise<DisconnectSourceServerCommandOutput> | void {
    const command = new DisconnectSourceServerCommand(args);
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
   * <p>Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.</p>
   */
  public getFailbackReplicationConfiguration(
    args: GetFailbackReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFailbackReplicationConfigurationCommandOutput>;
  public getFailbackReplicationConfiguration(
    args: GetFailbackReplicationConfigurationCommandInput,
    cb: (err: any, data?: GetFailbackReplicationConfigurationCommandOutput) => void
  ): void;
  public getFailbackReplicationConfiguration(
    args: GetFailbackReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFailbackReplicationConfigurationCommandOutput) => void
  ): void;
  public getFailbackReplicationConfiguration(
    args: GetFailbackReplicationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFailbackReplicationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetFailbackReplicationConfigurationCommandOutput) => void
  ): Promise<GetFailbackReplicationConfigurationCommandOutput> | void {
    const command = new GetFailbackReplicationConfigurationCommand(args);
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
   * <p>Gets a LaunchConfiguration, filtered by Source Server IDs.</p>
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
   * <p>Gets a ReplicationConfiguration, filtered by Source Server ID.</p>
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
   * <p>Initialize Elastic Disaster Recovery.</p>
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
   * <p>Returns a list of source servers on a staging account that are extensible, which means that:
   *             a. The source server is not already extended into this Account.
   *             b. The source server on the Account we’re reading from is not an extension of another source server.
   *         </p>
   */
  public listExtensibleSourceServers(
    args: ListExtensibleSourceServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExtensibleSourceServersCommandOutput>;
  public listExtensibleSourceServers(
    args: ListExtensibleSourceServersCommandInput,
    cb: (err: any, data?: ListExtensibleSourceServersCommandOutput) => void
  ): void;
  public listExtensibleSourceServers(
    args: ListExtensibleSourceServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExtensibleSourceServersCommandOutput) => void
  ): void;
  public listExtensibleSourceServers(
    args: ListExtensibleSourceServersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExtensibleSourceServersCommandOutput) => void),
    cb?: (err: any, data?: ListExtensibleSourceServersCommandOutput) => void
  ): Promise<ListExtensibleSourceServersCommandOutput> | void {
    const command = new ListExtensibleSourceServersCommand(args);
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
   * <p>Returns an array of staging accounts for existing extended source servers.</p>
   */
  public listStagingAccounts(
    args: ListStagingAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStagingAccountsCommandOutput>;
  public listStagingAccounts(
    args: ListStagingAccountsCommandInput,
    cb: (err: any, data?: ListStagingAccountsCommandOutput) => void
  ): void;
  public listStagingAccounts(
    args: ListStagingAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStagingAccountsCommandOutput) => void
  ): void;
  public listStagingAccounts(
    args: ListStagingAccountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStagingAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListStagingAccountsCommandOutput) => void
  ): Promise<ListStagingAccountsCommandOutput> | void {
    const command = new ListStagingAccountsCommand(args);
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
   * <p>List all tags for your Elastic Disaster Recovery resources.</p>
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
   * <p>Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.</p>
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
   * <p>Start replication to origin / target region - applies only to protected instances that originated in EC2.
   *             For recovery instances on target region - starts replication back to origin region.
   *             For failback instances on origin region - starts replication to target region to re-protect them.
   *         </p>
   */
  public reverseReplication(
    args: ReverseReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReverseReplicationCommandOutput>;
  public reverseReplication(
    args: ReverseReplicationCommandInput,
    cb: (err: any, data?: ReverseReplicationCommandOutput) => void
  ): void;
  public reverseReplication(
    args: ReverseReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReverseReplicationCommandOutput) => void
  ): void;
  public reverseReplication(
    args: ReverseReplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReverseReplicationCommandOutput) => void),
    cb?: (err: any, data?: ReverseReplicationCommandOutput) => void
  ): Promise<ReverseReplicationCommandOutput> | void {
    const command = new ReverseReplicationCommand(args);
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
   * <p>Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.</p>
   */
  public startFailbackLaunch(
    args: StartFailbackLaunchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFailbackLaunchCommandOutput>;
  public startFailbackLaunch(
    args: StartFailbackLaunchCommandInput,
    cb: (err: any, data?: StartFailbackLaunchCommandOutput) => void
  ): void;
  public startFailbackLaunch(
    args: StartFailbackLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFailbackLaunchCommandOutput) => void
  ): void;
  public startFailbackLaunch(
    args: StartFailbackLaunchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFailbackLaunchCommandOutput) => void),
    cb?: (err: any, data?: StartFailbackLaunchCommandOutput) => void
  ): Promise<StartFailbackLaunchCommandOutput> | void {
    const command = new StartFailbackLaunchCommand(args);
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
   * <p>Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.</p>
   */
  public startRecovery(
    args: StartRecoveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRecoveryCommandOutput>;
  public startRecovery(
    args: StartRecoveryCommandInput,
    cb: (err: any, data?: StartRecoveryCommandOutput) => void
  ): void;
  public startRecovery(
    args: StartRecoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRecoveryCommandOutput) => void
  ): void;
  public startRecovery(
    args: StartRecoveryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartRecoveryCommandOutput) => void),
    cb?: (err: any, data?: StartRecoveryCommandOutput) => void
  ): Promise<StartRecoveryCommandOutput> | void {
    const command = new StartRecoveryCommand(args);
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
   * <p>Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.</p>
   */
  public startReplication(
    args: StartReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplicationCommandOutput>;
  public startReplication(
    args: StartReplicationCommandInput,
    cb: (err: any, data?: StartReplicationCommandOutput) => void
  ): void;
  public startReplication(
    args: StartReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplicationCommandOutput) => void
  ): void;
  public startReplication(
    args: StartReplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartReplicationCommandOutput) => void),
    cb?: (err: any, data?: StartReplicationCommandOutput) => void
  ): Promise<StartReplicationCommandOutput> | void {
    const command = new StartReplicationCommand(args);
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
   * <p>Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.</p>
   */
  public stopFailback(
    args: StopFailbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopFailbackCommandOutput>;
  public stopFailback(args: StopFailbackCommandInput, cb: (err: any, data?: StopFailbackCommandOutput) => void): void;
  public stopFailback(
    args: StopFailbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFailbackCommandOutput) => void
  ): void;
  public stopFailback(
    args: StopFailbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopFailbackCommandOutput) => void),
    cb?: (err: any, data?: StopFailbackCommandOutput) => void
  ): Promise<StopFailbackCommandOutput> | void {
    const command = new StopFailbackCommand(args);
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
   * <p>Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.</p>
   */
  public stopReplication(
    args: StopReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopReplicationCommandOutput>;
  public stopReplication(
    args: StopReplicationCommandInput,
    cb: (err: any, data?: StopReplicationCommandOutput) => void
  ): void;
  public stopReplication(
    args: StopReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopReplicationCommandOutput) => void
  ): void;
  public stopReplication(
    args: StopReplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopReplicationCommandOutput) => void),
    cb?: (err: any, data?: StopReplicationCommandOutput) => void
  ): Promise<StopReplicationCommandOutput> | void {
    const command = new StopReplicationCommand(args);
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
   * <p>Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.</p>
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
   * <p>Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.</p>
   */
  public terminateRecoveryInstances(
    args: TerminateRecoveryInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateRecoveryInstancesCommandOutput>;
  public terminateRecoveryInstances(
    args: TerminateRecoveryInstancesCommandInput,
    cb: (err: any, data?: TerminateRecoveryInstancesCommandOutput) => void
  ): void;
  public terminateRecoveryInstances(
    args: TerminateRecoveryInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateRecoveryInstancesCommandOutput) => void
  ): void;
  public terminateRecoveryInstances(
    args: TerminateRecoveryInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateRecoveryInstancesCommandOutput) => void),
    cb?: (err: any, data?: TerminateRecoveryInstancesCommandOutput) => void
  ): Promise<TerminateRecoveryInstancesCommandOutput> | void {
    const command = new TerminateRecoveryInstancesCommand(args);
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
   * <p>Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.</p>
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
   * <p>Allows you to update the failback replication configuration of a Recovery Instance by ID.</p>
   */
  public updateFailbackReplicationConfiguration(
    args: UpdateFailbackReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFailbackReplicationConfigurationCommandOutput>;
  public updateFailbackReplicationConfiguration(
    args: UpdateFailbackReplicationConfigurationCommandInput,
    cb: (err: any, data?: UpdateFailbackReplicationConfigurationCommandOutput) => void
  ): void;
  public updateFailbackReplicationConfiguration(
    args: UpdateFailbackReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFailbackReplicationConfigurationCommandOutput) => void
  ): void;
  public updateFailbackReplicationConfiguration(
    args: UpdateFailbackReplicationConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateFailbackReplicationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateFailbackReplicationConfigurationCommandOutput) => void
  ): Promise<UpdateFailbackReplicationConfigurationCommandOutput> | void {
    const command = new UpdateFailbackReplicationConfigurationCommand(args);
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
   * <p>Updates a LaunchConfiguration by Source Server ID.</p>
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
   * <p>Allows you to update a ReplicationConfiguration by Source Server ID.</p>
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
   * <p>Updates a ReplicationConfigurationTemplate by ID.</p>
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
