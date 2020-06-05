import { PersonalizeClient } from "./PersonalizeClient";
import {
  CreateBatchInferenceJobCommand,
  CreateBatchInferenceJobCommandInput,
  CreateBatchInferenceJobCommandOutput
} from "./commands/CreateBatchInferenceJobCommand";
import {
  CreateCampaignCommand,
  CreateCampaignCommandInput,
  CreateCampaignCommandOutput
} from "./commands/CreateCampaignCommand";
import {
  CreateDatasetCommand,
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput
} from "./commands/CreateDatasetCommand";
import {
  CreateDatasetGroupCommand,
  CreateDatasetGroupCommandInput,
  CreateDatasetGroupCommandOutput
} from "./commands/CreateDatasetGroupCommand";
import {
  CreateDatasetImportJobCommand,
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput
} from "./commands/CreateDatasetImportJobCommand";
import {
  CreateEventTrackerCommand,
  CreateEventTrackerCommandInput,
  CreateEventTrackerCommandOutput
} from "./commands/CreateEventTrackerCommand";
import {
  CreateSchemaCommand,
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput
} from "./commands/CreateSchemaCommand";
import {
  CreateSolutionCommand,
  CreateSolutionCommandInput,
  CreateSolutionCommandOutput
} from "./commands/CreateSolutionCommand";
import {
  CreateSolutionVersionCommand,
  CreateSolutionVersionCommandInput,
  CreateSolutionVersionCommandOutput
} from "./commands/CreateSolutionVersionCommand";
import {
  DeleteCampaignCommand,
  DeleteCampaignCommandInput,
  DeleteCampaignCommandOutput
} from "./commands/DeleteCampaignCommand";
import {
  DeleteDatasetCommand,
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput
} from "./commands/DeleteDatasetCommand";
import {
  DeleteDatasetGroupCommand,
  DeleteDatasetGroupCommandInput,
  DeleteDatasetGroupCommandOutput
} from "./commands/DeleteDatasetGroupCommand";
import {
  DeleteEventTrackerCommand,
  DeleteEventTrackerCommandInput,
  DeleteEventTrackerCommandOutput
} from "./commands/DeleteEventTrackerCommand";
import {
  DeleteSchemaCommand,
  DeleteSchemaCommandInput,
  DeleteSchemaCommandOutput
} from "./commands/DeleteSchemaCommand";
import {
  DeleteSolutionCommand,
  DeleteSolutionCommandInput,
  DeleteSolutionCommandOutput
} from "./commands/DeleteSolutionCommand";
import {
  DescribeAlgorithmCommand,
  DescribeAlgorithmCommandInput,
  DescribeAlgorithmCommandOutput
} from "./commands/DescribeAlgorithmCommand";
import {
  DescribeBatchInferenceJobCommand,
  DescribeBatchInferenceJobCommandInput,
  DescribeBatchInferenceJobCommandOutput
} from "./commands/DescribeBatchInferenceJobCommand";
import {
  DescribeCampaignCommand,
  DescribeCampaignCommandInput,
  DescribeCampaignCommandOutput
} from "./commands/DescribeCampaignCommand";
import {
  DescribeDatasetCommand,
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput
} from "./commands/DescribeDatasetCommand";
import {
  DescribeDatasetGroupCommand,
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput
} from "./commands/DescribeDatasetGroupCommand";
import {
  DescribeDatasetImportJobCommand,
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput
} from "./commands/DescribeDatasetImportJobCommand";
import {
  DescribeEventTrackerCommand,
  DescribeEventTrackerCommandInput,
  DescribeEventTrackerCommandOutput
} from "./commands/DescribeEventTrackerCommand";
import {
  DescribeFeatureTransformationCommand,
  DescribeFeatureTransformationCommandInput,
  DescribeFeatureTransformationCommandOutput
} from "./commands/DescribeFeatureTransformationCommand";
import {
  DescribeRecipeCommand,
  DescribeRecipeCommandInput,
  DescribeRecipeCommandOutput
} from "./commands/DescribeRecipeCommand";
import {
  DescribeSchemaCommand,
  DescribeSchemaCommandInput,
  DescribeSchemaCommandOutput
} from "./commands/DescribeSchemaCommand";
import {
  DescribeSolutionCommand,
  DescribeSolutionCommandInput,
  DescribeSolutionCommandOutput
} from "./commands/DescribeSolutionCommand";
import {
  DescribeSolutionVersionCommand,
  DescribeSolutionVersionCommandInput,
  DescribeSolutionVersionCommandOutput
} from "./commands/DescribeSolutionVersionCommand";
import {
  GetSolutionMetricsCommand,
  GetSolutionMetricsCommandInput,
  GetSolutionMetricsCommandOutput
} from "./commands/GetSolutionMetricsCommand";
import {
  ListBatchInferenceJobsCommand,
  ListBatchInferenceJobsCommandInput,
  ListBatchInferenceJobsCommandOutput
} from "./commands/ListBatchInferenceJobsCommand";
import {
  ListCampaignsCommand,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput
} from "./commands/ListCampaignsCommand";
import {
  ListDatasetGroupsCommand,
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput
} from "./commands/ListDatasetGroupsCommand";
import {
  ListDatasetImportJobsCommand,
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput
} from "./commands/ListDatasetImportJobsCommand";
import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput
} from "./commands/ListDatasetsCommand";
import {
  ListEventTrackersCommand,
  ListEventTrackersCommandInput,
  ListEventTrackersCommandOutput
} from "./commands/ListEventTrackersCommand";
import {
  ListRecipesCommand,
  ListRecipesCommandInput,
  ListRecipesCommandOutput
} from "./commands/ListRecipesCommand";
import {
  ListSchemasCommand,
  ListSchemasCommandInput,
  ListSchemasCommandOutput
} from "./commands/ListSchemasCommand";
import {
  ListSolutionVersionsCommand,
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput
} from "./commands/ListSolutionVersionsCommand";
import {
  ListSolutionsCommand,
  ListSolutionsCommandInput,
  ListSolutionsCommandOutput
} from "./commands/ListSolutionsCommand";
import {
  UpdateCampaignCommand,
  UpdateCampaignCommandInput,
  UpdateCampaignCommandOutput
} from "./commands/UpdateCampaignCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Personalize is a machine learning service that makes it easy to add individualized
 *       recommendations to customers.</p>
 */
export class Personalize extends PersonalizeClient {
  /**
   * <p>Creates a batch inference job. The operation can handle up to 50 million records and the
   *       input file must be in JSON format. For more information, see <a>recommendations-batch</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateBatchInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: CreateBatchInferenceJobCommandOutput) => void
  ): Promise<CreateBatchInferenceJobCommandOutput> | void {
    const command = new CreateBatchInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a campaign by deploying a solution version. When a client calls the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
   *       and
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a>
   *       APIs, a campaign is specified in the request.</p>
   *
   *          <p>
   *             <b>Minimum Provisioned TPS and Auto-Scaling</b>
   *          </p>
   *          <p>A transaction is a single <code>GetRecommendations</code> or
   *        <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput
   *        and unit of billing for Amazon Personalize. The minimum provisioned TPS
   *        (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by
   *        Amazon Personalize, and thus, the minimum billing charge. If your TPS increases beyond
   *        <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down,
   *        but never below <code>minProvisionedTPS</code>, to maintain a 70% utilization.
   *        There's a short time delay while the capacity is increased that might cause loss of
   *        transactions. It's recommended to start with a low <code>minProvisionedTPS</code>, track
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
   *          <p>To get the campaign status, call <a>DescribeCampaign</a>.</p>
   *          <note>
   *             <p>Wait until the <code>status</code> of the campaign
   *         is <code>ACTIVE</code> before asking the campaign for recommendations.</p>
   *          </note>
   *
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>ListCampaigns</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeCampaign</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateCampaign</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteCampaign</a>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateCampaignCommandOutput) => void),
    cb?: (err: any, data?: CreateCampaignCommandOutput) => void
  ): Promise<CreateCampaignCommandOutput> | void {
    const command = new CreateCampaignCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an empty dataset and adds it to the specified dataset group. Use
   *       <a>CreateDatasetImportJob</a> to import your training data to a dataset.</p>
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
   *          <p>Each dataset type has an associated schema with required field types. Only the
   *       <code>Interactions</code> dataset is required in order to train a model (also referred to as
   *       creating a solution).</p>
   *          <p>A dataset can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   *          <p>To get the status of the dataset, call <a>DescribeDataset</a>.</p>
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateDatasetGroup</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListDatasets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeDataset</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteDataset</a>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDatasetCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetCommandOutput) => void
  ): Promise<CreateDatasetCommandOutput> | void {
    const command = new CreateDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an empty dataset group. A dataset group contains related datasets that supply
   *       data for training a model. A dataset group can contain at most three datasets,
   *       one for each type of dataset:</p>
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
   *          <p>To train a model (create a solution), a dataset group that contains an
   *       <code>Interactions</code> dataset is required. Call <a>CreateDataset</a>
   *       to add a dataset to the group.</p>
   *          <p>A dataset group can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING</p>
   *             </li>
   *          </ul>
   *          <p>To get the status of the dataset group, call <a>DescribeDatasetGroup</a>.
   *       If the status shows as CREATE FAILED, the response includes a
   *       <code>failureReason</code> key, which describes why the creation failed.</p>
   *          <note>
   *             <p>You must wait until the <code>status</code> of the dataset
   *         group is <code>ACTIVE</code> before adding a dataset to the group.</p>
   *          </note>
   *          <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group.
   *       If you specify a KMS key, you must also include an AWS Identity and Access Management (IAM) role
   *       that has permission to access the key.</p>
   *          <p class="title">
   *             <b>APIs that require a dataset group ARN in the request</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateDataset</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateEventTracker</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateSolution</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>ListDatasetGroups</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeDatasetGroup</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteDatasetGroup</a>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDatasetGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): Promise<CreateDatasetGroupCommandOutput> | void {
    const command = new CreateDatasetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a job that imports training data from your data source (an Amazon S3 bucket)
   *       to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data,
   *       you must specify an AWS Identity and Access Management (IAM) role that has permission to read from the data source.</p>
   *          <important>
   *             <p>The dataset import job replaces any previous data in the dataset.</p>
   *          </important>
   *          <p>
   *             <b>Status</b>
   *          </p>
   *          <p>A dataset import job can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *          </ul>
   *          <p>To get the status of the import job, call <a>DescribeDatasetImportJob</a>,
   *       providing the Amazon Resource Name (ARN) of the dataset import job.
   *       The dataset import is complete when the status shows as ACTIVE.
   *       If the status shows as CREATE FAILED, the response includes a
   *       <code>failureReason</code> key, which describes why the job failed.</p>
   *          <note>
   *             <p>Importing takes time. You must wait until the status
   *         shows as ACTIVE before training a model using the dataset.</p>
   *          </note>
   *
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>ListDatasetImportJobs</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeDatasetImportJob</a>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDatasetImportJobCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): Promise<CreateDatasetImportJobCommandOutput> | void {
    const command = new CreateDatasetImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an event tracker that you use when sending event data to the specified dataset
   *       group using the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
   *          <p>When Amazon Personalize creates an event tracker, it also
   *       creates an <i>event-interactions</i> dataset in the dataset group associated
   *       with the event tracker.
   *       The event-interactions dataset stores the event data from the <code>PutEvents</code> call.
   *       The contents of this dataset are not available to the user.</p>
   *          <note>
   *             <p>Only one event tracker can be associated with a dataset group. You will get
   *         an error if you call <code>CreateEventTracker</code> using the same dataset group as an
   *         existing event tracker.</p>
   *          </note>
   *          <p>When you send event data you include your tracking ID. The tracking ID identifies
   *       the customer and authorizes the customer to send the data.</p>
   *          <p>The event tracker can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *             <li>
   *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
   *             </li>
   *          </ul>
   *          <p>To get the status of the event tracker, call <a>DescribeEventTracker</a>.</p>
   *          <note>
   *             <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p>
   *          </note>
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>ListEventTrackers</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeEventTracker</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteEventTracker</a>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateEventTrackerCommandOutput) => void),
    cb?: (err: any, data?: CreateEventTrackerCommandOutput) => void
  ): Promise<CreateEventTrackerCommandOutput> | void {
    const command = new CreateEventTrackerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon Personalize schema from the specified schema string. The schema you create
   *       must be in Avro JSON format.</p>
   *          <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset
   *       type and has a set of required field and keywords.
   *       You specify a schema when you call <a>CreateDataset</a>.</p>
   *
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>ListSchemas</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeSchema</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteSchema</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createSchema(
    args: CreateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSchemaCommandOutput>;
  public createSchema(
    args: CreateSchemaCommandInput,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;
  public createSchema(
    args: CreateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;
  public createSchema(
    args: CreateSchemaCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateSchemaCommandOutput) => void),
    cb?: (err: any, data?: CreateSchemaCommandOutput) => void
  ): Promise<CreateSchemaCommandOutput> | void {
    const command = new CreateSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates the configuration for training a model. A trained model is known as
   *       a solution. After the configuration is created, you train the model (create a solution)
   *       by calling the <a>CreateSolutionVersion</a> operation. Every time you call
   *       <code>CreateSolutionVersion</code>, a new version of the solution is created.</p>
   *          <p>After creating a solution version, you check its accuracy by calling
   *       <a>GetSolutionMetrics</a>. When you are satisfied with the version, you
   *       deploy it using <a>CreateCampaign</a>. The campaign provides recommendations
   *       to a client through the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
   *          <p>To train a model, Amazon Personalize requires training data and a recipe. The training data
   *       comes from the dataset group that you provide in the request. A recipe specifies
   *       the training algorithm and a feature transformation. You can specify one of the predefined
   *       recipes provided by Amazon Personalize. Alternatively, you can specify
   *       <code>performAutoML</code> and Amazon Personalize will analyze your data and select the
   *       optimum USER_PERSONALIZATION recipe for you.</p>
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
   *          <p>To get the status of the solution, call <a>DescribeSolution</a>. Wait
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
   *                   <a>ListSolutions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateSolutionVersion</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeSolution</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteSolution</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>ListSolutionVersions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeSolutionVersion</a>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateSolutionCommandOutput) => void),
    cb?: (err: any, data?: CreateSolutionCommandOutput) => void
  ): Promise<CreateSolutionCommandOutput> | void {
    const command = new CreateSolutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Trains or retrains an active solution. A solution is created using the <a>CreateSolution</a> operation and must be in the ACTIVE state before calling
   *         <code>CreateSolutionVersion</code>. A new version of the solution is created every time you
   *       call this operation.</p>
   *          <p>
   *             <b>Status</b>
   *          </p>
   *          <p>A solution version can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
   *             </li>
   *          </ul>
   *          <p>To get the status of the version, call <a>DescribeSolutionVersion</a>. Wait
   *       until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p>
   *          <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code>
   *       key, which describes why the job failed.</p>
   *          <p class="title">
   *             <b>Related APIs</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>ListSolutionVersions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeSolutionVersion</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>ListSolutions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateSolution</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeSolution</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteSolution</a>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateSolutionVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateSolutionVersionCommandOutput) => void
  ): Promise<CreateSolutionVersionCommandOutput> | void {
    const command = new CreateSolutionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
   *       For more information on campaigns, see <a>CreateCampaign</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteCampaignCommandOutput) => void),
    cb?: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): Promise<DeleteCampaignCommandOutput> | void {
    const command = new DeleteCampaignCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a dataset. You can't delete a dataset if an associated
   *       <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the
   *       CREATE PENDING or IN PROGRESS state. For more information on datasets, see
   *       <a>CreateDataset</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDatasetCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): Promise<DeleteDatasetCommandOutput> | void {
    const command = new DeleteDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a dataset group. Before you delete a dataset group, you must delete
   *       the following:</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDatasetGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): Promise<DeleteDatasetGroupCommandOutput> | void {
    const command = new DeleteDatasetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the event tracker. Does not delete the event-interactions dataset from
   *         the associated dataset group. For more
   *         information on event trackers, see <a>CreateEventTracker</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteEventTrackerCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventTrackerCommandOutput) => void
  ): Promise<DeleteEventTrackerCommandOutput> | void {
    const command = new DeleteEventTrackerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a schema. Before deleting a schema, you must delete all
   *       datasets referencing the schema. For more information on schemas, see
   *       <a>CreateSchema</a>.</p>
   */
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaCommandOutput>;
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteSchemaCommandOutput) => void),
    cb?: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): Promise<DeleteSchemaCommandOutput> | void {
    const command = new DeleteSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes all versions of a solution and the <code>Solution</code> object itself.
   *       Before deleting a solution, you must delete all campaigns based on
   *       the solution. To determine what campaigns are using the solution, call
   *       <a>ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution.
   *       You can't delete a solution if an associated <code>SolutionVersion</code> is in the
   *       CREATE PENDING or IN PROGRESS state.
   *       For more information on solutions, see <a>CreateSolution</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteSolutionCommandOutput) => void),
    cb?: (err: any, data?: DeleteSolutionCommandOutput) => void
  ): Promise<DeleteSolutionCommandOutput> | void {
    const command = new DeleteSolutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAlgorithmCommandOutput) => void),
    cb?: (err: any, data?: DescribeAlgorithmCommandOutput) => void
  ): Promise<DescribeAlgorithmCommandOutput> | void {
    const command = new DescribeAlgorithmCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeBatchInferenceJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeBatchInferenceJobCommandOutput) => void
  ): Promise<DescribeBatchInferenceJobCommandOutput> | void {
    const command = new DescribeBatchInferenceJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
   *          <p>For more information on campaigns, see <a>CreateCampaign</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeCampaignCommandOutput) => void),
    cb?: (err: any, data?: DescribeCampaignCommandOutput) => void
  ): Promise<DescribeCampaignCommandOutput> | void {
    const command = new DescribeCampaignCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the given dataset. For more information on datasets, see
   *       <a>CreateDataset</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDatasetCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): Promise<DescribeDatasetCommandOutput> | void {
    const command = new DescribeDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the given dataset group. For more information on dataset groups, see
   *       <a>CreateDatasetGroup</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDatasetGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): Promise<DescribeDatasetGroupCommandOutput> | void {
    const command = new DescribeDatasetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the dataset import job created by <a>CreateDatasetImportJob</a>,
   *       including the import job status.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDatasetImportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): Promise<DescribeDatasetImportJobCommandOutput> | void {
    const command = new DescribeDatasetImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an event tracker. The response includes the <code>trackingId</code> and
   *       <code>status</code> of the event tracker.
   *       For more information on event trackers, see <a>CreateEventTracker</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEventTrackerCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventTrackerCommandOutput) => void
  ): Promise<DescribeEventTrackerCommandOutput> | void {
    const command = new DescribeEventTrackerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeFeatureTransformationCommandOutput) => void),
    cb?: (err: any, data?: DescribeFeatureTransformationCommandOutput) => void
  ): Promise<DescribeFeatureTransformationCommandOutput> | void {
    const command = new DescribeFeatureTransformationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
   *       solution with the <a>CreateSolution</a> API.
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeRecipeCommandOutput) => void),
    cb?: (err: any, data?: DescribeRecipeCommandOutput) => void
  ): Promise<DescribeRecipeCommandOutput> | void {
    const command = new DescribeRecipeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a schema. For more information on schemas, see
   *       <a>CreateSchema</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeSchemaCommandOutput) => void),
    cb?: (err: any, data?: DescribeSchemaCommandOutput) => void
  ): Promise<DescribeSchemaCommandOutput> | void {
    const command = new DescribeSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a solution.
   *       For more information on solutions, see <a>CreateSolution</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeSolutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeSolutionCommandOutput) => void
  ): Promise<DescribeSolutionCommandOutput> | void {
    const command = new DescribeSolutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a specific version of a solution. For more information on solutions, see <a>CreateSolution</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeSolutionVersionCommandOutput) => void),
    cb?: (err: any, data?: DescribeSolutionVersionCommandOutput) => void
  ): Promise<DescribeSolutionVersionCommandOutput> | void {
    const command = new DescribeSolutionVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetSolutionMetricsCommandOutput) => void),
    cb?: (err: any, data?: GetSolutionMetricsCommandOutput) => void
  ): Promise<GetSolutionMetricsCommandOutput> | void {
    const command = new GetSolutionMetricsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListBatchInferenceJobsCommandOutput) => void),
    cb?: (err: any, data?: ListBatchInferenceJobsCommandOutput) => void
  ): Promise<ListBatchInferenceJobsCommandOutput> | void {
    const command = new ListBatchInferenceJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of campaigns that use the given solution.
   *       When a solution is not specified, all the campaigns associated with the account are listed.
   *       The response provides the properties for each campaign, including the Amazon Resource Name (ARN).
   *       For more information on campaigns, see <a>CreateCampaign</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListCampaignsCommandOutput) => void),
    cb?: (err: any, data?: ListCampaignsCommandOutput) => void
  ): Promise<ListCampaignsCommandOutput> | void {
    const command = new ListCampaignsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of dataset groups. The response provides the properties for each dataset
   *       group, including the Amazon Resource Name (ARN). For more information on dataset groups, see
   *       <a>CreateDatasetGroup</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDatasetGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): Promise<ListDatasetGroupsCommandOutput> | void {
    const command = new ListDatasetGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of dataset import jobs that use the given dataset.
   *       When a dataset is not specified, all the dataset import jobs associated with the account are listed.
   *       The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN).
   *       For more information on dataset import jobs, see <a>CreateDatasetImportJob</a>.
   *       For more information on datasets, see <a>CreateDataset</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDatasetImportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): Promise<ListDatasetImportJobsCommandOutput> | void {
    const command = new ListDatasetImportJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the list of datasets contained in the given dataset group. The response
   *       provides the properties for each dataset, including
   *       the Amazon Resource Name (ARN). For more information on datasets,
   *       see <a>CreateDataset</a>.</p>
   */
  public listDatasets(
    args: ListDatasetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetsCommandOutput>;
  public listDatasets(
    args: ListDatasetsCommandInput,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
  public listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
  public listDatasets(
    args: ListDatasetsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDatasetsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetsCommandOutput) => void
  ): Promise<ListDatasetsCommandOutput> | void {
    const command = new ListDatasetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the list of event trackers associated with the account.
   *       The response provides the properties for each event tracker, including the Amazon Resource
   *       Name (ARN) and tracking ID. For more
   *       information on event trackers, see <a>CreateEventTracker</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListEventTrackersCommandOutput) => void),
    cb?: (err: any, data?: ListEventTrackersCommandOutput) => void
  ): Promise<ListEventTrackersCommandOutput> | void {
    const command = new ListEventTrackersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of available recipes. The response provides the properties
   *        for each recipe, including the recipe's Amazon Resource Name (ARN).</p>
   */
  public listRecipes(
    args: ListRecipesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecipesCommandOutput>;
  public listRecipes(
    args: ListRecipesCommandInput,
    cb: (err: any, data?: ListRecipesCommandOutput) => void
  ): void;
  public listRecipes(
    args: ListRecipesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecipesCommandOutput) => void
  ): void;
  public listRecipes(
    args: ListRecipesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRecipesCommandOutput) => void),
    cb?: (err: any, data?: ListRecipesCommandOutput) => void
  ): Promise<ListRecipesCommandOutput> | void {
    const command = new ListRecipesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the list of schemas associated with the account. The response provides the
   *       properties for each schema, including the Amazon Resource Name (ARN).
   *       For more information on schemas, see <a>CreateSchema</a>.</p>
   */
  public listSchemas(
    args: ListSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemasCommandOutput>;
  public listSchemas(
    args: ListSchemasCommandInput,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
  public listSchemas(
    args: ListSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
  public listSchemas(
    args: ListSchemasCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListSchemasCommandOutput) => void),
    cb?: (err: any, data?: ListSchemasCommandOutput) => void
  ): Promise<ListSchemasCommandOutput> | void {
    const command = new ListSchemasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of solutions that use the given dataset group.
   *       When a dataset group is not specified, all the solutions associated with the account are listed.
   *       The response provides the properties for each solution, including the Amazon Resource Name (ARN).
   *       For more information on solutions, see <a>CreateSolution</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListSolutionsCommandOutput) => void),
    cb?: (err: any, data?: ListSolutionsCommandOutput) => void
  ): Promise<ListSolutionsCommandOutput> | void {
    const command = new ListSolutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of solution versions for the given solution. When a solution is not
   *       specified, all the solution versions associated with the account are listed. The response
   *       provides the properties for each solution version, including the Amazon Resource Name (ARN).
   *       For more information on solutions, see <a>CreateSolution</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListSolutionVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListSolutionVersionsCommandOutput) => void
  ): Promise<ListSolutionVersionsCommandOutput> | void {
    const command = new ListSolutionVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a campaign by either deploying a new solution or changing the value of the
   *       campaign's <code>minProvisionedTPS</code> parameter.</p>
   *          <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED.
   *       Check the campaign status using the <a>DescribeCampaign</a> API.</p>
   *          <note>
   *             <p>You must wait until the <code>status</code> of the
   *         updated campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p>
   *          </note>
   *          <p>For more information on campaigns, see <a>CreateCampaign</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateCampaignCommandOutput) => void),
    cb?: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): Promise<UpdateCampaignCommandOutput> | void {
    const command = new UpdateCampaignCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
