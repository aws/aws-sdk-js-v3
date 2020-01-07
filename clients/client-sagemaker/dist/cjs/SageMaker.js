"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SageMakerClient_1 = require("./SageMakerClient");
const AddTagsCommand_1 = require("./commands/AddTagsCommand");
const AssociateTrialComponentCommand_1 = require("./commands/AssociateTrialComponentCommand");
const CreateAlgorithmCommand_1 = require("./commands/CreateAlgorithmCommand");
const CreateAppCommand_1 = require("./commands/CreateAppCommand");
const CreateAutoMLJobCommand_1 = require("./commands/CreateAutoMLJobCommand");
const CreateCodeRepositoryCommand_1 = require("./commands/CreateCodeRepositoryCommand");
const CreateCompilationJobCommand_1 = require("./commands/CreateCompilationJobCommand");
const CreateDomainCommand_1 = require("./commands/CreateDomainCommand");
const CreateEndpointCommand_1 = require("./commands/CreateEndpointCommand");
const CreateEndpointConfigCommand_1 = require("./commands/CreateEndpointConfigCommand");
const CreateExperimentCommand_1 = require("./commands/CreateExperimentCommand");
const CreateFlowDefinitionCommand_1 = require("./commands/CreateFlowDefinitionCommand");
const CreateHumanTaskUiCommand_1 = require("./commands/CreateHumanTaskUiCommand");
const CreateHyperParameterTuningJobCommand_1 = require("./commands/CreateHyperParameterTuningJobCommand");
const CreateLabelingJobCommand_1 = require("./commands/CreateLabelingJobCommand");
const CreateModelCommand_1 = require("./commands/CreateModelCommand");
const CreateModelPackageCommand_1 = require("./commands/CreateModelPackageCommand");
const CreateMonitoringScheduleCommand_1 = require("./commands/CreateMonitoringScheduleCommand");
const CreateNotebookInstanceCommand_1 = require("./commands/CreateNotebookInstanceCommand");
const CreateNotebookInstanceLifecycleConfigCommand_1 = require("./commands/CreateNotebookInstanceLifecycleConfigCommand");
const CreatePresignedDomainUrlCommand_1 = require("./commands/CreatePresignedDomainUrlCommand");
const CreatePresignedNotebookInstanceUrlCommand_1 = require("./commands/CreatePresignedNotebookInstanceUrlCommand");
const CreateProcessingJobCommand_1 = require("./commands/CreateProcessingJobCommand");
const CreateTrainingJobCommand_1 = require("./commands/CreateTrainingJobCommand");
const CreateTransformJobCommand_1 = require("./commands/CreateTransformJobCommand");
const CreateTrialCommand_1 = require("./commands/CreateTrialCommand");
const CreateTrialComponentCommand_1 = require("./commands/CreateTrialComponentCommand");
const CreateUserProfileCommand_1 = require("./commands/CreateUserProfileCommand");
const CreateWorkteamCommand_1 = require("./commands/CreateWorkteamCommand");
const DeleteAlgorithmCommand_1 = require("./commands/DeleteAlgorithmCommand");
const DeleteAppCommand_1 = require("./commands/DeleteAppCommand");
const DeleteCodeRepositoryCommand_1 = require("./commands/DeleteCodeRepositoryCommand");
const DeleteDomainCommand_1 = require("./commands/DeleteDomainCommand");
const DeleteEndpointCommand_1 = require("./commands/DeleteEndpointCommand");
const DeleteEndpointConfigCommand_1 = require("./commands/DeleteEndpointConfigCommand");
const DeleteExperimentCommand_1 = require("./commands/DeleteExperimentCommand");
const DeleteFlowDefinitionCommand_1 = require("./commands/DeleteFlowDefinitionCommand");
const DeleteModelCommand_1 = require("./commands/DeleteModelCommand");
const DeleteModelPackageCommand_1 = require("./commands/DeleteModelPackageCommand");
const DeleteMonitoringScheduleCommand_1 = require("./commands/DeleteMonitoringScheduleCommand");
const DeleteNotebookInstanceCommand_1 = require("./commands/DeleteNotebookInstanceCommand");
const DeleteNotebookInstanceLifecycleConfigCommand_1 = require("./commands/DeleteNotebookInstanceLifecycleConfigCommand");
const DeleteTagsCommand_1 = require("./commands/DeleteTagsCommand");
const DeleteTrialCommand_1 = require("./commands/DeleteTrialCommand");
const DeleteTrialComponentCommand_1 = require("./commands/DeleteTrialComponentCommand");
const DeleteUserProfileCommand_1 = require("./commands/DeleteUserProfileCommand");
const DeleteWorkteamCommand_1 = require("./commands/DeleteWorkteamCommand");
const DescribeAlgorithmCommand_1 = require("./commands/DescribeAlgorithmCommand");
const DescribeAppCommand_1 = require("./commands/DescribeAppCommand");
const DescribeAutoMLJobCommand_1 = require("./commands/DescribeAutoMLJobCommand");
const DescribeCodeRepositoryCommand_1 = require("./commands/DescribeCodeRepositoryCommand");
const DescribeCompilationJobCommand_1 = require("./commands/DescribeCompilationJobCommand");
const DescribeDomainCommand_1 = require("./commands/DescribeDomainCommand");
const DescribeEndpointCommand_1 = require("./commands/DescribeEndpointCommand");
const DescribeEndpointConfigCommand_1 = require("./commands/DescribeEndpointConfigCommand");
const DescribeExperimentCommand_1 = require("./commands/DescribeExperimentCommand");
const DescribeFlowDefinitionCommand_1 = require("./commands/DescribeFlowDefinitionCommand");
const DescribeHumanTaskUiCommand_1 = require("./commands/DescribeHumanTaskUiCommand");
const DescribeHyperParameterTuningJobCommand_1 = require("./commands/DescribeHyperParameterTuningJobCommand");
const DescribeLabelingJobCommand_1 = require("./commands/DescribeLabelingJobCommand");
const DescribeModelCommand_1 = require("./commands/DescribeModelCommand");
const DescribeModelPackageCommand_1 = require("./commands/DescribeModelPackageCommand");
const DescribeMonitoringScheduleCommand_1 = require("./commands/DescribeMonitoringScheduleCommand");
const DescribeNotebookInstanceCommand_1 = require("./commands/DescribeNotebookInstanceCommand");
const DescribeNotebookInstanceLifecycleConfigCommand_1 = require("./commands/DescribeNotebookInstanceLifecycleConfigCommand");
const DescribeProcessingJobCommand_1 = require("./commands/DescribeProcessingJobCommand");
const DescribeSubscribedWorkteamCommand_1 = require("./commands/DescribeSubscribedWorkteamCommand");
const DescribeTrainingJobCommand_1 = require("./commands/DescribeTrainingJobCommand");
const DescribeTransformJobCommand_1 = require("./commands/DescribeTransformJobCommand");
const DescribeTrialCommand_1 = require("./commands/DescribeTrialCommand");
const DescribeTrialComponentCommand_1 = require("./commands/DescribeTrialComponentCommand");
const DescribeUserProfileCommand_1 = require("./commands/DescribeUserProfileCommand");
const DescribeWorkforceCommand_1 = require("./commands/DescribeWorkforceCommand");
const DescribeWorkteamCommand_1 = require("./commands/DescribeWorkteamCommand");
const DisassociateTrialComponentCommand_1 = require("./commands/DisassociateTrialComponentCommand");
const GetSearchSuggestionsCommand_1 = require("./commands/GetSearchSuggestionsCommand");
const ListAlgorithmsCommand_1 = require("./commands/ListAlgorithmsCommand");
const ListAppsCommand_1 = require("./commands/ListAppsCommand");
const ListAutoMLJobsCommand_1 = require("./commands/ListAutoMLJobsCommand");
const ListCandidatesForAutoMLJobCommand_1 = require("./commands/ListCandidatesForAutoMLJobCommand");
const ListCodeRepositoriesCommand_1 = require("./commands/ListCodeRepositoriesCommand");
const ListCompilationJobsCommand_1 = require("./commands/ListCompilationJobsCommand");
const ListDomainsCommand_1 = require("./commands/ListDomainsCommand");
const ListEndpointConfigsCommand_1 = require("./commands/ListEndpointConfigsCommand");
const ListEndpointsCommand_1 = require("./commands/ListEndpointsCommand");
const ListExperimentsCommand_1 = require("./commands/ListExperimentsCommand");
const ListFlowDefinitionsCommand_1 = require("./commands/ListFlowDefinitionsCommand");
const ListHumanTaskUisCommand_1 = require("./commands/ListHumanTaskUisCommand");
const ListHyperParameterTuningJobsCommand_1 = require("./commands/ListHyperParameterTuningJobsCommand");
const ListLabelingJobsCommand_1 = require("./commands/ListLabelingJobsCommand");
const ListLabelingJobsForWorkteamCommand_1 = require("./commands/ListLabelingJobsForWorkteamCommand");
const ListModelPackagesCommand_1 = require("./commands/ListModelPackagesCommand");
const ListModelsCommand_1 = require("./commands/ListModelsCommand");
const ListMonitoringExecutionsCommand_1 = require("./commands/ListMonitoringExecutionsCommand");
const ListMonitoringSchedulesCommand_1 = require("./commands/ListMonitoringSchedulesCommand");
const ListNotebookInstanceLifecycleConfigsCommand_1 = require("./commands/ListNotebookInstanceLifecycleConfigsCommand");
const ListNotebookInstancesCommand_1 = require("./commands/ListNotebookInstancesCommand");
const ListProcessingJobsCommand_1 = require("./commands/ListProcessingJobsCommand");
const ListSubscribedWorkteamsCommand_1 = require("./commands/ListSubscribedWorkteamsCommand");
const ListTagsCommand_1 = require("./commands/ListTagsCommand");
const ListTrainingJobsCommand_1 = require("./commands/ListTrainingJobsCommand");
const ListTrainingJobsForHyperParameterTuningJobCommand_1 = require("./commands/ListTrainingJobsForHyperParameterTuningJobCommand");
const ListTransformJobsCommand_1 = require("./commands/ListTransformJobsCommand");
const ListTrialComponentsCommand_1 = require("./commands/ListTrialComponentsCommand");
const ListTrialsCommand_1 = require("./commands/ListTrialsCommand");
const ListUserProfilesCommand_1 = require("./commands/ListUserProfilesCommand");
const ListWorkteamsCommand_1 = require("./commands/ListWorkteamsCommand");
const RenderUiTemplateCommand_1 = require("./commands/RenderUiTemplateCommand");
const SearchCommand_1 = require("./commands/SearchCommand");
const StartMonitoringScheduleCommand_1 = require("./commands/StartMonitoringScheduleCommand");
const StartNotebookInstanceCommand_1 = require("./commands/StartNotebookInstanceCommand");
const StopAutoMLJobCommand_1 = require("./commands/StopAutoMLJobCommand");
const StopCompilationJobCommand_1 = require("./commands/StopCompilationJobCommand");
const StopHyperParameterTuningJobCommand_1 = require("./commands/StopHyperParameterTuningJobCommand");
const StopLabelingJobCommand_1 = require("./commands/StopLabelingJobCommand");
const StopMonitoringScheduleCommand_1 = require("./commands/StopMonitoringScheduleCommand");
const StopNotebookInstanceCommand_1 = require("./commands/StopNotebookInstanceCommand");
const StopProcessingJobCommand_1 = require("./commands/StopProcessingJobCommand");
const StopTrainingJobCommand_1 = require("./commands/StopTrainingJobCommand");
const StopTransformJobCommand_1 = require("./commands/StopTransformJobCommand");
const UpdateCodeRepositoryCommand_1 = require("./commands/UpdateCodeRepositoryCommand");
const UpdateDomainCommand_1 = require("./commands/UpdateDomainCommand");
const UpdateEndpointCommand_1 = require("./commands/UpdateEndpointCommand");
const UpdateEndpointWeightsAndCapacitiesCommand_1 = require("./commands/UpdateEndpointWeightsAndCapacitiesCommand");
const UpdateExperimentCommand_1 = require("./commands/UpdateExperimentCommand");
const UpdateMonitoringScheduleCommand_1 = require("./commands/UpdateMonitoringScheduleCommand");
const UpdateNotebookInstanceCommand_1 = require("./commands/UpdateNotebookInstanceCommand");
const UpdateNotebookInstanceLifecycleConfigCommand_1 = require("./commands/UpdateNotebookInstanceLifecycleConfigCommand");
const UpdateTrialCommand_1 = require("./commands/UpdateTrialCommand");
const UpdateTrialComponentCommand_1 = require("./commands/UpdateTrialComponentCommand");
const UpdateUserProfileCommand_1 = require("./commands/UpdateUserProfileCommand");
const UpdateWorkforceCommand_1 = require("./commands/UpdateWorkforceCommand");
const UpdateWorkteamCommand_1 = require("./commands/UpdateWorkteamCommand");
/**
 * <p>Provides APIs for creating and managing Amazon SageMaker resources.</p>
 */
class SageMaker extends SageMakerClient_1.SageMakerClient {
    addTags(args, optionsOrCb, cb) {
        const command = new AddTagsCommand_1.AddTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateTrialComponent(args, optionsOrCb, cb) {
        const command = new AssociateTrialComponentCommand_1.AssociateTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAlgorithm(args, optionsOrCb, cb) {
        const command = new CreateAlgorithmCommand_1.CreateAlgorithmCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createApp(args, optionsOrCb, cb) {
        const command = new CreateAppCommand_1.CreateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAutoMLJob(args, optionsOrCb, cb) {
        const command = new CreateAutoMLJobCommand_1.CreateAutoMLJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCodeRepository(args, optionsOrCb, cb) {
        const command = new CreateCodeRepositoryCommand_1.CreateCodeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCompilationJob(args, optionsOrCb, cb) {
        const command = new CreateCompilationJobCommand_1.CreateCompilationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDomain(args, optionsOrCb, cb) {
        const command = new CreateDomainCommand_1.CreateDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createEndpoint(args, optionsOrCb, cb) {
        const command = new CreateEndpointCommand_1.CreateEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createEndpointConfig(args, optionsOrCb, cb) {
        const command = new CreateEndpointConfigCommand_1.CreateEndpointConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createExperiment(args, optionsOrCb, cb) {
        const command = new CreateExperimentCommand_1.CreateExperimentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFlowDefinition(args, optionsOrCb, cb) {
        const command = new CreateFlowDefinitionCommand_1.CreateFlowDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createHumanTaskUi(args, optionsOrCb, cb) {
        const command = new CreateHumanTaskUiCommand_1.CreateHumanTaskUiCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createHyperParameterTuningJob(args, optionsOrCb, cb) {
        const command = new CreateHyperParameterTuningJobCommand_1.CreateHyperParameterTuningJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createLabelingJob(args, optionsOrCb, cb) {
        const command = new CreateLabelingJobCommand_1.CreateLabelingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createModel(args, optionsOrCb, cb) {
        const command = new CreateModelCommand_1.CreateModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createModelPackage(args, optionsOrCb, cb) {
        const command = new CreateModelPackageCommand_1.CreateModelPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createMonitoringSchedule(args, optionsOrCb, cb) {
        const command = new CreateMonitoringScheduleCommand_1.CreateMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createNotebookInstance(args, optionsOrCb, cb) {
        const command = new CreateNotebookInstanceCommand_1.CreateNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createNotebookInstanceLifecycleConfig(args, optionsOrCb, cb) {
        const command = new CreateNotebookInstanceLifecycleConfigCommand_1.CreateNotebookInstanceLifecycleConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPresignedDomainUrl(args, optionsOrCb, cb) {
        const command = new CreatePresignedDomainUrlCommand_1.CreatePresignedDomainUrlCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPresignedNotebookInstanceUrl(args, optionsOrCb, cb) {
        const command = new CreatePresignedNotebookInstanceUrlCommand_1.CreatePresignedNotebookInstanceUrlCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createProcessingJob(args, optionsOrCb, cb) {
        const command = new CreateProcessingJobCommand_1.CreateProcessingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTrainingJob(args, optionsOrCb, cb) {
        const command = new CreateTrainingJobCommand_1.CreateTrainingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTransformJob(args, optionsOrCb, cb) {
        const command = new CreateTransformJobCommand_1.CreateTransformJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTrial(args, optionsOrCb, cb) {
        const command = new CreateTrialCommand_1.CreateTrialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTrialComponent(args, optionsOrCb, cb) {
        const command = new CreateTrialComponentCommand_1.CreateTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUserProfile(args, optionsOrCb, cb) {
        const command = new CreateUserProfileCommand_1.CreateUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createWorkteam(args, optionsOrCb, cb) {
        const command = new CreateWorkteamCommand_1.CreateWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAlgorithm(args, optionsOrCb, cb) {
        const command = new DeleteAlgorithmCommand_1.DeleteAlgorithmCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteApp(args, optionsOrCb, cb) {
        const command = new DeleteAppCommand_1.DeleteAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCodeRepository(args, optionsOrCb, cb) {
        const command = new DeleteCodeRepositoryCommand_1.DeleteCodeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDomain(args, optionsOrCb, cb) {
        const command = new DeleteDomainCommand_1.DeleteDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteEndpoint(args, optionsOrCb, cb) {
        const command = new DeleteEndpointCommand_1.DeleteEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteEndpointConfig(args, optionsOrCb, cb) {
        const command = new DeleteEndpointConfigCommand_1.DeleteEndpointConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteExperiment(args, optionsOrCb, cb) {
        const command = new DeleteExperimentCommand_1.DeleteExperimentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFlowDefinition(args, optionsOrCb, cb) {
        const command = new DeleteFlowDefinitionCommand_1.DeleteFlowDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteModel(args, optionsOrCb, cb) {
        const command = new DeleteModelCommand_1.DeleteModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteModelPackage(args, optionsOrCb, cb) {
        const command = new DeleteModelPackageCommand_1.DeleteModelPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteMonitoringSchedule(args, optionsOrCb, cb) {
        const command = new DeleteMonitoringScheduleCommand_1.DeleteMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNotebookInstance(args, optionsOrCb, cb) {
        const command = new DeleteNotebookInstanceCommand_1.DeleteNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNotebookInstanceLifecycleConfig(args, optionsOrCb, cb) {
        const command = new DeleteNotebookInstanceLifecycleConfigCommand_1.DeleteNotebookInstanceLifecycleConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTags(args, optionsOrCb, cb) {
        const command = new DeleteTagsCommand_1.DeleteTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTrial(args, optionsOrCb, cb) {
        const command = new DeleteTrialCommand_1.DeleteTrialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTrialComponent(args, optionsOrCb, cb) {
        const command = new DeleteTrialComponentCommand_1.DeleteTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUserProfile(args, optionsOrCb, cb) {
        const command = new DeleteUserProfileCommand_1.DeleteUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteWorkteam(args, optionsOrCb, cb) {
        const command = new DeleteWorkteamCommand_1.DeleteWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAlgorithm(args, optionsOrCb, cb) {
        const command = new DescribeAlgorithmCommand_1.DescribeAlgorithmCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeApp(args, optionsOrCb, cb) {
        const command = new DescribeAppCommand_1.DescribeAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAutoMLJob(args, optionsOrCb, cb) {
        const command = new DescribeAutoMLJobCommand_1.DescribeAutoMLJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCodeRepository(args, optionsOrCb, cb) {
        const command = new DescribeCodeRepositoryCommand_1.DescribeCodeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCompilationJob(args, optionsOrCb, cb) {
        const command = new DescribeCompilationJobCommand_1.DescribeCompilationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDomain(args, optionsOrCb, cb) {
        const command = new DescribeDomainCommand_1.DescribeDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEndpoint(args, optionsOrCb, cb) {
        const command = new DescribeEndpointCommand_1.DescribeEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEndpointConfig(args, optionsOrCb, cb) {
        const command = new DescribeEndpointConfigCommand_1.DescribeEndpointConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeExperiment(args, optionsOrCb, cb) {
        const command = new DescribeExperimentCommand_1.DescribeExperimentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFlowDefinition(args, optionsOrCb, cb) {
        const command = new DescribeFlowDefinitionCommand_1.DescribeFlowDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeHumanTaskUi(args, optionsOrCb, cb) {
        const command = new DescribeHumanTaskUiCommand_1.DescribeHumanTaskUiCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeHyperParameterTuningJob(args, optionsOrCb, cb) {
        const command = new DescribeHyperParameterTuningJobCommand_1.DescribeHyperParameterTuningJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLabelingJob(args, optionsOrCb, cb) {
        const command = new DescribeLabelingJobCommand_1.DescribeLabelingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeModel(args, optionsOrCb, cb) {
        const command = new DescribeModelCommand_1.DescribeModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeModelPackage(args, optionsOrCb, cb) {
        const command = new DescribeModelPackageCommand_1.DescribeModelPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMonitoringSchedule(args, optionsOrCb, cb) {
        const command = new DescribeMonitoringScheduleCommand_1.DescribeMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNotebookInstance(args, optionsOrCb, cb) {
        const command = new DescribeNotebookInstanceCommand_1.DescribeNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNotebookInstanceLifecycleConfig(args, optionsOrCb, cb) {
        const command = new DescribeNotebookInstanceLifecycleConfigCommand_1.DescribeNotebookInstanceLifecycleConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeProcessingJob(args, optionsOrCb, cb) {
        const command = new DescribeProcessingJobCommand_1.DescribeProcessingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSubscribedWorkteam(args, optionsOrCb, cb) {
        const command = new DescribeSubscribedWorkteamCommand_1.DescribeSubscribedWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTrainingJob(args, optionsOrCb, cb) {
        const command = new DescribeTrainingJobCommand_1.DescribeTrainingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTransformJob(args, optionsOrCb, cb) {
        const command = new DescribeTransformJobCommand_1.DescribeTransformJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTrial(args, optionsOrCb, cb) {
        const command = new DescribeTrialCommand_1.DescribeTrialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTrialComponent(args, optionsOrCb, cb) {
        const command = new DescribeTrialComponentCommand_1.DescribeTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUserProfile(args, optionsOrCb, cb) {
        const command = new DescribeUserProfileCommand_1.DescribeUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeWorkforce(args, optionsOrCb, cb) {
        const command = new DescribeWorkforceCommand_1.DescribeWorkforceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeWorkteam(args, optionsOrCb, cb) {
        const command = new DescribeWorkteamCommand_1.DescribeWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateTrialComponent(args, optionsOrCb, cb) {
        const command = new DisassociateTrialComponentCommand_1.DisassociateTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSearchSuggestions(args, optionsOrCb, cb) {
        const command = new GetSearchSuggestionsCommand_1.GetSearchSuggestionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAlgorithms(args, optionsOrCb, cb) {
        const command = new ListAlgorithmsCommand_1.ListAlgorithmsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listApps(args, optionsOrCb, cb) {
        const command = new ListAppsCommand_1.ListAppsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAutoMLJobs(args, optionsOrCb, cb) {
        const command = new ListAutoMLJobsCommand_1.ListAutoMLJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCandidatesForAutoMLJob(args, optionsOrCb, cb) {
        const command = new ListCandidatesForAutoMLJobCommand_1.ListCandidatesForAutoMLJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCodeRepositories(args, optionsOrCb, cb) {
        const command = new ListCodeRepositoriesCommand_1.ListCodeRepositoriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCompilationJobs(args, optionsOrCb, cb) {
        const command = new ListCompilationJobsCommand_1.ListCompilationJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDomains(args, optionsOrCb, cb) {
        const command = new ListDomainsCommand_1.ListDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listEndpointConfigs(args, optionsOrCb, cb) {
        const command = new ListEndpointConfigsCommand_1.ListEndpointConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listEndpoints(args, optionsOrCb, cb) {
        const command = new ListEndpointsCommand_1.ListEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listExperiments(args, optionsOrCb, cb) {
        const command = new ListExperimentsCommand_1.ListExperimentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFlowDefinitions(args, optionsOrCb, cb) {
        const command = new ListFlowDefinitionsCommand_1.ListFlowDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listHumanTaskUis(args, optionsOrCb, cb) {
        const command = new ListHumanTaskUisCommand_1.ListHumanTaskUisCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listHyperParameterTuningJobs(args, optionsOrCb, cb) {
        const command = new ListHyperParameterTuningJobsCommand_1.ListHyperParameterTuningJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listLabelingJobs(args, optionsOrCb, cb) {
        const command = new ListLabelingJobsCommand_1.ListLabelingJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listLabelingJobsForWorkteam(args, optionsOrCb, cb) {
        const command = new ListLabelingJobsForWorkteamCommand_1.ListLabelingJobsForWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listModelPackages(args, optionsOrCb, cb) {
        const command = new ListModelPackagesCommand_1.ListModelPackagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listModels(args, optionsOrCb, cb) {
        const command = new ListModelsCommand_1.ListModelsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listMonitoringExecutions(args, optionsOrCb, cb) {
        const command = new ListMonitoringExecutionsCommand_1.ListMonitoringExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listMonitoringSchedules(args, optionsOrCb, cb) {
        const command = new ListMonitoringSchedulesCommand_1.ListMonitoringSchedulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listNotebookInstanceLifecycleConfigs(args, optionsOrCb, cb) {
        const command = new ListNotebookInstanceLifecycleConfigsCommand_1.ListNotebookInstanceLifecycleConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listNotebookInstances(args, optionsOrCb, cb) {
        const command = new ListNotebookInstancesCommand_1.ListNotebookInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listProcessingJobs(args, optionsOrCb, cb) {
        const command = new ListProcessingJobsCommand_1.ListProcessingJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSubscribedWorkteams(args, optionsOrCb, cb) {
        const command = new ListSubscribedWorkteamsCommand_1.ListSubscribedWorkteamsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTags(args, optionsOrCb, cb) {
        const command = new ListTagsCommand_1.ListTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTrainingJobs(args, optionsOrCb, cb) {
        const command = new ListTrainingJobsCommand_1.ListTrainingJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTrainingJobsForHyperParameterTuningJob(args, optionsOrCb, cb) {
        const command = new ListTrainingJobsForHyperParameterTuningJobCommand_1.ListTrainingJobsForHyperParameterTuningJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTransformJobs(args, optionsOrCb, cb) {
        const command = new ListTransformJobsCommand_1.ListTransformJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTrialComponents(args, optionsOrCb, cb) {
        const command = new ListTrialComponentsCommand_1.ListTrialComponentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTrials(args, optionsOrCb, cb) {
        const command = new ListTrialsCommand_1.ListTrialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUserProfiles(args, optionsOrCb, cb) {
        const command = new ListUserProfilesCommand_1.ListUserProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listWorkteams(args, optionsOrCb, cb) {
        const command = new ListWorkteamsCommand_1.ListWorkteamsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    renderUiTemplate(args, optionsOrCb, cb) {
        const command = new RenderUiTemplateCommand_1.RenderUiTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    search(args, optionsOrCb, cb) {
        const command = new SearchCommand_1.SearchCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startMonitoringSchedule(args, optionsOrCb, cb) {
        const command = new StartMonitoringScheduleCommand_1.StartMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startNotebookInstance(args, optionsOrCb, cb) {
        const command = new StartNotebookInstanceCommand_1.StartNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopAutoMLJob(args, optionsOrCb, cb) {
        const command = new StopAutoMLJobCommand_1.StopAutoMLJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopCompilationJob(args, optionsOrCb, cb) {
        const command = new StopCompilationJobCommand_1.StopCompilationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopHyperParameterTuningJob(args, optionsOrCb, cb) {
        const command = new StopHyperParameterTuningJobCommand_1.StopHyperParameterTuningJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopLabelingJob(args, optionsOrCb, cb) {
        const command = new StopLabelingJobCommand_1.StopLabelingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopMonitoringSchedule(args, optionsOrCb, cb) {
        const command = new StopMonitoringScheduleCommand_1.StopMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopNotebookInstance(args, optionsOrCb, cb) {
        const command = new StopNotebookInstanceCommand_1.StopNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopProcessingJob(args, optionsOrCb, cb) {
        const command = new StopProcessingJobCommand_1.StopProcessingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopTrainingJob(args, optionsOrCb, cb) {
        const command = new StopTrainingJobCommand_1.StopTrainingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopTransformJob(args, optionsOrCb, cb) {
        const command = new StopTransformJobCommand_1.StopTransformJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateCodeRepository(args, optionsOrCb, cb) {
        const command = new UpdateCodeRepositoryCommand_1.UpdateCodeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDomain(args, optionsOrCb, cb) {
        const command = new UpdateDomainCommand_1.UpdateDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateEndpoint(args, optionsOrCb, cb) {
        const command = new UpdateEndpointCommand_1.UpdateEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateEndpointWeightsAndCapacities(args, optionsOrCb, cb) {
        const command = new UpdateEndpointWeightsAndCapacitiesCommand_1.UpdateEndpointWeightsAndCapacitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateExperiment(args, optionsOrCb, cb) {
        const command = new UpdateExperimentCommand_1.UpdateExperimentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMonitoringSchedule(args, optionsOrCb, cb) {
        const command = new UpdateMonitoringScheduleCommand_1.UpdateMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateNotebookInstance(args, optionsOrCb, cb) {
        const command = new UpdateNotebookInstanceCommand_1.UpdateNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateNotebookInstanceLifecycleConfig(args, optionsOrCb, cb) {
        const command = new UpdateNotebookInstanceLifecycleConfigCommand_1.UpdateNotebookInstanceLifecycleConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTrial(args, optionsOrCb, cb) {
        const command = new UpdateTrialCommand_1.UpdateTrialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTrialComponent(args, optionsOrCb, cb) {
        const command = new UpdateTrialComponentCommand_1.UpdateTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserProfile(args, optionsOrCb, cb) {
        const command = new UpdateUserProfileCommand_1.UpdateUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateWorkforce(args, optionsOrCb, cb) {
        const command = new UpdateWorkforceCommand_1.UpdateWorkforceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateWorkteam(args, optionsOrCb, cb) {
        const command = new UpdateWorkteamCommand_1.UpdateWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.SageMaker = SageMaker;
//# sourceMappingURL=SageMaker.js.map