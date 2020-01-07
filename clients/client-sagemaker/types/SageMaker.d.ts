import { SageMakerClient } from "./SageMakerClient";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { AssociateTrialComponentCommandInput, AssociateTrialComponentCommandOutput } from "./commands/AssociateTrialComponentCommand";
import { CreateAlgorithmCommandInput, CreateAlgorithmCommandOutput } from "./commands/CreateAlgorithmCommand";
import { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import { CreateAutoMLJobCommandInput, CreateAutoMLJobCommandOutput } from "./commands/CreateAutoMLJobCommand";
import { CreateCodeRepositoryCommandInput, CreateCodeRepositoryCommandOutput } from "./commands/CreateCodeRepositoryCommand";
import { CreateCompilationJobCommandInput, CreateCompilationJobCommandOutput } from "./commands/CreateCompilationJobCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import { CreateEndpointConfigCommandInput, CreateEndpointConfigCommandOutput } from "./commands/CreateEndpointConfigCommand";
import { CreateExperimentCommandInput, CreateExperimentCommandOutput } from "./commands/CreateExperimentCommand";
import { CreateFlowDefinitionCommandInput, CreateFlowDefinitionCommandOutput } from "./commands/CreateFlowDefinitionCommand";
import { CreateHumanTaskUiCommandInput, CreateHumanTaskUiCommandOutput } from "./commands/CreateHumanTaskUiCommand";
import { CreateHyperParameterTuningJobCommandInput, CreateHyperParameterTuningJobCommandOutput } from "./commands/CreateHyperParameterTuningJobCommand";
import { CreateLabelingJobCommandInput, CreateLabelingJobCommandOutput } from "./commands/CreateLabelingJobCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { CreateModelPackageCommandInput, CreateModelPackageCommandOutput } from "./commands/CreateModelPackageCommand";
import { CreateMonitoringScheduleCommandInput, CreateMonitoringScheduleCommandOutput } from "./commands/CreateMonitoringScheduleCommand";
import { CreateNotebookInstanceCommandInput, CreateNotebookInstanceCommandOutput } from "./commands/CreateNotebookInstanceCommand";
import { CreateNotebookInstanceLifecycleConfigCommandInput, CreateNotebookInstanceLifecycleConfigCommandOutput } from "./commands/CreateNotebookInstanceLifecycleConfigCommand";
import { CreatePresignedDomainUrlCommandInput, CreatePresignedDomainUrlCommandOutput } from "./commands/CreatePresignedDomainUrlCommand";
import { CreatePresignedNotebookInstanceUrlCommandInput, CreatePresignedNotebookInstanceUrlCommandOutput } from "./commands/CreatePresignedNotebookInstanceUrlCommand";
import { CreateProcessingJobCommandInput, CreateProcessingJobCommandOutput } from "./commands/CreateProcessingJobCommand";
import { CreateTrainingJobCommandInput, CreateTrainingJobCommandOutput } from "./commands/CreateTrainingJobCommand";
import { CreateTransformJobCommandInput, CreateTransformJobCommandOutput } from "./commands/CreateTransformJobCommand";
import { CreateTrialCommandInput, CreateTrialCommandOutput } from "./commands/CreateTrialCommand";
import { CreateTrialComponentCommandInput, CreateTrialComponentCommandOutput } from "./commands/CreateTrialComponentCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "./commands/CreateUserProfileCommand";
import { CreateWorkteamCommandInput, CreateWorkteamCommandOutput } from "./commands/CreateWorkteamCommand";
import { DeleteAlgorithmCommandInput, DeleteAlgorithmCommandOutput } from "./commands/DeleteAlgorithmCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import { DeleteCodeRepositoryCommandInput, DeleteCodeRepositoryCommandOutput } from "./commands/DeleteCodeRepositoryCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import { DeleteEndpointConfigCommandInput, DeleteEndpointConfigCommandOutput } from "./commands/DeleteEndpointConfigCommand";
import { DeleteExperimentCommandInput, DeleteExperimentCommandOutput } from "./commands/DeleteExperimentCommand";
import { DeleteFlowDefinitionCommandInput, DeleteFlowDefinitionCommandOutput } from "./commands/DeleteFlowDefinitionCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import { DeleteModelPackageCommandInput, DeleteModelPackageCommandOutput } from "./commands/DeleteModelPackageCommand";
import { DeleteMonitoringScheduleCommandInput, DeleteMonitoringScheduleCommandOutput } from "./commands/DeleteMonitoringScheduleCommand";
import { DeleteNotebookInstanceCommandInput, DeleteNotebookInstanceCommandOutput } from "./commands/DeleteNotebookInstanceCommand";
import { DeleteNotebookInstanceLifecycleConfigCommandInput, DeleteNotebookInstanceLifecycleConfigCommandOutput } from "./commands/DeleteNotebookInstanceLifecycleConfigCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DeleteTrialCommandInput, DeleteTrialCommandOutput } from "./commands/DeleteTrialCommand";
import { DeleteTrialComponentCommandInput, DeleteTrialComponentCommandOutput } from "./commands/DeleteTrialComponentCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "./commands/DeleteUserProfileCommand";
import { DeleteWorkteamCommandInput, DeleteWorkteamCommandOutput } from "./commands/DeleteWorkteamCommand";
import { DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput } from "./commands/DescribeAlgorithmCommand";
import { DescribeAppCommandInput, DescribeAppCommandOutput } from "./commands/DescribeAppCommand";
import { DescribeAutoMLJobCommandInput, DescribeAutoMLJobCommandOutput } from "./commands/DescribeAutoMLJobCommand";
import { DescribeCodeRepositoryCommandInput, DescribeCodeRepositoryCommandOutput } from "./commands/DescribeCodeRepositoryCommand";
import { DescribeCompilationJobCommandInput, DescribeCompilationJobCommandOutput } from "./commands/DescribeCompilationJobCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "./commands/DescribeEndpointCommand";
import { DescribeEndpointConfigCommandInput, DescribeEndpointConfigCommandOutput } from "./commands/DescribeEndpointConfigCommand";
import { DescribeExperimentCommandInput, DescribeExperimentCommandOutput } from "./commands/DescribeExperimentCommand";
import { DescribeFlowDefinitionCommandInput, DescribeFlowDefinitionCommandOutput } from "./commands/DescribeFlowDefinitionCommand";
import { DescribeHumanTaskUiCommandInput, DescribeHumanTaskUiCommandOutput } from "./commands/DescribeHumanTaskUiCommand";
import { DescribeHyperParameterTuningJobCommandInput, DescribeHyperParameterTuningJobCommandOutput } from "./commands/DescribeHyperParameterTuningJobCommand";
import { DescribeLabelingJobCommandInput, DescribeLabelingJobCommandOutput } from "./commands/DescribeLabelingJobCommand";
import { DescribeModelCommandInput, DescribeModelCommandOutput } from "./commands/DescribeModelCommand";
import { DescribeModelPackageCommandInput, DescribeModelPackageCommandOutput } from "./commands/DescribeModelPackageCommand";
import { DescribeMonitoringScheduleCommandInput, DescribeMonitoringScheduleCommandOutput } from "./commands/DescribeMonitoringScheduleCommand";
import { DescribeNotebookInstanceCommandInput, DescribeNotebookInstanceCommandOutput } from "./commands/DescribeNotebookInstanceCommand";
import { DescribeNotebookInstanceLifecycleConfigCommandInput, DescribeNotebookInstanceLifecycleConfigCommandOutput } from "./commands/DescribeNotebookInstanceLifecycleConfigCommand";
import { DescribeProcessingJobCommandInput, DescribeProcessingJobCommandOutput } from "./commands/DescribeProcessingJobCommand";
import { DescribeSubscribedWorkteamCommandInput, DescribeSubscribedWorkteamCommandOutput } from "./commands/DescribeSubscribedWorkteamCommand";
import { DescribeTrainingJobCommandInput, DescribeTrainingJobCommandOutput } from "./commands/DescribeTrainingJobCommand";
import { DescribeTransformJobCommandInput, DescribeTransformJobCommandOutput } from "./commands/DescribeTransformJobCommand";
import { DescribeTrialCommandInput, DescribeTrialCommandOutput } from "./commands/DescribeTrialCommand";
import { DescribeTrialComponentCommandInput, DescribeTrialComponentCommandOutput } from "./commands/DescribeTrialComponentCommand";
import { DescribeUserProfileCommandInput, DescribeUserProfileCommandOutput } from "./commands/DescribeUserProfileCommand";
import { DescribeWorkforceCommandInput, DescribeWorkforceCommandOutput } from "./commands/DescribeWorkforceCommand";
import { DescribeWorkteamCommandInput, DescribeWorkteamCommandOutput } from "./commands/DescribeWorkteamCommand";
import { DisassociateTrialComponentCommandInput, DisassociateTrialComponentCommandOutput } from "./commands/DisassociateTrialComponentCommand";
import { GetSearchSuggestionsCommandInput, GetSearchSuggestionsCommandOutput } from "./commands/GetSearchSuggestionsCommand";
import { ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput } from "./commands/ListAlgorithmsCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import { ListAutoMLJobsCommandInput, ListAutoMLJobsCommandOutput } from "./commands/ListAutoMLJobsCommand";
import { ListCandidatesForAutoMLJobCommandInput, ListCandidatesForAutoMLJobCommandOutput } from "./commands/ListCandidatesForAutoMLJobCommand";
import { ListCodeRepositoriesCommandInput, ListCodeRepositoriesCommandOutput } from "./commands/ListCodeRepositoriesCommand";
import { ListCompilationJobsCommandInput, ListCompilationJobsCommandOutput } from "./commands/ListCompilationJobsCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import { ListEndpointConfigsCommandInput, ListEndpointConfigsCommandOutput } from "./commands/ListEndpointConfigsCommand";
import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "./commands/ListEndpointsCommand";
import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "./commands/ListExperimentsCommand";
import { ListFlowDefinitionsCommandInput, ListFlowDefinitionsCommandOutput } from "./commands/ListFlowDefinitionsCommand";
import { ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput } from "./commands/ListHumanTaskUisCommand";
import { ListHyperParameterTuningJobsCommandInput, ListHyperParameterTuningJobsCommandOutput } from "./commands/ListHyperParameterTuningJobsCommand";
import { ListLabelingJobsCommandInput, ListLabelingJobsCommandOutput } from "./commands/ListLabelingJobsCommand";
import { ListLabelingJobsForWorkteamCommandInput, ListLabelingJobsForWorkteamCommandOutput } from "./commands/ListLabelingJobsForWorkteamCommand";
import { ListModelPackagesCommandInput, ListModelPackagesCommandOutput } from "./commands/ListModelPackagesCommand";
import { ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
import { ListMonitoringExecutionsCommandInput, ListMonitoringExecutionsCommandOutput } from "./commands/ListMonitoringExecutionsCommand";
import { ListMonitoringSchedulesCommandInput, ListMonitoringSchedulesCommandOutput } from "./commands/ListMonitoringSchedulesCommand";
import { ListNotebookInstanceLifecycleConfigsCommandInput, ListNotebookInstanceLifecycleConfigsCommandOutput } from "./commands/ListNotebookInstanceLifecycleConfigsCommand";
import { ListNotebookInstancesCommandInput, ListNotebookInstancesCommandOutput } from "./commands/ListNotebookInstancesCommand";
import { ListProcessingJobsCommandInput, ListProcessingJobsCommandOutput } from "./commands/ListProcessingJobsCommand";
import { ListSubscribedWorkteamsCommandInput, ListSubscribedWorkteamsCommandOutput } from "./commands/ListSubscribedWorkteamsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput } from "./commands/ListTrainingJobsCommand";
import { ListTrainingJobsForHyperParameterTuningJobCommandInput, ListTrainingJobsForHyperParameterTuningJobCommandOutput } from "./commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import { ListTransformJobsCommandInput, ListTransformJobsCommandOutput } from "./commands/ListTransformJobsCommand";
import { ListTrialComponentsCommandInput, ListTrialComponentsCommandOutput } from "./commands/ListTrialComponentsCommand";
import { ListTrialsCommandInput, ListTrialsCommandOutput } from "./commands/ListTrialsCommand";
import { ListUserProfilesCommandInput, ListUserProfilesCommandOutput } from "./commands/ListUserProfilesCommand";
import { ListWorkteamsCommandInput, ListWorkteamsCommandOutput } from "./commands/ListWorkteamsCommand";
import { RenderUiTemplateCommandInput, RenderUiTemplateCommandOutput } from "./commands/RenderUiTemplateCommand";
import { SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import { StartMonitoringScheduleCommandInput, StartMonitoringScheduleCommandOutput } from "./commands/StartMonitoringScheduleCommand";
import { StartNotebookInstanceCommandInput, StartNotebookInstanceCommandOutput } from "./commands/StartNotebookInstanceCommand";
import { StopAutoMLJobCommandInput, StopAutoMLJobCommandOutput } from "./commands/StopAutoMLJobCommand";
import { StopCompilationJobCommandInput, StopCompilationJobCommandOutput } from "./commands/StopCompilationJobCommand";
import { StopHyperParameterTuningJobCommandInput, StopHyperParameterTuningJobCommandOutput } from "./commands/StopHyperParameterTuningJobCommand";
import { StopLabelingJobCommandInput, StopLabelingJobCommandOutput } from "./commands/StopLabelingJobCommand";
import { StopMonitoringScheduleCommandInput, StopMonitoringScheduleCommandOutput } from "./commands/StopMonitoringScheduleCommand";
import { StopNotebookInstanceCommandInput, StopNotebookInstanceCommandOutput } from "./commands/StopNotebookInstanceCommand";
import { StopProcessingJobCommandInput, StopProcessingJobCommandOutput } from "./commands/StopProcessingJobCommand";
import { StopTrainingJobCommandInput, StopTrainingJobCommandOutput } from "./commands/StopTrainingJobCommand";
import { StopTransformJobCommandInput, StopTransformJobCommandOutput } from "./commands/StopTransformJobCommand";
import { UpdateCodeRepositoryCommandInput, UpdateCodeRepositoryCommandOutput } from "./commands/UpdateCodeRepositoryCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "./commands/UpdateEndpointCommand";
import { UpdateEndpointWeightsAndCapacitiesCommandInput, UpdateEndpointWeightsAndCapacitiesCommandOutput } from "./commands/UpdateEndpointWeightsAndCapacitiesCommand";
import { UpdateExperimentCommandInput, UpdateExperimentCommandOutput } from "./commands/UpdateExperimentCommand";
import { UpdateMonitoringScheduleCommandInput, UpdateMonitoringScheduleCommandOutput } from "./commands/UpdateMonitoringScheduleCommand";
import { UpdateNotebookInstanceCommandInput, UpdateNotebookInstanceCommandOutput } from "./commands/UpdateNotebookInstanceCommand";
import { UpdateNotebookInstanceLifecycleConfigCommandInput, UpdateNotebookInstanceLifecycleConfigCommandOutput } from "./commands/UpdateNotebookInstanceLifecycleConfigCommand";
import { UpdateTrialCommandInput, UpdateTrialCommandOutput } from "./commands/UpdateTrialCommand";
import { UpdateTrialComponentCommandInput, UpdateTrialComponentCommandOutput } from "./commands/UpdateTrialComponentCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "./commands/UpdateUserProfileCommand";
import { UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput } from "./commands/UpdateWorkforceCommand";
import { UpdateWorkteamCommandInput, UpdateWorkteamCommandOutput } from "./commands/UpdateWorkteamCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Provides APIs for creating and managing Amazon SageMaker resources.</p>
 */
export declare class SageMaker extends SageMakerClient {
    /**
     * <p>Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add
     *             tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform
     *             jobs, models, labeling jobs, work teams, endpoint configurations, and
     *             endpoints.</p>
     *         <p>Each tag consists of a key and an optional value. Tag keys must be unique per
     *             resource. For more information about tags, see For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
     *                 Tagging Strategies</a>.</p>
     *         <note>
     *             <p>Tags that you add to a hyperparameter tuning job by calling this API are also
     *                 added to any training jobs that the hyperparameter tuning job launches after you
     *                 call this API, but not to training jobs that the hyperparameter tuning job launched
     *                 before you called this API. To make sure that the tags associated with a
     *                 hyperparameter tuning job are also added to all training jobs that the
     *                 hyperparameter tuning job launches, add the tags when you first create the tuning
     *                 job by specifying them in the <code>Tags</code> parameter of <a>CreateHyperParameterTuningJob</a>
     *             </p>
     *         </note>
     */
    addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
    addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    addTags(args: AddTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    /**
     * <p>Associates a trial component with a trial. A trial component can be associated
     *       with multiple trials. To disassociate a trial component from a trial, call the
     *       <a>DisassociateTrialComponent</a> API.</p>
     */
    associateTrialComponent(args: AssociateTrialComponentCommandInput, options?: __HttpHandlerOptions): Promise<AssociateTrialComponentCommandOutput>;
    associateTrialComponent(args: AssociateTrialComponentCommandInput, cb: (err: any, data?: AssociateTrialComponentCommandOutput) => void): void;
    associateTrialComponent(args: AssociateTrialComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateTrialComponentCommandOutput) => void): void;
    /**
     * <p>Create a machine learning algorithm that you can use in Amazon SageMaker and list in the AWS
     *             Marketplace.</p>
     */
    createAlgorithm(args: CreateAlgorithmCommandInput, options?: __HttpHandlerOptions): Promise<CreateAlgorithmCommandOutput>;
    createAlgorithm(args: CreateAlgorithmCommandInput, cb: (err: any, data?: CreateAlgorithmCommandOutput) => void): void;
    createAlgorithm(args: CreateAlgorithmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAlgorithmCommandOutput) => void): void;
    /**
     * <p>Creates a running App for the specified UserProfile.  Supported Apps are JupyterServer and KernelGateway.
     *      This operation is automatically invoked by Amazon SageMaker Amazon SageMaker Studio (Studio)
     *      upon access to the associated Studio Domain, and when new kernel configurations are selected by the user.
     *      A user may have multiple Apps active simultaneously.  Apps will automatically terminate and be deleted when stopped
     *      from within Studio, or when the DeleteApp API is manually called.
     *      UserProfiles are limited to 5 concurrently running Apps at a time.</p>
     */
    createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
    createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
    createApp(args: CreateAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
    /**
     * <p>Creates an AutoPilot job.</p>
     */
    createAutoMLJob(args: CreateAutoMLJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateAutoMLJobCommandOutput>;
    createAutoMLJob(args: CreateAutoMLJobCommandInput, cb: (err: any, data?: CreateAutoMLJobCommandOutput) => void): void;
    createAutoMLJob(args: CreateAutoMLJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAutoMLJobCommandOutput) => void): void;
    /**
     * <p>Creates a Git repository as a resource in your Amazon SageMaker account. You can associate the
     *             repository with notebook instances so that you can use Git source control for the
     *             notebooks you create. The Git repository is a resource in your Amazon SageMaker account, so it can
     *             be associated with more than one notebook instance, and it persists independently from
     *             the lifecycle of any notebook instances it is associated with.</p>
     *         <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
     *             other Git repository.</p>
     */
    createCodeRepository(args: CreateCodeRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<CreateCodeRepositoryCommandOutput>;
    createCodeRepository(args: CreateCodeRepositoryCommandInput, cb: (err: any, data?: CreateCodeRepositoryCommandOutput) => void): void;
    createCodeRepository(args: CreateCodeRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCodeRepositoryCommandOutput) => void): void;
    /**
     * <p>Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the
     *             resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. </p>
     *         <p>If
     *             you choose to host your model using Amazon SageMaker hosting services, you can use the resulting
     *             model artifacts as part of the model. You can also use the artifacts with
     *             AWS
     *             IoT Greengrass. In that case, deploy them as an ML
     *             resource.</p>
     *         <p>In the request body, you provide the following:</p>
     *         <ul>
     *             <li>
     *                 <p>A name for the compilation job</p>
     *             </li>
     *             <li>
     *                 <p> Information about the input model artifacts </p>
     *             </li>
     *             <li>
     *                 <p>The output location for the compiled model and the device (target) that the
     *                     model runs on </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to
     *                         perform the model compilation job</code>
     *                 </p>
     *             </li>
     *          </ul>
     *         <p>You can also provide a <code>Tag</code> to track the model compilation job's resource
     *             use and costs. The response body contains the
     *                 <code>CompilationJobArn</code>
     *             for the compiled job.</p>
     *         <p>To stop a model compilation job, use <a>StopCompilationJob</a>. To get
     *             information about a particular model compilation job, use <a>DescribeCompilationJob</a>. To get information about multiple model
     *             compilation jobs, use <a>ListCompilationJobs</a>.</p>
     */
    createCompilationJob(args: CreateCompilationJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateCompilationJobCommandOutput>;
    createCompilationJob(args: CreateCompilationJobCommandInput, cb: (err: any, data?: CreateCompilationJobCommandOutput) => void): void;
    createCompilationJob(args: CreateCompilationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCompilationJobCommandOutput) => void): void;
    /**
     * <p>Creates a Domain for Amazon SageMaker Amazon SageMaker Studio (Studio), which can be accessed by end-users in a web browser.  A Domain
     *      has an associated directory, list of authorized users, and a variety of security, application, policies, and
     *      Amazon Virtual Private Cloud configurations.  An AWS account is limited to one Domain, per region.
     *      Users within a domain can share notebook files and other artifacts with each other.
     *      When a Domain is created, an Amazon Elastic File System (EFS) is also created for use by all of the users within the Domain.  Each
     *      user receives a private home directory within the EFS for notebooks, Git repositories, and data files.
     *      </p>
     */
    createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
    createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    createDomain(args: CreateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    /**
     * <p>Creates an endpoint using the endpoint configuration specified in the request. Amazon SageMaker
     *             uses the endpoint to provision resources and deploy models. You create the endpoint
     *             configuration with the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html">CreateEndpointConfig</a>
     *             API. </p>
     *         <note>
     *             <p> Use this API only for hosting models using Amazon SageMaker hosting services. </p>
     *             <p> You must not delete an <code>EndpointConfig</code> in use by an endpoint that is
     *                 live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code>
     *                 operations are being performed on the endpoint. To update an endpoint, you must
     *                 create a new <code>EndpointConfig</code>.</p>
     *         </note>
     *         <p>The endpoint name must be unique within an AWS Region in your AWS account. </p>
     *         <p>When it receives the request, Amazon SageMaker creates the endpoint, launches the resources (ML
     *             compute instances), and deploys the model(s) on them. </p>
     *
     *         <p>When Amazon SageMaker receives the request, it sets the endpoint status to
     *                 <code>Creating</code>. After it creates the endpoint, it sets the status to
     *                 <code>InService</code>. Amazon SageMaker can then process incoming requests for inferences. To
     *             check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html">DescribeEndpoint</a>
     *             API.</p>
     *         <p>For an example, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1.html">Exercise 1: Using the K-Means Algorithm Provided by Amazon SageMaker</a>. </p>
     *         <p>If any of the models hosted at this endpoint get model data from an Amazon S3 location,
     *             Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you
     *             provided. AWS STS is activated in your IAM user account by default. If you previously
     *             deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For
     *             more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
     *                 Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and Access Management User
     *                 Guide</i>.</p>
     */
    createEndpoint(args: CreateEndpointCommandInput, options?: __HttpHandlerOptions): Promise<CreateEndpointCommandOutput>;
    createEndpoint(args: CreateEndpointCommandInput, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
    createEndpoint(args: CreateEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
    /**
     * <p>Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models.
     *             In the configuration, you identify one or more models, created using the
     *                 <code>CreateModel</code> API, to deploy and the resources that you want Amazon SageMaker to
     *             provision. Then you call the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a>
     *             API.</p>
     *         <note>
     *             <p> Use this API only if you want to use Amazon SageMaker hosting services to deploy models
     *                 into production. </p>
     *         </note>
     *         <p>In the request, you define one or more <code>ProductionVariant</code>s, each of
     *             which identifies a model. Each <code>ProductionVariant</code> parameter also describes
     *             the resources that you want Amazon SageMaker to provision. This includes the number and type of ML
     *             compute instances to deploy. </p>
     *         <p>If you are hosting multiple models, you also assign a <code>VariantWeight</code> to
     *             specify how much traffic you want to allocate to each model. For example, suppose that
     *             you want to host two models, A and B, and you assign traffic weight 2 for model A and 1
     *             for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to
     *             model B. </p>
     */
    createEndpointConfig(args: CreateEndpointConfigCommandInput, options?: __HttpHandlerOptions): Promise<CreateEndpointConfigCommandOutput>;
    createEndpointConfig(args: CreateEndpointConfigCommandInput, cb: (err: any, data?: CreateEndpointConfigCommandOutput) => void): void;
    createEndpointConfig(args: CreateEndpointConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEndpointConfigCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon SageMaker <i>experiment</i>. An experiment is a collection of
     *       <i>trials</i> that are observed, compared and evaluated as a group. A trial is
     *       a set of steps, called <i>trial components</i>, that produce a machine learning
     *       model.</p>
     *          <p>The goal of an experiment is to determine the components that produce the best model.
     *       Multiple trials are performed, each one isolating and measuring the impact of a change to
     *       one or more inputs, while keeping the remaining inputs constant.</p>
     *          <p>When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial
     *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto),
     *       you must use the logging APIs provided by the SDK.</p>
     *          <p>You can add tags to experiments, trials, trial components and then use the
     *       <a>Search</a> API to search for the tags.</p>
     *          <p>To add a description to an experiment, specify the optional
     *       <code>Description</code> parameter. To add a description later, or to change the description,
     *       call the <a>UpdateExperiment</a> API.</p>
     *          <p>To get a list of all your experiments, call the <a>ListExperiments</a> API.
     *       To view an experiment's properties, call the <a>DescribeExperiment</a>
     *       API. To get a list of all the trials associated with an experiment, call the
     *       <a>ListTrials</a> API. To create a trial call the
     *       <a>CreateTrial</a> API.</p>
     */
    createExperiment(args: CreateExperimentCommandInput, options?: __HttpHandlerOptions): Promise<CreateExperimentCommandOutput>;
    createExperiment(args: CreateExperimentCommandInput, cb: (err: any, data?: CreateExperimentCommandOutput) => void): void;
    createExperiment(args: CreateExperimentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateExperimentCommandOutput) => void): void;
    /**
     * <p>Creates a flow definition.</p>
     */
    createFlowDefinition(args: CreateFlowDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateFlowDefinitionCommandOutput>;
    createFlowDefinition(args: CreateFlowDefinitionCommandInput, cb: (err: any, data?: CreateFlowDefinitionCommandOutput) => void): void;
    createFlowDefinition(args: CreateFlowDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFlowDefinitionCommandOutput) => void): void;
    /**
     * <p>Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.</p>
     */
    createHumanTaskUi(args: CreateHumanTaskUiCommandInput, options?: __HttpHandlerOptions): Promise<CreateHumanTaskUiCommandOutput>;
    createHumanTaskUi(args: CreateHumanTaskUiCommandInput, cb: (err: any, data?: CreateHumanTaskUiCommandOutput) => void): void;
    createHumanTaskUi(args: CreateHumanTaskUiCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHumanTaskUiCommandOutput) => void): void;
    /**
     * <p>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version
     *             of a model by running many training jobs on your dataset using the algorithm you choose
     *             and values for hyperparameters within ranges that you specify. It then chooses the
     *             hyperparameter values that result in a model that performs the best, as measured by an
     *             objective metric that you choose.</p>
     */
    createHyperParameterTuningJob(args: CreateHyperParameterTuningJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateHyperParameterTuningJobCommandOutput>;
    createHyperParameterTuningJob(args: CreateHyperParameterTuningJobCommandInput, cb: (err: any, data?: CreateHyperParameterTuningJobCommandOutput) => void): void;
    createHyperParameterTuningJob(args: CreateHyperParameterTuningJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHyperParameterTuningJobCommandOutput) => void): void;
    /**
     * <p>Creates a job that uses workers to label the data objects in your input dataset. You
     *             can use the labeled data to train machine learning models.</p>
     *         <p>You can select your workforce from one of three providers:</p>
     *         <ul>
     *             <li>
     *                 <p>A private workforce that you create. It can include employees, contractors,
     *                     and outside experts. Use a private workforce when want the data to stay within
     *                     your organization or when a specific set of skills is required.</p>
     *             </li>
     *             <li>
     *                 <p>One or more vendors that you select from the AWS Marketplace. Vendors provide
     *                     expertise in specific areas. </p>
     *             </li>
     *             <li>
     *                 <p>The Amazon Mechanical Turk workforce. This is the largest workforce, but it
     *                     should only be used for public data or data that has been stripped of any
     *                     personally identifiable information.</p>
     *             </li>
     *          </ul>
     *         <p>You can also use <i>automated data labeling</i> to reduce the number of
     *             data objects that need to be labeled by a human. Automated data labeling uses
     *                 <i>active learning</i> to determine if a data object can be labeled by
     *             machine or if it needs to be sent to a human worker. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html">Using
     *                 Automated Data Labeling</a>.</p>
     *         <p>The data objects to be labeled are contained in an Amazon S3 bucket. You create a
     *                 <i>manifest file</i> that describes the location of each object. For
     *             more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data.html">Using Input and Output Data</a>.</p>
     *         <p>The output can be used as the manifest file for another labeling job or as training
     *             data for your machine learning models.</p>
     */
    createLabelingJob(args: CreateLabelingJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateLabelingJobCommandOutput>;
    createLabelingJob(args: CreateLabelingJobCommandInput, cb: (err: any, data?: CreateLabelingJobCommandOutput) => void): void;
    createLabelingJob(args: CreateLabelingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLabelingJobCommandOutput) => void): void;
    /**
     * <p>Creates a model in Amazon SageMaker. In the request, you name the model and describe a primary
     *             container. For the primary container,
     *             you specify the docker image containing inference code, artifacts (from prior training),
     *             and custom environment map that the inference code uses when you deploy the model for
     *             predictions.</p>
     *         <p>Use this API to create a model if you want to use Amazon SageMaker hosting services or run a batch
     *             transform job.</p>
     *         <p>To host your model, you create an endpoint configuration with the
     *                 <code>CreateEndpointConfig</code> API, and then create an endpoint with the
     *                 <code>CreateEndpoint</code> API. Amazon SageMaker then deploys all of the containers that you
     *             defined for the model in the hosting environment. </p>
     *         <p>To run a batch transform using your model, you start a job with the
     *                 <code>CreateTransformJob</code> API. Amazon SageMaker uses your model and your dataset to get
     *             inferences which are then saved to a specified S3 location.</p>
     *         <p>In the <code>CreateModel</code> request, you must define a container with the
     *                 <code>PrimaryContainer</code> parameter.</p>
     *         <p>In the request, you also provide an IAM role that Amazon SageMaker can assume to access model
     *             artifacts and docker image for deployment on ML compute hosting instances or for batch
     *             transform jobs. In addition, you also use the IAM role to manage permissions the
     *             inference code needs. For example, if the inference code access any other AWS resources,
     *             you grant necessary permissions via this role.</p>
     */
    createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
    createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
    createModel(args: CreateModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
    /**
     * <p>Creates a model package that you can use to create Amazon SageMaker models or list on AWS
     *             Marketplace. Buyers can subscribe to model packages listed on AWS Marketplace to create
     *             models in Amazon SageMaker.</p>
     *         <p>To create a model package by specifying a Docker container that contains your
     *             inference code and the Amazon S3 location of your model artifacts, provide values for
     *                 <code>InferenceSpecification</code>. To create a model from an algorithm resource
     *             that you created or subscribed to in AWS Marketplace, provide a value for
     *                 <code>SourceAlgorithmSpecification</code>.</p>
     */
    createModelPackage(args: CreateModelPackageCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelPackageCommandOutput>;
    createModelPackage(args: CreateModelPackageCommandInput, cb: (err: any, data?: CreateModelPackageCommandOutput) => void): void;
    createModelPackage(args: CreateModelPackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelPackageCommandOutput) => void): void;
    /**
     * <p>Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data
     *          captured for an Amazon SageMaker Endoint.</p>
     */
    createMonitoringSchedule(args: CreateMonitoringScheduleCommandInput, options?: __HttpHandlerOptions): Promise<CreateMonitoringScheduleCommandOutput>;
    createMonitoringSchedule(args: CreateMonitoringScheduleCommandInput, cb: (err: any, data?: CreateMonitoringScheduleCommandOutput) => void): void;
    createMonitoringSchedule(args: CreateMonitoringScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMonitoringScheduleCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML)
     *             compute instance running on a Jupyter notebook. </p>
     *         <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute
     *             instance that you want to run. Amazon SageMaker launches the instance, installs common libraries
     *             that you can use to explore datasets for model training, and attaches an ML storage
     *             volume to the notebook instance. </p>
     *         <p>Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to
     *             use Amazon SageMaker with a specific algorithm or with a machine learning framework. </p>
     *         <p>After receiving the request, Amazon SageMaker does the following:</p>
     *         <ol>
     *             <li>
     *                 <p>Creates a network interface in the Amazon SageMaker VPC.</p>
     *             </li>
     *             <li>
     *                 <p>(Option) If you specified <code>SubnetId</code>, Amazon SageMaker creates a network
     *                     interface in your own VPC, which is inferred from the subnet ID that you provide
     *                     in the input. When creating this network interface, Amazon SageMaker attaches the security
     *                     group that you specified in the request to the network interface that it creates
     *                     in your VPC.</p>
     *
     *             </li>
     *             <li>
     *                 <p>Launches an EC2 instance of the type specified in the request in the Amazon SageMaker
     *                     VPC. If you specified <code>SubnetId</code> of your VPC, Amazon SageMaker specifies both
     *                     network interfaces when launching this instance. This enables inbound traffic
     *                     from your own VPC to the notebook instance, assuming that the security groups
     *                     allow it.</p>
     *             </li>
     *          </ol>
     *
     *         <p>After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN).
     *             You can't change the name of a notebook instance after you create it.</p>
     *         <p>After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and
     *             work in Jupyter notebooks. For example, you can write code to explore a dataset that you
     *             can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and
     *             validate hosted models. </p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
     */
    createNotebookInstance(args: CreateNotebookInstanceCommandInput, options?: __HttpHandlerOptions): Promise<CreateNotebookInstanceCommandOutput>;
    createNotebookInstance(args: CreateNotebookInstanceCommandInput, cb: (err: any, data?: CreateNotebookInstanceCommandOutput) => void): void;
    createNotebookInstance(args: CreateNotebookInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNotebookInstanceCommandOutput) => void): void;
    /**
     * <p>Creates a lifecycle configuration that you can associate with a notebook instance. A
     *                 <i>lifecycle configuration</i> is a collection of shell scripts that
     *             run when you create or start a notebook instance.</p>
     *         <p>Each lifecycle configuration script has a limit of 16384 characters.</p>
     *         <p>The value of the <code>$PATH</code> environment variable that is available to both
     *             scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p>
     *         <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group
     *                 <code>/aws/sagemaker/NotebookInstances</code> in log stream
     *                 <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p>
     *         <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs
     *             for longer than 5 minutes, it fails and the notebook instance is not created or
     *             started.</p>
     *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
     *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
     */
    createNotebookInstanceLifecycleConfig(args: CreateNotebookInstanceLifecycleConfigCommandInput, options?: __HttpHandlerOptions): Promise<CreateNotebookInstanceLifecycleConfigCommandOutput>;
    createNotebookInstanceLifecycleConfig(args: CreateNotebookInstanceLifecycleConfigCommandInput, cb: (err: any, data?: CreateNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    createNotebookInstanceLifecycleConfig(args: CreateNotebookInstanceLifecycleConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    /**
     * <p>Creates a URL for a specified UserProfile in a Domain.  When accessed in a web browser, the user will be
     *        automatically signed in to Amazon SageMaker Amazon SageMaker Studio (Studio), and granted access to all of the Apps and files associated with that
     *        Amazon Elastic File System (EFS).
     *
     *        This operation can only be called when AuthMode equals IAM.
     *    </p>
     */
    createPresignedDomainUrl(args: CreatePresignedDomainUrlCommandInput, options?: __HttpHandlerOptions): Promise<CreatePresignedDomainUrlCommandOutput>;
    createPresignedDomainUrl(args: CreatePresignedDomainUrlCommandInput, cb: (err: any, data?: CreatePresignedDomainUrlCommandOutput) => void): void;
    createPresignedDomainUrl(args: CreatePresignedDomainUrlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePresignedDomainUrlCommandOutput) => void): void;
    /**
     * <p>Returns a URL that you can use to connect to the Jupyter server from a notebook
     *             instance. In the Amazon SageMaker console, when you choose <code>Open</code> next to a notebook
     *             instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook
     *             instance. The console uses this API to get the URL and show the page.</p>
     *         <p>IAM authorization policies for this API are also enforced for every HTTP request and
     *             WebSocket frame that attempts to connect to the notebook instance.For example, you can
     *             restrict access to this API and to the URL that it returns to a list of IP addresses
     *             that you specify. Use the <code>NotIpAddress</code> condition operator and the
     *                 <code>aws:SourceIP</code> condition context key to specify the list of IP addresses
     *             that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html#nbi-ip-filter">Limit Access to a Notebook Instance by IP Address</a>.</p>
     *         <note>
     *             <p>The URL that you get from a call to  is valid only for 5 minutes.
     *                 If you try to use the URL after the 5-minute limit expires, you are directed to the
     *                 AWS console sign-in page.</p>
     *         </note>
     */
    createPresignedNotebookInstanceUrl(args: CreatePresignedNotebookInstanceUrlCommandInput, options?: __HttpHandlerOptions): Promise<CreatePresignedNotebookInstanceUrlCommandOutput>;
    createPresignedNotebookInstanceUrl(args: CreatePresignedNotebookInstanceUrlCommandInput, cb: (err: any, data?: CreatePresignedNotebookInstanceUrlCommandOutput) => void): void;
    createPresignedNotebookInstanceUrl(args: CreatePresignedNotebookInstanceUrlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePresignedNotebookInstanceUrlCommandOutput) => void): void;
    /**
     * <p>Creates a processing job.</p>
     */
    createProcessingJob(args: CreateProcessingJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateProcessingJobCommandOutput>;
    createProcessingJob(args: CreateProcessingJobCommandInput, cb: (err: any, data?: CreateProcessingJobCommandOutput) => void): void;
    createProcessingJob(args: CreateProcessingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProcessingJobCommandOutput) => void): void;
    /**
     * <p>Starts a model training job. After training completes, Amazon SageMaker saves the resulting
     *             model artifacts to an Amazon S3 location that you specify. </p>
     *         <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the
     *             resulting model artifacts as part of the model. You can also use the artifacts in a
     *             machine learning service other than Amazon SageMaker, provided that you know how to use them for
     *             inferences.
     *
     *         </p>
     *         <p>In the request body, you provide the following: </p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>AlgorithmSpecification</code> - Identifies the training algorithm to
     *                     use.
     *                     </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>HyperParameters</code> - Specify these algorithm-specific parameters to
     *                     enable the estimation of model parameters during training. Hyperparameters can
     *                     be tuned to optimize this learning process. For a list of hyperparameters for
     *                     each training algorithm provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>InputDataConfig</code> - Describes the training dataset and the Amazon S3,
     *                     EFS, or FSx location where it is stored.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>OutputDataConfig</code> - Identifies the Amazon S3 bucket where you want
     *                     Amazon SageMaker to save the results of model training. </p>
     *                 <p></p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>ResourceConfig</code> - Identifies the resources, ML compute
     *                     instances, and ML storage volumes to deploy for model training. In distributed
     *                     training, you specify more than one instance. </p>
     *
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>EnableManagedSpotTraining</code> - Optimize the cost of training machine
     *                     learning models by up to 80% by using Amazon EC2 Spot instances. For more
     *                     information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot
     *                         Training</a>. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>RoleARN</code> - The Amazon Resource Number (ARN) that Amazon SageMaker assumes
     *                     to perform tasks on your behalf during model training.
     *
     *                     You must grant this role the necessary permissions so that Amazon SageMaker can successfully
     *                     complete model training. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>StoppingCondition</code> - To help cap training costs, use
     *                         <code>MaxRuntimeInSeconds</code> to set a time limit for training. Use
     *                         <code>MaxWaitTimeInSeconds</code> to specify how long you are willing to
     *                     wait for a managed spot training job to complete. </p>
     *             </li>
     *          </ul>
     *         <p> For more information about Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
     */
    createTrainingJob(args: CreateTrainingJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrainingJobCommandOutput>;
    createTrainingJob(args: CreateTrainingJobCommandInput, cb: (err: any, data?: CreateTrainingJobCommandOutput) => void): void;
    createTrainingJob(args: CreateTrainingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTrainingJobCommandOutput) => void): void;
    /**
     * <p>Starts a transform job. A transform job uses a trained model to get inferences on a
     *             dataset and saves these results to an Amazon S3 location that you specify.</p>
     *         <p>To perform batch transformations, you create a transform job and use the data that you
     *             have readily available.</p>
     *         <p>In the request body, you provide the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>TransformJobName</code> - Identifies the transform job. The name must be
     *                     unique within an AWS Region in an AWS account.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>ModelName</code> - Identifies the model to use. <code>ModelName</code>
     *                     must be the name of an existing Amazon SageMaker model in the same AWS Region and AWS
     *                     account. For information on creating a model, see <a>CreateModel</a>.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>TransformInput</code> - Describes the dataset to be transformed and the
     *                     Amazon S3 location where it is stored.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>TransformOutput</code> - Identifies the Amazon S3 location where you want
     *                     Amazon SageMaker to save the results from the transform job.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>TransformResources</code> - Identifies the ML compute instances for the
     *                     transform job.</p>
     *             </li>
     *          </ul>
     *         <p>For more information about how batch transformation works, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Batch
     *                 Transform</a>.</p>
     */
    createTransformJob(args: CreateTransformJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateTransformJobCommandOutput>;
    createTransformJob(args: CreateTransformJobCommandInput, cb: (err: any, data?: CreateTransformJobCommandOutput) => void): void;
    createTransformJob(args: CreateTransformJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTransformJobCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon SageMaker <i>trial</i>. A trial is a set of steps called
     *       <i>trial components</i> that produce a machine learning
     *       model. A trial is part of a single Amazon SageMaker <i>experiment</i>.</p>
     *          <p>When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial
     *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto),
     *       you must use the logging APIs provided by the SDK.</p>
     *          <p>You can add tags to a trial and then use the <a>Search</a> API to search for the
     *       tags.</p>
     *          <p>To get a list of all your trials, call the <a>ListTrials</a> API.
     *       To view a trial's properties, call the <a>DescribeTrial</a> API.
     *       To create a trial component, call the
     *       <a>CreateTrialComponent</a> API.</p>
     */
    createTrial(args: CreateTrialCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrialCommandOutput>;
    createTrial(args: CreateTrialCommandInput, cb: (err: any, data?: CreateTrialCommandOutput) => void): void;
    createTrial(args: CreateTrialCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTrialCommandOutput) => void): void;
    /**
     * <p>Creates a <i>trial component</i>, which is a stage of a machine learning
     *       <i>trial</i>. A trial is composed of one or more trial components. A trial
     *       component can be used in multiple trials.</p>
     *          <p>Trial components include pre-processing jobs, training jobs, and batch
     *       transform jobs.</p>
     *          <p>When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial
     *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto),
     *       you must use the logging APIs provided by the SDK.</p>
     *          <p>You can add tags to a trial component and then use the <a>Search</a> API to search
     *       for the tags.</p>
     *          <note>
     *             <p>
     *                <code>CreateTrialComponent</code> can only be invoked from within an Amazon SageMaker managed
     *         environment. This includes Amazon SageMaker training jobs, processing jobs, transform jobs, and
     *         Amazon SageMaker notebooks. A call to <code>CreateTrialComponent</code> from outside one of these
     *         environments results in an error.</p>
     *          </note>
     */
    createTrialComponent(args: CreateTrialComponentCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrialComponentCommandOutput>;
    createTrialComponent(args: CreateTrialComponentCommandInput, cb: (err: any, data?: CreateTrialComponentCommandOutput) => void): void;
    createTrialComponent(args: CreateTrialComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTrialComponentCommandOutput) => void): void;
    /**
     * <p>Creates a new user profile.
     *      A user profile represents a single user within a Domain, and is the main way to reference a "person" for the purposes of sharing, reporting and other user-oriented features.
     *      This entity is created during on-boarding. If an administrator invites a person by email or imports them from SSO, a new UserProfile is automatically created.
     *      This entity is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory.
     *    </p>
     */
    createUserProfile(args: CreateUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserProfileCommandOutput>;
    createUserProfile(args: CreateUserProfileCommandInput, cb: (err: any, data?: CreateUserProfileCommandOutput) => void): void;
    createUserProfile(args: CreateUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserProfileCommandOutput) => void): void;
    /**
     * <p>Creates a new work team for labeling your data. A work team is defined by one or more
     *             Amazon Cognito user pools. You must first create the user pools before you can create a work
     *             team.</p>
     *         <p>You cannot create more than 25 work teams in an account and region.</p>
     */
    createWorkteam(args: CreateWorkteamCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorkteamCommandOutput>;
    createWorkteam(args: CreateWorkteamCommandInput, cb: (err: any, data?: CreateWorkteamCommandOutput) => void): void;
    createWorkteam(args: CreateWorkteamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWorkteamCommandOutput) => void): void;
    /**
     * <p>Removes the specified algorithm from your account.</p>
     */
    deleteAlgorithm(args: DeleteAlgorithmCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAlgorithmCommandOutput>;
    deleteAlgorithm(args: DeleteAlgorithmCommandInput, cb: (err: any, data?: DeleteAlgorithmCommandOutput) => void): void;
    deleteAlgorithm(args: DeleteAlgorithmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAlgorithmCommandOutput) => void): void;
    /**
     * <p>Used to stop and delete an app.</p>
     */
    deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
    deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
    deleteApp(args: DeleteAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
    /**
     * <p>Deletes the specified Git repository from your account.</p>
     */
    deleteCodeRepository(args: DeleteCodeRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCodeRepositoryCommandOutput>;
    deleteCodeRepository(args: DeleteCodeRepositoryCommandInput, cb: (err: any, data?: DeleteCodeRepositoryCommandOutput) => void): void;
    deleteCodeRepository(args: DeleteCodeRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCodeRepositoryCommandOutput) => void): void;
    /**
     * <p>Used to delete a domain.
     *      If you on-boarded with IAM mode, you will need to delete your domain to on-board again using SSO.
     *      Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts.
     *    </p>
     */
    deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
    deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    deleteDomain(args: DeleteDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    /**
     * <p>Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the
     *             endpoint was created. </p>
     *         <p>Amazon SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't
     *             need to use the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> API call.</p>
     */
    deleteEndpoint(args: DeleteEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEndpointCommandOutput>;
    deleteEndpoint(args: DeleteEndpointCommandInput, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
    deleteEndpoint(args: DeleteEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
    /**
     * <p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API
     *             deletes only the specified configuration. It does not delete endpoints created using the
     *             configuration. </p>
     */
    deleteEndpointConfig(args: DeleteEndpointConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEndpointConfigCommandOutput>;
    deleteEndpointConfig(args: DeleteEndpointConfigCommandInput, cb: (err: any, data?: DeleteEndpointConfigCommandOutput) => void): void;
    deleteEndpointConfig(args: DeleteEndpointConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEndpointConfigCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon SageMaker experiment. All trials associated with the experiment must be
     *       deleted first. Use the <a>ListTrials</a> API to get a list of the
     *       trials associated with the experiment.</p>
     */
    deleteExperiment(args: DeleteExperimentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteExperimentCommandOutput>;
    deleteExperiment(args: DeleteExperimentCommandInput, cb: (err: any, data?: DeleteExperimentCommandOutput) => void): void;
    deleteExperiment(args: DeleteExperimentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteExperimentCommandOutput) => void): void;
    /**
     * <p>Deletes the specified flow definition.</p>
     */
    deleteFlowDefinition(args: DeleteFlowDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFlowDefinitionCommandOutput>;
    deleteFlowDefinition(args: DeleteFlowDefinitionCommandInput, cb: (err: any, data?: DeleteFlowDefinitionCommandOutput) => void): void;
    deleteFlowDefinition(args: DeleteFlowDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFlowDefinitionCommandOutput) => void): void;
    /**
     * <p>Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that
     *             was created in Amazon SageMaker when you called the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html">CreateModel</a> API. It does not
     *             delete model artifacts, inference code, or the IAM role that you specified when
     *             creating the model. </p>
     */
    deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
    deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
    deleteModel(args: DeleteModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
    /**
     * <p>Deletes a model package.</p>
     *         <p>A model package is used to create Amazon SageMaker models or list on AWS Marketplace. Buyers can
     *             subscribe to model packages listed on AWS Marketplace to create models in Amazon SageMaker.</p>
     */
    deleteModelPackage(args: DeleteModelPackageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelPackageCommandOutput>;
    deleteModelPackage(args: DeleteModelPackageCommandInput, cb: (err: any, data?: DeleteModelPackageCommandOutput) => void): void;
    deleteModelPackage(args: DeleteModelPackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelPackageCommandOutput) => void): void;
    /**
     * <p>Deletes a monitoring schedule. Also stops the schedule had not already been stopped.
     *          This does not delete the job execution history of the monitoring schedule. </p>
     */
    deleteMonitoringSchedule(args: DeleteMonitoringScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMonitoringScheduleCommandOutput>;
    deleteMonitoringSchedule(args: DeleteMonitoringScheduleCommandInput, cb: (err: any, data?: DeleteMonitoringScheduleCommandOutput) => void): void;
    deleteMonitoringSchedule(args: DeleteMonitoringScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMonitoringScheduleCommandOutput) => void): void;
    /**
     * <p> Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you
     *             must call the <code>StopNotebookInstance</code> API. </p>
     *         <important>
     *             <p>When you delete a notebook instance, you lose all of your data. Amazon SageMaker removes
     *                 the ML compute instance, and deletes the ML storage volume and the network interface
     *                 associated with the notebook instance. </p>
     *         </important>
     */
    deleteNotebookInstance(args: DeleteNotebookInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNotebookInstanceCommandOutput>;
    deleteNotebookInstance(args: DeleteNotebookInstanceCommandInput, cb: (err: any, data?: DeleteNotebookInstanceCommandOutput) => void): void;
    deleteNotebookInstance(args: DeleteNotebookInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNotebookInstanceCommandOutput) => void): void;
    /**
     * <p>Deletes a notebook instance lifecycle configuration.</p>
     */
    deleteNotebookInstanceLifecycleConfig(args: DeleteNotebookInstanceLifecycleConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNotebookInstanceLifecycleConfigCommandOutput>;
    deleteNotebookInstanceLifecycleConfig(args: DeleteNotebookInstanceLifecycleConfigCommandInput, cb: (err: any, data?: DeleteNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    deleteNotebookInstanceLifecycleConfig(args: DeleteNotebookInstanceLifecycleConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    /**
     * <p>Deletes the specified tags from an Amazon SageMaker resource.</p>
     *         <p>To list a resource's tags, use the <code>ListTags</code> API. </p>
     *         <note>
     *             <p>When you call this API to delete tags from a hyperparameter tuning job, the
     *                 deleted tags are not removed from training jobs that the hyperparameter tuning job
     *                 launched before you called this API.</p>
     *         </note>
     */
    deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
    deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    deleteTags(args: DeleteTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    /**
     * <p>Deletes the specified trial. All trial components that make up the trial must be
     *       deleted first. Use the <a>DescribeTrialComponent</a> API to get the list
     *       of trial components.</p>
     */
    deleteTrial(args: DeleteTrialCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrialCommandOutput>;
    deleteTrial(args: DeleteTrialCommandInput, cb: (err: any, data?: DeleteTrialCommandOutput) => void): void;
    deleteTrial(args: DeleteTrialCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTrialCommandOutput) => void): void;
    /**
     * <p>Deletes the specified trial component. A trial component must be disassociated from all
     *       trials before the trial component can be deleted. To disassociate a trial component from a
     *       trial, call the <a>DisassociateTrialComponent</a> API.</p>
     */
    deleteTrialComponent(args: DeleteTrialComponentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrialComponentCommandOutput>;
    deleteTrialComponent(args: DeleteTrialComponentCommandInput, cb: (err: any, data?: DeleteTrialComponentCommandOutput) => void): void;
    deleteTrialComponent(args: DeleteTrialComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTrialComponentCommandOutput) => void): void;
    /**
     * <p>Deletes a user profile.</p>
     */
    deleteUserProfile(args: DeleteUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserProfileCommandOutput>;
    deleteUserProfile(args: DeleteUserProfileCommandInput, cb: (err: any, data?: DeleteUserProfileCommandOutput) => void): void;
    deleteUserProfile(args: DeleteUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserProfileCommandOutput) => void): void;
    /**
     * <p>Deletes an existing work team. This operation can't be undone.</p>
     */
    deleteWorkteam(args: DeleteWorkteamCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWorkteamCommandOutput>;
    deleteWorkteam(args: DeleteWorkteamCommandInput, cb: (err: any, data?: DeleteWorkteamCommandOutput) => void): void;
    deleteWorkteam(args: DeleteWorkteamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWorkteamCommandOutput) => void): void;
    /**
     * <p>Returns a description of the specified algorithm that is in your account.</p>
     */
    describeAlgorithm(args: DescribeAlgorithmCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAlgorithmCommandOutput>;
    describeAlgorithm(args: DescribeAlgorithmCommandInput, cb: (err: any, data?: DescribeAlgorithmCommandOutput) => void): void;
    describeAlgorithm(args: DescribeAlgorithmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAlgorithmCommandOutput) => void): void;
    /**
     * <p>Describes the app.</p>
     */
    describeApp(args: DescribeAppCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAppCommandOutput>;
    describeApp(args: DescribeAppCommandInput, cb: (err: any, data?: DescribeAppCommandOutput) => void): void;
    describeApp(args: DescribeAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAppCommandOutput) => void): void;
    /**
     * <p>Returns information about an Amazon SageMaker job.</p>
     */
    describeAutoMLJob(args: DescribeAutoMLJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAutoMLJobCommandOutput>;
    describeAutoMLJob(args: DescribeAutoMLJobCommandInput, cb: (err: any, data?: DescribeAutoMLJobCommandOutput) => void): void;
    describeAutoMLJob(args: DescribeAutoMLJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAutoMLJobCommandOutput) => void): void;
    /**
     * <p>Gets details about the specified Git repository.</p>
     */
    describeCodeRepository(args: DescribeCodeRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCodeRepositoryCommandOutput>;
    describeCodeRepository(args: DescribeCodeRepositoryCommandInput, cb: (err: any, data?: DescribeCodeRepositoryCommandOutput) => void): void;
    describeCodeRepository(args: DescribeCodeRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCodeRepositoryCommandOutput) => void): void;
    /**
     * <p>Returns information about a model compilation job.</p>
     *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
     *             information about multiple model compilation jobs, use <a>ListCompilationJobs</a>.</p>
     */
    describeCompilationJob(args: DescribeCompilationJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCompilationJobCommandOutput>;
    describeCompilationJob(args: DescribeCompilationJobCommandInput, cb: (err: any, data?: DescribeCompilationJobCommandOutput) => void): void;
    describeCompilationJob(args: DescribeCompilationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCompilationJobCommandOutput) => void): void;
    /**
     * <p>The desciption of the domain.</p>
     */
    describeDomain(args: DescribeDomainCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDomainCommandOutput>;
    describeDomain(args: DescribeDomainCommandInput, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
    describeDomain(args: DescribeDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
    /**
     * <p>Returns the description of an endpoint.</p>
     */
    describeEndpoint(args: DescribeEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointCommandOutput>;
    describeEndpoint(args: DescribeEndpointCommandInput, cb: (err: any, data?: DescribeEndpointCommandOutput) => void): void;
    describeEndpoint(args: DescribeEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointCommandOutput) => void): void;
    /**
     * <p>Returns the description of an endpoint configuration created using the
     *                 <code>CreateEndpointConfig</code> API.</p>
     */
    describeEndpointConfig(args: DescribeEndpointConfigCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointConfigCommandOutput>;
    describeEndpointConfig(args: DescribeEndpointConfigCommandInput, cb: (err: any, data?: DescribeEndpointConfigCommandOutput) => void): void;
    describeEndpointConfig(args: DescribeEndpointConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointConfigCommandOutput) => void): void;
    /**
     * <p>Provides a list of an experiment's properties.</p>
     */
    describeExperiment(args: DescribeExperimentCommandInput, options?: __HttpHandlerOptions): Promise<DescribeExperimentCommandOutput>;
    describeExperiment(args: DescribeExperimentCommandInput, cb: (err: any, data?: DescribeExperimentCommandOutput) => void): void;
    describeExperiment(args: DescribeExperimentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeExperimentCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified flow definition.</p>
     */
    describeFlowDefinition(args: DescribeFlowDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFlowDefinitionCommandOutput>;
    describeFlowDefinition(args: DescribeFlowDefinitionCommandInput, cb: (err: any, data?: DescribeFlowDefinitionCommandOutput) => void): void;
    describeFlowDefinition(args: DescribeFlowDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFlowDefinitionCommandOutput) => void): void;
    /**
     * <p>Returns information about the requested human task user interface.</p>
     */
    describeHumanTaskUi(args: DescribeHumanTaskUiCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHumanTaskUiCommandOutput>;
    describeHumanTaskUi(args: DescribeHumanTaskUiCommandInput, cb: (err: any, data?: DescribeHumanTaskUiCommandOutput) => void): void;
    describeHumanTaskUi(args: DescribeHumanTaskUiCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHumanTaskUiCommandOutput) => void): void;
    /**
     * <p>Gets
     *             a description of a hyperparameter tuning job.</p>
     */
    describeHyperParameterTuningJob(args: DescribeHyperParameterTuningJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHyperParameterTuningJobCommandOutput>;
    describeHyperParameterTuningJob(args: DescribeHyperParameterTuningJobCommandInput, cb: (err: any, data?: DescribeHyperParameterTuningJobCommandOutput) => void): void;
    describeHyperParameterTuningJob(args: DescribeHyperParameterTuningJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHyperParameterTuningJobCommandOutput) => void): void;
    /**
     * <p>Gets information about a labeling job.</p>
     */
    describeLabelingJob(args: DescribeLabelingJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLabelingJobCommandOutput>;
    describeLabelingJob(args: DescribeLabelingJobCommandInput, cb: (err: any, data?: DescribeLabelingJobCommandOutput) => void): void;
    describeLabelingJob(args: DescribeLabelingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLabelingJobCommandOutput) => void): void;
    /**
     * <p>Describes a model that you created using the <code>CreateModel</code>
     *             API.</p>
     */
    describeModel(args: DescribeModelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelCommandOutput>;
    describeModel(args: DescribeModelCommandInput, cb: (err: any, data?: DescribeModelCommandOutput) => void): void;
    describeModel(args: DescribeModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeModelCommandOutput) => void): void;
    /**
     * <p>Returns a description of the specified model package, which is used to create Amazon SageMaker
     *             models or list them on AWS Marketplace.</p>
     *         <p>To create models in Amazon SageMaker, buyers can subscribe to model packages listed on AWS
     *             Marketplace.</p>
     */
    describeModelPackage(args: DescribeModelPackageCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelPackageCommandOutput>;
    describeModelPackage(args: DescribeModelPackageCommandInput, cb: (err: any, data?: DescribeModelPackageCommandOutput) => void): void;
    describeModelPackage(args: DescribeModelPackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeModelPackageCommandOutput) => void): void;
    /**
     * <p>Describes the schedule for a monitoring job.</p>
     */
    describeMonitoringSchedule(args: DescribeMonitoringScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMonitoringScheduleCommandOutput>;
    describeMonitoringSchedule(args: DescribeMonitoringScheduleCommandInput, cb: (err: any, data?: DescribeMonitoringScheduleCommandOutput) => void): void;
    describeMonitoringSchedule(args: DescribeMonitoringScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMonitoringScheduleCommandOutput) => void): void;
    /**
     * <p>Returns information about a notebook instance.</p>
     */
    describeNotebookInstance(args: DescribeNotebookInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNotebookInstanceCommandOutput>;
    describeNotebookInstance(args: DescribeNotebookInstanceCommandInput, cb: (err: any, data?: DescribeNotebookInstanceCommandOutput) => void): void;
    describeNotebookInstance(args: DescribeNotebookInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNotebookInstanceCommandOutput) => void): void;
    /**
     * <p>Returns a description of a notebook instance lifecycle configuration.</p>
     *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
     *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
     */
    describeNotebookInstanceLifecycleConfig(args: DescribeNotebookInstanceLifecycleConfigCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNotebookInstanceLifecycleConfigCommandOutput>;
    describeNotebookInstanceLifecycleConfig(args: DescribeNotebookInstanceLifecycleConfigCommandInput, cb: (err: any, data?: DescribeNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    describeNotebookInstanceLifecycleConfig(args: DescribeNotebookInstanceLifecycleConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    /**
     * <p>Returns a description of a processing job.</p>
     */
    describeProcessingJob(args: DescribeProcessingJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProcessingJobCommandOutput>;
    describeProcessingJob(args: DescribeProcessingJobCommandInput, cb: (err: any, data?: DescribeProcessingJobCommandOutput) => void): void;
    describeProcessingJob(args: DescribeProcessingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProcessingJobCommandOutput) => void): void;
    /**
     * <p>Gets information about a work team provided by a vendor. It returns details about the
     *             subscription with a vendor in the AWS Marketplace.</p>
     */
    describeSubscribedWorkteam(args: DescribeSubscribedWorkteamCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSubscribedWorkteamCommandOutput>;
    describeSubscribedWorkteam(args: DescribeSubscribedWorkteamCommandInput, cb: (err: any, data?: DescribeSubscribedWorkteamCommandOutput) => void): void;
    describeSubscribedWorkteam(args: DescribeSubscribedWorkteamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSubscribedWorkteamCommandOutput) => void): void;
    /**
     * <p>Returns information about a training job.</p>
     */
    describeTrainingJob(args: DescribeTrainingJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrainingJobCommandOutput>;
    describeTrainingJob(args: DescribeTrainingJobCommandInput, cb: (err: any, data?: DescribeTrainingJobCommandOutput) => void): void;
    describeTrainingJob(args: DescribeTrainingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrainingJobCommandOutput) => void): void;
    /**
     * <p>Returns information about a transform job.</p>
     */
    describeTransformJob(args: DescribeTransformJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTransformJobCommandOutput>;
    describeTransformJob(args: DescribeTransformJobCommandInput, cb: (err: any, data?: DescribeTransformJobCommandOutput) => void): void;
    describeTransformJob(args: DescribeTransformJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTransformJobCommandOutput) => void): void;
    /**
     * <p>Provides a list of a trial's properties.</p>
     */
    describeTrial(args: DescribeTrialCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrialCommandOutput>;
    describeTrial(args: DescribeTrialCommandInput, cb: (err: any, data?: DescribeTrialCommandOutput) => void): void;
    describeTrial(args: DescribeTrialCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrialCommandOutput) => void): void;
    /**
     * <p>Provides a list of a trials component's properties.</p>
     */
    describeTrialComponent(args: DescribeTrialComponentCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrialComponentCommandOutput>;
    describeTrialComponent(args: DescribeTrialComponentCommandInput, cb: (err: any, data?: DescribeTrialComponentCommandOutput) => void): void;
    describeTrialComponent(args: DescribeTrialComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrialComponentCommandOutput) => void): void;
    /**
     * <p>Describes the user profile.</p>
     */
    describeUserProfile(args: DescribeUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserProfileCommandOutput>;
    describeUserProfile(args: DescribeUserProfileCommandInput, cb: (err: any, data?: DescribeUserProfileCommandOutput) => void): void;
    describeUserProfile(args: DescribeUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserProfileCommandOutput) => void): void;
    /**
     * <p>Lists private workforce information, including workforce name, Amazon Resource Name
     *             (ARN), and, if applicable, allowed IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Allowable IP address
     *             ranges are the IP addresses that workers can use to access tasks. </p>
     *         <important>
     *             <p>This operation applies only to private workforces.</p>
     *         </important>
     */
    describeWorkforce(args: DescribeWorkforceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkforceCommandOutput>;
    describeWorkforce(args: DescribeWorkforceCommandInput, cb: (err: any, data?: DescribeWorkforceCommandOutput) => void): void;
    describeWorkforce(args: DescribeWorkforceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkforceCommandOutput) => void): void;
    /**
     * <p>Gets information about a specific work team. You can see information such as the
     *             create date, the last updated date, membership information, and the work team's Amazon
     *             Resource Name (ARN).</p>
     */
    describeWorkteam(args: DescribeWorkteamCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkteamCommandOutput>;
    describeWorkteam(args: DescribeWorkteamCommandInput, cb: (err: any, data?: DescribeWorkteamCommandOutput) => void): void;
    describeWorkteam(args: DescribeWorkteamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkteamCommandOutput) => void): void;
    /**
     * <p>Disassociates a trial component from a trial. This doesn't effect other trials the
     *       component is associated with. Before you can delete a component, you must disassociate the
     *       component from all trials it is associated with. To associate a trial component with a trial,
     *       call the <a>AssociateTrialComponent</a> API.</p>
     */
    disassociateTrialComponent(args: DisassociateTrialComponentCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateTrialComponentCommandOutput>;
    disassociateTrialComponent(args: DisassociateTrialComponentCommandInput, cb: (err: any, data?: DisassociateTrialComponentCommandOutput) => void): void;
    disassociateTrialComponent(args: DisassociateTrialComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateTrialComponentCommandOutput) => void): void;
    /**
     * <p>An auto-complete API for the search functionality in the Amazon SageMaker console. It returns
     *       suggestions of possible matches for the property name to use in <code>Search</code>
     *       queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and
     *       <code>Metrics</code>.</p>
     */
    getSearchSuggestions(args: GetSearchSuggestionsCommandInput, options?: __HttpHandlerOptions): Promise<GetSearchSuggestionsCommandOutput>;
    getSearchSuggestions(args: GetSearchSuggestionsCommandInput, cb: (err: any, data?: GetSearchSuggestionsCommandOutput) => void): void;
    getSearchSuggestions(args: GetSearchSuggestionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSearchSuggestionsCommandOutput) => void): void;
    /**
     * <p>Lists the machine learning algorithms that have been created.</p>
     */
    listAlgorithms(args: ListAlgorithmsCommandInput, options?: __HttpHandlerOptions): Promise<ListAlgorithmsCommandOutput>;
    listAlgorithms(args: ListAlgorithmsCommandInput, cb: (err: any, data?: ListAlgorithmsCommandOutput) => void): void;
    listAlgorithms(args: ListAlgorithmsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAlgorithmsCommandOutput) => void): void;
    /**
     * <p>Lists apps.</p>
     */
    listApps(args: ListAppsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsCommandOutput>;
    listApps(args: ListAppsCommandInput, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
    listApps(args: ListAppsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
    /**
     * <p>Request a list of jobs.</p>
     */
    listAutoMLJobs(args: ListAutoMLJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListAutoMLJobsCommandOutput>;
    listAutoMLJobs(args: ListAutoMLJobsCommandInput, cb: (err: any, data?: ListAutoMLJobsCommandOutput) => void): void;
    listAutoMLJobs(args: ListAutoMLJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAutoMLJobsCommandOutput) => void): void;
    /**
     * <p>List the Candidates created for the job.</p>
     */
    listCandidatesForAutoMLJob(args: ListCandidatesForAutoMLJobCommandInput, options?: __HttpHandlerOptions): Promise<ListCandidatesForAutoMLJobCommandOutput>;
    listCandidatesForAutoMLJob(args: ListCandidatesForAutoMLJobCommandInput, cb: (err: any, data?: ListCandidatesForAutoMLJobCommandOutput) => void): void;
    listCandidatesForAutoMLJob(args: ListCandidatesForAutoMLJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCandidatesForAutoMLJobCommandOutput) => void): void;
    /**
     * <p>Gets a list of the Git repositories in your account.</p>
     */
    listCodeRepositories(args: ListCodeRepositoriesCommandInput, options?: __HttpHandlerOptions): Promise<ListCodeRepositoriesCommandOutput>;
    listCodeRepositories(args: ListCodeRepositoriesCommandInput, cb: (err: any, data?: ListCodeRepositoriesCommandOutput) => void): void;
    listCodeRepositories(args: ListCodeRepositoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCodeRepositoriesCommandOutput) => void): void;
    /**
     * <p>Lists model compilation jobs that satisfy various filters.</p>
     *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
     *             information about a particular model compilation job you have created, use <a>DescribeCompilationJob</a>.</p>
     */
    listCompilationJobs(args: ListCompilationJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListCompilationJobsCommandOutput>;
    listCompilationJobs(args: ListCompilationJobsCommandInput, cb: (err: any, data?: ListCompilationJobsCommandOutput) => void): void;
    listCompilationJobs(args: ListCompilationJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCompilationJobsCommandOutput) => void): void;
    /**
     * <p>Lists the domains.</p>
     */
    listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
    listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    listDomains(args: ListDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    /**
     * <p>Lists endpoint configurations.</p>
     */
    listEndpointConfigs(args: ListEndpointConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListEndpointConfigsCommandOutput>;
    listEndpointConfigs(args: ListEndpointConfigsCommandInput, cb: (err: any, data?: ListEndpointConfigsCommandOutput) => void): void;
    listEndpointConfigs(args: ListEndpointConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEndpointConfigsCommandOutput) => void): void;
    /**
     * <p>Lists endpoints.</p>
     */
    listEndpoints(args: ListEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<ListEndpointsCommandOutput>;
    listEndpoints(args: ListEndpointsCommandInput, cb: (err: any, data?: ListEndpointsCommandOutput) => void): void;
    listEndpoints(args: ListEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEndpointsCommandOutput) => void): void;
    /**
     * <p>Lists all the experiments in your account. The list can be filtered to show only
     *       experiments that were created in a specific time range. The list can be sorted by experiment
     *       name or creation time.</p>
     */
    listExperiments(args: ListExperimentsCommandInput, options?: __HttpHandlerOptions): Promise<ListExperimentsCommandOutput>;
    listExperiments(args: ListExperimentsCommandInput, cb: (err: any, data?: ListExperimentsCommandOutput) => void): void;
    listExperiments(args: ListExperimentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListExperimentsCommandOutput) => void): void;
    /**
     * <p>Returns information about the flow definitions in your account.</p>
     */
    listFlowDefinitions(args: ListFlowDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListFlowDefinitionsCommandOutput>;
    listFlowDefinitions(args: ListFlowDefinitionsCommandInput, cb: (err: any, data?: ListFlowDefinitionsCommandOutput) => void): void;
    listFlowDefinitions(args: ListFlowDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFlowDefinitionsCommandOutput) => void): void;
    /**
     * <p>Returns information about the human task user interfaces in your account.</p>
     */
    listHumanTaskUis(args: ListHumanTaskUisCommandInput, options?: __HttpHandlerOptions): Promise<ListHumanTaskUisCommandOutput>;
    listHumanTaskUis(args: ListHumanTaskUisCommandInput, cb: (err: any, data?: ListHumanTaskUisCommandOutput) => void): void;
    listHumanTaskUis(args: ListHumanTaskUisCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListHumanTaskUisCommandOutput) => void): void;
    /**
     * <p>Gets a list of <a>HyperParameterTuningJobSummary</a> objects that
     *             describe
     *             the hyperparameter tuning jobs launched in your account.</p>
     */
    listHyperParameterTuningJobs(args: ListHyperParameterTuningJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListHyperParameterTuningJobsCommandOutput>;
    listHyperParameterTuningJobs(args: ListHyperParameterTuningJobsCommandInput, cb: (err: any, data?: ListHyperParameterTuningJobsCommandOutput) => void): void;
    listHyperParameterTuningJobs(args: ListHyperParameterTuningJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListHyperParameterTuningJobsCommandOutput) => void): void;
    /**
     * <p>Gets a list of labeling jobs.</p>
     */
    listLabelingJobs(args: ListLabelingJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListLabelingJobsCommandOutput>;
    listLabelingJobs(args: ListLabelingJobsCommandInput, cb: (err: any, data?: ListLabelingJobsCommandOutput) => void): void;
    listLabelingJobs(args: ListLabelingJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLabelingJobsCommandOutput) => void): void;
    /**
     * <p>Gets a list of labeling jobs assigned to a specified work team.</p>
     */
    listLabelingJobsForWorkteam(args: ListLabelingJobsForWorkteamCommandInput, options?: __HttpHandlerOptions): Promise<ListLabelingJobsForWorkteamCommandOutput>;
    listLabelingJobsForWorkteam(args: ListLabelingJobsForWorkteamCommandInput, cb: (err: any, data?: ListLabelingJobsForWorkteamCommandOutput) => void): void;
    listLabelingJobsForWorkteam(args: ListLabelingJobsForWorkteamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLabelingJobsForWorkteamCommandOutput) => void): void;
    /**
     * <p>Lists the model packages that have been created.</p>
     */
    listModelPackages(args: ListModelPackagesCommandInput, options?: __HttpHandlerOptions): Promise<ListModelPackagesCommandOutput>;
    listModelPackages(args: ListModelPackagesCommandInput, cb: (err: any, data?: ListModelPackagesCommandOutput) => void): void;
    listModelPackages(args: ListModelPackagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListModelPackagesCommandOutput) => void): void;
    /**
     * <p>Lists models created with the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html">CreateModel</a> API.</p>
     */
    listModels(args: ListModelsCommandInput, options?: __HttpHandlerOptions): Promise<ListModelsCommandOutput>;
    listModels(args: ListModelsCommandInput, cb: (err: any, data?: ListModelsCommandOutput) => void): void;
    listModels(args: ListModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListModelsCommandOutput) => void): void;
    /**
     * <p>Returns list of all monitoring job executions.</p>
     */
    listMonitoringExecutions(args: ListMonitoringExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListMonitoringExecutionsCommandOutput>;
    listMonitoringExecutions(args: ListMonitoringExecutionsCommandInput, cb: (err: any, data?: ListMonitoringExecutionsCommandOutput) => void): void;
    listMonitoringExecutions(args: ListMonitoringExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMonitoringExecutionsCommandOutput) => void): void;
    /**
     * <p>Returns list of all monitoring schedules.</p>
     */
    listMonitoringSchedules(args: ListMonitoringSchedulesCommandInput, options?: __HttpHandlerOptions): Promise<ListMonitoringSchedulesCommandOutput>;
    listMonitoringSchedules(args: ListMonitoringSchedulesCommandInput, cb: (err: any, data?: ListMonitoringSchedulesCommandOutput) => void): void;
    listMonitoringSchedules(args: ListMonitoringSchedulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMonitoringSchedulesCommandOutput) => void): void;
    /**
     * <p>Lists notebook instance lifestyle configurations created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
     */
    listNotebookInstanceLifecycleConfigs(args: ListNotebookInstanceLifecycleConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListNotebookInstanceLifecycleConfigsCommandOutput>;
    listNotebookInstanceLifecycleConfigs(args: ListNotebookInstanceLifecycleConfigsCommandInput, cb: (err: any, data?: ListNotebookInstanceLifecycleConfigsCommandOutput) => void): void;
    listNotebookInstanceLifecycleConfigs(args: ListNotebookInstanceLifecycleConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNotebookInstanceLifecycleConfigsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS
     *             Region. </p>
     */
    listNotebookInstances(args: ListNotebookInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListNotebookInstancesCommandOutput>;
    listNotebookInstances(args: ListNotebookInstancesCommandInput, cb: (err: any, data?: ListNotebookInstancesCommandOutput) => void): void;
    listNotebookInstances(args: ListNotebookInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNotebookInstancesCommandOutput) => void): void;
    /**
     * <p>Lists processing jobs that satisfy various filters.</p>
     */
    listProcessingJobs(args: ListProcessingJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListProcessingJobsCommandOutput>;
    listProcessingJobs(args: ListProcessingJobsCommandInput, cb: (err: any, data?: ListProcessingJobsCommandOutput) => void): void;
    listProcessingJobs(args: ListProcessingJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProcessingJobsCommandOutput) => void): void;
    /**
     * <p>Gets a list of the work teams that you are subscribed to in the AWS Marketplace. The
     *             list may be empty if no work team satisfies the filter specified in the
     *                 <code>NameContains</code> parameter.</p>
     */
    listSubscribedWorkteams(args: ListSubscribedWorkteamsCommandInput, options?: __HttpHandlerOptions): Promise<ListSubscribedWorkteamsCommandOutput>;
    listSubscribedWorkteams(args: ListSubscribedWorkteamsCommandInput, cb: (err: any, data?: ListSubscribedWorkteamsCommandOutput) => void): void;
    listSubscribedWorkteams(args: ListSubscribedWorkteamsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSubscribedWorkteamsCommandOutput) => void): void;
    /**
     * <p>Returns the tags for the specified Amazon SageMaker resource.</p>
     */
    listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
    listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    listTags(args: ListTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    /**
     * <p>Lists training jobs.</p>
     */
    listTrainingJobs(args: ListTrainingJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListTrainingJobsCommandOutput>;
    listTrainingJobs(args: ListTrainingJobsCommandInput, cb: (err: any, data?: ListTrainingJobsCommandOutput) => void): void;
    listTrainingJobs(args: ListTrainingJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTrainingJobsCommandOutput) => void): void;
    /**
     * <p>Gets a list of <a>TrainingJobSummary</a> objects that describe the training
     *             jobs that a hyperparameter tuning job launched.</p>
     */
    listTrainingJobsForHyperParameterTuningJob(args: ListTrainingJobsForHyperParameterTuningJobCommandInput, options?: __HttpHandlerOptions): Promise<ListTrainingJobsForHyperParameterTuningJobCommandOutput>;
    listTrainingJobsForHyperParameterTuningJob(args: ListTrainingJobsForHyperParameterTuningJobCommandInput, cb: (err: any, data?: ListTrainingJobsForHyperParameterTuningJobCommandOutput) => void): void;
    listTrainingJobsForHyperParameterTuningJob(args: ListTrainingJobsForHyperParameterTuningJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTrainingJobsForHyperParameterTuningJobCommandOutput) => void): void;
    /**
     * <p>Lists transform jobs.</p>
     */
    listTransformJobs(args: ListTransformJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListTransformJobsCommandOutput>;
    listTransformJobs(args: ListTransformJobsCommandInput, cb: (err: any, data?: ListTransformJobsCommandOutput) => void): void;
    listTransformJobs(args: ListTransformJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTransformJobsCommandOutput) => void): void;
    /**
     * <p>Lists the trial components in your account. You can sort the list by trial component
     *       name or creation time. You can filter the list to show only components that were created in
     *       a specific time range. You can also filter on one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>ExperimentName</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SourceArn</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TrialName</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    listTrialComponents(args: ListTrialComponentsCommandInput, options?: __HttpHandlerOptions): Promise<ListTrialComponentsCommandOutput>;
    listTrialComponents(args: ListTrialComponentsCommandInput, cb: (err: any, data?: ListTrialComponentsCommandOutput) => void): void;
    listTrialComponents(args: ListTrialComponentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTrialComponentsCommandOutput) => void): void;
    /**
     * <p>Lists the trials in your account. Specify an experiment name to limit the list to the
     *       trials that are part of that experiment. The list can be filtered to show only trials
     *       that were created in a specific time range. The list can be sorted by trial name or creation
     *       time.</p>
     */
    listTrials(args: ListTrialsCommandInput, options?: __HttpHandlerOptions): Promise<ListTrialsCommandOutput>;
    listTrials(args: ListTrialsCommandInput, cb: (err: any, data?: ListTrialsCommandOutput) => void): void;
    listTrials(args: ListTrialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTrialsCommandOutput) => void): void;
    /**
     * <p>Lists user profiles.</p>
     */
    listUserProfiles(args: ListUserProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListUserProfilesCommandOutput>;
    listUserProfiles(args: ListUserProfilesCommandInput, cb: (err: any, data?: ListUserProfilesCommandOutput) => void): void;
    listUserProfiles(args: ListUserProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUserProfilesCommandOutput) => void): void;
    /**
     * <p>Gets a list of work teams that you have defined in a region. The list may be empty if
     *             no work team satisfies the filter specified in the <code>NameContains</code>
     *             parameter.</p>
     */
    listWorkteams(args: ListWorkteamsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkteamsCommandOutput>;
    listWorkteams(args: ListWorkteamsCommandInput, cb: (err: any, data?: ListWorkteamsCommandOutput) => void): void;
    listWorkteams(args: ListWorkteamsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWorkteamsCommandOutput) => void): void;
    /**
     * <p>Renders the UI template so that you can preview the worker's experience. </p>
     */
    renderUiTemplate(args: RenderUiTemplateCommandInput, options?: __HttpHandlerOptions): Promise<RenderUiTemplateCommandOutput>;
    renderUiTemplate(args: RenderUiTemplateCommandInput, cb: (err: any, data?: RenderUiTemplateCommandOutput) => void): void;
    renderUiTemplate(args: RenderUiTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RenderUiTemplateCommandOutput) => void): void;
    /**
     * <p>Finds Amazon SageMaker resources that match a search query. Matching resource objects are returned
     *       as a list of <code>SearchResult</code> objects in the response. You can sort the search
     *       results by any resource property in a ascending or descending order.</p>
     *          <p>You can query against the following value types: numeric, text, Boolean, and
     *       timestamp.</p>
     */
    search(args: SearchCommandInput, options?: __HttpHandlerOptions): Promise<SearchCommandOutput>;
    search(args: SearchCommandInput, cb: (err: any, data?: SearchCommandOutput) => void): void;
    search(args: SearchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchCommandOutput) => void): void;
    /**
     * <p>Starts a previously stopped monitoring schedule.</p>
     *          <note>
     *             <p>New monitoring schedules are immediately started after creation.</p>
     *          </note>
     */
    startMonitoringSchedule(args: StartMonitoringScheduleCommandInput, options?: __HttpHandlerOptions): Promise<StartMonitoringScheduleCommandOutput>;
    startMonitoringSchedule(args: StartMonitoringScheduleCommandInput, cb: (err: any, data?: StartMonitoringScheduleCommandOutput) => void): void;
    startMonitoringSchedule(args: StartMonitoringScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartMonitoringScheduleCommandOutput) => void): void;
    /**
     * <p>Launches an ML compute instance with the latest version of the libraries and
     *             attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the
     *             notebook instance status to <code>InService</code>. A notebook instance's status must be
     *                 <code>InService</code> before you can connect to your Jupyter notebook. </p>
     */
    startNotebookInstance(args: StartNotebookInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StartNotebookInstanceCommandOutput>;
    startNotebookInstance(args: StartNotebookInstanceCommandInput, cb: (err: any, data?: StartNotebookInstanceCommandOutput) => void): void;
    startNotebookInstance(args: StartNotebookInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartNotebookInstanceCommandOutput) => void): void;
    /**
     * <p>A method for forcing the termination of a running job.</p>
     */
    stopAutoMLJob(args: StopAutoMLJobCommandInput, options?: __HttpHandlerOptions): Promise<StopAutoMLJobCommandOutput>;
    stopAutoMLJob(args: StopAutoMLJobCommandInput, cb: (err: any, data?: StopAutoMLJobCommandOutput) => void): void;
    stopAutoMLJob(args: StopAutoMLJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopAutoMLJobCommandOutput) => void): void;
    /**
     * <p>Stops a model compilation job.</p>
     *         <p> To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the
     *             job down. If the job hasn't stopped, it sends the SIGKILL signal.</p>
     *         <p>When it receives a <code>StopCompilationJob</code> request, Amazon SageMaker changes the <a>CompilationJobSummary$CompilationJobStatus</a> of the job to
     *                 <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the <a>CompilationJobSummary$CompilationJobStatus</a> to <code>Stopped</code>.
     *         </p>
     */
    stopCompilationJob(args: StopCompilationJobCommandInput, options?: __HttpHandlerOptions): Promise<StopCompilationJobCommandOutput>;
    stopCompilationJob(args: StopCompilationJobCommandInput, cb: (err: any, data?: StopCompilationJobCommandOutput) => void): void;
    stopCompilationJob(args: StopCompilationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopCompilationJobCommandOutput) => void): void;
    /**
     * <p>Stops a running hyperparameter tuning job and all running training jobs that the
     *             tuning job launched.</p>
     *         <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All
     *             data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the
     *             tuning job moves to the <code>Stopped</code> state, it releases all
     *             reserved
     *             resources for the tuning job.</p>
     */
    stopHyperParameterTuningJob(args: StopHyperParameterTuningJobCommandInput, options?: __HttpHandlerOptions): Promise<StopHyperParameterTuningJobCommandOutput>;
    stopHyperParameterTuningJob(args: StopHyperParameterTuningJobCommandInput, cb: (err: any, data?: StopHyperParameterTuningJobCommandOutput) => void): void;
    stopHyperParameterTuningJob(args: StopHyperParameterTuningJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopHyperParameterTuningJobCommandOutput) => void): void;
    /**
     * <p>Stops a running labeling job. A job that is stopped cannot be restarted. Any results
     *             obtained before the job is stopped are placed in the Amazon S3 output bucket.</p>
     */
    stopLabelingJob(args: StopLabelingJobCommandInput, options?: __HttpHandlerOptions): Promise<StopLabelingJobCommandOutput>;
    stopLabelingJob(args: StopLabelingJobCommandInput, cb: (err: any, data?: StopLabelingJobCommandOutput) => void): void;
    stopLabelingJob(args: StopLabelingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopLabelingJobCommandOutput) => void): void;
    /**
     * <p>Stops a previously started monitoring schedule.</p>
     */
    stopMonitoringSchedule(args: StopMonitoringScheduleCommandInput, options?: __HttpHandlerOptions): Promise<StopMonitoringScheduleCommandOutput>;
    stopMonitoringSchedule(args: StopMonitoringScheduleCommandInput, cb: (err: any, data?: StopMonitoringScheduleCommandOutput) => void): void;
    stopMonitoringSchedule(args: StopMonitoringScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopMonitoringScheduleCommandOutput) => void): void;
    /**
     * <p>Terminates the ML compute instance. Before terminating the instance, Amazon SageMaker
     *             disconnects the ML storage volume from it. Amazon SageMaker preserves the ML storage volume. Amazon SageMaker
     *             stops charging you for the ML compute instance when you call
     *                 <code>StopNotebookInstance</code>.</p>
     *         <p>To access data on the ML storage volume for a notebook instance that has been
     *             terminated, call the <code>StartNotebookInstance</code> API.
     *                 <code>StartNotebookInstance</code> launches another ML compute instance, configures
     *             it, and attaches the preserved ML storage volume so you can continue your work.
     *         </p>
     */
    stopNotebookInstance(args: StopNotebookInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StopNotebookInstanceCommandOutput>;
    stopNotebookInstance(args: StopNotebookInstanceCommandInput, cb: (err: any, data?: StopNotebookInstanceCommandOutput) => void): void;
    stopNotebookInstance(args: StopNotebookInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopNotebookInstanceCommandOutput) => void): void;
    /**
     * <p>Stops a processing job.</p>
     */
    stopProcessingJob(args: StopProcessingJobCommandInput, options?: __HttpHandlerOptions): Promise<StopProcessingJobCommandOutput>;
    stopProcessingJob(args: StopProcessingJobCommandInput, cb: (err: any, data?: StopProcessingJobCommandOutput) => void): void;
    stopProcessingJob(args: StopProcessingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopProcessingJobCommandOutput) => void): void;
    /**
     * <p>Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the
     *                 <code>SIGTERM</code> signal, which delays job termination for 120 seconds.
     *             Algorithms might use this 120-second window to save the model artifacts, so the results
     *             of the training is not lost. </p>
     *         <p>When it receives a <code>StopTrainingJob</code> request, Amazon SageMaker changes the status of
     *             the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the status to
     *                 <code>Stopped</code>.</p>
     */
    stopTrainingJob(args: StopTrainingJobCommandInput, options?: __HttpHandlerOptions): Promise<StopTrainingJobCommandOutput>;
    stopTrainingJob(args: StopTrainingJobCommandInput, cb: (err: any, data?: StopTrainingJobCommandOutput) => void): void;
    stopTrainingJob(args: StopTrainingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopTrainingJobCommandOutput) => void): void;
    /**
     * <p>Stops a transform job.</p>
     *         <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job
     *             changes to <code>Stopping</code>. After Amazon SageMaker
     *             stops
     *             the job, the status is set to <code>Stopped</code>. When you stop a transform job before
     *             it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>
     */
    stopTransformJob(args: StopTransformJobCommandInput, options?: __HttpHandlerOptions): Promise<StopTransformJobCommandOutput>;
    stopTransformJob(args: StopTransformJobCommandInput, cb: (err: any, data?: StopTransformJobCommandOutput) => void): void;
    stopTransformJob(args: StopTransformJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopTransformJobCommandOutput) => void): void;
    /**
     * <p>Updates the specified Git repository with the specified values.</p>
     */
    updateCodeRepository(args: UpdateCodeRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCodeRepositoryCommandOutput>;
    updateCodeRepository(args: UpdateCodeRepositoryCommandInput, cb: (err: any, data?: UpdateCodeRepositoryCommandOutput) => void): void;
    updateCodeRepository(args: UpdateCodeRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCodeRepositoryCommandOutput) => void): void;
    /**
     * <p>Updates a domain. Changes will impact all of the people in the domain.</p>
     */
    updateDomain(args: UpdateDomainCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainCommandOutput>;
    updateDomain(args: UpdateDomainCommandInput, cb: (err: any, data?: UpdateDomainCommandOutput) => void): void;
    updateDomain(args: UpdateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDomainCommandOutput) => void): void;
    /**
     * <p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to
     *             using newly created endpoint, and then deletes resources provisioned for the endpoint
     *             using the previous <code>EndpointConfig</code> (there is no availability loss). </p>
     *         <p>When Amazon SageMaker receives the request, it sets the endpoint status to
     *                 <code>Updating</code>. After updating the endpoint, it sets the status to
     *                 <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html">DescribeEndpoint</a> API.
     *
     *         </p>
     *         <note>
     *             <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is
     *                 live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code>
     *                 operations are being performed on the endpoint. To update an endpoint, you must
     *                 create a new <code>EndpointConfig</code>.</p>
     *         </note>
     */
    updateEndpoint(args: UpdateEndpointCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEndpointCommandOutput>;
    updateEndpoint(args: UpdateEndpointCommandInput, cb: (err: any, data?: UpdateEndpointCommandOutput) => void): void;
    updateEndpoint(args: UpdateEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEndpointCommandOutput) => void): void;
    /**
     * <p>Updates variant weight of one or more variants associated with an existing
     *             endpoint, or capacity of one variant associated with an existing endpoint. When it
     *             receives the request, Amazon SageMaker sets the endpoint status to <code>Updating</code>. After
     *             updating the endpoint, it sets the status to <code>InService</code>. To check the status
     *             of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html">DescribeEndpoint</a> API.
     *         </p>
     */
    updateEndpointWeightsAndCapacities(args: UpdateEndpointWeightsAndCapacitiesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEndpointWeightsAndCapacitiesCommandOutput>;
    updateEndpointWeightsAndCapacities(args: UpdateEndpointWeightsAndCapacitiesCommandInput, cb: (err: any, data?: UpdateEndpointWeightsAndCapacitiesCommandOutput) => void): void;
    updateEndpointWeightsAndCapacities(args: UpdateEndpointWeightsAndCapacitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEndpointWeightsAndCapacitiesCommandOutput) => void): void;
    /**
     * <p>Adds, updates, or removes the description of an experiment. Updates the
     *      display name of an experiment.</p>
     */
    updateExperiment(args: UpdateExperimentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateExperimentCommandOutput>;
    updateExperiment(args: UpdateExperimentCommandInput, cb: (err: any, data?: UpdateExperimentCommandOutput) => void): void;
    updateExperiment(args: UpdateExperimentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateExperimentCommandOutput) => void): void;
    /**
     * <p>Updates a previously created schedule.</p>
     */
    updateMonitoringSchedule(args: UpdateMonitoringScheduleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMonitoringScheduleCommandOutput>;
    updateMonitoringSchedule(args: UpdateMonitoringScheduleCommandInput, cb: (err: any, data?: UpdateMonitoringScheduleCommandOutput) => void): void;
    updateMonitoringSchedule(args: UpdateMonitoringScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMonitoringScheduleCommandOutput) => void): void;
    /**
     * <p>Updates a notebook instance. NotebookInstance updates include upgrading or
     *             downgrading the ML compute instance used for your notebook instance to accommodate
     *             changes in your workload requirements.</p>
     */
    updateNotebookInstance(args: UpdateNotebookInstanceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNotebookInstanceCommandOutput>;
    updateNotebookInstance(args: UpdateNotebookInstanceCommandInput, cb: (err: any, data?: UpdateNotebookInstanceCommandOutput) => void): void;
    updateNotebookInstance(args: UpdateNotebookInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNotebookInstanceCommandOutput) => void): void;
    /**
     * <p>Updates a notebook instance lifecycle configuration created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
     */
    updateNotebookInstanceLifecycleConfig(args: UpdateNotebookInstanceLifecycleConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNotebookInstanceLifecycleConfigCommandOutput>;
    updateNotebookInstanceLifecycleConfig(args: UpdateNotebookInstanceLifecycleConfigCommandInput, cb: (err: any, data?: UpdateNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    updateNotebookInstanceLifecycleConfig(args: UpdateNotebookInstanceLifecycleConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    /**
     * <p>Updates the display name of a trial.</p>
     */
    updateTrial(args: UpdateTrialCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrialCommandOutput>;
    updateTrial(args: UpdateTrialCommandInput, cb: (err: any, data?: UpdateTrialCommandOutput) => void): void;
    updateTrial(args: UpdateTrialCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTrialCommandOutput) => void): void;
    /**
     * <p>Updates one or more properties of a trial component.</p>
     */
    updateTrialComponent(args: UpdateTrialComponentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrialComponentCommandOutput>;
    updateTrialComponent(args: UpdateTrialComponentCommandInput, cb: (err: any, data?: UpdateTrialComponentCommandOutput) => void): void;
    updateTrialComponent(args: UpdateTrialComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTrialComponentCommandOutput) => void): void;
    /**
     * <p>Updates a user profile.</p>
     */
    updateUserProfile(args: UpdateUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserProfileCommandOutput>;
    updateUserProfile(args: UpdateUserProfileCommandInput, cb: (err: any, data?: UpdateUserProfileCommandOutput) => void): void;
    updateUserProfile(args: UpdateUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserProfileCommandOutput) => void): void;
    /**
     * <p>Restricts access to tasks assigned to workers in the specified workforce to those
     *             within specific ranges of IP addresses. You specify allowed IP addresses by creating a
     *             list of up to four <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>.</p>
     *         <p>By default, a workforce isn't restricted to specific IP addresses. If you specify a
     *             range of IP addresses, workers who attempt to access tasks using any IP address outside
     *             the specified range are denied access and get a <code>Not Found</code> error message on
     *             the worker portal. After restricting access with this operation, you can see the allowed
     *             IP values for a private workforce with the
     *             operation.</p>
     *         <important>
     *             <p>This operation applies only to private workforces.</p>
     *         </important>
     */
    updateWorkforce(args: UpdateWorkforceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWorkforceCommandOutput>;
    updateWorkforce(args: UpdateWorkforceCommandInput, cb: (err: any, data?: UpdateWorkforceCommandOutput) => void): void;
    updateWorkforce(args: UpdateWorkforceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWorkforceCommandOutput) => void): void;
    /**
     * <p>Updates an existing work team with new member definitions or description.</p>
     */
    updateWorkteam(args: UpdateWorkteamCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWorkteamCommandOutput>;
    updateWorkteam(args: UpdateWorkteamCommandInput, cb: (err: any, data?: UpdateWorkteamCommandOutput) => void): void;
    updateWorkteam(args: UpdateWorkteamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWorkteamCommandOutput) => void): void;
}
