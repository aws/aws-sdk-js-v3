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
import {
  GetConfigurationCheckOperationCommand,
  GetConfigurationCheckOperationCommandInput,
  GetConfigurationCheckOperationCommandOutput,
} from "./commands/GetConfigurationCheckOperationCommand";
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
  ListConfigurationCheckDefinitionsCommand,
  ListConfigurationCheckDefinitionsCommandInput,
  ListConfigurationCheckDefinitionsCommandOutput,
} from "./commands/ListConfigurationCheckDefinitionsCommand";
import {
  ListConfigurationCheckOperationsCommand,
  ListConfigurationCheckOperationsCommandInput,
  ListConfigurationCheckOperationsCommandOutput,
} from "./commands/ListConfigurationCheckOperationsCommand";
import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "./commands/ListDatabasesCommand";
import {
  ListOperationEventsCommand,
  ListOperationEventsCommandInput,
  ListOperationEventsCommandOutput,
} from "./commands/ListOperationEventsCommand";
import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "./commands/ListOperationsCommand";
import {
  ListSubCheckResultsCommand,
  ListSubCheckResultsCommandInput,
  ListSubCheckResultsCommandOutput,
} from "./commands/ListSubCheckResultsCommand";
import {
  ListSubCheckRuleResultsCommand,
  ListSubCheckRuleResultsCommandInput,
  ListSubCheckRuleResultsCommandOutput,
} from "./commands/ListSubCheckRuleResultsCommand";
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
import {
  StartApplicationCommand,
  StartApplicationCommandInput,
  StartApplicationCommandOutput,
} from "./commands/StartApplicationCommand";
import {
  StartApplicationRefreshCommand,
  StartApplicationRefreshCommandInput,
  StartApplicationRefreshCommandOutput,
} from "./commands/StartApplicationRefreshCommand";
import {
  StartConfigurationChecksCommand,
  StartConfigurationChecksCommandInput,
  StartConfigurationChecksCommandOutput,
} from "./commands/StartConfigurationChecksCommand";
import {
  StopApplicationCommand,
  StopApplicationCommandInput,
  StopApplicationCommandOutput,
} from "./commands/StopApplicationCommand";
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
  GetConfigurationCheckOperationCommand,
  GetDatabaseCommand,
  GetOperationCommand,
  GetResourcePermissionCommand,
  ListApplicationsCommand,
  ListComponentsCommand,
  ListConfigurationCheckDefinitionsCommand,
  ListConfigurationCheckOperationsCommand,
  ListDatabasesCommand,
  ListOperationEventsCommand,
  ListOperationsCommand,
  ListSubCheckResultsCommand,
  ListSubCheckRuleResultsCommand,
  ListTagsForResourceCommand,
  PutResourcePermissionCommand,
  RegisterApplicationCommand,
  StartApplicationCommand,
  StartApplicationRefreshCommand,
  StartConfigurationChecksCommand,
  StopApplicationCommand,
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
  getApplication(): Promise<GetApplicationCommandOutput>;
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
   * @see {@link GetConfigurationCheckOperationCommand}
   */
  getConfigurationCheckOperation(
    args: GetConfigurationCheckOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationCheckOperationCommandOutput>;
  getConfigurationCheckOperation(
    args: GetConfigurationCheckOperationCommandInput,
    cb: (err: any, data?: GetConfigurationCheckOperationCommandOutput) => void
  ): void;
  getConfigurationCheckOperation(
    args: GetConfigurationCheckOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationCheckOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatabaseCommand}
   */
  getDatabase(): Promise<GetDatabaseCommandOutput>;
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
  listApplications(): Promise<ListApplicationsCommandOutput>;
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
  listComponents(): Promise<ListComponentsCommandOutput>;
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
   * @see {@link ListConfigurationCheckDefinitionsCommand}
   */
  listConfigurationCheckDefinitions(): Promise<ListConfigurationCheckDefinitionsCommandOutput>;
  listConfigurationCheckDefinitions(
    args: ListConfigurationCheckDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationCheckDefinitionsCommandOutput>;
  listConfigurationCheckDefinitions(
    args: ListConfigurationCheckDefinitionsCommandInput,
    cb: (err: any, data?: ListConfigurationCheckDefinitionsCommandOutput) => void
  ): void;
  listConfigurationCheckDefinitions(
    args: ListConfigurationCheckDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationCheckDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationCheckOperationsCommand}
   */
  listConfigurationCheckOperations(
    args: ListConfigurationCheckOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationCheckOperationsCommandOutput>;
  listConfigurationCheckOperations(
    args: ListConfigurationCheckOperationsCommandInput,
    cb: (err: any, data?: ListConfigurationCheckOperationsCommandOutput) => void
  ): void;
  listConfigurationCheckOperations(
    args: ListConfigurationCheckOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationCheckOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatabasesCommand}
   */
  listDatabases(): Promise<ListDatabasesCommandOutput>;
  listDatabases(args: ListDatabasesCommandInput, options?: __HttpHandlerOptions): Promise<ListDatabasesCommandOutput>;
  listDatabases(args: ListDatabasesCommandInput, cb: (err: any, data?: ListDatabasesCommandOutput) => void): void;
  listDatabases(
    args: ListDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOperationEventsCommand}
   */
  listOperationEvents(
    args: ListOperationEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOperationEventsCommandOutput>;
  listOperationEvents(
    args: ListOperationEventsCommandInput,
    cb: (err: any, data?: ListOperationEventsCommandOutput) => void
  ): void;
  listOperationEvents(
    args: ListOperationEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOperationEventsCommandOutput) => void
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
   * @see {@link ListSubCheckResultsCommand}
   */
  listSubCheckResults(
    args: ListSubCheckResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubCheckResultsCommandOutput>;
  listSubCheckResults(
    args: ListSubCheckResultsCommandInput,
    cb: (err: any, data?: ListSubCheckResultsCommandOutput) => void
  ): void;
  listSubCheckResults(
    args: ListSubCheckResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubCheckResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubCheckRuleResultsCommand}
   */
  listSubCheckRuleResults(
    args: ListSubCheckRuleResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubCheckRuleResultsCommandOutput>;
  listSubCheckRuleResults(
    args: ListSubCheckRuleResultsCommandInput,
    cb: (err: any, data?: ListSubCheckRuleResultsCommandOutput) => void
  ): void;
  listSubCheckRuleResults(
    args: ListSubCheckRuleResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubCheckRuleResultsCommandOutput) => void
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
   * @see {@link StartApplicationCommand}
   */
  startApplication(
    args: StartApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartApplicationCommandOutput>;
  startApplication(
    args: StartApplicationCommandInput,
    cb: (err: any, data?: StartApplicationCommandOutput) => void
  ): void;
  startApplication(
    args: StartApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartApplicationRefreshCommand}
   */
  startApplicationRefresh(
    args: StartApplicationRefreshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartApplicationRefreshCommandOutput>;
  startApplicationRefresh(
    args: StartApplicationRefreshCommandInput,
    cb: (err: any, data?: StartApplicationRefreshCommandOutput) => void
  ): void;
  startApplicationRefresh(
    args: StartApplicationRefreshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartApplicationRefreshCommandOutput) => void
  ): void;

  /**
   * @see {@link StartConfigurationChecksCommand}
   */
  startConfigurationChecks(
    args: StartConfigurationChecksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartConfigurationChecksCommandOutput>;
  startConfigurationChecks(
    args: StartConfigurationChecksCommandInput,
    cb: (err: any, data?: StartConfigurationChecksCommandOutput) => void
  ): void;
  startConfigurationChecks(
    args: StartConfigurationChecksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartConfigurationChecksCommandOutput) => void
  ): void;

  /**
   * @see {@link StopApplicationCommand}
   */
  stopApplication(
    args: StopApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopApplicationCommandOutput>;
  stopApplication(args: StopApplicationCommandInput, cb: (err: any, data?: StopApplicationCommandOutput) => void): void;
  stopApplication(
    args: StopApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopApplicationCommandOutput) => void
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
 * <p>This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Systems Manager for SAP. The topic for each action shows the API request parameters and responses. </p>
 * @public
 */
export class SsmSap extends SsmSapClient implements SsmSap {}
createAggregatedClient(commands, SsmSap);
