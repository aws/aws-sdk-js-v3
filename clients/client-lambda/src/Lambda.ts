// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddLayerVersionPermissionCommand,
  AddLayerVersionPermissionCommandInput,
  AddLayerVersionPermissionCommandOutput,
} from "./commands/AddLayerVersionPermissionCommand";
import {
  AddPermissionCommand,
  AddPermissionCommandInput,
  AddPermissionCommandOutput,
} from "./commands/AddPermissionCommand";
import { CreateAliasCommand, CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import {
  CreateCodeSigningConfigCommand,
  CreateCodeSigningConfigCommandInput,
  CreateCodeSigningConfigCommandOutput,
} from "./commands/CreateCodeSigningConfigCommand";
import {
  CreateEventSourceMappingCommand,
  CreateEventSourceMappingCommandInput,
  CreateEventSourceMappingCommandOutput,
} from "./commands/CreateEventSourceMappingCommand";
import {
  CreateFunctionCommand,
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput,
} from "./commands/CreateFunctionCommand";
import {
  CreateFunctionUrlConfigCommand,
  CreateFunctionUrlConfigCommandInput,
  CreateFunctionUrlConfigCommandOutput,
} from "./commands/CreateFunctionUrlConfigCommand";
import { DeleteAliasCommand, DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import {
  DeleteCodeSigningConfigCommand,
  DeleteCodeSigningConfigCommandInput,
  DeleteCodeSigningConfigCommandOutput,
} from "./commands/DeleteCodeSigningConfigCommand";
import {
  DeleteEventSourceMappingCommand,
  DeleteEventSourceMappingCommandInput,
  DeleteEventSourceMappingCommandOutput,
} from "./commands/DeleteEventSourceMappingCommand";
import {
  DeleteFunctionCodeSigningConfigCommand,
  DeleteFunctionCodeSigningConfigCommandInput,
  DeleteFunctionCodeSigningConfigCommandOutput,
} from "./commands/DeleteFunctionCodeSigningConfigCommand";
import {
  DeleteFunctionCommand,
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput,
} from "./commands/DeleteFunctionCommand";
import {
  DeleteFunctionConcurrencyCommand,
  DeleteFunctionConcurrencyCommandInput,
  DeleteFunctionConcurrencyCommandOutput,
} from "./commands/DeleteFunctionConcurrencyCommand";
import {
  DeleteFunctionEventInvokeConfigCommand,
  DeleteFunctionEventInvokeConfigCommandInput,
  DeleteFunctionEventInvokeConfigCommandOutput,
} from "./commands/DeleteFunctionEventInvokeConfigCommand";
import {
  DeleteFunctionUrlConfigCommand,
  DeleteFunctionUrlConfigCommandInput,
  DeleteFunctionUrlConfigCommandOutput,
} from "./commands/DeleteFunctionUrlConfigCommand";
import {
  DeleteLayerVersionCommand,
  DeleteLayerVersionCommandInput,
  DeleteLayerVersionCommandOutput,
} from "./commands/DeleteLayerVersionCommand";
import {
  DeleteProvisionedConcurrencyConfigCommand,
  DeleteProvisionedConcurrencyConfigCommandInput,
  DeleteProvisionedConcurrencyConfigCommandOutput,
} from "./commands/DeleteProvisionedConcurrencyConfigCommand";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import { GetAliasCommand, GetAliasCommandInput, GetAliasCommandOutput } from "./commands/GetAliasCommand";
import {
  GetCodeSigningConfigCommand,
  GetCodeSigningConfigCommandInput,
  GetCodeSigningConfigCommandOutput,
} from "./commands/GetCodeSigningConfigCommand";
import {
  GetEventSourceMappingCommand,
  GetEventSourceMappingCommandInput,
  GetEventSourceMappingCommandOutput,
} from "./commands/GetEventSourceMappingCommand";
import {
  GetFunctionCodeSigningConfigCommand,
  GetFunctionCodeSigningConfigCommandInput,
  GetFunctionCodeSigningConfigCommandOutput,
} from "./commands/GetFunctionCodeSigningConfigCommand";
import { GetFunctionCommand, GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import {
  GetFunctionConcurrencyCommand,
  GetFunctionConcurrencyCommandInput,
  GetFunctionConcurrencyCommandOutput,
} from "./commands/GetFunctionConcurrencyCommand";
import {
  GetFunctionConfigurationCommand,
  GetFunctionConfigurationCommandInput,
  GetFunctionConfigurationCommandOutput,
} from "./commands/GetFunctionConfigurationCommand";
import {
  GetFunctionEventInvokeConfigCommand,
  GetFunctionEventInvokeConfigCommandInput,
  GetFunctionEventInvokeConfigCommandOutput,
} from "./commands/GetFunctionEventInvokeConfigCommand";
import {
  GetFunctionUrlConfigCommand,
  GetFunctionUrlConfigCommandInput,
  GetFunctionUrlConfigCommandOutput,
} from "./commands/GetFunctionUrlConfigCommand";
import {
  GetLayerVersionByArnCommand,
  GetLayerVersionByArnCommandInput,
  GetLayerVersionByArnCommandOutput,
} from "./commands/GetLayerVersionByArnCommand";
import {
  GetLayerVersionCommand,
  GetLayerVersionCommandInput,
  GetLayerVersionCommandOutput,
} from "./commands/GetLayerVersionCommand";
import {
  GetLayerVersionPolicyCommand,
  GetLayerVersionPolicyCommandInput,
  GetLayerVersionPolicyCommandOutput,
} from "./commands/GetLayerVersionPolicyCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  GetProvisionedConcurrencyConfigCommand,
  GetProvisionedConcurrencyConfigCommandInput,
  GetProvisionedConcurrencyConfigCommandOutput,
} from "./commands/GetProvisionedConcurrencyConfigCommand";
import {
  GetRuntimeManagementConfigCommand,
  GetRuntimeManagementConfigCommandInput,
  GetRuntimeManagementConfigCommandOutput,
} from "./commands/GetRuntimeManagementConfigCommand";
import { InvokeAsyncCommand, InvokeAsyncCommandInput, InvokeAsyncCommandOutput } from "./commands/InvokeAsyncCommand";
import { InvokeCommand, InvokeCommandInput, InvokeCommandOutput } from "./commands/InvokeCommand";
import {
  InvokeWithResponseStreamCommand,
  InvokeWithResponseStreamCommandInput,
  InvokeWithResponseStreamCommandOutput,
} from "./commands/InvokeWithResponseStreamCommand";
import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import {
  ListCodeSigningConfigsCommand,
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
} from "./commands/ListCodeSigningConfigsCommand";
import {
  ListEventSourceMappingsCommand,
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
} from "./commands/ListEventSourceMappingsCommand";
import {
  ListFunctionEventInvokeConfigsCommand,
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
} from "./commands/ListFunctionEventInvokeConfigsCommand";
import {
  ListFunctionsByCodeSigningConfigCommand,
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
} from "./commands/ListFunctionsByCodeSigningConfigCommand";
import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "./commands/ListFunctionsCommand";
import {
  ListFunctionUrlConfigsCommand,
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
} from "./commands/ListFunctionUrlConfigsCommand";
import { ListLayersCommand, ListLayersCommandInput, ListLayersCommandOutput } from "./commands/ListLayersCommand";
import {
  ListLayerVersionsCommand,
  ListLayerVersionsCommandInput,
  ListLayerVersionsCommandOutput,
} from "./commands/ListLayerVersionsCommand";
import {
  ListProvisionedConcurrencyConfigsCommand,
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
} from "./commands/ListProvisionedConcurrencyConfigsCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  ListVersionsByFunctionCommand,
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput,
} from "./commands/ListVersionsByFunctionCommand";
import {
  PublishLayerVersionCommand,
  PublishLayerVersionCommandInput,
  PublishLayerVersionCommandOutput,
} from "./commands/PublishLayerVersionCommand";
import {
  PublishVersionCommand,
  PublishVersionCommandInput,
  PublishVersionCommandOutput,
} from "./commands/PublishVersionCommand";
import {
  PutFunctionCodeSigningConfigCommand,
  PutFunctionCodeSigningConfigCommandInput,
  PutFunctionCodeSigningConfigCommandOutput,
} from "./commands/PutFunctionCodeSigningConfigCommand";
import {
  PutFunctionConcurrencyCommand,
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
} from "./commands/PutFunctionConcurrencyCommand";
import {
  PutFunctionEventInvokeConfigCommand,
  PutFunctionEventInvokeConfigCommandInput,
  PutFunctionEventInvokeConfigCommandOutput,
} from "./commands/PutFunctionEventInvokeConfigCommand";
import {
  PutProvisionedConcurrencyConfigCommand,
  PutProvisionedConcurrencyConfigCommandInput,
  PutProvisionedConcurrencyConfigCommandOutput,
} from "./commands/PutProvisionedConcurrencyConfigCommand";
import {
  PutRuntimeManagementConfigCommand,
  PutRuntimeManagementConfigCommandInput,
  PutRuntimeManagementConfigCommandOutput,
} from "./commands/PutRuntimeManagementConfigCommand";
import {
  RemoveLayerVersionPermissionCommand,
  RemoveLayerVersionPermissionCommandInput,
  RemoveLayerVersionPermissionCommandOutput,
} from "./commands/RemoveLayerVersionPermissionCommand";
import {
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
} from "./commands/RemovePermissionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAliasCommand, UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import {
  UpdateCodeSigningConfigCommand,
  UpdateCodeSigningConfigCommandInput,
  UpdateCodeSigningConfigCommandOutput,
} from "./commands/UpdateCodeSigningConfigCommand";
import {
  UpdateEventSourceMappingCommand,
  UpdateEventSourceMappingCommandInput,
  UpdateEventSourceMappingCommandOutput,
} from "./commands/UpdateEventSourceMappingCommand";
import {
  UpdateFunctionCodeCommand,
  UpdateFunctionCodeCommandInput,
  UpdateFunctionCodeCommandOutput,
} from "./commands/UpdateFunctionCodeCommand";
import {
  UpdateFunctionConfigurationCommand,
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
} from "./commands/UpdateFunctionConfigurationCommand";
import {
  UpdateFunctionEventInvokeConfigCommand,
  UpdateFunctionEventInvokeConfigCommandInput,
  UpdateFunctionEventInvokeConfigCommandOutput,
} from "./commands/UpdateFunctionEventInvokeConfigCommand";
import {
  UpdateFunctionUrlConfigCommand,
  UpdateFunctionUrlConfigCommandInput,
  UpdateFunctionUrlConfigCommandOutput,
} from "./commands/UpdateFunctionUrlConfigCommand";
import { LambdaClient, LambdaClientConfig } from "./LambdaClient";

const commands = {
  AddLayerVersionPermissionCommand,
  AddPermissionCommand,
  CreateAliasCommand,
  CreateCodeSigningConfigCommand,
  CreateEventSourceMappingCommand,
  CreateFunctionCommand,
  CreateFunctionUrlConfigCommand,
  DeleteAliasCommand,
  DeleteCodeSigningConfigCommand,
  DeleteEventSourceMappingCommand,
  DeleteFunctionCommand,
  DeleteFunctionCodeSigningConfigCommand,
  DeleteFunctionConcurrencyCommand,
  DeleteFunctionEventInvokeConfigCommand,
  DeleteFunctionUrlConfigCommand,
  DeleteLayerVersionCommand,
  DeleteProvisionedConcurrencyConfigCommand,
  GetAccountSettingsCommand,
  GetAliasCommand,
  GetCodeSigningConfigCommand,
  GetEventSourceMappingCommand,
  GetFunctionCommand,
  GetFunctionCodeSigningConfigCommand,
  GetFunctionConcurrencyCommand,
  GetFunctionConfigurationCommand,
  GetFunctionEventInvokeConfigCommand,
  GetFunctionUrlConfigCommand,
  GetLayerVersionCommand,
  GetLayerVersionByArnCommand,
  GetLayerVersionPolicyCommand,
  GetPolicyCommand,
  GetProvisionedConcurrencyConfigCommand,
  GetRuntimeManagementConfigCommand,
  InvokeCommand,
  InvokeAsyncCommand,
  InvokeWithResponseStreamCommand,
  ListAliasesCommand,
  ListCodeSigningConfigsCommand,
  ListEventSourceMappingsCommand,
  ListFunctionEventInvokeConfigsCommand,
  ListFunctionsCommand,
  ListFunctionsByCodeSigningConfigCommand,
  ListFunctionUrlConfigsCommand,
  ListLayersCommand,
  ListLayerVersionsCommand,
  ListProvisionedConcurrencyConfigsCommand,
  ListTagsCommand,
  ListVersionsByFunctionCommand,
  PublishLayerVersionCommand,
  PublishVersionCommand,
  PutFunctionCodeSigningConfigCommand,
  PutFunctionConcurrencyCommand,
  PutFunctionEventInvokeConfigCommand,
  PutProvisionedConcurrencyConfigCommand,
  PutRuntimeManagementConfigCommand,
  RemoveLayerVersionPermissionCommand,
  RemovePermissionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAliasCommand,
  UpdateCodeSigningConfigCommand,
  UpdateEventSourceMappingCommand,
  UpdateFunctionCodeCommand,
  UpdateFunctionConfigurationCommand,
  UpdateFunctionEventInvokeConfigCommand,
  UpdateFunctionUrlConfigCommand,
};

export interface Lambda {
  /**
   * @see {@link AddLayerVersionPermissionCommand}
   */
  addLayerVersionPermission(
    args: AddLayerVersionPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddLayerVersionPermissionCommandOutput>;
  addLayerVersionPermission(
    args: AddLayerVersionPermissionCommandInput,
    cb: (err: any, data?: AddLayerVersionPermissionCommandOutput) => void
  ): void;
  addLayerVersionPermission(
    args: AddLayerVersionPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddLayerVersionPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(args: AddPermissionCommandInput, options?: __HttpHandlerOptions): Promise<AddPermissionCommandOutput>;
  addPermission(args: AddPermissionCommandInput, cb: (err: any, data?: AddPermissionCommandOutput) => void): void;
  addPermission(
    args: AddPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
  createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
  createAlias(
    args: CreateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCodeSigningConfigCommand}
   */
  createCodeSigningConfig(
    args: CreateCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCodeSigningConfigCommandOutput>;
  createCodeSigningConfig(
    args: CreateCodeSigningConfigCommandInput,
    cb: (err: any, data?: CreateCodeSigningConfigCommandOutput) => void
  ): void;
  createCodeSigningConfig(
    args: CreateCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCodeSigningConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventSourceMappingCommand}
   */
  createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventSourceMappingCommandOutput>;
  createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    cb: (err: any, data?: CreateEventSourceMappingCommandOutput) => void
  ): void;
  createEventSourceMapping(
    args: CreateEventSourceMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventSourceMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFunctionCommand}
   */
  createFunction(
    args: CreateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionCommandOutput>;
  createFunction(args: CreateFunctionCommandInput, cb: (err: any, data?: CreateFunctionCommandOutput) => void): void;
  createFunction(
    args: CreateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFunctionUrlConfigCommand}
   */
  createFunctionUrlConfig(
    args: CreateFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionUrlConfigCommandOutput>;
  createFunctionUrlConfig(
    args: CreateFunctionUrlConfigCommandInput,
    cb: (err: any, data?: CreateFunctionUrlConfigCommandOutput) => void
  ): void;
  createFunctionUrlConfig(
    args: CreateFunctionUrlConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionUrlConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAliasCommand}
   */
  deleteAlias(args: DeleteAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAliasCommandOutput>;
  deleteAlias(args: DeleteAliasCommandInput, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
  deleteAlias(
    args: DeleteAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCodeSigningConfigCommand}
   */
  deleteCodeSigningConfig(
    args: DeleteCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCodeSigningConfigCommandOutput>;
  deleteCodeSigningConfig(
    args: DeleteCodeSigningConfigCommandInput,
    cb: (err: any, data?: DeleteCodeSigningConfigCommandOutput) => void
  ): void;
  deleteCodeSigningConfig(
    args: DeleteCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCodeSigningConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventSourceMappingCommand}
   */
  deleteEventSourceMapping(
    args: DeleteEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventSourceMappingCommandOutput>;
  deleteEventSourceMapping(
    args: DeleteEventSourceMappingCommandInput,
    cb: (err: any, data?: DeleteEventSourceMappingCommandOutput) => void
  ): void;
  deleteEventSourceMapping(
    args: DeleteEventSourceMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventSourceMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFunctionCommand}
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionCommandOutput>;
  deleteFunction(args: DeleteFunctionCommandInput, cb: (err: any, data?: DeleteFunctionCommandOutput) => void): void;
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFunctionCodeSigningConfigCommand}
   */
  deleteFunctionCodeSigningConfig(
    args: DeleteFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionCodeSigningConfigCommandOutput>;
  deleteFunctionCodeSigningConfig(
    args: DeleteFunctionCodeSigningConfigCommandInput,
    cb: (err: any, data?: DeleteFunctionCodeSigningConfigCommandOutput) => void
  ): void;
  deleteFunctionCodeSigningConfig(
    args: DeleteFunctionCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionCodeSigningConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFunctionConcurrencyCommand}
   */
  deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionConcurrencyCommandOutput>;
  deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyCommandInput,
    cb: (err: any, data?: DeleteFunctionConcurrencyCommandOutput) => void
  ): void;
  deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionConcurrencyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFunctionEventInvokeConfigCommand}
   */
  deleteFunctionEventInvokeConfig(
    args: DeleteFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionEventInvokeConfigCommandOutput>;
  deleteFunctionEventInvokeConfig(
    args: DeleteFunctionEventInvokeConfigCommandInput,
    cb: (err: any, data?: DeleteFunctionEventInvokeConfigCommandOutput) => void
  ): void;
  deleteFunctionEventInvokeConfig(
    args: DeleteFunctionEventInvokeConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionEventInvokeConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFunctionUrlConfigCommand}
   */
  deleteFunctionUrlConfig(
    args: DeleteFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionUrlConfigCommandOutput>;
  deleteFunctionUrlConfig(
    args: DeleteFunctionUrlConfigCommandInput,
    cb: (err: any, data?: DeleteFunctionUrlConfigCommandOutput) => void
  ): void;
  deleteFunctionUrlConfig(
    args: DeleteFunctionUrlConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionUrlConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLayerVersionCommand}
   */
  deleteLayerVersion(
    args: DeleteLayerVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLayerVersionCommandOutput>;
  deleteLayerVersion(
    args: DeleteLayerVersionCommandInput,
    cb: (err: any, data?: DeleteLayerVersionCommandOutput) => void
  ): void;
  deleteLayerVersion(
    args: DeleteLayerVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLayerVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProvisionedConcurrencyConfigCommand}
   */
  deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProvisionedConcurrencyConfigCommandOutput>;
  deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    cb: (err: any, data?: DeleteProvisionedConcurrencyConfigCommandOutput) => void
  ): void;
  deleteProvisionedConcurrencyConfig(
    args: DeleteProvisionedConcurrencyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProvisionedConcurrencyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAliasCommand}
   */
  getAlias(args: GetAliasCommandInput, options?: __HttpHandlerOptions): Promise<GetAliasCommandOutput>;
  getAlias(args: GetAliasCommandInput, cb: (err: any, data?: GetAliasCommandOutput) => void): void;
  getAlias(
    args: GetAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCodeSigningConfigCommand}
   */
  getCodeSigningConfig(
    args: GetCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCodeSigningConfigCommandOutput>;
  getCodeSigningConfig(
    args: GetCodeSigningConfigCommandInput,
    cb: (err: any, data?: GetCodeSigningConfigCommandOutput) => void
  ): void;
  getCodeSigningConfig(
    args: GetCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCodeSigningConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventSourceMappingCommand}
   */
  getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventSourceMappingCommandOutput>;
  getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    cb: (err: any, data?: GetEventSourceMappingCommandOutput) => void
  ): void;
  getEventSourceMapping(
    args: GetEventSourceMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventSourceMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionCommand}
   */
  getFunction(args: GetFunctionCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionCommandOutput>;
  getFunction(args: GetFunctionCommandInput, cb: (err: any, data?: GetFunctionCommandOutput) => void): void;
  getFunction(
    args: GetFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionCodeSigningConfigCommand}
   */
  getFunctionCodeSigningConfig(
    args: GetFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionCodeSigningConfigCommandOutput>;
  getFunctionCodeSigningConfig(
    args: GetFunctionCodeSigningConfigCommandInput,
    cb: (err: any, data?: GetFunctionCodeSigningConfigCommandOutput) => void
  ): void;
  getFunctionCodeSigningConfig(
    args: GetFunctionCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionCodeSigningConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionConcurrencyCommand}
   */
  getFunctionConcurrency(
    args: GetFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionConcurrencyCommandOutput>;
  getFunctionConcurrency(
    args: GetFunctionConcurrencyCommandInput,
    cb: (err: any, data?: GetFunctionConcurrencyCommandOutput) => void
  ): void;
  getFunctionConcurrency(
    args: GetFunctionConcurrencyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionConcurrencyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionConfigurationCommand}
   */
  getFunctionConfiguration(
    args: GetFunctionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionConfigurationCommandOutput>;
  getFunctionConfiguration(
    args: GetFunctionConfigurationCommandInput,
    cb: (err: any, data?: GetFunctionConfigurationCommandOutput) => void
  ): void;
  getFunctionConfiguration(
    args: GetFunctionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionEventInvokeConfigCommand}
   */
  getFunctionEventInvokeConfig(
    args: GetFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionEventInvokeConfigCommandOutput>;
  getFunctionEventInvokeConfig(
    args: GetFunctionEventInvokeConfigCommandInput,
    cb: (err: any, data?: GetFunctionEventInvokeConfigCommandOutput) => void
  ): void;
  getFunctionEventInvokeConfig(
    args: GetFunctionEventInvokeConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionEventInvokeConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionUrlConfigCommand}
   */
  getFunctionUrlConfig(
    args: GetFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFunctionUrlConfigCommandOutput>;
  getFunctionUrlConfig(
    args: GetFunctionUrlConfigCommandInput,
    cb: (err: any, data?: GetFunctionUrlConfigCommandOutput) => void
  ): void;
  getFunctionUrlConfig(
    args: GetFunctionUrlConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionUrlConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLayerVersionCommand}
   */
  getLayerVersion(
    args: GetLayerVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLayerVersionCommandOutput>;
  getLayerVersion(args: GetLayerVersionCommandInput, cb: (err: any, data?: GetLayerVersionCommandOutput) => void): void;
  getLayerVersion(
    args: GetLayerVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLayerVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLayerVersionByArnCommand}
   */
  getLayerVersionByArn(
    args: GetLayerVersionByArnCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLayerVersionByArnCommandOutput>;
  getLayerVersionByArn(
    args: GetLayerVersionByArnCommandInput,
    cb: (err: any, data?: GetLayerVersionByArnCommandOutput) => void
  ): void;
  getLayerVersionByArn(
    args: GetLayerVersionByArnCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLayerVersionByArnCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLayerVersionPolicyCommand}
   */
  getLayerVersionPolicy(
    args: GetLayerVersionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLayerVersionPolicyCommandOutput>;
  getLayerVersionPolicy(
    args: GetLayerVersionPolicyCommandInput,
    cb: (err: any, data?: GetLayerVersionPolicyCommandOutput) => void
  ): void;
  getLayerVersionPolicy(
    args: GetLayerVersionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLayerVersionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProvisionedConcurrencyConfigCommand}
   */
  getProvisionedConcurrencyConfig(
    args: GetProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProvisionedConcurrencyConfigCommandOutput>;
  getProvisionedConcurrencyConfig(
    args: GetProvisionedConcurrencyConfigCommandInput,
    cb: (err: any, data?: GetProvisionedConcurrencyConfigCommandOutput) => void
  ): void;
  getProvisionedConcurrencyConfig(
    args: GetProvisionedConcurrencyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProvisionedConcurrencyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuntimeManagementConfigCommand}
   */
  getRuntimeManagementConfig(
    args: GetRuntimeManagementConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRuntimeManagementConfigCommandOutput>;
  getRuntimeManagementConfig(
    args: GetRuntimeManagementConfigCommandInput,
    cb: (err: any, data?: GetRuntimeManagementConfigCommandOutput) => void
  ): void;
  getRuntimeManagementConfig(
    args: GetRuntimeManagementConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuntimeManagementConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeCommand}
   */
  invoke(args: InvokeCommandInput, options?: __HttpHandlerOptions): Promise<InvokeCommandOutput>;
  invoke(args: InvokeCommandInput, cb: (err: any, data?: InvokeCommandOutput) => void): void;
  invoke(
    args: InvokeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeAsyncCommand}
   */
  invokeAsync(args: InvokeAsyncCommandInput, options?: __HttpHandlerOptions): Promise<InvokeAsyncCommandOutput>;
  invokeAsync(args: InvokeAsyncCommandInput, cb: (err: any, data?: InvokeAsyncCommandOutput) => void): void;
  invokeAsync(
    args: InvokeAsyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeAsyncCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeWithResponseStreamCommand}
   */
  invokeWithResponseStream(
    args: InvokeWithResponseStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeWithResponseStreamCommandOutput>;
  invokeWithResponseStream(
    args: InvokeWithResponseStreamCommandInput,
    cb: (err: any, data?: InvokeWithResponseStreamCommandOutput) => void
  ): void;
  invokeWithResponseStream(
    args: InvokeWithResponseStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeWithResponseStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(args: ListAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAliasesCommandOutput>;
  listAliases(args: ListAliasesCommandInput, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
  listAliases(
    args: ListAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeSigningConfigsCommand}
   */
  listCodeSigningConfigs(
    args: ListCodeSigningConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCodeSigningConfigsCommandOutput>;
  listCodeSigningConfigs(
    args: ListCodeSigningConfigsCommandInput,
    cb: (err: any, data?: ListCodeSigningConfigsCommandOutput) => void
  ): void;
  listCodeSigningConfigs(
    args: ListCodeSigningConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCodeSigningConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventSourceMappingsCommand}
   */
  listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventSourceMappingsCommandOutput>;
  listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    cb: (err: any, data?: ListEventSourceMappingsCommandOutput) => void
  ): void;
  listEventSourceMappings(
    args: ListEventSourceMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventSourceMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFunctionEventInvokeConfigsCommand}
   */
  listFunctionEventInvokeConfigs(
    args: ListFunctionEventInvokeConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionEventInvokeConfigsCommandOutput>;
  listFunctionEventInvokeConfigs(
    args: ListFunctionEventInvokeConfigsCommandInput,
    cb: (err: any, data?: ListFunctionEventInvokeConfigsCommandOutput) => void
  ): void;
  listFunctionEventInvokeConfigs(
    args: ListFunctionEventInvokeConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionEventInvokeConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFunctionsCommand}
   */
  listFunctions(args: ListFunctionsCommandInput, options?: __HttpHandlerOptions): Promise<ListFunctionsCommandOutput>;
  listFunctions(args: ListFunctionsCommandInput, cb: (err: any, data?: ListFunctionsCommandOutput) => void): void;
  listFunctions(
    args: ListFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFunctionsByCodeSigningConfigCommand}
   */
  listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionsByCodeSigningConfigCommandOutput>;
  listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    cb: (err: any, data?: ListFunctionsByCodeSigningConfigCommandOutput) => void
  ): void;
  listFunctionsByCodeSigningConfig(
    args: ListFunctionsByCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionsByCodeSigningConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFunctionUrlConfigsCommand}
   */
  listFunctionUrlConfigs(
    args: ListFunctionUrlConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionUrlConfigsCommandOutput>;
  listFunctionUrlConfigs(
    args: ListFunctionUrlConfigsCommandInput,
    cb: (err: any, data?: ListFunctionUrlConfigsCommandOutput) => void
  ): void;
  listFunctionUrlConfigs(
    args: ListFunctionUrlConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionUrlConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLayersCommand}
   */
  listLayers(args: ListLayersCommandInput, options?: __HttpHandlerOptions): Promise<ListLayersCommandOutput>;
  listLayers(args: ListLayersCommandInput, cb: (err: any, data?: ListLayersCommandOutput) => void): void;
  listLayers(
    args: ListLayersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLayersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLayerVersionsCommand}
   */
  listLayerVersions(
    args: ListLayerVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLayerVersionsCommandOutput>;
  listLayerVersions(
    args: ListLayerVersionsCommandInput,
    cb: (err: any, data?: ListLayerVersionsCommandOutput) => void
  ): void;
  listLayerVersions(
    args: ListLayerVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLayerVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProvisionedConcurrencyConfigsCommand}
   */
  listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisionedConcurrencyConfigsCommandOutput>;
  listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    cb: (err: any, data?: ListProvisionedConcurrencyConfigsCommandOutput) => void
  ): void;
  listProvisionedConcurrencyConfigs(
    args: ListProvisionedConcurrencyConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisionedConcurrencyConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVersionsByFunctionCommand}
   */
  listVersionsByFunction(
    args: ListVersionsByFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVersionsByFunctionCommandOutput>;
  listVersionsByFunction(
    args: ListVersionsByFunctionCommandInput,
    cb: (err: any, data?: ListVersionsByFunctionCommandOutput) => void
  ): void;
  listVersionsByFunction(
    args: ListVersionsByFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVersionsByFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishLayerVersionCommand}
   */
  publishLayerVersion(
    args: PublishLayerVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishLayerVersionCommandOutput>;
  publishLayerVersion(
    args: PublishLayerVersionCommandInput,
    cb: (err: any, data?: PublishLayerVersionCommandOutput) => void
  ): void;
  publishLayerVersion(
    args: PublishLayerVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishLayerVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishVersionCommand}
   */
  publishVersion(
    args: PublishVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishVersionCommandOutput>;
  publishVersion(args: PublishVersionCommandInput, cb: (err: any, data?: PublishVersionCommandOutput) => void): void;
  publishVersion(
    args: PublishVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFunctionCodeSigningConfigCommand}
   */
  putFunctionCodeSigningConfig(
    args: PutFunctionCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFunctionCodeSigningConfigCommandOutput>;
  putFunctionCodeSigningConfig(
    args: PutFunctionCodeSigningConfigCommandInput,
    cb: (err: any, data?: PutFunctionCodeSigningConfigCommandOutput) => void
  ): void;
  putFunctionCodeSigningConfig(
    args: PutFunctionCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFunctionCodeSigningConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFunctionConcurrencyCommand}
   */
  putFunctionConcurrency(
    args: PutFunctionConcurrencyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFunctionConcurrencyCommandOutput>;
  putFunctionConcurrency(
    args: PutFunctionConcurrencyCommandInput,
    cb: (err: any, data?: PutFunctionConcurrencyCommandOutput) => void
  ): void;
  putFunctionConcurrency(
    args: PutFunctionConcurrencyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFunctionConcurrencyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFunctionEventInvokeConfigCommand}
   */
  putFunctionEventInvokeConfig(
    args: PutFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFunctionEventInvokeConfigCommandOutput>;
  putFunctionEventInvokeConfig(
    args: PutFunctionEventInvokeConfigCommandInput,
    cb: (err: any, data?: PutFunctionEventInvokeConfigCommandOutput) => void
  ): void;
  putFunctionEventInvokeConfig(
    args: PutFunctionEventInvokeConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFunctionEventInvokeConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link PutProvisionedConcurrencyConfigCommand}
   */
  putProvisionedConcurrencyConfig(
    args: PutProvisionedConcurrencyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProvisionedConcurrencyConfigCommandOutput>;
  putProvisionedConcurrencyConfig(
    args: PutProvisionedConcurrencyConfigCommandInput,
    cb: (err: any, data?: PutProvisionedConcurrencyConfigCommandOutput) => void
  ): void;
  putProvisionedConcurrencyConfig(
    args: PutProvisionedConcurrencyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProvisionedConcurrencyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRuntimeManagementConfigCommand}
   */
  putRuntimeManagementConfig(
    args: PutRuntimeManagementConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRuntimeManagementConfigCommandOutput>;
  putRuntimeManagementConfig(
    args: PutRuntimeManagementConfigCommandInput,
    cb: (err: any, data?: PutRuntimeManagementConfigCommandOutput) => void
  ): void;
  putRuntimeManagementConfig(
    args: PutRuntimeManagementConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRuntimeManagementConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveLayerVersionPermissionCommand}
   */
  removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveLayerVersionPermissionCommandOutput>;
  removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionCommandInput,
    cb: (err: any, data?: RemoveLayerVersionPermissionCommandOutput) => void
  ): void;
  removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveLayerVersionPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemovePermissionCommandOutput>;
  removePermission(
    args: RemovePermissionCommandInput,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  removePermission(
    args: RemovePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
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
   * @see {@link UpdateAliasCommand}
   */
  updateAlias(args: UpdateAliasCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAliasCommandOutput>;
  updateAlias(args: UpdateAliasCommandInput, cb: (err: any, data?: UpdateAliasCommandOutput) => void): void;
  updateAlias(
    args: UpdateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCodeSigningConfigCommand}
   */
  updateCodeSigningConfig(
    args: UpdateCodeSigningConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCodeSigningConfigCommandOutput>;
  updateCodeSigningConfig(
    args: UpdateCodeSigningConfigCommandInput,
    cb: (err: any, data?: UpdateCodeSigningConfigCommandOutput) => void
  ): void;
  updateCodeSigningConfig(
    args: UpdateCodeSigningConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCodeSigningConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventSourceMappingCommand}
   */
  updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventSourceMappingCommandOutput>;
  updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    cb: (err: any, data?: UpdateEventSourceMappingCommandOutput) => void
  ): void;
  updateEventSourceMapping(
    args: UpdateEventSourceMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventSourceMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFunctionCodeCommand}
   */
  updateFunctionCode(
    args: UpdateFunctionCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionCodeCommandOutput>;
  updateFunctionCode(
    args: UpdateFunctionCodeCommandInput,
    cb: (err: any, data?: UpdateFunctionCodeCommandOutput) => void
  ): void;
  updateFunctionCode(
    args: UpdateFunctionCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFunctionConfigurationCommand}
   */
  updateFunctionConfiguration(
    args: UpdateFunctionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionConfigurationCommandOutput>;
  updateFunctionConfiguration(
    args: UpdateFunctionConfigurationCommandInput,
    cb: (err: any, data?: UpdateFunctionConfigurationCommandOutput) => void
  ): void;
  updateFunctionConfiguration(
    args: UpdateFunctionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFunctionEventInvokeConfigCommand}
   */
  updateFunctionEventInvokeConfig(
    args: UpdateFunctionEventInvokeConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionEventInvokeConfigCommandOutput>;
  updateFunctionEventInvokeConfig(
    args: UpdateFunctionEventInvokeConfigCommandInput,
    cb: (err: any, data?: UpdateFunctionEventInvokeConfigCommandOutput) => void
  ): void;
  updateFunctionEventInvokeConfig(
    args: UpdateFunctionEventInvokeConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionEventInvokeConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFunctionUrlConfigCommand}
   */
  updateFunctionUrlConfig(
    args: UpdateFunctionUrlConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionUrlConfigCommandOutput>;
  updateFunctionUrlConfig(
    args: UpdateFunctionUrlConfigCommandInput,
    cb: (err: any, data?: UpdateFunctionUrlConfigCommandOutput) => void
  ): void;
  updateFunctionUrlConfig(
    args: UpdateFunctionUrlConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionUrlConfigCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Lambda</fullname>
 *          <p>
 *             <b>Overview</b>
 *          </p>
 *          <p>Lambda is a compute service that lets you run code without provisioning or managing servers.
 *         Lambda runs your code on a high-availability compute infrastructure and performs all of the
 *       administration of the compute resources, including server and operating system maintenance, capacity provisioning
 *       and automatic scaling, code monitoring and logging. With Lambda, you can run code for virtually any
 *       type of application or backend service. For more information about the Lambda service, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is Lambda</a> in the <b>Lambda Developer Guide</b>.</p>
 *          <p>The <i>Lambda API Reference</i> provides information about
 *       each of the API methods, including details about the parameters in each API request and
 *       response. </p>
 *          <p></p>
 *          <p>You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command
 *       line tools to access the API. For installation instructions, see <a href="http://aws.amazon.com/tools/">Tools for
 *         Amazon Web Services</a>. </p>
 *          <p>For a list of Region-specific endpoints that Lambda supports,
 *       see <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html/">Lambda
 *         endpoints and quotas </a> in the <i>Amazon Web Services General Reference.</i>. </p>
 *          <p>When making the API calls, you will need to
 *       authenticate your request by providing a signature. Lambda supports signature version 4. For more information,
 *       see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a> in the
 *       <i>Amazon Web Services General Reference.</i>. </p>
 *          <p>
 *             <b>CA certificates</b>
 *          </p>
 *          <p>Because Amazon Web Services SDKs use the CA certificates from your computer, changes to the certificates on the Amazon Web Services servers
 *         can cause connection failures when you attempt to use an SDK. You can prevent these failures by keeping your
 *         computer's CA certificates and operating system up-to-date. If you encounter this issue in a corporate
 *         environment and do not manage your own computer, you might need to ask an administrator to assist with the
 *         update process. The following list shows minimum operating system and Java versions:</p>
 *          <ul>
 *             <li>
 *                <p>Microsoft Windows versions that have updates from January 2005 or later installed contain at least one
 *             of the required CAs in their trust list. </p>
 *             </li>
 *             <li>
 *                <p>Mac OS X 10.4 with Java for Mac OS X 10.4 Release 5 (February 2007), Mac OS X 10.5 (October 2007), and
 *             later versions contain at least one of the required CAs in their trust list. </p>
 *             </li>
 *             <li>
 *                <p>Red Hat Enterprise Linux 5 (March 2007), 6, and 7 and CentOS 5, 6, and 7 all contain at least one of the
 *             required CAs in their default trusted CA list. </p>
 *             </li>
 *             <li>
 *                <p>Java 1.4.2_12 (May 2006), 5 Update 2 (March 2005), and all later versions, including Java 6 (December
 *             2006), 7, and 8, contain at least one of the required CAs in their default trusted CA list. </p>
 *             </li>
 *          </ul>
 *          <p>When accessing the Lambda management console or Lambda API endpoints, whether through browsers or
 *         programmatically, you will need to ensure your client machines support any of the following CAs: </p>
 *          <ul>
 *             <li>
 *                <p>Amazon Root CA 1</p>
 *             </li>
 *             <li>
 *                <p>Starfield Services Root Certificate Authority - G2</p>
 *             </li>
 *             <li>
 *                <p>Starfield Class 2 Certification Authority</p>
 *             </li>
 *          </ul>
 *          <p>Root certificates from the first two authorities are available from <a href="https://www.amazontrust.com/repository/">Amazon trust services</a>, but keeping your computer
 *         up-to-date is the more straightforward solution. To learn more about ACM-provided certificates, see <a href="http://aws.amazon.com/certificate-manager/faqs/#certificates">Amazon Web Services Certificate Manager FAQs.</a>
 *          </p>
 */
export class Lambda extends LambdaClient implements Lambda {}
createAggregatedClient(commands, Lambda);
