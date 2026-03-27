// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type DeleteResourcePermissionCommandInput,
  type DeleteResourcePermissionCommandOutput,
  DeleteResourcePermissionCommand,
} from "./commands/DeleteResourcePermissionCommand";
import {
  type DeregisterApplicationCommandInput,
  type DeregisterApplicationCommandOutput,
  DeregisterApplicationCommand,
} from "./commands/DeregisterApplicationCommand";
import {
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetApplicationCommand,
} from "./commands/GetApplicationCommand";
import {
  type GetComponentCommandInput,
  type GetComponentCommandOutput,
  GetComponentCommand,
} from "./commands/GetComponentCommand";
import {
  type GetConfigurationCheckOperationCommandInput,
  type GetConfigurationCheckOperationCommandOutput,
  GetConfigurationCheckOperationCommand,
} from "./commands/GetConfigurationCheckOperationCommand";
import {
  type GetDatabaseCommandInput,
  type GetDatabaseCommandOutput,
  GetDatabaseCommand,
} from "./commands/GetDatabaseCommand";
import {
  type GetOperationCommandInput,
  type GetOperationCommandOutput,
  GetOperationCommand,
} from "./commands/GetOperationCommand";
import {
  type GetResourcePermissionCommandInput,
  type GetResourcePermissionCommandOutput,
  GetResourcePermissionCommand,
} from "./commands/GetResourcePermissionCommand";
import {
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListApplicationsCommand,
} from "./commands/ListApplicationsCommand";
import {
  type ListComponentsCommandInput,
  type ListComponentsCommandOutput,
  ListComponentsCommand,
} from "./commands/ListComponentsCommand";
import {
  type ListConfigurationCheckDefinitionsCommandInput,
  type ListConfigurationCheckDefinitionsCommandOutput,
  ListConfigurationCheckDefinitionsCommand,
} from "./commands/ListConfigurationCheckDefinitionsCommand";
import {
  type ListConfigurationCheckOperationsCommandInput,
  type ListConfigurationCheckOperationsCommandOutput,
  ListConfigurationCheckOperationsCommand,
} from "./commands/ListConfigurationCheckOperationsCommand";
import {
  type ListDatabasesCommandInput,
  type ListDatabasesCommandOutput,
  ListDatabasesCommand,
} from "./commands/ListDatabasesCommand";
import {
  type ListOperationEventsCommandInput,
  type ListOperationEventsCommandOutput,
  ListOperationEventsCommand,
} from "./commands/ListOperationEventsCommand";
import {
  type ListOperationsCommandInput,
  type ListOperationsCommandOutput,
  ListOperationsCommand,
} from "./commands/ListOperationsCommand";
import {
  type ListSubCheckResultsCommandInput,
  type ListSubCheckResultsCommandOutput,
  ListSubCheckResultsCommand,
} from "./commands/ListSubCheckResultsCommand";
import {
  type ListSubCheckRuleResultsCommandInput,
  type ListSubCheckRuleResultsCommandOutput,
  ListSubCheckRuleResultsCommand,
} from "./commands/ListSubCheckRuleResultsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutResourcePermissionCommandInput,
  type PutResourcePermissionCommandOutput,
  PutResourcePermissionCommand,
} from "./commands/PutResourcePermissionCommand";
import {
  type RegisterApplicationCommandInput,
  type RegisterApplicationCommandOutput,
  RegisterApplicationCommand,
} from "./commands/RegisterApplicationCommand";
import {
  type StartApplicationCommandInput,
  type StartApplicationCommandOutput,
  StartApplicationCommand,
} from "./commands/StartApplicationCommand";
import {
  type StartApplicationRefreshCommandInput,
  type StartApplicationRefreshCommandOutput,
  StartApplicationRefreshCommand,
} from "./commands/StartApplicationRefreshCommand";
import {
  type StartConfigurationChecksCommandInput,
  type StartConfigurationChecksCommandOutput,
  StartConfigurationChecksCommand,
} from "./commands/StartConfigurationChecksCommand";
import {
  type StopApplicationCommandInput,
  type StopApplicationCommandOutput,
  StopApplicationCommand,
} from "./commands/StopApplicationCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateApplicationSettingsCommandInput,
  type UpdateApplicationSettingsCommandOutput,
  UpdateApplicationSettingsCommand,
} from "./commands/UpdateApplicationSettingsCommand";
import { paginateListApplications } from "./pagination/ListApplicationsPaginator";
import { paginateListComponents } from "./pagination/ListComponentsPaginator";
import { paginateListConfigurationCheckDefinitions } from "./pagination/ListConfigurationCheckDefinitionsPaginator";
import { paginateListConfigurationCheckOperations } from "./pagination/ListConfigurationCheckOperationsPaginator";
import { paginateListDatabases } from "./pagination/ListDatabasesPaginator";
import { paginateListOperationEvents } from "./pagination/ListOperationEventsPaginator";
import { paginateListOperations } from "./pagination/ListOperationsPaginator";
import { paginateListSubCheckResults } from "./pagination/ListSubCheckResultsPaginator";
import { paginateListSubCheckRuleResults } from "./pagination/ListSubCheckRuleResultsPaginator";
import { SsmSapClient } from "./SsmSapClient";

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
const paginators = {
  paginateListApplications,
  paginateListComponents,
  paginateListConfigurationCheckDefinitions,
  paginateListConfigurationCheckOperations,
  paginateListDatabases,
  paginateListOperationEvents,
  paginateListOperations,
  paginateListSubCheckResults,
  paginateListSubCheckRuleResults,
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
  getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComponentCommand}
   */
  getComponent(
    args: GetComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComponentCommandOutput>;
  getComponent(
    args: GetComponentCommandInput,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;
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
  getDatabase(
    args: GetDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatabaseCommandOutput>;
  getDatabase(
    args: GetDatabaseCommandInput,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;
  getDatabase(
    args: GetDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOperationCommand}
   */
  getOperation(
    args: GetOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOperationCommandOutput>;
  getOperation(
    args: GetOperationCommandInput,
    cb: (err: any, data?: GetOperationCommandOutput) => void
  ): void;
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
  listComponents(
    args: ListComponentsCommandInput,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
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
  listDatabases(
    args: ListDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatabasesCommandOutput>;
  listDatabases(
    args: ListDatabasesCommandInput,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;
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
  listOperations(
    args: ListOperationsCommandInput,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
  ): void;
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
  stopApplication(
    args: StopApplicationCommandInput,
    cb: (err: any, data?: StopApplicationCommandOutput) => void
  ): void;
  stopApplication(
    args: StopApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
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

  /**
   * @see {@link ListApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationsCommandOutput}.
   */
  paginateListApplications(
    args?: ListApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationsCommandOutput>;

  /**
   * @see {@link ListComponentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListComponentsCommandOutput}.
   */
  paginateListComponents(
    args?: ListComponentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListComponentsCommandOutput>;

  /**
   * @see {@link ListConfigurationCheckDefinitionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConfigurationCheckDefinitionsCommandOutput}.
   */
  paginateListConfigurationCheckDefinitions(
    args?: ListConfigurationCheckDefinitionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConfigurationCheckDefinitionsCommandOutput>;

  /**
   * @see {@link ListConfigurationCheckOperationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConfigurationCheckOperationsCommandOutput}.
   */
  paginateListConfigurationCheckOperations(
    args: ListConfigurationCheckOperationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConfigurationCheckOperationsCommandOutput>;

  /**
   * @see {@link ListDatabasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatabasesCommandOutput}.
   */
  paginateListDatabases(
    args?: ListDatabasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatabasesCommandOutput>;

  /**
   * @see {@link ListOperationEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOperationEventsCommandOutput}.
   */
  paginateListOperationEvents(
    args: ListOperationEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOperationEventsCommandOutput>;

  /**
   * @see {@link ListOperationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOperationsCommandOutput}.
   */
  paginateListOperations(
    args: ListOperationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOperationsCommandOutput>;

  /**
   * @see {@link ListSubCheckResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubCheckResultsCommandOutput}.
   */
  paginateListSubCheckResults(
    args: ListSubCheckResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubCheckResultsCommandOutput>;

  /**
   * @see {@link ListSubCheckRuleResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubCheckRuleResultsCommandOutput}.
   */
  paginateListSubCheckRuleResults(
    args: ListSubCheckRuleResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubCheckRuleResultsCommandOutput>;
}

/**
 * <p>This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Systems Manager for SAP. The topic for each action shows the API request parameters and responses. </p>
 * @public
 */
export class SsmSap extends SsmSapClient implements SsmSap {}
createAggregatedClient(commands, SsmSap, { paginators });
