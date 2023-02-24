// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AmplifyBackendClient } from "./AmplifyBackendClient";
import {
  CloneBackendCommand,
  CloneBackendCommandInput,
  CloneBackendCommandOutput,
} from "./commands/CloneBackendCommand";
import {
  CreateBackendAPICommand,
  CreateBackendAPICommandInput,
  CreateBackendAPICommandOutput,
} from "./commands/CreateBackendAPICommand";
import {
  CreateBackendAuthCommand,
  CreateBackendAuthCommandInput,
  CreateBackendAuthCommandOutput,
} from "./commands/CreateBackendAuthCommand";
import {
  CreateBackendCommand,
  CreateBackendCommandInput,
  CreateBackendCommandOutput,
} from "./commands/CreateBackendCommand";
import {
  CreateBackendConfigCommand,
  CreateBackendConfigCommandInput,
  CreateBackendConfigCommandOutput,
} from "./commands/CreateBackendConfigCommand";
import {
  CreateBackendStorageCommand,
  CreateBackendStorageCommandInput,
  CreateBackendStorageCommandOutput,
} from "./commands/CreateBackendStorageCommand";
import { CreateTokenCommand, CreateTokenCommandInput, CreateTokenCommandOutput } from "./commands/CreateTokenCommand";
import {
  DeleteBackendAPICommand,
  DeleteBackendAPICommandInput,
  DeleteBackendAPICommandOutput,
} from "./commands/DeleteBackendAPICommand";
import {
  DeleteBackendAuthCommand,
  DeleteBackendAuthCommandInput,
  DeleteBackendAuthCommandOutput,
} from "./commands/DeleteBackendAuthCommand";
import {
  DeleteBackendCommand,
  DeleteBackendCommandInput,
  DeleteBackendCommandOutput,
} from "./commands/DeleteBackendCommand";
import {
  DeleteBackendStorageCommand,
  DeleteBackendStorageCommandInput,
  DeleteBackendStorageCommandOutput,
} from "./commands/DeleteBackendStorageCommand";
import { DeleteTokenCommand, DeleteTokenCommandInput, DeleteTokenCommandOutput } from "./commands/DeleteTokenCommand";
import {
  GenerateBackendAPIModelsCommand,
  GenerateBackendAPIModelsCommandInput,
  GenerateBackendAPIModelsCommandOutput,
} from "./commands/GenerateBackendAPIModelsCommand";
import {
  GetBackendAPICommand,
  GetBackendAPICommandInput,
  GetBackendAPICommandOutput,
} from "./commands/GetBackendAPICommand";
import {
  GetBackendAPIModelsCommand,
  GetBackendAPIModelsCommandInput,
  GetBackendAPIModelsCommandOutput,
} from "./commands/GetBackendAPIModelsCommand";
import {
  GetBackendAuthCommand,
  GetBackendAuthCommandInput,
  GetBackendAuthCommandOutput,
} from "./commands/GetBackendAuthCommand";
import { GetBackendCommand, GetBackendCommandInput, GetBackendCommandOutput } from "./commands/GetBackendCommand";
import {
  GetBackendJobCommand,
  GetBackendJobCommandInput,
  GetBackendJobCommandOutput,
} from "./commands/GetBackendJobCommand";
import {
  GetBackendStorageCommand,
  GetBackendStorageCommandInput,
  GetBackendStorageCommandOutput,
} from "./commands/GetBackendStorageCommand";
import { GetTokenCommand, GetTokenCommandInput, GetTokenCommandOutput } from "./commands/GetTokenCommand";
import {
  ImportBackendAuthCommand,
  ImportBackendAuthCommandInput,
  ImportBackendAuthCommandOutput,
} from "./commands/ImportBackendAuthCommand";
import {
  ImportBackendStorageCommand,
  ImportBackendStorageCommandInput,
  ImportBackendStorageCommandOutput,
} from "./commands/ImportBackendStorageCommand";
import {
  ListBackendJobsCommand,
  ListBackendJobsCommandInput,
  ListBackendJobsCommandOutput,
} from "./commands/ListBackendJobsCommand";
import {
  ListS3BucketsCommand,
  ListS3BucketsCommandInput,
  ListS3BucketsCommandOutput,
} from "./commands/ListS3BucketsCommand";
import {
  RemoveAllBackendsCommand,
  RemoveAllBackendsCommandInput,
  RemoveAllBackendsCommandOutput,
} from "./commands/RemoveAllBackendsCommand";
import {
  RemoveBackendConfigCommand,
  RemoveBackendConfigCommandInput,
  RemoveBackendConfigCommandOutput,
} from "./commands/RemoveBackendConfigCommand";
import {
  UpdateBackendAPICommand,
  UpdateBackendAPICommandInput,
  UpdateBackendAPICommandOutput,
} from "./commands/UpdateBackendAPICommand";
import {
  UpdateBackendAuthCommand,
  UpdateBackendAuthCommandInput,
  UpdateBackendAuthCommandOutput,
} from "./commands/UpdateBackendAuthCommand";
import {
  UpdateBackendConfigCommand,
  UpdateBackendConfigCommandInput,
  UpdateBackendConfigCommandOutput,
} from "./commands/UpdateBackendConfigCommand";
import {
  UpdateBackendJobCommand,
  UpdateBackendJobCommandInput,
  UpdateBackendJobCommandOutput,
} from "./commands/UpdateBackendJobCommand";
import {
  UpdateBackendStorageCommand,
  UpdateBackendStorageCommandInput,
  UpdateBackendStorageCommandOutput,
} from "./commands/UpdateBackendStorageCommand";

/**
 * <p>AWS Amplify Admin API</p>
 */
export class AmplifyBackend extends AmplifyBackendClient {
  /**
   * <p>This operation clones an existing backend.</p>
   */
  public cloneBackend(
    args: CloneBackendCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CloneBackendCommandOutput>;
  public cloneBackend(args: CloneBackendCommandInput, cb: (err: any, data?: CloneBackendCommandOutput) => void): void;
  public cloneBackend(
    args: CloneBackendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloneBackendCommandOutput) => void
  ): void;
  public cloneBackend(
    args: CloneBackendCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CloneBackendCommandOutput) => void),
    cb?: (err: any, data?: CloneBackendCommandOutput) => void
  ): Promise<CloneBackendCommandOutput> | void {
    const command = new CloneBackendCommand(args);
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
   * <p>This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.</p>
   */
  public createBackend(
    args: CreateBackendCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendCommandOutput>;
  public createBackend(
    args: CreateBackendCommandInput,
    cb: (err: any, data?: CreateBackendCommandOutput) => void
  ): void;
  public createBackend(
    args: CreateBackendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendCommandOutput) => void
  ): void;
  public createBackend(
    args: CreateBackendCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBackendCommandOutput) => void),
    cb?: (err: any, data?: CreateBackendCommandOutput) => void
  ): Promise<CreateBackendCommandOutput> | void {
    const command = new CreateBackendCommand(args);
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
   * <p>Creates a new backend API resource.</p>
   */
  public createBackendAPI(
    args: CreateBackendAPICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendAPICommandOutput>;
  public createBackendAPI(
    args: CreateBackendAPICommandInput,
    cb: (err: any, data?: CreateBackendAPICommandOutput) => void
  ): void;
  public createBackendAPI(
    args: CreateBackendAPICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendAPICommandOutput) => void
  ): void;
  public createBackendAPI(
    args: CreateBackendAPICommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBackendAPICommandOutput) => void),
    cb?: (err: any, data?: CreateBackendAPICommandOutput) => void
  ): Promise<CreateBackendAPICommandOutput> | void {
    const command = new CreateBackendAPICommand(args);
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
   * <p>Creates a new backend authentication resource.</p>
   */
  public createBackendAuth(
    args: CreateBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendAuthCommandOutput>;
  public createBackendAuth(
    args: CreateBackendAuthCommandInput,
    cb: (err: any, data?: CreateBackendAuthCommandOutput) => void
  ): void;
  public createBackendAuth(
    args: CreateBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendAuthCommandOutput) => void
  ): void;
  public createBackendAuth(
    args: CreateBackendAuthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBackendAuthCommandOutput) => void),
    cb?: (err: any, data?: CreateBackendAuthCommandOutput) => void
  ): Promise<CreateBackendAuthCommandOutput> | void {
    const command = new CreateBackendAuthCommand(args);
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
   * <p>Creates a config object for a backend.</p>
   */
  public createBackendConfig(
    args: CreateBackendConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendConfigCommandOutput>;
  public createBackendConfig(
    args: CreateBackendConfigCommandInput,
    cb: (err: any, data?: CreateBackendConfigCommandOutput) => void
  ): void;
  public createBackendConfig(
    args: CreateBackendConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendConfigCommandOutput) => void
  ): void;
  public createBackendConfig(
    args: CreateBackendConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBackendConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateBackendConfigCommandOutput) => void
  ): Promise<CreateBackendConfigCommandOutput> | void {
    const command = new CreateBackendConfigCommand(args);
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
   * <p>Creates a backend storage resource.</p>
   */
  public createBackendStorage(
    args: CreateBackendStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendStorageCommandOutput>;
  public createBackendStorage(
    args: CreateBackendStorageCommandInput,
    cb: (err: any, data?: CreateBackendStorageCommandOutput) => void
  ): void;
  public createBackendStorage(
    args: CreateBackendStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendStorageCommandOutput) => void
  ): void;
  public createBackendStorage(
    args: CreateBackendStorageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBackendStorageCommandOutput) => void),
    cb?: (err: any, data?: CreateBackendStorageCommandOutput) => void
  ): Promise<CreateBackendStorageCommandOutput> | void {
    const command = new CreateBackendStorageCommand(args);
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
   * <p>Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.</p>
   */
  public createToken(args: CreateTokenCommandInput, options?: __HttpHandlerOptions): Promise<CreateTokenCommandOutput>;
  public createToken(args: CreateTokenCommandInput, cb: (err: any, data?: CreateTokenCommandOutput) => void): void;
  public createToken(
    args: CreateTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTokenCommandOutput) => void
  ): void;
  public createToken(
    args: CreateTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTokenCommandOutput) => void),
    cb?: (err: any, data?: CreateTokenCommandOutput) => void
  ): Promise<CreateTokenCommandOutput> | void {
    const command = new CreateTokenCommand(args);
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
   * <p>Removes an existing environment from your Amplify project.</p>
   */
  public deleteBackend(
    args: DeleteBackendCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendCommandOutput>;
  public deleteBackend(
    args: DeleteBackendCommandInput,
    cb: (err: any, data?: DeleteBackendCommandOutput) => void
  ): void;
  public deleteBackend(
    args: DeleteBackendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendCommandOutput) => void
  ): void;
  public deleteBackend(
    args: DeleteBackendCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackendCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackendCommandOutput) => void
  ): Promise<DeleteBackendCommandOutput> | void {
    const command = new DeleteBackendCommand(args);
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
   * <p>Deletes an existing backend API resource.</p>
   */
  public deleteBackendAPI(
    args: DeleteBackendAPICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendAPICommandOutput>;
  public deleteBackendAPI(
    args: DeleteBackendAPICommandInput,
    cb: (err: any, data?: DeleteBackendAPICommandOutput) => void
  ): void;
  public deleteBackendAPI(
    args: DeleteBackendAPICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendAPICommandOutput) => void
  ): void;
  public deleteBackendAPI(
    args: DeleteBackendAPICommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackendAPICommandOutput) => void),
    cb?: (err: any, data?: DeleteBackendAPICommandOutput) => void
  ): Promise<DeleteBackendAPICommandOutput> | void {
    const command = new DeleteBackendAPICommand(args);
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
   * <p>Deletes an existing backend authentication resource.</p>
   */
  public deleteBackendAuth(
    args: DeleteBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendAuthCommandOutput>;
  public deleteBackendAuth(
    args: DeleteBackendAuthCommandInput,
    cb: (err: any, data?: DeleteBackendAuthCommandOutput) => void
  ): void;
  public deleteBackendAuth(
    args: DeleteBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendAuthCommandOutput) => void
  ): void;
  public deleteBackendAuth(
    args: DeleteBackendAuthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackendAuthCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackendAuthCommandOutput) => void
  ): Promise<DeleteBackendAuthCommandOutput> | void {
    const command = new DeleteBackendAuthCommand(args);
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
   * <p>Removes the specified backend storage resource.</p>
   */
  public deleteBackendStorage(
    args: DeleteBackendStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendStorageCommandOutput>;
  public deleteBackendStorage(
    args: DeleteBackendStorageCommandInput,
    cb: (err: any, data?: DeleteBackendStorageCommandOutput) => void
  ): void;
  public deleteBackendStorage(
    args: DeleteBackendStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendStorageCommandOutput) => void
  ): void;
  public deleteBackendStorage(
    args: DeleteBackendStorageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackendStorageCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackendStorageCommandOutput) => void
  ): Promise<DeleteBackendStorageCommandOutput> | void {
    const command = new DeleteBackendStorageCommand(args);
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
   * <p>Deletes the challenge token based on the given appId and sessionId.</p>
   */
  public deleteToken(args: DeleteTokenCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTokenCommandOutput>;
  public deleteToken(args: DeleteTokenCommandInput, cb: (err: any, data?: DeleteTokenCommandOutput) => void): void;
  public deleteToken(
    args: DeleteTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTokenCommandOutput) => void
  ): void;
  public deleteToken(
    args: DeleteTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTokenCommandOutput) => void),
    cb?: (err: any, data?: DeleteTokenCommandOutput) => void
  ): Promise<DeleteTokenCommandOutput> | void {
    const command = new DeleteTokenCommand(args);
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
   * <p>Generates a model schema for an existing backend API resource.</p>
   */
  public generateBackendAPIModels(
    args: GenerateBackendAPIModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateBackendAPIModelsCommandOutput>;
  public generateBackendAPIModels(
    args: GenerateBackendAPIModelsCommandInput,
    cb: (err: any, data?: GenerateBackendAPIModelsCommandOutput) => void
  ): void;
  public generateBackendAPIModels(
    args: GenerateBackendAPIModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateBackendAPIModelsCommandOutput) => void
  ): void;
  public generateBackendAPIModels(
    args: GenerateBackendAPIModelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GenerateBackendAPIModelsCommandOutput) => void),
    cb?: (err: any, data?: GenerateBackendAPIModelsCommandOutput) => void
  ): Promise<GenerateBackendAPIModelsCommandOutput> | void {
    const command = new GenerateBackendAPIModelsCommand(args);
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
   * <p>Provides project-level details for your Amplify UI project.</p>
   */
  public getBackend(args: GetBackendCommandInput, options?: __HttpHandlerOptions): Promise<GetBackendCommandOutput>;
  public getBackend(args: GetBackendCommandInput, cb: (err: any, data?: GetBackendCommandOutput) => void): void;
  public getBackend(
    args: GetBackendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendCommandOutput) => void
  ): void;
  public getBackend(
    args: GetBackendCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackendCommandOutput) => void),
    cb?: (err: any, data?: GetBackendCommandOutput) => void
  ): Promise<GetBackendCommandOutput> | void {
    const command = new GetBackendCommand(args);
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
   * <p>Gets the details for a backend API.</p>
   */
  public getBackendAPI(
    args: GetBackendAPICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendAPICommandOutput>;
  public getBackendAPI(
    args: GetBackendAPICommandInput,
    cb: (err: any, data?: GetBackendAPICommandOutput) => void
  ): void;
  public getBackendAPI(
    args: GetBackendAPICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendAPICommandOutput) => void
  ): void;
  public getBackendAPI(
    args: GetBackendAPICommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackendAPICommandOutput) => void),
    cb?: (err: any, data?: GetBackendAPICommandOutput) => void
  ): Promise<GetBackendAPICommandOutput> | void {
    const command = new GetBackendAPICommand(args);
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
   * <p>Gets a model introspection schema for an existing backend API resource.</p>
   */
  public getBackendAPIModels(
    args: GetBackendAPIModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendAPIModelsCommandOutput>;
  public getBackendAPIModels(
    args: GetBackendAPIModelsCommandInput,
    cb: (err: any, data?: GetBackendAPIModelsCommandOutput) => void
  ): void;
  public getBackendAPIModels(
    args: GetBackendAPIModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendAPIModelsCommandOutput) => void
  ): void;
  public getBackendAPIModels(
    args: GetBackendAPIModelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackendAPIModelsCommandOutput) => void),
    cb?: (err: any, data?: GetBackendAPIModelsCommandOutput) => void
  ): Promise<GetBackendAPIModelsCommandOutput> | void {
    const command = new GetBackendAPIModelsCommand(args);
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
   * <p>Gets a backend auth details.</p>
   */
  public getBackendAuth(
    args: GetBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendAuthCommandOutput>;
  public getBackendAuth(
    args: GetBackendAuthCommandInput,
    cb: (err: any, data?: GetBackendAuthCommandOutput) => void
  ): void;
  public getBackendAuth(
    args: GetBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendAuthCommandOutput) => void
  ): void;
  public getBackendAuth(
    args: GetBackendAuthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackendAuthCommandOutput) => void),
    cb?: (err: any, data?: GetBackendAuthCommandOutput) => void
  ): Promise<GetBackendAuthCommandOutput> | void {
    const command = new GetBackendAuthCommand(args);
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
   * <p>Returns information about a specific job.</p>
   */
  public getBackendJob(
    args: GetBackendJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendJobCommandOutput>;
  public getBackendJob(
    args: GetBackendJobCommandInput,
    cb: (err: any, data?: GetBackendJobCommandOutput) => void
  ): void;
  public getBackendJob(
    args: GetBackendJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendJobCommandOutput) => void
  ): void;
  public getBackendJob(
    args: GetBackendJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackendJobCommandOutput) => void),
    cb?: (err: any, data?: GetBackendJobCommandOutput) => void
  ): Promise<GetBackendJobCommandOutput> | void {
    const command = new GetBackendJobCommand(args);
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
   * <p>Gets details for a backend storage resource.</p>
   */
  public getBackendStorage(
    args: GetBackendStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendStorageCommandOutput>;
  public getBackendStorage(
    args: GetBackendStorageCommandInput,
    cb: (err: any, data?: GetBackendStorageCommandOutput) => void
  ): void;
  public getBackendStorage(
    args: GetBackendStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendStorageCommandOutput) => void
  ): void;
  public getBackendStorage(
    args: GetBackendStorageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackendStorageCommandOutput) => void),
    cb?: (err: any, data?: GetBackendStorageCommandOutput) => void
  ): Promise<GetBackendStorageCommandOutput> | void {
    const command = new GetBackendStorageCommand(args);
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
   * <p>Gets the challenge token based on the given appId and sessionId.</p>
   */
  public getToken(args: GetTokenCommandInput, options?: __HttpHandlerOptions): Promise<GetTokenCommandOutput>;
  public getToken(args: GetTokenCommandInput, cb: (err: any, data?: GetTokenCommandOutput) => void): void;
  public getToken(
    args: GetTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTokenCommandOutput) => void
  ): void;
  public getToken(
    args: GetTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTokenCommandOutput) => void),
    cb?: (err: any, data?: GetTokenCommandOutput) => void
  ): Promise<GetTokenCommandOutput> | void {
    const command = new GetTokenCommand(args);
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
   * <p>Imports an existing backend authentication resource.</p>
   */
  public importBackendAuth(
    args: ImportBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportBackendAuthCommandOutput>;
  public importBackendAuth(
    args: ImportBackendAuthCommandInput,
    cb: (err: any, data?: ImportBackendAuthCommandOutput) => void
  ): void;
  public importBackendAuth(
    args: ImportBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportBackendAuthCommandOutput) => void
  ): void;
  public importBackendAuth(
    args: ImportBackendAuthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportBackendAuthCommandOutput) => void),
    cb?: (err: any, data?: ImportBackendAuthCommandOutput) => void
  ): Promise<ImportBackendAuthCommandOutput> | void {
    const command = new ImportBackendAuthCommand(args);
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
   * <p>Imports an existing backend storage resource.</p>
   */
  public importBackendStorage(
    args: ImportBackendStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportBackendStorageCommandOutput>;
  public importBackendStorage(
    args: ImportBackendStorageCommandInput,
    cb: (err: any, data?: ImportBackendStorageCommandOutput) => void
  ): void;
  public importBackendStorage(
    args: ImportBackendStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportBackendStorageCommandOutput) => void
  ): void;
  public importBackendStorage(
    args: ImportBackendStorageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportBackendStorageCommandOutput) => void),
    cb?: (err: any, data?: ImportBackendStorageCommandOutput) => void
  ): Promise<ImportBackendStorageCommandOutput> | void {
    const command = new ImportBackendStorageCommand(args);
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
   * <p>Lists the jobs for the backend of an Amplify app.</p>
   */
  public listBackendJobs(
    args: ListBackendJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackendJobsCommandOutput>;
  public listBackendJobs(
    args: ListBackendJobsCommandInput,
    cb: (err: any, data?: ListBackendJobsCommandOutput) => void
  ): void;
  public listBackendJobs(
    args: ListBackendJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackendJobsCommandOutput) => void
  ): void;
  public listBackendJobs(
    args: ListBackendJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBackendJobsCommandOutput) => void),
    cb?: (err: any, data?: ListBackendJobsCommandOutput) => void
  ): Promise<ListBackendJobsCommandOutput> | void {
    const command = new ListBackendJobsCommand(args);
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
   * <p>The list of S3 buckets in your account.</p>
   */
  public listS3Buckets(
    args: ListS3BucketsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListS3BucketsCommandOutput>;
  public listS3Buckets(
    args: ListS3BucketsCommandInput,
    cb: (err: any, data?: ListS3BucketsCommandOutput) => void
  ): void;
  public listS3Buckets(
    args: ListS3BucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListS3BucketsCommandOutput) => void
  ): void;
  public listS3Buckets(
    args: ListS3BucketsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListS3BucketsCommandOutput) => void),
    cb?: (err: any, data?: ListS3BucketsCommandOutput) => void
  ): Promise<ListS3BucketsCommandOutput> | void {
    const command = new ListS3BucketsCommand(args);
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
   * <p>Removes all backend environments from your Amplify project.</p>
   */
  public removeAllBackends(
    args: RemoveAllBackendsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAllBackendsCommandOutput>;
  public removeAllBackends(
    args: RemoveAllBackendsCommandInput,
    cb: (err: any, data?: RemoveAllBackendsCommandOutput) => void
  ): void;
  public removeAllBackends(
    args: RemoveAllBackendsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAllBackendsCommandOutput) => void
  ): void;
  public removeAllBackends(
    args: RemoveAllBackendsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveAllBackendsCommandOutput) => void),
    cb?: (err: any, data?: RemoveAllBackendsCommandOutput) => void
  ): Promise<RemoveAllBackendsCommandOutput> | void {
    const command = new RemoveAllBackendsCommand(args);
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
   * <p>Removes the AWS resources required to access the Amplify Admin UI.</p>
   */
  public removeBackendConfig(
    args: RemoveBackendConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveBackendConfigCommandOutput>;
  public removeBackendConfig(
    args: RemoveBackendConfigCommandInput,
    cb: (err: any, data?: RemoveBackendConfigCommandOutput) => void
  ): void;
  public removeBackendConfig(
    args: RemoveBackendConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveBackendConfigCommandOutput) => void
  ): void;
  public removeBackendConfig(
    args: RemoveBackendConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveBackendConfigCommandOutput) => void),
    cb?: (err: any, data?: RemoveBackendConfigCommandOutput) => void
  ): Promise<RemoveBackendConfigCommandOutput> | void {
    const command = new RemoveBackendConfigCommand(args);
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
   * <p>Updates an existing backend API resource.</p>
   */
  public updateBackendAPI(
    args: UpdateBackendAPICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendAPICommandOutput>;
  public updateBackendAPI(
    args: UpdateBackendAPICommandInput,
    cb: (err: any, data?: UpdateBackendAPICommandOutput) => void
  ): void;
  public updateBackendAPI(
    args: UpdateBackendAPICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendAPICommandOutput) => void
  ): void;
  public updateBackendAPI(
    args: UpdateBackendAPICommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBackendAPICommandOutput) => void),
    cb?: (err: any, data?: UpdateBackendAPICommandOutput) => void
  ): Promise<UpdateBackendAPICommandOutput> | void {
    const command = new UpdateBackendAPICommand(args);
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
   * <p>Updates an existing backend authentication resource.</p>
   */
  public updateBackendAuth(
    args: UpdateBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendAuthCommandOutput>;
  public updateBackendAuth(
    args: UpdateBackendAuthCommandInput,
    cb: (err: any, data?: UpdateBackendAuthCommandOutput) => void
  ): void;
  public updateBackendAuth(
    args: UpdateBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendAuthCommandOutput) => void
  ): void;
  public updateBackendAuth(
    args: UpdateBackendAuthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBackendAuthCommandOutput) => void),
    cb?: (err: any, data?: UpdateBackendAuthCommandOutput) => void
  ): Promise<UpdateBackendAuthCommandOutput> | void {
    const command = new UpdateBackendAuthCommand(args);
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
   * <p>Updates the AWS resources required to access the Amplify Admin UI.</p>
   */
  public updateBackendConfig(
    args: UpdateBackendConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendConfigCommandOutput>;
  public updateBackendConfig(
    args: UpdateBackendConfigCommandInput,
    cb: (err: any, data?: UpdateBackendConfigCommandOutput) => void
  ): void;
  public updateBackendConfig(
    args: UpdateBackendConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendConfigCommandOutput) => void
  ): void;
  public updateBackendConfig(
    args: UpdateBackendConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBackendConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateBackendConfigCommandOutput) => void
  ): Promise<UpdateBackendConfigCommandOutput> | void {
    const command = new UpdateBackendConfigCommand(args);
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
   * <p>Updates a specific job.</p>
   */
  public updateBackendJob(
    args: UpdateBackendJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendJobCommandOutput>;
  public updateBackendJob(
    args: UpdateBackendJobCommandInput,
    cb: (err: any, data?: UpdateBackendJobCommandOutput) => void
  ): void;
  public updateBackendJob(
    args: UpdateBackendJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendJobCommandOutput) => void
  ): void;
  public updateBackendJob(
    args: UpdateBackendJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBackendJobCommandOutput) => void),
    cb?: (err: any, data?: UpdateBackendJobCommandOutput) => void
  ): Promise<UpdateBackendJobCommandOutput> | void {
    const command = new UpdateBackendJobCommand(args);
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
   * <p>Updates an existing backend storage resource.</p>
   */
  public updateBackendStorage(
    args: UpdateBackendStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendStorageCommandOutput>;
  public updateBackendStorage(
    args: UpdateBackendStorageCommandInput,
    cb: (err: any, data?: UpdateBackendStorageCommandOutput) => void
  ): void;
  public updateBackendStorage(
    args: UpdateBackendStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendStorageCommandOutput) => void
  ): void;
  public updateBackendStorage(
    args: UpdateBackendStorageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBackendStorageCommandOutput) => void),
    cb?: (err: any, data?: UpdateBackendStorageCommandOutput) => void
  ): Promise<UpdateBackendStorageCommandOutput> | void {
    const command = new UpdateBackendStorageCommand(args);
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
