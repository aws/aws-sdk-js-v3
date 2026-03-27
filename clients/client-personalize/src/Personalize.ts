// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateBatchInferenceJobCommandInput,
  type CreateBatchInferenceJobCommandOutput,
  CreateBatchInferenceJobCommand,
} from "./commands/CreateBatchInferenceJobCommand";
import {
  type CreateBatchSegmentJobCommandInput,
  type CreateBatchSegmentJobCommandOutput,
  CreateBatchSegmentJobCommand,
} from "./commands/CreateBatchSegmentJobCommand";
import {
  type CreateCampaignCommandInput,
  type CreateCampaignCommandOutput,
  CreateCampaignCommand,
} from "./commands/CreateCampaignCommand";
import {
  type CreateDataDeletionJobCommandInput,
  type CreateDataDeletionJobCommandOutput,
  CreateDataDeletionJobCommand,
} from "./commands/CreateDataDeletionJobCommand";
import {
  type CreateDatasetCommandInput,
  type CreateDatasetCommandOutput,
  CreateDatasetCommand,
} from "./commands/CreateDatasetCommand";
import {
  type CreateDatasetExportJobCommandInput,
  type CreateDatasetExportJobCommandOutput,
  CreateDatasetExportJobCommand,
} from "./commands/CreateDatasetExportJobCommand";
import {
  type CreateDatasetGroupCommandInput,
  type CreateDatasetGroupCommandOutput,
  CreateDatasetGroupCommand,
} from "./commands/CreateDatasetGroupCommand";
import {
  type CreateDatasetImportJobCommandInput,
  type CreateDatasetImportJobCommandOutput,
  CreateDatasetImportJobCommand,
} from "./commands/CreateDatasetImportJobCommand";
import {
  type CreateEventTrackerCommandInput,
  type CreateEventTrackerCommandOutput,
  CreateEventTrackerCommand,
} from "./commands/CreateEventTrackerCommand";
import {
  type CreateFilterCommandInput,
  type CreateFilterCommandOutput,
  CreateFilterCommand,
} from "./commands/CreateFilterCommand";
import {
  type CreateMetricAttributionCommandInput,
  type CreateMetricAttributionCommandOutput,
  CreateMetricAttributionCommand,
} from "./commands/CreateMetricAttributionCommand";
import {
  type CreateRecommenderCommandInput,
  type CreateRecommenderCommandOutput,
  CreateRecommenderCommand,
} from "./commands/CreateRecommenderCommand";
import {
  type CreateSchemaCommandInput,
  type CreateSchemaCommandOutput,
  CreateSchemaCommand,
} from "./commands/CreateSchemaCommand";
import {
  type CreateSolutionCommandInput,
  type CreateSolutionCommandOutput,
  CreateSolutionCommand,
} from "./commands/CreateSolutionCommand";
import {
  type CreateSolutionVersionCommandInput,
  type CreateSolutionVersionCommandOutput,
  CreateSolutionVersionCommand,
} from "./commands/CreateSolutionVersionCommand";
import {
  type DeleteCampaignCommandInput,
  type DeleteCampaignCommandOutput,
  DeleteCampaignCommand,
} from "./commands/DeleteCampaignCommand";
import {
  type DeleteDatasetCommandInput,
  type DeleteDatasetCommandOutput,
  DeleteDatasetCommand,
} from "./commands/DeleteDatasetCommand";
import {
  type DeleteDatasetGroupCommandInput,
  type DeleteDatasetGroupCommandOutput,
  DeleteDatasetGroupCommand,
} from "./commands/DeleteDatasetGroupCommand";
import {
  type DeleteEventTrackerCommandInput,
  type DeleteEventTrackerCommandOutput,
  DeleteEventTrackerCommand,
} from "./commands/DeleteEventTrackerCommand";
import {
  type DeleteFilterCommandInput,
  type DeleteFilterCommandOutput,
  DeleteFilterCommand,
} from "./commands/DeleteFilterCommand";
import {
  type DeleteMetricAttributionCommandInput,
  type DeleteMetricAttributionCommandOutput,
  DeleteMetricAttributionCommand,
} from "./commands/DeleteMetricAttributionCommand";
import {
  type DeleteRecommenderCommandInput,
  type DeleteRecommenderCommandOutput,
  DeleteRecommenderCommand,
} from "./commands/DeleteRecommenderCommand";
import {
  type DeleteSchemaCommandInput,
  type DeleteSchemaCommandOutput,
  DeleteSchemaCommand,
} from "./commands/DeleteSchemaCommand";
import {
  type DeleteSolutionCommandInput,
  type DeleteSolutionCommandOutput,
  DeleteSolutionCommand,
} from "./commands/DeleteSolutionCommand";
import {
  type DescribeAlgorithmCommandInput,
  type DescribeAlgorithmCommandOutput,
  DescribeAlgorithmCommand,
} from "./commands/DescribeAlgorithmCommand";
import {
  type DescribeBatchInferenceJobCommandInput,
  type DescribeBatchInferenceJobCommandOutput,
  DescribeBatchInferenceJobCommand,
} from "./commands/DescribeBatchInferenceJobCommand";
import {
  type DescribeBatchSegmentJobCommandInput,
  type DescribeBatchSegmentJobCommandOutput,
  DescribeBatchSegmentJobCommand,
} from "./commands/DescribeBatchSegmentJobCommand";
import {
  type DescribeCampaignCommandInput,
  type DescribeCampaignCommandOutput,
  DescribeCampaignCommand,
} from "./commands/DescribeCampaignCommand";
import {
  type DescribeDataDeletionJobCommandInput,
  type DescribeDataDeletionJobCommandOutput,
  DescribeDataDeletionJobCommand,
} from "./commands/DescribeDataDeletionJobCommand";
import {
  type DescribeDatasetCommandInput,
  type DescribeDatasetCommandOutput,
  DescribeDatasetCommand,
} from "./commands/DescribeDatasetCommand";
import {
  type DescribeDatasetExportJobCommandInput,
  type DescribeDatasetExportJobCommandOutput,
  DescribeDatasetExportJobCommand,
} from "./commands/DescribeDatasetExportJobCommand";
import {
  type DescribeDatasetGroupCommandInput,
  type DescribeDatasetGroupCommandOutput,
  DescribeDatasetGroupCommand,
} from "./commands/DescribeDatasetGroupCommand";
import {
  type DescribeDatasetImportJobCommandInput,
  type DescribeDatasetImportJobCommandOutput,
  DescribeDatasetImportJobCommand,
} from "./commands/DescribeDatasetImportJobCommand";
import {
  type DescribeEventTrackerCommandInput,
  type DescribeEventTrackerCommandOutput,
  DescribeEventTrackerCommand,
} from "./commands/DescribeEventTrackerCommand";
import {
  type DescribeFeatureTransformationCommandInput,
  type DescribeFeatureTransformationCommandOutput,
  DescribeFeatureTransformationCommand,
} from "./commands/DescribeFeatureTransformationCommand";
import {
  type DescribeFilterCommandInput,
  type DescribeFilterCommandOutput,
  DescribeFilterCommand,
} from "./commands/DescribeFilterCommand";
import {
  type DescribeMetricAttributionCommandInput,
  type DescribeMetricAttributionCommandOutput,
  DescribeMetricAttributionCommand,
} from "./commands/DescribeMetricAttributionCommand";
import {
  type DescribeRecipeCommandInput,
  type DescribeRecipeCommandOutput,
  DescribeRecipeCommand,
} from "./commands/DescribeRecipeCommand";
import {
  type DescribeRecommenderCommandInput,
  type DescribeRecommenderCommandOutput,
  DescribeRecommenderCommand,
} from "./commands/DescribeRecommenderCommand";
import {
  type DescribeSchemaCommandInput,
  type DescribeSchemaCommandOutput,
  DescribeSchemaCommand,
} from "./commands/DescribeSchemaCommand";
import {
  type DescribeSolutionCommandInput,
  type DescribeSolutionCommandOutput,
  DescribeSolutionCommand,
} from "./commands/DescribeSolutionCommand";
import {
  type DescribeSolutionVersionCommandInput,
  type DescribeSolutionVersionCommandOutput,
  DescribeSolutionVersionCommand,
} from "./commands/DescribeSolutionVersionCommand";
import {
  type GetSolutionMetricsCommandInput,
  type GetSolutionMetricsCommandOutput,
  GetSolutionMetricsCommand,
} from "./commands/GetSolutionMetricsCommand";
import {
  type ListBatchInferenceJobsCommandInput,
  type ListBatchInferenceJobsCommandOutput,
  ListBatchInferenceJobsCommand,
} from "./commands/ListBatchInferenceJobsCommand";
import {
  type ListBatchSegmentJobsCommandInput,
  type ListBatchSegmentJobsCommandOutput,
  ListBatchSegmentJobsCommand,
} from "./commands/ListBatchSegmentJobsCommand";
import {
  type ListCampaignsCommandInput,
  type ListCampaignsCommandOutput,
  ListCampaignsCommand,
} from "./commands/ListCampaignsCommand";
import {
  type ListDataDeletionJobsCommandInput,
  type ListDataDeletionJobsCommandOutput,
  ListDataDeletionJobsCommand,
} from "./commands/ListDataDeletionJobsCommand";
import {
  type ListDatasetExportJobsCommandInput,
  type ListDatasetExportJobsCommandOutput,
  ListDatasetExportJobsCommand,
} from "./commands/ListDatasetExportJobsCommand";
import {
  type ListDatasetGroupsCommandInput,
  type ListDatasetGroupsCommandOutput,
  ListDatasetGroupsCommand,
} from "./commands/ListDatasetGroupsCommand";
import {
  type ListDatasetImportJobsCommandInput,
  type ListDatasetImportJobsCommandOutput,
  ListDatasetImportJobsCommand,
} from "./commands/ListDatasetImportJobsCommand";
import {
  type ListDatasetsCommandInput,
  type ListDatasetsCommandOutput,
  ListDatasetsCommand,
} from "./commands/ListDatasetsCommand";
import {
  type ListEventTrackersCommandInput,
  type ListEventTrackersCommandOutput,
  ListEventTrackersCommand,
} from "./commands/ListEventTrackersCommand";
import {
  type ListFiltersCommandInput,
  type ListFiltersCommandOutput,
  ListFiltersCommand,
} from "./commands/ListFiltersCommand";
import {
  type ListMetricAttributionMetricsCommandInput,
  type ListMetricAttributionMetricsCommandOutput,
  ListMetricAttributionMetricsCommand,
} from "./commands/ListMetricAttributionMetricsCommand";
import {
  type ListMetricAttributionsCommandInput,
  type ListMetricAttributionsCommandOutput,
  ListMetricAttributionsCommand,
} from "./commands/ListMetricAttributionsCommand";
import {
  type ListRecipesCommandInput,
  type ListRecipesCommandOutput,
  ListRecipesCommand,
} from "./commands/ListRecipesCommand";
import {
  type ListRecommendersCommandInput,
  type ListRecommendersCommandOutput,
  ListRecommendersCommand,
} from "./commands/ListRecommendersCommand";
import {
  type ListSchemasCommandInput,
  type ListSchemasCommandOutput,
  ListSchemasCommand,
} from "./commands/ListSchemasCommand";
import {
  type ListSolutionsCommandInput,
  type ListSolutionsCommandOutput,
  ListSolutionsCommand,
} from "./commands/ListSolutionsCommand";
import {
  type ListSolutionVersionsCommandInput,
  type ListSolutionVersionsCommandOutput,
  ListSolutionVersionsCommand,
} from "./commands/ListSolutionVersionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type StartRecommenderCommandInput,
  type StartRecommenderCommandOutput,
  StartRecommenderCommand,
} from "./commands/StartRecommenderCommand";
import {
  type StopRecommenderCommandInput,
  type StopRecommenderCommandOutput,
  StopRecommenderCommand,
} from "./commands/StopRecommenderCommand";
import {
  type StopSolutionVersionCreationCommandInput,
  type StopSolutionVersionCreationCommandOutput,
  StopSolutionVersionCreationCommand,
} from "./commands/StopSolutionVersionCreationCommand";
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
  type UpdateCampaignCommandInput,
  type UpdateCampaignCommandOutput,
  UpdateCampaignCommand,
} from "./commands/UpdateCampaignCommand";
import {
  type UpdateDatasetCommandInput,
  type UpdateDatasetCommandOutput,
  UpdateDatasetCommand,
} from "./commands/UpdateDatasetCommand";
import {
  type UpdateMetricAttributionCommandInput,
  type UpdateMetricAttributionCommandOutput,
  UpdateMetricAttributionCommand,
} from "./commands/UpdateMetricAttributionCommand";
import {
  type UpdateRecommenderCommandInput,
  type UpdateRecommenderCommandOutput,
  UpdateRecommenderCommand,
} from "./commands/UpdateRecommenderCommand";
import {
  type UpdateSolutionCommandInput,
  type UpdateSolutionCommandOutput,
  UpdateSolutionCommand,
} from "./commands/UpdateSolutionCommand";
import { paginateListBatchInferenceJobs } from "./pagination/ListBatchInferenceJobsPaginator";
import { paginateListBatchSegmentJobs } from "./pagination/ListBatchSegmentJobsPaginator";
import { paginateListCampaigns } from "./pagination/ListCampaignsPaginator";
import { paginateListDatasetExportJobs } from "./pagination/ListDatasetExportJobsPaginator";
import { paginateListDatasetGroups } from "./pagination/ListDatasetGroupsPaginator";
import { paginateListDatasetImportJobs } from "./pagination/ListDatasetImportJobsPaginator";
import { paginateListDatasets } from "./pagination/ListDatasetsPaginator";
import { paginateListEventTrackers } from "./pagination/ListEventTrackersPaginator";
import { paginateListFilters } from "./pagination/ListFiltersPaginator";
import { paginateListMetricAttributionMetrics } from "./pagination/ListMetricAttributionMetricsPaginator";
import { paginateListMetricAttributions } from "./pagination/ListMetricAttributionsPaginator";
import { paginateListRecipes } from "./pagination/ListRecipesPaginator";
import { paginateListRecommenders } from "./pagination/ListRecommendersPaginator";
import { paginateListSchemas } from "./pagination/ListSchemasPaginator";
import { paginateListSolutions } from "./pagination/ListSolutionsPaginator";
import { paginateListSolutionVersions } from "./pagination/ListSolutionVersionsPaginator";
import { PersonalizeClient } from "./PersonalizeClient";

const commands = {
  CreateBatchInferenceJobCommand,
  CreateBatchSegmentJobCommand,
  CreateCampaignCommand,
  CreateDataDeletionJobCommand,
  CreateDatasetCommand,
  CreateDatasetExportJobCommand,
  CreateDatasetGroupCommand,
  CreateDatasetImportJobCommand,
  CreateEventTrackerCommand,
  CreateFilterCommand,
  CreateMetricAttributionCommand,
  CreateRecommenderCommand,
  CreateSchemaCommand,
  CreateSolutionCommand,
  CreateSolutionVersionCommand,
  DeleteCampaignCommand,
  DeleteDatasetCommand,
  DeleteDatasetGroupCommand,
  DeleteEventTrackerCommand,
  DeleteFilterCommand,
  DeleteMetricAttributionCommand,
  DeleteRecommenderCommand,
  DeleteSchemaCommand,
  DeleteSolutionCommand,
  DescribeAlgorithmCommand,
  DescribeBatchInferenceJobCommand,
  DescribeBatchSegmentJobCommand,
  DescribeCampaignCommand,
  DescribeDataDeletionJobCommand,
  DescribeDatasetCommand,
  DescribeDatasetExportJobCommand,
  DescribeDatasetGroupCommand,
  DescribeDatasetImportJobCommand,
  DescribeEventTrackerCommand,
  DescribeFeatureTransformationCommand,
  DescribeFilterCommand,
  DescribeMetricAttributionCommand,
  DescribeRecipeCommand,
  DescribeRecommenderCommand,
  DescribeSchemaCommand,
  DescribeSolutionCommand,
  DescribeSolutionVersionCommand,
  GetSolutionMetricsCommand,
  ListBatchInferenceJobsCommand,
  ListBatchSegmentJobsCommand,
  ListCampaignsCommand,
  ListDataDeletionJobsCommand,
  ListDatasetExportJobsCommand,
  ListDatasetGroupsCommand,
  ListDatasetImportJobsCommand,
  ListDatasetsCommand,
  ListEventTrackersCommand,
  ListFiltersCommand,
  ListMetricAttributionMetricsCommand,
  ListMetricAttributionsCommand,
  ListRecipesCommand,
  ListRecommendersCommand,
  ListSchemasCommand,
  ListSolutionsCommand,
  ListSolutionVersionsCommand,
  ListTagsForResourceCommand,
  StartRecommenderCommand,
  StopRecommenderCommand,
  StopSolutionVersionCreationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCampaignCommand,
  UpdateDatasetCommand,
  UpdateMetricAttributionCommand,
  UpdateRecommenderCommand,
  UpdateSolutionCommand,
};
const paginators = {
  paginateListBatchInferenceJobs,
  paginateListBatchSegmentJobs,
  paginateListCampaigns,
  paginateListDatasetExportJobs,
  paginateListDatasetGroups,
  paginateListDatasetImportJobs,
  paginateListDatasets,
  paginateListEventTrackers,
  paginateListFilters,
  paginateListMetricAttributionMetrics,
  paginateListMetricAttributions,
  paginateListRecipes,
  paginateListRecommenders,
  paginateListSchemas,
  paginateListSolutions,
  paginateListSolutionVersions,
};

export interface Personalize {
  /**
   * @see {@link CreateBatchInferenceJobCommand}
   */
  createBatchInferenceJob(
    args: CreateBatchInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBatchInferenceJobCommandOutput>;
  createBatchInferenceJob(
    args: CreateBatchInferenceJobCommandInput,
    cb: (err: any, data?: CreateBatchInferenceJobCommandOutput) => void
  ): void;
  createBatchInferenceJob(
    args: CreateBatchInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBatchInferenceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBatchSegmentJobCommand}
   */
  createBatchSegmentJob(
    args: CreateBatchSegmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBatchSegmentJobCommandOutput>;
  createBatchSegmentJob(
    args: CreateBatchSegmentJobCommandInput,
    cb: (err: any, data?: CreateBatchSegmentJobCommandOutput) => void
  ): void;
  createBatchSegmentJob(
    args: CreateBatchSegmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBatchSegmentJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCampaignCommand}
   */
  createCampaign(
    args: CreateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCampaignCommandOutput>;
  createCampaign(
    args: CreateCampaignCommandInput,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;
  createCampaign(
    args: CreateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataDeletionJobCommand}
   */
  createDataDeletionJob(
    args: CreateDataDeletionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataDeletionJobCommandOutput>;
  createDataDeletionJob(
    args: CreateDataDeletionJobCommandInput,
    cb: (err: any, data?: CreateDataDeletionJobCommandOutput) => void
  ): void;
  createDataDeletionJob(
    args: CreateDataDeletionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataDeletionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(
    args: CreateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetCommandOutput>;
  createDataset(
    args: CreateDatasetCommandInput,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  createDataset(
    args: CreateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetExportJobCommand}
   */
  createDatasetExportJob(
    args: CreateDatasetExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetExportJobCommandOutput>;
  createDatasetExportJob(
    args: CreateDatasetExportJobCommandInput,
    cb: (err: any, data?: CreateDatasetExportJobCommandOutput) => void
  ): void;
  createDatasetExportJob(
    args: CreateDatasetExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetGroupCommand}
   */
  createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetGroupCommandOutput>;
  createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    cb: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): void;
  createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetImportJobCommand}
   */
  createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetImportJobCommandOutput>;
  createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    cb: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): void;
  createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventTrackerCommand}
   */
  createEventTracker(
    args: CreateEventTrackerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventTrackerCommandOutput>;
  createEventTracker(
    args: CreateEventTrackerCommandInput,
    cb: (err: any, data?: CreateEventTrackerCommandOutput) => void
  ): void;
  createEventTracker(
    args: CreateEventTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventTrackerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFilterCommand}
   */
  createFilter(
    args: CreateFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFilterCommandOutput>;
  createFilter(
    args: CreateFilterCommandInput,
    cb: (err: any, data?: CreateFilterCommandOutput) => void
  ): void;
  createFilter(
    args: CreateFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMetricAttributionCommand}
   */
  createMetricAttribution(
    args: CreateMetricAttributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMetricAttributionCommandOutput>;
  createMetricAttribution(
    args: CreateMetricAttributionCommandInput,
    cb: (err: any, data?: CreateMetricAttributionCommandOutput) => void
  ): void;
  createMetricAttribution(
    args: CreateMetricAttributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMetricAttributionCommandOutput) => void
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
   * @see {@link CreateSchemaCommand}
   */
  createSchema(
    args: CreateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSchemaCommandOutput>;
  createSchema(
    args: CreateSchemaCommandInput,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;
  createSchema(
    args: CreateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSolutionCommand}
   */
  createSolution(
    args: CreateSolutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSolutionCommandOutput>;
  createSolution(
    args: CreateSolutionCommandInput,
    cb: (err: any, data?: CreateSolutionCommandOutput) => void
  ): void;
  createSolution(
    args: CreateSolutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSolutionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSolutionVersionCommand}
   */
  createSolutionVersion(
    args: CreateSolutionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSolutionVersionCommandOutput>;
  createSolutionVersion(
    args: CreateSolutionVersionCommandInput,
    cb: (err: any, data?: CreateSolutionVersionCommandOutput) => void
  ): void;
  createSolutionVersion(
    args: CreateSolutionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSolutionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCampaignCommand}
   */
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCampaignCommandOutput>;
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetGroupCommand}
   */
  deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetGroupCommandOutput>;
  deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    cb: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): void;
  deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventTrackerCommand}
   */
  deleteEventTracker(
    args: DeleteEventTrackerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventTrackerCommandOutput>;
  deleteEventTracker(
    args: DeleteEventTrackerCommandInput,
    cb: (err: any, data?: DeleteEventTrackerCommandOutput) => void
  ): void;
  deleteEventTracker(
    args: DeleteEventTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventTrackerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFilterCommand}
   */
  deleteFilter(
    args: DeleteFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFilterCommandOutput>;
  deleteFilter(
    args: DeleteFilterCommandInput,
    cb: (err: any, data?: DeleteFilterCommandOutput) => void
  ): void;
  deleteFilter(
    args: DeleteFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMetricAttributionCommand}
   */
  deleteMetricAttribution(
    args: DeleteMetricAttributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMetricAttributionCommandOutput>;
  deleteMetricAttribution(
    args: DeleteMetricAttributionCommandInput,
    cb: (err: any, data?: DeleteMetricAttributionCommandOutput) => void
  ): void;
  deleteMetricAttribution(
    args: DeleteMetricAttributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMetricAttributionCommandOutput) => void
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
   * @see {@link DeleteSchemaCommand}
   */
  deleteSchema(
    args: DeleteSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaCommandOutput>;
  deleteSchema(
    args: DeleteSchemaCommandInput,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;
  deleteSchema(
    args: DeleteSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSolutionCommand}
   */
  deleteSolution(
    args: DeleteSolutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSolutionCommandOutput>;
  deleteSolution(
    args: DeleteSolutionCommandInput,
    cb: (err: any, data?: DeleteSolutionCommandOutput) => void
  ): void;
  deleteSolution(
    args: DeleteSolutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSolutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAlgorithmCommand}
   */
  describeAlgorithm(
    args: DescribeAlgorithmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlgorithmCommandOutput>;
  describeAlgorithm(
    args: DescribeAlgorithmCommandInput,
    cb: (err: any, data?: DescribeAlgorithmCommandOutput) => void
  ): void;
  describeAlgorithm(
    args: DescribeAlgorithmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlgorithmCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBatchInferenceJobCommand}
   */
  describeBatchInferenceJob(
    args: DescribeBatchInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBatchInferenceJobCommandOutput>;
  describeBatchInferenceJob(
    args: DescribeBatchInferenceJobCommandInput,
    cb: (err: any, data?: DescribeBatchInferenceJobCommandOutput) => void
  ): void;
  describeBatchInferenceJob(
    args: DescribeBatchInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBatchInferenceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBatchSegmentJobCommand}
   */
  describeBatchSegmentJob(
    args: DescribeBatchSegmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBatchSegmentJobCommandOutput>;
  describeBatchSegmentJob(
    args: DescribeBatchSegmentJobCommandInput,
    cb: (err: any, data?: DescribeBatchSegmentJobCommandOutput) => void
  ): void;
  describeBatchSegmentJob(
    args: DescribeBatchSegmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBatchSegmentJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCampaignCommand}
   */
  describeCampaign(
    args: DescribeCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCampaignCommandOutput>;
  describeCampaign(
    args: DescribeCampaignCommandInput,
    cb: (err: any, data?: DescribeCampaignCommandOutput) => void
  ): void;
  describeCampaign(
    args: DescribeCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataDeletionJobCommand}
   */
  describeDataDeletionJob(
    args: DescribeDataDeletionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataDeletionJobCommandOutput>;
  describeDataDeletionJob(
    args: DescribeDataDeletionJobCommandInput,
    cb: (err: any, data?: DescribeDataDeletionJobCommandOutput) => void
  ): void;
  describeDataDeletionJob(
    args: DescribeDataDeletionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataDeletionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetCommand}
   */
  describeDataset(
    args: DescribeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetCommandOutput>;
  describeDataset(
    args: DescribeDatasetCommandInput,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
  describeDataset(
    args: DescribeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetExportJobCommand}
   */
  describeDatasetExportJob(
    args: DescribeDatasetExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetExportJobCommandOutput>;
  describeDatasetExportJob(
    args: DescribeDatasetExportJobCommandInput,
    cb: (err: any, data?: DescribeDatasetExportJobCommandOutput) => void
  ): void;
  describeDatasetExportJob(
    args: DescribeDatasetExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetGroupCommand}
   */
  describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetGroupCommandOutput>;
  describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    cb: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): void;
  describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetImportJobCommand}
   */
  describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetImportJobCommandOutput>;
  describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    cb: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): void;
  describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventTrackerCommand}
   */
  describeEventTracker(
    args: DescribeEventTrackerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventTrackerCommandOutput>;
  describeEventTracker(
    args: DescribeEventTrackerCommandInput,
    cb: (err: any, data?: DescribeEventTrackerCommandOutput) => void
  ): void;
  describeEventTracker(
    args: DescribeEventTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventTrackerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFeatureTransformationCommand}
   */
  describeFeatureTransformation(
    args: DescribeFeatureTransformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFeatureTransformationCommandOutput>;
  describeFeatureTransformation(
    args: DescribeFeatureTransformationCommandInput,
    cb: (err: any, data?: DescribeFeatureTransformationCommandOutput) => void
  ): void;
  describeFeatureTransformation(
    args: DescribeFeatureTransformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFeatureTransformationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFilterCommand}
   */
  describeFilter(
    args: DescribeFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFilterCommandOutput>;
  describeFilter(
    args: DescribeFilterCommandInput,
    cb: (err: any, data?: DescribeFilterCommandOutput) => void
  ): void;
  describeFilter(
    args: DescribeFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMetricAttributionCommand}
   */
  describeMetricAttribution(
    args: DescribeMetricAttributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMetricAttributionCommandOutput>;
  describeMetricAttribution(
    args: DescribeMetricAttributionCommandInput,
    cb: (err: any, data?: DescribeMetricAttributionCommandOutput) => void
  ): void;
  describeMetricAttribution(
    args: DescribeMetricAttributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMetricAttributionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecipeCommand}
   */
  describeRecipe(
    args: DescribeRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecipeCommandOutput>;
  describeRecipe(
    args: DescribeRecipeCommandInput,
    cb: (err: any, data?: DescribeRecipeCommandOutput) => void
  ): void;
  describeRecipe(
    args: DescribeRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecipeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecommenderCommand}
   */
  describeRecommender(
    args: DescribeRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecommenderCommandOutput>;
  describeRecommender(
    args: DescribeRecommenderCommandInput,
    cb: (err: any, data?: DescribeRecommenderCommandOutput) => void
  ): void;
  describeRecommender(
    args: DescribeRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecommenderCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSchemaCommand}
   */
  describeSchema(
    args: DescribeSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSchemaCommandOutput>;
  describeSchema(
    args: DescribeSchemaCommandInput,
    cb: (err: any, data?: DescribeSchemaCommandOutput) => void
  ): void;
  describeSchema(
    args: DescribeSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSolutionCommand}
   */
  describeSolution(
    args: DescribeSolutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSolutionCommandOutput>;
  describeSolution(
    args: DescribeSolutionCommandInput,
    cb: (err: any, data?: DescribeSolutionCommandOutput) => void
  ): void;
  describeSolution(
    args: DescribeSolutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSolutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSolutionVersionCommand}
   */
  describeSolutionVersion(
    args: DescribeSolutionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSolutionVersionCommandOutput>;
  describeSolutionVersion(
    args: DescribeSolutionVersionCommandInput,
    cb: (err: any, data?: DescribeSolutionVersionCommandOutput) => void
  ): void;
  describeSolutionVersion(
    args: DescribeSolutionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSolutionVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSolutionMetricsCommand}
   */
  getSolutionMetrics(
    args: GetSolutionMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolutionMetricsCommandOutput>;
  getSolutionMetrics(
    args: GetSolutionMetricsCommandInput,
    cb: (err: any, data?: GetSolutionMetricsCommandOutput) => void
  ): void;
  getSolutionMetrics(
    args: GetSolutionMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolutionMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBatchInferenceJobsCommand}
   */
  listBatchInferenceJobs(): Promise<ListBatchInferenceJobsCommandOutput>;
  listBatchInferenceJobs(
    args: ListBatchInferenceJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBatchInferenceJobsCommandOutput>;
  listBatchInferenceJobs(
    args: ListBatchInferenceJobsCommandInput,
    cb: (err: any, data?: ListBatchInferenceJobsCommandOutput) => void
  ): void;
  listBatchInferenceJobs(
    args: ListBatchInferenceJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBatchInferenceJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBatchSegmentJobsCommand}
   */
  listBatchSegmentJobs(): Promise<ListBatchSegmentJobsCommandOutput>;
  listBatchSegmentJobs(
    args: ListBatchSegmentJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBatchSegmentJobsCommandOutput>;
  listBatchSegmentJobs(
    args: ListBatchSegmentJobsCommandInput,
    cb: (err: any, data?: ListBatchSegmentJobsCommandOutput) => void
  ): void;
  listBatchSegmentJobs(
    args: ListBatchSegmentJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBatchSegmentJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCampaignsCommand}
   */
  listCampaigns(): Promise<ListCampaignsCommandOutput>;
  listCampaigns(
    args: ListCampaignsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCampaignsCommandOutput>;
  listCampaigns(
    args: ListCampaignsCommandInput,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;
  listCampaigns(
    args: ListCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataDeletionJobsCommand}
   */
  listDataDeletionJobs(): Promise<ListDataDeletionJobsCommandOutput>;
  listDataDeletionJobs(
    args: ListDataDeletionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataDeletionJobsCommandOutput>;
  listDataDeletionJobs(
    args: ListDataDeletionJobsCommandInput,
    cb: (err: any, data?: ListDataDeletionJobsCommandOutput) => void
  ): void;
  listDataDeletionJobs(
    args: ListDataDeletionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataDeletionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetExportJobsCommand}
   */
  listDatasetExportJobs(): Promise<ListDatasetExportJobsCommandOutput>;
  listDatasetExportJobs(
    args: ListDatasetExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetExportJobsCommandOutput>;
  listDatasetExportJobs(
    args: ListDatasetExportJobsCommandInput,
    cb: (err: any, data?: ListDatasetExportJobsCommandOutput) => void
  ): void;
  listDatasetExportJobs(
    args: ListDatasetExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetGroupsCommand}
   */
  listDatasetGroups(): Promise<ListDatasetGroupsCommandOutput>;
  listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetGroupsCommandOutput>;
  listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    cb: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): void;
  listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetImportJobsCommand}
   */
  listDatasetImportJobs(): Promise<ListDatasetImportJobsCommandOutput>;
  listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetImportJobsCommandOutput>;
  listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    cb: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): void;
  listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetsCommand}
   */
  listDatasets(): Promise<ListDatasetsCommandOutput>;
  listDatasets(
    args: ListDatasetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetsCommandOutput>;
  listDatasets(
    args: ListDatasetsCommandInput,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
  listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventTrackersCommand}
   */
  listEventTrackers(): Promise<ListEventTrackersCommandOutput>;
  listEventTrackers(
    args: ListEventTrackersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventTrackersCommandOutput>;
  listEventTrackers(
    args: ListEventTrackersCommandInput,
    cb: (err: any, data?: ListEventTrackersCommandOutput) => void
  ): void;
  listEventTrackers(
    args: ListEventTrackersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventTrackersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFiltersCommand}
   */
  listFilters(): Promise<ListFiltersCommandOutput>;
  listFilters(
    args: ListFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFiltersCommandOutput>;
  listFilters(
    args: ListFiltersCommandInput,
    cb: (err: any, data?: ListFiltersCommandOutput) => void
  ): void;
  listFilters(
    args: ListFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMetricAttributionMetricsCommand}
   */
  listMetricAttributionMetrics(): Promise<ListMetricAttributionMetricsCommandOutput>;
  listMetricAttributionMetrics(
    args: ListMetricAttributionMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMetricAttributionMetricsCommandOutput>;
  listMetricAttributionMetrics(
    args: ListMetricAttributionMetricsCommandInput,
    cb: (err: any, data?: ListMetricAttributionMetricsCommandOutput) => void
  ): void;
  listMetricAttributionMetrics(
    args: ListMetricAttributionMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetricAttributionMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMetricAttributionsCommand}
   */
  listMetricAttributions(): Promise<ListMetricAttributionsCommandOutput>;
  listMetricAttributions(
    args: ListMetricAttributionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMetricAttributionsCommandOutput>;
  listMetricAttributions(
    args: ListMetricAttributionsCommandInput,
    cb: (err: any, data?: ListMetricAttributionsCommandOutput) => void
  ): void;
  listMetricAttributions(
    args: ListMetricAttributionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetricAttributionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecipesCommand}
   */
  listRecipes(): Promise<ListRecipesCommandOutput>;
  listRecipes(
    args: ListRecipesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecipesCommandOutput>;
  listRecipes(
    args: ListRecipesCommandInput,
    cb: (err: any, data?: ListRecipesCommandOutput) => void
  ): void;
  listRecipes(
    args: ListRecipesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecipesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendersCommand}
   */
  listRecommenders(): Promise<ListRecommendersCommandOutput>;
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
   * @see {@link ListSchemasCommand}
   */
  listSchemas(): Promise<ListSchemasCommandOutput>;
  listSchemas(
    args: ListSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemasCommandOutput>;
  listSchemas(
    args: ListSchemasCommandInput,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
  listSchemas(
    args: ListSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolutionsCommand}
   */
  listSolutions(): Promise<ListSolutionsCommandOutput>;
  listSolutions(
    args: ListSolutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolutionsCommandOutput>;
  listSolutions(
    args: ListSolutionsCommandInput,
    cb: (err: any, data?: ListSolutionsCommandOutput) => void
  ): void;
  listSolutions(
    args: ListSolutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolutionVersionsCommand}
   */
  listSolutionVersions(): Promise<ListSolutionVersionsCommandOutput>;
  listSolutionVersions(
    args: ListSolutionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolutionVersionsCommandOutput>;
  listSolutionVersions(
    args: ListSolutionVersionsCommandInput,
    cb: (err: any, data?: ListSolutionVersionsCommandOutput) => void
  ): void;
  listSolutionVersions(
    args: ListSolutionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolutionVersionsCommandOutput) => void
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
   * @see {@link StopSolutionVersionCreationCommand}
   */
  stopSolutionVersionCreation(
    args: StopSolutionVersionCreationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSolutionVersionCreationCommandOutput>;
  stopSolutionVersionCreation(
    args: StopSolutionVersionCreationCommandInput,
    cb: (err: any, data?: StopSolutionVersionCreationCommandOutput) => void
  ): void;
  stopSolutionVersionCreation(
    args: StopSolutionVersionCreationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSolutionVersionCreationCommandOutput) => void
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
   * @see {@link UpdateCampaignCommand}
   */
  updateCampaign(
    args: UpdateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignCommandOutput>;
  updateCampaign(
    args: UpdateCampaignCommandInput,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;
  updateCampaign(
    args: UpdateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatasetCommand}
   */
  updateDataset(
    args: UpdateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatasetCommandOutput>;
  updateDataset(
    args: UpdateDatasetCommandInput,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;
  updateDataset(
    args: UpdateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMetricAttributionCommand}
   */
  updateMetricAttribution(): Promise<UpdateMetricAttributionCommandOutput>;
  updateMetricAttribution(
    args: UpdateMetricAttributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMetricAttributionCommandOutput>;
  updateMetricAttribution(
    args: UpdateMetricAttributionCommandInput,
    cb: (err: any, data?: UpdateMetricAttributionCommandOutput) => void
  ): void;
  updateMetricAttribution(
    args: UpdateMetricAttributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMetricAttributionCommandOutput) => void
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
   * @see {@link UpdateSolutionCommand}
   */
  updateSolution(
    args: UpdateSolutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSolutionCommandOutput>;
  updateSolution(
    args: UpdateSolutionCommandInput,
    cb: (err: any, data?: UpdateSolutionCommandOutput) => void
  ): void;
  updateSolution(
    args: UpdateSolutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSolutionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBatchInferenceJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBatchInferenceJobsCommandOutput}.
   */
  paginateListBatchInferenceJobs(
    args?: ListBatchInferenceJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBatchInferenceJobsCommandOutput>;

  /**
   * @see {@link ListBatchSegmentJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBatchSegmentJobsCommandOutput}.
   */
  paginateListBatchSegmentJobs(
    args?: ListBatchSegmentJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBatchSegmentJobsCommandOutput>;

  /**
   * @see {@link ListCampaignsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCampaignsCommandOutput}.
   */
  paginateListCampaigns(
    args?: ListCampaignsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCampaignsCommandOutput>;

  /**
   * @see {@link ListDatasetExportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetExportJobsCommandOutput}.
   */
  paginateListDatasetExportJobs(
    args?: ListDatasetExportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetExportJobsCommandOutput>;

  /**
   * @see {@link ListDatasetGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetGroupsCommandOutput}.
   */
  paginateListDatasetGroups(
    args?: ListDatasetGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetGroupsCommandOutput>;

  /**
   * @see {@link ListDatasetImportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetImportJobsCommandOutput}.
   */
  paginateListDatasetImportJobs(
    args?: ListDatasetImportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetImportJobsCommandOutput>;

  /**
   * @see {@link ListDatasetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetsCommandOutput}.
   */
  paginateListDatasets(
    args?: ListDatasetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetsCommandOutput>;

  /**
   * @see {@link ListEventTrackersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventTrackersCommandOutput}.
   */
  paginateListEventTrackers(
    args?: ListEventTrackersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventTrackersCommandOutput>;

  /**
   * @see {@link ListFiltersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFiltersCommandOutput}.
   */
  paginateListFilters(
    args?: ListFiltersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFiltersCommandOutput>;

  /**
   * @see {@link ListMetricAttributionMetricsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMetricAttributionMetricsCommandOutput}.
   */
  paginateListMetricAttributionMetrics(
    args?: ListMetricAttributionMetricsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMetricAttributionMetricsCommandOutput>;

  /**
   * @see {@link ListMetricAttributionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMetricAttributionsCommandOutput}.
   */
  paginateListMetricAttributions(
    args?: ListMetricAttributionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMetricAttributionsCommandOutput>;

  /**
   * @see {@link ListRecipesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecipesCommandOutput}.
   */
  paginateListRecipes(
    args?: ListRecipesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecipesCommandOutput>;

  /**
   * @see {@link ListRecommendersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommendersCommandOutput}.
   */
  paginateListRecommenders(
    args?: ListRecommendersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommendersCommandOutput>;

  /**
   * @see {@link ListSchemasCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSchemasCommandOutput}.
   */
  paginateListSchemas(
    args?: ListSchemasCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSchemasCommandOutput>;

  /**
   * @see {@link ListSolutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSolutionsCommandOutput}.
   */
  paginateListSolutions(
    args?: ListSolutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSolutionsCommandOutput>;

  /**
   * @see {@link ListSolutionVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSolutionVersionsCommandOutput}.
   */
  paginateListSolutionVersions(
    args?: ListSolutionVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSolutionVersionsCommandOutput>;
}

/**
 * <p>Amazon Personalize is a machine learning service that makes it easy to add individualized
 *       recommendations to customers.</p>
 * @public
 */
export class Personalize extends PersonalizeClient implements Personalize {}
createAggregatedClient(commands, Personalize, { paginators });
