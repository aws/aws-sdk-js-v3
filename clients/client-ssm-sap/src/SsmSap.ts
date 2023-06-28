// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeleteResourcePermissionCommand,
  DeleteResourcePermissionCommandInput,
  DeleteResourcePermissionCommandOutput,
} from "./commands/DeleteResourcePermissionCommand";
import {
  DeregisterApplicationCommand,
  DeregisterApplicationCommandInput,
  DeregisterApplicationCommandOutput,
} from "./commands/DeregisterApplicationCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetComponentCommand,
  GetComponentCommandInput,
  GetComponentCommandOutput,
} from "./commands/GetComponentCommand";
import { GetDatabaseCommand, GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import {
  GetOperationCommand,
  GetOperationCommandInput,
  GetOperationCommandOutput,
} from "./commands/GetOperationCommand";
import {
  GetResourcePermissionCommand,
  GetResourcePermissionCommandInput,
  GetResourcePermissionCommandOutput,
} from "./commands/GetResourcePermissionCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "./commands/ListComponentsCommand";
import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "./commands/ListDatabasesCommand";
import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "./commands/ListOperationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutResourcePermissionCommand,
  PutResourcePermissionCommandInput,
  PutResourcePermissionCommandOutput,
} from "./commands/PutResourcePermissionCommand";
import {
  RegisterApplicationCommand,
  RegisterApplicationCommandInput,
  RegisterApplicationCommandOutput,
} from "./commands/RegisterApplicationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationSettingsCommand,
  UpdateApplicationSettingsCommandInput,
  UpdateApplicationSettingsCommandOutput,
} from "./commands/UpdateApplicationSettingsCommand";
import { SsmSapClient, SsmSapClientConfig } from "./SsmSapClient";

const commands = {
  DeleteResourcePermissionCommand,
  DeregisterApplicationCommand,
  GetApplicationCommand,
  GetComponentCommand,
  GetDatabaseCommand,
  GetOperationCommand,
  GetResourcePermissionCommand,
  ListApplicationsCommand,
  ListComponentsCommand,
  ListDatabasesCommand,
  ListOperationsCommand,
  ListTagsForResourceCommand,
  PutResourcePermissionCommand,
  RegisterApplicationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationSettingsCommand,
};

export interface SsmSap {
  /**
   * @see {@link DeleteResourcePermissionCommand}
   */
  deleteResourcePermission(
    args: DeleteResourcePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePermissionCommandOutput>;
  deleteResourcePermission(
    args: DeleteResourcePermissionCommandInput,
    cb: (err: any, data?: DeleteResourcePermissionCommandOutput) => void
  ): void;
  deleteResourcePermission(
    args: DeleteResourcePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterApplicationCommand}
   */
  deregisterApplication(
    args: DeregisterApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterApplicationCommandOutput>;
  deregisterApplication(
    args: DeregisterApplicationCommandInput,
    cb: (err: any, data?: DeregisterApplicationCommandOutput) => void
  ): void;
  deregisterApplication(
    args: DeregisterApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComponentCommand}
   */
  getComponent(args: GetComponentCommandInput, options?: __HttpHandlerOptions): Promise<GetComponentCommandOutput>;
  getComponent(args: GetComponentCommandInput, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
  getComponent(
    args: GetComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatabaseCommand}
   */
  getDatabase(args: GetDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<GetDatabaseCommandOutput>;
  getDatabase(args: GetDatabaseCommandInput, cb: (err: any, data?: GetDatabaseCommandOutput) => void): void;
  getDatabase(
    args: GetDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOperationCommand}
   */
  getOperation(args: GetOperationCommandInput, options?: __HttpHandlerOptions): Promise<GetOperationCommandOutput>;
  getOperation(args: GetOperationCommandInput, cb: (err: any, data?: GetOperationCommandOutput) => void): void;
  getOperation(
    args: GetOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePermissionCommand}
   */
  getResourcePermission(
    args: GetResourcePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePermissionCommandOutput>;
  getResourcePermission(
    args: GetResourcePermissionCommandInput,
    cb: (err: any, data?: GetResourcePermissionCommandOutput) => void
  ): void;
  getResourcePermission(
    args: GetResourcePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentsCommand}
   */
  listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  listComponents(args: ListComponentsCommandInput, cb: (err: any, data?: ListComponentsCommandOutput) => void): void;
  listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatabasesCommand}
   */
  listDatabases(args: ListDatabasesCommandInput, options?: __HttpHandlerOptions): Promise<ListDatabasesCommandOutput>;
  listDatabases(args: ListDatabasesCommandInput, cb: (err: any, data?: ListDatabasesCommandOutput) => void): void;
  listDatabases(
    args: ListDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOperationsCommand}
   */
  listOperations(
    args: ListOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOperationsCommandOutput>;
  listOperations(args: ListOperationsCommandInput, cb: (err: any, data?: ListOperationsCommandOutput) => void): void;
  listOperations(
    args: ListOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
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
   * @see {@link PutResourcePermissionCommand}
   */
  putResourcePermission(
    args: PutResourcePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePermissionCommandOutput>;
  putResourcePermission(
    args: PutResourcePermissionCommandInput,
    cb: (err: any, data?: PutResourcePermissionCommandOutput) => void
  ): void;
  putResourcePermission(
    args: PutResourcePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterApplicationCommand}
   */
  registerApplication(
    args: RegisterApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterApplicationCommandOutput>;
  registerApplication(
    args: RegisterApplicationCommandInput,
    cb: (err: any, data?: RegisterApplicationCommandOutput) => void
  ): void;
  registerApplication(
    args: RegisterApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterApplicationCommandOutput) => void
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
   * @see {@link UpdateApplicationSettingsCommand}
   */
  updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationSettingsCommandOutput>;
  updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    cb: (err: any, data?: UpdateApplicationSettingsCommandOutput) => void
  ): void;
  updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationSettingsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This API reference provides descriptions, syntax, and other details about each of the
 *          actions and data types for AWS Systems Manager for SAP. The topic for each action shows
 *          the API request parameters and responses. </p>
 */
export class SsmSap extends SsmSapClient implements SsmSap {}
createAggregatedClient(commands, SsmSap);
