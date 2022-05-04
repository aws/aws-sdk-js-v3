// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { GameSparksClient } from "./GameSparksClient";

/**
 * <p/>
 */
export class GameSparks extends GameSparksClient {
  /**
   * <p>
   *       Creates a new game with an empty configuration.
   *       After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>.
   *       </p>
   */
  public createGame(args: CreateGameCommandInput, options?: __HttpHandlerOptions): Promise<CreateGameCommandOutput>;
  public createGame(args: CreateGameCommandInput, cb: (err: any, data?: CreateGameCommandOutput) => void): void;
  public createGame(
    args: CreateGameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGameCommandOutput) => void
  ): void;
  public createGame(
    args: CreateGameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGameCommandOutput) => void),
    cb?: (err: any, data?: CreateGameCommandOutput) => void
  ): Promise<CreateGameCommandOutput> | void {
    const command = new CreateGameCommand(args);
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
   * <p>Creates a snapshot of the game configuration.</p>
   */
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): Promise<CreateSnapshotCommandOutput> | void {
    const command = new CreateSnapshotCommand(args);
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
   * <p>Creates a new stage for stage-by-stage game development and deployment.</p>
   */
  public createStage(args: CreateStageCommandInput, options?: __HttpHandlerOptions): Promise<CreateStageCommandOutput>;
  public createStage(args: CreateStageCommandInput, cb: (err: any, data?: CreateStageCommandOutput) => void): void;
  public createStage(
    args: CreateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;
  public createStage(
    args: CreateStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStageCommandOutput) => void),
    cb?: (err: any, data?: CreateStageCommandOutput) => void
  ): Promise<CreateStageCommandOutput> | void {
    const command = new CreateStageCommand(args);
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
   * <p>Deletes a game.</p>
   */
  public deleteGame(args: DeleteGameCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGameCommandOutput>;
  public deleteGame(args: DeleteGameCommandInput, cb: (err: any, data?: DeleteGameCommandOutput) => void): void;
  public deleteGame(
    args: DeleteGameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGameCommandOutput) => void
  ): void;
  public deleteGame(
    args: DeleteGameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGameCommandOutput) => void),
    cb?: (err: any, data?: DeleteGameCommandOutput) => void
  ): Promise<DeleteGameCommandOutput> | void {
    const command = new DeleteGameCommand(args);
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
   * <p>Deletes a stage from a game, along with the associated game runtime.</p>
   */
  public deleteStage(args: DeleteStageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStageCommandOutput>;
  public deleteStage(args: DeleteStageCommandInput, cb: (err: any, data?: DeleteStageCommandOutput) => void): void;
  public deleteStage(
    args: DeleteStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;
  public deleteStage(
    args: DeleteStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStageCommandOutput) => void),
    cb?: (err: any, data?: DeleteStageCommandOutput) => void
  ): Promise<DeleteStageCommandOutput> | void {
    const command = new DeleteStageCommand(args);
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
   * <p>Disconnects a player from the game runtime.</p>
   *          <p>
   *       If a player has multiple connections, this operation attempts to close all of them.
   *       </p>
   */
  public disconnectPlayer(
    args: DisconnectPlayerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectPlayerCommandOutput>;
  public disconnectPlayer(
    args: DisconnectPlayerCommandInput,
    cb: (err: any, data?: DisconnectPlayerCommandOutput) => void
  ): void;
  public disconnectPlayer(
    args: DisconnectPlayerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectPlayerCommandOutput) => void
  ): void;
  public disconnectPlayer(
    args: DisconnectPlayerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisconnectPlayerCommandOutput) => void),
    cb?: (err: any, data?: DisconnectPlayerCommandOutput) => void
  ): Promise<DisconnectPlayerCommandOutput> | void {
    const command = new DisconnectPlayerCommand(args);
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
   * <p>Exports a game configuration snapshot.</p>
   */
  public exportSnapshot(
    args: ExportSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportSnapshotCommandOutput>;
  public exportSnapshot(
    args: ExportSnapshotCommandInput,
    cb: (err: any, data?: ExportSnapshotCommandOutput) => void
  ): void;
  public exportSnapshot(
    args: ExportSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportSnapshotCommandOutput) => void
  ): void;
  public exportSnapshot(
    args: ExportSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportSnapshotCommandOutput) => void),
    cb?: (err: any, data?: ExportSnapshotCommandOutput) => void
  ): Promise<ExportSnapshotCommandOutput> | void {
    const command = new ExportSnapshotCommand(args);
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
   * <p>Gets details about a specified extension.</p>
   */
  public getExtension(
    args: GetExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExtensionCommandOutput>;
  public getExtension(args: GetExtensionCommandInput, cb: (err: any, data?: GetExtensionCommandOutput) => void): void;
  public getExtension(
    args: GetExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExtensionCommandOutput) => void
  ): void;
  public getExtension(
    args: GetExtensionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExtensionCommandOutput) => void),
    cb?: (err: any, data?: GetExtensionCommandOutput) => void
  ): Promise<GetExtensionCommandOutput> | void {
    const command = new GetExtensionCommand(args);
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
   * <p>Gets details about a specified extension version.</p>
   */
  public getExtensionVersion(
    args: GetExtensionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExtensionVersionCommandOutput>;
  public getExtensionVersion(
    args: GetExtensionVersionCommandInput,
    cb: (err: any, data?: GetExtensionVersionCommandOutput) => void
  ): void;
  public getExtensionVersion(
    args: GetExtensionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExtensionVersionCommandOutput) => void
  ): void;
  public getExtensionVersion(
    args: GetExtensionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExtensionVersionCommandOutput) => void),
    cb?: (err: any, data?: GetExtensionVersionCommandOutput) => void
  ): Promise<GetExtensionVersionCommandOutput> | void {
    const command = new GetExtensionVersionCommand(args);
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
   * <p>Gets details about a game.</p>
   */
  public getGame(args: GetGameCommandInput, options?: __HttpHandlerOptions): Promise<GetGameCommandOutput>;
  public getGame(args: GetGameCommandInput, cb: (err: any, data?: GetGameCommandOutput) => void): void;
  public getGame(
    args: GetGameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGameCommandOutput) => void
  ): void;
  public getGame(
    args: GetGameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGameCommandOutput) => void),
    cb?: (err: any, data?: GetGameCommandOutput) => void
  ): Promise<GetGameCommandOutput> | void {
    const command = new GetGameCommand(args);
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
   * <p>Gets the configuration of the game.</p>
   */
  public getGameConfiguration(
    args: GetGameConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGameConfigurationCommandOutput>;
  public getGameConfiguration(
    args: GetGameConfigurationCommandInput,
    cb: (err: any, data?: GetGameConfigurationCommandOutput) => void
  ): void;
  public getGameConfiguration(
    args: GetGameConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGameConfigurationCommandOutput) => void
  ): void;
  public getGameConfiguration(
    args: GetGameConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGameConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetGameConfigurationCommandOutput) => void
  ): Promise<GetGameConfigurationCommandOutput> | void {
    const command = new GetGameConfigurationCommand(args);
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
   * <p>Gets details about a job that is generating code for a snapshot.</p>
   */
  public getGeneratedCodeJob(
    args: GetGeneratedCodeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGeneratedCodeJobCommandOutput>;
  public getGeneratedCodeJob(
    args: GetGeneratedCodeJobCommandInput,
    cb: (err: any, data?: GetGeneratedCodeJobCommandOutput) => void
  ): void;
  public getGeneratedCodeJob(
    args: GetGeneratedCodeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGeneratedCodeJobCommandOutput) => void
  ): void;
  public getGeneratedCodeJob(
    args: GetGeneratedCodeJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGeneratedCodeJobCommandOutput) => void),
    cb?: (err: any, data?: GetGeneratedCodeJobCommandOutput) => void
  ): Promise<GetGeneratedCodeJobCommandOutput> | void {
    const command = new GetGeneratedCodeJobCommand(args);
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
   * <p>Gets the status of a player's connection to the game runtime.</p>
   *          <p>
   *       It's possible for a single player to have multiple connections to the game runtime.
   *       If a player is not connected, this operation returns an empty list.
   *       </p>
   */
  public getPlayerConnectionStatus(
    args: GetPlayerConnectionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPlayerConnectionStatusCommandOutput>;
  public getPlayerConnectionStatus(
    args: GetPlayerConnectionStatusCommandInput,
    cb: (err: any, data?: GetPlayerConnectionStatusCommandOutput) => void
  ): void;
  public getPlayerConnectionStatus(
    args: GetPlayerConnectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlayerConnectionStatusCommandOutput) => void
  ): void;
  public getPlayerConnectionStatus(
    args: GetPlayerConnectionStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPlayerConnectionStatusCommandOutput) => void),
    cb?: (err: any, data?: GetPlayerConnectionStatusCommandOutput) => void
  ): Promise<GetPlayerConnectionStatusCommandOutput> | void {
    const command = new GetPlayerConnectionStatusCommand(args);
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
   * <p>Gets a copy of the game configuration in a snapshot.</p>
   */
  public getSnapshot(args: GetSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<GetSnapshotCommandOutput>;
  public getSnapshot(args: GetSnapshotCommandInput, cb: (err: any, data?: GetSnapshotCommandOutput) => void): void;
  public getSnapshot(
    args: GetSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSnapshotCommandOutput) => void
  ): void;
  public getSnapshot(
    args: GetSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSnapshotCommandOutput) => void),
    cb?: (err: any, data?: GetSnapshotCommandOutput) => void
  ): Promise<GetSnapshotCommandOutput> | void {
    const command = new GetSnapshotCommand(args);
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
   * <p>Gets information about a stage.</p>
   */
  public getStage(args: GetStageCommandInput, options?: __HttpHandlerOptions): Promise<GetStageCommandOutput>;
  public getStage(args: GetStageCommandInput, cb: (err: any, data?: GetStageCommandOutput) => void): void;
  public getStage(
    args: GetStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;
  public getStage(
    args: GetStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStageCommandOutput) => void),
    cb?: (err: any, data?: GetStageCommandOutput) => void
  ): Promise<GetStageCommandOutput> | void {
    const command = new GetStageCommand(args);
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
   * <p>Gets information about a stage deployment.</p>
   */
  public getStageDeployment(
    args: GetStageDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStageDeploymentCommandOutput>;
  public getStageDeployment(
    args: GetStageDeploymentCommandInput,
    cb: (err: any, data?: GetStageDeploymentCommandOutput) => void
  ): void;
  public getStageDeployment(
    args: GetStageDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageDeploymentCommandOutput) => void
  ): void;
  public getStageDeployment(
    args: GetStageDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStageDeploymentCommandOutput) => void),
    cb?: (err: any, data?: GetStageDeploymentCommandOutput) => void
  ): Promise<GetStageDeploymentCommandOutput> | void {
    const command = new GetStageDeploymentCommand(args);
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
   * <p>Imports a game configuration.</p>
   *          <p>
   *       This operation replaces the current configuration of the game with the provided input.
   *       This is not a reversible operation. If you want to preserve the previous configuration,
   *       use <code>CreateSnapshot</code> to make a new snapshot before importing.
   *       </p>
   */
  public importGameConfiguration(
    args: ImportGameConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportGameConfigurationCommandOutput>;
  public importGameConfiguration(
    args: ImportGameConfigurationCommandInput,
    cb: (err: any, data?: ImportGameConfigurationCommandOutput) => void
  ): void;
  public importGameConfiguration(
    args: ImportGameConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportGameConfigurationCommandOutput) => void
  ): void;
  public importGameConfiguration(
    args: ImportGameConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportGameConfigurationCommandOutput) => void),
    cb?: (err: any, data?: ImportGameConfigurationCommandOutput) => void
  ): Promise<ImportGameConfigurationCommandOutput> | void {
    const command = new ImportGameConfigurationCommand(args);
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
   * <p>Gets a paginated list of available extensions.</p>
   *          <p>
   *       Extensions provide features that games can use from scripts.
   *       </p>
   */
  public listExtensions(
    args: ListExtensionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExtensionsCommandOutput>;
  public listExtensions(
    args: ListExtensionsCommandInput,
    cb: (err: any, data?: ListExtensionsCommandOutput) => void
  ): void;
  public listExtensions(
    args: ListExtensionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExtensionsCommandOutput) => void
  ): void;
  public listExtensions(
    args: ListExtensionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExtensionsCommandOutput) => void),
    cb?: (err: any, data?: ListExtensionsCommandOutput) => void
  ): Promise<ListExtensionsCommandOutput> | void {
    const command = new ListExtensionsCommand(args);
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
   * <p>Gets a paginated list of available versions for the extension.</p>
   *          <p>
   *       Each time an API change is made to an extension, the version is incremented.
   *       The list retrieved by this operation shows the versions that are currently available.
   *       </p>
   */
  public listExtensionVersions(
    args: ListExtensionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExtensionVersionsCommandOutput>;
  public listExtensionVersions(
    args: ListExtensionVersionsCommandInput,
    cb: (err: any, data?: ListExtensionVersionsCommandOutput) => void
  ): void;
  public listExtensionVersions(
    args: ListExtensionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExtensionVersionsCommandOutput) => void
  ): void;
  public listExtensionVersions(
    args: ListExtensionVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExtensionVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListExtensionVersionsCommandOutput) => void
  ): Promise<ListExtensionVersionsCommandOutput> | void {
    const command = new ListExtensionVersionsCommand(args);
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
   * <p>Gets a paginated list of games.</p>
   */
  public listGames(args: ListGamesCommandInput, options?: __HttpHandlerOptions): Promise<ListGamesCommandOutput>;
  public listGames(args: ListGamesCommandInput, cb: (err: any, data?: ListGamesCommandOutput) => void): void;
  public listGames(
    args: ListGamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGamesCommandOutput) => void
  ): void;
  public listGames(
    args: ListGamesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGamesCommandOutput) => void),
    cb?: (err: any, data?: ListGamesCommandOutput) => void
  ): Promise<ListGamesCommandOutput> | void {
    const command = new ListGamesCommand(args);
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
   * <p>Gets a paginated list of code generation jobs for a snapshot.</p>
   */
  public listGeneratedCodeJobs(
    args: ListGeneratedCodeJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGeneratedCodeJobsCommandOutput>;
  public listGeneratedCodeJobs(
    args: ListGeneratedCodeJobsCommandInput,
    cb: (err: any, data?: ListGeneratedCodeJobsCommandOutput) => void
  ): void;
  public listGeneratedCodeJobs(
    args: ListGeneratedCodeJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGeneratedCodeJobsCommandOutput) => void
  ): void;
  public listGeneratedCodeJobs(
    args: ListGeneratedCodeJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGeneratedCodeJobsCommandOutput) => void),
    cb?: (err: any, data?: ListGeneratedCodeJobsCommandOutput) => void
  ): Promise<ListGeneratedCodeJobsCommandOutput> | void {
    const command = new ListGeneratedCodeJobsCommand(args);
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
   * <p>Gets a paginated list of snapshot summaries from the game.</p>
   */
  public listSnapshots(
    args: ListSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSnapshotsCommandOutput>;
  public listSnapshots(
    args: ListSnapshotsCommandInput,
    cb: (err: any, data?: ListSnapshotsCommandOutput) => void
  ): void;
  public listSnapshots(
    args: ListSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSnapshotsCommandOutput) => void
  ): void;
  public listSnapshots(
    args: ListSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: ListSnapshotsCommandOutput) => void
  ): Promise<ListSnapshotsCommandOutput> | void {
    const command = new ListSnapshotsCommand(args);
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
   * <p>Gets a paginated list of stage deployment summaries from the game.</p>
   */
  public listStageDeployments(
    args: ListStageDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStageDeploymentsCommandOutput>;
  public listStageDeployments(
    args: ListStageDeploymentsCommandInput,
    cb: (err: any, data?: ListStageDeploymentsCommandOutput) => void
  ): void;
  public listStageDeployments(
    args: ListStageDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStageDeploymentsCommandOutput) => void
  ): void;
  public listStageDeployments(
    args: ListStageDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStageDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: ListStageDeploymentsCommandOutput) => void
  ): Promise<ListStageDeploymentsCommandOutput> | void {
    const command = new ListStageDeploymentsCommand(args);
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
   * <p>Gets a paginated list of stage summaries from the game.</p>
   */
  public listStages(args: ListStagesCommandInput, options?: __HttpHandlerOptions): Promise<ListStagesCommandOutput>;
  public listStages(args: ListStagesCommandInput, cb: (err: any, data?: ListStagesCommandOutput) => void): void;
  public listStages(
    args: ListStagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStagesCommandOutput) => void
  ): void;
  public listStages(
    args: ListStagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStagesCommandOutput) => void),
    cb?: (err: any, data?: ListStagesCommandOutput) => void
  ): Promise<ListStagesCommandOutput> | void {
    const command = new ListStagesCommand(args);
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
   * <p>Lists the tags associated with a GameSparks resource.</p>
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
   *       Starts an asynchronous process that generates client code for system-defined and custom messages.
   *       The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL.
   *       </p>
   */
  public startGeneratedCodeJob(
    args: StartGeneratedCodeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartGeneratedCodeJobCommandOutput>;
  public startGeneratedCodeJob(
    args: StartGeneratedCodeJobCommandInput,
    cb: (err: any, data?: StartGeneratedCodeJobCommandOutput) => void
  ): void;
  public startGeneratedCodeJob(
    args: StartGeneratedCodeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartGeneratedCodeJobCommandOutput) => void
  ): void;
  public startGeneratedCodeJob(
    args: StartGeneratedCodeJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartGeneratedCodeJobCommandOutput) => void),
    cb?: (err: any, data?: StartGeneratedCodeJobCommandOutput) => void
  ): Promise<StartGeneratedCodeJobCommandOutput> | void {
    const command = new StartGeneratedCodeJobCommand(args);
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
   * <p>Deploys a snapshot to the stage and creates a new game runtime.</p>
   *          <p>
   *       After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>.
   *       </p>
   *          <p>
   *       If there are any players connected to the previous game runtime, then both runtimes persist.
   *       Existing connections to the previous runtime are maintained.
   *       When players disconnect and reconnect, they connect to the new runtime.
   *       After there are no connections to the previous game runtime, it is deleted.
   *       </p>
   */
  public startStageDeployment(
    args: StartStageDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartStageDeploymentCommandOutput>;
  public startStageDeployment(
    args: StartStageDeploymentCommandInput,
    cb: (err: any, data?: StartStageDeploymentCommandOutput) => void
  ): void;
  public startStageDeployment(
    args: StartStageDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStageDeploymentCommandOutput) => void
  ): void;
  public startStageDeployment(
    args: StartStageDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartStageDeploymentCommandOutput) => void),
    cb?: (err: any, data?: StartStageDeploymentCommandOutput) => void
  ): Promise<StartStageDeploymentCommandOutput> | void {
    const command = new StartStageDeploymentCommand(args);
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
   * <p>Adds tags to a GameSparks resource.</p>
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
   * <p>Removes tags from a GameSparks resource.</p>
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
   * <p>Updates details of the game.</p>
   */
  public updateGame(args: UpdateGameCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGameCommandOutput>;
  public updateGame(args: UpdateGameCommandInput, cb: (err: any, data?: UpdateGameCommandOutput) => void): void;
  public updateGame(
    args: UpdateGameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGameCommandOutput) => void
  ): void;
  public updateGame(
    args: UpdateGameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGameCommandOutput) => void),
    cb?: (err: any, data?: UpdateGameCommandOutput) => void
  ): Promise<UpdateGameCommandOutput> | void {
    const command = new UpdateGameCommand(args);
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
   * <p>Updates one or more sections of the game configuration.</p>
   */
  public updateGameConfiguration(
    args: UpdateGameConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGameConfigurationCommandOutput>;
  public updateGameConfiguration(
    args: UpdateGameConfigurationCommandInput,
    cb: (err: any, data?: UpdateGameConfigurationCommandOutput) => void
  ): void;
  public updateGameConfiguration(
    args: UpdateGameConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGameConfigurationCommandOutput) => void
  ): void;
  public updateGameConfiguration(
    args: UpdateGameConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGameConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateGameConfigurationCommandOutput) => void
  ): Promise<UpdateGameConfigurationCommandOutput> | void {
    const command = new UpdateGameConfigurationCommand(args);
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
   * <p>Updates the metadata of a GameSparks snapshot.</p>
   */
  public updateSnapshot(
    args: UpdateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSnapshotCommandOutput>;
  public updateSnapshot(
    args: UpdateSnapshotCommandInput,
    cb: (err: any, data?: UpdateSnapshotCommandOutput) => void
  ): void;
  public updateSnapshot(
    args: UpdateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSnapshotCommandOutput) => void
  ): void;
  public updateSnapshot(
    args: UpdateSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSnapshotCommandOutput) => void),
    cb?: (err: any, data?: UpdateSnapshotCommandOutput) => void
  ): Promise<UpdateSnapshotCommandOutput> | void {
    const command = new UpdateSnapshotCommand(args);
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
   * <p>Updates the metadata of a stage.</p>
   */
  public updateStage(args: UpdateStageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStageCommandOutput>;
  public updateStage(args: UpdateStageCommandInput, cb: (err: any, data?: UpdateStageCommandOutput) => void): void;
  public updateStage(
    args: UpdateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;
  public updateStage(
    args: UpdateStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStageCommandOutput) => void),
    cb?: (err: any, data?: UpdateStageCommandOutput) => void
  ): Promise<UpdateStageCommandOutput> | void {
    const command = new UpdateStageCommand(args);
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
