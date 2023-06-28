// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CreateGameCommand, CreateGameCommandInput, CreateGameCommandOutput } from "./commands/CreateGameCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import { CreateStageCommand, CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import { DeleteGameCommand, DeleteGameCommandInput, DeleteGameCommandOutput } from "./commands/DeleteGameCommand";
import { DeleteStageCommand, DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import {
  DisconnectPlayerCommand,
  DisconnectPlayerCommandInput,
  DisconnectPlayerCommandOutput,
} from "./commands/DisconnectPlayerCommand";
import {
  ExportSnapshotCommand,
  ExportSnapshotCommandInput,
  ExportSnapshotCommandOutput,
} from "./commands/ExportSnapshotCommand";
import {
  GetExtensionCommand,
  GetExtensionCommandInput,
  GetExtensionCommandOutput,
} from "./commands/GetExtensionCommand";
import {
  GetExtensionVersionCommand,
  GetExtensionVersionCommandInput,
  GetExtensionVersionCommandOutput,
} from "./commands/GetExtensionVersionCommand";
import { GetGameCommand, GetGameCommandInput, GetGameCommandOutput } from "./commands/GetGameCommand";
import {
  GetGameConfigurationCommand,
  GetGameConfigurationCommandInput,
  GetGameConfigurationCommandOutput,
} from "./commands/GetGameConfigurationCommand";
import {
  GetGeneratedCodeJobCommand,
  GetGeneratedCodeJobCommandInput,
  GetGeneratedCodeJobCommandOutput,
} from "./commands/GetGeneratedCodeJobCommand";
import {
  GetPlayerConnectionStatusCommand,
  GetPlayerConnectionStatusCommandInput,
  GetPlayerConnectionStatusCommandOutput,
} from "./commands/GetPlayerConnectionStatusCommand";
import { GetSnapshotCommand, GetSnapshotCommandInput, GetSnapshotCommandOutput } from "./commands/GetSnapshotCommand";
import { GetStageCommand, GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import {
  GetStageDeploymentCommand,
  GetStageDeploymentCommandInput,
  GetStageDeploymentCommandOutput,
} from "./commands/GetStageDeploymentCommand";
import {
  ImportGameConfigurationCommand,
  ImportGameConfigurationCommandInput,
  ImportGameConfigurationCommandOutput,
} from "./commands/ImportGameConfigurationCommand";
import {
  ListExtensionsCommand,
  ListExtensionsCommandInput,
  ListExtensionsCommandOutput,
} from "./commands/ListExtensionsCommand";
import {
  ListExtensionVersionsCommand,
  ListExtensionVersionsCommandInput,
  ListExtensionVersionsCommandOutput,
} from "./commands/ListExtensionVersionsCommand";
import { ListGamesCommand, ListGamesCommandInput, ListGamesCommandOutput } from "./commands/ListGamesCommand";
import {
  ListGeneratedCodeJobsCommand,
  ListGeneratedCodeJobsCommandInput,
  ListGeneratedCodeJobsCommandOutput,
} from "./commands/ListGeneratedCodeJobsCommand";
import {
  ListSnapshotsCommand,
  ListSnapshotsCommandInput,
  ListSnapshotsCommandOutput,
} from "./commands/ListSnapshotsCommand";
import {
  ListStageDeploymentsCommand,
  ListStageDeploymentsCommandInput,
  ListStageDeploymentsCommandOutput,
} from "./commands/ListStageDeploymentsCommand";
import { ListStagesCommand, ListStagesCommandInput, ListStagesCommandOutput } from "./commands/ListStagesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartGeneratedCodeJobCommand,
  StartGeneratedCodeJobCommandInput,
  StartGeneratedCodeJobCommandOutput,
} from "./commands/StartGeneratedCodeJobCommand";
import {
  StartStageDeploymentCommand,
  StartStageDeploymentCommandInput,
  StartStageDeploymentCommandOutput,
} from "./commands/StartStageDeploymentCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateGameCommand, UpdateGameCommandInput, UpdateGameCommandOutput } from "./commands/UpdateGameCommand";
import {
  UpdateGameConfigurationCommand,
  UpdateGameConfigurationCommandInput,
  UpdateGameConfigurationCommandOutput,
} from "./commands/UpdateGameConfigurationCommand";
import {
  UpdateSnapshotCommand,
  UpdateSnapshotCommandInput,
  UpdateSnapshotCommandOutput,
} from "./commands/UpdateSnapshotCommand";
import { UpdateStageCommand, UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import { GameSparksClient, GameSparksClientConfig } from "./GameSparksClient";

const commands = {
  CreateGameCommand,
  CreateSnapshotCommand,
  CreateStageCommand,
  DeleteGameCommand,
  DeleteStageCommand,
  DisconnectPlayerCommand,
  ExportSnapshotCommand,
  GetExtensionCommand,
  GetExtensionVersionCommand,
  GetGameCommand,
  GetGameConfigurationCommand,
  GetGeneratedCodeJobCommand,
  GetPlayerConnectionStatusCommand,
  GetSnapshotCommand,
  GetStageCommand,
  GetStageDeploymentCommand,
  ImportGameConfigurationCommand,
  ListExtensionsCommand,
  ListExtensionVersionsCommand,
  ListGamesCommand,
  ListGeneratedCodeJobsCommand,
  ListSnapshotsCommand,
  ListStageDeploymentsCommand,
  ListStagesCommand,
  ListTagsForResourceCommand,
  StartGeneratedCodeJobCommand,
  StartStageDeploymentCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateGameCommand,
  UpdateGameConfigurationCommand,
  UpdateSnapshotCommand,
  UpdateStageCommand,
};

export interface GameSparks {
  /**
   * @see {@link CreateGameCommand}
   */
  createGame(args: CreateGameCommandInput, options?: __HttpHandlerOptions): Promise<CreateGameCommandOutput>;
  createGame(args: CreateGameCommandInput, cb: (err: any, data?: CreateGameCommandOutput) => void): void;
  createGame(
    args: CreateGameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGameCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  createSnapshot(args: CreateSnapshotCommandInput, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStageCommand}
   */
  createStage(args: CreateStageCommandInput, options?: __HttpHandlerOptions): Promise<CreateStageCommandOutput>;
  createStage(args: CreateStageCommandInput, cb: (err: any, data?: CreateStageCommandOutput) => void): void;
  createStage(
    args: CreateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGameCommand}
   */
  deleteGame(args: DeleteGameCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGameCommandOutput>;
  deleteGame(args: DeleteGameCommandInput, cb: (err: any, data?: DeleteGameCommandOutput) => void): void;
  deleteGame(
    args: DeleteGameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGameCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStageCommand}
   */
  deleteStage(args: DeleteStageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStageCommandOutput>;
  deleteStage(args: DeleteStageCommandInput, cb: (err: any, data?: DeleteStageCommandOutput) => void): void;
  deleteStage(
    args: DeleteStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;

  /**
   * @see {@link DisconnectPlayerCommand}
   */
  disconnectPlayer(
    args: DisconnectPlayerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectPlayerCommandOutput>;
  disconnectPlayer(
    args: DisconnectPlayerCommandInput,
    cb: (err: any, data?: DisconnectPlayerCommandOutput) => void
  ): void;
  disconnectPlayer(
    args: DisconnectPlayerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectPlayerCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportSnapshotCommand}
   */
  exportSnapshot(
    args: ExportSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportSnapshotCommandOutput>;
  exportSnapshot(args: ExportSnapshotCommandInput, cb: (err: any, data?: ExportSnapshotCommandOutput) => void): void;
  exportSnapshot(
    args: ExportSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExtensionCommand}
   */
  getExtension(args: GetExtensionCommandInput, options?: __HttpHandlerOptions): Promise<GetExtensionCommandOutput>;
  getExtension(args: GetExtensionCommandInput, cb: (err: any, data?: GetExtensionCommandOutput) => void): void;
  getExtension(
    args: GetExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExtensionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExtensionVersionCommand}
   */
  getExtensionVersion(
    args: GetExtensionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExtensionVersionCommandOutput>;
  getExtensionVersion(
    args: GetExtensionVersionCommandInput,
    cb: (err: any, data?: GetExtensionVersionCommandOutput) => void
  ): void;
  getExtensionVersion(
    args: GetExtensionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExtensionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGameCommand}
   */
  getGame(args: GetGameCommandInput, options?: __HttpHandlerOptions): Promise<GetGameCommandOutput>;
  getGame(args: GetGameCommandInput, cb: (err: any, data?: GetGameCommandOutput) => void): void;
  getGame(
    args: GetGameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGameCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGameConfigurationCommand}
   */
  getGameConfiguration(
    args: GetGameConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGameConfigurationCommandOutput>;
  getGameConfiguration(
    args: GetGameConfigurationCommandInput,
    cb: (err: any, data?: GetGameConfigurationCommandOutput) => void
  ): void;
  getGameConfiguration(
    args: GetGameConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGameConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGeneratedCodeJobCommand}
   */
  getGeneratedCodeJob(
    args: GetGeneratedCodeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGeneratedCodeJobCommandOutput>;
  getGeneratedCodeJob(
    args: GetGeneratedCodeJobCommandInput,
    cb: (err: any, data?: GetGeneratedCodeJobCommandOutput) => void
  ): void;
  getGeneratedCodeJob(
    args: GetGeneratedCodeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGeneratedCodeJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlayerConnectionStatusCommand}
   */
  getPlayerConnectionStatus(
    args: GetPlayerConnectionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPlayerConnectionStatusCommandOutput>;
  getPlayerConnectionStatus(
    args: GetPlayerConnectionStatusCommandInput,
    cb: (err: any, data?: GetPlayerConnectionStatusCommandOutput) => void
  ): void;
  getPlayerConnectionStatus(
    args: GetPlayerConnectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlayerConnectionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSnapshotCommand}
   */
  getSnapshot(args: GetSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<GetSnapshotCommandOutput>;
  getSnapshot(args: GetSnapshotCommandInput, cb: (err: any, data?: GetSnapshotCommandOutput) => void): void;
  getSnapshot(
    args: GetSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStageCommand}
   */
  getStage(args: GetStageCommandInput, options?: __HttpHandlerOptions): Promise<GetStageCommandOutput>;
  getStage(args: GetStageCommandInput, cb: (err: any, data?: GetStageCommandOutput) => void): void;
  getStage(
    args: GetStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStageDeploymentCommand}
   */
  getStageDeployment(
    args: GetStageDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStageDeploymentCommandOutput>;
  getStageDeployment(
    args: GetStageDeploymentCommandInput,
    cb: (err: any, data?: GetStageDeploymentCommandOutput) => void
  ): void;
  getStageDeployment(
    args: GetStageDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportGameConfigurationCommand}
   */
  importGameConfiguration(
    args: ImportGameConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportGameConfigurationCommandOutput>;
  importGameConfiguration(
    args: ImportGameConfigurationCommandInput,
    cb: (err: any, data?: ImportGameConfigurationCommandOutput) => void
  ): void;
  importGameConfiguration(
    args: ImportGameConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportGameConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExtensionsCommand}
   */
  listExtensions(
    args: ListExtensionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExtensionsCommandOutput>;
  listExtensions(args: ListExtensionsCommandInput, cb: (err: any, data?: ListExtensionsCommandOutput) => void): void;
  listExtensions(
    args: ListExtensionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExtensionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExtensionVersionsCommand}
   */
  listExtensionVersions(
    args: ListExtensionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExtensionVersionsCommandOutput>;
  listExtensionVersions(
    args: ListExtensionVersionsCommandInput,
    cb: (err: any, data?: ListExtensionVersionsCommandOutput) => void
  ): void;
  listExtensionVersions(
    args: ListExtensionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExtensionVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGamesCommand}
   */
  listGames(args: ListGamesCommandInput, options?: __HttpHandlerOptions): Promise<ListGamesCommandOutput>;
  listGames(args: ListGamesCommandInput, cb: (err: any, data?: ListGamesCommandOutput) => void): void;
  listGames(
    args: ListGamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGamesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGeneratedCodeJobsCommand}
   */
  listGeneratedCodeJobs(
    args: ListGeneratedCodeJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGeneratedCodeJobsCommandOutput>;
  listGeneratedCodeJobs(
    args: ListGeneratedCodeJobsCommandInput,
    cb: (err: any, data?: ListGeneratedCodeJobsCommandOutput) => void
  ): void;
  listGeneratedCodeJobs(
    args: ListGeneratedCodeJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGeneratedCodeJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSnapshotsCommand}
   */
  listSnapshots(args: ListSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<ListSnapshotsCommandOutput>;
  listSnapshots(args: ListSnapshotsCommandInput, cb: (err: any, data?: ListSnapshotsCommandOutput) => void): void;
  listSnapshots(
    args: ListSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStageDeploymentsCommand}
   */
  listStageDeployments(
    args: ListStageDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStageDeploymentsCommandOutput>;
  listStageDeployments(
    args: ListStageDeploymentsCommandInput,
    cb: (err: any, data?: ListStageDeploymentsCommandOutput) => void
  ): void;
  listStageDeployments(
    args: ListStageDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStageDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStagesCommand}
   */
  listStages(args: ListStagesCommandInput, options?: __HttpHandlerOptions): Promise<ListStagesCommandOutput>;
  listStages(args: ListStagesCommandInput, cb: (err: any, data?: ListStagesCommandOutput) => void): void;
  listStages(
    args: ListStagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStagesCommandOutput) => void
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
   * @see {@link StartGeneratedCodeJobCommand}
   */
  startGeneratedCodeJob(
    args: StartGeneratedCodeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartGeneratedCodeJobCommandOutput>;
  startGeneratedCodeJob(
    args: StartGeneratedCodeJobCommandInput,
    cb: (err: any, data?: StartGeneratedCodeJobCommandOutput) => void
  ): void;
  startGeneratedCodeJob(
    args: StartGeneratedCodeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartGeneratedCodeJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartStageDeploymentCommand}
   */
  startStageDeployment(
    args: StartStageDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartStageDeploymentCommandOutput>;
  startStageDeployment(
    args: StartStageDeploymentCommandInput,
    cb: (err: any, data?: StartStageDeploymentCommandOutput) => void
  ): void;
  startStageDeployment(
    args: StartStageDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStageDeploymentCommandOutput) => void
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
   * @see {@link UpdateGameCommand}
   */
  updateGame(args: UpdateGameCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGameCommandOutput>;
  updateGame(args: UpdateGameCommandInput, cb: (err: any, data?: UpdateGameCommandOutput) => void): void;
  updateGame(
    args: UpdateGameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGameCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGameConfigurationCommand}
   */
  updateGameConfiguration(
    args: UpdateGameConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGameConfigurationCommandOutput>;
  updateGameConfiguration(
    args: UpdateGameConfigurationCommandInput,
    cb: (err: any, data?: UpdateGameConfigurationCommandOutput) => void
  ): void;
  updateGameConfiguration(
    args: UpdateGameConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGameConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSnapshotCommand}
   */
  updateSnapshot(
    args: UpdateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSnapshotCommandOutput>;
  updateSnapshot(args: UpdateSnapshotCommandInput, cb: (err: any, data?: UpdateSnapshotCommandOutput) => void): void;
  updateSnapshot(
    args: UpdateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStageCommand}
   */
  updateStage(args: UpdateStageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStageCommandOutput>;
  updateStage(args: UpdateStageCommandInput, cb: (err: any, data?: UpdateStageCommandOutput) => void): void;
  updateStage(
    args: UpdateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p/>
 */
export class GameSparks extends GameSparksClient implements GameSparks {}
createAggregatedClient(commands, GameSparks);
