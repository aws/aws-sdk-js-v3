// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AmpClient, AmpClientConfig } from "./AmpClient";
import {
  CreateAlertManagerDefinitionCommand,
  CreateAlertManagerDefinitionCommandInput,
  CreateAlertManagerDefinitionCommandOutput,
} from "./commands/CreateAlertManagerDefinitionCommand";
import {
  CreateLoggingConfigurationCommand,
  CreateLoggingConfigurationCommandInput,
  CreateLoggingConfigurationCommandOutput,
} from "./commands/CreateLoggingConfigurationCommand";
import {
  CreateQueryLoggingConfigurationCommand,
  CreateQueryLoggingConfigurationCommandInput,
  CreateQueryLoggingConfigurationCommandOutput,
} from "./commands/CreateQueryLoggingConfigurationCommand";
import {
  CreateRuleGroupsNamespaceCommand,
  CreateRuleGroupsNamespaceCommandInput,
  CreateRuleGroupsNamespaceCommandOutput,
} from "./commands/CreateRuleGroupsNamespaceCommand";
import {
  CreateScraperCommand,
  CreateScraperCommandInput,
  CreateScraperCommandOutput,
} from "./commands/CreateScraperCommand";
import {
  CreateWorkspaceCommand,
  CreateWorkspaceCommandInput,
  CreateWorkspaceCommandOutput,
} from "./commands/CreateWorkspaceCommand";
import {
  DeleteAlertManagerDefinitionCommand,
  DeleteAlertManagerDefinitionCommandInput,
  DeleteAlertManagerDefinitionCommandOutput,
} from "./commands/DeleteAlertManagerDefinitionCommand";
import {
  DeleteLoggingConfigurationCommand,
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput,
} from "./commands/DeleteLoggingConfigurationCommand";
import {
  DeleteQueryLoggingConfigurationCommand,
  DeleteQueryLoggingConfigurationCommandInput,
  DeleteQueryLoggingConfigurationCommandOutput,
} from "./commands/DeleteQueryLoggingConfigurationCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteRuleGroupsNamespaceCommand,
  DeleteRuleGroupsNamespaceCommandInput,
  DeleteRuleGroupsNamespaceCommandOutput,
} from "./commands/DeleteRuleGroupsNamespaceCommand";
import {
  DeleteScraperCommand,
  DeleteScraperCommandInput,
  DeleteScraperCommandOutput,
} from "./commands/DeleteScraperCommand";
import {
  DeleteWorkspaceCommand,
  DeleteWorkspaceCommandInput,
  DeleteWorkspaceCommandOutput,
} from "./commands/DeleteWorkspaceCommand";
import {
  DescribeAlertManagerDefinitionCommand,
  DescribeAlertManagerDefinitionCommandInput,
  DescribeAlertManagerDefinitionCommandOutput,
} from "./commands/DescribeAlertManagerDefinitionCommand";
import {
  DescribeLoggingConfigurationCommand,
  DescribeLoggingConfigurationCommandInput,
  DescribeLoggingConfigurationCommandOutput,
} from "./commands/DescribeLoggingConfigurationCommand";
import {
  DescribeQueryLoggingConfigurationCommand,
  DescribeQueryLoggingConfigurationCommandInput,
  DescribeQueryLoggingConfigurationCommandOutput,
} from "./commands/DescribeQueryLoggingConfigurationCommand";
import {
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import {
  DescribeRuleGroupsNamespaceCommand,
  DescribeRuleGroupsNamespaceCommandInput,
  DescribeRuleGroupsNamespaceCommandOutput,
} from "./commands/DescribeRuleGroupsNamespaceCommand";
import {
  DescribeScraperCommand,
  DescribeScraperCommandInput,
  DescribeScraperCommandOutput,
} from "./commands/DescribeScraperCommand";
import {
  DescribeWorkspaceCommand,
  DescribeWorkspaceCommandInput,
  DescribeWorkspaceCommandOutput,
} from "./commands/DescribeWorkspaceCommand";
import {
  DescribeWorkspaceConfigurationCommand,
  DescribeWorkspaceConfigurationCommandInput,
  DescribeWorkspaceConfigurationCommandOutput,
} from "./commands/DescribeWorkspaceConfigurationCommand";
import {
  GetDefaultScraperConfigurationCommand,
  GetDefaultScraperConfigurationCommandInput,
  GetDefaultScraperConfigurationCommandOutput,
} from "./commands/GetDefaultScraperConfigurationCommand";
import {
  ListRuleGroupsNamespacesCommand,
  ListRuleGroupsNamespacesCommandInput,
  ListRuleGroupsNamespacesCommandOutput,
} from "./commands/ListRuleGroupsNamespacesCommand";
import {
  ListScrapersCommand,
  ListScrapersCommandInput,
  ListScrapersCommandOutput,
} from "./commands/ListScrapersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "./commands/ListWorkspacesCommand";
import {
  PutAlertManagerDefinitionCommand,
  PutAlertManagerDefinitionCommandInput,
  PutAlertManagerDefinitionCommandOutput,
} from "./commands/PutAlertManagerDefinitionCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  PutRuleGroupsNamespaceCommand,
  PutRuleGroupsNamespaceCommandInput,
  PutRuleGroupsNamespaceCommandOutput,
} from "./commands/PutRuleGroupsNamespaceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateLoggingConfigurationCommand,
  UpdateLoggingConfigurationCommandInput,
  UpdateLoggingConfigurationCommandOutput,
} from "./commands/UpdateLoggingConfigurationCommand";
import {
  UpdateQueryLoggingConfigurationCommand,
  UpdateQueryLoggingConfigurationCommandInput,
  UpdateQueryLoggingConfigurationCommandOutput,
} from "./commands/UpdateQueryLoggingConfigurationCommand";
import {
  UpdateScraperCommand,
  UpdateScraperCommandInput,
  UpdateScraperCommandOutput,
} from "./commands/UpdateScraperCommand";
import {
  UpdateWorkspaceAliasCommand,
  UpdateWorkspaceAliasCommandInput,
  UpdateWorkspaceAliasCommandOutput,
} from "./commands/UpdateWorkspaceAliasCommand";
import {
  UpdateWorkspaceConfigurationCommand,
  UpdateWorkspaceConfigurationCommandInput,
  UpdateWorkspaceConfigurationCommandOutput,
} from "./commands/UpdateWorkspaceConfigurationCommand";

const commands = {
  CreateAlertManagerDefinitionCommand,
  CreateLoggingConfigurationCommand,
  CreateQueryLoggingConfigurationCommand,
  CreateRuleGroupsNamespaceCommand,
  CreateScraperCommand,
  CreateWorkspaceCommand,
  DeleteAlertManagerDefinitionCommand,
  DeleteLoggingConfigurationCommand,
  DeleteQueryLoggingConfigurationCommand,
  DeleteResourcePolicyCommand,
  DeleteRuleGroupsNamespaceCommand,
  DeleteScraperCommand,
  DeleteWorkspaceCommand,
  DescribeAlertManagerDefinitionCommand,
  DescribeLoggingConfigurationCommand,
  DescribeQueryLoggingConfigurationCommand,
  DescribeResourcePolicyCommand,
  DescribeRuleGroupsNamespaceCommand,
  DescribeScraperCommand,
  DescribeWorkspaceCommand,
  DescribeWorkspaceConfigurationCommand,
  GetDefaultScraperConfigurationCommand,
  ListRuleGroupsNamespacesCommand,
  ListScrapersCommand,
  ListTagsForResourceCommand,
  ListWorkspacesCommand,
  PutAlertManagerDefinitionCommand,
  PutResourcePolicyCommand,
  PutRuleGroupsNamespaceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLoggingConfigurationCommand,
  UpdateQueryLoggingConfigurationCommand,
  UpdateScraperCommand,
  UpdateWorkspaceAliasCommand,
  UpdateWorkspaceConfigurationCommand,
};

export interface Amp {
  /**
   * @see {@link CreateAlertManagerDefinitionCommand}
   */
  createAlertManagerDefinition(
    args: CreateAlertManagerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAlertManagerDefinitionCommandOutput>;
  createAlertManagerDefinition(
    args: CreateAlertManagerDefinitionCommandInput,
    cb: (err: any, data?: CreateAlertManagerDefinitionCommandOutput) => void
  ): void;
  createAlertManagerDefinition(
    args: CreateAlertManagerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAlertManagerDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoggingConfigurationCommand}
   */
  createLoggingConfiguration(
    args: CreateLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoggingConfigurationCommandOutput>;
  createLoggingConfiguration(
    args: CreateLoggingConfigurationCommandInput,
    cb: (err: any, data?: CreateLoggingConfigurationCommandOutput) => void
  ): void;
  createLoggingConfiguration(
    args: CreateLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueryLoggingConfigurationCommand}
   */
  createQueryLoggingConfiguration(
    args: CreateQueryLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQueryLoggingConfigurationCommandOutput>;
  createQueryLoggingConfiguration(
    args: CreateQueryLoggingConfigurationCommandInput,
    cb: (err: any, data?: CreateQueryLoggingConfigurationCommandOutput) => void
  ): void;
  createQueryLoggingConfiguration(
    args: CreateQueryLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueryLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleGroupsNamespaceCommand}
   */
  createRuleGroupsNamespace(
    args: CreateRuleGroupsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleGroupsNamespaceCommandOutput>;
  createRuleGroupsNamespace(
    args: CreateRuleGroupsNamespaceCommandInput,
    cb: (err: any, data?: CreateRuleGroupsNamespaceCommandOutput) => void
  ): void;
  createRuleGroupsNamespace(
    args: CreateRuleGroupsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleGroupsNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScraperCommand}
   */
  createScraper(args: CreateScraperCommandInput, options?: __HttpHandlerOptions): Promise<CreateScraperCommandOutput>;
  createScraper(args: CreateScraperCommandInput, cb: (err: any, data?: CreateScraperCommandOutput) => void): void;
  createScraper(
    args: CreateScraperCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScraperCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkspaceCommand}
   */
  createWorkspace(): Promise<CreateWorkspaceCommandOutput>;
  createWorkspace(
    args: CreateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceCommandOutput>;
  createWorkspace(args: CreateWorkspaceCommandInput, cb: (err: any, data?: CreateWorkspaceCommandOutput) => void): void;
  createWorkspace(
    args: CreateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAlertManagerDefinitionCommand}
   */
  deleteAlertManagerDefinition(
    args: DeleteAlertManagerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAlertManagerDefinitionCommandOutput>;
  deleteAlertManagerDefinition(
    args: DeleteAlertManagerDefinitionCommandInput,
    cb: (err: any, data?: DeleteAlertManagerDefinitionCommandOutput) => void
  ): void;
  deleteAlertManagerDefinition(
    args: DeleteAlertManagerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlertManagerDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoggingConfigurationCommand}
   */
  deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoggingConfigurationCommandOutput>;
  deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    cb: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void
  ): void;
  deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueryLoggingConfigurationCommand}
   */
  deleteQueryLoggingConfiguration(
    args: DeleteQueryLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueryLoggingConfigurationCommandOutput>;
  deleteQueryLoggingConfiguration(
    args: DeleteQueryLoggingConfigurationCommandInput,
    cb: (err: any, data?: DeleteQueryLoggingConfigurationCommandOutput) => void
  ): void;
  deleteQueryLoggingConfiguration(
    args: DeleteQueryLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueryLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleGroupsNamespaceCommand}
   */
  deleteRuleGroupsNamespace(
    args: DeleteRuleGroupsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleGroupsNamespaceCommandOutput>;
  deleteRuleGroupsNamespace(
    args: DeleteRuleGroupsNamespaceCommandInput,
    cb: (err: any, data?: DeleteRuleGroupsNamespaceCommandOutput) => void
  ): void;
  deleteRuleGroupsNamespace(
    args: DeleteRuleGroupsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleGroupsNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScraperCommand}
   */
  deleteScraper(args: DeleteScraperCommandInput, options?: __HttpHandlerOptions): Promise<DeleteScraperCommandOutput>;
  deleteScraper(args: DeleteScraperCommandInput, cb: (err: any, data?: DeleteScraperCommandOutput) => void): void;
  deleteScraper(
    args: DeleteScraperCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScraperCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkspaceCommand}
   */
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceCommandOutput>;
  deleteWorkspace(args: DeleteWorkspaceCommandInput, cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void): void;
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAlertManagerDefinitionCommand}
   */
  describeAlertManagerDefinition(
    args: DescribeAlertManagerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlertManagerDefinitionCommandOutput>;
  describeAlertManagerDefinition(
    args: DescribeAlertManagerDefinitionCommandInput,
    cb: (err: any, data?: DescribeAlertManagerDefinitionCommandOutput) => void
  ): void;
  describeAlertManagerDefinition(
    args: DescribeAlertManagerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlertManagerDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoggingConfigurationCommand}
   */
  describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoggingConfigurationCommandOutput>;
  describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    cb: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void
  ): void;
  describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQueryLoggingConfigurationCommand}
   */
  describeQueryLoggingConfiguration(
    args: DescribeQueryLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQueryLoggingConfigurationCommandOutput>;
  describeQueryLoggingConfiguration(
    args: DescribeQueryLoggingConfigurationCommandInput,
    cb: (err: any, data?: DescribeQueryLoggingConfigurationCommandOutput) => void
  ): void;
  describeQueryLoggingConfiguration(
    args: DescribeQueryLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQueryLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourcePolicyCommand}
   */
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePolicyCommandOutput>;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRuleGroupsNamespaceCommand}
   */
  describeRuleGroupsNamespace(
    args: DescribeRuleGroupsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuleGroupsNamespaceCommandOutput>;
  describeRuleGroupsNamespace(
    args: DescribeRuleGroupsNamespaceCommandInput,
    cb: (err: any, data?: DescribeRuleGroupsNamespaceCommandOutput) => void
  ): void;
  describeRuleGroupsNamespace(
    args: DescribeRuleGroupsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuleGroupsNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScraperCommand}
   */
  describeScraper(
    args: DescribeScraperCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScraperCommandOutput>;
  describeScraper(args: DescribeScraperCommandInput, cb: (err: any, data?: DescribeScraperCommandOutput) => void): void;
  describeScraper(
    args: DescribeScraperCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScraperCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspaceCommand}
   */
  describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceCommandOutput>;
  describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;
  describeWorkspace(
    args: DescribeWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspaceConfigurationCommand}
   */
  describeWorkspaceConfiguration(
    args: DescribeWorkspaceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceConfigurationCommandOutput>;
  describeWorkspaceConfiguration(
    args: DescribeWorkspaceConfigurationCommandInput,
    cb: (err: any, data?: DescribeWorkspaceConfigurationCommandOutput) => void
  ): void;
  describeWorkspaceConfiguration(
    args: DescribeWorkspaceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDefaultScraperConfigurationCommand}
   */
  getDefaultScraperConfiguration(): Promise<GetDefaultScraperConfigurationCommandOutput>;
  getDefaultScraperConfiguration(
    args: GetDefaultScraperConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDefaultScraperConfigurationCommandOutput>;
  getDefaultScraperConfiguration(
    args: GetDefaultScraperConfigurationCommandInput,
    cb: (err: any, data?: GetDefaultScraperConfigurationCommandOutput) => void
  ): void;
  getDefaultScraperConfiguration(
    args: GetDefaultScraperConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDefaultScraperConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuleGroupsNamespacesCommand}
   */
  listRuleGroupsNamespaces(
    args: ListRuleGroupsNamespacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleGroupsNamespacesCommandOutput>;
  listRuleGroupsNamespaces(
    args: ListRuleGroupsNamespacesCommandInput,
    cb: (err: any, data?: ListRuleGroupsNamespacesCommandOutput) => void
  ): void;
  listRuleGroupsNamespaces(
    args: ListRuleGroupsNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleGroupsNamespacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScrapersCommand}
   */
  listScrapers(): Promise<ListScrapersCommandOutput>;
  listScrapers(args: ListScrapersCommandInput, options?: __HttpHandlerOptions): Promise<ListScrapersCommandOutput>;
  listScrapers(args: ListScrapersCommandInput, cb: (err: any, data?: ListScrapersCommandOutput) => void): void;
  listScrapers(
    args: ListScrapersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScrapersCommandOutput) => void
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
   * @see {@link ListWorkspacesCommand}
   */
  listWorkspaces(): Promise<ListWorkspacesCommandOutput>;
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspacesCommandOutput>;
  listWorkspaces(args: ListWorkspacesCommandInput, cb: (err: any, data?: ListWorkspacesCommandOutput) => void): void;
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAlertManagerDefinitionCommand}
   */
  putAlertManagerDefinition(
    args: PutAlertManagerDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAlertManagerDefinitionCommandOutput>;
  putAlertManagerDefinition(
    args: PutAlertManagerDefinitionCommandInput,
    cb: (err: any, data?: PutAlertManagerDefinitionCommandOutput) => void
  ): void;
  putAlertManagerDefinition(
    args: PutAlertManagerDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAlertManagerDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRuleGroupsNamespaceCommand}
   */
  putRuleGroupsNamespace(
    args: PutRuleGroupsNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRuleGroupsNamespaceCommandOutput>;
  putRuleGroupsNamespace(
    args: PutRuleGroupsNamespaceCommandInput,
    cb: (err: any, data?: PutRuleGroupsNamespaceCommandOutput) => void
  ): void;
  putRuleGroupsNamespace(
    args: PutRuleGroupsNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRuleGroupsNamespaceCommandOutput) => void
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
   * @see {@link UpdateLoggingConfigurationCommand}
   */
  updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLoggingConfigurationCommandOutput>;
  updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): void;
  updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueryLoggingConfigurationCommand}
   */
  updateQueryLoggingConfiguration(
    args: UpdateQueryLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueryLoggingConfigurationCommandOutput>;
  updateQueryLoggingConfiguration(
    args: UpdateQueryLoggingConfigurationCommandInput,
    cb: (err: any, data?: UpdateQueryLoggingConfigurationCommandOutput) => void
  ): void;
  updateQueryLoggingConfiguration(
    args: UpdateQueryLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueryLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScraperCommand}
   */
  updateScraper(args: UpdateScraperCommandInput, options?: __HttpHandlerOptions): Promise<UpdateScraperCommandOutput>;
  updateScraper(args: UpdateScraperCommandInput, cb: (err: any, data?: UpdateScraperCommandOutput) => void): void;
  updateScraper(
    args: UpdateScraperCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScraperCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkspaceAliasCommand}
   */
  updateWorkspaceAlias(
    args: UpdateWorkspaceAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceAliasCommandOutput>;
  updateWorkspaceAlias(
    args: UpdateWorkspaceAliasCommandInput,
    cb: (err: any, data?: UpdateWorkspaceAliasCommandOutput) => void
  ): void;
  updateWorkspaceAlias(
    args: UpdateWorkspaceAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkspaceConfigurationCommand}
   */
  updateWorkspaceConfiguration(
    args: UpdateWorkspaceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceConfigurationCommandOutput>;
  updateWorkspaceConfiguration(
    args: UpdateWorkspaceConfigurationCommandInput,
    cb: (err: any, data?: UpdateWorkspaceConfigurationCommandOutput) => void
  ): void;
  updateWorkspaceConfiguration(
    args: UpdateWorkspaceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceConfigurationCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Managed Service for Prometheus is a serverless, Prometheus-compatible monitoring service for container metrics that makes it easier to securely monitor container environments at scale. With Amazon Managed Service for Prometheus, you can use the same open-source Prometheus data model and query language that you use today to monitor the performance of your containerized workloads, and also enjoy improved scalability, availability, and security without having to manage the underlying infrastructure.</p> <p>For more information about Amazon Managed Service for Prometheus, see the <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html">Amazon Managed Service for Prometheus</a> User Guide.</p> <p>Amazon Managed Service for Prometheus includes two APIs.</p> <ul> <li> <p>Use the Amazon Web Services API described in this guide to manage Amazon Managed Service for Prometheus resources, such as workspaces, rule groups, and alert managers.</p> </li> <li> <p>Use the <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-Prometheus-Compatible-Apis">Prometheus-compatible API</a> to work within your Prometheus workspace.</p> </li> </ul>
 * @public
 */
export class Amp extends AmpClient implements Amp {}
createAggregatedClient(commands, Amp);
