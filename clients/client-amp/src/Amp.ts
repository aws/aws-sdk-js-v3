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
  CreateRuleGroupsNamespaceCommand,
  CreateRuleGroupsNamespaceCommandInput,
  CreateRuleGroupsNamespaceCommandOutput,
} from "./commands/CreateRuleGroupsNamespaceCommand";
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
  DeleteRuleGroupsNamespaceCommand,
  DeleteRuleGroupsNamespaceCommandInput,
  DeleteRuleGroupsNamespaceCommandOutput,
} from "./commands/DeleteRuleGroupsNamespaceCommand";
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
  DescribeRuleGroupsNamespaceCommand,
  DescribeRuleGroupsNamespaceCommandInput,
  DescribeRuleGroupsNamespaceCommandOutput,
} from "./commands/DescribeRuleGroupsNamespaceCommand";
import {
  DescribeWorkspaceCommand,
  DescribeWorkspaceCommandInput,
  DescribeWorkspaceCommandOutput,
} from "./commands/DescribeWorkspaceCommand";
import {
  ListRuleGroupsNamespacesCommand,
  ListRuleGroupsNamespacesCommandInput,
  ListRuleGroupsNamespacesCommandOutput,
} from "./commands/ListRuleGroupsNamespacesCommand";
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
  UpdateWorkspaceAliasCommand,
  UpdateWorkspaceAliasCommandInput,
  UpdateWorkspaceAliasCommandOutput,
} from "./commands/UpdateWorkspaceAliasCommand";

const commands = {
  CreateAlertManagerDefinitionCommand,
  CreateLoggingConfigurationCommand,
  CreateRuleGroupsNamespaceCommand,
  CreateWorkspaceCommand,
  DeleteAlertManagerDefinitionCommand,
  DeleteLoggingConfigurationCommand,
  DeleteRuleGroupsNamespaceCommand,
  DeleteWorkspaceCommand,
  DescribeAlertManagerDefinitionCommand,
  DescribeLoggingConfigurationCommand,
  DescribeRuleGroupsNamespaceCommand,
  DescribeWorkspaceCommand,
  ListRuleGroupsNamespacesCommand,
  ListTagsForResourceCommand,
  ListWorkspacesCommand,
  PutAlertManagerDefinitionCommand,
  PutRuleGroupsNamespaceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLoggingConfigurationCommand,
  UpdateWorkspaceAliasCommand,
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
   * @see {@link CreateWorkspaceCommand}
   */
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
}

/**
 * @public
 * Amazon Managed Service for Prometheus
 */
export class Amp extends AmpClient implements Amp {}
createAggregatedClient(commands, Amp);
