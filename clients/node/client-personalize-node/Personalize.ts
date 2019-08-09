import { PersonalizeClient } from "./PersonalizeClient";
import { CreateCampaignInput } from "./types/CreateCampaignInput";
import { CreateCampaignOutput } from "./types/CreateCampaignOutput";
import { CreateDatasetGroupInput } from "./types/CreateDatasetGroupInput";
import { CreateDatasetGroupOutput } from "./types/CreateDatasetGroupOutput";
import { CreateDatasetImportJobInput } from "./types/CreateDatasetImportJobInput";
import { CreateDatasetImportJobOutput } from "./types/CreateDatasetImportJobOutput";
import { CreateDatasetInput } from "./types/CreateDatasetInput";
import { CreateDatasetOutput } from "./types/CreateDatasetOutput";
import { CreateEventTrackerInput } from "./types/CreateEventTrackerInput";
import { CreateEventTrackerOutput } from "./types/CreateEventTrackerOutput";
import { CreateSchemaInput } from "./types/CreateSchemaInput";
import { CreateSchemaOutput } from "./types/CreateSchemaOutput";
import { CreateSolutionInput } from "./types/CreateSolutionInput";
import { CreateSolutionOutput } from "./types/CreateSolutionOutput";
import { CreateSolutionVersionInput } from "./types/CreateSolutionVersionInput";
import { CreateSolutionVersionOutput } from "./types/CreateSolutionVersionOutput";
import { DeleteCampaignInput } from "./types/DeleteCampaignInput";
import { DeleteCampaignOutput } from "./types/DeleteCampaignOutput";
import { DeleteDatasetGroupInput } from "./types/DeleteDatasetGroupInput";
import { DeleteDatasetGroupOutput } from "./types/DeleteDatasetGroupOutput";
import { DeleteDatasetInput } from "./types/DeleteDatasetInput";
import { DeleteDatasetOutput } from "./types/DeleteDatasetOutput";
import { DeleteEventTrackerInput } from "./types/DeleteEventTrackerInput";
import { DeleteEventTrackerOutput } from "./types/DeleteEventTrackerOutput";
import { DeleteSchemaInput } from "./types/DeleteSchemaInput";
import { DeleteSchemaOutput } from "./types/DeleteSchemaOutput";
import { DeleteSolutionInput } from "./types/DeleteSolutionInput";
import { DeleteSolutionOutput } from "./types/DeleteSolutionOutput";
import { DescribeAlgorithmInput } from "./types/DescribeAlgorithmInput";
import { DescribeAlgorithmOutput } from "./types/DescribeAlgorithmOutput";
import { DescribeCampaignInput } from "./types/DescribeCampaignInput";
import { DescribeCampaignOutput } from "./types/DescribeCampaignOutput";
import { DescribeDatasetGroupInput } from "./types/DescribeDatasetGroupInput";
import { DescribeDatasetGroupOutput } from "./types/DescribeDatasetGroupOutput";
import { DescribeDatasetImportJobInput } from "./types/DescribeDatasetImportJobInput";
import { DescribeDatasetImportJobOutput } from "./types/DescribeDatasetImportJobOutput";
import { DescribeDatasetInput } from "./types/DescribeDatasetInput";
import { DescribeDatasetOutput } from "./types/DescribeDatasetOutput";
import { DescribeEventTrackerInput } from "./types/DescribeEventTrackerInput";
import { DescribeEventTrackerOutput } from "./types/DescribeEventTrackerOutput";
import { DescribeFeatureTransformationInput } from "./types/DescribeFeatureTransformationInput";
import { DescribeFeatureTransformationOutput } from "./types/DescribeFeatureTransformationOutput";
import { DescribeRecipeInput } from "./types/DescribeRecipeInput";
import { DescribeRecipeOutput } from "./types/DescribeRecipeOutput";
import { DescribeSchemaInput } from "./types/DescribeSchemaInput";
import { DescribeSchemaOutput } from "./types/DescribeSchemaOutput";
import { DescribeSolutionInput } from "./types/DescribeSolutionInput";
import { DescribeSolutionOutput } from "./types/DescribeSolutionOutput";
import { DescribeSolutionVersionInput } from "./types/DescribeSolutionVersionInput";
import { DescribeSolutionVersionOutput } from "./types/DescribeSolutionVersionOutput";
import { GetSolutionMetricsInput } from "./types/GetSolutionMetricsInput";
import { GetSolutionMetricsOutput } from "./types/GetSolutionMetricsOutput";
import { InvalidInputException } from "./types/InvalidInputException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListCampaignsInput } from "./types/ListCampaignsInput";
import { ListCampaignsOutput } from "./types/ListCampaignsOutput";
import { ListDatasetGroupsInput } from "./types/ListDatasetGroupsInput";
import { ListDatasetGroupsOutput } from "./types/ListDatasetGroupsOutput";
import { ListDatasetImportJobsInput } from "./types/ListDatasetImportJobsInput";
import { ListDatasetImportJobsOutput } from "./types/ListDatasetImportJobsOutput";
import { ListDatasetsInput } from "./types/ListDatasetsInput";
import { ListDatasetsOutput } from "./types/ListDatasetsOutput";
import { ListEventTrackersInput } from "./types/ListEventTrackersInput";
import { ListEventTrackersOutput } from "./types/ListEventTrackersOutput";
import { ListRecipesInput } from "./types/ListRecipesInput";
import { ListRecipesOutput } from "./types/ListRecipesOutput";
import { ListSchemasInput } from "./types/ListSchemasInput";
import { ListSchemasOutput } from "./types/ListSchemasOutput";
import { ListSolutionVersionsInput } from "./types/ListSolutionVersionsInput";
import { ListSolutionVersionsOutput } from "./types/ListSolutionVersionsOutput";
import { ListSolutionsInput } from "./types/ListSolutionsInput";
import { ListSolutionsOutput } from "./types/ListSolutionsOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { UpdateCampaignInput } from "./types/UpdateCampaignInput";
import { UpdateCampaignOutput } from "./types/UpdateCampaignOutput";
import { CreateCampaignCommand } from "./commands/CreateCampaignCommand";
import { CreateDatasetCommand } from "./commands/CreateDatasetCommand";
import { CreateDatasetGroupCommand } from "./commands/CreateDatasetGroupCommand";
import { CreateDatasetImportJobCommand } from "./commands/CreateDatasetImportJobCommand";
import { CreateEventTrackerCommand } from "./commands/CreateEventTrackerCommand";
import { CreateSchemaCommand } from "./commands/CreateSchemaCommand";
import { CreateSolutionCommand } from "./commands/CreateSolutionCommand";
import { CreateSolutionVersionCommand } from "./commands/CreateSolutionVersionCommand";
import { DeleteCampaignCommand } from "./commands/DeleteCampaignCommand";
import { DeleteDatasetCommand } from "./commands/DeleteDatasetCommand";
import { DeleteDatasetGroupCommand } from "./commands/DeleteDatasetGroupCommand";
import { DeleteEventTrackerCommand } from "./commands/DeleteEventTrackerCommand";
import { DeleteSchemaCommand } from "./commands/DeleteSchemaCommand";
import { DeleteSolutionCommand } from "./commands/DeleteSolutionCommand";
import { DescribeAlgorithmCommand } from "./commands/DescribeAlgorithmCommand";
import { DescribeCampaignCommand } from "./commands/DescribeCampaignCommand";
import { DescribeDatasetCommand } from "./commands/DescribeDatasetCommand";
import { DescribeDatasetGroupCommand } from "./commands/DescribeDatasetGroupCommand";
import { DescribeDatasetImportJobCommand } from "./commands/DescribeDatasetImportJobCommand";
import { DescribeEventTrackerCommand } from "./commands/DescribeEventTrackerCommand";
import { DescribeFeatureTransformationCommand } from "./commands/DescribeFeatureTransformationCommand";
import { DescribeRecipeCommand } from "./commands/DescribeRecipeCommand";
import { DescribeSchemaCommand } from "./commands/DescribeSchemaCommand";
import { DescribeSolutionCommand } from "./commands/DescribeSolutionCommand";
import { DescribeSolutionVersionCommand } from "./commands/DescribeSolutionVersionCommand";
import { GetSolutionMetricsCommand } from "./commands/GetSolutionMetricsCommand";
import { ListCampaignsCommand } from "./commands/ListCampaignsCommand";
import { ListDatasetGroupsCommand } from "./commands/ListDatasetGroupsCommand";
import { ListDatasetImportJobsCommand } from "./commands/ListDatasetImportJobsCommand";
import { ListDatasetsCommand } from "./commands/ListDatasetsCommand";
import { ListEventTrackersCommand } from "./commands/ListEventTrackersCommand";
import { ListRecipesCommand } from "./commands/ListRecipesCommand";
import { ListSchemasCommand } from "./commands/ListSchemasCommand";
import { ListSolutionVersionsCommand } from "./commands/ListSolutionVersionsCommand";
import { ListSolutionsCommand } from "./commands/ListSolutionsCommand";
import { UpdateCampaignCommand } from "./commands/UpdateCampaignCommand";

export class Personalize extends PersonalizeClient {
  /**
   * <p>Creates a campaign by deploying a solution version. When a client calls the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> and <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a> APIs, a campaign is specified in the request.</p> <p> <b>Minimum Provisioned TPS and Auto-Scaling</b> </p> <p>A transaction is a single <code>GetRecommendations</code> or <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput and unit of billing for Amazon Personalize. The minimum provisioned TPS (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by Amazon Personalize, and thus, the minimum billing charge. If your TPS increases beyond <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minProvisionedTPS</code>, to maintain a 70% utilization. There's a short time delay while the capacity is increased that might cause loss of transactions. It's recommended to start with a low <code>minProvisionedTPS</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code> as necessary.</p> <p> <b>Status</b> </p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the campaign status, call <a>DescribeCampaign</a>.</p> <note> <p>Wait until the <code>status</code> of the campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListCampaigns</a> </p> </li> <li> <p> <a>DescribeCampaign</a> </p> </li> <li> <p> <a>UpdateCampaign</a> </p> </li> <li> <p> <a>DeleteCampaign</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {LimitExceededException} <p>The limit on the number of requests per second has been exceeded.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCampaign(
    args: CreateCampaignInput
  ): Promise<CreateCampaignOutput>;
  public createCampaign(
    args: CreateCampaignInput,
    cb: (err: any, data?: CreateCampaignOutput) => void
  ): void;
  public createCampaign(
    args: CreateCampaignInput,
    cb?: (err: any, data?: CreateCampaignOutput) => void
  ): Promise<CreateCampaignOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCampaignCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an empty dataset and adds it to the specified dataset group. Use <a>CreateDatasetImportJob</a> to import your training data to a dataset.</p> <p>There are three types of datasets:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>Each dataset type has an associated schema with required field types. Only the <code>Interactions</code> dataset is required in order to train a model (also referred to as creating a solution).</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the dataset, call <a>DescribeDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>CreateDatasetGroup</a> </p> </li> <li> <p> <a>ListDatasets</a> </p> </li> <li> <p> <a>DescribeDataset</a> </p> </li> <li> <p> <a>DeleteDataset</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {LimitExceededException} <p>The limit on the number of requests per second has been exceeded.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDataset(args: CreateDatasetInput): Promise<CreateDatasetOutput>;
  public createDataset(
    args: CreateDatasetInput,
    cb: (err: any, data?: CreateDatasetOutput) => void
  ): void;
  public createDataset(
    args: CreateDatasetInput,
    cb?: (err: any, data?: CreateDatasetOutput) => void
  ): Promise<CreateDatasetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDatasetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an empty dataset group. A dataset group contains related datasets that supply data for training a model. A dataset group can contain at most three datasets, one for each type of dataset:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>To train a model (create a solution), a dataset group that contains an <code>Interactions</code> dataset is required. Call <a>CreateDataset</a> to add a dataset to the group.</p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul> <p>To get the status of the dataset group, call <a>DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the creation failed.</p> <note> <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code> before adding a dataset to the group.</p> </note> <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an AWS Identity and Access Management (IAM) role that has permission to access the key.</p> <p class="title"> <b>APIs that require a dataset group ARN in the request</b> </p> <ul> <li> <p> <a>CreateDataset</a> </p> </li> <li> <p> <a>CreateEventTracker</a> </p> </li> <li> <p> <a>CreateSolution</a> </p> </li> </ul> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListDatasetGroups</a> </p> </li> <li> <p> <a>DescribeDatasetGroup</a> </p> </li> <li> <p> <a>DeleteDatasetGroup</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {LimitExceededException} <p>The limit on the number of requests per second has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDatasetGroup(
    args: CreateDatasetGroupInput
  ): Promise<CreateDatasetGroupOutput>;
  public createDatasetGroup(
    args: CreateDatasetGroupInput,
    cb: (err: any, data?: CreateDatasetGroupOutput) => void
  ): void;
  public createDatasetGroup(
    args: CreateDatasetGroupInput,
    cb?: (err: any, data?: CreateDatasetGroupOutput) => void
  ): Promise<CreateDatasetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDatasetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an AWS Identity and Access Management (IAM) role that has permission to read from the data source.</p> <important> <p>The dataset import job replaces any previous data in the dataset.</p> </important> <p> <b>Status</b> </p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the import job, call <a>DescribeDatasetImportJob</a>, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <note> <p>Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListDatasetImportJobs</a> </p> </li> <li> <p> <a>DescribeDatasetImportJob</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {LimitExceededException} <p>The limit on the number of requests per second has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDatasetImportJob(
    args: CreateDatasetImportJobInput
  ): Promise<CreateDatasetImportJobOutput>;
  public createDatasetImportJob(
    args: CreateDatasetImportJobInput,
    cb: (err: any, data?: CreateDatasetImportJobOutput) => void
  ): void;
  public createDatasetImportJob(
    args: CreateDatasetImportJobInput,
    cb?: (err: any, data?: CreateDatasetImportJobOutput) => void
  ): Promise<CreateDatasetImportJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDatasetImportJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an event tracker that you use when sending event data to the specified dataset group using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p> <p>When Amazon Personalize creates an event tracker, it also creates an <i>event-interactions</i> dataset in the dataset group associated with the event tracker. The event-interactions dataset stores the event data from the <code>PutEvents</code> call. The contents of this dataset are not available to the user.</p> <note> <p>Only one event tracker can be associated with a dataset group. You will get an error if you call <code>CreateEventTracker</code> using the same dataset group as an existing event tracker.</p> </note> <p>When you send event data you include your tracking ID. The tracking ID identifies the customer and authorizes the customer to send the data.</p> <p>The event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the event tracker, call <a>DescribeEventTracker</a>.</p> <note> <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListEventTrackers</a> </p> </li> <li> <p> <a>DescribeEventTracker</a> </p> </li> <li> <p> <a>DeleteEventTracker</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {LimitExceededException} <p>The limit on the number of requests per second has been exceeded.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEventTracker(
    args: CreateEventTrackerInput
  ): Promise<CreateEventTrackerOutput>;
  public createEventTracker(
    args: CreateEventTrackerInput,
    cb: (err: any, data?: CreateEventTrackerOutput) => void
  ): void;
  public createEventTracker(
    args: CreateEventTrackerInput,
    cb?: (err: any, data?: CreateEventTrackerOutput) => void
  ): Promise<CreateEventTrackerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEventTrackerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.</p> <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. You specify a schema when you call <a>CreateDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListSchemas</a> </p> </li> <li> <p> <a>DescribeSchema</a> </p> </li> <li> <p> <a>DeleteSchema</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {LimitExceededException} <p>The limit on the number of requests per second has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSchema(args: CreateSchemaInput): Promise<CreateSchemaOutput>;
  public createSchema(
    args: CreateSchemaInput,
    cb: (err: any, data?: CreateSchemaOutput) => void
  ): void;
  public createSchema(
    args: CreateSchemaInput,
    cb?: (err: any, data?: CreateSchemaOutput) => void
  ): Promise<CreateSchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates the configuration for training a model. A trained model is known as a solution. After the configuration is created, you train the model (create a solution) by calling the <a>CreateSolutionVersion</a> operation. Every time you call <code>CreateSolutionVersion</code>, a new version of the solution is created.</p> <p>After creating a solution version, you check its accuracy by calling <a>GetSolutionMetrics</a>. When you are satisfied with the version, you deploy it using <a>CreateCampaign</a>. The campaign provides recommendations to a client through the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p> <p>To train a model, Amazon Personalize requires training data and a recipe. The training data comes from the dataset group that you provide in the request. A recipe specifies the training algorithm and a feature transformation. You can specify one of the predefined recipes provided by Amazon Personalize. Alternatively, you can specify <code>performAutoML</code> and Amazon Personalize will analyze your data and select the optimum USER_PERSONALIZATION recipe for you.</p> <p> <b>Status</b> </p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the solution, call <a>DescribeSolution</a>. Wait until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListSolutions</a> </p> </li> <li> <p> <a>CreateSolutionVersion</a> </p> </li> <li> <p> <a>DescribeSolution</a> </p> </li> <li> <p> <a>DeleteSolution</a> </p> </li> </ul> <ul> <li> <p> <a>ListSolutionVersions</a> </p> </li> <li> <p> <a>DescribeSolutionVersion</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {LimitExceededException} <p>The limit on the number of requests per second has been exceeded.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSolution(
    args: CreateSolutionInput
  ): Promise<CreateSolutionOutput>;
  public createSolution(
    args: CreateSolutionInput,
    cb: (err: any, data?: CreateSolutionOutput) => void
  ): void;
  public createSolution(
    args: CreateSolutionInput,
    cb?: (err: any, data?: CreateSolutionOutput) => void
  ): Promise<CreateSolutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSolutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Trains or retrains an active solution. A solution is created using the <a>CreateSolution</a> operation and must be in the ACTIVE state before calling <code>CreateSolutionVersion</code>. A new version of the solution is created every time you call this operation.</p> <p> <b>Status</b> </p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the version, call <a>DescribeSolutionVersion</a>. Wait until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p> <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListSolutionVersions</a> </p> </li> <li> <p> <a>DescribeSolutionVersion</a> </p> </li> </ul> <ul> <li> <p> <a>ListSolutions</a> </p> </li> <li> <p> <a>CreateSolution</a> </p> </li> <li> <p> <a>DescribeSolution</a> </p> </li> <li> <p> <a>DeleteSolution</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSolutionVersion(
    args: CreateSolutionVersionInput
  ): Promise<CreateSolutionVersionOutput>;
  public createSolutionVersion(
    args: CreateSolutionVersionInput,
    cb: (err: any, data?: CreateSolutionVersionOutput) => void
  ): void;
  public createSolutionVersion(
    args: CreateSolutionVersionInput,
    cb?: (err: any, data?: CreateSolutionVersionOutput) => void
  ): Promise<CreateSolutionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSolutionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. For more information on campaigns, see <a>CreateCampaign</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCampaign(
    args: DeleteCampaignInput
  ): Promise<DeleteCampaignOutput>;
  public deleteCampaign(
    args: DeleteCampaignInput,
    cb: (err: any, data?: DeleteCampaignOutput) => void
  ): void;
  public deleteCampaign(
    args: DeleteCampaignInput,
    cb?: (err: any, data?: DeleteCampaignOutput) => void
  ): Promise<DeleteCampaignOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCampaignCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a dataset. You can't delete a dataset if an associated <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on datasets, see <a>CreateDataset</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDataset(args: DeleteDatasetInput): Promise<DeleteDatasetOutput>;
  public deleteDataset(
    args: DeleteDatasetInput,
    cb: (err: any, data?: DeleteDatasetOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetInput,
    cb?: (err: any, data?: DeleteDatasetOutput) => void
  ): Promise<DeleteDatasetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDatasetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a dataset group. Before you delete a dataset group, you must delete the following:</p> <ul> <li> <p>All associated event trackers.</p> </li> <li> <p>All associated solutions.</p> </li> <li> <p>All datasets in the dataset group.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDatasetGroup(
    args: DeleteDatasetGroupInput
  ): Promise<DeleteDatasetGroupOutput>;
  public deleteDatasetGroup(
    args: DeleteDatasetGroupInput,
    cb: (err: any, data?: DeleteDatasetGroupOutput) => void
  ): void;
  public deleteDatasetGroup(
    args: DeleteDatasetGroupInput,
    cb?: (err: any, data?: DeleteDatasetGroupOutput) => void
  ): Promise<DeleteDatasetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDatasetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the event tracker. Does not delete the event-interactions dataset from the associated dataset group. For more information on event trackers, see <a>CreateEventTracker</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEventTracker(
    args: DeleteEventTrackerInput
  ): Promise<DeleteEventTrackerOutput>;
  public deleteEventTracker(
    args: DeleteEventTrackerInput,
    cb: (err: any, data?: DeleteEventTrackerOutput) => void
  ): void;
  public deleteEventTracker(
    args: DeleteEventTrackerInput,
    cb?: (err: any, data?: DeleteEventTrackerOutput) => void
  ): Promise<DeleteEventTrackerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEventTrackerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see <a>CreateSchema</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSchema(args: DeleteSchemaInput): Promise<DeleteSchemaOutput>;
  public deleteSchema(
    args: DeleteSchemaInput,
    cb: (err: any, data?: DeleteSchemaOutput) => void
  ): void;
  public deleteSchema(
    args: DeleteSchemaInput,
    cb?: (err: any, data?: DeleteSchemaOutput) => void
  ): Promise<DeleteSchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes all versions of a solution and the <code>Solution</code> object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call <a>ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see <a>CreateSolution</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSolution(
    args: DeleteSolutionInput
  ): Promise<DeleteSolutionOutput>;
  public deleteSolution(
    args: DeleteSolutionInput,
    cb: (err: any, data?: DeleteSolutionOutput) => void
  ): void;
  public deleteSolution(
    args: DeleteSolutionInput,
    cb?: (err: any, data?: DeleteSolutionOutput) => void
  ): Promise<DeleteSolutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSolutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the given algorithm.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAlgorithm(
    args: DescribeAlgorithmInput
  ): Promise<DescribeAlgorithmOutput>;
  public describeAlgorithm(
    args: DescribeAlgorithmInput,
    cb: (err: any, data?: DescribeAlgorithmOutput) => void
  ): void;
  public describeAlgorithm(
    args: DescribeAlgorithmInput,
    cb?: (err: any, data?: DescribeAlgorithmOutput) => void
  ): Promise<DescribeAlgorithmOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAlgorithmCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the given campaign, including its status.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>For more information on campaigns, see <a>CreateCampaign</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCampaign(
    args: DescribeCampaignInput
  ): Promise<DescribeCampaignOutput>;
  public describeCampaign(
    args: DescribeCampaignInput,
    cb: (err: any, data?: DescribeCampaignOutput) => void
  ): void;
  public describeCampaign(
    args: DescribeCampaignInput,
    cb?: (err: any, data?: DescribeCampaignOutput) => void
  ): Promise<DescribeCampaignOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCampaignCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the given dataset. For more information on datasets, see <a>CreateDataset</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDataset(
    args: DescribeDatasetInput
  ): Promise<DescribeDatasetOutput>;
  public describeDataset(
    args: DescribeDatasetInput,
    cb: (err: any, data?: DescribeDatasetOutput) => void
  ): void;
  public describeDataset(
    args: DescribeDatasetInput,
    cb?: (err: any, data?: DescribeDatasetOutput) => void
  ): Promise<DescribeDatasetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDatasetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the given dataset group. For more information on dataset groups, see <a>CreateDatasetGroup</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDatasetGroup(
    args: DescribeDatasetGroupInput
  ): Promise<DescribeDatasetGroupOutput>;
  public describeDatasetGroup(
    args: DescribeDatasetGroupInput,
    cb: (err: any, data?: DescribeDatasetGroupOutput) => void
  ): void;
  public describeDatasetGroup(
    args: DescribeDatasetGroupInput,
    cb?: (err: any, data?: DescribeDatasetGroupOutput) => void
  ): Promise<DescribeDatasetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDatasetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the dataset import job created by <a>CreateDatasetImportJob</a>, including the import job status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDatasetImportJob(
    args: DescribeDatasetImportJobInput
  ): Promise<DescribeDatasetImportJobOutput>;
  public describeDatasetImportJob(
    args: DescribeDatasetImportJobInput,
    cb: (err: any, data?: DescribeDatasetImportJobOutput) => void
  ): void;
  public describeDatasetImportJob(
    args: DescribeDatasetImportJobInput,
    cb?: (err: any, data?: DescribeDatasetImportJobOutput) => void
  ): Promise<DescribeDatasetImportJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDatasetImportJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an event tracker. The response includes the <code>trackingId</code> and <code>status</code> of the event tracker. For more information on event trackers, see <a>CreateEventTracker</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEventTracker(
    args: DescribeEventTrackerInput
  ): Promise<DescribeEventTrackerOutput>;
  public describeEventTracker(
    args: DescribeEventTrackerInput,
    cb: (err: any, data?: DescribeEventTrackerOutput) => void
  ): void;
  public describeEventTracker(
    args: DescribeEventTrackerInput,
    cb?: (err: any, data?: DescribeEventTrackerOutput) => void
  ): Promise<DescribeEventTrackerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventTrackerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the given feature transformation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFeatureTransformation(
    args: DescribeFeatureTransformationInput
  ): Promise<DescribeFeatureTransformationOutput>;
  public describeFeatureTransformation(
    args: DescribeFeatureTransformationInput,
    cb: (err: any, data?: DescribeFeatureTransformationOutput) => void
  ): void;
  public describeFeatureTransformation(
    args: DescribeFeatureTransformationInput,
    cb?: (err: any, data?: DescribeFeatureTransformationOutput) => void
  ): Promise<DescribeFeatureTransformationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFeatureTransformationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a recipe.</p> <p>A recipe contains three items:</p> <ul> <li> <p>An algorithm that trains a model.</p> </li> <li> <p>Hyperparameters that govern the training.</p> </li> <li> <p>Feature transformation information for modifying the input data before training.</p> </li> </ul> <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the <a>CreateSolution</a> API. <code>CreateSolution</code> trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRecipe(
    args: DescribeRecipeInput
  ): Promise<DescribeRecipeOutput>;
  public describeRecipe(
    args: DescribeRecipeInput,
    cb: (err: any, data?: DescribeRecipeOutput) => void
  ): void;
  public describeRecipe(
    args: DescribeRecipeInput,
    cb?: (err: any, data?: DescribeRecipeOutput) => void
  ): Promise<DescribeRecipeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRecipeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a schema. For more information on schemas, see <a>CreateSchema</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSchema(
    args: DescribeSchemaInput
  ): Promise<DescribeSchemaOutput>;
  public describeSchema(
    args: DescribeSchemaInput,
    cb: (err: any, data?: DescribeSchemaOutput) => void
  ): void;
  public describeSchema(
    args: DescribeSchemaInput,
    cb?: (err: any, data?: DescribeSchemaOutput) => void
  ): Promise<DescribeSchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a solution. For more information on solutions, see <a>CreateSolution</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSolution(
    args: DescribeSolutionInput
  ): Promise<DescribeSolutionOutput>;
  public describeSolution(
    args: DescribeSolutionInput,
    cb: (err: any, data?: DescribeSolutionOutput) => void
  ): void;
  public describeSolution(
    args: DescribeSolutionInput,
    cb?: (err: any, data?: DescribeSolutionOutput) => void
  ): Promise<DescribeSolutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSolutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a specific version of a solution. For more information on solutions, see <a>CreateSolution</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSolutionVersion(
    args: DescribeSolutionVersionInput
  ): Promise<DescribeSolutionVersionOutput>;
  public describeSolutionVersion(
    args: DescribeSolutionVersionInput,
    cb: (err: any, data?: DescribeSolutionVersionOutput) => void
  ): void;
  public describeSolutionVersion(
    args: DescribeSolutionVersionInput,
    cb?: (err: any, data?: DescribeSolutionVersionOutput) => void
  ): Promise<DescribeSolutionVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSolutionVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the metrics for the specified solution version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSolutionMetrics(
    args: GetSolutionMetricsInput
  ): Promise<GetSolutionMetricsOutput>;
  public getSolutionMetrics(
    args: GetSolutionMetricsInput,
    cb: (err: any, data?: GetSolutionMetricsOutput) => void
  ): void;
  public getSolutionMetrics(
    args: GetSolutionMetricsInput,
    cb?: (err: any, data?: GetSolutionMetricsOutput) => void
  ): Promise<GetSolutionMetricsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSolutionMetricsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see <a>CreateCampaign</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {InvalidNextTokenException} <p>The token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCampaigns(args: ListCampaignsInput): Promise<ListCampaignsOutput>;
  public listCampaigns(
    args: ListCampaignsInput,
    cb: (err: any, data?: ListCampaignsOutput) => void
  ): void;
  public listCampaigns(
    args: ListCampaignsInput,
    cb?: (err: any, data?: ListCampaignsOutput) => void
  ): Promise<ListCampaignsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCampaignsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see <a>CreateDatasetGroup</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDatasetGroups(
    args: ListDatasetGroupsInput
  ): Promise<ListDatasetGroupsOutput>;
  public listDatasetGroups(
    args: ListDatasetGroupsInput,
    cb: (err: any, data?: ListDatasetGroupsOutput) => void
  ): void;
  public listDatasetGroups(
    args: ListDatasetGroupsInput,
    cb?: (err: any, data?: ListDatasetGroupsOutput) => void
  ): Promise<ListDatasetGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDatasetGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see <a>CreateDatasetImportJob</a>. For more information on datasets, see <a>CreateDataset</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {InvalidNextTokenException} <p>The token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDatasetImportJobs(
    args: ListDatasetImportJobsInput
  ): Promise<ListDatasetImportJobsOutput>;
  public listDatasetImportJobs(
    args: ListDatasetImportJobsInput,
    cb: (err: any, data?: ListDatasetImportJobsOutput) => void
  ): void;
  public listDatasetImportJobs(
    args: ListDatasetImportJobsInput,
    cb?: (err: any, data?: ListDatasetImportJobsOutput) => void
  ): Promise<ListDatasetImportJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDatasetImportJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see <a>CreateDataset</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {InvalidNextTokenException} <p>The token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDatasets(args: ListDatasetsInput): Promise<ListDatasetsOutput>;
  public listDatasets(
    args: ListDatasetsInput,
    cb: (err: any, data?: ListDatasetsOutput) => void
  ): void;
  public listDatasets(
    args: ListDatasetsInput,
    cb?: (err: any, data?: ListDatasetsOutput) => void
  ): Promise<ListDatasetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDatasetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see <a>CreateEventTracker</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {InvalidNextTokenException} <p>The token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEventTrackers(
    args: ListEventTrackersInput
  ): Promise<ListEventTrackersOutput>;
  public listEventTrackers(
    args: ListEventTrackersInput,
    cb: (err: any, data?: ListEventTrackersOutput) => void
  ): void;
  public listEventTrackers(
    args: ListEventTrackersInput,
    cb?: (err: any, data?: ListEventTrackersOutput) => void
  ): Promise<ListEventTrackersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEventTrackersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRecipes(args: ListRecipesInput): Promise<ListRecipesOutput>;
  public listRecipes(
    args: ListRecipesInput,
    cb: (err: any, data?: ListRecipesOutput) => void
  ): void;
  public listRecipes(
    args: ListRecipesInput,
    cb?: (err: any, data?: ListRecipesOutput) => void
  ): Promise<ListRecipesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRecipesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see <a>CreateSchema</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSchemas(args: ListSchemasInput): Promise<ListSchemasOutput>;
  public listSchemas(
    args: ListSchemasInput,
    cb: (err: any, data?: ListSchemasOutput) => void
  ): void;
  public listSchemas(
    args: ListSchemasInput,
    cb?: (err: any, data?: ListSchemasOutput) => void
  ): Promise<ListSchemasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSchemasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN). For more information on solutions, see <a>CreateSolution</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSolutionVersions(
    args: ListSolutionVersionsInput
  ): Promise<ListSolutionVersionsOutput>;
  public listSolutionVersions(
    args: ListSolutionVersionsInput,
    cb: (err: any, data?: ListSolutionVersionsOutput) => void
  ): void;
  public listSolutionVersions(
    args: ListSolutionVersionsInput,
    cb?: (err: any, data?: ListSolutionVersionsOutput) => void
  ): Promise<ListSolutionVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSolutionVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of solutions that use the given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see <a>CreateSolution</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {InvalidNextTokenException} <p>The token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSolutions(args: ListSolutionsInput): Promise<ListSolutionsOutput>;
  public listSolutions(
    args: ListSolutionsInput,
    cb: (err: any, data?: ListSolutionsOutput) => void
  ): void;
  public listSolutions(
    args: ListSolutionsInput,
    cb?: (err: any, data?: ListSolutionsOutput) => void
  ): Promise<ListSolutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSolutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a campaign by either deploying a new solution or changing the value of the campaign's <code>minProvisionedTPS</code> parameter.</p> <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the <a>DescribeCampaign</a> API.</p> <note> <p>You must wait until the <code>status</code> of the updated campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p>For more information on campaigns, see <a>CreateCampaign</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {ResourceNotFoundException} <p>Could not find the specified resource.</p>
   *   - {ResourceInUseException} <p>The specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCampaign(
    args: UpdateCampaignInput
  ): Promise<UpdateCampaignOutput>;
  public updateCampaign(
    args: UpdateCampaignInput,
    cb: (err: any, data?: UpdateCampaignOutput) => void
  ): void;
  public updateCampaign(
    args: UpdateCampaignInput,
    cb?: (err: any, data?: UpdateCampaignOutput) => void
  ): Promise<UpdateCampaignOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCampaignCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
