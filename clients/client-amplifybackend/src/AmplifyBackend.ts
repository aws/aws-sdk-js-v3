// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AmplifyBackendClient } from "./AmplifyBackendClient";
import {
  type CloneBackendCommandInput,
  type CloneBackendCommandOutput,
  CloneBackendCommand,
} from "./commands/CloneBackendCommand";
import {
  type CreateBackendAPICommandInput,
  type CreateBackendAPICommandOutput,
  CreateBackendAPICommand,
} from "./commands/CreateBackendAPICommand";
import {
  type CreateBackendAuthCommandInput,
  type CreateBackendAuthCommandOutput,
  CreateBackendAuthCommand,
} from "./commands/CreateBackendAuthCommand";
import {
  type CreateBackendCommandInput,
  type CreateBackendCommandOutput,
  CreateBackendCommand,
} from "./commands/CreateBackendCommand";
import {
  type CreateBackendConfigCommandInput,
  type CreateBackendConfigCommandOutput,
  CreateBackendConfigCommand,
} from "./commands/CreateBackendConfigCommand";
import {
  type CreateBackendStorageCommandInput,
  type CreateBackendStorageCommandOutput,
  CreateBackendStorageCommand,
} from "./commands/CreateBackendStorageCommand";
import {
  type CreateTokenCommandInput,
  type CreateTokenCommandOutput,
  CreateTokenCommand,
} from "./commands/CreateTokenCommand";
import {
  type DeleteBackendAPICommandInput,
  type DeleteBackendAPICommandOutput,
  DeleteBackendAPICommand,
} from "./commands/DeleteBackendAPICommand";
import {
  type DeleteBackendAuthCommandInput,
  type DeleteBackendAuthCommandOutput,
  DeleteBackendAuthCommand,
} from "./commands/DeleteBackendAuthCommand";
import {
  type DeleteBackendCommandInput,
  type DeleteBackendCommandOutput,
  DeleteBackendCommand,
} from "./commands/DeleteBackendCommand";
import {
  type DeleteBackendStorageCommandInput,
  type DeleteBackendStorageCommandOutput,
  DeleteBackendStorageCommand,
} from "./commands/DeleteBackendStorageCommand";
import {
  type DeleteTokenCommandInput,
  type DeleteTokenCommandOutput,
  DeleteTokenCommand,
} from "./commands/DeleteTokenCommand";
import {
  type GenerateBackendAPIModelsCommandInput,
  type GenerateBackendAPIModelsCommandOutput,
  GenerateBackendAPIModelsCommand,
} from "./commands/GenerateBackendAPIModelsCommand";
import {
  type GetBackendAPICommandInput,
  type GetBackendAPICommandOutput,
  GetBackendAPICommand,
} from "./commands/GetBackendAPICommand";
import {
  type GetBackendAPIModelsCommandInput,
  type GetBackendAPIModelsCommandOutput,
  GetBackendAPIModelsCommand,
} from "./commands/GetBackendAPIModelsCommand";
import {
  type GetBackendAuthCommandInput,
  type GetBackendAuthCommandOutput,
  GetBackendAuthCommand,
} from "./commands/GetBackendAuthCommand";
import {
  type GetBackendCommandInput,
  type GetBackendCommandOutput,
  GetBackendCommand,
} from "./commands/GetBackendCommand";
import {
  type GetBackendJobCommandInput,
  type GetBackendJobCommandOutput,
  GetBackendJobCommand,
} from "./commands/GetBackendJobCommand";
import {
  type GetBackendStorageCommandInput,
  type GetBackendStorageCommandOutput,
  GetBackendStorageCommand,
} from "./commands/GetBackendStorageCommand";
import { type GetTokenCommandInput, type GetTokenCommandOutput, GetTokenCommand } from "./commands/GetTokenCommand";
import {
  type ImportBackendAuthCommandInput,
  type ImportBackendAuthCommandOutput,
  ImportBackendAuthCommand,
} from "./commands/ImportBackendAuthCommand";
import {
  type ImportBackendStorageCommandInput,
  type ImportBackendStorageCommandOutput,
  ImportBackendStorageCommand,
} from "./commands/ImportBackendStorageCommand";
import {
  type ListBackendJobsCommandInput,
  type ListBackendJobsCommandOutput,
  ListBackendJobsCommand,
} from "./commands/ListBackendJobsCommand";
import {
  type ListS3BucketsCommandInput,
  type ListS3BucketsCommandOutput,
  ListS3BucketsCommand,
} from "./commands/ListS3BucketsCommand";
import {
  type RemoveAllBackendsCommandInput,
  type RemoveAllBackendsCommandOutput,
  RemoveAllBackendsCommand,
} from "./commands/RemoveAllBackendsCommand";
import {
  type RemoveBackendConfigCommandInput,
  type RemoveBackendConfigCommandOutput,
  RemoveBackendConfigCommand,
} from "./commands/RemoveBackendConfigCommand";
import {
  type UpdateBackendAPICommandInput,
  type UpdateBackendAPICommandOutput,
  UpdateBackendAPICommand,
} from "./commands/UpdateBackendAPICommand";
import {
  type UpdateBackendAuthCommandInput,
  type UpdateBackendAuthCommandOutput,
  UpdateBackendAuthCommand,
} from "./commands/UpdateBackendAuthCommand";
import {
  type UpdateBackendConfigCommandInput,
  type UpdateBackendConfigCommandOutput,
  UpdateBackendConfigCommand,
} from "./commands/UpdateBackendConfigCommand";
import {
  type UpdateBackendJobCommandInput,
  type UpdateBackendJobCommandOutput,
  UpdateBackendJobCommand,
} from "./commands/UpdateBackendJobCommand";
import {
  type UpdateBackendStorageCommandInput,
  type UpdateBackendStorageCommandOutput,
  UpdateBackendStorageCommand,
} from "./commands/UpdateBackendStorageCommand";

const commands = {
  CloneBackendCommand,
  CreateBackendCommand,
  CreateBackendAPICommand,
  CreateBackendAuthCommand,
  CreateBackendConfigCommand,
  CreateBackendStorageCommand,
  CreateTokenCommand,
  DeleteBackendCommand,
  DeleteBackendAPICommand,
  DeleteBackendAuthCommand,
  DeleteBackendStorageCommand,
  DeleteTokenCommand,
  GenerateBackendAPIModelsCommand,
  GetBackendCommand,
  GetBackendAPICommand,
  GetBackendAPIModelsCommand,
  GetBackendAuthCommand,
  GetBackendJobCommand,
  GetBackendStorageCommand,
  GetTokenCommand,
  ImportBackendAuthCommand,
  ImportBackendStorageCommand,
  ListBackendJobsCommand,
  ListS3BucketsCommand,
  RemoveAllBackendsCommand,
  RemoveBackendConfigCommand,
  UpdateBackendAPICommand,
  UpdateBackendAuthCommand,
  UpdateBackendConfigCommand,
  UpdateBackendJobCommand,
  UpdateBackendStorageCommand,
};

export interface AmplifyBackend {
  /**
   * @see {@link CloneBackendCommand}
   */
  cloneBackend(
    args: CloneBackendCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CloneBackendCommandOutput>;
  cloneBackend(
    args: CloneBackendCommandInput,
    cb: (err: any, data?: CloneBackendCommandOutput) => void
  ): void;
  cloneBackend(
    args: CloneBackendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloneBackendCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackendCommand}
   */
  createBackend(
    args: CreateBackendCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendCommandOutput>;
  createBackend(
    args: CreateBackendCommandInput,
    cb: (err: any, data?: CreateBackendCommandOutput) => void
  ): void;
  createBackend(
    args: CreateBackendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackendAPICommand}
   */
  createBackendAPI(
    args: CreateBackendAPICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendAPICommandOutput>;
  createBackendAPI(
    args: CreateBackendAPICommandInput,
    cb: (err: any, data?: CreateBackendAPICommandOutput) => void
  ): void;
  createBackendAPI(
    args: CreateBackendAPICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendAPICommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackendAuthCommand}
   */
  createBackendAuth(
    args: CreateBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendAuthCommandOutput>;
  createBackendAuth(
    args: CreateBackendAuthCommandInput,
    cb: (err: any, data?: CreateBackendAuthCommandOutput) => void
  ): void;
  createBackendAuth(
    args: CreateBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackendConfigCommand}
   */
  createBackendConfig(
    args: CreateBackendConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendConfigCommandOutput>;
  createBackendConfig(
    args: CreateBackendConfigCommandInput,
    cb: (err: any, data?: CreateBackendConfigCommandOutput) => void
  ): void;
  createBackendConfig(
    args: CreateBackendConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackendStorageCommand}
   */
  createBackendStorage(
    args: CreateBackendStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendStorageCommandOutput>;
  createBackendStorage(
    args: CreateBackendStorageCommandInput,
    cb: (err: any, data?: CreateBackendStorageCommandOutput) => void
  ): void;
  createBackendStorage(
    args: CreateBackendStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTokenCommand}
   */
  createToken(
    args: CreateTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTokenCommandOutput>;
  createToken(
    args: CreateTokenCommandInput,
    cb: (err: any, data?: CreateTokenCommandOutput) => void
  ): void;
  createToken(
    args: CreateTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackendCommand}
   */
  deleteBackend(
    args: DeleteBackendCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendCommandOutput>;
  deleteBackend(
    args: DeleteBackendCommandInput,
    cb: (err: any, data?: DeleteBackendCommandOutput) => void
  ): void;
  deleteBackend(
    args: DeleteBackendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackendAPICommand}
   */
  deleteBackendAPI(
    args: DeleteBackendAPICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendAPICommandOutput>;
  deleteBackendAPI(
    args: DeleteBackendAPICommandInput,
    cb: (err: any, data?: DeleteBackendAPICommandOutput) => void
  ): void;
  deleteBackendAPI(
    args: DeleteBackendAPICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendAPICommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackendAuthCommand}
   */
  deleteBackendAuth(
    args: DeleteBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendAuthCommandOutput>;
  deleteBackendAuth(
    args: DeleteBackendAuthCommandInput,
    cb: (err: any, data?: DeleteBackendAuthCommandOutput) => void
  ): void;
  deleteBackendAuth(
    args: DeleteBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackendStorageCommand}
   */
  deleteBackendStorage(
    args: DeleteBackendStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendStorageCommandOutput>;
  deleteBackendStorage(
    args: DeleteBackendStorageCommandInput,
    cb: (err: any, data?: DeleteBackendStorageCommandOutput) => void
  ): void;
  deleteBackendStorage(
    args: DeleteBackendStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTokenCommand}
   */
  deleteToken(
    args: DeleteTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTokenCommandOutput>;
  deleteToken(
    args: DeleteTokenCommandInput,
    cb: (err: any, data?: DeleteTokenCommandOutput) => void
  ): void;
  deleteToken(
    args: DeleteTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateBackendAPIModelsCommand}
   */
  generateBackendAPIModels(
    args: GenerateBackendAPIModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateBackendAPIModelsCommandOutput>;
  generateBackendAPIModels(
    args: GenerateBackendAPIModelsCommandInput,
    cb: (err: any, data?: GenerateBackendAPIModelsCommandOutput) => void
  ): void;
  generateBackendAPIModels(
    args: GenerateBackendAPIModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateBackendAPIModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackendCommand}
   */
  getBackend(
    args: GetBackendCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendCommandOutput>;
  getBackend(
    args: GetBackendCommandInput,
    cb: (err: any, data?: GetBackendCommandOutput) => void
  ): void;
  getBackend(
    args: GetBackendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackendAPICommand}
   */
  getBackendAPI(
    args: GetBackendAPICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendAPICommandOutput>;
  getBackendAPI(
    args: GetBackendAPICommandInput,
    cb: (err: any, data?: GetBackendAPICommandOutput) => void
  ): void;
  getBackendAPI(
    args: GetBackendAPICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendAPICommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackendAPIModelsCommand}
   */
  getBackendAPIModels(
    args: GetBackendAPIModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendAPIModelsCommandOutput>;
  getBackendAPIModels(
    args: GetBackendAPIModelsCommandInput,
    cb: (err: any, data?: GetBackendAPIModelsCommandOutput) => void
  ): void;
  getBackendAPIModels(
    args: GetBackendAPIModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendAPIModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackendAuthCommand}
   */
  getBackendAuth(
    args: GetBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendAuthCommandOutput>;
  getBackendAuth(
    args: GetBackendAuthCommandInput,
    cb: (err: any, data?: GetBackendAuthCommandOutput) => void
  ): void;
  getBackendAuth(
    args: GetBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackendJobCommand}
   */
  getBackendJob(
    args: GetBackendJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendJobCommandOutput>;
  getBackendJob(
    args: GetBackendJobCommandInput,
    cb: (err: any, data?: GetBackendJobCommandOutput) => void
  ): void;
  getBackendJob(
    args: GetBackendJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackendStorageCommand}
   */
  getBackendStorage(
    args: GetBackendStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendStorageCommandOutput>;
  getBackendStorage(
    args: GetBackendStorageCommandInput,
    cb: (err: any, data?: GetBackendStorageCommandOutput) => void
  ): void;
  getBackendStorage(
    args: GetBackendStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTokenCommand}
   */
  getToken(
    args: GetTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTokenCommandOutput>;
  getToken(
    args: GetTokenCommandInput,
    cb: (err: any, data?: GetTokenCommandOutput) => void
  ): void;
  getToken(
    args: GetTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportBackendAuthCommand}
   */
  importBackendAuth(
    args: ImportBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportBackendAuthCommandOutput>;
  importBackendAuth(
    args: ImportBackendAuthCommandInput,
    cb: (err: any, data?: ImportBackendAuthCommandOutput) => void
  ): void;
  importBackendAuth(
    args: ImportBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportBackendAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportBackendStorageCommand}
   */
  importBackendStorage(
    args: ImportBackendStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportBackendStorageCommandOutput>;
  importBackendStorage(
    args: ImportBackendStorageCommandInput,
    cb: (err: any, data?: ImportBackendStorageCommandOutput) => void
  ): void;
  importBackendStorage(
    args: ImportBackendStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportBackendStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBackendJobsCommand}
   */
  listBackendJobs(
    args: ListBackendJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackendJobsCommandOutput>;
  listBackendJobs(
    args: ListBackendJobsCommandInput,
    cb: (err: any, data?: ListBackendJobsCommandOutput) => void
  ): void;
  listBackendJobs(
    args: ListBackendJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackendJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListS3BucketsCommand}
   */
  listS3Buckets(): Promise<ListS3BucketsCommandOutput>;
  listS3Buckets(
    args: ListS3BucketsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListS3BucketsCommandOutput>;
  listS3Buckets(
    args: ListS3BucketsCommandInput,
    cb: (err: any, data?: ListS3BucketsCommandOutput) => void
  ): void;
  listS3Buckets(
    args: ListS3BucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListS3BucketsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveAllBackendsCommand}
   */
  removeAllBackends(
    args: RemoveAllBackendsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAllBackendsCommandOutput>;
  removeAllBackends(
    args: RemoveAllBackendsCommandInput,
    cb: (err: any, data?: RemoveAllBackendsCommandOutput) => void
  ): void;
  removeAllBackends(
    args: RemoveAllBackendsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAllBackendsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveBackendConfigCommand}
   */
  removeBackendConfig(
    args: RemoveBackendConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveBackendConfigCommandOutput>;
  removeBackendConfig(
    args: RemoveBackendConfigCommandInput,
    cb: (err: any, data?: RemoveBackendConfigCommandOutput) => void
  ): void;
  removeBackendConfig(
    args: RemoveBackendConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveBackendConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBackendAPICommand}
   */
  updateBackendAPI(
    args: UpdateBackendAPICommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendAPICommandOutput>;
  updateBackendAPI(
    args: UpdateBackendAPICommandInput,
    cb: (err: any, data?: UpdateBackendAPICommandOutput) => void
  ): void;
  updateBackendAPI(
    args: UpdateBackendAPICommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendAPICommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBackendAuthCommand}
   */
  updateBackendAuth(
    args: UpdateBackendAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendAuthCommandOutput>;
  updateBackendAuth(
    args: UpdateBackendAuthCommandInput,
    cb: (err: any, data?: UpdateBackendAuthCommandOutput) => void
  ): void;
  updateBackendAuth(
    args: UpdateBackendAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBackendConfigCommand}
   */
  updateBackendConfig(
    args: UpdateBackendConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendConfigCommandOutput>;
  updateBackendConfig(
    args: UpdateBackendConfigCommandInput,
    cb: (err: any, data?: UpdateBackendConfigCommandOutput) => void
  ): void;
  updateBackendConfig(
    args: UpdateBackendConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBackendJobCommand}
   */
  updateBackendJob(
    args: UpdateBackendJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendJobCommandOutput>;
  updateBackendJob(
    args: UpdateBackendJobCommandInput,
    cb: (err: any, data?: UpdateBackendJobCommandOutput) => void
  ): void;
  updateBackendJob(
    args: UpdateBackendJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBackendStorageCommand}
   */
  updateBackendStorage(
    args: UpdateBackendStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackendStorageCommandOutput>;
  updateBackendStorage(
    args: UpdateBackendStorageCommandInput,
    cb: (err: any, data?: UpdateBackendStorageCommandOutput) => void
  ): void;
  updateBackendStorage(
    args: UpdateBackendStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackendStorageCommandOutput) => void
  ): void;
}

/**
 * <p>AWS Amplify Admin API</p>
 * @public
 */
export class AmplifyBackend extends AmplifyBackendClient implements AmplifyBackend {}
createAggregatedClient(commands, AmplifyBackend);
