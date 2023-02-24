// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  ArchiveApplicationCommand,
  ArchiveApplicationCommandInput,
  ArchiveApplicationCommandOutput,
} from "./commands/ArchiveApplicationCommand";
import { ArchiveWaveCommand, ArchiveWaveCommandInput, ArchiveWaveCommandOutput } from "./commands/ArchiveWaveCommand";
import {
  AssociateApplicationsCommand,
  AssociateApplicationsCommandInput,
  AssociateApplicationsCommandOutput,
} from "./commands/AssociateApplicationsCommand";
import {
  AssociateSourceServersCommand,
  AssociateSourceServersCommandInput,
  AssociateSourceServersCommandOutput,
} from "./commands/AssociateSourceServersCommand";
import {
  ChangeServerLifeCycleStateCommand,
  ChangeServerLifeCycleStateCommandInput,
  ChangeServerLifeCycleStateCommandOutput,
} from "./commands/ChangeServerLifeCycleStateCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateLaunchConfigurationTemplateCommand,
  CreateLaunchConfigurationTemplateCommandInput,
  CreateLaunchConfigurationTemplateCommandOutput,
} from "./commands/CreateLaunchConfigurationTemplateCommand";
import {
  CreateReplicationConfigurationTemplateCommand,
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "./commands/CreateReplicationConfigurationTemplateCommand";
import { CreateWaveCommand, CreateWaveCommandInput, CreateWaveCommandOutput } from "./commands/CreateWaveCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import { DeleteJobCommand, DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteLaunchConfigurationTemplateCommand,
  DeleteLaunchConfigurationTemplateCommandInput,
  DeleteLaunchConfigurationTemplateCommandOutput,
} from "./commands/DeleteLaunchConfigurationTemplateCommand";
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
  DeleteVcenterClientCommand,
  DeleteVcenterClientCommandInput,
  DeleteVcenterClientCommandOutput,
} from "./commands/DeleteVcenterClientCommand";
import { DeleteWaveCommand, DeleteWaveCommandInput, DeleteWaveCommandOutput } from "./commands/DeleteWaveCommand";
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
  DescribeLaunchConfigurationTemplatesCommand,
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput,
} from "./commands/DescribeLaunchConfigurationTemplatesCommand";
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
  DescribeVcenterClientsCommand,
  DescribeVcenterClientsCommandInput,
  DescribeVcenterClientsCommandOutput,
} from "./commands/DescribeVcenterClientsCommand";
import {
  DisassociateApplicationsCommand,
  DisassociateApplicationsCommandInput,
  DisassociateApplicationsCommandOutput,
} from "./commands/DisassociateApplicationsCommand";
import {
  DisassociateSourceServersCommand,
  DisassociateSourceServersCommandInput,
  DisassociateSourceServersCommandOutput,
} from "./commands/DisassociateSourceServersCommand";
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
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListSourceServerActionsCommand,
  ListSourceServerActionsCommandInput,
  ListSourceServerActionsCommandOutput,
} from "./commands/ListSourceServerActionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTemplateActionsCommand,
  ListTemplateActionsCommandInput,
  ListTemplateActionsCommandOutput,
} from "./commands/ListTemplateActionsCommand";
import { ListWavesCommand, ListWavesCommandInput, ListWavesCommandOutput } from "./commands/ListWavesCommand";
import {
  MarkAsArchivedCommand,
  MarkAsArchivedCommandInput,
  MarkAsArchivedCommandOutput,
} from "./commands/MarkAsArchivedCommand";
import {
  PutSourceServerActionCommand,
  PutSourceServerActionCommandInput,
  PutSourceServerActionCommandOutput,
} from "./commands/PutSourceServerActionCommand";
import {
  PutTemplateActionCommand,
  PutTemplateActionCommandInput,
  PutTemplateActionCommandOutput,
} from "./commands/PutTemplateActionCommand";
import {
  RemoveSourceServerActionCommand,
  RemoveSourceServerActionCommandInput,
  RemoveSourceServerActionCommandOutput,
} from "./commands/RemoveSourceServerActionCommand";
import {
  RemoveTemplateActionCommand,
  RemoveTemplateActionCommandInput,
  RemoveTemplateActionCommandOutput,
} from "./commands/RemoveTemplateActionCommand";
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
import {
  StartReplicationCommand,
  StartReplicationCommandInput,
  StartReplicationCommandOutput,
} from "./commands/StartReplicationCommand";
import { StartTestCommand, StartTestCommandInput, StartTestCommandOutput } from "./commands/StartTestCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateTargetInstancesCommand,
  TerminateTargetInstancesCommandInput,
  TerminateTargetInstancesCommandOutput,
} from "./commands/TerminateTargetInstancesCommand";
import {
  UnarchiveApplicationCommand,
  UnarchiveApplicationCommandInput,
  UnarchiveApplicationCommandOutput,
} from "./commands/UnarchiveApplicationCommand";
import {
  UnarchiveWaveCommand,
  UnarchiveWaveCommandInput,
  UnarchiveWaveCommandOutput,
} from "./commands/UnarchiveWaveCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateLaunchConfigurationCommand,
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
} from "./commands/UpdateLaunchConfigurationCommand";
import {
  UpdateLaunchConfigurationTemplateCommand,
  UpdateLaunchConfigurationTemplateCommandInput,
  UpdateLaunchConfigurationTemplateCommandOutput,
} from "./commands/UpdateLaunchConfigurationTemplateCommand";
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
import {
  UpdateSourceServerReplicationTypeCommand,
  UpdateSourceServerReplicationTypeCommandInput,
  UpdateSourceServerReplicationTypeCommandOutput,
} from "./commands/UpdateSourceServerReplicationTypeCommand";
import { UpdateWaveCommand, UpdateWaveCommandInput, UpdateWaveCommandOutput } from "./commands/UpdateWaveCommand";
import { MgnClient } from "./MgnClient";

/**
 * <p>The Application Migration Service service.</p>
 */
export class Mgn extends MgnClient {
  /**
   * <p>Archive application.</p>
   */
  public archiveApplication(
    args: ArchiveApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ArchiveApplicationCommandOutput>;
  public archiveApplication(
    args: ArchiveApplicationCommandInput,
    cb: (err: any, data?: ArchiveApplicationCommandOutput) => void
  ): void;
  public archiveApplication(
    args: ArchiveApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ArchiveApplicationCommandOutput) => void
  ): void;
  public archiveApplication(
    args: ArchiveApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ArchiveApplicationCommandOutput) => void),
    cb?: (err: any, data?: ArchiveApplicationCommandOutput) => void
  ): Promise<ArchiveApplicationCommandOutput> | void {
    const command = new ArchiveApplicationCommand(args);
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
   * <p>Archive wave.</p>
   */
  public archiveWave(args: ArchiveWaveCommandInput, options?: __HttpHandlerOptions): Promise<ArchiveWaveCommandOutput>;
  public archiveWave(args: ArchiveWaveCommandInput, cb: (err: any, data?: ArchiveWaveCommandOutput) => void): void;
  public archiveWave(
    args: ArchiveWaveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ArchiveWaveCommandOutput) => void
  ): void;
  public archiveWave(
    args: ArchiveWaveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ArchiveWaveCommandOutput) => void),
    cb?: (err: any, data?: ArchiveWaveCommandOutput) => void
  ): Promise<ArchiveWaveCommandOutput> | void {
    const command = new ArchiveWaveCommand(args);
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
   * <p>Associate applications to wave.</p>
   */
  public associateApplications(
    args: AssociateApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApplicationsCommandOutput>;
  public associateApplications(
    args: AssociateApplicationsCommandInput,
    cb: (err: any, data?: AssociateApplicationsCommandOutput) => void
  ): void;
  public associateApplications(
    args: AssociateApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApplicationsCommandOutput) => void
  ): void;
  public associateApplications(
    args: AssociateApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateApplicationsCommandOutput) => void),
    cb?: (err: any, data?: AssociateApplicationsCommandOutput) => void
  ): Promise<AssociateApplicationsCommandOutput> | void {
    const command = new AssociateApplicationsCommand(args);
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
   * <p>Associate source servers to application.</p>
   */
  public associateSourceServers(
    args: AssociateSourceServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSourceServersCommandOutput>;
  public associateSourceServers(
    args: AssociateSourceServersCommandInput,
    cb: (err: any, data?: AssociateSourceServersCommandOutput) => void
  ): void;
  public associateSourceServers(
    args: AssociateSourceServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSourceServersCommandOutput) => void
  ): void;
  public associateSourceServers(
    args: AssociateSourceServersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateSourceServersCommandOutput) => void),
    cb?: (err: any, data?: AssociateSourceServersCommandOutput) => void
  ): Promise<AssociateSourceServersCommandOutput> | void {
    const command = new AssociateSourceServersCommand(args);
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
   * <p>Create application.</p>
   */
  public createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  public createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationCommandOutput) => void
  ): Promise<CreateApplicationCommandOutput> | void {
    const command = new CreateApplicationCommand(args);
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
   * <p>Creates a new Launch Configuration Template.</p>
   */
  public createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLaunchConfigurationTemplateCommandOutput>;
  public createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    cb: (err: any, data?: CreateLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  public createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  public createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLaunchConfigurationTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateLaunchConfigurationTemplateCommandOutput) => void
  ): Promise<CreateLaunchConfigurationTemplateCommandOutput> | void {
    const command = new CreateLaunchConfigurationTemplateCommand(args);
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
   * <p>Create wave.</p>
   */
  public createWave(args: CreateWaveCommandInput, options?: __HttpHandlerOptions): Promise<CreateWaveCommandOutput>;
  public createWave(args: CreateWaveCommandInput, cb: (err: any, data?: CreateWaveCommandOutput) => void): void;
  public createWave(
    args: CreateWaveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWaveCommandOutput) => void
  ): void;
  public createWave(
    args: CreateWaveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWaveCommandOutput) => void),
    cb?: (err: any, data?: CreateWaveCommandOutput) => void
  ): Promise<CreateWaveCommandOutput> | void {
    const command = new CreateWaveCommand(args);
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
   * <p>Delete application.</p>
   */
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): Promise<DeleteApplicationCommandOutput> | void {
    const command = new DeleteApplicationCommand(args);
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
   * <p>Deletes a single Launch Configuration Template by ID.</p>
   */
  public deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchConfigurationTemplateCommandOutput>;
  public deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    cb: (err: any, data?: DeleteLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  public deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  public deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLaunchConfigurationTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteLaunchConfigurationTemplateCommandOutput) => void
  ): Promise<DeleteLaunchConfigurationTemplateCommandOutput> | void {
    const command = new DeleteLaunchConfigurationTemplateCommand(args);
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
   * <p>Deletes a given vCenter client by ID.</p>
   */
  public deleteVcenterClient(
    args: DeleteVcenterClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVcenterClientCommandOutput>;
  public deleteVcenterClient(
    args: DeleteVcenterClientCommandInput,
    cb: (err: any, data?: DeleteVcenterClientCommandOutput) => void
  ): void;
  public deleteVcenterClient(
    args: DeleteVcenterClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVcenterClientCommandOutput) => void
  ): void;
  public deleteVcenterClient(
    args: DeleteVcenterClientCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVcenterClientCommandOutput) => void),
    cb?: (err: any, data?: DeleteVcenterClientCommandOutput) => void
  ): Promise<DeleteVcenterClientCommandOutput> | void {
    const command = new DeleteVcenterClientCommand(args);
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
   * <p>Delete wave.</p>
   */
  public deleteWave(args: DeleteWaveCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWaveCommandOutput>;
  public deleteWave(args: DeleteWaveCommandInput, cb: (err: any, data?: DeleteWaveCommandOutput) => void): void;
  public deleteWave(
    args: DeleteWaveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWaveCommandOutput) => void
  ): void;
  public deleteWave(
    args: DeleteWaveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWaveCommandOutput) => void),
    cb?: (err: any, data?: DeleteWaveCommandOutput) => void
  ): Promise<DeleteWaveCommandOutput> | void {
    const command = new DeleteWaveCommand(args);
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
   * <p>Retrieves detailed job log items with paging.</p>
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
   * <p>Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.</p>
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
   * <p>Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs</p>
   */
  public describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLaunchConfigurationTemplatesCommandOutput>;
  public describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    cb: (err: any, data?: DescribeLaunchConfigurationTemplatesCommandOutput) => void
  ): void;
  public describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLaunchConfigurationTemplatesCommandOutput) => void
  ): void;
  public describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLaunchConfigurationTemplatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeLaunchConfigurationTemplatesCommandOutput) => void
  ): Promise<DescribeLaunchConfigurationTemplatesCommandOutput> | void {
    const command = new DescribeLaunchConfigurationTemplatesCommand(args);
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
   * <p>Returns a list of the installed vCenter clients.</p>
   */
  public describeVcenterClients(
    args: DescribeVcenterClientsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVcenterClientsCommandOutput>;
  public describeVcenterClients(
    args: DescribeVcenterClientsCommandInput,
    cb: (err: any, data?: DescribeVcenterClientsCommandOutput) => void
  ): void;
  public describeVcenterClients(
    args: DescribeVcenterClientsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVcenterClientsCommandOutput) => void
  ): void;
  public describeVcenterClients(
    args: DescribeVcenterClientsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVcenterClientsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVcenterClientsCommandOutput) => void
  ): Promise<DescribeVcenterClientsCommandOutput> | void {
    const command = new DescribeVcenterClientsCommand(args);
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
   * <p>Disassociate applications from wave.</p>
   */
  public disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApplicationsCommandOutput>;
  public disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    cb: (err: any, data?: DisassociateApplicationsCommandOutput) => void
  ): void;
  public disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApplicationsCommandOutput) => void
  ): void;
  public disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateApplicationsCommandOutput) => void),
    cb?: (err: any, data?: DisassociateApplicationsCommandOutput) => void
  ): Promise<DisassociateApplicationsCommandOutput> | void {
    const command = new DisassociateApplicationsCommand(args);
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
   * <p>Disassociate source servers from application.</p>
   */
  public disassociateSourceServers(
    args: DisassociateSourceServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSourceServersCommandOutput>;
  public disassociateSourceServers(
    args: DisassociateSourceServersCommandInput,
    cb: (err: any, data?: DisassociateSourceServersCommandOutput) => void
  ): void;
  public disassociateSourceServers(
    args: DisassociateSourceServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSourceServersCommandOutput) => void
  ): void;
  public disassociateSourceServers(
    args: DisassociateSourceServersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateSourceServersCommandOutput) => void),
    cb?: (err: any, data?: DisassociateSourceServersCommandOutput) => void
  ): Promise<DisassociateSourceServersCommandOutput> | void {
    const command = new DisassociateSourceServersCommand(args);
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
   * <p>Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.</p>
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
   * <p>Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.</p>
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
   * <p>Retrieves all applications or multiple applications by ID.</p>
   */
  public listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  public listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationsCommandOutput) => void
  ): Promise<ListApplicationsCommandOutput> | void {
    const command = new ListApplicationsCommand(args);
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
   * <p>List source server post migration custom actions.</p>
   */
  public listSourceServerActions(
    args: ListSourceServerActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceServerActionsCommandOutput>;
  public listSourceServerActions(
    args: ListSourceServerActionsCommandInput,
    cb: (err: any, data?: ListSourceServerActionsCommandOutput) => void
  ): void;
  public listSourceServerActions(
    args: ListSourceServerActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceServerActionsCommandOutput) => void
  ): void;
  public listSourceServerActions(
    args: ListSourceServerActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSourceServerActionsCommandOutput) => void),
    cb?: (err: any, data?: ListSourceServerActionsCommandOutput) => void
  ): Promise<ListSourceServerActionsCommandOutput> | void {
    const command = new ListSourceServerActionsCommand(args);
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
   * <p>List template post migration custom actions.</p>
   */
  public listTemplateActions(
    args: ListTemplateActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateActionsCommandOutput>;
  public listTemplateActions(
    args: ListTemplateActionsCommandInput,
    cb: (err: any, data?: ListTemplateActionsCommandOutput) => void
  ): void;
  public listTemplateActions(
    args: ListTemplateActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateActionsCommandOutput) => void
  ): void;
  public listTemplateActions(
    args: ListTemplateActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTemplateActionsCommandOutput) => void),
    cb?: (err: any, data?: ListTemplateActionsCommandOutput) => void
  ): Promise<ListTemplateActionsCommandOutput> | void {
    const command = new ListTemplateActionsCommand(args);
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
   * <p>Retrieves all waves or multiple waves by ID.</p>
   */
  public listWaves(args: ListWavesCommandInput, options?: __HttpHandlerOptions): Promise<ListWavesCommandOutput>;
  public listWaves(args: ListWavesCommandInput, cb: (err: any, data?: ListWavesCommandOutput) => void): void;
  public listWaves(
    args: ListWavesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWavesCommandOutput) => void
  ): void;
  public listWaves(
    args: ListWavesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWavesCommandOutput) => void),
    cb?: (err: any, data?: ListWavesCommandOutput) => void
  ): Promise<ListWavesCommandOutput> | void {
    const command = new ListWavesCommand(args);
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
   * <p>Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.</p>
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
   * <p>Put source server post migration custom action.</p>
   */
  public putSourceServerAction(
    args: PutSourceServerActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSourceServerActionCommandOutput>;
  public putSourceServerAction(
    args: PutSourceServerActionCommandInput,
    cb: (err: any, data?: PutSourceServerActionCommandOutput) => void
  ): void;
  public putSourceServerAction(
    args: PutSourceServerActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSourceServerActionCommandOutput) => void
  ): void;
  public putSourceServerAction(
    args: PutSourceServerActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSourceServerActionCommandOutput) => void),
    cb?: (err: any, data?: PutSourceServerActionCommandOutput) => void
  ): Promise<PutSourceServerActionCommandOutput> | void {
    const command = new PutSourceServerActionCommand(args);
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
   * <p>Put template post migration custom action.</p>
   */
  public putTemplateAction(
    args: PutTemplateActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTemplateActionCommandOutput>;
  public putTemplateAction(
    args: PutTemplateActionCommandInput,
    cb: (err: any, data?: PutTemplateActionCommandOutput) => void
  ): void;
  public putTemplateAction(
    args: PutTemplateActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTemplateActionCommandOutput) => void
  ): void;
  public putTemplateAction(
    args: PutTemplateActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutTemplateActionCommandOutput) => void),
    cb?: (err: any, data?: PutTemplateActionCommandOutput) => void
  ): Promise<PutTemplateActionCommandOutput> | void {
    const command = new PutTemplateActionCommand(args);
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
   * <p>Remove source server post migration custom action.</p>
   */
  public removeSourceServerAction(
    args: RemoveSourceServerActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveSourceServerActionCommandOutput>;
  public removeSourceServerAction(
    args: RemoveSourceServerActionCommandInput,
    cb: (err: any, data?: RemoveSourceServerActionCommandOutput) => void
  ): void;
  public removeSourceServerAction(
    args: RemoveSourceServerActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveSourceServerActionCommandOutput) => void
  ): void;
  public removeSourceServerAction(
    args: RemoveSourceServerActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveSourceServerActionCommandOutput) => void),
    cb?: (err: any, data?: RemoveSourceServerActionCommandOutput) => void
  ): Promise<RemoveSourceServerActionCommandOutput> | void {
    const command = new RemoveSourceServerActionCommand(args);
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
   * <p>Remove template post migration custom action.</p>
   */
  public removeTemplateAction(
    args: RemoveTemplateActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTemplateActionCommandOutput>;
  public removeTemplateAction(
    args: RemoveTemplateActionCommandInput,
    cb: (err: any, data?: RemoveTemplateActionCommandOutput) => void
  ): void;
  public removeTemplateAction(
    args: RemoveTemplateActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTemplateActionCommandOutput) => void
  ): void;
  public removeTemplateAction(
    args: RemoveTemplateActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTemplateActionCommandOutput) => void),
    cb?: (err: any, data?: RemoveTemplateActionCommandOutput) => void
  ): Promise<RemoveTemplateActionCommandOutput> | void {
    const command = new RemoveTemplateActionCommand(args);
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
   * <p>Starts replication for SNAPSHOT_SHIPPING agents.</p>
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
   * <p>Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.</p>
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
   * <p>Unarchive application.</p>
   */
  public unarchiveApplication(
    args: UnarchiveApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnarchiveApplicationCommandOutput>;
  public unarchiveApplication(
    args: UnarchiveApplicationCommandInput,
    cb: (err: any, data?: UnarchiveApplicationCommandOutput) => void
  ): void;
  public unarchiveApplication(
    args: UnarchiveApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnarchiveApplicationCommandOutput) => void
  ): void;
  public unarchiveApplication(
    args: UnarchiveApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnarchiveApplicationCommandOutput) => void),
    cb?: (err: any, data?: UnarchiveApplicationCommandOutput) => void
  ): Promise<UnarchiveApplicationCommandOutput> | void {
    const command = new UnarchiveApplicationCommand(args);
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
   * <p>Unarchive wave.</p>
   */
  public unarchiveWave(
    args: UnarchiveWaveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnarchiveWaveCommandOutput>;
  public unarchiveWave(
    args: UnarchiveWaveCommandInput,
    cb: (err: any, data?: UnarchiveWaveCommandOutput) => void
  ): void;
  public unarchiveWave(
    args: UnarchiveWaveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnarchiveWaveCommandOutput) => void
  ): void;
  public unarchiveWave(
    args: UnarchiveWaveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnarchiveWaveCommandOutput) => void),
    cb?: (err: any, data?: UnarchiveWaveCommandOutput) => void
  ): Promise<UnarchiveWaveCommandOutput> | void {
    const command = new UnarchiveWaveCommand(args);
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
   * <p>Update application.</p>
   */
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): Promise<UpdateApplicationCommandOutput> | void {
    const command = new UpdateApplicationCommand(args);
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
   * <p>Updates an existing Launch Configuration Template by ID.</p>
   */
  public updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLaunchConfigurationTemplateCommandOutput>;
  public updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    cb: (err: any, data?: UpdateLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  public updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  public updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLaunchConfigurationTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateLaunchConfigurationTemplateCommandOutput) => void
  ): Promise<UpdateLaunchConfigurationTemplateCommandOutput> | void {
    const command = new UpdateLaunchConfigurationTemplateCommand(args);
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

  /**
   * <p>Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.</p>
   */
  public updateSourceServerReplicationType(
    args: UpdateSourceServerReplicationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSourceServerReplicationTypeCommandOutput>;
  public updateSourceServerReplicationType(
    args: UpdateSourceServerReplicationTypeCommandInput,
    cb: (err: any, data?: UpdateSourceServerReplicationTypeCommandOutput) => void
  ): void;
  public updateSourceServerReplicationType(
    args: UpdateSourceServerReplicationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSourceServerReplicationTypeCommandOutput) => void
  ): void;
  public updateSourceServerReplicationType(
    args: UpdateSourceServerReplicationTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSourceServerReplicationTypeCommandOutput) => void),
    cb?: (err: any, data?: UpdateSourceServerReplicationTypeCommandOutput) => void
  ): Promise<UpdateSourceServerReplicationTypeCommandOutput> | void {
    const command = new UpdateSourceServerReplicationTypeCommand(args);
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
   * <p>Update wave.</p>
   */
  public updateWave(args: UpdateWaveCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWaveCommandOutput>;
  public updateWave(args: UpdateWaveCommandInput, cb: (err: any, data?: UpdateWaveCommandOutput) => void): void;
  public updateWave(
    args: UpdateWaveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWaveCommandOutput) => void
  ): void;
  public updateWave(
    args: UpdateWaveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWaveCommandOutput) => void),
    cb?: (err: any, data?: UpdateWaveCommandOutput) => void
  ): Promise<UpdateWaveCommandOutput> | void {
    const command = new UpdateWaveCommand(args);
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
