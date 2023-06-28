// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AppFabricClient, AppFabricClientConfig } from "./AppFabricClient";
import {
  BatchGetUserAccessTasksCommand,
  BatchGetUserAccessTasksCommandInput,
  BatchGetUserAccessTasksCommandOutput,
} from "./commands/BatchGetUserAccessTasksCommand";
import {
  ConnectAppAuthorizationCommand,
  ConnectAppAuthorizationCommandInput,
  ConnectAppAuthorizationCommandOutput,
} from "./commands/ConnectAppAuthorizationCommand";
import {
  CreateAppAuthorizationCommand,
  CreateAppAuthorizationCommandInput,
  CreateAppAuthorizationCommandOutput,
} from "./commands/CreateAppAuthorizationCommand";
import {
  CreateAppBundleCommand,
  CreateAppBundleCommandInput,
  CreateAppBundleCommandOutput,
} from "./commands/CreateAppBundleCommand";
import {
  CreateIngestionCommand,
  CreateIngestionCommandInput,
  CreateIngestionCommandOutput,
} from "./commands/CreateIngestionCommand";
import {
  CreateIngestionDestinationCommand,
  CreateIngestionDestinationCommandInput,
  CreateIngestionDestinationCommandOutput,
} from "./commands/CreateIngestionDestinationCommand";
import {
  DeleteAppAuthorizationCommand,
  DeleteAppAuthorizationCommandInput,
  DeleteAppAuthorizationCommandOutput,
} from "./commands/DeleteAppAuthorizationCommand";
import {
  DeleteAppBundleCommand,
  DeleteAppBundleCommandInput,
  DeleteAppBundleCommandOutput,
} from "./commands/DeleteAppBundleCommand";
import {
  DeleteIngestionCommand,
  DeleteIngestionCommandInput,
  DeleteIngestionCommandOutput,
} from "./commands/DeleteIngestionCommand";
import {
  DeleteIngestionDestinationCommand,
  DeleteIngestionDestinationCommandInput,
  DeleteIngestionDestinationCommandOutput,
} from "./commands/DeleteIngestionDestinationCommand";
import {
  GetAppAuthorizationCommand,
  GetAppAuthorizationCommandInput,
  GetAppAuthorizationCommandOutput,
} from "./commands/GetAppAuthorizationCommand";
import {
  GetAppBundleCommand,
  GetAppBundleCommandInput,
  GetAppBundleCommandOutput,
} from "./commands/GetAppBundleCommand";
import {
  GetIngestionCommand,
  GetIngestionCommandInput,
  GetIngestionCommandOutput,
} from "./commands/GetIngestionCommand";
import {
  GetIngestionDestinationCommand,
  GetIngestionDestinationCommandInput,
  GetIngestionDestinationCommandOutput,
} from "./commands/GetIngestionDestinationCommand";
import {
  ListAppAuthorizationsCommand,
  ListAppAuthorizationsCommandInput,
  ListAppAuthorizationsCommandOutput,
} from "./commands/ListAppAuthorizationsCommand";
import {
  ListAppBundlesCommand,
  ListAppBundlesCommandInput,
  ListAppBundlesCommandOutput,
} from "./commands/ListAppBundlesCommand";
import {
  ListIngestionDestinationsCommand,
  ListIngestionDestinationsCommandInput,
  ListIngestionDestinationsCommandOutput,
} from "./commands/ListIngestionDestinationsCommand";
import {
  ListIngestionsCommand,
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput,
} from "./commands/ListIngestionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartIngestionCommand,
  StartIngestionCommandInput,
  StartIngestionCommandOutput,
} from "./commands/StartIngestionCommand";
import {
  StartUserAccessTasksCommand,
  StartUserAccessTasksCommandInput,
  StartUserAccessTasksCommandOutput,
} from "./commands/StartUserAccessTasksCommand";
import {
  StopIngestionCommand,
  StopIngestionCommandInput,
  StopIngestionCommandOutput,
} from "./commands/StopIngestionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAppAuthorizationCommand,
  UpdateAppAuthorizationCommandInput,
  UpdateAppAuthorizationCommandOutput,
} from "./commands/UpdateAppAuthorizationCommand";
import {
  UpdateIngestionDestinationCommand,
  UpdateIngestionDestinationCommandInput,
  UpdateIngestionDestinationCommandOutput,
} from "./commands/UpdateIngestionDestinationCommand";

const commands = {
  BatchGetUserAccessTasksCommand,
  ConnectAppAuthorizationCommand,
  CreateAppAuthorizationCommand,
  CreateAppBundleCommand,
  CreateIngestionCommand,
  CreateIngestionDestinationCommand,
  DeleteAppAuthorizationCommand,
  DeleteAppBundleCommand,
  DeleteIngestionCommand,
  DeleteIngestionDestinationCommand,
  GetAppAuthorizationCommand,
  GetAppBundleCommand,
  GetIngestionCommand,
  GetIngestionDestinationCommand,
  ListAppAuthorizationsCommand,
  ListAppBundlesCommand,
  ListIngestionDestinationsCommand,
  ListIngestionsCommand,
  ListTagsForResourceCommand,
  StartIngestionCommand,
  StartUserAccessTasksCommand,
  StopIngestionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAppAuthorizationCommand,
  UpdateIngestionDestinationCommand,
};

export interface AppFabric {
  /**
   * @see {@link BatchGetUserAccessTasksCommand}
   */
  batchGetUserAccessTasks(
    args: BatchGetUserAccessTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetUserAccessTasksCommandOutput>;
  batchGetUserAccessTasks(
    args: BatchGetUserAccessTasksCommandInput,
    cb: (err: any, data?: BatchGetUserAccessTasksCommandOutput) => void
  ): void;
  batchGetUserAccessTasks(
    args: BatchGetUserAccessTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetUserAccessTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ConnectAppAuthorizationCommand}
   */
  connectAppAuthorization(
    args: ConnectAppAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConnectAppAuthorizationCommandOutput>;
  connectAppAuthorization(
    args: ConnectAppAuthorizationCommandInput,
    cb: (err: any, data?: ConnectAppAuthorizationCommandOutput) => void
  ): void;
  connectAppAuthorization(
    args: ConnectAppAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConnectAppAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppAuthorizationCommand}
   */
  createAppAuthorization(
    args: CreateAppAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppAuthorizationCommandOutput>;
  createAppAuthorization(
    args: CreateAppAuthorizationCommandInput,
    cb: (err: any, data?: CreateAppAuthorizationCommandOutput) => void
  ): void;
  createAppAuthorization(
    args: CreateAppAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppBundleCommand}
   */
  createAppBundle(
    args: CreateAppBundleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppBundleCommandOutput>;
  createAppBundle(args: CreateAppBundleCommandInput, cb: (err: any, data?: CreateAppBundleCommandOutput) => void): void;
  createAppBundle(
    args: CreateAppBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppBundleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIngestionCommand}
   */
  createIngestion(
    args: CreateIngestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIngestionCommandOutput>;
  createIngestion(args: CreateIngestionCommandInput, cb: (err: any, data?: CreateIngestionCommandOutput) => void): void;
  createIngestion(
    args: CreateIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIngestionDestinationCommand}
   */
  createIngestionDestination(
    args: CreateIngestionDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIngestionDestinationCommandOutput>;
  createIngestionDestination(
    args: CreateIngestionDestinationCommandInput,
    cb: (err: any, data?: CreateIngestionDestinationCommandOutput) => void
  ): void;
  createIngestionDestination(
    args: CreateIngestionDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIngestionDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppAuthorizationCommand}
   */
  deleteAppAuthorization(
    args: DeleteAppAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppAuthorizationCommandOutput>;
  deleteAppAuthorization(
    args: DeleteAppAuthorizationCommandInput,
    cb: (err: any, data?: DeleteAppAuthorizationCommandOutput) => void
  ): void;
  deleteAppAuthorization(
    args: DeleteAppAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppBundleCommand}
   */
  deleteAppBundle(
    args: DeleteAppBundleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppBundleCommandOutput>;
  deleteAppBundle(args: DeleteAppBundleCommandInput, cb: (err: any, data?: DeleteAppBundleCommandOutput) => void): void;
  deleteAppBundle(
    args: DeleteAppBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppBundleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIngestionCommand}
   */
  deleteIngestion(
    args: DeleteIngestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIngestionCommandOutput>;
  deleteIngestion(args: DeleteIngestionCommandInput, cb: (err: any, data?: DeleteIngestionCommandOutput) => void): void;
  deleteIngestion(
    args: DeleteIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIngestionDestinationCommand}
   */
  deleteIngestionDestination(
    args: DeleteIngestionDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIngestionDestinationCommandOutput>;
  deleteIngestionDestination(
    args: DeleteIngestionDestinationCommandInput,
    cb: (err: any, data?: DeleteIngestionDestinationCommandOutput) => void
  ): void;
  deleteIngestionDestination(
    args: DeleteIngestionDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIngestionDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppAuthorizationCommand}
   */
  getAppAuthorization(
    args: GetAppAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppAuthorizationCommandOutput>;
  getAppAuthorization(
    args: GetAppAuthorizationCommandInput,
    cb: (err: any, data?: GetAppAuthorizationCommandOutput) => void
  ): void;
  getAppAuthorization(
    args: GetAppAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppBundleCommand}
   */
  getAppBundle(args: GetAppBundleCommandInput, options?: __HttpHandlerOptions): Promise<GetAppBundleCommandOutput>;
  getAppBundle(args: GetAppBundleCommandInput, cb: (err: any, data?: GetAppBundleCommandOutput) => void): void;
  getAppBundle(
    args: GetAppBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppBundleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIngestionCommand}
   */
  getIngestion(args: GetIngestionCommandInput, options?: __HttpHandlerOptions): Promise<GetIngestionCommandOutput>;
  getIngestion(args: GetIngestionCommandInput, cb: (err: any, data?: GetIngestionCommandOutput) => void): void;
  getIngestion(
    args: GetIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIngestionDestinationCommand}
   */
  getIngestionDestination(
    args: GetIngestionDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIngestionDestinationCommandOutput>;
  getIngestionDestination(
    args: GetIngestionDestinationCommandInput,
    cb: (err: any, data?: GetIngestionDestinationCommandOutput) => void
  ): void;
  getIngestionDestination(
    args: GetIngestionDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIngestionDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppAuthorizationsCommand}
   */
  listAppAuthorizations(
    args: ListAppAuthorizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppAuthorizationsCommandOutput>;
  listAppAuthorizations(
    args: ListAppAuthorizationsCommandInput,
    cb: (err: any, data?: ListAppAuthorizationsCommandOutput) => void
  ): void;
  listAppAuthorizations(
    args: ListAppAuthorizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppAuthorizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppBundlesCommand}
   */
  listAppBundles(
    args: ListAppBundlesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppBundlesCommandOutput>;
  listAppBundles(args: ListAppBundlesCommandInput, cb: (err: any, data?: ListAppBundlesCommandOutput) => void): void;
  listAppBundles(
    args: ListAppBundlesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppBundlesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIngestionDestinationsCommand}
   */
  listIngestionDestinations(
    args: ListIngestionDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIngestionDestinationsCommandOutput>;
  listIngestionDestinations(
    args: ListIngestionDestinationsCommandInput,
    cb: (err: any, data?: ListIngestionDestinationsCommandOutput) => void
  ): void;
  listIngestionDestinations(
    args: ListIngestionDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIngestionDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIngestionsCommand}
   */
  listIngestions(
    args: ListIngestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIngestionsCommandOutput>;
  listIngestions(args: ListIngestionsCommandInput, cb: (err: any, data?: ListIngestionsCommandOutput) => void): void;
  listIngestions(
    args: ListIngestionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIngestionsCommandOutput) => void
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
   * @see {@link StartIngestionCommand}
   */
  startIngestion(
    args: StartIngestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartIngestionCommandOutput>;
  startIngestion(args: StartIngestionCommandInput, cb: (err: any, data?: StartIngestionCommandOutput) => void): void;
  startIngestion(
    args: StartIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartUserAccessTasksCommand}
   */
  startUserAccessTasks(
    args: StartUserAccessTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartUserAccessTasksCommandOutput>;
  startUserAccessTasks(
    args: StartUserAccessTasksCommandInput,
    cb: (err: any, data?: StartUserAccessTasksCommandOutput) => void
  ): void;
  startUserAccessTasks(
    args: StartUserAccessTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartUserAccessTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link StopIngestionCommand}
   */
  stopIngestion(args: StopIngestionCommandInput, options?: __HttpHandlerOptions): Promise<StopIngestionCommandOutput>;
  stopIngestion(args: StopIngestionCommandInput, cb: (err: any, data?: StopIngestionCommandOutput) => void): void;
  stopIngestion(
    args: StopIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopIngestionCommandOutput) => void
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
   * @see {@link UpdateAppAuthorizationCommand}
   */
  updateAppAuthorization(
    args: UpdateAppAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppAuthorizationCommandOutput>;
  updateAppAuthorization(
    args: UpdateAppAuthorizationCommandInput,
    cb: (err: any, data?: UpdateAppAuthorizationCommandOutput) => void
  ): void;
  updateAppAuthorization(
    args: UpdateAppAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIngestionDestinationCommand}
   */
  updateIngestionDestination(
    args: UpdateIngestionDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIngestionDestinationCommandOutput>;
  updateIngestionDestination(
    args: UpdateIngestionDestinationCommandInput,
    cb: (err: any, data?: UpdateIngestionDestinationCommandOutput) => void
  ): void;
  updateIngestionDestination(
    args: UpdateIngestionDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIngestionDestinationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Web Services AppFabric quickly connects software as a service (SaaS) applications across your
 *          organization. This allows IT and security teams to easily manage and secure applications
 *          using a standard schema, and employees can complete everyday tasks faster using generative
 *          artificial intelligence (AI). You can use these APIs to complete AppFabric tasks, such as
 *          setting up audit log ingestions or viewing user access. For more information about AppFabric,
 *          including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/appfabric/latest/adminguide/">Amazon Web Services AppFabric Administration Guide</a>. For more
 *          information about using the Command Line Interface (CLI) to manage your
 *          AppFabric resources, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/appfabric/index.html">AppFabric section of the CLI
 *             Reference</a>.</p>
 */
export class AppFabric extends AppFabricClient implements AppFabric {}
createAggregatedClient(commands, AppFabric);
