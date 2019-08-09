import { SageMakerClient } from "./SageMakerClient";
import { AddTagsInput } from "./types/AddTagsInput";
import { AddTagsOutput } from "./types/AddTagsOutput";
import { CreateAlgorithmInput } from "./types/CreateAlgorithmInput";
import { CreateAlgorithmOutput } from "./types/CreateAlgorithmOutput";
import { CreateCodeRepositoryInput } from "./types/CreateCodeRepositoryInput";
import { CreateCodeRepositoryOutput } from "./types/CreateCodeRepositoryOutput";
import { CreateCompilationJobInput } from "./types/CreateCompilationJobInput";
import { CreateCompilationJobOutput } from "./types/CreateCompilationJobOutput";
import { CreateEndpointConfigInput } from "./types/CreateEndpointConfigInput";
import { CreateEndpointConfigOutput } from "./types/CreateEndpointConfigOutput";
import { CreateEndpointInput } from "./types/CreateEndpointInput";
import { CreateEndpointOutput } from "./types/CreateEndpointOutput";
import { CreateHyperParameterTuningJobInput } from "./types/CreateHyperParameterTuningJobInput";
import { CreateHyperParameterTuningJobOutput } from "./types/CreateHyperParameterTuningJobOutput";
import { CreateLabelingJobInput } from "./types/CreateLabelingJobInput";
import { CreateLabelingJobOutput } from "./types/CreateLabelingJobOutput";
import { CreateModelInput } from "./types/CreateModelInput";
import { CreateModelOutput } from "./types/CreateModelOutput";
import { CreateModelPackageInput } from "./types/CreateModelPackageInput";
import { CreateModelPackageOutput } from "./types/CreateModelPackageOutput";
import { CreateNotebookInstanceInput } from "./types/CreateNotebookInstanceInput";
import { CreateNotebookInstanceLifecycleConfigInput } from "./types/CreateNotebookInstanceLifecycleConfigInput";
import { CreateNotebookInstanceLifecycleConfigOutput } from "./types/CreateNotebookInstanceLifecycleConfigOutput";
import { CreateNotebookInstanceOutput } from "./types/CreateNotebookInstanceOutput";
import { CreatePresignedNotebookInstanceUrlInput } from "./types/CreatePresignedNotebookInstanceUrlInput";
import { CreatePresignedNotebookInstanceUrlOutput } from "./types/CreatePresignedNotebookInstanceUrlOutput";
import { CreateTrainingJobInput } from "./types/CreateTrainingJobInput";
import { CreateTrainingJobOutput } from "./types/CreateTrainingJobOutput";
import { CreateTransformJobInput } from "./types/CreateTransformJobInput";
import { CreateTransformJobOutput } from "./types/CreateTransformJobOutput";
import { CreateWorkteamInput } from "./types/CreateWorkteamInput";
import { CreateWorkteamOutput } from "./types/CreateWorkteamOutput";
import { DeleteAlgorithmInput } from "./types/DeleteAlgorithmInput";
import { DeleteAlgorithmOutput } from "./types/DeleteAlgorithmOutput";
import { DeleteCodeRepositoryInput } from "./types/DeleteCodeRepositoryInput";
import { DeleteCodeRepositoryOutput } from "./types/DeleteCodeRepositoryOutput";
import { DeleteEndpointConfigInput } from "./types/DeleteEndpointConfigInput";
import { DeleteEndpointConfigOutput } from "./types/DeleteEndpointConfigOutput";
import { DeleteEndpointInput } from "./types/DeleteEndpointInput";
import { DeleteEndpointOutput } from "./types/DeleteEndpointOutput";
import { DeleteModelInput } from "./types/DeleteModelInput";
import { DeleteModelOutput } from "./types/DeleteModelOutput";
import { DeleteModelPackageInput } from "./types/DeleteModelPackageInput";
import { DeleteModelPackageOutput } from "./types/DeleteModelPackageOutput";
import { DeleteNotebookInstanceInput } from "./types/DeleteNotebookInstanceInput";
import { DeleteNotebookInstanceLifecycleConfigInput } from "./types/DeleteNotebookInstanceLifecycleConfigInput";
import { DeleteNotebookInstanceLifecycleConfigOutput } from "./types/DeleteNotebookInstanceLifecycleConfigOutput";
import { DeleteNotebookInstanceOutput } from "./types/DeleteNotebookInstanceOutput";
import { DeleteTagsInput } from "./types/DeleteTagsInput";
import { DeleteTagsOutput } from "./types/DeleteTagsOutput";
import { DeleteWorkteamInput } from "./types/DeleteWorkteamInput";
import { DeleteWorkteamOutput } from "./types/DeleteWorkteamOutput";
import { DescribeAlgorithmInput } from "./types/DescribeAlgorithmInput";
import { DescribeAlgorithmOutput } from "./types/DescribeAlgorithmOutput";
import { DescribeCodeRepositoryInput } from "./types/DescribeCodeRepositoryInput";
import { DescribeCodeRepositoryOutput } from "./types/DescribeCodeRepositoryOutput";
import { DescribeCompilationJobInput } from "./types/DescribeCompilationJobInput";
import { DescribeCompilationJobOutput } from "./types/DescribeCompilationJobOutput";
import { DescribeEndpointConfigInput } from "./types/DescribeEndpointConfigInput";
import { DescribeEndpointConfigOutput } from "./types/DescribeEndpointConfigOutput";
import { DescribeEndpointInput } from "./types/DescribeEndpointInput";
import { DescribeEndpointOutput } from "./types/DescribeEndpointOutput";
import { DescribeHyperParameterTuningJobInput } from "./types/DescribeHyperParameterTuningJobInput";
import { DescribeHyperParameterTuningJobOutput } from "./types/DescribeHyperParameterTuningJobOutput";
import { DescribeLabelingJobInput } from "./types/DescribeLabelingJobInput";
import { DescribeLabelingJobOutput } from "./types/DescribeLabelingJobOutput";
import { DescribeModelInput } from "./types/DescribeModelInput";
import { DescribeModelOutput } from "./types/DescribeModelOutput";
import { DescribeModelPackageInput } from "./types/DescribeModelPackageInput";
import { DescribeModelPackageOutput } from "./types/DescribeModelPackageOutput";
import { DescribeNotebookInstanceInput } from "./types/DescribeNotebookInstanceInput";
import { DescribeNotebookInstanceLifecycleConfigInput } from "./types/DescribeNotebookInstanceLifecycleConfigInput";
import { DescribeNotebookInstanceLifecycleConfigOutput } from "./types/DescribeNotebookInstanceLifecycleConfigOutput";
import { DescribeNotebookInstanceOutput } from "./types/DescribeNotebookInstanceOutput";
import { DescribeSubscribedWorkteamInput } from "./types/DescribeSubscribedWorkteamInput";
import { DescribeSubscribedWorkteamOutput } from "./types/DescribeSubscribedWorkteamOutput";
import { DescribeTrainingJobInput } from "./types/DescribeTrainingJobInput";
import { DescribeTrainingJobOutput } from "./types/DescribeTrainingJobOutput";
import { DescribeTransformJobInput } from "./types/DescribeTransformJobInput";
import { DescribeTransformJobOutput } from "./types/DescribeTransformJobOutput";
import { DescribeWorkteamInput } from "./types/DescribeWorkteamInput";
import { DescribeWorkteamOutput } from "./types/DescribeWorkteamOutput";
import { GetSearchSuggestionsInput } from "./types/GetSearchSuggestionsInput";
import { GetSearchSuggestionsOutput } from "./types/GetSearchSuggestionsOutput";
import { ListAlgorithmsInput } from "./types/ListAlgorithmsInput";
import { ListAlgorithmsOutput } from "./types/ListAlgorithmsOutput";
import { ListCodeRepositoriesInput } from "./types/ListCodeRepositoriesInput";
import { ListCodeRepositoriesOutput } from "./types/ListCodeRepositoriesOutput";
import { ListCompilationJobsInput } from "./types/ListCompilationJobsInput";
import { ListCompilationJobsOutput } from "./types/ListCompilationJobsOutput";
import { ListEndpointConfigsInput } from "./types/ListEndpointConfigsInput";
import { ListEndpointConfigsOutput } from "./types/ListEndpointConfigsOutput";
import { ListEndpointsInput } from "./types/ListEndpointsInput";
import { ListEndpointsOutput } from "./types/ListEndpointsOutput";
import { ListHyperParameterTuningJobsInput } from "./types/ListHyperParameterTuningJobsInput";
import { ListHyperParameterTuningJobsOutput } from "./types/ListHyperParameterTuningJobsOutput";
import { ListLabelingJobsForWorkteamInput } from "./types/ListLabelingJobsForWorkteamInput";
import { ListLabelingJobsForWorkteamOutput } from "./types/ListLabelingJobsForWorkteamOutput";
import { ListLabelingJobsInput } from "./types/ListLabelingJobsInput";
import { ListLabelingJobsOutput } from "./types/ListLabelingJobsOutput";
import { ListModelPackagesInput } from "./types/ListModelPackagesInput";
import { ListModelPackagesOutput } from "./types/ListModelPackagesOutput";
import { ListModelsInput } from "./types/ListModelsInput";
import { ListModelsOutput } from "./types/ListModelsOutput";
import { ListNotebookInstanceLifecycleConfigsInput } from "./types/ListNotebookInstanceLifecycleConfigsInput";
import { ListNotebookInstanceLifecycleConfigsOutput } from "./types/ListNotebookInstanceLifecycleConfigsOutput";
import { ListNotebookInstancesInput } from "./types/ListNotebookInstancesInput";
import { ListNotebookInstancesOutput } from "./types/ListNotebookInstancesOutput";
import { ListSubscribedWorkteamsInput } from "./types/ListSubscribedWorkteamsInput";
import { ListSubscribedWorkteamsOutput } from "./types/ListSubscribedWorkteamsOutput";
import { ListTagsInput } from "./types/ListTagsInput";
import { ListTagsOutput } from "./types/ListTagsOutput";
import { ListTrainingJobsForHyperParameterTuningJobInput } from "./types/ListTrainingJobsForHyperParameterTuningJobInput";
import { ListTrainingJobsForHyperParameterTuningJobOutput } from "./types/ListTrainingJobsForHyperParameterTuningJobOutput";
import { ListTrainingJobsInput } from "./types/ListTrainingJobsInput";
import { ListTrainingJobsOutput } from "./types/ListTrainingJobsOutput";
import { ListTransformJobsInput } from "./types/ListTransformJobsInput";
import { ListTransformJobsOutput } from "./types/ListTransformJobsOutput";
import { ListWorkteamsInput } from "./types/ListWorkteamsInput";
import { ListWorkteamsOutput } from "./types/ListWorkteamsOutput";
import { RenderUiTemplateInput } from "./types/RenderUiTemplateInput";
import { RenderUiTemplateOutput } from "./types/RenderUiTemplateOutput";
import { ResourceInUse } from "./types/ResourceInUse";
import { ResourceLimitExceeded } from "./types/ResourceLimitExceeded";
import { ResourceNotFound } from "./types/ResourceNotFound";
import { SearchInput } from "./types/SearchInput";
import { SearchOutput } from "./types/SearchOutput";
import { StartNotebookInstanceInput } from "./types/StartNotebookInstanceInput";
import { StartNotebookInstanceOutput } from "./types/StartNotebookInstanceOutput";
import { StopCompilationJobInput } from "./types/StopCompilationJobInput";
import { StopCompilationJobOutput } from "./types/StopCompilationJobOutput";
import { StopHyperParameterTuningJobInput } from "./types/StopHyperParameterTuningJobInput";
import { StopHyperParameterTuningJobOutput } from "./types/StopHyperParameterTuningJobOutput";
import { StopLabelingJobInput } from "./types/StopLabelingJobInput";
import { StopLabelingJobOutput } from "./types/StopLabelingJobOutput";
import { StopNotebookInstanceInput } from "./types/StopNotebookInstanceInput";
import { StopNotebookInstanceOutput } from "./types/StopNotebookInstanceOutput";
import { StopTrainingJobInput } from "./types/StopTrainingJobInput";
import { StopTrainingJobOutput } from "./types/StopTrainingJobOutput";
import { StopTransformJobInput } from "./types/StopTransformJobInput";
import { StopTransformJobOutput } from "./types/StopTransformJobOutput";
import { UpdateCodeRepositoryInput } from "./types/UpdateCodeRepositoryInput";
import { UpdateCodeRepositoryOutput } from "./types/UpdateCodeRepositoryOutput";
import { UpdateEndpointInput } from "./types/UpdateEndpointInput";
import { UpdateEndpointOutput } from "./types/UpdateEndpointOutput";
import { UpdateEndpointWeightsAndCapacitiesInput } from "./types/UpdateEndpointWeightsAndCapacitiesInput";
import { UpdateEndpointWeightsAndCapacitiesOutput } from "./types/UpdateEndpointWeightsAndCapacitiesOutput";
import { UpdateNotebookInstanceInput } from "./types/UpdateNotebookInstanceInput";
import { UpdateNotebookInstanceLifecycleConfigInput } from "./types/UpdateNotebookInstanceLifecycleConfigInput";
import { UpdateNotebookInstanceLifecycleConfigOutput } from "./types/UpdateNotebookInstanceLifecycleConfigOutput";
import { UpdateNotebookInstanceOutput } from "./types/UpdateNotebookInstanceOutput";
import { UpdateWorkteamInput } from "./types/UpdateWorkteamInput";
import { UpdateWorkteamOutput } from "./types/UpdateWorkteamOutput";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { CreateAlgorithmCommand } from "./commands/CreateAlgorithmCommand";
import { CreateCodeRepositoryCommand } from "./commands/CreateCodeRepositoryCommand";
import { CreateCompilationJobCommand } from "./commands/CreateCompilationJobCommand";
import { CreateEndpointCommand } from "./commands/CreateEndpointCommand";
import { CreateEndpointConfigCommand } from "./commands/CreateEndpointConfigCommand";
import { CreateHyperParameterTuningJobCommand } from "./commands/CreateHyperParameterTuningJobCommand";
import { CreateLabelingJobCommand } from "./commands/CreateLabelingJobCommand";
import { CreateModelCommand } from "./commands/CreateModelCommand";
import { CreateModelPackageCommand } from "./commands/CreateModelPackageCommand";
import { CreateNotebookInstanceCommand } from "./commands/CreateNotebookInstanceCommand";
import { CreateNotebookInstanceLifecycleConfigCommand } from "./commands/CreateNotebookInstanceLifecycleConfigCommand";
import { CreatePresignedNotebookInstanceUrlCommand } from "./commands/CreatePresignedNotebookInstanceUrlCommand";
import { CreateTrainingJobCommand } from "./commands/CreateTrainingJobCommand";
import { CreateTransformJobCommand } from "./commands/CreateTransformJobCommand";
import { CreateWorkteamCommand } from "./commands/CreateWorkteamCommand";
import { DeleteAlgorithmCommand } from "./commands/DeleteAlgorithmCommand";
import { DeleteCodeRepositoryCommand } from "./commands/DeleteCodeRepositoryCommand";
import { DeleteEndpointCommand } from "./commands/DeleteEndpointCommand";
import { DeleteEndpointConfigCommand } from "./commands/DeleteEndpointConfigCommand";
import { DeleteModelCommand } from "./commands/DeleteModelCommand";
import { DeleteModelPackageCommand } from "./commands/DeleteModelPackageCommand";
import { DeleteNotebookInstanceCommand } from "./commands/DeleteNotebookInstanceCommand";
import { DeleteNotebookInstanceLifecycleConfigCommand } from "./commands/DeleteNotebookInstanceLifecycleConfigCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DeleteWorkteamCommand } from "./commands/DeleteWorkteamCommand";
import { DescribeAlgorithmCommand } from "./commands/DescribeAlgorithmCommand";
import { DescribeCodeRepositoryCommand } from "./commands/DescribeCodeRepositoryCommand";
import { DescribeCompilationJobCommand } from "./commands/DescribeCompilationJobCommand";
import { DescribeEndpointCommand } from "./commands/DescribeEndpointCommand";
import { DescribeEndpointConfigCommand } from "./commands/DescribeEndpointConfigCommand";
import { DescribeHyperParameterTuningJobCommand } from "./commands/DescribeHyperParameterTuningJobCommand";
import { DescribeLabelingJobCommand } from "./commands/DescribeLabelingJobCommand";
import { DescribeModelCommand } from "./commands/DescribeModelCommand";
import { DescribeModelPackageCommand } from "./commands/DescribeModelPackageCommand";
import { DescribeNotebookInstanceCommand } from "./commands/DescribeNotebookInstanceCommand";
import { DescribeNotebookInstanceLifecycleConfigCommand } from "./commands/DescribeNotebookInstanceLifecycleConfigCommand";
import { DescribeSubscribedWorkteamCommand } from "./commands/DescribeSubscribedWorkteamCommand";
import { DescribeTrainingJobCommand } from "./commands/DescribeTrainingJobCommand";
import { DescribeTransformJobCommand } from "./commands/DescribeTransformJobCommand";
import { DescribeWorkteamCommand } from "./commands/DescribeWorkteamCommand";
import { GetSearchSuggestionsCommand } from "./commands/GetSearchSuggestionsCommand";
import { ListAlgorithmsCommand } from "./commands/ListAlgorithmsCommand";
import { ListCodeRepositoriesCommand } from "./commands/ListCodeRepositoriesCommand";
import { ListCompilationJobsCommand } from "./commands/ListCompilationJobsCommand";
import { ListEndpointConfigsCommand } from "./commands/ListEndpointConfigsCommand";
import { ListEndpointsCommand } from "./commands/ListEndpointsCommand";
import { ListHyperParameterTuningJobsCommand } from "./commands/ListHyperParameterTuningJobsCommand";
import { ListLabelingJobsCommand } from "./commands/ListLabelingJobsCommand";
import { ListLabelingJobsForWorkteamCommand } from "./commands/ListLabelingJobsForWorkteamCommand";
import { ListModelPackagesCommand } from "./commands/ListModelPackagesCommand";
import { ListModelsCommand } from "./commands/ListModelsCommand";
import { ListNotebookInstanceLifecycleConfigsCommand } from "./commands/ListNotebookInstanceLifecycleConfigsCommand";
import { ListNotebookInstancesCommand } from "./commands/ListNotebookInstancesCommand";
import { ListSubscribedWorkteamsCommand } from "./commands/ListSubscribedWorkteamsCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { ListTrainingJobsCommand } from "./commands/ListTrainingJobsCommand";
import { ListTrainingJobsForHyperParameterTuningJobCommand } from "./commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import { ListTransformJobsCommand } from "./commands/ListTransformJobsCommand";
import { ListWorkteamsCommand } from "./commands/ListWorkteamsCommand";
import { RenderUiTemplateCommand } from "./commands/RenderUiTemplateCommand";
import { SearchCommand } from "./commands/SearchCommand";
import { StartNotebookInstanceCommand } from "./commands/StartNotebookInstanceCommand";
import { StopCompilationJobCommand } from "./commands/StopCompilationJobCommand";
import { StopHyperParameterTuningJobCommand } from "./commands/StopHyperParameterTuningJobCommand";
import { StopLabelingJobCommand } from "./commands/StopLabelingJobCommand";
import { StopNotebookInstanceCommand } from "./commands/StopNotebookInstanceCommand";
import { StopTrainingJobCommand } from "./commands/StopTrainingJobCommand";
import { StopTransformJobCommand } from "./commands/StopTransformJobCommand";
import { UpdateCodeRepositoryCommand } from "./commands/UpdateCodeRepositoryCommand";
import { UpdateEndpointCommand } from "./commands/UpdateEndpointCommand";
import { UpdateEndpointWeightsAndCapacitiesCommand } from "./commands/UpdateEndpointWeightsAndCapacitiesCommand";
import { UpdateNotebookInstanceCommand } from "./commands/UpdateNotebookInstanceCommand";
import { UpdateNotebookInstanceLifecycleConfigCommand } from "./commands/UpdateNotebookInstanceLifecycleConfigCommand";
import { UpdateWorkteamCommand } from "./commands/UpdateWorkteamCommand";

export class SageMaker extends SageMakerClient {
  /**
   * <p>Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints.</p> <p>Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.</p> <note> <p>Tags that you add to a hyperparameter tuning job by calling this API are also added to any training jobs that the hyperparameter tuning job launches after you call this API, but not to training jobs that the hyperparameter tuning job launched before you called this API. To make sure that the tags associated with a hyperparameter tuning job are also added to all training jobs that the hyperparameter tuning job launches, add the tags when you first create the tuning job by specifying them in the <code>Tags</code> parameter of <a>CreateHyperParameterTuningJob</a> </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTags(args: AddTagsInput): Promise<AddTagsOutput>;
  public addTags(
    args: AddTagsInput,
    cb: (err: any, data?: AddTagsOutput) => void
  ): void;
  public addTags(
    args: AddTagsInput,
    cb?: (err: any, data?: AddTagsOutput) => void
  ): Promise<AddTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a machine learning algorithm that you can use in Amazon SageMaker and list in the AWS Marketplace.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAlgorithm(
    args: CreateAlgorithmInput
  ): Promise<CreateAlgorithmOutput>;
  public createAlgorithm(
    args: CreateAlgorithmInput,
    cb: (err: any, data?: CreateAlgorithmOutput) => void
  ): void;
  public createAlgorithm(
    args: CreateAlgorithmInput,
    cb?: (err: any, data?: CreateAlgorithmOutput) => void
  ): Promise<CreateAlgorithmOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAlgorithmCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Git repository as a resource in your Amazon SageMaker account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your Amazon SageMaker account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with.</p> <p>The repository can be hosted either in <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any other Git repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCodeRepository(
    args: CreateCodeRepositoryInput
  ): Promise<CreateCodeRepositoryOutput>;
  public createCodeRepository(
    args: CreateCodeRepositoryInput,
    cb: (err: any, data?: CreateCodeRepositoryOutput) => void
  ): void;
  public createCodeRepository(
    args: CreateCodeRepositoryInput,
    cb?: (err: any, data?: CreateCodeRepositoryOutput) => void
  ): Promise<CreateCodeRepositoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCodeRepositoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. </p> <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with AWS IoT Greengrass. In that case, deploy them as an ML resource.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p>A name for the compilation job</p> </li> <li> <p> Information about the input model artifacts </p> </li> <li> <p>The output location for the compiled model and the device (target) that the model runs on </p> </li> <li> <p> <code>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the model compilation job</code> </p> </li> </ul> <p>You can also provide a <code>Tag</code> to track the model compilation job's resource use and costs. The response body contains the <code>CompilationJobArn</code> for the compiled job.</p> <p>To stop a model compilation job, use <a>StopCompilationJob</a>. To get information about a particular model compilation job, use <a>DescribeCompilationJob</a>. To get information about multiple model compilation jobs, use <a>ListCompilationJobs</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUse} <p>Resource being accessed is in use.</p>
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCompilationJob(
    args: CreateCompilationJobInput
  ): Promise<CreateCompilationJobOutput>;
  public createCompilationJob(
    args: CreateCompilationJobInput,
    cb: (err: any, data?: CreateCompilationJobOutput) => void
  ): void;
  public createCompilationJob(
    args: CreateCompilationJobInput,
    cb?: (err: any, data?: CreateCompilationJobOutput) => void
  ): Promise<CreateCompilationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCompilationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an endpoint using the endpoint configuration specified in the request. Amazon SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html">CreateEndpointConfig</a> API. </p> <note> <p> Use this API only for hosting models using Amazon SageMaker hosting services. </p> <p> You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> </note> <p>The endpoint name must be unique within an AWS Region in your AWS account. </p> <p>When it receives the request, Amazon SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them. </p> <p>When Amazon SageMaker receives the request, it sets the endpoint status to <code>Creating</code>. After it creates the endpoint, it sets the status to <code>InService</code>. Amazon SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html">DescribeEndpoint</a> API.</p> <p>For an example, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1.html">Exercise 1: Using the K-Means Algorithm Provided by Amazon SageMaker</a>. </p> <p>If any of the models hosted at this endpoint get model data from an Amazon S3 location, Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provided. AWS STS is activated in your IAM user account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating AWS STS i an AWS Region</a> in the <i>AWS Identity and Access Management User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEndpoint(
    args: CreateEndpointInput
  ): Promise<CreateEndpointOutput>;
  public createEndpoint(
    args: CreateEndpointInput,
    cb: (err: any, data?: CreateEndpointOutput) => void
  ): void;
  public createEndpoint(
    args: CreateEndpointInput,
    cb?: (err: any, data?: CreateEndpointOutput) => void
  ): Promise<CreateEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the <code>CreateModel</code> API, to deploy and the resources that you want Amazon SageMaker to provision. Then you call the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API.</p> <note> <p> Use this API only if you want to use Amazon SageMaker hosting services to deploy models into production. </p> </note> <p>In the request, you define one or more <code>ProductionVariant</code>s, each of which identifies a model. Each <code>ProductionVariant</code> parameter also describes the resources that you want Amazon SageMaker to provision. This includes the number and type of ML compute instances to deploy. </p> <p>If you are hosting multiple models, you also assign a <code>VariantWeight</code> to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEndpointConfig(
    args: CreateEndpointConfigInput
  ): Promise<CreateEndpointConfigOutput>;
  public createEndpointConfig(
    args: CreateEndpointConfigInput,
    cb: (err: any, data?: CreateEndpointConfigOutput) => void
  ): void;
  public createEndpointConfig(
    args: CreateEndpointConfigInput,
    cb?: (err: any, data?: CreateEndpointConfigOutput) => void
  ): Promise<CreateEndpointConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEndpointConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUse} <p>Resource being accessed is in use.</p>
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createHyperParameterTuningJob(
    args: CreateHyperParameterTuningJobInput
  ): Promise<CreateHyperParameterTuningJobOutput>;
  public createHyperParameterTuningJob(
    args: CreateHyperParameterTuningJobInput,
    cb: (err: any, data?: CreateHyperParameterTuningJobOutput) => void
  ): void;
  public createHyperParameterTuningJob(
    args: CreateHyperParameterTuningJobInput,
    cb?: (err: any, data?: CreateHyperParameterTuningJobOutput) => void
  ): Promise<CreateHyperParameterTuningJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateHyperParameterTuningJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a job that uses workers to label the data objects in your input dataset. You can use the labeled data to train machine learning models.</p> <p>You can select your workforce from one of three providers:</p> <ul> <li> <p>A private workforce that you create. It can include employees, contractors, and outside experts. Use a private workforce when want the data to stay within your organization or when a specific set of skills is required.</p> </li> <li> <p>One or more vendors that you select from the AWS Marketplace. Vendors provide expertise in specific areas. </p> </li> <li> <p>The Amazon Mechanical Turk workforce. This is the largest workforce, but it should only be used for public data or data that has been stripped of any personally identifiable information.</p> </li> </ul> <p>You can also use <i>automated data labeling</i> to reduce the number of data objects that need to be labeled by a human. Automated data labeling uses <i>active learning</i> to determine if a data object can be labeled by machine or if it needs to be sent to a human worker. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html">Using Automated Data Labeling</a>.</p> <p>The data objects to be labeled are contained in an Amazon S3 bucket. You create a <i>manifest file</i> that describes the location of each object. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/sms-data.html">Using Input and Output Data</a>.</p> <p>The output can be used as the manifest file for another labeling job or as training data for your machine learning models.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUse} <p>Resource being accessed is in use.</p>
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLabelingJob(
    args: CreateLabelingJobInput
  ): Promise<CreateLabelingJobOutput>;
  public createLabelingJob(
    args: CreateLabelingJobInput,
    cb: (err: any, data?: CreateLabelingJobOutput) => void
  ): void;
  public createLabelingJob(
    args: CreateLabelingJobInput,
    cb?: (err: any, data?: CreateLabelingJobOutput) => void
  ): Promise<CreateLabelingJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLabelingJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a model in Amazon SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the docker image containing inference code, artifacts (from prior training), and custom environment map that the inference code uses when you deploy the model for predictions.</p> <p>Use this API to create a model if you want to use Amazon SageMaker hosting services or run a batch transform job.</p> <p>To host your model, you create an endpoint configuration with the <code>CreateEndpointConfig</code> API, and then create an endpoint with the <code>CreateEndpoint</code> API. Amazon SageMaker then deploys all of the containers that you defined for the model in the hosting environment. </p> <p>To run a batch transform using your model, you start a job with the <code>CreateTransformJob</code> API. Amazon SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location.</p> <p>In the <code>CreateModel</code> request, you must define a container with the <code>PrimaryContainer</code> parameter.</p> <p>In the request, you also provide an IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other AWS resources, you grant necessary permissions via this role.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createModel(args: CreateModelInput): Promise<CreateModelOutput>;
  public createModel(
    args: CreateModelInput,
    cb: (err: any, data?: CreateModelOutput) => void
  ): void;
  public createModel(
    args: CreateModelInput,
    cb?: (err: any, data?: CreateModelOutput) => void
  ): Promise<CreateModelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateModelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a model package that you can use to create Amazon SageMaker models or list on AWS Marketplace. Buyers can subscribe to model packages listed on AWS Marketplace to create models in Amazon SageMaker.</p> <p>To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for <code>InferenceSpecification</code>. To create a model from an algorithm resource that you created or subscribed to in AWS Marketplace, provide a value for <code>SourceAlgorithmSpecification</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createModelPackage(
    args: CreateModelPackageInput
  ): Promise<CreateModelPackageOutput>;
  public createModelPackage(
    args: CreateModelPackageInput,
    cb: (err: any, data?: CreateModelPackageOutput) => void
  ): void;
  public createModelPackage(
    args: CreateModelPackageInput,
    cb?: (err: any, data?: CreateModelPackageOutput) => void
  ): Promise<CreateModelPackageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateModelPackageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook. </p> <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute instance that you want to run. Amazon SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance. </p> <p>Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use Amazon SageMaker with a specific algorithm or with a machine learning framework. </p> <p>After receiving the request, Amazon SageMaker does the following:</p> <ol> <li> <p>Creates a network interface in the Amazon SageMaker VPC.</p> </li> <li> <p>(Option) If you specified <code>SubnetId</code>, Amazon SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, Amazon SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.</p> </li> <li> <p>Launches an EC2 instance of the type specified in the request in the Amazon SageMaker VPC. If you specified <code>SubnetId</code> of your VPC, Amazon SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.</p> </li> </ol> <p>After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN).</p> <p>After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and validate hosted models. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNotebookInstance(
    args: CreateNotebookInstanceInput
  ): Promise<CreateNotebookInstanceOutput>;
  public createNotebookInstance(
    args: CreateNotebookInstanceInput,
    cb: (err: any, data?: CreateNotebookInstanceOutput) => void
  ): void;
  public createNotebookInstance(
    args: CreateNotebookInstanceInput,
    cb?: (err: any, data?: CreateNotebookInstanceOutput) => void
  ): Promise<CreateNotebookInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNotebookInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a lifecycle configuration that you can associate with a notebook instance. A <i>lifecycle configuration</i> is a collection of shell scripts that run when you create or start a notebook instance.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNotebookInstanceLifecycleConfig(
    args: CreateNotebookInstanceLifecycleConfigInput
  ): Promise<CreateNotebookInstanceLifecycleConfigOutput>;
  public createNotebookInstanceLifecycleConfig(
    args: CreateNotebookInstanceLifecycleConfigInput,
    cb: (err: any, data?: CreateNotebookInstanceLifecycleConfigOutput) => void
  ): void;
  public createNotebookInstanceLifecycleConfig(
    args: CreateNotebookInstanceLifecycleConfigInput,
    cb?: (err: any, data?: CreateNotebookInstanceLifecycleConfigOutput) => void
  ): Promise<CreateNotebookInstanceLifecycleConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNotebookInstanceLifecycleConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the Amazon SageMaker console, when you choose <code>Open</code> next to a notebook instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page.</p> <p>IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the notebook instance.For example, you can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. Use the <code>NotIpAddress</code> condition operator and the <code>aws:SourceIP</code> condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-ip-filter.html">Limit Access to a Notebook Instance by IP Address</a>.</p> <note> <p>The URL that you get from a call to is valid only for 5 minutes. If you try to use the URL after the 5-minute limit expires, you are directed to the AWS console sign-in page.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPresignedNotebookInstanceUrl(
    args: CreatePresignedNotebookInstanceUrlInput
  ): Promise<CreatePresignedNotebookInstanceUrlOutput>;
  public createPresignedNotebookInstanceUrl(
    args: CreatePresignedNotebookInstanceUrlInput,
    cb: (err: any, data?: CreatePresignedNotebookInstanceUrlOutput) => void
  ): void;
  public createPresignedNotebookInstanceUrl(
    args: CreatePresignedNotebookInstanceUrlInput,
    cb?: (err: any, data?: CreatePresignedNotebookInstanceUrlOutput) => void
  ): Promise<CreatePresignedNotebookInstanceUrlOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePresignedNotebookInstanceUrlCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify. </p> <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a machine learning service other than Amazon SageMaker, provided that you know how to use them for inferences. </p> <p>In the request body, you provide the following: </p> <ul> <li> <p> <code>AlgorithmSpecification</code> - Identifies the training algorithm to use. </p> </li> <li> <p> <code>HyperParameters</code> - Specify these algorithm-specific parameters to enable the estimation of model parameters during training. Hyperparameters can be tuned to optimize this learning process. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p> </li> <li> <p> <code>InputDataConfig</code> - Describes the training dataset and the Amazon S3 location where it is stored.</p> </li> <li> <p> <code>OutputDataConfig</code> - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results of model training. </p> <p/> </li> <li> <p> <code>ResourceConfig</code> - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance. </p> </li> <li> <p> <code>RoleARN</code> - The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete model training. </p> </li> <li> <p> <code>StoppingCondition</code> - Sets a time limit for training. Use this parameter to cap model training costs. </p> </li> </ul> <p> For more information about Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUse} <p>Resource being accessed is in use.</p>
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTrainingJob(
    args: CreateTrainingJobInput
  ): Promise<CreateTrainingJobOutput>;
  public createTrainingJob(
    args: CreateTrainingJobInput,
    cb: (err: any, data?: CreateTrainingJobOutput) => void
  ): void;
  public createTrainingJob(
    args: CreateTrainingJobInput,
    cb?: (err: any, data?: CreateTrainingJobOutput) => void
  ): Promise<CreateTrainingJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTrainingJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify.</p> <p>To perform batch transformations, you create a transform job and use the data that you have readily available.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p> <code>TransformJobName</code> - Identifies the transform job. The name must be unique within an AWS Region in an AWS account.</p> </li> <li> <p> <code>ModelName</code> - Identifies the model to use. <code>ModelName</code> must be the name of an existing Amazon SageMaker model in the same AWS Region and AWS account. For information on creating a model, see <a>CreateModel</a>.</p> </li> <li> <p> <code>TransformInput</code> - Describes the dataset to be transformed and the Amazon S3 location where it is stored.</p> </li> <li> <p> <code>TransformOutput</code> - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p> </li> <li> <p> <code>TransformResources</code> - Identifies the ML compute instances for the transform job.</p> </li> </ul> <p> For more information about how batch transformation works Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">How It Works</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUse} <p>Resource being accessed is in use.</p>
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTransformJob(
    args: CreateTransformJobInput
  ): Promise<CreateTransformJobOutput>;
  public createTransformJob(
    args: CreateTransformJobInput,
    cb: (err: any, data?: CreateTransformJobOutput) => void
  ): void;
  public createTransformJob(
    args: CreateTransformJobInput,
    cb?: (err: any, data?: CreateTransformJobOutput) => void
  ): Promise<CreateTransformJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTransformJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team.</p> <p>You cannot create more than 25 work teams in an account and region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUse} <p>Resource being accessed is in use.</p>
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createWorkteam(
    args: CreateWorkteamInput
  ): Promise<CreateWorkteamOutput>;
  public createWorkteam(
    args: CreateWorkteamInput,
    cb: (err: any, data?: CreateWorkteamOutput) => void
  ): void;
  public createWorkteam(
    args: CreateWorkteamInput,
    cb?: (err: any, data?: CreateWorkteamOutput) => void
  ): Promise<CreateWorkteamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateWorkteamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified algorithm from your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAlgorithm(
    args: DeleteAlgorithmInput
  ): Promise<DeleteAlgorithmOutput>;
  public deleteAlgorithm(
    args: DeleteAlgorithmInput,
    cb: (err: any, data?: DeleteAlgorithmOutput) => void
  ): void;
  public deleteAlgorithm(
    args: DeleteAlgorithmInput,
    cb?: (err: any, data?: DeleteAlgorithmOutput) => void
  ): Promise<DeleteAlgorithmOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAlgorithmCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Git repository from your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCodeRepository(
    args: DeleteCodeRepositoryInput
  ): Promise<DeleteCodeRepositoryOutput>;
  public deleteCodeRepository(
    args: DeleteCodeRepositoryInput,
    cb: (err: any, data?: DeleteCodeRepositoryOutput) => void
  ): void;
  public deleteCodeRepository(
    args: DeleteCodeRepositoryInput,
    cb?: (err: any, data?: DeleteCodeRepositoryOutput) => void
  ): Promise<DeleteCodeRepositoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCodeRepositoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the endpoint was created. </p> <p>Amazon SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> API call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEndpoint(
    args: DeleteEndpointInput
  ): Promise<DeleteEndpointOutput>;
  public deleteEndpoint(
    args: DeleteEndpointInput,
    cb: (err: any, data?: DeleteEndpointOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointInput,
    cb?: (err: any, data?: DeleteEndpointOutput) => void
  ): Promise<DeleteEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API deletes only the specified configuration. It does not delete endpoints created using the configuration. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEndpointConfig(
    args: DeleteEndpointConfigInput
  ): Promise<DeleteEndpointConfigOutput>;
  public deleteEndpointConfig(
    args: DeleteEndpointConfigInput,
    cb: (err: any, data?: DeleteEndpointConfigOutput) => void
  ): void;
  public deleteEndpointConfig(
    args: DeleteEndpointConfigInput,
    cb?: (err: any, data?: DeleteEndpointConfigOutput) => void
  ): Promise<DeleteEndpointConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEndpointConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that was created in Amazon SageMaker when you called the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html">CreateModel</a> API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteModel(args: DeleteModelInput): Promise<DeleteModelOutput>;
  public deleteModel(
    args: DeleteModelInput,
    cb: (err: any, data?: DeleteModelOutput) => void
  ): void;
  public deleteModel(
    args: DeleteModelInput,
    cb?: (err: any, data?: DeleteModelOutput) => void
  ): Promise<DeleteModelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteModelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a model package.</p> <p>A model package is used to create Amazon SageMaker models or list on AWS Marketplace. Buyers can subscribe to model packages listed on AWS Marketplace to create models in Amazon SageMaker.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteModelPackage(
    args: DeleteModelPackageInput
  ): Promise<DeleteModelPackageOutput>;
  public deleteModelPackage(
    args: DeleteModelPackageInput,
    cb: (err: any, data?: DeleteModelPackageOutput) => void
  ): void;
  public deleteModelPackage(
    args: DeleteModelPackageInput,
    cb?: (err: any, data?: DeleteModelPackageOutput) => void
  ): Promise<DeleteModelPackageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteModelPackageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you must call the <code>StopNotebookInstance</code> API. </p> <important> <p>When you delete a notebook instance, you lose all of your data. Amazon SageMaker removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNotebookInstance(
    args: DeleteNotebookInstanceInput
  ): Promise<DeleteNotebookInstanceOutput>;
  public deleteNotebookInstance(
    args: DeleteNotebookInstanceInput,
    cb: (err: any, data?: DeleteNotebookInstanceOutput) => void
  ): void;
  public deleteNotebookInstance(
    args: DeleteNotebookInstanceInput,
    cb?: (err: any, data?: DeleteNotebookInstanceOutput) => void
  ): Promise<DeleteNotebookInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNotebookInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a notebook instance lifecycle configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNotebookInstanceLifecycleConfig(
    args: DeleteNotebookInstanceLifecycleConfigInput
  ): Promise<DeleteNotebookInstanceLifecycleConfigOutput>;
  public deleteNotebookInstanceLifecycleConfig(
    args: DeleteNotebookInstanceLifecycleConfigInput,
    cb: (err: any, data?: DeleteNotebookInstanceLifecycleConfigOutput) => void
  ): void;
  public deleteNotebookInstanceLifecycleConfig(
    args: DeleteNotebookInstanceLifecycleConfigInput,
    cb?: (err: any, data?: DeleteNotebookInstanceLifecycleConfigOutput) => void
  ): Promise<DeleteNotebookInstanceLifecycleConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNotebookInstanceLifecycleConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified tags from an Amazon SageMaker resource.</p> <p>To list a resource's tags, use the <code>ListTags</code> API. </p> <note> <p>When you call this API to delete tags from a hyperparameter tuning job, the deleted tags are not removed from training jobs that the hyperparameter tuning job launched before you called this API.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTags(args: DeleteTagsInput): Promise<DeleteTagsOutput>;
  public deleteTags(
    args: DeleteTagsInput,
    cb: (err: any, data?: DeleteTagsOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsInput,
    cb?: (err: any, data?: DeleteTagsOutput) => void
  ): Promise<DeleteTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing work team. This operation can't be undone.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteWorkteam(
    args: DeleteWorkteamInput
  ): Promise<DeleteWorkteamOutput>;
  public deleteWorkteam(
    args: DeleteWorkteamInput,
    cb: (err: any, data?: DeleteWorkteamOutput) => void
  ): void;
  public deleteWorkteam(
    args: DeleteWorkteamInput,
    cb?: (err: any, data?: DeleteWorkteamOutput) => void
  ): Promise<DeleteWorkteamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteWorkteamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a description of the specified algorithm that is in your account.</p>
   *
   * This operation may fail with one of the following errors:
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
   * <p>Gets details about the specified Git repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCodeRepository(
    args: DescribeCodeRepositoryInput
  ): Promise<DescribeCodeRepositoryOutput>;
  public describeCodeRepository(
    args: DescribeCodeRepositoryInput,
    cb: (err: any, data?: DescribeCodeRepositoryOutput) => void
  ): void;
  public describeCodeRepository(
    args: DescribeCodeRepositoryInput,
    cb?: (err: any, data?: DescribeCodeRepositoryOutput) => void
  ): Promise<DescribeCodeRepositoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCodeRepositoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a model compilation job.</p> <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get information about multiple model compilation jobs, use <a>ListCompilationJobs</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>Resource being access is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCompilationJob(
    args: DescribeCompilationJobInput
  ): Promise<DescribeCompilationJobOutput>;
  public describeCompilationJob(
    args: DescribeCompilationJobInput,
    cb: (err: any, data?: DescribeCompilationJobOutput) => void
  ): void;
  public describeCompilationJob(
    args: DescribeCompilationJobInput,
    cb?: (err: any, data?: DescribeCompilationJobOutput) => void
  ): Promise<DescribeCompilationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCompilationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the description of an endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEndpoint(
    args: DescribeEndpointInput
  ): Promise<DescribeEndpointOutput>;
  public describeEndpoint(
    args: DescribeEndpointInput,
    cb: (err: any, data?: DescribeEndpointOutput) => void
  ): void;
  public describeEndpoint(
    args: DescribeEndpointInput,
    cb?: (err: any, data?: DescribeEndpointOutput) => void
  ): Promise<DescribeEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the description of an endpoint configuration created using the <code>CreateEndpointConfig</code> API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEndpointConfig(
    args: DescribeEndpointConfigInput
  ): Promise<DescribeEndpointConfigOutput>;
  public describeEndpointConfig(
    args: DescribeEndpointConfigInput,
    cb: (err: any, data?: DescribeEndpointConfigOutput) => void
  ): void;
  public describeEndpointConfig(
    args: DescribeEndpointConfigInput,
    cb?: (err: any, data?: DescribeEndpointConfigOutput) => void
  ): Promise<DescribeEndpointConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEndpointConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a description of a hyperparameter tuning job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>Resource being access is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeHyperParameterTuningJob(
    args: DescribeHyperParameterTuningJobInput
  ): Promise<DescribeHyperParameterTuningJobOutput>;
  public describeHyperParameterTuningJob(
    args: DescribeHyperParameterTuningJobInput,
    cb: (err: any, data?: DescribeHyperParameterTuningJobOutput) => void
  ): void;
  public describeHyperParameterTuningJob(
    args: DescribeHyperParameterTuningJobInput,
    cb?: (err: any, data?: DescribeHyperParameterTuningJobOutput) => void
  ): Promise<DescribeHyperParameterTuningJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeHyperParameterTuningJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a labeling job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>Resource being access is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLabelingJob(
    args: DescribeLabelingJobInput
  ): Promise<DescribeLabelingJobOutput>;
  public describeLabelingJob(
    args: DescribeLabelingJobInput,
    cb: (err: any, data?: DescribeLabelingJobOutput) => void
  ): void;
  public describeLabelingJob(
    args: DescribeLabelingJobInput,
    cb?: (err: any, data?: DescribeLabelingJobOutput) => void
  ): Promise<DescribeLabelingJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLabelingJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a model that you created using the <code>CreateModel</code> API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeModel(args: DescribeModelInput): Promise<DescribeModelOutput>;
  public describeModel(
    args: DescribeModelInput,
    cb: (err: any, data?: DescribeModelOutput) => void
  ): void;
  public describeModel(
    args: DescribeModelInput,
    cb?: (err: any, data?: DescribeModelOutput) => void
  ): Promise<DescribeModelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeModelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a description of the specified model package, which is used to create Amazon SageMaker models or list them on AWS Marketplace.</p> <p>To create models in Amazon SageMaker, buyers can subscribe to model packages listed on AWS Marketplace.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeModelPackage(
    args: DescribeModelPackageInput
  ): Promise<DescribeModelPackageOutput>;
  public describeModelPackage(
    args: DescribeModelPackageInput,
    cb: (err: any, data?: DescribeModelPackageOutput) => void
  ): void;
  public describeModelPackage(
    args: DescribeModelPackageInput,
    cb?: (err: any, data?: DescribeModelPackageOutput) => void
  ): Promise<DescribeModelPackageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeModelPackageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a notebook instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNotebookInstance(
    args: DescribeNotebookInstanceInput
  ): Promise<DescribeNotebookInstanceOutput>;
  public describeNotebookInstance(
    args: DescribeNotebookInstanceInput,
    cb: (err: any, data?: DescribeNotebookInstanceOutput) => void
  ): void;
  public describeNotebookInstance(
    args: DescribeNotebookInstanceInput,
    cb?: (err: any, data?: DescribeNotebookInstanceOutput) => void
  ): Promise<DescribeNotebookInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNotebookInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a description of a notebook instance lifecycle configuration.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNotebookInstanceLifecycleConfig(
    args: DescribeNotebookInstanceLifecycleConfigInput
  ): Promise<DescribeNotebookInstanceLifecycleConfigOutput>;
  public describeNotebookInstanceLifecycleConfig(
    args: DescribeNotebookInstanceLifecycleConfigInput,
    cb: (err: any, data?: DescribeNotebookInstanceLifecycleConfigOutput) => void
  ): void;
  public describeNotebookInstanceLifecycleConfig(
    args: DescribeNotebookInstanceLifecycleConfigInput,
    cb?: (
      err: any,
      data?: DescribeNotebookInstanceLifecycleConfigOutput
    ) => void
  ): Promise<DescribeNotebookInstanceLifecycleConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNotebookInstanceLifecycleConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a work team provided by a vendor. It returns details about the subscription with a vendor in the AWS Marketplace.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSubscribedWorkteam(
    args: DescribeSubscribedWorkteamInput
  ): Promise<DescribeSubscribedWorkteamOutput>;
  public describeSubscribedWorkteam(
    args: DescribeSubscribedWorkteamInput,
    cb: (err: any, data?: DescribeSubscribedWorkteamOutput) => void
  ): void;
  public describeSubscribedWorkteam(
    args: DescribeSubscribedWorkteamInput,
    cb?: (err: any, data?: DescribeSubscribedWorkteamOutput) => void
  ): Promise<DescribeSubscribedWorkteamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSubscribedWorkteamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a training job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>Resource being access is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTrainingJob(
    args: DescribeTrainingJobInput
  ): Promise<DescribeTrainingJobOutput>;
  public describeTrainingJob(
    args: DescribeTrainingJobInput,
    cb: (err: any, data?: DescribeTrainingJobOutput) => void
  ): void;
  public describeTrainingJob(
    args: DescribeTrainingJobInput,
    cb?: (err: any, data?: DescribeTrainingJobOutput) => void
  ): Promise<DescribeTrainingJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTrainingJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a transform job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>Resource being access is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTransformJob(
    args: DescribeTransformJobInput
  ): Promise<DescribeTransformJobOutput>;
  public describeTransformJob(
    args: DescribeTransformJobInput,
    cb: (err: any, data?: DescribeTransformJobOutput) => void
  ): void;
  public describeTransformJob(
    args: DescribeTransformJobInput,
    cb?: (err: any, data?: DescribeTransformJobOutput) => void
  ): Promise<DescribeTransformJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTransformJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a specific work team. You can see information such as the create date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeWorkteam(
    args: DescribeWorkteamInput
  ): Promise<DescribeWorkteamOutput>;
  public describeWorkteam(
    args: DescribeWorkteamInput,
    cb: (err: any, data?: DescribeWorkteamOutput) => void
  ): void;
  public describeWorkteam(
    args: DescribeWorkteamInput,
    cb?: (err: any, data?: DescribeWorkteamOutput) => void
  ): Promise<DescribeWorkteamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeWorkteamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>An auto-complete API for the search functionality in the Amazon SageMaker console. It returns suggestions of possible matches for the property name to use in <code>Search</code> queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and <code>Metrics</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSearchSuggestions(
    args: GetSearchSuggestionsInput
  ): Promise<GetSearchSuggestionsOutput>;
  public getSearchSuggestions(
    args: GetSearchSuggestionsInput,
    cb: (err: any, data?: GetSearchSuggestionsOutput) => void
  ): void;
  public getSearchSuggestions(
    args: GetSearchSuggestionsInput,
    cb?: (err: any, data?: GetSearchSuggestionsOutput) => void
  ): Promise<GetSearchSuggestionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSearchSuggestionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the machine learning algorithms that have been created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAlgorithms(
    args: ListAlgorithmsInput
  ): Promise<ListAlgorithmsOutput>;
  public listAlgorithms(
    args: ListAlgorithmsInput,
    cb: (err: any, data?: ListAlgorithmsOutput) => void
  ): void;
  public listAlgorithms(
    args: ListAlgorithmsInput,
    cb?: (err: any, data?: ListAlgorithmsOutput) => void
  ): Promise<ListAlgorithmsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAlgorithmsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of the Git repositories in your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCodeRepositories(
    args: ListCodeRepositoriesInput
  ): Promise<ListCodeRepositoriesOutput>;
  public listCodeRepositories(
    args: ListCodeRepositoriesInput,
    cb: (err: any, data?: ListCodeRepositoriesOutput) => void
  ): void;
  public listCodeRepositories(
    args: ListCodeRepositoriesInput,
    cb?: (err: any, data?: ListCodeRepositoriesOutput) => void
  ): Promise<ListCodeRepositoriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCodeRepositoriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists model compilation jobs that satisfy various filters.</p> <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get information about a particular model compilation job you have created, use <a>DescribeCompilationJob</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCompilationJobs(
    args: ListCompilationJobsInput
  ): Promise<ListCompilationJobsOutput>;
  public listCompilationJobs(
    args: ListCompilationJobsInput,
    cb: (err: any, data?: ListCompilationJobsOutput) => void
  ): void;
  public listCompilationJobs(
    args: ListCompilationJobsInput,
    cb?: (err: any, data?: ListCompilationJobsOutput) => void
  ): Promise<ListCompilationJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCompilationJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists endpoint configurations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEndpointConfigs(
    args: ListEndpointConfigsInput
  ): Promise<ListEndpointConfigsOutput>;
  public listEndpointConfigs(
    args: ListEndpointConfigsInput,
    cb: (err: any, data?: ListEndpointConfigsOutput) => void
  ): void;
  public listEndpointConfigs(
    args: ListEndpointConfigsInput,
    cb?: (err: any, data?: ListEndpointConfigsOutput) => void
  ): Promise<ListEndpointConfigsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEndpointConfigsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists endpoints.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEndpoints(args: ListEndpointsInput): Promise<ListEndpointsOutput>;
  public listEndpoints(
    args: ListEndpointsInput,
    cb: (err: any, data?: ListEndpointsOutput) => void
  ): void;
  public listEndpoints(
    args: ListEndpointsInput,
    cb?: (err: any, data?: ListEndpointsOutput) => void
  ): Promise<ListEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of <a>HyperParameterTuningJobSummary</a> objects that describe the hyperparameter tuning jobs launched in your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listHyperParameterTuningJobs(
    args: ListHyperParameterTuningJobsInput
  ): Promise<ListHyperParameterTuningJobsOutput>;
  public listHyperParameterTuningJobs(
    args: ListHyperParameterTuningJobsInput,
    cb: (err: any, data?: ListHyperParameterTuningJobsOutput) => void
  ): void;
  public listHyperParameterTuningJobs(
    args: ListHyperParameterTuningJobsInput,
    cb?: (err: any, data?: ListHyperParameterTuningJobsOutput) => void
  ): Promise<ListHyperParameterTuningJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListHyperParameterTuningJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of labeling jobs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLabelingJobs(
    args: ListLabelingJobsInput
  ): Promise<ListLabelingJobsOutput>;
  public listLabelingJobs(
    args: ListLabelingJobsInput,
    cb: (err: any, data?: ListLabelingJobsOutput) => void
  ): void;
  public listLabelingJobs(
    args: ListLabelingJobsInput,
    cb?: (err: any, data?: ListLabelingJobsOutput) => void
  ): Promise<ListLabelingJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLabelingJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of labeling jobs assigned to a specified work team.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>Resource being access is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLabelingJobsForWorkteam(
    args: ListLabelingJobsForWorkteamInput
  ): Promise<ListLabelingJobsForWorkteamOutput>;
  public listLabelingJobsForWorkteam(
    args: ListLabelingJobsForWorkteamInput,
    cb: (err: any, data?: ListLabelingJobsForWorkteamOutput) => void
  ): void;
  public listLabelingJobsForWorkteam(
    args: ListLabelingJobsForWorkteamInput,
    cb?: (err: any, data?: ListLabelingJobsForWorkteamOutput) => void
  ): Promise<ListLabelingJobsForWorkteamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLabelingJobsForWorkteamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the model packages that have been created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listModelPackages(
    args: ListModelPackagesInput
  ): Promise<ListModelPackagesOutput>;
  public listModelPackages(
    args: ListModelPackagesInput,
    cb: (err: any, data?: ListModelPackagesOutput) => void
  ): void;
  public listModelPackages(
    args: ListModelPackagesInput,
    cb?: (err: any, data?: ListModelPackagesOutput) => void
  ): Promise<ListModelPackagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListModelPackagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists models created with the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html">CreateModel</a> API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listModels(args: ListModelsInput): Promise<ListModelsOutput>;
  public listModels(
    args: ListModelsInput,
    cb: (err: any, data?: ListModelsOutput) => void
  ): void;
  public listModels(
    args: ListModelsInput,
    cb?: (err: any, data?: ListModelsOutput) => void
  ): Promise<ListModelsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListModelsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists notebook instance lifestyle configurations created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listNotebookInstanceLifecycleConfigs(
    args: ListNotebookInstanceLifecycleConfigsInput
  ): Promise<ListNotebookInstanceLifecycleConfigsOutput>;
  public listNotebookInstanceLifecycleConfigs(
    args: ListNotebookInstanceLifecycleConfigsInput,
    cb: (err: any, data?: ListNotebookInstanceLifecycleConfigsOutput) => void
  ): void;
  public listNotebookInstanceLifecycleConfigs(
    args: ListNotebookInstanceLifecycleConfigsInput,
    cb?: (err: any, data?: ListNotebookInstanceLifecycleConfigsOutput) => void
  ): Promise<ListNotebookInstanceLifecycleConfigsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListNotebookInstanceLifecycleConfigsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS Region. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listNotebookInstances(
    args: ListNotebookInstancesInput
  ): Promise<ListNotebookInstancesOutput>;
  public listNotebookInstances(
    args: ListNotebookInstancesInput,
    cb: (err: any, data?: ListNotebookInstancesOutput) => void
  ): void;
  public listNotebookInstances(
    args: ListNotebookInstancesInput,
    cb?: (err: any, data?: ListNotebookInstancesOutput) => void
  ): Promise<ListNotebookInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListNotebookInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of the work teams that you are subscribed to in the AWS Marketplace. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSubscribedWorkteams(
    args: ListSubscribedWorkteamsInput
  ): Promise<ListSubscribedWorkteamsOutput>;
  public listSubscribedWorkteams(
    args: ListSubscribedWorkteamsInput,
    cb: (err: any, data?: ListSubscribedWorkteamsOutput) => void
  ): void;
  public listSubscribedWorkteams(
    args: ListSubscribedWorkteamsInput,
    cb?: (err: any, data?: ListSubscribedWorkteamsOutput) => void
  ): Promise<ListSubscribedWorkteamsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSubscribedWorkteamsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the tags for the specified Amazon SageMaker resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTags(args: ListTagsInput): Promise<ListTagsOutput>;
  public listTags(
    args: ListTagsInput,
    cb: (err: any, data?: ListTagsOutput) => void
  ): void;
  public listTags(
    args: ListTagsInput,
    cb?: (err: any, data?: ListTagsOutput) => void
  ): Promise<ListTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists training jobs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTrainingJobs(
    args: ListTrainingJobsInput
  ): Promise<ListTrainingJobsOutput>;
  public listTrainingJobs(
    args: ListTrainingJobsInput,
    cb: (err: any, data?: ListTrainingJobsOutput) => void
  ): void;
  public listTrainingJobs(
    args: ListTrainingJobsInput,
    cb?: (err: any, data?: ListTrainingJobsOutput) => void
  ): Promise<ListTrainingJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTrainingJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of <a>TrainingJobSummary</a> objects that describe the training jobs that a hyperparameter tuning job launched.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>Resource being access is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTrainingJobsForHyperParameterTuningJob(
    args: ListTrainingJobsForHyperParameterTuningJobInput
  ): Promise<ListTrainingJobsForHyperParameterTuningJobOutput>;
  public listTrainingJobsForHyperParameterTuningJob(
    args: ListTrainingJobsForHyperParameterTuningJobInput,
    cb: (
      err: any,
      data?: ListTrainingJobsForHyperParameterTuningJobOutput
    ) => void
  ): void;
  public listTrainingJobsForHyperParameterTuningJob(
    args: ListTrainingJobsForHyperParameterTuningJobInput,
    cb?: (
      err: any,
      data?: ListTrainingJobsForHyperParameterTuningJobOutput
    ) => void
  ): Promise<ListTrainingJobsForHyperParameterTuningJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTrainingJobsForHyperParameterTuningJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists transform jobs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTransformJobs(
    args: ListTransformJobsInput
  ): Promise<ListTransformJobsOutput>;
  public listTransformJobs(
    args: ListTransformJobsInput,
    cb: (err: any, data?: ListTransformJobsOutput) => void
  ): void;
  public listTransformJobs(
    args: ListTransformJobsInput,
    cb?: (err: any, data?: ListTransformJobsOutput) => void
  ): Promise<ListTransformJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTransformJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listWorkteams(args: ListWorkteamsInput): Promise<ListWorkteamsOutput>;
  public listWorkteams(
    args: ListWorkteamsInput,
    cb: (err: any, data?: ListWorkteamsOutput) => void
  ): void;
  public listWorkteams(
    args: ListWorkteamsInput,
    cb?: (err: any, data?: ListWorkteamsOutput) => void
  ): Promise<ListWorkteamsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListWorkteamsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Renders the UI template so that you can preview the worker's experience. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public renderUiTemplate(
    args: RenderUiTemplateInput
  ): Promise<RenderUiTemplateOutput>;
  public renderUiTemplate(
    args: RenderUiTemplateInput,
    cb: (err: any, data?: RenderUiTemplateOutput) => void
  ): void;
  public renderUiTemplate(
    args: RenderUiTemplateInput,
    cb?: (err: any, data?: RenderUiTemplateOutput) => void
  ): Promise<RenderUiTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RenderUiTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Finds Amazon SageMaker resources that match a search query. Matching resource objects are returned as a list of <code>SearchResult</code> objects in the response. You can sort the search results by any resource property in a ascending or descending order.</p> <p>You can query against the following value types: numerical, text, Booleans, and timestamps.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public search(args: SearchInput): Promise<SearchOutput>;
  public search(
    args: SearchInput,
    cb: (err: any, data?: SearchOutput) => void
  ): void;
  public search(
    args: SearchInput,
    cb?: (err: any, data?: SearchOutput) => void
  ): Promise<SearchOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the notebook instance status to <code>InService</code>. A notebook instance's status must be <code>InService</code> before you can connect to your Jupyter notebook. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startNotebookInstance(
    args: StartNotebookInstanceInput
  ): Promise<StartNotebookInstanceOutput>;
  public startNotebookInstance(
    args: StartNotebookInstanceInput,
    cb: (err: any, data?: StartNotebookInstanceOutput) => void
  ): void;
  public startNotebookInstance(
    args: StartNotebookInstanceInput,
    cb?: (err: any, data?: StartNotebookInstanceOutput) => void
  ): Promise<StartNotebookInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartNotebookInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a model compilation job.</p> <p> To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the job down. If the job hasn't stopped, it sends the SIGKILL signal.</p> <p>When it receives a <code>StopCompilationJob</code> request, Amazon SageMaker changes the <a>CompilationJobSummary$CompilationJobStatus</a> of the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the <a>CompilationJobSummary$CompilationJobStatus</a> to <code>Stopped</code>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>Resource being access is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopCompilationJob(
    args: StopCompilationJobInput
  ): Promise<StopCompilationJobOutput>;
  public stopCompilationJob(
    args: StopCompilationJobInput,
    cb: (err: any, data?: StopCompilationJobOutput) => void
  ): void;
  public stopCompilationJob(
    args: StopCompilationJobInput,
    cb?: (err: any, data?: StopCompilationJobOutput) => void
  ): Promise<StopCompilationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopCompilationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched.</p> <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the <code>Stopped</code> state, it releases all reserved resources for the tuning job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>Resource being access is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopHyperParameterTuningJob(
    args: StopHyperParameterTuningJobInput
  ): Promise<StopHyperParameterTuningJobOutput>;
  public stopHyperParameterTuningJob(
    args: StopHyperParameterTuningJobInput,
    cb: (err: any, data?: StopHyperParameterTuningJobOutput) => void
  ): void;
  public stopHyperParameterTuningJob(
    args: StopHyperParameterTuningJobInput,
    cb?: (err: any, data?: StopHyperParameterTuningJobOutput) => void
  ): Promise<StopHyperParameterTuningJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopHyperParameterTuningJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a running labeling job. A job that is stopped cannot be restarted. Any results obtained before the job is stopped are placed in the Amazon S3 output bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>Resource being access is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopLabelingJob(
    args: StopLabelingJobInput
  ): Promise<StopLabelingJobOutput>;
  public stopLabelingJob(
    args: StopLabelingJobInput,
    cb: (err: any, data?: StopLabelingJobOutput) => void
  ): void;
  public stopLabelingJob(
    args: StopLabelingJobInput,
    cb?: (err: any, data?: StopLabelingJobOutput) => void
  ): Promise<StopLabelingJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopLabelingJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Terminates the ML compute instance. Before terminating the instance, Amazon SageMaker disconnects the ML storage volume from it. Amazon SageMaker preserves the ML storage volume. Amazon SageMaker stops charging you for the ML compute instance when you call <code>StopNotebookInstance</code>.</p> <p>To access data on the ML storage volume for a notebook instance that has been terminated, call the <code>StartNotebookInstance</code> API. <code>StartNotebookInstance</code> launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopNotebookInstance(
    args: StopNotebookInstanceInput
  ): Promise<StopNotebookInstanceOutput>;
  public stopNotebookInstance(
    args: StopNotebookInstanceInput,
    cb: (err: any, data?: StopNotebookInstanceOutput) => void
  ): void;
  public stopNotebookInstance(
    args: StopNotebookInstanceInput,
    cb?: (err: any, data?: StopNotebookInstanceOutput) => void
  ): Promise<StopNotebookInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopNotebookInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost. </p> <p>When it receives a <code>StopTrainingJob</code> request, Amazon SageMaker changes the status of the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the status to <code>Stopped</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>Resource being access is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopTrainingJob(
    args: StopTrainingJobInput
  ): Promise<StopTrainingJobOutput>;
  public stopTrainingJob(
    args: StopTrainingJobInput,
    cb: (err: any, data?: StopTrainingJobOutput) => void
  ): void;
  public stopTrainingJob(
    args: StopTrainingJobInput,
    cb?: (err: any, data?: StopTrainingJobOutput) => void
  ): Promise<StopTrainingJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopTrainingJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a transform job.</p> <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job changes to <code>Stopping</code>. After Amazon SageMaker stops the job, the status is set to <code>Stopped</code>. When you stop a transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFound} <p>Resource being access is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopTransformJob(
    args: StopTransformJobInput
  ): Promise<StopTransformJobOutput>;
  public stopTransformJob(
    args: StopTransformJobInput,
    cb: (err: any, data?: StopTransformJobOutput) => void
  ): void;
  public stopTransformJob(
    args: StopTransformJobInput,
    cb?: (err: any, data?: StopTransformJobOutput) => void
  ): Promise<StopTransformJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopTransformJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified Git repository with the specified values.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCodeRepository(
    args: UpdateCodeRepositoryInput
  ): Promise<UpdateCodeRepositoryOutput>;
  public updateCodeRepository(
    args: UpdateCodeRepositoryInput,
    cb: (err: any, data?: UpdateCodeRepositoryOutput) => void
  ): void;
  public updateCodeRepository(
    args: UpdateCodeRepositoryInput,
    cb?: (err: any, data?: UpdateCodeRepositoryOutput) => void
  ): Promise<UpdateCodeRepositoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCodeRepositoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous <code>EndpointConfig</code> (there is no availability loss). </p> <p>When Amazon SageMaker receives the request, it sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html">DescribeEndpoint</a> API. </p> <note> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateEndpoint(
    args: UpdateEndpointInput
  ): Promise<UpdateEndpointOutput>;
  public updateEndpoint(
    args: UpdateEndpointInput,
    cb: (err: any, data?: UpdateEndpointOutput) => void
  ): void;
  public updateEndpoint(
    args: UpdateEndpointInput,
    cb?: (err: any, data?: UpdateEndpointOutput) => void
  ): Promise<UpdateEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, Amazon SageMaker sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html">DescribeEndpoint</a> API. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateEndpointWeightsAndCapacities(
    args: UpdateEndpointWeightsAndCapacitiesInput
  ): Promise<UpdateEndpointWeightsAndCapacitiesOutput>;
  public updateEndpointWeightsAndCapacities(
    args: UpdateEndpointWeightsAndCapacitiesInput,
    cb: (err: any, data?: UpdateEndpointWeightsAndCapacitiesOutput) => void
  ): void;
  public updateEndpointWeightsAndCapacities(
    args: UpdateEndpointWeightsAndCapacitiesInput,
    cb?: (err: any, data?: UpdateEndpointWeightsAndCapacitiesOutput) => void
  ): Promise<UpdateEndpointWeightsAndCapacitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateEndpointWeightsAndCapacitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateNotebookInstance(
    args: UpdateNotebookInstanceInput
  ): Promise<UpdateNotebookInstanceOutput>;
  public updateNotebookInstance(
    args: UpdateNotebookInstanceInput,
    cb: (err: any, data?: UpdateNotebookInstanceOutput) => void
  ): void;
  public updateNotebookInstance(
    args: UpdateNotebookInstanceInput,
    cb?: (err: any, data?: UpdateNotebookInstanceOutput) => void
  ): Promise<UpdateNotebookInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateNotebookInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a notebook instance lifecycle configuration created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateNotebookInstanceLifecycleConfig(
    args: UpdateNotebookInstanceLifecycleConfigInput
  ): Promise<UpdateNotebookInstanceLifecycleConfigOutput>;
  public updateNotebookInstanceLifecycleConfig(
    args: UpdateNotebookInstanceLifecycleConfigInput,
    cb: (err: any, data?: UpdateNotebookInstanceLifecycleConfigOutput) => void
  ): void;
  public updateNotebookInstanceLifecycleConfig(
    args: UpdateNotebookInstanceLifecycleConfigInput,
    cb?: (err: any, data?: UpdateNotebookInstanceLifecycleConfigOutput) => void
  ): Promise<UpdateNotebookInstanceLifecycleConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateNotebookInstanceLifecycleConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing work team with new member definitions or description.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceLimitExceeded} <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateWorkteam(
    args: UpdateWorkteamInput
  ): Promise<UpdateWorkteamOutput>;
  public updateWorkteam(
    args: UpdateWorkteamInput,
    cb: (err: any, data?: UpdateWorkteamOutput) => void
  ): void;
  public updateWorkteam(
    args: UpdateWorkteamInput,
    cb?: (err: any, data?: UpdateWorkteamOutput) => void
  ): Promise<UpdateWorkteamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateWorkteamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
