// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AssociateEntitiesToExperienceCommandInput,
  type AssociateEntitiesToExperienceCommandOutput,
  AssociateEntitiesToExperienceCommand,
} from "./commands/AssociateEntitiesToExperienceCommand";
import {
  type AssociatePersonasToEntitiesCommandInput,
  type AssociatePersonasToEntitiesCommandOutput,
  AssociatePersonasToEntitiesCommand,
} from "./commands/AssociatePersonasToEntitiesCommand";
import {
  type BatchDeleteDocumentCommandInput,
  type BatchDeleteDocumentCommandOutput,
  BatchDeleteDocumentCommand,
} from "./commands/BatchDeleteDocumentCommand";
import {
  type BatchDeleteFeaturedResultsSetCommandInput,
  type BatchDeleteFeaturedResultsSetCommandOutput,
  BatchDeleteFeaturedResultsSetCommand,
} from "./commands/BatchDeleteFeaturedResultsSetCommand";
import {
  type BatchGetDocumentStatusCommandInput,
  type BatchGetDocumentStatusCommandOutput,
  BatchGetDocumentStatusCommand,
} from "./commands/BatchGetDocumentStatusCommand";
import {
  type BatchPutDocumentCommandInput,
  type BatchPutDocumentCommandOutput,
  BatchPutDocumentCommand,
} from "./commands/BatchPutDocumentCommand";
import {
  type ClearQuerySuggestionsCommandInput,
  type ClearQuerySuggestionsCommandOutput,
  ClearQuerySuggestionsCommand,
} from "./commands/ClearQuerySuggestionsCommand";
import {
  type CreateAccessControlConfigurationCommandInput,
  type CreateAccessControlConfigurationCommandOutput,
  CreateAccessControlConfigurationCommand,
} from "./commands/CreateAccessControlConfigurationCommand";
import {
  type CreateDataSourceCommandInput,
  type CreateDataSourceCommandOutput,
  CreateDataSourceCommand,
} from "./commands/CreateDataSourceCommand";
import {
  type CreateExperienceCommandInput,
  type CreateExperienceCommandOutput,
  CreateExperienceCommand,
} from "./commands/CreateExperienceCommand";
import { type CreateFaqCommandInput, type CreateFaqCommandOutput, CreateFaqCommand } from "./commands/CreateFaqCommand";
import {
  type CreateFeaturedResultsSetCommandInput,
  type CreateFeaturedResultsSetCommandOutput,
  CreateFeaturedResultsSetCommand,
} from "./commands/CreateFeaturedResultsSetCommand";
import {
  type CreateIndexCommandInput,
  type CreateIndexCommandOutput,
  CreateIndexCommand,
} from "./commands/CreateIndexCommand";
import {
  type CreateQuerySuggestionsBlockListCommandInput,
  type CreateQuerySuggestionsBlockListCommandOutput,
  CreateQuerySuggestionsBlockListCommand,
} from "./commands/CreateQuerySuggestionsBlockListCommand";
import {
  type CreateThesaurusCommandInput,
  type CreateThesaurusCommandOutput,
  CreateThesaurusCommand,
} from "./commands/CreateThesaurusCommand";
import {
  type DeleteAccessControlConfigurationCommandInput,
  type DeleteAccessControlConfigurationCommandOutput,
  DeleteAccessControlConfigurationCommand,
} from "./commands/DeleteAccessControlConfigurationCommand";
import {
  type DeleteDataSourceCommandInput,
  type DeleteDataSourceCommandOutput,
  DeleteDataSourceCommand,
} from "./commands/DeleteDataSourceCommand";
import {
  type DeleteExperienceCommandInput,
  type DeleteExperienceCommandOutput,
  DeleteExperienceCommand,
} from "./commands/DeleteExperienceCommand";
import { type DeleteFaqCommandInput, type DeleteFaqCommandOutput, DeleteFaqCommand } from "./commands/DeleteFaqCommand";
import {
  type DeleteIndexCommandInput,
  type DeleteIndexCommandOutput,
  DeleteIndexCommand,
} from "./commands/DeleteIndexCommand";
import {
  type DeletePrincipalMappingCommandInput,
  type DeletePrincipalMappingCommandOutput,
  DeletePrincipalMappingCommand,
} from "./commands/DeletePrincipalMappingCommand";
import {
  type DeleteQuerySuggestionsBlockListCommandInput,
  type DeleteQuerySuggestionsBlockListCommandOutput,
  DeleteQuerySuggestionsBlockListCommand,
} from "./commands/DeleteQuerySuggestionsBlockListCommand";
import {
  type DeleteThesaurusCommandInput,
  type DeleteThesaurusCommandOutput,
  DeleteThesaurusCommand,
} from "./commands/DeleteThesaurusCommand";
import {
  type DescribeAccessControlConfigurationCommandInput,
  type DescribeAccessControlConfigurationCommandOutput,
  DescribeAccessControlConfigurationCommand,
} from "./commands/DescribeAccessControlConfigurationCommand";
import {
  type DescribeDataSourceCommandInput,
  type DescribeDataSourceCommandOutput,
  DescribeDataSourceCommand,
} from "./commands/DescribeDataSourceCommand";
import {
  type DescribeExperienceCommandInput,
  type DescribeExperienceCommandOutput,
  DescribeExperienceCommand,
} from "./commands/DescribeExperienceCommand";
import {
  type DescribeFaqCommandInput,
  type DescribeFaqCommandOutput,
  DescribeFaqCommand,
} from "./commands/DescribeFaqCommand";
import {
  type DescribeFeaturedResultsSetCommandInput,
  type DescribeFeaturedResultsSetCommandOutput,
  DescribeFeaturedResultsSetCommand,
} from "./commands/DescribeFeaturedResultsSetCommand";
import {
  type DescribeIndexCommandInput,
  type DescribeIndexCommandOutput,
  DescribeIndexCommand,
} from "./commands/DescribeIndexCommand";
import {
  type DescribePrincipalMappingCommandInput,
  type DescribePrincipalMappingCommandOutput,
  DescribePrincipalMappingCommand,
} from "./commands/DescribePrincipalMappingCommand";
import {
  type DescribeQuerySuggestionsBlockListCommandInput,
  type DescribeQuerySuggestionsBlockListCommandOutput,
  DescribeQuerySuggestionsBlockListCommand,
} from "./commands/DescribeQuerySuggestionsBlockListCommand";
import {
  type DescribeQuerySuggestionsConfigCommandInput,
  type DescribeQuerySuggestionsConfigCommandOutput,
  DescribeQuerySuggestionsConfigCommand,
} from "./commands/DescribeQuerySuggestionsConfigCommand";
import {
  type DescribeThesaurusCommandInput,
  type DescribeThesaurusCommandOutput,
  DescribeThesaurusCommand,
} from "./commands/DescribeThesaurusCommand";
import {
  type DisassociateEntitiesFromExperienceCommandInput,
  type DisassociateEntitiesFromExperienceCommandOutput,
  DisassociateEntitiesFromExperienceCommand,
} from "./commands/DisassociateEntitiesFromExperienceCommand";
import {
  type DisassociatePersonasFromEntitiesCommandInput,
  type DisassociatePersonasFromEntitiesCommandOutput,
  DisassociatePersonasFromEntitiesCommand,
} from "./commands/DisassociatePersonasFromEntitiesCommand";
import {
  type GetQuerySuggestionsCommandInput,
  type GetQuerySuggestionsCommandOutput,
  GetQuerySuggestionsCommand,
} from "./commands/GetQuerySuggestionsCommand";
import {
  type GetSnapshotsCommandInput,
  type GetSnapshotsCommandOutput,
  GetSnapshotsCommand,
} from "./commands/GetSnapshotsCommand";
import {
  type ListAccessControlConfigurationsCommandInput,
  type ListAccessControlConfigurationsCommandOutput,
  ListAccessControlConfigurationsCommand,
} from "./commands/ListAccessControlConfigurationsCommand";
import {
  type ListDataSourcesCommandInput,
  type ListDataSourcesCommandOutput,
  ListDataSourcesCommand,
} from "./commands/ListDataSourcesCommand";
import {
  type ListDataSourceSyncJobsCommandInput,
  type ListDataSourceSyncJobsCommandOutput,
  ListDataSourceSyncJobsCommand,
} from "./commands/ListDataSourceSyncJobsCommand";
import {
  type ListEntityPersonasCommandInput,
  type ListEntityPersonasCommandOutput,
  ListEntityPersonasCommand,
} from "./commands/ListEntityPersonasCommand";
import {
  type ListExperienceEntitiesCommandInput,
  type ListExperienceEntitiesCommandOutput,
  ListExperienceEntitiesCommand,
} from "./commands/ListExperienceEntitiesCommand";
import {
  type ListExperiencesCommandInput,
  type ListExperiencesCommandOutput,
  ListExperiencesCommand,
} from "./commands/ListExperiencesCommand";
import { type ListFaqsCommandInput, type ListFaqsCommandOutput, ListFaqsCommand } from "./commands/ListFaqsCommand";
import {
  type ListFeaturedResultsSetsCommandInput,
  type ListFeaturedResultsSetsCommandOutput,
  ListFeaturedResultsSetsCommand,
} from "./commands/ListFeaturedResultsSetsCommand";
import {
  type ListGroupsOlderThanOrderingIdCommandInput,
  type ListGroupsOlderThanOrderingIdCommandOutput,
  ListGroupsOlderThanOrderingIdCommand,
} from "./commands/ListGroupsOlderThanOrderingIdCommand";
import {
  type ListIndicesCommandInput,
  type ListIndicesCommandOutput,
  ListIndicesCommand,
} from "./commands/ListIndicesCommand";
import {
  type ListQuerySuggestionsBlockListsCommandInput,
  type ListQuerySuggestionsBlockListsCommandOutput,
  ListQuerySuggestionsBlockListsCommand,
} from "./commands/ListQuerySuggestionsBlockListsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListThesauriCommandInput,
  type ListThesauriCommandOutput,
  ListThesauriCommand,
} from "./commands/ListThesauriCommand";
import {
  type PutPrincipalMappingCommandInput,
  type PutPrincipalMappingCommandOutput,
  PutPrincipalMappingCommand,
} from "./commands/PutPrincipalMappingCommand";
import { type QueryCommandInput, type QueryCommandOutput, QueryCommand } from "./commands/QueryCommand";
import { type RetrieveCommandInput, type RetrieveCommandOutput, RetrieveCommand } from "./commands/RetrieveCommand";
import {
  type StartDataSourceSyncJobCommandInput,
  type StartDataSourceSyncJobCommandOutput,
  StartDataSourceSyncJobCommand,
} from "./commands/StartDataSourceSyncJobCommand";
import {
  type StopDataSourceSyncJobCommandInput,
  type StopDataSourceSyncJobCommandOutput,
  StopDataSourceSyncJobCommand,
} from "./commands/StopDataSourceSyncJobCommand";
import {
  type SubmitFeedbackCommandInput,
  type SubmitFeedbackCommandOutput,
  SubmitFeedbackCommand,
} from "./commands/SubmitFeedbackCommand";
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
  type UpdateAccessControlConfigurationCommandInput,
  type UpdateAccessControlConfigurationCommandOutput,
  UpdateAccessControlConfigurationCommand,
} from "./commands/UpdateAccessControlConfigurationCommand";
import {
  type UpdateDataSourceCommandInput,
  type UpdateDataSourceCommandOutput,
  UpdateDataSourceCommand,
} from "./commands/UpdateDataSourceCommand";
import {
  type UpdateExperienceCommandInput,
  type UpdateExperienceCommandOutput,
  UpdateExperienceCommand,
} from "./commands/UpdateExperienceCommand";
import {
  type UpdateFeaturedResultsSetCommandInput,
  type UpdateFeaturedResultsSetCommandOutput,
  UpdateFeaturedResultsSetCommand,
} from "./commands/UpdateFeaturedResultsSetCommand";
import {
  type UpdateIndexCommandInput,
  type UpdateIndexCommandOutput,
  UpdateIndexCommand,
} from "./commands/UpdateIndexCommand";
import {
  type UpdateQuerySuggestionsBlockListCommandInput,
  type UpdateQuerySuggestionsBlockListCommandOutput,
  UpdateQuerySuggestionsBlockListCommand,
} from "./commands/UpdateQuerySuggestionsBlockListCommand";
import {
  type UpdateQuerySuggestionsConfigCommandInput,
  type UpdateQuerySuggestionsConfigCommandOutput,
  UpdateQuerySuggestionsConfigCommand,
} from "./commands/UpdateQuerySuggestionsConfigCommand";
import {
  type UpdateThesaurusCommandInput,
  type UpdateThesaurusCommandOutput,
  UpdateThesaurusCommand,
} from "./commands/UpdateThesaurusCommand";
import { KendraClient } from "./KendraClient";
import { paginateGetSnapshots } from "./pagination/GetSnapshotsPaginator";
import { paginateListAccessControlConfigurations } from "./pagination/ListAccessControlConfigurationsPaginator";
import { paginateListDataSources } from "./pagination/ListDataSourcesPaginator";
import { paginateListDataSourceSyncJobs } from "./pagination/ListDataSourceSyncJobsPaginator";
import { paginateListEntityPersonas } from "./pagination/ListEntityPersonasPaginator";
import { paginateListExperienceEntities } from "./pagination/ListExperienceEntitiesPaginator";
import { paginateListExperiences } from "./pagination/ListExperiencesPaginator";
import { paginateListFaqs } from "./pagination/ListFaqsPaginator";
import { paginateListGroupsOlderThanOrderingId } from "./pagination/ListGroupsOlderThanOrderingIdPaginator";
import { paginateListIndices } from "./pagination/ListIndicesPaginator";
import { paginateListQuerySuggestionsBlockLists } from "./pagination/ListQuerySuggestionsBlockListsPaginator";
import { paginateListThesauri } from "./pagination/ListThesauriPaginator";

const commands = {
  AssociateEntitiesToExperienceCommand,
  AssociatePersonasToEntitiesCommand,
  BatchDeleteDocumentCommand,
  BatchDeleteFeaturedResultsSetCommand,
  BatchGetDocumentStatusCommand,
  BatchPutDocumentCommand,
  ClearQuerySuggestionsCommand,
  CreateAccessControlConfigurationCommand,
  CreateDataSourceCommand,
  CreateExperienceCommand,
  CreateFaqCommand,
  CreateFeaturedResultsSetCommand,
  CreateIndexCommand,
  CreateQuerySuggestionsBlockListCommand,
  CreateThesaurusCommand,
  DeleteAccessControlConfigurationCommand,
  DeleteDataSourceCommand,
  DeleteExperienceCommand,
  DeleteFaqCommand,
  DeleteIndexCommand,
  DeletePrincipalMappingCommand,
  DeleteQuerySuggestionsBlockListCommand,
  DeleteThesaurusCommand,
  DescribeAccessControlConfigurationCommand,
  DescribeDataSourceCommand,
  DescribeExperienceCommand,
  DescribeFaqCommand,
  DescribeFeaturedResultsSetCommand,
  DescribeIndexCommand,
  DescribePrincipalMappingCommand,
  DescribeQuerySuggestionsBlockListCommand,
  DescribeQuerySuggestionsConfigCommand,
  DescribeThesaurusCommand,
  DisassociateEntitiesFromExperienceCommand,
  DisassociatePersonasFromEntitiesCommand,
  GetQuerySuggestionsCommand,
  GetSnapshotsCommand,
  ListAccessControlConfigurationsCommand,
  ListDataSourcesCommand,
  ListDataSourceSyncJobsCommand,
  ListEntityPersonasCommand,
  ListExperienceEntitiesCommand,
  ListExperiencesCommand,
  ListFaqsCommand,
  ListFeaturedResultsSetsCommand,
  ListGroupsOlderThanOrderingIdCommand,
  ListIndicesCommand,
  ListQuerySuggestionsBlockListsCommand,
  ListTagsForResourceCommand,
  ListThesauriCommand,
  PutPrincipalMappingCommand,
  QueryCommand,
  RetrieveCommand,
  StartDataSourceSyncJobCommand,
  StopDataSourceSyncJobCommand,
  SubmitFeedbackCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccessControlConfigurationCommand,
  UpdateDataSourceCommand,
  UpdateExperienceCommand,
  UpdateFeaturedResultsSetCommand,
  UpdateIndexCommand,
  UpdateQuerySuggestionsBlockListCommand,
  UpdateQuerySuggestionsConfigCommand,
  UpdateThesaurusCommand,
};
const paginators = {
  paginateGetSnapshots,
  paginateListAccessControlConfigurations,
  paginateListDataSources,
  paginateListDataSourceSyncJobs,
  paginateListEntityPersonas,
  paginateListExperienceEntities,
  paginateListExperiences,
  paginateListFaqs,
  paginateListGroupsOlderThanOrderingId,
  paginateListIndices,
  paginateListQuerySuggestionsBlockLists,
  paginateListThesauri,
};

/**
 * @public
 */
export interface KendraRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Kendra {
  /**
   * @see {@link AssociateEntitiesToExperienceCommand}
   */
  associateEntitiesToExperience(
    args: AssociateEntitiesToExperienceCommandInput,
    options?: KendraRequestOptions
  ): Promise<AssociateEntitiesToExperienceCommandOutput>;
  associateEntitiesToExperience(
    args: AssociateEntitiesToExperienceCommandInput,
    cb: (err: any, data?: AssociateEntitiesToExperienceCommandOutput) => void
  ): void;
  associateEntitiesToExperience(
    args: AssociateEntitiesToExperienceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: AssociateEntitiesToExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociatePersonasToEntitiesCommand}
   */
  associatePersonasToEntities(
    args: AssociatePersonasToEntitiesCommandInput,
    options?: KendraRequestOptions
  ): Promise<AssociatePersonasToEntitiesCommandOutput>;
  associatePersonasToEntities(
    args: AssociatePersonasToEntitiesCommandInput,
    cb: (err: any, data?: AssociatePersonasToEntitiesCommandOutput) => void
  ): void;
  associatePersonasToEntities(
    args: AssociatePersonasToEntitiesCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: AssociatePersonasToEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteDocumentCommand}
   */
  batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    options?: KendraRequestOptions
  ): Promise<BatchDeleteDocumentCommandOutput>;
  batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    cb: (err: any, data?: BatchDeleteDocumentCommandOutput) => void
  ): void;
  batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: BatchDeleteDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteFeaturedResultsSetCommand}
   */
  batchDeleteFeaturedResultsSet(
    args: BatchDeleteFeaturedResultsSetCommandInput,
    options?: KendraRequestOptions
  ): Promise<BatchDeleteFeaturedResultsSetCommandOutput>;
  batchDeleteFeaturedResultsSet(
    args: BatchDeleteFeaturedResultsSetCommandInput,
    cb: (err: any, data?: BatchDeleteFeaturedResultsSetCommandOutput) => void
  ): void;
  batchDeleteFeaturedResultsSet(
    args: BatchDeleteFeaturedResultsSetCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: BatchDeleteFeaturedResultsSetCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetDocumentStatusCommand}
   */
  batchGetDocumentStatus(
    args: BatchGetDocumentStatusCommandInput,
    options?: KendraRequestOptions
  ): Promise<BatchGetDocumentStatusCommandOutput>;
  batchGetDocumentStatus(
    args: BatchGetDocumentStatusCommandInput,
    cb: (err: any, data?: BatchGetDocumentStatusCommandOutput) => void
  ): void;
  batchGetDocumentStatus(
    args: BatchGetDocumentStatusCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: BatchGetDocumentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutDocumentCommand}
   */
  batchPutDocument(
    args: BatchPutDocumentCommandInput,
    options?: KendraRequestOptions
  ): Promise<BatchPutDocumentCommandOutput>;
  batchPutDocument(
    args: BatchPutDocumentCommandInput,
    cb: (err: any, data?: BatchPutDocumentCommandOutput) => void
  ): void;
  batchPutDocument(
    args: BatchPutDocumentCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: BatchPutDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link ClearQuerySuggestionsCommand}
   */
  clearQuerySuggestions(
    args: ClearQuerySuggestionsCommandInput,
    options?: KendraRequestOptions
  ): Promise<ClearQuerySuggestionsCommandOutput>;
  clearQuerySuggestions(
    args: ClearQuerySuggestionsCommandInput,
    cb: (err: any, data?: ClearQuerySuggestionsCommandOutput) => void
  ): void;
  clearQuerySuggestions(
    args: ClearQuerySuggestionsCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ClearQuerySuggestionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessControlConfigurationCommand}
   */
  createAccessControlConfiguration(
    args: CreateAccessControlConfigurationCommandInput,
    options?: KendraRequestOptions
  ): Promise<CreateAccessControlConfigurationCommandOutput>;
  createAccessControlConfiguration(
    args: CreateAccessControlConfigurationCommandInput,
    cb: (err: any, data?: CreateAccessControlConfigurationCommandOutput) => void
  ): void;
  createAccessControlConfiguration(
    args: CreateAccessControlConfigurationCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: CreateAccessControlConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceCommand}
   */
  createDataSource(
    args: CreateDataSourceCommandInput,
    options?: KendraRequestOptions
  ): Promise<CreateDataSourceCommandOutput>;
  createDataSource(
    args: CreateDataSourceCommandInput,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  createDataSource(
    args: CreateDataSourceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExperienceCommand}
   */
  createExperience(
    args: CreateExperienceCommandInput,
    options?: KendraRequestOptions
  ): Promise<CreateExperienceCommandOutput>;
  createExperience(
    args: CreateExperienceCommandInput,
    cb: (err: any, data?: CreateExperienceCommandOutput) => void
  ): void;
  createExperience(
    args: CreateExperienceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: CreateExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFaqCommand}
   */
  createFaq(
    args: CreateFaqCommandInput,
    options?: KendraRequestOptions
  ): Promise<CreateFaqCommandOutput>;
  createFaq(
    args: CreateFaqCommandInput,
    cb: (err: any, data?: CreateFaqCommandOutput) => void
  ): void;
  createFaq(
    args: CreateFaqCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: CreateFaqCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFeaturedResultsSetCommand}
   */
  createFeaturedResultsSet(
    args: CreateFeaturedResultsSetCommandInput,
    options?: KendraRequestOptions
  ): Promise<CreateFeaturedResultsSetCommandOutput>;
  createFeaturedResultsSet(
    args: CreateFeaturedResultsSetCommandInput,
    cb: (err: any, data?: CreateFeaturedResultsSetCommandOutput) => void
  ): void;
  createFeaturedResultsSet(
    args: CreateFeaturedResultsSetCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: CreateFeaturedResultsSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIndexCommand}
   */
  createIndex(
    args: CreateIndexCommandInput,
    options?: KendraRequestOptions
  ): Promise<CreateIndexCommandOutput>;
  createIndex(
    args: CreateIndexCommandInput,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;
  createIndex(
    args: CreateIndexCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQuerySuggestionsBlockListCommand}
   */
  createQuerySuggestionsBlockList(
    args: CreateQuerySuggestionsBlockListCommandInput,
    options?: KendraRequestOptions
  ): Promise<CreateQuerySuggestionsBlockListCommandOutput>;
  createQuerySuggestionsBlockList(
    args: CreateQuerySuggestionsBlockListCommandInput,
    cb: (err: any, data?: CreateQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  createQuerySuggestionsBlockList(
    args: CreateQuerySuggestionsBlockListCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: CreateQuerySuggestionsBlockListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThesaurusCommand}
   */
  createThesaurus(
    args: CreateThesaurusCommandInput,
    options?: KendraRequestOptions
  ): Promise<CreateThesaurusCommandOutput>;
  createThesaurus(
    args: CreateThesaurusCommandInput,
    cb: (err: any, data?: CreateThesaurusCommandOutput) => void
  ): void;
  createThesaurus(
    args: CreateThesaurusCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: CreateThesaurusCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessControlConfigurationCommand}
   */
  deleteAccessControlConfiguration(
    args: DeleteAccessControlConfigurationCommandInput,
    options?: KendraRequestOptions
  ): Promise<DeleteAccessControlConfigurationCommandOutput>;
  deleteAccessControlConfiguration(
    args: DeleteAccessControlConfigurationCommandInput,
    cb: (err: any, data?: DeleteAccessControlConfigurationCommandOutput) => void
  ): void;
  deleteAccessControlConfiguration(
    args: DeleteAccessControlConfigurationCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DeleteAccessControlConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: KendraRequestOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExperienceCommand}
   */
  deleteExperience(
    args: DeleteExperienceCommandInput,
    options?: KendraRequestOptions
  ): Promise<DeleteExperienceCommandOutput>;
  deleteExperience(
    args: DeleteExperienceCommandInput,
    cb: (err: any, data?: DeleteExperienceCommandOutput) => void
  ): void;
  deleteExperience(
    args: DeleteExperienceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DeleteExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFaqCommand}
   */
  deleteFaq(
    args: DeleteFaqCommandInput,
    options?: KendraRequestOptions
  ): Promise<DeleteFaqCommandOutput>;
  deleteFaq(
    args: DeleteFaqCommandInput,
    cb: (err: any, data?: DeleteFaqCommandOutput) => void
  ): void;
  deleteFaq(
    args: DeleteFaqCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DeleteFaqCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIndexCommand}
   */
  deleteIndex(
    args: DeleteIndexCommandInput,
    options?: KendraRequestOptions
  ): Promise<DeleteIndexCommandOutput>;
  deleteIndex(
    args: DeleteIndexCommandInput,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;
  deleteIndex(
    args: DeleteIndexCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePrincipalMappingCommand}
   */
  deletePrincipalMapping(
    args: DeletePrincipalMappingCommandInput,
    options?: KendraRequestOptions
  ): Promise<DeletePrincipalMappingCommandOutput>;
  deletePrincipalMapping(
    args: DeletePrincipalMappingCommandInput,
    cb: (err: any, data?: DeletePrincipalMappingCommandOutput) => void
  ): void;
  deletePrincipalMapping(
    args: DeletePrincipalMappingCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DeletePrincipalMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQuerySuggestionsBlockListCommand}
   */
  deleteQuerySuggestionsBlockList(
    args: DeleteQuerySuggestionsBlockListCommandInput,
    options?: KendraRequestOptions
  ): Promise<DeleteQuerySuggestionsBlockListCommandOutput>;
  deleteQuerySuggestionsBlockList(
    args: DeleteQuerySuggestionsBlockListCommandInput,
    cb: (err: any, data?: DeleteQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  deleteQuerySuggestionsBlockList(
    args: DeleteQuerySuggestionsBlockListCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DeleteQuerySuggestionsBlockListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThesaurusCommand}
   */
  deleteThesaurus(
    args: DeleteThesaurusCommandInput,
    options?: KendraRequestOptions
  ): Promise<DeleteThesaurusCommandOutput>;
  deleteThesaurus(
    args: DeleteThesaurusCommandInput,
    cb: (err: any, data?: DeleteThesaurusCommandOutput) => void
  ): void;
  deleteThesaurus(
    args: DeleteThesaurusCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DeleteThesaurusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccessControlConfigurationCommand}
   */
  describeAccessControlConfiguration(
    args: DescribeAccessControlConfigurationCommandInput,
    options?: KendraRequestOptions
  ): Promise<DescribeAccessControlConfigurationCommandOutput>;
  describeAccessControlConfiguration(
    args: DescribeAccessControlConfigurationCommandInput,
    cb: (err: any, data?: DescribeAccessControlConfigurationCommandOutput) => void
  ): void;
  describeAccessControlConfiguration(
    args: DescribeAccessControlConfigurationCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DescribeAccessControlConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSourceCommand}
   */
  describeDataSource(
    args: DescribeDataSourceCommandInput,
    options?: KendraRequestOptions
  ): Promise<DescribeDataSourceCommandOutput>;
  describeDataSource(
    args: DescribeDataSourceCommandInput,
    cb: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): void;
  describeDataSource(
    args: DescribeDataSourceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExperienceCommand}
   */
  describeExperience(
    args: DescribeExperienceCommandInput,
    options?: KendraRequestOptions
  ): Promise<DescribeExperienceCommandOutput>;
  describeExperience(
    args: DescribeExperienceCommandInput,
    cb: (err: any, data?: DescribeExperienceCommandOutput) => void
  ): void;
  describeExperience(
    args: DescribeExperienceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DescribeExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFaqCommand}
   */
  describeFaq(
    args: DescribeFaqCommandInput,
    options?: KendraRequestOptions
  ): Promise<DescribeFaqCommandOutput>;
  describeFaq(
    args: DescribeFaqCommandInput,
    cb: (err: any, data?: DescribeFaqCommandOutput) => void
  ): void;
  describeFaq(
    args: DescribeFaqCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DescribeFaqCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFeaturedResultsSetCommand}
   */
  describeFeaturedResultsSet(
    args: DescribeFeaturedResultsSetCommandInput,
    options?: KendraRequestOptions
  ): Promise<DescribeFeaturedResultsSetCommandOutput>;
  describeFeaturedResultsSet(
    args: DescribeFeaturedResultsSetCommandInput,
    cb: (err: any, data?: DescribeFeaturedResultsSetCommandOutput) => void
  ): void;
  describeFeaturedResultsSet(
    args: DescribeFeaturedResultsSetCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DescribeFeaturedResultsSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIndexCommand}
   */
  describeIndex(
    args: DescribeIndexCommandInput,
    options?: KendraRequestOptions
  ): Promise<DescribeIndexCommandOutput>;
  describeIndex(
    args: DescribeIndexCommandInput,
    cb: (err: any, data?: DescribeIndexCommandOutput) => void
  ): void;
  describeIndex(
    args: DescribeIndexCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DescribeIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePrincipalMappingCommand}
   */
  describePrincipalMapping(
    args: DescribePrincipalMappingCommandInput,
    options?: KendraRequestOptions
  ): Promise<DescribePrincipalMappingCommandOutput>;
  describePrincipalMapping(
    args: DescribePrincipalMappingCommandInput,
    cb: (err: any, data?: DescribePrincipalMappingCommandOutput) => void
  ): void;
  describePrincipalMapping(
    args: DescribePrincipalMappingCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DescribePrincipalMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQuerySuggestionsBlockListCommand}
   */
  describeQuerySuggestionsBlockList(
    args: DescribeQuerySuggestionsBlockListCommandInput,
    options?: KendraRequestOptions
  ): Promise<DescribeQuerySuggestionsBlockListCommandOutput>;
  describeQuerySuggestionsBlockList(
    args: DescribeQuerySuggestionsBlockListCommandInput,
    cb: (err: any, data?: DescribeQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  describeQuerySuggestionsBlockList(
    args: DescribeQuerySuggestionsBlockListCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DescribeQuerySuggestionsBlockListCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQuerySuggestionsConfigCommand}
   */
  describeQuerySuggestionsConfig(
    args: DescribeQuerySuggestionsConfigCommandInput,
    options?: KendraRequestOptions
  ): Promise<DescribeQuerySuggestionsConfigCommandOutput>;
  describeQuerySuggestionsConfig(
    args: DescribeQuerySuggestionsConfigCommandInput,
    cb: (err: any, data?: DescribeQuerySuggestionsConfigCommandOutput) => void
  ): void;
  describeQuerySuggestionsConfig(
    args: DescribeQuerySuggestionsConfigCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DescribeQuerySuggestionsConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThesaurusCommand}
   */
  describeThesaurus(
    args: DescribeThesaurusCommandInput,
    options?: KendraRequestOptions
  ): Promise<DescribeThesaurusCommandOutput>;
  describeThesaurus(
    args: DescribeThesaurusCommandInput,
    cb: (err: any, data?: DescribeThesaurusCommandOutput) => void
  ): void;
  describeThesaurus(
    args: DescribeThesaurusCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DescribeThesaurusCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateEntitiesFromExperienceCommand}
   */
  disassociateEntitiesFromExperience(
    args: DisassociateEntitiesFromExperienceCommandInput,
    options?: KendraRequestOptions
  ): Promise<DisassociateEntitiesFromExperienceCommandOutput>;
  disassociateEntitiesFromExperience(
    args: DisassociateEntitiesFromExperienceCommandInput,
    cb: (err: any, data?: DisassociateEntitiesFromExperienceCommandOutput) => void
  ): void;
  disassociateEntitiesFromExperience(
    args: DisassociateEntitiesFromExperienceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DisassociateEntitiesFromExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociatePersonasFromEntitiesCommand}
   */
  disassociatePersonasFromEntities(
    args: DisassociatePersonasFromEntitiesCommandInput,
    options?: KendraRequestOptions
  ): Promise<DisassociatePersonasFromEntitiesCommandOutput>;
  disassociatePersonasFromEntities(
    args: DisassociatePersonasFromEntitiesCommandInput,
    cb: (err: any, data?: DisassociatePersonasFromEntitiesCommandOutput) => void
  ): void;
  disassociatePersonasFromEntities(
    args: DisassociatePersonasFromEntitiesCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: DisassociatePersonasFromEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQuerySuggestionsCommand}
   */
  getQuerySuggestions(
    args: GetQuerySuggestionsCommandInput,
    options?: KendraRequestOptions
  ): Promise<GetQuerySuggestionsCommandOutput>;
  getQuerySuggestions(
    args: GetQuerySuggestionsCommandInput,
    cb: (err: any, data?: GetQuerySuggestionsCommandOutput) => void
  ): void;
  getQuerySuggestions(
    args: GetQuerySuggestionsCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: GetQuerySuggestionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSnapshotsCommand}
   */
  getSnapshots(
    args: GetSnapshotsCommandInput,
    options?: KendraRequestOptions
  ): Promise<GetSnapshotsCommandOutput>;
  getSnapshots(
    args: GetSnapshotsCommandInput,
    cb: (err: any, data?: GetSnapshotsCommandOutput) => void
  ): void;
  getSnapshots(
    args: GetSnapshotsCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: GetSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessControlConfigurationsCommand}
   */
  listAccessControlConfigurations(
    args: ListAccessControlConfigurationsCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListAccessControlConfigurationsCommandOutput>;
  listAccessControlConfigurations(
    args: ListAccessControlConfigurationsCommandInput,
    cb: (err: any, data?: ListAccessControlConfigurationsCommandOutput) => void
  ): void;
  listAccessControlConfigurations(
    args: ListAccessControlConfigurationsCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListAccessControlConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListDataSourcesCommandOutput>;
  listDataSources(
    args: ListDataSourcesCommandInput,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  listDataSources(
    args: ListDataSourcesCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourceSyncJobsCommand}
   */
  listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListDataSourceSyncJobsCommandOutput>;
  listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    cb: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void
  ): void;
  listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntityPersonasCommand}
   */
  listEntityPersonas(
    args: ListEntityPersonasCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListEntityPersonasCommandOutput>;
  listEntityPersonas(
    args: ListEntityPersonasCommandInput,
    cb: (err: any, data?: ListEntityPersonasCommandOutput) => void
  ): void;
  listEntityPersonas(
    args: ListEntityPersonasCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListEntityPersonasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperienceEntitiesCommand}
   */
  listExperienceEntities(
    args: ListExperienceEntitiesCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListExperienceEntitiesCommandOutput>;
  listExperienceEntities(
    args: ListExperienceEntitiesCommandInput,
    cb: (err: any, data?: ListExperienceEntitiesCommandOutput) => void
  ): void;
  listExperienceEntities(
    args: ListExperienceEntitiesCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListExperienceEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperiencesCommand}
   */
  listExperiences(
    args: ListExperiencesCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListExperiencesCommandOutput>;
  listExperiences(
    args: ListExperiencesCommandInput,
    cb: (err: any, data?: ListExperiencesCommandOutput) => void
  ): void;
  listExperiences(
    args: ListExperiencesCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListExperiencesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFaqsCommand}
   */
  listFaqs(
    args: ListFaqsCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListFaqsCommandOutput>;
  listFaqs(
    args: ListFaqsCommandInput,
    cb: (err: any, data?: ListFaqsCommandOutput) => void
  ): void;
  listFaqs(
    args: ListFaqsCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListFaqsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFeaturedResultsSetsCommand}
   */
  listFeaturedResultsSets(
    args: ListFeaturedResultsSetsCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListFeaturedResultsSetsCommandOutput>;
  listFeaturedResultsSets(
    args: ListFeaturedResultsSetsCommandInput,
    cb: (err: any, data?: ListFeaturedResultsSetsCommandOutput) => void
  ): void;
  listFeaturedResultsSets(
    args: ListFeaturedResultsSetsCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListFeaturedResultsSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsOlderThanOrderingIdCommand}
   */
  listGroupsOlderThanOrderingId(
    args: ListGroupsOlderThanOrderingIdCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListGroupsOlderThanOrderingIdCommandOutput>;
  listGroupsOlderThanOrderingId(
    args: ListGroupsOlderThanOrderingIdCommandInput,
    cb: (err: any, data?: ListGroupsOlderThanOrderingIdCommandOutput) => void
  ): void;
  listGroupsOlderThanOrderingId(
    args: ListGroupsOlderThanOrderingIdCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListGroupsOlderThanOrderingIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIndicesCommand}
   */
  listIndices(): Promise<ListIndicesCommandOutput>;
  listIndices(
    args: ListIndicesCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListIndicesCommandOutput>;
  listIndices(
    args: ListIndicesCommandInput,
    cb: (err: any, data?: ListIndicesCommandOutput) => void
  ): void;
  listIndices(
    args: ListIndicesCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListIndicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQuerySuggestionsBlockListsCommand}
   */
  listQuerySuggestionsBlockLists(
    args: ListQuerySuggestionsBlockListsCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListQuerySuggestionsBlockListsCommandOutput>;
  listQuerySuggestionsBlockLists(
    args: ListQuerySuggestionsBlockListsCommandInput,
    cb: (err: any, data?: ListQuerySuggestionsBlockListsCommandOutput) => void
  ): void;
  listQuerySuggestionsBlockLists(
    args: ListQuerySuggestionsBlockListsCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListQuerySuggestionsBlockListsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThesauriCommand}
   */
  listThesauri(
    args: ListThesauriCommandInput,
    options?: KendraRequestOptions
  ): Promise<ListThesauriCommandOutput>;
  listThesauri(
    args: ListThesauriCommandInput,
    cb: (err: any, data?: ListThesauriCommandOutput) => void
  ): void;
  listThesauri(
    args: ListThesauriCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: ListThesauriCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPrincipalMappingCommand}
   */
  putPrincipalMapping(
    args: PutPrincipalMappingCommandInput,
    options?: KendraRequestOptions
  ): Promise<PutPrincipalMappingCommandOutput>;
  putPrincipalMapping(
    args: PutPrincipalMappingCommandInput,
    cb: (err: any, data?: PutPrincipalMappingCommandOutput) => void
  ): void;
  putPrincipalMapping(
    args: PutPrincipalMappingCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: PutPrincipalMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryCommand}
   */
  query(
    args: QueryCommandInput,
    options?: KendraRequestOptions
  ): Promise<QueryCommandOutput>;
  query(
    args: QueryCommandInput,
    cb: (err: any, data?: QueryCommandOutput) => void
  ): void;
  query(
    args: QueryCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: QueryCommandOutput) => void
  ): void;

  /**
   * @see {@link RetrieveCommand}
   */
  retrieve(
    args: RetrieveCommandInput,
    options?: KendraRequestOptions
  ): Promise<RetrieveCommandOutput>;
  retrieve(
    args: RetrieveCommandInput,
    cb: (err: any, data?: RetrieveCommandOutput) => void
  ): void;
  retrieve(
    args: RetrieveCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: RetrieveCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDataSourceSyncJobCommand}
   */
  startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    options?: KendraRequestOptions
  ): Promise<StartDataSourceSyncJobCommandOutput>;
  startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    cb: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void
  ): void;
  startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDataSourceSyncJobCommand}
   */
  stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    options?: KendraRequestOptions
  ): Promise<StopDataSourceSyncJobCommandOutput>;
  stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    cb: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void
  ): void;
  stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitFeedbackCommand}
   */
  submitFeedback(
    args: SubmitFeedbackCommandInput,
    options?: KendraRequestOptions
  ): Promise<SubmitFeedbackCommandOutput>;
  submitFeedback(
    args: SubmitFeedbackCommandInput,
    cb: (err: any, data?: SubmitFeedbackCommandOutput) => void
  ): void;
  submitFeedback(
    args: SubmitFeedbackCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: SubmitFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: KendraRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: KendraRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccessControlConfigurationCommand}
   */
  updateAccessControlConfiguration(
    args: UpdateAccessControlConfigurationCommandInput,
    options?: KendraRequestOptions
  ): Promise<UpdateAccessControlConfigurationCommandOutput>;
  updateAccessControlConfiguration(
    args: UpdateAccessControlConfigurationCommandInput,
    cb: (err: any, data?: UpdateAccessControlConfigurationCommandOutput) => void
  ): void;
  updateAccessControlConfiguration(
    args: UpdateAccessControlConfigurationCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: UpdateAccessControlConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: KendraRequestOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateExperienceCommand}
   */
  updateExperience(
    args: UpdateExperienceCommandInput,
    options?: KendraRequestOptions
  ): Promise<UpdateExperienceCommandOutput>;
  updateExperience(
    args: UpdateExperienceCommandInput,
    cb: (err: any, data?: UpdateExperienceCommandOutput) => void
  ): void;
  updateExperience(
    args: UpdateExperienceCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: UpdateExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFeaturedResultsSetCommand}
   */
  updateFeaturedResultsSet(
    args: UpdateFeaturedResultsSetCommandInput,
    options?: KendraRequestOptions
  ): Promise<UpdateFeaturedResultsSetCommandOutput>;
  updateFeaturedResultsSet(
    args: UpdateFeaturedResultsSetCommandInput,
    cb: (err: any, data?: UpdateFeaturedResultsSetCommandOutput) => void
  ): void;
  updateFeaturedResultsSet(
    args: UpdateFeaturedResultsSetCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: UpdateFeaturedResultsSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIndexCommand}
   */
  updateIndex(
    args: UpdateIndexCommandInput,
    options?: KendraRequestOptions
  ): Promise<UpdateIndexCommandOutput>;
  updateIndex(
    args: UpdateIndexCommandInput,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;
  updateIndex(
    args: UpdateIndexCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQuerySuggestionsBlockListCommand}
   */
  updateQuerySuggestionsBlockList(
    args: UpdateQuerySuggestionsBlockListCommandInput,
    options?: KendraRequestOptions
  ): Promise<UpdateQuerySuggestionsBlockListCommandOutput>;
  updateQuerySuggestionsBlockList(
    args: UpdateQuerySuggestionsBlockListCommandInput,
    cb: (err: any, data?: UpdateQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  updateQuerySuggestionsBlockList(
    args: UpdateQuerySuggestionsBlockListCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: UpdateQuerySuggestionsBlockListCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQuerySuggestionsConfigCommand}
   */
  updateQuerySuggestionsConfig(
    args: UpdateQuerySuggestionsConfigCommandInput,
    options?: KendraRequestOptions
  ): Promise<UpdateQuerySuggestionsConfigCommandOutput>;
  updateQuerySuggestionsConfig(
    args: UpdateQuerySuggestionsConfigCommandInput,
    cb: (err: any, data?: UpdateQuerySuggestionsConfigCommandOutput) => void
  ): void;
  updateQuerySuggestionsConfig(
    args: UpdateQuerySuggestionsConfigCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: UpdateQuerySuggestionsConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThesaurusCommand}
   */
  updateThesaurus(
    args: UpdateThesaurusCommandInput,
    options?: KendraRequestOptions
  ): Promise<UpdateThesaurusCommandOutput>;
  updateThesaurus(
    args: UpdateThesaurusCommandInput,
    cb: (err: any, data?: UpdateThesaurusCommandOutput) => void
  ): void;
  updateThesaurus(
    args: UpdateThesaurusCommandInput,
    options: KendraRequestOptions,
    cb: (err: any, data?: UpdateThesaurusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetSnapshotsCommandOutput}.
   */
  paginateGetSnapshots(
    args: GetSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetSnapshotsCommandOutput>;

  /**
   * @see {@link ListAccessControlConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessControlConfigurationsCommandOutput}.
   */
  paginateListAccessControlConfigurations(
    args: ListAccessControlConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessControlConfigurationsCommandOutput>;

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
   * @see {@link ListDataSourceSyncJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataSourceSyncJobsCommandOutput}.
   */
  paginateListDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataSourceSyncJobsCommandOutput>;

  /**
   * @see {@link ListEntityPersonasCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEntityPersonasCommandOutput}.
   */
  paginateListEntityPersonas(
    args: ListEntityPersonasCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEntityPersonasCommandOutput>;

  /**
   * @see {@link ListExperienceEntitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExperienceEntitiesCommandOutput}.
   */
  paginateListExperienceEntities(
    args: ListExperienceEntitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExperienceEntitiesCommandOutput>;

  /**
   * @see {@link ListExperiencesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExperiencesCommandOutput}.
   */
  paginateListExperiences(
    args: ListExperiencesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExperiencesCommandOutput>;

  /**
   * @see {@link ListFaqsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFaqsCommandOutput}.
   */
  paginateListFaqs(
    args: ListFaqsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFaqsCommandOutput>;

  /**
   * @see {@link ListGroupsOlderThanOrderingIdCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGroupsOlderThanOrderingIdCommandOutput}.
   */
  paginateListGroupsOlderThanOrderingId(
    args: ListGroupsOlderThanOrderingIdCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGroupsOlderThanOrderingIdCommandOutput>;

  /**
   * @see {@link ListIndicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIndicesCommandOutput}.
   */
  paginateListIndices(
    args?: ListIndicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIndicesCommandOutput>;

  /**
   * @see {@link ListQuerySuggestionsBlockListsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQuerySuggestionsBlockListsCommandOutput}.
   */
  paginateListQuerySuggestionsBlockLists(
    args: ListQuerySuggestionsBlockListsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQuerySuggestionsBlockListsCommandOutput>;

  /**
   * @see {@link ListThesauriCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListThesauriCommandOutput}.
   */
  paginateListThesauri(
    args: ListThesauriCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListThesauriCommandOutput>;
}

/**
 * <p>Amazon Kendra is a service for indexing large document sets.</p>
 * @public
 */
export class Kendra extends KendraClient implements Kendra {}
createAggregatedClient(commands, Kendra, { paginators });
