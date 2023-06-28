// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AppSyncClient, AppSyncClientConfig } from "./AppSyncClient";
import {
  AssociateApiCommand,
  AssociateApiCommandInput,
  AssociateApiCommandOutput,
} from "./commands/AssociateApiCommand";
import {
  AssociateMergedGraphqlApiCommand,
  AssociateMergedGraphqlApiCommandInput,
  AssociateMergedGraphqlApiCommandOutput,
} from "./commands/AssociateMergedGraphqlApiCommand";
import {
  AssociateSourceGraphqlApiCommand,
  AssociateSourceGraphqlApiCommandInput,
  AssociateSourceGraphqlApiCommandOutput,
} from "./commands/AssociateSourceGraphqlApiCommand";
import {
  CreateApiCacheCommand,
  CreateApiCacheCommandInput,
  CreateApiCacheCommandOutput,
} from "./commands/CreateApiCacheCommand";
import {
  CreateApiKeyCommand,
  CreateApiKeyCommandInput,
  CreateApiKeyCommandOutput,
} from "./commands/CreateApiKeyCommand";
import {
  CreateDataSourceCommand,
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
} from "./commands/CreateDataSourceCommand";
import {
  CreateDomainNameCommand,
  CreateDomainNameCommandInput,
  CreateDomainNameCommandOutput,
} from "./commands/CreateDomainNameCommand";
import {
  CreateFunctionCommand,
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput,
} from "./commands/CreateFunctionCommand";
import {
  CreateGraphqlApiCommand,
  CreateGraphqlApiCommandInput,
  CreateGraphqlApiCommandOutput,
} from "./commands/CreateGraphqlApiCommand";
import {
  CreateResolverCommand,
  CreateResolverCommandInput,
  CreateResolverCommandOutput,
} from "./commands/CreateResolverCommand";
import { CreateTypeCommand, CreateTypeCommandInput, CreateTypeCommandOutput } from "./commands/CreateTypeCommand";
import {
  DeleteApiCacheCommand,
  DeleteApiCacheCommandInput,
  DeleteApiCacheCommandOutput,
} from "./commands/DeleteApiCacheCommand";
import {
  DeleteApiKeyCommand,
  DeleteApiKeyCommandInput,
  DeleteApiKeyCommandOutput,
} from "./commands/DeleteApiKeyCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
} from "./commands/DeleteDataSourceCommand";
import {
  DeleteDomainNameCommand,
  DeleteDomainNameCommandInput,
  DeleteDomainNameCommandOutput,
} from "./commands/DeleteDomainNameCommand";
import {
  DeleteFunctionCommand,
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput,
} from "./commands/DeleteFunctionCommand";
import {
  DeleteGraphqlApiCommand,
  DeleteGraphqlApiCommandInput,
  DeleteGraphqlApiCommandOutput,
} from "./commands/DeleteGraphqlApiCommand";
import {
  DeleteResolverCommand,
  DeleteResolverCommandInput,
  DeleteResolverCommandOutput,
} from "./commands/DeleteResolverCommand";
import { DeleteTypeCommand, DeleteTypeCommandInput, DeleteTypeCommandOutput } from "./commands/DeleteTypeCommand";
import {
  DisassociateApiCommand,
  DisassociateApiCommandInput,
  DisassociateApiCommandOutput,
} from "./commands/DisassociateApiCommand";
import {
  DisassociateMergedGraphqlApiCommand,
  DisassociateMergedGraphqlApiCommandInput,
  DisassociateMergedGraphqlApiCommandOutput,
} from "./commands/DisassociateMergedGraphqlApiCommand";
import {
  DisassociateSourceGraphqlApiCommand,
  DisassociateSourceGraphqlApiCommandInput,
  DisassociateSourceGraphqlApiCommandOutput,
} from "./commands/DisassociateSourceGraphqlApiCommand";
import {
  EvaluateCodeCommand,
  EvaluateCodeCommandInput,
  EvaluateCodeCommandOutput,
} from "./commands/EvaluateCodeCommand";
import {
  EvaluateMappingTemplateCommand,
  EvaluateMappingTemplateCommandInput,
  EvaluateMappingTemplateCommandOutput,
} from "./commands/EvaluateMappingTemplateCommand";
import {
  FlushApiCacheCommand,
  FlushApiCacheCommandInput,
  FlushApiCacheCommandOutput,
} from "./commands/FlushApiCacheCommand";
import {
  GetApiAssociationCommand,
  GetApiAssociationCommandInput,
  GetApiAssociationCommandOutput,
} from "./commands/GetApiAssociationCommand";
import { GetApiCacheCommand, GetApiCacheCommandInput, GetApiCacheCommandOutput } from "./commands/GetApiCacheCommand";
import {
  GetDataSourceCommand,
  GetDataSourceCommandInput,
  GetDataSourceCommandOutput,
} from "./commands/GetDataSourceCommand";
import {
  GetDomainNameCommand,
  GetDomainNameCommandInput,
  GetDomainNameCommandOutput,
} from "./commands/GetDomainNameCommand";
import { GetFunctionCommand, GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import {
  GetGraphqlApiCommand,
  GetGraphqlApiCommandInput,
  GetGraphqlApiCommandOutput,
} from "./commands/GetGraphqlApiCommand";
import {
  GetIntrospectionSchemaCommand,
  GetIntrospectionSchemaCommandInput,
  GetIntrospectionSchemaCommandOutput,
} from "./commands/GetIntrospectionSchemaCommand";
import { GetResolverCommand, GetResolverCommandInput, GetResolverCommandOutput } from "./commands/GetResolverCommand";
import {
  GetSchemaCreationStatusCommand,
  GetSchemaCreationStatusCommandInput,
  GetSchemaCreationStatusCommandOutput,
} from "./commands/GetSchemaCreationStatusCommand";
import {
  GetSourceApiAssociationCommand,
  GetSourceApiAssociationCommandInput,
  GetSourceApiAssociationCommandOutput,
} from "./commands/GetSourceApiAssociationCommand";
import { GetTypeCommand, GetTypeCommandInput, GetTypeCommandOutput } from "./commands/GetTypeCommand";
import { ListApiKeysCommand, ListApiKeysCommandInput, ListApiKeysCommandOutput } from "./commands/ListApiKeysCommand";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "./commands/ListDataSourcesCommand";
import {
  ListDomainNamesCommand,
  ListDomainNamesCommandInput,
  ListDomainNamesCommandOutput,
} from "./commands/ListDomainNamesCommand";
import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "./commands/ListFunctionsCommand";
import {
  ListGraphqlApisCommand,
  ListGraphqlApisCommandInput,
  ListGraphqlApisCommandOutput,
} from "./commands/ListGraphqlApisCommand";
import {
  ListResolversByFunctionCommand,
  ListResolversByFunctionCommandInput,
  ListResolversByFunctionCommandOutput,
} from "./commands/ListResolversByFunctionCommand";
import {
  ListResolversCommand,
  ListResolversCommandInput,
  ListResolversCommandOutput,
} from "./commands/ListResolversCommand";
import {
  ListSourceApiAssociationsCommand,
  ListSourceApiAssociationsCommandInput,
  ListSourceApiAssociationsCommandOutput,
} from "./commands/ListSourceApiAssociationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTypesByAssociationCommand,
  ListTypesByAssociationCommandInput,
  ListTypesByAssociationCommandOutput,
} from "./commands/ListTypesByAssociationCommand";
import { ListTypesCommand, ListTypesCommandInput, ListTypesCommandOutput } from "./commands/ListTypesCommand";
import {
  StartSchemaCreationCommand,
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput,
} from "./commands/StartSchemaCreationCommand";
import {
  StartSchemaMergeCommand,
  StartSchemaMergeCommandInput,
  StartSchemaMergeCommandOutput,
} from "./commands/StartSchemaMergeCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApiCacheCommand,
  UpdateApiCacheCommandInput,
  UpdateApiCacheCommandOutput,
} from "./commands/UpdateApiCacheCommand";
import {
  UpdateApiKeyCommand,
  UpdateApiKeyCommandInput,
  UpdateApiKeyCommandOutput,
} from "./commands/UpdateApiKeyCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
} from "./commands/UpdateDataSourceCommand";
import {
  UpdateDomainNameCommand,
  UpdateDomainNameCommandInput,
  UpdateDomainNameCommandOutput,
} from "./commands/UpdateDomainNameCommand";
import {
  UpdateFunctionCommand,
  UpdateFunctionCommandInput,
  UpdateFunctionCommandOutput,
} from "./commands/UpdateFunctionCommand";
import {
  UpdateGraphqlApiCommand,
  UpdateGraphqlApiCommandInput,
  UpdateGraphqlApiCommandOutput,
} from "./commands/UpdateGraphqlApiCommand";
import {
  UpdateResolverCommand,
  UpdateResolverCommandInput,
  UpdateResolverCommandOutput,
} from "./commands/UpdateResolverCommand";
import {
  UpdateSourceApiAssociationCommand,
  UpdateSourceApiAssociationCommandInput,
  UpdateSourceApiAssociationCommandOutput,
} from "./commands/UpdateSourceApiAssociationCommand";
import { UpdateTypeCommand, UpdateTypeCommandInput, UpdateTypeCommandOutput } from "./commands/UpdateTypeCommand";

const commands = {
  AssociateApiCommand,
  AssociateMergedGraphqlApiCommand,
  AssociateSourceGraphqlApiCommand,
  CreateApiCacheCommand,
  CreateApiKeyCommand,
  CreateDataSourceCommand,
  CreateDomainNameCommand,
  CreateFunctionCommand,
  CreateGraphqlApiCommand,
  CreateResolverCommand,
  CreateTypeCommand,
  DeleteApiCacheCommand,
  DeleteApiKeyCommand,
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
  GetApiAssociationCommand,
  GetApiCacheCommand,
  GetDataSourceCommand,
  GetDomainNameCommand,
  GetFunctionCommand,
  GetGraphqlApiCommand,
  GetIntrospectionSchemaCommand,
  GetResolverCommand,
  GetSchemaCreationStatusCommand,
  GetSourceApiAssociationCommand,
  GetTypeCommand,
  ListApiKeysCommand,
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
  StartSchemaCreationCommand,
  StartSchemaMergeCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApiCacheCommand,
  UpdateApiKeyCommand,
  UpdateDataSourceCommand,
  UpdateDomainNameCommand,
  UpdateFunctionCommand,
  UpdateGraphqlApiCommand,
  UpdateResolverCommand,
  UpdateSourceApiAssociationCommand,
  UpdateTypeCommand,
};

export interface AppSync {
  /**
   * @see {@link AssociateApiCommand}
   */
  associateApi(args: AssociateApiCommandInput, options?: __HttpHandlerOptions): Promise<AssociateApiCommandOutput>;
  associateApi(args: AssociateApiCommandInput, cb: (err: any, data?: AssociateApiCommandOutput) => void): void;
  associateApi(
    args: AssociateApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApiCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateMergedGraphqlApiCommand}
   */
  associateMergedGraphqlApi(
    args: AssociateMergedGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMergedGraphqlApiCommandOutput>;
  associateMergedGraphqlApi(
    args: AssociateMergedGraphqlApiCommandInput,
    cb: (err: any, data?: AssociateMergedGraphqlApiCommandOutput) => void
  ): void;
  associateMergedGraphqlApi(
    args: AssociateMergedGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMergedGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSourceGraphqlApiCommand}
   */
  associateSourceGraphqlApi(
    args: AssociateSourceGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSourceGraphqlApiCommandOutput>;
  associateSourceGraphqlApi(
    args: AssociateSourceGraphqlApiCommandInput,
    cb: (err: any, data?: AssociateSourceGraphqlApiCommandOutput) => void
  ): void;
  associateSourceGraphqlApi(
    args: AssociateSourceGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSourceGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApiCacheCommand}
   */
  createApiCache(
    args: CreateApiCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiCacheCommandOutput>;
  createApiCache(args: CreateApiCacheCommandInput, cb: (err: any, data?: CreateApiCacheCommandOutput) => void): void;
  createApiCache(
    args: CreateApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApiKeyCommand}
   */
  createApiKey(args: CreateApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<CreateApiKeyCommandOutput>;
  createApiKey(args: CreateApiKeyCommandInput, cb: (err: any, data?: CreateApiKeyCommandOutput) => void): void;
  createApiKey(
    args: CreateApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceCommand}
   */
  createDataSource(
    args: CreateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceCommandOutput>;
  createDataSource(
    args: CreateDataSourceCommandInput,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  createDataSource(
    args: CreateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainNameCommand}
   */
  createDomainName(
    args: CreateDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainNameCommandOutput>;
  createDomainName(
    args: CreateDomainNameCommandInput,
    cb: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): void;
  createDomainName(
    args: CreateDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFunctionCommand}
   */
  createFunction(
    args: CreateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionCommandOutput>;
  createFunction(args: CreateFunctionCommandInput, cb: (err: any, data?: CreateFunctionCommandOutput) => void): void;
  createFunction(
    args: CreateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGraphqlApiCommand}
   */
  createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGraphqlApiCommandOutput>;
  createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    cb: (err: any, data?: CreateGraphqlApiCommandOutput) => void
  ): void;
  createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResolverCommand}
   */
  createResolver(
    args: CreateResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResolverCommandOutput>;
  createResolver(args: CreateResolverCommandInput, cb: (err: any, data?: CreateResolverCommandOutput) => void): void;
  createResolver(
    args: CreateResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTypeCommand}
   */
  createType(args: CreateTypeCommandInput, options?: __HttpHandlerOptions): Promise<CreateTypeCommandOutput>;
  createType(args: CreateTypeCommandInput, cb: (err: any, data?: CreateTypeCommandOutput) => void): void;
  createType(
    args: CreateTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApiCacheCommand}
   */
  deleteApiCache(
    args: DeleteApiCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiCacheCommandOutput>;
  deleteApiCache(args: DeleteApiCacheCommandInput, cb: (err: any, data?: DeleteApiCacheCommandOutput) => void): void;
  deleteApiCache(
    args: DeleteApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApiKeyCommand}
   */
  deleteApiKey(args: DeleteApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApiKeyCommandOutput>;
  deleteApiKey(args: DeleteApiKeyCommandInput, cb: (err: any, data?: DeleteApiKeyCommandOutput) => void): void;
  deleteApiKey(
    args: DeleteApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainNameCommand}
   */
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainNameCommandOutput>;
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    cb: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): void;
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFunctionCommand}
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionCommandOutput>;
  deleteFunction(args: DeleteFunctionCommandInput, cb: (err: any, data?: DeleteFunctionCommandOutput) => void): void;
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGraphqlApiCommand}
   */
  deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGraphqlApiCommandOutput>;
  deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    cb: (err: any, data?: DeleteGraphqlApiCommandOutput) => void
  ): void;
  deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResolverCommand}
   */
  deleteResolver(
    args: DeleteResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResolverCommandOutput>;
  deleteResolver(args: DeleteResolverCommandInput, cb: (err: any, data?: DeleteResolverCommandOutput) => void): void;
  deleteResolver(
    args: DeleteResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTypeCommand}
   */
  deleteType(args: DeleteTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTypeCommandOutput>;
  deleteType(args: DeleteTypeCommandInput, cb: (err: any, data?: DeleteTypeCommandOutput) => void): void;
  deleteType(
    args: DeleteTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateApiCommand}
   */
  disassociateApi(
    args: DisassociateApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApiCommandOutput>;
  disassociateApi(args: DisassociateApiCommandInput, cb: (err: any, data?: DisassociateApiCommandOutput) => void): void;
  disassociateApi(
    args: DisassociateApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApiCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMergedGraphqlApiCommand}
   */
  disassociateMergedGraphqlApi(
    args: DisassociateMergedGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMergedGraphqlApiCommandOutput>;
  disassociateMergedGraphqlApi(
    args: DisassociateMergedGraphqlApiCommandInput,
    cb: (err: any, data?: DisassociateMergedGraphqlApiCommandOutput) => void
  ): void;
  disassociateMergedGraphqlApi(
    args: DisassociateMergedGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMergedGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSourceGraphqlApiCommand}
   */
  disassociateSourceGraphqlApi(
    args: DisassociateSourceGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSourceGraphqlApiCommandOutput>;
  disassociateSourceGraphqlApi(
    args: DisassociateSourceGraphqlApiCommandInput,
    cb: (err: any, data?: DisassociateSourceGraphqlApiCommandOutput) => void
  ): void;
  disassociateSourceGraphqlApi(
    args: DisassociateSourceGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSourceGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link EvaluateCodeCommand}
   */
  evaluateCode(args: EvaluateCodeCommandInput, options?: __HttpHandlerOptions): Promise<EvaluateCodeCommandOutput>;
  evaluateCode(args: EvaluateCodeCommandInput, cb: (err: any, data?: EvaluateCodeCommandOutput) => void): void;
  evaluateCode(
    args: EvaluateCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link EvaluateMappingTemplateCommand}
   */
  evaluateMappingTemplate(
    args: EvaluateMappingTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluateMappingTemplateCommandOutput>;
  evaluateMappingTemplate(
    args: EvaluateMappingTemplateCommandInput,
    cb: (err: any, data?: EvaluateMappingTemplateCommandOutput) => void
  ): void;
  evaluateMappingTemplate(
    args: EvaluateMappingTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateMappingTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link FlushApiCacheCommand}
   */
  flushApiCache(args: FlushApiCacheCommandInput, options?: __HttpHandlerOptions): Promise<FlushApiCacheCommandOutput>;
  flushApiCache(args: FlushApiCacheCommandInput, cb: (err: any, data?: FlushApiCacheCommandOutput) => void): void;
  flushApiCache(
    args: FlushApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlushApiCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiAssociationCommand}
   */
  getApiAssociation(
    args: GetApiAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApiAssociationCommandOutput>;
  getApiAssociation(
    args: GetApiAssociationCommandInput,
    cb: (err: any, data?: GetApiAssociationCommandOutput) => void
  ): void;
  getApiAssociation(
    args: GetApiAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiCacheCommand}
   */
  getApiCache(args: GetApiCacheCommandInput, options?: __HttpHandlerOptions): Promise<GetApiCacheCommandOutput>;
  getApiCache(args: GetApiCacheCommandInput, cb: (err: any, data?: GetApiCacheCommandOutput) => void): void;
  getApiCache(
    args: GetApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(args: GetDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<GetDataSourceCommandOutput>;
  getDataSource(args: GetDataSourceCommandInput, cb: (err: any, data?: GetDataSourceCommandOutput) => void): void;
  getDataSource(
    args: GetDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainNameCommand}
   */
  getDomainName(args: GetDomainNameCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainNameCommandOutput>;
  getDomainName(args: GetDomainNameCommandInput, cb: (err: any, data?: GetDomainNameCommandOutput) => void): void;
  getDomainName(
    args: GetDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionCommand}
   */
  getFunction(args: GetFunctionCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionCommandOutput>;
  getFunction(args: GetFunctionCommandInput, cb: (err: any, data?: GetFunctionCommandOutput) => void): void;
  getFunction(
    args: GetFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGraphqlApiCommand}
   */
  getGraphqlApi(args: GetGraphqlApiCommandInput, options?: __HttpHandlerOptions): Promise<GetGraphqlApiCommandOutput>;
  getGraphqlApi(args: GetGraphqlApiCommandInput, cb: (err: any, data?: GetGraphqlApiCommandOutput) => void): void;
  getGraphqlApi(
    args: GetGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntrospectionSchemaCommand}
   */
  getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntrospectionSchemaCommandOutput>;
  getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    cb: (err: any, data?: GetIntrospectionSchemaCommandOutput) => void
  ): void;
  getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntrospectionSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResolverCommand}
   */
  getResolver(args: GetResolverCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverCommandOutput>;
  getResolver(args: GetResolverCommandInput, cb: (err: any, data?: GetResolverCommandOutput) => void): void;
  getResolver(
    args: GetResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaCreationStatusCommand}
   */
  getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaCreationStatusCommandOutput>;
  getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    cb: (err: any, data?: GetSchemaCreationStatusCommandOutput) => void
  ): void;
  getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaCreationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSourceApiAssociationCommand}
   */
  getSourceApiAssociation(
    args: GetSourceApiAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSourceApiAssociationCommandOutput>;
  getSourceApiAssociation(
    args: GetSourceApiAssociationCommandInput,
    cb: (err: any, data?: GetSourceApiAssociationCommandOutput) => void
  ): void;
  getSourceApiAssociation(
    args: GetSourceApiAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSourceApiAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTypeCommand}
   */
  getType(args: GetTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetTypeCommandOutput>;
  getType(args: GetTypeCommandInput, cb: (err: any, data?: GetTypeCommandOutput) => void): void;
  getType(
    args: GetTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApiKeysCommand}
   */
  listApiKeys(args: ListApiKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListApiKeysCommandOutput>;
  listApiKeys(args: ListApiKeysCommandInput, cb: (err: any, data?: ListApiKeysCommandOutput) => void): void;
  listApiKeys(
    args: ListApiKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApiKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourcesCommandOutput>;
  listDataSources(args: ListDataSourcesCommandInput, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
  listDataSources(
    args: ListDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainNamesCommand}
   */
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainNamesCommandOutput>;
  listDomainNames(args: ListDomainNamesCommandInput, cb: (err: any, data?: ListDomainNamesCommandOutput) => void): void;
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFunctionsCommand}
   */
  listFunctions(args: ListFunctionsCommandInput, options?: __HttpHandlerOptions): Promise<ListFunctionsCommandOutput>;
  listFunctions(args: ListFunctionsCommandInput, cb: (err: any, data?: ListFunctionsCommandOutput) => void): void;
  listFunctions(
    args: ListFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGraphqlApisCommand}
   */
  listGraphqlApis(
    args: ListGraphqlApisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGraphqlApisCommandOutput>;
  listGraphqlApis(args: ListGraphqlApisCommandInput, cb: (err: any, data?: ListGraphqlApisCommandOutput) => void): void;
  listGraphqlApis(
    args: ListGraphqlApisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGraphqlApisCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolversCommand}
   */
  listResolvers(args: ListResolversCommandInput, options?: __HttpHandlerOptions): Promise<ListResolversCommandOutput>;
  listResolvers(args: ListResolversCommandInput, cb: (err: any, data?: ListResolversCommandOutput) => void): void;
  listResolvers(
    args: ListResolversCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolversCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResolversByFunctionCommand}
   */
  listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolversByFunctionCommandOutput>;
  listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    cb: (err: any, data?: ListResolversByFunctionCommandOutput) => void
  ): void;
  listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolversByFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceApiAssociationsCommand}
   */
  listSourceApiAssociations(
    args: ListSourceApiAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceApiAssociationsCommandOutput>;
  listSourceApiAssociations(
    args: ListSourceApiAssociationsCommandInput,
    cb: (err: any, data?: ListSourceApiAssociationsCommandOutput) => void
  ): void;
  listSourceApiAssociations(
    args: ListSourceApiAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceApiAssociationsCommandOutput) => void
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
   * @see {@link ListTypesCommand}
   */
  listTypes(args: ListTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListTypesCommandOutput>;
  listTypes(args: ListTypesCommandInput, cb: (err: any, data?: ListTypesCommandOutput) => void): void;
  listTypes(
    args: ListTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTypesByAssociationCommand}
   */
  listTypesByAssociation(
    args: ListTypesByAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTypesByAssociationCommandOutput>;
  listTypesByAssociation(
    args: ListTypesByAssociationCommandInput,
    cb: (err: any, data?: ListTypesByAssociationCommandOutput) => void
  ): void;
  listTypesByAssociation(
    args: ListTypesByAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypesByAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSchemaCreationCommand}
   */
  startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSchemaCreationCommandOutput>;
  startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    cb: (err: any, data?: StartSchemaCreationCommandOutput) => void
  ): void;
  startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSchemaCreationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSchemaMergeCommand}
   */
  startSchemaMerge(
    args: StartSchemaMergeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSchemaMergeCommandOutput>;
  startSchemaMerge(
    args: StartSchemaMergeCommandInput,
    cb: (err: any, data?: StartSchemaMergeCommandOutput) => void
  ): void;
  startSchemaMerge(
    args: StartSchemaMergeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSchemaMergeCommandOutput) => void
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
   * @see {@link UpdateApiCacheCommand}
   */
  updateApiCache(
    args: UpdateApiCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiCacheCommandOutput>;
  updateApiCache(args: UpdateApiCacheCommandInput, cb: (err: any, data?: UpdateApiCacheCommandOutput) => void): void;
  updateApiCache(
    args: UpdateApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApiKeyCommand}
   */
  updateApiKey(args: UpdateApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApiKeyCommandOutput>;
  updateApiKey(args: UpdateApiKeyCommandInput, cb: (err: any, data?: UpdateApiKeyCommandOutput) => void): void;
  updateApiKey(
    args: UpdateApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainNameCommand}
   */
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainNameCommandOutput>;
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    cb: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): void;
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFunctionCommand}
   */
  updateFunction(
    args: UpdateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionCommandOutput>;
  updateFunction(args: UpdateFunctionCommandInput, cb: (err: any, data?: UpdateFunctionCommandOutput) => void): void;
  updateFunction(
    args: UpdateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGraphqlApiCommand}
   */
  updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGraphqlApiCommandOutput>;
  updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    cb: (err: any, data?: UpdateGraphqlApiCommandOutput) => void
  ): void;
  updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGraphqlApiCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResolverCommand}
   */
  updateResolver(
    args: UpdateResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResolverCommandOutput>;
  updateResolver(args: UpdateResolverCommandInput, cb: (err: any, data?: UpdateResolverCommandOutput) => void): void;
  updateResolver(
    args: UpdateResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResolverCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSourceApiAssociationCommand}
   */
  updateSourceApiAssociation(
    args: UpdateSourceApiAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSourceApiAssociationCommandOutput>;
  updateSourceApiAssociation(
    args: UpdateSourceApiAssociationCommandInput,
    cb: (err: any, data?: UpdateSourceApiAssociationCommandOutput) => void
  ): void;
  updateSourceApiAssociation(
    args: UpdateSourceApiAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSourceApiAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTypeCommand}
   */
  updateType(args: UpdateTypeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTypeCommandOutput>;
  updateType(args: UpdateTypeCommandInput, cb: (err: any, data?: UpdateTypeCommandOutput) => void): void;
  updateType(
    args: UpdateTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTypeCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>AppSync provides API actions for creating and interacting with data
 *          sources using GraphQL from your application.</p>
 */
export class AppSync extends AppSyncClient implements AppSync {}
createAggregatedClient(commands, AppSync);
