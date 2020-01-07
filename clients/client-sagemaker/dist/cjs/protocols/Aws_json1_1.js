"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
async function serializeAws_json1_1AddTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.AddTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsCommand = serializeAws_json1_1AddTagsCommand;
async function serializeAws_json1_1AssociateTrialComponentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.AssociateTrialComponent";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateTrialComponentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateTrialComponentCommand = serializeAws_json1_1AssociateTrialComponentCommand;
async function serializeAws_json1_1CreateAlgorithmCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateAlgorithm";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAlgorithmInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAlgorithmCommand = serializeAws_json1_1CreateAlgorithmCommand;
async function serializeAws_json1_1CreateAppCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateApp";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAppCommand = serializeAws_json1_1CreateAppCommand;
async function serializeAws_json1_1CreateAutoMLJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateAutoMLJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAutoMLJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAutoMLJobCommand = serializeAws_json1_1CreateAutoMLJobCommand;
async function serializeAws_json1_1CreateCodeRepositoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateCodeRepository";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCodeRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCodeRepositoryCommand = serializeAws_json1_1CreateCodeRepositoryCommand;
async function serializeAws_json1_1CreateCompilationJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateCompilationJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCompilationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCompilationJobCommand = serializeAws_json1_1CreateCompilationJobCommand;
async function serializeAws_json1_1CreateDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDomainCommand = serializeAws_json1_1CreateDomainCommand;
async function serializeAws_json1_1CreateEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEndpointInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateEndpointCommand = serializeAws_json1_1CreateEndpointCommand;
async function serializeAws_json1_1CreateEndpointConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateEndpointConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEndpointConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateEndpointConfigCommand = serializeAws_json1_1CreateEndpointConfigCommand;
async function serializeAws_json1_1CreateExperimentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateExperiment";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateExperimentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateExperimentCommand = serializeAws_json1_1CreateExperimentCommand;
async function serializeAws_json1_1CreateFlowDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateFlowDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFlowDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateFlowDefinitionCommand = serializeAws_json1_1CreateFlowDefinitionCommand;
async function serializeAws_json1_1CreateHumanTaskUiCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateHumanTaskUi";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHumanTaskUiRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateHumanTaskUiCommand = serializeAws_json1_1CreateHumanTaskUiCommand;
async function serializeAws_json1_1CreateHyperParameterTuningJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateHyperParameterTuningJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHyperParameterTuningJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateHyperParameterTuningJobCommand = serializeAws_json1_1CreateHyperParameterTuningJobCommand;
async function serializeAws_json1_1CreateLabelingJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateLabelingJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLabelingJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLabelingJobCommand = serializeAws_json1_1CreateLabelingJobCommand;
async function serializeAws_json1_1CreateModelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateModel";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateModelInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateModelCommand = serializeAws_json1_1CreateModelCommand;
async function serializeAws_json1_1CreateModelPackageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateModelPackage";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateModelPackageInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateModelPackageCommand = serializeAws_json1_1CreateModelPackageCommand;
async function serializeAws_json1_1CreateMonitoringScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateMonitoringSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMonitoringScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateMonitoringScheduleCommand = serializeAws_json1_1CreateMonitoringScheduleCommand;
async function serializeAws_json1_1CreateNotebookInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateNotebookInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateNotebookInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateNotebookInstanceCommand = serializeAws_json1_1CreateNotebookInstanceCommand;
async function serializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateNotebookInstanceLifecycleConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateNotebookInstanceLifecycleConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand = serializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand;
async function serializeAws_json1_1CreatePresignedDomainUrlCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreatePresignedDomainUrl";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePresignedDomainUrlRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePresignedDomainUrlCommand = serializeAws_json1_1CreatePresignedDomainUrlCommand;
async function serializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreatePresignedNotebookInstanceUrl";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePresignedNotebookInstanceUrlInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand = serializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand;
async function serializeAws_json1_1CreateProcessingJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateProcessingJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProcessingJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateProcessingJobCommand = serializeAws_json1_1CreateProcessingJobCommand;
async function serializeAws_json1_1CreateTrainingJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateTrainingJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTrainingJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTrainingJobCommand = serializeAws_json1_1CreateTrainingJobCommand;
async function serializeAws_json1_1CreateTransformJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateTransformJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTransformJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTransformJobCommand = serializeAws_json1_1CreateTransformJobCommand;
async function serializeAws_json1_1CreateTrialCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateTrial";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTrialRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTrialCommand = serializeAws_json1_1CreateTrialCommand;
async function serializeAws_json1_1CreateTrialComponentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateTrialComponent";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTrialComponentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTrialComponentCommand = serializeAws_json1_1CreateTrialComponentCommand;
async function serializeAws_json1_1CreateUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateUserProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUserProfileCommand = serializeAws_json1_1CreateUserProfileCommand;
async function serializeAws_json1_1CreateWorkteamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.CreateWorkteam";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWorkteamRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateWorkteamCommand = serializeAws_json1_1CreateWorkteamCommand;
async function serializeAws_json1_1DeleteAlgorithmCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteAlgorithm";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAlgorithmInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAlgorithmCommand = serializeAws_json1_1DeleteAlgorithmCommand;
async function serializeAws_json1_1DeleteAppCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteApp";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAppCommand = serializeAws_json1_1DeleteAppCommand;
async function serializeAws_json1_1DeleteCodeRepositoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteCodeRepository";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCodeRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteCodeRepositoryCommand = serializeAws_json1_1DeleteCodeRepositoryCommand;
async function serializeAws_json1_1DeleteDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDomainCommand = serializeAws_json1_1DeleteDomainCommand;
async function serializeAws_json1_1DeleteEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEndpointInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEndpointCommand = serializeAws_json1_1DeleteEndpointCommand;
async function serializeAws_json1_1DeleteEndpointConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteEndpointConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEndpointConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEndpointConfigCommand = serializeAws_json1_1DeleteEndpointConfigCommand;
async function serializeAws_json1_1DeleteExperimentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteExperiment";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteExperimentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteExperimentCommand = serializeAws_json1_1DeleteExperimentCommand;
async function serializeAws_json1_1DeleteFlowDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteFlowDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFlowDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteFlowDefinitionCommand = serializeAws_json1_1DeleteFlowDefinitionCommand;
async function serializeAws_json1_1DeleteModelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteModel";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteModelInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteModelCommand = serializeAws_json1_1DeleteModelCommand;
async function serializeAws_json1_1DeleteModelPackageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteModelPackage";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteModelPackageInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteModelPackageCommand = serializeAws_json1_1DeleteModelPackageCommand;
async function serializeAws_json1_1DeleteMonitoringScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteMonitoringSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMonitoringScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteMonitoringScheduleCommand = serializeAws_json1_1DeleteMonitoringScheduleCommand;
async function serializeAws_json1_1DeleteNotebookInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteNotebookInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNotebookInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteNotebookInstanceCommand = serializeAws_json1_1DeleteNotebookInstanceCommand;
async function serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteNotebookInstanceLifecycleConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand = serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand;
async function serializeAws_json1_1DeleteTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTagsCommand = serializeAws_json1_1DeleteTagsCommand;
async function serializeAws_json1_1DeleteTrialCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteTrial";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTrialRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTrialCommand = serializeAws_json1_1DeleteTrialCommand;
async function serializeAws_json1_1DeleteTrialComponentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteTrialComponent";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTrialComponentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTrialComponentCommand = serializeAws_json1_1DeleteTrialComponentCommand;
async function serializeAws_json1_1DeleteUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteUserProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserProfileCommand = serializeAws_json1_1DeleteUserProfileCommand;
async function serializeAws_json1_1DeleteWorkteamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DeleteWorkteam";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWorkteamRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteWorkteamCommand = serializeAws_json1_1DeleteWorkteamCommand;
async function serializeAws_json1_1DescribeAlgorithmCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeAlgorithm";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAlgorithmInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAlgorithmCommand = serializeAws_json1_1DescribeAlgorithmCommand;
async function serializeAws_json1_1DescribeAppCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeApp";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAppCommand = serializeAws_json1_1DescribeAppCommand;
async function serializeAws_json1_1DescribeAutoMLJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeAutoMLJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAutoMLJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAutoMLJobCommand = serializeAws_json1_1DescribeAutoMLJobCommand;
async function serializeAws_json1_1DescribeCodeRepositoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeCodeRepository";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCodeRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCodeRepositoryCommand = serializeAws_json1_1DescribeCodeRepositoryCommand;
async function serializeAws_json1_1DescribeCompilationJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeCompilationJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCompilationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCompilationJobCommand = serializeAws_json1_1DescribeCompilationJobCommand;
async function serializeAws_json1_1DescribeDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDomainCommand = serializeAws_json1_1DescribeDomainCommand;
async function serializeAws_json1_1DescribeEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEndpointInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEndpointCommand = serializeAws_json1_1DescribeEndpointCommand;
async function serializeAws_json1_1DescribeEndpointConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeEndpointConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEndpointConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEndpointConfigCommand = serializeAws_json1_1DescribeEndpointConfigCommand;
async function serializeAws_json1_1DescribeExperimentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeExperiment";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeExperimentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeExperimentCommand = serializeAws_json1_1DescribeExperimentCommand;
async function serializeAws_json1_1DescribeFlowDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeFlowDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFlowDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeFlowDefinitionCommand = serializeAws_json1_1DescribeFlowDefinitionCommand;
async function serializeAws_json1_1DescribeHumanTaskUiCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeHumanTaskUi";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeHumanTaskUiRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeHumanTaskUiCommand = serializeAws_json1_1DescribeHumanTaskUiCommand;
async function serializeAws_json1_1DescribeHyperParameterTuningJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeHyperParameterTuningJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeHyperParameterTuningJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeHyperParameterTuningJobCommand = serializeAws_json1_1DescribeHyperParameterTuningJobCommand;
async function serializeAws_json1_1DescribeLabelingJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeLabelingJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLabelingJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLabelingJobCommand = serializeAws_json1_1DescribeLabelingJobCommand;
async function serializeAws_json1_1DescribeModelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeModel";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeModelInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeModelCommand = serializeAws_json1_1DescribeModelCommand;
async function serializeAws_json1_1DescribeModelPackageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeModelPackage";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeModelPackageInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeModelPackageCommand = serializeAws_json1_1DescribeModelPackageCommand;
async function serializeAws_json1_1DescribeMonitoringScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeMonitoringSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMonitoringScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMonitoringScheduleCommand = serializeAws_json1_1DescribeMonitoringScheduleCommand;
async function serializeAws_json1_1DescribeNotebookInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeNotebookInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeNotebookInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeNotebookInstanceCommand = serializeAws_json1_1DescribeNotebookInstanceCommand;
async function serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeNotebookInstanceLifecycleConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand = serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand;
async function serializeAws_json1_1DescribeProcessingJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeProcessingJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProcessingJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProcessingJobCommand = serializeAws_json1_1DescribeProcessingJobCommand;
async function serializeAws_json1_1DescribeSubscribedWorkteamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeSubscribedWorkteam";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSubscribedWorkteamRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSubscribedWorkteamCommand = serializeAws_json1_1DescribeSubscribedWorkteamCommand;
async function serializeAws_json1_1DescribeTrainingJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeTrainingJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrainingJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTrainingJobCommand = serializeAws_json1_1DescribeTrainingJobCommand;
async function serializeAws_json1_1DescribeTransformJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeTransformJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTransformJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTransformJobCommand = serializeAws_json1_1DescribeTransformJobCommand;
async function serializeAws_json1_1DescribeTrialCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeTrial";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrialRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTrialCommand = serializeAws_json1_1DescribeTrialCommand;
async function serializeAws_json1_1DescribeTrialComponentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeTrialComponent";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrialComponentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTrialComponentCommand = serializeAws_json1_1DescribeTrialComponentCommand;
async function serializeAws_json1_1DescribeUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeUserProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUserProfileCommand = serializeAws_json1_1DescribeUserProfileCommand;
async function serializeAws_json1_1DescribeWorkforceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeWorkforce";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkforceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeWorkforceCommand = serializeAws_json1_1DescribeWorkforceCommand;
async function serializeAws_json1_1DescribeWorkteamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DescribeWorkteam";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkteamRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeWorkteamCommand = serializeAws_json1_1DescribeWorkteamCommand;
async function serializeAws_json1_1DisassociateTrialComponentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.DisassociateTrialComponent";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateTrialComponentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateTrialComponentCommand = serializeAws_json1_1DisassociateTrialComponentCommand;
async function serializeAws_json1_1GetSearchSuggestionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.GetSearchSuggestions";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSearchSuggestionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSearchSuggestionsCommand = serializeAws_json1_1GetSearchSuggestionsCommand;
async function serializeAws_json1_1ListAlgorithmsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListAlgorithms";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAlgorithmsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAlgorithmsCommand = serializeAws_json1_1ListAlgorithmsCommand;
async function serializeAws_json1_1ListAppsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListApps";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAppsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAppsCommand = serializeAws_json1_1ListAppsCommand;
async function serializeAws_json1_1ListAutoMLJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListAutoMLJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAutoMLJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAutoMLJobsCommand = serializeAws_json1_1ListAutoMLJobsCommand;
async function serializeAws_json1_1ListCandidatesForAutoMLJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListCandidatesForAutoMLJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCandidatesForAutoMLJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCandidatesForAutoMLJobCommand = serializeAws_json1_1ListCandidatesForAutoMLJobCommand;
async function serializeAws_json1_1ListCodeRepositoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListCodeRepositories";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCodeRepositoriesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCodeRepositoriesCommand = serializeAws_json1_1ListCodeRepositoriesCommand;
async function serializeAws_json1_1ListCompilationJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListCompilationJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCompilationJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCompilationJobsCommand = serializeAws_json1_1ListCompilationJobsCommand;
async function serializeAws_json1_1ListDomainsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListDomains";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDomainsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDomainsCommand = serializeAws_json1_1ListDomainsCommand;
async function serializeAws_json1_1ListEndpointConfigsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListEndpointConfigs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEndpointConfigsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListEndpointConfigsCommand = serializeAws_json1_1ListEndpointConfigsCommand;
async function serializeAws_json1_1ListEndpointsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListEndpoints";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEndpointsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListEndpointsCommand = serializeAws_json1_1ListEndpointsCommand;
async function serializeAws_json1_1ListExperimentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListExperiments";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListExperimentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListExperimentsCommand = serializeAws_json1_1ListExperimentsCommand;
async function serializeAws_json1_1ListFlowDefinitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListFlowDefinitions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFlowDefinitionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListFlowDefinitionsCommand = serializeAws_json1_1ListFlowDefinitionsCommand;
async function serializeAws_json1_1ListHumanTaskUisCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListHumanTaskUis";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHumanTaskUisRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListHumanTaskUisCommand = serializeAws_json1_1ListHumanTaskUisCommand;
async function serializeAws_json1_1ListHyperParameterTuningJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListHyperParameterTuningJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHyperParameterTuningJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListHyperParameterTuningJobsCommand = serializeAws_json1_1ListHyperParameterTuningJobsCommand;
async function serializeAws_json1_1ListLabelingJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListLabelingJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLabelingJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLabelingJobsCommand = serializeAws_json1_1ListLabelingJobsCommand;
async function serializeAws_json1_1ListLabelingJobsForWorkteamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListLabelingJobsForWorkteam";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLabelingJobsForWorkteamRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLabelingJobsForWorkteamCommand = serializeAws_json1_1ListLabelingJobsForWorkteamCommand;
async function serializeAws_json1_1ListModelPackagesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListModelPackages";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListModelPackagesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListModelPackagesCommand = serializeAws_json1_1ListModelPackagesCommand;
async function serializeAws_json1_1ListModelsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListModels";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListModelsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListModelsCommand = serializeAws_json1_1ListModelsCommand;
async function serializeAws_json1_1ListMonitoringExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListMonitoringExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMonitoringExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListMonitoringExecutionsCommand = serializeAws_json1_1ListMonitoringExecutionsCommand;
async function serializeAws_json1_1ListMonitoringSchedulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListMonitoringSchedules";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMonitoringSchedulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListMonitoringSchedulesCommand = serializeAws_json1_1ListMonitoringSchedulesCommand;
async function serializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListNotebookInstanceLifecycleConfigs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListNotebookInstanceLifecycleConfigsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand = serializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand;
async function serializeAws_json1_1ListNotebookInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListNotebookInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListNotebookInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListNotebookInstancesCommand = serializeAws_json1_1ListNotebookInstancesCommand;
async function serializeAws_json1_1ListProcessingJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListProcessingJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProcessingJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListProcessingJobsCommand = serializeAws_json1_1ListProcessingJobsCommand;
async function serializeAws_json1_1ListSubscribedWorkteamsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListSubscribedWorkteams";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSubscribedWorkteamsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSubscribedWorkteamsCommand = serializeAws_json1_1ListSubscribedWorkteamsCommand;
async function serializeAws_json1_1ListTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsCommand = serializeAws_json1_1ListTagsCommand;
async function serializeAws_json1_1ListTrainingJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListTrainingJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTrainingJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTrainingJobsCommand = serializeAws_json1_1ListTrainingJobsCommand;
async function serializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "SageMaker.ListTrainingJobsForHyperParameterTuningJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand = serializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand;
async function serializeAws_json1_1ListTransformJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListTransformJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTransformJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTransformJobsCommand = serializeAws_json1_1ListTransformJobsCommand;
async function serializeAws_json1_1ListTrialComponentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListTrialComponents";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTrialComponentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTrialComponentsCommand = serializeAws_json1_1ListTrialComponentsCommand;
async function serializeAws_json1_1ListTrialsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListTrials";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTrialsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTrialsCommand = serializeAws_json1_1ListTrialsCommand;
async function serializeAws_json1_1ListUserProfilesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListUserProfiles";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUserProfilesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListUserProfilesCommand = serializeAws_json1_1ListUserProfilesCommand;
async function serializeAws_json1_1ListWorkteamsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.ListWorkteams";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWorkteamsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListWorkteamsCommand = serializeAws_json1_1ListWorkteamsCommand;
async function serializeAws_json1_1RenderUiTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.RenderUiTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1RenderUiTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RenderUiTemplateCommand = serializeAws_json1_1RenderUiTemplateCommand;
async function serializeAws_json1_1SearchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.Search";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchCommand = serializeAws_json1_1SearchCommand;
async function serializeAws_json1_1StartMonitoringScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.StartMonitoringSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMonitoringScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartMonitoringScheduleCommand = serializeAws_json1_1StartMonitoringScheduleCommand;
async function serializeAws_json1_1StartNotebookInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.StartNotebookInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartNotebookInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartNotebookInstanceCommand = serializeAws_json1_1StartNotebookInstanceCommand;
async function serializeAws_json1_1StopAutoMLJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.StopAutoMLJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopAutoMLJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopAutoMLJobCommand = serializeAws_json1_1StopAutoMLJobCommand;
async function serializeAws_json1_1StopCompilationJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.StopCompilationJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopCompilationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopCompilationJobCommand = serializeAws_json1_1StopCompilationJobCommand;
async function serializeAws_json1_1StopHyperParameterTuningJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.StopHyperParameterTuningJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopHyperParameterTuningJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopHyperParameterTuningJobCommand = serializeAws_json1_1StopHyperParameterTuningJobCommand;
async function serializeAws_json1_1StopLabelingJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.StopLabelingJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopLabelingJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopLabelingJobCommand = serializeAws_json1_1StopLabelingJobCommand;
async function serializeAws_json1_1StopMonitoringScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.StopMonitoringSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopMonitoringScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopMonitoringScheduleCommand = serializeAws_json1_1StopMonitoringScheduleCommand;
async function serializeAws_json1_1StopNotebookInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.StopNotebookInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopNotebookInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopNotebookInstanceCommand = serializeAws_json1_1StopNotebookInstanceCommand;
async function serializeAws_json1_1StopProcessingJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.StopProcessingJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopProcessingJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopProcessingJobCommand = serializeAws_json1_1StopProcessingJobCommand;
async function serializeAws_json1_1StopTrainingJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.StopTrainingJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopTrainingJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopTrainingJobCommand = serializeAws_json1_1StopTrainingJobCommand;
async function serializeAws_json1_1StopTransformJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.StopTransformJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopTransformJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopTransformJobCommand = serializeAws_json1_1StopTransformJobCommand;
async function serializeAws_json1_1UpdateCodeRepositoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateCodeRepository";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCodeRepositoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateCodeRepositoryCommand = serializeAws_json1_1UpdateCodeRepositoryCommand;
async function serializeAws_json1_1UpdateDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDomainCommand = serializeAws_json1_1UpdateDomainCommand;
async function serializeAws_json1_1UpdateEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateEndpointInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateEndpointCommand = serializeAws_json1_1UpdateEndpointCommand;
async function serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateEndpointWeightsAndCapacities";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand = serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand;
async function serializeAws_json1_1UpdateExperimentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateExperiment";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateExperimentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateExperimentCommand = serializeAws_json1_1UpdateExperimentCommand;
async function serializeAws_json1_1UpdateMonitoringScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateMonitoringSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMonitoringScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateMonitoringScheduleCommand = serializeAws_json1_1UpdateMonitoringScheduleCommand;
async function serializeAws_json1_1UpdateNotebookInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateNotebookInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateNotebookInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateNotebookInstanceCommand = serializeAws_json1_1UpdateNotebookInstanceCommand;
async function serializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateNotebookInstanceLifecycleConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateNotebookInstanceLifecycleConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand = serializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand;
async function serializeAws_json1_1UpdateTrialCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateTrial";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTrialRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateTrialCommand = serializeAws_json1_1UpdateTrialCommand;
async function serializeAws_json1_1UpdateTrialComponentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateTrialComponent";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTrialComponentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateTrialComponentCommand = serializeAws_json1_1UpdateTrialComponentCommand;
async function serializeAws_json1_1UpdateUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateUserProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateUserProfileCommand = serializeAws_json1_1UpdateUserProfileCommand;
async function serializeAws_json1_1UpdateWorkforceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateWorkforce";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWorkforceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateWorkforceCommand = serializeAws_json1_1UpdateWorkforceCommand;
async function serializeAws_json1_1UpdateWorkteamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "SageMaker.UpdateWorkteam";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWorkteamRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateWorkteamCommand = serializeAws_json1_1UpdateWorkteamCommand;
async function deserializeAws_json1_1AddTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddTagsCommand = deserializeAws_json1_1AddTagsCommand;
async function deserializeAws_json1_1AddTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateTrialComponentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateTrialComponentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateTrialComponentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateTrialComponentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateTrialComponentCommand = deserializeAws_json1_1AssociateTrialComponentCommand;
async function deserializeAws_json1_1AssociateTrialComponentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateAlgorithmCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAlgorithmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAlgorithmOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAlgorithmOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAlgorithmCommand = deserializeAws_json1_1CreateAlgorithmCommand;
async function deserializeAws_json1_1CreateAlgorithmCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateAppCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAppResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAppResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAppCommand = deserializeAws_json1_1CreateAppCommand;
async function deserializeAws_json1_1CreateAppCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateAutoMLJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAutoMLJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAutoMLJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAutoMLJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAutoMLJobCommand = deserializeAws_json1_1CreateAutoMLJobCommand;
async function deserializeAws_json1_1CreateAutoMLJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateCodeRepositoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCodeRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCodeRepositoryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCodeRepositoryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCodeRepositoryCommand = deserializeAws_json1_1CreateCodeRepositoryCommand;
async function deserializeAws_json1_1CreateCodeRepositoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateCompilationJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCompilationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCompilationJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCompilationJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCompilationJobCommand = deserializeAws_json1_1CreateCompilationJobCommand;
async function deserializeAws_json1_1CreateCompilationJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDomainCommand = deserializeAws_json1_1CreateDomainCommand;
async function deserializeAws_json1_1CreateDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEndpointOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEndpointOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateEndpointCommand = deserializeAws_json1_1CreateEndpointCommand;
async function deserializeAws_json1_1CreateEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateEndpointConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateEndpointConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEndpointConfigOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEndpointConfigOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateEndpointConfigCommand = deserializeAws_json1_1CreateEndpointConfigCommand;
async function deserializeAws_json1_1CreateEndpointConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateExperimentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateExperimentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateExperimentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateExperimentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateExperimentCommand = deserializeAws_json1_1CreateExperimentCommand;
async function deserializeAws_json1_1CreateExperimentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateFlowDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateFlowDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFlowDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateFlowDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateFlowDefinitionCommand = deserializeAws_json1_1CreateFlowDefinitionCommand;
async function deserializeAws_json1_1CreateFlowDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateHumanTaskUiCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateHumanTaskUiCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHumanTaskUiResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateHumanTaskUiResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateHumanTaskUiCommand = deserializeAws_json1_1CreateHumanTaskUiCommand;
async function deserializeAws_json1_1CreateHumanTaskUiCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateHyperParameterTuningJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateHyperParameterTuningJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHyperParameterTuningJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateHyperParameterTuningJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateHyperParameterTuningJobCommand = deserializeAws_json1_1CreateHyperParameterTuningJobCommand;
async function deserializeAws_json1_1CreateHyperParameterTuningJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateLabelingJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLabelingJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLabelingJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLabelingJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLabelingJobCommand = deserializeAws_json1_1CreateLabelingJobCommand;
async function deserializeAws_json1_1CreateLabelingJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateModelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateModelOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateModelOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateModelCommand = deserializeAws_json1_1CreateModelCommand;
async function deserializeAws_json1_1CreateModelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateModelPackageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateModelPackageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateModelPackageOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateModelPackageOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateModelPackageCommand = deserializeAws_json1_1CreateModelPackageCommand;
async function deserializeAws_json1_1CreateModelPackageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateMonitoringScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateMonitoringScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMonitoringScheduleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateMonitoringScheduleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateMonitoringScheduleCommand = deserializeAws_json1_1CreateMonitoringScheduleCommand;
async function deserializeAws_json1_1CreateMonitoringScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateNotebookInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateNotebookInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateNotebookInstanceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateNotebookInstanceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateNotebookInstanceCommand = deserializeAws_json1_1CreateNotebookInstanceCommand;
async function deserializeAws_json1_1CreateNotebookInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateNotebookInstanceLifecycleConfigOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand = deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand;
async function deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreatePresignedDomainUrlCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePresignedDomainUrlCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePresignedDomainUrlResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePresignedDomainUrlResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePresignedDomainUrlCommand = deserializeAws_json1_1CreatePresignedDomainUrlCommand;
async function deserializeAws_json1_1CreatePresignedDomainUrlCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePresignedNotebookInstanceUrlOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePresignedNotebookInstanceUrlOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand = deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand;
async function deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateProcessingJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateProcessingJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProcessingJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateProcessingJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateProcessingJobCommand = deserializeAws_json1_1CreateProcessingJobCommand;
async function deserializeAws_json1_1CreateProcessingJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateTrainingJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTrainingJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTrainingJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTrainingJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTrainingJobCommand = deserializeAws_json1_1CreateTrainingJobCommand;
async function deserializeAws_json1_1CreateTrainingJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateTransformJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTransformJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTransformJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTransformJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTransformJobCommand = deserializeAws_json1_1CreateTransformJobCommand;
async function deserializeAws_json1_1CreateTransformJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateTrialCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTrialCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTrialResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTrialResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTrialCommand = deserializeAws_json1_1CreateTrialCommand;
async function deserializeAws_json1_1CreateTrialCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateTrialComponentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTrialComponentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTrialComponentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTrialComponentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTrialComponentCommand = deserializeAws_json1_1CreateTrialComponentCommand;
async function deserializeAws_json1_1CreateTrialComponentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserProfileResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUserProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUserProfileCommand = deserializeAws_json1_1CreateUserProfileCommand;
async function deserializeAws_json1_1CreateUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateWorkteamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateWorkteamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWorkteamResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateWorkteamResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateWorkteamCommand = deserializeAws_json1_1CreateWorkteamCommand;
async function deserializeAws_json1_1CreateWorkteamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteAlgorithmCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAlgorithmCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAlgorithmCommand = deserializeAws_json1_1DeleteAlgorithmCommand;
async function deserializeAws_json1_1DeleteAlgorithmCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteAppCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAppCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAppCommand = deserializeAws_json1_1DeleteAppCommand;
async function deserializeAws_json1_1DeleteAppCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteCodeRepositoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteCodeRepositoryCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteCodeRepositoryCommand = deserializeAws_json1_1DeleteCodeRepositoryCommand;
async function deserializeAws_json1_1DeleteCodeRepositoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDomainCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDomainCommand = deserializeAws_json1_1DeleteDomainCommand;
async function deserializeAws_json1_1DeleteDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEndpointCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEndpointCommand = deserializeAws_json1_1DeleteEndpointCommand;
async function deserializeAws_json1_1DeleteEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteEndpointConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEndpointConfigCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEndpointConfigCommand = deserializeAws_json1_1DeleteEndpointConfigCommand;
async function deserializeAws_json1_1DeleteEndpointConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteExperimentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteExperimentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteExperimentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteExperimentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteExperimentCommand = deserializeAws_json1_1DeleteExperimentCommand;
async function deserializeAws_json1_1DeleteExperimentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteFlowDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteFlowDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFlowDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteFlowDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteFlowDefinitionCommand = deserializeAws_json1_1DeleteFlowDefinitionCommand;
async function deserializeAws_json1_1DeleteFlowDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteModelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteModelCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteModelCommand = deserializeAws_json1_1DeleteModelCommand;
async function deserializeAws_json1_1DeleteModelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteModelPackageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteModelPackageCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteModelPackageCommand = deserializeAws_json1_1DeleteModelPackageCommand;
async function deserializeAws_json1_1DeleteModelPackageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteMonitoringScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteMonitoringScheduleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteMonitoringScheduleCommand = deserializeAws_json1_1DeleteMonitoringScheduleCommand;
async function deserializeAws_json1_1DeleteMonitoringScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteNotebookInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteNotebookInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteNotebookInstanceCommand = deserializeAws_json1_1DeleteNotebookInstanceCommand;
async function deserializeAws_json1_1DeleteNotebookInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand = deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand;
async function deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTagsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTagsCommand = deserializeAws_json1_1DeleteTagsCommand;
async function deserializeAws_json1_1DeleteTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteTrialCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTrialCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTrialResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTrialResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTrialCommand = deserializeAws_json1_1DeleteTrialCommand;
async function deserializeAws_json1_1DeleteTrialCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteTrialComponentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTrialComponentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTrialComponentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTrialComponentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTrialComponentCommand = deserializeAws_json1_1DeleteTrialComponentCommand;
async function deserializeAws_json1_1DeleteTrialComponentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUserProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUserProfileCommand = deserializeAws_json1_1DeleteUserProfileCommand;
async function deserializeAws_json1_1DeleteUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteWorkteamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteWorkteamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWorkteamResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteWorkteamResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteWorkteamCommand = deserializeAws_json1_1DeleteWorkteamCommand;
async function deserializeAws_json1_1DeleteWorkteamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeAlgorithmCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAlgorithmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAlgorithmOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAlgorithmOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAlgorithmCommand = deserializeAws_json1_1DescribeAlgorithmCommand;
async function deserializeAws_json1_1DescribeAlgorithmCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeAppCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAppResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAppResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAppCommand = deserializeAws_json1_1DescribeAppCommand;
async function deserializeAws_json1_1DescribeAppCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeAutoMLJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAutoMLJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAutoMLJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAutoMLJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAutoMLJobCommand = deserializeAws_json1_1DescribeAutoMLJobCommand;
async function deserializeAws_json1_1DescribeAutoMLJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeCodeRepositoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCodeRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCodeRepositoryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCodeRepositoryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCodeRepositoryCommand = deserializeAws_json1_1DescribeCodeRepositoryCommand;
async function deserializeAws_json1_1DescribeCodeRepositoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeCompilationJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCompilationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCompilationJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCompilationJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCompilationJobCommand = deserializeAws_json1_1DescribeCompilationJobCommand;
async function deserializeAws_json1_1DescribeCompilationJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDomainCommand = deserializeAws_json1_1DescribeDomainCommand;
async function deserializeAws_json1_1DescribeDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEndpointOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEndpointOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEndpointCommand = deserializeAws_json1_1DescribeEndpointCommand;
async function deserializeAws_json1_1DescribeEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeEndpointConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEndpointConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEndpointConfigOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEndpointConfigOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEndpointConfigCommand = deserializeAws_json1_1DescribeEndpointConfigCommand;
async function deserializeAws_json1_1DescribeEndpointConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeExperimentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeExperimentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeExperimentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeExperimentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeExperimentCommand = deserializeAws_json1_1DescribeExperimentCommand;
async function deserializeAws_json1_1DescribeExperimentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeFlowDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeFlowDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFlowDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeFlowDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeFlowDefinitionCommand = deserializeAws_json1_1DescribeFlowDefinitionCommand;
async function deserializeAws_json1_1DescribeFlowDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeHumanTaskUiCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeHumanTaskUiCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeHumanTaskUiResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeHumanTaskUiResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeHumanTaskUiCommand = deserializeAws_json1_1DescribeHumanTaskUiCommand;
async function deserializeAws_json1_1DescribeHumanTaskUiCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeHyperParameterTuningJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeHyperParameterTuningJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeHyperParameterTuningJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeHyperParameterTuningJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeHyperParameterTuningJobCommand = deserializeAws_json1_1DescribeHyperParameterTuningJobCommand;
async function deserializeAws_json1_1DescribeHyperParameterTuningJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeLabelingJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLabelingJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLabelingJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLabelingJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLabelingJobCommand = deserializeAws_json1_1DescribeLabelingJobCommand;
async function deserializeAws_json1_1DescribeLabelingJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeModelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeModelOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeModelOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeModelCommand = deserializeAws_json1_1DescribeModelCommand;
async function deserializeAws_json1_1DescribeModelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeModelPackageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeModelPackageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeModelPackageOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeModelPackageOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeModelPackageCommand = deserializeAws_json1_1DescribeModelPackageCommand;
async function deserializeAws_json1_1DescribeModelPackageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeMonitoringScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMonitoringScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMonitoringScheduleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMonitoringScheduleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMonitoringScheduleCommand = deserializeAws_json1_1DescribeMonitoringScheduleCommand;
async function deserializeAws_json1_1DescribeMonitoringScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeNotebookInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeNotebookInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeNotebookInstanceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeNotebookInstanceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeNotebookInstanceCommand = deserializeAws_json1_1DescribeNotebookInstanceCommand;
async function deserializeAws_json1_1DescribeNotebookInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeNotebookInstanceLifecycleConfigOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand = deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand;
async function deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeProcessingJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProcessingJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProcessingJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProcessingJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProcessingJobCommand = deserializeAws_json1_1DescribeProcessingJobCommand;
async function deserializeAws_json1_1DescribeProcessingJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeSubscribedWorkteamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSubscribedWorkteamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSubscribedWorkteamResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSubscribedWorkteamResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSubscribedWorkteamCommand = deserializeAws_json1_1DescribeSubscribedWorkteamCommand;
async function deserializeAws_json1_1DescribeSubscribedWorkteamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTrainingJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTrainingJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrainingJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTrainingJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTrainingJobCommand = deserializeAws_json1_1DescribeTrainingJobCommand;
async function deserializeAws_json1_1DescribeTrainingJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTransformJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTransformJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTransformJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTransformJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTransformJobCommand = deserializeAws_json1_1DescribeTransformJobCommand;
async function deserializeAws_json1_1DescribeTransformJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTrialCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTrialCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrialResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTrialResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTrialCommand = deserializeAws_json1_1DescribeTrialCommand;
async function deserializeAws_json1_1DescribeTrialCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTrialComponentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTrialComponentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrialComponentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTrialComponentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTrialComponentCommand = deserializeAws_json1_1DescribeTrialComponentCommand;
async function deserializeAws_json1_1DescribeTrialComponentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserProfileResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeUserProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeUserProfileCommand = deserializeAws_json1_1DescribeUserProfileCommand;
async function deserializeAws_json1_1DescribeUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeWorkforceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeWorkforceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkforceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeWorkforceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeWorkforceCommand = deserializeAws_json1_1DescribeWorkforceCommand;
async function deserializeAws_json1_1DescribeWorkforceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeWorkteamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeWorkteamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkteamResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeWorkteamResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeWorkteamCommand = deserializeAws_json1_1DescribeWorkteamCommand;
async function deserializeAws_json1_1DescribeWorkteamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateTrialComponentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateTrialComponentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateTrialComponentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateTrialComponentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateTrialComponentCommand = deserializeAws_json1_1DisassociateTrialComponentCommand;
async function deserializeAws_json1_1DisassociateTrialComponentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetSearchSuggestionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSearchSuggestionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSearchSuggestionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSearchSuggestionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSearchSuggestionsCommand = deserializeAws_json1_1GetSearchSuggestionsCommand;
async function deserializeAws_json1_1GetSearchSuggestionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAlgorithmsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAlgorithmsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAlgorithmsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAlgorithmsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAlgorithmsCommand = deserializeAws_json1_1ListAlgorithmsCommand;
async function deserializeAws_json1_1ListAlgorithmsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAppsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAppsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAppsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAppsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAppsCommand = deserializeAws_json1_1ListAppsCommand;
async function deserializeAws_json1_1ListAppsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAutoMLJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAutoMLJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAutoMLJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAutoMLJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAutoMLJobsCommand = deserializeAws_json1_1ListAutoMLJobsCommand;
async function deserializeAws_json1_1ListAutoMLJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListCandidatesForAutoMLJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCandidatesForAutoMLJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCandidatesForAutoMLJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCandidatesForAutoMLJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCandidatesForAutoMLJobCommand = deserializeAws_json1_1ListCandidatesForAutoMLJobCommand;
async function deserializeAws_json1_1ListCandidatesForAutoMLJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListCodeRepositoriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCodeRepositoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCodeRepositoriesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCodeRepositoriesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCodeRepositoriesCommand = deserializeAws_json1_1ListCodeRepositoriesCommand;
async function deserializeAws_json1_1ListCodeRepositoriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListCompilationJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCompilationJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCompilationJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCompilationJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCompilationJobsCommand = deserializeAws_json1_1ListCompilationJobsCommand;
async function deserializeAws_json1_1ListCompilationJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListDomainsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDomainsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDomainsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDomainsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDomainsCommand = deserializeAws_json1_1ListDomainsCommand;
async function deserializeAws_json1_1ListDomainsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListEndpointConfigsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListEndpointConfigsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEndpointConfigsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEndpointConfigsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListEndpointConfigsCommand = deserializeAws_json1_1ListEndpointConfigsCommand;
async function deserializeAws_json1_1ListEndpointConfigsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListEndpointsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEndpointsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEndpointsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListEndpointsCommand = deserializeAws_json1_1ListEndpointsCommand;
async function deserializeAws_json1_1ListEndpointsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListExperimentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListExperimentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListExperimentsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListExperimentsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListExperimentsCommand = deserializeAws_json1_1ListExperimentsCommand;
async function deserializeAws_json1_1ListExperimentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListFlowDefinitionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListFlowDefinitionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFlowDefinitionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListFlowDefinitionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListFlowDefinitionsCommand = deserializeAws_json1_1ListFlowDefinitionsCommand;
async function deserializeAws_json1_1ListFlowDefinitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListHumanTaskUisCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListHumanTaskUisCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHumanTaskUisResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListHumanTaskUisResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListHumanTaskUisCommand = deserializeAws_json1_1ListHumanTaskUisCommand;
async function deserializeAws_json1_1ListHumanTaskUisCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListHyperParameterTuningJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListHyperParameterTuningJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHyperParameterTuningJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListHyperParameterTuningJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListHyperParameterTuningJobsCommand = deserializeAws_json1_1ListHyperParameterTuningJobsCommand;
async function deserializeAws_json1_1ListHyperParameterTuningJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListLabelingJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListLabelingJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLabelingJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListLabelingJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListLabelingJobsCommand = deserializeAws_json1_1ListLabelingJobsCommand;
async function deserializeAws_json1_1ListLabelingJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListLabelingJobsForWorkteamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListLabelingJobsForWorkteamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLabelingJobsForWorkteamResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListLabelingJobsForWorkteamResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListLabelingJobsForWorkteamCommand = deserializeAws_json1_1ListLabelingJobsForWorkteamCommand;
async function deserializeAws_json1_1ListLabelingJobsForWorkteamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListModelPackagesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListModelPackagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListModelPackagesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListModelPackagesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListModelPackagesCommand = deserializeAws_json1_1ListModelPackagesCommand;
async function deserializeAws_json1_1ListModelPackagesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListModelsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListModelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListModelsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListModelsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListModelsCommand = deserializeAws_json1_1ListModelsCommand;
async function deserializeAws_json1_1ListModelsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListMonitoringExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListMonitoringExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMonitoringExecutionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListMonitoringExecutionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListMonitoringExecutionsCommand = deserializeAws_json1_1ListMonitoringExecutionsCommand;
async function deserializeAws_json1_1ListMonitoringExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListMonitoringSchedulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListMonitoringSchedulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMonitoringSchedulesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListMonitoringSchedulesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListMonitoringSchedulesCommand = deserializeAws_json1_1ListMonitoringSchedulesCommand;
async function deserializeAws_json1_1ListMonitoringSchedulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListNotebookInstanceLifecycleConfigsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand = deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand;
async function deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListNotebookInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListNotebookInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListNotebookInstancesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListNotebookInstancesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListNotebookInstancesCommand = deserializeAws_json1_1ListNotebookInstancesCommand;
async function deserializeAws_json1_1ListNotebookInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListProcessingJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListProcessingJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProcessingJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListProcessingJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListProcessingJobsCommand = deserializeAws_json1_1ListProcessingJobsCommand;
async function deserializeAws_json1_1ListProcessingJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListSubscribedWorkteamsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSubscribedWorkteamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSubscribedWorkteamsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSubscribedWorkteamsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSubscribedWorkteamsCommand = deserializeAws_json1_1ListSubscribedWorkteamsCommand;
async function deserializeAws_json1_1ListSubscribedWorkteamsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsCommand = deserializeAws_json1_1ListTagsCommand;
async function deserializeAws_json1_1ListTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTrainingJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTrainingJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTrainingJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTrainingJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTrainingJobsCommand = deserializeAws_json1_1ListTrainingJobsCommand;
async function deserializeAws_json1_1ListTrainingJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTrainingJobsForHyperParameterTuningJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand = deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand;
async function deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTransformJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTransformJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTransformJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTransformJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTransformJobsCommand = deserializeAws_json1_1ListTransformJobsCommand;
async function deserializeAws_json1_1ListTransformJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTrialComponentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTrialComponentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTrialComponentsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTrialComponentsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTrialComponentsCommand = deserializeAws_json1_1ListTrialComponentsCommand;
async function deserializeAws_json1_1ListTrialComponentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTrialsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTrialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTrialsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTrialsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTrialsCommand = deserializeAws_json1_1ListTrialsCommand;
async function deserializeAws_json1_1ListTrialsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListUserProfilesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListUserProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUserProfilesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUserProfilesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListUserProfilesCommand = deserializeAws_json1_1ListUserProfilesCommand;
async function deserializeAws_json1_1ListUserProfilesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListWorkteamsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListWorkteamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListWorkteamsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListWorkteamsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListWorkteamsCommand = deserializeAws_json1_1ListWorkteamsCommand;
async function deserializeAws_json1_1ListWorkteamsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RenderUiTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RenderUiTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RenderUiTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RenderUiTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RenderUiTemplateCommand = deserializeAws_json1_1RenderUiTemplateCommand;
async function deserializeAws_json1_1RenderUiTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchCommand = deserializeAws_json1_1SearchCommand;
async function deserializeAws_json1_1SearchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartMonitoringScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartMonitoringScheduleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartMonitoringScheduleCommand = deserializeAws_json1_1StartMonitoringScheduleCommand;
async function deserializeAws_json1_1StartMonitoringScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartNotebookInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartNotebookInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartNotebookInstanceCommand = deserializeAws_json1_1StartNotebookInstanceCommand;
async function deserializeAws_json1_1StartNotebookInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopAutoMLJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopAutoMLJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopAutoMLJobCommand = deserializeAws_json1_1StopAutoMLJobCommand;
async function deserializeAws_json1_1StopAutoMLJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopCompilationJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopCompilationJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopCompilationJobCommand = deserializeAws_json1_1StopCompilationJobCommand;
async function deserializeAws_json1_1StopCompilationJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopHyperParameterTuningJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopHyperParameterTuningJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopHyperParameterTuningJobCommand = deserializeAws_json1_1StopHyperParameterTuningJobCommand;
async function deserializeAws_json1_1StopHyperParameterTuningJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopLabelingJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopLabelingJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopLabelingJobCommand = deserializeAws_json1_1StopLabelingJobCommand;
async function deserializeAws_json1_1StopLabelingJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopMonitoringScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopMonitoringScheduleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopMonitoringScheduleCommand = deserializeAws_json1_1StopMonitoringScheduleCommand;
async function deserializeAws_json1_1StopMonitoringScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopNotebookInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopNotebookInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopNotebookInstanceCommand = deserializeAws_json1_1StopNotebookInstanceCommand;
async function deserializeAws_json1_1StopNotebookInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopProcessingJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopProcessingJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopProcessingJobCommand = deserializeAws_json1_1StopProcessingJobCommand;
async function deserializeAws_json1_1StopProcessingJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopTrainingJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopTrainingJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopTrainingJobCommand = deserializeAws_json1_1StopTrainingJobCommand;
async function deserializeAws_json1_1StopTrainingJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopTransformJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopTransformJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopTransformJobCommand = deserializeAws_json1_1StopTransformJobCommand;
async function deserializeAws_json1_1StopTransformJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateCodeRepositoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateCodeRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCodeRepositoryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateCodeRepositoryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateCodeRepositoryCommand = deserializeAws_json1_1UpdateCodeRepositoryCommand;
async function deserializeAws_json1_1UpdateCodeRepositoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDomainResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDomainCommand = deserializeAws_json1_1UpdateDomainCommand;
async function deserializeAws_json1_1UpdateDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateEndpointOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateEndpointOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateEndpointCommand = deserializeAws_json1_1UpdateEndpointCommand;
async function deserializeAws_json1_1UpdateEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateEndpointWeightsAndCapacitiesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand = deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand;
async function deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateExperimentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateExperimentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateExperimentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateExperimentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateExperimentCommand = deserializeAws_json1_1UpdateExperimentCommand;
async function deserializeAws_json1_1UpdateExperimentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.sagemaker.api#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateMonitoringScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateMonitoringScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMonitoringScheduleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateMonitoringScheduleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateMonitoringScheduleCommand = deserializeAws_json1_1UpdateMonitoringScheduleCommand;
async function deserializeAws_json1_1UpdateMonitoringScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateNotebookInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateNotebookInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateNotebookInstanceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateNotebookInstanceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateNotebookInstanceCommand = deserializeAws_json1_1UpdateNotebookInstanceCommand;
async function deserializeAws_json1_1UpdateNotebookInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateNotebookInstanceLifecycleConfigOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand = deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand;
async function deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateTrialCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateTrialCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTrialResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTrialResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateTrialCommand = deserializeAws_json1_1UpdateTrialCommand;
async function deserializeAws_json1_1UpdateTrialCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.sagemaker.api#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateTrialComponentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateTrialComponentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTrialComponentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTrialComponentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateTrialComponentCommand = deserializeAws_json1_1UpdateTrialComponentCommand;
async function deserializeAws_json1_1UpdateTrialComponentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.sagemaker.api#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserProfileResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateUserProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateUserProfileCommand = deserializeAws_json1_1UpdateUserProfileCommand;
async function deserializeAws_json1_1UpdateUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUse":
        case "com.amazonaws.sagemaker.api#ResourceInUse":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.sagemaker.api#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateWorkforceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateWorkforceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateWorkforceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateWorkforceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateWorkforceCommand = deserializeAws_json1_1UpdateWorkforceCommand;
async function deserializeAws_json1_1UpdateWorkforceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateWorkteamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateWorkteamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateWorkteamResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateWorkteamResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateWorkteamCommand = deserializeAws_json1_1UpdateWorkteamCommand;
async function deserializeAws_json1_1UpdateWorkteamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceLimitExceeded":
        case "com.amazonaws.sagemaker.api#ResourceLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = Object.assign({ name: "ConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUse(body, context);
    const contents = Object.assign({ name: "ResourceInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceLimitExceeded(body, context);
    const contents = Object.assign({ name: "ResourceLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFound(body, context);
    const contents = Object.assign({ name: "ResourceNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddTagsInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AdditionalCodeRepositoryNamesOrUrls = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AlgorithmSpecification = (input, context) => {
    const bodyParams = {};
    if (input.AlgorithmName !== undefined) {
        bodyParams["AlgorithmName"] = input.AlgorithmName;
    }
    if (input.EnableSageMakerMetricsTimeSeries !== undefined) {
        bodyParams["EnableSageMakerMetricsTimeSeries"] =
            input.EnableSageMakerMetricsTimeSeries;
    }
    if (input.MetricDefinitions !== undefined) {
        bodyParams["MetricDefinitions"] = serializeAws_json1_1MetricDefinitionList(input.MetricDefinitions, context);
    }
    if (input.TrainingImage !== undefined) {
        bodyParams["TrainingImage"] = input.TrainingImage;
    }
    if (input.TrainingInputMode !== undefined) {
        bodyParams["TrainingInputMode"] = input.TrainingInputMode;
    }
    return bodyParams;
};
const serializeAws_json1_1AlgorithmValidationProfile = (input, context) => {
    const bodyParams = {};
    if (input.ProfileName !== undefined) {
        bodyParams["ProfileName"] = input.ProfileName;
    }
    if (input.TrainingJobDefinition !== undefined) {
        bodyParams["TrainingJobDefinition"] = serializeAws_json1_1TrainingJobDefinition(input.TrainingJobDefinition, context);
    }
    if (input.TransformJobDefinition !== undefined) {
        bodyParams["TransformJobDefinition"] = serializeAws_json1_1TransformJobDefinition(input.TransformJobDefinition, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AlgorithmValidationProfiles = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AlgorithmValidationProfile(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AlgorithmValidationSpecification = (input, context) => {
    const bodyParams = {};
    if (input.ValidationProfiles !== undefined) {
        bodyParams["ValidationProfiles"] = serializeAws_json1_1AlgorithmValidationProfiles(input.ValidationProfiles, context);
    }
    if (input.ValidationRole !== undefined) {
        bodyParams["ValidationRole"] = input.ValidationRole;
    }
    return bodyParams;
};
const serializeAws_json1_1AnnotationConsolidationConfig = (input, context) => {
    const bodyParams = {};
    if (input.AnnotationConsolidationLambdaArn !== undefined) {
        bodyParams["AnnotationConsolidationLambdaArn"] =
            input.AnnotationConsolidationLambdaArn;
    }
    return bodyParams;
};
const serializeAws_json1_1AppSpecification = (input, context) => {
    const bodyParams = {};
    if (input.ContainerArguments !== undefined) {
        bodyParams["ContainerArguments"] = serializeAws_json1_1ContainerArguments(input.ContainerArguments, context);
    }
    if (input.ContainerEntrypoint !== undefined) {
        bodyParams["ContainerEntrypoint"] = serializeAws_json1_1ContainerEntrypoint(input.ContainerEntrypoint, context);
    }
    if (input.ImageUri !== undefined) {
        bodyParams["ImageUri"] = input.ImageUri;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateTrialComponentRequest = (input, context) => {
    const bodyParams = {};
    if (input.TrialComponentName !== undefined) {
        bodyParams["TrialComponentName"] = input.TrialComponentName;
    }
    if (input.TrialName !== undefined) {
        bodyParams["TrialName"] = input.TrialName;
    }
    return bodyParams;
};
const serializeAws_json1_1AttributeNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AutoMLChannel = (input, context) => {
    const bodyParams = {};
    if (input.CompressionType !== undefined) {
        bodyParams["CompressionType"] = input.CompressionType;
    }
    if (input.DataSource !== undefined) {
        bodyParams["DataSource"] = serializeAws_json1_1AutoMLDataSource(input.DataSource, context);
    }
    if (input.TargetAttributeName !== undefined) {
        bodyParams["TargetAttributeName"] = input.TargetAttributeName;
    }
    return bodyParams;
};
const serializeAws_json1_1AutoMLDataSource = (input, context) => {
    const bodyParams = {};
    if (input.S3DataSource !== undefined) {
        bodyParams["S3DataSource"] = serializeAws_json1_1AutoMLS3DataSource(input.S3DataSource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AutoMLInputDataConfig = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AutoMLChannel(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AutoMLJobCompletionCriteria = (input, context) => {
    const bodyParams = {};
    if (input.MaxAutoMLJobRuntimeInSeconds !== undefined) {
        bodyParams["MaxAutoMLJobRuntimeInSeconds"] =
            input.MaxAutoMLJobRuntimeInSeconds;
    }
    if (input.MaxCandidates !== undefined) {
        bodyParams["MaxCandidates"] = input.MaxCandidates;
    }
    if (input.MaxRuntimePerTrainingJobInSeconds !== undefined) {
        bodyParams["MaxRuntimePerTrainingJobInSeconds"] =
            input.MaxRuntimePerTrainingJobInSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1AutoMLJobConfig = (input, context) => {
    const bodyParams = {};
    if (input.CompletionCriteria !== undefined) {
        bodyParams["CompletionCriteria"] = serializeAws_json1_1AutoMLJobCompletionCriteria(input.CompletionCriteria, context);
    }
    if (input.SecurityConfig !== undefined) {
        bodyParams["SecurityConfig"] = serializeAws_json1_1AutoMLSecurityConfig(input.SecurityConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AutoMLJobObjective = (input, context) => {
    const bodyParams = {};
    if (input.MetricName !== undefined) {
        bodyParams["MetricName"] = input.MetricName;
    }
    return bodyParams;
};
const serializeAws_json1_1AutoMLOutputDataConfig = (input, context) => {
    const bodyParams = {};
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.S3OutputPath !== undefined) {
        bodyParams["S3OutputPath"] = input.S3OutputPath;
    }
    return bodyParams;
};
const serializeAws_json1_1AutoMLS3DataSource = (input, context) => {
    const bodyParams = {};
    if (input.S3DataType !== undefined) {
        bodyParams["S3DataType"] = input.S3DataType;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1AutoMLSecurityConfig = (input, context) => {
    const bodyParams = {};
    if (input.EnableInterContainerTrafficEncryption !== undefined) {
        bodyParams["EnableInterContainerTrafficEncryption"] =
            input.EnableInterContainerTrafficEncryption;
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CaptureContentTypeHeader = (input, context) => {
    const bodyParams = {};
    if (input.CsvContentTypes !== undefined) {
        bodyParams["CsvContentTypes"] = serializeAws_json1_1CsvContentTypes(input.CsvContentTypes, context);
    }
    if (input.JsonContentTypes !== undefined) {
        bodyParams["JsonContentTypes"] = serializeAws_json1_1JsonContentTypes(input.JsonContentTypes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CaptureOption = (input, context) => {
    const bodyParams = {};
    if (input.CaptureMode !== undefined) {
        bodyParams["CaptureMode"] = input.CaptureMode;
    }
    return bodyParams;
};
const serializeAws_json1_1CaptureOptionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CaptureOption(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CategoricalParameterRange = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1ParameterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CategoricalParameterRangeSpecification = (input, context) => {
    const bodyParams = {};
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1ParameterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CategoricalParameterRanges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CategoricalParameterRange(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Channel = (input, context) => {
    const bodyParams = {};
    if (input.ChannelName !== undefined) {
        bodyParams["ChannelName"] = input.ChannelName;
    }
    if (input.CompressionType !== undefined) {
        bodyParams["CompressionType"] = input.CompressionType;
    }
    if (input.ContentType !== undefined) {
        bodyParams["ContentType"] = input.ContentType;
    }
    if (input.DataSource !== undefined) {
        bodyParams["DataSource"] = serializeAws_json1_1DataSource(input.DataSource, context);
    }
    if (input.InputMode !== undefined) {
        bodyParams["InputMode"] = input.InputMode;
    }
    if (input.RecordWrapperType !== undefined) {
        bodyParams["RecordWrapperType"] = input.RecordWrapperType;
    }
    if (input.ShuffleConfig !== undefined) {
        bodyParams["ShuffleConfig"] = serializeAws_json1_1ShuffleConfig(input.ShuffleConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ChannelSpecification = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.IsRequired !== undefined) {
        bodyParams["IsRequired"] = input.IsRequired;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.SupportedCompressionTypes !== undefined) {
        bodyParams["SupportedCompressionTypes"] = serializeAws_json1_1CompressionTypes(input.SupportedCompressionTypes, context);
    }
    if (input.SupportedContentTypes !== undefined) {
        bodyParams["SupportedContentTypes"] = serializeAws_json1_1ContentTypes(input.SupportedContentTypes, context);
    }
    if (input.SupportedInputModes !== undefined) {
        bodyParams["SupportedInputModes"] = serializeAws_json1_1InputModes(input.SupportedInputModes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ChannelSpecifications = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ChannelSpecification(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CheckpointConfig = (input, context) => {
    const bodyParams = {};
    if (input.LocalPath !== undefined) {
        bodyParams["LocalPath"] = input.LocalPath;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1Cidrs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CognitoMemberDefinition = (input, context) => {
    const bodyParams = {};
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.UserGroup !== undefined) {
        bodyParams["UserGroup"] = input.UserGroup;
    }
    if (input.UserPool !== undefined) {
        bodyParams["UserPool"] = input.UserPool;
    }
    return bodyParams;
};
const serializeAws_json1_1CollectionConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CollectionName !== undefined) {
        bodyParams["CollectionName"] = input.CollectionName;
    }
    if (input.CollectionParameters !== undefined) {
        bodyParams["CollectionParameters"] = serializeAws_json1_1CollectionParameters(input.CollectionParameters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CollectionConfigurations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CollectionConfiguration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CollectionParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1CompressionTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ContainerArguments = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ContainerDefinition = (input, context) => {
    const bodyParams = {};
    if (input.ContainerHostname !== undefined) {
        bodyParams["ContainerHostname"] = input.ContainerHostname;
    }
    if (input.Environment !== undefined) {
        bodyParams["Environment"] = serializeAws_json1_1EnvironmentMap(input.Environment, context);
    }
    if (input.Image !== undefined) {
        bodyParams["Image"] = input.Image;
    }
    if (input.Mode !== undefined) {
        bodyParams["Mode"] = input.Mode;
    }
    if (input.ModelDataUrl !== undefined) {
        bodyParams["ModelDataUrl"] = input.ModelDataUrl;
    }
    if (input.ModelPackageName !== undefined) {
        bodyParams["ModelPackageName"] = input.ModelPackageName;
    }
    return bodyParams;
};
const serializeAws_json1_1ContainerDefinitionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ContainerDefinition(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ContainerEntrypoint = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ContentClassifiers = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ContentTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ContinuousParameterRange = (input, context) => {
    const bodyParams = {};
    if (input.MaxValue !== undefined) {
        bodyParams["MaxValue"] = input.MaxValue;
    }
    if (input.MinValue !== undefined) {
        bodyParams["MinValue"] = input.MinValue;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ScalingType !== undefined) {
        bodyParams["ScalingType"] = input.ScalingType;
    }
    return bodyParams;
};
const serializeAws_json1_1ContinuousParameterRangeSpecification = (input, context) => {
    const bodyParams = {};
    if (input.MaxValue !== undefined) {
        bodyParams["MaxValue"] = input.MaxValue;
    }
    if (input.MinValue !== undefined) {
        bodyParams["MinValue"] = input.MinValue;
    }
    return bodyParams;
};
const serializeAws_json1_1ContinuousParameterRanges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ContinuousParameterRange(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CreateAlgorithmInput = (input, context) => {
    const bodyParams = {};
    if (input.AlgorithmDescription !== undefined) {
        bodyParams["AlgorithmDescription"] = input.AlgorithmDescription;
    }
    if (input.AlgorithmName !== undefined) {
        bodyParams["AlgorithmName"] = input.AlgorithmName;
    }
    if (input.CertifyForMarketplace !== undefined) {
        bodyParams["CertifyForMarketplace"] = input.CertifyForMarketplace;
    }
    if (input.InferenceSpecification !== undefined) {
        bodyParams["InferenceSpecification"] = serializeAws_json1_1InferenceSpecification(input.InferenceSpecification, context);
    }
    if (input.TrainingSpecification !== undefined) {
        bodyParams["TrainingSpecification"] = serializeAws_json1_1TrainingSpecification(input.TrainingSpecification, context);
    }
    if (input.ValidationSpecification !== undefined) {
        bodyParams["ValidationSpecification"] = serializeAws_json1_1AlgorithmValidationSpecification(input.ValidationSpecification, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAppRequest = (input, context) => {
    const bodyParams = {};
    if (input.AppName !== undefined) {
        bodyParams["AppName"] = input.AppName;
    }
    if (input.AppType !== undefined) {
        bodyParams["AppType"] = input.AppType;
    }
    if (input.DomainId !== undefined) {
        bodyParams["DomainId"] = input.DomainId;
    }
    if (input.ResourceSpec !== undefined) {
        bodyParams["ResourceSpec"] = serializeAws_json1_1ResourceSpec(input.ResourceSpec, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.UserProfileName !== undefined) {
        bodyParams["UserProfileName"] = input.UserProfileName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAutoMLJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.AutoMLJobConfig !== undefined) {
        bodyParams["AutoMLJobConfig"] = serializeAws_json1_1AutoMLJobConfig(input.AutoMLJobConfig, context);
    }
    if (input.AutoMLJobName !== undefined) {
        bodyParams["AutoMLJobName"] = input.AutoMLJobName;
    }
    if (input.AutoMLJobObjective !== undefined) {
        bodyParams["AutoMLJobObjective"] = serializeAws_json1_1AutoMLJobObjective(input.AutoMLJobObjective, context);
    }
    if (input.GenerateCandidateDefinitionsOnly !== undefined) {
        bodyParams["GenerateCandidateDefinitionsOnly"] =
            input.GenerateCandidateDefinitionsOnly;
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1AutoMLInputDataConfig(input.InputDataConfig, context);
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1AutoMLOutputDataConfig(input.OutputDataConfig, context);
    }
    if (input.ProblemType !== undefined) {
        bodyParams["ProblemType"] = input.ProblemType;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCodeRepositoryInput = (input, context) => {
    const bodyParams = {};
    if (input.CodeRepositoryName !== undefined) {
        bodyParams["CodeRepositoryName"] = input.CodeRepositoryName;
    }
    if (input.GitConfig !== undefined) {
        bodyParams["GitConfig"] = serializeAws_json1_1GitConfig(input.GitConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCompilationJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.CompilationJobName !== undefined) {
        bodyParams["CompilationJobName"] = input.CompilationJobName;
    }
    if (input.InputConfig !== undefined) {
        bodyParams["InputConfig"] = serializeAws_json1_1InputConfig(input.InputConfig, context);
    }
    if (input.OutputConfig !== undefined) {
        bodyParams["OutputConfig"] = serializeAws_json1_1OutputConfig(input.OutputConfig, context);
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.StoppingCondition !== undefined) {
        bodyParams["StoppingCondition"] = serializeAws_json1_1StoppingCondition(input.StoppingCondition, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuthMode !== undefined) {
        bodyParams["AuthMode"] = input.AuthMode;
    }
    if (input.DefaultUserSettings !== undefined) {
        bodyParams["DefaultUserSettings"] = serializeAws_json1_1UserSettings(input.DefaultUserSettings, context);
    }
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.HomeEfsFileSystemKmsKeyId !== undefined) {
        bodyParams["HomeEfsFileSystemKmsKeyId"] = input.HomeEfsFileSystemKmsKeyId;
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1Subnets(input.SubnetIds, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.VpcId !== undefined) {
        bodyParams["VpcId"] = input.VpcId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateEndpointConfigInput = (input, context) => {
    const bodyParams = {};
    if (input.DataCaptureConfig !== undefined) {
        bodyParams["DataCaptureConfig"] = serializeAws_json1_1DataCaptureConfig(input.DataCaptureConfig, context);
    }
    if (input.EndpointConfigName !== undefined) {
        bodyParams["EndpointConfigName"] = input.EndpointConfigName;
    }
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.ProductionVariants !== undefined) {
        bodyParams["ProductionVariants"] = serializeAws_json1_1ProductionVariantList(input.ProductionVariants, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateEndpointInput = (input, context) => {
    const bodyParams = {};
    if (input.EndpointConfigName !== undefined) {
        bodyParams["EndpointConfigName"] = input.EndpointConfigName;
    }
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateExperimentRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.ExperimentName !== undefined) {
        bodyParams["ExperimentName"] = input.ExperimentName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateFlowDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.FlowDefinitionName !== undefined) {
        bodyParams["FlowDefinitionName"] = input.FlowDefinitionName;
    }
    if (input.HumanLoopActivationConfig !== undefined) {
        bodyParams["HumanLoopActivationConfig"] = serializeAws_json1_1HumanLoopActivationConfig(input.HumanLoopActivationConfig, context);
    }
    if (input.HumanLoopConfig !== undefined) {
        bodyParams["HumanLoopConfig"] = serializeAws_json1_1HumanLoopConfig(input.HumanLoopConfig, context);
    }
    if (input.OutputConfig !== undefined) {
        bodyParams["OutputConfig"] = serializeAws_json1_1FlowDefinitionOutputConfig(input.OutputConfig, context);
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateHumanTaskUiRequest = (input, context) => {
    const bodyParams = {};
    if (input.HumanTaskUiName !== undefined) {
        bodyParams["HumanTaskUiName"] = input.HumanTaskUiName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.UiTemplate !== undefined) {
        bodyParams["UiTemplate"] = serializeAws_json1_1UiTemplate(input.UiTemplate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateHyperParameterTuningJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.HyperParameterTuningJobConfig !== undefined) {
        bodyParams["HyperParameterTuningJobConfig"] = serializeAws_json1_1HyperParameterTuningJobConfig(input.HyperParameterTuningJobConfig, context);
    }
    if (input.HyperParameterTuningJobName !== undefined) {
        bodyParams["HyperParameterTuningJobName"] =
            input.HyperParameterTuningJobName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.TrainingJobDefinition !== undefined) {
        bodyParams["TrainingJobDefinition"] = serializeAws_json1_1HyperParameterTrainingJobDefinition(input.TrainingJobDefinition, context);
    }
    if (input.TrainingJobDefinitions !== undefined) {
        bodyParams["TrainingJobDefinitions"] = serializeAws_json1_1HyperParameterTrainingJobDefinitions(input.TrainingJobDefinitions, context);
    }
    if (input.WarmStartConfig !== undefined) {
        bodyParams["WarmStartConfig"] = serializeAws_json1_1HyperParameterTuningJobWarmStartConfig(input.WarmStartConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLabelingJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.HumanTaskConfig !== undefined) {
        bodyParams["HumanTaskConfig"] = serializeAws_json1_1HumanTaskConfig(input.HumanTaskConfig, context);
    }
    if (input.InputConfig !== undefined) {
        bodyParams["InputConfig"] = serializeAws_json1_1LabelingJobInputConfig(input.InputConfig, context);
    }
    if (input.LabelAttributeName !== undefined) {
        bodyParams["LabelAttributeName"] = input.LabelAttributeName;
    }
    if (input.LabelCategoryConfigS3Uri !== undefined) {
        bodyParams["LabelCategoryConfigS3Uri"] = input.LabelCategoryConfigS3Uri;
    }
    if (input.LabelingJobAlgorithmsConfig !== undefined) {
        bodyParams["LabelingJobAlgorithmsConfig"] = serializeAws_json1_1LabelingJobAlgorithmsConfig(input.LabelingJobAlgorithmsConfig, context);
    }
    if (input.LabelingJobName !== undefined) {
        bodyParams["LabelingJobName"] = input.LabelingJobName;
    }
    if (input.OutputConfig !== undefined) {
        bodyParams["OutputConfig"] = serializeAws_json1_1LabelingJobOutputConfig(input.OutputConfig, context);
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.StoppingConditions !== undefined) {
        bodyParams["StoppingConditions"] = serializeAws_json1_1LabelingJobStoppingConditions(input.StoppingConditions, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateModelInput = (input, context) => {
    const bodyParams = {};
    if (input.Containers !== undefined) {
        bodyParams["Containers"] = serializeAws_json1_1ContainerDefinitionList(input.Containers, context);
    }
    if (input.EnableNetworkIsolation !== undefined) {
        bodyParams["EnableNetworkIsolation"] = input.EnableNetworkIsolation;
    }
    if (input.ExecutionRoleArn !== undefined) {
        bodyParams["ExecutionRoleArn"] = input.ExecutionRoleArn;
    }
    if (input.ModelName !== undefined) {
        bodyParams["ModelName"] = input.ModelName;
    }
    if (input.PrimaryContainer !== undefined) {
        bodyParams["PrimaryContainer"] = serializeAws_json1_1ContainerDefinition(input.PrimaryContainer, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateModelPackageInput = (input, context) => {
    const bodyParams = {};
    if (input.CertifyForMarketplace !== undefined) {
        bodyParams["CertifyForMarketplace"] = input.CertifyForMarketplace;
    }
    if (input.InferenceSpecification !== undefined) {
        bodyParams["InferenceSpecification"] = serializeAws_json1_1InferenceSpecification(input.InferenceSpecification, context);
    }
    if (input.ModelPackageDescription !== undefined) {
        bodyParams["ModelPackageDescription"] = input.ModelPackageDescription;
    }
    if (input.ModelPackageName !== undefined) {
        bodyParams["ModelPackageName"] = input.ModelPackageName;
    }
    if (input.SourceAlgorithmSpecification !== undefined) {
        bodyParams["SourceAlgorithmSpecification"] = serializeAws_json1_1SourceAlgorithmSpecification(input.SourceAlgorithmSpecification, context);
    }
    if (input.ValidationSpecification !== undefined) {
        bodyParams["ValidationSpecification"] = serializeAws_json1_1ModelPackageValidationSpecification(input.ValidationSpecification, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateMonitoringScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.MonitoringScheduleConfig !== undefined) {
        bodyParams["MonitoringScheduleConfig"] = serializeAws_json1_1MonitoringScheduleConfig(input.MonitoringScheduleConfig, context);
    }
    if (input.MonitoringScheduleName !== undefined) {
        bodyParams["MonitoringScheduleName"] = input.MonitoringScheduleName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateNotebookInstanceInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceleratorTypes !== undefined) {
        bodyParams["AcceleratorTypes"] = serializeAws_json1_1NotebookInstanceAcceleratorTypes(input.AcceleratorTypes, context);
    }
    if (input.AdditionalCodeRepositories !== undefined) {
        bodyParams["AdditionalCodeRepositories"] = serializeAws_json1_1AdditionalCodeRepositoryNamesOrUrls(input.AdditionalCodeRepositories, context);
    }
    if (input.DefaultCodeRepository !== undefined) {
        bodyParams["DefaultCodeRepository"] = input.DefaultCodeRepository;
    }
    if (input.DirectInternetAccess !== undefined) {
        bodyParams["DirectInternetAccess"] = input.DirectInternetAccess;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.LifecycleConfigName !== undefined) {
        bodyParams["LifecycleConfigName"] = input.LifecycleConfigName;
    }
    if (input.NotebookInstanceName !== undefined) {
        bodyParams["NotebookInstanceName"] = input.NotebookInstanceName;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.RootAccess !== undefined) {
        bodyParams["RootAccess"] = input.RootAccess;
    }
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context);
    }
    if (input.SubnetId !== undefined) {
        bodyParams["SubnetId"] = input.SubnetId;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.VolumeSizeInGB !== undefined) {
        bodyParams["VolumeSizeInGB"] = input.VolumeSizeInGB;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateNotebookInstanceLifecycleConfigInput = (input, context) => {
    const bodyParams = {};
    if (input.NotebookInstanceLifecycleConfigName !== undefined) {
        bodyParams["NotebookInstanceLifecycleConfigName"] =
            input.NotebookInstanceLifecycleConfigName;
    }
    if (input.OnCreate !== undefined) {
        bodyParams["OnCreate"] = serializeAws_json1_1NotebookInstanceLifecycleConfigList(input.OnCreate, context);
    }
    if (input.OnStart !== undefined) {
        bodyParams["OnStart"] = serializeAws_json1_1NotebookInstanceLifecycleConfigList(input.OnStart, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePresignedDomainUrlRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainId !== undefined) {
        bodyParams["DomainId"] = input.DomainId;
    }
    if (input.SessionExpirationDurationInSeconds !== undefined) {
        bodyParams["SessionExpirationDurationInSeconds"] =
            input.SessionExpirationDurationInSeconds;
    }
    if (input.UserProfileName !== undefined) {
        bodyParams["UserProfileName"] = input.UserProfileName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePresignedNotebookInstanceUrlInput = (input, context) => {
    const bodyParams = {};
    if (input.NotebookInstanceName !== undefined) {
        bodyParams["NotebookInstanceName"] = input.NotebookInstanceName;
    }
    if (input.SessionExpirationDurationInSeconds !== undefined) {
        bodyParams["SessionExpirationDurationInSeconds"] =
            input.SessionExpirationDurationInSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateProcessingJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.AppSpecification !== undefined) {
        bodyParams["AppSpecification"] = serializeAws_json1_1AppSpecification(input.AppSpecification, context);
    }
    if (input.Environment !== undefined) {
        bodyParams["Environment"] = serializeAws_json1_1ProcessingEnvironmentMap(input.Environment, context);
    }
    if (input.ExperimentConfig !== undefined) {
        bodyParams["ExperimentConfig"] = serializeAws_json1_1ExperimentConfig(input.ExperimentConfig, context);
    }
    if (input.NetworkConfig !== undefined) {
        bodyParams["NetworkConfig"] = serializeAws_json1_1NetworkConfig(input.NetworkConfig, context);
    }
    if (input.ProcessingInputs !== undefined) {
        bodyParams["ProcessingInputs"] = serializeAws_json1_1ProcessingInputs(input.ProcessingInputs, context);
    }
    if (input.ProcessingJobName !== undefined) {
        bodyParams["ProcessingJobName"] = input.ProcessingJobName;
    }
    if (input.ProcessingOutputConfig !== undefined) {
        bodyParams["ProcessingOutputConfig"] = serializeAws_json1_1ProcessingOutputConfig(input.ProcessingOutputConfig, context);
    }
    if (input.ProcessingResources !== undefined) {
        bodyParams["ProcessingResources"] = serializeAws_json1_1ProcessingResources(input.ProcessingResources, context);
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.StoppingCondition !== undefined) {
        bodyParams["StoppingCondition"] = serializeAws_json1_1ProcessingStoppingCondition(input.StoppingCondition, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTrainingJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.AlgorithmSpecification !== undefined) {
        bodyParams["AlgorithmSpecification"] = serializeAws_json1_1AlgorithmSpecification(input.AlgorithmSpecification, context);
    }
    if (input.CheckpointConfig !== undefined) {
        bodyParams["CheckpointConfig"] = serializeAws_json1_1CheckpointConfig(input.CheckpointConfig, context);
    }
    if (input.DebugHookConfig !== undefined) {
        bodyParams["DebugHookConfig"] = serializeAws_json1_1DebugHookConfig(input.DebugHookConfig, context);
    }
    if (input.DebugRuleConfigurations !== undefined) {
        bodyParams["DebugRuleConfigurations"] = serializeAws_json1_1DebugRuleConfigurations(input.DebugRuleConfigurations, context);
    }
    if (input.EnableInterContainerTrafficEncryption !== undefined) {
        bodyParams["EnableInterContainerTrafficEncryption"] =
            input.EnableInterContainerTrafficEncryption;
    }
    if (input.EnableManagedSpotTraining !== undefined) {
        bodyParams["EnableManagedSpotTraining"] = input.EnableManagedSpotTraining;
    }
    if (input.EnableNetworkIsolation !== undefined) {
        bodyParams["EnableNetworkIsolation"] = input.EnableNetworkIsolation;
    }
    if (input.ExperimentConfig !== undefined) {
        bodyParams["ExperimentConfig"] = serializeAws_json1_1ExperimentConfig(input.ExperimentConfig, context);
    }
    if (input.HyperParameters !== undefined) {
        bodyParams["HyperParameters"] = serializeAws_json1_1HyperParameters(input.HyperParameters, context);
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(input.InputDataConfig, context);
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context);
    }
    if (input.ResourceConfig !== undefined) {
        bodyParams["ResourceConfig"] = serializeAws_json1_1ResourceConfig(input.ResourceConfig, context);
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.StoppingCondition !== undefined) {
        bodyParams["StoppingCondition"] = serializeAws_json1_1StoppingCondition(input.StoppingCondition, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.TensorBoardOutputConfig !== undefined) {
        bodyParams["TensorBoardOutputConfig"] = serializeAws_json1_1TensorBoardOutputConfig(input.TensorBoardOutputConfig, context);
    }
    if (input.TrainingJobName !== undefined) {
        bodyParams["TrainingJobName"] = input.TrainingJobName;
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTransformJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.BatchStrategy !== undefined) {
        bodyParams["BatchStrategy"] = input.BatchStrategy;
    }
    if (input.DataProcessing !== undefined) {
        bodyParams["DataProcessing"] = serializeAws_json1_1DataProcessing(input.DataProcessing, context);
    }
    if (input.Environment !== undefined) {
        bodyParams["Environment"] = serializeAws_json1_1TransformEnvironmentMap(input.Environment, context);
    }
    if (input.ExperimentConfig !== undefined) {
        bodyParams["ExperimentConfig"] = serializeAws_json1_1ExperimentConfig(input.ExperimentConfig, context);
    }
    if (input.MaxConcurrentTransforms !== undefined) {
        bodyParams["MaxConcurrentTransforms"] = input.MaxConcurrentTransforms;
    }
    if (input.MaxPayloadInMB !== undefined) {
        bodyParams["MaxPayloadInMB"] = input.MaxPayloadInMB;
    }
    if (input.ModelName !== undefined) {
        bodyParams["ModelName"] = input.ModelName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.TransformInput !== undefined) {
        bodyParams["TransformInput"] = serializeAws_json1_1TransformInput(input.TransformInput, context);
    }
    if (input.TransformJobName !== undefined) {
        bodyParams["TransformJobName"] = input.TransformJobName;
    }
    if (input.TransformOutput !== undefined) {
        bodyParams["TransformOutput"] = serializeAws_json1_1TransformOutput(input.TransformOutput, context);
    }
    if (input.TransformResources !== undefined) {
        bodyParams["TransformResources"] = serializeAws_json1_1TransformResources(input.TransformResources, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTrialComponentRequest = (input, context) => {
    const bodyParams = {};
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.InputArtifacts !== undefined) {
        bodyParams["InputArtifacts"] = serializeAws_json1_1TrialComponentArtifacts(input.InputArtifacts, context);
    }
    if (input.OutputArtifacts !== undefined) {
        bodyParams["OutputArtifacts"] = serializeAws_json1_1TrialComponentArtifacts(input.OutputArtifacts, context);
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1TrialComponentParameters(input.Parameters, context);
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = serializeAws_json1_1TrialComponentStatus(input.Status, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.TrialComponentName !== undefined) {
        bodyParams["TrialComponentName"] = input.TrialComponentName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTrialRequest = (input, context) => {
    const bodyParams = {};
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.ExperimentName !== undefined) {
        bodyParams["ExperimentName"] = input.ExperimentName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.TrialName !== undefined) {
        bodyParams["TrialName"] = input.TrialName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUserProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainId !== undefined) {
        bodyParams["DomainId"] = input.DomainId;
    }
    if (input.SingleSignOnUserIdentifier !== undefined) {
        bodyParams["SingleSignOnUserIdentifier"] = input.SingleSignOnUserIdentifier;
    }
    if (input.SingleSignOnUserValue !== undefined) {
        bodyParams["SingleSignOnUserValue"] = input.SingleSignOnUserValue;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.UserProfileName !== undefined) {
        bodyParams["UserProfileName"] = input.UserProfileName;
    }
    if (input.UserSettings !== undefined) {
        bodyParams["UserSettings"] = serializeAws_json1_1UserSettings(input.UserSettings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateWorkteamRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.MemberDefinitions !== undefined) {
        bodyParams["MemberDefinitions"] = serializeAws_json1_1MemberDefinitions(input.MemberDefinitions, context);
    }
    if (input.NotificationConfiguration !== undefined) {
        bodyParams["NotificationConfiguration"] = serializeAws_json1_1NotificationConfiguration(input.NotificationConfiguration, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.WorkteamName !== undefined) {
        bodyParams["WorkteamName"] = input.WorkteamName;
    }
    return bodyParams;
};
const serializeAws_json1_1CsvContentTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DataCaptureConfig = (input, context) => {
    const bodyParams = {};
    if (input.CaptureContentTypeHeader !== undefined) {
        bodyParams["CaptureContentTypeHeader"] = serializeAws_json1_1CaptureContentTypeHeader(input.CaptureContentTypeHeader, context);
    }
    if (input.CaptureOptions !== undefined) {
        bodyParams["CaptureOptions"] = serializeAws_json1_1CaptureOptionList(input.CaptureOptions, context);
    }
    if (input.DestinationS3Uri !== undefined) {
        bodyParams["DestinationS3Uri"] = input.DestinationS3Uri;
    }
    if (input.EnableCapture !== undefined) {
        bodyParams["EnableCapture"] = input.EnableCapture;
    }
    if (input.InitialSamplingPercentage !== undefined) {
        bodyParams["InitialSamplingPercentage"] = input.InitialSamplingPercentage;
    }
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1DataProcessing = (input, context) => {
    const bodyParams = {};
    if (input.InputFilter !== undefined) {
        bodyParams["InputFilter"] = input.InputFilter;
    }
    if (input.JoinSource !== undefined) {
        bodyParams["JoinSource"] = input.JoinSource;
    }
    if (input.OutputFilter !== undefined) {
        bodyParams["OutputFilter"] = input.OutputFilter;
    }
    return bodyParams;
};
const serializeAws_json1_1DataSource = (input, context) => {
    const bodyParams = {};
    if (input.FileSystemDataSource !== undefined) {
        bodyParams["FileSystemDataSource"] = serializeAws_json1_1FileSystemDataSource(input.FileSystemDataSource, context);
    }
    if (input.S3DataSource !== undefined) {
        bodyParams["S3DataSource"] = serializeAws_json1_1S3DataSource(input.S3DataSource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DebugHookConfig = (input, context) => {
    const bodyParams = {};
    if (input.CollectionConfigurations !== undefined) {
        bodyParams["CollectionConfigurations"] = serializeAws_json1_1CollectionConfigurations(input.CollectionConfigurations, context);
    }
    if (input.HookParameters !== undefined) {
        bodyParams["HookParameters"] = serializeAws_json1_1HookParameters(input.HookParameters, context);
    }
    if (input.LocalPath !== undefined) {
        bodyParams["LocalPath"] = input.LocalPath;
    }
    if (input.S3OutputPath !== undefined) {
        bodyParams["S3OutputPath"] = input.S3OutputPath;
    }
    return bodyParams;
};
const serializeAws_json1_1DebugRuleConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.LocalPath !== undefined) {
        bodyParams["LocalPath"] = input.LocalPath;
    }
    if (input.RuleConfigurationName !== undefined) {
        bodyParams["RuleConfigurationName"] = input.RuleConfigurationName;
    }
    if (input.RuleEvaluatorImage !== undefined) {
        bodyParams["RuleEvaluatorImage"] = input.RuleEvaluatorImage;
    }
    if (input.RuleParameters !== undefined) {
        bodyParams["RuleParameters"] = serializeAws_json1_1RuleParameters(input.RuleParameters, context);
    }
    if (input.S3OutputPath !== undefined) {
        bodyParams["S3OutputPath"] = input.S3OutputPath;
    }
    if (input.VolumeSizeInGB !== undefined) {
        bodyParams["VolumeSizeInGB"] = input.VolumeSizeInGB;
    }
    return bodyParams;
};
const serializeAws_json1_1DebugRuleConfigurations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DebugRuleConfiguration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DeleteAlgorithmInput = (input, context) => {
    const bodyParams = {};
    if (input.AlgorithmName !== undefined) {
        bodyParams["AlgorithmName"] = input.AlgorithmName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAppRequest = (input, context) => {
    const bodyParams = {};
    if (input.AppName !== undefined) {
        bodyParams["AppName"] = input.AppName;
    }
    if (input.AppType !== undefined) {
        bodyParams["AppType"] = input.AppType;
    }
    if (input.DomainId !== undefined) {
        bodyParams["DomainId"] = input.DomainId;
    }
    if (input.UserProfileName !== undefined) {
        bodyParams["UserProfileName"] = input.UserProfileName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteCodeRepositoryInput = (input, context) => {
    const bodyParams = {};
    if (input.CodeRepositoryName !== undefined) {
        bodyParams["CodeRepositoryName"] = input.CodeRepositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainId !== undefined) {
        bodyParams["DomainId"] = input.DomainId;
    }
    if (input.RetentionPolicy !== undefined) {
        bodyParams["RetentionPolicy"] = serializeAws_json1_1RetentionPolicy(input.RetentionPolicy, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEndpointConfigInput = (input, context) => {
    const bodyParams = {};
    if (input.EndpointConfigName !== undefined) {
        bodyParams["EndpointConfigName"] = input.EndpointConfigName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEndpointInput = (input, context) => {
    const bodyParams = {};
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteExperimentRequest = (input, context) => {
    const bodyParams = {};
    if (input.ExperimentName !== undefined) {
        bodyParams["ExperimentName"] = input.ExperimentName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteFlowDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.FlowDefinitionName !== undefined) {
        bodyParams["FlowDefinitionName"] = input.FlowDefinitionName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteModelInput = (input, context) => {
    const bodyParams = {};
    if (input.ModelName !== undefined) {
        bodyParams["ModelName"] = input.ModelName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteModelPackageInput = (input, context) => {
    const bodyParams = {};
    if (input.ModelPackageName !== undefined) {
        bodyParams["ModelPackageName"] = input.ModelPackageName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteMonitoringScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.MonitoringScheduleName !== undefined) {
        bodyParams["MonitoringScheduleName"] = input.MonitoringScheduleName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteNotebookInstanceInput = (input, context) => {
    const bodyParams = {};
    if (input.NotebookInstanceName !== undefined) {
        bodyParams["NotebookInstanceName"] = input.NotebookInstanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigInput = (input, context) => {
    const bodyParams = {};
    if (input.NotebookInstanceLifecycleConfigName !== undefined) {
        bodyParams["NotebookInstanceLifecycleConfigName"] =
            input.NotebookInstanceLifecycleConfigName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTagsInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTrialComponentRequest = (input, context) => {
    const bodyParams = {};
    if (input.TrialComponentName !== undefined) {
        bodyParams["TrialComponentName"] = input.TrialComponentName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTrialRequest = (input, context) => {
    const bodyParams = {};
    if (input.TrialName !== undefined) {
        bodyParams["TrialName"] = input.TrialName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUserProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainId !== undefined) {
        bodyParams["DomainId"] = input.DomainId;
    }
    if (input.UserProfileName !== undefined) {
        bodyParams["UserProfileName"] = input.UserProfileName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteWorkteamRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkteamName !== undefined) {
        bodyParams["WorkteamName"] = input.WorkteamName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAlgorithmInput = (input, context) => {
    const bodyParams = {};
    if (input.AlgorithmName !== undefined) {
        bodyParams["AlgorithmName"] = input.AlgorithmName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAppRequest = (input, context) => {
    const bodyParams = {};
    if (input.AppName !== undefined) {
        bodyParams["AppName"] = input.AppName;
    }
    if (input.AppType !== undefined) {
        bodyParams["AppType"] = input.AppType;
    }
    if (input.DomainId !== undefined) {
        bodyParams["DomainId"] = input.DomainId;
    }
    if (input.UserProfileName !== undefined) {
        bodyParams["UserProfileName"] = input.UserProfileName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAutoMLJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.AutoMLJobName !== undefined) {
        bodyParams["AutoMLJobName"] = input.AutoMLJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCodeRepositoryInput = (input, context) => {
    const bodyParams = {};
    if (input.CodeRepositoryName !== undefined) {
        bodyParams["CodeRepositoryName"] = input.CodeRepositoryName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCompilationJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.CompilationJobName !== undefined) {
        bodyParams["CompilationJobName"] = input.CompilationJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainId !== undefined) {
        bodyParams["DomainId"] = input.DomainId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEndpointConfigInput = (input, context) => {
    const bodyParams = {};
    if (input.EndpointConfigName !== undefined) {
        bodyParams["EndpointConfigName"] = input.EndpointConfigName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEndpointInput = (input, context) => {
    const bodyParams = {};
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeExperimentRequest = (input, context) => {
    const bodyParams = {};
    if (input.ExperimentName !== undefined) {
        bodyParams["ExperimentName"] = input.ExperimentName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeFlowDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.FlowDefinitionName !== undefined) {
        bodyParams["FlowDefinitionName"] = input.FlowDefinitionName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeHumanTaskUiRequest = (input, context) => {
    const bodyParams = {};
    if (input.HumanTaskUiName !== undefined) {
        bodyParams["HumanTaskUiName"] = input.HumanTaskUiName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeHyperParameterTuningJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.HyperParameterTuningJobName !== undefined) {
        bodyParams["HyperParameterTuningJobName"] =
            input.HyperParameterTuningJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLabelingJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.LabelingJobName !== undefined) {
        bodyParams["LabelingJobName"] = input.LabelingJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeModelInput = (input, context) => {
    const bodyParams = {};
    if (input.ModelName !== undefined) {
        bodyParams["ModelName"] = input.ModelName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeModelPackageInput = (input, context) => {
    const bodyParams = {};
    if (input.ModelPackageName !== undefined) {
        bodyParams["ModelPackageName"] = input.ModelPackageName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMonitoringScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.MonitoringScheduleName !== undefined) {
        bodyParams["MonitoringScheduleName"] = input.MonitoringScheduleName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeNotebookInstanceInput = (input, context) => {
    const bodyParams = {};
    if (input.NotebookInstanceName !== undefined) {
        bodyParams["NotebookInstanceName"] = input.NotebookInstanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigInput = (input, context) => {
    const bodyParams = {};
    if (input.NotebookInstanceLifecycleConfigName !== undefined) {
        bodyParams["NotebookInstanceLifecycleConfigName"] =
            input.NotebookInstanceLifecycleConfigName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProcessingJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProcessingJobName !== undefined) {
        bodyParams["ProcessingJobName"] = input.ProcessingJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSubscribedWorkteamRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkteamArn !== undefined) {
        bodyParams["WorkteamArn"] = input.WorkteamArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTrainingJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.TrainingJobName !== undefined) {
        bodyParams["TrainingJobName"] = input.TrainingJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTransformJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.TransformJobName !== undefined) {
        bodyParams["TransformJobName"] = input.TransformJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTrialComponentRequest = (input, context) => {
    const bodyParams = {};
    if (input.TrialComponentName !== undefined) {
        bodyParams["TrialComponentName"] = input.TrialComponentName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTrialRequest = (input, context) => {
    const bodyParams = {};
    if (input.TrialName !== undefined) {
        bodyParams["TrialName"] = input.TrialName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUserProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainId !== undefined) {
        bodyParams["DomainId"] = input.DomainId;
    }
    if (input.UserProfileName !== undefined) {
        bodyParams["UserProfileName"] = input.UserProfileName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeWorkforceRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkforceName !== undefined) {
        bodyParams["WorkforceName"] = input.WorkforceName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeWorkteamRequest = (input, context) => {
    const bodyParams = {};
    if (input.WorkteamName !== undefined) {
        bodyParams["WorkteamName"] = input.WorkteamName;
    }
    return bodyParams;
};
const serializeAws_json1_1DesiredWeightAndCapacity = (input, context) => {
    const bodyParams = {};
    if (input.DesiredInstanceCount !== undefined) {
        bodyParams["DesiredInstanceCount"] = input.DesiredInstanceCount;
    }
    if (input.DesiredWeight !== undefined) {
        bodyParams["DesiredWeight"] = input.DesiredWeight;
    }
    if (input.VariantName !== undefined) {
        bodyParams["VariantName"] = input.VariantName;
    }
    return bodyParams;
};
const serializeAws_json1_1DesiredWeightAndCapacityList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DesiredWeightAndCapacity(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DisassociateTrialComponentRequest = (input, context) => {
    const bodyParams = {};
    if (input.TrialComponentName !== undefined) {
        bodyParams["TrialComponentName"] = input.TrialComponentName;
    }
    if (input.TrialName !== undefined) {
        bodyParams["TrialName"] = input.TrialName;
    }
    return bodyParams;
};
const serializeAws_json1_1EndpointInput = (input, context) => {
    const bodyParams = {};
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    if (input.LocalPath !== undefined) {
        bodyParams["LocalPath"] = input.LocalPath;
    }
    if (input.S3DataDistributionType !== undefined) {
        bodyParams["S3DataDistributionType"] = input.S3DataDistributionType;
    }
    if (input.S3InputMode !== undefined) {
        bodyParams["S3InputMode"] = input.S3InputMode;
    }
    return bodyParams;
};
const serializeAws_json1_1EnvironmentMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ExperimentConfig = (input, context) => {
    const bodyParams = {};
    if (input.ExperimentName !== undefined) {
        bodyParams["ExperimentName"] = input.ExperimentName;
    }
    if (input.TrialComponentDisplayName !== undefined) {
        bodyParams["TrialComponentDisplayName"] = input.TrialComponentDisplayName;
    }
    if (input.TrialName !== undefined) {
        bodyParams["TrialName"] = input.TrialName;
    }
    return bodyParams;
};
const serializeAws_json1_1FileSystemDataSource = (input, context) => {
    const bodyParams = {};
    if (input.DirectoryPath !== undefined) {
        bodyParams["DirectoryPath"] = input.DirectoryPath;
    }
    if (input.FileSystemAccessMode !== undefined) {
        bodyParams["FileSystemAccessMode"] = input.FileSystemAccessMode;
    }
    if (input.FileSystemId !== undefined) {
        bodyParams["FileSystemId"] = input.FileSystemId;
    }
    if (input.FileSystemType !== undefined) {
        bodyParams["FileSystemType"] = input.FileSystemType;
    }
    return bodyParams;
};
const serializeAws_json1_1Filter = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Operator !== undefined) {
        bodyParams["Operator"] = input.Operator;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1FilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Filter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1FlowDefinitionOutputConfig = (input, context) => {
    const bodyParams = {};
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.S3OutputPath !== undefined) {
        bodyParams["S3OutputPath"] = input.S3OutputPath;
    }
    return bodyParams;
};
const serializeAws_json1_1FlowDefinitionTaskKeywords = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetSearchSuggestionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Resource !== undefined) {
        bodyParams["Resource"] = input.Resource;
    }
    if (input.SuggestionQuery !== undefined) {
        bodyParams["SuggestionQuery"] = serializeAws_json1_1SuggestionQuery(input.SuggestionQuery, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GitConfig = (input, context) => {
    const bodyParams = {};
    if (input.Branch !== undefined) {
        bodyParams["Branch"] = input.Branch;
    }
    if (input.RepositoryUrl !== undefined) {
        bodyParams["RepositoryUrl"] = input.RepositoryUrl;
    }
    if (input.SecretArn !== undefined) {
        bodyParams["SecretArn"] = input.SecretArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GitConfigForUpdate = (input, context) => {
    const bodyParams = {};
    if (input.SecretArn !== undefined) {
        bodyParams["SecretArn"] = input.SecretArn;
    }
    return bodyParams;
};
const serializeAws_json1_1HookParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1HumanLoopActivationConditionsConfig = (input, context) => {
    const bodyParams = {};
    if (input.HumanLoopActivationConditions !== undefined) {
        bodyParams["HumanLoopActivationConditions"] = smithy_client_1.LazyJsonString.fromObject(input.HumanLoopActivationConditions);
    }
    return bodyParams;
};
const serializeAws_json1_1HumanLoopActivationConfig = (input, context) => {
    const bodyParams = {};
    if (input.HumanLoopActivationConditionsConfig !== undefined) {
        bodyParams["HumanLoopActivationConditionsConfig"] = serializeAws_json1_1HumanLoopActivationConditionsConfig(input.HumanLoopActivationConditionsConfig, context);
    }
    if (input.HumanLoopRequestSource !== undefined) {
        bodyParams["HumanLoopRequestSource"] = serializeAws_json1_1HumanLoopRequestSource(input.HumanLoopRequestSource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1HumanLoopConfig = (input, context) => {
    const bodyParams = {};
    if (input.HumanTaskUiArn !== undefined) {
        bodyParams["HumanTaskUiArn"] = input.HumanTaskUiArn;
    }
    if (input.PublicWorkforceTaskPrice !== undefined) {
        bodyParams["PublicWorkforceTaskPrice"] = serializeAws_json1_1PublicWorkforceTaskPrice(input.PublicWorkforceTaskPrice, context);
    }
    if (input.TaskAvailabilityLifetimeInSeconds !== undefined) {
        bodyParams["TaskAvailabilityLifetimeInSeconds"] =
            input.TaskAvailabilityLifetimeInSeconds;
    }
    if (input.TaskCount !== undefined) {
        bodyParams["TaskCount"] = input.TaskCount;
    }
    if (input.TaskDescription !== undefined) {
        bodyParams["TaskDescription"] = input.TaskDescription;
    }
    if (input.TaskKeywords !== undefined) {
        bodyParams["TaskKeywords"] = serializeAws_json1_1FlowDefinitionTaskKeywords(input.TaskKeywords, context);
    }
    if (input.TaskTimeLimitInSeconds !== undefined) {
        bodyParams["TaskTimeLimitInSeconds"] = input.TaskTimeLimitInSeconds;
    }
    if (input.TaskTitle !== undefined) {
        bodyParams["TaskTitle"] = input.TaskTitle;
    }
    if (input.WorkteamArn !== undefined) {
        bodyParams["WorkteamArn"] = input.WorkteamArn;
    }
    return bodyParams;
};
const serializeAws_json1_1HumanLoopRequestSource = (input, context) => {
    const bodyParams = {};
    if (input.AwsManagedHumanLoopRequestSource !== undefined) {
        bodyParams["AwsManagedHumanLoopRequestSource"] =
            input.AwsManagedHumanLoopRequestSource;
    }
    return bodyParams;
};
const serializeAws_json1_1HumanTaskConfig = (input, context) => {
    const bodyParams = {};
    if (input.AnnotationConsolidationConfig !== undefined) {
        bodyParams["AnnotationConsolidationConfig"] = serializeAws_json1_1AnnotationConsolidationConfig(input.AnnotationConsolidationConfig, context);
    }
    if (input.MaxConcurrentTaskCount !== undefined) {
        bodyParams["MaxConcurrentTaskCount"] = input.MaxConcurrentTaskCount;
    }
    if (input.NumberOfHumanWorkersPerDataObject !== undefined) {
        bodyParams["NumberOfHumanWorkersPerDataObject"] =
            input.NumberOfHumanWorkersPerDataObject;
    }
    if (input.PreHumanTaskLambdaArn !== undefined) {
        bodyParams["PreHumanTaskLambdaArn"] = input.PreHumanTaskLambdaArn;
    }
    if (input.PublicWorkforceTaskPrice !== undefined) {
        bodyParams["PublicWorkforceTaskPrice"] = serializeAws_json1_1PublicWorkforceTaskPrice(input.PublicWorkforceTaskPrice, context);
    }
    if (input.TaskAvailabilityLifetimeInSeconds !== undefined) {
        bodyParams["TaskAvailabilityLifetimeInSeconds"] =
            input.TaskAvailabilityLifetimeInSeconds;
    }
    if (input.TaskDescription !== undefined) {
        bodyParams["TaskDescription"] = input.TaskDescription;
    }
    if (input.TaskKeywords !== undefined) {
        bodyParams["TaskKeywords"] = serializeAws_json1_1TaskKeywords(input.TaskKeywords, context);
    }
    if (input.TaskTimeLimitInSeconds !== undefined) {
        bodyParams["TaskTimeLimitInSeconds"] = input.TaskTimeLimitInSeconds;
    }
    if (input.TaskTitle !== undefined) {
        bodyParams["TaskTitle"] = input.TaskTitle;
    }
    if (input.UiConfig !== undefined) {
        bodyParams["UiConfig"] = serializeAws_json1_1UiConfig(input.UiConfig, context);
    }
    if (input.WorkteamArn !== undefined) {
        bodyParams["WorkteamArn"] = input.WorkteamArn;
    }
    return bodyParams;
};
const serializeAws_json1_1HyperParameterAlgorithmSpecification = (input, context) => {
    const bodyParams = {};
    if (input.AlgorithmName !== undefined) {
        bodyParams["AlgorithmName"] = input.AlgorithmName;
    }
    if (input.MetricDefinitions !== undefined) {
        bodyParams["MetricDefinitions"] = serializeAws_json1_1MetricDefinitionList(input.MetricDefinitions, context);
    }
    if (input.TrainingImage !== undefined) {
        bodyParams["TrainingImage"] = input.TrainingImage;
    }
    if (input.TrainingInputMode !== undefined) {
        bodyParams["TrainingInputMode"] = input.TrainingInputMode;
    }
    return bodyParams;
};
const serializeAws_json1_1HyperParameterSpecification = (input, context) => {
    const bodyParams = {};
    if (input.DefaultValue !== undefined) {
        bodyParams["DefaultValue"] = input.DefaultValue;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.IsRequired !== undefined) {
        bodyParams["IsRequired"] = input.IsRequired;
    }
    if (input.IsTunable !== undefined) {
        bodyParams["IsTunable"] = input.IsTunable;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Range !== undefined) {
        bodyParams["Range"] = serializeAws_json1_1ParameterRange(input.Range, context);
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1HyperParameterSpecifications = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1HyperParameterSpecification(entry, context));
    }
    return contents;
};
const serializeAws_json1_1HyperParameterTrainingJobDefinition = (input, context) => {
    const bodyParams = {};
    if (input.AlgorithmSpecification !== undefined) {
        bodyParams["AlgorithmSpecification"] = serializeAws_json1_1HyperParameterAlgorithmSpecification(input.AlgorithmSpecification, context);
    }
    if (input.CheckpointConfig !== undefined) {
        bodyParams["CheckpointConfig"] = serializeAws_json1_1CheckpointConfig(input.CheckpointConfig, context);
    }
    if (input.DefinitionName !== undefined) {
        bodyParams["DefinitionName"] = input.DefinitionName;
    }
    if (input.EnableInterContainerTrafficEncryption !== undefined) {
        bodyParams["EnableInterContainerTrafficEncryption"] =
            input.EnableInterContainerTrafficEncryption;
    }
    if (input.EnableManagedSpotTraining !== undefined) {
        bodyParams["EnableManagedSpotTraining"] = input.EnableManagedSpotTraining;
    }
    if (input.EnableNetworkIsolation !== undefined) {
        bodyParams["EnableNetworkIsolation"] = input.EnableNetworkIsolation;
    }
    if (input.HyperParameterRanges !== undefined) {
        bodyParams["HyperParameterRanges"] = serializeAws_json1_1ParameterRanges(input.HyperParameterRanges, context);
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(input.InputDataConfig, context);
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context);
    }
    if (input.ResourceConfig !== undefined) {
        bodyParams["ResourceConfig"] = serializeAws_json1_1ResourceConfig(input.ResourceConfig, context);
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.StaticHyperParameters !== undefined) {
        bodyParams["StaticHyperParameters"] = serializeAws_json1_1HyperParameters(input.StaticHyperParameters, context);
    }
    if (input.StoppingCondition !== undefined) {
        bodyParams["StoppingCondition"] = serializeAws_json1_1StoppingCondition(input.StoppingCondition, context);
    }
    if (input.TuningObjective !== undefined) {
        bodyParams["TuningObjective"] = serializeAws_json1_1HyperParameterTuningJobObjective(input.TuningObjective, context);
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1HyperParameterTrainingJobDefinitions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1HyperParameterTrainingJobDefinition(entry, context));
    }
    return contents;
};
const serializeAws_json1_1HyperParameterTuningJobConfig = (input, context) => {
    const bodyParams = {};
    if (input.HyperParameterTuningJobObjective !== undefined) {
        bodyParams["HyperParameterTuningJobObjective"] = serializeAws_json1_1HyperParameterTuningJobObjective(input.HyperParameterTuningJobObjective, context);
    }
    if (input.ParameterRanges !== undefined) {
        bodyParams["ParameterRanges"] = serializeAws_json1_1ParameterRanges(input.ParameterRanges, context);
    }
    if (input.ResourceLimits !== undefined) {
        bodyParams["ResourceLimits"] = serializeAws_json1_1ResourceLimits(input.ResourceLimits, context);
    }
    if (input.Strategy !== undefined) {
        bodyParams["Strategy"] = input.Strategy;
    }
    if (input.TrainingJobEarlyStoppingType !== undefined) {
        bodyParams["TrainingJobEarlyStoppingType"] =
            input.TrainingJobEarlyStoppingType;
    }
    if (input.TuningJobCompletionCriteria !== undefined) {
        bodyParams["TuningJobCompletionCriteria"] = serializeAws_json1_1TuningJobCompletionCriteria(input.TuningJobCompletionCriteria, context);
    }
    return bodyParams;
};
const serializeAws_json1_1HyperParameterTuningJobObjective = (input, context) => {
    const bodyParams = {};
    if (input.MetricName !== undefined) {
        bodyParams["MetricName"] = input.MetricName;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1HyperParameterTuningJobObjectives = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1HyperParameterTuningJobObjective(entry, context));
    }
    return contents;
};
const serializeAws_json1_1HyperParameterTuningJobWarmStartConfig = (input, context) => {
    const bodyParams = {};
    if (input.ParentHyperParameterTuningJobs !== undefined) {
        bodyParams["ParentHyperParameterTuningJobs"] = serializeAws_json1_1ParentHyperParameterTuningJobs(input.ParentHyperParameterTuningJobs, context);
    }
    if (input.WarmStartType !== undefined) {
        bodyParams["WarmStartType"] = input.WarmStartType;
    }
    return bodyParams;
};
const serializeAws_json1_1HyperParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1InferenceSpecification = (input, context) => {
    const bodyParams = {};
    if (input.Containers !== undefined) {
        bodyParams["Containers"] = serializeAws_json1_1ModelPackageContainerDefinitionList(input.Containers, context);
    }
    if (input.SupportedContentTypes !== undefined) {
        bodyParams["SupportedContentTypes"] = serializeAws_json1_1ContentTypes(input.SupportedContentTypes, context);
    }
    if (input.SupportedRealtimeInferenceInstanceTypes !== undefined) {
        bodyParams["SupportedRealtimeInferenceInstanceTypes"] = serializeAws_json1_1RealtimeInferenceInstanceTypes(input.SupportedRealtimeInferenceInstanceTypes, context);
    }
    if (input.SupportedResponseMIMETypes !== undefined) {
        bodyParams["SupportedResponseMIMETypes"] = serializeAws_json1_1ResponseMIMETypes(input.SupportedResponseMIMETypes, context);
    }
    if (input.SupportedTransformInstanceTypes !== undefined) {
        bodyParams["SupportedTransformInstanceTypes"] = serializeAws_json1_1TransformInstanceTypes(input.SupportedTransformInstanceTypes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InputConfig = (input, context) => {
    const bodyParams = {};
    if (input.DataInputConfig !== undefined) {
        bodyParams["DataInputConfig"] = input.DataInputConfig;
    }
    if (input.Framework !== undefined) {
        bodyParams["Framework"] = input.Framework;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1InputDataConfig = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Channel(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InputModes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1IntegerParameterRange = (input, context) => {
    const bodyParams = {};
    if (input.MaxValue !== undefined) {
        bodyParams["MaxValue"] = input.MaxValue;
    }
    if (input.MinValue !== undefined) {
        bodyParams["MinValue"] = input.MinValue;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ScalingType !== undefined) {
        bodyParams["ScalingType"] = input.ScalingType;
    }
    return bodyParams;
};
const serializeAws_json1_1IntegerParameterRangeSpecification = (input, context) => {
    const bodyParams = {};
    if (input.MaxValue !== undefined) {
        bodyParams["MaxValue"] = input.MaxValue;
    }
    if (input.MinValue !== undefined) {
        bodyParams["MinValue"] = input.MinValue;
    }
    return bodyParams;
};
const serializeAws_json1_1IntegerParameterRanges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1IntegerParameterRange(entry, context));
    }
    return contents;
};
const serializeAws_json1_1JsonContentTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1JupyterServerAppSettings = (input, context) => {
    const bodyParams = {};
    if (input.DefaultResourceSpec !== undefined) {
        bodyParams["DefaultResourceSpec"] = serializeAws_json1_1ResourceSpec(input.DefaultResourceSpec, context);
    }
    return bodyParams;
};
const serializeAws_json1_1KernelGatewayAppSettings = (input, context) => {
    const bodyParams = {};
    if (input.DefaultResourceSpec !== undefined) {
        bodyParams["DefaultResourceSpec"] = serializeAws_json1_1ResourceSpec(input.DefaultResourceSpec, context);
    }
    return bodyParams;
};
const serializeAws_json1_1LabelingJobAlgorithmsConfig = (input, context) => {
    const bodyParams = {};
    if (input.InitialActiveLearningModelArn !== undefined) {
        bodyParams["InitialActiveLearningModelArn"] =
            input.InitialActiveLearningModelArn;
    }
    if (input.LabelingJobAlgorithmSpecificationArn !== undefined) {
        bodyParams["LabelingJobAlgorithmSpecificationArn"] =
            input.LabelingJobAlgorithmSpecificationArn;
    }
    if (input.LabelingJobResourceConfig !== undefined) {
        bodyParams["LabelingJobResourceConfig"] = serializeAws_json1_1LabelingJobResourceConfig(input.LabelingJobResourceConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1LabelingJobDataAttributes = (input, context) => {
    const bodyParams = {};
    if (input.ContentClassifiers !== undefined) {
        bodyParams["ContentClassifiers"] = serializeAws_json1_1ContentClassifiers(input.ContentClassifiers, context);
    }
    return bodyParams;
};
const serializeAws_json1_1LabelingJobDataSource = (input, context) => {
    const bodyParams = {};
    if (input.S3DataSource !== undefined) {
        bodyParams["S3DataSource"] = serializeAws_json1_1LabelingJobS3DataSource(input.S3DataSource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1LabelingJobInputConfig = (input, context) => {
    const bodyParams = {};
    if (input.DataAttributes !== undefined) {
        bodyParams["DataAttributes"] = serializeAws_json1_1LabelingJobDataAttributes(input.DataAttributes, context);
    }
    if (input.DataSource !== undefined) {
        bodyParams["DataSource"] = serializeAws_json1_1LabelingJobDataSource(input.DataSource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1LabelingJobOutputConfig = (input, context) => {
    const bodyParams = {};
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.S3OutputPath !== undefined) {
        bodyParams["S3OutputPath"] = input.S3OutputPath;
    }
    return bodyParams;
};
const serializeAws_json1_1LabelingJobResourceConfig = (input, context) => {
    const bodyParams = {};
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1LabelingJobS3DataSource = (input, context) => {
    const bodyParams = {};
    if (input.ManifestS3Uri !== undefined) {
        bodyParams["ManifestS3Uri"] = input.ManifestS3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1LabelingJobStoppingConditions = (input, context) => {
    const bodyParams = {};
    if (input.MaxHumanLabeledObjectCount !== undefined) {
        bodyParams["MaxHumanLabeledObjectCount"] = input.MaxHumanLabeledObjectCount;
    }
    if (input.MaxPercentageOfInputDatasetLabeled !== undefined) {
        bodyParams["MaxPercentageOfInputDatasetLabeled"] =
            input.MaxPercentageOfInputDatasetLabeled;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAlgorithmsInput = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAppsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainIdEquals !== undefined) {
        bodyParams["DomainIdEquals"] = input.DomainIdEquals;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.UserProfileNameEquals !== undefined) {
        bodyParams["UserProfileNameEquals"] = input.UserProfileNameEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAutoMLJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListCandidatesForAutoMLJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.AutoMLJobName !== undefined) {
        bodyParams["AutoMLJobName"] = input.AutoMLJobName;
    }
    if (input.CandidateNameEquals !== undefined) {
        bodyParams["CandidateNameEquals"] = input.CandidateNameEquals;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListCodeRepositoriesInput = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListCompilationJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDomainsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListEndpointConfigsInput = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListEndpointsInput = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListExperimentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreatedAfter !== undefined) {
        bodyParams["CreatedAfter"] = Math.round(input.CreatedAfter.getTime() / 1000);
    }
    if (input.CreatedBefore !== undefined) {
        bodyParams["CreatedBefore"] = Math.round(input.CreatedBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListFlowDefinitionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListHumanTaskUisRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListHyperParameterTuningJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListLabelingJobsForWorkteamRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.JobReferenceCodeContains !== undefined) {
        bodyParams["JobReferenceCodeContains"] = input.JobReferenceCodeContains;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.WorkteamArn !== undefined) {
        bodyParams["WorkteamArn"] = input.WorkteamArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListLabelingJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListModelPackagesInput = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListModelsInput = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListMonitoringExecutionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.MonitoringScheduleName !== undefined) {
        bodyParams["MonitoringScheduleName"] = input.MonitoringScheduleName;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ScheduledTimeAfter !== undefined) {
        bodyParams["ScheduledTimeAfter"] = Math.round(input.ScheduledTimeAfter.getTime() / 1000);
    }
    if (input.ScheduledTimeBefore !== undefined) {
        bodyParams["ScheduledTimeBefore"] = Math.round(input.ScheduledTimeBefore.getTime() / 1000);
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListMonitoringSchedulesRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListNotebookInstanceLifecycleConfigsInput = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListNotebookInstancesInput = (input, context) => {
    const bodyParams = {};
    if (input.AdditionalCodeRepositoryEquals !== undefined) {
        bodyParams["AdditionalCodeRepositoryEquals"] =
            input.AdditionalCodeRepositoryEquals;
    }
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.DefaultCodeRepositoryContains !== undefined) {
        bodyParams["DefaultCodeRepositoryContains"] =
            input.DefaultCodeRepositoryContains;
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.NotebookInstanceLifecycleConfigNameContains !== undefined) {
        bodyParams["NotebookInstanceLifecycleConfigNameContains"] =
            input.NotebookInstanceLifecycleConfigNameContains;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListProcessingJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSubscribedWorkteamsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.HyperParameterTuningJobName !== undefined) {
        bodyParams["HyperParameterTuningJobName"] =
            input.HyperParameterTuningJobName;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTrainingJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTransformJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.LastModifiedTimeAfter !== undefined) {
        bodyParams["LastModifiedTimeAfter"] = Math.round(input.LastModifiedTimeAfter.getTime() / 1000);
    }
    if (input.LastModifiedTimeBefore !== undefined) {
        bodyParams["LastModifiedTimeBefore"] = Math.round(input.LastModifiedTimeBefore.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.StatusEquals !== undefined) {
        bodyParams["StatusEquals"] = input.StatusEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTrialComponentKey256 = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListTrialComponentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreatedAfter !== undefined) {
        bodyParams["CreatedAfter"] = Math.round(input.CreatedAfter.getTime() / 1000);
    }
    if (input.CreatedBefore !== undefined) {
        bodyParams["CreatedBefore"] = Math.round(input.CreatedBefore.getTime() / 1000);
    }
    if (input.ExperimentName !== undefined) {
        bodyParams["ExperimentName"] = input.ExperimentName;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.SourceArn !== undefined) {
        bodyParams["SourceArn"] = input.SourceArn;
    }
    if (input.TrialName !== undefined) {
        bodyParams["TrialName"] = input.TrialName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTrialsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreatedAfter !== undefined) {
        bodyParams["CreatedAfter"] = Math.round(input.CreatedAfter.getTime() / 1000);
    }
    if (input.CreatedBefore !== undefined) {
        bodyParams["CreatedBefore"] = Math.round(input.CreatedBefore.getTime() / 1000);
    }
    if (input.ExperimentName !== undefined) {
        bodyParams["ExperimentName"] = input.ExperimentName;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListUserProfilesRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainIdEquals !== undefined) {
        bodyParams["DomainIdEquals"] = input.DomainIdEquals;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    if (input.UserProfileNameContains !== undefined) {
        bodyParams["UserProfileNameContains"] = input.UserProfileNameContains;
    }
    return bodyParams;
};
const serializeAws_json1_1ListWorkteamsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1MemberDefinition = (input, context) => {
    const bodyParams = {};
    if (input.CognitoMemberDefinition !== undefined) {
        bodyParams["CognitoMemberDefinition"] = serializeAws_json1_1CognitoMemberDefinition(input.CognitoMemberDefinition, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MemberDefinitions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MemberDefinition(entry, context));
    }
    return contents;
};
const serializeAws_json1_1MetricDefinition = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Regex !== undefined) {
        bodyParams["Regex"] = input.Regex;
    }
    return bodyParams;
};
const serializeAws_json1_1MetricDefinitionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MetricDefinition(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ModelPackageContainerDefinition = (input, context) => {
    const bodyParams = {};
    if (input.ContainerHostname !== undefined) {
        bodyParams["ContainerHostname"] = input.ContainerHostname;
    }
    if (input.Image !== undefined) {
        bodyParams["Image"] = input.Image;
    }
    if (input.ImageDigest !== undefined) {
        bodyParams["ImageDigest"] = input.ImageDigest;
    }
    if (input.ModelDataUrl !== undefined) {
        bodyParams["ModelDataUrl"] = input.ModelDataUrl;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    return bodyParams;
};
const serializeAws_json1_1ModelPackageContainerDefinitionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ModelPackageContainerDefinition(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ModelPackageValidationProfile = (input, context) => {
    const bodyParams = {};
    if (input.ProfileName !== undefined) {
        bodyParams["ProfileName"] = input.ProfileName;
    }
    if (input.TransformJobDefinition !== undefined) {
        bodyParams["TransformJobDefinition"] = serializeAws_json1_1TransformJobDefinition(input.TransformJobDefinition, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ModelPackageValidationProfiles = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ModelPackageValidationProfile(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ModelPackageValidationSpecification = (input, context) => {
    const bodyParams = {};
    if (input.ValidationProfiles !== undefined) {
        bodyParams["ValidationProfiles"] = serializeAws_json1_1ModelPackageValidationProfiles(input.ValidationProfiles, context);
    }
    if (input.ValidationRole !== undefined) {
        bodyParams["ValidationRole"] = input.ValidationRole;
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringAppSpecification = (input, context) => {
    const bodyParams = {};
    if (input.ContainerArguments !== undefined) {
        bodyParams["ContainerArguments"] = serializeAws_json1_1MonitoringContainerArguments(input.ContainerArguments, context);
    }
    if (input.ContainerEntrypoint !== undefined) {
        bodyParams["ContainerEntrypoint"] = serializeAws_json1_1ContainerEntrypoint(input.ContainerEntrypoint, context);
    }
    if (input.ImageUri !== undefined) {
        bodyParams["ImageUri"] = input.ImageUri;
    }
    if (input.PostAnalyticsProcessorSourceUri !== undefined) {
        bodyParams["PostAnalyticsProcessorSourceUri"] =
            input.PostAnalyticsProcessorSourceUri;
    }
    if (input.RecordPreprocessorSourceUri !== undefined) {
        bodyParams["RecordPreprocessorSourceUri"] =
            input.RecordPreprocessorSourceUri;
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringBaselineConfig = (input, context) => {
    const bodyParams = {};
    if (input.ConstraintsResource !== undefined) {
        bodyParams["ConstraintsResource"] = serializeAws_json1_1MonitoringConstraintsResource(input.ConstraintsResource, context);
    }
    if (input.StatisticsResource !== undefined) {
        bodyParams["StatisticsResource"] = serializeAws_json1_1MonitoringStatisticsResource(input.StatisticsResource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringClusterConfig = (input, context) => {
    const bodyParams = {};
    if (input.InstanceCount !== undefined) {
        bodyParams["InstanceCount"] = input.InstanceCount;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    if (input.VolumeSizeInGB !== undefined) {
        bodyParams["VolumeSizeInGB"] = input.VolumeSizeInGB;
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringConstraintsResource = (input, context) => {
    const bodyParams = {};
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringContainerArguments = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1MonitoringEnvironmentMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1MonitoringInput = (input, context) => {
    const bodyParams = {};
    if (input.EndpointInput !== undefined) {
        bodyParams["EndpointInput"] = serializeAws_json1_1EndpointInput(input.EndpointInput, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringInputs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MonitoringInput(entry, context));
    }
    return contents;
};
const serializeAws_json1_1MonitoringJobDefinition = (input, context) => {
    const bodyParams = {};
    if (input.BaselineConfig !== undefined) {
        bodyParams["BaselineConfig"] = serializeAws_json1_1MonitoringBaselineConfig(input.BaselineConfig, context);
    }
    if (input.Environment !== undefined) {
        bodyParams["Environment"] = serializeAws_json1_1MonitoringEnvironmentMap(input.Environment, context);
    }
    if (input.MonitoringAppSpecification !== undefined) {
        bodyParams["MonitoringAppSpecification"] = serializeAws_json1_1MonitoringAppSpecification(input.MonitoringAppSpecification, context);
    }
    if (input.MonitoringInputs !== undefined) {
        bodyParams["MonitoringInputs"] = serializeAws_json1_1MonitoringInputs(input.MonitoringInputs, context);
    }
    if (input.MonitoringOutputConfig !== undefined) {
        bodyParams["MonitoringOutputConfig"] = serializeAws_json1_1MonitoringOutputConfig(input.MonitoringOutputConfig, context);
    }
    if (input.MonitoringResources !== undefined) {
        bodyParams["MonitoringResources"] = serializeAws_json1_1MonitoringResources(input.MonitoringResources, context);
    }
    if (input.NetworkConfig !== undefined) {
        bodyParams["NetworkConfig"] = serializeAws_json1_1NetworkConfig(input.NetworkConfig, context);
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.StoppingCondition !== undefined) {
        bodyParams["StoppingCondition"] = serializeAws_json1_1MonitoringStoppingCondition(input.StoppingCondition, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringOutput = (input, context) => {
    const bodyParams = {};
    if (input.S3Output !== undefined) {
        bodyParams["S3Output"] = serializeAws_json1_1MonitoringS3Output(input.S3Output, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringOutputConfig = (input, context) => {
    const bodyParams = {};
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.MonitoringOutputs !== undefined) {
        bodyParams["MonitoringOutputs"] = serializeAws_json1_1MonitoringOutputs(input.MonitoringOutputs, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringOutputs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MonitoringOutput(entry, context));
    }
    return contents;
};
const serializeAws_json1_1MonitoringResources = (input, context) => {
    const bodyParams = {};
    if (input.ClusterConfig !== undefined) {
        bodyParams["ClusterConfig"] = serializeAws_json1_1MonitoringClusterConfig(input.ClusterConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringS3Output = (input, context) => {
    const bodyParams = {};
    if (input.LocalPath !== undefined) {
        bodyParams["LocalPath"] = input.LocalPath;
    }
    if (input.S3UploadMode !== undefined) {
        bodyParams["S3UploadMode"] = input.S3UploadMode;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringScheduleConfig = (input, context) => {
    const bodyParams = {};
    if (input.MonitoringJobDefinition !== undefined) {
        bodyParams["MonitoringJobDefinition"] = serializeAws_json1_1MonitoringJobDefinition(input.MonitoringJobDefinition, context);
    }
    if (input.ScheduleConfig !== undefined) {
        bodyParams["ScheduleConfig"] = serializeAws_json1_1ScheduleConfig(input.ScheduleConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringStatisticsResource = (input, context) => {
    const bodyParams = {};
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1MonitoringStoppingCondition = (input, context) => {
    const bodyParams = {};
    if (input.MaxRuntimeInSeconds !== undefined) {
        bodyParams["MaxRuntimeInSeconds"] = input.MaxRuntimeInSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1NestedFilters = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.NestedPropertyName !== undefined) {
        bodyParams["NestedPropertyName"] = input.NestedPropertyName;
    }
    return bodyParams;
};
const serializeAws_json1_1NestedFiltersList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1NestedFilters(entry, context));
    }
    return contents;
};
const serializeAws_json1_1NetworkConfig = (input, context) => {
    const bodyParams = {};
    if (input.EnableNetworkIsolation !== undefined) {
        bodyParams["EnableNetworkIsolation"] = input.EnableNetworkIsolation;
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1NotebookInstanceAcceleratorTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1NotebookInstanceLifecycleConfigList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1NotebookInstanceLifecycleHook(entry, context));
    }
    return contents;
};
const serializeAws_json1_1NotebookInstanceLifecycleHook = (input, context) => {
    const bodyParams = {};
    if (input.Content !== undefined) {
        bodyParams["Content"] = input.Content;
    }
    return bodyParams;
};
const serializeAws_json1_1NotificationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.NotificationTopicArn !== undefined) {
        bodyParams["NotificationTopicArn"] = input.NotificationTopicArn;
    }
    return bodyParams;
};
const serializeAws_json1_1OutputConfig = (input, context) => {
    const bodyParams = {};
    if (input.S3OutputLocation !== undefined) {
        bodyParams["S3OutputLocation"] = input.S3OutputLocation;
    }
    if (input.TargetDevice !== undefined) {
        bodyParams["TargetDevice"] = input.TargetDevice;
    }
    return bodyParams;
};
const serializeAws_json1_1OutputDataConfig = (input, context) => {
    const bodyParams = {};
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.S3OutputPath !== undefined) {
        bodyParams["S3OutputPath"] = input.S3OutputPath;
    }
    return bodyParams;
};
const serializeAws_json1_1ParameterRange = (input, context) => {
    const bodyParams = {};
    if (input.CategoricalParameterRangeSpecification !== undefined) {
        bodyParams["CategoricalParameterRangeSpecification"] = serializeAws_json1_1CategoricalParameterRangeSpecification(input.CategoricalParameterRangeSpecification, context);
    }
    if (input.ContinuousParameterRangeSpecification !== undefined) {
        bodyParams["ContinuousParameterRangeSpecification"] = serializeAws_json1_1ContinuousParameterRangeSpecification(input.ContinuousParameterRangeSpecification, context);
    }
    if (input.IntegerParameterRangeSpecification !== undefined) {
        bodyParams["IntegerParameterRangeSpecification"] = serializeAws_json1_1IntegerParameterRangeSpecification(input.IntegerParameterRangeSpecification, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ParameterRanges = (input, context) => {
    const bodyParams = {};
    if (input.CategoricalParameterRanges !== undefined) {
        bodyParams["CategoricalParameterRanges"] = serializeAws_json1_1CategoricalParameterRanges(input.CategoricalParameterRanges, context);
    }
    if (input.ContinuousParameterRanges !== undefined) {
        bodyParams["ContinuousParameterRanges"] = serializeAws_json1_1ContinuousParameterRanges(input.ContinuousParameterRanges, context);
    }
    if (input.IntegerParameterRanges !== undefined) {
        bodyParams["IntegerParameterRanges"] = serializeAws_json1_1IntegerParameterRanges(input.IntegerParameterRanges, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ParameterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ParentHyperParameterTuningJob = (input, context) => {
    const bodyParams = {};
    if (input.HyperParameterTuningJobName !== undefined) {
        bodyParams["HyperParameterTuningJobName"] =
            input.HyperParameterTuningJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1ParentHyperParameterTuningJobs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ParentHyperParameterTuningJob(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ProcessingClusterConfig = (input, context) => {
    const bodyParams = {};
    if (input.InstanceCount !== undefined) {
        bodyParams["InstanceCount"] = input.InstanceCount;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    if (input.VolumeSizeInGB !== undefined) {
        bodyParams["VolumeSizeInGB"] = input.VolumeSizeInGB;
    }
    return bodyParams;
};
const serializeAws_json1_1ProcessingEnvironmentMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ProcessingInput = (input, context) => {
    const bodyParams = {};
    if (input.InputName !== undefined) {
        bodyParams["InputName"] = input.InputName;
    }
    if (input.S3Input !== undefined) {
        bodyParams["S3Input"] = serializeAws_json1_1ProcessingS3Input(input.S3Input, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ProcessingInputs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ProcessingInput(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ProcessingOutput = (input, context) => {
    const bodyParams = {};
    if (input.OutputName !== undefined) {
        bodyParams["OutputName"] = input.OutputName;
    }
    if (input.S3Output !== undefined) {
        bodyParams["S3Output"] = serializeAws_json1_1ProcessingS3Output(input.S3Output, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ProcessingOutputConfig = (input, context) => {
    const bodyParams = {};
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.Outputs !== undefined) {
        bodyParams["Outputs"] = serializeAws_json1_1ProcessingOutputs(input.Outputs, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ProcessingOutputs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ProcessingOutput(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ProcessingResources = (input, context) => {
    const bodyParams = {};
    if (input.ClusterConfig !== undefined) {
        bodyParams["ClusterConfig"] = serializeAws_json1_1ProcessingClusterConfig(input.ClusterConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ProcessingS3Input = (input, context) => {
    const bodyParams = {};
    if (input.LocalPath !== undefined) {
        bodyParams["LocalPath"] = input.LocalPath;
    }
    if (input.S3CompressionType !== undefined) {
        bodyParams["S3CompressionType"] = input.S3CompressionType;
    }
    if (input.S3DataDistributionType !== undefined) {
        bodyParams["S3DataDistributionType"] = input.S3DataDistributionType;
    }
    if (input.S3DataType !== undefined) {
        bodyParams["S3DataType"] = input.S3DataType;
    }
    if (input.S3InputMode !== undefined) {
        bodyParams["S3InputMode"] = input.S3InputMode;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1ProcessingS3Output = (input, context) => {
    const bodyParams = {};
    if (input.LocalPath !== undefined) {
        bodyParams["LocalPath"] = input.LocalPath;
    }
    if (input.S3UploadMode !== undefined) {
        bodyParams["S3UploadMode"] = input.S3UploadMode;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1ProcessingStoppingCondition = (input, context) => {
    const bodyParams = {};
    if (input.MaxRuntimeInSeconds !== undefined) {
        bodyParams["MaxRuntimeInSeconds"] = input.MaxRuntimeInSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1ProductionVariant = (input, context) => {
    const bodyParams = {};
    if (input.AcceleratorType !== undefined) {
        bodyParams["AcceleratorType"] = input.AcceleratorType;
    }
    if (input.InitialInstanceCount !== undefined) {
        bodyParams["InitialInstanceCount"] = input.InitialInstanceCount;
    }
    if (input.InitialVariantWeight !== undefined) {
        bodyParams["InitialVariantWeight"] = input.InitialVariantWeight;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.ModelName !== undefined) {
        bodyParams["ModelName"] = input.ModelName;
    }
    if (input.VariantName !== undefined) {
        bodyParams["VariantName"] = input.VariantName;
    }
    return bodyParams;
};
const serializeAws_json1_1ProductionVariantList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ProductionVariant(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PropertyNameQuery = (input, context) => {
    const bodyParams = {};
    if (input.PropertyNameHint !== undefined) {
        bodyParams["PropertyNameHint"] = input.PropertyNameHint;
    }
    return bodyParams;
};
const serializeAws_json1_1PublicWorkforceTaskPrice = (input, context) => {
    const bodyParams = {};
    if (input.AmountInUsd !== undefined) {
        bodyParams["AmountInUsd"] = serializeAws_json1_1USD(input.AmountInUsd, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RealtimeInferenceInstanceTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RenderUiTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.Task !== undefined) {
        bodyParams["Task"] = serializeAws_json1_1RenderableTask(input.Task, context);
    }
    if (input.UiTemplate !== undefined) {
        bodyParams["UiTemplate"] = serializeAws_json1_1UiTemplate(input.UiTemplate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RenderableTask = (input, context) => {
    const bodyParams = {};
    if (input.Input !== undefined) {
        bodyParams["Input"] = input.Input;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceConfig = (input, context) => {
    const bodyParams = {};
    if (input.InstanceCount !== undefined) {
        bodyParams["InstanceCount"] = input.InstanceCount;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    if (input.VolumeSizeInGB !== undefined) {
        bodyParams["VolumeSizeInGB"] = input.VolumeSizeInGB;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceLimits = (input, context) => {
    const bodyParams = {};
    if (input.MaxNumberOfTrainingJobs !== undefined) {
        bodyParams["MaxNumberOfTrainingJobs"] = input.MaxNumberOfTrainingJobs;
    }
    if (input.MaxParallelTrainingJobs !== undefined) {
        bodyParams["MaxParallelTrainingJobs"] = input.MaxParallelTrainingJobs;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceSpec = (input, context) => {
    const bodyParams = {};
    if (input.EnvironmentArn !== undefined) {
        bodyParams["EnvironmentArn"] = input.EnvironmentArn;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    return bodyParams;
};
const serializeAws_json1_1ResponseMIMETypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RetentionPolicy = (input, context) => {
    const bodyParams = {};
    if (input.HomeEfsFileSystem !== undefined) {
        bodyParams["HomeEfsFileSystem"] = input.HomeEfsFileSystem;
    }
    return bodyParams;
};
const serializeAws_json1_1RuleParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1S3DataSource = (input, context) => {
    const bodyParams = {};
    if (input.AttributeNames !== undefined) {
        bodyParams["AttributeNames"] = serializeAws_json1_1AttributeNames(input.AttributeNames, context);
    }
    if (input.S3DataDistributionType !== undefined) {
        bodyParams["S3DataDistributionType"] = input.S3DataDistributionType;
    }
    if (input.S3DataType !== undefined) {
        bodyParams["S3DataType"] = input.S3DataType;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1ScheduleConfig = (input, context) => {
    const bodyParams = {};
    if (input.ScheduleExpression !== undefined) {
        bodyParams["ScheduleExpression"] = input.ScheduleExpression;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchExpression = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.NestedFilters !== undefined) {
        bodyParams["NestedFilters"] = serializeAws_json1_1NestedFiltersList(input.NestedFilters, context);
    }
    if (input.Operator !== undefined) {
        bodyParams["Operator"] = input.Operator;
    }
    if (input.SubExpressions !== undefined) {
        bodyParams["SubExpressions"] = serializeAws_json1_1SearchExpressionList(input.SubExpressions, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SearchExpressionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SearchExpression(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SearchRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Resource !== undefined) {
        bodyParams["Resource"] = input.Resource;
    }
    if (input.SearchExpression !== undefined) {
        bodyParams["SearchExpression"] = serializeAws_json1_1SearchExpression(input.SearchExpression, context);
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1SecurityGroupIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SharingSettings = (input, context) => {
    const bodyParams = {};
    if (input.NotebookOutputOption !== undefined) {
        bodyParams["NotebookOutputOption"] = input.NotebookOutputOption;
    }
    if (input.S3KmsKeyId !== undefined) {
        bodyParams["S3KmsKeyId"] = input.S3KmsKeyId;
    }
    if (input.S3OutputPath !== undefined) {
        bodyParams["S3OutputPath"] = input.S3OutputPath;
    }
    return bodyParams;
};
const serializeAws_json1_1ShuffleConfig = (input, context) => {
    const bodyParams = {};
    if (input.Seed !== undefined) {
        bodyParams["Seed"] = input.Seed;
    }
    return bodyParams;
};
const serializeAws_json1_1SourceAlgorithm = (input, context) => {
    const bodyParams = {};
    if (input.AlgorithmName !== undefined) {
        bodyParams["AlgorithmName"] = input.AlgorithmName;
    }
    if (input.ModelDataUrl !== undefined) {
        bodyParams["ModelDataUrl"] = input.ModelDataUrl;
    }
    return bodyParams;
};
const serializeAws_json1_1SourceAlgorithmList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SourceAlgorithm(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SourceAlgorithmSpecification = (input, context) => {
    const bodyParams = {};
    if (input.SourceAlgorithms !== undefined) {
        bodyParams["SourceAlgorithms"] = serializeAws_json1_1SourceAlgorithmList(input.SourceAlgorithms, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SourceIpConfig = (input, context) => {
    const bodyParams = {};
    if (input.Cidrs !== undefined) {
        bodyParams["Cidrs"] = serializeAws_json1_1Cidrs(input.Cidrs, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartMonitoringScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.MonitoringScheduleName !== undefined) {
        bodyParams["MonitoringScheduleName"] = input.MonitoringScheduleName;
    }
    return bodyParams;
};
const serializeAws_json1_1StartNotebookInstanceInput = (input, context) => {
    const bodyParams = {};
    if (input.NotebookInstanceName !== undefined) {
        bodyParams["NotebookInstanceName"] = input.NotebookInstanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopAutoMLJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.AutoMLJobName !== undefined) {
        bodyParams["AutoMLJobName"] = input.AutoMLJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopCompilationJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.CompilationJobName !== undefined) {
        bodyParams["CompilationJobName"] = input.CompilationJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopHyperParameterTuningJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.HyperParameterTuningJobName !== undefined) {
        bodyParams["HyperParameterTuningJobName"] =
            input.HyperParameterTuningJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopLabelingJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.LabelingJobName !== undefined) {
        bodyParams["LabelingJobName"] = input.LabelingJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopMonitoringScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.MonitoringScheduleName !== undefined) {
        bodyParams["MonitoringScheduleName"] = input.MonitoringScheduleName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopNotebookInstanceInput = (input, context) => {
    const bodyParams = {};
    if (input.NotebookInstanceName !== undefined) {
        bodyParams["NotebookInstanceName"] = input.NotebookInstanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopProcessingJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProcessingJobName !== undefined) {
        bodyParams["ProcessingJobName"] = input.ProcessingJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopTrainingJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.TrainingJobName !== undefined) {
        bodyParams["TrainingJobName"] = input.TrainingJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopTransformJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.TransformJobName !== undefined) {
        bodyParams["TransformJobName"] = input.TransformJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1StoppingCondition = (input, context) => {
    const bodyParams = {};
    if (input.MaxRuntimeInSeconds !== undefined) {
        bodyParams["MaxRuntimeInSeconds"] = input.MaxRuntimeInSeconds;
    }
    if (input.MaxWaitTimeInSeconds !== undefined) {
        bodyParams["MaxWaitTimeInSeconds"] = input.MaxWaitTimeInSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1Subnets = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SuggestionQuery = (input, context) => {
    const bodyParams = {};
    if (input.PropertyNameQuery !== undefined) {
        bodyParams["PropertyNameQuery"] = serializeAws_json1_1PropertyNameQuery(input.PropertyNameQuery, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TaskKeywords = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TensorBoardAppSettings = (input, context) => {
    const bodyParams = {};
    if (input.DefaultResourceSpec !== undefined) {
        bodyParams["DefaultResourceSpec"] = serializeAws_json1_1ResourceSpec(input.DefaultResourceSpec, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TensorBoardOutputConfig = (input, context) => {
    const bodyParams = {};
    if (input.LocalPath !== undefined) {
        bodyParams["LocalPath"] = input.LocalPath;
    }
    if (input.S3OutputPath !== undefined) {
        bodyParams["S3OutputPath"] = input.S3OutputPath;
    }
    return bodyParams;
};
const serializeAws_json1_1TrainingInstanceTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TrainingJobDefinition = (input, context) => {
    const bodyParams = {};
    if (input.HyperParameters !== undefined) {
        bodyParams["HyperParameters"] = serializeAws_json1_1HyperParameters(input.HyperParameters, context);
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(input.InputDataConfig, context);
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context);
    }
    if (input.ResourceConfig !== undefined) {
        bodyParams["ResourceConfig"] = serializeAws_json1_1ResourceConfig(input.ResourceConfig, context);
    }
    if (input.StoppingCondition !== undefined) {
        bodyParams["StoppingCondition"] = serializeAws_json1_1StoppingCondition(input.StoppingCondition, context);
    }
    if (input.TrainingInputMode !== undefined) {
        bodyParams["TrainingInputMode"] = input.TrainingInputMode;
    }
    return bodyParams;
};
const serializeAws_json1_1TrainingSpecification = (input, context) => {
    const bodyParams = {};
    if (input.MetricDefinitions !== undefined) {
        bodyParams["MetricDefinitions"] = serializeAws_json1_1MetricDefinitionList(input.MetricDefinitions, context);
    }
    if (input.SupportedHyperParameters !== undefined) {
        bodyParams["SupportedHyperParameters"] = serializeAws_json1_1HyperParameterSpecifications(input.SupportedHyperParameters, context);
    }
    if (input.SupportedTrainingInstanceTypes !== undefined) {
        bodyParams["SupportedTrainingInstanceTypes"] = serializeAws_json1_1TrainingInstanceTypes(input.SupportedTrainingInstanceTypes, context);
    }
    if (input.SupportedTuningJobObjectiveMetrics !== undefined) {
        bodyParams["SupportedTuningJobObjectiveMetrics"] = serializeAws_json1_1HyperParameterTuningJobObjectives(input.SupportedTuningJobObjectiveMetrics, context);
    }
    if (input.SupportsDistributedTraining !== undefined) {
        bodyParams["SupportsDistributedTraining"] =
            input.SupportsDistributedTraining;
    }
    if (input.TrainingChannels !== undefined) {
        bodyParams["TrainingChannels"] = serializeAws_json1_1ChannelSpecifications(input.TrainingChannels, context);
    }
    if (input.TrainingImage !== undefined) {
        bodyParams["TrainingImage"] = input.TrainingImage;
    }
    if (input.TrainingImageDigest !== undefined) {
        bodyParams["TrainingImageDigest"] = input.TrainingImageDigest;
    }
    return bodyParams;
};
const serializeAws_json1_1TransformDataSource = (input, context) => {
    const bodyParams = {};
    if (input.S3DataSource !== undefined) {
        bodyParams["S3DataSource"] = serializeAws_json1_1TransformS3DataSource(input.S3DataSource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TransformEnvironmentMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1TransformInput = (input, context) => {
    const bodyParams = {};
    if (input.CompressionType !== undefined) {
        bodyParams["CompressionType"] = input.CompressionType;
    }
    if (input.ContentType !== undefined) {
        bodyParams["ContentType"] = input.ContentType;
    }
    if (input.DataSource !== undefined) {
        bodyParams["DataSource"] = serializeAws_json1_1TransformDataSource(input.DataSource, context);
    }
    if (input.SplitType !== undefined) {
        bodyParams["SplitType"] = input.SplitType;
    }
    return bodyParams;
};
const serializeAws_json1_1TransformInstanceTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TransformJobDefinition = (input, context) => {
    const bodyParams = {};
    if (input.BatchStrategy !== undefined) {
        bodyParams["BatchStrategy"] = input.BatchStrategy;
    }
    if (input.Environment !== undefined) {
        bodyParams["Environment"] = serializeAws_json1_1TransformEnvironmentMap(input.Environment, context);
    }
    if (input.MaxConcurrentTransforms !== undefined) {
        bodyParams["MaxConcurrentTransforms"] = input.MaxConcurrentTransforms;
    }
    if (input.MaxPayloadInMB !== undefined) {
        bodyParams["MaxPayloadInMB"] = input.MaxPayloadInMB;
    }
    if (input.TransformInput !== undefined) {
        bodyParams["TransformInput"] = serializeAws_json1_1TransformInput(input.TransformInput, context);
    }
    if (input.TransformOutput !== undefined) {
        bodyParams["TransformOutput"] = serializeAws_json1_1TransformOutput(input.TransformOutput, context);
    }
    if (input.TransformResources !== undefined) {
        bodyParams["TransformResources"] = serializeAws_json1_1TransformResources(input.TransformResources, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TransformOutput = (input, context) => {
    const bodyParams = {};
    if (input.Accept !== undefined) {
        bodyParams["Accept"] = input.Accept;
    }
    if (input.AssembleWith !== undefined) {
        bodyParams["AssembleWith"] = input.AssembleWith;
    }
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.S3OutputPath !== undefined) {
        bodyParams["S3OutputPath"] = input.S3OutputPath;
    }
    return bodyParams;
};
const serializeAws_json1_1TransformResources = (input, context) => {
    const bodyParams = {};
    if (input.InstanceCount !== undefined) {
        bodyParams["InstanceCount"] = input.InstanceCount;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1TransformS3DataSource = (input, context) => {
    const bodyParams = {};
    if (input.S3DataType !== undefined) {
        bodyParams["S3DataType"] = input.S3DataType;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1TrialComponentArtifact = (input, context) => {
    const bodyParams = {};
    if (input.MediaType !== undefined) {
        bodyParams["MediaType"] = input.MediaType;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1TrialComponentArtifacts = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1TrialComponentArtifact(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1TrialComponentParameterValue = (input, context) => {
    const bodyParams = {};
    if (input.NumberValue !== undefined) {
        bodyParams["NumberValue"] = input.NumberValue;
    }
    if (input.StringValue !== undefined) {
        bodyParams["StringValue"] = input.StringValue;
    }
    return bodyParams;
};
const serializeAws_json1_1TrialComponentParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1TrialComponentParameterValue(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1TrialComponentStatus = (input, context) => {
    const bodyParams = {};
    if (input.Message !== undefined) {
        bodyParams["Message"] = input.Message;
    }
    if (input.PrimaryStatus !== undefined) {
        bodyParams["PrimaryStatus"] = input.PrimaryStatus;
    }
    return bodyParams;
};
const serializeAws_json1_1TuningJobCompletionCriteria = (input, context) => {
    const bodyParams = {};
    if (input.TargetObjectiveMetricValue !== undefined) {
        bodyParams["TargetObjectiveMetricValue"] = input.TargetObjectiveMetricValue;
    }
    return bodyParams;
};
const serializeAws_json1_1USD = (input, context) => {
    const bodyParams = {};
    if (input.Cents !== undefined) {
        bodyParams["Cents"] = input.Cents;
    }
    if (input.Dollars !== undefined) {
        bodyParams["Dollars"] = input.Dollars;
    }
    if (input.TenthFractionsOfACent !== undefined) {
        bodyParams["TenthFractionsOfACent"] = input.TenthFractionsOfACent;
    }
    return bodyParams;
};
const serializeAws_json1_1UiConfig = (input, context) => {
    const bodyParams = {};
    if (input.UiTemplateS3Uri !== undefined) {
        bodyParams["UiTemplateS3Uri"] = input.UiTemplateS3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1UiTemplate = (input, context) => {
    const bodyParams = {};
    if (input.Content !== undefined) {
        bodyParams["Content"] = input.Content;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateCodeRepositoryInput = (input, context) => {
    const bodyParams = {};
    if (input.CodeRepositoryName !== undefined) {
        bodyParams["CodeRepositoryName"] = input.CodeRepositoryName;
    }
    if (input.GitConfig !== undefined) {
        bodyParams["GitConfig"] = serializeAws_json1_1GitConfigForUpdate(input.GitConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDomainRequest = (input, context) => {
    const bodyParams = {};
    if (input.DefaultUserSettings !== undefined) {
        bodyParams["DefaultUserSettings"] = serializeAws_json1_1UserSettings(input.DefaultUserSettings, context);
    }
    if (input.DomainId !== undefined) {
        bodyParams["DomainId"] = input.DomainId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateEndpointInput = (input, context) => {
    const bodyParams = {};
    if (input.EndpointConfigName !== undefined) {
        bodyParams["EndpointConfigName"] = input.EndpointConfigName;
    }
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesInput = (input, context) => {
    const bodyParams = {};
    if (input.DesiredWeightsAndCapacities !== undefined) {
        bodyParams["DesiredWeightsAndCapacities"] = serializeAws_json1_1DesiredWeightAndCapacityList(input.DesiredWeightsAndCapacities, context);
    }
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateExperimentRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.ExperimentName !== undefined) {
        bodyParams["ExperimentName"] = input.ExperimentName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateMonitoringScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.MonitoringScheduleConfig !== undefined) {
        bodyParams["MonitoringScheduleConfig"] = serializeAws_json1_1MonitoringScheduleConfig(input.MonitoringScheduleConfig, context);
    }
    if (input.MonitoringScheduleName !== undefined) {
        bodyParams["MonitoringScheduleName"] = input.MonitoringScheduleName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateNotebookInstanceInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceleratorTypes !== undefined) {
        bodyParams["AcceleratorTypes"] = serializeAws_json1_1NotebookInstanceAcceleratorTypes(input.AcceleratorTypes, context);
    }
    if (input.AdditionalCodeRepositories !== undefined) {
        bodyParams["AdditionalCodeRepositories"] = serializeAws_json1_1AdditionalCodeRepositoryNamesOrUrls(input.AdditionalCodeRepositories, context);
    }
    if (input.DefaultCodeRepository !== undefined) {
        bodyParams["DefaultCodeRepository"] = input.DefaultCodeRepository;
    }
    if (input.DisassociateAcceleratorTypes !== undefined) {
        bodyParams["DisassociateAcceleratorTypes"] =
            input.DisassociateAcceleratorTypes;
    }
    if (input.DisassociateAdditionalCodeRepositories !== undefined) {
        bodyParams["DisassociateAdditionalCodeRepositories"] =
            input.DisassociateAdditionalCodeRepositories;
    }
    if (input.DisassociateDefaultCodeRepository !== undefined) {
        bodyParams["DisassociateDefaultCodeRepository"] =
            input.DisassociateDefaultCodeRepository;
    }
    if (input.DisassociateLifecycleConfig !== undefined) {
        bodyParams["DisassociateLifecycleConfig"] =
            input.DisassociateLifecycleConfig;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.LifecycleConfigName !== undefined) {
        bodyParams["LifecycleConfigName"] = input.LifecycleConfigName;
    }
    if (input.NotebookInstanceName !== undefined) {
        bodyParams["NotebookInstanceName"] = input.NotebookInstanceName;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.RootAccess !== undefined) {
        bodyParams["RootAccess"] = input.RootAccess;
    }
    if (input.VolumeSizeInGB !== undefined) {
        bodyParams["VolumeSizeInGB"] = input.VolumeSizeInGB;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateNotebookInstanceLifecycleConfigInput = (input, context) => {
    const bodyParams = {};
    if (input.NotebookInstanceLifecycleConfigName !== undefined) {
        bodyParams["NotebookInstanceLifecycleConfigName"] =
            input.NotebookInstanceLifecycleConfigName;
    }
    if (input.OnCreate !== undefined) {
        bodyParams["OnCreate"] = serializeAws_json1_1NotebookInstanceLifecycleConfigList(input.OnCreate, context);
    }
    if (input.OnStart !== undefined) {
        bodyParams["OnStart"] = serializeAws_json1_1NotebookInstanceLifecycleConfigList(input.OnStart, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateTrialComponentRequest = (input, context) => {
    const bodyParams = {};
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.InputArtifacts !== undefined) {
        bodyParams["InputArtifacts"] = serializeAws_json1_1TrialComponentArtifacts(input.InputArtifacts, context);
    }
    if (input.InputArtifactsToRemove !== undefined) {
        bodyParams["InputArtifactsToRemove"] = serializeAws_json1_1ListTrialComponentKey256(input.InputArtifactsToRemove, context);
    }
    if (input.OutputArtifacts !== undefined) {
        bodyParams["OutputArtifacts"] = serializeAws_json1_1TrialComponentArtifacts(input.OutputArtifacts, context);
    }
    if (input.OutputArtifactsToRemove !== undefined) {
        bodyParams["OutputArtifactsToRemove"] = serializeAws_json1_1ListTrialComponentKey256(input.OutputArtifactsToRemove, context);
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1TrialComponentParameters(input.Parameters, context);
    }
    if (input.ParametersToRemove !== undefined) {
        bodyParams["ParametersToRemove"] = serializeAws_json1_1ListTrialComponentKey256(input.ParametersToRemove, context);
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = serializeAws_json1_1TrialComponentStatus(input.Status, context);
    }
    if (input.TrialComponentName !== undefined) {
        bodyParams["TrialComponentName"] = input.TrialComponentName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateTrialRequest = (input, context) => {
    const bodyParams = {};
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.TrialName !== undefined) {
        bodyParams["TrialName"] = input.TrialName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateUserProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.DomainId !== undefined) {
        bodyParams["DomainId"] = input.DomainId;
    }
    if (input.UserProfileName !== undefined) {
        bodyParams["UserProfileName"] = input.UserProfileName;
    }
    if (input.UserSettings !== undefined) {
        bodyParams["UserSettings"] = serializeAws_json1_1UserSettings(input.UserSettings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateWorkforceRequest = (input, context) => {
    const bodyParams = {};
    if (input.SourceIpConfig !== undefined) {
        bodyParams["SourceIpConfig"] = serializeAws_json1_1SourceIpConfig(input.SourceIpConfig, context);
    }
    if (input.WorkforceName !== undefined) {
        bodyParams["WorkforceName"] = input.WorkforceName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateWorkteamRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.MemberDefinitions !== undefined) {
        bodyParams["MemberDefinitions"] = serializeAws_json1_1MemberDefinitions(input.MemberDefinitions, context);
    }
    if (input.NotificationConfiguration !== undefined) {
        bodyParams["NotificationConfiguration"] = serializeAws_json1_1NotificationConfiguration(input.NotificationConfiguration, context);
    }
    if (input.WorkteamName !== undefined) {
        bodyParams["WorkteamName"] = input.WorkteamName;
    }
    return bodyParams;
};
const serializeAws_json1_1UserSettings = (input, context) => {
    const bodyParams = {};
    if (input.ExecutionRole !== undefined) {
        bodyParams["ExecutionRole"] = input.ExecutionRole;
    }
    if (input.JupyterServerAppSettings !== undefined) {
        bodyParams["JupyterServerAppSettings"] = serializeAws_json1_1JupyterServerAppSettings(input.JupyterServerAppSettings, context);
    }
    if (input.KernelGatewayAppSettings !== undefined) {
        bodyParams["KernelGatewayAppSettings"] = serializeAws_json1_1KernelGatewayAppSettings(input.KernelGatewayAppSettings, context);
    }
    if (input.SecurityGroups !== undefined) {
        bodyParams["SecurityGroups"] = serializeAws_json1_1SecurityGroupIds(input.SecurityGroups, context);
    }
    if (input.SharingSettings !== undefined) {
        bodyParams["SharingSettings"] = serializeAws_json1_1SharingSettings(input.SharingSettings, context);
    }
    if (input.TensorBoardAppSettings !== undefined) {
        bodyParams["TensorBoardAppSettings"] = serializeAws_json1_1TensorBoardAppSettings(input.TensorBoardAppSettings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1VpcConfig = (input, context) => {
    const bodyParams = {};
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1VpcSecurityGroupIds(input.SecurityGroupIds, context);
    }
    if (input.Subnets !== undefined) {
        bodyParams["Subnets"] = serializeAws_json1_1Subnets(input.Subnets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1VpcSecurityGroupIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const deserializeAws_json1_1AddTagsOutput = (output, context) => {
    let contents = {
        __type: "AddTagsOutput",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1AdditionalCodeRepositoryNamesOrUrls = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AlgorithmSpecification = (output, context) => {
    let contents = {
        __type: "AlgorithmSpecification",
        AlgorithmName: undefined,
        EnableSageMakerMetricsTimeSeries: undefined,
        MetricDefinitions: undefined,
        TrainingImage: undefined,
        TrainingInputMode: undefined
    };
    if (output.AlgorithmName !== undefined && output.AlgorithmName !== null) {
        contents.AlgorithmName = output.AlgorithmName;
    }
    if (output.EnableSageMakerMetricsTimeSeries !== undefined &&
        output.EnableSageMakerMetricsTimeSeries !== null) {
        contents.EnableSageMakerMetricsTimeSeries =
            output.EnableSageMakerMetricsTimeSeries;
    }
    if (output.MetricDefinitions !== undefined &&
        output.MetricDefinitions !== null) {
        contents.MetricDefinitions = deserializeAws_json1_1MetricDefinitionList(output.MetricDefinitions, context);
    }
    if (output.TrainingImage !== undefined && output.TrainingImage !== null) {
        contents.TrainingImage = output.TrainingImage;
    }
    if (output.TrainingInputMode !== undefined &&
        output.TrainingInputMode !== null) {
        contents.TrainingInputMode = output.TrainingInputMode;
    }
    return contents;
};
const deserializeAws_json1_1AlgorithmStatusDetails = (output, context) => {
    let contents = {
        __type: "AlgorithmStatusDetails",
        ImageScanStatuses: undefined,
        ValidationStatuses: undefined
    };
    if (output.ImageScanStatuses !== undefined &&
        output.ImageScanStatuses !== null) {
        contents.ImageScanStatuses = deserializeAws_json1_1AlgorithmStatusItemList(output.ImageScanStatuses, context);
    }
    if (output.ValidationStatuses !== undefined &&
        output.ValidationStatuses !== null) {
        contents.ValidationStatuses = deserializeAws_json1_1AlgorithmStatusItemList(output.ValidationStatuses, context);
    }
    return contents;
};
const deserializeAws_json1_1AlgorithmStatusItem = (output, context) => {
    let contents = {
        __type: "AlgorithmStatusItem",
        FailureReason: undefined,
        Name: undefined,
        Status: undefined
    };
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1AlgorithmStatusItemList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AlgorithmStatusItem(entry, context));
};
const deserializeAws_json1_1AlgorithmSummary = (output, context) => {
    let contents = {
        __type: "AlgorithmSummary",
        AlgorithmArn: undefined,
        AlgorithmDescription: undefined,
        AlgorithmName: undefined,
        AlgorithmStatus: undefined,
        CreationTime: undefined
    };
    if (output.AlgorithmArn !== undefined && output.AlgorithmArn !== null) {
        contents.AlgorithmArn = output.AlgorithmArn;
    }
    if (output.AlgorithmDescription !== undefined &&
        output.AlgorithmDescription !== null) {
        contents.AlgorithmDescription = output.AlgorithmDescription;
    }
    if (output.AlgorithmName !== undefined && output.AlgorithmName !== null) {
        contents.AlgorithmName = output.AlgorithmName;
    }
    if (output.AlgorithmStatus !== undefined && output.AlgorithmStatus !== null) {
        contents.AlgorithmStatus = output.AlgorithmStatus;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1AlgorithmSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AlgorithmSummary(entry, context));
};
const deserializeAws_json1_1AlgorithmValidationProfile = (output, context) => {
    let contents = {
        __type: "AlgorithmValidationProfile",
        ProfileName: undefined,
        TrainingJobDefinition: undefined,
        TransformJobDefinition: undefined
    };
    if (output.ProfileName !== undefined && output.ProfileName !== null) {
        contents.ProfileName = output.ProfileName;
    }
    if (output.TrainingJobDefinition !== undefined &&
        output.TrainingJobDefinition !== null) {
        contents.TrainingJobDefinition = deserializeAws_json1_1TrainingJobDefinition(output.TrainingJobDefinition, context);
    }
    if (output.TransformJobDefinition !== undefined &&
        output.TransformJobDefinition !== null) {
        contents.TransformJobDefinition = deserializeAws_json1_1TransformJobDefinition(output.TransformJobDefinition, context);
    }
    return contents;
};
const deserializeAws_json1_1AlgorithmValidationProfiles = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AlgorithmValidationProfile(entry, context));
};
const deserializeAws_json1_1AlgorithmValidationSpecification = (output, context) => {
    let contents = {
        __type: "AlgorithmValidationSpecification",
        ValidationProfiles: undefined,
        ValidationRole: undefined
    };
    if (output.ValidationProfiles !== undefined &&
        output.ValidationProfiles !== null) {
        contents.ValidationProfiles = deserializeAws_json1_1AlgorithmValidationProfiles(output.ValidationProfiles, context);
    }
    if (output.ValidationRole !== undefined && output.ValidationRole !== null) {
        contents.ValidationRole = output.ValidationRole;
    }
    return contents;
};
const deserializeAws_json1_1AnnotationConsolidationConfig = (output, context) => {
    let contents = {
        __type: "AnnotationConsolidationConfig",
        AnnotationConsolidationLambdaArn: undefined
    };
    if (output.AnnotationConsolidationLambdaArn !== undefined &&
        output.AnnotationConsolidationLambdaArn !== null) {
        contents.AnnotationConsolidationLambdaArn =
            output.AnnotationConsolidationLambdaArn;
    }
    return contents;
};
const deserializeAws_json1_1AppDetails = (output, context) => {
    let contents = {
        __type: "AppDetails",
        AppName: undefined,
        AppType: undefined,
        CreationTime: undefined,
        DomainId: undefined,
        Status: undefined,
        UserProfileName: undefined
    };
    if (output.AppName !== undefined && output.AppName !== null) {
        contents.AppName = output.AppName;
    }
    if (output.AppType !== undefined && output.AppType !== null) {
        contents.AppType = output.AppType;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DomainId !== undefined && output.DomainId !== null) {
        contents.DomainId = output.DomainId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UserProfileName !== undefined && output.UserProfileName !== null) {
        contents.UserProfileName = output.UserProfileName;
    }
    return contents;
};
const deserializeAws_json1_1AppList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AppDetails(entry, context));
};
const deserializeAws_json1_1AppSpecification = (output, context) => {
    let contents = {
        __type: "AppSpecification",
        ContainerArguments: undefined,
        ContainerEntrypoint: undefined,
        ImageUri: undefined
    };
    if (output.ContainerArguments !== undefined &&
        output.ContainerArguments !== null) {
        contents.ContainerArguments = deserializeAws_json1_1ContainerArguments(output.ContainerArguments, context);
    }
    if (output.ContainerEntrypoint !== undefined &&
        output.ContainerEntrypoint !== null) {
        contents.ContainerEntrypoint = deserializeAws_json1_1ContainerEntrypoint(output.ContainerEntrypoint, context);
    }
    if (output.ImageUri !== undefined && output.ImageUri !== null) {
        contents.ImageUri = output.ImageUri;
    }
    return contents;
};
const deserializeAws_json1_1AssociateTrialComponentResponse = (output, context) => {
    let contents = {
        __type: "AssociateTrialComponentResponse",
        TrialArn: undefined,
        TrialComponentArn: undefined
    };
    if (output.TrialArn !== undefined && output.TrialArn !== null) {
        contents.TrialArn = output.TrialArn;
    }
    if (output.TrialComponentArn !== undefined &&
        output.TrialComponentArn !== null) {
        contents.TrialComponentArn = output.TrialComponentArn;
    }
    return contents;
};
const deserializeAws_json1_1AttributeNames = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AutoMLCandidate = (output, context) => {
    let contents = {
        __type: "AutoMLCandidate",
        CandidateName: undefined,
        CandidateStatus: undefined,
        CandidateSteps: undefined,
        CreationTime: undefined,
        EndTime: undefined,
        FailureReason: undefined,
        FinalAutoMLJobObjectiveMetric: undefined,
        InferenceContainers: undefined,
        LastModifiedTime: undefined,
        ObjectiveStatus: undefined
    };
    if (output.CandidateName !== undefined && output.CandidateName !== null) {
        contents.CandidateName = output.CandidateName;
    }
    if (output.CandidateStatus !== undefined && output.CandidateStatus !== null) {
        contents.CandidateStatus = output.CandidateStatus;
    }
    if (output.CandidateSteps !== undefined && output.CandidateSteps !== null) {
        contents.CandidateSteps = deserializeAws_json1_1CandidateSteps(output.CandidateSteps, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.FinalAutoMLJobObjectiveMetric !== undefined &&
        output.FinalAutoMLJobObjectiveMetric !== null) {
        contents.FinalAutoMLJobObjectiveMetric = deserializeAws_json1_1FinalAutoMLJobObjectiveMetric(output.FinalAutoMLJobObjectiveMetric, context);
    }
    if (output.InferenceContainers !== undefined &&
        output.InferenceContainers !== null) {
        contents.InferenceContainers = deserializeAws_json1_1AutoMLContainerDefinitions(output.InferenceContainers, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.ObjectiveStatus !== undefined && output.ObjectiveStatus !== null) {
        contents.ObjectiveStatus = output.ObjectiveStatus;
    }
    return contents;
};
const deserializeAws_json1_1AutoMLCandidateStep = (output, context) => {
    let contents = {
        __type: "AutoMLCandidateStep",
        CandidateStepArn: undefined,
        CandidateStepName: undefined,
        CandidateStepType: undefined
    };
    if (output.CandidateStepArn !== undefined &&
        output.CandidateStepArn !== null) {
        contents.CandidateStepArn = output.CandidateStepArn;
    }
    if (output.CandidateStepName !== undefined &&
        output.CandidateStepName !== null) {
        contents.CandidateStepName = output.CandidateStepName;
    }
    if (output.CandidateStepType !== undefined &&
        output.CandidateStepType !== null) {
        contents.CandidateStepType = output.CandidateStepType;
    }
    return contents;
};
const deserializeAws_json1_1AutoMLCandidates = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AutoMLCandidate(entry, context));
};
const deserializeAws_json1_1AutoMLChannel = (output, context) => {
    let contents = {
        __type: "AutoMLChannel",
        CompressionType: undefined,
        DataSource: undefined,
        TargetAttributeName: undefined
    };
    if (output.CompressionType !== undefined && output.CompressionType !== null) {
        contents.CompressionType = output.CompressionType;
    }
    if (output.DataSource !== undefined && output.DataSource !== null) {
        contents.DataSource = deserializeAws_json1_1AutoMLDataSource(output.DataSource, context);
    }
    if (output.TargetAttributeName !== undefined &&
        output.TargetAttributeName !== null) {
        contents.TargetAttributeName = output.TargetAttributeName;
    }
    return contents;
};
const deserializeAws_json1_1AutoMLContainerDefinition = (output, context) => {
    let contents = {
        __type: "AutoMLContainerDefinition",
        Environment: undefined,
        Image: undefined,
        ModelDataUrl: undefined
    };
    if (output.Environment !== undefined && output.Environment !== null) {
        contents.Environment = deserializeAws_json1_1EnvironmentMap(output.Environment, context);
    }
    if (output.Image !== undefined && output.Image !== null) {
        contents.Image = output.Image;
    }
    if (output.ModelDataUrl !== undefined && output.ModelDataUrl !== null) {
        contents.ModelDataUrl = output.ModelDataUrl;
    }
    return contents;
};
const deserializeAws_json1_1AutoMLContainerDefinitions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AutoMLContainerDefinition(entry, context));
};
const deserializeAws_json1_1AutoMLDataSource = (output, context) => {
    let contents = {
        __type: "AutoMLDataSource",
        S3DataSource: undefined
    };
    if (output.S3DataSource !== undefined && output.S3DataSource !== null) {
        contents.S3DataSource = deserializeAws_json1_1AutoMLS3DataSource(output.S3DataSource, context);
    }
    return contents;
};
const deserializeAws_json1_1AutoMLInputDataConfig = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AutoMLChannel(entry, context));
};
const deserializeAws_json1_1AutoMLJobArtifacts = (output, context) => {
    let contents = {
        __type: "AutoMLJobArtifacts",
        CandidateDefinitionNotebookLocation: undefined,
        DataExplorationNotebookLocation: undefined
    };
    if (output.CandidateDefinitionNotebookLocation !== undefined &&
        output.CandidateDefinitionNotebookLocation !== null) {
        contents.CandidateDefinitionNotebookLocation =
            output.CandidateDefinitionNotebookLocation;
    }
    if (output.DataExplorationNotebookLocation !== undefined &&
        output.DataExplorationNotebookLocation !== null) {
        contents.DataExplorationNotebookLocation =
            output.DataExplorationNotebookLocation;
    }
    return contents;
};
const deserializeAws_json1_1AutoMLJobCompletionCriteria = (output, context) => {
    let contents = {
        __type: "AutoMLJobCompletionCriteria",
        MaxAutoMLJobRuntimeInSeconds: undefined,
        MaxCandidates: undefined,
        MaxRuntimePerTrainingJobInSeconds: undefined
    };
    if (output.MaxAutoMLJobRuntimeInSeconds !== undefined &&
        output.MaxAutoMLJobRuntimeInSeconds !== null) {
        contents.MaxAutoMLJobRuntimeInSeconds = output.MaxAutoMLJobRuntimeInSeconds;
    }
    if (output.MaxCandidates !== undefined && output.MaxCandidates !== null) {
        contents.MaxCandidates = output.MaxCandidates;
    }
    if (output.MaxRuntimePerTrainingJobInSeconds !== undefined &&
        output.MaxRuntimePerTrainingJobInSeconds !== null) {
        contents.MaxRuntimePerTrainingJobInSeconds =
            output.MaxRuntimePerTrainingJobInSeconds;
    }
    return contents;
};
const deserializeAws_json1_1AutoMLJobConfig = (output, context) => {
    let contents = {
        __type: "AutoMLJobConfig",
        CompletionCriteria: undefined,
        SecurityConfig: undefined
    };
    if (output.CompletionCriteria !== undefined &&
        output.CompletionCriteria !== null) {
        contents.CompletionCriteria = deserializeAws_json1_1AutoMLJobCompletionCriteria(output.CompletionCriteria, context);
    }
    if (output.SecurityConfig !== undefined && output.SecurityConfig !== null) {
        contents.SecurityConfig = deserializeAws_json1_1AutoMLSecurityConfig(output.SecurityConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1AutoMLJobObjective = (output, context) => {
    let contents = {
        __type: "AutoMLJobObjective",
        MetricName: undefined
    };
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    return contents;
};
const deserializeAws_json1_1AutoMLJobSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AutoMLJobSummary(entry, context));
};
const deserializeAws_json1_1AutoMLJobSummary = (output, context) => {
    let contents = {
        __type: "AutoMLJobSummary",
        AutoMLJobArn: undefined,
        AutoMLJobName: undefined,
        AutoMLJobSecondaryStatus: undefined,
        AutoMLJobStatus: undefined,
        CreationTime: undefined,
        EndTime: undefined,
        FailureReason: undefined,
        LastModifiedTime: undefined
    };
    if (output.AutoMLJobArn !== undefined && output.AutoMLJobArn !== null) {
        contents.AutoMLJobArn = output.AutoMLJobArn;
    }
    if (output.AutoMLJobName !== undefined && output.AutoMLJobName !== null) {
        contents.AutoMLJobName = output.AutoMLJobName;
    }
    if (output.AutoMLJobSecondaryStatus !== undefined &&
        output.AutoMLJobSecondaryStatus !== null) {
        contents.AutoMLJobSecondaryStatus = output.AutoMLJobSecondaryStatus;
    }
    if (output.AutoMLJobStatus !== undefined && output.AutoMLJobStatus !== null) {
        contents.AutoMLJobStatus = output.AutoMLJobStatus;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1AutoMLOutputDataConfig = (output, context) => {
    let contents = {
        __type: "AutoMLOutputDataConfig",
        KmsKeyId: undefined,
        S3OutputPath: undefined
    };
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.S3OutputPath !== undefined && output.S3OutputPath !== null) {
        contents.S3OutputPath = output.S3OutputPath;
    }
    return contents;
};
const deserializeAws_json1_1AutoMLS3DataSource = (output, context) => {
    let contents = {
        __type: "AutoMLS3DataSource",
        S3DataType: undefined,
        S3Uri: undefined
    };
    if (output.S3DataType !== undefined && output.S3DataType !== null) {
        contents.S3DataType = output.S3DataType;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1AutoMLSecurityConfig = (output, context) => {
    let contents = {
        __type: "AutoMLSecurityConfig",
        EnableInterContainerTrafficEncryption: undefined,
        VolumeKmsKeyId: undefined,
        VpcConfig: undefined
    };
    if (output.EnableInterContainerTrafficEncryption !== undefined &&
        output.EnableInterContainerTrafficEncryption !== null) {
        contents.EnableInterContainerTrafficEncryption =
            output.EnableInterContainerTrafficEncryption;
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1CandidateSteps = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AutoMLCandidateStep(entry, context));
};
const deserializeAws_json1_1CaptureContentTypeHeader = (output, context) => {
    let contents = {
        __type: "CaptureContentTypeHeader",
        CsvContentTypes: undefined,
        JsonContentTypes: undefined
    };
    if (output.CsvContentTypes !== undefined && output.CsvContentTypes !== null) {
        contents.CsvContentTypes = deserializeAws_json1_1CsvContentTypes(output.CsvContentTypes, context);
    }
    if (output.JsonContentTypes !== undefined &&
        output.JsonContentTypes !== null) {
        contents.JsonContentTypes = deserializeAws_json1_1JsonContentTypes(output.JsonContentTypes, context);
    }
    return contents;
};
const deserializeAws_json1_1CaptureOption = (output, context) => {
    let contents = {
        __type: "CaptureOption",
        CaptureMode: undefined
    };
    if (output.CaptureMode !== undefined && output.CaptureMode !== null) {
        contents.CaptureMode = output.CaptureMode;
    }
    return contents;
};
const deserializeAws_json1_1CaptureOptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CaptureOption(entry, context));
};
const deserializeAws_json1_1CategoricalParameterRange = (output, context) => {
    let contents = {
        __type: "CategoricalParameterRange",
        Name: undefined,
        Values: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1ParameterValues(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1CategoricalParameterRangeSpecification = (output, context) => {
    let contents = {
        __type: "CategoricalParameterRangeSpecification",
        Values: undefined
    };
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1ParameterValues(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1CategoricalParameterRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CategoricalParameterRange(entry, context));
};
const deserializeAws_json1_1Channel = (output, context) => {
    let contents = {
        __type: "Channel",
        ChannelName: undefined,
        CompressionType: undefined,
        ContentType: undefined,
        DataSource: undefined,
        InputMode: undefined,
        RecordWrapperType: undefined,
        ShuffleConfig: undefined
    };
    if (output.ChannelName !== undefined && output.ChannelName !== null) {
        contents.ChannelName = output.ChannelName;
    }
    if (output.CompressionType !== undefined && output.CompressionType !== null) {
        contents.CompressionType = output.CompressionType;
    }
    if (output.ContentType !== undefined && output.ContentType !== null) {
        contents.ContentType = output.ContentType;
    }
    if (output.DataSource !== undefined && output.DataSource !== null) {
        contents.DataSource = deserializeAws_json1_1DataSource(output.DataSource, context);
    }
    if (output.InputMode !== undefined && output.InputMode !== null) {
        contents.InputMode = output.InputMode;
    }
    if (output.RecordWrapperType !== undefined &&
        output.RecordWrapperType !== null) {
        contents.RecordWrapperType = output.RecordWrapperType;
    }
    if (output.ShuffleConfig !== undefined && output.ShuffleConfig !== null) {
        contents.ShuffleConfig = deserializeAws_json1_1ShuffleConfig(output.ShuffleConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1ChannelSpecification = (output, context) => {
    let contents = {
        __type: "ChannelSpecification",
        Description: undefined,
        IsRequired: undefined,
        Name: undefined,
        SupportedCompressionTypes: undefined,
        SupportedContentTypes: undefined,
        SupportedInputModes: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.IsRequired !== undefined && output.IsRequired !== null) {
        contents.IsRequired = output.IsRequired;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SupportedCompressionTypes !== undefined &&
        output.SupportedCompressionTypes !== null) {
        contents.SupportedCompressionTypes = deserializeAws_json1_1CompressionTypes(output.SupportedCompressionTypes, context);
    }
    if (output.SupportedContentTypes !== undefined &&
        output.SupportedContentTypes !== null) {
        contents.SupportedContentTypes = deserializeAws_json1_1ContentTypes(output.SupportedContentTypes, context);
    }
    if (output.SupportedInputModes !== undefined &&
        output.SupportedInputModes !== null) {
        contents.SupportedInputModes = deserializeAws_json1_1InputModes(output.SupportedInputModes, context);
    }
    return contents;
};
const deserializeAws_json1_1ChannelSpecifications = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ChannelSpecification(entry, context));
};
const deserializeAws_json1_1CheckpointConfig = (output, context) => {
    let contents = {
        __type: "CheckpointConfig",
        LocalPath: undefined,
        S3Uri: undefined
    };
    if (output.LocalPath !== undefined && output.LocalPath !== null) {
        contents.LocalPath = output.LocalPath;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1Cidrs = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CodeRepositorySummary = (output, context) => {
    let contents = {
        __type: "CodeRepositorySummary",
        CodeRepositoryArn: undefined,
        CodeRepositoryName: undefined,
        CreationTime: undefined,
        GitConfig: undefined,
        LastModifiedTime: undefined
    };
    if (output.CodeRepositoryArn !== undefined &&
        output.CodeRepositoryArn !== null) {
        contents.CodeRepositoryArn = output.CodeRepositoryArn;
    }
    if (output.CodeRepositoryName !== undefined &&
        output.CodeRepositoryName !== null) {
        contents.CodeRepositoryName = output.CodeRepositoryName;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.GitConfig !== undefined && output.GitConfig !== null) {
        contents.GitConfig = deserializeAws_json1_1GitConfig(output.GitConfig, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1CodeRepositorySummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CodeRepositorySummary(entry, context));
};
const deserializeAws_json1_1CognitoMemberDefinition = (output, context) => {
    let contents = {
        __type: "CognitoMemberDefinition",
        ClientId: undefined,
        UserGroup: undefined,
        UserPool: undefined
    };
    if (output.ClientId !== undefined && output.ClientId !== null) {
        contents.ClientId = output.ClientId;
    }
    if (output.UserGroup !== undefined && output.UserGroup !== null) {
        contents.UserGroup = output.UserGroup;
    }
    if (output.UserPool !== undefined && output.UserPool !== null) {
        contents.UserPool = output.UserPool;
    }
    return contents;
};
const deserializeAws_json1_1CollectionConfiguration = (output, context) => {
    let contents = {
        __type: "CollectionConfiguration",
        CollectionName: undefined,
        CollectionParameters: undefined
    };
    if (output.CollectionName !== undefined && output.CollectionName !== null) {
        contents.CollectionName = output.CollectionName;
    }
    if (output.CollectionParameters !== undefined &&
        output.CollectionParameters !== null) {
        contents.CollectionParameters = deserializeAws_json1_1CollectionParameters(output.CollectionParameters, context);
    }
    return contents;
};
const deserializeAws_json1_1CollectionConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CollectionConfiguration(entry, context));
};
const deserializeAws_json1_1CollectionParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1CompilationJobSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CompilationJobSummary(entry, context));
};
const deserializeAws_json1_1CompilationJobSummary = (output, context) => {
    let contents = {
        __type: "CompilationJobSummary",
        CompilationEndTime: undefined,
        CompilationJobArn: undefined,
        CompilationJobName: undefined,
        CompilationJobStatus: undefined,
        CompilationStartTime: undefined,
        CompilationTargetDevice: undefined,
        CreationTime: undefined,
        LastModifiedTime: undefined
    };
    if (output.CompilationEndTime !== undefined &&
        output.CompilationEndTime !== null) {
        contents.CompilationEndTime = new Date(Math.round(output.CompilationEndTime * 1000));
    }
    if (output.CompilationJobArn !== undefined &&
        output.CompilationJobArn !== null) {
        contents.CompilationJobArn = output.CompilationJobArn;
    }
    if (output.CompilationJobName !== undefined &&
        output.CompilationJobName !== null) {
        contents.CompilationJobName = output.CompilationJobName;
    }
    if (output.CompilationJobStatus !== undefined &&
        output.CompilationJobStatus !== null) {
        contents.CompilationJobStatus = output.CompilationJobStatus;
    }
    if (output.CompilationStartTime !== undefined &&
        output.CompilationStartTime !== null) {
        contents.CompilationStartTime = new Date(Math.round(output.CompilationStartTime * 1000));
    }
    if (output.CompilationTargetDevice !== undefined &&
        output.CompilationTargetDevice !== null) {
        contents.CompilationTargetDevice = output.CompilationTargetDevice;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1CompressionTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    let contents = {
        __type: "ConflictException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ContainerArguments = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ContainerDefinition = (output, context) => {
    let contents = {
        __type: "ContainerDefinition",
        ContainerHostname: undefined,
        Environment: undefined,
        Image: undefined,
        Mode: undefined,
        ModelDataUrl: undefined,
        ModelPackageName: undefined
    };
    if (output.ContainerHostname !== undefined &&
        output.ContainerHostname !== null) {
        contents.ContainerHostname = output.ContainerHostname;
    }
    if (output.Environment !== undefined && output.Environment !== null) {
        contents.Environment = deserializeAws_json1_1EnvironmentMap(output.Environment, context);
    }
    if (output.Image !== undefined && output.Image !== null) {
        contents.Image = output.Image;
    }
    if (output.Mode !== undefined && output.Mode !== null) {
        contents.Mode = output.Mode;
    }
    if (output.ModelDataUrl !== undefined && output.ModelDataUrl !== null) {
        contents.ModelDataUrl = output.ModelDataUrl;
    }
    if (output.ModelPackageName !== undefined &&
        output.ModelPackageName !== null) {
        contents.ModelPackageName = output.ModelPackageName;
    }
    return contents;
};
const deserializeAws_json1_1ContainerDefinitionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ContainerDefinition(entry, context));
};
const deserializeAws_json1_1ContainerEntrypoint = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ContentClassifiers = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ContentTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ContinuousParameterRange = (output, context) => {
    let contents = {
        __type: "ContinuousParameterRange",
        MaxValue: undefined,
        MinValue: undefined,
        Name: undefined,
        ScalingType: undefined
    };
    if (output.MaxValue !== undefined && output.MaxValue !== null) {
        contents.MaxValue = output.MaxValue;
    }
    if (output.MinValue !== undefined && output.MinValue !== null) {
        contents.MinValue = output.MinValue;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ScalingType !== undefined && output.ScalingType !== null) {
        contents.ScalingType = output.ScalingType;
    }
    return contents;
};
const deserializeAws_json1_1ContinuousParameterRangeSpecification = (output, context) => {
    let contents = {
        __type: "ContinuousParameterRangeSpecification",
        MaxValue: undefined,
        MinValue: undefined
    };
    if (output.MaxValue !== undefined && output.MaxValue !== null) {
        contents.MaxValue = output.MaxValue;
    }
    if (output.MinValue !== undefined && output.MinValue !== null) {
        contents.MinValue = output.MinValue;
    }
    return contents;
};
const deserializeAws_json1_1ContinuousParameterRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ContinuousParameterRange(entry, context));
};
const deserializeAws_json1_1CreateAlgorithmOutput = (output, context) => {
    let contents = {
        __type: "CreateAlgorithmOutput",
        AlgorithmArn: undefined
    };
    if (output.AlgorithmArn !== undefined && output.AlgorithmArn !== null) {
        contents.AlgorithmArn = output.AlgorithmArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateAppResponse = (output, context) => {
    let contents = {
        __type: "CreateAppResponse",
        AppArn: undefined
    };
    if (output.AppArn !== undefined && output.AppArn !== null) {
        contents.AppArn = output.AppArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateAutoMLJobResponse = (output, context) => {
    let contents = {
        __type: "CreateAutoMLJobResponse",
        AutoMLJobArn: undefined
    };
    if (output.AutoMLJobArn !== undefined && output.AutoMLJobArn !== null) {
        contents.AutoMLJobArn = output.AutoMLJobArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateCodeRepositoryOutput = (output, context) => {
    let contents = {
        __type: "CreateCodeRepositoryOutput",
        CodeRepositoryArn: undefined
    };
    if (output.CodeRepositoryArn !== undefined &&
        output.CodeRepositoryArn !== null) {
        contents.CodeRepositoryArn = output.CodeRepositoryArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateCompilationJobResponse = (output, context) => {
    let contents = {
        __type: "CreateCompilationJobResponse",
        CompilationJobArn: undefined
    };
    if (output.CompilationJobArn !== undefined &&
        output.CompilationJobArn !== null) {
        contents.CompilationJobArn = output.CompilationJobArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateDomainResponse = (output, context) => {
    let contents = {
        __type: "CreateDomainResponse",
        DomainArn: undefined,
        Url: undefined
    };
    if (output.DomainArn !== undefined && output.DomainArn !== null) {
        contents.DomainArn = output.DomainArn;
    }
    if (output.Url !== undefined && output.Url !== null) {
        contents.Url = output.Url;
    }
    return contents;
};
const deserializeAws_json1_1CreateEndpointConfigOutput = (output, context) => {
    let contents = {
        __type: "CreateEndpointConfigOutput",
        EndpointConfigArn: undefined
    };
    if (output.EndpointConfigArn !== undefined &&
        output.EndpointConfigArn !== null) {
        contents.EndpointConfigArn = output.EndpointConfigArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateEndpointOutput = (output, context) => {
    let contents = {
        __type: "CreateEndpointOutput",
        EndpointArn: undefined
    };
    if (output.EndpointArn !== undefined && output.EndpointArn !== null) {
        contents.EndpointArn = output.EndpointArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateExperimentResponse = (output, context) => {
    let contents = {
        __type: "CreateExperimentResponse",
        ExperimentArn: undefined
    };
    if (output.ExperimentArn !== undefined && output.ExperimentArn !== null) {
        contents.ExperimentArn = output.ExperimentArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateFlowDefinitionResponse = (output, context) => {
    let contents = {
        __type: "CreateFlowDefinitionResponse",
        FlowDefinitionArn: undefined
    };
    if (output.FlowDefinitionArn !== undefined &&
        output.FlowDefinitionArn !== null) {
        contents.FlowDefinitionArn = output.FlowDefinitionArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateHumanTaskUiResponse = (output, context) => {
    let contents = {
        __type: "CreateHumanTaskUiResponse",
        HumanTaskUiArn: undefined
    };
    if (output.HumanTaskUiArn !== undefined && output.HumanTaskUiArn !== null) {
        contents.HumanTaskUiArn = output.HumanTaskUiArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateHyperParameterTuningJobResponse = (output, context) => {
    let contents = {
        __type: "CreateHyperParameterTuningJobResponse",
        HyperParameterTuningJobArn: undefined
    };
    if (output.HyperParameterTuningJobArn !== undefined &&
        output.HyperParameterTuningJobArn !== null) {
        contents.HyperParameterTuningJobArn = output.HyperParameterTuningJobArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateLabelingJobResponse = (output, context) => {
    let contents = {
        __type: "CreateLabelingJobResponse",
        LabelingJobArn: undefined
    };
    if (output.LabelingJobArn !== undefined && output.LabelingJobArn !== null) {
        contents.LabelingJobArn = output.LabelingJobArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateModelOutput = (output, context) => {
    let contents = {
        __type: "CreateModelOutput",
        ModelArn: undefined
    };
    if (output.ModelArn !== undefined && output.ModelArn !== null) {
        contents.ModelArn = output.ModelArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateModelPackageOutput = (output, context) => {
    let contents = {
        __type: "CreateModelPackageOutput",
        ModelPackageArn: undefined
    };
    if (output.ModelPackageArn !== undefined && output.ModelPackageArn !== null) {
        contents.ModelPackageArn = output.ModelPackageArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateMonitoringScheduleResponse = (output, context) => {
    let contents = {
        __type: "CreateMonitoringScheduleResponse",
        MonitoringScheduleArn: undefined
    };
    if (output.MonitoringScheduleArn !== undefined &&
        output.MonitoringScheduleArn !== null) {
        contents.MonitoringScheduleArn = output.MonitoringScheduleArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigOutput = (output, context) => {
    let contents = {
        __type: "CreateNotebookInstanceLifecycleConfigOutput",
        NotebookInstanceLifecycleConfigArn: undefined
    };
    if (output.NotebookInstanceLifecycleConfigArn !== undefined &&
        output.NotebookInstanceLifecycleConfigArn !== null) {
        contents.NotebookInstanceLifecycleConfigArn =
            output.NotebookInstanceLifecycleConfigArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateNotebookInstanceOutput = (output, context) => {
    let contents = {
        __type: "CreateNotebookInstanceOutput",
        NotebookInstanceArn: undefined
    };
    if (output.NotebookInstanceArn !== undefined &&
        output.NotebookInstanceArn !== null) {
        contents.NotebookInstanceArn = output.NotebookInstanceArn;
    }
    return contents;
};
const deserializeAws_json1_1CreatePresignedDomainUrlResponse = (output, context) => {
    let contents = {
        __type: "CreatePresignedDomainUrlResponse",
        AuthorizedUrl: undefined
    };
    if (output.AuthorizedUrl !== undefined && output.AuthorizedUrl !== null) {
        contents.AuthorizedUrl = output.AuthorizedUrl;
    }
    return contents;
};
const deserializeAws_json1_1CreatePresignedNotebookInstanceUrlOutput = (output, context) => {
    let contents = {
        __type: "CreatePresignedNotebookInstanceUrlOutput",
        AuthorizedUrl: undefined
    };
    if (output.AuthorizedUrl !== undefined && output.AuthorizedUrl !== null) {
        contents.AuthorizedUrl = output.AuthorizedUrl;
    }
    return contents;
};
const deserializeAws_json1_1CreateProcessingJobResponse = (output, context) => {
    let contents = {
        __type: "CreateProcessingJobResponse",
        ProcessingJobArn: undefined
    };
    if (output.ProcessingJobArn !== undefined &&
        output.ProcessingJobArn !== null) {
        contents.ProcessingJobArn = output.ProcessingJobArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateTrainingJobResponse = (output, context) => {
    let contents = {
        __type: "CreateTrainingJobResponse",
        TrainingJobArn: undefined
    };
    if (output.TrainingJobArn !== undefined && output.TrainingJobArn !== null) {
        contents.TrainingJobArn = output.TrainingJobArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateTransformJobResponse = (output, context) => {
    let contents = {
        __type: "CreateTransformJobResponse",
        TransformJobArn: undefined
    };
    if (output.TransformJobArn !== undefined && output.TransformJobArn !== null) {
        contents.TransformJobArn = output.TransformJobArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateTrialComponentResponse = (output, context) => {
    let contents = {
        __type: "CreateTrialComponentResponse",
        TrialComponentArn: undefined
    };
    if (output.TrialComponentArn !== undefined &&
        output.TrialComponentArn !== null) {
        contents.TrialComponentArn = output.TrialComponentArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateTrialResponse = (output, context) => {
    let contents = {
        __type: "CreateTrialResponse",
        TrialArn: undefined
    };
    if (output.TrialArn !== undefined && output.TrialArn !== null) {
        contents.TrialArn = output.TrialArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateUserProfileResponse = (output, context) => {
    let contents = {
        __type: "CreateUserProfileResponse",
        UserProfileArn: undefined
    };
    if (output.UserProfileArn !== undefined && output.UserProfileArn !== null) {
        contents.UserProfileArn = output.UserProfileArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateWorkteamResponse = (output, context) => {
    let contents = {
        __type: "CreateWorkteamResponse",
        WorkteamArn: undefined
    };
    if (output.WorkteamArn !== undefined && output.WorkteamArn !== null) {
        contents.WorkteamArn = output.WorkteamArn;
    }
    return contents;
};
const deserializeAws_json1_1CsvContentTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DataCaptureConfig = (output, context) => {
    let contents = {
        __type: "DataCaptureConfig",
        CaptureContentTypeHeader: undefined,
        CaptureOptions: undefined,
        DestinationS3Uri: undefined,
        EnableCapture: undefined,
        InitialSamplingPercentage: undefined,
        KmsKeyId: undefined
    };
    if (output.CaptureContentTypeHeader !== undefined &&
        output.CaptureContentTypeHeader !== null) {
        contents.CaptureContentTypeHeader = deserializeAws_json1_1CaptureContentTypeHeader(output.CaptureContentTypeHeader, context);
    }
    if (output.CaptureOptions !== undefined && output.CaptureOptions !== null) {
        contents.CaptureOptions = deserializeAws_json1_1CaptureOptionList(output.CaptureOptions, context);
    }
    if (output.DestinationS3Uri !== undefined &&
        output.DestinationS3Uri !== null) {
        contents.DestinationS3Uri = output.DestinationS3Uri;
    }
    if (output.EnableCapture !== undefined && output.EnableCapture !== null) {
        contents.EnableCapture = output.EnableCapture;
    }
    if (output.InitialSamplingPercentage !== undefined &&
        output.InitialSamplingPercentage !== null) {
        contents.InitialSamplingPercentage = output.InitialSamplingPercentage;
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    return contents;
};
const deserializeAws_json1_1DataCaptureConfigSummary = (output, context) => {
    let contents = {
        __type: "DataCaptureConfigSummary",
        CaptureStatus: undefined,
        CurrentSamplingPercentage: undefined,
        DestinationS3Uri: undefined,
        EnableCapture: undefined,
        KmsKeyId: undefined
    };
    if (output.CaptureStatus !== undefined && output.CaptureStatus !== null) {
        contents.CaptureStatus = output.CaptureStatus;
    }
    if (output.CurrentSamplingPercentage !== undefined &&
        output.CurrentSamplingPercentage !== null) {
        contents.CurrentSamplingPercentage = output.CurrentSamplingPercentage;
    }
    if (output.DestinationS3Uri !== undefined &&
        output.DestinationS3Uri !== null) {
        contents.DestinationS3Uri = output.DestinationS3Uri;
    }
    if (output.EnableCapture !== undefined && output.EnableCapture !== null) {
        contents.EnableCapture = output.EnableCapture;
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    return contents;
};
const deserializeAws_json1_1DataProcessing = (output, context) => {
    let contents = {
        __type: "DataProcessing",
        InputFilter: undefined,
        JoinSource: undefined,
        OutputFilter: undefined
    };
    if (output.InputFilter !== undefined && output.InputFilter !== null) {
        contents.InputFilter = output.InputFilter;
    }
    if (output.JoinSource !== undefined && output.JoinSource !== null) {
        contents.JoinSource = output.JoinSource;
    }
    if (output.OutputFilter !== undefined && output.OutputFilter !== null) {
        contents.OutputFilter = output.OutputFilter;
    }
    return contents;
};
const deserializeAws_json1_1DataSource = (output, context) => {
    let contents = {
        __type: "DataSource",
        FileSystemDataSource: undefined,
        S3DataSource: undefined
    };
    if (output.FileSystemDataSource !== undefined &&
        output.FileSystemDataSource !== null) {
        contents.FileSystemDataSource = deserializeAws_json1_1FileSystemDataSource(output.FileSystemDataSource, context);
    }
    if (output.S3DataSource !== undefined && output.S3DataSource !== null) {
        contents.S3DataSource = deserializeAws_json1_1S3DataSource(output.S3DataSource, context);
    }
    return contents;
};
const deserializeAws_json1_1DebugHookConfig = (output, context) => {
    let contents = {
        __type: "DebugHookConfig",
        CollectionConfigurations: undefined,
        HookParameters: undefined,
        LocalPath: undefined,
        S3OutputPath: undefined
    };
    if (output.CollectionConfigurations !== undefined &&
        output.CollectionConfigurations !== null) {
        contents.CollectionConfigurations = deserializeAws_json1_1CollectionConfigurations(output.CollectionConfigurations, context);
    }
    if (output.HookParameters !== undefined && output.HookParameters !== null) {
        contents.HookParameters = deserializeAws_json1_1HookParameters(output.HookParameters, context);
    }
    if (output.LocalPath !== undefined && output.LocalPath !== null) {
        contents.LocalPath = output.LocalPath;
    }
    if (output.S3OutputPath !== undefined && output.S3OutputPath !== null) {
        contents.S3OutputPath = output.S3OutputPath;
    }
    return contents;
};
const deserializeAws_json1_1DebugRuleConfiguration = (output, context) => {
    let contents = {
        __type: "DebugRuleConfiguration",
        InstanceType: undefined,
        LocalPath: undefined,
        RuleConfigurationName: undefined,
        RuleEvaluatorImage: undefined,
        RuleParameters: undefined,
        S3OutputPath: undefined,
        VolumeSizeInGB: undefined
    };
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.LocalPath !== undefined && output.LocalPath !== null) {
        contents.LocalPath = output.LocalPath;
    }
    if (output.RuleConfigurationName !== undefined &&
        output.RuleConfigurationName !== null) {
        contents.RuleConfigurationName = output.RuleConfigurationName;
    }
    if (output.RuleEvaluatorImage !== undefined &&
        output.RuleEvaluatorImage !== null) {
        contents.RuleEvaluatorImage = output.RuleEvaluatorImage;
    }
    if (output.RuleParameters !== undefined && output.RuleParameters !== null) {
        contents.RuleParameters = deserializeAws_json1_1RuleParameters(output.RuleParameters, context);
    }
    if (output.S3OutputPath !== undefined && output.S3OutputPath !== null) {
        contents.S3OutputPath = output.S3OutputPath;
    }
    if (output.VolumeSizeInGB !== undefined && output.VolumeSizeInGB !== null) {
        contents.VolumeSizeInGB = output.VolumeSizeInGB;
    }
    return contents;
};
const deserializeAws_json1_1DebugRuleConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DebugRuleConfiguration(entry, context));
};
const deserializeAws_json1_1DebugRuleEvaluationStatus = (output, context) => {
    let contents = {
        __type: "DebugRuleEvaluationStatus",
        LastModifiedTime: undefined,
        RuleConfigurationName: undefined,
        RuleEvaluationJobArn: undefined,
        RuleEvaluationStatus: undefined,
        StatusDetails: undefined
    };
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.RuleConfigurationName !== undefined &&
        output.RuleConfigurationName !== null) {
        contents.RuleConfigurationName = output.RuleConfigurationName;
    }
    if (output.RuleEvaluationJobArn !== undefined &&
        output.RuleEvaluationJobArn !== null) {
        contents.RuleEvaluationJobArn = output.RuleEvaluationJobArn;
    }
    if (output.RuleEvaluationStatus !== undefined &&
        output.RuleEvaluationStatus !== null) {
        contents.RuleEvaluationStatus = output.RuleEvaluationStatus;
    }
    if (output.StatusDetails !== undefined && output.StatusDetails !== null) {
        contents.StatusDetails = output.StatusDetails;
    }
    return contents;
};
const deserializeAws_json1_1DebugRuleEvaluationStatuses = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DebugRuleEvaluationStatus(entry, context));
};
const deserializeAws_json1_1DeleteExperimentResponse = (output, context) => {
    let contents = {
        __type: "DeleteExperimentResponse",
        ExperimentArn: undefined
    };
    if (output.ExperimentArn !== undefined && output.ExperimentArn !== null) {
        contents.ExperimentArn = output.ExperimentArn;
    }
    return contents;
};
const deserializeAws_json1_1DeleteFlowDefinitionResponse = (output, context) => {
    let contents = {
        __type: "DeleteFlowDefinitionResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteTagsOutput = (output, context) => {
    let contents = {
        __type: "DeleteTagsOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteTrialComponentResponse = (output, context) => {
    let contents = {
        __type: "DeleteTrialComponentResponse",
        TrialComponentArn: undefined
    };
    if (output.TrialComponentArn !== undefined &&
        output.TrialComponentArn !== null) {
        contents.TrialComponentArn = output.TrialComponentArn;
    }
    return contents;
};
const deserializeAws_json1_1DeleteTrialResponse = (output, context) => {
    let contents = {
        __type: "DeleteTrialResponse",
        TrialArn: undefined
    };
    if (output.TrialArn !== undefined && output.TrialArn !== null) {
        contents.TrialArn = output.TrialArn;
    }
    return contents;
};
const deserializeAws_json1_1DeleteWorkteamResponse = (output, context) => {
    let contents = {
        __type: "DeleteWorkteamResponse",
        Success: undefined
    };
    if (output.Success !== undefined && output.Success !== null) {
        contents.Success = output.Success;
    }
    return contents;
};
const deserializeAws_json1_1DeployedImage = (output, context) => {
    let contents = {
        __type: "DeployedImage",
        ResolutionTime: undefined,
        ResolvedImage: undefined,
        SpecifiedImage: undefined
    };
    if (output.ResolutionTime !== undefined && output.ResolutionTime !== null) {
        contents.ResolutionTime = new Date(Math.round(output.ResolutionTime * 1000));
    }
    if (output.ResolvedImage !== undefined && output.ResolvedImage !== null) {
        contents.ResolvedImage = output.ResolvedImage;
    }
    if (output.SpecifiedImage !== undefined && output.SpecifiedImage !== null) {
        contents.SpecifiedImage = output.SpecifiedImage;
    }
    return contents;
};
const deserializeAws_json1_1DeployedImages = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DeployedImage(entry, context));
};
const deserializeAws_json1_1DescribeAlgorithmOutput = (output, context) => {
    let contents = {
        __type: "DescribeAlgorithmOutput",
        AlgorithmArn: undefined,
        AlgorithmDescription: undefined,
        AlgorithmName: undefined,
        AlgorithmStatus: undefined,
        AlgorithmStatusDetails: undefined,
        CertifyForMarketplace: undefined,
        CreationTime: undefined,
        InferenceSpecification: undefined,
        ProductId: undefined,
        TrainingSpecification: undefined,
        ValidationSpecification: undefined
    };
    if (output.AlgorithmArn !== undefined && output.AlgorithmArn !== null) {
        contents.AlgorithmArn = output.AlgorithmArn;
    }
    if (output.AlgorithmDescription !== undefined &&
        output.AlgorithmDescription !== null) {
        contents.AlgorithmDescription = output.AlgorithmDescription;
    }
    if (output.AlgorithmName !== undefined && output.AlgorithmName !== null) {
        contents.AlgorithmName = output.AlgorithmName;
    }
    if (output.AlgorithmStatus !== undefined && output.AlgorithmStatus !== null) {
        contents.AlgorithmStatus = output.AlgorithmStatus;
    }
    if (output.AlgorithmStatusDetails !== undefined &&
        output.AlgorithmStatusDetails !== null) {
        contents.AlgorithmStatusDetails = deserializeAws_json1_1AlgorithmStatusDetails(output.AlgorithmStatusDetails, context);
    }
    if (output.CertifyForMarketplace !== undefined &&
        output.CertifyForMarketplace !== null) {
        contents.CertifyForMarketplace = output.CertifyForMarketplace;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.InferenceSpecification !== undefined &&
        output.InferenceSpecification !== null) {
        contents.InferenceSpecification = deserializeAws_json1_1InferenceSpecification(output.InferenceSpecification, context);
    }
    if (output.ProductId !== undefined && output.ProductId !== null) {
        contents.ProductId = output.ProductId;
    }
    if (output.TrainingSpecification !== undefined &&
        output.TrainingSpecification !== null) {
        contents.TrainingSpecification = deserializeAws_json1_1TrainingSpecification(output.TrainingSpecification, context);
    }
    if (output.ValidationSpecification !== undefined &&
        output.ValidationSpecification !== null) {
        contents.ValidationSpecification = deserializeAws_json1_1AlgorithmValidationSpecification(output.ValidationSpecification, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeAppResponse = (output, context) => {
    let contents = {
        __type: "DescribeAppResponse",
        AppArn: undefined,
        AppName: undefined,
        AppType: undefined,
        CreationTime: undefined,
        DomainId: undefined,
        FailureReason: undefined,
        LastHealthCheckTimestamp: undefined,
        LastUserActivityTimestamp: undefined,
        ResourceSpec: undefined,
        Status: undefined,
        UserProfileName: undefined
    };
    if (output.AppArn !== undefined && output.AppArn !== null) {
        contents.AppArn = output.AppArn;
    }
    if (output.AppName !== undefined && output.AppName !== null) {
        contents.AppName = output.AppName;
    }
    if (output.AppType !== undefined && output.AppType !== null) {
        contents.AppType = output.AppType;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DomainId !== undefined && output.DomainId !== null) {
        contents.DomainId = output.DomainId;
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LastHealthCheckTimestamp !== undefined &&
        output.LastHealthCheckTimestamp !== null) {
        contents.LastHealthCheckTimestamp = new Date(Math.round(output.LastHealthCheckTimestamp * 1000));
    }
    if (output.LastUserActivityTimestamp !== undefined &&
        output.LastUserActivityTimestamp !== null) {
        contents.LastUserActivityTimestamp = new Date(Math.round(output.LastUserActivityTimestamp * 1000));
    }
    if (output.ResourceSpec !== undefined && output.ResourceSpec !== null) {
        contents.ResourceSpec = deserializeAws_json1_1ResourceSpec(output.ResourceSpec, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UserProfileName !== undefined && output.UserProfileName !== null) {
        contents.UserProfileName = output.UserProfileName;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAutoMLJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeAutoMLJobResponse",
        AutoMLJobArn: undefined,
        AutoMLJobArtifacts: undefined,
        AutoMLJobConfig: undefined,
        AutoMLJobName: undefined,
        AutoMLJobObjective: undefined,
        AutoMLJobSecondaryStatus: undefined,
        AutoMLJobStatus: undefined,
        BestCandidate: undefined,
        CreationTime: undefined,
        EndTime: undefined,
        FailureReason: undefined,
        GenerateCandidateDefinitionsOnly: undefined,
        InputDataConfig: undefined,
        LastModifiedTime: undefined,
        OutputDataConfig: undefined,
        ProblemType: undefined,
        ResolvedAttributes: undefined,
        RoleArn: undefined
    };
    if (output.AutoMLJobArn !== undefined && output.AutoMLJobArn !== null) {
        contents.AutoMLJobArn = output.AutoMLJobArn;
    }
    if (output.AutoMLJobArtifacts !== undefined &&
        output.AutoMLJobArtifacts !== null) {
        contents.AutoMLJobArtifacts = deserializeAws_json1_1AutoMLJobArtifacts(output.AutoMLJobArtifacts, context);
    }
    if (output.AutoMLJobConfig !== undefined && output.AutoMLJobConfig !== null) {
        contents.AutoMLJobConfig = deserializeAws_json1_1AutoMLJobConfig(output.AutoMLJobConfig, context);
    }
    if (output.AutoMLJobName !== undefined && output.AutoMLJobName !== null) {
        contents.AutoMLJobName = output.AutoMLJobName;
    }
    if (output.AutoMLJobObjective !== undefined &&
        output.AutoMLJobObjective !== null) {
        contents.AutoMLJobObjective = deserializeAws_json1_1AutoMLJobObjective(output.AutoMLJobObjective, context);
    }
    if (output.AutoMLJobSecondaryStatus !== undefined &&
        output.AutoMLJobSecondaryStatus !== null) {
        contents.AutoMLJobSecondaryStatus = output.AutoMLJobSecondaryStatus;
    }
    if (output.AutoMLJobStatus !== undefined && output.AutoMLJobStatus !== null) {
        contents.AutoMLJobStatus = output.AutoMLJobStatus;
    }
    if (output.BestCandidate !== undefined && output.BestCandidate !== null) {
        contents.BestCandidate = deserializeAws_json1_1AutoMLCandidate(output.BestCandidate, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.GenerateCandidateDefinitionsOnly !== undefined &&
        output.GenerateCandidateDefinitionsOnly !== null) {
        contents.GenerateCandidateDefinitionsOnly =
            output.GenerateCandidateDefinitionsOnly;
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1AutoMLInputDataConfig(output.InputDataConfig, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1AutoMLOutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.ProblemType !== undefined && output.ProblemType !== null) {
        contents.ProblemType = output.ProblemType;
    }
    if (output.ResolvedAttributes !== undefined &&
        output.ResolvedAttributes !== null) {
        contents.ResolvedAttributes = deserializeAws_json1_1ResolvedAttributes(output.ResolvedAttributes, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    return contents;
};
const deserializeAws_json1_1DescribeCodeRepositoryOutput = (output, context) => {
    let contents = {
        __type: "DescribeCodeRepositoryOutput",
        CodeRepositoryArn: undefined,
        CodeRepositoryName: undefined,
        CreationTime: undefined,
        GitConfig: undefined,
        LastModifiedTime: undefined
    };
    if (output.CodeRepositoryArn !== undefined &&
        output.CodeRepositoryArn !== null) {
        contents.CodeRepositoryArn = output.CodeRepositoryArn;
    }
    if (output.CodeRepositoryName !== undefined &&
        output.CodeRepositoryName !== null) {
        contents.CodeRepositoryName = output.CodeRepositoryName;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.GitConfig !== undefined && output.GitConfig !== null) {
        contents.GitConfig = deserializeAws_json1_1GitConfig(output.GitConfig, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1DescribeCompilationJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeCompilationJobResponse",
        CompilationEndTime: undefined,
        CompilationJobArn: undefined,
        CompilationJobName: undefined,
        CompilationJobStatus: undefined,
        CompilationStartTime: undefined,
        CreationTime: undefined,
        FailureReason: undefined,
        InputConfig: undefined,
        LastModifiedTime: undefined,
        ModelArtifacts: undefined,
        OutputConfig: undefined,
        RoleArn: undefined,
        StoppingCondition: undefined
    };
    if (output.CompilationEndTime !== undefined &&
        output.CompilationEndTime !== null) {
        contents.CompilationEndTime = new Date(Math.round(output.CompilationEndTime * 1000));
    }
    if (output.CompilationJobArn !== undefined &&
        output.CompilationJobArn !== null) {
        contents.CompilationJobArn = output.CompilationJobArn;
    }
    if (output.CompilationJobName !== undefined &&
        output.CompilationJobName !== null) {
        contents.CompilationJobName = output.CompilationJobName;
    }
    if (output.CompilationJobStatus !== undefined &&
        output.CompilationJobStatus !== null) {
        contents.CompilationJobStatus = output.CompilationJobStatus;
    }
    if (output.CompilationStartTime !== undefined &&
        output.CompilationStartTime !== null) {
        contents.CompilationStartTime = new Date(Math.round(output.CompilationStartTime * 1000));
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.InputConfig !== undefined && output.InputConfig !== null) {
        contents.InputConfig = deserializeAws_json1_1InputConfig(output.InputConfig, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.ModelArtifacts !== undefined && output.ModelArtifacts !== null) {
        contents.ModelArtifacts = deserializeAws_json1_1ModelArtifacts(output.ModelArtifacts, context);
    }
    if (output.OutputConfig !== undefined && output.OutputConfig !== null) {
        contents.OutputConfig = deserializeAws_json1_1OutputConfig(output.OutputConfig, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.StoppingCondition !== undefined &&
        output.StoppingCondition !== null) {
        contents.StoppingCondition = deserializeAws_json1_1StoppingCondition(output.StoppingCondition, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDomainResponse = (output, context) => {
    let contents = {
        __type: "DescribeDomainResponse",
        AuthMode: undefined,
        CreationTime: undefined,
        DefaultUserSettings: undefined,
        DomainArn: undefined,
        DomainId: undefined,
        DomainName: undefined,
        FailureReason: undefined,
        HomeEfsFileSystemId: undefined,
        HomeEfsFileSystemKmsKeyId: undefined,
        LastModifiedTime: undefined,
        SingleSignOnManagedApplicationInstanceId: undefined,
        Status: undefined,
        SubnetIds: undefined,
        Url: undefined,
        VpcId: undefined
    };
    if (output.AuthMode !== undefined && output.AuthMode !== null) {
        contents.AuthMode = output.AuthMode;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DefaultUserSettings !== undefined &&
        output.DefaultUserSettings !== null) {
        contents.DefaultUserSettings = deserializeAws_json1_1UserSettings(output.DefaultUserSettings, context);
    }
    if (output.DomainArn !== undefined && output.DomainArn !== null) {
        contents.DomainArn = output.DomainArn;
    }
    if (output.DomainId !== undefined && output.DomainId !== null) {
        contents.DomainId = output.DomainId;
    }
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.HomeEfsFileSystemId !== undefined &&
        output.HomeEfsFileSystemId !== null) {
        contents.HomeEfsFileSystemId = output.HomeEfsFileSystemId;
    }
    if (output.HomeEfsFileSystemKmsKeyId !== undefined &&
        output.HomeEfsFileSystemKmsKeyId !== null) {
        contents.HomeEfsFileSystemKmsKeyId = output.HomeEfsFileSystemKmsKeyId;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.SingleSignOnManagedApplicationInstanceId !== undefined &&
        output.SingleSignOnManagedApplicationInstanceId !== null) {
        contents.SingleSignOnManagedApplicationInstanceId =
            output.SingleSignOnManagedApplicationInstanceId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_json1_1Subnets(output.SubnetIds, context);
    }
    if (output.Url !== undefined && output.Url !== null) {
        contents.Url = output.Url;
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEndpointConfigOutput = (output, context) => {
    let contents = {
        __type: "DescribeEndpointConfigOutput",
        CreationTime: undefined,
        DataCaptureConfig: undefined,
        EndpointConfigArn: undefined,
        EndpointConfigName: undefined,
        KmsKeyId: undefined,
        ProductionVariants: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DataCaptureConfig !== undefined &&
        output.DataCaptureConfig !== null) {
        contents.DataCaptureConfig = deserializeAws_json1_1DataCaptureConfig(output.DataCaptureConfig, context);
    }
    if (output.EndpointConfigArn !== undefined &&
        output.EndpointConfigArn !== null) {
        contents.EndpointConfigArn = output.EndpointConfigArn;
    }
    if (output.EndpointConfigName !== undefined &&
        output.EndpointConfigName !== null) {
        contents.EndpointConfigName = output.EndpointConfigName;
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.ProductionVariants !== undefined &&
        output.ProductionVariants !== null) {
        contents.ProductionVariants = deserializeAws_json1_1ProductionVariantList(output.ProductionVariants, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEndpointOutput = (output, context) => {
    let contents = {
        __type: "DescribeEndpointOutput",
        CreationTime: undefined,
        DataCaptureConfig: undefined,
        EndpointArn: undefined,
        EndpointConfigName: undefined,
        EndpointName: undefined,
        EndpointStatus: undefined,
        FailureReason: undefined,
        LastModifiedTime: undefined,
        ProductionVariants: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DataCaptureConfig !== undefined &&
        output.DataCaptureConfig !== null) {
        contents.DataCaptureConfig = deserializeAws_json1_1DataCaptureConfigSummary(output.DataCaptureConfig, context);
    }
    if (output.EndpointArn !== undefined && output.EndpointArn !== null) {
        contents.EndpointArn = output.EndpointArn;
    }
    if (output.EndpointConfigName !== undefined &&
        output.EndpointConfigName !== null) {
        contents.EndpointConfigName = output.EndpointConfigName;
    }
    if (output.EndpointName !== undefined && output.EndpointName !== null) {
        contents.EndpointName = output.EndpointName;
    }
    if (output.EndpointStatus !== undefined && output.EndpointStatus !== null) {
        contents.EndpointStatus = output.EndpointStatus;
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.ProductionVariants !== undefined &&
        output.ProductionVariants !== null) {
        contents.ProductionVariants = deserializeAws_json1_1ProductionVariantSummaryList(output.ProductionVariants, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeExperimentResponse = (output, context) => {
    let contents = {
        __type: "DescribeExperimentResponse",
        CreatedBy: undefined,
        CreationTime: undefined,
        Description: undefined,
        DisplayName: undefined,
        ExperimentArn: undefined,
        ExperimentName: undefined,
        LastModifiedBy: undefined,
        LastModifiedTime: undefined,
        Source: undefined
    };
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = deserializeAws_json1_1UserContext(output.CreatedBy, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.ExperimentArn !== undefined && output.ExperimentArn !== null) {
        contents.ExperimentArn = output.ExperimentArn;
    }
    if (output.ExperimentName !== undefined && output.ExperimentName !== null) {
        contents.ExperimentName = output.ExperimentName;
    }
    if (output.LastModifiedBy !== undefined && output.LastModifiedBy !== null) {
        contents.LastModifiedBy = deserializeAws_json1_1UserContext(output.LastModifiedBy, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = deserializeAws_json1_1ExperimentSource(output.Source, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeFlowDefinitionResponse = (output, context) => {
    let contents = {
        __type: "DescribeFlowDefinitionResponse",
        CreationTime: undefined,
        FailureReason: undefined,
        FlowDefinitionArn: undefined,
        FlowDefinitionName: undefined,
        FlowDefinitionStatus: undefined,
        HumanLoopActivationConfig: undefined,
        HumanLoopConfig: undefined,
        OutputConfig: undefined,
        RoleArn: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.FlowDefinitionArn !== undefined &&
        output.FlowDefinitionArn !== null) {
        contents.FlowDefinitionArn = output.FlowDefinitionArn;
    }
    if (output.FlowDefinitionName !== undefined &&
        output.FlowDefinitionName !== null) {
        contents.FlowDefinitionName = output.FlowDefinitionName;
    }
    if (output.FlowDefinitionStatus !== undefined &&
        output.FlowDefinitionStatus !== null) {
        contents.FlowDefinitionStatus = output.FlowDefinitionStatus;
    }
    if (output.HumanLoopActivationConfig !== undefined &&
        output.HumanLoopActivationConfig !== null) {
        contents.HumanLoopActivationConfig = deserializeAws_json1_1HumanLoopActivationConfig(output.HumanLoopActivationConfig, context);
    }
    if (output.HumanLoopConfig !== undefined && output.HumanLoopConfig !== null) {
        contents.HumanLoopConfig = deserializeAws_json1_1HumanLoopConfig(output.HumanLoopConfig, context);
    }
    if (output.OutputConfig !== undefined && output.OutputConfig !== null) {
        contents.OutputConfig = deserializeAws_json1_1FlowDefinitionOutputConfig(output.OutputConfig, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    return contents;
};
const deserializeAws_json1_1DescribeHumanTaskUiResponse = (output, context) => {
    let contents = {
        __type: "DescribeHumanTaskUiResponse",
        CreationTime: undefined,
        HumanTaskUiArn: undefined,
        HumanTaskUiName: undefined,
        UiTemplate: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.HumanTaskUiArn !== undefined && output.HumanTaskUiArn !== null) {
        contents.HumanTaskUiArn = output.HumanTaskUiArn;
    }
    if (output.HumanTaskUiName !== undefined && output.HumanTaskUiName !== null) {
        contents.HumanTaskUiName = output.HumanTaskUiName;
    }
    if (output.UiTemplate !== undefined && output.UiTemplate !== null) {
        contents.UiTemplate = deserializeAws_json1_1UiTemplateInfo(output.UiTemplate, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeHyperParameterTuningJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeHyperParameterTuningJobResponse",
        BestTrainingJob: undefined,
        CreationTime: undefined,
        FailureReason: undefined,
        HyperParameterTuningEndTime: undefined,
        HyperParameterTuningJobArn: undefined,
        HyperParameterTuningJobConfig: undefined,
        HyperParameterTuningJobName: undefined,
        HyperParameterTuningJobStatus: undefined,
        LastModifiedTime: undefined,
        ObjectiveStatusCounters: undefined,
        OverallBestTrainingJob: undefined,
        TrainingJobDefinition: undefined,
        TrainingJobDefinitions: undefined,
        TrainingJobStatusCounters: undefined,
        WarmStartConfig: undefined
    };
    if (output.BestTrainingJob !== undefined && output.BestTrainingJob !== null) {
        contents.BestTrainingJob = deserializeAws_json1_1HyperParameterTrainingJobSummary(output.BestTrainingJob, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.HyperParameterTuningEndTime !== undefined &&
        output.HyperParameterTuningEndTime !== null) {
        contents.HyperParameterTuningEndTime = new Date(Math.round(output.HyperParameterTuningEndTime * 1000));
    }
    if (output.HyperParameterTuningJobArn !== undefined &&
        output.HyperParameterTuningJobArn !== null) {
        contents.HyperParameterTuningJobArn = output.HyperParameterTuningJobArn;
    }
    if (output.HyperParameterTuningJobConfig !== undefined &&
        output.HyperParameterTuningJobConfig !== null) {
        contents.HyperParameterTuningJobConfig = deserializeAws_json1_1HyperParameterTuningJobConfig(output.HyperParameterTuningJobConfig, context);
    }
    if (output.HyperParameterTuningJobName !== undefined &&
        output.HyperParameterTuningJobName !== null) {
        contents.HyperParameterTuningJobName = output.HyperParameterTuningJobName;
    }
    if (output.HyperParameterTuningJobStatus !== undefined &&
        output.HyperParameterTuningJobStatus !== null) {
        contents.HyperParameterTuningJobStatus =
            output.HyperParameterTuningJobStatus;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.ObjectiveStatusCounters !== undefined &&
        output.ObjectiveStatusCounters !== null) {
        contents.ObjectiveStatusCounters = deserializeAws_json1_1ObjectiveStatusCounters(output.ObjectiveStatusCounters, context);
    }
    if (output.OverallBestTrainingJob !== undefined &&
        output.OverallBestTrainingJob !== null) {
        contents.OverallBestTrainingJob = deserializeAws_json1_1HyperParameterTrainingJobSummary(output.OverallBestTrainingJob, context);
    }
    if (output.TrainingJobDefinition !== undefined &&
        output.TrainingJobDefinition !== null) {
        contents.TrainingJobDefinition = deserializeAws_json1_1HyperParameterTrainingJobDefinition(output.TrainingJobDefinition, context);
    }
    if (output.TrainingJobDefinitions !== undefined &&
        output.TrainingJobDefinitions !== null) {
        contents.TrainingJobDefinitions = deserializeAws_json1_1HyperParameterTrainingJobDefinitions(output.TrainingJobDefinitions, context);
    }
    if (output.TrainingJobStatusCounters !== undefined &&
        output.TrainingJobStatusCounters !== null) {
        contents.TrainingJobStatusCounters = deserializeAws_json1_1TrainingJobStatusCounters(output.TrainingJobStatusCounters, context);
    }
    if (output.WarmStartConfig !== undefined && output.WarmStartConfig !== null) {
        contents.WarmStartConfig = deserializeAws_json1_1HyperParameterTuningJobWarmStartConfig(output.WarmStartConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeLabelingJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeLabelingJobResponse",
        CreationTime: undefined,
        FailureReason: undefined,
        HumanTaskConfig: undefined,
        InputConfig: undefined,
        JobReferenceCode: undefined,
        LabelAttributeName: undefined,
        LabelCategoryConfigS3Uri: undefined,
        LabelCounters: undefined,
        LabelingJobAlgorithmsConfig: undefined,
        LabelingJobArn: undefined,
        LabelingJobName: undefined,
        LabelingJobOutput: undefined,
        LabelingJobStatus: undefined,
        LastModifiedTime: undefined,
        OutputConfig: undefined,
        RoleArn: undefined,
        StoppingConditions: undefined,
        Tags: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.HumanTaskConfig !== undefined && output.HumanTaskConfig !== null) {
        contents.HumanTaskConfig = deserializeAws_json1_1HumanTaskConfig(output.HumanTaskConfig, context);
    }
    if (output.InputConfig !== undefined && output.InputConfig !== null) {
        contents.InputConfig = deserializeAws_json1_1LabelingJobInputConfig(output.InputConfig, context);
    }
    if (output.JobReferenceCode !== undefined &&
        output.JobReferenceCode !== null) {
        contents.JobReferenceCode = output.JobReferenceCode;
    }
    if (output.LabelAttributeName !== undefined &&
        output.LabelAttributeName !== null) {
        contents.LabelAttributeName = output.LabelAttributeName;
    }
    if (output.LabelCategoryConfigS3Uri !== undefined &&
        output.LabelCategoryConfigS3Uri !== null) {
        contents.LabelCategoryConfigS3Uri = output.LabelCategoryConfigS3Uri;
    }
    if (output.LabelCounters !== undefined && output.LabelCounters !== null) {
        contents.LabelCounters = deserializeAws_json1_1LabelCounters(output.LabelCounters, context);
    }
    if (output.LabelingJobAlgorithmsConfig !== undefined &&
        output.LabelingJobAlgorithmsConfig !== null) {
        contents.LabelingJobAlgorithmsConfig = deserializeAws_json1_1LabelingJobAlgorithmsConfig(output.LabelingJobAlgorithmsConfig, context);
    }
    if (output.LabelingJobArn !== undefined && output.LabelingJobArn !== null) {
        contents.LabelingJobArn = output.LabelingJobArn;
    }
    if (output.LabelingJobName !== undefined && output.LabelingJobName !== null) {
        contents.LabelingJobName = output.LabelingJobName;
    }
    if (output.LabelingJobOutput !== undefined &&
        output.LabelingJobOutput !== null) {
        contents.LabelingJobOutput = deserializeAws_json1_1LabelingJobOutput(output.LabelingJobOutput, context);
    }
    if (output.LabelingJobStatus !== undefined &&
        output.LabelingJobStatus !== null) {
        contents.LabelingJobStatus = output.LabelingJobStatus;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.OutputConfig !== undefined && output.OutputConfig !== null) {
        contents.OutputConfig = deserializeAws_json1_1LabelingJobOutputConfig(output.OutputConfig, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.StoppingConditions !== undefined &&
        output.StoppingConditions !== null) {
        contents.StoppingConditions = deserializeAws_json1_1LabelingJobStoppingConditions(output.StoppingConditions, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeModelOutput = (output, context) => {
    let contents = {
        __type: "DescribeModelOutput",
        Containers: undefined,
        CreationTime: undefined,
        EnableNetworkIsolation: undefined,
        ExecutionRoleArn: undefined,
        ModelArn: undefined,
        ModelName: undefined,
        PrimaryContainer: undefined,
        VpcConfig: undefined
    };
    if (output.Containers !== undefined && output.Containers !== null) {
        contents.Containers = deserializeAws_json1_1ContainerDefinitionList(output.Containers, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.EnableNetworkIsolation !== undefined &&
        output.EnableNetworkIsolation !== null) {
        contents.EnableNetworkIsolation = output.EnableNetworkIsolation;
    }
    if (output.ExecutionRoleArn !== undefined &&
        output.ExecutionRoleArn !== null) {
        contents.ExecutionRoleArn = output.ExecutionRoleArn;
    }
    if (output.ModelArn !== undefined && output.ModelArn !== null) {
        contents.ModelArn = output.ModelArn;
    }
    if (output.ModelName !== undefined && output.ModelName !== null) {
        contents.ModelName = output.ModelName;
    }
    if (output.PrimaryContainer !== undefined &&
        output.PrimaryContainer !== null) {
        contents.PrimaryContainer = deserializeAws_json1_1ContainerDefinition(output.PrimaryContainer, context);
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeModelPackageOutput = (output, context) => {
    let contents = {
        __type: "DescribeModelPackageOutput",
        CertifyForMarketplace: undefined,
        CreationTime: undefined,
        InferenceSpecification: undefined,
        ModelPackageArn: undefined,
        ModelPackageDescription: undefined,
        ModelPackageName: undefined,
        ModelPackageStatus: undefined,
        ModelPackageStatusDetails: undefined,
        SourceAlgorithmSpecification: undefined,
        ValidationSpecification: undefined
    };
    if (output.CertifyForMarketplace !== undefined &&
        output.CertifyForMarketplace !== null) {
        contents.CertifyForMarketplace = output.CertifyForMarketplace;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.InferenceSpecification !== undefined &&
        output.InferenceSpecification !== null) {
        contents.InferenceSpecification = deserializeAws_json1_1InferenceSpecification(output.InferenceSpecification, context);
    }
    if (output.ModelPackageArn !== undefined && output.ModelPackageArn !== null) {
        contents.ModelPackageArn = output.ModelPackageArn;
    }
    if (output.ModelPackageDescription !== undefined &&
        output.ModelPackageDescription !== null) {
        contents.ModelPackageDescription = output.ModelPackageDescription;
    }
    if (output.ModelPackageName !== undefined &&
        output.ModelPackageName !== null) {
        contents.ModelPackageName = output.ModelPackageName;
    }
    if (output.ModelPackageStatus !== undefined &&
        output.ModelPackageStatus !== null) {
        contents.ModelPackageStatus = output.ModelPackageStatus;
    }
    if (output.ModelPackageStatusDetails !== undefined &&
        output.ModelPackageStatusDetails !== null) {
        contents.ModelPackageStatusDetails = deserializeAws_json1_1ModelPackageStatusDetails(output.ModelPackageStatusDetails, context);
    }
    if (output.SourceAlgorithmSpecification !== undefined &&
        output.SourceAlgorithmSpecification !== null) {
        contents.SourceAlgorithmSpecification = deserializeAws_json1_1SourceAlgorithmSpecification(output.SourceAlgorithmSpecification, context);
    }
    if (output.ValidationSpecification !== undefined &&
        output.ValidationSpecification !== null) {
        contents.ValidationSpecification = deserializeAws_json1_1ModelPackageValidationSpecification(output.ValidationSpecification, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeMonitoringScheduleResponse = (output, context) => {
    let contents = {
        __type: "DescribeMonitoringScheduleResponse",
        CreationTime: undefined,
        EndpointName: undefined,
        FailureReason: undefined,
        LastModifiedTime: undefined,
        LastMonitoringExecutionSummary: undefined,
        MonitoringScheduleArn: undefined,
        MonitoringScheduleConfig: undefined,
        MonitoringScheduleName: undefined,
        MonitoringScheduleStatus: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.EndpointName !== undefined && output.EndpointName !== null) {
        contents.EndpointName = output.EndpointName;
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.LastMonitoringExecutionSummary !== undefined &&
        output.LastMonitoringExecutionSummary !== null) {
        contents.LastMonitoringExecutionSummary = deserializeAws_json1_1MonitoringExecutionSummary(output.LastMonitoringExecutionSummary, context);
    }
    if (output.MonitoringScheduleArn !== undefined &&
        output.MonitoringScheduleArn !== null) {
        contents.MonitoringScheduleArn = output.MonitoringScheduleArn;
    }
    if (output.MonitoringScheduleConfig !== undefined &&
        output.MonitoringScheduleConfig !== null) {
        contents.MonitoringScheduleConfig = deserializeAws_json1_1MonitoringScheduleConfig(output.MonitoringScheduleConfig, context);
    }
    if (output.MonitoringScheduleName !== undefined &&
        output.MonitoringScheduleName !== null) {
        contents.MonitoringScheduleName = output.MonitoringScheduleName;
    }
    if (output.MonitoringScheduleStatus !== undefined &&
        output.MonitoringScheduleStatus !== null) {
        contents.MonitoringScheduleStatus = output.MonitoringScheduleStatus;
    }
    return contents;
};
const deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigOutput = (output, context) => {
    let contents = {
        __type: "DescribeNotebookInstanceLifecycleConfigOutput",
        CreationTime: undefined,
        LastModifiedTime: undefined,
        NotebookInstanceLifecycleConfigArn: undefined,
        NotebookInstanceLifecycleConfigName: undefined,
        OnCreate: undefined,
        OnStart: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.NotebookInstanceLifecycleConfigArn !== undefined &&
        output.NotebookInstanceLifecycleConfigArn !== null) {
        contents.NotebookInstanceLifecycleConfigArn =
            output.NotebookInstanceLifecycleConfigArn;
    }
    if (output.NotebookInstanceLifecycleConfigName !== undefined &&
        output.NotebookInstanceLifecycleConfigName !== null) {
        contents.NotebookInstanceLifecycleConfigName =
            output.NotebookInstanceLifecycleConfigName;
    }
    if (output.OnCreate !== undefined && output.OnCreate !== null) {
        contents.OnCreate = deserializeAws_json1_1NotebookInstanceLifecycleConfigList(output.OnCreate, context);
    }
    if (output.OnStart !== undefined && output.OnStart !== null) {
        contents.OnStart = deserializeAws_json1_1NotebookInstanceLifecycleConfigList(output.OnStart, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeNotebookInstanceOutput = (output, context) => {
    let contents = {
        __type: "DescribeNotebookInstanceOutput",
        AcceleratorTypes: undefined,
        AdditionalCodeRepositories: undefined,
        CreationTime: undefined,
        DefaultCodeRepository: undefined,
        DirectInternetAccess: undefined,
        FailureReason: undefined,
        InstanceType: undefined,
        KmsKeyId: undefined,
        LastModifiedTime: undefined,
        NetworkInterfaceId: undefined,
        NotebookInstanceArn: undefined,
        NotebookInstanceLifecycleConfigName: undefined,
        NotebookInstanceName: undefined,
        NotebookInstanceStatus: undefined,
        RoleArn: undefined,
        RootAccess: undefined,
        SecurityGroups: undefined,
        SubnetId: undefined,
        Url: undefined,
        VolumeSizeInGB: undefined
    };
    if (output.AcceleratorTypes !== undefined &&
        output.AcceleratorTypes !== null) {
        contents.AcceleratorTypes = deserializeAws_json1_1NotebookInstanceAcceleratorTypes(output.AcceleratorTypes, context);
    }
    if (output.AdditionalCodeRepositories !== undefined &&
        output.AdditionalCodeRepositories !== null) {
        contents.AdditionalCodeRepositories = deserializeAws_json1_1AdditionalCodeRepositoryNamesOrUrls(output.AdditionalCodeRepositories, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DefaultCodeRepository !== undefined &&
        output.DefaultCodeRepository !== null) {
        contents.DefaultCodeRepository = output.DefaultCodeRepository;
    }
    if (output.DirectInternetAccess !== undefined &&
        output.DirectInternetAccess !== null) {
        contents.DirectInternetAccess = output.DirectInternetAccess;
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.NetworkInterfaceId !== undefined &&
        output.NetworkInterfaceId !== null) {
        contents.NetworkInterfaceId = output.NetworkInterfaceId;
    }
    if (output.NotebookInstanceArn !== undefined &&
        output.NotebookInstanceArn !== null) {
        contents.NotebookInstanceArn = output.NotebookInstanceArn;
    }
    if (output.NotebookInstanceLifecycleConfigName !== undefined &&
        output.NotebookInstanceLifecycleConfigName !== null) {
        contents.NotebookInstanceLifecycleConfigName =
            output.NotebookInstanceLifecycleConfigName;
    }
    if (output.NotebookInstanceName !== undefined &&
        output.NotebookInstanceName !== null) {
        contents.NotebookInstanceName = output.NotebookInstanceName;
    }
    if (output.NotebookInstanceStatus !== undefined &&
        output.NotebookInstanceStatus !== null) {
        contents.NotebookInstanceStatus = output.NotebookInstanceStatus;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.RootAccess !== undefined && output.RootAccess !== null) {
        contents.RootAccess = output.RootAccess;
    }
    if (output.SecurityGroups !== undefined && output.SecurityGroups !== null) {
        contents.SecurityGroups = deserializeAws_json1_1SecurityGroupIds(output.SecurityGroups, context);
    }
    if (output.SubnetId !== undefined && output.SubnetId !== null) {
        contents.SubnetId = output.SubnetId;
    }
    if (output.Url !== undefined && output.Url !== null) {
        contents.Url = output.Url;
    }
    if (output.VolumeSizeInGB !== undefined && output.VolumeSizeInGB !== null) {
        contents.VolumeSizeInGB = output.VolumeSizeInGB;
    }
    return contents;
};
const deserializeAws_json1_1DescribeProcessingJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeProcessingJobResponse",
        AppSpecification: undefined,
        AutoMLJobArn: undefined,
        CreationTime: undefined,
        Environment: undefined,
        ExitMessage: undefined,
        ExperimentConfig: undefined,
        FailureReason: undefined,
        LastModifiedTime: undefined,
        MonitoringScheduleArn: undefined,
        NetworkConfig: undefined,
        ProcessingEndTime: undefined,
        ProcessingInputs: undefined,
        ProcessingJobArn: undefined,
        ProcessingJobName: undefined,
        ProcessingJobStatus: undefined,
        ProcessingOutputConfig: undefined,
        ProcessingResources: undefined,
        ProcessingStartTime: undefined,
        RoleArn: undefined,
        StoppingCondition: undefined,
        TrainingJobArn: undefined
    };
    if (output.AppSpecification !== undefined &&
        output.AppSpecification !== null) {
        contents.AppSpecification = deserializeAws_json1_1AppSpecification(output.AppSpecification, context);
    }
    if (output.AutoMLJobArn !== undefined && output.AutoMLJobArn !== null) {
        contents.AutoMLJobArn = output.AutoMLJobArn;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Environment !== undefined && output.Environment !== null) {
        contents.Environment = deserializeAws_json1_1ProcessingEnvironmentMap(output.Environment, context);
    }
    if (output.ExitMessage !== undefined && output.ExitMessage !== null) {
        contents.ExitMessage = output.ExitMessage;
    }
    if (output.ExperimentConfig !== undefined &&
        output.ExperimentConfig !== null) {
        contents.ExperimentConfig = deserializeAws_json1_1ExperimentConfig(output.ExperimentConfig, context);
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.MonitoringScheduleArn !== undefined &&
        output.MonitoringScheduleArn !== null) {
        contents.MonitoringScheduleArn = output.MonitoringScheduleArn;
    }
    if (output.NetworkConfig !== undefined && output.NetworkConfig !== null) {
        contents.NetworkConfig = deserializeAws_json1_1NetworkConfig(output.NetworkConfig, context);
    }
    if (output.ProcessingEndTime !== undefined &&
        output.ProcessingEndTime !== null) {
        contents.ProcessingEndTime = new Date(Math.round(output.ProcessingEndTime * 1000));
    }
    if (output.ProcessingInputs !== undefined &&
        output.ProcessingInputs !== null) {
        contents.ProcessingInputs = deserializeAws_json1_1ProcessingInputs(output.ProcessingInputs, context);
    }
    if (output.ProcessingJobArn !== undefined &&
        output.ProcessingJobArn !== null) {
        contents.ProcessingJobArn = output.ProcessingJobArn;
    }
    if (output.ProcessingJobName !== undefined &&
        output.ProcessingJobName !== null) {
        contents.ProcessingJobName = output.ProcessingJobName;
    }
    if (output.ProcessingJobStatus !== undefined &&
        output.ProcessingJobStatus !== null) {
        contents.ProcessingJobStatus = output.ProcessingJobStatus;
    }
    if (output.ProcessingOutputConfig !== undefined &&
        output.ProcessingOutputConfig !== null) {
        contents.ProcessingOutputConfig = deserializeAws_json1_1ProcessingOutputConfig(output.ProcessingOutputConfig, context);
    }
    if (output.ProcessingResources !== undefined &&
        output.ProcessingResources !== null) {
        contents.ProcessingResources = deserializeAws_json1_1ProcessingResources(output.ProcessingResources, context);
    }
    if (output.ProcessingStartTime !== undefined &&
        output.ProcessingStartTime !== null) {
        contents.ProcessingStartTime = new Date(Math.round(output.ProcessingStartTime * 1000));
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.StoppingCondition !== undefined &&
        output.StoppingCondition !== null) {
        contents.StoppingCondition = deserializeAws_json1_1ProcessingStoppingCondition(output.StoppingCondition, context);
    }
    if (output.TrainingJobArn !== undefined && output.TrainingJobArn !== null) {
        contents.TrainingJobArn = output.TrainingJobArn;
    }
    return contents;
};
const deserializeAws_json1_1DescribeSubscribedWorkteamResponse = (output, context) => {
    let contents = {
        __type: "DescribeSubscribedWorkteamResponse",
        SubscribedWorkteam: undefined
    };
    if (output.SubscribedWorkteam !== undefined &&
        output.SubscribedWorkteam !== null) {
        contents.SubscribedWorkteam = deserializeAws_json1_1SubscribedWorkteam(output.SubscribedWorkteam, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTrainingJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeTrainingJobResponse",
        AlgorithmSpecification: undefined,
        AutoMLJobArn: undefined,
        BillableTimeInSeconds: undefined,
        CheckpointConfig: undefined,
        CreationTime: undefined,
        DebugHookConfig: undefined,
        DebugRuleConfigurations: undefined,
        DebugRuleEvaluationStatuses: undefined,
        EnableInterContainerTrafficEncryption: undefined,
        EnableManagedSpotTraining: undefined,
        EnableNetworkIsolation: undefined,
        ExperimentConfig: undefined,
        FailureReason: undefined,
        FinalMetricDataList: undefined,
        HyperParameters: undefined,
        InputDataConfig: undefined,
        LabelingJobArn: undefined,
        LastModifiedTime: undefined,
        ModelArtifacts: undefined,
        OutputDataConfig: undefined,
        ResourceConfig: undefined,
        RoleArn: undefined,
        SecondaryStatus: undefined,
        SecondaryStatusTransitions: undefined,
        StoppingCondition: undefined,
        TensorBoardOutputConfig: undefined,
        TrainingEndTime: undefined,
        TrainingJobArn: undefined,
        TrainingJobName: undefined,
        TrainingJobStatus: undefined,
        TrainingStartTime: undefined,
        TrainingTimeInSeconds: undefined,
        TuningJobArn: undefined,
        VpcConfig: undefined
    };
    if (output.AlgorithmSpecification !== undefined &&
        output.AlgorithmSpecification !== null) {
        contents.AlgorithmSpecification = deserializeAws_json1_1AlgorithmSpecification(output.AlgorithmSpecification, context);
    }
    if (output.AutoMLJobArn !== undefined && output.AutoMLJobArn !== null) {
        contents.AutoMLJobArn = output.AutoMLJobArn;
    }
    if (output.BillableTimeInSeconds !== undefined &&
        output.BillableTimeInSeconds !== null) {
        contents.BillableTimeInSeconds = output.BillableTimeInSeconds;
    }
    if (output.CheckpointConfig !== undefined &&
        output.CheckpointConfig !== null) {
        contents.CheckpointConfig = deserializeAws_json1_1CheckpointConfig(output.CheckpointConfig, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DebugHookConfig !== undefined && output.DebugHookConfig !== null) {
        contents.DebugHookConfig = deserializeAws_json1_1DebugHookConfig(output.DebugHookConfig, context);
    }
    if (output.DebugRuleConfigurations !== undefined &&
        output.DebugRuleConfigurations !== null) {
        contents.DebugRuleConfigurations = deserializeAws_json1_1DebugRuleConfigurations(output.DebugRuleConfigurations, context);
    }
    if (output.DebugRuleEvaluationStatuses !== undefined &&
        output.DebugRuleEvaluationStatuses !== null) {
        contents.DebugRuleEvaluationStatuses = deserializeAws_json1_1DebugRuleEvaluationStatuses(output.DebugRuleEvaluationStatuses, context);
    }
    if (output.EnableInterContainerTrafficEncryption !== undefined &&
        output.EnableInterContainerTrafficEncryption !== null) {
        contents.EnableInterContainerTrafficEncryption =
            output.EnableInterContainerTrafficEncryption;
    }
    if (output.EnableManagedSpotTraining !== undefined &&
        output.EnableManagedSpotTraining !== null) {
        contents.EnableManagedSpotTraining = output.EnableManagedSpotTraining;
    }
    if (output.EnableNetworkIsolation !== undefined &&
        output.EnableNetworkIsolation !== null) {
        contents.EnableNetworkIsolation = output.EnableNetworkIsolation;
    }
    if (output.ExperimentConfig !== undefined &&
        output.ExperimentConfig !== null) {
        contents.ExperimentConfig = deserializeAws_json1_1ExperimentConfig(output.ExperimentConfig, context);
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.FinalMetricDataList !== undefined &&
        output.FinalMetricDataList !== null) {
        contents.FinalMetricDataList = deserializeAws_json1_1FinalMetricDataList(output.FinalMetricDataList, context);
    }
    if (output.HyperParameters !== undefined && output.HyperParameters !== null) {
        contents.HyperParameters = deserializeAws_json1_1HyperParameters(output.HyperParameters, context);
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
    }
    if (output.LabelingJobArn !== undefined && output.LabelingJobArn !== null) {
        contents.LabelingJobArn = output.LabelingJobArn;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.ModelArtifacts !== undefined && output.ModelArtifacts !== null) {
        contents.ModelArtifacts = deserializeAws_json1_1ModelArtifacts(output.ModelArtifacts, context);
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.ResourceConfig !== undefined && output.ResourceConfig !== null) {
        contents.ResourceConfig = deserializeAws_json1_1ResourceConfig(output.ResourceConfig, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.SecondaryStatus !== undefined && output.SecondaryStatus !== null) {
        contents.SecondaryStatus = output.SecondaryStatus;
    }
    if (output.SecondaryStatusTransitions !== undefined &&
        output.SecondaryStatusTransitions !== null) {
        contents.SecondaryStatusTransitions = deserializeAws_json1_1SecondaryStatusTransitions(output.SecondaryStatusTransitions, context);
    }
    if (output.StoppingCondition !== undefined &&
        output.StoppingCondition !== null) {
        contents.StoppingCondition = deserializeAws_json1_1StoppingCondition(output.StoppingCondition, context);
    }
    if (output.TensorBoardOutputConfig !== undefined &&
        output.TensorBoardOutputConfig !== null) {
        contents.TensorBoardOutputConfig = deserializeAws_json1_1TensorBoardOutputConfig(output.TensorBoardOutputConfig, context);
    }
    if (output.TrainingEndTime !== undefined && output.TrainingEndTime !== null) {
        contents.TrainingEndTime = new Date(Math.round(output.TrainingEndTime * 1000));
    }
    if (output.TrainingJobArn !== undefined && output.TrainingJobArn !== null) {
        contents.TrainingJobArn = output.TrainingJobArn;
    }
    if (output.TrainingJobName !== undefined && output.TrainingJobName !== null) {
        contents.TrainingJobName = output.TrainingJobName;
    }
    if (output.TrainingJobStatus !== undefined &&
        output.TrainingJobStatus !== null) {
        contents.TrainingJobStatus = output.TrainingJobStatus;
    }
    if (output.TrainingStartTime !== undefined &&
        output.TrainingStartTime !== null) {
        contents.TrainingStartTime = new Date(Math.round(output.TrainingStartTime * 1000));
    }
    if (output.TrainingTimeInSeconds !== undefined &&
        output.TrainingTimeInSeconds !== null) {
        contents.TrainingTimeInSeconds = output.TrainingTimeInSeconds;
    }
    if (output.TuningJobArn !== undefined && output.TuningJobArn !== null) {
        contents.TuningJobArn = output.TuningJobArn;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTransformJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeTransformJobResponse",
        AutoMLJobArn: undefined,
        BatchStrategy: undefined,
        CreationTime: undefined,
        DataProcessing: undefined,
        Environment: undefined,
        ExperimentConfig: undefined,
        FailureReason: undefined,
        LabelingJobArn: undefined,
        MaxConcurrentTransforms: undefined,
        MaxPayloadInMB: undefined,
        ModelName: undefined,
        TransformEndTime: undefined,
        TransformInput: undefined,
        TransformJobArn: undefined,
        TransformJobName: undefined,
        TransformJobStatus: undefined,
        TransformOutput: undefined,
        TransformResources: undefined,
        TransformStartTime: undefined
    };
    if (output.AutoMLJobArn !== undefined && output.AutoMLJobArn !== null) {
        contents.AutoMLJobArn = output.AutoMLJobArn;
    }
    if (output.BatchStrategy !== undefined && output.BatchStrategy !== null) {
        contents.BatchStrategy = output.BatchStrategy;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DataProcessing !== undefined && output.DataProcessing !== null) {
        contents.DataProcessing = deserializeAws_json1_1DataProcessing(output.DataProcessing, context);
    }
    if (output.Environment !== undefined && output.Environment !== null) {
        contents.Environment = deserializeAws_json1_1TransformEnvironmentMap(output.Environment, context);
    }
    if (output.ExperimentConfig !== undefined &&
        output.ExperimentConfig !== null) {
        contents.ExperimentConfig = deserializeAws_json1_1ExperimentConfig(output.ExperimentConfig, context);
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LabelingJobArn !== undefined && output.LabelingJobArn !== null) {
        contents.LabelingJobArn = output.LabelingJobArn;
    }
    if (output.MaxConcurrentTransforms !== undefined &&
        output.MaxConcurrentTransforms !== null) {
        contents.MaxConcurrentTransforms = output.MaxConcurrentTransforms;
    }
    if (output.MaxPayloadInMB !== undefined && output.MaxPayloadInMB !== null) {
        contents.MaxPayloadInMB = output.MaxPayloadInMB;
    }
    if (output.ModelName !== undefined && output.ModelName !== null) {
        contents.ModelName = output.ModelName;
    }
    if (output.TransformEndTime !== undefined &&
        output.TransformEndTime !== null) {
        contents.TransformEndTime = new Date(Math.round(output.TransformEndTime * 1000));
    }
    if (output.TransformInput !== undefined && output.TransformInput !== null) {
        contents.TransformInput = deserializeAws_json1_1TransformInput(output.TransformInput, context);
    }
    if (output.TransformJobArn !== undefined && output.TransformJobArn !== null) {
        contents.TransformJobArn = output.TransformJobArn;
    }
    if (output.TransformJobName !== undefined &&
        output.TransformJobName !== null) {
        contents.TransformJobName = output.TransformJobName;
    }
    if (output.TransformJobStatus !== undefined &&
        output.TransformJobStatus !== null) {
        contents.TransformJobStatus = output.TransformJobStatus;
    }
    if (output.TransformOutput !== undefined && output.TransformOutput !== null) {
        contents.TransformOutput = deserializeAws_json1_1TransformOutput(output.TransformOutput, context);
    }
    if (output.TransformResources !== undefined &&
        output.TransformResources !== null) {
        contents.TransformResources = deserializeAws_json1_1TransformResources(output.TransformResources, context);
    }
    if (output.TransformStartTime !== undefined &&
        output.TransformStartTime !== null) {
        contents.TransformStartTime = new Date(Math.round(output.TransformStartTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1DescribeTrialComponentResponse = (output, context) => {
    let contents = {
        __type: "DescribeTrialComponentResponse",
        CreatedBy: undefined,
        CreationTime: undefined,
        DisplayName: undefined,
        EndTime: undefined,
        InputArtifacts: undefined,
        LastModifiedBy: undefined,
        LastModifiedTime: undefined,
        Metrics: undefined,
        OutputArtifacts: undefined,
        Parameters: undefined,
        Source: undefined,
        StartTime: undefined,
        Status: undefined,
        TrialComponentArn: undefined,
        TrialComponentName: undefined
    };
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = deserializeAws_json1_1UserContext(output.CreatedBy, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.InputArtifacts !== undefined && output.InputArtifacts !== null) {
        contents.InputArtifacts = deserializeAws_json1_1TrialComponentArtifacts(output.InputArtifacts, context);
    }
    if (output.LastModifiedBy !== undefined && output.LastModifiedBy !== null) {
        contents.LastModifiedBy = deserializeAws_json1_1UserContext(output.LastModifiedBy, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.Metrics !== undefined && output.Metrics !== null) {
        contents.Metrics = deserializeAws_json1_1TrialComponentMetricSummaries(output.Metrics, context);
    }
    if (output.OutputArtifacts !== undefined && output.OutputArtifacts !== null) {
        contents.OutputArtifacts = deserializeAws_json1_1TrialComponentArtifacts(output.OutputArtifacts, context);
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1TrialComponentParameters(output.Parameters, context);
    }
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = deserializeAws_json1_1TrialComponentSource(output.Source, context);
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1TrialComponentStatus(output.Status, context);
    }
    if (output.TrialComponentArn !== undefined &&
        output.TrialComponentArn !== null) {
        contents.TrialComponentArn = output.TrialComponentArn;
    }
    if (output.TrialComponentName !== undefined &&
        output.TrialComponentName !== null) {
        contents.TrialComponentName = output.TrialComponentName;
    }
    return contents;
};
const deserializeAws_json1_1DescribeTrialResponse = (output, context) => {
    let contents = {
        __type: "DescribeTrialResponse",
        CreatedBy: undefined,
        CreationTime: undefined,
        DisplayName: undefined,
        ExperimentName: undefined,
        LastModifiedBy: undefined,
        LastModifiedTime: undefined,
        Source: undefined,
        TrialArn: undefined,
        TrialName: undefined
    };
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = deserializeAws_json1_1UserContext(output.CreatedBy, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.ExperimentName !== undefined && output.ExperimentName !== null) {
        contents.ExperimentName = output.ExperimentName;
    }
    if (output.LastModifiedBy !== undefined && output.LastModifiedBy !== null) {
        contents.LastModifiedBy = deserializeAws_json1_1UserContext(output.LastModifiedBy, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = deserializeAws_json1_1TrialSource(output.Source, context);
    }
    if (output.TrialArn !== undefined && output.TrialArn !== null) {
        contents.TrialArn = output.TrialArn;
    }
    if (output.TrialName !== undefined && output.TrialName !== null) {
        contents.TrialName = output.TrialName;
    }
    return contents;
};
const deserializeAws_json1_1DescribeUserProfileResponse = (output, context) => {
    let contents = {
        __type: "DescribeUserProfileResponse",
        CreationTime: undefined,
        DomainId: undefined,
        FailureReason: undefined,
        HomeEfsFileSystemUid: undefined,
        LastModifiedTime: undefined,
        SingleSignOnUserIdentifier: undefined,
        SingleSignOnUserValue: undefined,
        Status: undefined,
        UserProfileArn: undefined,
        UserProfileName: undefined,
        UserSettings: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DomainId !== undefined && output.DomainId !== null) {
        contents.DomainId = output.DomainId;
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.HomeEfsFileSystemUid !== undefined &&
        output.HomeEfsFileSystemUid !== null) {
        contents.HomeEfsFileSystemUid = output.HomeEfsFileSystemUid;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.SingleSignOnUserIdentifier !== undefined &&
        output.SingleSignOnUserIdentifier !== null) {
        contents.SingleSignOnUserIdentifier = output.SingleSignOnUserIdentifier;
    }
    if (output.SingleSignOnUserValue !== undefined &&
        output.SingleSignOnUserValue !== null) {
        contents.SingleSignOnUserValue = output.SingleSignOnUserValue;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UserProfileArn !== undefined && output.UserProfileArn !== null) {
        contents.UserProfileArn = output.UserProfileArn;
    }
    if (output.UserProfileName !== undefined && output.UserProfileName !== null) {
        contents.UserProfileName = output.UserProfileName;
    }
    if (output.UserSettings !== undefined && output.UserSettings !== null) {
        contents.UserSettings = deserializeAws_json1_1UserSettings(output.UserSettings, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeWorkforceResponse = (output, context) => {
    let contents = {
        __type: "DescribeWorkforceResponse",
        Workforce: undefined
    };
    if (output.Workforce !== undefined && output.Workforce !== null) {
        contents.Workforce = deserializeAws_json1_1Workforce(output.Workforce, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeWorkteamResponse = (output, context) => {
    let contents = {
        __type: "DescribeWorkteamResponse",
        Workteam: undefined
    };
    if (output.Workteam !== undefined && output.Workteam !== null) {
        contents.Workteam = deserializeAws_json1_1Workteam(output.Workteam, context);
    }
    return contents;
};
const deserializeAws_json1_1DisassociateTrialComponentResponse = (output, context) => {
    let contents = {
        __type: "DisassociateTrialComponentResponse",
        TrialArn: undefined,
        TrialComponentArn: undefined
    };
    if (output.TrialArn !== undefined && output.TrialArn !== null) {
        contents.TrialArn = output.TrialArn;
    }
    if (output.TrialComponentArn !== undefined &&
        output.TrialComponentArn !== null) {
        contents.TrialComponentArn = output.TrialComponentArn;
    }
    return contents;
};
const deserializeAws_json1_1DomainDetails = (output, context) => {
    let contents = {
        __type: "DomainDetails",
        CreationTime: undefined,
        DomainArn: undefined,
        DomainId: undefined,
        DomainName: undefined,
        LastModifiedTime: undefined,
        Status: undefined,
        Url: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DomainArn !== undefined && output.DomainArn !== null) {
        contents.DomainArn = output.DomainArn;
    }
    if (output.DomainId !== undefined && output.DomainId !== null) {
        contents.DomainId = output.DomainId;
    }
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Url !== undefined && output.Url !== null) {
        contents.Url = output.Url;
    }
    return contents;
};
const deserializeAws_json1_1DomainList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DomainDetails(entry, context));
};
const deserializeAws_json1_1EndpointConfigSummary = (output, context) => {
    let contents = {
        __type: "EndpointConfigSummary",
        CreationTime: undefined,
        EndpointConfigArn: undefined,
        EndpointConfigName: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.EndpointConfigArn !== undefined &&
        output.EndpointConfigArn !== null) {
        contents.EndpointConfigArn = output.EndpointConfigArn;
    }
    if (output.EndpointConfigName !== undefined &&
        output.EndpointConfigName !== null) {
        contents.EndpointConfigName = output.EndpointConfigName;
    }
    return contents;
};
const deserializeAws_json1_1EndpointConfigSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EndpointConfigSummary(entry, context));
};
const deserializeAws_json1_1EndpointInput = (output, context) => {
    let contents = {
        __type: "EndpointInput",
        EndpointName: undefined,
        LocalPath: undefined,
        S3DataDistributionType: undefined,
        S3InputMode: undefined
    };
    if (output.EndpointName !== undefined && output.EndpointName !== null) {
        contents.EndpointName = output.EndpointName;
    }
    if (output.LocalPath !== undefined && output.LocalPath !== null) {
        contents.LocalPath = output.LocalPath;
    }
    if (output.S3DataDistributionType !== undefined &&
        output.S3DataDistributionType !== null) {
        contents.S3DataDistributionType = output.S3DataDistributionType;
    }
    if (output.S3InputMode !== undefined && output.S3InputMode !== null) {
        contents.S3InputMode = output.S3InputMode;
    }
    return contents;
};
const deserializeAws_json1_1EndpointSummary = (output, context) => {
    let contents = {
        __type: "EndpointSummary",
        CreationTime: undefined,
        EndpointArn: undefined,
        EndpointName: undefined,
        EndpointStatus: undefined,
        LastModifiedTime: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.EndpointArn !== undefined && output.EndpointArn !== null) {
        contents.EndpointArn = output.EndpointArn;
    }
    if (output.EndpointName !== undefined && output.EndpointName !== null) {
        contents.EndpointName = output.EndpointName;
    }
    if (output.EndpointStatus !== undefined && output.EndpointStatus !== null) {
        contents.EndpointStatus = output.EndpointStatus;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1EndpointSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EndpointSummary(entry, context));
};
const deserializeAws_json1_1EnvironmentMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1Experiment = (output, context) => {
    let contents = {
        __type: "Experiment",
        CreatedBy: undefined,
        CreationTime: undefined,
        Description: undefined,
        DisplayName: undefined,
        ExperimentArn: undefined,
        ExperimentName: undefined,
        LastModifiedBy: undefined,
        LastModifiedTime: undefined,
        Source: undefined,
        Tags: undefined
    };
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = deserializeAws_json1_1UserContext(output.CreatedBy, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.ExperimentArn !== undefined && output.ExperimentArn !== null) {
        contents.ExperimentArn = output.ExperimentArn;
    }
    if (output.ExperimentName !== undefined && output.ExperimentName !== null) {
        contents.ExperimentName = output.ExperimentName;
    }
    if (output.LastModifiedBy !== undefined && output.LastModifiedBy !== null) {
        contents.LastModifiedBy = deserializeAws_json1_1UserContext(output.LastModifiedBy, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = deserializeAws_json1_1ExperimentSource(output.Source, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ExperimentConfig = (output, context) => {
    let contents = {
        __type: "ExperimentConfig",
        ExperimentName: undefined,
        TrialComponentDisplayName: undefined,
        TrialName: undefined
    };
    if (output.ExperimentName !== undefined && output.ExperimentName !== null) {
        contents.ExperimentName = output.ExperimentName;
    }
    if (output.TrialComponentDisplayName !== undefined &&
        output.TrialComponentDisplayName !== null) {
        contents.TrialComponentDisplayName = output.TrialComponentDisplayName;
    }
    if (output.TrialName !== undefined && output.TrialName !== null) {
        contents.TrialName = output.TrialName;
    }
    return contents;
};
const deserializeAws_json1_1ExperimentSource = (output, context) => {
    let contents = {
        __type: "ExperimentSource",
        SourceArn: undefined,
        SourceType: undefined
    };
    if (output.SourceArn !== undefined && output.SourceArn !== null) {
        contents.SourceArn = output.SourceArn;
    }
    if (output.SourceType !== undefined && output.SourceType !== null) {
        contents.SourceType = output.SourceType;
    }
    return contents;
};
const deserializeAws_json1_1ExperimentSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ExperimentSummary(entry, context));
};
const deserializeAws_json1_1ExperimentSummary = (output, context) => {
    let contents = {
        __type: "ExperimentSummary",
        CreationTime: undefined,
        DisplayName: undefined,
        ExperimentArn: undefined,
        ExperimentName: undefined,
        ExperimentSource: undefined,
        LastModifiedTime: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.ExperimentArn !== undefined && output.ExperimentArn !== null) {
        contents.ExperimentArn = output.ExperimentArn;
    }
    if (output.ExperimentName !== undefined && output.ExperimentName !== null) {
        contents.ExperimentName = output.ExperimentName;
    }
    if (output.ExperimentSource !== undefined &&
        output.ExperimentSource !== null) {
        contents.ExperimentSource = deserializeAws_json1_1ExperimentSource(output.ExperimentSource, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1FileSystemDataSource = (output, context) => {
    let contents = {
        __type: "FileSystemDataSource",
        DirectoryPath: undefined,
        FileSystemAccessMode: undefined,
        FileSystemId: undefined,
        FileSystemType: undefined
    };
    if (output.DirectoryPath !== undefined && output.DirectoryPath !== null) {
        contents.DirectoryPath = output.DirectoryPath;
    }
    if (output.FileSystemAccessMode !== undefined &&
        output.FileSystemAccessMode !== null) {
        contents.FileSystemAccessMode = output.FileSystemAccessMode;
    }
    if (output.FileSystemId !== undefined && output.FileSystemId !== null) {
        contents.FileSystemId = output.FileSystemId;
    }
    if (output.FileSystemType !== undefined && output.FileSystemType !== null) {
        contents.FileSystemType = output.FileSystemType;
    }
    return contents;
};
const deserializeAws_json1_1FinalAutoMLJobObjectiveMetric = (output, context) => {
    let contents = {
        __type: "FinalAutoMLJobObjectiveMetric",
        MetricName: undefined,
        Type: undefined,
        Value: undefined
    };
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1FinalHyperParameterTuningJobObjectiveMetric = (output, context) => {
    let contents = {
        __type: "FinalHyperParameterTuningJobObjectiveMetric",
        MetricName: undefined,
        Type: undefined,
        Value: undefined
    };
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1FinalMetricDataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MetricData(entry, context));
};
const deserializeAws_json1_1FlowDefinitionOutputConfig = (output, context) => {
    let contents = {
        __type: "FlowDefinitionOutputConfig",
        KmsKeyId: undefined,
        S3OutputPath: undefined
    };
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.S3OutputPath !== undefined && output.S3OutputPath !== null) {
        contents.S3OutputPath = output.S3OutputPath;
    }
    return contents;
};
const deserializeAws_json1_1FlowDefinitionSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FlowDefinitionSummary(entry, context));
};
const deserializeAws_json1_1FlowDefinitionSummary = (output, context) => {
    let contents = {
        __type: "FlowDefinitionSummary",
        CreationTime: undefined,
        FailureReason: undefined,
        FlowDefinitionArn: undefined,
        FlowDefinitionName: undefined,
        FlowDefinitionStatus: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.FlowDefinitionArn !== undefined &&
        output.FlowDefinitionArn !== null) {
        contents.FlowDefinitionArn = output.FlowDefinitionArn;
    }
    if (output.FlowDefinitionName !== undefined &&
        output.FlowDefinitionName !== null) {
        contents.FlowDefinitionName = output.FlowDefinitionName;
    }
    if (output.FlowDefinitionStatus !== undefined &&
        output.FlowDefinitionStatus !== null) {
        contents.FlowDefinitionStatus = output.FlowDefinitionStatus;
    }
    return contents;
};
const deserializeAws_json1_1FlowDefinitionTaskKeywords = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1GetSearchSuggestionsResponse = (output, context) => {
    let contents = {
        __type: "GetSearchSuggestionsResponse",
        PropertyNameSuggestions: undefined
    };
    if (output.PropertyNameSuggestions !== undefined &&
        output.PropertyNameSuggestions !== null) {
        contents.PropertyNameSuggestions = deserializeAws_json1_1PropertyNameSuggestionList(output.PropertyNameSuggestions, context);
    }
    return contents;
};
const deserializeAws_json1_1GitConfig = (output, context) => {
    let contents = {
        __type: "GitConfig",
        Branch: undefined,
        RepositoryUrl: undefined,
        SecretArn: undefined
    };
    if (output.Branch !== undefined && output.Branch !== null) {
        contents.Branch = output.Branch;
    }
    if (output.RepositoryUrl !== undefined && output.RepositoryUrl !== null) {
        contents.RepositoryUrl = output.RepositoryUrl;
    }
    if (output.SecretArn !== undefined && output.SecretArn !== null) {
        contents.SecretArn = output.SecretArn;
    }
    return contents;
};
const deserializeAws_json1_1HookParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1HumanLoopActivationConditionsConfig = (output, context) => {
    let contents = {
        __type: "HumanLoopActivationConditionsConfig",
        HumanLoopActivationConditions: undefined
    };
    if (output.HumanLoopActivationConditions !== undefined &&
        output.HumanLoopActivationConditions !== null) {
        contents.HumanLoopActivationConditions = new smithy_client_1.LazyJsonString(output.HumanLoopActivationConditions);
    }
    return contents;
};
const deserializeAws_json1_1HumanLoopActivationConfig = (output, context) => {
    let contents = {
        __type: "HumanLoopActivationConfig",
        HumanLoopActivationConditionsConfig: undefined,
        HumanLoopRequestSource: undefined
    };
    if (output.HumanLoopActivationConditionsConfig !== undefined &&
        output.HumanLoopActivationConditionsConfig !== null) {
        contents.HumanLoopActivationConditionsConfig = deserializeAws_json1_1HumanLoopActivationConditionsConfig(output.HumanLoopActivationConditionsConfig, context);
    }
    if (output.HumanLoopRequestSource !== undefined &&
        output.HumanLoopRequestSource !== null) {
        contents.HumanLoopRequestSource = deserializeAws_json1_1HumanLoopRequestSource(output.HumanLoopRequestSource, context);
    }
    return contents;
};
const deserializeAws_json1_1HumanLoopConfig = (output, context) => {
    let contents = {
        __type: "HumanLoopConfig",
        HumanTaskUiArn: undefined,
        PublicWorkforceTaskPrice: undefined,
        TaskAvailabilityLifetimeInSeconds: undefined,
        TaskCount: undefined,
        TaskDescription: undefined,
        TaskKeywords: undefined,
        TaskTimeLimitInSeconds: undefined,
        TaskTitle: undefined,
        WorkteamArn: undefined
    };
    if (output.HumanTaskUiArn !== undefined && output.HumanTaskUiArn !== null) {
        contents.HumanTaskUiArn = output.HumanTaskUiArn;
    }
    if (output.PublicWorkforceTaskPrice !== undefined &&
        output.PublicWorkforceTaskPrice !== null) {
        contents.PublicWorkforceTaskPrice = deserializeAws_json1_1PublicWorkforceTaskPrice(output.PublicWorkforceTaskPrice, context);
    }
    if (output.TaskAvailabilityLifetimeInSeconds !== undefined &&
        output.TaskAvailabilityLifetimeInSeconds !== null) {
        contents.TaskAvailabilityLifetimeInSeconds =
            output.TaskAvailabilityLifetimeInSeconds;
    }
    if (output.TaskCount !== undefined && output.TaskCount !== null) {
        contents.TaskCount = output.TaskCount;
    }
    if (output.TaskDescription !== undefined && output.TaskDescription !== null) {
        contents.TaskDescription = output.TaskDescription;
    }
    if (output.TaskKeywords !== undefined && output.TaskKeywords !== null) {
        contents.TaskKeywords = deserializeAws_json1_1FlowDefinitionTaskKeywords(output.TaskKeywords, context);
    }
    if (output.TaskTimeLimitInSeconds !== undefined &&
        output.TaskTimeLimitInSeconds !== null) {
        contents.TaskTimeLimitInSeconds = output.TaskTimeLimitInSeconds;
    }
    if (output.TaskTitle !== undefined && output.TaskTitle !== null) {
        contents.TaskTitle = output.TaskTitle;
    }
    if (output.WorkteamArn !== undefined && output.WorkteamArn !== null) {
        contents.WorkteamArn = output.WorkteamArn;
    }
    return contents;
};
const deserializeAws_json1_1HumanLoopRequestSource = (output, context) => {
    let contents = {
        __type: "HumanLoopRequestSource",
        AwsManagedHumanLoopRequestSource: undefined
    };
    if (output.AwsManagedHumanLoopRequestSource !== undefined &&
        output.AwsManagedHumanLoopRequestSource !== null) {
        contents.AwsManagedHumanLoopRequestSource =
            output.AwsManagedHumanLoopRequestSource;
    }
    return contents;
};
const deserializeAws_json1_1HumanTaskConfig = (output, context) => {
    let contents = {
        __type: "HumanTaskConfig",
        AnnotationConsolidationConfig: undefined,
        MaxConcurrentTaskCount: undefined,
        NumberOfHumanWorkersPerDataObject: undefined,
        PreHumanTaskLambdaArn: undefined,
        PublicWorkforceTaskPrice: undefined,
        TaskAvailabilityLifetimeInSeconds: undefined,
        TaskDescription: undefined,
        TaskKeywords: undefined,
        TaskTimeLimitInSeconds: undefined,
        TaskTitle: undefined,
        UiConfig: undefined,
        WorkteamArn: undefined
    };
    if (output.AnnotationConsolidationConfig !== undefined &&
        output.AnnotationConsolidationConfig !== null) {
        contents.AnnotationConsolidationConfig = deserializeAws_json1_1AnnotationConsolidationConfig(output.AnnotationConsolidationConfig, context);
    }
    if (output.MaxConcurrentTaskCount !== undefined &&
        output.MaxConcurrentTaskCount !== null) {
        contents.MaxConcurrentTaskCount = output.MaxConcurrentTaskCount;
    }
    if (output.NumberOfHumanWorkersPerDataObject !== undefined &&
        output.NumberOfHumanWorkersPerDataObject !== null) {
        contents.NumberOfHumanWorkersPerDataObject =
            output.NumberOfHumanWorkersPerDataObject;
    }
    if (output.PreHumanTaskLambdaArn !== undefined &&
        output.PreHumanTaskLambdaArn !== null) {
        contents.PreHumanTaskLambdaArn = output.PreHumanTaskLambdaArn;
    }
    if (output.PublicWorkforceTaskPrice !== undefined &&
        output.PublicWorkforceTaskPrice !== null) {
        contents.PublicWorkforceTaskPrice = deserializeAws_json1_1PublicWorkforceTaskPrice(output.PublicWorkforceTaskPrice, context);
    }
    if (output.TaskAvailabilityLifetimeInSeconds !== undefined &&
        output.TaskAvailabilityLifetimeInSeconds !== null) {
        contents.TaskAvailabilityLifetimeInSeconds =
            output.TaskAvailabilityLifetimeInSeconds;
    }
    if (output.TaskDescription !== undefined && output.TaskDescription !== null) {
        contents.TaskDescription = output.TaskDescription;
    }
    if (output.TaskKeywords !== undefined && output.TaskKeywords !== null) {
        contents.TaskKeywords = deserializeAws_json1_1TaskKeywords(output.TaskKeywords, context);
    }
    if (output.TaskTimeLimitInSeconds !== undefined &&
        output.TaskTimeLimitInSeconds !== null) {
        contents.TaskTimeLimitInSeconds = output.TaskTimeLimitInSeconds;
    }
    if (output.TaskTitle !== undefined && output.TaskTitle !== null) {
        contents.TaskTitle = output.TaskTitle;
    }
    if (output.UiConfig !== undefined && output.UiConfig !== null) {
        contents.UiConfig = deserializeAws_json1_1UiConfig(output.UiConfig, context);
    }
    if (output.WorkteamArn !== undefined && output.WorkteamArn !== null) {
        contents.WorkteamArn = output.WorkteamArn;
    }
    return contents;
};
const deserializeAws_json1_1HumanTaskUiSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HumanTaskUiSummary(entry, context));
};
const deserializeAws_json1_1HumanTaskUiSummary = (output, context) => {
    let contents = {
        __type: "HumanTaskUiSummary",
        CreationTime: undefined,
        HumanTaskUiArn: undefined,
        HumanTaskUiName: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.HumanTaskUiArn !== undefined && output.HumanTaskUiArn !== null) {
        contents.HumanTaskUiArn = output.HumanTaskUiArn;
    }
    if (output.HumanTaskUiName !== undefined && output.HumanTaskUiName !== null) {
        contents.HumanTaskUiName = output.HumanTaskUiName;
    }
    return contents;
};
const deserializeAws_json1_1HyperParameterAlgorithmSpecification = (output, context) => {
    let contents = {
        __type: "HyperParameterAlgorithmSpecification",
        AlgorithmName: undefined,
        MetricDefinitions: undefined,
        TrainingImage: undefined,
        TrainingInputMode: undefined
    };
    if (output.AlgorithmName !== undefined && output.AlgorithmName !== null) {
        contents.AlgorithmName = output.AlgorithmName;
    }
    if (output.MetricDefinitions !== undefined &&
        output.MetricDefinitions !== null) {
        contents.MetricDefinitions = deserializeAws_json1_1MetricDefinitionList(output.MetricDefinitions, context);
    }
    if (output.TrainingImage !== undefined && output.TrainingImage !== null) {
        contents.TrainingImage = output.TrainingImage;
    }
    if (output.TrainingInputMode !== undefined &&
        output.TrainingInputMode !== null) {
        contents.TrainingInputMode = output.TrainingInputMode;
    }
    return contents;
};
const deserializeAws_json1_1HyperParameterSpecification = (output, context) => {
    let contents = {
        __type: "HyperParameterSpecification",
        DefaultValue: undefined,
        Description: undefined,
        IsRequired: undefined,
        IsTunable: undefined,
        Name: undefined,
        Range: undefined,
        Type: undefined
    };
    if (output.DefaultValue !== undefined && output.DefaultValue !== null) {
        contents.DefaultValue = output.DefaultValue;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.IsRequired !== undefined && output.IsRequired !== null) {
        contents.IsRequired = output.IsRequired;
    }
    if (output.IsTunable !== undefined && output.IsTunable !== null) {
        contents.IsTunable = output.IsTunable;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Range !== undefined && output.Range !== null) {
        contents.Range = deserializeAws_json1_1ParameterRange(output.Range, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1HyperParameterSpecifications = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HyperParameterSpecification(entry, context));
};
const deserializeAws_json1_1HyperParameterTrainingJobDefinition = (output, context) => {
    let contents = {
        __type: "HyperParameterTrainingJobDefinition",
        AlgorithmSpecification: undefined,
        CheckpointConfig: undefined,
        DefinitionName: undefined,
        EnableInterContainerTrafficEncryption: undefined,
        EnableManagedSpotTraining: undefined,
        EnableNetworkIsolation: undefined,
        HyperParameterRanges: undefined,
        InputDataConfig: undefined,
        OutputDataConfig: undefined,
        ResourceConfig: undefined,
        RoleArn: undefined,
        StaticHyperParameters: undefined,
        StoppingCondition: undefined,
        TuningObjective: undefined,
        VpcConfig: undefined
    };
    if (output.AlgorithmSpecification !== undefined &&
        output.AlgorithmSpecification !== null) {
        contents.AlgorithmSpecification = deserializeAws_json1_1HyperParameterAlgorithmSpecification(output.AlgorithmSpecification, context);
    }
    if (output.CheckpointConfig !== undefined &&
        output.CheckpointConfig !== null) {
        contents.CheckpointConfig = deserializeAws_json1_1CheckpointConfig(output.CheckpointConfig, context);
    }
    if (output.DefinitionName !== undefined && output.DefinitionName !== null) {
        contents.DefinitionName = output.DefinitionName;
    }
    if (output.EnableInterContainerTrafficEncryption !== undefined &&
        output.EnableInterContainerTrafficEncryption !== null) {
        contents.EnableInterContainerTrafficEncryption =
            output.EnableInterContainerTrafficEncryption;
    }
    if (output.EnableManagedSpotTraining !== undefined &&
        output.EnableManagedSpotTraining !== null) {
        contents.EnableManagedSpotTraining = output.EnableManagedSpotTraining;
    }
    if (output.EnableNetworkIsolation !== undefined &&
        output.EnableNetworkIsolation !== null) {
        contents.EnableNetworkIsolation = output.EnableNetworkIsolation;
    }
    if (output.HyperParameterRanges !== undefined &&
        output.HyperParameterRanges !== null) {
        contents.HyperParameterRanges = deserializeAws_json1_1ParameterRanges(output.HyperParameterRanges, context);
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.ResourceConfig !== undefined && output.ResourceConfig !== null) {
        contents.ResourceConfig = deserializeAws_json1_1ResourceConfig(output.ResourceConfig, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.StaticHyperParameters !== undefined &&
        output.StaticHyperParameters !== null) {
        contents.StaticHyperParameters = deserializeAws_json1_1HyperParameters(output.StaticHyperParameters, context);
    }
    if (output.StoppingCondition !== undefined &&
        output.StoppingCondition !== null) {
        contents.StoppingCondition = deserializeAws_json1_1StoppingCondition(output.StoppingCondition, context);
    }
    if (output.TuningObjective !== undefined && output.TuningObjective !== null) {
        contents.TuningObjective = deserializeAws_json1_1HyperParameterTuningJobObjective(output.TuningObjective, context);
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1HyperParameterTrainingJobDefinitions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HyperParameterTrainingJobDefinition(entry, context));
};
const deserializeAws_json1_1HyperParameterTrainingJobSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HyperParameterTrainingJobSummary(entry, context));
};
const deserializeAws_json1_1HyperParameterTrainingJobSummary = (output, context) => {
    let contents = {
        __type: "HyperParameterTrainingJobSummary",
        CreationTime: undefined,
        FailureReason: undefined,
        FinalHyperParameterTuningJobObjectiveMetric: undefined,
        ObjectiveStatus: undefined,
        TrainingEndTime: undefined,
        TrainingJobArn: undefined,
        TrainingJobDefinitionName: undefined,
        TrainingJobName: undefined,
        TrainingJobStatus: undefined,
        TrainingStartTime: undefined,
        TunedHyperParameters: undefined,
        TuningJobName: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.FinalHyperParameterTuningJobObjectiveMetric !== undefined &&
        output.FinalHyperParameterTuningJobObjectiveMetric !== null) {
        contents.FinalHyperParameterTuningJobObjectiveMetric = deserializeAws_json1_1FinalHyperParameterTuningJobObjectiveMetric(output.FinalHyperParameterTuningJobObjectiveMetric, context);
    }
    if (output.ObjectiveStatus !== undefined && output.ObjectiveStatus !== null) {
        contents.ObjectiveStatus = output.ObjectiveStatus;
    }
    if (output.TrainingEndTime !== undefined && output.TrainingEndTime !== null) {
        contents.TrainingEndTime = new Date(Math.round(output.TrainingEndTime * 1000));
    }
    if (output.TrainingJobArn !== undefined && output.TrainingJobArn !== null) {
        contents.TrainingJobArn = output.TrainingJobArn;
    }
    if (output.TrainingJobDefinitionName !== undefined &&
        output.TrainingJobDefinitionName !== null) {
        contents.TrainingJobDefinitionName = output.TrainingJobDefinitionName;
    }
    if (output.TrainingJobName !== undefined && output.TrainingJobName !== null) {
        contents.TrainingJobName = output.TrainingJobName;
    }
    if (output.TrainingJobStatus !== undefined &&
        output.TrainingJobStatus !== null) {
        contents.TrainingJobStatus = output.TrainingJobStatus;
    }
    if (output.TrainingStartTime !== undefined &&
        output.TrainingStartTime !== null) {
        contents.TrainingStartTime = new Date(Math.round(output.TrainingStartTime * 1000));
    }
    if (output.TunedHyperParameters !== undefined &&
        output.TunedHyperParameters !== null) {
        contents.TunedHyperParameters = deserializeAws_json1_1HyperParameters(output.TunedHyperParameters, context);
    }
    if (output.TuningJobName !== undefined && output.TuningJobName !== null) {
        contents.TuningJobName = output.TuningJobName;
    }
    return contents;
};
const deserializeAws_json1_1HyperParameterTuningJobConfig = (output, context) => {
    let contents = {
        __type: "HyperParameterTuningJobConfig",
        HyperParameterTuningJobObjective: undefined,
        ParameterRanges: undefined,
        ResourceLimits: undefined,
        Strategy: undefined,
        TrainingJobEarlyStoppingType: undefined,
        TuningJobCompletionCriteria: undefined
    };
    if (output.HyperParameterTuningJobObjective !== undefined &&
        output.HyperParameterTuningJobObjective !== null) {
        contents.HyperParameterTuningJobObjective = deserializeAws_json1_1HyperParameterTuningJobObjective(output.HyperParameterTuningJobObjective, context);
    }
    if (output.ParameterRanges !== undefined && output.ParameterRanges !== null) {
        contents.ParameterRanges = deserializeAws_json1_1ParameterRanges(output.ParameterRanges, context);
    }
    if (output.ResourceLimits !== undefined && output.ResourceLimits !== null) {
        contents.ResourceLimits = deserializeAws_json1_1ResourceLimits(output.ResourceLimits, context);
    }
    if (output.Strategy !== undefined && output.Strategy !== null) {
        contents.Strategy = output.Strategy;
    }
    if (output.TrainingJobEarlyStoppingType !== undefined &&
        output.TrainingJobEarlyStoppingType !== null) {
        contents.TrainingJobEarlyStoppingType = output.TrainingJobEarlyStoppingType;
    }
    if (output.TuningJobCompletionCriteria !== undefined &&
        output.TuningJobCompletionCriteria !== null) {
        contents.TuningJobCompletionCriteria = deserializeAws_json1_1TuningJobCompletionCriteria(output.TuningJobCompletionCriteria, context);
    }
    return contents;
};
const deserializeAws_json1_1HyperParameterTuningJobObjective = (output, context) => {
    let contents = {
        __type: "HyperParameterTuningJobObjective",
        MetricName: undefined,
        Type: undefined
    };
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1HyperParameterTuningJobObjectives = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HyperParameterTuningJobObjective(entry, context));
};
const deserializeAws_json1_1HyperParameterTuningJobSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HyperParameterTuningJobSummary(entry, context));
};
const deserializeAws_json1_1HyperParameterTuningJobSummary = (output, context) => {
    let contents = {
        __type: "HyperParameterTuningJobSummary",
        CreationTime: undefined,
        HyperParameterTuningEndTime: undefined,
        HyperParameterTuningJobArn: undefined,
        HyperParameterTuningJobName: undefined,
        HyperParameterTuningJobStatus: undefined,
        LastModifiedTime: undefined,
        ObjectiveStatusCounters: undefined,
        ResourceLimits: undefined,
        Strategy: undefined,
        TrainingJobStatusCounters: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.HyperParameterTuningEndTime !== undefined &&
        output.HyperParameterTuningEndTime !== null) {
        contents.HyperParameterTuningEndTime = new Date(Math.round(output.HyperParameterTuningEndTime * 1000));
    }
    if (output.HyperParameterTuningJobArn !== undefined &&
        output.HyperParameterTuningJobArn !== null) {
        contents.HyperParameterTuningJobArn = output.HyperParameterTuningJobArn;
    }
    if (output.HyperParameterTuningJobName !== undefined &&
        output.HyperParameterTuningJobName !== null) {
        contents.HyperParameterTuningJobName = output.HyperParameterTuningJobName;
    }
    if (output.HyperParameterTuningJobStatus !== undefined &&
        output.HyperParameterTuningJobStatus !== null) {
        contents.HyperParameterTuningJobStatus =
            output.HyperParameterTuningJobStatus;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.ObjectiveStatusCounters !== undefined &&
        output.ObjectiveStatusCounters !== null) {
        contents.ObjectiveStatusCounters = deserializeAws_json1_1ObjectiveStatusCounters(output.ObjectiveStatusCounters, context);
    }
    if (output.ResourceLimits !== undefined && output.ResourceLimits !== null) {
        contents.ResourceLimits = deserializeAws_json1_1ResourceLimits(output.ResourceLimits, context);
    }
    if (output.Strategy !== undefined && output.Strategy !== null) {
        contents.Strategy = output.Strategy;
    }
    if (output.TrainingJobStatusCounters !== undefined &&
        output.TrainingJobStatusCounters !== null) {
        contents.TrainingJobStatusCounters = deserializeAws_json1_1TrainingJobStatusCounters(output.TrainingJobStatusCounters, context);
    }
    return contents;
};
const deserializeAws_json1_1HyperParameterTuningJobWarmStartConfig = (output, context) => {
    let contents = {
        __type: "HyperParameterTuningJobWarmStartConfig",
        ParentHyperParameterTuningJobs: undefined,
        WarmStartType: undefined
    };
    if (output.ParentHyperParameterTuningJobs !== undefined &&
        output.ParentHyperParameterTuningJobs !== null) {
        contents.ParentHyperParameterTuningJobs = deserializeAws_json1_1ParentHyperParameterTuningJobs(output.ParentHyperParameterTuningJobs, context);
    }
    if (output.WarmStartType !== undefined && output.WarmStartType !== null) {
        contents.WarmStartType = output.WarmStartType;
    }
    return contents;
};
const deserializeAws_json1_1HyperParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1InferenceSpecification = (output, context) => {
    let contents = {
        __type: "InferenceSpecification",
        Containers: undefined,
        SupportedContentTypes: undefined,
        SupportedRealtimeInferenceInstanceTypes: undefined,
        SupportedResponseMIMETypes: undefined,
        SupportedTransformInstanceTypes: undefined
    };
    if (output.Containers !== undefined && output.Containers !== null) {
        contents.Containers = deserializeAws_json1_1ModelPackageContainerDefinitionList(output.Containers, context);
    }
    if (output.SupportedContentTypes !== undefined &&
        output.SupportedContentTypes !== null) {
        contents.SupportedContentTypes = deserializeAws_json1_1ContentTypes(output.SupportedContentTypes, context);
    }
    if (output.SupportedRealtimeInferenceInstanceTypes !== undefined &&
        output.SupportedRealtimeInferenceInstanceTypes !== null) {
        contents.SupportedRealtimeInferenceInstanceTypes = deserializeAws_json1_1RealtimeInferenceInstanceTypes(output.SupportedRealtimeInferenceInstanceTypes, context);
    }
    if (output.SupportedResponseMIMETypes !== undefined &&
        output.SupportedResponseMIMETypes !== null) {
        contents.SupportedResponseMIMETypes = deserializeAws_json1_1ResponseMIMETypes(output.SupportedResponseMIMETypes, context);
    }
    if (output.SupportedTransformInstanceTypes !== undefined &&
        output.SupportedTransformInstanceTypes !== null) {
        contents.SupportedTransformInstanceTypes = deserializeAws_json1_1TransformInstanceTypes(output.SupportedTransformInstanceTypes, context);
    }
    return contents;
};
const deserializeAws_json1_1InputConfig = (output, context) => {
    let contents = {
        __type: "InputConfig",
        DataInputConfig: undefined,
        Framework: undefined,
        S3Uri: undefined
    };
    if (output.DataInputConfig !== undefined && output.DataInputConfig !== null) {
        contents.DataInputConfig = output.DataInputConfig;
    }
    if (output.Framework !== undefined && output.Framework !== null) {
        contents.Framework = output.Framework;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1InputDataConfig = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Channel(entry, context));
};
const deserializeAws_json1_1InputModes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1IntegerParameterRange = (output, context) => {
    let contents = {
        __type: "IntegerParameterRange",
        MaxValue: undefined,
        MinValue: undefined,
        Name: undefined,
        ScalingType: undefined
    };
    if (output.MaxValue !== undefined && output.MaxValue !== null) {
        contents.MaxValue = output.MaxValue;
    }
    if (output.MinValue !== undefined && output.MinValue !== null) {
        contents.MinValue = output.MinValue;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ScalingType !== undefined && output.ScalingType !== null) {
        contents.ScalingType = output.ScalingType;
    }
    return contents;
};
const deserializeAws_json1_1IntegerParameterRangeSpecification = (output, context) => {
    let contents = {
        __type: "IntegerParameterRangeSpecification",
        MaxValue: undefined,
        MinValue: undefined
    };
    if (output.MaxValue !== undefined && output.MaxValue !== null) {
        contents.MaxValue = output.MaxValue;
    }
    if (output.MinValue !== undefined && output.MinValue !== null) {
        contents.MinValue = output.MinValue;
    }
    return contents;
};
const deserializeAws_json1_1IntegerParameterRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IntegerParameterRange(entry, context));
};
const deserializeAws_json1_1JsonContentTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1JupyterServerAppSettings = (output, context) => {
    let contents = {
        __type: "JupyterServerAppSettings",
        DefaultResourceSpec: undefined
    };
    if (output.DefaultResourceSpec !== undefined &&
        output.DefaultResourceSpec !== null) {
        contents.DefaultResourceSpec = deserializeAws_json1_1ResourceSpec(output.DefaultResourceSpec, context);
    }
    return contents;
};
const deserializeAws_json1_1KernelGatewayAppSettings = (output, context) => {
    let contents = {
        __type: "KernelGatewayAppSettings",
        DefaultResourceSpec: undefined
    };
    if (output.DefaultResourceSpec !== undefined &&
        output.DefaultResourceSpec !== null) {
        contents.DefaultResourceSpec = deserializeAws_json1_1ResourceSpec(output.DefaultResourceSpec, context);
    }
    return contents;
};
const deserializeAws_json1_1LabelCounters = (output, context) => {
    let contents = {
        __type: "LabelCounters",
        FailedNonRetryableError: undefined,
        HumanLabeled: undefined,
        MachineLabeled: undefined,
        TotalLabeled: undefined,
        Unlabeled: undefined
    };
    if (output.FailedNonRetryableError !== undefined &&
        output.FailedNonRetryableError !== null) {
        contents.FailedNonRetryableError = output.FailedNonRetryableError;
    }
    if (output.HumanLabeled !== undefined && output.HumanLabeled !== null) {
        contents.HumanLabeled = output.HumanLabeled;
    }
    if (output.MachineLabeled !== undefined && output.MachineLabeled !== null) {
        contents.MachineLabeled = output.MachineLabeled;
    }
    if (output.TotalLabeled !== undefined && output.TotalLabeled !== null) {
        contents.TotalLabeled = output.TotalLabeled;
    }
    if (output.Unlabeled !== undefined && output.Unlabeled !== null) {
        contents.Unlabeled = output.Unlabeled;
    }
    return contents;
};
const deserializeAws_json1_1LabelCountersForWorkteam = (output, context) => {
    let contents = {
        __type: "LabelCountersForWorkteam",
        HumanLabeled: undefined,
        PendingHuman: undefined,
        Total: undefined
    };
    if (output.HumanLabeled !== undefined && output.HumanLabeled !== null) {
        contents.HumanLabeled = output.HumanLabeled;
    }
    if (output.PendingHuman !== undefined && output.PendingHuman !== null) {
        contents.PendingHuman = output.PendingHuman;
    }
    if (output.Total !== undefined && output.Total !== null) {
        contents.Total = output.Total;
    }
    return contents;
};
const deserializeAws_json1_1LabelingJobAlgorithmsConfig = (output, context) => {
    let contents = {
        __type: "LabelingJobAlgorithmsConfig",
        InitialActiveLearningModelArn: undefined,
        LabelingJobAlgorithmSpecificationArn: undefined,
        LabelingJobResourceConfig: undefined
    };
    if (output.InitialActiveLearningModelArn !== undefined &&
        output.InitialActiveLearningModelArn !== null) {
        contents.InitialActiveLearningModelArn =
            output.InitialActiveLearningModelArn;
    }
    if (output.LabelingJobAlgorithmSpecificationArn !== undefined &&
        output.LabelingJobAlgorithmSpecificationArn !== null) {
        contents.LabelingJobAlgorithmSpecificationArn =
            output.LabelingJobAlgorithmSpecificationArn;
    }
    if (output.LabelingJobResourceConfig !== undefined &&
        output.LabelingJobResourceConfig !== null) {
        contents.LabelingJobResourceConfig = deserializeAws_json1_1LabelingJobResourceConfig(output.LabelingJobResourceConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1LabelingJobDataAttributes = (output, context) => {
    let contents = {
        __type: "LabelingJobDataAttributes",
        ContentClassifiers: undefined
    };
    if (output.ContentClassifiers !== undefined &&
        output.ContentClassifiers !== null) {
        contents.ContentClassifiers = deserializeAws_json1_1ContentClassifiers(output.ContentClassifiers, context);
    }
    return contents;
};
const deserializeAws_json1_1LabelingJobDataSource = (output, context) => {
    let contents = {
        __type: "LabelingJobDataSource",
        S3DataSource: undefined
    };
    if (output.S3DataSource !== undefined && output.S3DataSource !== null) {
        contents.S3DataSource = deserializeAws_json1_1LabelingJobS3DataSource(output.S3DataSource, context);
    }
    return contents;
};
const deserializeAws_json1_1LabelingJobForWorkteamSummary = (output, context) => {
    let contents = {
        __type: "LabelingJobForWorkteamSummary",
        CreationTime: undefined,
        JobReferenceCode: undefined,
        LabelCounters: undefined,
        LabelingJobName: undefined,
        NumberOfHumanWorkersPerDataObject: undefined,
        WorkRequesterAccountId: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.JobReferenceCode !== undefined &&
        output.JobReferenceCode !== null) {
        contents.JobReferenceCode = output.JobReferenceCode;
    }
    if (output.LabelCounters !== undefined && output.LabelCounters !== null) {
        contents.LabelCounters = deserializeAws_json1_1LabelCountersForWorkteam(output.LabelCounters, context);
    }
    if (output.LabelingJobName !== undefined && output.LabelingJobName !== null) {
        contents.LabelingJobName = output.LabelingJobName;
    }
    if (output.NumberOfHumanWorkersPerDataObject !== undefined &&
        output.NumberOfHumanWorkersPerDataObject !== null) {
        contents.NumberOfHumanWorkersPerDataObject =
            output.NumberOfHumanWorkersPerDataObject;
    }
    if (output.WorkRequesterAccountId !== undefined &&
        output.WorkRequesterAccountId !== null) {
        contents.WorkRequesterAccountId = output.WorkRequesterAccountId;
    }
    return contents;
};
const deserializeAws_json1_1LabelingJobForWorkteamSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LabelingJobForWorkteamSummary(entry, context));
};
const deserializeAws_json1_1LabelingJobInputConfig = (output, context) => {
    let contents = {
        __type: "LabelingJobInputConfig",
        DataAttributes: undefined,
        DataSource: undefined
    };
    if (output.DataAttributes !== undefined && output.DataAttributes !== null) {
        contents.DataAttributes = deserializeAws_json1_1LabelingJobDataAttributes(output.DataAttributes, context);
    }
    if (output.DataSource !== undefined && output.DataSource !== null) {
        contents.DataSource = deserializeAws_json1_1LabelingJobDataSource(output.DataSource, context);
    }
    return contents;
};
const deserializeAws_json1_1LabelingJobOutput = (output, context) => {
    let contents = {
        __type: "LabelingJobOutput",
        FinalActiveLearningModelArn: undefined,
        OutputDatasetS3Uri: undefined
    };
    if (output.FinalActiveLearningModelArn !== undefined &&
        output.FinalActiveLearningModelArn !== null) {
        contents.FinalActiveLearningModelArn = output.FinalActiveLearningModelArn;
    }
    if (output.OutputDatasetS3Uri !== undefined &&
        output.OutputDatasetS3Uri !== null) {
        contents.OutputDatasetS3Uri = output.OutputDatasetS3Uri;
    }
    return contents;
};
const deserializeAws_json1_1LabelingJobOutputConfig = (output, context) => {
    let contents = {
        __type: "LabelingJobOutputConfig",
        KmsKeyId: undefined,
        S3OutputPath: undefined
    };
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.S3OutputPath !== undefined && output.S3OutputPath !== null) {
        contents.S3OutputPath = output.S3OutputPath;
    }
    return contents;
};
const deserializeAws_json1_1LabelingJobResourceConfig = (output, context) => {
    let contents = {
        __type: "LabelingJobResourceConfig",
        VolumeKmsKeyId: undefined
    };
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    return contents;
};
const deserializeAws_json1_1LabelingJobS3DataSource = (output, context) => {
    let contents = {
        __type: "LabelingJobS3DataSource",
        ManifestS3Uri: undefined
    };
    if (output.ManifestS3Uri !== undefined && output.ManifestS3Uri !== null) {
        contents.ManifestS3Uri = output.ManifestS3Uri;
    }
    return contents;
};
const deserializeAws_json1_1LabelingJobStoppingConditions = (output, context) => {
    let contents = {
        __type: "LabelingJobStoppingConditions",
        MaxHumanLabeledObjectCount: undefined,
        MaxPercentageOfInputDatasetLabeled: undefined
    };
    if (output.MaxHumanLabeledObjectCount !== undefined &&
        output.MaxHumanLabeledObjectCount !== null) {
        contents.MaxHumanLabeledObjectCount = output.MaxHumanLabeledObjectCount;
    }
    if (output.MaxPercentageOfInputDatasetLabeled !== undefined &&
        output.MaxPercentageOfInputDatasetLabeled !== null) {
        contents.MaxPercentageOfInputDatasetLabeled =
            output.MaxPercentageOfInputDatasetLabeled;
    }
    return contents;
};
const deserializeAws_json1_1LabelingJobSummary = (output, context) => {
    let contents = {
        __type: "LabelingJobSummary",
        AnnotationConsolidationLambdaArn: undefined,
        CreationTime: undefined,
        FailureReason: undefined,
        InputConfig: undefined,
        LabelCounters: undefined,
        LabelingJobArn: undefined,
        LabelingJobName: undefined,
        LabelingJobOutput: undefined,
        LabelingJobStatus: undefined,
        LastModifiedTime: undefined,
        PreHumanTaskLambdaArn: undefined,
        WorkteamArn: undefined
    };
    if (output.AnnotationConsolidationLambdaArn !== undefined &&
        output.AnnotationConsolidationLambdaArn !== null) {
        contents.AnnotationConsolidationLambdaArn =
            output.AnnotationConsolidationLambdaArn;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.InputConfig !== undefined && output.InputConfig !== null) {
        contents.InputConfig = deserializeAws_json1_1LabelingJobInputConfig(output.InputConfig, context);
    }
    if (output.LabelCounters !== undefined && output.LabelCounters !== null) {
        contents.LabelCounters = deserializeAws_json1_1LabelCounters(output.LabelCounters, context);
    }
    if (output.LabelingJobArn !== undefined && output.LabelingJobArn !== null) {
        contents.LabelingJobArn = output.LabelingJobArn;
    }
    if (output.LabelingJobName !== undefined && output.LabelingJobName !== null) {
        contents.LabelingJobName = output.LabelingJobName;
    }
    if (output.LabelingJobOutput !== undefined &&
        output.LabelingJobOutput !== null) {
        contents.LabelingJobOutput = deserializeAws_json1_1LabelingJobOutput(output.LabelingJobOutput, context);
    }
    if (output.LabelingJobStatus !== undefined &&
        output.LabelingJobStatus !== null) {
        contents.LabelingJobStatus = output.LabelingJobStatus;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.PreHumanTaskLambdaArn !== undefined &&
        output.PreHumanTaskLambdaArn !== null) {
        contents.PreHumanTaskLambdaArn = output.PreHumanTaskLambdaArn;
    }
    if (output.WorkteamArn !== undefined && output.WorkteamArn !== null) {
        contents.WorkteamArn = output.WorkteamArn;
    }
    return contents;
};
const deserializeAws_json1_1LabelingJobSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LabelingJobSummary(entry, context));
};
const deserializeAws_json1_1ListAlgorithmsOutput = (output, context) => {
    let contents = {
        __type: "ListAlgorithmsOutput",
        AlgorithmSummaryList: undefined,
        NextToken: undefined
    };
    if (output.AlgorithmSummaryList !== undefined &&
        output.AlgorithmSummaryList !== null) {
        contents.AlgorithmSummaryList = deserializeAws_json1_1AlgorithmSummaryList(output.AlgorithmSummaryList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListAppsResponse = (output, context) => {
    let contents = {
        __type: "ListAppsResponse",
        Apps: undefined,
        NextToken: undefined
    };
    if (output.Apps !== undefined && output.Apps !== null) {
        contents.Apps = deserializeAws_json1_1AppList(output.Apps, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListAutoMLJobsResponse = (output, context) => {
    let contents = {
        __type: "ListAutoMLJobsResponse",
        AutoMLJobSummaries: undefined,
        NextToken: undefined
    };
    if (output.AutoMLJobSummaries !== undefined &&
        output.AutoMLJobSummaries !== null) {
        contents.AutoMLJobSummaries = deserializeAws_json1_1AutoMLJobSummaries(output.AutoMLJobSummaries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListCandidatesForAutoMLJobResponse = (output, context) => {
    let contents = {
        __type: "ListCandidatesForAutoMLJobResponse",
        Candidates: undefined,
        NextToken: undefined
    };
    if (output.Candidates !== undefined && output.Candidates !== null) {
        contents.Candidates = deserializeAws_json1_1AutoMLCandidates(output.Candidates, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListCodeRepositoriesOutput = (output, context) => {
    let contents = {
        __type: "ListCodeRepositoriesOutput",
        CodeRepositorySummaryList: undefined,
        NextToken: undefined
    };
    if (output.CodeRepositorySummaryList !== undefined &&
        output.CodeRepositorySummaryList !== null) {
        contents.CodeRepositorySummaryList = deserializeAws_json1_1CodeRepositorySummaryList(output.CodeRepositorySummaryList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListCompilationJobsResponse = (output, context) => {
    let contents = {
        __type: "ListCompilationJobsResponse",
        CompilationJobSummaries: undefined,
        NextToken: undefined
    };
    if (output.CompilationJobSummaries !== undefined &&
        output.CompilationJobSummaries !== null) {
        contents.CompilationJobSummaries = deserializeAws_json1_1CompilationJobSummaries(output.CompilationJobSummaries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDomainsResponse = (output, context) => {
    let contents = {
        __type: "ListDomainsResponse",
        Domains: undefined,
        NextToken: undefined
    };
    if (output.Domains !== undefined && output.Domains !== null) {
        contents.Domains = deserializeAws_json1_1DomainList(output.Domains, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListEndpointConfigsOutput = (output, context) => {
    let contents = {
        __type: "ListEndpointConfigsOutput",
        EndpointConfigs: undefined,
        NextToken: undefined
    };
    if (output.EndpointConfigs !== undefined && output.EndpointConfigs !== null) {
        contents.EndpointConfigs = deserializeAws_json1_1EndpointConfigSummaryList(output.EndpointConfigs, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListEndpointsOutput = (output, context) => {
    let contents = {
        __type: "ListEndpointsOutput",
        Endpoints: undefined,
        NextToken: undefined
    };
    if (output.Endpoints !== undefined && output.Endpoints !== null) {
        contents.Endpoints = deserializeAws_json1_1EndpointSummaryList(output.Endpoints, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListExperimentsResponse = (output, context) => {
    let contents = {
        __type: "ListExperimentsResponse",
        ExperimentSummaries: undefined,
        NextToken: undefined
    };
    if (output.ExperimentSummaries !== undefined &&
        output.ExperimentSummaries !== null) {
        contents.ExperimentSummaries = deserializeAws_json1_1ExperimentSummaries(output.ExperimentSummaries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListFlowDefinitionsResponse = (output, context) => {
    let contents = {
        __type: "ListFlowDefinitionsResponse",
        FlowDefinitionSummaries: undefined,
        NextToken: undefined
    };
    if (output.FlowDefinitionSummaries !== undefined &&
        output.FlowDefinitionSummaries !== null) {
        contents.FlowDefinitionSummaries = deserializeAws_json1_1FlowDefinitionSummaries(output.FlowDefinitionSummaries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListHumanTaskUisResponse = (output, context) => {
    let contents = {
        __type: "ListHumanTaskUisResponse",
        HumanTaskUiSummaries: undefined,
        NextToken: undefined
    };
    if (output.HumanTaskUiSummaries !== undefined &&
        output.HumanTaskUiSummaries !== null) {
        contents.HumanTaskUiSummaries = deserializeAws_json1_1HumanTaskUiSummaries(output.HumanTaskUiSummaries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListHyperParameterTuningJobsResponse = (output, context) => {
    let contents = {
        __type: "ListHyperParameterTuningJobsResponse",
        HyperParameterTuningJobSummaries: undefined,
        NextToken: undefined
    };
    if (output.HyperParameterTuningJobSummaries !== undefined &&
        output.HyperParameterTuningJobSummaries !== null) {
        contents.HyperParameterTuningJobSummaries = deserializeAws_json1_1HyperParameterTuningJobSummaries(output.HyperParameterTuningJobSummaries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListLabelingJobsForWorkteamResponse = (output, context) => {
    let contents = {
        __type: "ListLabelingJobsForWorkteamResponse",
        LabelingJobSummaryList: undefined,
        NextToken: undefined
    };
    if (output.LabelingJobSummaryList !== undefined &&
        output.LabelingJobSummaryList !== null) {
        contents.LabelingJobSummaryList = deserializeAws_json1_1LabelingJobForWorkteamSummaryList(output.LabelingJobSummaryList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListLabelingJobsResponse = (output, context) => {
    let contents = {
        __type: "ListLabelingJobsResponse",
        LabelingJobSummaryList: undefined,
        NextToken: undefined
    };
    if (output.LabelingJobSummaryList !== undefined &&
        output.LabelingJobSummaryList !== null) {
        contents.LabelingJobSummaryList = deserializeAws_json1_1LabelingJobSummaryList(output.LabelingJobSummaryList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListModelPackagesOutput = (output, context) => {
    let contents = {
        __type: "ListModelPackagesOutput",
        ModelPackageSummaryList: undefined,
        NextToken: undefined
    };
    if (output.ModelPackageSummaryList !== undefined &&
        output.ModelPackageSummaryList !== null) {
        contents.ModelPackageSummaryList = deserializeAws_json1_1ModelPackageSummaryList(output.ModelPackageSummaryList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListModelsOutput = (output, context) => {
    let contents = {
        __type: "ListModelsOutput",
        Models: undefined,
        NextToken: undefined
    };
    if (output.Models !== undefined && output.Models !== null) {
        contents.Models = deserializeAws_json1_1ModelSummaryList(output.Models, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListMonitoringExecutionsResponse = (output, context) => {
    let contents = {
        __type: "ListMonitoringExecutionsResponse",
        MonitoringExecutionSummaries: undefined,
        NextToken: undefined
    };
    if (output.MonitoringExecutionSummaries !== undefined &&
        output.MonitoringExecutionSummaries !== null) {
        contents.MonitoringExecutionSummaries = deserializeAws_json1_1MonitoringExecutionSummaryList(output.MonitoringExecutionSummaries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListMonitoringSchedulesResponse = (output, context) => {
    let contents = {
        __type: "ListMonitoringSchedulesResponse",
        MonitoringScheduleSummaries: undefined,
        NextToken: undefined
    };
    if (output.MonitoringScheduleSummaries !== undefined &&
        output.MonitoringScheduleSummaries !== null) {
        contents.MonitoringScheduleSummaries = deserializeAws_json1_1MonitoringScheduleSummaryList(output.MonitoringScheduleSummaries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsOutput = (output, context) => {
    let contents = {
        __type: "ListNotebookInstanceLifecycleConfigsOutput",
        NextToken: undefined,
        NotebookInstanceLifecycleConfigs: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.NotebookInstanceLifecycleConfigs !== undefined &&
        output.NotebookInstanceLifecycleConfigs !== null) {
        contents.NotebookInstanceLifecycleConfigs = deserializeAws_json1_1NotebookInstanceLifecycleConfigSummaryList(output.NotebookInstanceLifecycleConfigs, context);
    }
    return contents;
};
const deserializeAws_json1_1ListNotebookInstancesOutput = (output, context) => {
    let contents = {
        __type: "ListNotebookInstancesOutput",
        NextToken: undefined,
        NotebookInstances: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.NotebookInstances !== undefined &&
        output.NotebookInstances !== null) {
        contents.NotebookInstances = deserializeAws_json1_1NotebookInstanceSummaryList(output.NotebookInstances, context);
    }
    return contents;
};
const deserializeAws_json1_1ListProcessingJobsResponse = (output, context) => {
    let contents = {
        __type: "ListProcessingJobsResponse",
        NextToken: undefined,
        ProcessingJobSummaries: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ProcessingJobSummaries !== undefined &&
        output.ProcessingJobSummaries !== null) {
        contents.ProcessingJobSummaries = deserializeAws_json1_1ProcessingJobSummaries(output.ProcessingJobSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSubscribedWorkteamsResponse = (output, context) => {
    let contents = {
        __type: "ListSubscribedWorkteamsResponse",
        NextToken: undefined,
        SubscribedWorkteams: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SubscribedWorkteams !== undefined &&
        output.SubscribedWorkteams !== null) {
        contents.SubscribedWorkteams = deserializeAws_json1_1SubscribedWorkteams(output.SubscribedWorkteams, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsOutput = (output, context) => {
    let contents = {
        __type: "ListTagsOutput",
        NextToken: undefined,
        Tags: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobResponse = (output, context) => {
    let contents = {
        __type: "ListTrainingJobsForHyperParameterTuningJobResponse",
        NextToken: undefined,
        TrainingJobSummaries: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TrainingJobSummaries !== undefined &&
        output.TrainingJobSummaries !== null) {
        contents.TrainingJobSummaries = deserializeAws_json1_1HyperParameterTrainingJobSummaries(output.TrainingJobSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTrainingJobsResponse = (output, context) => {
    let contents = {
        __type: "ListTrainingJobsResponse",
        NextToken: undefined,
        TrainingJobSummaries: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TrainingJobSummaries !== undefined &&
        output.TrainingJobSummaries !== null) {
        contents.TrainingJobSummaries = deserializeAws_json1_1TrainingJobSummaries(output.TrainingJobSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTransformJobsResponse = (output, context) => {
    let contents = {
        __type: "ListTransformJobsResponse",
        NextToken: undefined,
        TransformJobSummaries: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TransformJobSummaries !== undefined &&
        output.TransformJobSummaries !== null) {
        contents.TransformJobSummaries = deserializeAws_json1_1TransformJobSummaries(output.TransformJobSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTrialComponentsResponse = (output, context) => {
    let contents = {
        __type: "ListTrialComponentsResponse",
        NextToken: undefined,
        TrialComponentSummaries: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TrialComponentSummaries !== undefined &&
        output.TrialComponentSummaries !== null) {
        contents.TrialComponentSummaries = deserializeAws_json1_1TrialComponentSummaries(output.TrialComponentSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTrialsResponse = (output, context) => {
    let contents = {
        __type: "ListTrialsResponse",
        NextToken: undefined,
        TrialSummaries: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TrialSummaries !== undefined && output.TrialSummaries !== null) {
        contents.TrialSummaries = deserializeAws_json1_1TrialSummaries(output.TrialSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListUserProfilesResponse = (output, context) => {
    let contents = {
        __type: "ListUserProfilesResponse",
        NextToken: undefined,
        UserProfiles: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.UserProfiles !== undefined && output.UserProfiles !== null) {
        contents.UserProfiles = deserializeAws_json1_1UserProfileList(output.UserProfiles, context);
    }
    return contents;
};
const deserializeAws_json1_1ListWorkteamsResponse = (output, context) => {
    let contents = {
        __type: "ListWorkteamsResponse",
        NextToken: undefined,
        Workteams: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Workteams !== undefined && output.Workteams !== null) {
        contents.Workteams = deserializeAws_json1_1Workteams(output.Workteams, context);
    }
    return contents;
};
const deserializeAws_json1_1MemberDefinition = (output, context) => {
    let contents = {
        __type: "MemberDefinition",
        CognitoMemberDefinition: undefined
    };
    if (output.CognitoMemberDefinition !== undefined &&
        output.CognitoMemberDefinition !== null) {
        contents.CognitoMemberDefinition = deserializeAws_json1_1CognitoMemberDefinition(output.CognitoMemberDefinition, context);
    }
    return contents;
};
const deserializeAws_json1_1MemberDefinitions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MemberDefinition(entry, context));
};
const deserializeAws_json1_1MetricData = (output, context) => {
    let contents = {
        __type: "MetricData",
        MetricName: undefined,
        Timestamp: undefined,
        Value: undefined
    };
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Timestamp !== undefined && output.Timestamp !== null) {
        contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1MetricDefinition = (output, context) => {
    let contents = {
        __type: "MetricDefinition",
        Name: undefined,
        Regex: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Regex !== undefined && output.Regex !== null) {
        contents.Regex = output.Regex;
    }
    return contents;
};
const deserializeAws_json1_1MetricDefinitionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MetricDefinition(entry, context));
};
const deserializeAws_json1_1ModelArtifacts = (output, context) => {
    let contents = {
        __type: "ModelArtifacts",
        S3ModelArtifacts: undefined
    };
    if (output.S3ModelArtifacts !== undefined &&
        output.S3ModelArtifacts !== null) {
        contents.S3ModelArtifacts = output.S3ModelArtifacts;
    }
    return contents;
};
const deserializeAws_json1_1ModelPackageContainerDefinition = (output, context) => {
    let contents = {
        __type: "ModelPackageContainerDefinition",
        ContainerHostname: undefined,
        Image: undefined,
        ImageDigest: undefined,
        ModelDataUrl: undefined,
        ProductId: undefined
    };
    if (output.ContainerHostname !== undefined &&
        output.ContainerHostname !== null) {
        contents.ContainerHostname = output.ContainerHostname;
    }
    if (output.Image !== undefined && output.Image !== null) {
        contents.Image = output.Image;
    }
    if (output.ImageDigest !== undefined && output.ImageDigest !== null) {
        contents.ImageDigest = output.ImageDigest;
    }
    if (output.ModelDataUrl !== undefined && output.ModelDataUrl !== null) {
        contents.ModelDataUrl = output.ModelDataUrl;
    }
    if (output.ProductId !== undefined && output.ProductId !== null) {
        contents.ProductId = output.ProductId;
    }
    return contents;
};
const deserializeAws_json1_1ModelPackageContainerDefinitionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ModelPackageContainerDefinition(entry, context));
};
const deserializeAws_json1_1ModelPackageStatusDetails = (output, context) => {
    let contents = {
        __type: "ModelPackageStatusDetails",
        ImageScanStatuses: undefined,
        ValidationStatuses: undefined
    };
    if (output.ImageScanStatuses !== undefined &&
        output.ImageScanStatuses !== null) {
        contents.ImageScanStatuses = deserializeAws_json1_1ModelPackageStatusItemList(output.ImageScanStatuses, context);
    }
    if (output.ValidationStatuses !== undefined &&
        output.ValidationStatuses !== null) {
        contents.ValidationStatuses = deserializeAws_json1_1ModelPackageStatusItemList(output.ValidationStatuses, context);
    }
    return contents;
};
const deserializeAws_json1_1ModelPackageStatusItem = (output, context) => {
    let contents = {
        __type: "ModelPackageStatusItem",
        FailureReason: undefined,
        Name: undefined,
        Status: undefined
    };
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1ModelPackageStatusItemList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ModelPackageStatusItem(entry, context));
};
const deserializeAws_json1_1ModelPackageSummary = (output, context) => {
    let contents = {
        __type: "ModelPackageSummary",
        CreationTime: undefined,
        ModelPackageArn: undefined,
        ModelPackageDescription: undefined,
        ModelPackageName: undefined,
        ModelPackageStatus: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.ModelPackageArn !== undefined && output.ModelPackageArn !== null) {
        contents.ModelPackageArn = output.ModelPackageArn;
    }
    if (output.ModelPackageDescription !== undefined &&
        output.ModelPackageDescription !== null) {
        contents.ModelPackageDescription = output.ModelPackageDescription;
    }
    if (output.ModelPackageName !== undefined &&
        output.ModelPackageName !== null) {
        contents.ModelPackageName = output.ModelPackageName;
    }
    if (output.ModelPackageStatus !== undefined &&
        output.ModelPackageStatus !== null) {
        contents.ModelPackageStatus = output.ModelPackageStatus;
    }
    return contents;
};
const deserializeAws_json1_1ModelPackageSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ModelPackageSummary(entry, context));
};
const deserializeAws_json1_1ModelPackageValidationProfile = (output, context) => {
    let contents = {
        __type: "ModelPackageValidationProfile",
        ProfileName: undefined,
        TransformJobDefinition: undefined
    };
    if (output.ProfileName !== undefined && output.ProfileName !== null) {
        contents.ProfileName = output.ProfileName;
    }
    if (output.TransformJobDefinition !== undefined &&
        output.TransformJobDefinition !== null) {
        contents.TransformJobDefinition = deserializeAws_json1_1TransformJobDefinition(output.TransformJobDefinition, context);
    }
    return contents;
};
const deserializeAws_json1_1ModelPackageValidationProfiles = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ModelPackageValidationProfile(entry, context));
};
const deserializeAws_json1_1ModelPackageValidationSpecification = (output, context) => {
    let contents = {
        __type: "ModelPackageValidationSpecification",
        ValidationProfiles: undefined,
        ValidationRole: undefined
    };
    if (output.ValidationProfiles !== undefined &&
        output.ValidationProfiles !== null) {
        contents.ValidationProfiles = deserializeAws_json1_1ModelPackageValidationProfiles(output.ValidationProfiles, context);
    }
    if (output.ValidationRole !== undefined && output.ValidationRole !== null) {
        contents.ValidationRole = output.ValidationRole;
    }
    return contents;
};
const deserializeAws_json1_1ModelSummary = (output, context) => {
    let contents = {
        __type: "ModelSummary",
        CreationTime: undefined,
        ModelArn: undefined,
        ModelName: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.ModelArn !== undefined && output.ModelArn !== null) {
        contents.ModelArn = output.ModelArn;
    }
    if (output.ModelName !== undefined && output.ModelName !== null) {
        contents.ModelName = output.ModelName;
    }
    return contents;
};
const deserializeAws_json1_1ModelSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ModelSummary(entry, context));
};
const deserializeAws_json1_1MonitoringAppSpecification = (output, context) => {
    let contents = {
        __type: "MonitoringAppSpecification",
        ContainerArguments: undefined,
        ContainerEntrypoint: undefined,
        ImageUri: undefined,
        PostAnalyticsProcessorSourceUri: undefined,
        RecordPreprocessorSourceUri: undefined
    };
    if (output.ContainerArguments !== undefined &&
        output.ContainerArguments !== null) {
        contents.ContainerArguments = deserializeAws_json1_1MonitoringContainerArguments(output.ContainerArguments, context);
    }
    if (output.ContainerEntrypoint !== undefined &&
        output.ContainerEntrypoint !== null) {
        contents.ContainerEntrypoint = deserializeAws_json1_1ContainerEntrypoint(output.ContainerEntrypoint, context);
    }
    if (output.ImageUri !== undefined && output.ImageUri !== null) {
        contents.ImageUri = output.ImageUri;
    }
    if (output.PostAnalyticsProcessorSourceUri !== undefined &&
        output.PostAnalyticsProcessorSourceUri !== null) {
        contents.PostAnalyticsProcessorSourceUri =
            output.PostAnalyticsProcessorSourceUri;
    }
    if (output.RecordPreprocessorSourceUri !== undefined &&
        output.RecordPreprocessorSourceUri !== null) {
        contents.RecordPreprocessorSourceUri = output.RecordPreprocessorSourceUri;
    }
    return contents;
};
const deserializeAws_json1_1MonitoringBaselineConfig = (output, context) => {
    let contents = {
        __type: "MonitoringBaselineConfig",
        ConstraintsResource: undefined,
        StatisticsResource: undefined
    };
    if (output.ConstraintsResource !== undefined &&
        output.ConstraintsResource !== null) {
        contents.ConstraintsResource = deserializeAws_json1_1MonitoringConstraintsResource(output.ConstraintsResource, context);
    }
    if (output.StatisticsResource !== undefined &&
        output.StatisticsResource !== null) {
        contents.StatisticsResource = deserializeAws_json1_1MonitoringStatisticsResource(output.StatisticsResource, context);
    }
    return contents;
};
const deserializeAws_json1_1MonitoringClusterConfig = (output, context) => {
    let contents = {
        __type: "MonitoringClusterConfig",
        InstanceCount: undefined,
        InstanceType: undefined,
        VolumeKmsKeyId: undefined,
        VolumeSizeInGB: undefined
    };
    if (output.InstanceCount !== undefined && output.InstanceCount !== null) {
        contents.InstanceCount = output.InstanceCount;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    if (output.VolumeSizeInGB !== undefined && output.VolumeSizeInGB !== null) {
        contents.VolumeSizeInGB = output.VolumeSizeInGB;
    }
    return contents;
};
const deserializeAws_json1_1MonitoringConstraintsResource = (output, context) => {
    let contents = {
        __type: "MonitoringConstraintsResource",
        S3Uri: undefined
    };
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1MonitoringContainerArguments = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1MonitoringEnvironmentMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1MonitoringExecutionSummary = (output, context) => {
    let contents = {
        __type: "MonitoringExecutionSummary",
        CreationTime: undefined,
        EndpointName: undefined,
        FailureReason: undefined,
        LastModifiedTime: undefined,
        MonitoringExecutionStatus: undefined,
        MonitoringScheduleName: undefined,
        ProcessingJobArn: undefined,
        ScheduledTime: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.EndpointName !== undefined && output.EndpointName !== null) {
        contents.EndpointName = output.EndpointName;
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.MonitoringExecutionStatus !== undefined &&
        output.MonitoringExecutionStatus !== null) {
        contents.MonitoringExecutionStatus = output.MonitoringExecutionStatus;
    }
    if (output.MonitoringScheduleName !== undefined &&
        output.MonitoringScheduleName !== null) {
        contents.MonitoringScheduleName = output.MonitoringScheduleName;
    }
    if (output.ProcessingJobArn !== undefined &&
        output.ProcessingJobArn !== null) {
        contents.ProcessingJobArn = output.ProcessingJobArn;
    }
    if (output.ScheduledTime !== undefined && output.ScheduledTime !== null) {
        contents.ScheduledTime = new Date(Math.round(output.ScheduledTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1MonitoringExecutionSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MonitoringExecutionSummary(entry, context));
};
const deserializeAws_json1_1MonitoringInput = (output, context) => {
    let contents = {
        __type: "MonitoringInput",
        EndpointInput: undefined
    };
    if (output.EndpointInput !== undefined && output.EndpointInput !== null) {
        contents.EndpointInput = deserializeAws_json1_1EndpointInput(output.EndpointInput, context);
    }
    return contents;
};
const deserializeAws_json1_1MonitoringInputs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MonitoringInput(entry, context));
};
const deserializeAws_json1_1MonitoringJobDefinition = (output, context) => {
    let contents = {
        __type: "MonitoringJobDefinition",
        BaselineConfig: undefined,
        Environment: undefined,
        MonitoringAppSpecification: undefined,
        MonitoringInputs: undefined,
        MonitoringOutputConfig: undefined,
        MonitoringResources: undefined,
        NetworkConfig: undefined,
        RoleArn: undefined,
        StoppingCondition: undefined
    };
    if (output.BaselineConfig !== undefined && output.BaselineConfig !== null) {
        contents.BaselineConfig = deserializeAws_json1_1MonitoringBaselineConfig(output.BaselineConfig, context);
    }
    if (output.Environment !== undefined && output.Environment !== null) {
        contents.Environment = deserializeAws_json1_1MonitoringEnvironmentMap(output.Environment, context);
    }
    if (output.MonitoringAppSpecification !== undefined &&
        output.MonitoringAppSpecification !== null) {
        contents.MonitoringAppSpecification = deserializeAws_json1_1MonitoringAppSpecification(output.MonitoringAppSpecification, context);
    }
    if (output.MonitoringInputs !== undefined &&
        output.MonitoringInputs !== null) {
        contents.MonitoringInputs = deserializeAws_json1_1MonitoringInputs(output.MonitoringInputs, context);
    }
    if (output.MonitoringOutputConfig !== undefined &&
        output.MonitoringOutputConfig !== null) {
        contents.MonitoringOutputConfig = deserializeAws_json1_1MonitoringOutputConfig(output.MonitoringOutputConfig, context);
    }
    if (output.MonitoringResources !== undefined &&
        output.MonitoringResources !== null) {
        contents.MonitoringResources = deserializeAws_json1_1MonitoringResources(output.MonitoringResources, context);
    }
    if (output.NetworkConfig !== undefined && output.NetworkConfig !== null) {
        contents.NetworkConfig = deserializeAws_json1_1NetworkConfig(output.NetworkConfig, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.StoppingCondition !== undefined &&
        output.StoppingCondition !== null) {
        contents.StoppingCondition = deserializeAws_json1_1MonitoringStoppingCondition(output.StoppingCondition, context);
    }
    return contents;
};
const deserializeAws_json1_1MonitoringOutput = (output, context) => {
    let contents = {
        __type: "MonitoringOutput",
        S3Output: undefined
    };
    if (output.S3Output !== undefined && output.S3Output !== null) {
        contents.S3Output = deserializeAws_json1_1MonitoringS3Output(output.S3Output, context);
    }
    return contents;
};
const deserializeAws_json1_1MonitoringOutputConfig = (output, context) => {
    let contents = {
        __type: "MonitoringOutputConfig",
        KmsKeyId: undefined,
        MonitoringOutputs: undefined
    };
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.MonitoringOutputs !== undefined &&
        output.MonitoringOutputs !== null) {
        contents.MonitoringOutputs = deserializeAws_json1_1MonitoringOutputs(output.MonitoringOutputs, context);
    }
    return contents;
};
const deserializeAws_json1_1MonitoringOutputs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MonitoringOutput(entry, context));
};
const deserializeAws_json1_1MonitoringResources = (output, context) => {
    let contents = {
        __type: "MonitoringResources",
        ClusterConfig: undefined
    };
    if (output.ClusterConfig !== undefined && output.ClusterConfig !== null) {
        contents.ClusterConfig = deserializeAws_json1_1MonitoringClusterConfig(output.ClusterConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1MonitoringS3Output = (output, context) => {
    let contents = {
        __type: "MonitoringS3Output",
        LocalPath: undefined,
        S3UploadMode: undefined,
        S3Uri: undefined
    };
    if (output.LocalPath !== undefined && output.LocalPath !== null) {
        contents.LocalPath = output.LocalPath;
    }
    if (output.S3UploadMode !== undefined && output.S3UploadMode !== null) {
        contents.S3UploadMode = output.S3UploadMode;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1MonitoringScheduleConfig = (output, context) => {
    let contents = {
        __type: "MonitoringScheduleConfig",
        MonitoringJobDefinition: undefined,
        ScheduleConfig: undefined
    };
    if (output.MonitoringJobDefinition !== undefined &&
        output.MonitoringJobDefinition !== null) {
        contents.MonitoringJobDefinition = deserializeAws_json1_1MonitoringJobDefinition(output.MonitoringJobDefinition, context);
    }
    if (output.ScheduleConfig !== undefined && output.ScheduleConfig !== null) {
        contents.ScheduleConfig = deserializeAws_json1_1ScheduleConfig(output.ScheduleConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1MonitoringScheduleSummary = (output, context) => {
    let contents = {
        __type: "MonitoringScheduleSummary",
        CreationTime: undefined,
        EndpointName: undefined,
        LastModifiedTime: undefined,
        MonitoringScheduleArn: undefined,
        MonitoringScheduleName: undefined,
        MonitoringScheduleStatus: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.EndpointName !== undefined && output.EndpointName !== null) {
        contents.EndpointName = output.EndpointName;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.MonitoringScheduleArn !== undefined &&
        output.MonitoringScheduleArn !== null) {
        contents.MonitoringScheduleArn = output.MonitoringScheduleArn;
    }
    if (output.MonitoringScheduleName !== undefined &&
        output.MonitoringScheduleName !== null) {
        contents.MonitoringScheduleName = output.MonitoringScheduleName;
    }
    if (output.MonitoringScheduleStatus !== undefined &&
        output.MonitoringScheduleStatus !== null) {
        contents.MonitoringScheduleStatus = output.MonitoringScheduleStatus;
    }
    return contents;
};
const deserializeAws_json1_1MonitoringScheduleSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MonitoringScheduleSummary(entry, context));
};
const deserializeAws_json1_1MonitoringStatisticsResource = (output, context) => {
    let contents = {
        __type: "MonitoringStatisticsResource",
        S3Uri: undefined
    };
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1MonitoringStoppingCondition = (output, context) => {
    let contents = {
        __type: "MonitoringStoppingCondition",
        MaxRuntimeInSeconds: undefined
    };
    if (output.MaxRuntimeInSeconds !== undefined &&
        output.MaxRuntimeInSeconds !== null) {
        contents.MaxRuntimeInSeconds = output.MaxRuntimeInSeconds;
    }
    return contents;
};
const deserializeAws_json1_1NetworkConfig = (output, context) => {
    let contents = {
        __type: "NetworkConfig",
        EnableNetworkIsolation: undefined,
        VpcConfig: undefined
    };
    if (output.EnableNetworkIsolation !== undefined &&
        output.EnableNetworkIsolation !== null) {
        contents.EnableNetworkIsolation = output.EnableNetworkIsolation;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1NotebookInstanceAcceleratorTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1NotebookInstanceLifecycleConfigList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NotebookInstanceLifecycleHook(entry, context));
};
const deserializeAws_json1_1NotebookInstanceLifecycleConfigSummary = (output, context) => {
    let contents = {
        __type: "NotebookInstanceLifecycleConfigSummary",
        CreationTime: undefined,
        LastModifiedTime: undefined,
        NotebookInstanceLifecycleConfigArn: undefined,
        NotebookInstanceLifecycleConfigName: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.NotebookInstanceLifecycleConfigArn !== undefined &&
        output.NotebookInstanceLifecycleConfigArn !== null) {
        contents.NotebookInstanceLifecycleConfigArn =
            output.NotebookInstanceLifecycleConfigArn;
    }
    if (output.NotebookInstanceLifecycleConfigName !== undefined &&
        output.NotebookInstanceLifecycleConfigName !== null) {
        contents.NotebookInstanceLifecycleConfigName =
            output.NotebookInstanceLifecycleConfigName;
    }
    return contents;
};
const deserializeAws_json1_1NotebookInstanceLifecycleConfigSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NotebookInstanceLifecycleConfigSummary(entry, context));
};
const deserializeAws_json1_1NotebookInstanceLifecycleHook = (output, context) => {
    let contents = {
        __type: "NotebookInstanceLifecycleHook",
        Content: undefined
    };
    if (output.Content !== undefined && output.Content !== null) {
        contents.Content = output.Content;
    }
    return contents;
};
const deserializeAws_json1_1NotebookInstanceSummary = (output, context) => {
    let contents = {
        __type: "NotebookInstanceSummary",
        AdditionalCodeRepositories: undefined,
        CreationTime: undefined,
        DefaultCodeRepository: undefined,
        InstanceType: undefined,
        LastModifiedTime: undefined,
        NotebookInstanceArn: undefined,
        NotebookInstanceLifecycleConfigName: undefined,
        NotebookInstanceName: undefined,
        NotebookInstanceStatus: undefined,
        Url: undefined
    };
    if (output.AdditionalCodeRepositories !== undefined &&
        output.AdditionalCodeRepositories !== null) {
        contents.AdditionalCodeRepositories = deserializeAws_json1_1AdditionalCodeRepositoryNamesOrUrls(output.AdditionalCodeRepositories, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DefaultCodeRepository !== undefined &&
        output.DefaultCodeRepository !== null) {
        contents.DefaultCodeRepository = output.DefaultCodeRepository;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.NotebookInstanceArn !== undefined &&
        output.NotebookInstanceArn !== null) {
        contents.NotebookInstanceArn = output.NotebookInstanceArn;
    }
    if (output.NotebookInstanceLifecycleConfigName !== undefined &&
        output.NotebookInstanceLifecycleConfigName !== null) {
        contents.NotebookInstanceLifecycleConfigName =
            output.NotebookInstanceLifecycleConfigName;
    }
    if (output.NotebookInstanceName !== undefined &&
        output.NotebookInstanceName !== null) {
        contents.NotebookInstanceName = output.NotebookInstanceName;
    }
    if (output.NotebookInstanceStatus !== undefined &&
        output.NotebookInstanceStatus !== null) {
        contents.NotebookInstanceStatus = output.NotebookInstanceStatus;
    }
    if (output.Url !== undefined && output.Url !== null) {
        contents.Url = output.Url;
    }
    return contents;
};
const deserializeAws_json1_1NotebookInstanceSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NotebookInstanceSummary(entry, context));
};
const deserializeAws_json1_1NotificationConfiguration = (output, context) => {
    let contents = {
        __type: "NotificationConfiguration",
        NotificationTopicArn: undefined
    };
    if (output.NotificationTopicArn !== undefined &&
        output.NotificationTopicArn !== null) {
        contents.NotificationTopicArn = output.NotificationTopicArn;
    }
    return contents;
};
const deserializeAws_json1_1ObjectiveStatusCounters = (output, context) => {
    let contents = {
        __type: "ObjectiveStatusCounters",
        Failed: undefined,
        Pending: undefined,
        Succeeded: undefined
    };
    if (output.Failed !== undefined && output.Failed !== null) {
        contents.Failed = output.Failed;
    }
    if (output.Pending !== undefined && output.Pending !== null) {
        contents.Pending = output.Pending;
    }
    if (output.Succeeded !== undefined && output.Succeeded !== null) {
        contents.Succeeded = output.Succeeded;
    }
    return contents;
};
const deserializeAws_json1_1OutputConfig = (output, context) => {
    let contents = {
        __type: "OutputConfig",
        S3OutputLocation: undefined,
        TargetDevice: undefined
    };
    if (output.S3OutputLocation !== undefined &&
        output.S3OutputLocation !== null) {
        contents.S3OutputLocation = output.S3OutputLocation;
    }
    if (output.TargetDevice !== undefined && output.TargetDevice !== null) {
        contents.TargetDevice = output.TargetDevice;
    }
    return contents;
};
const deserializeAws_json1_1OutputDataConfig = (output, context) => {
    let contents = {
        __type: "OutputDataConfig",
        KmsKeyId: undefined,
        S3OutputPath: undefined
    };
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.S3OutputPath !== undefined && output.S3OutputPath !== null) {
        contents.S3OutputPath = output.S3OutputPath;
    }
    return contents;
};
const deserializeAws_json1_1ParameterRange = (output, context) => {
    let contents = {
        __type: "ParameterRange",
        CategoricalParameterRangeSpecification: undefined,
        ContinuousParameterRangeSpecification: undefined,
        IntegerParameterRangeSpecification: undefined
    };
    if (output.CategoricalParameterRangeSpecification !== undefined &&
        output.CategoricalParameterRangeSpecification !== null) {
        contents.CategoricalParameterRangeSpecification = deserializeAws_json1_1CategoricalParameterRangeSpecification(output.CategoricalParameterRangeSpecification, context);
    }
    if (output.ContinuousParameterRangeSpecification !== undefined &&
        output.ContinuousParameterRangeSpecification !== null) {
        contents.ContinuousParameterRangeSpecification = deserializeAws_json1_1ContinuousParameterRangeSpecification(output.ContinuousParameterRangeSpecification, context);
    }
    if (output.IntegerParameterRangeSpecification !== undefined &&
        output.IntegerParameterRangeSpecification !== null) {
        contents.IntegerParameterRangeSpecification = deserializeAws_json1_1IntegerParameterRangeSpecification(output.IntegerParameterRangeSpecification, context);
    }
    return contents;
};
const deserializeAws_json1_1ParameterRanges = (output, context) => {
    let contents = {
        __type: "ParameterRanges",
        CategoricalParameterRanges: undefined,
        ContinuousParameterRanges: undefined,
        IntegerParameterRanges: undefined
    };
    if (output.CategoricalParameterRanges !== undefined &&
        output.CategoricalParameterRanges !== null) {
        contents.CategoricalParameterRanges = deserializeAws_json1_1CategoricalParameterRanges(output.CategoricalParameterRanges, context);
    }
    if (output.ContinuousParameterRanges !== undefined &&
        output.ContinuousParameterRanges !== null) {
        contents.ContinuousParameterRanges = deserializeAws_json1_1ContinuousParameterRanges(output.ContinuousParameterRanges, context);
    }
    if (output.IntegerParameterRanges !== undefined &&
        output.IntegerParameterRanges !== null) {
        contents.IntegerParameterRanges = deserializeAws_json1_1IntegerParameterRanges(output.IntegerParameterRanges, context);
    }
    return contents;
};
const deserializeAws_json1_1ParameterValues = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Parent = (output, context) => {
    let contents = {
        __type: "Parent",
        ExperimentName: undefined,
        TrialName: undefined
    };
    if (output.ExperimentName !== undefined && output.ExperimentName !== null) {
        contents.ExperimentName = output.ExperimentName;
    }
    if (output.TrialName !== undefined && output.TrialName !== null) {
        contents.TrialName = output.TrialName;
    }
    return contents;
};
const deserializeAws_json1_1ParentHyperParameterTuningJob = (output, context) => {
    let contents = {
        __type: "ParentHyperParameterTuningJob",
        HyperParameterTuningJobName: undefined
    };
    if (output.HyperParameterTuningJobName !== undefined &&
        output.HyperParameterTuningJobName !== null) {
        contents.HyperParameterTuningJobName = output.HyperParameterTuningJobName;
    }
    return contents;
};
const deserializeAws_json1_1ParentHyperParameterTuningJobs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ParentHyperParameterTuningJob(entry, context));
};
const deserializeAws_json1_1Parents = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Parent(entry, context));
};
const deserializeAws_json1_1ProcessingClusterConfig = (output, context) => {
    let contents = {
        __type: "ProcessingClusterConfig",
        InstanceCount: undefined,
        InstanceType: undefined,
        VolumeKmsKeyId: undefined,
        VolumeSizeInGB: undefined
    };
    if (output.InstanceCount !== undefined && output.InstanceCount !== null) {
        contents.InstanceCount = output.InstanceCount;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    if (output.VolumeSizeInGB !== undefined && output.VolumeSizeInGB !== null) {
        contents.VolumeSizeInGB = output.VolumeSizeInGB;
    }
    return contents;
};
const deserializeAws_json1_1ProcessingEnvironmentMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ProcessingInput = (output, context) => {
    let contents = {
        __type: "ProcessingInput",
        InputName: undefined,
        S3Input: undefined
    };
    if (output.InputName !== undefined && output.InputName !== null) {
        contents.InputName = output.InputName;
    }
    if (output.S3Input !== undefined && output.S3Input !== null) {
        contents.S3Input = deserializeAws_json1_1ProcessingS3Input(output.S3Input, context);
    }
    return contents;
};
const deserializeAws_json1_1ProcessingInputs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProcessingInput(entry, context));
};
const deserializeAws_json1_1ProcessingJobSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProcessingJobSummary(entry, context));
};
const deserializeAws_json1_1ProcessingJobSummary = (output, context) => {
    let contents = {
        __type: "ProcessingJobSummary",
        CreationTime: undefined,
        ExitMessage: undefined,
        FailureReason: undefined,
        LastModifiedTime: undefined,
        ProcessingEndTime: undefined,
        ProcessingJobArn: undefined,
        ProcessingJobName: undefined,
        ProcessingJobStatus: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.ExitMessage !== undefined && output.ExitMessage !== null) {
        contents.ExitMessage = output.ExitMessage;
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.ProcessingEndTime !== undefined &&
        output.ProcessingEndTime !== null) {
        contents.ProcessingEndTime = new Date(Math.round(output.ProcessingEndTime * 1000));
    }
    if (output.ProcessingJobArn !== undefined &&
        output.ProcessingJobArn !== null) {
        contents.ProcessingJobArn = output.ProcessingJobArn;
    }
    if (output.ProcessingJobName !== undefined &&
        output.ProcessingJobName !== null) {
        contents.ProcessingJobName = output.ProcessingJobName;
    }
    if (output.ProcessingJobStatus !== undefined &&
        output.ProcessingJobStatus !== null) {
        contents.ProcessingJobStatus = output.ProcessingJobStatus;
    }
    return contents;
};
const deserializeAws_json1_1ProcessingOutput = (output, context) => {
    let contents = {
        __type: "ProcessingOutput",
        OutputName: undefined,
        S3Output: undefined
    };
    if (output.OutputName !== undefined && output.OutputName !== null) {
        contents.OutputName = output.OutputName;
    }
    if (output.S3Output !== undefined && output.S3Output !== null) {
        contents.S3Output = deserializeAws_json1_1ProcessingS3Output(output.S3Output, context);
    }
    return contents;
};
const deserializeAws_json1_1ProcessingOutputConfig = (output, context) => {
    let contents = {
        __type: "ProcessingOutputConfig",
        KmsKeyId: undefined,
        Outputs: undefined
    };
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.Outputs !== undefined && output.Outputs !== null) {
        contents.Outputs = deserializeAws_json1_1ProcessingOutputs(output.Outputs, context);
    }
    return contents;
};
const deserializeAws_json1_1ProcessingOutputs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProcessingOutput(entry, context));
};
const deserializeAws_json1_1ProcessingResources = (output, context) => {
    let contents = {
        __type: "ProcessingResources",
        ClusterConfig: undefined
    };
    if (output.ClusterConfig !== undefined && output.ClusterConfig !== null) {
        contents.ClusterConfig = deserializeAws_json1_1ProcessingClusterConfig(output.ClusterConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1ProcessingS3Input = (output, context) => {
    let contents = {
        __type: "ProcessingS3Input",
        LocalPath: undefined,
        S3CompressionType: undefined,
        S3DataDistributionType: undefined,
        S3DataType: undefined,
        S3InputMode: undefined,
        S3Uri: undefined
    };
    if (output.LocalPath !== undefined && output.LocalPath !== null) {
        contents.LocalPath = output.LocalPath;
    }
    if (output.S3CompressionType !== undefined &&
        output.S3CompressionType !== null) {
        contents.S3CompressionType = output.S3CompressionType;
    }
    if (output.S3DataDistributionType !== undefined &&
        output.S3DataDistributionType !== null) {
        contents.S3DataDistributionType = output.S3DataDistributionType;
    }
    if (output.S3DataType !== undefined && output.S3DataType !== null) {
        contents.S3DataType = output.S3DataType;
    }
    if (output.S3InputMode !== undefined && output.S3InputMode !== null) {
        contents.S3InputMode = output.S3InputMode;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1ProcessingS3Output = (output, context) => {
    let contents = {
        __type: "ProcessingS3Output",
        LocalPath: undefined,
        S3UploadMode: undefined,
        S3Uri: undefined
    };
    if (output.LocalPath !== undefined && output.LocalPath !== null) {
        contents.LocalPath = output.LocalPath;
    }
    if (output.S3UploadMode !== undefined && output.S3UploadMode !== null) {
        contents.S3UploadMode = output.S3UploadMode;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1ProcessingStoppingCondition = (output, context) => {
    let contents = {
        __type: "ProcessingStoppingCondition",
        MaxRuntimeInSeconds: undefined
    };
    if (output.MaxRuntimeInSeconds !== undefined &&
        output.MaxRuntimeInSeconds !== null) {
        contents.MaxRuntimeInSeconds = output.MaxRuntimeInSeconds;
    }
    return contents;
};
const deserializeAws_json1_1ProductListings = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ProductionVariant = (output, context) => {
    let contents = {
        __type: "ProductionVariant",
        AcceleratorType: undefined,
        InitialInstanceCount: undefined,
        InitialVariantWeight: undefined,
        InstanceType: undefined,
        ModelName: undefined,
        VariantName: undefined
    };
    if (output.AcceleratorType !== undefined && output.AcceleratorType !== null) {
        contents.AcceleratorType = output.AcceleratorType;
    }
    if (output.InitialInstanceCount !== undefined &&
        output.InitialInstanceCount !== null) {
        contents.InitialInstanceCount = output.InitialInstanceCount;
    }
    if (output.InitialVariantWeight !== undefined &&
        output.InitialVariantWeight !== null) {
        contents.InitialVariantWeight = output.InitialVariantWeight;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.ModelName !== undefined && output.ModelName !== null) {
        contents.ModelName = output.ModelName;
    }
    if (output.VariantName !== undefined && output.VariantName !== null) {
        contents.VariantName = output.VariantName;
    }
    return contents;
};
const deserializeAws_json1_1ProductionVariantList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProductionVariant(entry, context));
};
const deserializeAws_json1_1ProductionVariantSummary = (output, context) => {
    let contents = {
        __type: "ProductionVariantSummary",
        CurrentInstanceCount: undefined,
        CurrentWeight: undefined,
        DeployedImages: undefined,
        DesiredInstanceCount: undefined,
        DesiredWeight: undefined,
        VariantName: undefined
    };
    if (output.CurrentInstanceCount !== undefined &&
        output.CurrentInstanceCount !== null) {
        contents.CurrentInstanceCount = output.CurrentInstanceCount;
    }
    if (output.CurrentWeight !== undefined && output.CurrentWeight !== null) {
        contents.CurrentWeight = output.CurrentWeight;
    }
    if (output.DeployedImages !== undefined && output.DeployedImages !== null) {
        contents.DeployedImages = deserializeAws_json1_1DeployedImages(output.DeployedImages, context);
    }
    if (output.DesiredInstanceCount !== undefined &&
        output.DesiredInstanceCount !== null) {
        contents.DesiredInstanceCount = output.DesiredInstanceCount;
    }
    if (output.DesiredWeight !== undefined && output.DesiredWeight !== null) {
        contents.DesiredWeight = output.DesiredWeight;
    }
    if (output.VariantName !== undefined && output.VariantName !== null) {
        contents.VariantName = output.VariantName;
    }
    return contents;
};
const deserializeAws_json1_1ProductionVariantSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProductionVariantSummary(entry, context));
};
const deserializeAws_json1_1PropertyNameSuggestion = (output, context) => {
    let contents = {
        __type: "PropertyNameSuggestion",
        PropertyName: undefined
    };
    if (output.PropertyName !== undefined && output.PropertyName !== null) {
        contents.PropertyName = output.PropertyName;
    }
    return contents;
};
const deserializeAws_json1_1PropertyNameSuggestionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PropertyNameSuggestion(entry, context));
};
const deserializeAws_json1_1PublicWorkforceTaskPrice = (output, context) => {
    let contents = {
        __type: "PublicWorkforceTaskPrice",
        AmountInUsd: undefined
    };
    if (output.AmountInUsd !== undefined && output.AmountInUsd !== null) {
        contents.AmountInUsd = deserializeAws_json1_1USD(output.AmountInUsd, context);
    }
    return contents;
};
const deserializeAws_json1_1RealtimeInferenceInstanceTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RenderUiTemplateResponse = (output, context) => {
    let contents = {
        __type: "RenderUiTemplateResponse",
        Errors: undefined,
        RenderedContent: undefined
    };
    if (output.Errors !== undefined && output.Errors !== null) {
        contents.Errors = deserializeAws_json1_1RenderingErrorList(output.Errors, context);
    }
    if (output.RenderedContent !== undefined && output.RenderedContent !== null) {
        contents.RenderedContent = output.RenderedContent;
    }
    return contents;
};
const deserializeAws_json1_1RenderingError = (output, context) => {
    let contents = {
        __type: "RenderingError",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1RenderingErrorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RenderingError(entry, context));
};
const deserializeAws_json1_1ResolvedAttributes = (output, context) => {
    let contents = {
        __type: "ResolvedAttributes",
        AutoMLJobObjective: undefined,
        CompletionCriteria: undefined,
        ProblemType: undefined
    };
    if (output.AutoMLJobObjective !== undefined &&
        output.AutoMLJobObjective !== null) {
        contents.AutoMLJobObjective = deserializeAws_json1_1AutoMLJobObjective(output.AutoMLJobObjective, context);
    }
    if (output.CompletionCriteria !== undefined &&
        output.CompletionCriteria !== null) {
        contents.CompletionCriteria = deserializeAws_json1_1AutoMLJobCompletionCriteria(output.CompletionCriteria, context);
    }
    if (output.ProblemType !== undefined && output.ProblemType !== null) {
        contents.ProblemType = output.ProblemType;
    }
    return contents;
};
const deserializeAws_json1_1ResourceConfig = (output, context) => {
    let contents = {
        __type: "ResourceConfig",
        InstanceCount: undefined,
        InstanceType: undefined,
        VolumeKmsKeyId: undefined,
        VolumeSizeInGB: undefined
    };
    if (output.InstanceCount !== undefined && output.InstanceCount !== null) {
        contents.InstanceCount = output.InstanceCount;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    if (output.VolumeSizeInGB !== undefined && output.VolumeSizeInGB !== null) {
        contents.VolumeSizeInGB = output.VolumeSizeInGB;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInUse = (output, context) => {
    let contents = {
        __type: "ResourceInUse",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceeded = (output, context) => {
    let contents = {
        __type: "ResourceLimitExceeded",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceLimits = (output, context) => {
    let contents = {
        __type: "ResourceLimits",
        MaxNumberOfTrainingJobs: undefined,
        MaxParallelTrainingJobs: undefined
    };
    if (output.MaxNumberOfTrainingJobs !== undefined &&
        output.MaxNumberOfTrainingJobs !== null) {
        contents.MaxNumberOfTrainingJobs = output.MaxNumberOfTrainingJobs;
    }
    if (output.MaxParallelTrainingJobs !== undefined &&
        output.MaxParallelTrainingJobs !== null) {
        contents.MaxParallelTrainingJobs = output.MaxParallelTrainingJobs;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFound = (output, context) => {
    let contents = {
        __type: "ResourceNotFound",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceSpec = (output, context) => {
    let contents = {
        __type: "ResourceSpec",
        EnvironmentArn: undefined,
        InstanceType: undefined
    };
    if (output.EnvironmentArn !== undefined && output.EnvironmentArn !== null) {
        contents.EnvironmentArn = output.EnvironmentArn;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    return contents;
};
const deserializeAws_json1_1ResponseMIMETypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RuleParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1S3DataSource = (output, context) => {
    let contents = {
        __type: "S3DataSource",
        AttributeNames: undefined,
        S3DataDistributionType: undefined,
        S3DataType: undefined,
        S3Uri: undefined
    };
    if (output.AttributeNames !== undefined && output.AttributeNames !== null) {
        contents.AttributeNames = deserializeAws_json1_1AttributeNames(output.AttributeNames, context);
    }
    if (output.S3DataDistributionType !== undefined &&
        output.S3DataDistributionType !== null) {
        contents.S3DataDistributionType = output.S3DataDistributionType;
    }
    if (output.S3DataType !== undefined && output.S3DataType !== null) {
        contents.S3DataType = output.S3DataType;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1ScheduleConfig = (output, context) => {
    let contents = {
        __type: "ScheduleConfig",
        ScheduleExpression: undefined
    };
    if (output.ScheduleExpression !== undefined &&
        output.ScheduleExpression !== null) {
        contents.ScheduleExpression = output.ScheduleExpression;
    }
    return contents;
};
const deserializeAws_json1_1SearchRecord = (output, context) => {
    let contents = {
        __type: "SearchRecord",
        Experiment: undefined,
        TrainingJob: undefined,
        Trial: undefined,
        TrialComponent: undefined
    };
    if (output.Experiment !== undefined && output.Experiment !== null) {
        contents.Experiment = deserializeAws_json1_1Experiment(output.Experiment, context);
    }
    if (output.TrainingJob !== undefined && output.TrainingJob !== null) {
        contents.TrainingJob = deserializeAws_json1_1TrainingJob(output.TrainingJob, context);
    }
    if (output.Trial !== undefined && output.Trial !== null) {
        contents.Trial = deserializeAws_json1_1Trial(output.Trial, context);
    }
    if (output.TrialComponent !== undefined && output.TrialComponent !== null) {
        contents.TrialComponent = deserializeAws_json1_1TrialComponent(output.TrialComponent, context);
    }
    return contents;
};
const deserializeAws_json1_1SearchResponse = (output, context) => {
    let contents = {
        __type: "SearchResponse",
        NextToken: undefined,
        Results: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Results !== undefined && output.Results !== null) {
        contents.Results = deserializeAws_json1_1SearchResultsList(output.Results, context);
    }
    return contents;
};
const deserializeAws_json1_1SearchResultsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SearchRecord(entry, context));
};
const deserializeAws_json1_1SecondaryStatusTransition = (output, context) => {
    let contents = {
        __type: "SecondaryStatusTransition",
        EndTime: undefined,
        StartTime: undefined,
        Status: undefined,
        StatusMessage: undefined
    };
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    return contents;
};
const deserializeAws_json1_1SecondaryStatusTransitions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SecondaryStatusTransition(entry, context));
};
const deserializeAws_json1_1SecurityGroupIds = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SharingSettings = (output, context) => {
    let contents = {
        __type: "SharingSettings",
        NotebookOutputOption: undefined,
        S3KmsKeyId: undefined,
        S3OutputPath: undefined
    };
    if (output.NotebookOutputOption !== undefined &&
        output.NotebookOutputOption !== null) {
        contents.NotebookOutputOption = output.NotebookOutputOption;
    }
    if (output.S3KmsKeyId !== undefined && output.S3KmsKeyId !== null) {
        contents.S3KmsKeyId = output.S3KmsKeyId;
    }
    if (output.S3OutputPath !== undefined && output.S3OutputPath !== null) {
        contents.S3OutputPath = output.S3OutputPath;
    }
    return contents;
};
const deserializeAws_json1_1ShuffleConfig = (output, context) => {
    let contents = {
        __type: "ShuffleConfig",
        Seed: undefined
    };
    if (output.Seed !== undefined && output.Seed !== null) {
        contents.Seed = output.Seed;
    }
    return contents;
};
const deserializeAws_json1_1SourceAlgorithm = (output, context) => {
    let contents = {
        __type: "SourceAlgorithm",
        AlgorithmName: undefined,
        ModelDataUrl: undefined
    };
    if (output.AlgorithmName !== undefined && output.AlgorithmName !== null) {
        contents.AlgorithmName = output.AlgorithmName;
    }
    if (output.ModelDataUrl !== undefined && output.ModelDataUrl !== null) {
        contents.ModelDataUrl = output.ModelDataUrl;
    }
    return contents;
};
const deserializeAws_json1_1SourceAlgorithmList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SourceAlgorithm(entry, context));
};
const deserializeAws_json1_1SourceAlgorithmSpecification = (output, context) => {
    let contents = {
        __type: "SourceAlgorithmSpecification",
        SourceAlgorithms: undefined
    };
    if (output.SourceAlgorithms !== undefined &&
        output.SourceAlgorithms !== null) {
        contents.SourceAlgorithms = deserializeAws_json1_1SourceAlgorithmList(output.SourceAlgorithms, context);
    }
    return contents;
};
const deserializeAws_json1_1SourceIpConfig = (output, context) => {
    let contents = {
        __type: "SourceIpConfig",
        Cidrs: undefined
    };
    if (output.Cidrs !== undefined && output.Cidrs !== null) {
        contents.Cidrs = deserializeAws_json1_1Cidrs(output.Cidrs, context);
    }
    return contents;
};
const deserializeAws_json1_1StoppingCondition = (output, context) => {
    let contents = {
        __type: "StoppingCondition",
        MaxRuntimeInSeconds: undefined,
        MaxWaitTimeInSeconds: undefined
    };
    if (output.MaxRuntimeInSeconds !== undefined &&
        output.MaxRuntimeInSeconds !== null) {
        contents.MaxRuntimeInSeconds = output.MaxRuntimeInSeconds;
    }
    if (output.MaxWaitTimeInSeconds !== undefined &&
        output.MaxWaitTimeInSeconds !== null) {
        contents.MaxWaitTimeInSeconds = output.MaxWaitTimeInSeconds;
    }
    return contents;
};
const deserializeAws_json1_1Subnets = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SubscribedWorkteam = (output, context) => {
    let contents = {
        __type: "SubscribedWorkteam",
        ListingId: undefined,
        MarketplaceDescription: undefined,
        MarketplaceTitle: undefined,
        SellerName: undefined,
        WorkteamArn: undefined
    };
    if (output.ListingId !== undefined && output.ListingId !== null) {
        contents.ListingId = output.ListingId;
    }
    if (output.MarketplaceDescription !== undefined &&
        output.MarketplaceDescription !== null) {
        contents.MarketplaceDescription = output.MarketplaceDescription;
    }
    if (output.MarketplaceTitle !== undefined &&
        output.MarketplaceTitle !== null) {
        contents.MarketplaceTitle = output.MarketplaceTitle;
    }
    if (output.SellerName !== undefined && output.SellerName !== null) {
        contents.SellerName = output.SellerName;
    }
    if (output.WorkteamArn !== undefined && output.WorkteamArn !== null) {
        contents.WorkteamArn = output.WorkteamArn;
    }
    return contents;
};
const deserializeAws_json1_1SubscribedWorkteams = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SubscribedWorkteam(entry, context));
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
        __type: "Tag",
        Key: undefined,
        Value: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TaskKeywords = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TensorBoardAppSettings = (output, context) => {
    let contents = {
        __type: "TensorBoardAppSettings",
        DefaultResourceSpec: undefined
    };
    if (output.DefaultResourceSpec !== undefined &&
        output.DefaultResourceSpec !== null) {
        contents.DefaultResourceSpec = deserializeAws_json1_1ResourceSpec(output.DefaultResourceSpec, context);
    }
    return contents;
};
const deserializeAws_json1_1TensorBoardOutputConfig = (output, context) => {
    let contents = {
        __type: "TensorBoardOutputConfig",
        LocalPath: undefined,
        S3OutputPath: undefined
    };
    if (output.LocalPath !== undefined && output.LocalPath !== null) {
        contents.LocalPath = output.LocalPath;
    }
    if (output.S3OutputPath !== undefined && output.S3OutputPath !== null) {
        contents.S3OutputPath = output.S3OutputPath;
    }
    return contents;
};
const deserializeAws_json1_1TrainingInstanceTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TrainingJob = (output, context) => {
    let contents = {
        __type: "TrainingJob",
        AlgorithmSpecification: undefined,
        AutoMLJobArn: undefined,
        BillableTimeInSeconds: undefined,
        CheckpointConfig: undefined,
        CreationTime: undefined,
        DebugHookConfig: undefined,
        DebugRuleConfigurations: undefined,
        DebugRuleEvaluationStatuses: undefined,
        EnableInterContainerTrafficEncryption: undefined,
        EnableManagedSpotTraining: undefined,
        EnableNetworkIsolation: undefined,
        ExperimentConfig: undefined,
        FailureReason: undefined,
        FinalMetricDataList: undefined,
        HyperParameters: undefined,
        InputDataConfig: undefined,
        LabelingJobArn: undefined,
        LastModifiedTime: undefined,
        ModelArtifacts: undefined,
        OutputDataConfig: undefined,
        ResourceConfig: undefined,
        RoleArn: undefined,
        SecondaryStatus: undefined,
        SecondaryStatusTransitions: undefined,
        StoppingCondition: undefined,
        Tags: undefined,
        TensorBoardOutputConfig: undefined,
        TrainingEndTime: undefined,
        TrainingJobArn: undefined,
        TrainingJobName: undefined,
        TrainingJobStatus: undefined,
        TrainingStartTime: undefined,
        TrainingTimeInSeconds: undefined,
        TuningJobArn: undefined,
        VpcConfig: undefined
    };
    if (output.AlgorithmSpecification !== undefined &&
        output.AlgorithmSpecification !== null) {
        contents.AlgorithmSpecification = deserializeAws_json1_1AlgorithmSpecification(output.AlgorithmSpecification, context);
    }
    if (output.AutoMLJobArn !== undefined && output.AutoMLJobArn !== null) {
        contents.AutoMLJobArn = output.AutoMLJobArn;
    }
    if (output.BillableTimeInSeconds !== undefined &&
        output.BillableTimeInSeconds !== null) {
        contents.BillableTimeInSeconds = output.BillableTimeInSeconds;
    }
    if (output.CheckpointConfig !== undefined &&
        output.CheckpointConfig !== null) {
        contents.CheckpointConfig = deserializeAws_json1_1CheckpointConfig(output.CheckpointConfig, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DebugHookConfig !== undefined && output.DebugHookConfig !== null) {
        contents.DebugHookConfig = deserializeAws_json1_1DebugHookConfig(output.DebugHookConfig, context);
    }
    if (output.DebugRuleConfigurations !== undefined &&
        output.DebugRuleConfigurations !== null) {
        contents.DebugRuleConfigurations = deserializeAws_json1_1DebugRuleConfigurations(output.DebugRuleConfigurations, context);
    }
    if (output.DebugRuleEvaluationStatuses !== undefined &&
        output.DebugRuleEvaluationStatuses !== null) {
        contents.DebugRuleEvaluationStatuses = deserializeAws_json1_1DebugRuleEvaluationStatuses(output.DebugRuleEvaluationStatuses, context);
    }
    if (output.EnableInterContainerTrafficEncryption !== undefined &&
        output.EnableInterContainerTrafficEncryption !== null) {
        contents.EnableInterContainerTrafficEncryption =
            output.EnableInterContainerTrafficEncryption;
    }
    if (output.EnableManagedSpotTraining !== undefined &&
        output.EnableManagedSpotTraining !== null) {
        contents.EnableManagedSpotTraining = output.EnableManagedSpotTraining;
    }
    if (output.EnableNetworkIsolation !== undefined &&
        output.EnableNetworkIsolation !== null) {
        contents.EnableNetworkIsolation = output.EnableNetworkIsolation;
    }
    if (output.ExperimentConfig !== undefined &&
        output.ExperimentConfig !== null) {
        contents.ExperimentConfig = deserializeAws_json1_1ExperimentConfig(output.ExperimentConfig, context);
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.FinalMetricDataList !== undefined &&
        output.FinalMetricDataList !== null) {
        contents.FinalMetricDataList = deserializeAws_json1_1FinalMetricDataList(output.FinalMetricDataList, context);
    }
    if (output.HyperParameters !== undefined && output.HyperParameters !== null) {
        contents.HyperParameters = deserializeAws_json1_1HyperParameters(output.HyperParameters, context);
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
    }
    if (output.LabelingJobArn !== undefined && output.LabelingJobArn !== null) {
        contents.LabelingJobArn = output.LabelingJobArn;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.ModelArtifacts !== undefined && output.ModelArtifacts !== null) {
        contents.ModelArtifacts = deserializeAws_json1_1ModelArtifacts(output.ModelArtifacts, context);
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.ResourceConfig !== undefined && output.ResourceConfig !== null) {
        contents.ResourceConfig = deserializeAws_json1_1ResourceConfig(output.ResourceConfig, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.SecondaryStatus !== undefined && output.SecondaryStatus !== null) {
        contents.SecondaryStatus = output.SecondaryStatus;
    }
    if (output.SecondaryStatusTransitions !== undefined &&
        output.SecondaryStatusTransitions !== null) {
        contents.SecondaryStatusTransitions = deserializeAws_json1_1SecondaryStatusTransitions(output.SecondaryStatusTransitions, context);
    }
    if (output.StoppingCondition !== undefined &&
        output.StoppingCondition !== null) {
        contents.StoppingCondition = deserializeAws_json1_1StoppingCondition(output.StoppingCondition, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    if (output.TensorBoardOutputConfig !== undefined &&
        output.TensorBoardOutputConfig !== null) {
        contents.TensorBoardOutputConfig = deserializeAws_json1_1TensorBoardOutputConfig(output.TensorBoardOutputConfig, context);
    }
    if (output.TrainingEndTime !== undefined && output.TrainingEndTime !== null) {
        contents.TrainingEndTime = new Date(Math.round(output.TrainingEndTime * 1000));
    }
    if (output.TrainingJobArn !== undefined && output.TrainingJobArn !== null) {
        contents.TrainingJobArn = output.TrainingJobArn;
    }
    if (output.TrainingJobName !== undefined && output.TrainingJobName !== null) {
        contents.TrainingJobName = output.TrainingJobName;
    }
    if (output.TrainingJobStatus !== undefined &&
        output.TrainingJobStatus !== null) {
        contents.TrainingJobStatus = output.TrainingJobStatus;
    }
    if (output.TrainingStartTime !== undefined &&
        output.TrainingStartTime !== null) {
        contents.TrainingStartTime = new Date(Math.round(output.TrainingStartTime * 1000));
    }
    if (output.TrainingTimeInSeconds !== undefined &&
        output.TrainingTimeInSeconds !== null) {
        contents.TrainingTimeInSeconds = output.TrainingTimeInSeconds;
    }
    if (output.TuningJobArn !== undefined && output.TuningJobArn !== null) {
        contents.TuningJobArn = output.TuningJobArn;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1TrainingJobDefinition = (output, context) => {
    let contents = {
        __type: "TrainingJobDefinition",
        HyperParameters: undefined,
        InputDataConfig: undefined,
        OutputDataConfig: undefined,
        ResourceConfig: undefined,
        StoppingCondition: undefined,
        TrainingInputMode: undefined
    };
    if (output.HyperParameters !== undefined && output.HyperParameters !== null) {
        contents.HyperParameters = deserializeAws_json1_1HyperParameters(output.HyperParameters, context);
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.ResourceConfig !== undefined && output.ResourceConfig !== null) {
        contents.ResourceConfig = deserializeAws_json1_1ResourceConfig(output.ResourceConfig, context);
    }
    if (output.StoppingCondition !== undefined &&
        output.StoppingCondition !== null) {
        contents.StoppingCondition = deserializeAws_json1_1StoppingCondition(output.StoppingCondition, context);
    }
    if (output.TrainingInputMode !== undefined &&
        output.TrainingInputMode !== null) {
        contents.TrainingInputMode = output.TrainingInputMode;
    }
    return contents;
};
const deserializeAws_json1_1TrainingJobStatusCounters = (output, context) => {
    let contents = {
        __type: "TrainingJobStatusCounters",
        Completed: undefined,
        InProgress: undefined,
        NonRetryableError: undefined,
        RetryableError: undefined,
        Stopped: undefined
    };
    if (output.Completed !== undefined && output.Completed !== null) {
        contents.Completed = output.Completed;
    }
    if (output.InProgress !== undefined && output.InProgress !== null) {
        contents.InProgress = output.InProgress;
    }
    if (output.NonRetryableError !== undefined &&
        output.NonRetryableError !== null) {
        contents.NonRetryableError = output.NonRetryableError;
    }
    if (output.RetryableError !== undefined && output.RetryableError !== null) {
        contents.RetryableError = output.RetryableError;
    }
    if (output.Stopped !== undefined && output.Stopped !== null) {
        contents.Stopped = output.Stopped;
    }
    return contents;
};
const deserializeAws_json1_1TrainingJobSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TrainingJobSummary(entry, context));
};
const deserializeAws_json1_1TrainingJobSummary = (output, context) => {
    let contents = {
        __type: "TrainingJobSummary",
        CreationTime: undefined,
        LastModifiedTime: undefined,
        TrainingEndTime: undefined,
        TrainingJobArn: undefined,
        TrainingJobName: undefined,
        TrainingJobStatus: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.TrainingEndTime !== undefined && output.TrainingEndTime !== null) {
        contents.TrainingEndTime = new Date(Math.round(output.TrainingEndTime * 1000));
    }
    if (output.TrainingJobArn !== undefined && output.TrainingJobArn !== null) {
        contents.TrainingJobArn = output.TrainingJobArn;
    }
    if (output.TrainingJobName !== undefined && output.TrainingJobName !== null) {
        contents.TrainingJobName = output.TrainingJobName;
    }
    if (output.TrainingJobStatus !== undefined &&
        output.TrainingJobStatus !== null) {
        contents.TrainingJobStatus = output.TrainingJobStatus;
    }
    return contents;
};
const deserializeAws_json1_1TrainingSpecification = (output, context) => {
    let contents = {
        __type: "TrainingSpecification",
        MetricDefinitions: undefined,
        SupportedHyperParameters: undefined,
        SupportedTrainingInstanceTypes: undefined,
        SupportedTuningJobObjectiveMetrics: undefined,
        SupportsDistributedTraining: undefined,
        TrainingChannels: undefined,
        TrainingImage: undefined,
        TrainingImageDigest: undefined
    };
    if (output.MetricDefinitions !== undefined &&
        output.MetricDefinitions !== null) {
        contents.MetricDefinitions = deserializeAws_json1_1MetricDefinitionList(output.MetricDefinitions, context);
    }
    if (output.SupportedHyperParameters !== undefined &&
        output.SupportedHyperParameters !== null) {
        contents.SupportedHyperParameters = deserializeAws_json1_1HyperParameterSpecifications(output.SupportedHyperParameters, context);
    }
    if (output.SupportedTrainingInstanceTypes !== undefined &&
        output.SupportedTrainingInstanceTypes !== null) {
        contents.SupportedTrainingInstanceTypes = deserializeAws_json1_1TrainingInstanceTypes(output.SupportedTrainingInstanceTypes, context);
    }
    if (output.SupportedTuningJobObjectiveMetrics !== undefined &&
        output.SupportedTuningJobObjectiveMetrics !== null) {
        contents.SupportedTuningJobObjectiveMetrics = deserializeAws_json1_1HyperParameterTuningJobObjectives(output.SupportedTuningJobObjectiveMetrics, context);
    }
    if (output.SupportsDistributedTraining !== undefined &&
        output.SupportsDistributedTraining !== null) {
        contents.SupportsDistributedTraining = output.SupportsDistributedTraining;
    }
    if (output.TrainingChannels !== undefined &&
        output.TrainingChannels !== null) {
        contents.TrainingChannels = deserializeAws_json1_1ChannelSpecifications(output.TrainingChannels, context);
    }
    if (output.TrainingImage !== undefined && output.TrainingImage !== null) {
        contents.TrainingImage = output.TrainingImage;
    }
    if (output.TrainingImageDigest !== undefined &&
        output.TrainingImageDigest !== null) {
        contents.TrainingImageDigest = output.TrainingImageDigest;
    }
    return contents;
};
const deserializeAws_json1_1TransformDataSource = (output, context) => {
    let contents = {
        __type: "TransformDataSource",
        S3DataSource: undefined
    };
    if (output.S3DataSource !== undefined && output.S3DataSource !== null) {
        contents.S3DataSource = deserializeAws_json1_1TransformS3DataSource(output.S3DataSource, context);
    }
    return contents;
};
const deserializeAws_json1_1TransformEnvironmentMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1TransformInput = (output, context) => {
    let contents = {
        __type: "TransformInput",
        CompressionType: undefined,
        ContentType: undefined,
        DataSource: undefined,
        SplitType: undefined
    };
    if (output.CompressionType !== undefined && output.CompressionType !== null) {
        contents.CompressionType = output.CompressionType;
    }
    if (output.ContentType !== undefined && output.ContentType !== null) {
        contents.ContentType = output.ContentType;
    }
    if (output.DataSource !== undefined && output.DataSource !== null) {
        contents.DataSource = deserializeAws_json1_1TransformDataSource(output.DataSource, context);
    }
    if (output.SplitType !== undefined && output.SplitType !== null) {
        contents.SplitType = output.SplitType;
    }
    return contents;
};
const deserializeAws_json1_1TransformInstanceTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TransformJobDefinition = (output, context) => {
    let contents = {
        __type: "TransformJobDefinition",
        BatchStrategy: undefined,
        Environment: undefined,
        MaxConcurrentTransforms: undefined,
        MaxPayloadInMB: undefined,
        TransformInput: undefined,
        TransformOutput: undefined,
        TransformResources: undefined
    };
    if (output.BatchStrategy !== undefined && output.BatchStrategy !== null) {
        contents.BatchStrategy = output.BatchStrategy;
    }
    if (output.Environment !== undefined && output.Environment !== null) {
        contents.Environment = deserializeAws_json1_1TransformEnvironmentMap(output.Environment, context);
    }
    if (output.MaxConcurrentTransforms !== undefined &&
        output.MaxConcurrentTransforms !== null) {
        contents.MaxConcurrentTransforms = output.MaxConcurrentTransforms;
    }
    if (output.MaxPayloadInMB !== undefined && output.MaxPayloadInMB !== null) {
        contents.MaxPayloadInMB = output.MaxPayloadInMB;
    }
    if (output.TransformInput !== undefined && output.TransformInput !== null) {
        contents.TransformInput = deserializeAws_json1_1TransformInput(output.TransformInput, context);
    }
    if (output.TransformOutput !== undefined && output.TransformOutput !== null) {
        contents.TransformOutput = deserializeAws_json1_1TransformOutput(output.TransformOutput, context);
    }
    if (output.TransformResources !== undefined &&
        output.TransformResources !== null) {
        contents.TransformResources = deserializeAws_json1_1TransformResources(output.TransformResources, context);
    }
    return contents;
};
const deserializeAws_json1_1TransformJobSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TransformJobSummary(entry, context));
};
const deserializeAws_json1_1TransformJobSummary = (output, context) => {
    let contents = {
        __type: "TransformJobSummary",
        CreationTime: undefined,
        FailureReason: undefined,
        LastModifiedTime: undefined,
        TransformEndTime: undefined,
        TransformJobArn: undefined,
        TransformJobName: undefined,
        TransformJobStatus: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.TransformEndTime !== undefined &&
        output.TransformEndTime !== null) {
        contents.TransformEndTime = new Date(Math.round(output.TransformEndTime * 1000));
    }
    if (output.TransformJobArn !== undefined && output.TransformJobArn !== null) {
        contents.TransformJobArn = output.TransformJobArn;
    }
    if (output.TransformJobName !== undefined &&
        output.TransformJobName !== null) {
        contents.TransformJobName = output.TransformJobName;
    }
    if (output.TransformJobStatus !== undefined &&
        output.TransformJobStatus !== null) {
        contents.TransformJobStatus = output.TransformJobStatus;
    }
    return contents;
};
const deserializeAws_json1_1TransformOutput = (output, context) => {
    let contents = {
        __type: "TransformOutput",
        Accept: undefined,
        AssembleWith: undefined,
        KmsKeyId: undefined,
        S3OutputPath: undefined
    };
    if (output.Accept !== undefined && output.Accept !== null) {
        contents.Accept = output.Accept;
    }
    if (output.AssembleWith !== undefined && output.AssembleWith !== null) {
        contents.AssembleWith = output.AssembleWith;
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.S3OutputPath !== undefined && output.S3OutputPath !== null) {
        contents.S3OutputPath = output.S3OutputPath;
    }
    return contents;
};
const deserializeAws_json1_1TransformResources = (output, context) => {
    let contents = {
        __type: "TransformResources",
        InstanceCount: undefined,
        InstanceType: undefined,
        VolumeKmsKeyId: undefined
    };
    if (output.InstanceCount !== undefined && output.InstanceCount !== null) {
        contents.InstanceCount = output.InstanceCount;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    return contents;
};
const deserializeAws_json1_1TransformS3DataSource = (output, context) => {
    let contents = {
        __type: "TransformS3DataSource",
        S3DataType: undefined,
        S3Uri: undefined
    };
    if (output.S3DataType !== undefined && output.S3DataType !== null) {
        contents.S3DataType = output.S3DataType;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1Trial = (output, context) => {
    let contents = {
        __type: "Trial",
        CreatedBy: undefined,
        CreationTime: undefined,
        DisplayName: undefined,
        ExperimentName: undefined,
        LastModifiedBy: undefined,
        LastModifiedTime: undefined,
        Source: undefined,
        Tags: undefined,
        TrialArn: undefined,
        TrialComponentSummaries: undefined,
        TrialName: undefined
    };
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = deserializeAws_json1_1UserContext(output.CreatedBy, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.ExperimentName !== undefined && output.ExperimentName !== null) {
        contents.ExperimentName = output.ExperimentName;
    }
    if (output.LastModifiedBy !== undefined && output.LastModifiedBy !== null) {
        contents.LastModifiedBy = deserializeAws_json1_1UserContext(output.LastModifiedBy, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = deserializeAws_json1_1TrialSource(output.Source, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    if (output.TrialArn !== undefined && output.TrialArn !== null) {
        contents.TrialArn = output.TrialArn;
    }
    if (output.TrialComponentSummaries !== undefined &&
        output.TrialComponentSummaries !== null) {
        contents.TrialComponentSummaries = deserializeAws_json1_1TrialComponentSimpleSummaries(output.TrialComponentSummaries, context);
    }
    if (output.TrialName !== undefined && output.TrialName !== null) {
        contents.TrialName = output.TrialName;
    }
    return contents;
};
const deserializeAws_json1_1TrialComponent = (output, context) => {
    let contents = {
        __type: "TrialComponent",
        CreatedBy: undefined,
        CreationTime: undefined,
        DisplayName: undefined,
        EndTime: undefined,
        InputArtifacts: undefined,
        LastModifiedBy: undefined,
        LastModifiedTime: undefined,
        Metrics: undefined,
        OutputArtifacts: undefined,
        Parameters: undefined,
        Parents: undefined,
        Source: undefined,
        SourceDetail: undefined,
        StartTime: undefined,
        Status: undefined,
        Tags: undefined,
        TrialComponentArn: undefined,
        TrialComponentName: undefined
    };
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = deserializeAws_json1_1UserContext(output.CreatedBy, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.InputArtifacts !== undefined && output.InputArtifacts !== null) {
        contents.InputArtifacts = deserializeAws_json1_1TrialComponentArtifacts(output.InputArtifacts, context);
    }
    if (output.LastModifiedBy !== undefined && output.LastModifiedBy !== null) {
        contents.LastModifiedBy = deserializeAws_json1_1UserContext(output.LastModifiedBy, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.Metrics !== undefined && output.Metrics !== null) {
        contents.Metrics = deserializeAws_json1_1TrialComponentMetricSummaries(output.Metrics, context);
    }
    if (output.OutputArtifacts !== undefined && output.OutputArtifacts !== null) {
        contents.OutputArtifacts = deserializeAws_json1_1TrialComponentArtifacts(output.OutputArtifacts, context);
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1TrialComponentParameters(output.Parameters, context);
    }
    if (output.Parents !== undefined && output.Parents !== null) {
        contents.Parents = deserializeAws_json1_1Parents(output.Parents, context);
    }
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = deserializeAws_json1_1TrialComponentSource(output.Source, context);
    }
    if (output.SourceDetail !== undefined && output.SourceDetail !== null) {
        contents.SourceDetail = deserializeAws_json1_1TrialComponentSourceDetail(output.SourceDetail, context);
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1TrialComponentStatus(output.Status, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    if (output.TrialComponentArn !== undefined &&
        output.TrialComponentArn !== null) {
        contents.TrialComponentArn = output.TrialComponentArn;
    }
    if (output.TrialComponentName !== undefined &&
        output.TrialComponentName !== null) {
        contents.TrialComponentName = output.TrialComponentName;
    }
    return contents;
};
const deserializeAws_json1_1TrialComponentArtifact = (output, context) => {
    let contents = {
        __type: "TrialComponentArtifact",
        MediaType: undefined,
        Value: undefined
    };
    if (output.MediaType !== undefined && output.MediaType !== null) {
        contents.MediaType = output.MediaType;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1TrialComponentArtifacts = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1TrialComponentArtifact(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1TrialComponentMetricSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TrialComponentMetricSummary(entry, context));
};
const deserializeAws_json1_1TrialComponentMetricSummary = (output, context) => {
    let contents = {
        __type: "TrialComponentMetricSummary",
        Avg: undefined,
        Count: undefined,
        Last: undefined,
        Max: undefined,
        MetricName: undefined,
        Min: undefined,
        SourceArn: undefined,
        StdDev: undefined,
        TimeStamp: undefined
    };
    if (output.Avg !== undefined && output.Avg !== null) {
        contents.Avg = output.Avg;
    }
    if (output.Count !== undefined && output.Count !== null) {
        contents.Count = output.Count;
    }
    if (output.Last !== undefined && output.Last !== null) {
        contents.Last = output.Last;
    }
    if (output.Max !== undefined && output.Max !== null) {
        contents.Max = output.Max;
    }
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Min !== undefined && output.Min !== null) {
        contents.Min = output.Min;
    }
    if (output.SourceArn !== undefined && output.SourceArn !== null) {
        contents.SourceArn = output.SourceArn;
    }
    if (output.StdDev !== undefined && output.StdDev !== null) {
        contents.StdDev = output.StdDev;
    }
    if (output.TimeStamp !== undefined && output.TimeStamp !== null) {
        contents.TimeStamp = new Date(Math.round(output.TimeStamp * 1000));
    }
    return contents;
};
const deserializeAws_json1_1TrialComponentParameterValue = (output, context) => {
    let contents = {
        __type: "TrialComponentParameterValue",
        NumberValue: undefined,
        StringValue: undefined
    };
    if (output.NumberValue !== undefined && output.NumberValue !== null) {
        contents.NumberValue = output.NumberValue;
    }
    if (output.StringValue !== undefined && output.StringValue !== null) {
        contents.StringValue = output.StringValue;
    }
    return contents;
};
const deserializeAws_json1_1TrialComponentParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1TrialComponentParameterValue(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1TrialComponentSimpleSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TrialComponentSimpleSummary(entry, context));
};
const deserializeAws_json1_1TrialComponentSimpleSummary = (output, context) => {
    let contents = {
        __type: "TrialComponentSimpleSummary",
        CreatedBy: undefined,
        CreationTime: undefined,
        TrialComponentArn: undefined,
        TrialComponentName: undefined,
        TrialComponentSource: undefined
    };
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = deserializeAws_json1_1UserContext(output.CreatedBy, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.TrialComponentArn !== undefined &&
        output.TrialComponentArn !== null) {
        contents.TrialComponentArn = output.TrialComponentArn;
    }
    if (output.TrialComponentName !== undefined &&
        output.TrialComponentName !== null) {
        contents.TrialComponentName = output.TrialComponentName;
    }
    if (output.TrialComponentSource !== undefined &&
        output.TrialComponentSource !== null) {
        contents.TrialComponentSource = deserializeAws_json1_1TrialComponentSource(output.TrialComponentSource, context);
    }
    return contents;
};
const deserializeAws_json1_1TrialComponentSource = (output, context) => {
    let contents = {
        __type: "TrialComponentSource",
        SourceArn: undefined,
        SourceType: undefined
    };
    if (output.SourceArn !== undefined && output.SourceArn !== null) {
        contents.SourceArn = output.SourceArn;
    }
    if (output.SourceType !== undefined && output.SourceType !== null) {
        contents.SourceType = output.SourceType;
    }
    return contents;
};
const deserializeAws_json1_1TrialComponentSourceDetail = (output, context) => {
    let contents = {
        __type: "TrialComponentSourceDetail",
        SourceArn: undefined,
        TrainingJob: undefined
    };
    if (output.SourceArn !== undefined && output.SourceArn !== null) {
        contents.SourceArn = output.SourceArn;
    }
    if (output.TrainingJob !== undefined && output.TrainingJob !== null) {
        contents.TrainingJob = deserializeAws_json1_1TrainingJob(output.TrainingJob, context);
    }
    return contents;
};
const deserializeAws_json1_1TrialComponentStatus = (output, context) => {
    let contents = {
        __type: "TrialComponentStatus",
        Message: undefined,
        PrimaryStatus: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.PrimaryStatus !== undefined && output.PrimaryStatus !== null) {
        contents.PrimaryStatus = output.PrimaryStatus;
    }
    return contents;
};
const deserializeAws_json1_1TrialComponentSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TrialComponentSummary(entry, context));
};
const deserializeAws_json1_1TrialComponentSummary = (output, context) => {
    let contents = {
        __type: "TrialComponentSummary",
        CreatedBy: undefined,
        CreationTime: undefined,
        DisplayName: undefined,
        EndTime: undefined,
        LastModifiedBy: undefined,
        LastModifiedTime: undefined,
        StartTime: undefined,
        Status: undefined,
        TrialComponentArn: undefined,
        TrialComponentName: undefined,
        TrialComponentSource: undefined
    };
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = deserializeAws_json1_1UserContext(output.CreatedBy, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.LastModifiedBy !== undefined && output.LastModifiedBy !== null) {
        contents.LastModifiedBy = deserializeAws_json1_1UserContext(output.LastModifiedBy, context);
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1TrialComponentStatus(output.Status, context);
    }
    if (output.TrialComponentArn !== undefined &&
        output.TrialComponentArn !== null) {
        contents.TrialComponentArn = output.TrialComponentArn;
    }
    if (output.TrialComponentName !== undefined &&
        output.TrialComponentName !== null) {
        contents.TrialComponentName = output.TrialComponentName;
    }
    if (output.TrialComponentSource !== undefined &&
        output.TrialComponentSource !== null) {
        contents.TrialComponentSource = deserializeAws_json1_1TrialComponentSource(output.TrialComponentSource, context);
    }
    return contents;
};
const deserializeAws_json1_1TrialSource = (output, context) => {
    let contents = {
        __type: "TrialSource",
        SourceArn: undefined,
        SourceType: undefined
    };
    if (output.SourceArn !== undefined && output.SourceArn !== null) {
        contents.SourceArn = output.SourceArn;
    }
    if (output.SourceType !== undefined && output.SourceType !== null) {
        contents.SourceType = output.SourceType;
    }
    return contents;
};
const deserializeAws_json1_1TrialSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TrialSummary(entry, context));
};
const deserializeAws_json1_1TrialSummary = (output, context) => {
    let contents = {
        __type: "TrialSummary",
        CreationTime: undefined,
        DisplayName: undefined,
        LastModifiedTime: undefined,
        TrialArn: undefined,
        TrialName: undefined,
        TrialSource: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.TrialArn !== undefined && output.TrialArn !== null) {
        contents.TrialArn = output.TrialArn;
    }
    if (output.TrialName !== undefined && output.TrialName !== null) {
        contents.TrialName = output.TrialName;
    }
    if (output.TrialSource !== undefined && output.TrialSource !== null) {
        contents.TrialSource = deserializeAws_json1_1TrialSource(output.TrialSource, context);
    }
    return contents;
};
const deserializeAws_json1_1TuningJobCompletionCriteria = (output, context) => {
    let contents = {
        __type: "TuningJobCompletionCriteria",
        TargetObjectiveMetricValue: undefined
    };
    if (output.TargetObjectiveMetricValue !== undefined &&
        output.TargetObjectiveMetricValue !== null) {
        contents.TargetObjectiveMetricValue = output.TargetObjectiveMetricValue;
    }
    return contents;
};
const deserializeAws_json1_1USD = (output, context) => {
    let contents = {
        __type: "USD",
        Cents: undefined,
        Dollars: undefined,
        TenthFractionsOfACent: undefined
    };
    if (output.Cents !== undefined && output.Cents !== null) {
        contents.Cents = output.Cents;
    }
    if (output.Dollars !== undefined && output.Dollars !== null) {
        contents.Dollars = output.Dollars;
    }
    if (output.TenthFractionsOfACent !== undefined &&
        output.TenthFractionsOfACent !== null) {
        contents.TenthFractionsOfACent = output.TenthFractionsOfACent;
    }
    return contents;
};
const deserializeAws_json1_1UiConfig = (output, context) => {
    let contents = {
        __type: "UiConfig",
        UiTemplateS3Uri: undefined
    };
    if (output.UiTemplateS3Uri !== undefined && output.UiTemplateS3Uri !== null) {
        contents.UiTemplateS3Uri = output.UiTemplateS3Uri;
    }
    return contents;
};
const deserializeAws_json1_1UiTemplateInfo = (output, context) => {
    let contents = {
        __type: "UiTemplateInfo",
        ContentSha256: undefined,
        Url: undefined
    };
    if (output.ContentSha256 !== undefined && output.ContentSha256 !== null) {
        contents.ContentSha256 = output.ContentSha256;
    }
    if (output.Url !== undefined && output.Url !== null) {
        contents.Url = output.Url;
    }
    return contents;
};
const deserializeAws_json1_1UpdateCodeRepositoryOutput = (output, context) => {
    let contents = {
        __type: "UpdateCodeRepositoryOutput",
        CodeRepositoryArn: undefined
    };
    if (output.CodeRepositoryArn !== undefined &&
        output.CodeRepositoryArn !== null) {
        contents.CodeRepositoryArn = output.CodeRepositoryArn;
    }
    return contents;
};
const deserializeAws_json1_1UpdateDomainResponse = (output, context) => {
    let contents = {
        __type: "UpdateDomainResponse",
        DomainArn: undefined
    };
    if (output.DomainArn !== undefined && output.DomainArn !== null) {
        contents.DomainArn = output.DomainArn;
    }
    return contents;
};
const deserializeAws_json1_1UpdateEndpointOutput = (output, context) => {
    let contents = {
        __type: "UpdateEndpointOutput",
        EndpointArn: undefined
    };
    if (output.EndpointArn !== undefined && output.EndpointArn !== null) {
        contents.EndpointArn = output.EndpointArn;
    }
    return contents;
};
const deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesOutput = (output, context) => {
    let contents = {
        __type: "UpdateEndpointWeightsAndCapacitiesOutput",
        EndpointArn: undefined
    };
    if (output.EndpointArn !== undefined && output.EndpointArn !== null) {
        contents.EndpointArn = output.EndpointArn;
    }
    return contents;
};
const deserializeAws_json1_1UpdateExperimentResponse = (output, context) => {
    let contents = {
        __type: "UpdateExperimentResponse",
        ExperimentArn: undefined
    };
    if (output.ExperimentArn !== undefined && output.ExperimentArn !== null) {
        contents.ExperimentArn = output.ExperimentArn;
    }
    return contents;
};
const deserializeAws_json1_1UpdateMonitoringScheduleResponse = (output, context) => {
    let contents = {
        __type: "UpdateMonitoringScheduleResponse",
        MonitoringScheduleArn: undefined
    };
    if (output.MonitoringScheduleArn !== undefined &&
        output.MonitoringScheduleArn !== null) {
        contents.MonitoringScheduleArn = output.MonitoringScheduleArn;
    }
    return contents;
};
const deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigOutput = (output, context) => {
    let contents = {
        __type: "UpdateNotebookInstanceLifecycleConfigOutput"
    };
    return contents;
};
const deserializeAws_json1_1UpdateNotebookInstanceOutput = (output, context) => {
    let contents = {
        __type: "UpdateNotebookInstanceOutput"
    };
    return contents;
};
const deserializeAws_json1_1UpdateTrialComponentResponse = (output, context) => {
    let contents = {
        __type: "UpdateTrialComponentResponse",
        TrialComponentArn: undefined
    };
    if (output.TrialComponentArn !== undefined &&
        output.TrialComponentArn !== null) {
        contents.TrialComponentArn = output.TrialComponentArn;
    }
    return contents;
};
const deserializeAws_json1_1UpdateTrialResponse = (output, context) => {
    let contents = {
        __type: "UpdateTrialResponse",
        TrialArn: undefined
    };
    if (output.TrialArn !== undefined && output.TrialArn !== null) {
        contents.TrialArn = output.TrialArn;
    }
    return contents;
};
const deserializeAws_json1_1UpdateUserProfileResponse = (output, context) => {
    let contents = {
        __type: "UpdateUserProfileResponse",
        UserProfileArn: undefined
    };
    if (output.UserProfileArn !== undefined && output.UserProfileArn !== null) {
        contents.UserProfileArn = output.UserProfileArn;
    }
    return contents;
};
const deserializeAws_json1_1UpdateWorkforceResponse = (output, context) => {
    let contents = {
        __type: "UpdateWorkforceResponse",
        Workforce: undefined
    };
    if (output.Workforce !== undefined && output.Workforce !== null) {
        contents.Workforce = deserializeAws_json1_1Workforce(output.Workforce, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateWorkteamResponse = (output, context) => {
    let contents = {
        __type: "UpdateWorkteamResponse",
        Workteam: undefined
    };
    if (output.Workteam !== undefined && output.Workteam !== null) {
        contents.Workteam = deserializeAws_json1_1Workteam(output.Workteam, context);
    }
    return contents;
};
const deserializeAws_json1_1UserContext = (output, context) => {
    let contents = {
        __type: "UserContext",
        DomainId: undefined,
        UserProfileArn: undefined,
        UserProfileName: undefined
    };
    if (output.DomainId !== undefined && output.DomainId !== null) {
        contents.DomainId = output.DomainId;
    }
    if (output.UserProfileArn !== undefined && output.UserProfileArn !== null) {
        contents.UserProfileArn = output.UserProfileArn;
    }
    if (output.UserProfileName !== undefined && output.UserProfileName !== null) {
        contents.UserProfileName = output.UserProfileName;
    }
    return contents;
};
const deserializeAws_json1_1UserProfileDetails = (output, context) => {
    let contents = {
        __type: "UserProfileDetails",
        CreationTime: undefined,
        DomainId: undefined,
        LastModifiedTime: undefined,
        Status: undefined,
        UserProfileName: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DomainId !== undefined && output.DomainId !== null) {
        contents.DomainId = output.DomainId;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UserProfileName !== undefined && output.UserProfileName !== null) {
        contents.UserProfileName = output.UserProfileName;
    }
    return contents;
};
const deserializeAws_json1_1UserProfileList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UserProfileDetails(entry, context));
};
const deserializeAws_json1_1UserSettings = (output, context) => {
    let contents = {
        __type: "UserSettings",
        ExecutionRole: undefined,
        JupyterServerAppSettings: undefined,
        KernelGatewayAppSettings: undefined,
        SecurityGroups: undefined,
        SharingSettings: undefined,
        TensorBoardAppSettings: undefined
    };
    if (output.ExecutionRole !== undefined && output.ExecutionRole !== null) {
        contents.ExecutionRole = output.ExecutionRole;
    }
    if (output.JupyterServerAppSettings !== undefined &&
        output.JupyterServerAppSettings !== null) {
        contents.JupyterServerAppSettings = deserializeAws_json1_1JupyterServerAppSettings(output.JupyterServerAppSettings, context);
    }
    if (output.KernelGatewayAppSettings !== undefined &&
        output.KernelGatewayAppSettings !== null) {
        contents.KernelGatewayAppSettings = deserializeAws_json1_1KernelGatewayAppSettings(output.KernelGatewayAppSettings, context);
    }
    if (output.SecurityGroups !== undefined && output.SecurityGroups !== null) {
        contents.SecurityGroups = deserializeAws_json1_1SecurityGroupIds(output.SecurityGroups, context);
    }
    if (output.SharingSettings !== undefined && output.SharingSettings !== null) {
        contents.SharingSettings = deserializeAws_json1_1SharingSettings(output.SharingSettings, context);
    }
    if (output.TensorBoardAppSettings !== undefined &&
        output.TensorBoardAppSettings !== null) {
        contents.TensorBoardAppSettings = deserializeAws_json1_1TensorBoardAppSettings(output.TensorBoardAppSettings, context);
    }
    return contents;
};
const deserializeAws_json1_1VpcConfig = (output, context) => {
    let contents = {
        __type: "VpcConfig",
        SecurityGroupIds: undefined,
        Subnets: undefined
    };
    if (output.SecurityGroupIds !== undefined &&
        output.SecurityGroupIds !== null) {
        contents.SecurityGroupIds = deserializeAws_json1_1VpcSecurityGroupIds(output.SecurityGroupIds, context);
    }
    if (output.Subnets !== undefined && output.Subnets !== null) {
        contents.Subnets = deserializeAws_json1_1Subnets(output.Subnets, context);
    }
    return contents;
};
const deserializeAws_json1_1VpcSecurityGroupIds = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Workforce = (output, context) => {
    let contents = {
        __type: "Workforce",
        LastUpdatedDate: undefined,
        SourceIpConfig: undefined,
        WorkforceArn: undefined,
        WorkforceName: undefined
    };
    if (output.LastUpdatedDate !== undefined && output.LastUpdatedDate !== null) {
        contents.LastUpdatedDate = new Date(Math.round(output.LastUpdatedDate * 1000));
    }
    if (output.SourceIpConfig !== undefined && output.SourceIpConfig !== null) {
        contents.SourceIpConfig = deserializeAws_json1_1SourceIpConfig(output.SourceIpConfig, context);
    }
    if (output.WorkforceArn !== undefined && output.WorkforceArn !== null) {
        contents.WorkforceArn = output.WorkforceArn;
    }
    if (output.WorkforceName !== undefined && output.WorkforceName !== null) {
        contents.WorkforceName = output.WorkforceName;
    }
    return contents;
};
const deserializeAws_json1_1Workteam = (output, context) => {
    let contents = {
        __type: "Workteam",
        CreateDate: undefined,
        Description: undefined,
        LastUpdatedDate: undefined,
        MemberDefinitions: undefined,
        NotificationConfiguration: undefined,
        ProductListingIds: undefined,
        SubDomain: undefined,
        WorkteamArn: undefined,
        WorkteamName: undefined
    };
    if (output.CreateDate !== undefined && output.CreateDate !== null) {
        contents.CreateDate = new Date(Math.round(output.CreateDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.LastUpdatedDate !== undefined && output.LastUpdatedDate !== null) {
        contents.LastUpdatedDate = new Date(Math.round(output.LastUpdatedDate * 1000));
    }
    if (output.MemberDefinitions !== undefined &&
        output.MemberDefinitions !== null) {
        contents.MemberDefinitions = deserializeAws_json1_1MemberDefinitions(output.MemberDefinitions, context);
    }
    if (output.NotificationConfiguration !== undefined &&
        output.NotificationConfiguration !== null) {
        contents.NotificationConfiguration = deserializeAws_json1_1NotificationConfiguration(output.NotificationConfiguration, context);
    }
    if (output.ProductListingIds !== undefined &&
        output.ProductListingIds !== null) {
        contents.ProductListingIds = deserializeAws_json1_1ProductListings(output.ProductListingIds, context);
    }
    if (output.SubDomain !== undefined && output.SubDomain !== null) {
        contents.SubDomain = output.SubDomain;
    }
    if (output.WorkteamArn !== undefined && output.WorkteamArn !== null) {
        contents.WorkteamArn = output.WorkteamArn;
    }
    if (output.WorkteamName !== undefined && output.WorkteamName !== null) {
        contents.WorkteamName = output.WorkteamName;
    }
    return contents;
};
const deserializeAws_json1_1Workteams = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Workteam(entry, context));
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    httpHeaders: output.headers,
    requestId: output.headers["x-amzn-requestid"]
});
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody, context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return (context.streamCollector(streamBody) || Promise.resolve(new Uint8Array()));
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => {
    return collectBody(streamBody, context).then(body => context.utf8Encoder(body));
};
const buildHttpRpcRequest = (context, headers, path, resolvedHostname, body) => {
    const contents = Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", path: path, headers: headers });
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
//# sourceMappingURL=Aws_json1_1.js.map