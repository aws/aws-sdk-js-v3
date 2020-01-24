import { SageMakerClient } from "./SageMakerClient";
import {
  AddTagsCommand,
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "./commands/AddTagsCommand";
import {
  AssociateTrialComponentCommand,
  AssociateTrialComponentCommandInput,
  AssociateTrialComponentCommandOutput
} from "./commands/AssociateTrialComponentCommand";
import {
  CreateAlgorithmCommand,
  CreateAlgorithmCommandInput,
  CreateAlgorithmCommandOutput
} from "./commands/CreateAlgorithmCommand";
import {
  CreateAppCommand,
  CreateAppCommandInput,
  CreateAppCommandOutput
} from "./commands/CreateAppCommand";
import {
  CreateAutoMLJobCommand,
  CreateAutoMLJobCommandInput,
  CreateAutoMLJobCommandOutput
} from "./commands/CreateAutoMLJobCommand";
import {
  CreateCodeRepositoryCommand,
  CreateCodeRepositoryCommandInput,
  CreateCodeRepositoryCommandOutput
} from "./commands/CreateCodeRepositoryCommand";
import {
  CreateCompilationJobCommand,
  CreateCompilationJobCommandInput,
  CreateCompilationJobCommandOutput
} from "./commands/CreateCompilationJobCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput
} from "./commands/CreateDomainCommand";
import {
  CreateEndpointCommand,
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput
} from "./commands/CreateEndpointCommand";
import {
  CreateEndpointConfigCommand,
  CreateEndpointConfigCommandInput,
  CreateEndpointConfigCommandOutput
} from "./commands/CreateEndpointConfigCommand";
import {
  CreateExperimentCommand,
  CreateExperimentCommandInput,
  CreateExperimentCommandOutput
} from "./commands/CreateExperimentCommand";
import {
  CreateFlowDefinitionCommand,
  CreateFlowDefinitionCommandInput,
  CreateFlowDefinitionCommandOutput
} from "./commands/CreateFlowDefinitionCommand";
import {
  CreateHumanTaskUiCommand,
  CreateHumanTaskUiCommandInput,
  CreateHumanTaskUiCommandOutput
} from "./commands/CreateHumanTaskUiCommand";
import {
  CreateHyperParameterTuningJobCommand,
  CreateHyperParameterTuningJobCommandInput,
  CreateHyperParameterTuningJobCommandOutput
} from "./commands/CreateHyperParameterTuningJobCommand";
import {
  CreateLabelingJobCommand,
  CreateLabelingJobCommandInput,
  CreateLabelingJobCommandOutput
} from "./commands/CreateLabelingJobCommand";
import {
  CreateModelCommand,
  CreateModelCommandInput,
  CreateModelCommandOutput
} from "./commands/CreateModelCommand";
import {
  CreateModelPackageCommand,
  CreateModelPackageCommandInput,
  CreateModelPackageCommandOutput
} from "./commands/CreateModelPackageCommand";
import {
  CreateMonitoringScheduleCommand,
  CreateMonitoringScheduleCommandInput,
  CreateMonitoringScheduleCommandOutput
} from "./commands/CreateMonitoringScheduleCommand";
import {
  CreateNotebookInstanceCommand,
  CreateNotebookInstanceCommandInput,
  CreateNotebookInstanceCommandOutput
} from "./commands/CreateNotebookInstanceCommand";
import {
  CreateNotebookInstanceLifecycleConfigCommand,
  CreateNotebookInstanceLifecycleConfigCommandInput,
  CreateNotebookInstanceLifecycleConfigCommandOutput
} from "./commands/CreateNotebookInstanceLifecycleConfigCommand";
import {
  CreatePresignedDomainUrlCommand,
  CreatePresignedDomainUrlCommandInput,
  CreatePresignedDomainUrlCommandOutput
} from "./commands/CreatePresignedDomainUrlCommand";
import {
  CreatePresignedNotebookInstanceUrlCommand,
  CreatePresignedNotebookInstanceUrlCommandInput,
  CreatePresignedNotebookInstanceUrlCommandOutput
} from "./commands/CreatePresignedNotebookInstanceUrlCommand";
import {
  CreateProcessingJobCommand,
  CreateProcessingJobCommandInput,
  CreateProcessingJobCommandOutput
} from "./commands/CreateProcessingJobCommand";
import {
  CreateTrainingJobCommand,
  CreateTrainingJobCommandInput,
  CreateTrainingJobCommandOutput
} from "./commands/CreateTrainingJobCommand";
import {
  CreateTransformJobCommand,
  CreateTransformJobCommandInput,
  CreateTransformJobCommandOutput
} from "./commands/CreateTransformJobCommand";
import {
  CreateTrialCommand,
  CreateTrialCommandInput,
  CreateTrialCommandOutput
} from "./commands/CreateTrialCommand";
import {
  CreateTrialComponentCommand,
  CreateTrialComponentCommandInput,
  CreateTrialComponentCommandOutput
} from "./commands/CreateTrialComponentCommand";
import {
  CreateUserProfileCommand,
  CreateUserProfileCommandInput,
  CreateUserProfileCommandOutput
} from "./commands/CreateUserProfileCommand";
import {
  CreateWorkteamCommand,
  CreateWorkteamCommandInput,
  CreateWorkteamCommandOutput
} from "./commands/CreateWorkteamCommand";
import {
  DeleteAlgorithmCommand,
  DeleteAlgorithmCommandInput,
  DeleteAlgorithmCommandOutput
} from "./commands/DeleteAlgorithmCommand";
import {
  DeleteAppCommand,
  DeleteAppCommandInput,
  DeleteAppCommandOutput
} from "./commands/DeleteAppCommand";
import {
  DeleteCodeRepositoryCommand,
  DeleteCodeRepositoryCommandInput,
  DeleteCodeRepositoryCommandOutput
} from "./commands/DeleteCodeRepositoryCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput
} from "./commands/DeleteDomainCommand";
import {
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput
} from "./commands/DeleteEndpointCommand";
import {
  DeleteEndpointConfigCommand,
  DeleteEndpointConfigCommandInput,
  DeleteEndpointConfigCommandOutput
} from "./commands/DeleteEndpointConfigCommand";
import {
  DeleteExperimentCommand,
  DeleteExperimentCommandInput,
  DeleteExperimentCommandOutput
} from "./commands/DeleteExperimentCommand";
import {
  DeleteFlowDefinitionCommand,
  DeleteFlowDefinitionCommandInput,
  DeleteFlowDefinitionCommandOutput
} from "./commands/DeleteFlowDefinitionCommand";
import {
  DeleteModelCommand,
  DeleteModelCommandInput,
  DeleteModelCommandOutput
} from "./commands/DeleteModelCommand";
import {
  DeleteModelPackageCommand,
  DeleteModelPackageCommandInput,
  DeleteModelPackageCommandOutput
} from "./commands/DeleteModelPackageCommand";
import {
  DeleteMonitoringScheduleCommand,
  DeleteMonitoringScheduleCommandInput,
  DeleteMonitoringScheduleCommandOutput
} from "./commands/DeleteMonitoringScheduleCommand";
import {
  DeleteNotebookInstanceCommand,
  DeleteNotebookInstanceCommandInput,
  DeleteNotebookInstanceCommandOutput
} from "./commands/DeleteNotebookInstanceCommand";
import {
  DeleteNotebookInstanceLifecycleConfigCommand,
  DeleteNotebookInstanceLifecycleConfigCommandInput,
  DeleteNotebookInstanceLifecycleConfigCommandOutput
} from "./commands/DeleteNotebookInstanceLifecycleConfigCommand";
import {
  DeleteTagsCommand,
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "./commands/DeleteTagsCommand";
import {
  DeleteTrialCommand,
  DeleteTrialCommandInput,
  DeleteTrialCommandOutput
} from "./commands/DeleteTrialCommand";
import {
  DeleteTrialComponentCommand,
  DeleteTrialComponentCommandInput,
  DeleteTrialComponentCommandOutput
} from "./commands/DeleteTrialComponentCommand";
import {
  DeleteUserProfileCommand,
  DeleteUserProfileCommandInput,
  DeleteUserProfileCommandOutput
} from "./commands/DeleteUserProfileCommand";
import {
  DeleteWorkteamCommand,
  DeleteWorkteamCommandInput,
  DeleteWorkteamCommandOutput
} from "./commands/DeleteWorkteamCommand";
import {
  DescribeAlgorithmCommand,
  DescribeAlgorithmCommandInput,
  DescribeAlgorithmCommandOutput
} from "./commands/DescribeAlgorithmCommand";
import {
  DescribeAppCommand,
  DescribeAppCommandInput,
  DescribeAppCommandOutput
} from "./commands/DescribeAppCommand";
import {
  DescribeAutoMLJobCommand,
  DescribeAutoMLJobCommandInput,
  DescribeAutoMLJobCommandOutput
} from "./commands/DescribeAutoMLJobCommand";
import {
  DescribeCodeRepositoryCommand,
  DescribeCodeRepositoryCommandInput,
  DescribeCodeRepositoryCommandOutput
} from "./commands/DescribeCodeRepositoryCommand";
import {
  DescribeCompilationJobCommand,
  DescribeCompilationJobCommandInput,
  DescribeCompilationJobCommandOutput
} from "./commands/DescribeCompilationJobCommand";
import {
  DescribeDomainCommand,
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput
} from "./commands/DescribeDomainCommand";
import {
  DescribeEndpointCommand,
  DescribeEndpointCommandInput,
  DescribeEndpointCommandOutput
} from "./commands/DescribeEndpointCommand";
import {
  DescribeEndpointConfigCommand,
  DescribeEndpointConfigCommandInput,
  DescribeEndpointConfigCommandOutput
} from "./commands/DescribeEndpointConfigCommand";
import {
  DescribeExperimentCommand,
  DescribeExperimentCommandInput,
  DescribeExperimentCommandOutput
} from "./commands/DescribeExperimentCommand";
import {
  DescribeFlowDefinitionCommand,
  DescribeFlowDefinitionCommandInput,
  DescribeFlowDefinitionCommandOutput
} from "./commands/DescribeFlowDefinitionCommand";
import {
  DescribeHumanTaskUiCommand,
  DescribeHumanTaskUiCommandInput,
  DescribeHumanTaskUiCommandOutput
} from "./commands/DescribeHumanTaskUiCommand";
import {
  DescribeHyperParameterTuningJobCommand,
  DescribeHyperParameterTuningJobCommandInput,
  DescribeHyperParameterTuningJobCommandOutput
} from "./commands/DescribeHyperParameterTuningJobCommand";
import {
  DescribeLabelingJobCommand,
  DescribeLabelingJobCommandInput,
  DescribeLabelingJobCommandOutput
} from "./commands/DescribeLabelingJobCommand";
import {
  DescribeModelCommand,
  DescribeModelCommandInput,
  DescribeModelCommandOutput
} from "./commands/DescribeModelCommand";
import {
  DescribeModelPackageCommand,
  DescribeModelPackageCommandInput,
  DescribeModelPackageCommandOutput
} from "./commands/DescribeModelPackageCommand";
import {
  DescribeMonitoringScheduleCommand,
  DescribeMonitoringScheduleCommandInput,
  DescribeMonitoringScheduleCommandOutput
} from "./commands/DescribeMonitoringScheduleCommand";
import {
  DescribeNotebookInstanceCommand,
  DescribeNotebookInstanceCommandInput,
  DescribeNotebookInstanceCommandOutput
} from "./commands/DescribeNotebookInstanceCommand";
import {
  DescribeNotebookInstanceLifecycleConfigCommand,
  DescribeNotebookInstanceLifecycleConfigCommandInput,
  DescribeNotebookInstanceLifecycleConfigCommandOutput
} from "./commands/DescribeNotebookInstanceLifecycleConfigCommand";
import {
  DescribeProcessingJobCommand,
  DescribeProcessingJobCommandInput,
  DescribeProcessingJobCommandOutput
} from "./commands/DescribeProcessingJobCommand";
import {
  DescribeSubscribedWorkteamCommand,
  DescribeSubscribedWorkteamCommandInput,
  DescribeSubscribedWorkteamCommandOutput
} from "./commands/DescribeSubscribedWorkteamCommand";
import {
  DescribeTrainingJobCommand,
  DescribeTrainingJobCommandInput,
  DescribeTrainingJobCommandOutput
} from "./commands/DescribeTrainingJobCommand";
import {
  DescribeTransformJobCommand,
  DescribeTransformJobCommandInput,
  DescribeTransformJobCommandOutput
} from "./commands/DescribeTransformJobCommand";
import {
  DescribeTrialCommand,
  DescribeTrialCommandInput,
  DescribeTrialCommandOutput
} from "./commands/DescribeTrialCommand";
import {
  DescribeTrialComponentCommand,
  DescribeTrialComponentCommandInput,
  DescribeTrialComponentCommandOutput
} from "./commands/DescribeTrialComponentCommand";
import {
  DescribeUserProfileCommand,
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput
} from "./commands/DescribeUserProfileCommand";
import {
  DescribeWorkforceCommand,
  DescribeWorkforceCommandInput,
  DescribeWorkforceCommandOutput
} from "./commands/DescribeWorkforceCommand";
import {
  DescribeWorkteamCommand,
  DescribeWorkteamCommandInput,
  DescribeWorkteamCommandOutput
} from "./commands/DescribeWorkteamCommand";
import {
  DisassociateTrialComponentCommand,
  DisassociateTrialComponentCommandInput,
  DisassociateTrialComponentCommandOutput
} from "./commands/DisassociateTrialComponentCommand";
import {
  GetSearchSuggestionsCommand,
  GetSearchSuggestionsCommandInput,
  GetSearchSuggestionsCommandOutput
} from "./commands/GetSearchSuggestionsCommand";
import {
  ListAlgorithmsCommand,
  ListAlgorithmsCommandInput,
  ListAlgorithmsCommandOutput
} from "./commands/ListAlgorithmsCommand";
import {
  ListAppsCommand,
  ListAppsCommandInput,
  ListAppsCommandOutput
} from "./commands/ListAppsCommand";
import {
  ListAutoMLJobsCommand,
  ListAutoMLJobsCommandInput,
  ListAutoMLJobsCommandOutput
} from "./commands/ListAutoMLJobsCommand";
import {
  ListCandidatesForAutoMLJobCommand,
  ListCandidatesForAutoMLJobCommandInput,
  ListCandidatesForAutoMLJobCommandOutput
} from "./commands/ListCandidatesForAutoMLJobCommand";
import {
  ListCodeRepositoriesCommand,
  ListCodeRepositoriesCommandInput,
  ListCodeRepositoriesCommandOutput
} from "./commands/ListCodeRepositoriesCommand";
import {
  ListCompilationJobsCommand,
  ListCompilationJobsCommandInput,
  ListCompilationJobsCommandOutput
} from "./commands/ListCompilationJobsCommand";
import {
  ListDomainsCommand,
  ListDomainsCommandInput,
  ListDomainsCommandOutput
} from "./commands/ListDomainsCommand";
import {
  ListEndpointConfigsCommand,
  ListEndpointConfigsCommandInput,
  ListEndpointConfigsCommandOutput
} from "./commands/ListEndpointConfigsCommand";
import {
  ListEndpointsCommand,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput
} from "./commands/ListEndpointsCommand";
import {
  ListExperimentsCommand,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput
} from "./commands/ListExperimentsCommand";
import {
  ListFlowDefinitionsCommand,
  ListFlowDefinitionsCommandInput,
  ListFlowDefinitionsCommandOutput
} from "./commands/ListFlowDefinitionsCommand";
import {
  ListHumanTaskUisCommand,
  ListHumanTaskUisCommandInput,
  ListHumanTaskUisCommandOutput
} from "./commands/ListHumanTaskUisCommand";
import {
  ListHyperParameterTuningJobsCommand,
  ListHyperParameterTuningJobsCommandInput,
  ListHyperParameterTuningJobsCommandOutput
} from "./commands/ListHyperParameterTuningJobsCommand";
import {
  ListLabelingJobsCommand,
  ListLabelingJobsCommandInput,
  ListLabelingJobsCommandOutput
} from "./commands/ListLabelingJobsCommand";
import {
  ListLabelingJobsForWorkteamCommand,
  ListLabelingJobsForWorkteamCommandInput,
  ListLabelingJobsForWorkteamCommandOutput
} from "./commands/ListLabelingJobsForWorkteamCommand";
import {
  ListModelPackagesCommand,
  ListModelPackagesCommandInput,
  ListModelPackagesCommandOutput
} from "./commands/ListModelPackagesCommand";
import {
  ListModelsCommand,
  ListModelsCommandInput,
  ListModelsCommandOutput
} from "./commands/ListModelsCommand";
import {
  ListMonitoringExecutionsCommand,
  ListMonitoringExecutionsCommandInput,
  ListMonitoringExecutionsCommandOutput
} from "./commands/ListMonitoringExecutionsCommand";
import {
  ListMonitoringSchedulesCommand,
  ListMonitoringSchedulesCommandInput,
  ListMonitoringSchedulesCommandOutput
} from "./commands/ListMonitoringSchedulesCommand";
import {
  ListNotebookInstanceLifecycleConfigsCommand,
  ListNotebookInstanceLifecycleConfigsCommandInput,
  ListNotebookInstanceLifecycleConfigsCommandOutput
} from "./commands/ListNotebookInstanceLifecycleConfigsCommand";
import {
  ListNotebookInstancesCommand,
  ListNotebookInstancesCommandInput,
  ListNotebookInstancesCommandOutput
} from "./commands/ListNotebookInstancesCommand";
import {
  ListProcessingJobsCommand,
  ListProcessingJobsCommandInput,
  ListProcessingJobsCommandOutput
} from "./commands/ListProcessingJobsCommand";
import {
  ListSubscribedWorkteamsCommand,
  ListSubscribedWorkteamsCommandInput,
  ListSubscribedWorkteamsCommandOutput
} from "./commands/ListSubscribedWorkteamsCommand";
import {
  ListTagsCommand,
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "./commands/ListTagsCommand";
import {
  ListTrainingJobsCommand,
  ListTrainingJobsCommandInput,
  ListTrainingJobsCommandOutput
} from "./commands/ListTrainingJobsCommand";
import {
  ListTrainingJobsForHyperParameterTuningJobCommand,
  ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ListTrainingJobsForHyperParameterTuningJobCommandOutput
} from "./commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import {
  ListTransformJobsCommand,
  ListTransformJobsCommandInput,
  ListTransformJobsCommandOutput
} from "./commands/ListTransformJobsCommand";
import {
  ListTrialComponentsCommand,
  ListTrialComponentsCommandInput,
  ListTrialComponentsCommandOutput
} from "./commands/ListTrialComponentsCommand";
import {
  ListTrialsCommand,
  ListTrialsCommandInput,
  ListTrialsCommandOutput
} from "./commands/ListTrialsCommand";
import {
  ListUserProfilesCommand,
  ListUserProfilesCommandInput,
  ListUserProfilesCommandOutput
} from "./commands/ListUserProfilesCommand";
import {
  ListWorkteamsCommand,
  ListWorkteamsCommandInput,
  ListWorkteamsCommandOutput
} from "./commands/ListWorkteamsCommand";
import {
  RenderUiTemplateCommand,
  RenderUiTemplateCommandInput,
  RenderUiTemplateCommandOutput
} from "./commands/RenderUiTemplateCommand";
import {
  SearchCommand,
  SearchCommandInput,
  SearchCommandOutput
} from "./commands/SearchCommand";
import {
  StartMonitoringScheduleCommand,
  StartMonitoringScheduleCommandInput,
  StartMonitoringScheduleCommandOutput
} from "./commands/StartMonitoringScheduleCommand";
import {
  StartNotebookInstanceCommand,
  StartNotebookInstanceCommandInput,
  StartNotebookInstanceCommandOutput
} from "./commands/StartNotebookInstanceCommand";
import {
  StopAutoMLJobCommand,
  StopAutoMLJobCommandInput,
  StopAutoMLJobCommandOutput
} from "./commands/StopAutoMLJobCommand";
import {
  StopCompilationJobCommand,
  StopCompilationJobCommandInput,
  StopCompilationJobCommandOutput
} from "./commands/StopCompilationJobCommand";
import {
  StopHyperParameterTuningJobCommand,
  StopHyperParameterTuningJobCommandInput,
  StopHyperParameterTuningJobCommandOutput
} from "./commands/StopHyperParameterTuningJobCommand";
import {
  StopLabelingJobCommand,
  StopLabelingJobCommandInput,
  StopLabelingJobCommandOutput
} from "./commands/StopLabelingJobCommand";
import {
  StopMonitoringScheduleCommand,
  StopMonitoringScheduleCommandInput,
  StopMonitoringScheduleCommandOutput
} from "./commands/StopMonitoringScheduleCommand";
import {
  StopNotebookInstanceCommand,
  StopNotebookInstanceCommandInput,
  StopNotebookInstanceCommandOutput
} from "./commands/StopNotebookInstanceCommand";
import {
  StopProcessingJobCommand,
  StopProcessingJobCommandInput,
  StopProcessingJobCommandOutput
} from "./commands/StopProcessingJobCommand";
import {
  StopTrainingJobCommand,
  StopTrainingJobCommandInput,
  StopTrainingJobCommandOutput
} from "./commands/StopTrainingJobCommand";
import {
  StopTransformJobCommand,
  StopTransformJobCommandInput,
  StopTransformJobCommandOutput
} from "./commands/StopTransformJobCommand";
import {
  UpdateCodeRepositoryCommand,
  UpdateCodeRepositoryCommandInput,
  UpdateCodeRepositoryCommandOutput
} from "./commands/UpdateCodeRepositoryCommand";
import {
  UpdateDomainCommand,
  UpdateDomainCommandInput,
  UpdateDomainCommandOutput
} from "./commands/UpdateDomainCommand";
import {
  UpdateEndpointCommand,
  UpdateEndpointCommandInput,
  UpdateEndpointCommandOutput
} from "./commands/UpdateEndpointCommand";
import {
  UpdateEndpointWeightsAndCapacitiesCommand,
  UpdateEndpointWeightsAndCapacitiesCommandInput,
  UpdateEndpointWeightsAndCapacitiesCommandOutput
} from "./commands/UpdateEndpointWeightsAndCapacitiesCommand";
import {
  UpdateExperimentCommand,
  UpdateExperimentCommandInput,
  UpdateExperimentCommandOutput
} from "./commands/UpdateExperimentCommand";
import {
  UpdateMonitoringScheduleCommand,
  UpdateMonitoringScheduleCommandInput,
  UpdateMonitoringScheduleCommandOutput
} from "./commands/UpdateMonitoringScheduleCommand";
import {
  UpdateNotebookInstanceCommand,
  UpdateNotebookInstanceCommandInput,
  UpdateNotebookInstanceCommandOutput
} from "./commands/UpdateNotebookInstanceCommand";
import {
  UpdateNotebookInstanceLifecycleConfigCommand,
  UpdateNotebookInstanceLifecycleConfigCommandInput,
  UpdateNotebookInstanceLifecycleConfigCommandOutput
} from "./commands/UpdateNotebookInstanceLifecycleConfigCommand";
import {
  UpdateTrialCommand,
  UpdateTrialCommandInput,
  UpdateTrialCommandOutput
} from "./commands/UpdateTrialCommand";
import {
  UpdateTrialComponentCommand,
  UpdateTrialComponentCommandInput,
  UpdateTrialComponentCommandOutput
} from "./commands/UpdateTrialComponentCommand";
import {
  UpdateUserProfileCommand,
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput
} from "./commands/UpdateUserProfileCommand";
import {
  UpdateWorkforceCommand,
  UpdateWorkforceCommandInput,
  UpdateWorkforceCommandOutput
} from "./commands/UpdateWorkforceCommand";
import {
  UpdateWorkteamCommand,
  UpdateWorkteamCommandInput,
  UpdateWorkteamCommandOutput
} from "./commands/UpdateWorkteamCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Provides APIs for creating and managing Amazon SageMaker resources.</p>
 */
export class SageMaker extends SageMakerClient {
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
  public addTags(
    args: AddTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsCommandOutput>;
  public addTags(
    args: AddTagsCommandInput,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  public addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  public addTags(
    args: AddTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AddTagsCommandOutput) => void),
    cb?: (err: any, data?: AddTagsCommandOutput) => void
  ): Promise<AddTagsCommandOutput> | void {
    const command = new AddTagsCommand(args);
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
   * <p>Associates a trial component with a trial. A trial component can be associated
   *       with multiple trials. To disassociate a trial component from a trial, call the
   *       <a>DisassociateTrialComponent</a> API.</p>
   */
  public associateTrialComponent(
    args: AssociateTrialComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTrialComponentCommandOutput>;
  public associateTrialComponent(
    args: AssociateTrialComponentCommandInput,
    cb: (err: any, data?: AssociateTrialComponentCommandOutput) => void
  ): void;
  public associateTrialComponent(
    args: AssociateTrialComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTrialComponentCommandOutput) => void
  ): void;
  public associateTrialComponent(
    args: AssociateTrialComponentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateTrialComponentCommandOutput) => void),
    cb?: (err: any, data?: AssociateTrialComponentCommandOutput) => void
  ): Promise<AssociateTrialComponentCommandOutput> | void {
    const command = new AssociateTrialComponentCommand(args);
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
   * <p>Create a machine learning algorithm that you can use in Amazon SageMaker and list in the AWS
   *             Marketplace.</p>
   */
  public createAlgorithm(
    args: CreateAlgorithmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAlgorithmCommandOutput>;
  public createAlgorithm(
    args: CreateAlgorithmCommandInput,
    cb: (err: any, data?: CreateAlgorithmCommandOutput) => void
  ): void;
  public createAlgorithm(
    args: CreateAlgorithmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAlgorithmCommandOutput) => void
  ): void;
  public createAlgorithm(
    args: CreateAlgorithmCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateAlgorithmCommandOutput) => void),
    cb?: (err: any, data?: CreateAlgorithmCommandOutput) => void
  ): Promise<CreateAlgorithmCommandOutput> | void {
    const command = new CreateAlgorithmCommand(args);
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
   * <p>Creates a running App for the specified UserProfile.  Supported Apps are JupyterServer and KernelGateway.
   *      This operation is automatically invoked by Amazon SageMaker Amazon SageMaker Studio (Studio)
   *      upon access to the associated Studio Domain, and when new kernel configurations are selected by the user.
   *      A user may have multiple Apps active simultaneously.  Apps will automatically terminate and be deleted when stopped
   *      from within Studio, or when the DeleteApp API is manually called.
   *      UserProfiles are limited to 5 concurrently running Apps at a time.</p>
   */
  public createApp(
    args: CreateAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppCommandOutput>;
  public createApp(
    args: CreateAppCommandInput,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;
  public createApp(
    args: CreateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;
  public createApp(
    args: CreateAppCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateAppCommandOutput) => void),
    cb?: (err: any, data?: CreateAppCommandOutput) => void
  ): Promise<CreateAppCommandOutput> | void {
    const command = new CreateAppCommand(args);
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
   * <p>Creates an AutoPilot job.</p>
   */
  public createAutoMLJob(
    args: CreateAutoMLJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutoMLJobCommandOutput>;
  public createAutoMLJob(
    args: CreateAutoMLJobCommandInput,
    cb: (err: any, data?: CreateAutoMLJobCommandOutput) => void
  ): void;
  public createAutoMLJob(
    args: CreateAutoMLJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutoMLJobCommandOutput) => void
  ): void;
  public createAutoMLJob(
    args: CreateAutoMLJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateAutoMLJobCommandOutput) => void),
    cb?: (err: any, data?: CreateAutoMLJobCommandOutput) => void
  ): Promise<CreateAutoMLJobCommandOutput> | void {
    const command = new CreateAutoMLJobCommand(args);
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
   * <p>Creates a Git repository as a resource in your Amazon SageMaker account. You can associate the
   *             repository with notebook instances so that you can use Git source control for the
   *             notebooks you create. The Git repository is a resource in your Amazon SageMaker account, so it can
   *             be associated with more than one notebook instance, and it persists independently from
   *             the lifecycle of any notebook instances it is associated with.</p>
   *         <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository.</p>
   */
  public createCodeRepository(
    args: CreateCodeRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCodeRepositoryCommandOutput>;
  public createCodeRepository(
    args: CreateCodeRepositoryCommandInput,
    cb: (err: any, data?: CreateCodeRepositoryCommandOutput) => void
  ): void;
  public createCodeRepository(
    args: CreateCodeRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCodeRepositoryCommandOutput) => void
  ): void;
  public createCodeRepository(
    args: CreateCodeRepositoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateCodeRepositoryCommandOutput) => void),
    cb?: (err: any, data?: CreateCodeRepositoryCommandOutput) => void
  ): Promise<CreateCodeRepositoryCommandOutput> | void {
    const command = new CreateCodeRepositoryCommand(args);
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
  public createCompilationJob(
    args: CreateCompilationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCompilationJobCommandOutput>;
  public createCompilationJob(
    args: CreateCompilationJobCommandInput,
    cb: (err: any, data?: CreateCompilationJobCommandOutput) => void
  ): void;
  public createCompilationJob(
    args: CreateCompilationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCompilationJobCommandOutput) => void
  ): void;
  public createCompilationJob(
    args: CreateCompilationJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateCompilationJobCommandOutput) => void),
    cb?: (err: any, data?: CreateCompilationJobCommandOutput) => void
  ): Promise<CreateCompilationJobCommandOutput> | void {
    const command = new CreateCompilationJobCommand(args);
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
   * <p>Creates a Domain for Amazon SageMaker Amazon SageMaker Studio (Studio), which can be accessed by end-users in a web browser.  A Domain
   *      has an associated directory, list of authorized users, and a variety of security, application, policies, and
   *      Amazon Virtual Private Cloud configurations.  An AWS account is limited to one Domain, per region.
   *      Users within a domain can share notebook files and other artifacts with each other.
   *      When a Domain is created, an Amazon Elastic File System (EFS) is also created for use by all of the users within the Domain.  Each
   *      user receives a private home directory within the EFS for notebooks, Git repositories, and data files.
   *      </p>
   */
  public createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  public createDomain(
    args: CreateDomainCommandInput,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  public createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  public createDomain(
    args: CreateDomainCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDomainCommandOutput) => void),
    cb?: (err: any, data?: CreateDomainCommandOutput) => void
  ): Promise<CreateDomainCommandOutput> | void {
    const command = new CreateDomainCommand(args);
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
  public createEndpoint(
    args: CreateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointCommandOutput>;
  public createEndpoint(
    args: CreateEndpointCommandInput,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;
  public createEndpoint(
    args: CreateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;
  public createEndpoint(
    args: CreateEndpointCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateEndpointCommandOutput) => void
  ): Promise<CreateEndpointCommandOutput> | void {
    const command = new CreateEndpointCommand(args);
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
  public createEndpointConfig(
    args: CreateEndpointConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointConfigCommandOutput>;
  public createEndpointConfig(
    args: CreateEndpointConfigCommandInput,
    cb: (err: any, data?: CreateEndpointConfigCommandOutput) => void
  ): void;
  public createEndpointConfig(
    args: CreateEndpointConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointConfigCommandOutput) => void
  ): void;
  public createEndpointConfig(
    args: CreateEndpointConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateEndpointConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateEndpointConfigCommandOutput) => void
  ): Promise<CreateEndpointConfigCommandOutput> | void {
    const command = new CreateEndpointConfigCommand(args);
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
  public createExperiment(
    args: CreateExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExperimentCommandOutput>;
  public createExperiment(
    args: CreateExperimentCommandInput,
    cb: (err: any, data?: CreateExperimentCommandOutput) => void
  ): void;
  public createExperiment(
    args: CreateExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExperimentCommandOutput) => void
  ): void;
  public createExperiment(
    args: CreateExperimentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateExperimentCommandOutput) => void),
    cb?: (err: any, data?: CreateExperimentCommandOutput) => void
  ): Promise<CreateExperimentCommandOutput> | void {
    const command = new CreateExperimentCommand(args);
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
   * <p>Creates a flow definition.</p>
   */
  public createFlowDefinition(
    args: CreateFlowDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFlowDefinitionCommandOutput>;
  public createFlowDefinition(
    args: CreateFlowDefinitionCommandInput,
    cb: (err: any, data?: CreateFlowDefinitionCommandOutput) => void
  ): void;
  public createFlowDefinition(
    args: CreateFlowDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowDefinitionCommandOutput) => void
  ): void;
  public createFlowDefinition(
    args: CreateFlowDefinitionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateFlowDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateFlowDefinitionCommandOutput) => void
  ): Promise<CreateFlowDefinitionCommandOutput> | void {
    const command = new CreateFlowDefinitionCommand(args);
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
   * <p>Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.</p>
   */
  public createHumanTaskUi(
    args: CreateHumanTaskUiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHumanTaskUiCommandOutput>;
  public createHumanTaskUi(
    args: CreateHumanTaskUiCommandInput,
    cb: (err: any, data?: CreateHumanTaskUiCommandOutput) => void
  ): void;
  public createHumanTaskUi(
    args: CreateHumanTaskUiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHumanTaskUiCommandOutput) => void
  ): void;
  public createHumanTaskUi(
    args: CreateHumanTaskUiCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateHumanTaskUiCommandOutput) => void),
    cb?: (err: any, data?: CreateHumanTaskUiCommandOutput) => void
  ): Promise<CreateHumanTaskUiCommandOutput> | void {
    const command = new CreateHumanTaskUiCommand(args);
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
   * <p>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version
   *             of a model by running many training jobs on your dataset using the algorithm you choose
   *             and values for hyperparameters within ranges that you specify. It then chooses the
   *             hyperparameter values that result in a model that performs the best, as measured by an
   *             objective metric that you choose.</p>
   */
  public createHyperParameterTuningJob(
    args: CreateHyperParameterTuningJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHyperParameterTuningJobCommandOutput>;
  public createHyperParameterTuningJob(
    args: CreateHyperParameterTuningJobCommandInput,
    cb: (err: any, data?: CreateHyperParameterTuningJobCommandOutput) => void
  ): void;
  public createHyperParameterTuningJob(
    args: CreateHyperParameterTuningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHyperParameterTuningJobCommandOutput) => void
  ): void;
  public createHyperParameterTuningJob(
    args: CreateHyperParameterTuningJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateHyperParameterTuningJobCommandOutput) => void),
    cb?: (err: any, data?: CreateHyperParameterTuningJobCommandOutput) => void
  ): Promise<CreateHyperParameterTuningJobCommandOutput> | void {
    const command = new CreateHyperParameterTuningJobCommand(args);
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
  public createLabelingJob(
    args: CreateLabelingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLabelingJobCommandOutput>;
  public createLabelingJob(
    args: CreateLabelingJobCommandInput,
    cb: (err: any, data?: CreateLabelingJobCommandOutput) => void
  ): void;
  public createLabelingJob(
    args: CreateLabelingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLabelingJobCommandOutput) => void
  ): void;
  public createLabelingJob(
    args: CreateLabelingJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateLabelingJobCommandOutput) => void),
    cb?: (err: any, data?: CreateLabelingJobCommandOutput) => void
  ): Promise<CreateLabelingJobCommandOutput> | void {
    const command = new CreateLabelingJobCommand(args);
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
  public createModel(
    args: CreateModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelCommandOutput>;
  public createModel(
    args: CreateModelCommandInput,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;
  public createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;
  public createModel(
    args: CreateModelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateModelCommandOutput) => void),
    cb?: (err: any, data?: CreateModelCommandOutput) => void
  ): Promise<CreateModelCommandOutput> | void {
    const command = new CreateModelCommand(args);
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
   * <p>Creates a model package that you can use to create Amazon SageMaker models or list on AWS
   *             Marketplace. Buyers can subscribe to model packages listed on AWS Marketplace to create
   *             models in Amazon SageMaker.</p>
   *         <p>To create a model package by specifying a Docker container that contains your
   *             inference code and the Amazon S3 location of your model artifacts, provide values for
   *                 <code>InferenceSpecification</code>. To create a model from an algorithm resource
   *             that you created or subscribed to in AWS Marketplace, provide a value for
   *                 <code>SourceAlgorithmSpecification</code>.</p>
   */
  public createModelPackage(
    args: CreateModelPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelPackageCommandOutput>;
  public createModelPackage(
    args: CreateModelPackageCommandInput,
    cb: (err: any, data?: CreateModelPackageCommandOutput) => void
  ): void;
  public createModelPackage(
    args: CreateModelPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelPackageCommandOutput) => void
  ): void;
  public createModelPackage(
    args: CreateModelPackageCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateModelPackageCommandOutput) => void),
    cb?: (err: any, data?: CreateModelPackageCommandOutput) => void
  ): Promise<CreateModelPackageCommandOutput> | void {
    const command = new CreateModelPackageCommand(args);
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
   * <p>Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data
   *          captured for an Amazon SageMaker Endoint.</p>
   */
  public createMonitoringSchedule(
    args: CreateMonitoringScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMonitoringScheduleCommandOutput>;
  public createMonitoringSchedule(
    args: CreateMonitoringScheduleCommandInput,
    cb: (err: any, data?: CreateMonitoringScheduleCommandOutput) => void
  ): void;
  public createMonitoringSchedule(
    args: CreateMonitoringScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMonitoringScheduleCommandOutput) => void
  ): void;
  public createMonitoringSchedule(
    args: CreateMonitoringScheduleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateMonitoringScheduleCommandOutput) => void),
    cb?: (err: any, data?: CreateMonitoringScheduleCommandOutput) => void
  ): Promise<CreateMonitoringScheduleCommandOutput> | void {
    const command = new CreateMonitoringScheduleCommand(args);
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
  public createNotebookInstance(
    args: CreateNotebookInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotebookInstanceCommandOutput>;
  public createNotebookInstance(
    args: CreateNotebookInstanceCommandInput,
    cb: (err: any, data?: CreateNotebookInstanceCommandOutput) => void
  ): void;
  public createNotebookInstance(
    args: CreateNotebookInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotebookInstanceCommandOutput) => void
  ): void;
  public createNotebookInstance(
    args: CreateNotebookInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateNotebookInstanceCommandOutput) => void),
    cb?: (err: any, data?: CreateNotebookInstanceCommandOutput) => void
  ): Promise<CreateNotebookInstanceCommandOutput> | void {
    const command = new CreateNotebookInstanceCommand(args);
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
  public createNotebookInstanceLifecycleConfig(
    args: CreateNotebookInstanceLifecycleConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotebookInstanceLifecycleConfigCommandOutput>;
  public createNotebookInstanceLifecycleConfig(
    args: CreateNotebookInstanceLifecycleConfigCommandInput,
    cb: (
      err: any,
      data?: CreateNotebookInstanceLifecycleConfigCommandOutput
    ) => void
  ): void;
  public createNotebookInstanceLifecycleConfig(
    args: CreateNotebookInstanceLifecycleConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: CreateNotebookInstanceLifecycleConfigCommandOutput
    ) => void
  ): void;
  public createNotebookInstanceLifecycleConfig(
    args: CreateNotebookInstanceLifecycleConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: CreateNotebookInstanceLifecycleConfigCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: CreateNotebookInstanceLifecycleConfigCommandOutput
    ) => void
  ): Promise<CreateNotebookInstanceLifecycleConfigCommandOutput> | void {
    const command = new CreateNotebookInstanceLifecycleConfigCommand(args);
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
   * <p>Creates a URL for a specified UserProfile in a Domain.  When accessed in a web browser, the user will be
   *        automatically signed in to Amazon SageMaker Amazon SageMaker Studio (Studio), and granted access to all of the Apps and files associated with that
   *        Amazon Elastic File System (EFS).
   *
   *        This operation can only be called when AuthMode equals IAM.
   *    </p>
   */
  public createPresignedDomainUrl(
    args: CreatePresignedDomainUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePresignedDomainUrlCommandOutput>;
  public createPresignedDomainUrl(
    args: CreatePresignedDomainUrlCommandInput,
    cb: (err: any, data?: CreatePresignedDomainUrlCommandOutput) => void
  ): void;
  public createPresignedDomainUrl(
    args: CreatePresignedDomainUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePresignedDomainUrlCommandOutput) => void
  ): void;
  public createPresignedDomainUrl(
    args: CreatePresignedDomainUrlCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreatePresignedDomainUrlCommandOutput) => void),
    cb?: (err: any, data?: CreatePresignedDomainUrlCommandOutput) => void
  ): Promise<CreatePresignedDomainUrlCommandOutput> | void {
    const command = new CreatePresignedDomainUrlCommand(args);
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
  public createPresignedNotebookInstanceUrl(
    args: CreatePresignedNotebookInstanceUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePresignedNotebookInstanceUrlCommandOutput>;
  public createPresignedNotebookInstanceUrl(
    args: CreatePresignedNotebookInstanceUrlCommandInput,
    cb: (
      err: any,
      data?: CreatePresignedNotebookInstanceUrlCommandOutput
    ) => void
  ): void;
  public createPresignedNotebookInstanceUrl(
    args: CreatePresignedNotebookInstanceUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: CreatePresignedNotebookInstanceUrlCommandOutput
    ) => void
  ): void;
  public createPresignedNotebookInstanceUrl(
    args: CreatePresignedNotebookInstanceUrlCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: CreatePresignedNotebookInstanceUrlCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: CreatePresignedNotebookInstanceUrlCommandOutput
    ) => void
  ): Promise<CreatePresignedNotebookInstanceUrlCommandOutput> | void {
    const command = new CreatePresignedNotebookInstanceUrlCommand(args);
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
   * <p>Creates a processing job.</p>
   */
  public createProcessingJob(
    args: CreateProcessingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProcessingJobCommandOutput>;
  public createProcessingJob(
    args: CreateProcessingJobCommandInput,
    cb: (err: any, data?: CreateProcessingJobCommandOutput) => void
  ): void;
  public createProcessingJob(
    args: CreateProcessingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProcessingJobCommandOutput) => void
  ): void;
  public createProcessingJob(
    args: CreateProcessingJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateProcessingJobCommandOutput) => void),
    cb?: (err: any, data?: CreateProcessingJobCommandOutput) => void
  ): Promise<CreateProcessingJobCommandOutput> | void {
    const command = new CreateProcessingJobCommand(args);
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
  public createTrainingJob(
    args: CreateTrainingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrainingJobCommandOutput>;
  public createTrainingJob(
    args: CreateTrainingJobCommandInput,
    cb: (err: any, data?: CreateTrainingJobCommandOutput) => void
  ): void;
  public createTrainingJob(
    args: CreateTrainingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrainingJobCommandOutput) => void
  ): void;
  public createTrainingJob(
    args: CreateTrainingJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateTrainingJobCommandOutput) => void),
    cb?: (err: any, data?: CreateTrainingJobCommandOutput) => void
  ): Promise<CreateTrainingJobCommandOutput> | void {
    const command = new CreateTrainingJobCommand(args);
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
  public createTransformJob(
    args: CreateTransformJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransformJobCommandOutput>;
  public createTransformJob(
    args: CreateTransformJobCommandInput,
    cb: (err: any, data?: CreateTransformJobCommandOutput) => void
  ): void;
  public createTransformJob(
    args: CreateTransformJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransformJobCommandOutput) => void
  ): void;
  public createTransformJob(
    args: CreateTransformJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateTransformJobCommandOutput) => void),
    cb?: (err: any, data?: CreateTransformJobCommandOutput) => void
  ): Promise<CreateTransformJobCommandOutput> | void {
    const command = new CreateTransformJobCommand(args);
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
  public createTrial(
    args: CreateTrialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrialCommandOutput>;
  public createTrial(
    args: CreateTrialCommandInput,
    cb: (err: any, data?: CreateTrialCommandOutput) => void
  ): void;
  public createTrial(
    args: CreateTrialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrialCommandOutput) => void
  ): void;
  public createTrial(
    args: CreateTrialCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateTrialCommandOutput) => void),
    cb?: (err: any, data?: CreateTrialCommandOutput) => void
  ): Promise<CreateTrialCommandOutput> | void {
    const command = new CreateTrialCommand(args);
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
  public createTrialComponent(
    args: CreateTrialComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrialComponentCommandOutput>;
  public createTrialComponent(
    args: CreateTrialComponentCommandInput,
    cb: (err: any, data?: CreateTrialComponentCommandOutput) => void
  ): void;
  public createTrialComponent(
    args: CreateTrialComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrialComponentCommandOutput) => void
  ): void;
  public createTrialComponent(
    args: CreateTrialComponentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateTrialComponentCommandOutput) => void),
    cb?: (err: any, data?: CreateTrialComponentCommandOutput) => void
  ): Promise<CreateTrialComponentCommandOutput> | void {
    const command = new CreateTrialComponentCommand(args);
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
   * <p>Creates a new user profile.
   *      A user profile represents a single user within a Domain, and is the main way to reference a "person" for the purposes of sharing, reporting and other user-oriented features.
   *      This entity is created during on-boarding. If an administrator invites a person by email or imports them from SSO, a new UserProfile is automatically created.
   *      This entity is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory.
   *    </p>
   */
  public createUserProfile(
    args: CreateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserProfileCommandOutput>;
  public createUserProfile(
    args: CreateUserProfileCommandInput,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;
  public createUserProfile(
    args: CreateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;
  public createUserProfile(
    args: CreateUserProfileCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateUserProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): Promise<CreateUserProfileCommandOutput> | void {
    const command = new CreateUserProfileCommand(args);
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
   * <p>Creates a new work team for labeling your data. A work team is defined by one or more
   *             Amazon Cognito user pools. You must first create the user pools before you can create a work
   *             team.</p>
   *         <p>You cannot create more than 25 work teams in an account and region.</p>
   */
  public createWorkteam(
    args: CreateWorkteamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkteamCommandOutput>;
  public createWorkteam(
    args: CreateWorkteamCommandInput,
    cb: (err: any, data?: CreateWorkteamCommandOutput) => void
  ): void;
  public createWorkteam(
    args: CreateWorkteamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkteamCommandOutput) => void
  ): void;
  public createWorkteam(
    args: CreateWorkteamCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateWorkteamCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkteamCommandOutput) => void
  ): Promise<CreateWorkteamCommandOutput> | void {
    const command = new CreateWorkteamCommand(args);
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
   * <p>Removes the specified algorithm from your account.</p>
   */
  public deleteAlgorithm(
    args: DeleteAlgorithmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAlgorithmCommandOutput>;
  public deleteAlgorithm(
    args: DeleteAlgorithmCommandInput,
    cb: (err: any, data?: DeleteAlgorithmCommandOutput) => void
  ): void;
  public deleteAlgorithm(
    args: DeleteAlgorithmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlgorithmCommandOutput) => void
  ): void;
  public deleteAlgorithm(
    args: DeleteAlgorithmCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteAlgorithmCommandOutput) => void),
    cb?: (err: any, data?: DeleteAlgorithmCommandOutput) => void
  ): Promise<DeleteAlgorithmCommandOutput> | void {
    const command = new DeleteAlgorithmCommand(args);
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
   * <p>Used to stop and delete an app.</p>
   */
  public deleteApp(
    args: DeleteAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppCommandOutput>;
  public deleteApp(
    args: DeleteAppCommandInput,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;
  public deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;
  public deleteApp(
    args: DeleteAppCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteAppCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppCommandOutput) => void
  ): Promise<DeleteAppCommandOutput> | void {
    const command = new DeleteAppCommand(args);
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
   * <p>Deletes the specified Git repository from your account.</p>
   */
  public deleteCodeRepository(
    args: DeleteCodeRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCodeRepositoryCommandOutput>;
  public deleteCodeRepository(
    args: DeleteCodeRepositoryCommandInput,
    cb: (err: any, data?: DeleteCodeRepositoryCommandOutput) => void
  ): void;
  public deleteCodeRepository(
    args: DeleteCodeRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCodeRepositoryCommandOutput) => void
  ): void;
  public deleteCodeRepository(
    args: DeleteCodeRepositoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteCodeRepositoryCommandOutput) => void),
    cb?: (err: any, data?: DeleteCodeRepositoryCommandOutput) => void
  ): Promise<DeleteCodeRepositoryCommandOutput> | void {
    const command = new DeleteCodeRepositoryCommand(args);
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
   * <p>Used to delete a domain.
   *      If you on-boarded with IAM mode, you will need to delete your domain to on-board again using SSO.
   *      Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts.
   *    </p>
   */
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainCommandOutput>;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDomainCommandOutput) => void),
    cb?: (err: any, data?: DeleteDomainCommandOutput) => void
  ): Promise<DeleteDomainCommandOutput> | void {
    const command = new DeleteDomainCommand(args);
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
   * <p>Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the
   *             endpoint was created. </p>
   *         <p>Amazon SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't
   *             need to use the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> API call.</p>
   */
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointCommandOutput>;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): Promise<DeleteEndpointCommandOutput> | void {
    const command = new DeleteEndpointCommand(args);
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
   * <p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API
   *             deletes only the specified configuration. It does not delete endpoints created using the
   *             configuration. </p>
   */
  public deleteEndpointConfig(
    args: DeleteEndpointConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointConfigCommandOutput>;
  public deleteEndpointConfig(
    args: DeleteEndpointConfigCommandInput,
    cb: (err: any, data?: DeleteEndpointConfigCommandOutput) => void
  ): void;
  public deleteEndpointConfig(
    args: DeleteEndpointConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointConfigCommandOutput) => void
  ): void;
  public deleteEndpointConfig(
    args: DeleteEndpointConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteEndpointConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteEndpointConfigCommandOutput) => void
  ): Promise<DeleteEndpointConfigCommandOutput> | void {
    const command = new DeleteEndpointConfigCommand(args);
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
   * <p>Deletes an Amazon SageMaker experiment. All trials associated with the experiment must be
   *       deleted first. Use the <a>ListTrials</a> API to get a list of the
   *       trials associated with the experiment.</p>
   */
  public deleteExperiment(
    args: DeleteExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExperimentCommandOutput>;
  public deleteExperiment(
    args: DeleteExperimentCommandInput,
    cb: (err: any, data?: DeleteExperimentCommandOutput) => void
  ): void;
  public deleteExperiment(
    args: DeleteExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExperimentCommandOutput) => void
  ): void;
  public deleteExperiment(
    args: DeleteExperimentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteExperimentCommandOutput) => void),
    cb?: (err: any, data?: DeleteExperimentCommandOutput) => void
  ): Promise<DeleteExperimentCommandOutput> | void {
    const command = new DeleteExperimentCommand(args);
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
   * <p>Deletes the specified flow definition.</p>
   */
  public deleteFlowDefinition(
    args: DeleteFlowDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFlowDefinitionCommandOutput>;
  public deleteFlowDefinition(
    args: DeleteFlowDefinitionCommandInput,
    cb: (err: any, data?: DeleteFlowDefinitionCommandOutput) => void
  ): void;
  public deleteFlowDefinition(
    args: DeleteFlowDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowDefinitionCommandOutput) => void
  ): void;
  public deleteFlowDefinition(
    args: DeleteFlowDefinitionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteFlowDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteFlowDefinitionCommandOutput) => void
  ): Promise<DeleteFlowDefinitionCommandOutput> | void {
    const command = new DeleteFlowDefinitionCommand(args);
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
   * <p>Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that
   *             was created in Amazon SageMaker when you called the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html">CreateModel</a> API. It does not
   *             delete model artifacts, inference code, or the IAM role that you specified when
   *             creating the model. </p>
   */
  public deleteModel(
    args: DeleteModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelCommandOutput>;
  public deleteModel(
    args: DeleteModelCommandInput,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;
  public deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;
  public deleteModel(
    args: DeleteModelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteModelCommandOutput) => void),
    cb?: (err: any, data?: DeleteModelCommandOutput) => void
  ): Promise<DeleteModelCommandOutput> | void {
    const command = new DeleteModelCommand(args);
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
   * <p>Deletes a model package.</p>
   *         <p>A model package is used to create Amazon SageMaker models or list on AWS Marketplace. Buyers can
   *             subscribe to model packages listed on AWS Marketplace to create models in Amazon SageMaker.</p>
   */
  public deleteModelPackage(
    args: DeleteModelPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelPackageCommandOutput>;
  public deleteModelPackage(
    args: DeleteModelPackageCommandInput,
    cb: (err: any, data?: DeleteModelPackageCommandOutput) => void
  ): void;
  public deleteModelPackage(
    args: DeleteModelPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelPackageCommandOutput) => void
  ): void;
  public deleteModelPackage(
    args: DeleteModelPackageCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteModelPackageCommandOutput) => void),
    cb?: (err: any, data?: DeleteModelPackageCommandOutput) => void
  ): Promise<DeleteModelPackageCommandOutput> | void {
    const command = new DeleteModelPackageCommand(args);
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
   * <p>Deletes a monitoring schedule. Also stops the schedule had not already been stopped.
   *          This does not delete the job execution history of the monitoring schedule. </p>
   */
  public deleteMonitoringSchedule(
    args: DeleteMonitoringScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMonitoringScheduleCommandOutput>;
  public deleteMonitoringSchedule(
    args: DeleteMonitoringScheduleCommandInput,
    cb: (err: any, data?: DeleteMonitoringScheduleCommandOutput) => void
  ): void;
  public deleteMonitoringSchedule(
    args: DeleteMonitoringScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMonitoringScheduleCommandOutput) => void
  ): void;
  public deleteMonitoringSchedule(
    args: DeleteMonitoringScheduleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteMonitoringScheduleCommandOutput) => void),
    cb?: (err: any, data?: DeleteMonitoringScheduleCommandOutput) => void
  ): Promise<DeleteMonitoringScheduleCommandOutput> | void {
    const command = new DeleteMonitoringScheduleCommand(args);
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
   * <p> Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you
   *             must call the <code>StopNotebookInstance</code> API. </p>
   *         <important>
   *             <p>When you delete a notebook instance, you lose all of your data. Amazon SageMaker removes
   *                 the ML compute instance, and deletes the ML storage volume and the network interface
   *                 associated with the notebook instance. </p>
   *         </important>
   */
  public deleteNotebookInstance(
    args: DeleteNotebookInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotebookInstanceCommandOutput>;
  public deleteNotebookInstance(
    args: DeleteNotebookInstanceCommandInput,
    cb: (err: any, data?: DeleteNotebookInstanceCommandOutput) => void
  ): void;
  public deleteNotebookInstance(
    args: DeleteNotebookInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotebookInstanceCommandOutput) => void
  ): void;
  public deleteNotebookInstance(
    args: DeleteNotebookInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteNotebookInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteNotebookInstanceCommandOutput) => void
  ): Promise<DeleteNotebookInstanceCommandOutput> | void {
    const command = new DeleteNotebookInstanceCommand(args);
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
   * <p>Deletes a notebook instance lifecycle configuration.</p>
   */
  public deleteNotebookInstanceLifecycleConfig(
    args: DeleteNotebookInstanceLifecycleConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotebookInstanceLifecycleConfigCommandOutput>;
  public deleteNotebookInstanceLifecycleConfig(
    args: DeleteNotebookInstanceLifecycleConfigCommandInput,
    cb: (
      err: any,
      data?: DeleteNotebookInstanceLifecycleConfigCommandOutput
    ) => void
  ): void;
  public deleteNotebookInstanceLifecycleConfig(
    args: DeleteNotebookInstanceLifecycleConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DeleteNotebookInstanceLifecycleConfigCommandOutput
    ) => void
  ): void;
  public deleteNotebookInstanceLifecycleConfig(
    args: DeleteNotebookInstanceLifecycleConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DeleteNotebookInstanceLifecycleConfigCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DeleteNotebookInstanceLifecycleConfigCommandOutput
    ) => void
  ): Promise<DeleteNotebookInstanceLifecycleConfigCommandOutput> | void {
    const command = new DeleteNotebookInstanceLifecycleConfigCommand(args);
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
   * <p>Deletes the specified tags from an Amazon SageMaker resource.</p>
   *         <p>To list a resource's tags, use the <code>ListTags</code> API. </p>
   *         <note>
   *             <p>When you call this API to delete tags from a hyperparameter tuning job, the
   *                 deleted tags are not removed from training jobs that the hyperparameter tuning job
   *                 launched before you called this API.</p>
   *         </note>
   */
  public deleteTags(
    args: DeleteTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTagsCommandOutput>;
  public deleteTags(
    args: DeleteTagsCommandInput,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteTagsCommandOutput) => void),
    cb?: (err: any, data?: DeleteTagsCommandOutput) => void
  ): Promise<DeleteTagsCommandOutput> | void {
    const command = new DeleteTagsCommand(args);
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
   * <p>Deletes the specified trial. All trial components that make up the trial must be
   *       deleted first. Use the <a>DescribeTrialComponent</a> API to get the list
   *       of trial components.</p>
   */
  public deleteTrial(
    args: DeleteTrialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrialCommandOutput>;
  public deleteTrial(
    args: DeleteTrialCommandInput,
    cb: (err: any, data?: DeleteTrialCommandOutput) => void
  ): void;
  public deleteTrial(
    args: DeleteTrialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrialCommandOutput) => void
  ): void;
  public deleteTrial(
    args: DeleteTrialCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteTrialCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrialCommandOutput) => void
  ): Promise<DeleteTrialCommandOutput> | void {
    const command = new DeleteTrialCommand(args);
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
   * <p>Deletes the specified trial component. A trial component must be disassociated from all
   *       trials before the trial component can be deleted. To disassociate a trial component from a
   *       trial, call the <a>DisassociateTrialComponent</a> API.</p>
   */
  public deleteTrialComponent(
    args: DeleteTrialComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrialComponentCommandOutput>;
  public deleteTrialComponent(
    args: DeleteTrialComponentCommandInput,
    cb: (err: any, data?: DeleteTrialComponentCommandOutput) => void
  ): void;
  public deleteTrialComponent(
    args: DeleteTrialComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrialComponentCommandOutput) => void
  ): void;
  public deleteTrialComponent(
    args: DeleteTrialComponentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteTrialComponentCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrialComponentCommandOutput) => void
  ): Promise<DeleteTrialComponentCommandOutput> | void {
    const command = new DeleteTrialComponentCommand(args);
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
   * <p>Deletes a user profile.</p>
   */
  public deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserProfileCommandOutput>;
  public deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    cb: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): void;
  public deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): void;
  public deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteUserProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): Promise<DeleteUserProfileCommandOutput> | void {
    const command = new DeleteUserProfileCommand(args);
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
   * <p>Deletes an existing work team. This operation can't be undone.</p>
   */
  public deleteWorkteam(
    args: DeleteWorkteamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkteamCommandOutput>;
  public deleteWorkteam(
    args: DeleteWorkteamCommandInput,
    cb: (err: any, data?: DeleteWorkteamCommandOutput) => void
  ): void;
  public deleteWorkteam(
    args: DeleteWorkteamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkteamCommandOutput) => void
  ): void;
  public deleteWorkteam(
    args: DeleteWorkteamCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteWorkteamCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkteamCommandOutput) => void
  ): Promise<DeleteWorkteamCommandOutput> | void {
    const command = new DeleteWorkteamCommand(args);
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
   * <p>Returns a description of the specified algorithm that is in your account.</p>
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
   * <p>Describes the app.</p>
   */
  public describeApp(
    args: DescribeAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppCommandOutput>;
  public describeApp(
    args: DescribeAppCommandInput,
    cb: (err: any, data?: DescribeAppCommandOutput) => void
  ): void;
  public describeApp(
    args: DescribeAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppCommandOutput) => void
  ): void;
  public describeApp(
    args: DescribeAppCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAppCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppCommandOutput) => void
  ): Promise<DescribeAppCommandOutput> | void {
    const command = new DescribeAppCommand(args);
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
   * <p>Returns information about an Amazon SageMaker job.</p>
   */
  public describeAutoMLJob(
    args: DescribeAutoMLJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoMLJobCommandOutput>;
  public describeAutoMLJob(
    args: DescribeAutoMLJobCommandInput,
    cb: (err: any, data?: DescribeAutoMLJobCommandOutput) => void
  ): void;
  public describeAutoMLJob(
    args: DescribeAutoMLJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoMLJobCommandOutput) => void
  ): void;
  public describeAutoMLJob(
    args: DescribeAutoMLJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAutoMLJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeAutoMLJobCommandOutput) => void
  ): Promise<DescribeAutoMLJobCommandOutput> | void {
    const command = new DescribeAutoMLJobCommand(args);
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
   * <p>Gets details about the specified Git repository.</p>
   */
  public describeCodeRepository(
    args: DescribeCodeRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCodeRepositoryCommandOutput>;
  public describeCodeRepository(
    args: DescribeCodeRepositoryCommandInput,
    cb: (err: any, data?: DescribeCodeRepositoryCommandOutput) => void
  ): void;
  public describeCodeRepository(
    args: DescribeCodeRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCodeRepositoryCommandOutput) => void
  ): void;
  public describeCodeRepository(
    args: DescribeCodeRepositoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeCodeRepositoryCommandOutput) => void),
    cb?: (err: any, data?: DescribeCodeRepositoryCommandOutput) => void
  ): Promise<DescribeCodeRepositoryCommandOutput> | void {
    const command = new DescribeCodeRepositoryCommand(args);
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
   * <p>Returns information about a model compilation job.</p>
   *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
   *             information about multiple model compilation jobs, use <a>ListCompilationJobs</a>.</p>
   */
  public describeCompilationJob(
    args: DescribeCompilationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCompilationJobCommandOutput>;
  public describeCompilationJob(
    args: DescribeCompilationJobCommandInput,
    cb: (err: any, data?: DescribeCompilationJobCommandOutput) => void
  ): void;
  public describeCompilationJob(
    args: DescribeCompilationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCompilationJobCommandOutput) => void
  ): void;
  public describeCompilationJob(
    args: DescribeCompilationJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeCompilationJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeCompilationJobCommandOutput) => void
  ): Promise<DescribeCompilationJobCommandOutput> | void {
    const command = new DescribeCompilationJobCommand(args);
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
   * <p>The desciption of the domain.</p>
   */
  public describeDomain(
    args: DescribeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainCommandOutput>;
  public describeDomain(
    args: DescribeDomainCommandInput,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDomainCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainCommandOutput) => void
  ): Promise<DescribeDomainCommandOutput> | void {
    const command = new DescribeDomainCommand(args);
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
   * <p>Returns the description of an endpoint.</p>
   */
  public describeEndpoint(
    args: DescribeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointCommandOutput>;
  public describeEndpoint(
    args: DescribeEndpointCommandInput,
    cb: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): void;
  public describeEndpoint(
    args: DescribeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): void;
  public describeEndpoint(
    args: DescribeEndpointCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEndpointCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): Promise<DescribeEndpointCommandOutput> | void {
    const command = new DescribeEndpointCommand(args);
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
   * <p>Returns the description of an endpoint configuration created using the
   *                 <code>CreateEndpointConfig</code> API.</p>
   */
  public describeEndpointConfig(
    args: DescribeEndpointConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointConfigCommandOutput>;
  public describeEndpointConfig(
    args: DescribeEndpointConfigCommandInput,
    cb: (err: any, data?: DescribeEndpointConfigCommandOutput) => void
  ): void;
  public describeEndpointConfig(
    args: DescribeEndpointConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointConfigCommandOutput) => void
  ): void;
  public describeEndpointConfig(
    args: DescribeEndpointConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEndpointConfigCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointConfigCommandOutput) => void
  ): Promise<DescribeEndpointConfigCommandOutput> | void {
    const command = new DescribeEndpointConfigCommand(args);
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
   * <p>Provides a list of an experiment's properties.</p>
   */
  public describeExperiment(
    args: DescribeExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExperimentCommandOutput>;
  public describeExperiment(
    args: DescribeExperimentCommandInput,
    cb: (err: any, data?: DescribeExperimentCommandOutput) => void
  ): void;
  public describeExperiment(
    args: DescribeExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExperimentCommandOutput) => void
  ): void;
  public describeExperiment(
    args: DescribeExperimentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeExperimentCommandOutput) => void),
    cb?: (err: any, data?: DescribeExperimentCommandOutput) => void
  ): Promise<DescribeExperimentCommandOutput> | void {
    const command = new DescribeExperimentCommand(args);
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
   * <p>Returns information about the specified flow definition.</p>
   */
  public describeFlowDefinition(
    args: DescribeFlowDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowDefinitionCommandOutput>;
  public describeFlowDefinition(
    args: DescribeFlowDefinitionCommandInput,
    cb: (err: any, data?: DescribeFlowDefinitionCommandOutput) => void
  ): void;
  public describeFlowDefinition(
    args: DescribeFlowDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowDefinitionCommandOutput) => void
  ): void;
  public describeFlowDefinition(
    args: DescribeFlowDefinitionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeFlowDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DescribeFlowDefinitionCommandOutput) => void
  ): Promise<DescribeFlowDefinitionCommandOutput> | void {
    const command = new DescribeFlowDefinitionCommand(args);
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
   * <p>Returns information about the requested human task user interface.</p>
   */
  public describeHumanTaskUi(
    args: DescribeHumanTaskUiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHumanTaskUiCommandOutput>;
  public describeHumanTaskUi(
    args: DescribeHumanTaskUiCommandInput,
    cb: (err: any, data?: DescribeHumanTaskUiCommandOutput) => void
  ): void;
  public describeHumanTaskUi(
    args: DescribeHumanTaskUiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHumanTaskUiCommandOutput) => void
  ): void;
  public describeHumanTaskUi(
    args: DescribeHumanTaskUiCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeHumanTaskUiCommandOutput) => void),
    cb?: (err: any, data?: DescribeHumanTaskUiCommandOutput) => void
  ): Promise<DescribeHumanTaskUiCommandOutput> | void {
    const command = new DescribeHumanTaskUiCommand(args);
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
   * <p>Gets
   *             a description of a hyperparameter tuning job.</p>
   */
  public describeHyperParameterTuningJob(
    args: DescribeHyperParameterTuningJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHyperParameterTuningJobCommandOutput>;
  public describeHyperParameterTuningJob(
    args: DescribeHyperParameterTuningJobCommandInput,
    cb: (err: any, data?: DescribeHyperParameterTuningJobCommandOutput) => void
  ): void;
  public describeHyperParameterTuningJob(
    args: DescribeHyperParameterTuningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHyperParameterTuningJobCommandOutput) => void
  ): void;
  public describeHyperParameterTuningJob(
    args: DescribeHyperParameterTuningJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeHyperParameterTuningJobCommandOutput
        ) => void),
    cb?: (err: any, data?: DescribeHyperParameterTuningJobCommandOutput) => void
  ): Promise<DescribeHyperParameterTuningJobCommandOutput> | void {
    const command = new DescribeHyperParameterTuningJobCommand(args);
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
   * <p>Gets information about a labeling job.</p>
   */
  public describeLabelingJob(
    args: DescribeLabelingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLabelingJobCommandOutput>;
  public describeLabelingJob(
    args: DescribeLabelingJobCommandInput,
    cb: (err: any, data?: DescribeLabelingJobCommandOutput) => void
  ): void;
  public describeLabelingJob(
    args: DescribeLabelingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLabelingJobCommandOutput) => void
  ): void;
  public describeLabelingJob(
    args: DescribeLabelingJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeLabelingJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeLabelingJobCommandOutput) => void
  ): Promise<DescribeLabelingJobCommandOutput> | void {
    const command = new DescribeLabelingJobCommand(args);
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
   * <p>Describes a model that you created using the <code>CreateModel</code>
   *             API.</p>
   */
  public describeModel(
    args: DescribeModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelCommandOutput>;
  public describeModel(
    args: DescribeModelCommandInput,
    cb: (err: any, data?: DescribeModelCommandOutput) => void
  ): void;
  public describeModel(
    args: DescribeModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelCommandOutput) => void
  ): void;
  public describeModel(
    args: DescribeModelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeModelCommandOutput) => void),
    cb?: (err: any, data?: DescribeModelCommandOutput) => void
  ): Promise<DescribeModelCommandOutput> | void {
    const command = new DescribeModelCommand(args);
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
   * <p>Returns a description of the specified model package, which is used to create Amazon SageMaker
   *             models or list them on AWS Marketplace.</p>
   *         <p>To create models in Amazon SageMaker, buyers can subscribe to model packages listed on AWS
   *             Marketplace.</p>
   */
  public describeModelPackage(
    args: DescribeModelPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelPackageCommandOutput>;
  public describeModelPackage(
    args: DescribeModelPackageCommandInput,
    cb: (err: any, data?: DescribeModelPackageCommandOutput) => void
  ): void;
  public describeModelPackage(
    args: DescribeModelPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelPackageCommandOutput) => void
  ): void;
  public describeModelPackage(
    args: DescribeModelPackageCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeModelPackageCommandOutput) => void),
    cb?: (err: any, data?: DescribeModelPackageCommandOutput) => void
  ): Promise<DescribeModelPackageCommandOutput> | void {
    const command = new DescribeModelPackageCommand(args);
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
   * <p>Describes the schedule for a monitoring job.</p>
   */
  public describeMonitoringSchedule(
    args: DescribeMonitoringScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMonitoringScheduleCommandOutput>;
  public describeMonitoringSchedule(
    args: DescribeMonitoringScheduleCommandInput,
    cb: (err: any, data?: DescribeMonitoringScheduleCommandOutput) => void
  ): void;
  public describeMonitoringSchedule(
    args: DescribeMonitoringScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMonitoringScheduleCommandOutput) => void
  ): void;
  public describeMonitoringSchedule(
    args: DescribeMonitoringScheduleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeMonitoringScheduleCommandOutput) => void),
    cb?: (err: any, data?: DescribeMonitoringScheduleCommandOutput) => void
  ): Promise<DescribeMonitoringScheduleCommandOutput> | void {
    const command = new DescribeMonitoringScheduleCommand(args);
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
   * <p>Returns information about a notebook instance.</p>
   */
  public describeNotebookInstance(
    args: DescribeNotebookInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotebookInstanceCommandOutput>;
  public describeNotebookInstance(
    args: DescribeNotebookInstanceCommandInput,
    cb: (err: any, data?: DescribeNotebookInstanceCommandOutput) => void
  ): void;
  public describeNotebookInstance(
    args: DescribeNotebookInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotebookInstanceCommandOutput) => void
  ): void;
  public describeNotebookInstance(
    args: DescribeNotebookInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeNotebookInstanceCommandOutput) => void),
    cb?: (err: any, data?: DescribeNotebookInstanceCommandOutput) => void
  ): Promise<DescribeNotebookInstanceCommandOutput> | void {
    const command = new DescribeNotebookInstanceCommand(args);
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
   * <p>Returns a description of a notebook instance lifecycle configuration.</p>
   *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   */
  public describeNotebookInstanceLifecycleConfig(
    args: DescribeNotebookInstanceLifecycleConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotebookInstanceLifecycleConfigCommandOutput>;
  public describeNotebookInstanceLifecycleConfig(
    args: DescribeNotebookInstanceLifecycleConfigCommandInput,
    cb: (
      err: any,
      data?: DescribeNotebookInstanceLifecycleConfigCommandOutput
    ) => void
  ): void;
  public describeNotebookInstanceLifecycleConfig(
    args: DescribeNotebookInstanceLifecycleConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DescribeNotebookInstanceLifecycleConfigCommandOutput
    ) => void
  ): void;
  public describeNotebookInstanceLifecycleConfig(
    args: DescribeNotebookInstanceLifecycleConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeNotebookInstanceLifecycleConfigCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DescribeNotebookInstanceLifecycleConfigCommandOutput
    ) => void
  ): Promise<DescribeNotebookInstanceLifecycleConfigCommandOutput> | void {
    const command = new DescribeNotebookInstanceLifecycleConfigCommand(args);
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
   * <p>Returns a description of a processing job.</p>
   */
  public describeProcessingJob(
    args: DescribeProcessingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProcessingJobCommandOutput>;
  public describeProcessingJob(
    args: DescribeProcessingJobCommandInput,
    cb: (err: any, data?: DescribeProcessingJobCommandOutput) => void
  ): void;
  public describeProcessingJob(
    args: DescribeProcessingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProcessingJobCommandOutput) => void
  ): void;
  public describeProcessingJob(
    args: DescribeProcessingJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeProcessingJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeProcessingJobCommandOutput) => void
  ): Promise<DescribeProcessingJobCommandOutput> | void {
    const command = new DescribeProcessingJobCommand(args);
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
   * <p>Gets information about a work team provided by a vendor. It returns details about the
   *             subscription with a vendor in the AWS Marketplace.</p>
   */
  public describeSubscribedWorkteam(
    args: DescribeSubscribedWorkteamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubscribedWorkteamCommandOutput>;
  public describeSubscribedWorkteam(
    args: DescribeSubscribedWorkteamCommandInput,
    cb: (err: any, data?: DescribeSubscribedWorkteamCommandOutput) => void
  ): void;
  public describeSubscribedWorkteam(
    args: DescribeSubscribedWorkteamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubscribedWorkteamCommandOutput) => void
  ): void;
  public describeSubscribedWorkteam(
    args: DescribeSubscribedWorkteamCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeSubscribedWorkteamCommandOutput) => void),
    cb?: (err: any, data?: DescribeSubscribedWorkteamCommandOutput) => void
  ): Promise<DescribeSubscribedWorkteamCommandOutput> | void {
    const command = new DescribeSubscribedWorkteamCommand(args);
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
   * <p>Returns information about a training job.</p>
   */
  public describeTrainingJob(
    args: DescribeTrainingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrainingJobCommandOutput>;
  public describeTrainingJob(
    args: DescribeTrainingJobCommandInput,
    cb: (err: any, data?: DescribeTrainingJobCommandOutput) => void
  ): void;
  public describeTrainingJob(
    args: DescribeTrainingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrainingJobCommandOutput) => void
  ): void;
  public describeTrainingJob(
    args: DescribeTrainingJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTrainingJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrainingJobCommandOutput) => void
  ): Promise<DescribeTrainingJobCommandOutput> | void {
    const command = new DescribeTrainingJobCommand(args);
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
   * <p>Returns information about a transform job.</p>
   */
  public describeTransformJob(
    args: DescribeTransformJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransformJobCommandOutput>;
  public describeTransformJob(
    args: DescribeTransformJobCommandInput,
    cb: (err: any, data?: DescribeTransformJobCommandOutput) => void
  ): void;
  public describeTransformJob(
    args: DescribeTransformJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransformJobCommandOutput) => void
  ): void;
  public describeTransformJob(
    args: DescribeTransformJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTransformJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeTransformJobCommandOutput) => void
  ): Promise<DescribeTransformJobCommandOutput> | void {
    const command = new DescribeTransformJobCommand(args);
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
   * <p>Provides a list of a trial's properties.</p>
   */
  public describeTrial(
    args: DescribeTrialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrialCommandOutput>;
  public describeTrial(
    args: DescribeTrialCommandInput,
    cb: (err: any, data?: DescribeTrialCommandOutput) => void
  ): void;
  public describeTrial(
    args: DescribeTrialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrialCommandOutput) => void
  ): void;
  public describeTrial(
    args: DescribeTrialCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTrialCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrialCommandOutput) => void
  ): Promise<DescribeTrialCommandOutput> | void {
    const command = new DescribeTrialCommand(args);
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
   * <p>Provides a list of a trials component's properties.</p>
   */
  public describeTrialComponent(
    args: DescribeTrialComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrialComponentCommandOutput>;
  public describeTrialComponent(
    args: DescribeTrialComponentCommandInput,
    cb: (err: any, data?: DescribeTrialComponentCommandOutput) => void
  ): void;
  public describeTrialComponent(
    args: DescribeTrialComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrialComponentCommandOutput) => void
  ): void;
  public describeTrialComponent(
    args: DescribeTrialComponentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTrialComponentCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrialComponentCommandOutput) => void
  ): Promise<DescribeTrialComponentCommandOutput> | void {
    const command = new DescribeTrialComponentCommand(args);
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
   * <p>Describes the user profile.</p>
   */
  public describeUserProfile(
    args: DescribeUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserProfileCommandOutput>;
  public describeUserProfile(
    args: DescribeUserProfileCommandInput,
    cb: (err: any, data?: DescribeUserProfileCommandOutput) => void
  ): void;
  public describeUserProfile(
    args: DescribeUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserProfileCommandOutput) => void
  ): void;
  public describeUserProfile(
    args: DescribeUserProfileCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeUserProfileCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserProfileCommandOutput) => void
  ): Promise<DescribeUserProfileCommandOutput> | void {
    const command = new DescribeUserProfileCommand(args);
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
   * <p>Lists private workforce information, including workforce name, Amazon Resource Name
   *             (ARN), and, if applicable, allowed IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Allowable IP address
   *             ranges are the IP addresses that workers can use to access tasks. </p>
   *         <important>
   *             <p>This operation applies only to private workforces.</p>
   *         </important>
   */
  public describeWorkforce(
    args: DescribeWorkforceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkforceCommandOutput>;
  public describeWorkforce(
    args: DescribeWorkforceCommandInput,
    cb: (err: any, data?: DescribeWorkforceCommandOutput) => void
  ): void;
  public describeWorkforce(
    args: DescribeWorkforceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkforceCommandOutput) => void
  ): void;
  public describeWorkforce(
    args: DescribeWorkforceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeWorkforceCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkforceCommandOutput) => void
  ): Promise<DescribeWorkforceCommandOutput> | void {
    const command = new DescribeWorkforceCommand(args);
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
   * <p>Gets information about a specific work team. You can see information such as the
   *             create date, the last updated date, membership information, and the work team's Amazon
   *             Resource Name (ARN).</p>
   */
  public describeWorkteam(
    args: DescribeWorkteamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkteamCommandOutput>;
  public describeWorkteam(
    args: DescribeWorkteamCommandInput,
    cb: (err: any, data?: DescribeWorkteamCommandOutput) => void
  ): void;
  public describeWorkteam(
    args: DescribeWorkteamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkteamCommandOutput) => void
  ): void;
  public describeWorkteam(
    args: DescribeWorkteamCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeWorkteamCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkteamCommandOutput) => void
  ): Promise<DescribeWorkteamCommandOutput> | void {
    const command = new DescribeWorkteamCommand(args);
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
   * <p>Disassociates a trial component from a trial. This doesn't effect other trials the
   *       component is associated with. Before you can delete a component, you must disassociate the
   *       component from all trials it is associated with. To associate a trial component with a trial,
   *       call the <a>AssociateTrialComponent</a> API.</p>
   */
  public disassociateTrialComponent(
    args: DisassociateTrialComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTrialComponentCommandOutput>;
  public disassociateTrialComponent(
    args: DisassociateTrialComponentCommandInput,
    cb: (err: any, data?: DisassociateTrialComponentCommandOutput) => void
  ): void;
  public disassociateTrialComponent(
    args: DisassociateTrialComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTrialComponentCommandOutput) => void
  ): void;
  public disassociateTrialComponent(
    args: DisassociateTrialComponentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateTrialComponentCommandOutput) => void),
    cb?: (err: any, data?: DisassociateTrialComponentCommandOutput) => void
  ): Promise<DisassociateTrialComponentCommandOutput> | void {
    const command = new DisassociateTrialComponentCommand(args);
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
   * <p>An auto-complete API for the search functionality in the Amazon SageMaker console. It returns
   *       suggestions of possible matches for the property name to use in <code>Search</code>
   *       queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and
   *       <code>Metrics</code>.</p>
   */
  public getSearchSuggestions(
    args: GetSearchSuggestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSearchSuggestionsCommandOutput>;
  public getSearchSuggestions(
    args: GetSearchSuggestionsCommandInput,
    cb: (err: any, data?: GetSearchSuggestionsCommandOutput) => void
  ): void;
  public getSearchSuggestions(
    args: GetSearchSuggestionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSearchSuggestionsCommandOutput) => void
  ): void;
  public getSearchSuggestions(
    args: GetSearchSuggestionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetSearchSuggestionsCommandOutput) => void),
    cb?: (err: any, data?: GetSearchSuggestionsCommandOutput) => void
  ): Promise<GetSearchSuggestionsCommandOutput> | void {
    const command = new GetSearchSuggestionsCommand(args);
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
   * <p>Lists the machine learning algorithms that have been created.</p>
   */
  public listAlgorithms(
    args: ListAlgorithmsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAlgorithmsCommandOutput>;
  public listAlgorithms(
    args: ListAlgorithmsCommandInput,
    cb: (err: any, data?: ListAlgorithmsCommandOutput) => void
  ): void;
  public listAlgorithms(
    args: ListAlgorithmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlgorithmsCommandOutput) => void
  ): void;
  public listAlgorithms(
    args: ListAlgorithmsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAlgorithmsCommandOutput) => void),
    cb?: (err: any, data?: ListAlgorithmsCommandOutput) => void
  ): Promise<ListAlgorithmsCommandOutput> | void {
    const command = new ListAlgorithmsCommand(args);
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
   * <p>Lists apps.</p>
   */
  public listApps(
    args: ListAppsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppsCommandOutput>;
  public listApps(
    args: ListAppsCommandInput,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;
  public listApps(
    args: ListAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;
  public listApps(
    args: ListAppsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAppsCommandOutput) => void),
    cb?: (err: any, data?: ListAppsCommandOutput) => void
  ): Promise<ListAppsCommandOutput> | void {
    const command = new ListAppsCommand(args);
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
   * <p>Request a list of jobs.</p>
   */
  public listAutoMLJobs(
    args: ListAutoMLJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutoMLJobsCommandOutput>;
  public listAutoMLJobs(
    args: ListAutoMLJobsCommandInput,
    cb: (err: any, data?: ListAutoMLJobsCommandOutput) => void
  ): void;
  public listAutoMLJobs(
    args: ListAutoMLJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutoMLJobsCommandOutput) => void
  ): void;
  public listAutoMLJobs(
    args: ListAutoMLJobsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAutoMLJobsCommandOutput) => void),
    cb?: (err: any, data?: ListAutoMLJobsCommandOutput) => void
  ): Promise<ListAutoMLJobsCommandOutput> | void {
    const command = new ListAutoMLJobsCommand(args);
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
   * <p>List the Candidates created for the job.</p>
   */
  public listCandidatesForAutoMLJob(
    args: ListCandidatesForAutoMLJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCandidatesForAutoMLJobCommandOutput>;
  public listCandidatesForAutoMLJob(
    args: ListCandidatesForAutoMLJobCommandInput,
    cb: (err: any, data?: ListCandidatesForAutoMLJobCommandOutput) => void
  ): void;
  public listCandidatesForAutoMLJob(
    args: ListCandidatesForAutoMLJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCandidatesForAutoMLJobCommandOutput) => void
  ): void;
  public listCandidatesForAutoMLJob(
    args: ListCandidatesForAutoMLJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListCandidatesForAutoMLJobCommandOutput) => void),
    cb?: (err: any, data?: ListCandidatesForAutoMLJobCommandOutput) => void
  ): Promise<ListCandidatesForAutoMLJobCommandOutput> | void {
    const command = new ListCandidatesForAutoMLJobCommand(args);
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
   * <p>Gets a list of the Git repositories in your account.</p>
   */
  public listCodeRepositories(
    args: ListCodeRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCodeRepositoriesCommandOutput>;
  public listCodeRepositories(
    args: ListCodeRepositoriesCommandInput,
    cb: (err: any, data?: ListCodeRepositoriesCommandOutput) => void
  ): void;
  public listCodeRepositories(
    args: ListCodeRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCodeRepositoriesCommandOutput) => void
  ): void;
  public listCodeRepositories(
    args: ListCodeRepositoriesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListCodeRepositoriesCommandOutput) => void),
    cb?: (err: any, data?: ListCodeRepositoriesCommandOutput) => void
  ): Promise<ListCodeRepositoriesCommandOutput> | void {
    const command = new ListCodeRepositoriesCommand(args);
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
   * <p>Lists model compilation jobs that satisfy various filters.</p>
   *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
   *             information about a particular model compilation job you have created, use <a>DescribeCompilationJob</a>.</p>
   */
  public listCompilationJobs(
    args: ListCompilationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCompilationJobsCommandOutput>;
  public listCompilationJobs(
    args: ListCompilationJobsCommandInput,
    cb: (err: any, data?: ListCompilationJobsCommandOutput) => void
  ): void;
  public listCompilationJobs(
    args: ListCompilationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCompilationJobsCommandOutput) => void
  ): void;
  public listCompilationJobs(
    args: ListCompilationJobsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListCompilationJobsCommandOutput) => void),
    cb?: (err: any, data?: ListCompilationJobsCommandOutput) => void
  ): Promise<ListCompilationJobsCommandOutput> | void {
    const command = new ListCompilationJobsCommand(args);
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
   * <p>Lists the domains.</p>
   */
  public listDomains(
    args: ListDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainsCommandOutput>;
  public listDomains(
    args: ListDomainsCommandInput,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  public listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  public listDomains(
    args: ListDomainsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDomainsCommandOutput) => void),
    cb?: (err: any, data?: ListDomainsCommandOutput) => void
  ): Promise<ListDomainsCommandOutput> | void {
    const command = new ListDomainsCommand(args);
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
   * <p>Lists endpoint configurations.</p>
   */
  public listEndpointConfigs(
    args: ListEndpointConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEndpointConfigsCommandOutput>;
  public listEndpointConfigs(
    args: ListEndpointConfigsCommandInput,
    cb: (err: any, data?: ListEndpointConfigsCommandOutput) => void
  ): void;
  public listEndpointConfigs(
    args: ListEndpointConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointConfigsCommandOutput) => void
  ): void;
  public listEndpointConfigs(
    args: ListEndpointConfigsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListEndpointConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListEndpointConfigsCommandOutput) => void
  ): Promise<ListEndpointConfigsCommandOutput> | void {
    const command = new ListEndpointConfigsCommand(args);
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
   * <p>Lists endpoints.</p>
   */
  public listEndpoints(
    args: ListEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEndpointsCommandOutput>;
  public listEndpoints(
    args: ListEndpointsCommandInput,
    cb: (err: any, data?: ListEndpointsCommandOutput) => void
  ): void;
  public listEndpoints(
    args: ListEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointsCommandOutput) => void
  ): void;
  public listEndpoints(
    args: ListEndpointsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListEndpointsCommandOutput) => void),
    cb?: (err: any, data?: ListEndpointsCommandOutput) => void
  ): Promise<ListEndpointsCommandOutput> | void {
    const command = new ListEndpointsCommand(args);
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
   * <p>Lists all the experiments in your account. The list can be filtered to show only
   *       experiments that were created in a specific time range. The list can be sorted by experiment
   *       name or creation time.</p>
   */
  public listExperiments(
    args: ListExperimentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentsCommandOutput>;
  public listExperiments(
    args: ListExperimentsCommandInput,
    cb: (err: any, data?: ListExperimentsCommandOutput) => void
  ): void;
  public listExperiments(
    args: ListExperimentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentsCommandOutput) => void
  ): void;
  public listExperiments(
    args: ListExperimentsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListExperimentsCommandOutput) => void),
    cb?: (err: any, data?: ListExperimentsCommandOutput) => void
  ): Promise<ListExperimentsCommandOutput> | void {
    const command = new ListExperimentsCommand(args);
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
   * <p>Returns information about the flow definitions in your account.</p>
   */
  public listFlowDefinitions(
    args: ListFlowDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowDefinitionsCommandOutput>;
  public listFlowDefinitions(
    args: ListFlowDefinitionsCommandInput,
    cb: (err: any, data?: ListFlowDefinitionsCommandOutput) => void
  ): void;
  public listFlowDefinitions(
    args: ListFlowDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowDefinitionsCommandOutput) => void
  ): void;
  public listFlowDefinitions(
    args: ListFlowDefinitionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListFlowDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListFlowDefinitionsCommandOutput) => void
  ): Promise<ListFlowDefinitionsCommandOutput> | void {
    const command = new ListFlowDefinitionsCommand(args);
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
   * <p>Returns information about the human task user interfaces in your account.</p>
   */
  public listHumanTaskUis(
    args: ListHumanTaskUisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHumanTaskUisCommandOutput>;
  public listHumanTaskUis(
    args: ListHumanTaskUisCommandInput,
    cb: (err: any, data?: ListHumanTaskUisCommandOutput) => void
  ): void;
  public listHumanTaskUis(
    args: ListHumanTaskUisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHumanTaskUisCommandOutput) => void
  ): void;
  public listHumanTaskUis(
    args: ListHumanTaskUisCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListHumanTaskUisCommandOutput) => void),
    cb?: (err: any, data?: ListHumanTaskUisCommandOutput) => void
  ): Promise<ListHumanTaskUisCommandOutput> | void {
    const command = new ListHumanTaskUisCommand(args);
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
   * <p>Gets a list of <a>HyperParameterTuningJobSummary</a> objects that
   *             describe
   *             the hyperparameter tuning jobs launched in your account.</p>
   */
  public listHyperParameterTuningJobs(
    args: ListHyperParameterTuningJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHyperParameterTuningJobsCommandOutput>;
  public listHyperParameterTuningJobs(
    args: ListHyperParameterTuningJobsCommandInput,
    cb: (err: any, data?: ListHyperParameterTuningJobsCommandOutput) => void
  ): void;
  public listHyperParameterTuningJobs(
    args: ListHyperParameterTuningJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHyperParameterTuningJobsCommandOutput) => void
  ): void;
  public listHyperParameterTuningJobs(
    args: ListHyperParameterTuningJobsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListHyperParameterTuningJobsCommandOutput) => void),
    cb?: (err: any, data?: ListHyperParameterTuningJobsCommandOutput) => void
  ): Promise<ListHyperParameterTuningJobsCommandOutput> | void {
    const command = new ListHyperParameterTuningJobsCommand(args);
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
   * <p>Gets a list of labeling jobs.</p>
   */
  public listLabelingJobs(
    args: ListLabelingJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLabelingJobsCommandOutput>;
  public listLabelingJobs(
    args: ListLabelingJobsCommandInput,
    cb: (err: any, data?: ListLabelingJobsCommandOutput) => void
  ): void;
  public listLabelingJobs(
    args: ListLabelingJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLabelingJobsCommandOutput) => void
  ): void;
  public listLabelingJobs(
    args: ListLabelingJobsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListLabelingJobsCommandOutput) => void),
    cb?: (err: any, data?: ListLabelingJobsCommandOutput) => void
  ): Promise<ListLabelingJobsCommandOutput> | void {
    const command = new ListLabelingJobsCommand(args);
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
   * <p>Gets a list of labeling jobs assigned to a specified work team.</p>
   */
  public listLabelingJobsForWorkteam(
    args: ListLabelingJobsForWorkteamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLabelingJobsForWorkteamCommandOutput>;
  public listLabelingJobsForWorkteam(
    args: ListLabelingJobsForWorkteamCommandInput,
    cb: (err: any, data?: ListLabelingJobsForWorkteamCommandOutput) => void
  ): void;
  public listLabelingJobsForWorkteam(
    args: ListLabelingJobsForWorkteamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLabelingJobsForWorkteamCommandOutput) => void
  ): void;
  public listLabelingJobsForWorkteam(
    args: ListLabelingJobsForWorkteamCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListLabelingJobsForWorkteamCommandOutput) => void),
    cb?: (err: any, data?: ListLabelingJobsForWorkteamCommandOutput) => void
  ): Promise<ListLabelingJobsForWorkteamCommandOutput> | void {
    const command = new ListLabelingJobsForWorkteamCommand(args);
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
   * <p>Lists the model packages that have been created.</p>
   */
  public listModelPackages(
    args: ListModelPackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelPackagesCommandOutput>;
  public listModelPackages(
    args: ListModelPackagesCommandInput,
    cb: (err: any, data?: ListModelPackagesCommandOutput) => void
  ): void;
  public listModelPackages(
    args: ListModelPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelPackagesCommandOutput) => void
  ): void;
  public listModelPackages(
    args: ListModelPackagesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListModelPackagesCommandOutput) => void),
    cb?: (err: any, data?: ListModelPackagesCommandOutput) => void
  ): Promise<ListModelPackagesCommandOutput> | void {
    const command = new ListModelPackagesCommand(args);
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
   * <p>Lists models created with the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html">CreateModel</a> API.</p>
   */
  public listModels(
    args: ListModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelsCommandOutput>;
  public listModels(
    args: ListModelsCommandInput,
    cb: (err: any, data?: ListModelsCommandOutput) => void
  ): void;
  public listModels(
    args: ListModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelsCommandOutput) => void
  ): void;
  public listModels(
    args: ListModelsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListModelsCommandOutput) => void),
    cb?: (err: any, data?: ListModelsCommandOutput) => void
  ): Promise<ListModelsCommandOutput> | void {
    const command = new ListModelsCommand(args);
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
   * <p>Returns list of all monitoring job executions.</p>
   */
  public listMonitoringExecutions(
    args: ListMonitoringExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitoringExecutionsCommandOutput>;
  public listMonitoringExecutions(
    args: ListMonitoringExecutionsCommandInput,
    cb: (err: any, data?: ListMonitoringExecutionsCommandOutput) => void
  ): void;
  public listMonitoringExecutions(
    args: ListMonitoringExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitoringExecutionsCommandOutput) => void
  ): void;
  public listMonitoringExecutions(
    args: ListMonitoringExecutionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListMonitoringExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListMonitoringExecutionsCommandOutput) => void
  ): Promise<ListMonitoringExecutionsCommandOutput> | void {
    const command = new ListMonitoringExecutionsCommand(args);
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
   * <p>Returns list of all monitoring schedules.</p>
   */
  public listMonitoringSchedules(
    args: ListMonitoringSchedulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitoringSchedulesCommandOutput>;
  public listMonitoringSchedules(
    args: ListMonitoringSchedulesCommandInput,
    cb: (err: any, data?: ListMonitoringSchedulesCommandOutput) => void
  ): void;
  public listMonitoringSchedules(
    args: ListMonitoringSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitoringSchedulesCommandOutput) => void
  ): void;
  public listMonitoringSchedules(
    args: ListMonitoringSchedulesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListMonitoringSchedulesCommandOutput) => void),
    cb?: (err: any, data?: ListMonitoringSchedulesCommandOutput) => void
  ): Promise<ListMonitoringSchedulesCommandOutput> | void {
    const command = new ListMonitoringSchedulesCommand(args);
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
   * <p>Lists notebook instance lifestyle configurations created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
   */
  public listNotebookInstanceLifecycleConfigs(
    args: ListNotebookInstanceLifecycleConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotebookInstanceLifecycleConfigsCommandOutput>;
  public listNotebookInstanceLifecycleConfigs(
    args: ListNotebookInstanceLifecycleConfigsCommandInput,
    cb: (
      err: any,
      data?: ListNotebookInstanceLifecycleConfigsCommandOutput
    ) => void
  ): void;
  public listNotebookInstanceLifecycleConfigs(
    args: ListNotebookInstanceLifecycleConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ListNotebookInstanceLifecycleConfigsCommandOutput
    ) => void
  ): void;
  public listNotebookInstanceLifecycleConfigs(
    args: ListNotebookInstanceLifecycleConfigsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListNotebookInstanceLifecycleConfigsCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListNotebookInstanceLifecycleConfigsCommandOutput
    ) => void
  ): Promise<ListNotebookInstanceLifecycleConfigsCommandOutput> | void {
    const command = new ListNotebookInstanceLifecycleConfigsCommand(args);
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
   * <p>Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS
   *             Region. </p>
   */
  public listNotebookInstances(
    args: ListNotebookInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotebookInstancesCommandOutput>;
  public listNotebookInstances(
    args: ListNotebookInstancesCommandInput,
    cb: (err: any, data?: ListNotebookInstancesCommandOutput) => void
  ): void;
  public listNotebookInstances(
    args: ListNotebookInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotebookInstancesCommandOutput) => void
  ): void;
  public listNotebookInstances(
    args: ListNotebookInstancesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListNotebookInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListNotebookInstancesCommandOutput) => void
  ): Promise<ListNotebookInstancesCommandOutput> | void {
    const command = new ListNotebookInstancesCommand(args);
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
   * <p>Lists processing jobs that satisfy various filters.</p>
   */
  public listProcessingJobs(
    args: ListProcessingJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProcessingJobsCommandOutput>;
  public listProcessingJobs(
    args: ListProcessingJobsCommandInput,
    cb: (err: any, data?: ListProcessingJobsCommandOutput) => void
  ): void;
  public listProcessingJobs(
    args: ListProcessingJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProcessingJobsCommandOutput) => void
  ): void;
  public listProcessingJobs(
    args: ListProcessingJobsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListProcessingJobsCommandOutput) => void),
    cb?: (err: any, data?: ListProcessingJobsCommandOutput) => void
  ): Promise<ListProcessingJobsCommandOutput> | void {
    const command = new ListProcessingJobsCommand(args);
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
   * <p>Gets a list of the work teams that you are subscribed to in the AWS Marketplace. The
   *             list may be empty if no work team satisfies the filter specified in the
   *                 <code>NameContains</code> parameter.</p>
   */
  public listSubscribedWorkteams(
    args: ListSubscribedWorkteamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscribedWorkteamsCommandOutput>;
  public listSubscribedWorkteams(
    args: ListSubscribedWorkteamsCommandInput,
    cb: (err: any, data?: ListSubscribedWorkteamsCommandOutput) => void
  ): void;
  public listSubscribedWorkteams(
    args: ListSubscribedWorkteamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscribedWorkteamsCommandOutput) => void
  ): void;
  public listSubscribedWorkteams(
    args: ListSubscribedWorkteamsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListSubscribedWorkteamsCommandOutput) => void),
    cb?: (err: any, data?: ListSubscribedWorkteamsCommandOutput) => void
  ): Promise<ListSubscribedWorkteamsCommandOutput> | void {
    const command = new ListSubscribedWorkteamsCommand(args);
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
   * <p>Returns the tags for the specified Amazon SageMaker resource.</p>
   */
  public listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsCommandOutput>;
  public listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsCommandOutput) => void),
    cb?: (err: any, data?: ListTagsCommandOutput) => void
  ): Promise<ListTagsCommandOutput> | void {
    const command = new ListTagsCommand(args);
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
   * <p>Lists training jobs.</p>
   */
  public listTrainingJobs(
    args: ListTrainingJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrainingJobsCommandOutput>;
  public listTrainingJobs(
    args: ListTrainingJobsCommandInput,
    cb: (err: any, data?: ListTrainingJobsCommandOutput) => void
  ): void;
  public listTrainingJobs(
    args: ListTrainingJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrainingJobsCommandOutput) => void
  ): void;
  public listTrainingJobs(
    args: ListTrainingJobsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTrainingJobsCommandOutput) => void),
    cb?: (err: any, data?: ListTrainingJobsCommandOutput) => void
  ): Promise<ListTrainingJobsCommandOutput> | void {
    const command = new ListTrainingJobsCommand(args);
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
   * <p>Gets a list of <a>TrainingJobSummary</a> objects that describe the training
   *             jobs that a hyperparameter tuning job launched.</p>
   */
  public listTrainingJobsForHyperParameterTuningJob(
    args: ListTrainingJobsForHyperParameterTuningJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrainingJobsForHyperParameterTuningJobCommandOutput>;
  public listTrainingJobsForHyperParameterTuningJob(
    args: ListTrainingJobsForHyperParameterTuningJobCommandInput,
    cb: (
      err: any,
      data?: ListTrainingJobsForHyperParameterTuningJobCommandOutput
    ) => void
  ): void;
  public listTrainingJobsForHyperParameterTuningJob(
    args: ListTrainingJobsForHyperParameterTuningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ListTrainingJobsForHyperParameterTuningJobCommandOutput
    ) => void
  ): void;
  public listTrainingJobsForHyperParameterTuningJob(
    args: ListTrainingJobsForHyperParameterTuningJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListTrainingJobsForHyperParameterTuningJobCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListTrainingJobsForHyperParameterTuningJobCommandOutput
    ) => void
  ): Promise<ListTrainingJobsForHyperParameterTuningJobCommandOutput> | void {
    const command = new ListTrainingJobsForHyperParameterTuningJobCommand(args);
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
   * <p>Lists transform jobs.</p>
   */
  public listTransformJobs(
    args: ListTransformJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTransformJobsCommandOutput>;
  public listTransformJobs(
    args: ListTransformJobsCommandInput,
    cb: (err: any, data?: ListTransformJobsCommandOutput) => void
  ): void;
  public listTransformJobs(
    args: ListTransformJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTransformJobsCommandOutput) => void
  ): void;
  public listTransformJobs(
    args: ListTransformJobsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTransformJobsCommandOutput) => void),
    cb?: (err: any, data?: ListTransformJobsCommandOutput) => void
  ): Promise<ListTransformJobsCommandOutput> | void {
    const command = new ListTransformJobsCommand(args);
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
  public listTrialComponents(
    args: ListTrialComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrialComponentsCommandOutput>;
  public listTrialComponents(
    args: ListTrialComponentsCommandInput,
    cb: (err: any, data?: ListTrialComponentsCommandOutput) => void
  ): void;
  public listTrialComponents(
    args: ListTrialComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrialComponentsCommandOutput) => void
  ): void;
  public listTrialComponents(
    args: ListTrialComponentsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTrialComponentsCommandOutput) => void),
    cb?: (err: any, data?: ListTrialComponentsCommandOutput) => void
  ): Promise<ListTrialComponentsCommandOutput> | void {
    const command = new ListTrialComponentsCommand(args);
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
   * <p>Lists the trials in your account. Specify an experiment name to limit the list to the
   *       trials that are part of that experiment. The list can be filtered to show only trials
   *       that were created in a specific time range. The list can be sorted by trial name or creation
   *       time.</p>
   */
  public listTrials(
    args: ListTrialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrialsCommandOutput>;
  public listTrials(
    args: ListTrialsCommandInput,
    cb: (err: any, data?: ListTrialsCommandOutput) => void
  ): void;
  public listTrials(
    args: ListTrialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrialsCommandOutput) => void
  ): void;
  public listTrials(
    args: ListTrialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTrialsCommandOutput) => void),
    cb?: (err: any, data?: ListTrialsCommandOutput) => void
  ): Promise<ListTrialsCommandOutput> | void {
    const command = new ListTrialsCommand(args);
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
   * <p>Lists user profiles.</p>
   */
  public listUserProfiles(
    args: ListUserProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserProfilesCommandOutput>;
  public listUserProfiles(
    args: ListUserProfilesCommandInput,
    cb: (err: any, data?: ListUserProfilesCommandOutput) => void
  ): void;
  public listUserProfiles(
    args: ListUserProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserProfilesCommandOutput) => void
  ): void;
  public listUserProfiles(
    args: ListUserProfilesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListUserProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListUserProfilesCommandOutput) => void
  ): Promise<ListUserProfilesCommandOutput> | void {
    const command = new ListUserProfilesCommand(args);
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
   * <p>Gets a list of work teams that you have defined in a region. The list may be empty if
   *             no work team satisfies the filter specified in the <code>NameContains</code>
   *             parameter.</p>
   */
  public listWorkteams(
    args: ListWorkteamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkteamsCommandOutput>;
  public listWorkteams(
    args: ListWorkteamsCommandInput,
    cb: (err: any, data?: ListWorkteamsCommandOutput) => void
  ): void;
  public listWorkteams(
    args: ListWorkteamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkteamsCommandOutput) => void
  ): void;
  public listWorkteams(
    args: ListWorkteamsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListWorkteamsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkteamsCommandOutput) => void
  ): Promise<ListWorkteamsCommandOutput> | void {
    const command = new ListWorkteamsCommand(args);
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
   * <p>Renders the UI template so that you can preview the worker's experience. </p>
   */
  public renderUiTemplate(
    args: RenderUiTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RenderUiTemplateCommandOutput>;
  public renderUiTemplate(
    args: RenderUiTemplateCommandInput,
    cb: (err: any, data?: RenderUiTemplateCommandOutput) => void
  ): void;
  public renderUiTemplate(
    args: RenderUiTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenderUiTemplateCommandOutput) => void
  ): void;
  public renderUiTemplate(
    args: RenderUiTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RenderUiTemplateCommandOutput) => void),
    cb?: (err: any, data?: RenderUiTemplateCommandOutput) => void
  ): Promise<RenderUiTemplateCommandOutput> | void {
    const command = new RenderUiTemplateCommand(args);
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
   * <p>Finds Amazon SageMaker resources that match a search query. Matching resource objects are returned
   *       as a list of <code>SearchResult</code> objects in the response. You can sort the search
   *       results by any resource property in a ascending or descending order.</p>
   *          <p>You can query against the following value types: numeric, text, Boolean, and
   *       timestamp.</p>
   */
  public search(
    args: SearchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchCommandOutput>;
  public search(
    args: SearchCommandInput,
    cb: (err: any, data?: SearchCommandOutput) => void
  ): void;
  public search(
    args: SearchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchCommandOutput) => void
  ): void;
  public search(
    args: SearchCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: SearchCommandOutput) => void),
    cb?: (err: any, data?: SearchCommandOutput) => void
  ): Promise<SearchCommandOutput> | void {
    const command = new SearchCommand(args);
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
   * <p>Starts a previously stopped monitoring schedule.</p>
   *          <note>
   *             <p>New monitoring schedules are immediately started after creation.</p>
   *          </note>
   */
  public startMonitoringSchedule(
    args: StartMonitoringScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMonitoringScheduleCommandOutput>;
  public startMonitoringSchedule(
    args: StartMonitoringScheduleCommandInput,
    cb: (err: any, data?: StartMonitoringScheduleCommandOutput) => void
  ): void;
  public startMonitoringSchedule(
    args: StartMonitoringScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMonitoringScheduleCommandOutput) => void
  ): void;
  public startMonitoringSchedule(
    args: StartMonitoringScheduleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartMonitoringScheduleCommandOutput) => void),
    cb?: (err: any, data?: StartMonitoringScheduleCommandOutput) => void
  ): Promise<StartMonitoringScheduleCommandOutput> | void {
    const command = new StartMonitoringScheduleCommand(args);
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
   * <p>Launches an ML compute instance with the latest version of the libraries and
   *             attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the
   *             notebook instance status to <code>InService</code>. A notebook instance's status must be
   *                 <code>InService</code> before you can connect to your Jupyter notebook. </p>
   */
  public startNotebookInstance(
    args: StartNotebookInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNotebookInstanceCommandOutput>;
  public startNotebookInstance(
    args: StartNotebookInstanceCommandInput,
    cb: (err: any, data?: StartNotebookInstanceCommandOutput) => void
  ): void;
  public startNotebookInstance(
    args: StartNotebookInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNotebookInstanceCommandOutput) => void
  ): void;
  public startNotebookInstance(
    args: StartNotebookInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartNotebookInstanceCommandOutput) => void),
    cb?: (err: any, data?: StartNotebookInstanceCommandOutput) => void
  ): Promise<StartNotebookInstanceCommandOutput> | void {
    const command = new StartNotebookInstanceCommand(args);
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
   * <p>A method for forcing the termination of a running job.</p>
   */
  public stopAutoMLJob(
    args: StopAutoMLJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAutoMLJobCommandOutput>;
  public stopAutoMLJob(
    args: StopAutoMLJobCommandInput,
    cb: (err: any, data?: StopAutoMLJobCommandOutput) => void
  ): void;
  public stopAutoMLJob(
    args: StopAutoMLJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAutoMLJobCommandOutput) => void
  ): void;
  public stopAutoMLJob(
    args: StopAutoMLJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopAutoMLJobCommandOutput) => void),
    cb?: (err: any, data?: StopAutoMLJobCommandOutput) => void
  ): Promise<StopAutoMLJobCommandOutput> | void {
    const command = new StopAutoMLJobCommand(args);
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
   * <p>Stops a model compilation job.</p>
   *         <p> To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the
   *             job down. If the job hasn't stopped, it sends the SIGKILL signal.</p>
   *         <p>When it receives a <code>StopCompilationJob</code> request, Amazon SageMaker changes the <a>CompilationJobSummary$CompilationJobStatus</a> of the job to
   *                 <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the <a>CompilationJobSummary$CompilationJobStatus</a> to <code>Stopped</code>.
   *         </p>
   */
  public stopCompilationJob(
    args: StopCompilationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopCompilationJobCommandOutput>;
  public stopCompilationJob(
    args: StopCompilationJobCommandInput,
    cb: (err: any, data?: StopCompilationJobCommandOutput) => void
  ): void;
  public stopCompilationJob(
    args: StopCompilationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCompilationJobCommandOutput) => void
  ): void;
  public stopCompilationJob(
    args: StopCompilationJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopCompilationJobCommandOutput) => void),
    cb?: (err: any, data?: StopCompilationJobCommandOutput) => void
  ): Promise<StopCompilationJobCommandOutput> | void {
    const command = new StopCompilationJobCommand(args);
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
   * <p>Stops a running hyperparameter tuning job and all running training jobs that the
   *             tuning job launched.</p>
   *         <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All
   *             data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the
   *             tuning job moves to the <code>Stopped</code> state, it releases all
   *             reserved
   *             resources for the tuning job.</p>
   */
  public stopHyperParameterTuningJob(
    args: StopHyperParameterTuningJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopHyperParameterTuningJobCommandOutput>;
  public stopHyperParameterTuningJob(
    args: StopHyperParameterTuningJobCommandInput,
    cb: (err: any, data?: StopHyperParameterTuningJobCommandOutput) => void
  ): void;
  public stopHyperParameterTuningJob(
    args: StopHyperParameterTuningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopHyperParameterTuningJobCommandOutput) => void
  ): void;
  public stopHyperParameterTuningJob(
    args: StopHyperParameterTuningJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopHyperParameterTuningJobCommandOutput) => void),
    cb?: (err: any, data?: StopHyperParameterTuningJobCommandOutput) => void
  ): Promise<StopHyperParameterTuningJobCommandOutput> | void {
    const command = new StopHyperParameterTuningJobCommand(args);
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
   * <p>Stops a running labeling job. A job that is stopped cannot be restarted. Any results
   *             obtained before the job is stopped are placed in the Amazon S3 output bucket.</p>
   */
  public stopLabelingJob(
    args: StopLabelingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopLabelingJobCommandOutput>;
  public stopLabelingJob(
    args: StopLabelingJobCommandInput,
    cb: (err: any, data?: StopLabelingJobCommandOutput) => void
  ): void;
  public stopLabelingJob(
    args: StopLabelingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopLabelingJobCommandOutput) => void
  ): void;
  public stopLabelingJob(
    args: StopLabelingJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopLabelingJobCommandOutput) => void),
    cb?: (err: any, data?: StopLabelingJobCommandOutput) => void
  ): Promise<StopLabelingJobCommandOutput> | void {
    const command = new StopLabelingJobCommand(args);
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
   * <p>Stops a previously started monitoring schedule.</p>
   */
  public stopMonitoringSchedule(
    args: StopMonitoringScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopMonitoringScheduleCommandOutput>;
  public stopMonitoringSchedule(
    args: StopMonitoringScheduleCommandInput,
    cb: (err: any, data?: StopMonitoringScheduleCommandOutput) => void
  ): void;
  public stopMonitoringSchedule(
    args: StopMonitoringScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMonitoringScheduleCommandOutput) => void
  ): void;
  public stopMonitoringSchedule(
    args: StopMonitoringScheduleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopMonitoringScheduleCommandOutput) => void),
    cb?: (err: any, data?: StopMonitoringScheduleCommandOutput) => void
  ): Promise<StopMonitoringScheduleCommandOutput> | void {
    const command = new StopMonitoringScheduleCommand(args);
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
  public stopNotebookInstance(
    args: StopNotebookInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopNotebookInstanceCommandOutput>;
  public stopNotebookInstance(
    args: StopNotebookInstanceCommandInput,
    cb: (err: any, data?: StopNotebookInstanceCommandOutput) => void
  ): void;
  public stopNotebookInstance(
    args: StopNotebookInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopNotebookInstanceCommandOutput) => void
  ): void;
  public stopNotebookInstance(
    args: StopNotebookInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopNotebookInstanceCommandOutput) => void),
    cb?: (err: any, data?: StopNotebookInstanceCommandOutput) => void
  ): Promise<StopNotebookInstanceCommandOutput> | void {
    const command = new StopNotebookInstanceCommand(args);
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
   * <p>Stops a processing job.</p>
   */
  public stopProcessingJob(
    args: StopProcessingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopProcessingJobCommandOutput>;
  public stopProcessingJob(
    args: StopProcessingJobCommandInput,
    cb: (err: any, data?: StopProcessingJobCommandOutput) => void
  ): void;
  public stopProcessingJob(
    args: StopProcessingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopProcessingJobCommandOutput) => void
  ): void;
  public stopProcessingJob(
    args: StopProcessingJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopProcessingJobCommandOutput) => void),
    cb?: (err: any, data?: StopProcessingJobCommandOutput) => void
  ): Promise<StopProcessingJobCommandOutput> | void {
    const command = new StopProcessingJobCommand(args);
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
   * <p>Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the
   *                 <code>SIGTERM</code> signal, which delays job termination for 120 seconds.
   *             Algorithms might use this 120-second window to save the model artifacts, so the results
   *             of the training is not lost. </p>
   *         <p>When it receives a <code>StopTrainingJob</code> request, Amazon SageMaker changes the status of
   *             the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the status to
   *                 <code>Stopped</code>.</p>
   */
  public stopTrainingJob(
    args: StopTrainingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTrainingJobCommandOutput>;
  public stopTrainingJob(
    args: StopTrainingJobCommandInput,
    cb: (err: any, data?: StopTrainingJobCommandOutput) => void
  ): void;
  public stopTrainingJob(
    args: StopTrainingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTrainingJobCommandOutput) => void
  ): void;
  public stopTrainingJob(
    args: StopTrainingJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopTrainingJobCommandOutput) => void),
    cb?: (err: any, data?: StopTrainingJobCommandOutput) => void
  ): Promise<StopTrainingJobCommandOutput> | void {
    const command = new StopTrainingJobCommand(args);
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
   * <p>Stops a transform job.</p>
   *         <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job
   *             changes to <code>Stopping</code>. After Amazon SageMaker
   *             stops
   *             the job, the status is set to <code>Stopped</code>. When you stop a transform job before
   *             it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>
   */
  public stopTransformJob(
    args: StopTransformJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTransformJobCommandOutput>;
  public stopTransformJob(
    args: StopTransformJobCommandInput,
    cb: (err: any, data?: StopTransformJobCommandOutput) => void
  ): void;
  public stopTransformJob(
    args: StopTransformJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTransformJobCommandOutput) => void
  ): void;
  public stopTransformJob(
    args: StopTransformJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopTransformJobCommandOutput) => void),
    cb?: (err: any, data?: StopTransformJobCommandOutput) => void
  ): Promise<StopTransformJobCommandOutput> | void {
    const command = new StopTransformJobCommand(args);
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
   * <p>Updates the specified Git repository with the specified values.</p>
   */
  public updateCodeRepository(
    args: UpdateCodeRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCodeRepositoryCommandOutput>;
  public updateCodeRepository(
    args: UpdateCodeRepositoryCommandInput,
    cb: (err: any, data?: UpdateCodeRepositoryCommandOutput) => void
  ): void;
  public updateCodeRepository(
    args: UpdateCodeRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCodeRepositoryCommandOutput) => void
  ): void;
  public updateCodeRepository(
    args: UpdateCodeRepositoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateCodeRepositoryCommandOutput) => void),
    cb?: (err: any, data?: UpdateCodeRepositoryCommandOutput) => void
  ): Promise<UpdateCodeRepositoryCommandOutput> | void {
    const command = new UpdateCodeRepositoryCommand(args);
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
   * <p>Updates a domain. Changes will impact all of the people in the domain.</p>
   */
  public updateDomain(
    args: UpdateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainCommandOutput>;
  public updateDomain(
    args: UpdateDomainCommandInput,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;
  public updateDomain(
    args: UpdateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;
  public updateDomain(
    args: UpdateDomainCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDomainCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainCommandOutput) => void
  ): Promise<UpdateDomainCommandOutput> | void {
    const command = new UpdateDomainCommand(args);
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
  public updateEndpoint(
    args: UpdateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEndpointCommandOutput>;
  public updateEndpoint(
    args: UpdateEndpointCommandInput,
    cb: (err: any, data?: UpdateEndpointCommandOutput) => void
  ): void;
  public updateEndpoint(
    args: UpdateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEndpointCommandOutput) => void
  ): void;
  public updateEndpoint(
    args: UpdateEndpointCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateEndpointCommandOutput) => void),
    cb?: (err: any, data?: UpdateEndpointCommandOutput) => void
  ): Promise<UpdateEndpointCommandOutput> | void {
    const command = new UpdateEndpointCommand(args);
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
   * <p>Updates variant weight of one or more variants associated with an existing
   *             endpoint, or capacity of one variant associated with an existing endpoint. When it
   *             receives the request, Amazon SageMaker sets the endpoint status to <code>Updating</code>. After
   *             updating the endpoint, it sets the status to <code>InService</code>. To check the status
   *             of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html">DescribeEndpoint</a> API.
   *         </p>
   */
  public updateEndpointWeightsAndCapacities(
    args: UpdateEndpointWeightsAndCapacitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEndpointWeightsAndCapacitiesCommandOutput>;
  public updateEndpointWeightsAndCapacities(
    args: UpdateEndpointWeightsAndCapacitiesCommandInput,
    cb: (
      err: any,
      data?: UpdateEndpointWeightsAndCapacitiesCommandOutput
    ) => void
  ): void;
  public updateEndpointWeightsAndCapacities(
    args: UpdateEndpointWeightsAndCapacitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: UpdateEndpointWeightsAndCapacitiesCommandOutput
    ) => void
  ): void;
  public updateEndpointWeightsAndCapacities(
    args: UpdateEndpointWeightsAndCapacitiesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: UpdateEndpointWeightsAndCapacitiesCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: UpdateEndpointWeightsAndCapacitiesCommandOutput
    ) => void
  ): Promise<UpdateEndpointWeightsAndCapacitiesCommandOutput> | void {
    const command = new UpdateEndpointWeightsAndCapacitiesCommand(args);
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
   * <p>Adds, updates, or removes the description of an experiment. Updates the
   *      display name of an experiment.</p>
   */
  public updateExperiment(
    args: UpdateExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExperimentCommandOutput>;
  public updateExperiment(
    args: UpdateExperimentCommandInput,
    cb: (err: any, data?: UpdateExperimentCommandOutput) => void
  ): void;
  public updateExperiment(
    args: UpdateExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExperimentCommandOutput) => void
  ): void;
  public updateExperiment(
    args: UpdateExperimentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateExperimentCommandOutput) => void),
    cb?: (err: any, data?: UpdateExperimentCommandOutput) => void
  ): Promise<UpdateExperimentCommandOutput> | void {
    const command = new UpdateExperimentCommand(args);
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
   * <p>Updates a previously created schedule.</p>
   */
  public updateMonitoringSchedule(
    args: UpdateMonitoringScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMonitoringScheduleCommandOutput>;
  public updateMonitoringSchedule(
    args: UpdateMonitoringScheduleCommandInput,
    cb: (err: any, data?: UpdateMonitoringScheduleCommandOutput) => void
  ): void;
  public updateMonitoringSchedule(
    args: UpdateMonitoringScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMonitoringScheduleCommandOutput) => void
  ): void;
  public updateMonitoringSchedule(
    args: UpdateMonitoringScheduleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateMonitoringScheduleCommandOutput) => void),
    cb?: (err: any, data?: UpdateMonitoringScheduleCommandOutput) => void
  ): Promise<UpdateMonitoringScheduleCommandOutput> | void {
    const command = new UpdateMonitoringScheduleCommand(args);
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
   * <p>Updates a notebook instance. NotebookInstance updates include upgrading or
   *             downgrading the ML compute instance used for your notebook instance to accommodate
   *             changes in your workload requirements.</p>
   */
  public updateNotebookInstance(
    args: UpdateNotebookInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotebookInstanceCommandOutput>;
  public updateNotebookInstance(
    args: UpdateNotebookInstanceCommandInput,
    cb: (err: any, data?: UpdateNotebookInstanceCommandOutput) => void
  ): void;
  public updateNotebookInstance(
    args: UpdateNotebookInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotebookInstanceCommandOutput) => void
  ): void;
  public updateNotebookInstance(
    args: UpdateNotebookInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateNotebookInstanceCommandOutput) => void),
    cb?: (err: any, data?: UpdateNotebookInstanceCommandOutput) => void
  ): Promise<UpdateNotebookInstanceCommandOutput> | void {
    const command = new UpdateNotebookInstanceCommand(args);
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
   * <p>Updates a notebook instance lifecycle configuration created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
   */
  public updateNotebookInstanceLifecycleConfig(
    args: UpdateNotebookInstanceLifecycleConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotebookInstanceLifecycleConfigCommandOutput>;
  public updateNotebookInstanceLifecycleConfig(
    args: UpdateNotebookInstanceLifecycleConfigCommandInput,
    cb: (
      err: any,
      data?: UpdateNotebookInstanceLifecycleConfigCommandOutput
    ) => void
  ): void;
  public updateNotebookInstanceLifecycleConfig(
    args: UpdateNotebookInstanceLifecycleConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: UpdateNotebookInstanceLifecycleConfigCommandOutput
    ) => void
  ): void;
  public updateNotebookInstanceLifecycleConfig(
    args: UpdateNotebookInstanceLifecycleConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: UpdateNotebookInstanceLifecycleConfigCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: UpdateNotebookInstanceLifecycleConfigCommandOutput
    ) => void
  ): Promise<UpdateNotebookInstanceLifecycleConfigCommandOutput> | void {
    const command = new UpdateNotebookInstanceLifecycleConfigCommand(args);
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
   * <p>Updates the display name of a trial.</p>
   */
  public updateTrial(
    args: UpdateTrialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrialCommandOutput>;
  public updateTrial(
    args: UpdateTrialCommandInput,
    cb: (err: any, data?: UpdateTrialCommandOutput) => void
  ): void;
  public updateTrial(
    args: UpdateTrialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrialCommandOutput) => void
  ): void;
  public updateTrial(
    args: UpdateTrialCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateTrialCommandOutput) => void),
    cb?: (err: any, data?: UpdateTrialCommandOutput) => void
  ): Promise<UpdateTrialCommandOutput> | void {
    const command = new UpdateTrialCommand(args);
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
   * <p>Updates one or more properties of a trial component.</p>
   */
  public updateTrialComponent(
    args: UpdateTrialComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrialComponentCommandOutput>;
  public updateTrialComponent(
    args: UpdateTrialComponentCommandInput,
    cb: (err: any, data?: UpdateTrialComponentCommandOutput) => void
  ): void;
  public updateTrialComponent(
    args: UpdateTrialComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrialComponentCommandOutput) => void
  ): void;
  public updateTrialComponent(
    args: UpdateTrialComponentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateTrialComponentCommandOutput) => void),
    cb?: (err: any, data?: UpdateTrialComponentCommandOutput) => void
  ): Promise<UpdateTrialComponentCommandOutput> | void {
    const command = new UpdateTrialComponentCommand(args);
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
   * <p>Updates a user profile.</p>
   */
  public updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserProfileCommandOutput>;
  public updateUserProfile(
    args: UpdateUserProfileCommandInput,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
  public updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
  public updateUserProfile(
    args: UpdateUserProfileCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateUserProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): Promise<UpdateUserProfileCommandOutput> | void {
    const command = new UpdateUserProfileCommand(args);
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
  public updateWorkforce(
    args: UpdateWorkforceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkforceCommandOutput>;
  public updateWorkforce(
    args: UpdateWorkforceCommandInput,
    cb: (err: any, data?: UpdateWorkforceCommandOutput) => void
  ): void;
  public updateWorkforce(
    args: UpdateWorkforceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkforceCommandOutput) => void
  ): void;
  public updateWorkforce(
    args: UpdateWorkforceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateWorkforceCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkforceCommandOutput) => void
  ): Promise<UpdateWorkforceCommandOutput> | void {
    const command = new UpdateWorkforceCommand(args);
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
   * <p>Updates an existing work team with new member definitions or description.</p>
   */
  public updateWorkteam(
    args: UpdateWorkteamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkteamCommandOutput>;
  public updateWorkteam(
    args: UpdateWorkteamCommandInput,
    cb: (err: any, data?: UpdateWorkteamCommandOutput) => void
  ): void;
  public updateWorkteam(
    args: UpdateWorkteamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkteamCommandOutput) => void
  ): void;
  public updateWorkteam(
    args: UpdateWorkteamCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateWorkteamCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkteamCommandOutput) => void
  ): Promise<UpdateWorkteamCommandOutput> | void {
    const command = new UpdateWorkteamCommand(args);
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
