// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AddProfileKeyCommandInput,
  type AddProfileKeyCommandOutput,
  AddProfileKeyCommand,
} from "./commands/AddProfileKeyCommand";
import {
  type BatchGetCalculatedAttributeForProfileCommandInput,
  type BatchGetCalculatedAttributeForProfileCommandOutput,
  BatchGetCalculatedAttributeForProfileCommand,
} from "./commands/BatchGetCalculatedAttributeForProfileCommand";
import {
  type BatchGetProfileCommandInput,
  type BatchGetProfileCommandOutput,
  BatchGetProfileCommand,
} from "./commands/BatchGetProfileCommand";
import {
  type CreateCalculatedAttributeDefinitionCommandInput,
  type CreateCalculatedAttributeDefinitionCommandOutput,
  CreateCalculatedAttributeDefinitionCommand,
} from "./commands/CreateCalculatedAttributeDefinitionCommand";
import {
  type CreateDomainCommandInput,
  type CreateDomainCommandOutput,
  CreateDomainCommand,
} from "./commands/CreateDomainCommand";
import {
  type CreateDomainLayoutCommandInput,
  type CreateDomainLayoutCommandOutput,
  CreateDomainLayoutCommand,
} from "./commands/CreateDomainLayoutCommand";
import {
  type CreateEventStreamCommandInput,
  type CreateEventStreamCommandOutput,
  CreateEventStreamCommand,
} from "./commands/CreateEventStreamCommand";
import {
  type CreateEventTriggerCommandInput,
  type CreateEventTriggerCommandOutput,
  CreateEventTriggerCommand,
} from "./commands/CreateEventTriggerCommand";
import {
  type CreateIntegrationWorkflowCommandInput,
  type CreateIntegrationWorkflowCommandOutput,
  CreateIntegrationWorkflowCommand,
} from "./commands/CreateIntegrationWorkflowCommand";
import {
  type CreateProfileCommandInput,
  type CreateProfileCommandOutput,
  CreateProfileCommand,
} from "./commands/CreateProfileCommand";
import {
  type CreateRecommenderCommandInput,
  type CreateRecommenderCommandOutput,
  CreateRecommenderCommand,
} from "./commands/CreateRecommenderCommand";
import {
  type CreateRecommenderFilterCommandInput,
  type CreateRecommenderFilterCommandOutput,
  CreateRecommenderFilterCommand,
} from "./commands/CreateRecommenderFilterCommand";
import {
  type CreateSegmentDefinitionCommandInput,
  type CreateSegmentDefinitionCommandOutput,
  CreateSegmentDefinitionCommand,
} from "./commands/CreateSegmentDefinitionCommand";
import {
  type CreateSegmentEstimateCommandInput,
  type CreateSegmentEstimateCommandOutput,
  CreateSegmentEstimateCommand,
} from "./commands/CreateSegmentEstimateCommand";
import {
  type CreateSegmentSnapshotCommandInput,
  type CreateSegmentSnapshotCommandOutput,
  CreateSegmentSnapshotCommand,
} from "./commands/CreateSegmentSnapshotCommand";
import {
  type CreateUploadJobCommandInput,
  type CreateUploadJobCommandOutput,
  CreateUploadJobCommand,
} from "./commands/CreateUploadJobCommand";
import {
  type DeleteCalculatedAttributeDefinitionCommandInput,
  type DeleteCalculatedAttributeDefinitionCommandOutput,
  DeleteCalculatedAttributeDefinitionCommand,
} from "./commands/DeleteCalculatedAttributeDefinitionCommand";
import {
  type DeleteDomainCommandInput,
  type DeleteDomainCommandOutput,
  DeleteDomainCommand,
} from "./commands/DeleteDomainCommand";
import {
  type DeleteDomainLayoutCommandInput,
  type DeleteDomainLayoutCommandOutput,
  DeleteDomainLayoutCommand,
} from "./commands/DeleteDomainLayoutCommand";
import {
  type DeleteDomainObjectTypeCommandInput,
  type DeleteDomainObjectTypeCommandOutput,
  DeleteDomainObjectTypeCommand,
} from "./commands/DeleteDomainObjectTypeCommand";
import {
  type DeleteEventStreamCommandInput,
  type DeleteEventStreamCommandOutput,
  DeleteEventStreamCommand,
} from "./commands/DeleteEventStreamCommand";
import {
  type DeleteEventTriggerCommandInput,
  type DeleteEventTriggerCommandOutput,
  DeleteEventTriggerCommand,
} from "./commands/DeleteEventTriggerCommand";
import {
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteIntegrationCommand,
} from "./commands/DeleteIntegrationCommand";
import {
  type DeleteProfileCommandInput,
  type DeleteProfileCommandOutput,
  DeleteProfileCommand,
} from "./commands/DeleteProfileCommand";
import {
  type DeleteProfileKeyCommandInput,
  type DeleteProfileKeyCommandOutput,
  DeleteProfileKeyCommand,
} from "./commands/DeleteProfileKeyCommand";
import {
  type DeleteProfileObjectCommandInput,
  type DeleteProfileObjectCommandOutput,
  DeleteProfileObjectCommand,
} from "./commands/DeleteProfileObjectCommand";
import {
  type DeleteProfileObjectTypeCommandInput,
  type DeleteProfileObjectTypeCommandOutput,
  DeleteProfileObjectTypeCommand,
} from "./commands/DeleteProfileObjectTypeCommand";
import {
  type DeleteRecommenderCommandInput,
  type DeleteRecommenderCommandOutput,
  DeleteRecommenderCommand,
} from "./commands/DeleteRecommenderCommand";
import {
  type DeleteRecommenderFilterCommandInput,
  type DeleteRecommenderFilterCommandOutput,
  DeleteRecommenderFilterCommand,
} from "./commands/DeleteRecommenderFilterCommand";
import {
  type DeleteSegmentDefinitionCommandInput,
  type DeleteSegmentDefinitionCommandOutput,
  DeleteSegmentDefinitionCommand,
} from "./commands/DeleteSegmentDefinitionCommand";
import {
  type DeleteWorkflowCommandInput,
  type DeleteWorkflowCommandOutput,
  DeleteWorkflowCommand,
} from "./commands/DeleteWorkflowCommand";
import {
  type DetectProfileObjectTypeCommandInput,
  type DetectProfileObjectTypeCommandOutput,
  DetectProfileObjectTypeCommand,
} from "./commands/DetectProfileObjectTypeCommand";
import {
  type GetAutoMergingPreviewCommandInput,
  type GetAutoMergingPreviewCommandOutput,
  GetAutoMergingPreviewCommand,
} from "./commands/GetAutoMergingPreviewCommand";
import {
  type GetCalculatedAttributeDefinitionCommandInput,
  type GetCalculatedAttributeDefinitionCommandOutput,
  GetCalculatedAttributeDefinitionCommand,
} from "./commands/GetCalculatedAttributeDefinitionCommand";
import {
  type GetCalculatedAttributeForProfileCommandInput,
  type GetCalculatedAttributeForProfileCommandOutput,
  GetCalculatedAttributeForProfileCommand,
} from "./commands/GetCalculatedAttributeForProfileCommand";
import { type GetDomainCommandInput, type GetDomainCommandOutput, GetDomainCommand } from "./commands/GetDomainCommand";
import {
  type GetDomainLayoutCommandInput,
  type GetDomainLayoutCommandOutput,
  GetDomainLayoutCommand,
} from "./commands/GetDomainLayoutCommand";
import {
  type GetDomainObjectTypeCommandInput,
  type GetDomainObjectTypeCommandOutput,
  GetDomainObjectTypeCommand,
} from "./commands/GetDomainObjectTypeCommand";
import {
  type GetEventStreamCommandInput,
  type GetEventStreamCommandOutput,
  GetEventStreamCommand,
} from "./commands/GetEventStreamCommand";
import {
  type GetEventTriggerCommandInput,
  type GetEventTriggerCommandOutput,
  GetEventTriggerCommand,
} from "./commands/GetEventTriggerCommand";
import {
  type GetIdentityResolutionJobCommandInput,
  type GetIdentityResolutionJobCommandOutput,
  GetIdentityResolutionJobCommand,
} from "./commands/GetIdentityResolutionJobCommand";
import {
  type GetIntegrationCommandInput,
  type GetIntegrationCommandOutput,
  GetIntegrationCommand,
} from "./commands/GetIntegrationCommand";
import {
  type GetMatchesCommandInput,
  type GetMatchesCommandOutput,
  GetMatchesCommand,
} from "./commands/GetMatchesCommand";
import {
  type GetObjectTypeAttributeStatisticsCommandInput,
  type GetObjectTypeAttributeStatisticsCommandOutput,
  GetObjectTypeAttributeStatisticsCommand,
} from "./commands/GetObjectTypeAttributeStatisticsCommand";
import {
  type GetProfileHistoryRecordCommandInput,
  type GetProfileHistoryRecordCommandOutput,
  GetProfileHistoryRecordCommand,
} from "./commands/GetProfileHistoryRecordCommand";
import {
  type GetProfileObjectTypeCommandInput,
  type GetProfileObjectTypeCommandOutput,
  GetProfileObjectTypeCommand,
} from "./commands/GetProfileObjectTypeCommand";
import {
  type GetProfileObjectTypeTemplateCommandInput,
  type GetProfileObjectTypeTemplateCommandOutput,
  GetProfileObjectTypeTemplateCommand,
} from "./commands/GetProfileObjectTypeTemplateCommand";
import {
  type GetProfileRecommendationsCommandInput,
  type GetProfileRecommendationsCommandOutput,
  GetProfileRecommendationsCommand,
} from "./commands/GetProfileRecommendationsCommand";
import {
  type GetRecommenderCommandInput,
  type GetRecommenderCommandOutput,
  GetRecommenderCommand,
} from "./commands/GetRecommenderCommand";
import {
  type GetRecommenderFilterCommandInput,
  type GetRecommenderFilterCommandOutput,
  GetRecommenderFilterCommand,
} from "./commands/GetRecommenderFilterCommand";
import {
  type GetSegmentDefinitionCommandInput,
  type GetSegmentDefinitionCommandOutput,
  GetSegmentDefinitionCommand,
} from "./commands/GetSegmentDefinitionCommand";
import {
  type GetSegmentEstimateCommandInput,
  type GetSegmentEstimateCommandOutput,
  GetSegmentEstimateCommand,
} from "./commands/GetSegmentEstimateCommand";
import {
  type GetSegmentMembershipCommandInput,
  type GetSegmentMembershipCommandOutput,
  GetSegmentMembershipCommand,
} from "./commands/GetSegmentMembershipCommand";
import {
  type GetSegmentSnapshotCommandInput,
  type GetSegmentSnapshotCommandOutput,
  GetSegmentSnapshotCommand,
} from "./commands/GetSegmentSnapshotCommand";
import {
  type GetSimilarProfilesCommandInput,
  type GetSimilarProfilesCommandOutput,
  GetSimilarProfilesCommand,
} from "./commands/GetSimilarProfilesCommand";
import {
  type GetUploadJobCommandInput,
  type GetUploadJobCommandOutput,
  GetUploadJobCommand,
} from "./commands/GetUploadJobCommand";
import {
  type GetUploadJobPathCommandInput,
  type GetUploadJobPathCommandOutput,
  GetUploadJobPathCommand,
} from "./commands/GetUploadJobPathCommand";
import {
  type GetWorkflowCommandInput,
  type GetWorkflowCommandOutput,
  GetWorkflowCommand,
} from "./commands/GetWorkflowCommand";
import {
  type GetWorkflowStepsCommandInput,
  type GetWorkflowStepsCommandOutput,
  GetWorkflowStepsCommand,
} from "./commands/GetWorkflowStepsCommand";
import {
  type ListAccountIntegrationsCommandInput,
  type ListAccountIntegrationsCommandOutput,
  ListAccountIntegrationsCommand,
} from "./commands/ListAccountIntegrationsCommand";
import {
  type ListCalculatedAttributeDefinitionsCommandInput,
  type ListCalculatedAttributeDefinitionsCommandOutput,
  ListCalculatedAttributeDefinitionsCommand,
} from "./commands/ListCalculatedAttributeDefinitionsCommand";
import {
  type ListCalculatedAttributesForProfileCommandInput,
  type ListCalculatedAttributesForProfileCommandOutput,
  ListCalculatedAttributesForProfileCommand,
} from "./commands/ListCalculatedAttributesForProfileCommand";
import {
  type ListDomainLayoutsCommandInput,
  type ListDomainLayoutsCommandOutput,
  ListDomainLayoutsCommand,
} from "./commands/ListDomainLayoutsCommand";
import {
  type ListDomainObjectTypesCommandInput,
  type ListDomainObjectTypesCommandOutput,
  ListDomainObjectTypesCommand,
} from "./commands/ListDomainObjectTypesCommand";
import {
  type ListDomainsCommandInput,
  type ListDomainsCommandOutput,
  ListDomainsCommand,
} from "./commands/ListDomainsCommand";
import {
  type ListEventStreamsCommandInput,
  type ListEventStreamsCommandOutput,
  ListEventStreamsCommand,
} from "./commands/ListEventStreamsCommand";
import {
  type ListEventTriggersCommandInput,
  type ListEventTriggersCommandOutput,
  ListEventTriggersCommand,
} from "./commands/ListEventTriggersCommand";
import {
  type ListIdentityResolutionJobsCommandInput,
  type ListIdentityResolutionJobsCommandOutput,
  ListIdentityResolutionJobsCommand,
} from "./commands/ListIdentityResolutionJobsCommand";
import {
  type ListIntegrationsCommandInput,
  type ListIntegrationsCommandOutput,
  ListIntegrationsCommand,
} from "./commands/ListIntegrationsCommand";
import {
  type ListObjectTypeAttributesCommandInput,
  type ListObjectTypeAttributesCommandOutput,
  ListObjectTypeAttributesCommand,
} from "./commands/ListObjectTypeAttributesCommand";
import {
  type ListObjectTypeAttributeValuesCommandInput,
  type ListObjectTypeAttributeValuesCommandOutput,
  ListObjectTypeAttributeValuesCommand,
} from "./commands/ListObjectTypeAttributeValuesCommand";
import {
  type ListProfileAttributeValuesCommandInput,
  type ListProfileAttributeValuesCommandOutput,
  ListProfileAttributeValuesCommand,
} from "./commands/ListProfileAttributeValuesCommand";
import {
  type ListProfileHistoryRecordsCommandInput,
  type ListProfileHistoryRecordsCommandOutput,
  ListProfileHistoryRecordsCommand,
} from "./commands/ListProfileHistoryRecordsCommand";
import {
  type ListProfileObjectsCommandInput,
  type ListProfileObjectsCommandOutput,
  ListProfileObjectsCommand,
} from "./commands/ListProfileObjectsCommand";
import {
  type ListProfileObjectTypesCommandInput,
  type ListProfileObjectTypesCommandOutput,
  ListProfileObjectTypesCommand,
} from "./commands/ListProfileObjectTypesCommand";
import {
  type ListProfileObjectTypeTemplatesCommandInput,
  type ListProfileObjectTypeTemplatesCommandOutput,
  ListProfileObjectTypeTemplatesCommand,
} from "./commands/ListProfileObjectTypeTemplatesCommand";
import {
  type ListRecommenderFiltersCommandInput,
  type ListRecommenderFiltersCommandOutput,
  ListRecommenderFiltersCommand,
} from "./commands/ListRecommenderFiltersCommand";
import {
  type ListRecommenderRecipesCommandInput,
  type ListRecommenderRecipesCommandOutput,
  ListRecommenderRecipesCommand,
} from "./commands/ListRecommenderRecipesCommand";
import {
  type ListRecommendersCommandInput,
  type ListRecommendersCommandOutput,
  ListRecommendersCommand,
} from "./commands/ListRecommendersCommand";
import {
  type ListRuleBasedMatchesCommandInput,
  type ListRuleBasedMatchesCommandOutput,
  ListRuleBasedMatchesCommand,
} from "./commands/ListRuleBasedMatchesCommand";
import {
  type ListSegmentDefinitionsCommandInput,
  type ListSegmentDefinitionsCommandOutput,
  ListSegmentDefinitionsCommand,
} from "./commands/ListSegmentDefinitionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListUploadJobsCommandInput,
  type ListUploadJobsCommandOutput,
  ListUploadJobsCommand,
} from "./commands/ListUploadJobsCommand";
import {
  type ListWorkflowsCommandInput,
  type ListWorkflowsCommandOutput,
  ListWorkflowsCommand,
} from "./commands/ListWorkflowsCommand";
import {
  type MergeProfilesCommandInput,
  type MergeProfilesCommandOutput,
  MergeProfilesCommand,
} from "./commands/MergeProfilesCommand";
import {
  type PutDomainObjectTypeCommandInput,
  type PutDomainObjectTypeCommandOutput,
  PutDomainObjectTypeCommand,
} from "./commands/PutDomainObjectTypeCommand";
import {
  type PutIntegrationCommandInput,
  type PutIntegrationCommandOutput,
  PutIntegrationCommand,
} from "./commands/PutIntegrationCommand";
import {
  type PutProfileObjectCommandInput,
  type PutProfileObjectCommandOutput,
  PutProfileObjectCommand,
} from "./commands/PutProfileObjectCommand";
import {
  type PutProfileObjectTypeCommandInput,
  type PutProfileObjectTypeCommandOutput,
  PutProfileObjectTypeCommand,
} from "./commands/PutProfileObjectTypeCommand";
import {
  type SearchProfilesCommandInput,
  type SearchProfilesCommandOutput,
  SearchProfilesCommand,
} from "./commands/SearchProfilesCommand";
import {
  type StartRecommenderCommandInput,
  type StartRecommenderCommandOutput,
  StartRecommenderCommand,
} from "./commands/StartRecommenderCommand";
import {
  type StartUploadJobCommandInput,
  type StartUploadJobCommandOutput,
  StartUploadJobCommand,
} from "./commands/StartUploadJobCommand";
import {
  type StopRecommenderCommandInput,
  type StopRecommenderCommandOutput,
  StopRecommenderCommand,
} from "./commands/StopRecommenderCommand";
import {
  type StopUploadJobCommandInput,
  type StopUploadJobCommandOutput,
  StopUploadJobCommand,
} from "./commands/StopUploadJobCommand";
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
  type UpdateCalculatedAttributeDefinitionCommandInput,
  type UpdateCalculatedAttributeDefinitionCommandOutput,
  UpdateCalculatedAttributeDefinitionCommand,
} from "./commands/UpdateCalculatedAttributeDefinitionCommand";
import {
  type UpdateDomainCommandInput,
  type UpdateDomainCommandOutput,
  UpdateDomainCommand,
} from "./commands/UpdateDomainCommand";
import {
  type UpdateDomainLayoutCommandInput,
  type UpdateDomainLayoutCommandOutput,
  UpdateDomainLayoutCommand,
} from "./commands/UpdateDomainLayoutCommand";
import {
  type UpdateEventTriggerCommandInput,
  type UpdateEventTriggerCommandOutput,
  UpdateEventTriggerCommand,
} from "./commands/UpdateEventTriggerCommand";
import {
  type UpdateProfileCommandInput,
  type UpdateProfileCommandOutput,
  UpdateProfileCommand,
} from "./commands/UpdateProfileCommand";
import {
  type UpdateRecommenderCommandInput,
  type UpdateRecommenderCommandOutput,
  UpdateRecommenderCommand,
} from "./commands/UpdateRecommenderCommand";
import { CustomerProfilesClient } from "./CustomerProfilesClient";
import { paginateGetSimilarProfiles } from "./pagination/GetSimilarProfilesPaginator";
import { paginateListDomainLayouts } from "./pagination/ListDomainLayoutsPaginator";
import { paginateListDomainObjectTypes } from "./pagination/ListDomainObjectTypesPaginator";
import { paginateListEventStreams } from "./pagination/ListEventStreamsPaginator";
import { paginateListEventTriggers } from "./pagination/ListEventTriggersPaginator";
import { paginateListObjectTypeAttributes } from "./pagination/ListObjectTypeAttributesPaginator";
import { paginateListRecommenderFilters } from "./pagination/ListRecommenderFiltersPaginator";
import { paginateListRecommenderRecipes } from "./pagination/ListRecommenderRecipesPaginator";
import { paginateListRecommenders } from "./pagination/ListRecommendersPaginator";
import { paginateListRuleBasedMatches } from "./pagination/ListRuleBasedMatchesPaginator";
import { paginateListSegmentDefinitions } from "./pagination/ListSegmentDefinitionsPaginator";
import { paginateListUploadJobs } from "./pagination/ListUploadJobsPaginator";

const commands = {
  AddProfileKeyCommand,
  BatchGetCalculatedAttributeForProfileCommand,
  BatchGetProfileCommand,
  CreateCalculatedAttributeDefinitionCommand,
  CreateDomainCommand,
  CreateDomainLayoutCommand,
  CreateEventStreamCommand,
  CreateEventTriggerCommand,
  CreateIntegrationWorkflowCommand,
  CreateProfileCommand,
  CreateRecommenderCommand,
  CreateRecommenderFilterCommand,
  CreateSegmentDefinitionCommand,
  CreateSegmentEstimateCommand,
  CreateSegmentSnapshotCommand,
  CreateUploadJobCommand,
  DeleteCalculatedAttributeDefinitionCommand,
  DeleteDomainCommand,
  DeleteDomainLayoutCommand,
  DeleteDomainObjectTypeCommand,
  DeleteEventStreamCommand,
  DeleteEventTriggerCommand,
  DeleteIntegrationCommand,
  DeleteProfileCommand,
  DeleteProfileKeyCommand,
  DeleteProfileObjectCommand,
  DeleteProfileObjectTypeCommand,
  DeleteRecommenderCommand,
  DeleteRecommenderFilterCommand,
  DeleteSegmentDefinitionCommand,
  DeleteWorkflowCommand,
  DetectProfileObjectTypeCommand,
  GetAutoMergingPreviewCommand,
  GetCalculatedAttributeDefinitionCommand,
  GetCalculatedAttributeForProfileCommand,
  GetDomainCommand,
  GetDomainLayoutCommand,
  GetDomainObjectTypeCommand,
  GetEventStreamCommand,
  GetEventTriggerCommand,
  GetIdentityResolutionJobCommand,
  GetIntegrationCommand,
  GetMatchesCommand,
  GetObjectTypeAttributeStatisticsCommand,
  GetProfileHistoryRecordCommand,
  GetProfileObjectTypeCommand,
  GetProfileObjectTypeTemplateCommand,
  GetProfileRecommendationsCommand,
  GetRecommenderCommand,
  GetRecommenderFilterCommand,
  GetSegmentDefinitionCommand,
  GetSegmentEstimateCommand,
  GetSegmentMembershipCommand,
  GetSegmentSnapshotCommand,
  GetSimilarProfilesCommand,
  GetUploadJobCommand,
  GetUploadJobPathCommand,
  GetWorkflowCommand,
  GetWorkflowStepsCommand,
  ListAccountIntegrationsCommand,
  ListCalculatedAttributeDefinitionsCommand,
  ListCalculatedAttributesForProfileCommand,
  ListDomainLayoutsCommand,
  ListDomainObjectTypesCommand,
  ListDomainsCommand,
  ListEventStreamsCommand,
  ListEventTriggersCommand,
  ListIdentityResolutionJobsCommand,
  ListIntegrationsCommand,
  ListObjectTypeAttributesCommand,
  ListObjectTypeAttributeValuesCommand,
  ListProfileAttributeValuesCommand,
  ListProfileHistoryRecordsCommand,
  ListProfileObjectsCommand,
  ListProfileObjectTypesCommand,
  ListProfileObjectTypeTemplatesCommand,
  ListRecommenderFiltersCommand,
  ListRecommenderRecipesCommand,
  ListRecommendersCommand,
  ListRuleBasedMatchesCommand,
  ListSegmentDefinitionsCommand,
  ListTagsForResourceCommand,
  ListUploadJobsCommand,
  ListWorkflowsCommand,
  MergeProfilesCommand,
  PutDomainObjectTypeCommand,
  PutIntegrationCommand,
  PutProfileObjectCommand,
  PutProfileObjectTypeCommand,
  SearchProfilesCommand,
  StartRecommenderCommand,
  StartUploadJobCommand,
  StopRecommenderCommand,
  StopUploadJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCalculatedAttributeDefinitionCommand,
  UpdateDomainCommand,
  UpdateDomainLayoutCommand,
  UpdateEventTriggerCommand,
  UpdateProfileCommand,
  UpdateRecommenderCommand,
};
const paginators = {
  paginateGetSimilarProfiles,
  paginateListDomainLayouts,
  paginateListDomainObjectTypes,
  paginateListEventStreams,
  paginateListEventTriggers,
  paginateListObjectTypeAttributes,
  paginateListRecommenderFilters,
  paginateListRecommenderRecipes,
  paginateListRecommenders,
  paginateListRuleBasedMatches,
  paginateListSegmentDefinitions,
  paginateListUploadJobs,
};

export interface CustomerProfiles {
  /**
   * @see {@link AddProfileKeyCommand}
   */
  addProfileKey(
    args: AddProfileKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddProfileKeyCommandOutput>;
  addProfileKey(
    args: AddProfileKeyCommandInput,
    cb: (err: any, data?: AddProfileKeyCommandOutput) => void
  ): void;
  addProfileKey(
    args: AddProfileKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddProfileKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCalculatedAttributeForProfileCommand}
   */
  batchGetCalculatedAttributeForProfile(
    args: BatchGetCalculatedAttributeForProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCalculatedAttributeForProfileCommandOutput>;
  batchGetCalculatedAttributeForProfile(
    args: BatchGetCalculatedAttributeForProfileCommandInput,
    cb: (err: any, data?: BatchGetCalculatedAttributeForProfileCommandOutput) => void
  ): void;
  batchGetCalculatedAttributeForProfile(
    args: BatchGetCalculatedAttributeForProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCalculatedAttributeForProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetProfileCommand}
   */
  batchGetProfile(
    args: BatchGetProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetProfileCommandOutput>;
  batchGetProfile(
    args: BatchGetProfileCommandInput,
    cb: (err: any, data?: BatchGetProfileCommandOutput) => void
  ): void;
  batchGetProfile(
    args: BatchGetProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCalculatedAttributeDefinitionCommand}
   */
  createCalculatedAttributeDefinition(
    args: CreateCalculatedAttributeDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCalculatedAttributeDefinitionCommandOutput>;
  createCalculatedAttributeDefinition(
    args: CreateCalculatedAttributeDefinitionCommandInput,
    cb: (err: any, data?: CreateCalculatedAttributeDefinitionCommandOutput) => void
  ): void;
  createCalculatedAttributeDefinition(
    args: CreateCalculatedAttributeDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCalculatedAttributeDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  createDomain(
    args: CreateDomainCommandInput,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainLayoutCommand}
   */
  createDomainLayout(
    args: CreateDomainLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainLayoutCommandOutput>;
  createDomainLayout(
    args: CreateDomainLayoutCommandInput,
    cb: (err: any, data?: CreateDomainLayoutCommandOutput) => void
  ): void;
  createDomainLayout(
    args: CreateDomainLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventStreamCommand}
   */
  createEventStream(
    args: CreateEventStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventStreamCommandOutput>;
  createEventStream(
    args: CreateEventStreamCommandInput,
    cb: (err: any, data?: CreateEventStreamCommandOutput) => void
  ): void;
  createEventStream(
    args: CreateEventStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventTriggerCommand}
   */
  createEventTrigger(
    args: CreateEventTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventTriggerCommandOutput>;
  createEventTrigger(
    args: CreateEventTriggerCommandInput,
    cb: (err: any, data?: CreateEventTriggerCommandOutput) => void
  ): void;
  createEventTrigger(
    args: CreateEventTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationWorkflowCommand}
   */
  createIntegrationWorkflow(
    args: CreateIntegrationWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationWorkflowCommandOutput>;
  createIntegrationWorkflow(
    args: CreateIntegrationWorkflowCommandInput,
    cb: (err: any, data?: CreateIntegrationWorkflowCommandOutput) => void
  ): void;
  createIntegrationWorkflow(
    args: CreateIntegrationWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfileCommand}
   */
  createProfile(
    args: CreateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfileCommandOutput>;
  createProfile(
    args: CreateProfileCommandInput,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  createProfile(
    args: CreateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRecommenderCommand}
   */
  createRecommender(
    args: CreateRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRecommenderCommandOutput>;
  createRecommender(
    args: CreateRecommenderCommandInput,
    cb: (err: any, data?: CreateRecommenderCommandOutput) => void
  ): void;
  createRecommender(
    args: CreateRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecommenderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRecommenderFilterCommand}
   */
  createRecommenderFilter(
    args: CreateRecommenderFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRecommenderFilterCommandOutput>;
  createRecommenderFilter(
    args: CreateRecommenderFilterCommandInput,
    cb: (err: any, data?: CreateRecommenderFilterCommandOutput) => void
  ): void;
  createRecommenderFilter(
    args: CreateRecommenderFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecommenderFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSegmentDefinitionCommand}
   */
  createSegmentDefinition(
    args: CreateSegmentDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSegmentDefinitionCommandOutput>;
  createSegmentDefinition(
    args: CreateSegmentDefinitionCommandInput,
    cb: (err: any, data?: CreateSegmentDefinitionCommandOutput) => void
  ): void;
  createSegmentDefinition(
    args: CreateSegmentDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSegmentDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSegmentEstimateCommand}
   */
  createSegmentEstimate(
    args: CreateSegmentEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSegmentEstimateCommandOutput>;
  createSegmentEstimate(
    args: CreateSegmentEstimateCommandInput,
    cb: (err: any, data?: CreateSegmentEstimateCommandOutput) => void
  ): void;
  createSegmentEstimate(
    args: CreateSegmentEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSegmentEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSegmentSnapshotCommand}
   */
  createSegmentSnapshot(
    args: CreateSegmentSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSegmentSnapshotCommandOutput>;
  createSegmentSnapshot(
    args: CreateSegmentSnapshotCommandInput,
    cb: (err: any, data?: CreateSegmentSnapshotCommandOutput) => void
  ): void;
  createSegmentSnapshot(
    args: CreateSegmentSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSegmentSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUploadJobCommand}
   */
  createUploadJob(
    args: CreateUploadJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUploadJobCommandOutput>;
  createUploadJob(
    args: CreateUploadJobCommandInput,
    cb: (err: any, data?: CreateUploadJobCommandOutput) => void
  ): void;
  createUploadJob(
    args: CreateUploadJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUploadJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCalculatedAttributeDefinitionCommand}
   */
  deleteCalculatedAttributeDefinition(
    args: DeleteCalculatedAttributeDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCalculatedAttributeDefinitionCommandOutput>;
  deleteCalculatedAttributeDefinition(
    args: DeleteCalculatedAttributeDefinitionCommandInput,
    cb: (err: any, data?: DeleteCalculatedAttributeDefinitionCommandOutput) => void
  ): void;
  deleteCalculatedAttributeDefinition(
    args: DeleteCalculatedAttributeDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCalculatedAttributeDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(
    args: DeleteDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainCommandOutput>;
  deleteDomain(
    args: DeleteDomainCommandInput,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainLayoutCommand}
   */
  deleteDomainLayout(
    args: DeleteDomainLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainLayoutCommandOutput>;
  deleteDomainLayout(
    args: DeleteDomainLayoutCommandInput,
    cb: (err: any, data?: DeleteDomainLayoutCommandOutput) => void
  ): void;
  deleteDomainLayout(
    args: DeleteDomainLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainObjectTypeCommand}
   */
  deleteDomainObjectType(
    args: DeleteDomainObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainObjectTypeCommandOutput>;
  deleteDomainObjectType(
    args: DeleteDomainObjectTypeCommandInput,
    cb: (err: any, data?: DeleteDomainObjectTypeCommandOutput) => void
  ): void;
  deleteDomainObjectType(
    args: DeleteDomainObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainObjectTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventStreamCommand}
   */
  deleteEventStream(
    args: DeleteEventStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventStreamCommandOutput>;
  deleteEventStream(
    args: DeleteEventStreamCommandInput,
    cb: (err: any, data?: DeleteEventStreamCommandOutput) => void
  ): void;
  deleteEventStream(
    args: DeleteEventStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventTriggerCommand}
   */
  deleteEventTrigger(
    args: DeleteEventTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventTriggerCommandOutput>;
  deleteEventTrigger(
    args: DeleteEventTriggerCommandInput,
    cb: (err: any, data?: DeleteEventTriggerCommandOutput) => void
  ): void;
  deleteEventTrigger(
    args: DeleteEventTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileCommand}
   */
  deleteProfile(
    args: DeleteProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileCommandOutput>;
  deleteProfile(
    args: DeleteProfileCommandInput,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  deleteProfile(
    args: DeleteProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileKeyCommand}
   */
  deleteProfileKey(
    args: DeleteProfileKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileKeyCommandOutput>;
  deleteProfileKey(
    args: DeleteProfileKeyCommandInput,
    cb: (err: any, data?: DeleteProfileKeyCommandOutput) => void
  ): void;
  deleteProfileKey(
    args: DeleteProfileKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileObjectCommand}
   */
  deleteProfileObject(
    args: DeleteProfileObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileObjectCommandOutput>;
  deleteProfileObject(
    args: DeleteProfileObjectCommandInput,
    cb: (err: any, data?: DeleteProfileObjectCommandOutput) => void
  ): void;
  deleteProfileObject(
    args: DeleteProfileObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileObjectTypeCommand}
   */
  deleteProfileObjectType(
    args: DeleteProfileObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileObjectTypeCommandOutput>;
  deleteProfileObjectType(
    args: DeleteProfileObjectTypeCommandInput,
    cb: (err: any, data?: DeleteProfileObjectTypeCommandOutput) => void
  ): void;
  deleteProfileObjectType(
    args: DeleteProfileObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileObjectTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecommenderCommand}
   */
  deleteRecommender(
    args: DeleteRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecommenderCommandOutput>;
  deleteRecommender(
    args: DeleteRecommenderCommandInput,
    cb: (err: any, data?: DeleteRecommenderCommandOutput) => void
  ): void;
  deleteRecommender(
    args: DeleteRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecommenderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecommenderFilterCommand}
   */
  deleteRecommenderFilter(
    args: DeleteRecommenderFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecommenderFilterCommandOutput>;
  deleteRecommenderFilter(
    args: DeleteRecommenderFilterCommandInput,
    cb: (err: any, data?: DeleteRecommenderFilterCommandOutput) => void
  ): void;
  deleteRecommenderFilter(
    args: DeleteRecommenderFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecommenderFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSegmentDefinitionCommand}
   */
  deleteSegmentDefinition(
    args: DeleteSegmentDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSegmentDefinitionCommandOutput>;
  deleteSegmentDefinition(
    args: DeleteSegmentDefinitionCommandInput,
    cb: (err: any, data?: DeleteSegmentDefinitionCommandOutput) => void
  ): void;
  deleteSegmentDefinition(
    args: DeleteSegmentDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSegmentDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectProfileObjectTypeCommand}
   */
  detectProfileObjectType(
    args: DetectProfileObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectProfileObjectTypeCommandOutput>;
  detectProfileObjectType(
    args: DetectProfileObjectTypeCommandInput,
    cb: (err: any, data?: DetectProfileObjectTypeCommandOutput) => void
  ): void;
  detectProfileObjectType(
    args: DetectProfileObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectProfileObjectTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutoMergingPreviewCommand}
   */
  getAutoMergingPreview(
    args: GetAutoMergingPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutoMergingPreviewCommandOutput>;
  getAutoMergingPreview(
    args: GetAutoMergingPreviewCommandInput,
    cb: (err: any, data?: GetAutoMergingPreviewCommandOutput) => void
  ): void;
  getAutoMergingPreview(
    args: GetAutoMergingPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutoMergingPreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCalculatedAttributeDefinitionCommand}
   */
  getCalculatedAttributeDefinition(
    args: GetCalculatedAttributeDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCalculatedAttributeDefinitionCommandOutput>;
  getCalculatedAttributeDefinition(
    args: GetCalculatedAttributeDefinitionCommandInput,
    cb: (err: any, data?: GetCalculatedAttributeDefinitionCommandOutput) => void
  ): void;
  getCalculatedAttributeDefinition(
    args: GetCalculatedAttributeDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCalculatedAttributeDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCalculatedAttributeForProfileCommand}
   */
  getCalculatedAttributeForProfile(
    args: GetCalculatedAttributeForProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCalculatedAttributeForProfileCommandOutput>;
  getCalculatedAttributeForProfile(
    args: GetCalculatedAttributeForProfileCommandInput,
    cb: (err: any, data?: GetCalculatedAttributeForProfileCommandOutput) => void
  ): void;
  getCalculatedAttributeForProfile(
    args: GetCalculatedAttributeForProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCalculatedAttributeForProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainCommand}
   */
  getDomain(
    args: GetDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainCommandOutput>;
  getDomain(
    args: GetDomainCommandInput,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;
  getDomain(
    args: GetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainLayoutCommand}
   */
  getDomainLayout(
    args: GetDomainLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainLayoutCommandOutput>;
  getDomainLayout(
    args: GetDomainLayoutCommandInput,
    cb: (err: any, data?: GetDomainLayoutCommandOutput) => void
  ): void;
  getDomainLayout(
    args: GetDomainLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainObjectTypeCommand}
   */
  getDomainObjectType(
    args: GetDomainObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainObjectTypeCommandOutput>;
  getDomainObjectType(
    args: GetDomainObjectTypeCommandInput,
    cb: (err: any, data?: GetDomainObjectTypeCommandOutput) => void
  ): void;
  getDomainObjectType(
    args: GetDomainObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainObjectTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventStreamCommand}
   */
  getEventStream(
    args: GetEventStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventStreamCommandOutput>;
  getEventStream(
    args: GetEventStreamCommandInput,
    cb: (err: any, data?: GetEventStreamCommandOutput) => void
  ): void;
  getEventStream(
    args: GetEventStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventTriggerCommand}
   */
  getEventTrigger(
    args: GetEventTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventTriggerCommandOutput>;
  getEventTrigger(
    args: GetEventTriggerCommandInput,
    cb: (err: any, data?: GetEventTriggerCommandOutput) => void
  ): void;
  getEventTrigger(
    args: GetEventTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityResolutionJobCommand}
   */
  getIdentityResolutionJob(
    args: GetIdentityResolutionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityResolutionJobCommandOutput>;
  getIdentityResolutionJob(
    args: GetIdentityResolutionJobCommandInput,
    cb: (err: any, data?: GetIdentityResolutionJobCommandOutput) => void
  ): void;
  getIdentityResolutionJob(
    args: GetIdentityResolutionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityResolutionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationCommand}
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationCommandOutput>;
  getIntegration(
    args: GetIntegrationCommandInput,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMatchesCommand}
   */
  getMatches(
    args: GetMatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMatchesCommandOutput>;
  getMatches(
    args: GetMatchesCommandInput,
    cb: (err: any, data?: GetMatchesCommandOutput) => void
  ): void;
  getMatches(
    args: GetMatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMatchesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectTypeAttributeStatisticsCommand}
   */
  getObjectTypeAttributeStatistics(
    args: GetObjectTypeAttributeStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectTypeAttributeStatisticsCommandOutput>;
  getObjectTypeAttributeStatistics(
    args: GetObjectTypeAttributeStatisticsCommandInput,
    cb: (err: any, data?: GetObjectTypeAttributeStatisticsCommandOutput) => void
  ): void;
  getObjectTypeAttributeStatistics(
    args: GetObjectTypeAttributeStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectTypeAttributeStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileHistoryRecordCommand}
   */
  getProfileHistoryRecord(
    args: GetProfileHistoryRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileHistoryRecordCommandOutput>;
  getProfileHistoryRecord(
    args: GetProfileHistoryRecordCommandInput,
    cb: (err: any, data?: GetProfileHistoryRecordCommandOutput) => void
  ): void;
  getProfileHistoryRecord(
    args: GetProfileHistoryRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileHistoryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileObjectTypeCommand}
   */
  getProfileObjectType(
    args: GetProfileObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileObjectTypeCommandOutput>;
  getProfileObjectType(
    args: GetProfileObjectTypeCommandInput,
    cb: (err: any, data?: GetProfileObjectTypeCommandOutput) => void
  ): void;
  getProfileObjectType(
    args: GetProfileObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileObjectTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileObjectTypeTemplateCommand}
   */
  getProfileObjectTypeTemplate(
    args: GetProfileObjectTypeTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileObjectTypeTemplateCommandOutput>;
  getProfileObjectTypeTemplate(
    args: GetProfileObjectTypeTemplateCommandInput,
    cb: (err: any, data?: GetProfileObjectTypeTemplateCommandOutput) => void
  ): void;
  getProfileObjectTypeTemplate(
    args: GetProfileObjectTypeTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileObjectTypeTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileRecommendationsCommand}
   */
  getProfileRecommendations(
    args: GetProfileRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileRecommendationsCommandOutput>;
  getProfileRecommendations(
    args: GetProfileRecommendationsCommandInput,
    cb: (err: any, data?: GetProfileRecommendationsCommandOutput) => void
  ): void;
  getProfileRecommendations(
    args: GetProfileRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommenderCommand}
   */
  getRecommender(
    args: GetRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommenderCommandOutput>;
  getRecommender(
    args: GetRecommenderCommandInput,
    cb: (err: any, data?: GetRecommenderCommandOutput) => void
  ): void;
  getRecommender(
    args: GetRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommenderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommenderFilterCommand}
   */
  getRecommenderFilter(
    args: GetRecommenderFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommenderFilterCommandOutput>;
  getRecommenderFilter(
    args: GetRecommenderFilterCommandInput,
    cb: (err: any, data?: GetRecommenderFilterCommandOutput) => void
  ): void;
  getRecommenderFilter(
    args: GetRecommenderFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommenderFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentDefinitionCommand}
   */
  getSegmentDefinition(
    args: GetSegmentDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentDefinitionCommandOutput>;
  getSegmentDefinition(
    args: GetSegmentDefinitionCommandInput,
    cb: (err: any, data?: GetSegmentDefinitionCommandOutput) => void
  ): void;
  getSegmentDefinition(
    args: GetSegmentDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentEstimateCommand}
   */
  getSegmentEstimate(
    args: GetSegmentEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentEstimateCommandOutput>;
  getSegmentEstimate(
    args: GetSegmentEstimateCommandInput,
    cb: (err: any, data?: GetSegmentEstimateCommandOutput) => void
  ): void;
  getSegmentEstimate(
    args: GetSegmentEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentMembershipCommand}
   */
  getSegmentMembership(
    args: GetSegmentMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentMembershipCommandOutput>;
  getSegmentMembership(
    args: GetSegmentMembershipCommandInput,
    cb: (err: any, data?: GetSegmentMembershipCommandOutput) => void
  ): void;
  getSegmentMembership(
    args: GetSegmentMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentSnapshotCommand}
   */
  getSegmentSnapshot(
    args: GetSegmentSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentSnapshotCommandOutput>;
  getSegmentSnapshot(
    args: GetSegmentSnapshotCommandInput,
    cb: (err: any, data?: GetSegmentSnapshotCommandOutput) => void
  ): void;
  getSegmentSnapshot(
    args: GetSegmentSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSimilarProfilesCommand}
   */
  getSimilarProfiles(
    args: GetSimilarProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSimilarProfilesCommandOutput>;
  getSimilarProfiles(
    args: GetSimilarProfilesCommandInput,
    cb: (err: any, data?: GetSimilarProfilesCommandOutput) => void
  ): void;
  getSimilarProfiles(
    args: GetSimilarProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSimilarProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUploadJobCommand}
   */
  getUploadJob(
    args: GetUploadJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUploadJobCommandOutput>;
  getUploadJob(
    args: GetUploadJobCommandInput,
    cb: (err: any, data?: GetUploadJobCommandOutput) => void
  ): void;
  getUploadJob(
    args: GetUploadJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUploadJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUploadJobPathCommand}
   */
  getUploadJobPath(
    args: GetUploadJobPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUploadJobPathCommandOutput>;
  getUploadJobPath(
    args: GetUploadJobPathCommandInput,
    cb: (err: any, data?: GetUploadJobPathCommandOutput) => void
  ): void;
  getUploadJobPath(
    args: GetUploadJobPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUploadJobPathCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowCommand}
   */
  getWorkflow(
    args: GetWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowCommandOutput>;
  getWorkflow(
    args: GetWorkflowCommandInput,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;
  getWorkflow(
    args: GetWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowStepsCommand}
   */
  getWorkflowSteps(
    args: GetWorkflowStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowStepsCommandOutput>;
  getWorkflowSteps(
    args: GetWorkflowStepsCommandInput,
    cb: (err: any, data?: GetWorkflowStepsCommandOutput) => void
  ): void;
  getWorkflowSteps(
    args: GetWorkflowStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountIntegrationsCommand}
   */
  listAccountIntegrations(
    args: ListAccountIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountIntegrationsCommandOutput>;
  listAccountIntegrations(
    args: ListAccountIntegrationsCommandInput,
    cb: (err: any, data?: ListAccountIntegrationsCommandOutput) => void
  ): void;
  listAccountIntegrations(
    args: ListAccountIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCalculatedAttributeDefinitionsCommand}
   */
  listCalculatedAttributeDefinitions(
    args: ListCalculatedAttributeDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCalculatedAttributeDefinitionsCommandOutput>;
  listCalculatedAttributeDefinitions(
    args: ListCalculatedAttributeDefinitionsCommandInput,
    cb: (err: any, data?: ListCalculatedAttributeDefinitionsCommandOutput) => void
  ): void;
  listCalculatedAttributeDefinitions(
    args: ListCalculatedAttributeDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCalculatedAttributeDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCalculatedAttributesForProfileCommand}
   */
  listCalculatedAttributesForProfile(
    args: ListCalculatedAttributesForProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCalculatedAttributesForProfileCommandOutput>;
  listCalculatedAttributesForProfile(
    args: ListCalculatedAttributesForProfileCommandInput,
    cb: (err: any, data?: ListCalculatedAttributesForProfileCommandOutput) => void
  ): void;
  listCalculatedAttributesForProfile(
    args: ListCalculatedAttributesForProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCalculatedAttributesForProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainLayoutsCommand}
   */
  listDomainLayouts(
    args: ListDomainLayoutsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainLayoutsCommandOutput>;
  listDomainLayouts(
    args: ListDomainLayoutsCommandInput,
    cb: (err: any, data?: ListDomainLayoutsCommandOutput) => void
  ): void;
  listDomainLayouts(
    args: ListDomainLayoutsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainLayoutsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainObjectTypesCommand}
   */
  listDomainObjectTypes(
    args: ListDomainObjectTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainObjectTypesCommandOutput>;
  listDomainObjectTypes(
    args: ListDomainObjectTypesCommandInput,
    cb: (err: any, data?: ListDomainObjectTypesCommandOutput) => void
  ): void;
  listDomainObjectTypes(
    args: ListDomainObjectTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainObjectTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventStreamsCommand}
   */
  listEventStreams(
    args: ListEventStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventStreamsCommandOutput>;
  listEventStreams(
    args: ListEventStreamsCommandInput,
    cb: (err: any, data?: ListEventStreamsCommandOutput) => void
  ): void;
  listEventStreams(
    args: ListEventStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventTriggersCommand}
   */
  listEventTriggers(
    args: ListEventTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventTriggersCommandOutput>;
  listEventTriggers(
    args: ListEventTriggersCommandInput,
    cb: (err: any, data?: ListEventTriggersCommandOutput) => void
  ): void;
  listEventTriggers(
    args: ListEventTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventTriggersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityResolutionJobsCommand}
   */
  listIdentityResolutionJobs(
    args: ListIdentityResolutionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityResolutionJobsCommandOutput>;
  listIdentityResolutionJobs(
    args: ListIdentityResolutionJobsCommandInput,
    cb: (err: any, data?: ListIdentityResolutionJobsCommandOutput) => void
  ): void;
  listIdentityResolutionJobs(
    args: ListIdentityResolutionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityResolutionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegrationsCommand}
   */
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectTypeAttributesCommand}
   */
  listObjectTypeAttributes(
    args: ListObjectTypeAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectTypeAttributesCommandOutput>;
  listObjectTypeAttributes(
    args: ListObjectTypeAttributesCommandInput,
    cb: (err: any, data?: ListObjectTypeAttributesCommandOutput) => void
  ): void;
  listObjectTypeAttributes(
    args: ListObjectTypeAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectTypeAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectTypeAttributeValuesCommand}
   */
  listObjectTypeAttributeValues(
    args: ListObjectTypeAttributeValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectTypeAttributeValuesCommandOutput>;
  listObjectTypeAttributeValues(
    args: ListObjectTypeAttributeValuesCommandInput,
    cb: (err: any, data?: ListObjectTypeAttributeValuesCommandOutput) => void
  ): void;
  listObjectTypeAttributeValues(
    args: ListObjectTypeAttributeValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectTypeAttributeValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileAttributeValuesCommand}
   */
  listProfileAttributeValues(
    args: ListProfileAttributeValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileAttributeValuesCommandOutput>;
  listProfileAttributeValues(
    args: ListProfileAttributeValuesCommandInput,
    cb: (err: any, data?: ListProfileAttributeValuesCommandOutput) => void
  ): void;
  listProfileAttributeValues(
    args: ListProfileAttributeValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileAttributeValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileHistoryRecordsCommand}
   */
  listProfileHistoryRecords(
    args: ListProfileHistoryRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileHistoryRecordsCommandOutput>;
  listProfileHistoryRecords(
    args: ListProfileHistoryRecordsCommandInput,
    cb: (err: any, data?: ListProfileHistoryRecordsCommandOutput) => void
  ): void;
  listProfileHistoryRecords(
    args: ListProfileHistoryRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileHistoryRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileObjectsCommand}
   */
  listProfileObjects(
    args: ListProfileObjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileObjectsCommandOutput>;
  listProfileObjects(
    args: ListProfileObjectsCommandInput,
    cb: (err: any, data?: ListProfileObjectsCommandOutput) => void
  ): void;
  listProfileObjects(
    args: ListProfileObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileObjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileObjectTypesCommand}
   */
  listProfileObjectTypes(
    args: ListProfileObjectTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileObjectTypesCommandOutput>;
  listProfileObjectTypes(
    args: ListProfileObjectTypesCommandInput,
    cb: (err: any, data?: ListProfileObjectTypesCommandOutput) => void
  ): void;
  listProfileObjectTypes(
    args: ListProfileObjectTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileObjectTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileObjectTypeTemplatesCommand}
   */
  listProfileObjectTypeTemplates(): Promise<ListProfileObjectTypeTemplatesCommandOutput>;
  listProfileObjectTypeTemplates(
    args: ListProfileObjectTypeTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileObjectTypeTemplatesCommandOutput>;
  listProfileObjectTypeTemplates(
    args: ListProfileObjectTypeTemplatesCommandInput,
    cb: (err: any, data?: ListProfileObjectTypeTemplatesCommandOutput) => void
  ): void;
  listProfileObjectTypeTemplates(
    args: ListProfileObjectTypeTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileObjectTypeTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommenderFiltersCommand}
   */
  listRecommenderFilters(
    args: ListRecommenderFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommenderFiltersCommandOutput>;
  listRecommenderFilters(
    args: ListRecommenderFiltersCommandInput,
    cb: (err: any, data?: ListRecommenderFiltersCommandOutput) => void
  ): void;
  listRecommenderFilters(
    args: ListRecommenderFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommenderFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommenderRecipesCommand}
   */
  listRecommenderRecipes(): Promise<ListRecommenderRecipesCommandOutput>;
  listRecommenderRecipes(
    args: ListRecommenderRecipesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommenderRecipesCommandOutput>;
  listRecommenderRecipes(
    args: ListRecommenderRecipesCommandInput,
    cb: (err: any, data?: ListRecommenderRecipesCommandOutput) => void
  ): void;
  listRecommenderRecipes(
    args: ListRecommenderRecipesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommenderRecipesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendersCommand}
   */
  listRecommenders(
    args: ListRecommendersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendersCommandOutput>;
  listRecommenders(
    args: ListRecommendersCommandInput,
    cb: (err: any, data?: ListRecommendersCommandOutput) => void
  ): void;
  listRecommenders(
    args: ListRecommendersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuleBasedMatchesCommand}
   */
  listRuleBasedMatches(
    args: ListRuleBasedMatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleBasedMatchesCommandOutput>;
  listRuleBasedMatches(
    args: ListRuleBasedMatchesCommandInput,
    cb: (err: any, data?: ListRuleBasedMatchesCommandOutput) => void
  ): void;
  listRuleBasedMatches(
    args: ListRuleBasedMatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleBasedMatchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSegmentDefinitionsCommand}
   */
  listSegmentDefinitions(
    args: ListSegmentDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSegmentDefinitionsCommandOutput>;
  listSegmentDefinitions(
    args: ListSegmentDefinitionsCommandInput,
    cb: (err: any, data?: ListSegmentDefinitionsCommandOutput) => void
  ): void;
  listSegmentDefinitions(
    args: ListSegmentDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSegmentDefinitionsCommandOutput) => void
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
   * @see {@link ListUploadJobsCommand}
   */
  listUploadJobs(
    args: ListUploadJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUploadJobsCommandOutput>;
  listUploadJobs(
    args: ListUploadJobsCommandInput,
    cb: (err: any, data?: ListUploadJobsCommandOutput) => void
  ): void;
  listUploadJobs(
    args: ListUploadJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUploadJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link MergeProfilesCommand}
   */
  mergeProfiles(
    args: MergeProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergeProfilesCommandOutput>;
  mergeProfiles(
    args: MergeProfilesCommandInput,
    cb: (err: any, data?: MergeProfilesCommandOutput) => void
  ): void;
  mergeProfiles(
    args: MergeProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergeProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDomainObjectTypeCommand}
   */
  putDomainObjectType(
    args: PutDomainObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDomainObjectTypeCommandOutput>;
  putDomainObjectType(
    args: PutDomainObjectTypeCommandInput,
    cb: (err: any, data?: PutDomainObjectTypeCommandOutput) => void
  ): void;
  putDomainObjectType(
    args: PutDomainObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDomainObjectTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link PutIntegrationCommand}
   */
  putIntegration(
    args: PutIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationCommandOutput>;
  putIntegration(
    args: PutIntegrationCommandInput,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;
  putIntegration(
    args: PutIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutProfileObjectCommand}
   */
  putProfileObject(
    args: PutProfileObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProfileObjectCommandOutput>;
  putProfileObject(
    args: PutProfileObjectCommandInput,
    cb: (err: any, data?: PutProfileObjectCommandOutput) => void
  ): void;
  putProfileObject(
    args: PutProfileObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProfileObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link PutProfileObjectTypeCommand}
   */
  putProfileObjectType(
    args: PutProfileObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProfileObjectTypeCommandOutput>;
  putProfileObjectType(
    args: PutProfileObjectTypeCommandInput,
    cb: (err: any, data?: PutProfileObjectTypeCommandOutput) => void
  ): void;
  putProfileObjectType(
    args: PutProfileObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProfileObjectTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchProfilesCommand}
   */
  searchProfiles(
    args: SearchProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchProfilesCommandOutput>;
  searchProfiles(
    args: SearchProfilesCommandInput,
    cb: (err: any, data?: SearchProfilesCommandOutput) => void
  ): void;
  searchProfiles(
    args: SearchProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRecommenderCommand}
   */
  startRecommender(
    args: StartRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRecommenderCommandOutput>;
  startRecommender(
    args: StartRecommenderCommandInput,
    cb: (err: any, data?: StartRecommenderCommandOutput) => void
  ): void;
  startRecommender(
    args: StartRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRecommenderCommandOutput) => void
  ): void;

  /**
   * @see {@link StartUploadJobCommand}
   */
  startUploadJob(
    args: StartUploadJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartUploadJobCommandOutput>;
  startUploadJob(
    args: StartUploadJobCommandInput,
    cb: (err: any, data?: StartUploadJobCommandOutput) => void
  ): void;
  startUploadJob(
    args: StartUploadJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartUploadJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopRecommenderCommand}
   */
  stopRecommender(
    args: StopRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRecommenderCommandOutput>;
  stopRecommender(
    args: StopRecommenderCommandInput,
    cb: (err: any, data?: StopRecommenderCommandOutput) => void
  ): void;
  stopRecommender(
    args: StopRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRecommenderCommandOutput) => void
  ): void;

  /**
   * @see {@link StopUploadJobCommand}
   */
  stopUploadJob(
    args: StopUploadJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopUploadJobCommandOutput>;
  stopUploadJob(
    args: StopUploadJobCommandInput,
    cb: (err: any, data?: StopUploadJobCommandOutput) => void
  ): void;
  stopUploadJob(
    args: StopUploadJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopUploadJobCommandOutput) => void
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
   * @see {@link UpdateCalculatedAttributeDefinitionCommand}
   */
  updateCalculatedAttributeDefinition(
    args: UpdateCalculatedAttributeDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCalculatedAttributeDefinitionCommandOutput>;
  updateCalculatedAttributeDefinition(
    args: UpdateCalculatedAttributeDefinitionCommandInput,
    cb: (err: any, data?: UpdateCalculatedAttributeDefinitionCommandOutput) => void
  ): void;
  updateCalculatedAttributeDefinition(
    args: UpdateCalculatedAttributeDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCalculatedAttributeDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainCommand}
   */
  updateDomain(
    args: UpdateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainCommandOutput>;
  updateDomain(
    args: UpdateDomainCommandInput,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;
  updateDomain(
    args: UpdateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainLayoutCommand}
   */
  updateDomainLayout(
    args: UpdateDomainLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainLayoutCommandOutput>;
  updateDomainLayout(
    args: UpdateDomainLayoutCommandInput,
    cb: (err: any, data?: UpdateDomainLayoutCommandOutput) => void
  ): void;
  updateDomainLayout(
    args: UpdateDomainLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventTriggerCommand}
   */
  updateEventTrigger(
    args: UpdateEventTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventTriggerCommandOutput>;
  updateEventTrigger(
    args: UpdateEventTriggerCommandInput,
    cb: (err: any, data?: UpdateEventTriggerCommandOutput) => void
  ): void;
  updateEventTrigger(
    args: UpdateEventTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileCommand}
   */
  updateProfile(
    args: UpdateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProfileCommandOutput>;
  updateProfile(
    args: UpdateProfileCommandInput,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  updateProfile(
    args: UpdateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecommenderCommand}
   */
  updateRecommender(
    args: UpdateRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecommenderCommandOutput>;
  updateRecommender(
    args: UpdateRecommenderCommandInput,
    cb: (err: any, data?: UpdateRecommenderCommandOutput) => void
  ): void;
  updateRecommender(
    args: UpdateRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecommenderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSimilarProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetSimilarProfilesCommandOutput}.
   */
  paginateGetSimilarProfiles(
    args: GetSimilarProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetSimilarProfilesCommandOutput>;

  /**
   * @see {@link ListDomainLayoutsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainLayoutsCommandOutput}.
   */
  paginateListDomainLayouts(
    args: ListDomainLayoutsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainLayoutsCommandOutput>;

  /**
   * @see {@link ListDomainObjectTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainObjectTypesCommandOutput}.
   */
  paginateListDomainObjectTypes(
    args: ListDomainObjectTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainObjectTypesCommandOutput>;

  /**
   * @see {@link ListEventStreamsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventStreamsCommandOutput}.
   */
  paginateListEventStreams(
    args: ListEventStreamsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventStreamsCommandOutput>;

  /**
   * @see {@link ListEventTriggersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventTriggersCommandOutput}.
   */
  paginateListEventTriggers(
    args: ListEventTriggersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventTriggersCommandOutput>;

  /**
   * @see {@link ListObjectTypeAttributesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListObjectTypeAttributesCommandOutput}.
   */
  paginateListObjectTypeAttributes(
    args: ListObjectTypeAttributesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListObjectTypeAttributesCommandOutput>;

  /**
   * @see {@link ListRecommenderFiltersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommenderFiltersCommandOutput}.
   */
  paginateListRecommenderFilters(
    args: ListRecommenderFiltersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommenderFiltersCommandOutput>;

  /**
   * @see {@link ListRecommenderRecipesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommenderRecipesCommandOutput}.
   */
  paginateListRecommenderRecipes(
    args?: ListRecommenderRecipesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommenderRecipesCommandOutput>;

  /**
   * @see {@link ListRecommendersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommendersCommandOutput}.
   */
  paginateListRecommenders(
    args: ListRecommendersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommendersCommandOutput>;

  /**
   * @see {@link ListRuleBasedMatchesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRuleBasedMatchesCommandOutput}.
   */
  paginateListRuleBasedMatches(
    args: ListRuleBasedMatchesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRuleBasedMatchesCommandOutput>;

  /**
   * @see {@link ListSegmentDefinitionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSegmentDefinitionsCommandOutput}.
   */
  paginateListSegmentDefinitions(
    args: ListSegmentDefinitionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSegmentDefinitionsCommandOutput>;

  /**
   * @see {@link ListUploadJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUploadJobsCommandOutput}.
   */
  paginateListUploadJobs(
    args: ListUploadJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUploadJobsCommandOutput>;
}

/**
 * <fullname>Amazon Connect Customer Profiles</fullname>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Customer_Profiles.html">Customer Profiles actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Customer_Profiles.html">Customer Profiles data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon Connect Customer Profiles is a unified customer profile for your contact
 *          center that has pre-built connectors powered by AppFlow that make it easy to combine
 *          customer information from third party applications, such as Salesforce (CRM), ServiceNow
 *          (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center. </p>
 *          <p>For more information about the Amazon Connect Customer Profiles feature, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/customer-profiles.html">Use Customer
 *             Profiles</a> in the <i>Amazon Connect Administrator's Guide</i>. </p>
 * @public
 */
export class CustomerProfiles extends CustomerProfilesClient implements CustomerProfiles {}
createAggregatedClient(commands, CustomerProfiles, { paginators });
