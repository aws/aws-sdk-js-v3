"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcknowledgeJobInput;
(function (AcknowledgeJobInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcknowledgeJobInput");
    }
    AcknowledgeJobInput.isa = isa;
})(AcknowledgeJobInput = exports.AcknowledgeJobInput || (exports.AcknowledgeJobInput = {}));
var AcknowledgeJobOutput;
(function (AcknowledgeJobOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcknowledgeJobOutput");
    }
    AcknowledgeJobOutput.isa = isa;
})(AcknowledgeJobOutput = exports.AcknowledgeJobOutput || (exports.AcknowledgeJobOutput = {}));
var AcknowledgeThirdPartyJobInput;
(function (AcknowledgeThirdPartyJobInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcknowledgeThirdPartyJobInput");
    }
    AcknowledgeThirdPartyJobInput.isa = isa;
})(AcknowledgeThirdPartyJobInput = exports.AcknowledgeThirdPartyJobInput || (exports.AcknowledgeThirdPartyJobInput = {}));
var AcknowledgeThirdPartyJobOutput;
(function (AcknowledgeThirdPartyJobOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcknowledgeThirdPartyJobOutput");
    }
    AcknowledgeThirdPartyJobOutput.isa = isa;
})(AcknowledgeThirdPartyJobOutput = exports.AcknowledgeThirdPartyJobOutput || (exports.AcknowledgeThirdPartyJobOutput = {}));
var ActionConfigurationProperty;
(function (ActionConfigurationProperty) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionConfigurationProperty");
    }
    ActionConfigurationProperty.isa = isa;
})(ActionConfigurationProperty = exports.ActionConfigurationProperty || (exports.ActionConfigurationProperty = {}));
var ActionConfigurationPropertyType;
(function (ActionConfigurationPropertyType) {
    ActionConfigurationPropertyType["Boolean"] = "Boolean";
    ActionConfigurationPropertyType["Number"] = "Number";
    ActionConfigurationPropertyType["String"] = "String";
})(ActionConfigurationPropertyType = exports.ActionConfigurationPropertyType || (exports.ActionConfigurationPropertyType = {}));
var ActionDeclaration;
(function (ActionDeclaration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionDeclaration");
    }
    ActionDeclaration.isa = isa;
})(ActionDeclaration = exports.ActionDeclaration || (exports.ActionDeclaration = {}));
var ActionExecution;
(function (ActionExecution) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionExecution");
    }
    ActionExecution.isa = isa;
})(ActionExecution = exports.ActionExecution || (exports.ActionExecution = {}));
var ActionExecutionDetail;
(function (ActionExecutionDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionExecutionDetail");
    }
    ActionExecutionDetail.isa = isa;
})(ActionExecutionDetail = exports.ActionExecutionDetail || (exports.ActionExecutionDetail = {}));
var ActionExecutionFilter;
(function (ActionExecutionFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionExecutionFilter");
    }
    ActionExecutionFilter.isa = isa;
})(ActionExecutionFilter = exports.ActionExecutionFilter || (exports.ActionExecutionFilter = {}));
var ActionExecutionInput;
(function (ActionExecutionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionExecutionInput");
    }
    ActionExecutionInput.isa = isa;
})(ActionExecutionInput = exports.ActionExecutionInput || (exports.ActionExecutionInput = {}));
var ActionExecutionOutput;
(function (ActionExecutionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionExecutionOutput");
    }
    ActionExecutionOutput.isa = isa;
})(ActionExecutionOutput = exports.ActionExecutionOutput || (exports.ActionExecutionOutput = {}));
var ActionExecutionResult;
(function (ActionExecutionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionExecutionResult");
    }
    ActionExecutionResult.isa = isa;
})(ActionExecutionResult = exports.ActionExecutionResult || (exports.ActionExecutionResult = {}));
var ActionExecutionStatus;
(function (ActionExecutionStatus) {
    ActionExecutionStatus["Abandoned"] = "Abandoned";
    ActionExecutionStatus["Failed"] = "Failed";
    ActionExecutionStatus["InProgress"] = "InProgress";
    ActionExecutionStatus["Succeeded"] = "Succeeded";
})(ActionExecutionStatus = exports.ActionExecutionStatus || (exports.ActionExecutionStatus = {}));
var ActionNotFoundException;
(function (ActionNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionNotFoundException");
    }
    ActionNotFoundException.isa = isa;
})(ActionNotFoundException = exports.ActionNotFoundException || (exports.ActionNotFoundException = {}));
var ActionRevision;
(function (ActionRevision) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionRevision");
    }
    ActionRevision.isa = isa;
})(ActionRevision = exports.ActionRevision || (exports.ActionRevision = {}));
var ActionState;
(function (ActionState) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionState");
    }
    ActionState.isa = isa;
})(ActionState = exports.ActionState || (exports.ActionState = {}));
var ActionType;
(function (ActionType) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionType");
    }
    ActionType.isa = isa;
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var ActionTypeSettings;
(function (ActionTypeSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionTypeSettings");
    }
    ActionTypeSettings.isa = isa;
})(ActionTypeSettings = exports.ActionTypeSettings || (exports.ActionTypeSettings = {}));
var ApprovalAlreadyCompletedException;
(function (ApprovalAlreadyCompletedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalAlreadyCompletedException");
    }
    ApprovalAlreadyCompletedException.isa = isa;
})(ApprovalAlreadyCompletedException = exports.ApprovalAlreadyCompletedException || (exports.ApprovalAlreadyCompletedException = {}));
var ApprovalResult;
(function (ApprovalResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApprovalResult");
    }
    ApprovalResult.isa = isa;
})(ApprovalResult = exports.ApprovalResult || (exports.ApprovalResult = {}));
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus["Approved"] = "Approved";
    ApprovalStatus["Rejected"] = "Rejected";
})(ApprovalStatus = exports.ApprovalStatus || (exports.ApprovalStatus = {}));
var ArtifactDetail;
(function (ArtifactDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ArtifactDetail");
    }
    ArtifactDetail.isa = isa;
})(ArtifactDetail = exports.ArtifactDetail || (exports.ArtifactDetail = {}));
var ArtifactDetails;
(function (ArtifactDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "ArtifactDetails");
    }
    ArtifactDetails.isa = isa;
})(ArtifactDetails = exports.ArtifactDetails || (exports.ArtifactDetails = {}));
var ArtifactRevision;
(function (ArtifactRevision) {
    function isa(o) {
        return smithy_client_1.isa(o, "ArtifactRevision");
    }
    ArtifactRevision.isa = isa;
})(ArtifactRevision = exports.ArtifactRevision || (exports.ArtifactRevision = {}));
var ArtifactStore;
(function (ArtifactStore) {
    function isa(o) {
        return smithy_client_1.isa(o, "ArtifactStore");
    }
    ArtifactStore.isa = isa;
})(ArtifactStore = exports.ArtifactStore || (exports.ArtifactStore = {}));
var ArtifactStoreType;
(function (ArtifactStoreType) {
    ArtifactStoreType["S3"] = "S3";
})(ArtifactStoreType = exports.ArtifactStoreType || (exports.ArtifactStoreType = {}));
var BlockerDeclaration;
(function (BlockerDeclaration) {
    function isa(o) {
        return smithy_client_1.isa(o, "BlockerDeclaration");
    }
    BlockerDeclaration.isa = isa;
})(BlockerDeclaration = exports.BlockerDeclaration || (exports.BlockerDeclaration = {}));
var BlockerType;
(function (BlockerType) {
    BlockerType["Schedule"] = "Schedule";
})(BlockerType = exports.BlockerType || (exports.BlockerType = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var CreateCustomActionTypeInput;
(function (CreateCustomActionTypeInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCustomActionTypeInput");
    }
    CreateCustomActionTypeInput.isa = isa;
})(CreateCustomActionTypeInput = exports.CreateCustomActionTypeInput || (exports.CreateCustomActionTypeInput = {}));
var CreateCustomActionTypeOutput;
(function (CreateCustomActionTypeOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCustomActionTypeOutput");
    }
    CreateCustomActionTypeOutput.isa = isa;
})(CreateCustomActionTypeOutput = exports.CreateCustomActionTypeOutput || (exports.CreateCustomActionTypeOutput = {}));
var CreatePipelineInput;
(function (CreatePipelineInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePipelineInput");
    }
    CreatePipelineInput.isa = isa;
})(CreatePipelineInput = exports.CreatePipelineInput || (exports.CreatePipelineInput = {}));
var CreatePipelineOutput;
(function (CreatePipelineOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePipelineOutput");
    }
    CreatePipelineOutput.isa = isa;
})(CreatePipelineOutput = exports.CreatePipelineOutput || (exports.CreatePipelineOutput = {}));
var DeleteCustomActionTypeInput;
(function (DeleteCustomActionTypeInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCustomActionTypeInput");
    }
    DeleteCustomActionTypeInput.isa = isa;
})(DeleteCustomActionTypeInput = exports.DeleteCustomActionTypeInput || (exports.DeleteCustomActionTypeInput = {}));
var DeletePipelineInput;
(function (DeletePipelineInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePipelineInput");
    }
    DeletePipelineInput.isa = isa;
})(DeletePipelineInput = exports.DeletePipelineInput || (exports.DeletePipelineInput = {}));
var DeleteWebhookInput;
(function (DeleteWebhookInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWebhookInput");
    }
    DeleteWebhookInput.isa = isa;
})(DeleteWebhookInput = exports.DeleteWebhookInput || (exports.DeleteWebhookInput = {}));
var DeleteWebhookOutput;
(function (DeleteWebhookOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWebhookOutput");
    }
    DeleteWebhookOutput.isa = isa;
})(DeleteWebhookOutput = exports.DeleteWebhookOutput || (exports.DeleteWebhookOutput = {}));
var DeregisterWebhookWithThirdPartyInput;
(function (DeregisterWebhookWithThirdPartyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterWebhookWithThirdPartyInput");
    }
    DeregisterWebhookWithThirdPartyInput.isa = isa;
})(DeregisterWebhookWithThirdPartyInput = exports.DeregisterWebhookWithThirdPartyInput || (exports.DeregisterWebhookWithThirdPartyInput = {}));
var DeregisterWebhookWithThirdPartyOutput;
(function (DeregisterWebhookWithThirdPartyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterWebhookWithThirdPartyOutput");
    }
    DeregisterWebhookWithThirdPartyOutput.isa = isa;
})(DeregisterWebhookWithThirdPartyOutput = exports.DeregisterWebhookWithThirdPartyOutput || (exports.DeregisterWebhookWithThirdPartyOutput = {}));
var DisableStageTransitionInput;
(function (DisableStageTransitionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableStageTransitionInput");
    }
    DisableStageTransitionInput.isa = isa;
})(DisableStageTransitionInput = exports.DisableStageTransitionInput || (exports.DisableStageTransitionInput = {}));
var DuplicatedStopRequestException;
(function (DuplicatedStopRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicatedStopRequestException");
    }
    DuplicatedStopRequestException.isa = isa;
})(DuplicatedStopRequestException = exports.DuplicatedStopRequestException || (exports.DuplicatedStopRequestException = {}));
var EnableStageTransitionInput;
(function (EnableStageTransitionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableStageTransitionInput");
    }
    EnableStageTransitionInput.isa = isa;
})(EnableStageTransitionInput = exports.EnableStageTransitionInput || (exports.EnableStageTransitionInput = {}));
var ErrorDetails;
(function (ErrorDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "ErrorDetails");
    }
    ErrorDetails.isa = isa;
})(ErrorDetails = exports.ErrorDetails || (exports.ErrorDetails = {}));
var ExecutionTrigger;
(function (ExecutionTrigger) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExecutionTrigger");
    }
    ExecutionTrigger.isa = isa;
})(ExecutionTrigger = exports.ExecutionTrigger || (exports.ExecutionTrigger = {}));
var GetJobDetailsInput;
(function (GetJobDetailsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobDetailsInput");
    }
    GetJobDetailsInput.isa = isa;
})(GetJobDetailsInput = exports.GetJobDetailsInput || (exports.GetJobDetailsInput = {}));
var GetJobDetailsOutput;
(function (GetJobDetailsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobDetailsOutput");
    }
    GetJobDetailsOutput.isa = isa;
})(GetJobDetailsOutput = exports.GetJobDetailsOutput || (exports.GetJobDetailsOutput = {}));
var GetPipelineExecutionInput;
(function (GetPipelineExecutionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPipelineExecutionInput");
    }
    GetPipelineExecutionInput.isa = isa;
})(GetPipelineExecutionInput = exports.GetPipelineExecutionInput || (exports.GetPipelineExecutionInput = {}));
var GetPipelineExecutionOutput;
(function (GetPipelineExecutionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPipelineExecutionOutput");
    }
    GetPipelineExecutionOutput.isa = isa;
})(GetPipelineExecutionOutput = exports.GetPipelineExecutionOutput || (exports.GetPipelineExecutionOutput = {}));
var GetPipelineInput;
(function (GetPipelineInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPipelineInput");
    }
    GetPipelineInput.isa = isa;
})(GetPipelineInput = exports.GetPipelineInput || (exports.GetPipelineInput = {}));
var GetPipelineOutput;
(function (GetPipelineOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPipelineOutput");
    }
    GetPipelineOutput.isa = isa;
})(GetPipelineOutput = exports.GetPipelineOutput || (exports.GetPipelineOutput = {}));
var GetPipelineStateInput;
(function (GetPipelineStateInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPipelineStateInput");
    }
    GetPipelineStateInput.isa = isa;
})(GetPipelineStateInput = exports.GetPipelineStateInput || (exports.GetPipelineStateInput = {}));
var GetPipelineStateOutput;
(function (GetPipelineStateOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPipelineStateOutput");
    }
    GetPipelineStateOutput.isa = isa;
})(GetPipelineStateOutput = exports.GetPipelineStateOutput || (exports.GetPipelineStateOutput = {}));
var GetThirdPartyJobDetailsInput;
(function (GetThirdPartyJobDetailsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetThirdPartyJobDetailsInput");
    }
    GetThirdPartyJobDetailsInput.isa = isa;
})(GetThirdPartyJobDetailsInput = exports.GetThirdPartyJobDetailsInput || (exports.GetThirdPartyJobDetailsInput = {}));
var GetThirdPartyJobDetailsOutput;
(function (GetThirdPartyJobDetailsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetThirdPartyJobDetailsOutput");
    }
    GetThirdPartyJobDetailsOutput.isa = isa;
})(GetThirdPartyJobDetailsOutput = exports.GetThirdPartyJobDetailsOutput || (exports.GetThirdPartyJobDetailsOutput = {}));
var InputArtifact;
(function (InputArtifact) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputArtifact");
    }
    InputArtifact.isa = isa;
})(InputArtifact = exports.InputArtifact || (exports.InputArtifact = {}));
var InvalidActionDeclarationException;
(function (InvalidActionDeclarationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidActionDeclarationException");
    }
    InvalidActionDeclarationException.isa = isa;
})(InvalidActionDeclarationException = exports.InvalidActionDeclarationException || (exports.InvalidActionDeclarationException = {}));
var InvalidApprovalTokenException;
(function (InvalidApprovalTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidApprovalTokenException");
    }
    InvalidApprovalTokenException.isa = isa;
})(InvalidApprovalTokenException = exports.InvalidApprovalTokenException || (exports.InvalidApprovalTokenException = {}));
var InvalidArnException;
(function (InvalidArnException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidArnException");
    }
    InvalidArnException.isa = isa;
})(InvalidArnException = exports.InvalidArnException || (exports.InvalidArnException = {}));
var InvalidBlockerDeclarationException;
(function (InvalidBlockerDeclarationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidBlockerDeclarationException");
    }
    InvalidBlockerDeclarationException.isa = isa;
})(InvalidBlockerDeclarationException = exports.InvalidBlockerDeclarationException || (exports.InvalidBlockerDeclarationException = {}));
var InvalidClientTokenException;
(function (InvalidClientTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidClientTokenException");
    }
    InvalidClientTokenException.isa = isa;
})(InvalidClientTokenException = exports.InvalidClientTokenException || (exports.InvalidClientTokenException = {}));
var InvalidJobException;
(function (InvalidJobException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidJobException");
    }
    InvalidJobException.isa = isa;
})(InvalidJobException = exports.InvalidJobException || (exports.InvalidJobException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextTokenException");
    }
    InvalidNextTokenException.isa = isa;
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidStageDeclarationException;
(function (InvalidStageDeclarationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidStageDeclarationException");
    }
    InvalidStageDeclarationException.isa = isa;
})(InvalidStageDeclarationException = exports.InvalidStageDeclarationException || (exports.InvalidStageDeclarationException = {}));
var InvalidStructureException;
(function (InvalidStructureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidStructureException");
    }
    InvalidStructureException.isa = isa;
})(InvalidStructureException = exports.InvalidStructureException || (exports.InvalidStructureException = {}));
var InvalidTagsException;
(function (InvalidTagsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTagsException");
    }
    InvalidTagsException.isa = isa;
})(InvalidTagsException = exports.InvalidTagsException || (exports.InvalidTagsException = {}));
var InvalidWebhookAuthenticationParametersException;
(function (InvalidWebhookAuthenticationParametersException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidWebhookAuthenticationParametersException");
    }
    InvalidWebhookAuthenticationParametersException.isa = isa;
})(InvalidWebhookAuthenticationParametersException = exports.InvalidWebhookAuthenticationParametersException || (exports.InvalidWebhookAuthenticationParametersException = {}));
var InvalidWebhookFilterPatternException;
(function (InvalidWebhookFilterPatternException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidWebhookFilterPatternException");
    }
    InvalidWebhookFilterPatternException.isa = isa;
})(InvalidWebhookFilterPatternException = exports.InvalidWebhookFilterPatternException || (exports.InvalidWebhookFilterPatternException = {}));
var Job;
(function (Job) {
    function isa(o) {
        return smithy_client_1.isa(o, "Job");
    }
    Job.isa = isa;
})(Job = exports.Job || (exports.Job = {}));
var JobData;
(function (JobData) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobData");
    }
    JobData.isa = isa;
})(JobData = exports.JobData || (exports.JobData = {}));
var JobDetails;
(function (JobDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobDetails");
    }
    JobDetails.isa = isa;
})(JobDetails = exports.JobDetails || (exports.JobDetails = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListActionExecutionsInput;
(function (ListActionExecutionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListActionExecutionsInput");
    }
    ListActionExecutionsInput.isa = isa;
})(ListActionExecutionsInput = exports.ListActionExecutionsInput || (exports.ListActionExecutionsInput = {}));
var ListActionExecutionsOutput;
(function (ListActionExecutionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListActionExecutionsOutput");
    }
    ListActionExecutionsOutput.isa = isa;
})(ListActionExecutionsOutput = exports.ListActionExecutionsOutput || (exports.ListActionExecutionsOutput = {}));
var ListActionTypesInput;
(function (ListActionTypesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListActionTypesInput");
    }
    ListActionTypesInput.isa = isa;
})(ListActionTypesInput = exports.ListActionTypesInput || (exports.ListActionTypesInput = {}));
var ListActionTypesOutput;
(function (ListActionTypesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListActionTypesOutput");
    }
    ListActionTypesOutput.isa = isa;
})(ListActionTypesOutput = exports.ListActionTypesOutput || (exports.ListActionTypesOutput = {}));
var ListPipelineExecutionsInput;
(function (ListPipelineExecutionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPipelineExecutionsInput");
    }
    ListPipelineExecutionsInput.isa = isa;
})(ListPipelineExecutionsInput = exports.ListPipelineExecutionsInput || (exports.ListPipelineExecutionsInput = {}));
var ListPipelineExecutionsOutput;
(function (ListPipelineExecutionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPipelineExecutionsOutput");
    }
    ListPipelineExecutionsOutput.isa = isa;
})(ListPipelineExecutionsOutput = exports.ListPipelineExecutionsOutput || (exports.ListPipelineExecutionsOutput = {}));
var ListPipelinesInput;
(function (ListPipelinesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPipelinesInput");
    }
    ListPipelinesInput.isa = isa;
})(ListPipelinesInput = exports.ListPipelinesInput || (exports.ListPipelinesInput = {}));
var ListPipelinesOutput;
(function (ListPipelinesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPipelinesOutput");
    }
    ListPipelinesOutput.isa = isa;
})(ListPipelinesOutput = exports.ListPipelinesOutput || (exports.ListPipelinesOutput = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceInput");
    }
    ListTagsForResourceInput.isa = isa;
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceOutput");
    }
    ListTagsForResourceOutput.isa = isa;
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var ListWebhookItem;
(function (ListWebhookItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWebhookItem");
    }
    ListWebhookItem.isa = isa;
})(ListWebhookItem = exports.ListWebhookItem || (exports.ListWebhookItem = {}));
var ListWebhooksInput;
(function (ListWebhooksInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWebhooksInput");
    }
    ListWebhooksInput.isa = isa;
})(ListWebhooksInput = exports.ListWebhooksInput || (exports.ListWebhooksInput = {}));
var ListWebhooksOutput;
(function (ListWebhooksOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWebhooksOutput");
    }
    ListWebhooksOutput.isa = isa;
})(ListWebhooksOutput = exports.ListWebhooksOutput || (exports.ListWebhooksOutput = {}));
var NotLatestPipelineExecutionException;
(function (NotLatestPipelineExecutionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotLatestPipelineExecutionException");
    }
    NotLatestPipelineExecutionException.isa = isa;
})(NotLatestPipelineExecutionException = exports.NotLatestPipelineExecutionException || (exports.NotLatestPipelineExecutionException = {}));
var OutputArtifact;
(function (OutputArtifact) {
    function isa(o) {
        return smithy_client_1.isa(o, "OutputArtifact");
    }
    OutputArtifact.isa = isa;
})(OutputArtifact = exports.OutputArtifact || (exports.OutputArtifact = {}));
var PipelineDeclaration;
(function (PipelineDeclaration) {
    function isa(o) {
        return smithy_client_1.isa(o, "PipelineDeclaration");
    }
    PipelineDeclaration.isa = isa;
})(PipelineDeclaration = exports.PipelineDeclaration || (exports.PipelineDeclaration = {}));
var PipelineExecution;
(function (PipelineExecution) {
    function isa(o) {
        return smithy_client_1.isa(o, "PipelineExecution");
    }
    PipelineExecution.isa = isa;
})(PipelineExecution = exports.PipelineExecution || (exports.PipelineExecution = {}));
var PipelineExecutionNotFoundException;
(function (PipelineExecutionNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PipelineExecutionNotFoundException");
    }
    PipelineExecutionNotFoundException.isa = isa;
})(PipelineExecutionNotFoundException = exports.PipelineExecutionNotFoundException || (exports.PipelineExecutionNotFoundException = {}));
var PipelineExecutionNotStoppableException;
(function (PipelineExecutionNotStoppableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PipelineExecutionNotStoppableException");
    }
    PipelineExecutionNotStoppableException.isa = isa;
})(PipelineExecutionNotStoppableException = exports.PipelineExecutionNotStoppableException || (exports.PipelineExecutionNotStoppableException = {}));
var PipelineExecutionStatus;
(function (PipelineExecutionStatus) {
    PipelineExecutionStatus["Failed"] = "Failed";
    PipelineExecutionStatus["InProgress"] = "InProgress";
    PipelineExecutionStatus["Stopped"] = "Stopped";
    PipelineExecutionStatus["Stopping"] = "Stopping";
    PipelineExecutionStatus["Succeeded"] = "Succeeded";
    PipelineExecutionStatus["Superseded"] = "Superseded";
})(PipelineExecutionStatus = exports.PipelineExecutionStatus || (exports.PipelineExecutionStatus = {}));
var PipelineExecutionSummary;
(function (PipelineExecutionSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "PipelineExecutionSummary");
    }
    PipelineExecutionSummary.isa = isa;
})(PipelineExecutionSummary = exports.PipelineExecutionSummary || (exports.PipelineExecutionSummary = {}));
var PipelineMetadata;
(function (PipelineMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "PipelineMetadata");
    }
    PipelineMetadata.isa = isa;
})(PipelineMetadata = exports.PipelineMetadata || (exports.PipelineMetadata = {}));
var PipelineNameInUseException;
(function (PipelineNameInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PipelineNameInUseException");
    }
    PipelineNameInUseException.isa = isa;
})(PipelineNameInUseException = exports.PipelineNameInUseException || (exports.PipelineNameInUseException = {}));
var PipelineNotFoundException;
(function (PipelineNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PipelineNotFoundException");
    }
    PipelineNotFoundException.isa = isa;
})(PipelineNotFoundException = exports.PipelineNotFoundException || (exports.PipelineNotFoundException = {}));
var PipelineSummary;
(function (PipelineSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "PipelineSummary");
    }
    PipelineSummary.isa = isa;
})(PipelineSummary = exports.PipelineSummary || (exports.PipelineSummary = {}));
var PipelineVersionNotFoundException;
(function (PipelineVersionNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PipelineVersionNotFoundException");
    }
    PipelineVersionNotFoundException.isa = isa;
})(PipelineVersionNotFoundException = exports.PipelineVersionNotFoundException || (exports.PipelineVersionNotFoundException = {}));
var PollForJobsInput;
(function (PollForJobsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PollForJobsInput");
    }
    PollForJobsInput.isa = isa;
})(PollForJobsInput = exports.PollForJobsInput || (exports.PollForJobsInput = {}));
var PollForJobsOutput;
(function (PollForJobsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PollForJobsOutput");
    }
    PollForJobsOutput.isa = isa;
})(PollForJobsOutput = exports.PollForJobsOutput || (exports.PollForJobsOutput = {}));
var PollForThirdPartyJobsInput;
(function (PollForThirdPartyJobsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PollForThirdPartyJobsInput");
    }
    PollForThirdPartyJobsInput.isa = isa;
})(PollForThirdPartyJobsInput = exports.PollForThirdPartyJobsInput || (exports.PollForThirdPartyJobsInput = {}));
var PollForThirdPartyJobsOutput;
(function (PollForThirdPartyJobsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PollForThirdPartyJobsOutput");
    }
    PollForThirdPartyJobsOutput.isa = isa;
})(PollForThirdPartyJobsOutput = exports.PollForThirdPartyJobsOutput || (exports.PollForThirdPartyJobsOutput = {}));
var PutActionRevisionInput;
(function (PutActionRevisionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutActionRevisionInput");
    }
    PutActionRevisionInput.isa = isa;
})(PutActionRevisionInput = exports.PutActionRevisionInput || (exports.PutActionRevisionInput = {}));
var PutActionRevisionOutput;
(function (PutActionRevisionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutActionRevisionOutput");
    }
    PutActionRevisionOutput.isa = isa;
})(PutActionRevisionOutput = exports.PutActionRevisionOutput || (exports.PutActionRevisionOutput = {}));
var PutApprovalResultInput;
(function (PutApprovalResultInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutApprovalResultInput");
    }
    PutApprovalResultInput.isa = isa;
})(PutApprovalResultInput = exports.PutApprovalResultInput || (exports.PutApprovalResultInput = {}));
var PutApprovalResultOutput;
(function (PutApprovalResultOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutApprovalResultOutput");
    }
    PutApprovalResultOutput.isa = isa;
})(PutApprovalResultOutput = exports.PutApprovalResultOutput || (exports.PutApprovalResultOutput = {}));
var PutJobFailureResultInput;
(function (PutJobFailureResultInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutJobFailureResultInput");
    }
    PutJobFailureResultInput.isa = isa;
})(PutJobFailureResultInput = exports.PutJobFailureResultInput || (exports.PutJobFailureResultInput = {}));
var PutJobSuccessResultInput;
(function (PutJobSuccessResultInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutJobSuccessResultInput");
    }
    PutJobSuccessResultInput.isa = isa;
})(PutJobSuccessResultInput = exports.PutJobSuccessResultInput || (exports.PutJobSuccessResultInput = {}));
var PutThirdPartyJobFailureResultInput;
(function (PutThirdPartyJobFailureResultInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutThirdPartyJobFailureResultInput");
    }
    PutThirdPartyJobFailureResultInput.isa = isa;
})(PutThirdPartyJobFailureResultInput = exports.PutThirdPartyJobFailureResultInput || (exports.PutThirdPartyJobFailureResultInput = {}));
var PutThirdPartyJobSuccessResultInput;
(function (PutThirdPartyJobSuccessResultInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutThirdPartyJobSuccessResultInput");
    }
    PutThirdPartyJobSuccessResultInput.isa = isa;
})(PutThirdPartyJobSuccessResultInput = exports.PutThirdPartyJobSuccessResultInput || (exports.PutThirdPartyJobSuccessResultInput = {}));
var PutWebhookInput;
(function (PutWebhookInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutWebhookInput");
    }
    PutWebhookInput.isa = isa;
})(PutWebhookInput = exports.PutWebhookInput || (exports.PutWebhookInput = {}));
var PutWebhookOutput;
(function (PutWebhookOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutWebhookOutput");
    }
    PutWebhookOutput.isa = isa;
})(PutWebhookOutput = exports.PutWebhookOutput || (exports.PutWebhookOutput = {}));
var RegisterWebhookWithThirdPartyInput;
(function (RegisterWebhookWithThirdPartyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterWebhookWithThirdPartyInput");
    }
    RegisterWebhookWithThirdPartyInput.isa = isa;
})(RegisterWebhookWithThirdPartyInput = exports.RegisterWebhookWithThirdPartyInput || (exports.RegisterWebhookWithThirdPartyInput = {}));
var RegisterWebhookWithThirdPartyOutput;
(function (RegisterWebhookWithThirdPartyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterWebhookWithThirdPartyOutput");
    }
    RegisterWebhookWithThirdPartyOutput.isa = isa;
})(RegisterWebhookWithThirdPartyOutput = exports.RegisterWebhookWithThirdPartyOutput || (exports.RegisterWebhookWithThirdPartyOutput = {}));
var RetryStageExecutionInput;
(function (RetryStageExecutionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RetryStageExecutionInput");
    }
    RetryStageExecutionInput.isa = isa;
})(RetryStageExecutionInput = exports.RetryStageExecutionInput || (exports.RetryStageExecutionInput = {}));
var RetryStageExecutionOutput;
(function (RetryStageExecutionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RetryStageExecutionOutput");
    }
    RetryStageExecutionOutput.isa = isa;
})(RetryStageExecutionOutput = exports.RetryStageExecutionOutput || (exports.RetryStageExecutionOutput = {}));
var S3Location;
(function (S3Location) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Location");
    }
    S3Location.isa = isa;
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var SourceRevision;
(function (SourceRevision) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceRevision");
    }
    SourceRevision.isa = isa;
})(SourceRevision = exports.SourceRevision || (exports.SourceRevision = {}));
var StageDeclaration;
(function (StageDeclaration) {
    function isa(o) {
        return smithy_client_1.isa(o, "StageDeclaration");
    }
    StageDeclaration.isa = isa;
})(StageDeclaration = exports.StageDeclaration || (exports.StageDeclaration = {}));
var StageExecution;
(function (StageExecution) {
    function isa(o) {
        return smithy_client_1.isa(o, "StageExecution");
    }
    StageExecution.isa = isa;
})(StageExecution = exports.StageExecution || (exports.StageExecution = {}));
var StageExecutionStatus;
(function (StageExecutionStatus) {
    StageExecutionStatus["Failed"] = "Failed";
    StageExecutionStatus["InProgress"] = "InProgress";
    StageExecutionStatus["Stopped"] = "Stopped";
    StageExecutionStatus["Stopping"] = "Stopping";
    StageExecutionStatus["Succeeded"] = "Succeeded";
})(StageExecutionStatus = exports.StageExecutionStatus || (exports.StageExecutionStatus = {}));
var StageNotFoundException;
(function (StageNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "StageNotFoundException");
    }
    StageNotFoundException.isa = isa;
})(StageNotFoundException = exports.StageNotFoundException || (exports.StageNotFoundException = {}));
var StageNotRetryableException;
(function (StageNotRetryableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "StageNotRetryableException");
    }
    StageNotRetryableException.isa = isa;
})(StageNotRetryableException = exports.StageNotRetryableException || (exports.StageNotRetryableException = {}));
var StageRetryMode;
(function (StageRetryMode) {
    StageRetryMode["FAILED_ACTIONS"] = "FAILED_ACTIONS";
})(StageRetryMode = exports.StageRetryMode || (exports.StageRetryMode = {}));
var StageState;
(function (StageState) {
    function isa(o) {
        return smithy_client_1.isa(o, "StageState");
    }
    StageState.isa = isa;
})(StageState = exports.StageState || (exports.StageState = {}));
var StageTransitionType;
(function (StageTransitionType) {
    StageTransitionType["Inbound"] = "Inbound";
    StageTransitionType["Outbound"] = "Outbound";
})(StageTransitionType = exports.StageTransitionType || (exports.StageTransitionType = {}));
var StartPipelineExecutionInput;
(function (StartPipelineExecutionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartPipelineExecutionInput");
    }
    StartPipelineExecutionInput.isa = isa;
})(StartPipelineExecutionInput = exports.StartPipelineExecutionInput || (exports.StartPipelineExecutionInput = {}));
var StartPipelineExecutionOutput;
(function (StartPipelineExecutionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartPipelineExecutionOutput");
    }
    StartPipelineExecutionOutput.isa = isa;
})(StartPipelineExecutionOutput = exports.StartPipelineExecutionOutput || (exports.StartPipelineExecutionOutput = {}));
var StopExecutionTrigger;
(function (StopExecutionTrigger) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopExecutionTrigger");
    }
    StopExecutionTrigger.isa = isa;
})(StopExecutionTrigger = exports.StopExecutionTrigger || (exports.StopExecutionTrigger = {}));
var StopPipelineExecutionInput;
(function (StopPipelineExecutionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopPipelineExecutionInput");
    }
    StopPipelineExecutionInput.isa = isa;
})(StopPipelineExecutionInput = exports.StopPipelineExecutionInput || (exports.StopPipelineExecutionInput = {}));
var StopPipelineExecutionOutput;
(function (StopPipelineExecutionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopPipelineExecutionOutput");
    }
    StopPipelineExecutionOutput.isa = isa;
})(StopPipelineExecutionOutput = exports.StopPipelineExecutionOutput || (exports.StopPipelineExecutionOutput = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagResourceInput;
(function (TagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceInput");
    }
    TagResourceInput.isa = isa;
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceOutput;
(function (TagResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceOutput");
    }
    TagResourceOutput.isa = isa;
})(TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {}));
var ThirdPartyJob;
(function (ThirdPartyJob) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThirdPartyJob");
    }
    ThirdPartyJob.isa = isa;
})(ThirdPartyJob = exports.ThirdPartyJob || (exports.ThirdPartyJob = {}));
var ThirdPartyJobData;
(function (ThirdPartyJobData) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThirdPartyJobData");
    }
    ThirdPartyJobData.isa = isa;
})(ThirdPartyJobData = exports.ThirdPartyJobData || (exports.ThirdPartyJobData = {}));
var ThirdPartyJobDetails;
(function (ThirdPartyJobDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThirdPartyJobDetails");
    }
    ThirdPartyJobDetails.isa = isa;
})(ThirdPartyJobDetails = exports.ThirdPartyJobDetails || (exports.ThirdPartyJobDetails = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTagsException");
    }
    TooManyTagsException.isa = isa;
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var TransitionState;
(function (TransitionState) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransitionState");
    }
    TransitionState.isa = isa;
})(TransitionState = exports.TransitionState || (exports.TransitionState = {}));
var TriggerType;
(function (TriggerType) {
    TriggerType["CloudWatchEvent"] = "CloudWatchEvent";
    TriggerType["CreatePipeline"] = "CreatePipeline";
    TriggerType["PollForSourceChanges"] = "PollForSourceChanges";
    TriggerType["PutActionRevision"] = "PutActionRevision";
    TriggerType["StartPipelineExecution"] = "StartPipelineExecution";
    TriggerType["Webhook"] = "Webhook";
})(TriggerType = exports.TriggerType || (exports.TriggerType = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceInput");
    }
    UntagResourceInput.isa = isa;
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceOutput;
(function (UntagResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceOutput");
    }
    UntagResourceOutput.isa = isa;
})(UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {}));
var UpdatePipelineInput;
(function (UpdatePipelineInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePipelineInput");
    }
    UpdatePipelineInput.isa = isa;
})(UpdatePipelineInput = exports.UpdatePipelineInput || (exports.UpdatePipelineInput = {}));
var UpdatePipelineOutput;
(function (UpdatePipelineOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePipelineOutput");
    }
    UpdatePipelineOutput.isa = isa;
})(UpdatePipelineOutput = exports.UpdatePipelineOutput || (exports.UpdatePipelineOutput = {}));
var WebhookAuthConfiguration;
(function (WebhookAuthConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "WebhookAuthConfiguration");
    }
    WebhookAuthConfiguration.isa = isa;
})(WebhookAuthConfiguration = exports.WebhookAuthConfiguration || (exports.WebhookAuthConfiguration = {}));
var WebhookAuthenticationType;
(function (WebhookAuthenticationType) {
    WebhookAuthenticationType["GITHUB_HMAC"] = "GITHUB_HMAC";
    WebhookAuthenticationType["IP"] = "IP";
    WebhookAuthenticationType["UNAUTHENTICATED"] = "UNAUTHENTICATED";
})(WebhookAuthenticationType = exports.WebhookAuthenticationType || (exports.WebhookAuthenticationType = {}));
var WebhookDefinition;
(function (WebhookDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "WebhookDefinition");
    }
    WebhookDefinition.isa = isa;
})(WebhookDefinition = exports.WebhookDefinition || (exports.WebhookDefinition = {}));
var WebhookFilterRule;
(function (WebhookFilterRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "WebhookFilterRule");
    }
    WebhookFilterRule.isa = isa;
})(WebhookFilterRule = exports.WebhookFilterRule || (exports.WebhookFilterRule = {}));
var WebhookNotFoundException;
(function (WebhookNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WebhookNotFoundException");
    }
    WebhookNotFoundException.isa = isa;
})(WebhookNotFoundException = exports.WebhookNotFoundException || (exports.WebhookNotFoundException = {}));
var AWSSessionCredentials;
(function (AWSSessionCredentials) {
    function isa(o) {
        return smithy_client_1.isa(o, "AWSSessionCredentials");
    }
    AWSSessionCredentials.isa = isa;
})(AWSSessionCredentials = exports.AWSSessionCredentials || (exports.AWSSessionCredentials = {}));
var ActionCategory;
(function (ActionCategory) {
    ActionCategory["Approval"] = "Approval";
    ActionCategory["Build"] = "Build";
    ActionCategory["Deploy"] = "Deploy";
    ActionCategory["Invoke"] = "Invoke";
    ActionCategory["Source"] = "Source";
    ActionCategory["Test"] = "Test";
})(ActionCategory = exports.ActionCategory || (exports.ActionCategory = {}));
var ActionConfiguration;
(function (ActionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionConfiguration");
    }
    ActionConfiguration.isa = isa;
})(ActionConfiguration = exports.ActionConfiguration || (exports.ActionConfiguration = {}));
var ActionContext;
(function (ActionContext) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionContext");
    }
    ActionContext.isa = isa;
})(ActionContext = exports.ActionContext || (exports.ActionContext = {}));
var ActionOwner;
(function (ActionOwner) {
    ActionOwner["AWS"] = "AWS";
    ActionOwner["Custom"] = "Custom";
    ActionOwner["ThirdParty"] = "ThirdParty";
})(ActionOwner = exports.ActionOwner || (exports.ActionOwner = {}));
var ActionTypeId;
(function (ActionTypeId) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionTypeId");
    }
    ActionTypeId.isa = isa;
})(ActionTypeId = exports.ActionTypeId || (exports.ActionTypeId = {}));
var ActionTypeNotFoundException;
(function (ActionTypeNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActionTypeNotFoundException");
    }
    ActionTypeNotFoundException.isa = isa;
})(ActionTypeNotFoundException = exports.ActionTypeNotFoundException || (exports.ActionTypeNotFoundException = {}));
var Artifact;
(function (Artifact) {
    function isa(o) {
        return smithy_client_1.isa(o, "Artifact");
    }
    Artifact.isa = isa;
})(Artifact = exports.Artifact || (exports.Artifact = {}));
var ArtifactLocation;
(function (ArtifactLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "ArtifactLocation");
    }
    ArtifactLocation.isa = isa;
})(ArtifactLocation = exports.ArtifactLocation || (exports.ArtifactLocation = {}));
var ArtifactLocationType;
(function (ArtifactLocationType) {
    ArtifactLocationType["S3"] = "S3";
})(ArtifactLocationType = exports.ArtifactLocationType || (exports.ArtifactLocationType = {}));
var CurrentRevision;
(function (CurrentRevision) {
    function isa(o) {
        return smithy_client_1.isa(o, "CurrentRevision");
    }
    CurrentRevision.isa = isa;
})(CurrentRevision = exports.CurrentRevision || (exports.CurrentRevision = {}));
var EncryptionKey;
(function (EncryptionKey) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionKey");
    }
    EncryptionKey.isa = isa;
})(EncryptionKey = exports.EncryptionKey || (exports.EncryptionKey = {}));
var EncryptionKeyType;
(function (EncryptionKeyType) {
    EncryptionKeyType["KMS"] = "KMS";
})(EncryptionKeyType = exports.EncryptionKeyType || (exports.EncryptionKeyType = {}));
var ExecutionDetails;
(function (ExecutionDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExecutionDetails");
    }
    ExecutionDetails.isa = isa;
})(ExecutionDetails = exports.ExecutionDetails || (exports.ExecutionDetails = {}));
var FailureDetails;
(function (FailureDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailureDetails");
    }
    FailureDetails.isa = isa;
})(FailureDetails = exports.FailureDetails || (exports.FailureDetails = {}));
var FailureType;
(function (FailureType) {
    FailureType["ConfigurationError"] = "ConfigurationError";
    FailureType["JobFailed"] = "JobFailed";
    FailureType["PermissionError"] = "PermissionError";
    FailureType["RevisionOutOfSync"] = "RevisionOutOfSync";
    FailureType["RevisionUnavailable"] = "RevisionUnavailable";
    FailureType["SystemUnavailable"] = "SystemUnavailable";
})(FailureType = exports.FailureType || (exports.FailureType = {}));
var InvalidJobStateException;
(function (InvalidJobStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidJobStateException");
    }
    InvalidJobStateException.isa = isa;
})(InvalidJobStateException = exports.InvalidJobStateException || (exports.InvalidJobStateException = {}));
var InvalidNonceException;
(function (InvalidNonceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNonceException");
    }
    InvalidNonceException.isa = isa;
})(InvalidNonceException = exports.InvalidNonceException || (exports.InvalidNonceException = {}));
var JobNotFoundException;
(function (JobNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobNotFoundException");
    }
    JobNotFoundException.isa = isa;
})(JobNotFoundException = exports.JobNotFoundException || (exports.JobNotFoundException = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["Created"] = "Created";
    JobStatus["Dispatched"] = "Dispatched";
    JobStatus["Failed"] = "Failed";
    JobStatus["InProgress"] = "InProgress";
    JobStatus["Queued"] = "Queued";
    JobStatus["Succeeded"] = "Succeeded";
    JobStatus["TimedOut"] = "TimedOut";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var OutputVariablesSizeExceededException;
(function (OutputVariablesSizeExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OutputVariablesSizeExceededException");
    }
    OutputVariablesSizeExceededException.isa = isa;
})(OutputVariablesSizeExceededException = exports.OutputVariablesSizeExceededException || (exports.OutputVariablesSizeExceededException = {}));
var PipelineContext;
(function (PipelineContext) {
    function isa(o) {
        return smithy_client_1.isa(o, "PipelineContext");
    }
    PipelineContext.isa = isa;
})(PipelineContext = exports.PipelineContext || (exports.PipelineContext = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var S3ArtifactLocation;
(function (S3ArtifactLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3ArtifactLocation");
    }
    S3ArtifactLocation.isa = isa;
})(S3ArtifactLocation = exports.S3ArtifactLocation || (exports.S3ArtifactLocation = {}));
var StageContext;
(function (StageContext) {
    function isa(o) {
        return smithy_client_1.isa(o, "StageContext");
    }
    StageContext.isa = isa;
})(StageContext = exports.StageContext || (exports.StageContext = {}));
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
//# sourceMappingURL=index.js.map