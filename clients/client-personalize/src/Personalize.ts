// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
  UpdateMetricAttributionCommand,
  UpdateMetricAttributionCommandInput,
  UpdateMetricAttributionCommandOutput,
} from "./commands/UpdateMetricAttributionCommand";
import {
  UpdateRecommenderCommand,
  UpdateRecommenderCommandInput,
  UpdateRecommenderCommandOutput,
} from "./commands/UpdateRecommenderCommand";
import { PersonalizeClient } from "./PersonalizeClient";

/**
 * <p>Amazon Personalize is a machine learning service that makes it easy to add individualized
 *       recommendations to customers.</p>
 */
export class Personalize extends PersonalizeClient {
  /**
   * <p>Creates a batch inference job. The operation can handle up to 50 million records and the
   *       input file must be in JSON format. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/creating-batch-inference-job.html">Creating a batch inference job</a>.
   *     </p>
   */
  public createBatchInferenceJob(
    args: CreateBatchInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBatchInferenceJobCommandOutput>;
  public createBatchInferenceJob(
    args: CreateBatchInferenceJobCommandInput,
    cb: (err: any, data?: CreateBatchInferenceJobCommandOutput) => void
  ): void;
  public createBatchInferenceJob(
    args: CreateBatchInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBatchInferenceJobCommandOutput) => void
  ): void;
  public createBatchInferenceJob(
    args: CreateBatchInferenceJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBatchInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: CreateBatchInferenceJobCommandOutput) => void
  ): Promise<CreateBatchInferenceJobCommandOutput> | void {
    const command = new CreateBatchInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a batch segment job. The operation can handle up to 50 million records and the
   *       input file must be in JSON format. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/recommendations-batch.html">Getting batch recommendations and user segments</a>.</p>
   */
  public createBatchSegmentJob(
    args: CreateBatchSegmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBatchSegmentJobCommandOutput>;
  public createBatchSegmentJob(
    args: CreateBatchSegmentJobCommandInput,
    cb: (err: any, data?: CreateBatchSegmentJobCommandOutput) => void
  ): void;
  public createBatchSegmentJob(
    args: CreateBatchSegmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBatchSegmentJobCommandOutput) => void
  ): void;
  public createBatchSegmentJob(
    args: CreateBatchSegmentJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBatchSegmentJobCommandOutput) => void),
    cb?: (err: any, data?: CreateBatchSegmentJobCommandOutput) => void
  ): Promise<CreateBatchSegmentJobCommandOutput> | void {
    const command = new CreateBatchSegmentJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a campaign that deploys a solution version. When a client calls the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
   *       and
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a>
   *       APIs, a campaign is specified in the request.</p>
   *
   *          <p>
   *             <b>Minimum Provisioned TPS and Auto-Scaling</b>
   *          </p>
   *
   *          <p>A transaction is a single <code>GetRecommendations</code> or
   *        <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput
   *        and unit of billing for Amazon Personalize. The minimum provisioned TPS
   *        (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by
   *        Amazon Personalize, and thus, the minimum billing charge.
   *     </p>
   *          <p>
   *        If your TPS increases beyond
   *        <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down,
   *        but never below <code>minProvisionedTPS</code>.
   *        There's a short time delay while the capacity is increased that might cause loss of
   *        transactions.</p>
   *          <p>The actual TPS used is calculated as the average requests/second within a 5-minute window.
   *       You pay for maximum of either the minimum provisioned TPS or the actual TPS.
   *       We recommend starting with a low <code>minProvisionedTPS</code>, track
   *        your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code>
   *        as necessary.</p>
   *
   *          <p>
   *             <b>Status</b>
   *          </p>
   *          <p>A campaign can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   *          <p>To get the campaign status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a>.</p>
   *          <note>
   *             <p>Wait until the <code>status</code> of the campaign
   *         is <code>ACTIVE</code> before asking the campaign for recommendations.</p>
   *          </note>
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html">UpdateCampaign</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html">DeleteCampaign</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createCampaign(
    args: CreateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCampaignCommandOutput>;
  public createCampaign(
    args: CreateCampaignCommandInput,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;
  public createCampaign(
    args: CreateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;
  public createCampaign(
    args: CreateCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCampaignCommandOutput) => void),
    cb?: (err: any, data?: CreateCampaignCommandOutput) => void
  ): Promise<CreateCampaignCommandOutput> | void {
    const command = new CreateCampaignCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an empty dataset and adds it to the specified dataset group.
   *       Use <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> to import your training data to a
   *       dataset.</p>
   *
   *          <p>There are three types of datasets:</p>
   *          <ul>
   *             <li>
   *                <p>Interactions</p>
   *             </li>
   *             <li>
   *                <p>Items</p>
   *             </li>
   *             <li>
   *                <p>Users</p>
   *             </li>
   *          </ul>
   *          <p>Each dataset type has an associated schema with required field types.
   *       Only the <code>Interactions</code> dataset is required in order to train a
   *       model (also referred to as creating a solution).</p>
   *          <p>A dataset can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
   *           FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   *          <p>To get the status of the dataset, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a>.</p>
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html">ListDatasets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html">DeleteDataset</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createDataset(
    args: CreateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetCommandOutput>;
  public createDataset(
    args: CreateDatasetCommandInput,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  public createDataset(
    args: CreateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  public createDataset(
    args: CreateDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatasetCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetCommandOutput) => void
  ): Promise<CreateDatasetCommandOutput> | void {
    const command = new CreateDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Creates a job that exports data from your dataset to an Amazon S3 bucket.
   *       To allow Amazon Personalize to export the training data, you must specify an
   *       service-linked IAM role that gives Amazon Personalize <code>PutObject</code>
   *       permissions for your Amazon S3 bucket. For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a> in the Amazon Personalize developer guide. </p>
   *          <p>
   *             <b>Status</b>
   *          </p>
   *          <p>A dataset export job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
   *           FAILED</p>
   *             </li>
   *          </ul>
   *          <p> To get the status of the export job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a>, and specify the Amazon Resource Name
   *       (ARN) of the dataset export job. The dataset export is complete when the
   *       status shows as ACTIVE. If the status shows as CREATE FAILED, the response
   *       includes a <code>failureReason</code> key, which describes why the job
   *       failed. </p>
   */
  public createDatasetExportJob(
    args: CreateDatasetExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetExportJobCommandOutput>;
  public createDatasetExportJob(
    args: CreateDatasetExportJobCommandInput,
    cb: (err: any, data?: CreateDatasetExportJobCommandOutput) => void
  ): void;
  public createDatasetExportJob(
    args: CreateDatasetExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetExportJobCommandOutput) => void
  ): void;
  public createDatasetExportJob(
    args: CreateDatasetExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatasetExportJobCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetExportJobCommandOutput) => void
  ): Promise<CreateDatasetExportJobCommandOutput> | void {
    const command = new CreateDatasetExportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an empty dataset group. A dataset group is a container for
   *       Amazon Personalize resources. A dataset group can contain at most three datasets, one
   *       for each type of dataset:</p>
   *          <ul>
   *             <li>
   *                <p>Interactions</p>
   *             </li>
   *             <li>
   *                <p>Items</p>
   *             </li>
   *             <li>
   *                <p>Users</p>
   *             </li>
   *          </ul>
   *          <p> A dataset group can be a Domain dataset group, where you specify a
   *       domain and use pre-configured resources like recommenders, or a
   *       Custom dataset group, where you use custom resources, such as a solution
   *       with a solution version, that you deploy with a campaign. If you start
   *       with a Domain dataset group, you can still add custom resources such as
   *       solutions and solution versions trained with recipes for custom use cases
   *       and deployed with campaigns. </p>
   *          <p>A dataset group can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
   *           FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING</p>
   *             </li>
   *          </ul>
   *          <p>To get the status of the dataset group, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the
   *       response includes a <code>failureReason</code> key, which describes why
   *       the creation failed.</p>
   *          <note>
   *             <p>You must wait until the <code>status</code> of the dataset group is
   *           <code>ACTIVE</code> before adding a dataset to the group.</p>
   *          </note>
   *          <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in
   *       the group. If you specify a KMS key, you must also include an Identity and Access Management
   *       (IAM) role that has permission to access the key.</p>
   *          <p class="title">
   *             <b>APIs that require a dataset group ARN in the request</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html">DeleteDatasetGroup</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetGroupCommandOutput>;
  public createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    cb: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): void;
  public createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): void;
  public createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatasetGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): Promise<CreateDatasetGroupCommandOutput> | void {
    const command = new CreateDatasetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a job that imports training data from your data source (an
   *       Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the
   *       training data, you must specify an IAM service role that has permission to
   *       read from the data source, as Amazon Personalize makes a copy of your data and
   *       processes it internally. For information on granting access to your Amazon S3
   *       bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving
   *         Amazon Personalize Access to Amazon S3 Resources</a>. </p>
   *          <important>
   *             <p>By default, a dataset import job replaces any existing data in the
   *         dataset that you imported in bulk. To add new records without replacing
   *         existing data, specify INCREMENTAL for the import mode in the
   *         CreateDatasetImportJob operation.</p>
   *          </important>
   *          <p>
   *             <b>Status</b>
   *          </p>
   *          <p>A dataset import job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
   *           FAILED</p>
   *             </li>
   *          </ul>
   *          <p>To get the status of the import job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>, providing the Amazon Resource Name
   *       (ARN) of the dataset import job. The dataset import is complete when the
   *       status shows as ACTIVE. If the status shows as CREATE FAILED, the response
   *       includes a <code>failureReason</code> key, which describes why the job
   *       failed.</p>
   *          <note>
   *             <p>Importing takes time. You must wait until the status shows as ACTIVE
   *         before training a model using the dataset.</p>
   *          </note>
   *
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetImportJobCommandOutput>;
  public createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    cb: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): void;
  public createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): void;
  public createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatasetImportJobCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): Promise<CreateDatasetImportJobCommandOutput> | void {
    const command = new CreateDatasetImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an event tracker that you use when adding event data to a specified dataset
   *       group using the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
   *          <note>
   *             <p>Only one event tracker can be associated with a dataset group. You will get
   *         an error if you call <code>CreateEventTracker</code> using the same dataset group as an
   *         existing event tracker.</p>
   *          </note>
   *          <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation.
   *       Amazon Personalize then appends the event data to the Interactions dataset of the dataset group you specify
   *       in your event tracker.
   *     </p>
   *          <p>The event tracker can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   *          <p>To get the status of the event tracker, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>.</p>
   *          <note>
   *             <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p>
   *          </note>
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html">ListEventTrackers</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html">DeleteEventTracker</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createEventTracker(
    args: CreateEventTrackerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventTrackerCommandOutput>;
  public createEventTracker(
    args: CreateEventTrackerCommandInput,
    cb: (err: any, data?: CreateEventTrackerCommandOutput) => void
  ): void;
  public createEventTracker(
    args: CreateEventTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventTrackerCommandOutput) => void
  ): void;
  public createEventTracker(
    args: CreateEventTrackerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEventTrackerCommandOutput) => void),
    cb?: (err: any, data?: CreateEventTrackerCommandOutput) => void
  ): Promise<CreateEventTrackerCommandOutput> | void {
    const command = new CreateEventTrackerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a recommendation filter. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.</p>
   */
  public createFilter(
    args: CreateFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFilterCommandOutput>;
  public createFilter(args: CreateFilterCommandInput, cb: (err: any, data?: CreateFilterCommandOutput) => void): void;
  public createFilter(
    args: CreateFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFilterCommandOutput) => void
  ): void;
  public createFilter(
    args: CreateFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFilterCommandOutput) => void),
    cb?: (err: any, data?: CreateFilterCommandOutput) => void
  ): Promise<CreateFilterCommandOutput> | void {
    const command = new CreateFilterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a metric attribution.
   *       A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3.
   *       For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
   */
  public createMetricAttribution(
    args: CreateMetricAttributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMetricAttributionCommandOutput>;
  public createMetricAttribution(
    args: CreateMetricAttributionCommandInput,
    cb: (err: any, data?: CreateMetricAttributionCommandOutput) => void
  ): void;
  public createMetricAttribution(
    args: CreateMetricAttributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMetricAttributionCommandOutput) => void
  ): void;
  public createMetricAttribution(
    args: CreateMetricAttributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMetricAttributionCommandOutput) => void),
    cb?: (err: any, data?: CreateMetricAttributionCommandOutput) => void
  ): Promise<CreateMetricAttributionCommandOutput> | void {
    const command = new CreateMetricAttributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a recommender with the recipe (a Domain dataset group use case) you specify.
   *       You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
   *       request.
   *      </p>
   *
   *          <p>
   *             <b>Minimum recommendation requests per second</b>
   *          </p>
   *
   *          <p>When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second
   *       (<code>minRecommendationRequestsPerSecond</code>) specifies the baseline recommendation request throughput provisioned by
   *       Amazon Personalize. The default minRecommendationRequestsPerSecond is <code>1</code>. A recommendation request is a single <code>GetRecommendations</code> operation.
   *       Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive
   *       your requests per hour and the price of your recommender usage.
   *     </p>
   *          <p>
   *       If your requests per second increases beyond
   *       <code>minRecommendationRequestsPerSecond</code>, Amazon Personalize auto-scales the provisioned capacity up and down,
   *       but never below <code>minRecommendationRequestsPerSecond</code>.
   *       There's a short time delay while the capacity is increased that might cause loss of
   *       requests.</p>
   *          <p>
   *       Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond)
   *       or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window.
   *
   *       We recommend starting with the default <code>minRecommendationRequestsPerSecond</code>, track
   *       your usage using Amazon CloudWatch metrics, and then increase the <code>minRecommendationRequestsPerSecond</code>
   *       as necessary.
   *     </p>
   *
   *          <p>
   *             <b>Status</b>
   *          </p>
   *          <p>A recommender can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>STOP PENDING > STOP IN_PROGRESS > INACTIVE > START PENDING > START IN_PROGRESS > ACTIVE</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   *          <p>To get the recommender status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>.</p>
   *          <note>
   *             <p>Wait until the <code>status</code> of the recommender
   *         is <code>ACTIVE</code> before asking the recommender for recommendations.</p>
   *          </note>
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html">ListRecommenders</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html">UpdateRecommender</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html">DeleteRecommender</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createRecommender(
    args: CreateRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRecommenderCommandOutput>;
  public createRecommender(
    args: CreateRecommenderCommandInput,
    cb: (err: any, data?: CreateRecommenderCommandOutput) => void
  ): void;
  public createRecommender(
    args: CreateRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecommenderCommandOutput) => void
  ): void;
  public createRecommender(
    args: CreateRecommenderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRecommenderCommandOutput) => void),
    cb?: (err: any, data?: CreateRecommenderCommandOutput) => void
  ): Promise<CreateRecommenderCommandOutput> | void {
    const command = new CreateRecommenderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon Personalize schema from the specified schema string. The schema you create
   *       must be in Avro JSON format.</p>
   *          <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset
   *       type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you
   *     provide the domain of the Domain dataset group.
   *     You specify a schema when you call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p>
   *
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html">ListSchemas</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html">DeleteSchema</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createSchema(
    args: CreateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSchemaCommandOutput>;
  public createSchema(args: CreateSchemaCommandInput, cb: (err: any, data?: CreateSchemaCommandOutput) => void): void;
  public createSchema(
    args: CreateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;
  public createSchema(
    args: CreateSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSchemaCommandOutput) => void),
    cb?: (err: any, data?: CreateSchemaCommandOutput) => void
  ): Promise<CreateSchemaCommandOutput> | void {
    const command = new CreateSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates the configuration for training a model. A trained model is known as
   *       a solution. After the configuration is created, you train the model (create a solution)
   *       by calling the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> operation. Every time you call
   *       <code>CreateSolutionVersion</code>, a new version of the solution is created.</p>
   *          <p>After creating a solution version, you check its accuracy by calling
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html">GetSolutionMetrics</a>. When you are satisfied with the version, you
   *       deploy it using <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. The campaign provides recommendations
   *       to a client through the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
   *          <p>To train a model, Amazon Personalize requires training data and a recipe. The training data
   *       comes from the dataset group that you provide in the request. A recipe specifies
   *       the training algorithm and a feature transformation. You can specify one of the predefined
   *       recipes provided by Amazon Personalize. Alternatively, you can specify
   *       <code>performAutoML</code> and Amazon Personalize will analyze your data and select the
   *       optimum USER_PERSONALIZATION recipe for you.</p>
   *          <note>
   *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
   *         for solution hyperparameter optimization at this time.</p>
   *          </note>
   *          <p>
   *             <b>Status</b>
   *          </p>
   *          <p>A solution can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   *          <p>To get the status of the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>. Wait
   *       until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p>
   *
   *
   *
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createSolution(
    args: CreateSolutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSolutionCommandOutput>;
  public createSolution(
    args: CreateSolutionCommandInput,
    cb: (err: any, data?: CreateSolutionCommandOutput) => void
  ): void;
  public createSolution(
    args: CreateSolutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSolutionCommandOutput) => void
  ): void;
  public createSolution(
    args: CreateSolutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSolutionCommandOutput) => void),
    cb?: (err: any, data?: CreateSolutionCommandOutput) => void
  ): Promise<CreateSolutionCommandOutput> | void {
    const command = new CreateSolutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Trains or retrains an active solution in a Custom dataset group. A solution is created using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
   *       operation and must be in the ACTIVE state before calling
   *         <code>CreateSolutionVersion</code>. A new version of the solution is created every time you
   *       call this operation.</p>
   *          <p>
   *             <b>Status</b>
   *          </p>
   *          <p>A solution version can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING</p>
   *             </li>
   *             <li>
   *                <p>CREATE IN_PROGRESS</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE</p>
   *             </li>
   *             <li>
   *                <p>CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>CREATE STOPPING</p>
   *             </li>
   *             <li>
   *                <p>CREATE STOPPED</p>
   *             </li>
   *          </ul>
   *          <p>To get the status of the version, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>. Wait
   *       until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p>
   *          <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code>
   *       key, which describes why the job failed.</p>
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createSolutionVersion(
    args: CreateSolutionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSolutionVersionCommandOutput>;
  public createSolutionVersion(
    args: CreateSolutionVersionCommandInput,
    cb: (err: any, data?: CreateSolutionVersionCommandOutput) => void
  ): void;
  public createSolutionVersion(
    args: CreateSolutionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSolutionVersionCommandOutput) => void
  ): void;
  public createSolutionVersion(
    args: CreateSolutionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSolutionVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateSolutionVersionCommandOutput) => void
  ): Promise<CreateSolutionVersionCommandOutput> | void {
    const command = new CreateSolutionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a campaign by deleting the solution deployment. The solution that
   *       the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no
   *       longer be specified in a
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
   *       request.
   *       For information on creating campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
   */
  public deleteCampaign(
    args: DeleteCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCampaignCommandOutput>;
  public deleteCampaign(
    args: DeleteCampaignCommandInput,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;
  public deleteCampaign(
    args: DeleteCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;
  public deleteCampaign(
    args: DeleteCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCampaignCommandOutput) => void),
    cb?: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): Promise<DeleteCampaignCommandOutput> | void {
    const command = new DeleteCampaignCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a dataset. You can't delete a dataset if an associated
   *         <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the
   *       CREATE PENDING or IN PROGRESS state. For more information on datasets, see
   *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p>
   */
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetCommandOutput>;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatasetCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): Promise<DeleteDatasetCommandOutput> | void {
    const command = new DeleteDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a dataset group. Before you delete a dataset group, you must
   *       delete the following:</p>
   *          <ul>
   *             <li>
   *                <p>All associated event trackers.</p>
   *             </li>
   *             <li>
   *                <p>All associated solutions.</p>
   *             </li>
   *             <li>
   *                <p>All datasets in the dataset group.</p>
   *             </li>
   *          </ul>
   */
  public deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetGroupCommandOutput>;
  public deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    cb: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): void;
  public deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): void;
  public deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatasetGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): Promise<DeleteDatasetGroupCommandOutput> | void {
    const command = new DeleteDatasetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the event tracker. Does not delete the event-interactions dataset from
   *         the associated dataset group. For more
   *         information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.</p>
   */
  public deleteEventTracker(
    args: DeleteEventTrackerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventTrackerCommandOutput>;
  public deleteEventTracker(
    args: DeleteEventTrackerCommandInput,
    cb: (err: any, data?: DeleteEventTrackerCommandOutput) => void
  ): void;
  public deleteEventTracker(
    args: DeleteEventTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventTrackerCommandOutput) => void
  ): void;
  public deleteEventTracker(
    args: DeleteEventTrackerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventTrackerCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventTrackerCommandOutput) => void
  ): Promise<DeleteEventTrackerCommandOutput> | void {
    const command = new DeleteEventTrackerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a filter.</p>
   */
  public deleteFilter(
    args: DeleteFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFilterCommandOutput>;
  public deleteFilter(args: DeleteFilterCommandInput, cb: (err: any, data?: DeleteFilterCommandOutput) => void): void;
  public deleteFilter(
    args: DeleteFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFilterCommandOutput) => void
  ): void;
  public deleteFilter(
    args: DeleteFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFilterCommandOutput) => void),
    cb?: (err: any, data?: DeleteFilterCommandOutput) => void
  ): Promise<DeleteFilterCommandOutput> | void {
    const command = new DeleteFilterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a metric attribution.</p>
   */
  public deleteMetricAttribution(
    args: DeleteMetricAttributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMetricAttributionCommandOutput>;
  public deleteMetricAttribution(
    args: DeleteMetricAttributionCommandInput,
    cb: (err: any, data?: DeleteMetricAttributionCommandOutput) => void
  ): void;
  public deleteMetricAttribution(
    args: DeleteMetricAttributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMetricAttributionCommandOutput) => void
  ): void;
  public deleteMetricAttribution(
    args: DeleteMetricAttributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMetricAttributionCommandOutput) => void),
    cb?: (err: any, data?: DeleteMetricAttributionCommandOutput) => void
  ): Promise<DeleteMetricAttributionCommandOutput> | void {
    const command = new DeleteMetricAttributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deactivates and removes a recommender. A deleted recommender can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
   *     request.</p>
   */
  public deleteRecommender(
    args: DeleteRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecommenderCommandOutput>;
  public deleteRecommender(
    args: DeleteRecommenderCommandInput,
    cb: (err: any, data?: DeleteRecommenderCommandOutput) => void
  ): void;
  public deleteRecommender(
    args: DeleteRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecommenderCommandOutput) => void
  ): void;
  public deleteRecommender(
    args: DeleteRecommenderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRecommenderCommandOutput) => void),
    cb?: (err: any, data?: DeleteRecommenderCommandOutput) => void
  ): Promise<DeleteRecommenderCommandOutput> | void {
    const command = new DeleteRecommenderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a schema. Before deleting a schema, you must delete all
   *       datasets referencing the schema. For more information on schemas, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.</p>
   */
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaCommandOutput>;
  public deleteSchema(args: DeleteSchemaCommandInput, cb: (err: any, data?: DeleteSchemaCommandOutput) => void): void;
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSchemaCommandOutput) => void),
    cb?: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): Promise<DeleteSchemaCommandOutput> | void {
    const command = new DeleteSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes all versions of a solution and the <code>Solution</code> object itself.
   *       Before deleting a solution, you must delete all campaigns based on
   *       the solution. To determine what campaigns are using the solution, call
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution.
   *       You can't delete a solution if an associated <code>SolutionVersion</code> is in the
   *       CREATE PENDING or IN PROGRESS state.
   *       For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.</p>
   */
  public deleteSolution(
    args: DeleteSolutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSolutionCommandOutput>;
  public deleteSolution(
    args: DeleteSolutionCommandInput,
    cb: (err: any, data?: DeleteSolutionCommandOutput) => void
  ): void;
  public deleteSolution(
    args: DeleteSolutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSolutionCommandOutput) => void
  ): void;
  public deleteSolution(
    args: DeleteSolutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSolutionCommandOutput) => void),
    cb?: (err: any, data?: DeleteSolutionCommandOutput) => void
  ): Promise<DeleteSolutionCommandOutput> | void {
    const command = new DeleteSolutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the given algorithm.</p>
   */
  public describeAlgorithm(
    args: DescribeAlgorithmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlgorithmCommandOutput>;
  public describeAlgorithm(
    args: DescribeAlgorithmCommandInput,
    cb: (err: any, data?: DescribeAlgorithmCommandOutput) => void
  ): void;
  public describeAlgorithm(
    args: DescribeAlgorithmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlgorithmCommandOutput) => void
  ): void;
  public describeAlgorithm(
    args: DescribeAlgorithmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAlgorithmCommandOutput) => void),
    cb?: (err: any, data?: DescribeAlgorithmCommandOutput) => void
  ): Promise<DescribeAlgorithmCommandOutput> | void {
    const command = new DescribeAlgorithmCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the properties of a batch inference job including name, Amazon Resource Name (ARN),
   *       status, input and output configurations, and the ARN of the solution version used to generate
   *       the recommendations.</p>
   */
  public describeBatchInferenceJob(
    args: DescribeBatchInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBatchInferenceJobCommandOutput>;
  public describeBatchInferenceJob(
    args: DescribeBatchInferenceJobCommandInput,
    cb: (err: any, data?: DescribeBatchInferenceJobCommandOutput) => void
  ): void;
  public describeBatchInferenceJob(
    args: DescribeBatchInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBatchInferenceJobCommandOutput) => void
  ): void;
  public describeBatchInferenceJob(
    args: DescribeBatchInferenceJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBatchInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeBatchInferenceJobCommandOutput) => void
  ): Promise<DescribeBatchInferenceJobCommandOutput> | void {
    const command = new DescribeBatchInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the properties of a batch segment job including name, Amazon Resource Name (ARN),
   *       status, input and output configurations, and the ARN of the solution version used to generate
   *       segments.</p>
   */
  public describeBatchSegmentJob(
    args: DescribeBatchSegmentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBatchSegmentJobCommandOutput>;
  public describeBatchSegmentJob(
    args: DescribeBatchSegmentJobCommandInput,
    cb: (err: any, data?: DescribeBatchSegmentJobCommandOutput) => void
  ): void;
  public describeBatchSegmentJob(
    args: DescribeBatchSegmentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBatchSegmentJobCommandOutput) => void
  ): void;
  public describeBatchSegmentJob(
    args: DescribeBatchSegmentJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBatchSegmentJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeBatchSegmentJobCommandOutput) => void
  ): Promise<DescribeBatchSegmentJobCommandOutput> | void {
    const command = new DescribeBatchSegmentJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the given campaign, including its status.</p>
   *          <p>A campaign can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   *          <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the
   *       <code>failureReason</code> key, which describes why.</p>
   *          <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
   */
  public describeCampaign(
    args: DescribeCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCampaignCommandOutput>;
  public describeCampaign(
    args: DescribeCampaignCommandInput,
    cb: (err: any, data?: DescribeCampaignCommandOutput) => void
  ): void;
  public describeCampaign(
    args: DescribeCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCampaignCommandOutput) => void
  ): void;
  public describeCampaign(
    args: DescribeCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCampaignCommandOutput) => void),
    cb?: (err: any, data?: DescribeCampaignCommandOutput) => void
  ): Promise<DescribeCampaignCommandOutput> | void {
    const command = new DescribeCampaignCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the given dataset. For more information on datasets, see
   *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p>
   */
  public describeDataset(
    args: DescribeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetCommandOutput>;
  public describeDataset(
    args: DescribeDatasetCommandInput,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
  public describeDataset(
    args: DescribeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
  public describeDataset(
    args: DescribeDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDatasetCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): Promise<DescribeDatasetCommandOutput> | void {
    const command = new DescribeDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the dataset export job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>, including the export job status.</p>
   */
  public describeDatasetExportJob(
    args: DescribeDatasetExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetExportJobCommandOutput>;
  public describeDatasetExportJob(
    args: DescribeDatasetExportJobCommandInput,
    cb: (err: any, data?: DescribeDatasetExportJobCommandOutput) => void
  ): void;
  public describeDatasetExportJob(
    args: DescribeDatasetExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetExportJobCommandOutput) => void
  ): void;
  public describeDatasetExportJob(
    args: DescribeDatasetExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDatasetExportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatasetExportJobCommandOutput) => void
  ): Promise<DescribeDatasetExportJobCommandOutput> | void {
    const command = new DescribeDatasetExportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the given dataset group. For more information on dataset
   *       groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.</p>
   */
  public describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetGroupCommandOutput>;
  public describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    cb: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): void;
  public describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): void;
  public describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDatasetGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): Promise<DescribeDatasetGroupCommandOutput> | void {
    const command = new DescribeDatasetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the dataset import job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>, including the import job status.</p>
   */
  public describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetImportJobCommandOutput>;
  public describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    cb: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): void;
  public describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): void;
  public describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDatasetImportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): Promise<DescribeDatasetImportJobCommandOutput> | void {
    const command = new DescribeDatasetImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an event tracker. The response includes the <code>trackingId</code> and
   *       <code>status</code> of the event tracker.
   *       For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.</p>
   */
  public describeEventTracker(
    args: DescribeEventTrackerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventTrackerCommandOutput>;
  public describeEventTracker(
    args: DescribeEventTrackerCommandInput,
    cb: (err: any, data?: DescribeEventTrackerCommandOutput) => void
  ): void;
  public describeEventTracker(
    args: DescribeEventTrackerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventTrackerCommandOutput) => void
  ): void;
  public describeEventTracker(
    args: DescribeEventTrackerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventTrackerCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventTrackerCommandOutput) => void
  ): Promise<DescribeEventTrackerCommandOutput> | void {
    const command = new DescribeEventTrackerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the given feature transformation.</p>
   */
  public describeFeatureTransformation(
    args: DescribeFeatureTransformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFeatureTransformationCommandOutput>;
  public describeFeatureTransformation(
    args: DescribeFeatureTransformationCommandInput,
    cb: (err: any, data?: DescribeFeatureTransformationCommandOutput) => void
  ): void;
  public describeFeatureTransformation(
    args: DescribeFeatureTransformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFeatureTransformationCommandOutput) => void
  ): void;
  public describeFeatureTransformation(
    args: DescribeFeatureTransformationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFeatureTransformationCommandOutput) => void),
    cb?: (err: any, data?: DescribeFeatureTransformationCommandOutput) => void
  ): Promise<DescribeFeatureTransformationCommandOutput> | void {
    const command = new DescribeFeatureTransformationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a filter's properties.</p>
   */
  public describeFilter(
    args: DescribeFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFilterCommandOutput>;
  public describeFilter(
    args: DescribeFilterCommandInput,
    cb: (err: any, data?: DescribeFilterCommandOutput) => void
  ): void;
  public describeFilter(
    args: DescribeFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFilterCommandOutput) => void
  ): void;
  public describeFilter(
    args: DescribeFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFilterCommandOutput) => void),
    cb?: (err: any, data?: DescribeFilterCommandOutput) => void
  ): Promise<DescribeFilterCommandOutput> | void {
    const command = new DescribeFilterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a metric attribution.</p>
   */
  public describeMetricAttribution(
    args: DescribeMetricAttributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMetricAttributionCommandOutput>;
  public describeMetricAttribution(
    args: DescribeMetricAttributionCommandInput,
    cb: (err: any, data?: DescribeMetricAttributionCommandOutput) => void
  ): void;
  public describeMetricAttribution(
    args: DescribeMetricAttributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMetricAttributionCommandOutput) => void
  ): void;
  public describeMetricAttribution(
    args: DescribeMetricAttributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMetricAttributionCommandOutput) => void),
    cb?: (err: any, data?: DescribeMetricAttributionCommandOutput) => void
  ): Promise<DescribeMetricAttributionCommandOutput> | void {
    const command = new DescribeMetricAttributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a recipe.</p>
   *          <p>A recipe contains three items:</p>
   *          <ul>
   *             <li>
   *                <p>An algorithm that trains a model.</p>
   *             </li>
   *             <li>
   *                <p>Hyperparameters that govern the training.</p>
   *             </li>
   *             <li>
   *                <p>Feature transformation information for modifying the input data before training.</p>
   *             </li>
   *          </ul>
   *          <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a
   *       solution with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> API.
   *       <code>CreateSolution</code> trains a model by using the algorithm
   *       in the specified recipe and a training dataset. The solution, when deployed as a campaign,
   *       can provide recommendations using the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
   */
  public describeRecipe(
    args: DescribeRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecipeCommandOutput>;
  public describeRecipe(
    args: DescribeRecipeCommandInput,
    cb: (err: any, data?: DescribeRecipeCommandOutput) => void
  ): void;
  public describeRecipe(
    args: DescribeRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecipeCommandOutput) => void
  ): void;
  public describeRecipe(
    args: DescribeRecipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRecipeCommandOutput) => void),
    cb?: (err: any, data?: DescribeRecipeCommandOutput) => void
  ): Promise<DescribeRecipeCommandOutput> | void {
    const command = new DescribeRecipeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the given recommender, including its status.</p>
   *          <p>A recommender can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>STOP PENDING > STOP IN_PROGRESS > INACTIVE > START PENDING > START IN_PROGRESS > ACTIVE</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   *          <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the
   *       <code>failureReason</code> key, which describes why.</p>
   *          <p>The <code>modelMetrics</code> key is null when
   *       the recommender is being created or deleted.</p>
   *          <p>For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>
   */
  public describeRecommender(
    args: DescribeRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecommenderCommandOutput>;
  public describeRecommender(
    args: DescribeRecommenderCommandInput,
    cb: (err: any, data?: DescribeRecommenderCommandOutput) => void
  ): void;
  public describeRecommender(
    args: DescribeRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecommenderCommandOutput) => void
  ): void;
  public describeRecommender(
    args: DescribeRecommenderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRecommenderCommandOutput) => void),
    cb?: (err: any, data?: DescribeRecommenderCommandOutput) => void
  ): Promise<DescribeRecommenderCommandOutput> | void {
    const command = new DescribeRecommenderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a schema. For more information on schemas, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.</p>
   */
  public describeSchema(
    args: DescribeSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSchemaCommandOutput>;
  public describeSchema(
    args: DescribeSchemaCommandInput,
    cb: (err: any, data?: DescribeSchemaCommandOutput) => void
  ): void;
  public describeSchema(
    args: DescribeSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSchemaCommandOutput) => void
  ): void;
  public describeSchema(
    args: DescribeSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSchemaCommandOutput) => void),
    cb?: (err: any, data?: DescribeSchemaCommandOutput) => void
  ): Promise<DescribeSchemaCommandOutput> | void {
    const command = new DescribeSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a solution.
   *       For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.</p>
   */
  public describeSolution(
    args: DescribeSolutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSolutionCommandOutput>;
  public describeSolution(
    args: DescribeSolutionCommandInput,
    cb: (err: any, data?: DescribeSolutionCommandOutput) => void
  ): void;
  public describeSolution(
    args: DescribeSolutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSolutionCommandOutput) => void
  ): void;
  public describeSolution(
    args: DescribeSolutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSolutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeSolutionCommandOutput) => void
  ): Promise<DescribeSolutionCommandOutput> | void {
    const command = new DescribeSolutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a specific version of a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
   *          </p>
   */
  public describeSolutionVersion(
    args: DescribeSolutionVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSolutionVersionCommandOutput>;
  public describeSolutionVersion(
    args: DescribeSolutionVersionCommandInput,
    cb: (err: any, data?: DescribeSolutionVersionCommandOutput) => void
  ): void;
  public describeSolutionVersion(
    args: DescribeSolutionVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSolutionVersionCommandOutput) => void
  ): void;
  public describeSolutionVersion(
    args: DescribeSolutionVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSolutionVersionCommandOutput) => void),
    cb?: (err: any, data?: DescribeSolutionVersionCommandOutput) => void
  ): Promise<DescribeSolutionVersionCommandOutput> | void {
    const command = new DescribeSolutionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the metrics for the specified solution version.</p>
   */
  public getSolutionMetrics(
    args: GetSolutionMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolutionMetricsCommandOutput>;
  public getSolutionMetrics(
    args: GetSolutionMetricsCommandInput,
    cb: (err: any, data?: GetSolutionMetricsCommandOutput) => void
  ): void;
  public getSolutionMetrics(
    args: GetSolutionMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolutionMetricsCommandOutput) => void
  ): void;
  public getSolutionMetrics(
    args: GetSolutionMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSolutionMetricsCommandOutput) => void),
    cb?: (err: any, data?: GetSolutionMetricsCommandOutput) => void
  ): Promise<GetSolutionMetricsCommandOutput> | void {
    const command = new GetSolutionMetricsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of the batch inference jobs that have been performed off of a solution
   *       version.</p>
   */
  public listBatchInferenceJobs(
    args: ListBatchInferenceJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBatchInferenceJobsCommandOutput>;
  public listBatchInferenceJobs(
    args: ListBatchInferenceJobsCommandInput,
    cb: (err: any, data?: ListBatchInferenceJobsCommandOutput) => void
  ): void;
  public listBatchInferenceJobs(
    args: ListBatchInferenceJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBatchInferenceJobsCommandOutput) => void
  ): void;
  public listBatchInferenceJobs(
    args: ListBatchInferenceJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBatchInferenceJobsCommandOutput) => void),
    cb?: (err: any, data?: ListBatchInferenceJobsCommandOutput) => void
  ): Promise<ListBatchInferenceJobsCommandOutput> | void {
    const command = new ListBatchInferenceJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of the batch segment jobs that have been performed off of a solution
   *       version that you specify.</p>
   */
  public listBatchSegmentJobs(
    args: ListBatchSegmentJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBatchSegmentJobsCommandOutput>;
  public listBatchSegmentJobs(
    args: ListBatchSegmentJobsCommandInput,
    cb: (err: any, data?: ListBatchSegmentJobsCommandOutput) => void
  ): void;
  public listBatchSegmentJobs(
    args: ListBatchSegmentJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBatchSegmentJobsCommandOutput) => void
  ): void;
  public listBatchSegmentJobs(
    args: ListBatchSegmentJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBatchSegmentJobsCommandOutput) => void),
    cb?: (err: any, data?: ListBatchSegmentJobsCommandOutput) => void
  ): Promise<ListBatchSegmentJobsCommandOutput> | void {
    const command = new ListBatchSegmentJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of campaigns that use the given solution.
   *       When a solution is not specified, all the campaigns associated with the account are listed.
   *       The response provides the properties for each campaign, including the Amazon Resource Name (ARN).
   *       For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
   */
  public listCampaigns(
    args: ListCampaignsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCampaignsCommandOutput>;
  public listCampaigns(
    args: ListCampaignsCommandInput,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;
  public listCampaigns(
    args: ListCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCampaignsCommandOutput) => void
  ): void;
  public listCampaigns(
    args: ListCampaignsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCampaignsCommandOutput) => void),
    cb?: (err: any, data?: ListCampaignsCommandOutput) => void
  ): Promise<ListCampaignsCommandOutput> | void {
    const command = new ListCampaignsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of dataset export jobs that use the given dataset. When
   *       a dataset is not specified, all the dataset export jobs associated with
   *       the account are listed. The response provides the properties for each
   *       dataset export job, including the Amazon Resource Name (ARN). For more
   *       information on dataset export jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>. For more information on datasets, see
   *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p>
   */
  public listDatasetExportJobs(
    args: ListDatasetExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetExportJobsCommandOutput>;
  public listDatasetExportJobs(
    args: ListDatasetExportJobsCommandInput,
    cb: (err: any, data?: ListDatasetExportJobsCommandOutput) => void
  ): void;
  public listDatasetExportJobs(
    args: ListDatasetExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetExportJobsCommandOutput) => void
  ): void;
  public listDatasetExportJobs(
    args: ListDatasetExportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasetExportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetExportJobsCommandOutput) => void
  ): Promise<ListDatasetExportJobsCommandOutput> | void {
    const command = new ListDatasetExportJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of dataset groups. The response provides the properties
   *       for each dataset group, including the Amazon Resource Name (ARN). For more
   *       information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.</p>
   */
  public listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetGroupsCommandOutput>;
  public listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    cb: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): void;
  public listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): void;
  public listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasetGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): Promise<ListDatasetGroupsCommandOutput> | void {
    const command = new ListDatasetGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of dataset import jobs that use the given dataset. When
   *       a dataset is not specified, all the dataset import jobs associated with
   *       the account are listed. The response provides the properties for each
   *       dataset import job, including the Amazon Resource Name (ARN). For more
   *       information on dataset import jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>. For more information on datasets, see
   *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p>
   */
  public listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetImportJobsCommandOutput>;
  public listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    cb: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): void;
  public listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): void;
  public listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasetImportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): Promise<ListDatasetImportJobsCommandOutput> | void {
    const command = new ListDatasetImportJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the list of datasets contained in the given dataset group. The
   *       response provides the properties for each dataset, including the Amazon
   *       Resource Name (ARN). For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p>
   */
  public listDatasets(
    args: ListDatasetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetsCommandOutput>;
  public listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
  public listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
  public listDatasets(
    args: ListDatasetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasetsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetsCommandOutput) => void
  ): Promise<ListDatasetsCommandOutput> | void {
    const command = new ListDatasetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the list of event trackers associated with the account.
   *       The response provides the properties for each event tracker, including the Amazon Resource
   *       Name (ARN) and tracking ID. For more
   *       information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.</p>
   */
  public listEventTrackers(
    args: ListEventTrackersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventTrackersCommandOutput>;
  public listEventTrackers(
    args: ListEventTrackersCommandInput,
    cb: (err: any, data?: ListEventTrackersCommandOutput) => void
  ): void;
  public listEventTrackers(
    args: ListEventTrackersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventTrackersCommandOutput) => void
  ): void;
  public listEventTrackers(
    args: ListEventTrackersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventTrackersCommandOutput) => void),
    cb?: (err: any, data?: ListEventTrackersCommandOutput) => void
  ): Promise<ListEventTrackersCommandOutput> | void {
    const command = new ListEventTrackersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all filters that belong to a given dataset group.</p>
   */
  public listFilters(args: ListFiltersCommandInput, options?: __HttpHandlerOptions): Promise<ListFiltersCommandOutput>;
  public listFilters(args: ListFiltersCommandInput, cb: (err: any, data?: ListFiltersCommandOutput) => void): void;
  public listFilters(
    args: ListFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFiltersCommandOutput) => void
  ): void;
  public listFilters(
    args: ListFiltersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFiltersCommandOutput) => void),
    cb?: (err: any, data?: ListFiltersCommandOutput) => void
  ): Promise<ListFiltersCommandOutput> | void {
    const command = new ListFiltersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the metrics for the metric attribution.</p>
   */
  public listMetricAttributionMetrics(
    args: ListMetricAttributionMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMetricAttributionMetricsCommandOutput>;
  public listMetricAttributionMetrics(
    args: ListMetricAttributionMetricsCommandInput,
    cb: (err: any, data?: ListMetricAttributionMetricsCommandOutput) => void
  ): void;
  public listMetricAttributionMetrics(
    args: ListMetricAttributionMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetricAttributionMetricsCommandOutput) => void
  ): void;
  public listMetricAttributionMetrics(
    args: ListMetricAttributionMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMetricAttributionMetricsCommandOutput) => void),
    cb?: (err: any, data?: ListMetricAttributionMetricsCommandOutput) => void
  ): Promise<ListMetricAttributionMetricsCommandOutput> | void {
    const command = new ListMetricAttributionMetricsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists metric attributions.</p>
   */
  public listMetricAttributions(
    args: ListMetricAttributionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMetricAttributionsCommandOutput>;
  public listMetricAttributions(
    args: ListMetricAttributionsCommandInput,
    cb: (err: any, data?: ListMetricAttributionsCommandOutput) => void
  ): void;
  public listMetricAttributions(
    args: ListMetricAttributionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetricAttributionsCommandOutput) => void
  ): void;
  public listMetricAttributions(
    args: ListMetricAttributionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMetricAttributionsCommandOutput) => void),
    cb?: (err: any, data?: ListMetricAttributionsCommandOutput) => void
  ): Promise<ListMetricAttributionsCommandOutput> | void {
    const command = new ListMetricAttributionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of available recipes. The response provides the properties
   *        for each recipe, including the recipe's Amazon Resource Name (ARN).</p>
   */
  public listRecipes(args: ListRecipesCommandInput, options?: __HttpHandlerOptions): Promise<ListRecipesCommandOutput>;
  public listRecipes(args: ListRecipesCommandInput, cb: (err: any, data?: ListRecipesCommandOutput) => void): void;
  public listRecipes(
    args: ListRecipesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecipesCommandOutput) => void
  ): void;
  public listRecipes(
    args: ListRecipesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecipesCommandOutput) => void),
    cb?: (err: any, data?: ListRecipesCommandOutput) => void
  ): Promise<ListRecipesCommandOutput> | void {
    const command = new ListRecipesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of recommenders in a given Domain dataset group.
   *       When a Domain dataset group is not specified, all the recommenders associated with the account are listed.
   *       The response provides the properties for each recommender, including the Amazon Resource Name (ARN).
   *       For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>
   */
  public listRecommenders(
    args: ListRecommendersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendersCommandOutput>;
  public listRecommenders(
    args: ListRecommendersCommandInput,
    cb: (err: any, data?: ListRecommendersCommandOutput) => void
  ): void;
  public listRecommenders(
    args: ListRecommendersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendersCommandOutput) => void
  ): void;
  public listRecommenders(
    args: ListRecommendersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecommendersCommandOutput) => void),
    cb?: (err: any, data?: ListRecommendersCommandOutput) => void
  ): Promise<ListRecommendersCommandOutput> | void {
    const command = new ListRecommendersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the list of schemas associated with the account. The response provides the
   *       properties for each schema, including the Amazon Resource Name (ARN).
   *       For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.</p>
   */
  public listSchemas(args: ListSchemasCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemasCommandOutput>;
  public listSchemas(args: ListSchemasCommandInput, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
  public listSchemas(
    args: ListSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
  public listSchemas(
    args: ListSchemasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSchemasCommandOutput) => void),
    cb?: (err: any, data?: ListSchemasCommandOutput) => void
  ): Promise<ListSchemasCommandOutput> | void {
    const command = new ListSchemasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of solutions that use the given dataset group.
   *       When a dataset group is not specified, all the solutions associated with the account are listed.
   *       The response provides the properties for each solution, including the Amazon Resource Name (ARN).
   *       For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.</p>
   */
  public listSolutions(
    args: ListSolutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolutionsCommandOutput>;
  public listSolutions(
    args: ListSolutionsCommandInput,
    cb: (err: any, data?: ListSolutionsCommandOutput) => void
  ): void;
  public listSolutions(
    args: ListSolutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolutionsCommandOutput) => void
  ): void;
  public listSolutions(
    args: ListSolutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSolutionsCommandOutput) => void),
    cb?: (err: any, data?: ListSolutionsCommandOutput) => void
  ): Promise<ListSolutionsCommandOutput> | void {
    const command = new ListSolutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of solution versions for the given solution. When a solution is not
   *       specified, all the solution versions associated with the account are listed. The response
   *       provides the properties for each solution version, including the Amazon Resource Name (ARN).</p>
   */
  public listSolutionVersions(
    args: ListSolutionVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolutionVersionsCommandOutput>;
  public listSolutionVersions(
    args: ListSolutionVersionsCommandInput,
    cb: (err: any, data?: ListSolutionVersionsCommandOutput) => void
  ): void;
  public listSolutionVersions(
    args: ListSolutionVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolutionVersionsCommandOutput) => void
  ): void;
  public listSolutionVersions(
    args: ListSolutionVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSolutionVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListSolutionVersionsCommandOutput) => void
  ): Promise<ListSolutionVersionsCommandOutput> | void {
    const command = new ListSolutionVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get a list of <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> attached to a resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a recommender that is INACTIVE. Starting a recommender does not
   *       create any new models, but resumes billing and automatic retraining for the recommender.</p>
   */
  public startRecommender(
    args: StartRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRecommenderCommandOutput>;
  public startRecommender(
    args: StartRecommenderCommandInput,
    cb: (err: any, data?: StartRecommenderCommandOutput) => void
  ): void;
  public startRecommender(
    args: StartRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRecommenderCommandOutput) => void
  ): void;
  public startRecommender(
    args: StartRecommenderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartRecommenderCommandOutput) => void),
    cb?: (err: any, data?: StartRecommenderCommandOutput) => void
  ): Promise<StartRecommenderCommandOutput> | void {
    const command = new StartRecommenderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender.</p>
   */
  public stopRecommender(
    args: StopRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRecommenderCommandOutput>;
  public stopRecommender(
    args: StopRecommenderCommandInput,
    cb: (err: any, data?: StopRecommenderCommandOutput) => void
  ): void;
  public stopRecommender(
    args: StopRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRecommenderCommandOutput) => void
  ): void;
  public stopRecommender(
    args: StopRecommenderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopRecommenderCommandOutput) => void),
    cb?: (err: any, data?: StopRecommenderCommandOutput) => void
  ): Promise<StopRecommenderCommandOutput> | void {
    const command = new StopRecommenderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS.
   *       </p>
   *          <p>Depending on the current state of the solution version, the solution version state changes as follows:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE_PENDING > CREATE_STOPPED</p>
   *                <p>or</p>
   *             </li>
   *             <li>
   *                <p>CREATE_IN_PROGRESS > CREATE_STOPPING > CREATE_STOPPED</p>
   *             </li>
   *          </ul>
   *          <p>You are billed for all of the training completed up
   *       until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>
   */
  public stopSolutionVersionCreation(
    args: StopSolutionVersionCreationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSolutionVersionCreationCommandOutput>;
  public stopSolutionVersionCreation(
    args: StopSolutionVersionCreationCommandInput,
    cb: (err: any, data?: StopSolutionVersionCreationCommandOutput) => void
  ): void;
  public stopSolutionVersionCreation(
    args: StopSolutionVersionCreationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSolutionVersionCreationCommandOutput) => void
  ): void;
  public stopSolutionVersionCreation(
    args: StopSolutionVersionCreationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopSolutionVersionCreationCommandOutput) => void),
    cb?: (err: any, data?: StopSolutionVersionCreationCommandOutput) => void
  ): Promise<StopSolutionVersionCreationCommandOutput> | void {
    const command = new StopSolutionVersionCreationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Add a list of tags to a resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove <a href="https://docs.aws.amazon.com/personalize/latest/dev/tagging-resources.html">tags</a> that are attached to a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a campaign by either deploying a new solution or changing the value of the
   *       campaign's <code>minProvisionedTPS</code> parameter.</p>
   *          <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED.
   *       Check the campaign status using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> operation.</p>
   *
   *          <note>
   *             <p>You can still get recommendations from a campaign while an update is in progress.
   *       The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is <code>Active</code>.
   *     </p>
   *          </note>
   *
   *          <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
   */
  public updateCampaign(
    args: UpdateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignCommandOutput>;
  public updateCampaign(
    args: UpdateCampaignCommandInput,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;
  public updateCampaign(
    args: UpdateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;
  public updateCampaign(
    args: UpdateCampaignCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCampaignCommandOutput) => void),
    cb?: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): Promise<UpdateCampaignCommandOutput> | void {
    const command = new UpdateCampaignCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a metric attribution.</p>
   */
  public updateMetricAttribution(
    args: UpdateMetricAttributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMetricAttributionCommandOutput>;
  public updateMetricAttribution(
    args: UpdateMetricAttributionCommandInput,
    cb: (err: any, data?: UpdateMetricAttributionCommandOutput) => void
  ): void;
  public updateMetricAttribution(
    args: UpdateMetricAttributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMetricAttributionCommandOutput) => void
  ): void;
  public updateMetricAttribution(
    args: UpdateMetricAttributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMetricAttributionCommandOutput) => void),
    cb?: (err: any, data?: UpdateMetricAttributionCommandOutput) => void
  ): Promise<UpdateMetricAttributionCommandOutput> | void {
    const command = new UpdateMetricAttributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the recommender to modify the recommender configuration.</p>
   */
  public updateRecommender(
    args: UpdateRecommenderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecommenderCommandOutput>;
  public updateRecommender(
    args: UpdateRecommenderCommandInput,
    cb: (err: any, data?: UpdateRecommenderCommandOutput) => void
  ): void;
  public updateRecommender(
    args: UpdateRecommenderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecommenderCommandOutput) => void
  ): void;
  public updateRecommender(
    args: UpdateRecommenderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRecommenderCommandOutput) => void),
    cb?: (err: any, data?: UpdateRecommenderCommandOutput) => void
  ): Promise<UpdateRecommenderCommandOutput> | void {
    const command = new UpdateRecommenderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
