// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateCreatedArtifactCommand,
  AssociateCreatedArtifactCommandInput,
  AssociateCreatedArtifactCommandOutput,
} from "./commands/AssociateCreatedArtifactCommand";
import {
  AssociateDiscoveredResourceCommand,
  AssociateDiscoveredResourceCommandInput,
  AssociateDiscoveredResourceCommandOutput,
} from "./commands/AssociateDiscoveredResourceCommand";
import {
  CreateProgressUpdateStreamCommand,
  CreateProgressUpdateStreamCommandInput,
  CreateProgressUpdateStreamCommandOutput,
} from "./commands/CreateProgressUpdateStreamCommand";
import {
  DeleteProgressUpdateStreamCommand,
  DeleteProgressUpdateStreamCommandInput,
  DeleteProgressUpdateStreamCommandOutput,
} from "./commands/DeleteProgressUpdateStreamCommand";
import {
  DescribeApplicationStateCommand,
  DescribeApplicationStateCommandInput,
  DescribeApplicationStateCommandOutput,
} from "./commands/DescribeApplicationStateCommand";
import {
  DescribeMigrationTaskCommand,
  DescribeMigrationTaskCommandInput,
  DescribeMigrationTaskCommandOutput,
} from "./commands/DescribeMigrationTaskCommand";
import {
  DisassociateCreatedArtifactCommand,
  DisassociateCreatedArtifactCommandInput,
  DisassociateCreatedArtifactCommandOutput,
} from "./commands/DisassociateCreatedArtifactCommand";
import {
  DisassociateDiscoveredResourceCommand,
  DisassociateDiscoveredResourceCommandInput,
  DisassociateDiscoveredResourceCommandOutput,
} from "./commands/DisassociateDiscoveredResourceCommand";
import {
  ImportMigrationTaskCommand,
  ImportMigrationTaskCommandInput,
  ImportMigrationTaskCommandOutput,
} from "./commands/ImportMigrationTaskCommand";
import {
  ListApplicationStatesCommand,
  ListApplicationStatesCommandInput,
  ListApplicationStatesCommandOutput,
} from "./commands/ListApplicationStatesCommand";
import {
  ListCreatedArtifactsCommand,
  ListCreatedArtifactsCommandInput,
  ListCreatedArtifactsCommandOutput,
} from "./commands/ListCreatedArtifactsCommand";
import {
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "./commands/ListDiscoveredResourcesCommand";
import {
  ListMigrationTasksCommand,
  ListMigrationTasksCommandInput,
  ListMigrationTasksCommandOutput,
} from "./commands/ListMigrationTasksCommand";
import {
  ListProgressUpdateStreamsCommand,
  ListProgressUpdateStreamsCommandInput,
  ListProgressUpdateStreamsCommandOutput,
} from "./commands/ListProgressUpdateStreamsCommand";
import {
  NotifyApplicationStateCommand,
  NotifyApplicationStateCommandInput,
  NotifyApplicationStateCommandOutput,
} from "./commands/NotifyApplicationStateCommand";
import {
  NotifyMigrationTaskStateCommand,
  NotifyMigrationTaskStateCommandInput,
  NotifyMigrationTaskStateCommandOutput,
} from "./commands/NotifyMigrationTaskStateCommand";
import {
  PutResourceAttributesCommand,
  PutResourceAttributesCommandInput,
  PutResourceAttributesCommandOutput,
} from "./commands/PutResourceAttributesCommand";
import { MigrationHubClient, MigrationHubClientConfig } from "./MigrationHubClient";

const commands = {
  AssociateCreatedArtifactCommand,
  AssociateDiscoveredResourceCommand,
  CreateProgressUpdateStreamCommand,
  DeleteProgressUpdateStreamCommand,
  DescribeApplicationStateCommand,
  DescribeMigrationTaskCommand,
  DisassociateCreatedArtifactCommand,
  DisassociateDiscoveredResourceCommand,
  ImportMigrationTaskCommand,
  ListApplicationStatesCommand,
  ListCreatedArtifactsCommand,
  ListDiscoveredResourcesCommand,
  ListMigrationTasksCommand,
  ListProgressUpdateStreamsCommand,
  NotifyApplicationStateCommand,
  NotifyMigrationTaskStateCommand,
  PutResourceAttributesCommand,
};

export interface MigrationHub {
  /**
   * @see {@link AssociateCreatedArtifactCommand}
   */
  associateCreatedArtifact(
    args: AssociateCreatedArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateCreatedArtifactCommandOutput>;
  associateCreatedArtifact(
    args: AssociateCreatedArtifactCommandInput,
    cb: (err: any, data?: AssociateCreatedArtifactCommandOutput) => void
  ): void;
  associateCreatedArtifact(
    args: AssociateCreatedArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateCreatedArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDiscoveredResourceCommand}
   */
  associateDiscoveredResource(
    args: AssociateDiscoveredResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDiscoveredResourceCommandOutput>;
  associateDiscoveredResource(
    args: AssociateDiscoveredResourceCommandInput,
    cb: (err: any, data?: AssociateDiscoveredResourceCommandOutput) => void
  ): void;
  associateDiscoveredResource(
    args: AssociateDiscoveredResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDiscoveredResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProgressUpdateStreamCommand}
   */
  createProgressUpdateStream(
    args: CreateProgressUpdateStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProgressUpdateStreamCommandOutput>;
  createProgressUpdateStream(
    args: CreateProgressUpdateStreamCommandInput,
    cb: (err: any, data?: CreateProgressUpdateStreamCommandOutput) => void
  ): void;
  createProgressUpdateStream(
    args: CreateProgressUpdateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProgressUpdateStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProgressUpdateStreamCommand}
   */
  deleteProgressUpdateStream(
    args: DeleteProgressUpdateStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProgressUpdateStreamCommandOutput>;
  deleteProgressUpdateStream(
    args: DeleteProgressUpdateStreamCommandInput,
    cb: (err: any, data?: DeleteProgressUpdateStreamCommandOutput) => void
  ): void;
  deleteProgressUpdateStream(
    args: DeleteProgressUpdateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProgressUpdateStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationStateCommand}
   */
  describeApplicationState(
    args: DescribeApplicationStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationStateCommandOutput>;
  describeApplicationState(
    args: DescribeApplicationStateCommandInput,
    cb: (err: any, data?: DescribeApplicationStateCommandOutput) => void
  ): void;
  describeApplicationState(
    args: DescribeApplicationStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationStateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMigrationTaskCommand}
   */
  describeMigrationTask(
    args: DescribeMigrationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMigrationTaskCommandOutput>;
  describeMigrationTask(
    args: DescribeMigrationTaskCommandInput,
    cb: (err: any, data?: DescribeMigrationTaskCommandOutput) => void
  ): void;
  describeMigrationTask(
    args: DescribeMigrationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMigrationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateCreatedArtifactCommand}
   */
  disassociateCreatedArtifact(
    args: DisassociateCreatedArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateCreatedArtifactCommandOutput>;
  disassociateCreatedArtifact(
    args: DisassociateCreatedArtifactCommandInput,
    cb: (err: any, data?: DisassociateCreatedArtifactCommandOutput) => void
  ): void;
  disassociateCreatedArtifact(
    args: DisassociateCreatedArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateCreatedArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDiscoveredResourceCommand}
   */
  disassociateDiscoveredResource(
    args: DisassociateDiscoveredResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDiscoveredResourceCommandOutput>;
  disassociateDiscoveredResource(
    args: DisassociateDiscoveredResourceCommandInput,
    cb: (err: any, data?: DisassociateDiscoveredResourceCommandOutput) => void
  ): void;
  disassociateDiscoveredResource(
    args: DisassociateDiscoveredResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDiscoveredResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportMigrationTaskCommand}
   */
  importMigrationTask(
    args: ImportMigrationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportMigrationTaskCommandOutput>;
  importMigrationTask(
    args: ImportMigrationTaskCommandInput,
    cb: (err: any, data?: ImportMigrationTaskCommandOutput) => void
  ): void;
  importMigrationTask(
    args: ImportMigrationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportMigrationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationStatesCommand}
   */
  listApplicationStates(
    args: ListApplicationStatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationStatesCommandOutput>;
  listApplicationStates(
    args: ListApplicationStatesCommandInput,
    cb: (err: any, data?: ListApplicationStatesCommandOutput) => void
  ): void;
  listApplicationStates(
    args: ListApplicationStatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationStatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCreatedArtifactsCommand}
   */
  listCreatedArtifacts(
    args: ListCreatedArtifactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCreatedArtifactsCommandOutput>;
  listCreatedArtifacts(
    args: ListCreatedArtifactsCommandInput,
    cb: (err: any, data?: ListCreatedArtifactsCommandOutput) => void
  ): void;
  listCreatedArtifacts(
    args: ListCreatedArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCreatedArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDiscoveredResourcesCommand}
   */
  listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoveredResourcesCommandOutput>;
  listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): void;
  listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMigrationTasksCommand}
   */
  listMigrationTasks(
    args: ListMigrationTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMigrationTasksCommandOutput>;
  listMigrationTasks(
    args: ListMigrationTasksCommandInput,
    cb: (err: any, data?: ListMigrationTasksCommandOutput) => void
  ): void;
  listMigrationTasks(
    args: ListMigrationTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMigrationTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProgressUpdateStreamsCommand}
   */
  listProgressUpdateStreams(
    args: ListProgressUpdateStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProgressUpdateStreamsCommandOutput>;
  listProgressUpdateStreams(
    args: ListProgressUpdateStreamsCommandInput,
    cb: (err: any, data?: ListProgressUpdateStreamsCommandOutput) => void
  ): void;
  listProgressUpdateStreams(
    args: ListProgressUpdateStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProgressUpdateStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link NotifyApplicationStateCommand}
   */
  notifyApplicationState(
    args: NotifyApplicationStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyApplicationStateCommandOutput>;
  notifyApplicationState(
    args: NotifyApplicationStateCommandInput,
    cb: (err: any, data?: NotifyApplicationStateCommandOutput) => void
  ): void;
  notifyApplicationState(
    args: NotifyApplicationStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyApplicationStateCommandOutput) => void
  ): void;

  /**
   * @see {@link NotifyMigrationTaskStateCommand}
   */
  notifyMigrationTaskState(
    args: NotifyMigrationTaskStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyMigrationTaskStateCommandOutput>;
  notifyMigrationTaskState(
    args: NotifyMigrationTaskStateCommandInput,
    cb: (err: any, data?: NotifyMigrationTaskStateCommandOutput) => void
  ): void;
  notifyMigrationTaskState(
    args: NotifyMigrationTaskStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyMigrationTaskStateCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourceAttributesCommand}
   */
  putResourceAttributes(
    args: PutResourceAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourceAttributesCommandOutput>;
  putResourceAttributes(
    args: PutResourceAttributesCommandInput,
    cb: (err: any, data?: PutResourceAttributesCommandOutput) => void
  ): void;
  putResourceAttributes(
    args: PutResourceAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourceAttributesCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The AWS Migration Hub API methods help to obtain server and application migration status
 *          and integrate your resource-specific migration tool by providing a programmatic interface
 *          to Migration Hub.</p>
 *          <p>Remember that you must set your AWS Migration Hub home region before you call any of
 *          these APIs, or a <code>HomeRegionNotSetException</code> error will be returned. Also, you
 *          must make the API calls while in your home region.</p>
 */
export class MigrationHub extends MigrationHubClient implements MigrationHub {}
createAggregatedClient(commands, MigrationHub);
