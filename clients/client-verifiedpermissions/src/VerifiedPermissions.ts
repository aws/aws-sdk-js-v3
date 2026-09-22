// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type BatchGetPolicyCommandInput,
  type BatchGetPolicyCommandOutput,
  BatchGetPolicyCommand,
} from "./commands/BatchGetPolicyCommand";
import {
  type BatchIsAuthorizedCommandInput,
  type BatchIsAuthorizedCommandOutput,
  BatchIsAuthorizedCommand,
} from "./commands/BatchIsAuthorizedCommand";
import {
  type BatchIsAuthorizedWithTokenCommandInput,
  type BatchIsAuthorizedWithTokenCommandOutput,
  BatchIsAuthorizedWithTokenCommand,
} from "./commands/BatchIsAuthorizedWithTokenCommand";
import {
  type CreateIdentitySourceCommandInput,
  type CreateIdentitySourceCommandOutput,
  CreateIdentitySourceCommand,
} from "./commands/CreateIdentitySourceCommand";
import {
  type CreatePolicyCommandInput,
  type CreatePolicyCommandOutput,
  CreatePolicyCommand,
} from "./commands/CreatePolicyCommand";
import {
  type CreatePolicyStoreAliasCommandInput,
  type CreatePolicyStoreAliasCommandOutput,
  CreatePolicyStoreAliasCommand,
} from "./commands/CreatePolicyStoreAliasCommand";
import {
  type CreatePolicyStoreCommandInput,
  type CreatePolicyStoreCommandOutput,
  CreatePolicyStoreCommand,
} from "./commands/CreatePolicyStoreCommand";
import {
  type CreatePolicyTemplateCommandInput,
  type CreatePolicyTemplateCommandOutput,
  CreatePolicyTemplateCommand,
} from "./commands/CreatePolicyTemplateCommand";
import {
  type DeleteIdentitySourceCommandInput,
  type DeleteIdentitySourceCommandOutput,
  DeleteIdentitySourceCommand,
} from "./commands/DeleteIdentitySourceCommand";
import {
  type DeletePolicyCommandInput,
  type DeletePolicyCommandOutput,
  DeletePolicyCommand,
} from "./commands/DeletePolicyCommand";
import {
  type DeletePolicyStoreAliasCommandInput,
  type DeletePolicyStoreAliasCommandOutput,
  DeletePolicyStoreAliasCommand,
} from "./commands/DeletePolicyStoreAliasCommand";
import {
  type DeletePolicyStoreCommandInput,
  type DeletePolicyStoreCommandOutput,
  DeletePolicyStoreCommand,
} from "./commands/DeletePolicyStoreCommand";
import {
  type DeletePolicyTemplateCommandInput,
  type DeletePolicyTemplateCommandOutput,
  DeletePolicyTemplateCommand,
} from "./commands/DeletePolicyTemplateCommand";
import {
  type GetIdentitySourceCommandInput,
  type GetIdentitySourceCommandOutput,
  GetIdentitySourceCommand,
} from "./commands/GetIdentitySourceCommand";
import { type GetPolicyCommandInput, type GetPolicyCommandOutput, GetPolicyCommand } from "./commands/GetPolicyCommand";
import {
  type GetPolicyStoreAliasCommandInput,
  type GetPolicyStoreAliasCommandOutput,
  GetPolicyStoreAliasCommand,
} from "./commands/GetPolicyStoreAliasCommand";
import {
  type GetPolicyStoreCommandInput,
  type GetPolicyStoreCommandOutput,
  GetPolicyStoreCommand,
} from "./commands/GetPolicyStoreCommand";
import {
  type GetPolicyTemplateCommandInput,
  type GetPolicyTemplateCommandOutput,
  GetPolicyTemplateCommand,
} from "./commands/GetPolicyTemplateCommand";
import { type GetSchemaCommandInput, type GetSchemaCommandOutput, GetSchemaCommand } from "./commands/GetSchemaCommand";
import {
  type IsAuthorizedCommandInput,
  type IsAuthorizedCommandOutput,
  IsAuthorizedCommand,
} from "./commands/IsAuthorizedCommand";
import {
  type IsAuthorizedWithTokenCommandInput,
  type IsAuthorizedWithTokenCommandOutput,
  IsAuthorizedWithTokenCommand,
} from "./commands/IsAuthorizedWithTokenCommand";
import {
  type ListIdentitySourcesCommandInput,
  type ListIdentitySourcesCommandOutput,
  ListIdentitySourcesCommand,
} from "./commands/ListIdentitySourcesCommand";
import {
  type ListPoliciesCommandInput,
  type ListPoliciesCommandOutput,
  ListPoliciesCommand,
} from "./commands/ListPoliciesCommand";
import {
  type ListPolicyStoreAliasesCommandInput,
  type ListPolicyStoreAliasesCommandOutput,
  ListPolicyStoreAliasesCommand,
} from "./commands/ListPolicyStoreAliasesCommand";
import {
  type ListPolicyStoresCommandInput,
  type ListPolicyStoresCommandOutput,
  ListPolicyStoresCommand,
} from "./commands/ListPolicyStoresCommand";
import {
  type ListPolicyTemplatesCommandInput,
  type ListPolicyTemplatesCommandOutput,
  ListPolicyTemplatesCommand,
} from "./commands/ListPolicyTemplatesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import { type PutSchemaCommandInput, type PutSchemaCommandOutput, PutSchemaCommand } from "./commands/PutSchemaCommand";
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
  type UpdateIdentitySourceCommandInput,
  type UpdateIdentitySourceCommandOutput,
  UpdateIdentitySourceCommand,
} from "./commands/UpdateIdentitySourceCommand";
import {
  type UpdatePolicyCommandInput,
  type UpdatePolicyCommandOutput,
  UpdatePolicyCommand,
} from "./commands/UpdatePolicyCommand";
import {
  type UpdatePolicyStoreCommandInput,
  type UpdatePolicyStoreCommandOutput,
  UpdatePolicyStoreCommand,
} from "./commands/UpdatePolicyStoreCommand";
import {
  type UpdatePolicyTemplateCommandInput,
  type UpdatePolicyTemplateCommandOutput,
  UpdatePolicyTemplateCommand,
} from "./commands/UpdatePolicyTemplateCommand";
import { paginateListIdentitySources } from "./pagination/ListIdentitySourcesPaginator";
import { paginateListPolicies } from "./pagination/ListPoliciesPaginator";
import { paginateListPolicyStoreAliases } from "./pagination/ListPolicyStoreAliasesPaginator";
import { paginateListPolicyStores } from "./pagination/ListPolicyStoresPaginator";
import { paginateListPolicyTemplates } from "./pagination/ListPolicyTemplatesPaginator";
import { VerifiedPermissionsClient } from "./VerifiedPermissionsClient";

const commands = {
  BatchGetPolicyCommand,
  BatchIsAuthorizedCommand,
  BatchIsAuthorizedWithTokenCommand,
  CreateIdentitySourceCommand,
  CreatePolicyCommand,
  CreatePolicyStoreCommand,
  CreatePolicyStoreAliasCommand,
  CreatePolicyTemplateCommand,
  DeleteIdentitySourceCommand,
  DeletePolicyCommand,
  DeletePolicyStoreCommand,
  DeletePolicyStoreAliasCommand,
  DeletePolicyTemplateCommand,
  GetIdentitySourceCommand,
  GetPolicyCommand,
  GetPolicyStoreCommand,
  GetPolicyStoreAliasCommand,
  GetPolicyTemplateCommand,
  GetSchemaCommand,
  IsAuthorizedCommand,
  IsAuthorizedWithTokenCommand,
  ListIdentitySourcesCommand,
  ListPoliciesCommand,
  ListPolicyStoreAliasesCommand,
  ListPolicyStoresCommand,
  ListPolicyTemplatesCommand,
  ListTagsForResourceCommand,
  PutSchemaCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateIdentitySourceCommand,
  UpdatePolicyCommand,
  UpdatePolicyStoreCommand,
  UpdatePolicyTemplateCommand,
};
const paginators = {
  paginateListIdentitySources,
  paginateListPolicies,
  paginateListPolicyStoreAliases,
  paginateListPolicyStores,
  paginateListPolicyTemplates,
};

/**
 * @public
 */
export interface VerifiedPermissionsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface VerifiedPermissions {
  /**
   * @see {@link BatchGetPolicyCommand}
   */
  batchGetPolicy(
    args: BatchGetPolicyCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<BatchGetPolicyCommandOutput>;
  batchGetPolicy(
    args: BatchGetPolicyCommandInput,
    cb: (err: any, data?: BatchGetPolicyCommandOutput) => void
  ): void;
  batchGetPolicy(
    args: BatchGetPolicyCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: BatchGetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchIsAuthorizedCommand}
   */
  batchIsAuthorized(
    args: BatchIsAuthorizedCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<BatchIsAuthorizedCommandOutput>;
  batchIsAuthorized(
    args: BatchIsAuthorizedCommandInput,
    cb: (err: any, data?: BatchIsAuthorizedCommandOutput) => void
  ): void;
  batchIsAuthorized(
    args: BatchIsAuthorizedCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: BatchIsAuthorizedCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchIsAuthorizedWithTokenCommand}
   */
  batchIsAuthorizedWithToken(
    args: BatchIsAuthorizedWithTokenCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<BatchIsAuthorizedWithTokenCommandOutput>;
  batchIsAuthorizedWithToken(
    args: BatchIsAuthorizedWithTokenCommandInput,
    cb: (err: any, data?: BatchIsAuthorizedWithTokenCommandOutput) => void
  ): void;
  batchIsAuthorizedWithToken(
    args: BatchIsAuthorizedWithTokenCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: BatchIsAuthorizedWithTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIdentitySourceCommand}
   */
  createIdentitySource(
    args: CreateIdentitySourceCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<CreateIdentitySourceCommandOutput>;
  createIdentitySource(
    args: CreateIdentitySourceCommandInput,
    cb: (err: any, data?: CreateIdentitySourceCommandOutput) => void
  ): void;
  createIdentitySource(
    args: CreateIdentitySourceCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: CreateIdentitySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(
    args: CreatePolicyCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<CreatePolicyCommandOutput>;
  createPolicy(
    args: CreatePolicyCommandInput,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;
  createPolicy(
    args: CreatePolicyCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyStoreCommand}
   */
  createPolicyStore(
    args: CreatePolicyStoreCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<CreatePolicyStoreCommandOutput>;
  createPolicyStore(
    args: CreatePolicyStoreCommandInput,
    cb: (err: any, data?: CreatePolicyStoreCommandOutput) => void
  ): void;
  createPolicyStore(
    args: CreatePolicyStoreCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: CreatePolicyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyStoreAliasCommand}
   */
  createPolicyStoreAlias(
    args: CreatePolicyStoreAliasCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<CreatePolicyStoreAliasCommandOutput>;
  createPolicyStoreAlias(
    args: CreatePolicyStoreAliasCommandInput,
    cb: (err: any, data?: CreatePolicyStoreAliasCommandOutput) => void
  ): void;
  createPolicyStoreAlias(
    args: CreatePolicyStoreAliasCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: CreatePolicyStoreAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyTemplateCommand}
   */
  createPolicyTemplate(
    args: CreatePolicyTemplateCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<CreatePolicyTemplateCommandOutput>;
  createPolicyTemplate(
    args: CreatePolicyTemplateCommandInput,
    cb: (err: any, data?: CreatePolicyTemplateCommandOutput) => void
  ): void;
  createPolicyTemplate(
    args: CreatePolicyTemplateCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: CreatePolicyTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdentitySourceCommand}
   */
  deleteIdentitySource(
    args: DeleteIdentitySourceCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<DeleteIdentitySourceCommandOutput>;
  deleteIdentitySource(
    args: DeleteIdentitySourceCommandInput,
    cb: (err: any, data?: DeleteIdentitySourceCommandOutput) => void
  ): void;
  deleteIdentitySource(
    args: DeleteIdentitySourceCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: DeleteIdentitySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(
    args: DeletePolicyCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<DeletePolicyCommandOutput>;
  deletePolicy(
    args: DeletePolicyCommandInput,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyStoreCommand}
   */
  deletePolicyStore(
    args: DeletePolicyStoreCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<DeletePolicyStoreCommandOutput>;
  deletePolicyStore(
    args: DeletePolicyStoreCommandInput,
    cb: (err: any, data?: DeletePolicyStoreCommandOutput) => void
  ): void;
  deletePolicyStore(
    args: DeletePolicyStoreCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: DeletePolicyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyStoreAliasCommand}
   */
  deletePolicyStoreAlias(
    args: DeletePolicyStoreAliasCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<DeletePolicyStoreAliasCommandOutput>;
  deletePolicyStoreAlias(
    args: DeletePolicyStoreAliasCommandInput,
    cb: (err: any, data?: DeletePolicyStoreAliasCommandOutput) => void
  ): void;
  deletePolicyStoreAlias(
    args: DeletePolicyStoreAliasCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: DeletePolicyStoreAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyTemplateCommand}
   */
  deletePolicyTemplate(
    args: DeletePolicyTemplateCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<DeletePolicyTemplateCommandOutput>;
  deletePolicyTemplate(
    args: DeletePolicyTemplateCommandInput,
    cb: (err: any, data?: DeletePolicyTemplateCommandOutput) => void
  ): void;
  deletePolicyTemplate(
    args: DeletePolicyTemplateCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: DeletePolicyTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentitySourceCommand}
   */
  getIdentitySource(
    args: GetIdentitySourceCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<GetIdentitySourceCommandOutput>;
  getIdentitySource(
    args: GetIdentitySourceCommandInput,
    cb: (err: any, data?: GetIdentitySourceCommandOutput) => void
  ): void;
  getIdentitySource(
    args: GetIdentitySourceCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: GetIdentitySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(
    args: GetPolicyCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<GetPolicyCommandOutput>;
  getPolicy(
    args: GetPolicyCommandInput,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyStoreCommand}
   */
  getPolicyStore(
    args: GetPolicyStoreCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<GetPolicyStoreCommandOutput>;
  getPolicyStore(
    args: GetPolicyStoreCommandInput,
    cb: (err: any, data?: GetPolicyStoreCommandOutput) => void
  ): void;
  getPolicyStore(
    args: GetPolicyStoreCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: GetPolicyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyStoreAliasCommand}
   */
  getPolicyStoreAlias(
    args: GetPolicyStoreAliasCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<GetPolicyStoreAliasCommandOutput>;
  getPolicyStoreAlias(
    args: GetPolicyStoreAliasCommandInput,
    cb: (err: any, data?: GetPolicyStoreAliasCommandOutput) => void
  ): void;
  getPolicyStoreAlias(
    args: GetPolicyStoreAliasCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: GetPolicyStoreAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyTemplateCommand}
   */
  getPolicyTemplate(
    args: GetPolicyTemplateCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<GetPolicyTemplateCommandOutput>;
  getPolicyTemplate(
    args: GetPolicyTemplateCommandInput,
    cb: (err: any, data?: GetPolicyTemplateCommandOutput) => void
  ): void;
  getPolicyTemplate(
    args: GetPolicyTemplateCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: GetPolicyTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaCommand}
   */
  getSchema(
    args: GetSchemaCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<GetSchemaCommandOutput>;
  getSchema(
    args: GetSchemaCommandInput,
    cb: (err: any, data?: GetSchemaCommandOutput) => void
  ): void;
  getSchema(
    args: GetSchemaCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: GetSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link IsAuthorizedCommand}
   */
  isAuthorized(
    args: IsAuthorizedCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<IsAuthorizedCommandOutput>;
  isAuthorized(
    args: IsAuthorizedCommandInput,
    cb: (err: any, data?: IsAuthorizedCommandOutput) => void
  ): void;
  isAuthorized(
    args: IsAuthorizedCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: IsAuthorizedCommandOutput) => void
  ): void;

  /**
   * @see {@link IsAuthorizedWithTokenCommand}
   */
  isAuthorizedWithToken(
    args: IsAuthorizedWithTokenCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<IsAuthorizedWithTokenCommandOutput>;
  isAuthorizedWithToken(
    args: IsAuthorizedWithTokenCommandInput,
    cb: (err: any, data?: IsAuthorizedWithTokenCommandOutput) => void
  ): void;
  isAuthorizedWithToken(
    args: IsAuthorizedWithTokenCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: IsAuthorizedWithTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentitySourcesCommand}
   */
  listIdentitySources(
    args: ListIdentitySourcesCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<ListIdentitySourcesCommandOutput>;
  listIdentitySources(
    args: ListIdentitySourcesCommandInput,
    cb: (err: any, data?: ListIdentitySourcesCommandOutput) => void
  ): void;
  listIdentitySources(
    args: ListIdentitySourcesCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: ListIdentitySourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(
    args: ListPoliciesCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<ListPoliciesCommandOutput>;
  listPolicies(
    args: ListPoliciesCommandInput,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;
  listPolicies(
    args: ListPoliciesCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyStoreAliasesCommand}
   */
  listPolicyStoreAliases(): Promise<ListPolicyStoreAliasesCommandOutput>;
  listPolicyStoreAliases(
    args: ListPolicyStoreAliasesCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<ListPolicyStoreAliasesCommandOutput>;
  listPolicyStoreAliases(
    args: ListPolicyStoreAliasesCommandInput,
    cb: (err: any, data?: ListPolicyStoreAliasesCommandOutput) => void
  ): void;
  listPolicyStoreAliases(
    args: ListPolicyStoreAliasesCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: ListPolicyStoreAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyStoresCommand}
   */
  listPolicyStores(): Promise<ListPolicyStoresCommandOutput>;
  listPolicyStores(
    args: ListPolicyStoresCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<ListPolicyStoresCommandOutput>;
  listPolicyStores(
    args: ListPolicyStoresCommandInput,
    cb: (err: any, data?: ListPolicyStoresCommandOutput) => void
  ): void;
  listPolicyStores(
    args: ListPolicyStoresCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: ListPolicyStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyTemplatesCommand}
   */
  listPolicyTemplates(
    args: ListPolicyTemplatesCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<ListPolicyTemplatesCommandOutput>;
  listPolicyTemplates(
    args: ListPolicyTemplatesCommandInput,
    cb: (err: any, data?: ListPolicyTemplatesCommandOutput) => void
  ): void;
  listPolicyTemplates(
    args: ListPolicyTemplatesCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: ListPolicyTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSchemaCommand}
   */
  putSchema(
    args: PutSchemaCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<PutSchemaCommandOutput>;
  putSchema(
    args: PutSchemaCommandInput,
    cb: (err: any, data?: PutSchemaCommandOutput) => void
  ): void;
  putSchema(
    args: PutSchemaCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: PutSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdentitySourceCommand}
   */
  updateIdentitySource(
    args: UpdateIdentitySourceCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<UpdateIdentitySourceCommandOutput>;
  updateIdentitySource(
    args: UpdateIdentitySourceCommandInput,
    cb: (err: any, data?: UpdateIdentitySourceCommandOutput) => void
  ): void;
  updateIdentitySource(
    args: UpdateIdentitySourceCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: UpdateIdentitySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePolicyCommand}
   */
  updatePolicy(
    args: UpdatePolicyCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<UpdatePolicyCommandOutput>;
  updatePolicy(
    args: UpdatePolicyCommandInput,
    cb: (err: any, data?: UpdatePolicyCommandOutput) => void
  ): void;
  updatePolicy(
    args: UpdatePolicyCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: UpdatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePolicyStoreCommand}
   */
  updatePolicyStore(
    args: UpdatePolicyStoreCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<UpdatePolicyStoreCommandOutput>;
  updatePolicyStore(
    args: UpdatePolicyStoreCommandInput,
    cb: (err: any, data?: UpdatePolicyStoreCommandOutput) => void
  ): void;
  updatePolicyStore(
    args: UpdatePolicyStoreCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: UpdatePolicyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePolicyTemplateCommand}
   */
  updatePolicyTemplate(
    args: UpdatePolicyTemplateCommandInput,
    options?: VerifiedPermissionsRequestOptions
  ): Promise<UpdatePolicyTemplateCommandOutput>;
  updatePolicyTemplate(
    args: UpdatePolicyTemplateCommandInput,
    cb: (err: any, data?: UpdatePolicyTemplateCommandOutput) => void
  ): void;
  updatePolicyTemplate(
    args: UpdatePolicyTemplateCommandInput,
    options: VerifiedPermissionsRequestOptions,
    cb: (err: any, data?: UpdatePolicyTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentitySourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIdentitySourcesCommandOutput}.
   */
  paginateListIdentitySources(
    args: ListIdentitySourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIdentitySourcesCommandOutput>;

  /**
   * @see {@link ListPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPoliciesCommandOutput}.
   */
  paginateListPolicies(
    args: ListPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPoliciesCommandOutput>;

  /**
   * @see {@link ListPolicyStoreAliasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPolicyStoreAliasesCommandOutput}.
   */
  paginateListPolicyStoreAliases(
    args?: ListPolicyStoreAliasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPolicyStoreAliasesCommandOutput>;

  /**
   * @see {@link ListPolicyStoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPolicyStoresCommandOutput}.
   */
  paginateListPolicyStores(
    args?: ListPolicyStoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPolicyStoresCommandOutput>;

  /**
   * @see {@link ListPolicyTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPolicyTemplatesCommandOutput}.
   */
  paginateListPolicyTemplates(
    args: ListPolicyTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPolicyTemplatesCommandOutput>;
}

/**
 * <p>Amazon Verified Permissions is a permissions management service from Amazon Web Services. You can use Verified Permissions to manage permissions for your application, and authorize user access based on those permissions. Using Verified Permissions, application developers can grant access based on information about the users, resources, and requested actions. You can also evaluate additional information like group membership, attributes of the resources, and session context, such as time of request and IP addresses. Verified Permissions manages these permissions by letting you create and store authorization policies for your applications, such as consumer-facing web sites and enterprise business systems.</p> <p>Verified Permissions uses Cedar as the policy language to express your permission requirements. Cedar supports both role-based access control (RBAC) and attribute-based access control (ABAC) authorization models.</p> <p>For more information about configuring, administering, and using Amazon Verified Permissions in your applications, see the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/">Amazon Verified Permissions User Guide</a>.</p> <p>For more information about the Cedar policy language, see the <a href="https://docs.cedarpolicy.com/">Cedar Policy Language Guide</a>.</p> <important> <p>When you write Cedar policies that reference principals, resources and actions, you can define the unique identifiers used for each of those elements. We strongly recommend that you follow these best practices:</p> <ul> <li> <p> <b>Use values like universally unique identifiers (UUIDs) for all principal and resource identifiers.</b> </p> <p>For example, if user <code>jane</code> leaves the company, and you later let someone else use the name <code>jane</code>, then that new user automatically gets access to everything granted by policies that still reference <code>User::"jane"</code>. Cedar can’t distinguish between the new user and the old. This applies to both principal and resource identifiers. Always use identifiers that are guaranteed unique and never reused to ensure that you don’t unintentionally grant access because of the presence of an old identifier in a policy.</p> <p>Where you use a UUID for an entity, we recommend that you follow it with the // comment specifier and the ‘friendly’ name of your entity. This helps to make your policies easier to understand. For example: principal == User::"a1b2c3d4-e5f6-a1b2-c3d4-EXAMPLE11111", // alice</p> </li> <li> <p> <b>Do not include personally identifying, confidential, or sensitive information as part of the unique identifier for your principals or resources.</b> These identifiers are included in log entries shared in CloudTrail trails.</p> </li> </ul> </important> <p>Several operations return structures that appear similar, but have different purposes. As new functionality is added to the product, the structure used in a parameter of one operation might need to change in a way that wouldn't make sense for the same parameter in a different operation. To help you understand the purpose of each, the following naming convention is used for the structures:</p> <ul> <li> <p>Parameter type structures that end in <code>Detail</code> are used in <code>Get</code> operations.</p> </li> <li> <p>Parameter type structures that end in <code>Item</code> are used in <code>List</code> operations.</p> </li> <li> <p>Parameter type structures that use neither suffix are used in the mutating (create and update) operations.</p> </li> </ul>
 * @public
 */
export class VerifiedPermissions extends VerifiedPermissionsClient implements VerifiedPermissions {}
createAggregatedClient(commands, VerifiedPermissions, { paginators });
