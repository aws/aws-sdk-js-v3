// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type BatchGetCollectionCommandInput,
  type BatchGetCollectionCommandOutput,
  BatchGetCollectionCommand,
} from "./commands/BatchGetCollectionCommand";
import {
  type BatchGetCollectionGroupCommandInput,
  type BatchGetCollectionGroupCommandOutput,
  BatchGetCollectionGroupCommand,
} from "./commands/BatchGetCollectionGroupCommand";
import {
  type BatchGetEffectiveLifecyclePolicyCommandInput,
  type BatchGetEffectiveLifecyclePolicyCommandOutput,
  BatchGetEffectiveLifecyclePolicyCommand,
} from "./commands/BatchGetEffectiveLifecyclePolicyCommand";
import {
  type BatchGetLifecyclePolicyCommandInput,
  type BatchGetLifecyclePolicyCommandOutput,
  BatchGetLifecyclePolicyCommand,
} from "./commands/BatchGetLifecyclePolicyCommand";
import {
  type BatchGetVpcEndpointCommandInput,
  type BatchGetVpcEndpointCommandOutput,
  BatchGetVpcEndpointCommand,
} from "./commands/BatchGetVpcEndpointCommand";
import {
  type CreateAccessPolicyCommandInput,
  type CreateAccessPolicyCommandOutput,
  CreateAccessPolicyCommand,
} from "./commands/CreateAccessPolicyCommand";
import {
  type CreateCollectionCommandInput,
  type CreateCollectionCommandOutput,
  CreateCollectionCommand,
} from "./commands/CreateCollectionCommand";
import {
  type CreateCollectionGroupCommandInput,
  type CreateCollectionGroupCommandOutput,
  CreateCollectionGroupCommand,
} from "./commands/CreateCollectionGroupCommand";
import {
  type CreateIndexCommandInput,
  type CreateIndexCommandOutput,
  CreateIndexCommand,
} from "./commands/CreateIndexCommand";
import {
  type CreateLifecyclePolicyCommandInput,
  type CreateLifecyclePolicyCommandOutput,
  CreateLifecyclePolicyCommand,
} from "./commands/CreateLifecyclePolicyCommand";
import {
  type CreateSecurityConfigCommandInput,
  type CreateSecurityConfigCommandOutput,
  CreateSecurityConfigCommand,
} from "./commands/CreateSecurityConfigCommand";
import {
  type CreateSecurityPolicyCommandInput,
  type CreateSecurityPolicyCommandOutput,
  CreateSecurityPolicyCommand,
} from "./commands/CreateSecurityPolicyCommand";
import {
  type CreateVpcEndpointCommandInput,
  type CreateVpcEndpointCommandOutput,
  CreateVpcEndpointCommand,
} from "./commands/CreateVpcEndpointCommand";
import {
  type DeleteAccessPolicyCommandInput,
  type DeleteAccessPolicyCommandOutput,
  DeleteAccessPolicyCommand,
} from "./commands/DeleteAccessPolicyCommand";
import {
  type DeleteCollectionCommandInput,
  type DeleteCollectionCommandOutput,
  DeleteCollectionCommand,
} from "./commands/DeleteCollectionCommand";
import {
  type DeleteCollectionGroupCommandInput,
  type DeleteCollectionGroupCommandOutput,
  DeleteCollectionGroupCommand,
} from "./commands/DeleteCollectionGroupCommand";
import {
  type DeleteIndexCommandInput,
  type DeleteIndexCommandOutput,
  DeleteIndexCommand,
} from "./commands/DeleteIndexCommand";
import {
  type DeleteLifecyclePolicyCommandInput,
  type DeleteLifecyclePolicyCommandOutput,
  DeleteLifecyclePolicyCommand,
} from "./commands/DeleteLifecyclePolicyCommand";
import {
  type DeleteSecurityConfigCommandInput,
  type DeleteSecurityConfigCommandOutput,
  DeleteSecurityConfigCommand,
} from "./commands/DeleteSecurityConfigCommand";
import {
  type DeleteSecurityPolicyCommandInput,
  type DeleteSecurityPolicyCommandOutput,
  DeleteSecurityPolicyCommand,
} from "./commands/DeleteSecurityPolicyCommand";
import {
  type DeleteVpcEndpointCommandInput,
  type DeleteVpcEndpointCommandOutput,
  DeleteVpcEndpointCommand,
} from "./commands/DeleteVpcEndpointCommand";
import {
  type GetAccessPolicyCommandInput,
  type GetAccessPolicyCommandOutput,
  GetAccessPolicyCommand,
} from "./commands/GetAccessPolicyCommand";
import {
  type GetAccountSettingsCommandInput,
  type GetAccountSettingsCommandOutput,
  GetAccountSettingsCommand,
} from "./commands/GetAccountSettingsCommand";
import { type GetIndexCommandInput, type GetIndexCommandOutput, GetIndexCommand } from "./commands/GetIndexCommand";
import {
  type GetPoliciesStatsCommandInput,
  type GetPoliciesStatsCommandOutput,
  GetPoliciesStatsCommand,
} from "./commands/GetPoliciesStatsCommand";
import {
  type GetSecurityConfigCommandInput,
  type GetSecurityConfigCommandOutput,
  GetSecurityConfigCommand,
} from "./commands/GetSecurityConfigCommand";
import {
  type GetSecurityPolicyCommandInput,
  type GetSecurityPolicyCommandOutput,
  GetSecurityPolicyCommand,
} from "./commands/GetSecurityPolicyCommand";
import {
  type ListAccessPoliciesCommandInput,
  type ListAccessPoliciesCommandOutput,
  ListAccessPoliciesCommand,
} from "./commands/ListAccessPoliciesCommand";
import {
  type ListCollectionGroupsCommandInput,
  type ListCollectionGroupsCommandOutput,
  ListCollectionGroupsCommand,
} from "./commands/ListCollectionGroupsCommand";
import {
  type ListCollectionsCommandInput,
  type ListCollectionsCommandOutput,
  ListCollectionsCommand,
} from "./commands/ListCollectionsCommand";
import {
  type ListLifecyclePoliciesCommandInput,
  type ListLifecyclePoliciesCommandOutput,
  ListLifecyclePoliciesCommand,
} from "./commands/ListLifecyclePoliciesCommand";
import {
  type ListSecurityConfigsCommandInput,
  type ListSecurityConfigsCommandOutput,
  ListSecurityConfigsCommand,
} from "./commands/ListSecurityConfigsCommand";
import {
  type ListSecurityPoliciesCommandInput,
  type ListSecurityPoliciesCommandOutput,
  ListSecurityPoliciesCommand,
} from "./commands/ListSecurityPoliciesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListVpcEndpointsCommandInput,
  type ListVpcEndpointsCommandOutput,
  ListVpcEndpointsCommand,
} from "./commands/ListVpcEndpointsCommand";
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
  type UpdateAccessPolicyCommandInput,
  type UpdateAccessPolicyCommandOutput,
  UpdateAccessPolicyCommand,
} from "./commands/UpdateAccessPolicyCommand";
import {
  type UpdateAccountSettingsCommandInput,
  type UpdateAccountSettingsCommandOutput,
  UpdateAccountSettingsCommand,
} from "./commands/UpdateAccountSettingsCommand";
import {
  type UpdateCollectionCommandInput,
  type UpdateCollectionCommandOutput,
  UpdateCollectionCommand,
} from "./commands/UpdateCollectionCommand";
import {
  type UpdateCollectionGroupCommandInput,
  type UpdateCollectionGroupCommandOutput,
  UpdateCollectionGroupCommand,
} from "./commands/UpdateCollectionGroupCommand";
import {
  type UpdateIndexCommandInput,
  type UpdateIndexCommandOutput,
  UpdateIndexCommand,
} from "./commands/UpdateIndexCommand";
import {
  type UpdateLifecyclePolicyCommandInput,
  type UpdateLifecyclePolicyCommandOutput,
  UpdateLifecyclePolicyCommand,
} from "./commands/UpdateLifecyclePolicyCommand";
import {
  type UpdateSecurityConfigCommandInput,
  type UpdateSecurityConfigCommandOutput,
  UpdateSecurityConfigCommand,
} from "./commands/UpdateSecurityConfigCommand";
import {
  type UpdateSecurityPolicyCommandInput,
  type UpdateSecurityPolicyCommandOutput,
  UpdateSecurityPolicyCommand,
} from "./commands/UpdateSecurityPolicyCommand";
import {
  type UpdateVpcEndpointCommandInput,
  type UpdateVpcEndpointCommandOutput,
  UpdateVpcEndpointCommand,
} from "./commands/UpdateVpcEndpointCommand";
import { OpenSearchServerlessClient } from "./OpenSearchServerlessClient";
import { paginateListAccessPolicies } from "./pagination/ListAccessPoliciesPaginator";
import { paginateListCollectionGroups } from "./pagination/ListCollectionGroupsPaginator";
import { paginateListCollections } from "./pagination/ListCollectionsPaginator";
import { paginateListLifecyclePolicies } from "./pagination/ListLifecyclePoliciesPaginator";
import { paginateListSecurityConfigs } from "./pagination/ListSecurityConfigsPaginator";
import { paginateListSecurityPolicies } from "./pagination/ListSecurityPoliciesPaginator";
import { paginateListVpcEndpoints } from "./pagination/ListVpcEndpointsPaginator";

const commands = {
  BatchGetCollectionCommand,
  BatchGetCollectionGroupCommand,
  BatchGetEffectiveLifecyclePolicyCommand,
  BatchGetLifecyclePolicyCommand,
  BatchGetVpcEndpointCommand,
  CreateAccessPolicyCommand,
  CreateCollectionCommand,
  CreateCollectionGroupCommand,
  CreateIndexCommand,
  CreateLifecyclePolicyCommand,
  CreateSecurityConfigCommand,
  CreateSecurityPolicyCommand,
  CreateVpcEndpointCommand,
  DeleteAccessPolicyCommand,
  DeleteCollectionCommand,
  DeleteCollectionGroupCommand,
  DeleteIndexCommand,
  DeleteLifecyclePolicyCommand,
  DeleteSecurityConfigCommand,
  DeleteSecurityPolicyCommand,
  DeleteVpcEndpointCommand,
  GetAccessPolicyCommand,
  GetAccountSettingsCommand,
  GetIndexCommand,
  GetPoliciesStatsCommand,
  GetSecurityConfigCommand,
  GetSecurityPolicyCommand,
  ListAccessPoliciesCommand,
  ListCollectionGroupsCommand,
  ListCollectionsCommand,
  ListLifecyclePoliciesCommand,
  ListSecurityConfigsCommand,
  ListSecurityPoliciesCommand,
  ListTagsForResourceCommand,
  ListVpcEndpointsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccessPolicyCommand,
  UpdateAccountSettingsCommand,
  UpdateCollectionCommand,
  UpdateCollectionGroupCommand,
  UpdateIndexCommand,
  UpdateLifecyclePolicyCommand,
  UpdateSecurityConfigCommand,
  UpdateSecurityPolicyCommand,
  UpdateVpcEndpointCommand,
};
const paginators = {
  paginateListAccessPolicies,
  paginateListCollectionGroups,
  paginateListCollections,
  paginateListLifecyclePolicies,
  paginateListSecurityConfigs,
  paginateListSecurityPolicies,
  paginateListVpcEndpoints,
};

/**
 * @public
 */
export interface OpenSearchServerlessRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface OpenSearchServerless {
  /**
   * @see {@link BatchGetCollectionCommand}
   */
  batchGetCollection(): Promise<BatchGetCollectionCommandOutput>;
  batchGetCollection(
    args: BatchGetCollectionCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<BatchGetCollectionCommandOutput>;
  batchGetCollection(
    args: BatchGetCollectionCommandInput,
    cb: (err: any, data?: BatchGetCollectionCommandOutput) => void
  ): void;
  batchGetCollection(
    args: BatchGetCollectionCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: BatchGetCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCollectionGroupCommand}
   */
  batchGetCollectionGroup(): Promise<BatchGetCollectionGroupCommandOutput>;
  batchGetCollectionGroup(
    args: BatchGetCollectionGroupCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<BatchGetCollectionGroupCommandOutput>;
  batchGetCollectionGroup(
    args: BatchGetCollectionGroupCommandInput,
    cb: (err: any, data?: BatchGetCollectionGroupCommandOutput) => void
  ): void;
  batchGetCollectionGroup(
    args: BatchGetCollectionGroupCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: BatchGetCollectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetEffectiveLifecyclePolicyCommand}
   */
  batchGetEffectiveLifecyclePolicy(
    args: BatchGetEffectiveLifecyclePolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<BatchGetEffectiveLifecyclePolicyCommandOutput>;
  batchGetEffectiveLifecyclePolicy(
    args: BatchGetEffectiveLifecyclePolicyCommandInput,
    cb: (err: any, data?: BatchGetEffectiveLifecyclePolicyCommandOutput) => void
  ): void;
  batchGetEffectiveLifecyclePolicy(
    args: BatchGetEffectiveLifecyclePolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: BatchGetEffectiveLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetLifecyclePolicyCommand}
   */
  batchGetLifecyclePolicy(
    args: BatchGetLifecyclePolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<BatchGetLifecyclePolicyCommandOutput>;
  batchGetLifecyclePolicy(
    args: BatchGetLifecyclePolicyCommandInput,
    cb: (err: any, data?: BatchGetLifecyclePolicyCommandOutput) => void
  ): void;
  batchGetLifecyclePolicy(
    args: BatchGetLifecyclePolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: BatchGetLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetVpcEndpointCommand}
   */
  batchGetVpcEndpoint(
    args: BatchGetVpcEndpointCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<BatchGetVpcEndpointCommandOutput>;
  batchGetVpcEndpoint(
    args: BatchGetVpcEndpointCommandInput,
    cb: (err: any, data?: BatchGetVpcEndpointCommandOutput) => void
  ): void;
  batchGetVpcEndpoint(
    args: BatchGetVpcEndpointCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: BatchGetVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessPolicyCommand}
   */
  createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<CreateAccessPolicyCommandOutput>;
  createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    cb: (err: any, data?: CreateAccessPolicyCommandOutput) => void
  ): void;
  createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: CreateAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCollectionCommand}
   */
  createCollection(
    args: CreateCollectionCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<CreateCollectionCommandOutput>;
  createCollection(
    args: CreateCollectionCommandInput,
    cb: (err: any, data?: CreateCollectionCommandOutput) => void
  ): void;
  createCollection(
    args: CreateCollectionCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: CreateCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCollectionGroupCommand}
   */
  createCollectionGroup(
    args: CreateCollectionGroupCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<CreateCollectionGroupCommandOutput>;
  createCollectionGroup(
    args: CreateCollectionGroupCommandInput,
    cb: (err: any, data?: CreateCollectionGroupCommandOutput) => void
  ): void;
  createCollectionGroup(
    args: CreateCollectionGroupCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: CreateCollectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIndexCommand}
   */
  createIndex(
    args: CreateIndexCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<CreateIndexCommandOutput>;
  createIndex(
    args: CreateIndexCommandInput,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;
  createIndex(
    args: CreateIndexCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLifecyclePolicyCommand}
   */
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<CreateLifecyclePolicyCommandOutput>;
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    cb: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void
  ): void;
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecurityConfigCommand}
   */
  createSecurityConfig(
    args: CreateSecurityConfigCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<CreateSecurityConfigCommandOutput>;
  createSecurityConfig(
    args: CreateSecurityConfigCommandInput,
    cb: (err: any, data?: CreateSecurityConfigCommandOutput) => void
  ): void;
  createSecurityConfig(
    args: CreateSecurityConfigCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: CreateSecurityConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecurityPolicyCommand}
   */
  createSecurityPolicy(
    args: CreateSecurityPolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<CreateSecurityPolicyCommandOutput>;
  createSecurityPolicy(
    args: CreateSecurityPolicyCommandInput,
    cb: (err: any, data?: CreateSecurityPolicyCommandOutput) => void
  ): void;
  createSecurityPolicy(
    args: CreateSecurityPolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: CreateSecurityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcEndpointCommand}
   */
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<CreateVpcEndpointCommandOutput>;
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessPolicyCommand}
   */
  deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<DeleteAccessPolicyCommandOutput>;
  deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    cb: (err: any, data?: DeleteAccessPolicyCommandOutput) => void
  ): void;
  deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: DeleteAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCollectionCommand}
   */
  deleteCollection(
    args: DeleteCollectionCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<DeleteCollectionCommandOutput>;
  deleteCollection(
    args: DeleteCollectionCommandInput,
    cb: (err: any, data?: DeleteCollectionCommandOutput) => void
  ): void;
  deleteCollection(
    args: DeleteCollectionCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: DeleteCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCollectionGroupCommand}
   */
  deleteCollectionGroup(
    args: DeleteCollectionGroupCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<DeleteCollectionGroupCommandOutput>;
  deleteCollectionGroup(
    args: DeleteCollectionGroupCommandInput,
    cb: (err: any, data?: DeleteCollectionGroupCommandOutput) => void
  ): void;
  deleteCollectionGroup(
    args: DeleteCollectionGroupCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: DeleteCollectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIndexCommand}
   */
  deleteIndex(
    args: DeleteIndexCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<DeleteIndexCommandOutput>;
  deleteIndex(
    args: DeleteIndexCommandInput,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;
  deleteIndex(
    args: DeleteIndexCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLifecyclePolicyCommand}
   */
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<DeleteLifecyclePolicyCommandOutput>;
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecurityConfigCommand}
   */
  deleteSecurityConfig(
    args: DeleteSecurityConfigCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<DeleteSecurityConfigCommandOutput>;
  deleteSecurityConfig(
    args: DeleteSecurityConfigCommandInput,
    cb: (err: any, data?: DeleteSecurityConfigCommandOutput) => void
  ): void;
  deleteSecurityConfig(
    args: DeleteSecurityConfigCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: DeleteSecurityConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecurityPolicyCommand}
   */
  deleteSecurityPolicy(
    args: DeleteSecurityPolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<DeleteSecurityPolicyCommandOutput>;
  deleteSecurityPolicy(
    args: DeleteSecurityPolicyCommandInput,
    cb: (err: any, data?: DeleteSecurityPolicyCommandOutput) => void
  ): void;
  deleteSecurityPolicy(
    args: DeleteSecurityPolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: DeleteSecurityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcEndpointCommand}
   */
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<DeleteVpcEndpointCommandOutput>;
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): void;
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessPolicyCommand}
   */
  getAccessPolicy(
    args: GetAccessPolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<GetAccessPolicyCommandOutput>;
  getAccessPolicy(
    args: GetAccessPolicyCommandInput,
    cb: (err: any, data?: GetAccessPolicyCommandOutput) => void
  ): void;
  getAccessPolicy(
    args: GetAccessPolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: GetAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIndexCommand}
   */
  getIndex(
    args: GetIndexCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<GetIndexCommandOutput>;
  getIndex(
    args: GetIndexCommandInput,
    cb: (err: any, data?: GetIndexCommandOutput) => void
  ): void;
  getIndex(
    args: GetIndexCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: GetIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPoliciesStatsCommand}
   */
  getPoliciesStats(): Promise<GetPoliciesStatsCommandOutput>;
  getPoliciesStats(
    args: GetPoliciesStatsCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<GetPoliciesStatsCommandOutput>;
  getPoliciesStats(
    args: GetPoliciesStatsCommandInput,
    cb: (err: any, data?: GetPoliciesStatsCommandOutput) => void
  ): void;
  getPoliciesStats(
    args: GetPoliciesStatsCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: GetPoliciesStatsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecurityConfigCommand}
   */
  getSecurityConfig(
    args: GetSecurityConfigCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<GetSecurityConfigCommandOutput>;
  getSecurityConfig(
    args: GetSecurityConfigCommandInput,
    cb: (err: any, data?: GetSecurityConfigCommandOutput) => void
  ): void;
  getSecurityConfig(
    args: GetSecurityConfigCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: GetSecurityConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecurityPolicyCommand}
   */
  getSecurityPolicy(
    args: GetSecurityPolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<GetSecurityPolicyCommandOutput>;
  getSecurityPolicy(
    args: GetSecurityPolicyCommandInput,
    cb: (err: any, data?: GetSecurityPolicyCommandOutput) => void
  ): void;
  getSecurityPolicy(
    args: GetSecurityPolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: GetSecurityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessPoliciesCommand}
   */
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<ListAccessPoliciesCommandOutput>;
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): void;
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollectionGroupsCommand}
   */
  listCollectionGroups(): Promise<ListCollectionGroupsCommandOutput>;
  listCollectionGroups(
    args: ListCollectionGroupsCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<ListCollectionGroupsCommandOutput>;
  listCollectionGroups(
    args: ListCollectionGroupsCommandInput,
    cb: (err: any, data?: ListCollectionGroupsCommandOutput) => void
  ): void;
  listCollectionGroups(
    args: ListCollectionGroupsCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: ListCollectionGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollectionsCommand}
   */
  listCollections(): Promise<ListCollectionsCommandOutput>;
  listCollections(
    args: ListCollectionsCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<ListCollectionsCommandOutput>;
  listCollections(
    args: ListCollectionsCommandInput,
    cb: (err: any, data?: ListCollectionsCommandOutput) => void
  ): void;
  listCollections(
    args: ListCollectionsCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: ListCollectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLifecyclePoliciesCommand}
   */
  listLifecyclePolicies(
    args: ListLifecyclePoliciesCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<ListLifecyclePoliciesCommandOutput>;
  listLifecyclePolicies(
    args: ListLifecyclePoliciesCommandInput,
    cb: (err: any, data?: ListLifecyclePoliciesCommandOutput) => void
  ): void;
  listLifecyclePolicies(
    args: ListLifecyclePoliciesCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: ListLifecyclePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityConfigsCommand}
   */
  listSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<ListSecurityConfigsCommandOutput>;
  listSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    cb: (err: any, data?: ListSecurityConfigsCommandOutput) => void
  ): void;
  listSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: ListSecurityConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityPoliciesCommand}
   */
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<ListSecurityPoliciesCommandOutput>;
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcEndpointsCommand}
   */
  listVpcEndpoints(): Promise<ListVpcEndpointsCommandOutput>;
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<ListVpcEndpointsCommandOutput>;
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    cb: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): void;
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccessPolicyCommand}
   */
  updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<UpdateAccessPolicyCommandOutput>;
  updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    cb: (err: any, data?: UpdateAccessPolicyCommandOutput) => void
  ): void;
  updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: UpdateAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCollectionCommand}
   */
  updateCollection(
    args: UpdateCollectionCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<UpdateCollectionCommandOutput>;
  updateCollection(
    args: UpdateCollectionCommandInput,
    cb: (err: any, data?: UpdateCollectionCommandOutput) => void
  ): void;
  updateCollection(
    args: UpdateCollectionCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: UpdateCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCollectionGroupCommand}
   */
  updateCollectionGroup(
    args: UpdateCollectionGroupCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<UpdateCollectionGroupCommandOutput>;
  updateCollectionGroup(
    args: UpdateCollectionGroupCommandInput,
    cb: (err: any, data?: UpdateCollectionGroupCommandOutput) => void
  ): void;
  updateCollectionGroup(
    args: UpdateCollectionGroupCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: UpdateCollectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIndexCommand}
   */
  updateIndex(
    args: UpdateIndexCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<UpdateIndexCommandOutput>;
  updateIndex(
    args: UpdateIndexCommandInput,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;
  updateIndex(
    args: UpdateIndexCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLifecyclePolicyCommand}
   */
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<UpdateLifecyclePolicyCommandOutput>;
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    cb: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void
  ): void;
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityConfigCommand}
   */
  updateSecurityConfig(
    args: UpdateSecurityConfigCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<UpdateSecurityConfigCommandOutput>;
  updateSecurityConfig(
    args: UpdateSecurityConfigCommandInput,
    cb: (err: any, data?: UpdateSecurityConfigCommandOutput) => void
  ): void;
  updateSecurityConfig(
    args: UpdateSecurityConfigCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: UpdateSecurityConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityPolicyCommand}
   */
  updateSecurityPolicy(
    args: UpdateSecurityPolicyCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<UpdateSecurityPolicyCommandOutput>;
  updateSecurityPolicy(
    args: UpdateSecurityPolicyCommandInput,
    cb: (err: any, data?: UpdateSecurityPolicyCommandOutput) => void
  ): void;
  updateSecurityPolicy(
    args: UpdateSecurityPolicyCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: UpdateSecurityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVpcEndpointCommand}
   */
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options?: OpenSearchServerlessRequestOptions
  ): Promise<UpdateVpcEndpointCommandOutput>;
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    cb: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): void;
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options: OpenSearchServerlessRequestOptions,
    cb: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessPoliciesCommandOutput}.
   */
  paginateListAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessPoliciesCommandOutput>;

  /**
   * @see {@link ListCollectionGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCollectionGroupsCommandOutput}.
   */
  paginateListCollectionGroups(
    args?: ListCollectionGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCollectionGroupsCommandOutput>;

  /**
   * @see {@link ListCollectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCollectionsCommandOutput}.
   */
  paginateListCollections(
    args?: ListCollectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCollectionsCommandOutput>;

  /**
   * @see {@link ListLifecyclePoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLifecyclePoliciesCommandOutput}.
   */
  paginateListLifecyclePolicies(
    args: ListLifecyclePoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLifecyclePoliciesCommandOutput>;

  /**
   * @see {@link ListSecurityConfigsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityConfigsCommandOutput}.
   */
  paginateListSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityConfigsCommandOutput>;

  /**
   * @see {@link ListSecurityPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSecurityPoliciesCommandOutput}.
   */
  paginateListSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSecurityPoliciesCommandOutput>;

  /**
   * @see {@link ListVpcEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVpcEndpointsCommandOutput}.
   */
  paginateListVpcEndpoints(
    args?: ListVpcEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVpcEndpointsCommandOutput>;
}

/**
 * <p>Use the Amazon OpenSearch Serverless API to create, configure, and manage OpenSearch Serverless collections and security policies.</p> <p>OpenSearch Serverless is an on-demand, pre-provisioned serverless configuration for Amazon OpenSearch Service. OpenSearch Serverless removes the operational complexities of provisioning, configuring, and tuning your OpenSearch clusters. It enables you to easily search and analyze petabytes of data without having to worry about the underlying infrastructure and data management.</p> <p>To learn more about OpenSearch Serverless, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html">What is Amazon OpenSearch Serverless?</a> </p>
 * @public
 */
export class OpenSearchServerless extends OpenSearchServerlessClient implements OpenSearchServerless {}
createAggregatedClient(commands, OpenSearchServerless, { paginators });
