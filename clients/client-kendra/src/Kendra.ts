// smithy-typescript generated code
import { createAggregatedClient } from "@aws-sdk/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateEntitiesToExperienceCommand,
  AssociateEntitiesToExperienceCommandInput,
  AssociateEntitiesToExperienceCommandOutput,
} from "./commands/AssociateEntitiesToExperienceCommand";
import {
  AssociatePersonasToEntitiesCommand,
  AssociatePersonasToEntitiesCommandInput,
  AssociatePersonasToEntitiesCommandOutput,
} from "./commands/AssociatePersonasToEntitiesCommand";
import {
  BatchDeleteDocumentCommand,
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput,
} from "./commands/BatchDeleteDocumentCommand";
import {
  BatchDeleteFeaturedResultsSetCommand,
  BatchDeleteFeaturedResultsSetCommandInput,
  BatchDeleteFeaturedResultsSetCommandOutput,
} from "./commands/BatchDeleteFeaturedResultsSetCommand";
import {
  BatchGetDocumentStatusCommand,
  BatchGetDocumentStatusCommandInput,
  BatchGetDocumentStatusCommandOutput,
} from "./commands/BatchGetDocumentStatusCommand";
import {
  BatchPutDocumentCommand,
  BatchPutDocumentCommandInput,
  BatchPutDocumentCommandOutput,
} from "./commands/BatchPutDocumentCommand";
import {
  ClearQuerySuggestionsCommand,
  ClearQuerySuggestionsCommandInput,
  ClearQuerySuggestionsCommandOutput,
} from "./commands/ClearQuerySuggestionsCommand";
import {
  CreateAccessControlConfigurationCommand,
  CreateAccessControlConfigurationCommandInput,
  CreateAccessControlConfigurationCommandOutput,
} from "./commands/CreateAccessControlConfigurationCommand";
import {
  CreateDataSourceCommand,
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
} from "./commands/CreateDataSourceCommand";
import {
  CreateExperienceCommand,
  CreateExperienceCommandInput,
  CreateExperienceCommandOutput,
} from "./commands/CreateExperienceCommand";
import { CreateFaqCommand, CreateFaqCommandInput, CreateFaqCommandOutput } from "./commands/CreateFaqCommand";
import {
  CreateFeaturedResultsSetCommand,
  CreateFeaturedResultsSetCommandInput,
  CreateFeaturedResultsSetCommandOutput,
} from "./commands/CreateFeaturedResultsSetCommand";
import { CreateIndexCommand, CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import {
  CreateQuerySuggestionsBlockListCommand,
  CreateQuerySuggestionsBlockListCommandInput,
  CreateQuerySuggestionsBlockListCommandOutput,
} from "./commands/CreateQuerySuggestionsBlockListCommand";
import {
  CreateThesaurusCommand,
  CreateThesaurusCommandInput,
  CreateThesaurusCommandOutput,
} from "./commands/CreateThesaurusCommand";
import {
  DeleteAccessControlConfigurationCommand,
  DeleteAccessControlConfigurationCommandInput,
  DeleteAccessControlConfigurationCommandOutput,
} from "./commands/DeleteAccessControlConfigurationCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
} from "./commands/DeleteDataSourceCommand";
import {
  DeleteExperienceCommand,
  DeleteExperienceCommandInput,
  DeleteExperienceCommandOutput,
} from "./commands/DeleteExperienceCommand";
import { DeleteFaqCommand, DeleteFaqCommandInput, DeleteFaqCommandOutput } from "./commands/DeleteFaqCommand";
import { DeleteIndexCommand, DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import {
  DeletePrincipalMappingCommand,
  DeletePrincipalMappingCommandInput,
  DeletePrincipalMappingCommandOutput,
} from "./commands/DeletePrincipalMappingCommand";
import {
  DeleteQuerySuggestionsBlockListCommand,
  DeleteQuerySuggestionsBlockListCommandInput,
  DeleteQuerySuggestionsBlockListCommandOutput,
} from "./commands/DeleteQuerySuggestionsBlockListCommand";
import {
  DeleteThesaurusCommand,
  DeleteThesaurusCommandInput,
  DeleteThesaurusCommandOutput,
} from "./commands/DeleteThesaurusCommand";
import {
  DescribeAccessControlConfigurationCommand,
  DescribeAccessControlConfigurationCommandInput,
  DescribeAccessControlConfigurationCommandOutput,
} from "./commands/DescribeAccessControlConfigurationCommand";
import {
  DescribeDataSourceCommand,
  DescribeDataSourceCommandInput,
  DescribeDataSourceCommandOutput,
} from "./commands/DescribeDataSourceCommand";
import {
  DescribeExperienceCommand,
  DescribeExperienceCommandInput,
  DescribeExperienceCommandOutput,
} from "./commands/DescribeExperienceCommand";
import { DescribeFaqCommand, DescribeFaqCommandInput, DescribeFaqCommandOutput } from "./commands/DescribeFaqCommand";
import {
  DescribeFeaturedResultsSetCommand,
  DescribeFeaturedResultsSetCommandInput,
  DescribeFeaturedResultsSetCommandOutput,
} from "./commands/DescribeFeaturedResultsSetCommand";
import {
  DescribeIndexCommand,
  DescribeIndexCommandInput,
  DescribeIndexCommandOutput,
} from "./commands/DescribeIndexCommand";
import {
  DescribePrincipalMappingCommand,
  DescribePrincipalMappingCommandInput,
  DescribePrincipalMappingCommandOutput,
} from "./commands/DescribePrincipalMappingCommand";
import {
  DescribeQuerySuggestionsBlockListCommand,
  DescribeQuerySuggestionsBlockListCommandInput,
  DescribeQuerySuggestionsBlockListCommandOutput,
} from "./commands/DescribeQuerySuggestionsBlockListCommand";
import {
  DescribeQuerySuggestionsConfigCommand,
  DescribeQuerySuggestionsConfigCommandInput,
  DescribeQuerySuggestionsConfigCommandOutput,
} from "./commands/DescribeQuerySuggestionsConfigCommand";
import {
  DescribeThesaurusCommand,
  DescribeThesaurusCommandInput,
  DescribeThesaurusCommandOutput,
} from "./commands/DescribeThesaurusCommand";
import {
  DisassociateEntitiesFromExperienceCommand,
  DisassociateEntitiesFromExperienceCommandInput,
  DisassociateEntitiesFromExperienceCommandOutput,
} from "./commands/DisassociateEntitiesFromExperienceCommand";
import {
  DisassociatePersonasFromEntitiesCommand,
  DisassociatePersonasFromEntitiesCommandInput,
  DisassociatePersonasFromEntitiesCommandOutput,
} from "./commands/DisassociatePersonasFromEntitiesCommand";
import {
  GetQuerySuggestionsCommand,
  GetQuerySuggestionsCommandInput,
  GetQuerySuggestionsCommandOutput,
} from "./commands/GetQuerySuggestionsCommand";
import {
  GetSnapshotsCommand,
  GetSnapshotsCommandInput,
  GetSnapshotsCommandOutput,
} from "./commands/GetSnapshotsCommand";
import {
  ListAccessControlConfigurationsCommand,
  ListAccessControlConfigurationsCommandInput,
  ListAccessControlConfigurationsCommandOutput,
} from "./commands/ListAccessControlConfigurationsCommand";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "./commands/ListDataSourcesCommand";
import {
  ListDataSourceSyncJobsCommand,
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "./commands/ListDataSourceSyncJobsCommand";
import {
  ListEntityPersonasCommand,
  ListEntityPersonasCommandInput,
  ListEntityPersonasCommandOutput,
} from "./commands/ListEntityPersonasCommand";
import {
  ListExperienceEntitiesCommand,
  ListExperienceEntitiesCommandInput,
  ListExperienceEntitiesCommandOutput,
} from "./commands/ListExperienceEntitiesCommand";
import {
  ListExperiencesCommand,
  ListExperiencesCommandInput,
  ListExperiencesCommandOutput,
} from "./commands/ListExperiencesCommand";
import { ListFaqsCommand, ListFaqsCommandInput, ListFaqsCommandOutput } from "./commands/ListFaqsCommand";
import {
  ListFeaturedResultsSetsCommand,
  ListFeaturedResultsSetsCommandInput,
  ListFeaturedResultsSetsCommandOutput,
} from "./commands/ListFeaturedResultsSetsCommand";
import {
  ListGroupsOlderThanOrderingIdCommand,
  ListGroupsOlderThanOrderingIdCommandInput,
  ListGroupsOlderThanOrderingIdCommandOutput,
} from "./commands/ListGroupsOlderThanOrderingIdCommand";
import { ListIndicesCommand, ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import {
  ListQuerySuggestionsBlockListsCommand,
  ListQuerySuggestionsBlockListsCommandInput,
  ListQuerySuggestionsBlockListsCommandOutput,
} from "./commands/ListQuerySuggestionsBlockListsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListThesauriCommand,
  ListThesauriCommandInput,
  ListThesauriCommandOutput,
} from "./commands/ListThesauriCommand";
import {
  PutPrincipalMappingCommand,
  PutPrincipalMappingCommandInput,
  PutPrincipalMappingCommandOutput,
} from "./commands/PutPrincipalMappingCommand";
import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import {
  StartDataSourceSyncJobCommand,
  StartDataSourceSyncJobCommandInput,
  StartDataSourceSyncJobCommandOutput,
} from "./commands/StartDataSourceSyncJobCommand";
import {
  StopDataSourceSyncJobCommand,
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput,
} from "./commands/StopDataSourceSyncJobCommand";
import {
  SubmitFeedbackCommand,
  SubmitFeedbackCommandInput,
  SubmitFeedbackCommandOutput,
} from "./commands/SubmitFeedbackCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccessControlConfigurationCommand,
  UpdateAccessControlConfigurationCommandInput,
  UpdateAccessControlConfigurationCommandOutput,
} from "./commands/UpdateAccessControlConfigurationCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
} from "./commands/UpdateDataSourceCommand";
import {
  UpdateExperienceCommand,
  UpdateExperienceCommandInput,
  UpdateExperienceCommandOutput,
} from "./commands/UpdateExperienceCommand";
import {
  UpdateFeaturedResultsSetCommand,
  UpdateFeaturedResultsSetCommandInput,
  UpdateFeaturedResultsSetCommandOutput,
} from "./commands/UpdateFeaturedResultsSetCommand";
import { UpdateIndexCommand, UpdateIndexCommandInput, UpdateIndexCommandOutput } from "./commands/UpdateIndexCommand";
import {
  UpdateQuerySuggestionsBlockListCommand,
  UpdateQuerySuggestionsBlockListCommandInput,
  UpdateQuerySuggestionsBlockListCommandOutput,
} from "./commands/UpdateQuerySuggestionsBlockListCommand";
import {
  UpdateQuerySuggestionsConfigCommand,
  UpdateQuerySuggestionsConfigCommandInput,
  UpdateQuerySuggestionsConfigCommandOutput,
} from "./commands/UpdateQuerySuggestionsConfigCommand";
import {
  UpdateThesaurusCommand,
  UpdateThesaurusCommandInput,
  UpdateThesaurusCommandOutput,
} from "./commands/UpdateThesaurusCommand";
import { KendraClient, KendraClientConfig } from "./KendraClient";

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

export interface Kendra {
  /**
   * @see {@link AssociateEntitiesToExperienceCommand}
   */
  associateEntitiesToExperience(
    args: AssociateEntitiesToExperienceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateEntitiesToExperienceCommandOutput>;
  associateEntitiesToExperience(
    args: AssociateEntitiesToExperienceCommandInput,
    cb: (err: any, data?: AssociateEntitiesToExperienceCommandOutput) => void
  ): void;
  associateEntitiesToExperience(
    args: AssociateEntitiesToExperienceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateEntitiesToExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociatePersonasToEntitiesCommand}
   */
  associatePersonasToEntities(
    args: AssociatePersonasToEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePersonasToEntitiesCommandOutput>;
  associatePersonasToEntities(
    args: AssociatePersonasToEntitiesCommandInput,
    cb: (err: any, data?: AssociatePersonasToEntitiesCommandOutput) => void
  ): void;
  associatePersonasToEntities(
    args: AssociatePersonasToEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePersonasToEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteDocumentCommand}
   */
  batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteDocumentCommandOutput>;
  batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    cb: (err: any, data?: BatchDeleteDocumentCommandOutput) => void
  ): void;
  batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteFeaturedResultsSetCommand}
   */
  batchDeleteFeaturedResultsSet(
    args: BatchDeleteFeaturedResultsSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteFeaturedResultsSetCommandOutput>;
  batchDeleteFeaturedResultsSet(
    args: BatchDeleteFeaturedResultsSetCommandInput,
    cb: (err: any, data?: BatchDeleteFeaturedResultsSetCommandOutput) => void
  ): void;
  batchDeleteFeaturedResultsSet(
    args: BatchDeleteFeaturedResultsSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteFeaturedResultsSetCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetDocumentStatusCommand}
   */
  batchGetDocumentStatus(
    args: BatchGetDocumentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDocumentStatusCommandOutput>;
  batchGetDocumentStatus(
    args: BatchGetDocumentStatusCommandInput,
    cb: (err: any, data?: BatchGetDocumentStatusCommandOutput) => void
  ): void;
  batchGetDocumentStatus(
    args: BatchGetDocumentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDocumentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutDocumentCommand}
   */
  batchPutDocument(
    args: BatchPutDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutDocumentCommandOutput>;
  batchPutDocument(
    args: BatchPutDocumentCommandInput,
    cb: (err: any, data?: BatchPutDocumentCommandOutput) => void
  ): void;
  batchPutDocument(
    args: BatchPutDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link ClearQuerySuggestionsCommand}
   */
  clearQuerySuggestions(
    args: ClearQuerySuggestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ClearQuerySuggestionsCommandOutput>;
  clearQuerySuggestions(
    args: ClearQuerySuggestionsCommandInput,
    cb: (err: any, data?: ClearQuerySuggestionsCommandOutput) => void
  ): void;
  clearQuerySuggestions(
    args: ClearQuerySuggestionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ClearQuerySuggestionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessControlConfigurationCommand}
   */
  createAccessControlConfiguration(
    args: CreateAccessControlConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessControlConfigurationCommandOutput>;
  createAccessControlConfiguration(
    args: CreateAccessControlConfigurationCommandInput,
    cb: (err: any, data?: CreateAccessControlConfigurationCommandOutput) => void
  ): void;
  createAccessControlConfiguration(
    args: CreateAccessControlConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessControlConfigurationCommandOutput) => void
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
   * @see {@link CreateExperienceCommand}
   */
  createExperience(
    args: CreateExperienceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExperienceCommandOutput>;
  createExperience(
    args: CreateExperienceCommandInput,
    cb: (err: any, data?: CreateExperienceCommandOutput) => void
  ): void;
  createExperience(
    args: CreateExperienceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFaqCommand}
   */
  createFaq(args: CreateFaqCommandInput, options?: __HttpHandlerOptions): Promise<CreateFaqCommandOutput>;
  createFaq(args: CreateFaqCommandInput, cb: (err: any, data?: CreateFaqCommandOutput) => void): void;
  createFaq(
    args: CreateFaqCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFaqCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFeaturedResultsSetCommand}
   */
  createFeaturedResultsSet(
    args: CreateFeaturedResultsSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFeaturedResultsSetCommandOutput>;
  createFeaturedResultsSet(
    args: CreateFeaturedResultsSetCommandInput,
    cb: (err: any, data?: CreateFeaturedResultsSetCommandOutput) => void
  ): void;
  createFeaturedResultsSet(
    args: CreateFeaturedResultsSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFeaturedResultsSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIndexCommand}
   */
  createIndex(args: CreateIndexCommandInput, options?: __HttpHandlerOptions): Promise<CreateIndexCommandOutput>;
  createIndex(args: CreateIndexCommandInput, cb: (err: any, data?: CreateIndexCommandOutput) => void): void;
  createIndex(
    args: CreateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQuerySuggestionsBlockListCommand}
   */
  createQuerySuggestionsBlockList(
    args: CreateQuerySuggestionsBlockListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQuerySuggestionsBlockListCommandOutput>;
  createQuerySuggestionsBlockList(
    args: CreateQuerySuggestionsBlockListCommandInput,
    cb: (err: any, data?: CreateQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  createQuerySuggestionsBlockList(
    args: CreateQuerySuggestionsBlockListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQuerySuggestionsBlockListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThesaurusCommand}
   */
  createThesaurus(
    args: CreateThesaurusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThesaurusCommandOutput>;
  createThesaurus(args: CreateThesaurusCommandInput, cb: (err: any, data?: CreateThesaurusCommandOutput) => void): void;
  createThesaurus(
    args: CreateThesaurusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThesaurusCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessControlConfigurationCommand}
   */
  deleteAccessControlConfiguration(
    args: DeleteAccessControlConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessControlConfigurationCommandOutput>;
  deleteAccessControlConfiguration(
    args: DeleteAccessControlConfigurationCommandInput,
    cb: (err: any, data?: DeleteAccessControlConfigurationCommandOutput) => void
  ): void;
  deleteAccessControlConfiguration(
    args: DeleteAccessControlConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessControlConfigurationCommandOutput) => void
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
   * @see {@link DeleteExperienceCommand}
   */
  deleteExperience(
    args: DeleteExperienceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExperienceCommandOutput>;
  deleteExperience(
    args: DeleteExperienceCommandInput,
    cb: (err: any, data?: DeleteExperienceCommandOutput) => void
  ): void;
  deleteExperience(
    args: DeleteExperienceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFaqCommand}
   */
  deleteFaq(args: DeleteFaqCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFaqCommandOutput>;
  deleteFaq(args: DeleteFaqCommandInput, cb: (err: any, data?: DeleteFaqCommandOutput) => void): void;
  deleteFaq(
    args: DeleteFaqCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFaqCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIndexCommand}
   */
  deleteIndex(args: DeleteIndexCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIndexCommandOutput>;
  deleteIndex(args: DeleteIndexCommandInput, cb: (err: any, data?: DeleteIndexCommandOutput) => void): void;
  deleteIndex(
    args: DeleteIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePrincipalMappingCommand}
   */
  deletePrincipalMapping(
    args: DeletePrincipalMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePrincipalMappingCommandOutput>;
  deletePrincipalMapping(
    args: DeletePrincipalMappingCommandInput,
    cb: (err: any, data?: DeletePrincipalMappingCommandOutput) => void
  ): void;
  deletePrincipalMapping(
    args: DeletePrincipalMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePrincipalMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQuerySuggestionsBlockListCommand}
   */
  deleteQuerySuggestionsBlockList(
    args: DeleteQuerySuggestionsBlockListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQuerySuggestionsBlockListCommandOutput>;
  deleteQuerySuggestionsBlockList(
    args: DeleteQuerySuggestionsBlockListCommandInput,
    cb: (err: any, data?: DeleteQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  deleteQuerySuggestionsBlockList(
    args: DeleteQuerySuggestionsBlockListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQuerySuggestionsBlockListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThesaurusCommand}
   */
  deleteThesaurus(
    args: DeleteThesaurusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThesaurusCommandOutput>;
  deleteThesaurus(args: DeleteThesaurusCommandInput, cb: (err: any, data?: DeleteThesaurusCommandOutput) => void): void;
  deleteThesaurus(
    args: DeleteThesaurusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThesaurusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccessControlConfigurationCommand}
   */
  describeAccessControlConfiguration(
    args: DescribeAccessControlConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccessControlConfigurationCommandOutput>;
  describeAccessControlConfiguration(
    args: DescribeAccessControlConfigurationCommandInput,
    cb: (err: any, data?: DescribeAccessControlConfigurationCommandOutput) => void
  ): void;
  describeAccessControlConfiguration(
    args: DescribeAccessControlConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccessControlConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSourceCommand}
   */
  describeDataSource(
    args: DescribeDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSourceCommandOutput>;
  describeDataSource(
    args: DescribeDataSourceCommandInput,
    cb: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): void;
  describeDataSource(
    args: DescribeDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExperienceCommand}
   */
  describeExperience(
    args: DescribeExperienceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExperienceCommandOutput>;
  describeExperience(
    args: DescribeExperienceCommandInput,
    cb: (err: any, data?: DescribeExperienceCommandOutput) => void
  ): void;
  describeExperience(
    args: DescribeExperienceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFaqCommand}
   */
  describeFaq(args: DescribeFaqCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFaqCommandOutput>;
  describeFaq(args: DescribeFaqCommandInput, cb: (err: any, data?: DescribeFaqCommandOutput) => void): void;
  describeFaq(
    args: DescribeFaqCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFaqCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFeaturedResultsSetCommand}
   */
  describeFeaturedResultsSet(
    args: DescribeFeaturedResultsSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFeaturedResultsSetCommandOutput>;
  describeFeaturedResultsSet(
    args: DescribeFeaturedResultsSetCommandInput,
    cb: (err: any, data?: DescribeFeaturedResultsSetCommandOutput) => void
  ): void;
  describeFeaturedResultsSet(
    args: DescribeFeaturedResultsSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFeaturedResultsSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIndexCommand}
   */
  describeIndex(args: DescribeIndexCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIndexCommandOutput>;
  describeIndex(args: DescribeIndexCommandInput, cb: (err: any, data?: DescribeIndexCommandOutput) => void): void;
  describeIndex(
    args: DescribeIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePrincipalMappingCommand}
   */
  describePrincipalMapping(
    args: DescribePrincipalMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePrincipalMappingCommandOutput>;
  describePrincipalMapping(
    args: DescribePrincipalMappingCommandInput,
    cb: (err: any, data?: DescribePrincipalMappingCommandOutput) => void
  ): void;
  describePrincipalMapping(
    args: DescribePrincipalMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePrincipalMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQuerySuggestionsBlockListCommand}
   */
  describeQuerySuggestionsBlockList(
    args: DescribeQuerySuggestionsBlockListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQuerySuggestionsBlockListCommandOutput>;
  describeQuerySuggestionsBlockList(
    args: DescribeQuerySuggestionsBlockListCommandInput,
    cb: (err: any, data?: DescribeQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  describeQuerySuggestionsBlockList(
    args: DescribeQuerySuggestionsBlockListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQuerySuggestionsBlockListCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQuerySuggestionsConfigCommand}
   */
  describeQuerySuggestionsConfig(
    args: DescribeQuerySuggestionsConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQuerySuggestionsConfigCommandOutput>;
  describeQuerySuggestionsConfig(
    args: DescribeQuerySuggestionsConfigCommandInput,
    cb: (err: any, data?: DescribeQuerySuggestionsConfigCommandOutput) => void
  ): void;
  describeQuerySuggestionsConfig(
    args: DescribeQuerySuggestionsConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQuerySuggestionsConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThesaurusCommand}
   */
  describeThesaurus(
    args: DescribeThesaurusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThesaurusCommandOutput>;
  describeThesaurus(
    args: DescribeThesaurusCommandInput,
    cb: (err: any, data?: DescribeThesaurusCommandOutput) => void
  ): void;
  describeThesaurus(
    args: DescribeThesaurusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThesaurusCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateEntitiesFromExperienceCommand}
   */
  disassociateEntitiesFromExperience(
    args: DisassociateEntitiesFromExperienceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateEntitiesFromExperienceCommandOutput>;
  disassociateEntitiesFromExperience(
    args: DisassociateEntitiesFromExperienceCommandInput,
    cb: (err: any, data?: DisassociateEntitiesFromExperienceCommandOutput) => void
  ): void;
  disassociateEntitiesFromExperience(
    args: DisassociateEntitiesFromExperienceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateEntitiesFromExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociatePersonasFromEntitiesCommand}
   */
  disassociatePersonasFromEntities(
    args: DisassociatePersonasFromEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePersonasFromEntitiesCommandOutput>;
  disassociatePersonasFromEntities(
    args: DisassociatePersonasFromEntitiesCommandInput,
    cb: (err: any, data?: DisassociatePersonasFromEntitiesCommandOutput) => void
  ): void;
  disassociatePersonasFromEntities(
    args: DisassociatePersonasFromEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePersonasFromEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQuerySuggestionsCommand}
   */
  getQuerySuggestions(
    args: GetQuerySuggestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQuerySuggestionsCommandOutput>;
  getQuerySuggestions(
    args: GetQuerySuggestionsCommandInput,
    cb: (err: any, data?: GetQuerySuggestionsCommandOutput) => void
  ): void;
  getQuerySuggestions(
    args: GetQuerySuggestionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQuerySuggestionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSnapshotsCommand}
   */
  getSnapshots(args: GetSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<GetSnapshotsCommandOutput>;
  getSnapshots(args: GetSnapshotsCommandInput, cb: (err: any, data?: GetSnapshotsCommandOutput) => void): void;
  getSnapshots(
    args: GetSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessControlConfigurationsCommand}
   */
  listAccessControlConfigurations(
    args: ListAccessControlConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessControlConfigurationsCommandOutput>;
  listAccessControlConfigurations(
    args: ListAccessControlConfigurationsCommandInput,
    cb: (err: any, data?: ListAccessControlConfigurationsCommandOutput) => void
  ): void;
  listAccessControlConfigurations(
    args: ListAccessControlConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessControlConfigurationsCommandOutput) => void
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
   * @see {@link ListDataSourceSyncJobsCommand}
   */
  listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourceSyncJobsCommandOutput>;
  listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    cb: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void
  ): void;
  listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntityPersonasCommand}
   */
  listEntityPersonas(
    args: ListEntityPersonasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntityPersonasCommandOutput>;
  listEntityPersonas(
    args: ListEntityPersonasCommandInput,
    cb: (err: any, data?: ListEntityPersonasCommandOutput) => void
  ): void;
  listEntityPersonas(
    args: ListEntityPersonasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntityPersonasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperienceEntitiesCommand}
   */
  listExperienceEntities(
    args: ListExperienceEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperienceEntitiesCommandOutput>;
  listExperienceEntities(
    args: ListExperienceEntitiesCommandInput,
    cb: (err: any, data?: ListExperienceEntitiesCommandOutput) => void
  ): void;
  listExperienceEntities(
    args: ListExperienceEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperienceEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperiencesCommand}
   */
  listExperiences(
    args: ListExperiencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperiencesCommandOutput>;
  listExperiences(args: ListExperiencesCommandInput, cb: (err: any, data?: ListExperiencesCommandOutput) => void): void;
  listExperiences(
    args: ListExperiencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperiencesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFaqsCommand}
   */
  listFaqs(args: ListFaqsCommandInput, options?: __HttpHandlerOptions): Promise<ListFaqsCommandOutput>;
  listFaqs(args: ListFaqsCommandInput, cb: (err: any, data?: ListFaqsCommandOutput) => void): void;
  listFaqs(
    args: ListFaqsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFaqsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFeaturedResultsSetsCommand}
   */
  listFeaturedResultsSets(
    args: ListFeaturedResultsSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFeaturedResultsSetsCommandOutput>;
  listFeaturedResultsSets(
    args: ListFeaturedResultsSetsCommandInput,
    cb: (err: any, data?: ListFeaturedResultsSetsCommandOutput) => void
  ): void;
  listFeaturedResultsSets(
    args: ListFeaturedResultsSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFeaturedResultsSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsOlderThanOrderingIdCommand}
   */
  listGroupsOlderThanOrderingId(
    args: ListGroupsOlderThanOrderingIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupsOlderThanOrderingIdCommandOutput>;
  listGroupsOlderThanOrderingId(
    args: ListGroupsOlderThanOrderingIdCommandInput,
    cb: (err: any, data?: ListGroupsOlderThanOrderingIdCommandOutput) => void
  ): void;
  listGroupsOlderThanOrderingId(
    args: ListGroupsOlderThanOrderingIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsOlderThanOrderingIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIndicesCommand}
   */
  listIndices(args: ListIndicesCommandInput, options?: __HttpHandlerOptions): Promise<ListIndicesCommandOutput>;
  listIndices(args: ListIndicesCommandInput, cb: (err: any, data?: ListIndicesCommandOutput) => void): void;
  listIndices(
    args: ListIndicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQuerySuggestionsBlockListsCommand}
   */
  listQuerySuggestionsBlockLists(
    args: ListQuerySuggestionsBlockListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQuerySuggestionsBlockListsCommandOutput>;
  listQuerySuggestionsBlockLists(
    args: ListQuerySuggestionsBlockListsCommandInput,
    cb: (err: any, data?: ListQuerySuggestionsBlockListsCommandOutput) => void
  ): void;
  listQuerySuggestionsBlockLists(
    args: ListQuerySuggestionsBlockListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQuerySuggestionsBlockListsCommandOutput) => void
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
   * @see {@link ListThesauriCommand}
   */
  listThesauri(args: ListThesauriCommandInput, options?: __HttpHandlerOptions): Promise<ListThesauriCommandOutput>;
  listThesauri(args: ListThesauriCommandInput, cb: (err: any, data?: ListThesauriCommandOutput) => void): void;
  listThesauri(
    args: ListThesauriCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThesauriCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPrincipalMappingCommand}
   */
  putPrincipalMapping(
    args: PutPrincipalMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPrincipalMappingCommandOutput>;
  putPrincipalMapping(
    args: PutPrincipalMappingCommandInput,
    cb: (err: any, data?: PutPrincipalMappingCommandOutput) => void
  ): void;
  putPrincipalMapping(
    args: PutPrincipalMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPrincipalMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryCommand}
   */
  query(args: QueryCommandInput, options?: __HttpHandlerOptions): Promise<QueryCommandOutput>;
  query(args: QueryCommandInput, cb: (err: any, data?: QueryCommandOutput) => void): void;
  query(
    args: QueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDataSourceSyncJobCommand}
   */
  startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataSourceSyncJobCommandOutput>;
  startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    cb: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void
  ): void;
  startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDataSourceSyncJobCommand}
   */
  stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDataSourceSyncJobCommandOutput>;
  stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    cb: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void
  ): void;
  stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitFeedbackCommand}
   */
  submitFeedback(
    args: SubmitFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitFeedbackCommandOutput>;
  submitFeedback(args: SubmitFeedbackCommandInput, cb: (err: any, data?: SubmitFeedbackCommandOutput) => void): void;
  submitFeedback(
    args: SubmitFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitFeedbackCommandOutput) => void
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
   * @see {@link UpdateAccessControlConfigurationCommand}
   */
  updateAccessControlConfiguration(
    args: UpdateAccessControlConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessControlConfigurationCommandOutput>;
  updateAccessControlConfiguration(
    args: UpdateAccessControlConfigurationCommandInput,
    cb: (err: any, data?: UpdateAccessControlConfigurationCommandOutput) => void
  ): void;
  updateAccessControlConfiguration(
    args: UpdateAccessControlConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessControlConfigurationCommandOutput) => void
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
   * @see {@link UpdateExperienceCommand}
   */
  updateExperience(
    args: UpdateExperienceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExperienceCommandOutput>;
  updateExperience(
    args: UpdateExperienceCommandInput,
    cb: (err: any, data?: UpdateExperienceCommandOutput) => void
  ): void;
  updateExperience(
    args: UpdateExperienceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFeaturedResultsSetCommand}
   */
  updateFeaturedResultsSet(
    args: UpdateFeaturedResultsSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFeaturedResultsSetCommandOutput>;
  updateFeaturedResultsSet(
    args: UpdateFeaturedResultsSetCommandInput,
    cb: (err: any, data?: UpdateFeaturedResultsSetCommandOutput) => void
  ): void;
  updateFeaturedResultsSet(
    args: UpdateFeaturedResultsSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFeaturedResultsSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIndexCommand}
   */
  updateIndex(args: UpdateIndexCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIndexCommandOutput>;
  updateIndex(args: UpdateIndexCommandInput, cb: (err: any, data?: UpdateIndexCommandOutput) => void): void;
  updateIndex(
    args: UpdateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQuerySuggestionsBlockListCommand}
   */
  updateQuerySuggestionsBlockList(
    args: UpdateQuerySuggestionsBlockListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQuerySuggestionsBlockListCommandOutput>;
  updateQuerySuggestionsBlockList(
    args: UpdateQuerySuggestionsBlockListCommandInput,
    cb: (err: any, data?: UpdateQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  updateQuerySuggestionsBlockList(
    args: UpdateQuerySuggestionsBlockListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQuerySuggestionsBlockListCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQuerySuggestionsConfigCommand}
   */
  updateQuerySuggestionsConfig(
    args: UpdateQuerySuggestionsConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQuerySuggestionsConfigCommandOutput>;
  updateQuerySuggestionsConfig(
    args: UpdateQuerySuggestionsConfigCommandInput,
    cb: (err: any, data?: UpdateQuerySuggestionsConfigCommandOutput) => void
  ): void;
  updateQuerySuggestionsConfig(
    args: UpdateQuerySuggestionsConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQuerySuggestionsConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThesaurusCommand}
   */
  updateThesaurus(
    args: UpdateThesaurusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThesaurusCommandOutput>;
  updateThesaurus(args: UpdateThesaurusCommandInput, cb: (err: any, data?: UpdateThesaurusCommandOutput) => void): void;
  updateThesaurus(
    args: UpdateThesaurusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThesaurusCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Kendra is a service for indexing large document sets.</p>
 */
export class Kendra extends KendraClient implements Kendra {}
createAggregatedClient(commands, Kendra);
