// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchGetCollectionCommand,
  BatchGetCollectionCommandInput,
  BatchGetCollectionCommandOutput,
} from "./commands/BatchGetCollectionCommand";
import {
  BatchGetEffectiveLifecyclePolicyCommand,
  BatchGetEffectiveLifecyclePolicyCommandInput,
  BatchGetEffectiveLifecyclePolicyCommandOutput,
} from "./commands/BatchGetEffectiveLifecyclePolicyCommand";
import {
  BatchGetLifecyclePolicyCommand,
  BatchGetLifecyclePolicyCommandInput,
  BatchGetLifecyclePolicyCommandOutput,
} from "./commands/BatchGetLifecyclePolicyCommand";
import {
  BatchGetVpcEndpointCommand,
  BatchGetVpcEndpointCommandInput,
  BatchGetVpcEndpointCommandOutput,
} from "./commands/BatchGetVpcEndpointCommand";
import {
  CreateAccessPolicyCommand,
  CreateAccessPolicyCommandInput,
  CreateAccessPolicyCommandOutput,
} from "./commands/CreateAccessPolicyCommand";
import {
  CreateCollectionCommand,
  CreateCollectionCommandInput,
  CreateCollectionCommandOutput,
} from "./commands/CreateCollectionCommand";
import { CreateIndexCommand, CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import {
  CreateLifecyclePolicyCommand,
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput,
} from "./commands/CreateLifecyclePolicyCommand";
import {
  CreateSecurityConfigCommand,
  CreateSecurityConfigCommandInput,
  CreateSecurityConfigCommandOutput,
} from "./commands/CreateSecurityConfigCommand";
import {
  CreateSecurityPolicyCommand,
  CreateSecurityPolicyCommandInput,
  CreateSecurityPolicyCommandOutput,
} from "./commands/CreateSecurityPolicyCommand";
import {
  CreateVpcEndpointCommand,
  CreateVpcEndpointCommandInput,
  CreateVpcEndpointCommandOutput,
} from "./commands/CreateVpcEndpointCommand";
import {
  DeleteAccessPolicyCommand,
  DeleteAccessPolicyCommandInput,
  DeleteAccessPolicyCommandOutput,
} from "./commands/DeleteAccessPolicyCommand";
import {
  DeleteCollectionCommand,
  DeleteCollectionCommandInput,
  DeleteCollectionCommandOutput,
} from "./commands/DeleteCollectionCommand";
import { DeleteIndexCommand, DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import {
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "./commands/DeleteLifecyclePolicyCommand";
import {
  DeleteSecurityConfigCommand,
  DeleteSecurityConfigCommandInput,
  DeleteSecurityConfigCommandOutput,
} from "./commands/DeleteSecurityConfigCommand";
import {
  DeleteSecurityPolicyCommand,
  DeleteSecurityPolicyCommandInput,
  DeleteSecurityPolicyCommandOutput,
} from "./commands/DeleteSecurityPolicyCommand";
import {
  DeleteVpcEndpointCommand,
  DeleteVpcEndpointCommandInput,
  DeleteVpcEndpointCommandOutput,
} from "./commands/DeleteVpcEndpointCommand";
import {
  GetAccessPolicyCommand,
  GetAccessPolicyCommandInput,
  GetAccessPolicyCommandOutput,
} from "./commands/GetAccessPolicyCommand";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import { GetIndexCommand, GetIndexCommandInput, GetIndexCommandOutput } from "./commands/GetIndexCommand";
import {
  GetPoliciesStatsCommand,
  GetPoliciesStatsCommandInput,
  GetPoliciesStatsCommandOutput,
} from "./commands/GetPoliciesStatsCommand";
import {
  GetSecurityConfigCommand,
  GetSecurityConfigCommandInput,
  GetSecurityConfigCommandOutput,
} from "./commands/GetSecurityConfigCommand";
import {
  GetSecurityPolicyCommand,
  GetSecurityPolicyCommandInput,
  GetSecurityPolicyCommandOutput,
} from "./commands/GetSecurityPolicyCommand";
import {
  ListAccessPoliciesCommand,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "./commands/ListAccessPoliciesCommand";
import {
  ListCollectionsCommand,
  ListCollectionsCommandInput,
  ListCollectionsCommandOutput,
} from "./commands/ListCollectionsCommand";
import {
  ListLifecyclePoliciesCommand,
  ListLifecyclePoliciesCommandInput,
  ListLifecyclePoliciesCommandOutput,
} from "./commands/ListLifecyclePoliciesCommand";
import {
  ListSecurityConfigsCommand,
  ListSecurityConfigsCommandInput,
  ListSecurityConfigsCommandOutput,
} from "./commands/ListSecurityConfigsCommand";
import {
  ListSecurityPoliciesCommand,
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "./commands/ListSecurityPoliciesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVpcEndpointsCommand,
  ListVpcEndpointsCommandInput,
  ListVpcEndpointsCommandOutput,
} from "./commands/ListVpcEndpointsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccessPolicyCommand,
  UpdateAccessPolicyCommandInput,
  UpdateAccessPolicyCommandOutput,
} from "./commands/UpdateAccessPolicyCommand";
import {
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import {
  UpdateCollectionCommand,
  UpdateCollectionCommandInput,
  UpdateCollectionCommandOutput,
} from "./commands/UpdateCollectionCommand";
import { UpdateIndexCommand, UpdateIndexCommandInput, UpdateIndexCommandOutput } from "./commands/UpdateIndexCommand";
import {
  UpdateLifecyclePolicyCommand,
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput,
} from "./commands/UpdateLifecyclePolicyCommand";
import {
  UpdateSecurityConfigCommand,
  UpdateSecurityConfigCommandInput,
  UpdateSecurityConfigCommandOutput,
} from "./commands/UpdateSecurityConfigCommand";
import {
  UpdateSecurityPolicyCommand,
  UpdateSecurityPolicyCommandInput,
  UpdateSecurityPolicyCommandOutput,
} from "./commands/UpdateSecurityPolicyCommand";
import {
  UpdateVpcEndpointCommand,
  UpdateVpcEndpointCommandInput,
  UpdateVpcEndpointCommandOutput,
} from "./commands/UpdateVpcEndpointCommand";
import { OpenSearchServerlessClient } from "./OpenSearchServerlessClient";

const commands = {
  BatchGetCollectionCommand,
  BatchGetEffectiveLifecyclePolicyCommand,
  BatchGetLifecyclePolicyCommand,
  BatchGetVpcEndpointCommand,
  CreateAccessPolicyCommand,
  CreateCollectionCommand,
  CreateIndexCommand,
  CreateLifecyclePolicyCommand,
  CreateSecurityConfigCommand,
  CreateSecurityPolicyCommand,
  CreateVpcEndpointCommand,
  DeleteAccessPolicyCommand,
  DeleteCollectionCommand,
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
  UpdateIndexCommand,
  UpdateLifecyclePolicyCommand,
  UpdateSecurityConfigCommand,
  UpdateSecurityPolicyCommand,
  UpdateVpcEndpointCommand,
};

export interface OpenSearchServerless {
  /**
   * @see {@link BatchGetCollectionCommand}
   */
  batchGetCollection(): Promise<BatchGetCollectionCommandOutput>;
  batchGetCollection(
    args: BatchGetCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCollectionCommandOutput>;
  batchGetCollection(
    args: BatchGetCollectionCommandInput,
    cb: (err: any, data?: BatchGetCollectionCommandOutput) => void
  ): void;
  batchGetCollection(
    args: BatchGetCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetEffectiveLifecyclePolicyCommand}
   */
  batchGetEffectiveLifecyclePolicy(
    args: BatchGetEffectiveLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetEffectiveLifecyclePolicyCommandOutput>;
  batchGetEffectiveLifecyclePolicy(
    args: BatchGetEffectiveLifecyclePolicyCommandInput,
    cb: (err: any, data?: BatchGetEffectiveLifecyclePolicyCommandOutput) => void
  ): void;
  batchGetEffectiveLifecyclePolicy(
    args: BatchGetEffectiveLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetEffectiveLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetLifecyclePolicyCommand}
   */
  batchGetLifecyclePolicy(
    args: BatchGetLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetLifecyclePolicyCommandOutput>;
  batchGetLifecyclePolicy(
    args: BatchGetLifecyclePolicyCommandInput,
    cb: (err: any, data?: BatchGetLifecyclePolicyCommandOutput) => void
  ): void;
  batchGetLifecyclePolicy(
    args: BatchGetLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetVpcEndpointCommand}
   */
  batchGetVpcEndpoint(
    args: BatchGetVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetVpcEndpointCommandOutput>;
  batchGetVpcEndpoint(
    args: BatchGetVpcEndpointCommandInput,
    cb: (err: any, data?: BatchGetVpcEndpointCommandOutput) => void
  ): void;
  batchGetVpcEndpoint(
    args: BatchGetVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessPolicyCommand}
   */
  createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPolicyCommandOutput>;
  createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    cb: (err: any, data?: CreateAccessPolicyCommandOutput) => void
  ): void;
  createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCollectionCommand}
   */
  createCollection(
    args: CreateCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCollectionCommandOutput>;
  createCollection(
    args: CreateCollectionCommandInput,
    cb: (err: any, data?: CreateCollectionCommandOutput) => void
  ): void;
  createCollection(
    args: CreateCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIndexCommand}
   */
  createIndex(
    args: CreateIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIndexCommandOutput>;
  createIndex(
    args: CreateIndexCommandInput,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;
  createIndex(
    args: CreateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLifecyclePolicyCommand}
   */
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLifecyclePolicyCommandOutput>;
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    cb: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void
  ): void;
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecurityConfigCommand}
   */
  createSecurityConfig(
    args: CreateSecurityConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityConfigCommandOutput>;
  createSecurityConfig(
    args: CreateSecurityConfigCommandInput,
    cb: (err: any, data?: CreateSecurityConfigCommandOutput) => void
  ): void;
  createSecurityConfig(
    args: CreateSecurityConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecurityPolicyCommand}
   */
  createSecurityPolicy(
    args: CreateSecurityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityPolicyCommandOutput>;
  createSecurityPolicy(
    args: CreateSecurityPolicyCommandInput,
    cb: (err: any, data?: CreateSecurityPolicyCommandOutput) => void
  ): void;
  createSecurityPolicy(
    args: CreateSecurityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcEndpointCommand}
   */
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcEndpointCommandOutput>;
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessPolicyCommand}
   */
  deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPolicyCommandOutput>;
  deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    cb: (err: any, data?: DeleteAccessPolicyCommandOutput) => void
  ): void;
  deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCollectionCommand}
   */
  deleteCollection(
    args: DeleteCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCollectionCommandOutput>;
  deleteCollection(
    args: DeleteCollectionCommandInput,
    cb: (err: any, data?: DeleteCollectionCommandOutput) => void
  ): void;
  deleteCollection(
    args: DeleteCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIndexCommand}
   */
  deleteIndex(
    args: DeleteIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIndexCommandOutput>;
  deleteIndex(
    args: DeleteIndexCommandInput,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;
  deleteIndex(
    args: DeleteIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLifecyclePolicyCommand}
   */
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLifecyclePolicyCommandOutput>;
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecurityConfigCommand}
   */
  deleteSecurityConfig(
    args: DeleteSecurityConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityConfigCommandOutput>;
  deleteSecurityConfig(
    args: DeleteSecurityConfigCommandInput,
    cb: (err: any, data?: DeleteSecurityConfigCommandOutput) => void
  ): void;
  deleteSecurityConfig(
    args: DeleteSecurityConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecurityPolicyCommand}
   */
  deleteSecurityPolicy(
    args: DeleteSecurityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityPolicyCommandOutput>;
  deleteSecurityPolicy(
    args: DeleteSecurityPolicyCommandInput,
    cb: (err: any, data?: DeleteSecurityPolicyCommandOutput) => void
  ): void;
  deleteSecurityPolicy(
    args: DeleteSecurityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcEndpointCommand}
   */
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcEndpointCommandOutput>;
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): void;
  deleteVpcEndpoint(
    args: DeleteVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessPolicyCommand}
   */
  getAccessPolicy(
    args: GetAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPolicyCommandOutput>;
  getAccessPolicy(
    args: GetAccessPolicyCommandInput,
    cb: (err: any, data?: GetAccessPolicyCommandOutput) => void
  ): void;
  getAccessPolicy(
    args: GetAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(): Promise<GetAccountSettingsCommandOutput>;
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
   * @see {@link GetIndexCommand}
   */
  getIndex(
    args: GetIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIndexCommandOutput>;
  getIndex(
    args: GetIndexCommandInput,
    cb: (err: any, data?: GetIndexCommandOutput) => void
  ): void;
  getIndex(
    args: GetIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPoliciesStatsCommand}
   */
  getPoliciesStats(): Promise<GetPoliciesStatsCommandOutput>;
  getPoliciesStats(
    args: GetPoliciesStatsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPoliciesStatsCommandOutput>;
  getPoliciesStats(
    args: GetPoliciesStatsCommandInput,
    cb: (err: any, data?: GetPoliciesStatsCommandOutput) => void
  ): void;
  getPoliciesStats(
    args: GetPoliciesStatsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPoliciesStatsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecurityConfigCommand}
   */
  getSecurityConfig(
    args: GetSecurityConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityConfigCommandOutput>;
  getSecurityConfig(
    args: GetSecurityConfigCommandInput,
    cb: (err: any, data?: GetSecurityConfigCommandOutput) => void
  ): void;
  getSecurityConfig(
    args: GetSecurityConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecurityPolicyCommand}
   */
  getSecurityPolicy(
    args: GetSecurityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityPolicyCommandOutput>;
  getSecurityPolicy(
    args: GetSecurityPolicyCommandInput,
    cb: (err: any, data?: GetSecurityPolicyCommandOutput) => void
  ): void;
  getSecurityPolicy(
    args: GetSecurityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessPoliciesCommand}
   */
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPoliciesCommandOutput>;
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): void;
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollectionsCommand}
   */
  listCollections(): Promise<ListCollectionsCommandOutput>;
  listCollections(
    args: ListCollectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollectionsCommandOutput>;
  listCollections(
    args: ListCollectionsCommandInput,
    cb: (err: any, data?: ListCollectionsCommandOutput) => void
  ): void;
  listCollections(
    args: ListCollectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLifecyclePoliciesCommand}
   */
  listLifecyclePolicies(
    args: ListLifecyclePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLifecyclePoliciesCommandOutput>;
  listLifecyclePolicies(
    args: ListLifecyclePoliciesCommandInput,
    cb: (err: any, data?: ListLifecyclePoliciesCommandOutput) => void
  ): void;
  listLifecyclePolicies(
    args: ListLifecyclePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLifecyclePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityConfigsCommand}
   */
  listSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityConfigsCommandOutput>;
  listSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    cb: (err: any, data?: ListSecurityConfigsCommandOutput) => void
  ): void;
  listSecurityConfigs(
    args: ListSecurityConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityPoliciesCommand}
   */
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityPoliciesCommandOutput>;
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;
  listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
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
   * @see {@link ListVpcEndpointsCommand}
   */
  listVpcEndpoints(): Promise<ListVpcEndpointsCommandOutput>;
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcEndpointsCommandOutput>;
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    cb: (err: any, data?: ListVpcEndpointsCommandOutput) => void
  ): void;
  listVpcEndpoints(
    args: ListVpcEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcEndpointsCommandOutput) => void
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
   * @see {@link UpdateAccessPolicyCommand}
   */
  updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessPolicyCommandOutput>;
  updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    cb: (err: any, data?: UpdateAccessPolicyCommandOutput) => void
  ): void;
  updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCollectionCommand}
   */
  updateCollection(
    args: UpdateCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCollectionCommandOutput>;
  updateCollection(
    args: UpdateCollectionCommandInput,
    cb: (err: any, data?: UpdateCollectionCommandOutput) => void
  ): void;
  updateCollection(
    args: UpdateCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIndexCommand}
   */
  updateIndex(
    args: UpdateIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIndexCommandOutput>;
  updateIndex(
    args: UpdateIndexCommandInput,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;
  updateIndex(
    args: UpdateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLifecyclePolicyCommand}
   */
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLifecyclePolicyCommandOutput>;
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    cb: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void
  ): void;
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityConfigCommand}
   */
  updateSecurityConfig(
    args: UpdateSecurityConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityConfigCommandOutput>;
  updateSecurityConfig(
    args: UpdateSecurityConfigCommandInput,
    cb: (err: any, data?: UpdateSecurityConfigCommandOutput) => void
  ): void;
  updateSecurityConfig(
    args: UpdateSecurityConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityPolicyCommand}
   */
  updateSecurityPolicy(
    args: UpdateSecurityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityPolicyCommandOutput>;
  updateSecurityPolicy(
    args: UpdateSecurityPolicyCommandInput,
    cb: (err: any, data?: UpdateSecurityPolicyCommandOutput) => void
  ): void;
  updateSecurityPolicy(
    args: UpdateSecurityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVpcEndpointCommand}
   */
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVpcEndpointCommandOutput>;
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    cb: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): void;
  updateVpcEndpoint(
    args: UpdateVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcEndpointCommandOutput) => void
  ): void;
}

/**
 * <p>Use the Amazon OpenSearch Serverless API to create, configure, and manage OpenSearch Serverless collections and security policies.</p> <p>OpenSearch Serverless is an on-demand, pre-provisioned serverless configuration for Amazon OpenSearch Service. OpenSearch Serverless removes the operational complexities of provisioning, configuring, and tuning your OpenSearch clusters. It enables you to easily search and analyze petabytes of data without having to worry about the underlying infrastructure and data management.</p> <p>To learn more about OpenSearch Serverless, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html">What is Amazon OpenSearch Serverless?</a> </p>
 * @public
 */
export class OpenSearchServerless extends OpenSearchServerlessClient implements OpenSearchServerless {}
createAggregatedClient(commands, OpenSearchServerless);
