// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateDeploymentCommandInput,
  type CreateDeploymentCommandOutput,
  CreateDeploymentCommand,
} from "./commands/CreateDeploymentCommand";
import {
  type CreateDeploymentSnapshotCommandInput,
  type CreateDeploymentSnapshotCommandOutput,
  CreateDeploymentSnapshotCommand,
} from "./commands/CreateDeploymentSnapshotCommand";
import {
  type CreatePolicyCommandInput,
  type CreatePolicyCommandOutput,
  CreatePolicyCommand,
} from "./commands/CreatePolicyCommand";
import {
  type CreatePolicySnapshotCommandInput,
  type CreatePolicySnapshotCommandOutput,
  CreatePolicySnapshotCommand,
} from "./commands/CreatePolicySnapshotCommand";
import {
  type CreateRuleCommandInput,
  type CreateRuleCommandOutput,
  CreateRuleCommand,
} from "./commands/CreateRuleCommand";
import {
  type CreateRuleSnapshotCommandInput,
  type CreateRuleSnapshotCommandOutput,
  CreateRuleSnapshotCommand,
} from "./commands/CreateRuleSnapshotCommand";
import {
  type CreateScopeCommandInput,
  type CreateScopeCommandOutput,
  CreateScopeCommand,
} from "./commands/CreateScopeCommand";
import {
  type CreateScopeSnapshotCommandInput,
  type CreateScopeSnapshotCommandOutput,
  CreateScopeSnapshotCommand,
} from "./commands/CreateScopeSnapshotCommand";
import {
  type CreateTemplateCommandInput,
  type CreateTemplateCommandOutput,
  CreateTemplateCommand,
} from "./commands/CreateTemplateCommand";
import {
  type CreateTemplateSnapshotCommandInput,
  type CreateTemplateSnapshotCommandOutput,
  CreateTemplateSnapshotCommand,
} from "./commands/CreateTemplateSnapshotCommand";
import {
  type DeleteAdminAccountCommandInput,
  type DeleteAdminAccountCommandOutput,
  DeleteAdminAccountCommand,
} from "./commands/DeleteAdminAccountCommand";
import {
  type DeleteDeploymentCommandInput,
  type DeleteDeploymentCommandOutput,
  DeleteDeploymentCommand,
} from "./commands/DeleteDeploymentCommand";
import {
  type DeletePolicyCommandInput,
  type DeletePolicyCommandOutput,
  DeletePolicyCommand,
} from "./commands/DeletePolicyCommand";
import {
  type DeleteRuleCommandInput,
  type DeleteRuleCommandOutput,
  DeleteRuleCommand,
} from "./commands/DeleteRuleCommand";
import {
  type DeleteScopeCommandInput,
  type DeleteScopeCommandOutput,
  DeleteScopeCommand,
} from "./commands/DeleteScopeCommand";
import {
  type DeleteTemplateCommandInput,
  type DeleteTemplateCommandOutput,
  DeleteTemplateCommand,
} from "./commands/DeleteTemplateCommand";
import {
  type GenerateRuleConfigurationCommandInput,
  type GenerateRuleConfigurationCommandOutput,
  GenerateRuleConfigurationCommand,
} from "./commands/GenerateRuleConfigurationCommand";
import {
  type GetAdminAccountCommandInput,
  type GetAdminAccountCommandOutput,
  GetAdminAccountCommand,
} from "./commands/GetAdminAccountCommand";
import {
  type GetDeploymentCommandInput,
  type GetDeploymentCommandOutput,
  GetDeploymentCommand,
} from "./commands/GetDeploymentCommand";
import { type GetPolicyCommandInput, type GetPolicyCommandOutput, GetPolicyCommand } from "./commands/GetPolicyCommand";
import { type GetRuleCommandInput, type GetRuleCommandOutput, GetRuleCommand } from "./commands/GetRuleCommand";
import { type GetScopeCommandInput, type GetScopeCommandOutput, GetScopeCommand } from "./commands/GetScopeCommand";
import {
  type GetTemplateCommandInput,
  type GetTemplateCommandOutput,
  GetTemplateCommand,
} from "./commands/GetTemplateCommand";
import {
  type ListAdminAccountsCommandInput,
  type ListAdminAccountsCommandOutput,
  ListAdminAccountsCommand,
} from "./commands/ListAdminAccountsCommand";
import {
  type ListAggregateResourceSynchronizationStatusesCommandInput,
  type ListAggregateResourceSynchronizationStatusesCommandOutput,
  ListAggregateResourceSynchronizationStatusesCommand,
} from "./commands/ListAggregateResourceSynchronizationStatusesCommand";
import {
  type ListDeploymentsCommandInput,
  type ListDeploymentsCommandOutput,
  ListDeploymentsCommand,
} from "./commands/ListDeploymentsCommand";
import {
  type ListDeploymentSnapshotsCommandInput,
  type ListDeploymentSnapshotsCommandOutput,
  ListDeploymentSnapshotsCommand,
} from "./commands/ListDeploymentSnapshotsCommand";
import {
  type ListPoliciesCommandInput,
  type ListPoliciesCommandOutput,
  ListPoliciesCommand,
} from "./commands/ListPoliciesCommand";
import {
  type ListPolicySnapshotsCommandInput,
  type ListPolicySnapshotsCommandOutput,
  ListPolicySnapshotsCommand,
} from "./commands/ListPolicySnapshotsCommand";
import {
  type ListResourceAssociationsCommandInput,
  type ListResourceAssociationsCommandOutput,
  ListResourceAssociationsCommand,
} from "./commands/ListResourceAssociationsCommand";
import {
  type ListResourceSynchronizationStatusesCommandInput,
  type ListResourceSynchronizationStatusesCommandOutput,
  ListResourceSynchronizationStatusesCommand,
} from "./commands/ListResourceSynchronizationStatusesCommand";
import { type ListRulesCommandInput, type ListRulesCommandOutput, ListRulesCommand } from "./commands/ListRulesCommand";
import {
  type ListRuleSnapshotsCommandInput,
  type ListRuleSnapshotsCommandOutput,
  ListRuleSnapshotsCommand,
} from "./commands/ListRuleSnapshotsCommand";
import {
  type ListScopesCommandInput,
  type ListScopesCommandOutput,
  ListScopesCommand,
} from "./commands/ListScopesCommand";
import {
  type ListScopeSnapshotsCommandInput,
  type ListScopeSnapshotsCommandOutput,
  ListScopeSnapshotsCommand,
} from "./commands/ListScopeSnapshotsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTemplatesCommandInput,
  type ListTemplatesCommandOutput,
  ListTemplatesCommand,
} from "./commands/ListTemplatesCommand";
import {
  type ListTemplateSnapshotsCommandInput,
  type ListTemplateSnapshotsCommandOutput,
  ListTemplateSnapshotsCommand,
} from "./commands/ListTemplateSnapshotsCommand";
import {
  type PutAdminAccountCommandInput,
  type PutAdminAccountCommandOutput,
  PutAdminAccountCommand,
} from "./commands/PutAdminAccountCommand";
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
  type UpdateDeploymentCommandInput,
  type UpdateDeploymentCommandOutput,
  UpdateDeploymentCommand,
} from "./commands/UpdateDeploymentCommand";
import {
  type UpdatePolicyCommandInput,
  type UpdatePolicyCommandOutput,
  UpdatePolicyCommand,
} from "./commands/UpdatePolicyCommand";
import {
  type UpdateRuleCommandInput,
  type UpdateRuleCommandOutput,
  UpdateRuleCommand,
} from "./commands/UpdateRuleCommand";
import {
  type UpdateScopeCommandInput,
  type UpdateScopeCommandOutput,
  UpdateScopeCommand,
} from "./commands/UpdateScopeCommand";
import {
  type UpdateTemplateCommandInput,
  type UpdateTemplateCommandOutput,
  UpdateTemplateCommand,
} from "./commands/UpdateTemplateCommand";
import { NetworkSecurityManagerClient } from "./NetworkSecurityManagerClient";
import { paginateListAdminAccounts } from "./pagination/ListAdminAccountsPaginator";
import {
  paginateListAggregateResourceSynchronizationStatuses,
} from "./pagination/ListAggregateResourceSynchronizationStatusesPaginator";
import { paginateListDeploymentSnapshots } from "./pagination/ListDeploymentSnapshotsPaginator";
import { paginateListDeployments } from "./pagination/ListDeploymentsPaginator";
import { paginateListPolicies } from "./pagination/ListPoliciesPaginator";
import { paginateListPolicySnapshots } from "./pagination/ListPolicySnapshotsPaginator";
import { paginateListResourceAssociations } from "./pagination/ListResourceAssociationsPaginator";
import { paginateListResourceSynchronizationStatuses } from "./pagination/ListResourceSynchronizationStatusesPaginator";
import { paginateListRuleSnapshots } from "./pagination/ListRuleSnapshotsPaginator";
import { paginateListRules } from "./pagination/ListRulesPaginator";
import { paginateListScopeSnapshots } from "./pagination/ListScopeSnapshotsPaginator";
import { paginateListScopes } from "./pagination/ListScopesPaginator";
import { paginateListTemplateSnapshots } from "./pagination/ListTemplateSnapshotsPaginator";
import { paginateListTemplates } from "./pagination/ListTemplatesPaginator";

const commands = {
  CreateDeploymentCommand,
  CreateDeploymentSnapshotCommand,
  CreatePolicyCommand,
  CreatePolicySnapshotCommand,
  CreateRuleCommand,
  CreateRuleSnapshotCommand,
  CreateScopeCommand,
  CreateScopeSnapshotCommand,
  CreateTemplateCommand,
  CreateTemplateSnapshotCommand,
  DeleteAdminAccountCommand,
  DeleteDeploymentCommand,
  DeletePolicyCommand,
  DeleteRuleCommand,
  DeleteScopeCommand,
  DeleteTemplateCommand,
  GenerateRuleConfigurationCommand,
  GetAdminAccountCommand,
  GetDeploymentCommand,
  GetPolicyCommand,
  GetRuleCommand,
  GetScopeCommand,
  GetTemplateCommand,
  ListAdminAccountsCommand,
  ListAggregateResourceSynchronizationStatusesCommand,
  ListDeploymentsCommand,
  ListDeploymentSnapshotsCommand,
  ListPoliciesCommand,
  ListPolicySnapshotsCommand,
  ListResourceAssociationsCommand,
  ListResourceSynchronizationStatusesCommand,
  ListRulesCommand,
  ListRuleSnapshotsCommand,
  ListScopesCommand,
  ListScopeSnapshotsCommand,
  ListTagsForResourceCommand,
  ListTemplatesCommand,
  ListTemplateSnapshotsCommand,
  PutAdminAccountCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDeploymentCommand,
  UpdatePolicyCommand,
  UpdateRuleCommand,
  UpdateScopeCommand,
  UpdateTemplateCommand,
};
const paginators = {
  paginateListAdminAccounts,
  paginateListAggregateResourceSynchronizationStatuses,
  paginateListDeployments,
  paginateListDeploymentSnapshots,
  paginateListPolicies,
  paginateListPolicySnapshots,
  paginateListResourceAssociations,
  paginateListResourceSynchronizationStatuses,
  paginateListRules,
  paginateListRuleSnapshots,
  paginateListScopes,
  paginateListScopeSnapshots,
  paginateListTemplates,
  paginateListTemplateSnapshots,
};

/**
 * @public
 */
export interface NetworkSecurityManagerRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface NetworkSecurityManager {
  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<CreateDeploymentCommandOutput>;
  createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeploymentSnapshotCommand}
   */
  createDeploymentSnapshot(
    args: CreateDeploymentSnapshotCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<CreateDeploymentSnapshotCommandOutput>;
  createDeploymentSnapshot(
    args: CreateDeploymentSnapshotCommandInput,
    cb: (err: any, data?: CreateDeploymentSnapshotCommandOutput) => void
  ): void;
  createDeploymentSnapshot(
    args: CreateDeploymentSnapshotCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: CreateDeploymentSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(
    args: CreatePolicyCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<CreatePolicyCommandOutput>;
  createPolicy(
    args: CreatePolicyCommandInput,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;
  createPolicy(
    args: CreatePolicyCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicySnapshotCommand}
   */
  createPolicySnapshot(
    args: CreatePolicySnapshotCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<CreatePolicySnapshotCommandOutput>;
  createPolicySnapshot(
    args: CreatePolicySnapshotCommandInput,
    cb: (err: any, data?: CreatePolicySnapshotCommandOutput) => void
  ): void;
  createPolicySnapshot(
    args: CreatePolicySnapshotCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: CreatePolicySnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleCommand}
   */
  createRule(
    args: CreateRuleCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<CreateRuleCommandOutput>;
  createRule(
    args: CreateRuleCommandInput,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
  createRule(
    args: CreateRuleCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleSnapshotCommand}
   */
  createRuleSnapshot(
    args: CreateRuleSnapshotCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<CreateRuleSnapshotCommandOutput>;
  createRuleSnapshot(
    args: CreateRuleSnapshotCommandInput,
    cb: (err: any, data?: CreateRuleSnapshotCommandOutput) => void
  ): void;
  createRuleSnapshot(
    args: CreateRuleSnapshotCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: CreateRuleSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScopeCommand}
   */
  createScope(
    args: CreateScopeCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<CreateScopeCommandOutput>;
  createScope(
    args: CreateScopeCommandInput,
    cb: (err: any, data?: CreateScopeCommandOutput) => void
  ): void;
  createScope(
    args: CreateScopeCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: CreateScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScopeSnapshotCommand}
   */
  createScopeSnapshot(
    args: CreateScopeSnapshotCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<CreateScopeSnapshotCommandOutput>;
  createScopeSnapshot(
    args: CreateScopeSnapshotCommandInput,
    cb: (err: any, data?: CreateScopeSnapshotCommandOutput) => void
  ): void;
  createScopeSnapshot(
    args: CreateScopeSnapshotCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: CreateScopeSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTemplateCommand}
   */
  createTemplate(
    args: CreateTemplateCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<CreateTemplateCommandOutput>;
  createTemplate(
    args: CreateTemplateCommandInput,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;
  createTemplate(
    args: CreateTemplateCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTemplateSnapshotCommand}
   */
  createTemplateSnapshot(
    args: CreateTemplateSnapshotCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<CreateTemplateSnapshotCommandOutput>;
  createTemplateSnapshot(
    args: CreateTemplateSnapshotCommandInput,
    cb: (err: any, data?: CreateTemplateSnapshotCommandOutput) => void
  ): void;
  createTemplateSnapshot(
    args: CreateTemplateSnapshotCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: CreateTemplateSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAdminAccountCommand}
   */
  deleteAdminAccount(
    args: DeleteAdminAccountCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<DeleteAdminAccountCommandOutput>;
  deleteAdminAccount(
    args: DeleteAdminAccountCommandInput,
    cb: (err: any, data?: DeleteAdminAccountCommandOutput) => void
  ): void;
  deleteAdminAccount(
    args: DeleteAdminAccountCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: DeleteAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeploymentCommand}
   */
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<DeleteDeploymentCommandOutput>;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(
    args: DeletePolicyCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<DeletePolicyCommandOutput>;
  deletePolicy(
    args: DeletePolicyCommandInput,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<DeleteRuleCommandOutput>;
  deleteRule(
    args: DeleteRuleCommandInput,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScopeCommand}
   */
  deleteScope(
    args: DeleteScopeCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<DeleteScopeCommandOutput>;
  deleteScope(
    args: DeleteScopeCommandInput,
    cb: (err: any, data?: DeleteScopeCommandOutput) => void
  ): void;
  deleteScope(
    args: DeleteScopeCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: DeleteScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateCommand}
   */
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<DeleteTemplateCommandOutput>;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateRuleConfigurationCommand}
   */
  generateRuleConfiguration(
    args: GenerateRuleConfigurationCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<GenerateRuleConfigurationCommandOutput>;
  generateRuleConfiguration(
    args: GenerateRuleConfigurationCommandInput,
    cb: (err: any, data?: GenerateRuleConfigurationCommandOutput) => void
  ): void;
  generateRuleConfiguration(
    args: GenerateRuleConfigurationCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: GenerateRuleConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAdminAccountCommand}
   */
  getAdminAccount(
    args: GetAdminAccountCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<GetAdminAccountCommandOutput>;
  getAdminAccount(
    args: GetAdminAccountCommandInput,
    cb: (err: any, data?: GetAdminAccountCommandOutput) => void
  ): void;
  getAdminAccount(
    args: GetAdminAccountCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: GetAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(
    args: GetDeploymentCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<GetDeploymentCommandOutput>;
  getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(
    args: GetPolicyCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<GetPolicyCommandOutput>;
  getPolicy(
    args: GetPolicyCommandInput,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuleCommand}
   */
  getRule(
    args: GetRuleCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<GetRuleCommandOutput>;
  getRule(
    args: GetRuleCommandInput,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;
  getRule(
    args: GetRuleCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScopeCommand}
   */
  getScope(
    args: GetScopeCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<GetScopeCommandOutput>;
  getScope(
    args: GetScopeCommandInput,
    cb: (err: any, data?: GetScopeCommandOutput) => void
  ): void;
  getScope(
    args: GetScopeCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: GetScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemplateCommand}
   */
  getTemplate(
    args: GetTemplateCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<GetTemplateCommandOutput>;
  getTemplate(
    args: GetTemplateCommandInput,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;
  getTemplate(
    args: GetTemplateCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAdminAccountsCommand}
   */
  listAdminAccounts(): Promise<ListAdminAccountsCommandOutput>;
  listAdminAccounts(
    args: ListAdminAccountsCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListAdminAccountsCommandOutput>;
  listAdminAccounts(
    args: ListAdminAccountsCommandInput,
    cb: (err: any, data?: ListAdminAccountsCommandOutput) => void
  ): void;
  listAdminAccounts(
    args: ListAdminAccountsCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListAdminAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAggregateResourceSynchronizationStatusesCommand}
   */
  listAggregateResourceSynchronizationStatuses(): Promise<ListAggregateResourceSynchronizationStatusesCommandOutput>;
  listAggregateResourceSynchronizationStatuses(
    args: ListAggregateResourceSynchronizationStatusesCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListAggregateResourceSynchronizationStatusesCommandOutput>;
  listAggregateResourceSynchronizationStatuses(
    args: ListAggregateResourceSynchronizationStatusesCommandInput,
    cb: (err: any, data?: ListAggregateResourceSynchronizationStatusesCommandOutput) => void
  ): void;
  listAggregateResourceSynchronizationStatuses(
    args: ListAggregateResourceSynchronizationStatusesCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListAggregateResourceSynchronizationStatusesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentsCommand}
   */
  listDeployments(): Promise<ListDeploymentsCommandOutput>;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListDeploymentsCommandOutput>;
  listDeployments(
    args: ListDeploymentsCommandInput,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentSnapshotsCommand}
   */
  listDeploymentSnapshots(
    args: ListDeploymentSnapshotsCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListDeploymentSnapshotsCommandOutput>;
  listDeploymentSnapshots(
    args: ListDeploymentSnapshotsCommandInput,
    cb: (err: any, data?: ListDeploymentSnapshotsCommandOutput) => void
  ): void;
  listDeploymentSnapshots(
    args: ListDeploymentSnapshotsCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListDeploymentSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(): Promise<ListPoliciesCommandOutput>;
  listPolicies(
    args: ListPoliciesCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListPoliciesCommandOutput>;
  listPolicies(
    args: ListPoliciesCommandInput,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;
  listPolicies(
    args: ListPoliciesCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicySnapshotsCommand}
   */
  listPolicySnapshots(
    args: ListPolicySnapshotsCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListPolicySnapshotsCommandOutput>;
  listPolicySnapshots(
    args: ListPolicySnapshotsCommandInput,
    cb: (err: any, data?: ListPolicySnapshotsCommandOutput) => void
  ): void;
  listPolicySnapshots(
    args: ListPolicySnapshotsCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListPolicySnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceAssociationsCommand}
   */
  listResourceAssociations(
    args: ListResourceAssociationsCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListResourceAssociationsCommandOutput>;
  listResourceAssociations(
    args: ListResourceAssociationsCommandInput,
    cb: (err: any, data?: ListResourceAssociationsCommandOutput) => void
  ): void;
  listResourceAssociations(
    args: ListResourceAssociationsCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListResourceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceSynchronizationStatusesCommand}
   */
  listResourceSynchronizationStatuses(
    args: ListResourceSynchronizationStatusesCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListResourceSynchronizationStatusesCommandOutput>;
  listResourceSynchronizationStatuses(
    args: ListResourceSynchronizationStatusesCommandInput,
    cb: (err: any, data?: ListResourceSynchronizationStatusesCommandOutput) => void
  ): void;
  listResourceSynchronizationStatuses(
    args: ListResourceSynchronizationStatusesCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListResourceSynchronizationStatusesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(): Promise<ListRulesCommandOutput>;
  listRules(
    args: ListRulesCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListRulesCommandOutput>;
  listRules(
    args: ListRulesCommandInput,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  listRules(
    args: ListRulesCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuleSnapshotsCommand}
   */
  listRuleSnapshots(
    args: ListRuleSnapshotsCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListRuleSnapshotsCommandOutput>;
  listRuleSnapshots(
    args: ListRuleSnapshotsCommandInput,
    cb: (err: any, data?: ListRuleSnapshotsCommandOutput) => void
  ): void;
  listRuleSnapshots(
    args: ListRuleSnapshotsCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListRuleSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScopesCommand}
   */
  listScopes(): Promise<ListScopesCommandOutput>;
  listScopes(
    args: ListScopesCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListScopesCommandOutput>;
  listScopes(
    args: ListScopesCommandInput,
    cb: (err: any, data?: ListScopesCommandOutput) => void
  ): void;
  listScopes(
    args: ListScopesCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListScopesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScopeSnapshotsCommand}
   */
  listScopeSnapshots(
    args: ListScopeSnapshotsCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListScopeSnapshotsCommandOutput>;
  listScopeSnapshots(
    args: ListScopeSnapshotsCommandInput,
    cb: (err: any, data?: ListScopeSnapshotsCommandOutput) => void
  ): void;
  listScopeSnapshots(
    args: ListScopeSnapshotsCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListScopeSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplatesCommand}
   */
  listTemplates(): Promise<ListTemplatesCommandOutput>;
  listTemplates(
    args: ListTemplatesCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListTemplatesCommandOutput>;
  listTemplates(
    args: ListTemplatesCommandInput,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  listTemplates(
    args: ListTemplatesCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplateSnapshotsCommand}
   */
  listTemplateSnapshots(
    args: ListTemplateSnapshotsCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<ListTemplateSnapshotsCommandOutput>;
  listTemplateSnapshots(
    args: ListTemplateSnapshotsCommandInput,
    cb: (err: any, data?: ListTemplateSnapshotsCommandOutput) => void
  ): void;
  listTemplateSnapshots(
    args: ListTemplateSnapshotsCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: ListTemplateSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAdminAccountCommand}
   */
  putAdminAccount(
    args: PutAdminAccountCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<PutAdminAccountCommandOutput>;
  putAdminAccount(
    args: PutAdminAccountCommandInput,
    cb: (err: any, data?: PutAdminAccountCommandOutput) => void
  ): void;
  putAdminAccount(
    args: PutAdminAccountCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: PutAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeploymentCommand}
   */
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<UpdateDeploymentCommandOutput>;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePolicyCommand}
   */
  updatePolicy(
    args: UpdatePolicyCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<UpdatePolicyCommandOutput>;
  updatePolicy(
    args: UpdatePolicyCommandInput,
    cb: (err: any, data?: UpdatePolicyCommandOutput) => void
  ): void;
  updatePolicy(
    args: UpdatePolicyCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: UpdatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleCommand}
   */
  updateRule(
    args: UpdateRuleCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<UpdateRuleCommandOutput>;
  updateRule(
    args: UpdateRuleCommandInput,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;
  updateRule(
    args: UpdateRuleCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScopeCommand}
   */
  updateScope(
    args: UpdateScopeCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<UpdateScopeCommandOutput>;
  updateScope(
    args: UpdateScopeCommandInput,
    cb: (err: any, data?: UpdateScopeCommandOutput) => void
  ): void;
  updateScope(
    args: UpdateScopeCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: UpdateScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplateCommand}
   */
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: NetworkSecurityManagerRequestOptions
  ): Promise<UpdateTemplateCommandOutput>;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options: NetworkSecurityManagerRequestOptions,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAdminAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAdminAccountsCommandOutput}.
   */
  paginateListAdminAccounts(
    args?: ListAdminAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAdminAccountsCommandOutput>;

  /**
   * @see {@link ListAggregateResourceSynchronizationStatusesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAggregateResourceSynchronizationStatusesCommandOutput}.
   */
  paginateListAggregateResourceSynchronizationStatuses(
    args?: ListAggregateResourceSynchronizationStatusesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAggregateResourceSynchronizationStatusesCommandOutput>;

  /**
   * @see {@link ListDeploymentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentsCommandOutput}.
   */
  paginateListDeployments(
    args?: ListDeploymentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentsCommandOutput>;

  /**
   * @see {@link ListDeploymentSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeploymentSnapshotsCommandOutput}.
   */
  paginateListDeploymentSnapshots(
    args: ListDeploymentSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeploymentSnapshotsCommandOutput>;

  /**
   * @see {@link ListPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPoliciesCommandOutput}.
   */
  paginateListPolicies(
    args?: ListPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPoliciesCommandOutput>;

  /**
   * @see {@link ListPolicySnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPolicySnapshotsCommandOutput}.
   */
  paginateListPolicySnapshots(
    args: ListPolicySnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPolicySnapshotsCommandOutput>;

  /**
   * @see {@link ListResourceAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceAssociationsCommandOutput}.
   */
  paginateListResourceAssociations(
    args: ListResourceAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceAssociationsCommandOutput>;

  /**
   * @see {@link ListResourceSynchronizationStatusesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceSynchronizationStatusesCommandOutput}.
   */
  paginateListResourceSynchronizationStatuses(
    args: ListResourceSynchronizationStatusesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceSynchronizationStatusesCommandOutput>;

  /**
   * @see {@link ListRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRulesCommandOutput}.
   */
  paginateListRules(
    args?: ListRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRulesCommandOutput>;

  /**
   * @see {@link ListRuleSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRuleSnapshotsCommandOutput}.
   */
  paginateListRuleSnapshots(
    args: ListRuleSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRuleSnapshotsCommandOutput>;

  /**
   * @see {@link ListScopesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListScopesCommandOutput}.
   */
  paginateListScopes(
    args?: ListScopesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListScopesCommandOutput>;

  /**
   * @see {@link ListScopeSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListScopeSnapshotsCommandOutput}.
   */
  paginateListScopeSnapshots(
    args: ListScopeSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListScopeSnapshotsCommandOutput>;

  /**
   * @see {@link ListTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTemplatesCommandOutput}.
   */
  paginateListTemplates(
    args?: ListTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTemplatesCommandOutput>;

  /**
   * @see {@link ListTemplateSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTemplateSnapshotsCommandOutput}.
   */
  paginateListTemplateSnapshots(
    args: ListTemplateSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTemplateSnapshotsCommandOutput>;
}

/**
 * <p>AWS Network Security Manager helps you centrally configure and deploy network security protections across your organization. Supported protections include AWS WAF and AWS Shield Advanced. This centralized approach reduces the overhead of managing protections individually across accounts and ensures consistent security at scale.</p> <p>You define reusable <i>rules</i> and <i>templates</i>, then combine them into <i>policies</i>. Next, you select the accounts and resources to protect with <i>scopes</i> and roll the protections out with <i>deployments</i>. For example, you can define a set of AWS WAF rules and group them into a policy. Then deploy that policy across all accounts in your organization with a single deployment.</p> <p>This API reference describes the operations and data types for AWS Network Security Manager.</p> <p>For conceptual information, tutorials, and guidance on writing rule configurations, see the <a href="https://docs.aws.amazon.com/network-security-manager/latest/devguide/what-is.html">AWS Network Security Manager Developer Guide</a>. For the default quotas that apply to your account, see <a href="https://docs.aws.amazon.com/network-security-manager/latest/devguide/quotas.html">Quotas</a>. For the service endpoints available in each Region, see <a href="https://docs.aws.amazon.com/general/latest/gr/network-security-manager.html">AWS Network Security Manager endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
 * @public
 */
export class NetworkSecurityManager extends NetworkSecurityManagerClient implements NetworkSecurityManager {}
createAggregatedClient(commands, NetworkSecurityManager, { paginators });
