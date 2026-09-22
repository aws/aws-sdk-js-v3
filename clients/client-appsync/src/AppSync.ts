// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { AppSyncClient } from "./AppSyncClient";
import {
  type AssociateApiCommandInput,
  type AssociateApiCommandOutput,
  AssociateApiCommand,
} from "./commands/AssociateApiCommand";
import {
  type AssociateMergedGraphqlApiCommandInput,
  type AssociateMergedGraphqlApiCommandOutput,
  AssociateMergedGraphqlApiCommand,
} from "./commands/AssociateMergedGraphqlApiCommand";
import {
  type AssociateSourceGraphqlApiCommandInput,
  type AssociateSourceGraphqlApiCommandOutput,
  AssociateSourceGraphqlApiCommand,
} from "./commands/AssociateSourceGraphqlApiCommand";
import {
  type CreateApiCacheCommandInput,
  type CreateApiCacheCommandOutput,
  CreateApiCacheCommand,
} from "./commands/CreateApiCacheCommand";
import { type CreateApiCommandInput, type CreateApiCommandOutput, CreateApiCommand } from "./commands/CreateApiCommand";
import {
  type CreateApiKeyCommandInput,
  type CreateApiKeyCommandOutput,
  CreateApiKeyCommand,
} from "./commands/CreateApiKeyCommand";
import {
  type CreateChannelNamespaceCommandInput,
  type CreateChannelNamespaceCommandOutput,
  CreateChannelNamespaceCommand,
} from "./commands/CreateChannelNamespaceCommand";
import {
  type CreateDataSourceCommandInput,
  type CreateDataSourceCommandOutput,
  CreateDataSourceCommand,
} from "./commands/CreateDataSourceCommand";
import {
  type CreateDomainNameCommandInput,
  type CreateDomainNameCommandOutput,
  CreateDomainNameCommand,
} from "./commands/CreateDomainNameCommand";
import {
  type CreateFunctionCommandInput,
  type CreateFunctionCommandOutput,
  CreateFunctionCommand,
} from "./commands/CreateFunctionCommand";
import {
  type CreateGraphqlApiCommandInput,
  type CreateGraphqlApiCommandOutput,
  CreateGraphqlApiCommand,
} from "./commands/CreateGraphqlApiCommand";
import {
  type CreateResolverCommandInput,
  type CreateResolverCommandOutput,
  CreateResolverCommand,
} from "./commands/CreateResolverCommand";
import {
  type CreateTypeCommandInput,
  type CreateTypeCommandOutput,
  CreateTypeCommand,
} from "./commands/CreateTypeCommand";
import {
  type DeleteApiCacheCommandInput,
  type DeleteApiCacheCommandOutput,
  DeleteApiCacheCommand,
} from "./commands/DeleteApiCacheCommand";
import { type DeleteApiCommandInput, type DeleteApiCommandOutput, DeleteApiCommand } from "./commands/DeleteApiCommand";
import {
  type DeleteApiKeyCommandInput,
  type DeleteApiKeyCommandOutput,
  DeleteApiKeyCommand,
} from "./commands/DeleteApiKeyCommand";
import {
  type DeleteChannelNamespaceCommandInput,
  type DeleteChannelNamespaceCommandOutput,
  DeleteChannelNamespaceCommand,
} from "./commands/DeleteChannelNamespaceCommand";
import {
  type DeleteDataSourceCommandInput,
  type DeleteDataSourceCommandOutput,
  DeleteDataSourceCommand,
} from "./commands/DeleteDataSourceCommand";
import {
  type DeleteDomainNameCommandInput,
  type DeleteDomainNameCommandOutput,
  DeleteDomainNameCommand,
} from "./commands/DeleteDomainNameCommand";
import {
  type DeleteFunctionCommandInput,
  type DeleteFunctionCommandOutput,
  DeleteFunctionCommand,
} from "./commands/DeleteFunctionCommand";
import {
  type DeleteGraphqlApiCommandInput,
  type DeleteGraphqlApiCommandOutput,
  DeleteGraphqlApiCommand,
} from "./commands/DeleteGraphqlApiCommand";
import {
  type DeleteResolverCommandInput,
  type DeleteResolverCommandOutput,
  DeleteResolverCommand,
} from "./commands/DeleteResolverCommand";
import {
  type DeleteTypeCommandInput,
  type DeleteTypeCommandOutput,
  DeleteTypeCommand,
} from "./commands/DeleteTypeCommand";
import {
  type DisassociateApiCommandInput,
  type DisassociateApiCommandOutput,
  DisassociateApiCommand,
} from "./commands/DisassociateApiCommand";
import {
  type DisassociateMergedGraphqlApiCommandInput,
  type DisassociateMergedGraphqlApiCommandOutput,
  DisassociateMergedGraphqlApiCommand,
} from "./commands/DisassociateMergedGraphqlApiCommand";
import {
  type DisassociateSourceGraphqlApiCommandInput,
  type DisassociateSourceGraphqlApiCommandOutput,
  DisassociateSourceGraphqlApiCommand,
} from "./commands/DisassociateSourceGraphqlApiCommand";
import {
  type EvaluateCodeCommandInput,
  type EvaluateCodeCommandOutput,
  EvaluateCodeCommand,
} from "./commands/EvaluateCodeCommand";
import {
  type EvaluateMappingTemplateCommandInput,
  type EvaluateMappingTemplateCommandOutput,
  EvaluateMappingTemplateCommand,
} from "./commands/EvaluateMappingTemplateCommand";
import {
  type FlushApiCacheCommandInput,
  type FlushApiCacheCommandOutput,
  FlushApiCacheCommand,
} from "./commands/FlushApiCacheCommand";
import {
  type GetApiAssociationCommandInput,
  type GetApiAssociationCommandOutput,
  GetApiAssociationCommand,
} from "./commands/GetApiAssociationCommand";
import {
  type GetApiCacheCommandInput,
  type GetApiCacheCommandOutput,
  GetApiCacheCommand,
} from "./commands/GetApiCacheCommand";
import { type GetApiCommandInput, type GetApiCommandOutput, GetApiCommand } from "./commands/GetApiCommand";
import {
  type GetChannelNamespaceCommandInput,
  type GetChannelNamespaceCommandOutput,
  GetChannelNamespaceCommand,
} from "./commands/GetChannelNamespaceCommand";
import {
  type GetDataSourceCommandInput,
  type GetDataSourceCommandOutput,
  GetDataSourceCommand,
} from "./commands/GetDataSourceCommand";
import {
  type GetDataSourceIntrospectionCommandInput,
  type GetDataSourceIntrospectionCommandOutput,
  GetDataSourceIntrospectionCommand,
} from "./commands/GetDataSourceIntrospectionCommand";
import {
  type GetDomainNameCommandInput,
  type GetDomainNameCommandOutput,
  GetDomainNameCommand,
} from "./commands/GetDomainNameCommand";
import {
  type GetFunctionCommandInput,
  type GetFunctionCommandOutput,
  GetFunctionCommand,
} from "./commands/GetFunctionCommand";
import {
  type GetGraphqlApiCommandInput,
  type GetGraphqlApiCommandOutput,
  GetGraphqlApiCommand,
} from "./commands/GetGraphqlApiCommand";
import {
  type GetGraphqlApiEnvironmentVariablesCommandInput,
  type GetGraphqlApiEnvironmentVariablesCommandOutput,
  GetGraphqlApiEnvironmentVariablesCommand,
} from "./commands/GetGraphqlApiEnvironmentVariablesCommand";
import {
  type GetIntrospectionSchemaCommandInput,
  type GetIntrospectionSchemaCommandOutput,
  GetIntrospectionSchemaCommand,
} from "./commands/GetIntrospectionSchemaCommand";
import {
  type GetResolverCommandInput,
  type GetResolverCommandOutput,
  GetResolverCommand,
} from "./commands/GetResolverCommand";
import {
  type GetSchemaCreationStatusCommandInput,
  type GetSchemaCreationStatusCommandOutput,
  GetSchemaCreationStatusCommand,
} from "./commands/GetSchemaCreationStatusCommand";
import {
  type GetSourceApiAssociationCommandInput,
  type GetSourceApiAssociationCommandOutput,
  GetSourceApiAssociationCommand,
} from "./commands/GetSourceApiAssociationCommand";
import { type GetTypeCommandInput, type GetTypeCommandOutput, GetTypeCommand } from "./commands/GetTypeCommand";
import {
  type ListApiKeysCommandInput,
  type ListApiKeysCommandOutput,
  ListApiKeysCommand,
} from "./commands/ListApiKeysCommand";
import { type ListApisCommandInput, type ListApisCommandOutput, ListApisCommand } from "./commands/ListApisCommand";
import {
  type ListChannelNamespacesCommandInput,
  type ListChannelNamespacesCommandOutput,
  ListChannelNamespacesCommand,
} from "./commands/ListChannelNamespacesCommand";
import {
  type ListDataSourcesCommandInput,
  type ListDataSourcesCommandOutput,
  ListDataSourcesCommand,
} from "./commands/ListDataSourcesCommand";
import {
  type ListDomainNamesCommandInput,
  type ListDomainNamesCommandOutput,
  ListDomainNamesCommand,
} from "./commands/ListDomainNamesCommand";
import {
  type ListFunctionsCommandInput,
  type ListFunctionsCommandOutput,
  ListFunctionsCommand,
} from "./commands/ListFunctionsCommand";
import {
  type ListGraphqlApisCommandInput,
  type ListGraphqlApisCommandOutput,
  ListGraphqlApisCommand,
} from "./commands/ListGraphqlApisCommand";
import {
  type ListResolversByFunctionCommandInput,
  type ListResolversByFunctionCommandOutput,
  ListResolversByFunctionCommand,
} from "./commands/ListResolversByFunctionCommand";
import {
  type ListResolversCommandInput,
  type ListResolversCommandOutput,
  ListResolversCommand,
} from "./commands/ListResolversCommand";
import {
  type ListSourceApiAssociationsCommandInput,
  type ListSourceApiAssociationsCommandOutput,
  ListSourceApiAssociationsCommand,
} from "./commands/ListSourceApiAssociationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTypesByAssociationCommandInput,
  type ListTypesByAssociationCommandOutput,
  ListTypesByAssociationCommand,
} from "./commands/ListTypesByAssociationCommand";
import { type ListTypesCommandInput, type ListTypesCommandOutput, ListTypesCommand } from "./commands/ListTypesCommand";
import {
  type PutGraphqlApiEnvironmentVariablesCommandInput,
  type PutGraphqlApiEnvironmentVariablesCommandOutput,
  PutGraphqlApiEnvironmentVariablesCommand,
} from "./commands/PutGraphqlApiEnvironmentVariablesCommand";
import {
  type StartDataSourceIntrospectionCommandInput,
  type StartDataSourceIntrospectionCommandOutput,
  StartDataSourceIntrospectionCommand,
} from "./commands/StartDataSourceIntrospectionCommand";
import {
  type StartSchemaCreationCommandInput,
  type StartSchemaCreationCommandOutput,
  StartSchemaCreationCommand,
} from "./commands/StartSchemaCreationCommand";
import {
  type StartSchemaMergeCommandInput,
  type StartSchemaMergeCommandOutput,
  StartSchemaMergeCommand,
} from "./commands/StartSchemaMergeCommand";
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
  type UpdateApiCacheCommandInput,
  type UpdateApiCacheCommandOutput,
  UpdateApiCacheCommand,
} from "./commands/UpdateApiCacheCommand";
import { type UpdateApiCommandInput, type UpdateApiCommandOutput, UpdateApiCommand } from "./commands/UpdateApiCommand";
import {
  type UpdateApiKeyCommandInput,
  type UpdateApiKeyCommandOutput,
  UpdateApiKeyCommand,
} from "./commands/UpdateApiKeyCommand";
import {
  type UpdateChannelNamespaceCommandInput,
  type UpdateChannelNamespaceCommandOutput,
  UpdateChannelNamespaceCommand,
} from "./commands/UpdateChannelNamespaceCommand";
import {
  type UpdateDataSourceCommandInput,
  type UpdateDataSourceCommandOutput,
  UpdateDataSourceCommand,
} from "./commands/UpdateDataSourceCommand";
import {
  type UpdateDomainNameCommandInput,
  type UpdateDomainNameCommandOutput,
  UpdateDomainNameCommand,
} from "./commands/UpdateDomainNameCommand";
import {
  type UpdateFunctionCommandInput,
  type UpdateFunctionCommandOutput,
  UpdateFunctionCommand,
} from "./commands/UpdateFunctionCommand";
import {
  type UpdateGraphqlApiCommandInput,
  type UpdateGraphqlApiCommandOutput,
  UpdateGraphqlApiCommand,
} from "./commands/UpdateGraphqlApiCommand";
import {
  type UpdateResolverCommandInput,
  type UpdateResolverCommandOutput,
  UpdateResolverCommand,
} from "./commands/UpdateResolverCommand";
import {
  type UpdateSourceApiAssociationCommandInput,
  type UpdateSourceApiAssociationCommandOutput,
  UpdateSourceApiAssociationCommand,
} from "./commands/UpdateSourceApiAssociationCommand";
import {
  type UpdateTypeCommandInput,
  type UpdateTypeCommandOutput,
  UpdateTypeCommand,
} from "./commands/UpdateTypeCommand";
import { paginateListApiKeys } from "./pagination/ListApiKeysPaginator";
import { paginateListApis } from "./pagination/ListApisPaginator";
import { paginateListChannelNamespaces } from "./pagination/ListChannelNamespacesPaginator";
import { paginateListDataSources } from "./pagination/ListDataSourcesPaginator";
import { paginateListDomainNames } from "./pagination/ListDomainNamesPaginator";
import { paginateListFunctions } from "./pagination/ListFunctionsPaginator";
import { paginateListGraphqlApis } from "./pagination/ListGraphqlApisPaginator";
import { paginateListResolversByFunction } from "./pagination/ListResolversByFunctionPaginator";
import { paginateListResolvers } from "./pagination/ListResolversPaginator";
import { paginateListSourceApiAssociations } from "./pagination/ListSourceApiAssociationsPaginator";
import { paginateListTypesByAssociation } from "./pagination/ListTypesByAssociationPaginator";
import { paginateListTypes } from "./pagination/ListTypesPaginator";

const commands = {
  AssociateApiCommand,
  AssociateMergedGraphqlApiCommand,
  AssociateSourceGraphqlApiCommand,
  CreateApiCommand,
  CreateApiCacheCommand,
  CreateApiKeyCommand,
  CreateChannelNamespaceCommand,
  CreateDataSourceCommand,
  CreateDomainNameCommand,
  CreateFunctionCommand,
  CreateGraphqlApiCommand,
  CreateResolverCommand,
  CreateTypeCommand,
  DeleteApiCommand,
  DeleteApiCacheCommand,
  DeleteApiKeyCommand,
  DeleteChannelNamespaceCommand,
  DeleteDataSourceCommand,
  DeleteDomainNameCommand,
  DeleteFunctionCommand,
  DeleteGraphqlApiCommand,
  DeleteResolverCommand,
  DeleteTypeCommand,
  DisassociateApiCommand,
  DisassociateMergedGraphqlApiCommand,
  DisassociateSourceGraphqlApiCommand,
  EvaluateCodeCommand,
  EvaluateMappingTemplateCommand,
  FlushApiCacheCommand,
  GetApiCommand,
  GetApiAssociationCommand,
  GetApiCacheCommand,
  GetChannelNamespaceCommand,
  GetDataSourceCommand,
  GetDataSourceIntrospectionCommand,
  GetDomainNameCommand,
  GetFunctionCommand,
  GetGraphqlApiCommand,
  GetGraphqlApiEnvironmentVariablesCommand,
  GetIntrospectionSchemaCommand,
  GetResolverCommand,
  GetSchemaCreationStatusCommand,
  GetSourceApiAssociationCommand,
  GetTypeCommand,
  ListApiKeysCommand,
  ListApisCommand,
  ListChannelNamespacesCommand,
  ListDataSourcesCommand,
  ListDomainNamesCommand,
  ListFunctionsCommand,
  ListGraphqlApisCommand,
  ListResolversCommand,
  ListResolversByFunctionCommand,
  ListSourceApiAssociationsCommand,
  ListTagsForResourceCommand,
  ListTypesCommand,
  ListTypesByAssociationCommand,
  PutGraphqlApiEnvironmentVariablesCommand,
  StartDataSourceIntrospectionCommand,
  StartSchemaCreationCommand,
  StartSchemaMergeCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApiCommand,
  UpdateApiCacheCommand,
  UpdateApiKeyCommand,
  UpdateChannelNamespaceCommand,
  UpdateDataSourceCommand,
  UpdateDomainNameCommand,
  UpdateFunctionCommand,
  UpdateGraphqlApiCommand,
  UpdateResolverCommand,
  UpdateSourceApiAssociationCommand,
  UpdateTypeCommand,
};
const paginators = {
  paginateListApiKeys,
  paginateListApis,
  paginateListChannelNamespaces,
  paginateListDataSources,
  paginateListDomainNames,
  paginateListFunctions,
  paginateListGraphqlApis,
  paginateListResolvers,
  paginateListResolversByFunction,
  paginateListSourceApiAssociations,
  paginateListTypes,
  paginateListTypesByAssociation,
};

/**
 * @public
 */
export interface AppSyncRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface AppSync {
  /**
   * @see {@link AssociateApiCommand}
   */
  associateApi(
    args: AssociateApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<AssociateApiCommandOutput>;
  associateApi(
    args: AssociateApiCommandInput,
    cb: (err: any, data?: AssociateApiCommandOutput) => void
  ): void;
  associateApi(
    args: AssociateApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: AssociateApiCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateMergedGraphqlApiCommand}
   */
  associateMergedGraphqlApi(
    args: AssociateMergedGraphqlApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<AssociateMergedGraphqlApiCommandOutput>;
  associateMergedGraphqlApi(
    args: AssociateMergedGraphqlApiCommandInput,
    cb: (err: any, data?: AssociateMergedGraphqlApiCommandOutput) => void
  ): void;
  associateMergedGraphqlApi(
    args: AssociateMergedGraphqlApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: AssociateMergedGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSourceGraphqlApiCommand}
   */
  associateSourceGraphqlApi(
    args: AssociateSourceGraphqlApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<AssociateSourceGraphqlApiCommandOutput>;
  associateSourceGraphqlApi(
    args: AssociateSourceGraphqlApiCommandInput,
    cb: (err: any, data?: AssociateSourceGraphqlApiCommandOutput) => void
  ): void;
  associateSourceGraphqlApi(
    args: AssociateSourceGraphqlApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: AssociateSourceGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApiCommand}
   */
  createApi(
    args: CreateApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<CreateApiCommandOutput>;
  createApi(
    args: CreateApiCommandInput,
    cb: (err: any, data?: CreateApiCommandOutput) => void
  ): void;
  createApi(
    args: CreateApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: CreateApiCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApiCacheCommand}
   */
  createApiCache(
    args: CreateApiCacheCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<CreateApiCacheCommandOutput>;
  createApiCache(
    args: CreateApiCacheCommandInput,
    cb: (err: any, data?: CreateApiCacheCommandOutput) => void
  ): void;
  createApiCache(
    args: CreateApiCacheCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: CreateApiCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApiKeyCommand}
   */
  createApiKey(
    args: CreateApiKeyCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<CreateApiKeyCommandOutput>;
  createApiKey(
    args: CreateApiKeyCommandInput,
    cb: (err: any, data?: CreateApiKeyCommandOutput) => void
  ): void;
  createApiKey(
    args: CreateApiKeyCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: CreateApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelNamespaceCommand}
   */
  createChannelNamespace(
    args: CreateChannelNamespaceCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<CreateChannelNamespaceCommandOutput>;
  createChannelNamespace(
    args: CreateChannelNamespaceCommandInput,
    cb: (err: any, data?: CreateChannelNamespaceCommandOutput) => void
  ): void;
  createChannelNamespace(
    args: CreateChannelNamespaceCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: CreateChannelNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceCommand}
   */
  createDataSource(
    args: CreateDataSourceCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<CreateDataSourceCommandOutput>;
  createDataSource(
    args: CreateDataSourceCommandInput,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  createDataSource(
    args: CreateDataSourceCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainNameCommand}
   */
  createDomainName(
    args: CreateDomainNameCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<CreateDomainNameCommandOutput>;
  createDomainName(
    args: CreateDomainNameCommandInput,
    cb: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): void;
  createDomainName(
    args: CreateDomainNameCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFunctionCommand}
   */
  createFunction(
    args: CreateFunctionCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<CreateFunctionCommandOutput>;
  createFunction(
    args: CreateFunctionCommandInput,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;
  createFunction(
    args: CreateFunctionCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGraphqlApiCommand}
   */
  createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<CreateGraphqlApiCommandOutput>;
  createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    cb: (err: any, data?: CreateGraphqlApiCommandOutput) => void
  ): void;
  createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: CreateGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResolverCommand}
   */
  createResolver(
    args: CreateResolverCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<CreateResolverCommandOutput>;
  createResolver(
    args: CreateResolverCommandInput,
    cb: (err: any, data?: CreateResolverCommandOutput) => void
  ): void;
  createResolver(
    args: CreateResolverCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: CreateResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTypeCommand}
   */
  createType(
    args: CreateTypeCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<CreateTypeCommandOutput>;
  createType(
    args: CreateTypeCommandInput,
    cb: (err: any, data?: CreateTypeCommandOutput) => void
  ): void;
  createType(
    args: CreateTypeCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: CreateTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApiCommand}
   */
  deleteApi(
    args: DeleteApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DeleteApiCommandOutput>;
  deleteApi(
    args: DeleteApiCommandInput,
    cb: (err: any, data?: DeleteApiCommandOutput) => void
  ): void;
  deleteApi(
    args: DeleteApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DeleteApiCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApiCacheCommand}
   */
  deleteApiCache(
    args: DeleteApiCacheCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DeleteApiCacheCommandOutput>;
  deleteApiCache(
    args: DeleteApiCacheCommandInput,
    cb: (err: any, data?: DeleteApiCacheCommandOutput) => void
  ): void;
  deleteApiCache(
    args: DeleteApiCacheCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DeleteApiCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApiKeyCommand}
   */
  deleteApiKey(
    args: DeleteApiKeyCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DeleteApiKeyCommandOutput>;
  deleteApiKey(
    args: DeleteApiKeyCommandInput,
    cb: (err: any, data?: DeleteApiKeyCommandOutput) => void
  ): void;
  deleteApiKey(
    args: DeleteApiKeyCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DeleteApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelNamespaceCommand}
   */
  deleteChannelNamespace(
    args: DeleteChannelNamespaceCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DeleteChannelNamespaceCommandOutput>;
  deleteChannelNamespace(
    args: DeleteChannelNamespaceCommandInput,
    cb: (err: any, data?: DeleteChannelNamespaceCommandOutput) => void
  ): void;
  deleteChannelNamespace(
    args: DeleteChannelNamespaceCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DeleteChannelNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainNameCommand}
   */
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DeleteDomainNameCommandOutput>;
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    cb: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): void;
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFunctionCommand}
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DeleteFunctionCommandOutput>;
  deleteFunction(
    args: DeleteFunctionCommandInput,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGraphqlApiCommand}
   */
  deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DeleteGraphqlApiCommandOutput>;
  deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    cb: (err: any, data?: DeleteGraphqlApiCommandOutput) => void
  ): void;
  deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DeleteGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResolverCommand}
   */
  deleteResolver(
    args: DeleteResolverCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DeleteResolverCommandOutput>;
  deleteResolver(
    args: DeleteResolverCommandInput,
    cb: (err: any, data?: DeleteResolverCommandOutput) => void
  ): void;
  deleteResolver(
    args: DeleteResolverCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DeleteResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTypeCommand}
   */
  deleteType(
    args: DeleteTypeCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DeleteTypeCommandOutput>;
  deleteType(
    args: DeleteTypeCommandInput,
    cb: (err: any, data?: DeleteTypeCommandOutput) => void
  ): void;
  deleteType(
    args: DeleteTypeCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DeleteTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateApiCommand}
   */
  disassociateApi(
    args: DisassociateApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DisassociateApiCommandOutput>;
  disassociateApi(
    args: DisassociateApiCommandInput,
    cb: (err: any, data?: DisassociateApiCommandOutput) => void
  ): void;
  disassociateApi(
    args: DisassociateApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DisassociateApiCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMergedGraphqlApiCommand}
   */
  disassociateMergedGraphqlApi(
    args: DisassociateMergedGraphqlApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DisassociateMergedGraphqlApiCommandOutput>;
  disassociateMergedGraphqlApi(
    args: DisassociateMergedGraphqlApiCommandInput,
    cb: (err: any, data?: DisassociateMergedGraphqlApiCommandOutput) => void
  ): void;
  disassociateMergedGraphqlApi(
    args: DisassociateMergedGraphqlApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DisassociateMergedGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSourceGraphqlApiCommand}
   */
  disassociateSourceGraphqlApi(
    args: DisassociateSourceGraphqlApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<DisassociateSourceGraphqlApiCommandOutput>;
  disassociateSourceGraphqlApi(
    args: DisassociateSourceGraphqlApiCommandInput,
    cb: (err: any, data?: DisassociateSourceGraphqlApiCommandOutput) => void
  ): void;
  disassociateSourceGraphqlApi(
    args: DisassociateSourceGraphqlApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: DisassociateSourceGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link EvaluateCodeCommand}
   */
  evaluateCode(
    args: EvaluateCodeCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<EvaluateCodeCommandOutput>;
  evaluateCode(
    args: EvaluateCodeCommandInput,
    cb: (err: any, data?: EvaluateCodeCommandOutput) => void
  ): void;
  evaluateCode(
    args: EvaluateCodeCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: EvaluateCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link EvaluateMappingTemplateCommand}
   */
  evaluateMappingTemplate(
    args: EvaluateMappingTemplateCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<EvaluateMappingTemplateCommandOutput>;
  evaluateMappingTemplate(
    args: EvaluateMappingTemplateCommandInput,
    cb: (err: any, data?: EvaluateMappingTemplateCommandOutput) => void
  ): void;
  evaluateMappingTemplate(
    args: EvaluateMappingTemplateCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: EvaluateMappingTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link FlushApiCacheCommand}
   */
  flushApiCache(
    args: FlushApiCacheCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<FlushApiCacheCommandOutput>;
  flushApiCache(
    args: FlushApiCacheCommandInput,
    cb: (err: any, data?: FlushApiCacheCommandOutput) => void
  ): void;
  flushApiCache(
    args: FlushApiCacheCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: FlushApiCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiCommand}
   */
  getApi(
    args: GetApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetApiCommandOutput>;
  getApi(
    args: GetApiCommandInput,
    cb: (err: any, data?: GetApiCommandOutput) => void
  ): void;
  getApi(
    args: GetApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetApiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiAssociationCommand}
   */
  getApiAssociation(
    args: GetApiAssociationCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetApiAssociationCommandOutput>;
  getApiAssociation(
    args: GetApiAssociationCommandInput,
    cb: (err: any, data?: GetApiAssociationCommandOutput) => void
  ): void;
  getApiAssociation(
    args: GetApiAssociationCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetApiAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiCacheCommand}
   */
  getApiCache(
    args: GetApiCacheCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetApiCacheCommandOutput>;
  getApiCache(
    args: GetApiCacheCommandInput,
    cb: (err: any, data?: GetApiCacheCommandOutput) => void
  ): void;
  getApiCache(
    args: GetApiCacheCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetApiCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelNamespaceCommand}
   */
  getChannelNamespace(
    args: GetChannelNamespaceCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetChannelNamespaceCommandOutput>;
  getChannelNamespace(
    args: GetChannelNamespaceCommandInput,
    cb: (err: any, data?: GetChannelNamespaceCommandOutput) => void
  ): void;
  getChannelNamespace(
    args: GetChannelNamespaceCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetChannelNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(
    args: GetDataSourceCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetDataSourceCommandOutput>;
  getDataSource(
    args: GetDataSourceCommandInput,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;
  getDataSource(
    args: GetDataSourceCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSourceIntrospectionCommand}
   */
  getDataSourceIntrospection(
    args: GetDataSourceIntrospectionCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetDataSourceIntrospectionCommandOutput>;
  getDataSourceIntrospection(
    args: GetDataSourceIntrospectionCommandInput,
    cb: (err: any, data?: GetDataSourceIntrospectionCommandOutput) => void
  ): void;
  getDataSourceIntrospection(
    args: GetDataSourceIntrospectionCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetDataSourceIntrospectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainNameCommand}
   */
  getDomainName(
    args: GetDomainNameCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetDomainNameCommandOutput>;
  getDomainName(
    args: GetDomainNameCommandInput,
    cb: (err: any, data?: GetDomainNameCommandOutput) => void
  ): void;
  getDomainName(
    args: GetDomainNameCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionCommand}
   */
  getFunction(
    args: GetFunctionCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetFunctionCommandOutput>;
  getFunction(
    args: GetFunctionCommandInput,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;
  getFunction(
    args: GetFunctionCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGraphqlApiCommand}
   */
  getGraphqlApi(
    args: GetGraphqlApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetGraphqlApiCommandOutput>;
  getGraphqlApi(
    args: GetGraphqlApiCommandInput,
    cb: (err: any, data?: GetGraphqlApiCommandOutput) => void
  ): void;
  getGraphqlApi(
    args: GetGraphqlApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGraphqlApiEnvironmentVariablesCommand}
   */
  getGraphqlApiEnvironmentVariables(
    args: GetGraphqlApiEnvironmentVariablesCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetGraphqlApiEnvironmentVariablesCommandOutput>;
  getGraphqlApiEnvironmentVariables(
    args: GetGraphqlApiEnvironmentVariablesCommandInput,
    cb: (err: any, data?: GetGraphqlApiEnvironmentVariablesCommandOutput) => void
  ): void;
  getGraphqlApiEnvironmentVariables(
    args: GetGraphqlApiEnvironmentVariablesCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetGraphqlApiEnvironmentVariablesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntrospectionSchemaCommand}
   */
  getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetIntrospectionSchemaCommandOutput>;
  getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    cb: (err: any, data?: GetIntrospectionSchemaCommandOutput) => void
  ): void;
  getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetIntrospectionSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverCommand}
   */
  getResolver(
    args: GetResolverCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetResolverCommandOutput>;
  getResolver(
    args: GetResolverCommandInput,
    cb: (err: any, data?: GetResolverCommandOutput) => void
  ): void;
  getResolver(
    args: GetResolverCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaCreationStatusCommand}
   */
  getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetSchemaCreationStatusCommandOutput>;
  getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    cb: (err: any, data?: GetSchemaCreationStatusCommandOutput) => void
  ): void;
  getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetSchemaCreationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSourceApiAssociationCommand}
   */
  getSourceApiAssociation(
    args: GetSourceApiAssociationCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetSourceApiAssociationCommandOutput>;
  getSourceApiAssociation(
    args: GetSourceApiAssociationCommandInput,
    cb: (err: any, data?: GetSourceApiAssociationCommandOutput) => void
  ): void;
  getSourceApiAssociation(
    args: GetSourceApiAssociationCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetSourceApiAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTypeCommand}
   */
  getType(
    args: GetTypeCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<GetTypeCommandOutput>;
  getType(
    args: GetTypeCommandInput,
    cb: (err: any, data?: GetTypeCommandOutput) => void
  ): void;
  getType(
    args: GetTypeCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: GetTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApiKeysCommand}
   */
  listApiKeys(
    args: ListApiKeysCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListApiKeysCommandOutput>;
  listApiKeys(
    args: ListApiKeysCommandInput,
    cb: (err: any, data?: ListApiKeysCommandOutput) => void
  ): void;
  listApiKeys(
    args: ListApiKeysCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListApiKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApisCommand}
   */
  listApis(): Promise<ListApisCommandOutput>;
  listApis(
    args: ListApisCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListApisCommandOutput>;
  listApis(
    args: ListApisCommandInput,
    cb: (err: any, data?: ListApisCommandOutput) => void
  ): void;
  listApis(
    args: ListApisCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListApisCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelNamespacesCommand}
   */
  listChannelNamespaces(
    args: ListChannelNamespacesCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListChannelNamespacesCommandOutput>;
  listChannelNamespaces(
    args: ListChannelNamespacesCommandInput,
    cb: (err: any, data?: ListChannelNamespacesCommandOutput) => void
  ): void;
  listChannelNamespaces(
    args: ListChannelNamespacesCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListChannelNamespacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListDataSourcesCommandOutput>;
  listDataSources(
    args: ListDataSourcesCommandInput,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  listDataSources(
    args: ListDataSourcesCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainNamesCommand}
   */
  listDomainNames(): Promise<ListDomainNamesCommandOutput>;
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListDomainNamesCommandOutput>;
  listDomainNames(
    args: ListDomainNamesCommandInput,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFunctionsCommand}
   */
  listFunctions(
    args: ListFunctionsCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListFunctionsCommandOutput>;
  listFunctions(
    args: ListFunctionsCommandInput,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;
  listFunctions(
    args: ListFunctionsCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGraphqlApisCommand}
   */
  listGraphqlApis(): Promise<ListGraphqlApisCommandOutput>;
  listGraphqlApis(
    args: ListGraphqlApisCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListGraphqlApisCommandOutput>;
  listGraphqlApis(
    args: ListGraphqlApisCommandInput,
    cb: (err: any, data?: ListGraphqlApisCommandOutput) => void
  ): void;
  listGraphqlApis(
    args: ListGraphqlApisCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListGraphqlApisCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolversCommand}
   */
  listResolvers(
    args: ListResolversCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListResolversCommandOutput>;
  listResolvers(
    args: ListResolversCommandInput,
    cb: (err: any, data?: ListResolversCommandOutput) => void
  ): void;
  listResolvers(
    args: ListResolversCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListResolversCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolversByFunctionCommand}
   */
  listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListResolversByFunctionCommandOutput>;
  listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    cb: (err: any, data?: ListResolversByFunctionCommandOutput) => void
  ): void;
  listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListResolversByFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceApiAssociationsCommand}
   */
  listSourceApiAssociations(
    args: ListSourceApiAssociationsCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListSourceApiAssociationsCommandOutput>;
  listSourceApiAssociations(
    args: ListSourceApiAssociationsCommandInput,
    cb: (err: any, data?: ListSourceApiAssociationsCommandOutput) => void
  ): void;
  listSourceApiAssociations(
    args: ListSourceApiAssociationsCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListSourceApiAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTypesCommand}
   */
  listTypes(
    args: ListTypesCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListTypesCommandOutput>;
  listTypes(
    args: ListTypesCommandInput,
    cb: (err: any, data?: ListTypesCommandOutput) => void
  ): void;
  listTypes(
    args: ListTypesCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTypesByAssociationCommand}
   */
  listTypesByAssociation(
    args: ListTypesByAssociationCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<ListTypesByAssociationCommandOutput>;
  listTypesByAssociation(
    args: ListTypesByAssociationCommandInput,
    cb: (err: any, data?: ListTypesByAssociationCommandOutput) => void
  ): void;
  listTypesByAssociation(
    args: ListTypesByAssociationCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: ListTypesByAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutGraphqlApiEnvironmentVariablesCommand}
   */
  putGraphqlApiEnvironmentVariables(
    args: PutGraphqlApiEnvironmentVariablesCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<PutGraphqlApiEnvironmentVariablesCommandOutput>;
  putGraphqlApiEnvironmentVariables(
    args: PutGraphqlApiEnvironmentVariablesCommandInput,
    cb: (err: any, data?: PutGraphqlApiEnvironmentVariablesCommandOutput) => void
  ): void;
  putGraphqlApiEnvironmentVariables(
    args: PutGraphqlApiEnvironmentVariablesCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: PutGraphqlApiEnvironmentVariablesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDataSourceIntrospectionCommand}
   */
  startDataSourceIntrospection(): Promise<StartDataSourceIntrospectionCommandOutput>;
  startDataSourceIntrospection(
    args: StartDataSourceIntrospectionCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<StartDataSourceIntrospectionCommandOutput>;
  startDataSourceIntrospection(
    args: StartDataSourceIntrospectionCommandInput,
    cb: (err: any, data?: StartDataSourceIntrospectionCommandOutput) => void
  ): void;
  startDataSourceIntrospection(
    args: StartDataSourceIntrospectionCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: StartDataSourceIntrospectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSchemaCreationCommand}
   */
  startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<StartSchemaCreationCommandOutput>;
  startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    cb: (err: any, data?: StartSchemaCreationCommandOutput) => void
  ): void;
  startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: StartSchemaCreationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSchemaMergeCommand}
   */
  startSchemaMerge(
    args: StartSchemaMergeCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<StartSchemaMergeCommandOutput>;
  startSchemaMerge(
    args: StartSchemaMergeCommandInput,
    cb: (err: any, data?: StartSchemaMergeCommandOutput) => void
  ): void;
  startSchemaMerge(
    args: StartSchemaMergeCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: StartSchemaMergeCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApiCommand}
   */
  updateApi(
    args: UpdateApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<UpdateApiCommandOutput>;
  updateApi(
    args: UpdateApiCommandInput,
    cb: (err: any, data?: UpdateApiCommandOutput) => void
  ): void;
  updateApi(
    args: UpdateApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: UpdateApiCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApiCacheCommand}
   */
  updateApiCache(
    args: UpdateApiCacheCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<UpdateApiCacheCommandOutput>;
  updateApiCache(
    args: UpdateApiCacheCommandInput,
    cb: (err: any, data?: UpdateApiCacheCommandOutput) => void
  ): void;
  updateApiCache(
    args: UpdateApiCacheCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: UpdateApiCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApiKeyCommand}
   */
  updateApiKey(
    args: UpdateApiKeyCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<UpdateApiKeyCommandOutput>;
  updateApiKey(
    args: UpdateApiKeyCommandInput,
    cb: (err: any, data?: UpdateApiKeyCommandOutput) => void
  ): void;
  updateApiKey(
    args: UpdateApiKeyCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: UpdateApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelNamespaceCommand}
   */
  updateChannelNamespace(
    args: UpdateChannelNamespaceCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<UpdateChannelNamespaceCommandOutput>;
  updateChannelNamespace(
    args: UpdateChannelNamespaceCommandInput,
    cb: (err: any, data?: UpdateChannelNamespaceCommandOutput) => void
  ): void;
  updateChannelNamespace(
    args: UpdateChannelNamespaceCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: UpdateChannelNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainNameCommand}
   */
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<UpdateDomainNameCommandOutput>;
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    cb: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): void;
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFunctionCommand}
   */
  updateFunction(
    args: UpdateFunctionCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<UpdateFunctionCommandOutput>;
  updateFunction(
    args: UpdateFunctionCommandInput,
    cb: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): void;
  updateFunction(
    args: UpdateFunctionCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGraphqlApiCommand}
   */
  updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<UpdateGraphqlApiCommandOutput>;
  updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    cb: (err: any, data?: UpdateGraphqlApiCommandOutput) => void
  ): void;
  updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: UpdateGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResolverCommand}
   */
  updateResolver(
    args: UpdateResolverCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<UpdateResolverCommandOutput>;
  updateResolver(
    args: UpdateResolverCommandInput,
    cb: (err: any, data?: UpdateResolverCommandOutput) => void
  ): void;
  updateResolver(
    args: UpdateResolverCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: UpdateResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSourceApiAssociationCommand}
   */
  updateSourceApiAssociation(
    args: UpdateSourceApiAssociationCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<UpdateSourceApiAssociationCommandOutput>;
  updateSourceApiAssociation(
    args: UpdateSourceApiAssociationCommandInput,
    cb: (err: any, data?: UpdateSourceApiAssociationCommandOutput) => void
  ): void;
  updateSourceApiAssociation(
    args: UpdateSourceApiAssociationCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: UpdateSourceApiAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTypeCommand}
   */
  updateType(
    args: UpdateTypeCommandInput,
    options?: AppSyncRequestOptions
  ): Promise<UpdateTypeCommandOutput>;
  updateType(
    args: UpdateTypeCommandInput,
    cb: (err: any, data?: UpdateTypeCommandOutput) => void
  ): void;
  updateType(
    args: UpdateTypeCommandInput,
    options: AppSyncRequestOptions,
    cb: (err: any, data?: UpdateTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApiKeysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApiKeysCommandOutput}.
   */
  paginateListApiKeys(
    args: ListApiKeysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApiKeysCommandOutput>;

  /**
   * @see {@link ListApisCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApisCommandOutput}.
   */
  paginateListApis(
    args?: ListApisCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApisCommandOutput>;

  /**
   * @see {@link ListChannelNamespacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChannelNamespacesCommandOutput}.
   */
  paginateListChannelNamespaces(
    args: ListChannelNamespacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChannelNamespacesCommandOutput>;

  /**
   * @see {@link ListDataSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataSourcesCommandOutput}.
   */
  paginateListDataSources(
    args: ListDataSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataSourcesCommandOutput>;

  /**
   * @see {@link ListDomainNamesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainNamesCommandOutput}.
   */
  paginateListDomainNames(
    args?: ListDomainNamesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainNamesCommandOutput>;

  /**
   * @see {@link ListFunctionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFunctionsCommandOutput}.
   */
  paginateListFunctions(
    args: ListFunctionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFunctionsCommandOutput>;

  /**
   * @see {@link ListGraphqlApisCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGraphqlApisCommandOutput}.
   */
  paginateListGraphqlApis(
    args?: ListGraphqlApisCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGraphqlApisCommandOutput>;

  /**
   * @see {@link ListResolversCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResolversCommandOutput}.
   */
  paginateListResolvers(
    args: ListResolversCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResolversCommandOutput>;

  /**
   * @see {@link ListResolversByFunctionCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResolversByFunctionCommandOutput}.
   */
  paginateListResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResolversByFunctionCommandOutput>;

  /**
   * @see {@link ListSourceApiAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSourceApiAssociationsCommandOutput}.
   */
  paginateListSourceApiAssociations(
    args: ListSourceApiAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSourceApiAssociationsCommandOutput>;

  /**
   * @see {@link ListTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTypesCommandOutput}.
   */
  paginateListTypes(
    args: ListTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTypesCommandOutput>;

  /**
   * @see {@link ListTypesByAssociationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTypesByAssociationCommandOutput}.
   */
  paginateListTypesByAssociation(
    args: ListTypesByAssociationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTypesByAssociationCommandOutput>;
}

/**
 * <p>AppSync provides API actions for creating and interacting with data
 *          sources using GraphQL from your application.</p>
 * @public
 */
export class AppSync extends AppSyncClient implements AppSync {}
createAggregatedClient(commands, AppSync, { paginators });
