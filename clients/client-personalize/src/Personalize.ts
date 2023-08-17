// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateBatchInferenceJobCommand,
  CreateBatchInferenceJobCommandInput,
  CreateBatchInferenceJobCommandOutput,
} from "./commands/CreateBatchInferenceJobCommand";
import {
  CreateBatchSegmentJobCommand,
  CreateBatchSegmentJobCommandInput,
  CreateBatchSegmentJobCommandOutput,
} from "./commands/CreateBatchSegmentJobCommand";
import {
  CreateCampaignCommand,
  CreateCampaignCommandInput,
  CreateCampaignCommandOutput,
} from "./commands/CreateCampaignCommand";
import {
  CreateDatasetCommand,
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
} from "./commands/CreateDatasetCommand";
import {
  CreateDatasetExportJobCommand,
  CreateDatasetExportJobCommandInput,
  CreateDatasetExportJobCommandOutput,
} from "./commands/CreateDatasetExportJobCommand";
import {
  CreateDatasetGroupCommand,
  CreateDatasetGroupCommandInput,
  CreateDatasetGroupCommandOutput,
} from "./commands/CreateDatasetGroupCommand";
import {
  CreateDatasetImportJobCommand,
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
} from "./commands/CreateDatasetImportJobCommand";
import {
  CreateEventTrackerCommand,
  CreateEventTrackerCommandInput,
  CreateEventTrackerCommandOutput,
} from "./commands/CreateEventTrackerCommand";
import {
  CreateFilterCommand,
  CreateFilterCommandInput,
  CreateFilterCommandOutput,
} from "./commands/CreateFilterCommand";
import {
  CreateMetricAttributionCommand,
  CreateMetricAttributionCommandInput,
  CreateMetricAttributionCommandOutput,
} from "./commands/CreateMetricAttributionCommand";
import {
  CreateRecommenderCommand,
  CreateRecommenderCommandInput,
  CreateRecommenderCommandOutput,
} from "./commands/CreateRecommenderCommand";
import {
  CreateSchemaCommand,
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput,
} from "./commands/CreateSchemaCommand";
import {
  CreateSolutionCommand,
  CreateSolutionCommandInput,
  CreateSolutionCommandOutput,
} from "./commands/CreateSolutionCommand";
import {
  CreateSolutionVersionCommand,
  CreateSolutionVersionCommandInput,
  CreateSolutionVersionCommandOutput,
} from "./commands/CreateSolutionVersionCommand";
import {
  DeleteCampaignCommand,
  DeleteCampaignCommandInput,
  DeleteCampaignCommandOutput,
} from "./commands/DeleteCampaignCommand";
import {
  DeleteDatasetCommand,
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
} from "./commands/DeleteDatasetCommand";
import {
  DeleteDatasetGroupCommand,
  DeleteDatasetGroupCommandInput,
  DeleteDatasetGroupCommandOutput,
} from "./commands/DeleteDatasetGroupCommand";
import {
  DeleteEventTrackerCommand,
  DeleteEventTrackerCommandInput,
  DeleteEventTrackerCommandOutput,
} from "./commands/DeleteEventTrackerCommand";
import {
  DeleteFilterCommand,
  DeleteFilterCommandInput,
  DeleteFilterCommandOutput,
} from "./commands/DeleteFilterCommand";
import {
  DeleteMetricAttributionCommand,
  DeleteMetricAttributionCommandInput,
  DeleteMetricAttributionCommandOutput,
} from "./commands/DeleteMetricAttributionCommand";
import {
  DeleteRecommenderCommand,
  DeleteRecommenderCommandInput,
  DeleteRecommenderCommandOutput,
} from "./commands/DeleteRecommenderCommand";
import {
  DeleteSchemaCommand,
  DeleteSchemaCommandInput,
  DeleteSchemaCommandOutput,
} from "./commands/DeleteSchemaCommand";
import {
  DeleteSolutionCommand,
  DeleteSolutionCommandInput,
  DeleteSolutionCommandOutput,
} from "./commands/DeleteSolutionCommand";
import {
  DescribeAlgorithmCommand,
  DescribeAlgorithmCommandInput,
  DescribeAlgorithmCommandOutput,
} from "./commands/DescribeAlgorithmCommand";
import {
  DescribeBatchInferenceJobCommand,
  DescribeBatchInferenceJobCommandInput,
  DescribeBatchInferenceJobCommandOutput,
} from "./commands/DescribeBatchInferenceJobCommand";
import {
  DescribeBatchSegmentJobCommand,
  DescribeBatchSegmentJobCommandInput,
  DescribeBatchSegmentJobCommandOutput,
} from "./commands/DescribeBatchSegmentJobCommand";
import {
  DescribeCampaignCommand,
  DescribeCampaignCommandInput,
  DescribeCampaignCommandOutput,
} from "./commands/DescribeCampaignCommand";
import {
  DescribeDatasetCommand,
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
} from "./commands/DescribeDatasetCommand";
import {
  DescribeDatasetExportJobCommand,
  DescribeDatasetExportJobCommandInput,
  DescribeDatasetExportJobCommandOutput,
} from "./commands/DescribeDatasetExportJobCommand";
import {
  DescribeDatasetGroupCommand,
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput,
} from "./commands/DescribeDatasetGroupCommand";
import {
  DescribeDatasetImportJobCommand,
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput,
} from "./commands/DescribeDatasetImportJobCommand";
import {
  DescribeEventTrackerCommand,
  DescribeEventTrackerCommandInput,
  DescribeEventTrackerCommandOutput,
} from "./commands/DescribeEventTrackerCommand";
import {
  DescribeFeatureTransformationCommand,
  DescribeFeatureTransformationCommandInput,
  DescribeFeatureTransformationCommandOutput,
} from "./commands/DescribeFeatureTransformationCommand";
import {
  DescribeFilterCommand,
  DescribeFilterCommandInput,
  DescribeFilterCommandOutput,
} from "./commands/DescribeFilterCommand";
import {
  DescribeMetricAttributionCommand,
  DescribeMetricAttributionCommandInput,
  DescribeMetricAttributionCommandOutput,
} from "./commands/DescribeMetricAttributionCommand";
import {
  DescribeRecipeCommand,
  DescribeRecipeCommandInput,
  DescribeRecipeCommandOutput,
} from "./commands/DescribeRecipeCommand";
import {
  DescribeRecommenderCommand,
  DescribeRecommenderCommandInput,
  DescribeRecommenderCommandOutput,
} from "./commands/DescribeRecommenderCommand";
import {
  DescribeSchemaCommand,
  DescribeSchemaCommandInput,
  DescribeSchemaCommandOutput,
} from "./commands/DescribeSchemaCommand";
import {
  DescribeSolutionCommand,
  DescribeSolutionCommandInput,
  DescribeSolutionCommandOutput,
} from "./commands/DescribeSolutionCommand";
import {
  DescribeSolutionVersionCommand,
  DescribeSolutionVersionCommandInput,
  DescribeSolutionVersionCommandOutput,
} from "./commands/DescribeSolutionVersionCommand";
import {
  GetSolutionMetricsCommand,
  GetSolutionMetricsCommandInput,
  GetSolutionMetricsCommandOutput,
} from "./commands/GetSolutionMetricsCommand";
import {
  ListBatchInferenceJobsCommand,
  ListBatchInferenceJobsCommandInput,
  ListBatchInferenceJobsCommandOutput,
} from "./commands/ListBatchInferenceJobsCommand";
import {
  ListBatchSegmentJobsCommand,
  ListBatchSegmentJobsCommandInput,
  ListBatchSegmentJobsCommandOutput,
} from "./commands/ListBatchSegmentJobsCommand";
import {
  ListCampaignsCommand,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput,
} from "./commands/ListCampaignsCommand";
import {
  ListDatasetExportJobsCommand,
  ListDatasetExportJobsCommandInput,
  ListDatasetExportJobsCommandOutput,
} from "./commands/ListDatasetExportJobsCommand";
import {
  ListDatasetGroupsCommand,
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput,
} from "./commands/ListDatasetGroupsCommand";
import {
  ListDatasetImportJobsCommand,
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "./commands/ListDatasetImportJobsCommand";
import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "./commands/ListDatasetsCommand";
import {
  ListEventTrackersCommand,
  ListEventTrackersCommandInput,
  ListEventTrackersCommandOutput,
} from "./commands/ListEventTrackersCommand";
import { ListFiltersCommand, ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import {
  ListMetricAttributionMetricsCommand,
  ListMetricAttributionMetricsCommandInput,
  ListMetricAttributionMetricsCommandOutput,
} from "./commands/ListMetricAttributionMetricsCommand";
import {
  ListMetricAttributionsCommand,
  ListMetricAttributionsCommandInput,
  ListMetricAttributionsCommandOutput,
} from "./commands/ListMetricAttributionsCommand";
import { ListRecipesCommand, ListRecipesCommandInput, ListRecipesCommandOutput } from "./commands/ListRecipesCommand";
import {
  ListRecommendersCommand,
  ListRecommendersCommandInput,
  ListRecommendersCommandOutput,
} from "./commands/ListRecommendersCommand";
import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import {
  ListSolutionsCommand,
  ListSolutionsCommandInput,
  ListSolutionsCommandOutput,
} from "./commands/ListSolutionsCommand";
import {
  ListSolutionVersionsCommand,
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput,
} from "./commands/ListSolutionVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartRecommenderCommand,
  StartRecommenderCommandInput,
  StartRecommenderCommandOutput,
} from "./commands/StartRecommenderCommand";
import {
  StopRecommenderCommand,
  StopRecommenderCommandInput,
  StopRecommenderCommandOutput,
} from "./commands/StopRecommenderCommand";
import {
  StopSolutionVersionCreationCommand,
  StopSolutionVersionCreationCommandInput,
  StopSolutionVersionCreationCommandOutput,
} from "./commands/StopSolutionVersionCreationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCampaignCommand,
  UpdateCampaignCommandInput,
  UpdateCampaignCommandOutput,
} from "./commands/UpdateCampaignCommand";
import {
  UpdateDatasetCommand,
  UpdateDatasetCommandInput,
  UpdateDatasetCommandOutput,
} from "./commands/UpdateDatasetCommand";
import {
  UpdateMetricAttributionCommand,
  UpdateMetricAttributionCommandInput,
  UpdateMetricAttributionCommandOutput,
} from "./commands/UpdateMetricAttributionCommand";
import {
  UpdateRecommenderCommand,
  UpdateRecommenderCommandInput,
  UpdateRecommenderCommandOutput,
} from "./commands/UpdateRecommenderCommand";
import { PersonalizeClient, PersonalizeClientConfig } from "./PersonalizeClient";

const commands = {
  CreateBatchInferenceJobCommand,
  CreateBatchSegmentJobCommand,
  CreateCampaignCommand,
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
  createCampaign(args: CreateCampaignCommandInput, cb: (err: any, data?: CreateCampaignCommandOutput) => void): void;
  createCampaign(
    args: CreateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(args: CreateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetCommandOutput>;
  createDataset(args: CreateDatasetCommandInput, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
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
  createFilter(args: CreateFilterCommandInput, options?: __HttpHandlerOptions): Promise<CreateFilterCommandOutput>;
  createFilter(args: CreateFilterCommandInput, cb: (err: any, data?: CreateFilterCommandOutput) => void): void;
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
  createSchema(args: CreateSchemaCommandInput, options?: __HttpHandlerOptions): Promise<CreateSchemaCommandOutput>;
  createSchema(args: CreateSchemaCommandInput, cb: (err: any, data?: CreateSchemaCommandOutput) => void): void;
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
  createSolution(args: CreateSolutionCommandInput, cb: (err: any, data?: CreateSolutionCommandOutput) => void): void;
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
  deleteCampaign(args: DeleteCampaignCommandInput, cb: (err: any, data?: DeleteCampaignCommandOutput) => void): void;
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(args: DeleteDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(args: DeleteDatasetCommandInput, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
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
  deleteFilter(args: DeleteFilterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFilterCommandOutput>;
  deleteFilter(args: DeleteFilterCommandInput, cb: (err: any, data?: DeleteFilterCommandOutput) => void): void;
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
  deleteSchema(args: DeleteSchemaCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSchemaCommandOutput>;
  deleteSchema(args: DeleteSchemaCommandInput, cb: (err: any, data?: DeleteSchemaCommandOutput) => void): void;
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
  deleteSolution(args: DeleteSolutionCommandInput, cb: (err: any, data?: DeleteSolutionCommandOutput) => void): void;
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
   * @see {@link DescribeDatasetCommand}
   */
  describeDataset(
    args: DescribeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetCommandOutput>;
  describeDataset(args: DescribeDatasetCommandInput, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
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
  describeFilter(args: DescribeFilterCommandInput, cb: (err: any, data?: DescribeFilterCommandOutput) => void): void;
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
  describeRecipe(args: DescribeRecipeCommandInput, cb: (err: any, data?: DescribeRecipeCommandOutput) => void): void;
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
  describeSchema(args: DescribeSchemaCommandInput, cb: (err: any, data?: DescribeSchemaCommandOutput) => void): void;
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
  listCampaigns(args: ListCampaignsCommandInput, options?: __HttpHandlerOptions): Promise<ListCampaignsCommandOutput>;
  listCampaigns(args: ListCampaignsCommandInput, cb: (err: any, data?: ListCampaignsCommandOutput) => void): void;
  listCampaigns(
    args: ListCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetExportJobsCommand}
   */
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
  listDatasets(args: ListDatasetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetsCommandOutput>;
  listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
  listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventTrackersCommand}
   */
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
  listFilters(args: ListFiltersCommandInput, options?: __HttpHandlerOptions): Promise<ListFiltersCommandOutput>;
  listFilters(args: ListFiltersCommandInput, cb: (err: any, data?: ListFiltersCommandOutput) => void): void;
  listFilters(
    args: ListFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMetricAttributionMetricsCommand}
   */
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
  listRecipes(args: ListRecipesCommandInput, options?: __HttpHandlerOptions): Promise<ListRecipesCommandOutput>;
  listRecipes(args: ListRecipesCommandInput, cb: (err: any, data?: ListRecipesCommandOutput) => void): void;
  listRecipes(
    args: ListRecipesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecipesCommandOutput) => void
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
   * @see {@link ListSchemasCommand}
   */
  listSchemas(args: ListSchemasCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemasCommandOutput>;
  listSchemas(args: ListSchemasCommandInput, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
  listSchemas(
    args: ListSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolutionsCommand}
   */
  listSolutions(args: ListSolutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSolutionsCommandOutput>;
  listSolutions(args: ListSolutionsCommandInput, cb: (err: any, data?: ListSolutionsCommandOutput) => void): void;
  listSolutions(
    args: ListSolutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolutionVersionsCommand}
   */
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
  stopRecommender(args: StopRecommenderCommandInput, cb: (err: any, data?: StopRecommenderCommandOutput) => void): void;
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
   * @see {@link UpdateCampaignCommand}
   */
  updateCampaign(
    args: UpdateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignCommandOutput>;
  updateCampaign(args: UpdateCampaignCommandInput, cb: (err: any, data?: UpdateCampaignCommandOutput) => void): void;
  updateCampaign(
    args: UpdateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatasetCommand}
   */
  updateDataset(args: UpdateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDatasetCommandOutput>;
  updateDataset(args: UpdateDatasetCommandInput, cb: (err: any, data?: UpdateDatasetCommandOutput) => void): void;
  updateDataset(
    args: UpdateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMetricAttributionCommand}
   */
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
}

/**
 * @public
 * <p>Amazon Personalize is a machine learning service that makes it easy to add individualized
 *       recommendations to customers.</p>
 */
export class Personalize extends PersonalizeClient implements Personalize {}
createAggregatedClient(commands, Personalize);
