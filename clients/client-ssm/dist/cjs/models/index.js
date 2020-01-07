"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountSharingInfo;
(function (AccountSharingInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountSharingInfo");
    }
    AccountSharingInfo.isa = isa;
})(AccountSharingInfo = exports.AccountSharingInfo || (exports.AccountSharingInfo = {}));
var Activation;
(function (Activation) {
    function isa(o) {
        return smithy_client_1.isa(o, "Activation");
    }
    Activation.isa = isa;
})(Activation = exports.Activation || (exports.Activation = {}));
var AddTagsToResourceRequest;
(function (AddTagsToResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsToResourceRequest");
    }
    AddTagsToResourceRequest.isa = isa;
})(AddTagsToResourceRequest = exports.AddTagsToResourceRequest || (exports.AddTagsToResourceRequest = {}));
var AddTagsToResourceResult;
(function (AddTagsToResourceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsToResourceResult");
    }
    AddTagsToResourceResult.isa = isa;
})(AddTagsToResourceResult = exports.AddTagsToResourceResult || (exports.AddTagsToResourceResult = {}));
var AlreadyExistsException;
(function (AlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlreadyExistsException");
    }
    AlreadyExistsException.isa = isa;
})(AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {}));
var AssociatedInstances;
(function (AssociatedInstances) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociatedInstances");
    }
    AssociatedInstances.isa = isa;
})(AssociatedInstances = exports.AssociatedInstances || (exports.AssociatedInstances = {}));
var Association;
(function (Association) {
    function isa(o) {
        return smithy_client_1.isa(o, "Association");
    }
    Association.isa = isa;
})(Association = exports.Association || (exports.Association = {}));
var AssociationAlreadyExists;
(function (AssociationAlreadyExists) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationAlreadyExists");
    }
    AssociationAlreadyExists.isa = isa;
})(AssociationAlreadyExists = exports.AssociationAlreadyExists || (exports.AssociationAlreadyExists = {}));
var AssociationComplianceSeverity;
(function (AssociationComplianceSeverity) {
    AssociationComplianceSeverity["Critical"] = "CRITICAL";
    AssociationComplianceSeverity["High"] = "HIGH";
    AssociationComplianceSeverity["Low"] = "LOW";
    AssociationComplianceSeverity["Medium"] = "MEDIUM";
    AssociationComplianceSeverity["Unspecified"] = "UNSPECIFIED";
})(AssociationComplianceSeverity = exports.AssociationComplianceSeverity || (exports.AssociationComplianceSeverity = {}));
var AssociationDescription;
(function (AssociationDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationDescription");
    }
    AssociationDescription.isa = isa;
})(AssociationDescription = exports.AssociationDescription || (exports.AssociationDescription = {}));
var AssociationDoesNotExist;
(function (AssociationDoesNotExist) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationDoesNotExist");
    }
    AssociationDoesNotExist.isa = isa;
})(AssociationDoesNotExist = exports.AssociationDoesNotExist || (exports.AssociationDoesNotExist = {}));
var AssociationExecution;
(function (AssociationExecution) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationExecution");
    }
    AssociationExecution.isa = isa;
})(AssociationExecution = exports.AssociationExecution || (exports.AssociationExecution = {}));
var AssociationExecutionDoesNotExist;
(function (AssociationExecutionDoesNotExist) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationExecutionDoesNotExist");
    }
    AssociationExecutionDoesNotExist.isa = isa;
})(AssociationExecutionDoesNotExist = exports.AssociationExecutionDoesNotExist || (exports.AssociationExecutionDoesNotExist = {}));
var AssociationExecutionFilter;
(function (AssociationExecutionFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationExecutionFilter");
    }
    AssociationExecutionFilter.isa = isa;
})(AssociationExecutionFilter = exports.AssociationExecutionFilter || (exports.AssociationExecutionFilter = {}));
var AssociationExecutionFilterKey;
(function (AssociationExecutionFilterKey) {
    AssociationExecutionFilterKey["CreatedTime"] = "CreatedTime";
    AssociationExecutionFilterKey["ExecutionId"] = "ExecutionId";
    AssociationExecutionFilterKey["Status"] = "Status";
})(AssociationExecutionFilterKey = exports.AssociationExecutionFilterKey || (exports.AssociationExecutionFilterKey = {}));
var AssociationExecutionTarget;
(function (AssociationExecutionTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationExecutionTarget");
    }
    AssociationExecutionTarget.isa = isa;
})(AssociationExecutionTarget = exports.AssociationExecutionTarget || (exports.AssociationExecutionTarget = {}));
var AssociationExecutionTargetsFilter;
(function (AssociationExecutionTargetsFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationExecutionTargetsFilter");
    }
    AssociationExecutionTargetsFilter.isa = isa;
})(AssociationExecutionTargetsFilter = exports.AssociationExecutionTargetsFilter || (exports.AssociationExecutionTargetsFilter = {}));
var AssociationExecutionTargetsFilterKey;
(function (AssociationExecutionTargetsFilterKey) {
    AssociationExecutionTargetsFilterKey["ResourceId"] = "ResourceId";
    AssociationExecutionTargetsFilterKey["ResourceType"] = "ResourceType";
    AssociationExecutionTargetsFilterKey["Status"] = "Status";
})(AssociationExecutionTargetsFilterKey = exports.AssociationExecutionTargetsFilterKey || (exports.AssociationExecutionTargetsFilterKey = {}));
var AssociationFilter;
(function (AssociationFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationFilter");
    }
    AssociationFilter.isa = isa;
})(AssociationFilter = exports.AssociationFilter || (exports.AssociationFilter = {}));
var AssociationFilterKey;
(function (AssociationFilterKey) {
    AssociationFilterKey["AssociationId"] = "AssociationId";
    AssociationFilterKey["AssociationName"] = "AssociationName";
    AssociationFilterKey["InstanceId"] = "InstanceId";
    AssociationFilterKey["LastExecutedAfter"] = "LastExecutedAfter";
    AssociationFilterKey["LastExecutedBefore"] = "LastExecutedBefore";
    AssociationFilterKey["Name"] = "Name";
    AssociationFilterKey["Status"] = "AssociationStatusName";
})(AssociationFilterKey = exports.AssociationFilterKey || (exports.AssociationFilterKey = {}));
var AssociationFilterOperatorType;
(function (AssociationFilterOperatorType) {
    AssociationFilterOperatorType["Equal"] = "EQUAL";
    AssociationFilterOperatorType["GreaterThan"] = "GREATER_THAN";
    AssociationFilterOperatorType["LessThan"] = "LESS_THAN";
})(AssociationFilterOperatorType = exports.AssociationFilterOperatorType || (exports.AssociationFilterOperatorType = {}));
var AssociationLimitExceeded;
(function (AssociationLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationLimitExceeded");
    }
    AssociationLimitExceeded.isa = isa;
})(AssociationLimitExceeded = exports.AssociationLimitExceeded || (exports.AssociationLimitExceeded = {}));
var AssociationOverview;
(function (AssociationOverview) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationOverview");
    }
    AssociationOverview.isa = isa;
})(AssociationOverview = exports.AssociationOverview || (exports.AssociationOverview = {}));
var AssociationStatus;
(function (AssociationStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationStatus");
    }
    AssociationStatus.isa = isa;
})(AssociationStatus = exports.AssociationStatus || (exports.AssociationStatus = {}));
var AssociationStatusName;
(function (AssociationStatusName) {
    AssociationStatusName["Failed"] = "Failed";
    AssociationStatusName["Pending"] = "Pending";
    AssociationStatusName["Success"] = "Success";
})(AssociationStatusName = exports.AssociationStatusName || (exports.AssociationStatusName = {}));
var AssociationVersionInfo;
(function (AssociationVersionInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationVersionInfo");
    }
    AssociationVersionInfo.isa = isa;
})(AssociationVersionInfo = exports.AssociationVersionInfo || (exports.AssociationVersionInfo = {}));
var AssociationVersionLimitExceeded;
(function (AssociationVersionLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociationVersionLimitExceeded");
    }
    AssociationVersionLimitExceeded.isa = isa;
})(AssociationVersionLimitExceeded = exports.AssociationVersionLimitExceeded || (exports.AssociationVersionLimitExceeded = {}));
var AttachmentContent;
(function (AttachmentContent) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachmentContent");
    }
    AttachmentContent.isa = isa;
})(AttachmentContent = exports.AttachmentContent || (exports.AttachmentContent = {}));
var AttachmentHashType;
(function (AttachmentHashType) {
    AttachmentHashType["SHA256"] = "Sha256";
})(AttachmentHashType = exports.AttachmentHashType || (exports.AttachmentHashType = {}));
var AttachmentInformation;
(function (AttachmentInformation) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachmentInformation");
    }
    AttachmentInformation.isa = isa;
})(AttachmentInformation = exports.AttachmentInformation || (exports.AttachmentInformation = {}));
var AttachmentsSource;
(function (AttachmentsSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachmentsSource");
    }
    AttachmentsSource.isa = isa;
})(AttachmentsSource = exports.AttachmentsSource || (exports.AttachmentsSource = {}));
var AttachmentsSourceKey;
(function (AttachmentsSourceKey) {
    AttachmentsSourceKey["AttachmentReference"] = "AttachmentReference";
    AttachmentsSourceKey["S3FileUrl"] = "S3FileUrl";
    AttachmentsSourceKey["SourceUrl"] = "SourceUrl";
})(AttachmentsSourceKey = exports.AttachmentsSourceKey || (exports.AttachmentsSourceKey = {}));
var AutomationDefinitionNotFoundException;
(function (AutomationDefinitionNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutomationDefinitionNotFoundException");
    }
    AutomationDefinitionNotFoundException.isa = isa;
})(AutomationDefinitionNotFoundException = exports.AutomationDefinitionNotFoundException || (exports.AutomationDefinitionNotFoundException = {}));
var AutomationDefinitionVersionNotFoundException;
(function (AutomationDefinitionVersionNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutomationDefinitionVersionNotFoundException");
    }
    AutomationDefinitionVersionNotFoundException.isa = isa;
})(AutomationDefinitionVersionNotFoundException = exports.AutomationDefinitionVersionNotFoundException || (exports.AutomationDefinitionVersionNotFoundException = {}));
var AutomationExecution;
(function (AutomationExecution) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutomationExecution");
    }
    AutomationExecution.isa = isa;
})(AutomationExecution = exports.AutomationExecution || (exports.AutomationExecution = {}));
var AutomationExecutionFilter;
(function (AutomationExecutionFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutomationExecutionFilter");
    }
    AutomationExecutionFilter.isa = isa;
})(AutomationExecutionFilter = exports.AutomationExecutionFilter || (exports.AutomationExecutionFilter = {}));
var AutomationExecutionFilterKey;
(function (AutomationExecutionFilterKey) {
    AutomationExecutionFilterKey["AUTOMATION_TYPE"] = "AutomationType";
    AutomationExecutionFilterKey["CURRENT_ACTION"] = "CurrentAction";
    AutomationExecutionFilterKey["DOCUMENT_NAME_PREFIX"] = "DocumentNamePrefix";
    AutomationExecutionFilterKey["EXECUTION_ID"] = "ExecutionId";
    AutomationExecutionFilterKey["EXECUTION_STATUS"] = "ExecutionStatus";
    AutomationExecutionFilterKey["PARENT_EXECUTION_ID"] = "ParentExecutionId";
    AutomationExecutionFilterKey["START_TIME_AFTER"] = "StartTimeAfter";
    AutomationExecutionFilterKey["START_TIME_BEFORE"] = "StartTimeBefore";
    AutomationExecutionFilterKey["TAG_KEY"] = "TagKey";
})(AutomationExecutionFilterKey = exports.AutomationExecutionFilterKey || (exports.AutomationExecutionFilterKey = {}));
var AutomationExecutionLimitExceededException;
(function (AutomationExecutionLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutomationExecutionLimitExceededException");
    }
    AutomationExecutionLimitExceededException.isa = isa;
})(AutomationExecutionLimitExceededException = exports.AutomationExecutionLimitExceededException || (exports.AutomationExecutionLimitExceededException = {}));
var AutomationExecutionMetadata;
(function (AutomationExecutionMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutomationExecutionMetadata");
    }
    AutomationExecutionMetadata.isa = isa;
})(AutomationExecutionMetadata = exports.AutomationExecutionMetadata || (exports.AutomationExecutionMetadata = {}));
var AutomationExecutionNotFoundException;
(function (AutomationExecutionNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutomationExecutionNotFoundException");
    }
    AutomationExecutionNotFoundException.isa = isa;
})(AutomationExecutionNotFoundException = exports.AutomationExecutionNotFoundException || (exports.AutomationExecutionNotFoundException = {}));
var AutomationExecutionStatus;
(function (AutomationExecutionStatus) {
    AutomationExecutionStatus["CANCELLED"] = "Cancelled";
    AutomationExecutionStatus["CANCELLING"] = "Cancelling";
    AutomationExecutionStatus["FAILED"] = "Failed";
    AutomationExecutionStatus["INPROGRESS"] = "InProgress";
    AutomationExecutionStatus["PENDING"] = "Pending";
    AutomationExecutionStatus["SUCCESS"] = "Success";
    AutomationExecutionStatus["TIMEDOUT"] = "TimedOut";
    AutomationExecutionStatus["WAITING"] = "Waiting";
})(AutomationExecutionStatus = exports.AutomationExecutionStatus || (exports.AutomationExecutionStatus = {}));
var AutomationStepNotFoundException;
(function (AutomationStepNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutomationStepNotFoundException");
    }
    AutomationStepNotFoundException.isa = isa;
})(AutomationStepNotFoundException = exports.AutomationStepNotFoundException || (exports.AutomationStepNotFoundException = {}));
var AutomationType;
(function (AutomationType) {
    AutomationType["CrossAccount"] = "CrossAccount";
    AutomationType["Local"] = "Local";
})(AutomationType = exports.AutomationType || (exports.AutomationType = {}));
var CalendarState;
(function (CalendarState) {
    CalendarState["CLOSED"] = "CLOSED";
    CalendarState["OPEN"] = "OPEN";
})(CalendarState = exports.CalendarState || (exports.CalendarState = {}));
var CancelCommandRequest;
(function (CancelCommandRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelCommandRequest");
    }
    CancelCommandRequest.isa = isa;
})(CancelCommandRequest = exports.CancelCommandRequest || (exports.CancelCommandRequest = {}));
var CancelCommandResult;
(function (CancelCommandResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelCommandResult");
    }
    CancelCommandResult.isa = isa;
})(CancelCommandResult = exports.CancelCommandResult || (exports.CancelCommandResult = {}));
var CancelMaintenanceWindowExecutionRequest;
(function (CancelMaintenanceWindowExecutionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelMaintenanceWindowExecutionRequest");
    }
    CancelMaintenanceWindowExecutionRequest.isa = isa;
})(CancelMaintenanceWindowExecutionRequest = exports.CancelMaintenanceWindowExecutionRequest || (exports.CancelMaintenanceWindowExecutionRequest = {}));
var CancelMaintenanceWindowExecutionResult;
(function (CancelMaintenanceWindowExecutionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelMaintenanceWindowExecutionResult");
    }
    CancelMaintenanceWindowExecutionResult.isa = isa;
})(CancelMaintenanceWindowExecutionResult = exports.CancelMaintenanceWindowExecutionResult || (exports.CancelMaintenanceWindowExecutionResult = {}));
var CloudWatchOutputConfig;
(function (CloudWatchOutputConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudWatchOutputConfig");
    }
    CloudWatchOutputConfig.isa = isa;
})(CloudWatchOutputConfig = exports.CloudWatchOutputConfig || (exports.CloudWatchOutputConfig = {}));
var Command;
(function (Command) {
    function isa(o) {
        return smithy_client_1.isa(o, "Command");
    }
    Command.isa = isa;
})(Command = exports.Command || (exports.Command = {}));
var CommandFilter;
(function (CommandFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommandFilter");
    }
    CommandFilter.isa = isa;
})(CommandFilter = exports.CommandFilter || (exports.CommandFilter = {}));
var CommandFilterKey;
(function (CommandFilterKey) {
    CommandFilterKey["DOCUMENT_NAME"] = "DocumentName";
    CommandFilterKey["EXECUTION_STAGE"] = "ExecutionStage";
    CommandFilterKey["INVOKED_AFTER"] = "InvokedAfter";
    CommandFilterKey["INVOKED_BEFORE"] = "InvokedBefore";
    CommandFilterKey["STATUS"] = "Status";
})(CommandFilterKey = exports.CommandFilterKey || (exports.CommandFilterKey = {}));
var CommandInvocation;
(function (CommandInvocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommandInvocation");
    }
    CommandInvocation.isa = isa;
})(CommandInvocation = exports.CommandInvocation || (exports.CommandInvocation = {}));
var CommandInvocationStatus;
(function (CommandInvocationStatus) {
    CommandInvocationStatus["CANCELLED"] = "Cancelled";
    CommandInvocationStatus["CANCELLING"] = "Cancelling";
    CommandInvocationStatus["DELAYED"] = "Delayed";
    CommandInvocationStatus["FAILED"] = "Failed";
    CommandInvocationStatus["IN_PROGRESS"] = "InProgress";
    CommandInvocationStatus["PENDING"] = "Pending";
    CommandInvocationStatus["SUCCESS"] = "Success";
    CommandInvocationStatus["TIMED_OUT"] = "TimedOut";
})(CommandInvocationStatus = exports.CommandInvocationStatus || (exports.CommandInvocationStatus = {}));
var CommandPlugin;
(function (CommandPlugin) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommandPlugin");
    }
    CommandPlugin.isa = isa;
})(CommandPlugin = exports.CommandPlugin || (exports.CommandPlugin = {}));
var CommandPluginStatus;
(function (CommandPluginStatus) {
    CommandPluginStatus["CANCELLED"] = "Cancelled";
    CommandPluginStatus["FAILED"] = "Failed";
    CommandPluginStatus["IN_PROGRESS"] = "InProgress";
    CommandPluginStatus["PENDING"] = "Pending";
    CommandPluginStatus["SUCCESS"] = "Success";
    CommandPluginStatus["TIMED_OUT"] = "TimedOut";
})(CommandPluginStatus = exports.CommandPluginStatus || (exports.CommandPluginStatus = {}));
var CommandStatus;
(function (CommandStatus) {
    CommandStatus["CANCELLED"] = "Cancelled";
    CommandStatus["CANCELLING"] = "Cancelling";
    CommandStatus["FAILED"] = "Failed";
    CommandStatus["IN_PROGRESS"] = "InProgress";
    CommandStatus["PENDING"] = "Pending";
    CommandStatus["SUCCESS"] = "Success";
    CommandStatus["TIMED_OUT"] = "TimedOut";
})(CommandStatus = exports.CommandStatus || (exports.CommandStatus = {}));
var ComplianceExecutionSummary;
(function (ComplianceExecutionSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceExecutionSummary");
    }
    ComplianceExecutionSummary.isa = isa;
})(ComplianceExecutionSummary = exports.ComplianceExecutionSummary || (exports.ComplianceExecutionSummary = {}));
var ComplianceItem;
(function (ComplianceItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceItem");
    }
    ComplianceItem.isa = isa;
})(ComplianceItem = exports.ComplianceItem || (exports.ComplianceItem = {}));
var ComplianceItemEntry;
(function (ComplianceItemEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceItemEntry");
    }
    ComplianceItemEntry.isa = isa;
})(ComplianceItemEntry = exports.ComplianceItemEntry || (exports.ComplianceItemEntry = {}));
var ComplianceQueryOperatorType;
(function (ComplianceQueryOperatorType) {
    ComplianceQueryOperatorType["BeginWith"] = "BEGIN_WITH";
    ComplianceQueryOperatorType["Equal"] = "EQUAL";
    ComplianceQueryOperatorType["GreaterThan"] = "GREATER_THAN";
    ComplianceQueryOperatorType["LessThan"] = "LESS_THAN";
    ComplianceQueryOperatorType["NotEqual"] = "NOT_EQUAL";
})(ComplianceQueryOperatorType = exports.ComplianceQueryOperatorType || (exports.ComplianceQueryOperatorType = {}));
var ComplianceSeverity;
(function (ComplianceSeverity) {
    ComplianceSeverity["Critical"] = "CRITICAL";
    ComplianceSeverity["High"] = "HIGH";
    ComplianceSeverity["Informational"] = "INFORMATIONAL";
    ComplianceSeverity["Low"] = "LOW";
    ComplianceSeverity["Medium"] = "MEDIUM";
    ComplianceSeverity["Unspecified"] = "UNSPECIFIED";
})(ComplianceSeverity = exports.ComplianceSeverity || (exports.ComplianceSeverity = {}));
var ComplianceStatus;
(function (ComplianceStatus) {
    ComplianceStatus["Compliant"] = "COMPLIANT";
    ComplianceStatus["NonCompliant"] = "NON_COMPLIANT";
})(ComplianceStatus = exports.ComplianceStatus || (exports.ComplianceStatus = {}));
var ComplianceStringFilter;
(function (ComplianceStringFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceStringFilter");
    }
    ComplianceStringFilter.isa = isa;
})(ComplianceStringFilter = exports.ComplianceStringFilter || (exports.ComplianceStringFilter = {}));
var ComplianceSummaryItem;
(function (ComplianceSummaryItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceSummaryItem");
    }
    ComplianceSummaryItem.isa = isa;
})(ComplianceSummaryItem = exports.ComplianceSummaryItem || (exports.ComplianceSummaryItem = {}));
var ComplianceTypeCountLimitExceededException;
(function (ComplianceTypeCountLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceTypeCountLimitExceededException");
    }
    ComplianceTypeCountLimitExceededException.isa = isa;
})(ComplianceTypeCountLimitExceededException = exports.ComplianceTypeCountLimitExceededException || (exports.ComplianceTypeCountLimitExceededException = {}));
var CompliantSummary;
(function (CompliantSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "CompliantSummary");
    }
    CompliantSummary.isa = isa;
})(CompliantSummary = exports.CompliantSummary || (exports.CompliantSummary = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["CONNECTED"] = "Connected";
    ConnectionStatus["NOT_CONNECTED"] = "NotConnected";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
var CreateActivationRequest;
(function (CreateActivationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateActivationRequest");
    }
    CreateActivationRequest.isa = isa;
})(CreateActivationRequest = exports.CreateActivationRequest || (exports.CreateActivationRequest = {}));
var CreateActivationResult;
(function (CreateActivationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateActivationResult");
    }
    CreateActivationResult.isa = isa;
})(CreateActivationResult = exports.CreateActivationResult || (exports.CreateActivationResult = {}));
var CreateAssociationBatchRequest;
(function (CreateAssociationBatchRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAssociationBatchRequest");
    }
    CreateAssociationBatchRequest.isa = isa;
})(CreateAssociationBatchRequest = exports.CreateAssociationBatchRequest || (exports.CreateAssociationBatchRequest = {}));
var CreateAssociationBatchRequestEntry;
(function (CreateAssociationBatchRequestEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAssociationBatchRequestEntry");
    }
    CreateAssociationBatchRequestEntry.isa = isa;
})(CreateAssociationBatchRequestEntry = exports.CreateAssociationBatchRequestEntry || (exports.CreateAssociationBatchRequestEntry = {}));
var CreateAssociationBatchResult;
(function (CreateAssociationBatchResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAssociationBatchResult");
    }
    CreateAssociationBatchResult.isa = isa;
})(CreateAssociationBatchResult = exports.CreateAssociationBatchResult || (exports.CreateAssociationBatchResult = {}));
var CreateAssociationRequest;
(function (CreateAssociationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAssociationRequest");
    }
    CreateAssociationRequest.isa = isa;
})(CreateAssociationRequest = exports.CreateAssociationRequest || (exports.CreateAssociationRequest = {}));
var CreateAssociationResult;
(function (CreateAssociationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAssociationResult");
    }
    CreateAssociationResult.isa = isa;
})(CreateAssociationResult = exports.CreateAssociationResult || (exports.CreateAssociationResult = {}));
var CreateDocumentRequest;
(function (CreateDocumentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDocumentRequest");
    }
    CreateDocumentRequest.isa = isa;
})(CreateDocumentRequest = exports.CreateDocumentRequest || (exports.CreateDocumentRequest = {}));
var CreateDocumentResult;
(function (CreateDocumentResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDocumentResult");
    }
    CreateDocumentResult.isa = isa;
})(CreateDocumentResult = exports.CreateDocumentResult || (exports.CreateDocumentResult = {}));
var CreateMaintenanceWindowRequest;
(function (CreateMaintenanceWindowRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMaintenanceWindowRequest");
    }
    CreateMaintenanceWindowRequest.isa = isa;
})(CreateMaintenanceWindowRequest = exports.CreateMaintenanceWindowRequest || (exports.CreateMaintenanceWindowRequest = {}));
var CreateMaintenanceWindowResult;
(function (CreateMaintenanceWindowResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMaintenanceWindowResult");
    }
    CreateMaintenanceWindowResult.isa = isa;
})(CreateMaintenanceWindowResult = exports.CreateMaintenanceWindowResult || (exports.CreateMaintenanceWindowResult = {}));
var CreateOpsItemRequest;
(function (CreateOpsItemRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateOpsItemRequest");
    }
    CreateOpsItemRequest.isa = isa;
})(CreateOpsItemRequest = exports.CreateOpsItemRequest || (exports.CreateOpsItemRequest = {}));
var CreateOpsItemResponse;
(function (CreateOpsItemResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateOpsItemResponse");
    }
    CreateOpsItemResponse.isa = isa;
})(CreateOpsItemResponse = exports.CreateOpsItemResponse || (exports.CreateOpsItemResponse = {}));
var CreatePatchBaselineRequest;
(function (CreatePatchBaselineRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePatchBaselineRequest");
    }
    CreatePatchBaselineRequest.isa = isa;
})(CreatePatchBaselineRequest = exports.CreatePatchBaselineRequest || (exports.CreatePatchBaselineRequest = {}));
var CreatePatchBaselineResult;
(function (CreatePatchBaselineResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePatchBaselineResult");
    }
    CreatePatchBaselineResult.isa = isa;
})(CreatePatchBaselineResult = exports.CreatePatchBaselineResult || (exports.CreatePatchBaselineResult = {}));
var CreateResourceDataSyncRequest;
(function (CreateResourceDataSyncRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateResourceDataSyncRequest");
    }
    CreateResourceDataSyncRequest.isa = isa;
})(CreateResourceDataSyncRequest = exports.CreateResourceDataSyncRequest || (exports.CreateResourceDataSyncRequest = {}));
var CreateResourceDataSyncResult;
(function (CreateResourceDataSyncResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateResourceDataSyncResult");
    }
    CreateResourceDataSyncResult.isa = isa;
})(CreateResourceDataSyncResult = exports.CreateResourceDataSyncResult || (exports.CreateResourceDataSyncResult = {}));
var CustomSchemaCountLimitExceededException;
(function (CustomSchemaCountLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomSchemaCountLimitExceededException");
    }
    CustomSchemaCountLimitExceededException.isa = isa;
})(CustomSchemaCountLimitExceededException = exports.CustomSchemaCountLimitExceededException || (exports.CustomSchemaCountLimitExceededException = {}));
var DeleteActivationRequest;
(function (DeleteActivationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteActivationRequest");
    }
    DeleteActivationRequest.isa = isa;
})(DeleteActivationRequest = exports.DeleteActivationRequest || (exports.DeleteActivationRequest = {}));
var DeleteActivationResult;
(function (DeleteActivationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteActivationResult");
    }
    DeleteActivationResult.isa = isa;
})(DeleteActivationResult = exports.DeleteActivationResult || (exports.DeleteActivationResult = {}));
var DeleteAssociationRequest;
(function (DeleteAssociationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAssociationRequest");
    }
    DeleteAssociationRequest.isa = isa;
})(DeleteAssociationRequest = exports.DeleteAssociationRequest || (exports.DeleteAssociationRequest = {}));
var DeleteAssociationResult;
(function (DeleteAssociationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAssociationResult");
    }
    DeleteAssociationResult.isa = isa;
})(DeleteAssociationResult = exports.DeleteAssociationResult || (exports.DeleteAssociationResult = {}));
var DeleteDocumentRequest;
(function (DeleteDocumentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDocumentRequest");
    }
    DeleteDocumentRequest.isa = isa;
})(DeleteDocumentRequest = exports.DeleteDocumentRequest || (exports.DeleteDocumentRequest = {}));
var DeleteDocumentResult;
(function (DeleteDocumentResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDocumentResult");
    }
    DeleteDocumentResult.isa = isa;
})(DeleteDocumentResult = exports.DeleteDocumentResult || (exports.DeleteDocumentResult = {}));
var DeleteInventoryRequest;
(function (DeleteInventoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInventoryRequest");
    }
    DeleteInventoryRequest.isa = isa;
})(DeleteInventoryRequest = exports.DeleteInventoryRequest || (exports.DeleteInventoryRequest = {}));
var DeleteInventoryResult;
(function (DeleteInventoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInventoryResult");
    }
    DeleteInventoryResult.isa = isa;
})(DeleteInventoryResult = exports.DeleteInventoryResult || (exports.DeleteInventoryResult = {}));
var DeleteMaintenanceWindowRequest;
(function (DeleteMaintenanceWindowRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMaintenanceWindowRequest");
    }
    DeleteMaintenanceWindowRequest.isa = isa;
})(DeleteMaintenanceWindowRequest = exports.DeleteMaintenanceWindowRequest || (exports.DeleteMaintenanceWindowRequest = {}));
var DeleteMaintenanceWindowResult;
(function (DeleteMaintenanceWindowResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMaintenanceWindowResult");
    }
    DeleteMaintenanceWindowResult.isa = isa;
})(DeleteMaintenanceWindowResult = exports.DeleteMaintenanceWindowResult || (exports.DeleteMaintenanceWindowResult = {}));
var DeleteParameterRequest;
(function (DeleteParameterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteParameterRequest");
    }
    DeleteParameterRequest.isa = isa;
})(DeleteParameterRequest = exports.DeleteParameterRequest || (exports.DeleteParameterRequest = {}));
var DeleteParameterResult;
(function (DeleteParameterResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteParameterResult");
    }
    DeleteParameterResult.isa = isa;
})(DeleteParameterResult = exports.DeleteParameterResult || (exports.DeleteParameterResult = {}));
var DeleteParametersRequest;
(function (DeleteParametersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteParametersRequest");
    }
    DeleteParametersRequest.isa = isa;
})(DeleteParametersRequest = exports.DeleteParametersRequest || (exports.DeleteParametersRequest = {}));
var DeleteParametersResult;
(function (DeleteParametersResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteParametersResult");
    }
    DeleteParametersResult.isa = isa;
})(DeleteParametersResult = exports.DeleteParametersResult || (exports.DeleteParametersResult = {}));
var DeletePatchBaselineRequest;
(function (DeletePatchBaselineRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePatchBaselineRequest");
    }
    DeletePatchBaselineRequest.isa = isa;
})(DeletePatchBaselineRequest = exports.DeletePatchBaselineRequest || (exports.DeletePatchBaselineRequest = {}));
var DeletePatchBaselineResult;
(function (DeletePatchBaselineResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePatchBaselineResult");
    }
    DeletePatchBaselineResult.isa = isa;
})(DeletePatchBaselineResult = exports.DeletePatchBaselineResult || (exports.DeletePatchBaselineResult = {}));
var DeleteResourceDataSyncRequest;
(function (DeleteResourceDataSyncRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourceDataSyncRequest");
    }
    DeleteResourceDataSyncRequest.isa = isa;
})(DeleteResourceDataSyncRequest = exports.DeleteResourceDataSyncRequest || (exports.DeleteResourceDataSyncRequest = {}));
var DeleteResourceDataSyncResult;
(function (DeleteResourceDataSyncResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourceDataSyncResult");
    }
    DeleteResourceDataSyncResult.isa = isa;
})(DeleteResourceDataSyncResult = exports.DeleteResourceDataSyncResult || (exports.DeleteResourceDataSyncResult = {}));
var DeregisterManagedInstanceRequest;
(function (DeregisterManagedInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterManagedInstanceRequest");
    }
    DeregisterManagedInstanceRequest.isa = isa;
})(DeregisterManagedInstanceRequest = exports.DeregisterManagedInstanceRequest || (exports.DeregisterManagedInstanceRequest = {}));
var DeregisterManagedInstanceResult;
(function (DeregisterManagedInstanceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterManagedInstanceResult");
    }
    DeregisterManagedInstanceResult.isa = isa;
})(DeregisterManagedInstanceResult = exports.DeregisterManagedInstanceResult || (exports.DeregisterManagedInstanceResult = {}));
var DeregisterPatchBaselineForPatchGroupRequest;
(function (DeregisterPatchBaselineForPatchGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterPatchBaselineForPatchGroupRequest");
    }
    DeregisterPatchBaselineForPatchGroupRequest.isa = isa;
})(DeregisterPatchBaselineForPatchGroupRequest = exports.DeregisterPatchBaselineForPatchGroupRequest || (exports.DeregisterPatchBaselineForPatchGroupRequest = {}));
var DeregisterPatchBaselineForPatchGroupResult;
(function (DeregisterPatchBaselineForPatchGroupResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterPatchBaselineForPatchGroupResult");
    }
    DeregisterPatchBaselineForPatchGroupResult.isa = isa;
})(DeregisterPatchBaselineForPatchGroupResult = exports.DeregisterPatchBaselineForPatchGroupResult || (exports.DeregisterPatchBaselineForPatchGroupResult = {}));
var DeregisterTargetFromMaintenanceWindowRequest;
(function (DeregisterTargetFromMaintenanceWindowRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterTargetFromMaintenanceWindowRequest");
    }
    DeregisterTargetFromMaintenanceWindowRequest.isa = isa;
})(DeregisterTargetFromMaintenanceWindowRequest = exports.DeregisterTargetFromMaintenanceWindowRequest || (exports.DeregisterTargetFromMaintenanceWindowRequest = {}));
var DeregisterTargetFromMaintenanceWindowResult;
(function (DeregisterTargetFromMaintenanceWindowResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterTargetFromMaintenanceWindowResult");
    }
    DeregisterTargetFromMaintenanceWindowResult.isa = isa;
})(DeregisterTargetFromMaintenanceWindowResult = exports.DeregisterTargetFromMaintenanceWindowResult || (exports.DeregisterTargetFromMaintenanceWindowResult = {}));
var DeregisterTaskFromMaintenanceWindowRequest;
(function (DeregisterTaskFromMaintenanceWindowRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterTaskFromMaintenanceWindowRequest");
    }
    DeregisterTaskFromMaintenanceWindowRequest.isa = isa;
})(DeregisterTaskFromMaintenanceWindowRequest = exports.DeregisterTaskFromMaintenanceWindowRequest || (exports.DeregisterTaskFromMaintenanceWindowRequest = {}));
var DeregisterTaskFromMaintenanceWindowResult;
(function (DeregisterTaskFromMaintenanceWindowResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterTaskFromMaintenanceWindowResult");
    }
    DeregisterTaskFromMaintenanceWindowResult.isa = isa;
})(DeregisterTaskFromMaintenanceWindowResult = exports.DeregisterTaskFromMaintenanceWindowResult || (exports.DeregisterTaskFromMaintenanceWindowResult = {}));
var DescribeActivationsFilter;
(function (DescribeActivationsFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeActivationsFilter");
    }
    DescribeActivationsFilter.isa = isa;
})(DescribeActivationsFilter = exports.DescribeActivationsFilter || (exports.DescribeActivationsFilter = {}));
var DescribeActivationsFilterKeys;
(function (DescribeActivationsFilterKeys) {
    DescribeActivationsFilterKeys["ACTIVATION_IDS"] = "ActivationIds";
    DescribeActivationsFilterKeys["DEFAULT_INSTANCE_NAME"] = "DefaultInstanceName";
    DescribeActivationsFilterKeys["IAM_ROLE"] = "IamRole";
})(DescribeActivationsFilterKeys = exports.DescribeActivationsFilterKeys || (exports.DescribeActivationsFilterKeys = {}));
var DescribeActivationsRequest;
(function (DescribeActivationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeActivationsRequest");
    }
    DescribeActivationsRequest.isa = isa;
})(DescribeActivationsRequest = exports.DescribeActivationsRequest || (exports.DescribeActivationsRequest = {}));
var DescribeActivationsResult;
(function (DescribeActivationsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeActivationsResult");
    }
    DescribeActivationsResult.isa = isa;
})(DescribeActivationsResult = exports.DescribeActivationsResult || (exports.DescribeActivationsResult = {}));
var DescribeAssociationExecutionTargetsRequest;
(function (DescribeAssociationExecutionTargetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAssociationExecutionTargetsRequest");
    }
    DescribeAssociationExecutionTargetsRequest.isa = isa;
})(DescribeAssociationExecutionTargetsRequest = exports.DescribeAssociationExecutionTargetsRequest || (exports.DescribeAssociationExecutionTargetsRequest = {}));
var DescribeAssociationExecutionTargetsResult;
(function (DescribeAssociationExecutionTargetsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAssociationExecutionTargetsResult");
    }
    DescribeAssociationExecutionTargetsResult.isa = isa;
})(DescribeAssociationExecutionTargetsResult = exports.DescribeAssociationExecutionTargetsResult || (exports.DescribeAssociationExecutionTargetsResult = {}));
var DescribeAssociationExecutionsRequest;
(function (DescribeAssociationExecutionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAssociationExecutionsRequest");
    }
    DescribeAssociationExecutionsRequest.isa = isa;
})(DescribeAssociationExecutionsRequest = exports.DescribeAssociationExecutionsRequest || (exports.DescribeAssociationExecutionsRequest = {}));
var DescribeAssociationExecutionsResult;
(function (DescribeAssociationExecutionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAssociationExecutionsResult");
    }
    DescribeAssociationExecutionsResult.isa = isa;
})(DescribeAssociationExecutionsResult = exports.DescribeAssociationExecutionsResult || (exports.DescribeAssociationExecutionsResult = {}));
var DescribeAssociationRequest;
(function (DescribeAssociationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAssociationRequest");
    }
    DescribeAssociationRequest.isa = isa;
})(DescribeAssociationRequest = exports.DescribeAssociationRequest || (exports.DescribeAssociationRequest = {}));
var DescribeAssociationResult;
(function (DescribeAssociationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAssociationResult");
    }
    DescribeAssociationResult.isa = isa;
})(DescribeAssociationResult = exports.DescribeAssociationResult || (exports.DescribeAssociationResult = {}));
var DescribeAutomationExecutionsRequest;
(function (DescribeAutomationExecutionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAutomationExecutionsRequest");
    }
    DescribeAutomationExecutionsRequest.isa = isa;
})(DescribeAutomationExecutionsRequest = exports.DescribeAutomationExecutionsRequest || (exports.DescribeAutomationExecutionsRequest = {}));
var DescribeAutomationExecutionsResult;
(function (DescribeAutomationExecutionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAutomationExecutionsResult");
    }
    DescribeAutomationExecutionsResult.isa = isa;
})(DescribeAutomationExecutionsResult = exports.DescribeAutomationExecutionsResult || (exports.DescribeAutomationExecutionsResult = {}));
var DescribeAutomationStepExecutionsRequest;
(function (DescribeAutomationStepExecutionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAutomationStepExecutionsRequest");
    }
    DescribeAutomationStepExecutionsRequest.isa = isa;
})(DescribeAutomationStepExecutionsRequest = exports.DescribeAutomationStepExecutionsRequest || (exports.DescribeAutomationStepExecutionsRequest = {}));
var DescribeAutomationStepExecutionsResult;
(function (DescribeAutomationStepExecutionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAutomationStepExecutionsResult");
    }
    DescribeAutomationStepExecutionsResult.isa = isa;
})(DescribeAutomationStepExecutionsResult = exports.DescribeAutomationStepExecutionsResult || (exports.DescribeAutomationStepExecutionsResult = {}));
var DescribeAvailablePatchesRequest;
(function (DescribeAvailablePatchesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAvailablePatchesRequest");
    }
    DescribeAvailablePatchesRequest.isa = isa;
})(DescribeAvailablePatchesRequest = exports.DescribeAvailablePatchesRequest || (exports.DescribeAvailablePatchesRequest = {}));
var DescribeAvailablePatchesResult;
(function (DescribeAvailablePatchesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAvailablePatchesResult");
    }
    DescribeAvailablePatchesResult.isa = isa;
})(DescribeAvailablePatchesResult = exports.DescribeAvailablePatchesResult || (exports.DescribeAvailablePatchesResult = {}));
var DescribeDocumentPermissionRequest;
(function (DescribeDocumentPermissionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDocumentPermissionRequest");
    }
    DescribeDocumentPermissionRequest.isa = isa;
})(DescribeDocumentPermissionRequest = exports.DescribeDocumentPermissionRequest || (exports.DescribeDocumentPermissionRequest = {}));
var DescribeDocumentPermissionResponse;
(function (DescribeDocumentPermissionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDocumentPermissionResponse");
    }
    DescribeDocumentPermissionResponse.isa = isa;
})(DescribeDocumentPermissionResponse = exports.DescribeDocumentPermissionResponse || (exports.DescribeDocumentPermissionResponse = {}));
var DescribeDocumentRequest;
(function (DescribeDocumentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDocumentRequest");
    }
    DescribeDocumentRequest.isa = isa;
})(DescribeDocumentRequest = exports.DescribeDocumentRequest || (exports.DescribeDocumentRequest = {}));
var DescribeDocumentResult;
(function (DescribeDocumentResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDocumentResult");
    }
    DescribeDocumentResult.isa = isa;
})(DescribeDocumentResult = exports.DescribeDocumentResult || (exports.DescribeDocumentResult = {}));
var DescribeEffectiveInstanceAssociationsRequest;
(function (DescribeEffectiveInstanceAssociationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEffectiveInstanceAssociationsRequest");
    }
    DescribeEffectiveInstanceAssociationsRequest.isa = isa;
})(DescribeEffectiveInstanceAssociationsRequest = exports.DescribeEffectiveInstanceAssociationsRequest || (exports.DescribeEffectiveInstanceAssociationsRequest = {}));
var DescribeEffectiveInstanceAssociationsResult;
(function (DescribeEffectiveInstanceAssociationsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEffectiveInstanceAssociationsResult");
    }
    DescribeEffectiveInstanceAssociationsResult.isa = isa;
})(DescribeEffectiveInstanceAssociationsResult = exports.DescribeEffectiveInstanceAssociationsResult || (exports.DescribeEffectiveInstanceAssociationsResult = {}));
var DescribeEffectivePatchesForPatchBaselineRequest;
(function (DescribeEffectivePatchesForPatchBaselineRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEffectivePatchesForPatchBaselineRequest");
    }
    DescribeEffectivePatchesForPatchBaselineRequest.isa = isa;
})(DescribeEffectivePatchesForPatchBaselineRequest = exports.DescribeEffectivePatchesForPatchBaselineRequest || (exports.DescribeEffectivePatchesForPatchBaselineRequest = {}));
var DescribeEffectivePatchesForPatchBaselineResult;
(function (DescribeEffectivePatchesForPatchBaselineResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEffectivePatchesForPatchBaselineResult");
    }
    DescribeEffectivePatchesForPatchBaselineResult.isa = isa;
})(DescribeEffectivePatchesForPatchBaselineResult = exports.DescribeEffectivePatchesForPatchBaselineResult || (exports.DescribeEffectivePatchesForPatchBaselineResult = {}));
var DescribeInstanceAssociationsStatusRequest;
(function (DescribeInstanceAssociationsStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInstanceAssociationsStatusRequest");
    }
    DescribeInstanceAssociationsStatusRequest.isa = isa;
})(DescribeInstanceAssociationsStatusRequest = exports.DescribeInstanceAssociationsStatusRequest || (exports.DescribeInstanceAssociationsStatusRequest = {}));
var DescribeInstanceAssociationsStatusResult;
(function (DescribeInstanceAssociationsStatusResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInstanceAssociationsStatusResult");
    }
    DescribeInstanceAssociationsStatusResult.isa = isa;
})(DescribeInstanceAssociationsStatusResult = exports.DescribeInstanceAssociationsStatusResult || (exports.DescribeInstanceAssociationsStatusResult = {}));
var DescribeInstanceInformationRequest;
(function (DescribeInstanceInformationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInstanceInformationRequest");
    }
    DescribeInstanceInformationRequest.isa = isa;
})(DescribeInstanceInformationRequest = exports.DescribeInstanceInformationRequest || (exports.DescribeInstanceInformationRequest = {}));
var DescribeInstanceInformationResult;
(function (DescribeInstanceInformationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInstanceInformationResult");
    }
    DescribeInstanceInformationResult.isa = isa;
})(DescribeInstanceInformationResult = exports.DescribeInstanceInformationResult || (exports.DescribeInstanceInformationResult = {}));
var DescribeInstancePatchStatesForPatchGroupRequest;
(function (DescribeInstancePatchStatesForPatchGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInstancePatchStatesForPatchGroupRequest");
    }
    DescribeInstancePatchStatesForPatchGroupRequest.isa = isa;
})(DescribeInstancePatchStatesForPatchGroupRequest = exports.DescribeInstancePatchStatesForPatchGroupRequest || (exports.DescribeInstancePatchStatesForPatchGroupRequest = {}));
var DescribeInstancePatchStatesForPatchGroupResult;
(function (DescribeInstancePatchStatesForPatchGroupResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInstancePatchStatesForPatchGroupResult");
    }
    DescribeInstancePatchStatesForPatchGroupResult.isa = isa;
})(DescribeInstancePatchStatesForPatchGroupResult = exports.DescribeInstancePatchStatesForPatchGroupResult || (exports.DescribeInstancePatchStatesForPatchGroupResult = {}));
var DescribeInstancePatchStatesRequest;
(function (DescribeInstancePatchStatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInstancePatchStatesRequest");
    }
    DescribeInstancePatchStatesRequest.isa = isa;
})(DescribeInstancePatchStatesRequest = exports.DescribeInstancePatchStatesRequest || (exports.DescribeInstancePatchStatesRequest = {}));
var DescribeInstancePatchStatesResult;
(function (DescribeInstancePatchStatesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInstancePatchStatesResult");
    }
    DescribeInstancePatchStatesResult.isa = isa;
})(DescribeInstancePatchStatesResult = exports.DescribeInstancePatchStatesResult || (exports.DescribeInstancePatchStatesResult = {}));
var DescribeInstancePatchesRequest;
(function (DescribeInstancePatchesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInstancePatchesRequest");
    }
    DescribeInstancePatchesRequest.isa = isa;
})(DescribeInstancePatchesRequest = exports.DescribeInstancePatchesRequest || (exports.DescribeInstancePatchesRequest = {}));
var DescribeInstancePatchesResult;
(function (DescribeInstancePatchesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInstancePatchesResult");
    }
    DescribeInstancePatchesResult.isa = isa;
})(DescribeInstancePatchesResult = exports.DescribeInstancePatchesResult || (exports.DescribeInstancePatchesResult = {}));
var DescribeInventoryDeletionsRequest;
(function (DescribeInventoryDeletionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInventoryDeletionsRequest");
    }
    DescribeInventoryDeletionsRequest.isa = isa;
})(DescribeInventoryDeletionsRequest = exports.DescribeInventoryDeletionsRequest || (exports.DescribeInventoryDeletionsRequest = {}));
var DescribeInventoryDeletionsResult;
(function (DescribeInventoryDeletionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInventoryDeletionsResult");
    }
    DescribeInventoryDeletionsResult.isa = isa;
})(DescribeInventoryDeletionsResult = exports.DescribeInventoryDeletionsResult || (exports.DescribeInventoryDeletionsResult = {}));
var DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
(function (DescribeMaintenanceWindowExecutionTaskInvocationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowExecutionTaskInvocationsRequest");
    }
    DescribeMaintenanceWindowExecutionTaskInvocationsRequest.isa = isa;
})(DescribeMaintenanceWindowExecutionTaskInvocationsRequest = exports.DescribeMaintenanceWindowExecutionTaskInvocationsRequest || (exports.DescribeMaintenanceWindowExecutionTaskInvocationsRequest = {}));
var DescribeMaintenanceWindowExecutionTaskInvocationsResult;
(function (DescribeMaintenanceWindowExecutionTaskInvocationsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowExecutionTaskInvocationsResult");
    }
    DescribeMaintenanceWindowExecutionTaskInvocationsResult.isa = isa;
})(DescribeMaintenanceWindowExecutionTaskInvocationsResult = exports.DescribeMaintenanceWindowExecutionTaskInvocationsResult || (exports.DescribeMaintenanceWindowExecutionTaskInvocationsResult = {}));
var DescribeMaintenanceWindowExecutionTasksRequest;
(function (DescribeMaintenanceWindowExecutionTasksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowExecutionTasksRequest");
    }
    DescribeMaintenanceWindowExecutionTasksRequest.isa = isa;
})(DescribeMaintenanceWindowExecutionTasksRequest = exports.DescribeMaintenanceWindowExecutionTasksRequest || (exports.DescribeMaintenanceWindowExecutionTasksRequest = {}));
var DescribeMaintenanceWindowExecutionTasksResult;
(function (DescribeMaintenanceWindowExecutionTasksResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowExecutionTasksResult");
    }
    DescribeMaintenanceWindowExecutionTasksResult.isa = isa;
})(DescribeMaintenanceWindowExecutionTasksResult = exports.DescribeMaintenanceWindowExecutionTasksResult || (exports.DescribeMaintenanceWindowExecutionTasksResult = {}));
var DescribeMaintenanceWindowExecutionsRequest;
(function (DescribeMaintenanceWindowExecutionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowExecutionsRequest");
    }
    DescribeMaintenanceWindowExecutionsRequest.isa = isa;
})(DescribeMaintenanceWindowExecutionsRequest = exports.DescribeMaintenanceWindowExecutionsRequest || (exports.DescribeMaintenanceWindowExecutionsRequest = {}));
var DescribeMaintenanceWindowExecutionsResult;
(function (DescribeMaintenanceWindowExecutionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowExecutionsResult");
    }
    DescribeMaintenanceWindowExecutionsResult.isa = isa;
})(DescribeMaintenanceWindowExecutionsResult = exports.DescribeMaintenanceWindowExecutionsResult || (exports.DescribeMaintenanceWindowExecutionsResult = {}));
var DescribeMaintenanceWindowScheduleRequest;
(function (DescribeMaintenanceWindowScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowScheduleRequest");
    }
    DescribeMaintenanceWindowScheduleRequest.isa = isa;
})(DescribeMaintenanceWindowScheduleRequest = exports.DescribeMaintenanceWindowScheduleRequest || (exports.DescribeMaintenanceWindowScheduleRequest = {}));
var DescribeMaintenanceWindowScheduleResult;
(function (DescribeMaintenanceWindowScheduleResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowScheduleResult");
    }
    DescribeMaintenanceWindowScheduleResult.isa = isa;
})(DescribeMaintenanceWindowScheduleResult = exports.DescribeMaintenanceWindowScheduleResult || (exports.DescribeMaintenanceWindowScheduleResult = {}));
var DescribeMaintenanceWindowTargetsRequest;
(function (DescribeMaintenanceWindowTargetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowTargetsRequest");
    }
    DescribeMaintenanceWindowTargetsRequest.isa = isa;
})(DescribeMaintenanceWindowTargetsRequest = exports.DescribeMaintenanceWindowTargetsRequest || (exports.DescribeMaintenanceWindowTargetsRequest = {}));
var DescribeMaintenanceWindowTargetsResult;
(function (DescribeMaintenanceWindowTargetsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowTargetsResult");
    }
    DescribeMaintenanceWindowTargetsResult.isa = isa;
})(DescribeMaintenanceWindowTargetsResult = exports.DescribeMaintenanceWindowTargetsResult || (exports.DescribeMaintenanceWindowTargetsResult = {}));
var DescribeMaintenanceWindowTasksRequest;
(function (DescribeMaintenanceWindowTasksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowTasksRequest");
    }
    DescribeMaintenanceWindowTasksRequest.isa = isa;
})(DescribeMaintenanceWindowTasksRequest = exports.DescribeMaintenanceWindowTasksRequest || (exports.DescribeMaintenanceWindowTasksRequest = {}));
var DescribeMaintenanceWindowTasksResult;
(function (DescribeMaintenanceWindowTasksResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowTasksResult");
    }
    DescribeMaintenanceWindowTasksResult.isa = isa;
})(DescribeMaintenanceWindowTasksResult = exports.DescribeMaintenanceWindowTasksResult || (exports.DescribeMaintenanceWindowTasksResult = {}));
var DescribeMaintenanceWindowsForTargetRequest;
(function (DescribeMaintenanceWindowsForTargetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowsForTargetRequest");
    }
    DescribeMaintenanceWindowsForTargetRequest.isa = isa;
})(DescribeMaintenanceWindowsForTargetRequest = exports.DescribeMaintenanceWindowsForTargetRequest || (exports.DescribeMaintenanceWindowsForTargetRequest = {}));
var DescribeMaintenanceWindowsForTargetResult;
(function (DescribeMaintenanceWindowsForTargetResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowsForTargetResult");
    }
    DescribeMaintenanceWindowsForTargetResult.isa = isa;
})(DescribeMaintenanceWindowsForTargetResult = exports.DescribeMaintenanceWindowsForTargetResult || (exports.DescribeMaintenanceWindowsForTargetResult = {}));
var DescribeMaintenanceWindowsRequest;
(function (DescribeMaintenanceWindowsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowsRequest");
    }
    DescribeMaintenanceWindowsRequest.isa = isa;
})(DescribeMaintenanceWindowsRequest = exports.DescribeMaintenanceWindowsRequest || (exports.DescribeMaintenanceWindowsRequest = {}));
var DescribeMaintenanceWindowsResult;
(function (DescribeMaintenanceWindowsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMaintenanceWindowsResult");
    }
    DescribeMaintenanceWindowsResult.isa = isa;
})(DescribeMaintenanceWindowsResult = exports.DescribeMaintenanceWindowsResult || (exports.DescribeMaintenanceWindowsResult = {}));
var DescribeOpsItemsRequest;
(function (DescribeOpsItemsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOpsItemsRequest");
    }
    DescribeOpsItemsRequest.isa = isa;
})(DescribeOpsItemsRequest = exports.DescribeOpsItemsRequest || (exports.DescribeOpsItemsRequest = {}));
var DescribeOpsItemsResponse;
(function (DescribeOpsItemsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOpsItemsResponse");
    }
    DescribeOpsItemsResponse.isa = isa;
})(DescribeOpsItemsResponse = exports.DescribeOpsItemsResponse || (exports.DescribeOpsItemsResponse = {}));
var DescribeParametersRequest;
(function (DescribeParametersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeParametersRequest");
    }
    DescribeParametersRequest.isa = isa;
})(DescribeParametersRequest = exports.DescribeParametersRequest || (exports.DescribeParametersRequest = {}));
var DescribeParametersResult;
(function (DescribeParametersResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeParametersResult");
    }
    DescribeParametersResult.isa = isa;
})(DescribeParametersResult = exports.DescribeParametersResult || (exports.DescribeParametersResult = {}));
var DescribePatchBaselinesRequest;
(function (DescribePatchBaselinesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePatchBaselinesRequest");
    }
    DescribePatchBaselinesRequest.isa = isa;
})(DescribePatchBaselinesRequest = exports.DescribePatchBaselinesRequest || (exports.DescribePatchBaselinesRequest = {}));
var DescribePatchBaselinesResult;
(function (DescribePatchBaselinesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePatchBaselinesResult");
    }
    DescribePatchBaselinesResult.isa = isa;
})(DescribePatchBaselinesResult = exports.DescribePatchBaselinesResult || (exports.DescribePatchBaselinesResult = {}));
var DescribePatchGroupStateRequest;
(function (DescribePatchGroupStateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePatchGroupStateRequest");
    }
    DescribePatchGroupStateRequest.isa = isa;
})(DescribePatchGroupStateRequest = exports.DescribePatchGroupStateRequest || (exports.DescribePatchGroupStateRequest = {}));
var DescribePatchGroupStateResult;
(function (DescribePatchGroupStateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePatchGroupStateResult");
    }
    DescribePatchGroupStateResult.isa = isa;
})(DescribePatchGroupStateResult = exports.DescribePatchGroupStateResult || (exports.DescribePatchGroupStateResult = {}));
var DescribePatchGroupsRequest;
(function (DescribePatchGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePatchGroupsRequest");
    }
    DescribePatchGroupsRequest.isa = isa;
})(DescribePatchGroupsRequest = exports.DescribePatchGroupsRequest || (exports.DescribePatchGroupsRequest = {}));
var DescribePatchGroupsResult;
(function (DescribePatchGroupsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePatchGroupsResult");
    }
    DescribePatchGroupsResult.isa = isa;
})(DescribePatchGroupsResult = exports.DescribePatchGroupsResult || (exports.DescribePatchGroupsResult = {}));
var DescribePatchPropertiesRequest;
(function (DescribePatchPropertiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePatchPropertiesRequest");
    }
    DescribePatchPropertiesRequest.isa = isa;
})(DescribePatchPropertiesRequest = exports.DescribePatchPropertiesRequest || (exports.DescribePatchPropertiesRequest = {}));
var DescribePatchPropertiesResult;
(function (DescribePatchPropertiesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePatchPropertiesResult");
    }
    DescribePatchPropertiesResult.isa = isa;
})(DescribePatchPropertiesResult = exports.DescribePatchPropertiesResult || (exports.DescribePatchPropertiesResult = {}));
var DescribeSessionsRequest;
(function (DescribeSessionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSessionsRequest");
    }
    DescribeSessionsRequest.isa = isa;
})(DescribeSessionsRequest = exports.DescribeSessionsRequest || (exports.DescribeSessionsRequest = {}));
var DescribeSessionsResponse;
(function (DescribeSessionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSessionsResponse");
    }
    DescribeSessionsResponse.isa = isa;
})(DescribeSessionsResponse = exports.DescribeSessionsResponse || (exports.DescribeSessionsResponse = {}));
var DocumentAlreadyExists;
(function (DocumentAlreadyExists) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentAlreadyExists");
    }
    DocumentAlreadyExists.isa = isa;
})(DocumentAlreadyExists = exports.DocumentAlreadyExists || (exports.DocumentAlreadyExists = {}));
var DocumentDefaultVersionDescription;
(function (DocumentDefaultVersionDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentDefaultVersionDescription");
    }
    DocumentDefaultVersionDescription.isa = isa;
})(DocumentDefaultVersionDescription = exports.DocumentDefaultVersionDescription || (exports.DocumentDefaultVersionDescription = {}));
var DocumentDescription;
(function (DocumentDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentDescription");
    }
    DocumentDescription.isa = isa;
})(DocumentDescription = exports.DocumentDescription || (exports.DocumentDescription = {}));
var DocumentFilter;
(function (DocumentFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentFilter");
    }
    DocumentFilter.isa = isa;
})(DocumentFilter = exports.DocumentFilter || (exports.DocumentFilter = {}));
var DocumentFilterKey;
(function (DocumentFilterKey) {
    DocumentFilterKey["DocumentType"] = "DocumentType";
    DocumentFilterKey["Name"] = "Name";
    DocumentFilterKey["Owner"] = "Owner";
    DocumentFilterKey["PlatformTypes"] = "PlatformTypes";
})(DocumentFilterKey = exports.DocumentFilterKey || (exports.DocumentFilterKey = {}));
var DocumentFormat;
(function (DocumentFormat) {
    DocumentFormat["JSON"] = "JSON";
    DocumentFormat["TEXT"] = "TEXT";
    DocumentFormat["YAML"] = "YAML";
})(DocumentFormat = exports.DocumentFormat || (exports.DocumentFormat = {}));
var DocumentHashType;
(function (DocumentHashType) {
    DocumentHashType["SHA1"] = "Sha1";
    DocumentHashType["SHA256"] = "Sha256";
})(DocumentHashType = exports.DocumentHashType || (exports.DocumentHashType = {}));
var DocumentIdentifier;
(function (DocumentIdentifier) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentIdentifier");
    }
    DocumentIdentifier.isa = isa;
})(DocumentIdentifier = exports.DocumentIdentifier || (exports.DocumentIdentifier = {}));
var DocumentKeyValuesFilter;
(function (DocumentKeyValuesFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentKeyValuesFilter");
    }
    DocumentKeyValuesFilter.isa = isa;
})(DocumentKeyValuesFilter = exports.DocumentKeyValuesFilter || (exports.DocumentKeyValuesFilter = {}));
var DocumentLimitExceeded;
(function (DocumentLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentLimitExceeded");
    }
    DocumentLimitExceeded.isa = isa;
})(DocumentLimitExceeded = exports.DocumentLimitExceeded || (exports.DocumentLimitExceeded = {}));
var DocumentParameter;
(function (DocumentParameter) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentParameter");
    }
    DocumentParameter.isa = isa;
})(DocumentParameter = exports.DocumentParameter || (exports.DocumentParameter = {}));
var DocumentPermissionLimit;
(function (DocumentPermissionLimit) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentPermissionLimit");
    }
    DocumentPermissionLimit.isa = isa;
})(DocumentPermissionLimit = exports.DocumentPermissionLimit || (exports.DocumentPermissionLimit = {}));
var DocumentPermissionType;
(function (DocumentPermissionType) {
    DocumentPermissionType["SHARE"] = "Share";
})(DocumentPermissionType = exports.DocumentPermissionType || (exports.DocumentPermissionType = {}));
var DocumentRequires;
(function (DocumentRequires) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentRequires");
    }
    DocumentRequires.isa = isa;
})(DocumentRequires = exports.DocumentRequires || (exports.DocumentRequires = {}));
var DocumentStatus;
(function (DocumentStatus) {
    DocumentStatus["Active"] = "Active";
    DocumentStatus["Creating"] = "Creating";
    DocumentStatus["Deleting"] = "Deleting";
    DocumentStatus["Failed"] = "Failed";
    DocumentStatus["Updating"] = "Updating";
})(DocumentStatus = exports.DocumentStatus || (exports.DocumentStatus = {}));
var DocumentType;
(function (DocumentType) {
    DocumentType["ApplicationConfiguration"] = "ApplicationConfiguration";
    DocumentType["ApplicationConfigurationSchema"] = "ApplicationConfigurationSchema";
    DocumentType["Automation"] = "Automation";
    DocumentType["ChangeCalendar"] = "ChangeCalendar";
    DocumentType["Command"] = "Command";
    DocumentType["DeploymentStrategy"] = "DeploymentStrategy";
    DocumentType["Package"] = "Package";
    DocumentType["Policy"] = "Policy";
    DocumentType["Session"] = "Session";
})(DocumentType = exports.DocumentType || (exports.DocumentType = {}));
var DocumentVersionInfo;
(function (DocumentVersionInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentVersionInfo");
    }
    DocumentVersionInfo.isa = isa;
})(DocumentVersionInfo = exports.DocumentVersionInfo || (exports.DocumentVersionInfo = {}));
var DocumentVersionLimitExceeded;
(function (DocumentVersionLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "DocumentVersionLimitExceeded");
    }
    DocumentVersionLimitExceeded.isa = isa;
})(DocumentVersionLimitExceeded = exports.DocumentVersionLimitExceeded || (exports.DocumentVersionLimitExceeded = {}));
var DoesNotExistException;
(function (DoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DoesNotExistException");
    }
    DoesNotExistException.isa = isa;
})(DoesNotExistException = exports.DoesNotExistException || (exports.DoesNotExistException = {}));
var DuplicateDocumentContent;
(function (DuplicateDocumentContent) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateDocumentContent");
    }
    DuplicateDocumentContent.isa = isa;
})(DuplicateDocumentContent = exports.DuplicateDocumentContent || (exports.DuplicateDocumentContent = {}));
var DuplicateDocumentVersionName;
(function (DuplicateDocumentVersionName) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateDocumentVersionName");
    }
    DuplicateDocumentVersionName.isa = isa;
})(DuplicateDocumentVersionName = exports.DuplicateDocumentVersionName || (exports.DuplicateDocumentVersionName = {}));
var DuplicateInstanceId;
(function (DuplicateInstanceId) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateInstanceId");
    }
    DuplicateInstanceId.isa = isa;
})(DuplicateInstanceId = exports.DuplicateInstanceId || (exports.DuplicateInstanceId = {}));
var EffectivePatch;
(function (EffectivePatch) {
    function isa(o) {
        return smithy_client_1.isa(o, "EffectivePatch");
    }
    EffectivePatch.isa = isa;
})(EffectivePatch = exports.EffectivePatch || (exports.EffectivePatch = {}));
var ExecutionMode;
(function (ExecutionMode) {
    ExecutionMode["Auto"] = "Auto";
    ExecutionMode["Interactive"] = "Interactive";
})(ExecutionMode = exports.ExecutionMode || (exports.ExecutionMode = {}));
var FailedCreateAssociation;
(function (FailedCreateAssociation) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailedCreateAssociation");
    }
    FailedCreateAssociation.isa = isa;
})(FailedCreateAssociation = exports.FailedCreateAssociation || (exports.FailedCreateAssociation = {}));
var FailureDetails;
(function (FailureDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailureDetails");
    }
    FailureDetails.isa = isa;
})(FailureDetails = exports.FailureDetails || (exports.FailureDetails = {}));
var FeatureNotAvailableException;
(function (FeatureNotAvailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FeatureNotAvailableException");
    }
    FeatureNotAvailableException.isa = isa;
})(FeatureNotAvailableException = exports.FeatureNotAvailableException || (exports.FeatureNotAvailableException = {}));
var GetAutomationExecutionRequest;
(function (GetAutomationExecutionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAutomationExecutionRequest");
    }
    GetAutomationExecutionRequest.isa = isa;
})(GetAutomationExecutionRequest = exports.GetAutomationExecutionRequest || (exports.GetAutomationExecutionRequest = {}));
var GetAutomationExecutionResult;
(function (GetAutomationExecutionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAutomationExecutionResult");
    }
    GetAutomationExecutionResult.isa = isa;
})(GetAutomationExecutionResult = exports.GetAutomationExecutionResult || (exports.GetAutomationExecutionResult = {}));
var GetCalendarStateRequest;
(function (GetCalendarStateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCalendarStateRequest");
    }
    GetCalendarStateRequest.isa = isa;
})(GetCalendarStateRequest = exports.GetCalendarStateRequest || (exports.GetCalendarStateRequest = {}));
var GetCalendarStateResponse;
(function (GetCalendarStateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCalendarStateResponse");
    }
    GetCalendarStateResponse.isa = isa;
})(GetCalendarStateResponse = exports.GetCalendarStateResponse || (exports.GetCalendarStateResponse = {}));
var GetCommandInvocationRequest;
(function (GetCommandInvocationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCommandInvocationRequest");
    }
    GetCommandInvocationRequest.isa = isa;
})(GetCommandInvocationRequest = exports.GetCommandInvocationRequest || (exports.GetCommandInvocationRequest = {}));
var GetCommandInvocationResult;
(function (GetCommandInvocationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCommandInvocationResult");
    }
    GetCommandInvocationResult.isa = isa;
})(GetCommandInvocationResult = exports.GetCommandInvocationResult || (exports.GetCommandInvocationResult = {}));
var GetConnectionStatusRequest;
(function (GetConnectionStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectionStatusRequest");
    }
    GetConnectionStatusRequest.isa = isa;
})(GetConnectionStatusRequest = exports.GetConnectionStatusRequest || (exports.GetConnectionStatusRequest = {}));
var GetConnectionStatusResponse;
(function (GetConnectionStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectionStatusResponse");
    }
    GetConnectionStatusResponse.isa = isa;
})(GetConnectionStatusResponse = exports.GetConnectionStatusResponse || (exports.GetConnectionStatusResponse = {}));
var GetDefaultPatchBaselineRequest;
(function (GetDefaultPatchBaselineRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDefaultPatchBaselineRequest");
    }
    GetDefaultPatchBaselineRequest.isa = isa;
})(GetDefaultPatchBaselineRequest = exports.GetDefaultPatchBaselineRequest || (exports.GetDefaultPatchBaselineRequest = {}));
var GetDefaultPatchBaselineResult;
(function (GetDefaultPatchBaselineResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDefaultPatchBaselineResult");
    }
    GetDefaultPatchBaselineResult.isa = isa;
})(GetDefaultPatchBaselineResult = exports.GetDefaultPatchBaselineResult || (exports.GetDefaultPatchBaselineResult = {}));
var GetDeployablePatchSnapshotForInstanceRequest;
(function (GetDeployablePatchSnapshotForInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeployablePatchSnapshotForInstanceRequest");
    }
    GetDeployablePatchSnapshotForInstanceRequest.isa = isa;
})(GetDeployablePatchSnapshotForInstanceRequest = exports.GetDeployablePatchSnapshotForInstanceRequest || (exports.GetDeployablePatchSnapshotForInstanceRequest = {}));
var GetDeployablePatchSnapshotForInstanceResult;
(function (GetDeployablePatchSnapshotForInstanceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeployablePatchSnapshotForInstanceResult");
    }
    GetDeployablePatchSnapshotForInstanceResult.isa = isa;
})(GetDeployablePatchSnapshotForInstanceResult = exports.GetDeployablePatchSnapshotForInstanceResult || (exports.GetDeployablePatchSnapshotForInstanceResult = {}));
var GetDocumentRequest;
(function (GetDocumentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDocumentRequest");
    }
    GetDocumentRequest.isa = isa;
})(GetDocumentRequest = exports.GetDocumentRequest || (exports.GetDocumentRequest = {}));
var GetDocumentResult;
(function (GetDocumentResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDocumentResult");
    }
    GetDocumentResult.isa = isa;
})(GetDocumentResult = exports.GetDocumentResult || (exports.GetDocumentResult = {}));
var GetInventoryRequest;
(function (GetInventoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInventoryRequest");
    }
    GetInventoryRequest.isa = isa;
})(GetInventoryRequest = exports.GetInventoryRequest || (exports.GetInventoryRequest = {}));
var GetInventoryResult;
(function (GetInventoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInventoryResult");
    }
    GetInventoryResult.isa = isa;
})(GetInventoryResult = exports.GetInventoryResult || (exports.GetInventoryResult = {}));
var GetInventorySchemaRequest;
(function (GetInventorySchemaRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInventorySchemaRequest");
    }
    GetInventorySchemaRequest.isa = isa;
})(GetInventorySchemaRequest = exports.GetInventorySchemaRequest || (exports.GetInventorySchemaRequest = {}));
var GetInventorySchemaResult;
(function (GetInventorySchemaResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInventorySchemaResult");
    }
    GetInventorySchemaResult.isa = isa;
})(GetInventorySchemaResult = exports.GetInventorySchemaResult || (exports.GetInventorySchemaResult = {}));
var GetMaintenanceWindowExecutionRequest;
(function (GetMaintenanceWindowExecutionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMaintenanceWindowExecutionRequest");
    }
    GetMaintenanceWindowExecutionRequest.isa = isa;
})(GetMaintenanceWindowExecutionRequest = exports.GetMaintenanceWindowExecutionRequest || (exports.GetMaintenanceWindowExecutionRequest = {}));
var GetMaintenanceWindowExecutionResult;
(function (GetMaintenanceWindowExecutionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMaintenanceWindowExecutionResult");
    }
    GetMaintenanceWindowExecutionResult.isa = isa;
})(GetMaintenanceWindowExecutionResult = exports.GetMaintenanceWindowExecutionResult || (exports.GetMaintenanceWindowExecutionResult = {}));
var GetMaintenanceWindowExecutionTaskInvocationRequest;
(function (GetMaintenanceWindowExecutionTaskInvocationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMaintenanceWindowExecutionTaskInvocationRequest");
    }
    GetMaintenanceWindowExecutionTaskInvocationRequest.isa = isa;
})(GetMaintenanceWindowExecutionTaskInvocationRequest = exports.GetMaintenanceWindowExecutionTaskInvocationRequest || (exports.GetMaintenanceWindowExecutionTaskInvocationRequest = {}));
var GetMaintenanceWindowExecutionTaskInvocationResult;
(function (GetMaintenanceWindowExecutionTaskInvocationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMaintenanceWindowExecutionTaskInvocationResult");
    }
    GetMaintenanceWindowExecutionTaskInvocationResult.isa = isa;
})(GetMaintenanceWindowExecutionTaskInvocationResult = exports.GetMaintenanceWindowExecutionTaskInvocationResult || (exports.GetMaintenanceWindowExecutionTaskInvocationResult = {}));
var GetMaintenanceWindowExecutionTaskRequest;
(function (GetMaintenanceWindowExecutionTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMaintenanceWindowExecutionTaskRequest");
    }
    GetMaintenanceWindowExecutionTaskRequest.isa = isa;
})(GetMaintenanceWindowExecutionTaskRequest = exports.GetMaintenanceWindowExecutionTaskRequest || (exports.GetMaintenanceWindowExecutionTaskRequest = {}));
var GetMaintenanceWindowExecutionTaskResult;
(function (GetMaintenanceWindowExecutionTaskResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMaintenanceWindowExecutionTaskResult");
    }
    GetMaintenanceWindowExecutionTaskResult.isa = isa;
})(GetMaintenanceWindowExecutionTaskResult = exports.GetMaintenanceWindowExecutionTaskResult || (exports.GetMaintenanceWindowExecutionTaskResult = {}));
var GetMaintenanceWindowRequest;
(function (GetMaintenanceWindowRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMaintenanceWindowRequest");
    }
    GetMaintenanceWindowRequest.isa = isa;
})(GetMaintenanceWindowRequest = exports.GetMaintenanceWindowRequest || (exports.GetMaintenanceWindowRequest = {}));
var GetMaintenanceWindowResult;
(function (GetMaintenanceWindowResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMaintenanceWindowResult");
    }
    GetMaintenanceWindowResult.isa = isa;
})(GetMaintenanceWindowResult = exports.GetMaintenanceWindowResult || (exports.GetMaintenanceWindowResult = {}));
var GetMaintenanceWindowTaskRequest;
(function (GetMaintenanceWindowTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMaintenanceWindowTaskRequest");
    }
    GetMaintenanceWindowTaskRequest.isa = isa;
})(GetMaintenanceWindowTaskRequest = exports.GetMaintenanceWindowTaskRequest || (exports.GetMaintenanceWindowTaskRequest = {}));
var GetMaintenanceWindowTaskResult;
(function (GetMaintenanceWindowTaskResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMaintenanceWindowTaskResult");
    }
    GetMaintenanceWindowTaskResult.isa = isa;
})(GetMaintenanceWindowTaskResult = exports.GetMaintenanceWindowTaskResult || (exports.GetMaintenanceWindowTaskResult = {}));
var GetOpsItemRequest;
(function (GetOpsItemRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOpsItemRequest");
    }
    GetOpsItemRequest.isa = isa;
})(GetOpsItemRequest = exports.GetOpsItemRequest || (exports.GetOpsItemRequest = {}));
var GetOpsItemResponse;
(function (GetOpsItemResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOpsItemResponse");
    }
    GetOpsItemResponse.isa = isa;
})(GetOpsItemResponse = exports.GetOpsItemResponse || (exports.GetOpsItemResponse = {}));
var GetOpsSummaryRequest;
(function (GetOpsSummaryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOpsSummaryRequest");
    }
    GetOpsSummaryRequest.isa = isa;
})(GetOpsSummaryRequest = exports.GetOpsSummaryRequest || (exports.GetOpsSummaryRequest = {}));
var GetOpsSummaryResult;
(function (GetOpsSummaryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOpsSummaryResult");
    }
    GetOpsSummaryResult.isa = isa;
})(GetOpsSummaryResult = exports.GetOpsSummaryResult || (exports.GetOpsSummaryResult = {}));
var GetParameterHistoryRequest;
(function (GetParameterHistoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetParameterHistoryRequest");
    }
    GetParameterHistoryRequest.isa = isa;
})(GetParameterHistoryRequest = exports.GetParameterHistoryRequest || (exports.GetParameterHistoryRequest = {}));
var GetParameterHistoryResult;
(function (GetParameterHistoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetParameterHistoryResult");
    }
    GetParameterHistoryResult.isa = isa;
})(GetParameterHistoryResult = exports.GetParameterHistoryResult || (exports.GetParameterHistoryResult = {}));
var GetParameterRequest;
(function (GetParameterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetParameterRequest");
    }
    GetParameterRequest.isa = isa;
})(GetParameterRequest = exports.GetParameterRequest || (exports.GetParameterRequest = {}));
var GetParameterResult;
(function (GetParameterResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetParameterResult");
    }
    GetParameterResult.isa = isa;
})(GetParameterResult = exports.GetParameterResult || (exports.GetParameterResult = {}));
var GetParametersByPathRequest;
(function (GetParametersByPathRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetParametersByPathRequest");
    }
    GetParametersByPathRequest.isa = isa;
})(GetParametersByPathRequest = exports.GetParametersByPathRequest || (exports.GetParametersByPathRequest = {}));
var GetParametersByPathResult;
(function (GetParametersByPathResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetParametersByPathResult");
    }
    GetParametersByPathResult.isa = isa;
})(GetParametersByPathResult = exports.GetParametersByPathResult || (exports.GetParametersByPathResult = {}));
var GetParametersRequest;
(function (GetParametersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetParametersRequest");
    }
    GetParametersRequest.isa = isa;
})(GetParametersRequest = exports.GetParametersRequest || (exports.GetParametersRequest = {}));
var GetParametersResult;
(function (GetParametersResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetParametersResult");
    }
    GetParametersResult.isa = isa;
})(GetParametersResult = exports.GetParametersResult || (exports.GetParametersResult = {}));
var GetPatchBaselineForPatchGroupRequest;
(function (GetPatchBaselineForPatchGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPatchBaselineForPatchGroupRequest");
    }
    GetPatchBaselineForPatchGroupRequest.isa = isa;
})(GetPatchBaselineForPatchGroupRequest = exports.GetPatchBaselineForPatchGroupRequest || (exports.GetPatchBaselineForPatchGroupRequest = {}));
var GetPatchBaselineForPatchGroupResult;
(function (GetPatchBaselineForPatchGroupResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPatchBaselineForPatchGroupResult");
    }
    GetPatchBaselineForPatchGroupResult.isa = isa;
})(GetPatchBaselineForPatchGroupResult = exports.GetPatchBaselineForPatchGroupResult || (exports.GetPatchBaselineForPatchGroupResult = {}));
var GetPatchBaselineRequest;
(function (GetPatchBaselineRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPatchBaselineRequest");
    }
    GetPatchBaselineRequest.isa = isa;
})(GetPatchBaselineRequest = exports.GetPatchBaselineRequest || (exports.GetPatchBaselineRequest = {}));
var GetPatchBaselineResult;
(function (GetPatchBaselineResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPatchBaselineResult");
    }
    GetPatchBaselineResult.isa = isa;
})(GetPatchBaselineResult = exports.GetPatchBaselineResult || (exports.GetPatchBaselineResult = {}));
var GetServiceSettingRequest;
(function (GetServiceSettingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceSettingRequest");
    }
    GetServiceSettingRequest.isa = isa;
})(GetServiceSettingRequest = exports.GetServiceSettingRequest || (exports.GetServiceSettingRequest = {}));
var GetServiceSettingResult;
(function (GetServiceSettingResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceSettingResult");
    }
    GetServiceSettingResult.isa = isa;
})(GetServiceSettingResult = exports.GetServiceSettingResult || (exports.GetServiceSettingResult = {}));
var HierarchyLevelLimitExceededException;
(function (HierarchyLevelLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "HierarchyLevelLimitExceededException");
    }
    HierarchyLevelLimitExceededException.isa = isa;
})(HierarchyLevelLimitExceededException = exports.HierarchyLevelLimitExceededException || (exports.HierarchyLevelLimitExceededException = {}));
var HierarchyTypeMismatchException;
(function (HierarchyTypeMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "HierarchyTypeMismatchException");
    }
    HierarchyTypeMismatchException.isa = isa;
})(HierarchyTypeMismatchException = exports.HierarchyTypeMismatchException || (exports.HierarchyTypeMismatchException = {}));
var IdempotentParameterMismatch;
(function (IdempotentParameterMismatch) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdempotentParameterMismatch");
    }
    IdempotentParameterMismatch.isa = isa;
})(IdempotentParameterMismatch = exports.IdempotentParameterMismatch || (exports.IdempotentParameterMismatch = {}));
var IncompatiblePolicyException;
(function (IncompatiblePolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IncompatiblePolicyException");
    }
    IncompatiblePolicyException.isa = isa;
})(IncompatiblePolicyException = exports.IncompatiblePolicyException || (exports.IncompatiblePolicyException = {}));
var InstanceAggregatedAssociationOverview;
(function (InstanceAggregatedAssociationOverview) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceAggregatedAssociationOverview");
    }
    InstanceAggregatedAssociationOverview.isa = isa;
})(InstanceAggregatedAssociationOverview = exports.InstanceAggregatedAssociationOverview || (exports.InstanceAggregatedAssociationOverview = {}));
var InstanceAssociation;
(function (InstanceAssociation) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceAssociation");
    }
    InstanceAssociation.isa = isa;
})(InstanceAssociation = exports.InstanceAssociation || (exports.InstanceAssociation = {}));
var InstanceAssociationOutputLocation;
(function (InstanceAssociationOutputLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceAssociationOutputLocation");
    }
    InstanceAssociationOutputLocation.isa = isa;
})(InstanceAssociationOutputLocation = exports.InstanceAssociationOutputLocation || (exports.InstanceAssociationOutputLocation = {}));
var InstanceAssociationOutputUrl;
(function (InstanceAssociationOutputUrl) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceAssociationOutputUrl");
    }
    InstanceAssociationOutputUrl.isa = isa;
})(InstanceAssociationOutputUrl = exports.InstanceAssociationOutputUrl || (exports.InstanceAssociationOutputUrl = {}));
var InstanceAssociationStatusInfo;
(function (InstanceAssociationStatusInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceAssociationStatusInfo");
    }
    InstanceAssociationStatusInfo.isa = isa;
})(InstanceAssociationStatusInfo = exports.InstanceAssociationStatusInfo || (exports.InstanceAssociationStatusInfo = {}));
var InstanceInformation;
(function (InstanceInformation) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceInformation");
    }
    InstanceInformation.isa = isa;
})(InstanceInformation = exports.InstanceInformation || (exports.InstanceInformation = {}));
var InstanceInformationFilter;
(function (InstanceInformationFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceInformationFilter");
    }
    InstanceInformationFilter.isa = isa;
})(InstanceInformationFilter = exports.InstanceInformationFilter || (exports.InstanceInformationFilter = {}));
var InstanceInformationFilterKey;
(function (InstanceInformationFilterKey) {
    InstanceInformationFilterKey["ACTIVATION_IDS"] = "ActivationIds";
    InstanceInformationFilterKey["AGENT_VERSION"] = "AgentVersion";
    InstanceInformationFilterKey["ASSOCIATION_STATUS"] = "AssociationStatus";
    InstanceInformationFilterKey["IAM_ROLE"] = "IamRole";
    InstanceInformationFilterKey["INSTANCE_IDS"] = "InstanceIds";
    InstanceInformationFilterKey["PING_STATUS"] = "PingStatus";
    InstanceInformationFilterKey["PLATFORM_TYPES"] = "PlatformTypes";
    InstanceInformationFilterKey["RESOURCE_TYPE"] = "ResourceType";
})(InstanceInformationFilterKey = exports.InstanceInformationFilterKey || (exports.InstanceInformationFilterKey = {}));
var InstanceInformationStringFilter;
(function (InstanceInformationStringFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceInformationStringFilter");
    }
    InstanceInformationStringFilter.isa = isa;
})(InstanceInformationStringFilter = exports.InstanceInformationStringFilter || (exports.InstanceInformationStringFilter = {}));
var InstancePatchState;
(function (InstancePatchState) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstancePatchState");
    }
    InstancePatchState.isa = isa;
})(InstancePatchState = exports.InstancePatchState || (exports.InstancePatchState = {}));
var InstancePatchStateFilter;
(function (InstancePatchStateFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstancePatchStateFilter");
    }
    InstancePatchStateFilter.isa = isa;
})(InstancePatchStateFilter = exports.InstancePatchStateFilter || (exports.InstancePatchStateFilter = {}));
var InstancePatchStateOperatorType;
(function (InstancePatchStateOperatorType) {
    InstancePatchStateOperatorType["EQUAL"] = "Equal";
    InstancePatchStateOperatorType["GREATER_THAN"] = "GreaterThan";
    InstancePatchStateOperatorType["LESS_THAN"] = "LessThan";
    InstancePatchStateOperatorType["NOT_EQUAL"] = "NotEqual";
})(InstancePatchStateOperatorType = exports.InstancePatchStateOperatorType || (exports.InstancePatchStateOperatorType = {}));
var InternalServerError;
(function (InternalServerError) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerError");
    }
    InternalServerError.isa = isa;
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var InvalidActivation;
(function (InvalidActivation) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidActivation");
    }
    InvalidActivation.isa = isa;
})(InvalidActivation = exports.InvalidActivation || (exports.InvalidActivation = {}));
var InvalidActivationId;
(function (InvalidActivationId) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidActivationId");
    }
    InvalidActivationId.isa = isa;
})(InvalidActivationId = exports.InvalidActivationId || (exports.InvalidActivationId = {}));
var InvalidAggregatorException;
(function (InvalidAggregatorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAggregatorException");
    }
    InvalidAggregatorException.isa = isa;
})(InvalidAggregatorException = exports.InvalidAggregatorException || (exports.InvalidAggregatorException = {}));
var InvalidAllowedPatternException;
(function (InvalidAllowedPatternException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAllowedPatternException");
    }
    InvalidAllowedPatternException.isa = isa;
})(InvalidAllowedPatternException = exports.InvalidAllowedPatternException || (exports.InvalidAllowedPatternException = {}));
var InvalidAssociation;
(function (InvalidAssociation) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAssociation");
    }
    InvalidAssociation.isa = isa;
})(InvalidAssociation = exports.InvalidAssociation || (exports.InvalidAssociation = {}));
var InvalidAssociationVersion;
(function (InvalidAssociationVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAssociationVersion");
    }
    InvalidAssociationVersion.isa = isa;
})(InvalidAssociationVersion = exports.InvalidAssociationVersion || (exports.InvalidAssociationVersion = {}));
var InvalidAutomationExecutionParametersException;
(function (InvalidAutomationExecutionParametersException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAutomationExecutionParametersException");
    }
    InvalidAutomationExecutionParametersException.isa = isa;
})(InvalidAutomationExecutionParametersException = exports.InvalidAutomationExecutionParametersException || (exports.InvalidAutomationExecutionParametersException = {}));
var InvalidAutomationSignalException;
(function (InvalidAutomationSignalException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAutomationSignalException");
    }
    InvalidAutomationSignalException.isa = isa;
})(InvalidAutomationSignalException = exports.InvalidAutomationSignalException || (exports.InvalidAutomationSignalException = {}));
var InvalidAutomationStatusUpdateException;
(function (InvalidAutomationStatusUpdateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAutomationStatusUpdateException");
    }
    InvalidAutomationStatusUpdateException.isa = isa;
})(InvalidAutomationStatusUpdateException = exports.InvalidAutomationStatusUpdateException || (exports.InvalidAutomationStatusUpdateException = {}));
var InvalidCommandId;
(function (InvalidCommandId) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidCommandId");
    }
    InvalidCommandId.isa = isa;
})(InvalidCommandId = exports.InvalidCommandId || (exports.InvalidCommandId = {}));
var InvalidDeleteInventoryParametersException;
(function (InvalidDeleteInventoryParametersException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeleteInventoryParametersException");
    }
    InvalidDeleteInventoryParametersException.isa = isa;
})(InvalidDeleteInventoryParametersException = exports.InvalidDeleteInventoryParametersException || (exports.InvalidDeleteInventoryParametersException = {}));
var InvalidDeletionIdException;
(function (InvalidDeletionIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeletionIdException");
    }
    InvalidDeletionIdException.isa = isa;
})(InvalidDeletionIdException = exports.InvalidDeletionIdException || (exports.InvalidDeletionIdException = {}));
var InvalidDocument;
(function (InvalidDocument) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDocument");
    }
    InvalidDocument.isa = isa;
})(InvalidDocument = exports.InvalidDocument || (exports.InvalidDocument = {}));
var InvalidDocumentContent;
(function (InvalidDocumentContent) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDocumentContent");
    }
    InvalidDocumentContent.isa = isa;
})(InvalidDocumentContent = exports.InvalidDocumentContent || (exports.InvalidDocumentContent = {}));
var InvalidDocumentOperation;
(function (InvalidDocumentOperation) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDocumentOperation");
    }
    InvalidDocumentOperation.isa = isa;
})(InvalidDocumentOperation = exports.InvalidDocumentOperation || (exports.InvalidDocumentOperation = {}));
var InvalidDocumentSchemaVersion;
(function (InvalidDocumentSchemaVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDocumentSchemaVersion");
    }
    InvalidDocumentSchemaVersion.isa = isa;
})(InvalidDocumentSchemaVersion = exports.InvalidDocumentSchemaVersion || (exports.InvalidDocumentSchemaVersion = {}));
var InvalidDocumentType;
(function (InvalidDocumentType) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDocumentType");
    }
    InvalidDocumentType.isa = isa;
})(InvalidDocumentType = exports.InvalidDocumentType || (exports.InvalidDocumentType = {}));
var InvalidDocumentVersion;
(function (InvalidDocumentVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDocumentVersion");
    }
    InvalidDocumentVersion.isa = isa;
})(InvalidDocumentVersion = exports.InvalidDocumentVersion || (exports.InvalidDocumentVersion = {}));
var InvalidFilter;
(function (InvalidFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidFilter");
    }
    InvalidFilter.isa = isa;
})(InvalidFilter = exports.InvalidFilter || (exports.InvalidFilter = {}));
var InvalidFilterKey;
(function (InvalidFilterKey) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidFilterKey");
    }
    InvalidFilterKey.isa = isa;
})(InvalidFilterKey = exports.InvalidFilterKey || (exports.InvalidFilterKey = {}));
var InvalidFilterOption;
(function (InvalidFilterOption) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidFilterOption");
    }
    InvalidFilterOption.isa = isa;
})(InvalidFilterOption = exports.InvalidFilterOption || (exports.InvalidFilterOption = {}));
var InvalidFilterValue;
(function (InvalidFilterValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidFilterValue");
    }
    InvalidFilterValue.isa = isa;
})(InvalidFilterValue = exports.InvalidFilterValue || (exports.InvalidFilterValue = {}));
var InvalidInstanceId;
(function (InvalidInstanceId) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInstanceId");
    }
    InvalidInstanceId.isa = isa;
})(InvalidInstanceId = exports.InvalidInstanceId || (exports.InvalidInstanceId = {}));
var InvalidInstanceInformationFilterValue;
(function (InvalidInstanceInformationFilterValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInstanceInformationFilterValue");
    }
    InvalidInstanceInformationFilterValue.isa = isa;
})(InvalidInstanceInformationFilterValue = exports.InvalidInstanceInformationFilterValue || (exports.InvalidInstanceInformationFilterValue = {}));
var InvalidInventoryGroupException;
(function (InvalidInventoryGroupException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInventoryGroupException");
    }
    InvalidInventoryGroupException.isa = isa;
})(InvalidInventoryGroupException = exports.InvalidInventoryGroupException || (exports.InvalidInventoryGroupException = {}));
var InvalidInventoryItemContextException;
(function (InvalidInventoryItemContextException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInventoryItemContextException");
    }
    InvalidInventoryItemContextException.isa = isa;
})(InvalidInventoryItemContextException = exports.InvalidInventoryItemContextException || (exports.InvalidInventoryItemContextException = {}));
var InvalidInventoryRequestException;
(function (InvalidInventoryRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInventoryRequestException");
    }
    InvalidInventoryRequestException.isa = isa;
})(InvalidInventoryRequestException = exports.InvalidInventoryRequestException || (exports.InvalidInventoryRequestException = {}));
var InvalidItemContentException;
(function (InvalidItemContentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidItemContentException");
    }
    InvalidItemContentException.isa = isa;
})(InvalidItemContentException = exports.InvalidItemContentException || (exports.InvalidItemContentException = {}));
var InvalidKeyId;
(function (InvalidKeyId) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidKeyId");
    }
    InvalidKeyId.isa = isa;
})(InvalidKeyId = exports.InvalidKeyId || (exports.InvalidKeyId = {}));
var InvalidNextToken;
(function (InvalidNextToken) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextToken");
    }
    InvalidNextToken.isa = isa;
})(InvalidNextToken = exports.InvalidNextToken || (exports.InvalidNextToken = {}));
var InvalidNotificationConfig;
(function (InvalidNotificationConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNotificationConfig");
    }
    InvalidNotificationConfig.isa = isa;
})(InvalidNotificationConfig = exports.InvalidNotificationConfig || (exports.InvalidNotificationConfig = {}));
var InvalidOptionException;
(function (InvalidOptionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOptionException");
    }
    InvalidOptionException.isa = isa;
})(InvalidOptionException = exports.InvalidOptionException || (exports.InvalidOptionException = {}));
var InvalidOutputFolder;
(function (InvalidOutputFolder) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOutputFolder");
    }
    InvalidOutputFolder.isa = isa;
})(InvalidOutputFolder = exports.InvalidOutputFolder || (exports.InvalidOutputFolder = {}));
var InvalidOutputLocation;
(function (InvalidOutputLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOutputLocation");
    }
    InvalidOutputLocation.isa = isa;
})(InvalidOutputLocation = exports.InvalidOutputLocation || (exports.InvalidOutputLocation = {}));
var InvalidParameters;
(function (InvalidParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameters");
    }
    InvalidParameters.isa = isa;
})(InvalidParameters = exports.InvalidParameters || (exports.InvalidParameters = {}));
var InvalidPermissionType;
(function (InvalidPermissionType) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPermissionType");
    }
    InvalidPermissionType.isa = isa;
})(InvalidPermissionType = exports.InvalidPermissionType || (exports.InvalidPermissionType = {}));
var InvalidPluginName;
(function (InvalidPluginName) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPluginName");
    }
    InvalidPluginName.isa = isa;
})(InvalidPluginName = exports.InvalidPluginName || (exports.InvalidPluginName = {}));
var InvalidPolicyAttributeException;
(function (InvalidPolicyAttributeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPolicyAttributeException");
    }
    InvalidPolicyAttributeException.isa = isa;
})(InvalidPolicyAttributeException = exports.InvalidPolicyAttributeException || (exports.InvalidPolicyAttributeException = {}));
var InvalidPolicyTypeException;
(function (InvalidPolicyTypeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPolicyTypeException");
    }
    InvalidPolicyTypeException.isa = isa;
})(InvalidPolicyTypeException = exports.InvalidPolicyTypeException || (exports.InvalidPolicyTypeException = {}));
var InvalidResourceId;
(function (InvalidResourceId) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidResourceId");
    }
    InvalidResourceId.isa = isa;
})(InvalidResourceId = exports.InvalidResourceId || (exports.InvalidResourceId = {}));
var InvalidResourceType;
(function (InvalidResourceType) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidResourceType");
    }
    InvalidResourceType.isa = isa;
})(InvalidResourceType = exports.InvalidResourceType || (exports.InvalidResourceType = {}));
var InvalidResultAttributeException;
(function (InvalidResultAttributeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidResultAttributeException");
    }
    InvalidResultAttributeException.isa = isa;
})(InvalidResultAttributeException = exports.InvalidResultAttributeException || (exports.InvalidResultAttributeException = {}));
var InvalidRole;
(function (InvalidRole) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRole");
    }
    InvalidRole.isa = isa;
})(InvalidRole = exports.InvalidRole || (exports.InvalidRole = {}));
var InvalidSchedule;
(function (InvalidSchedule) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSchedule");
    }
    InvalidSchedule.isa = isa;
})(InvalidSchedule = exports.InvalidSchedule || (exports.InvalidSchedule = {}));
var InvalidTarget;
(function (InvalidTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTarget");
    }
    InvalidTarget.isa = isa;
})(InvalidTarget = exports.InvalidTarget || (exports.InvalidTarget = {}));
var InvalidTypeNameException;
(function (InvalidTypeNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTypeNameException");
    }
    InvalidTypeNameException.isa = isa;
})(InvalidTypeNameException = exports.InvalidTypeNameException || (exports.InvalidTypeNameException = {}));
var InvalidUpdate;
(function (InvalidUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidUpdate");
    }
    InvalidUpdate.isa = isa;
})(InvalidUpdate = exports.InvalidUpdate || (exports.InvalidUpdate = {}));
var InventoryAggregator;
(function (InventoryAggregator) {
    function isa(o) {
        return smithy_client_1.isa(o, "InventoryAggregator");
    }
    InventoryAggregator.isa = isa;
})(InventoryAggregator = exports.InventoryAggregator || (exports.InventoryAggregator = {}));
var InventoryAttributeDataType;
(function (InventoryAttributeDataType) {
    InventoryAttributeDataType["NUMBER"] = "number";
    InventoryAttributeDataType["STRING"] = "string";
})(InventoryAttributeDataType = exports.InventoryAttributeDataType || (exports.InventoryAttributeDataType = {}));
var InventoryDeletionStatus;
(function (InventoryDeletionStatus) {
    InventoryDeletionStatus["COMPLETE"] = "Complete";
    InventoryDeletionStatus["IN_PROGRESS"] = "InProgress";
})(InventoryDeletionStatus = exports.InventoryDeletionStatus || (exports.InventoryDeletionStatus = {}));
var InventoryDeletionStatusItem;
(function (InventoryDeletionStatusItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "InventoryDeletionStatusItem");
    }
    InventoryDeletionStatusItem.isa = isa;
})(InventoryDeletionStatusItem = exports.InventoryDeletionStatusItem || (exports.InventoryDeletionStatusItem = {}));
var InventoryDeletionSummary;
(function (InventoryDeletionSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "InventoryDeletionSummary");
    }
    InventoryDeletionSummary.isa = isa;
})(InventoryDeletionSummary = exports.InventoryDeletionSummary || (exports.InventoryDeletionSummary = {}));
var InventoryDeletionSummaryItem;
(function (InventoryDeletionSummaryItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "InventoryDeletionSummaryItem");
    }
    InventoryDeletionSummaryItem.isa = isa;
})(InventoryDeletionSummaryItem = exports.InventoryDeletionSummaryItem || (exports.InventoryDeletionSummaryItem = {}));
var InventoryFilter;
(function (InventoryFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "InventoryFilter");
    }
    InventoryFilter.isa = isa;
})(InventoryFilter = exports.InventoryFilter || (exports.InventoryFilter = {}));
var InventoryGroup;
(function (InventoryGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "InventoryGroup");
    }
    InventoryGroup.isa = isa;
})(InventoryGroup = exports.InventoryGroup || (exports.InventoryGroup = {}));
var InventoryItem;
(function (InventoryItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "InventoryItem");
    }
    InventoryItem.isa = isa;
})(InventoryItem = exports.InventoryItem || (exports.InventoryItem = {}));
var InventoryItemAttribute;
(function (InventoryItemAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "InventoryItemAttribute");
    }
    InventoryItemAttribute.isa = isa;
})(InventoryItemAttribute = exports.InventoryItemAttribute || (exports.InventoryItemAttribute = {}));
var InventoryItemSchema;
(function (InventoryItemSchema) {
    function isa(o) {
        return smithy_client_1.isa(o, "InventoryItemSchema");
    }
    InventoryItemSchema.isa = isa;
})(InventoryItemSchema = exports.InventoryItemSchema || (exports.InventoryItemSchema = {}));
var InventoryQueryOperatorType;
(function (InventoryQueryOperatorType) {
    InventoryQueryOperatorType["BEGIN_WITH"] = "BeginWith";
    InventoryQueryOperatorType["EQUAL"] = "Equal";
    InventoryQueryOperatorType["EXISTS"] = "Exists";
    InventoryQueryOperatorType["GREATER_THAN"] = "GreaterThan";
    InventoryQueryOperatorType["LESS_THAN"] = "LessThan";
    InventoryQueryOperatorType["NOT_EQUAL"] = "NotEqual";
})(InventoryQueryOperatorType = exports.InventoryQueryOperatorType || (exports.InventoryQueryOperatorType = {}));
var InventoryResultEntity;
(function (InventoryResultEntity) {
    function isa(o) {
        return smithy_client_1.isa(o, "InventoryResultEntity");
    }
    InventoryResultEntity.isa = isa;
})(InventoryResultEntity = exports.InventoryResultEntity || (exports.InventoryResultEntity = {}));
var InventoryResultItem;
(function (InventoryResultItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "InventoryResultItem");
    }
    InventoryResultItem.isa = isa;
})(InventoryResultItem = exports.InventoryResultItem || (exports.InventoryResultItem = {}));
var InventorySchemaDeleteOption;
(function (InventorySchemaDeleteOption) {
    InventorySchemaDeleteOption["DELETE_SCHEMA"] = "DeleteSchema";
    InventorySchemaDeleteOption["DISABLE_SCHEMA"] = "DisableSchema";
})(InventorySchemaDeleteOption = exports.InventorySchemaDeleteOption || (exports.InventorySchemaDeleteOption = {}));
var InvocationDoesNotExist;
(function (InvocationDoesNotExist) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvocationDoesNotExist");
    }
    InvocationDoesNotExist.isa = isa;
})(InvocationDoesNotExist = exports.InvocationDoesNotExist || (exports.InvocationDoesNotExist = {}));
var ItemContentMismatchException;
(function (ItemContentMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ItemContentMismatchException");
    }
    ItemContentMismatchException.isa = isa;
})(ItemContentMismatchException = exports.ItemContentMismatchException || (exports.ItemContentMismatchException = {}));
var ItemSizeLimitExceededException;
(function (ItemSizeLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ItemSizeLimitExceededException");
    }
    ItemSizeLimitExceededException.isa = isa;
})(ItemSizeLimitExceededException = exports.ItemSizeLimitExceededException || (exports.ItemSizeLimitExceededException = {}));
var LabelParameterVersionRequest;
(function (LabelParameterVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelParameterVersionRequest");
    }
    LabelParameterVersionRequest.isa = isa;
})(LabelParameterVersionRequest = exports.LabelParameterVersionRequest || (exports.LabelParameterVersionRequest = {}));
var LabelParameterVersionResult;
(function (LabelParameterVersionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelParameterVersionResult");
    }
    LabelParameterVersionResult.isa = isa;
})(LabelParameterVersionResult = exports.LabelParameterVersionResult || (exports.LabelParameterVersionResult = {}));
var LastResourceDataSyncStatus;
(function (LastResourceDataSyncStatus) {
    LastResourceDataSyncStatus["FAILED"] = "Failed";
    LastResourceDataSyncStatus["INPROGRESS"] = "InProgress";
    LastResourceDataSyncStatus["SUCCESSFUL"] = "Successful";
})(LastResourceDataSyncStatus = exports.LastResourceDataSyncStatus || (exports.LastResourceDataSyncStatus = {}));
var ListAssociationVersionsRequest;
(function (ListAssociationVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssociationVersionsRequest");
    }
    ListAssociationVersionsRequest.isa = isa;
})(ListAssociationVersionsRequest = exports.ListAssociationVersionsRequest || (exports.ListAssociationVersionsRequest = {}));
var ListAssociationVersionsResult;
(function (ListAssociationVersionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssociationVersionsResult");
    }
    ListAssociationVersionsResult.isa = isa;
})(ListAssociationVersionsResult = exports.ListAssociationVersionsResult || (exports.ListAssociationVersionsResult = {}));
var ListAssociationsRequest;
(function (ListAssociationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssociationsRequest");
    }
    ListAssociationsRequest.isa = isa;
})(ListAssociationsRequest = exports.ListAssociationsRequest || (exports.ListAssociationsRequest = {}));
var ListAssociationsResult;
(function (ListAssociationsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssociationsResult");
    }
    ListAssociationsResult.isa = isa;
})(ListAssociationsResult = exports.ListAssociationsResult || (exports.ListAssociationsResult = {}));
var ListCommandInvocationsRequest;
(function (ListCommandInvocationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCommandInvocationsRequest");
    }
    ListCommandInvocationsRequest.isa = isa;
})(ListCommandInvocationsRequest = exports.ListCommandInvocationsRequest || (exports.ListCommandInvocationsRequest = {}));
var ListCommandInvocationsResult;
(function (ListCommandInvocationsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCommandInvocationsResult");
    }
    ListCommandInvocationsResult.isa = isa;
})(ListCommandInvocationsResult = exports.ListCommandInvocationsResult || (exports.ListCommandInvocationsResult = {}));
var ListCommandsRequest;
(function (ListCommandsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCommandsRequest");
    }
    ListCommandsRequest.isa = isa;
})(ListCommandsRequest = exports.ListCommandsRequest || (exports.ListCommandsRequest = {}));
var ListCommandsResult;
(function (ListCommandsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCommandsResult");
    }
    ListCommandsResult.isa = isa;
})(ListCommandsResult = exports.ListCommandsResult || (exports.ListCommandsResult = {}));
var ListComplianceItemsRequest;
(function (ListComplianceItemsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListComplianceItemsRequest");
    }
    ListComplianceItemsRequest.isa = isa;
})(ListComplianceItemsRequest = exports.ListComplianceItemsRequest || (exports.ListComplianceItemsRequest = {}));
var ListComplianceItemsResult;
(function (ListComplianceItemsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListComplianceItemsResult");
    }
    ListComplianceItemsResult.isa = isa;
})(ListComplianceItemsResult = exports.ListComplianceItemsResult || (exports.ListComplianceItemsResult = {}));
var ListComplianceSummariesRequest;
(function (ListComplianceSummariesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListComplianceSummariesRequest");
    }
    ListComplianceSummariesRequest.isa = isa;
})(ListComplianceSummariesRequest = exports.ListComplianceSummariesRequest || (exports.ListComplianceSummariesRequest = {}));
var ListComplianceSummariesResult;
(function (ListComplianceSummariesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListComplianceSummariesResult");
    }
    ListComplianceSummariesResult.isa = isa;
})(ListComplianceSummariesResult = exports.ListComplianceSummariesResult || (exports.ListComplianceSummariesResult = {}));
var ListDocumentVersionsRequest;
(function (ListDocumentVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDocumentVersionsRequest");
    }
    ListDocumentVersionsRequest.isa = isa;
})(ListDocumentVersionsRequest = exports.ListDocumentVersionsRequest || (exports.ListDocumentVersionsRequest = {}));
var ListDocumentVersionsResult;
(function (ListDocumentVersionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDocumentVersionsResult");
    }
    ListDocumentVersionsResult.isa = isa;
})(ListDocumentVersionsResult = exports.ListDocumentVersionsResult || (exports.ListDocumentVersionsResult = {}));
var ListDocumentsRequest;
(function (ListDocumentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDocumentsRequest");
    }
    ListDocumentsRequest.isa = isa;
})(ListDocumentsRequest = exports.ListDocumentsRequest || (exports.ListDocumentsRequest = {}));
var ListDocumentsResult;
(function (ListDocumentsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDocumentsResult");
    }
    ListDocumentsResult.isa = isa;
})(ListDocumentsResult = exports.ListDocumentsResult || (exports.ListDocumentsResult = {}));
var ListInventoryEntriesRequest;
(function (ListInventoryEntriesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInventoryEntriesRequest");
    }
    ListInventoryEntriesRequest.isa = isa;
})(ListInventoryEntriesRequest = exports.ListInventoryEntriesRequest || (exports.ListInventoryEntriesRequest = {}));
var ListInventoryEntriesResult;
(function (ListInventoryEntriesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInventoryEntriesResult");
    }
    ListInventoryEntriesResult.isa = isa;
})(ListInventoryEntriesResult = exports.ListInventoryEntriesResult || (exports.ListInventoryEntriesResult = {}));
var ListResourceComplianceSummariesRequest;
(function (ListResourceComplianceSummariesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceComplianceSummariesRequest");
    }
    ListResourceComplianceSummariesRequest.isa = isa;
})(ListResourceComplianceSummariesRequest = exports.ListResourceComplianceSummariesRequest || (exports.ListResourceComplianceSummariesRequest = {}));
var ListResourceComplianceSummariesResult;
(function (ListResourceComplianceSummariesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceComplianceSummariesResult");
    }
    ListResourceComplianceSummariesResult.isa = isa;
})(ListResourceComplianceSummariesResult = exports.ListResourceComplianceSummariesResult || (exports.ListResourceComplianceSummariesResult = {}));
var ListResourceDataSyncRequest;
(function (ListResourceDataSyncRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceDataSyncRequest");
    }
    ListResourceDataSyncRequest.isa = isa;
})(ListResourceDataSyncRequest = exports.ListResourceDataSyncRequest || (exports.ListResourceDataSyncRequest = {}));
var ListResourceDataSyncResult;
(function (ListResourceDataSyncResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceDataSyncResult");
    }
    ListResourceDataSyncResult.isa = isa;
})(ListResourceDataSyncResult = exports.ListResourceDataSyncResult || (exports.ListResourceDataSyncResult = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceRequest");
    }
    ListTagsForResourceRequest.isa = isa;
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceResult");
    }
    ListTagsForResourceResult.isa = isa;
})(ListTagsForResourceResult = exports.ListTagsForResourceResult || (exports.ListTagsForResourceResult = {}));
var LoggingInfo;
(function (LoggingInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoggingInfo");
    }
    LoggingInfo.isa = isa;
})(LoggingInfo = exports.LoggingInfo || (exports.LoggingInfo = {}));
var MaintenanceWindowAutomationParameters;
(function (MaintenanceWindowAutomationParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowAutomationParameters");
    }
    MaintenanceWindowAutomationParameters.isa = isa;
})(MaintenanceWindowAutomationParameters = exports.MaintenanceWindowAutomationParameters || (exports.MaintenanceWindowAutomationParameters = {}));
var MaintenanceWindowExecution;
(function (MaintenanceWindowExecution) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowExecution");
    }
    MaintenanceWindowExecution.isa = isa;
})(MaintenanceWindowExecution = exports.MaintenanceWindowExecution || (exports.MaintenanceWindowExecution = {}));
var MaintenanceWindowExecutionStatus;
(function (MaintenanceWindowExecutionStatus) {
    MaintenanceWindowExecutionStatus["Cancelled"] = "CANCELLED";
    MaintenanceWindowExecutionStatus["Cancelling"] = "CANCELLING";
    MaintenanceWindowExecutionStatus["Failed"] = "FAILED";
    MaintenanceWindowExecutionStatus["InProgress"] = "IN_PROGRESS";
    MaintenanceWindowExecutionStatus["Pending"] = "PENDING";
    MaintenanceWindowExecutionStatus["SkippedOverlapping"] = "SKIPPED_OVERLAPPING";
    MaintenanceWindowExecutionStatus["Success"] = "SUCCESS";
    MaintenanceWindowExecutionStatus["TimedOut"] = "TIMED_OUT";
})(MaintenanceWindowExecutionStatus = exports.MaintenanceWindowExecutionStatus || (exports.MaintenanceWindowExecutionStatus = {}));
var MaintenanceWindowExecutionTaskIdentity;
(function (MaintenanceWindowExecutionTaskIdentity) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowExecutionTaskIdentity");
    }
    MaintenanceWindowExecutionTaskIdentity.isa = isa;
})(MaintenanceWindowExecutionTaskIdentity = exports.MaintenanceWindowExecutionTaskIdentity || (exports.MaintenanceWindowExecutionTaskIdentity = {}));
var MaintenanceWindowExecutionTaskInvocationIdentity;
(function (MaintenanceWindowExecutionTaskInvocationIdentity) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowExecutionTaskInvocationIdentity");
    }
    MaintenanceWindowExecutionTaskInvocationIdentity.isa = isa;
})(MaintenanceWindowExecutionTaskInvocationIdentity = exports.MaintenanceWindowExecutionTaskInvocationIdentity || (exports.MaintenanceWindowExecutionTaskInvocationIdentity = {}));
var MaintenanceWindowFilter;
(function (MaintenanceWindowFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowFilter");
    }
    MaintenanceWindowFilter.isa = isa;
})(MaintenanceWindowFilter = exports.MaintenanceWindowFilter || (exports.MaintenanceWindowFilter = {}));
var MaintenanceWindowIdentity;
(function (MaintenanceWindowIdentity) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowIdentity");
    }
    MaintenanceWindowIdentity.isa = isa;
})(MaintenanceWindowIdentity = exports.MaintenanceWindowIdentity || (exports.MaintenanceWindowIdentity = {}));
var MaintenanceWindowIdentityForTarget;
(function (MaintenanceWindowIdentityForTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowIdentityForTarget");
    }
    MaintenanceWindowIdentityForTarget.isa = isa;
})(MaintenanceWindowIdentityForTarget = exports.MaintenanceWindowIdentityForTarget || (exports.MaintenanceWindowIdentityForTarget = {}));
var MaintenanceWindowLambdaParameters;
(function (MaintenanceWindowLambdaParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowLambdaParameters");
    }
    MaintenanceWindowLambdaParameters.isa = isa;
})(MaintenanceWindowLambdaParameters = exports.MaintenanceWindowLambdaParameters || (exports.MaintenanceWindowLambdaParameters = {}));
var MaintenanceWindowResourceType;
(function (MaintenanceWindowResourceType) {
    MaintenanceWindowResourceType["Instance"] = "INSTANCE";
    MaintenanceWindowResourceType["ResourceGroup"] = "RESOURCE_GROUP";
})(MaintenanceWindowResourceType = exports.MaintenanceWindowResourceType || (exports.MaintenanceWindowResourceType = {}));
var MaintenanceWindowRunCommandParameters;
(function (MaintenanceWindowRunCommandParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowRunCommandParameters");
    }
    MaintenanceWindowRunCommandParameters.isa = isa;
})(MaintenanceWindowRunCommandParameters = exports.MaintenanceWindowRunCommandParameters || (exports.MaintenanceWindowRunCommandParameters = {}));
var MaintenanceWindowStepFunctionsParameters;
(function (MaintenanceWindowStepFunctionsParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowStepFunctionsParameters");
    }
    MaintenanceWindowStepFunctionsParameters.isa = isa;
})(MaintenanceWindowStepFunctionsParameters = exports.MaintenanceWindowStepFunctionsParameters || (exports.MaintenanceWindowStepFunctionsParameters = {}));
var MaintenanceWindowTarget;
(function (MaintenanceWindowTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowTarget");
    }
    MaintenanceWindowTarget.isa = isa;
})(MaintenanceWindowTarget = exports.MaintenanceWindowTarget || (exports.MaintenanceWindowTarget = {}));
var MaintenanceWindowTask;
(function (MaintenanceWindowTask) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowTask");
    }
    MaintenanceWindowTask.isa = isa;
})(MaintenanceWindowTask = exports.MaintenanceWindowTask || (exports.MaintenanceWindowTask = {}));
var MaintenanceWindowTaskInvocationParameters;
(function (MaintenanceWindowTaskInvocationParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowTaskInvocationParameters");
    }
    MaintenanceWindowTaskInvocationParameters.isa = isa;
})(MaintenanceWindowTaskInvocationParameters = exports.MaintenanceWindowTaskInvocationParameters || (exports.MaintenanceWindowTaskInvocationParameters = {}));
var MaintenanceWindowTaskParameterValueExpression;
(function (MaintenanceWindowTaskParameterValueExpression) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaintenanceWindowTaskParameterValueExpression");
    }
    MaintenanceWindowTaskParameterValueExpression.isa = isa;
})(MaintenanceWindowTaskParameterValueExpression = exports.MaintenanceWindowTaskParameterValueExpression || (exports.MaintenanceWindowTaskParameterValueExpression = {}));
var MaintenanceWindowTaskType;
(function (MaintenanceWindowTaskType) {
    MaintenanceWindowTaskType["Automation"] = "AUTOMATION";
    MaintenanceWindowTaskType["Lambda"] = "LAMBDA";
    MaintenanceWindowTaskType["RunCommand"] = "RUN_COMMAND";
    MaintenanceWindowTaskType["StepFunctions"] = "STEP_FUNCTIONS";
})(MaintenanceWindowTaskType = exports.MaintenanceWindowTaskType || (exports.MaintenanceWindowTaskType = {}));
var MaxDocumentSizeExceeded;
(function (MaxDocumentSizeExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaxDocumentSizeExceeded");
    }
    MaxDocumentSizeExceeded.isa = isa;
})(MaxDocumentSizeExceeded = exports.MaxDocumentSizeExceeded || (exports.MaxDocumentSizeExceeded = {}));
var ModifyDocumentPermissionRequest;
(function (ModifyDocumentPermissionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyDocumentPermissionRequest");
    }
    ModifyDocumentPermissionRequest.isa = isa;
})(ModifyDocumentPermissionRequest = exports.ModifyDocumentPermissionRequest || (exports.ModifyDocumentPermissionRequest = {}));
var ModifyDocumentPermissionResponse;
(function (ModifyDocumentPermissionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyDocumentPermissionResponse");
    }
    ModifyDocumentPermissionResponse.isa = isa;
})(ModifyDocumentPermissionResponse = exports.ModifyDocumentPermissionResponse || (exports.ModifyDocumentPermissionResponse = {}));
var NonCompliantSummary;
(function (NonCompliantSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "NonCompliantSummary");
    }
    NonCompliantSummary.isa = isa;
})(NonCompliantSummary = exports.NonCompliantSummary || (exports.NonCompliantSummary = {}));
var NotificationConfig;
(function (NotificationConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotificationConfig");
    }
    NotificationConfig.isa = isa;
})(NotificationConfig = exports.NotificationConfig || (exports.NotificationConfig = {}));
var NotificationEvent;
(function (NotificationEvent) {
    NotificationEvent["ALL"] = "All";
    NotificationEvent["CANCELLED"] = "Cancelled";
    NotificationEvent["FAILED"] = "Failed";
    NotificationEvent["IN_PROGRESS"] = "InProgress";
    NotificationEvent["SUCCESS"] = "Success";
    NotificationEvent["TIMED_OUT"] = "TimedOut";
})(NotificationEvent = exports.NotificationEvent || (exports.NotificationEvent = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["Command"] = "Command";
    NotificationType["Invocation"] = "Invocation";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
var OperatingSystem;
(function (OperatingSystem) {
    OperatingSystem["AmazonLinux"] = "AMAZON_LINUX";
    OperatingSystem["AmazonLinux2"] = "AMAZON_LINUX_2";
    OperatingSystem["CentOS"] = "CENTOS";
    OperatingSystem["RedhatEnterpriseLinux"] = "REDHAT_ENTERPRISE_LINUX";
    OperatingSystem["Suse"] = "SUSE";
    OperatingSystem["Ubuntu"] = "UBUNTU";
    OperatingSystem["Windows"] = "WINDOWS";
})(OperatingSystem = exports.OperatingSystem || (exports.OperatingSystem = {}));
var OpsAggregator;
(function (OpsAggregator) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsAggregator");
    }
    OpsAggregator.isa = isa;
})(OpsAggregator = exports.OpsAggregator || (exports.OpsAggregator = {}));
var OpsEntity;
(function (OpsEntity) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsEntity");
    }
    OpsEntity.isa = isa;
})(OpsEntity = exports.OpsEntity || (exports.OpsEntity = {}));
var OpsEntityItem;
(function (OpsEntityItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsEntityItem");
    }
    OpsEntityItem.isa = isa;
})(OpsEntityItem = exports.OpsEntityItem || (exports.OpsEntityItem = {}));
var OpsFilter;
(function (OpsFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsFilter");
    }
    OpsFilter.isa = isa;
})(OpsFilter = exports.OpsFilter || (exports.OpsFilter = {}));
var OpsFilterOperatorType;
(function (OpsFilterOperatorType) {
    OpsFilterOperatorType["BEGIN_WITH"] = "BeginWith";
    OpsFilterOperatorType["EQUAL"] = "Equal";
    OpsFilterOperatorType["EXISTS"] = "Exists";
    OpsFilterOperatorType["GREATER_THAN"] = "GreaterThan";
    OpsFilterOperatorType["LESS_THAN"] = "LessThan";
    OpsFilterOperatorType["NOT_EQUAL"] = "NotEqual";
})(OpsFilterOperatorType = exports.OpsFilterOperatorType || (exports.OpsFilterOperatorType = {}));
var OpsItem;
(function (OpsItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsItem");
    }
    OpsItem.isa = isa;
})(OpsItem = exports.OpsItem || (exports.OpsItem = {}));
var OpsItemAlreadyExistsException;
(function (OpsItemAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsItemAlreadyExistsException");
    }
    OpsItemAlreadyExistsException.isa = isa;
})(OpsItemAlreadyExistsException = exports.OpsItemAlreadyExistsException || (exports.OpsItemAlreadyExistsException = {}));
var OpsItemDataType;
(function (OpsItemDataType) {
    OpsItemDataType["SEARCHABLE_STRING"] = "SearchableString";
    OpsItemDataType["STRING"] = "String";
})(OpsItemDataType = exports.OpsItemDataType || (exports.OpsItemDataType = {}));
var OpsItemDataValue;
(function (OpsItemDataValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsItemDataValue");
    }
    OpsItemDataValue.isa = isa;
})(OpsItemDataValue = exports.OpsItemDataValue || (exports.OpsItemDataValue = {}));
var OpsItemFilter;
(function (OpsItemFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsItemFilter");
    }
    OpsItemFilter.isa = isa;
})(OpsItemFilter = exports.OpsItemFilter || (exports.OpsItemFilter = {}));
var OpsItemFilterKey;
(function (OpsItemFilterKey) {
    OpsItemFilterKey["AUTOMATION_ID"] = "AutomationId";
    OpsItemFilterKey["CATEGORY"] = "Category";
    OpsItemFilterKey["CREATED_BY"] = "CreatedBy";
    OpsItemFilterKey["CREATED_TIME"] = "CreatedTime";
    OpsItemFilterKey["LAST_MODIFIED_TIME"] = "LastModifiedTime";
    OpsItemFilterKey["OPERATIONAL_DATA"] = "OperationalData";
    OpsItemFilterKey["OPERATIONAL_DATA_KEY"] = "OperationalDataKey";
    OpsItemFilterKey["OPERATIONAL_DATA_VALUE"] = "OperationalDataValue";
    OpsItemFilterKey["OPSITEM_ID"] = "OpsItemId";
    OpsItemFilterKey["PRIORITY"] = "Priority";
    OpsItemFilterKey["RESOURCE_ID"] = "ResourceId";
    OpsItemFilterKey["SEVERITY"] = "Severity";
    OpsItemFilterKey["SOURCE"] = "Source";
    OpsItemFilterKey["STATUS"] = "Status";
    OpsItemFilterKey["TITLE"] = "Title";
})(OpsItemFilterKey = exports.OpsItemFilterKey || (exports.OpsItemFilterKey = {}));
var OpsItemFilterOperator;
(function (OpsItemFilterOperator) {
    OpsItemFilterOperator["CONTAINS"] = "Contains";
    OpsItemFilterOperator["EQUAL"] = "Equal";
    OpsItemFilterOperator["GREATER_THAN"] = "GreaterThan";
    OpsItemFilterOperator["LESS_THAN"] = "LessThan";
})(OpsItemFilterOperator = exports.OpsItemFilterOperator || (exports.OpsItemFilterOperator = {}));
var OpsItemInvalidParameterException;
(function (OpsItemInvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsItemInvalidParameterException");
    }
    OpsItemInvalidParameterException.isa = isa;
})(OpsItemInvalidParameterException = exports.OpsItemInvalidParameterException || (exports.OpsItemInvalidParameterException = {}));
var OpsItemLimitExceededException;
(function (OpsItemLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsItemLimitExceededException");
    }
    OpsItemLimitExceededException.isa = isa;
})(OpsItemLimitExceededException = exports.OpsItemLimitExceededException || (exports.OpsItemLimitExceededException = {}));
var OpsItemNotFoundException;
(function (OpsItemNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsItemNotFoundException");
    }
    OpsItemNotFoundException.isa = isa;
})(OpsItemNotFoundException = exports.OpsItemNotFoundException || (exports.OpsItemNotFoundException = {}));
var OpsItemNotification;
(function (OpsItemNotification) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsItemNotification");
    }
    OpsItemNotification.isa = isa;
})(OpsItemNotification = exports.OpsItemNotification || (exports.OpsItemNotification = {}));
var OpsItemStatus;
(function (OpsItemStatus) {
    OpsItemStatus["IN_PROGRESS"] = "InProgress";
    OpsItemStatus["OPEN"] = "Open";
    OpsItemStatus["RESOLVED"] = "Resolved";
})(OpsItemStatus = exports.OpsItemStatus || (exports.OpsItemStatus = {}));
var OpsItemSummary;
(function (OpsItemSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsItemSummary");
    }
    OpsItemSummary.isa = isa;
})(OpsItemSummary = exports.OpsItemSummary || (exports.OpsItemSummary = {}));
var OpsResultAttribute;
(function (OpsResultAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpsResultAttribute");
    }
    OpsResultAttribute.isa = isa;
})(OpsResultAttribute = exports.OpsResultAttribute || (exports.OpsResultAttribute = {}));
var OutputSource;
(function (OutputSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "OutputSource");
    }
    OutputSource.isa = isa;
})(OutputSource = exports.OutputSource || (exports.OutputSource = {}));
var Parameter;
(function (Parameter) {
    function isa(o) {
        return smithy_client_1.isa(o, "Parameter");
    }
    Parameter.isa = isa;
})(Parameter = exports.Parameter || (exports.Parameter = {}));
var ParameterAlreadyExists;
(function (ParameterAlreadyExists) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterAlreadyExists");
    }
    ParameterAlreadyExists.isa = isa;
})(ParameterAlreadyExists = exports.ParameterAlreadyExists || (exports.ParameterAlreadyExists = {}));
var ParameterHistory;
(function (ParameterHistory) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterHistory");
    }
    ParameterHistory.isa = isa;
})(ParameterHistory = exports.ParameterHistory || (exports.ParameterHistory = {}));
var ParameterInlinePolicy;
(function (ParameterInlinePolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterInlinePolicy");
    }
    ParameterInlinePolicy.isa = isa;
})(ParameterInlinePolicy = exports.ParameterInlinePolicy || (exports.ParameterInlinePolicy = {}));
var ParameterLimitExceeded;
(function (ParameterLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterLimitExceeded");
    }
    ParameterLimitExceeded.isa = isa;
})(ParameterLimitExceeded = exports.ParameterLimitExceeded || (exports.ParameterLimitExceeded = {}));
var ParameterMaxVersionLimitExceeded;
(function (ParameterMaxVersionLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterMaxVersionLimitExceeded");
    }
    ParameterMaxVersionLimitExceeded.isa = isa;
})(ParameterMaxVersionLimitExceeded = exports.ParameterMaxVersionLimitExceeded || (exports.ParameterMaxVersionLimitExceeded = {}));
var ParameterMetadata;
(function (ParameterMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterMetadata");
    }
    ParameterMetadata.isa = isa;
})(ParameterMetadata = exports.ParameterMetadata || (exports.ParameterMetadata = {}));
var ParameterNotFound;
(function (ParameterNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterNotFound");
    }
    ParameterNotFound.isa = isa;
})(ParameterNotFound = exports.ParameterNotFound || (exports.ParameterNotFound = {}));
var ParameterPatternMismatchException;
(function (ParameterPatternMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterPatternMismatchException");
    }
    ParameterPatternMismatchException.isa = isa;
})(ParameterPatternMismatchException = exports.ParameterPatternMismatchException || (exports.ParameterPatternMismatchException = {}));
var ParameterStringFilter;
(function (ParameterStringFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterStringFilter");
    }
    ParameterStringFilter.isa = isa;
})(ParameterStringFilter = exports.ParameterStringFilter || (exports.ParameterStringFilter = {}));
var ParameterTier;
(function (ParameterTier) {
    ParameterTier["ADVANCED"] = "Advanced";
    ParameterTier["INTELLIGENT_TIERING"] = "Intelligent-Tiering";
    ParameterTier["STANDARD"] = "Standard";
})(ParameterTier = exports.ParameterTier || (exports.ParameterTier = {}));
var ParameterType;
(function (ParameterType) {
    ParameterType["SECURE_STRING"] = "SecureString";
    ParameterType["STRING"] = "String";
    ParameterType["STRING_LIST"] = "StringList";
})(ParameterType = exports.ParameterType || (exports.ParameterType = {}));
var ParameterVersionLabelLimitExceeded;
(function (ParameterVersionLabelLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterVersionLabelLimitExceeded");
    }
    ParameterVersionLabelLimitExceeded.isa = isa;
})(ParameterVersionLabelLimitExceeded = exports.ParameterVersionLabelLimitExceeded || (exports.ParameterVersionLabelLimitExceeded = {}));
var ParameterVersionNotFound;
(function (ParameterVersionNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterVersionNotFound");
    }
    ParameterVersionNotFound.isa = isa;
})(ParameterVersionNotFound = exports.ParameterVersionNotFound || (exports.ParameterVersionNotFound = {}));
var ParametersFilter;
(function (ParametersFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParametersFilter");
    }
    ParametersFilter.isa = isa;
})(ParametersFilter = exports.ParametersFilter || (exports.ParametersFilter = {}));
var ParametersFilterKey;
(function (ParametersFilterKey) {
    ParametersFilterKey["KEY_ID"] = "KeyId";
    ParametersFilterKey["NAME"] = "Name";
    ParametersFilterKey["TYPE"] = "Type";
})(ParametersFilterKey = exports.ParametersFilterKey || (exports.ParametersFilterKey = {}));
var Patch;
(function (Patch) {
    function isa(o) {
        return smithy_client_1.isa(o, "Patch");
    }
    Patch.isa = isa;
})(Patch = exports.Patch || (exports.Patch = {}));
var PatchAction;
(function (PatchAction) {
    PatchAction["AllowAsDependency"] = "ALLOW_AS_DEPENDENCY";
    PatchAction["Block"] = "BLOCK";
})(PatchAction = exports.PatchAction || (exports.PatchAction = {}));
var PatchBaselineIdentity;
(function (PatchBaselineIdentity) {
    function isa(o) {
        return smithy_client_1.isa(o, "PatchBaselineIdentity");
    }
    PatchBaselineIdentity.isa = isa;
})(PatchBaselineIdentity = exports.PatchBaselineIdentity || (exports.PatchBaselineIdentity = {}));
var PatchComplianceData;
(function (PatchComplianceData) {
    function isa(o) {
        return smithy_client_1.isa(o, "PatchComplianceData");
    }
    PatchComplianceData.isa = isa;
})(PatchComplianceData = exports.PatchComplianceData || (exports.PatchComplianceData = {}));
var PatchComplianceDataState;
(function (PatchComplianceDataState) {
    PatchComplianceDataState["Failed"] = "FAILED";
    PatchComplianceDataState["Installed"] = "INSTALLED";
    PatchComplianceDataState["InstalledOther"] = "INSTALLED_OTHER";
    PatchComplianceDataState["InstalledPendingReboot"] = "INSTALLED_PENDING_REBOOT";
    PatchComplianceDataState["InstalledRejected"] = "INSTALLED_REJECTED";
    PatchComplianceDataState["Missing"] = "MISSING";
    PatchComplianceDataState["NotApplicable"] = "NOT_APPLICABLE";
})(PatchComplianceDataState = exports.PatchComplianceDataState || (exports.PatchComplianceDataState = {}));
var PatchComplianceLevel;
(function (PatchComplianceLevel) {
    PatchComplianceLevel["Critical"] = "CRITICAL";
    PatchComplianceLevel["High"] = "HIGH";
    PatchComplianceLevel["Informational"] = "INFORMATIONAL";
    PatchComplianceLevel["Low"] = "LOW";
    PatchComplianceLevel["Medium"] = "MEDIUM";
    PatchComplianceLevel["Unspecified"] = "UNSPECIFIED";
})(PatchComplianceLevel = exports.PatchComplianceLevel || (exports.PatchComplianceLevel = {}));
var PatchDeploymentStatus;
(function (PatchDeploymentStatus) {
    PatchDeploymentStatus["Approved"] = "APPROVED";
    PatchDeploymentStatus["ExplicitApproved"] = "EXPLICIT_APPROVED";
    PatchDeploymentStatus["ExplicitRejected"] = "EXPLICIT_REJECTED";
    PatchDeploymentStatus["PendingApproval"] = "PENDING_APPROVAL";
})(PatchDeploymentStatus = exports.PatchDeploymentStatus || (exports.PatchDeploymentStatus = {}));
var PatchFilter;
(function (PatchFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "PatchFilter");
    }
    PatchFilter.isa = isa;
})(PatchFilter = exports.PatchFilter || (exports.PatchFilter = {}));
var PatchFilterGroup;
(function (PatchFilterGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "PatchFilterGroup");
    }
    PatchFilterGroup.isa = isa;
})(PatchFilterGroup = exports.PatchFilterGroup || (exports.PatchFilterGroup = {}));
var PatchFilterKey;
(function (PatchFilterKey) {
    PatchFilterKey["Classification"] = "CLASSIFICATION";
    PatchFilterKey["MsrcSeverity"] = "MSRC_SEVERITY";
    PatchFilterKey["PatchId"] = "PATCH_ID";
    PatchFilterKey["PatchSet"] = "PATCH_SET";
    PatchFilterKey["Priority"] = "PRIORITY";
    PatchFilterKey["Product"] = "PRODUCT";
    PatchFilterKey["ProductFamily"] = "PRODUCT_FAMILY";
    PatchFilterKey["Section"] = "SECTION";
    PatchFilterKey["Severity"] = "SEVERITY";
})(PatchFilterKey = exports.PatchFilterKey || (exports.PatchFilterKey = {}));
var PatchGroupPatchBaselineMapping;
(function (PatchGroupPatchBaselineMapping) {
    function isa(o) {
        return smithy_client_1.isa(o, "PatchGroupPatchBaselineMapping");
    }
    PatchGroupPatchBaselineMapping.isa = isa;
})(PatchGroupPatchBaselineMapping = exports.PatchGroupPatchBaselineMapping || (exports.PatchGroupPatchBaselineMapping = {}));
var PatchOperationType;
(function (PatchOperationType) {
    PatchOperationType["INSTALL"] = "Install";
    PatchOperationType["SCAN"] = "Scan";
})(PatchOperationType = exports.PatchOperationType || (exports.PatchOperationType = {}));
var PatchOrchestratorFilter;
(function (PatchOrchestratorFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "PatchOrchestratorFilter");
    }
    PatchOrchestratorFilter.isa = isa;
})(PatchOrchestratorFilter = exports.PatchOrchestratorFilter || (exports.PatchOrchestratorFilter = {}));
var PatchProperty;
(function (PatchProperty) {
    PatchProperty["PatchClassification"] = "CLASSIFICATION";
    PatchProperty["PatchMsrcSeverity"] = "MSRC_SEVERITY";
    PatchProperty["PatchPriority"] = "PRIORITY";
    PatchProperty["PatchProductFamily"] = "PRODUCT_FAMILY";
    PatchProperty["PatchSeverity"] = "SEVERITY";
    PatchProperty["Product"] = "PRODUCT";
})(PatchProperty = exports.PatchProperty || (exports.PatchProperty = {}));
var PatchRule;
(function (PatchRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "PatchRule");
    }
    PatchRule.isa = isa;
})(PatchRule = exports.PatchRule || (exports.PatchRule = {}));
var PatchRuleGroup;
(function (PatchRuleGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "PatchRuleGroup");
    }
    PatchRuleGroup.isa = isa;
})(PatchRuleGroup = exports.PatchRuleGroup || (exports.PatchRuleGroup = {}));
var PatchSet;
(function (PatchSet) {
    PatchSet["Application"] = "APPLICATION";
    PatchSet["Os"] = "OS";
})(PatchSet = exports.PatchSet || (exports.PatchSet = {}));
var PatchSource;
(function (PatchSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "PatchSource");
    }
    PatchSource.isa = isa;
})(PatchSource = exports.PatchSource || (exports.PatchSource = {}));
var PatchStatus;
(function (PatchStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "PatchStatus");
    }
    PatchStatus.isa = isa;
})(PatchStatus = exports.PatchStatus || (exports.PatchStatus = {}));
var PingStatus;
(function (PingStatus) {
    PingStatus["CONNECTION_LOST"] = "ConnectionLost";
    PingStatus["INACTIVE"] = "Inactive";
    PingStatus["ONLINE"] = "Online";
})(PingStatus = exports.PingStatus || (exports.PingStatus = {}));
var PlatformType;
(function (PlatformType) {
    PlatformType["LINUX"] = "Linux";
    PlatformType["WINDOWS"] = "Windows";
})(PlatformType = exports.PlatformType || (exports.PlatformType = {}));
var PoliciesLimitExceededException;
(function (PoliciesLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PoliciesLimitExceededException");
    }
    PoliciesLimitExceededException.isa = isa;
})(PoliciesLimitExceededException = exports.PoliciesLimitExceededException || (exports.PoliciesLimitExceededException = {}));
var ProgressCounters;
(function (ProgressCounters) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProgressCounters");
    }
    ProgressCounters.isa = isa;
})(ProgressCounters = exports.ProgressCounters || (exports.ProgressCounters = {}));
var PutComplianceItemsRequest;
(function (PutComplianceItemsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutComplianceItemsRequest");
    }
    PutComplianceItemsRequest.isa = isa;
})(PutComplianceItemsRequest = exports.PutComplianceItemsRequest || (exports.PutComplianceItemsRequest = {}));
var PutComplianceItemsResult;
(function (PutComplianceItemsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutComplianceItemsResult");
    }
    PutComplianceItemsResult.isa = isa;
})(PutComplianceItemsResult = exports.PutComplianceItemsResult || (exports.PutComplianceItemsResult = {}));
var PutInventoryRequest;
(function (PutInventoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutInventoryRequest");
    }
    PutInventoryRequest.isa = isa;
})(PutInventoryRequest = exports.PutInventoryRequest || (exports.PutInventoryRequest = {}));
var PutInventoryResult;
(function (PutInventoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutInventoryResult");
    }
    PutInventoryResult.isa = isa;
})(PutInventoryResult = exports.PutInventoryResult || (exports.PutInventoryResult = {}));
var PutParameterRequest;
(function (PutParameterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutParameterRequest");
    }
    PutParameterRequest.isa = isa;
})(PutParameterRequest = exports.PutParameterRequest || (exports.PutParameterRequest = {}));
var PutParameterResult;
(function (PutParameterResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutParameterResult");
    }
    PutParameterResult.isa = isa;
})(PutParameterResult = exports.PutParameterResult || (exports.PutParameterResult = {}));
var RebootOption;
(function (RebootOption) {
    RebootOption["NO_REBOOT"] = "NoReboot";
    RebootOption["REBOOT_IF_NEEDED"] = "RebootIfNeeded";
})(RebootOption = exports.RebootOption || (exports.RebootOption = {}));
var RegisterDefaultPatchBaselineRequest;
(function (RegisterDefaultPatchBaselineRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterDefaultPatchBaselineRequest");
    }
    RegisterDefaultPatchBaselineRequest.isa = isa;
})(RegisterDefaultPatchBaselineRequest = exports.RegisterDefaultPatchBaselineRequest || (exports.RegisterDefaultPatchBaselineRequest = {}));
var RegisterDefaultPatchBaselineResult;
(function (RegisterDefaultPatchBaselineResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterDefaultPatchBaselineResult");
    }
    RegisterDefaultPatchBaselineResult.isa = isa;
})(RegisterDefaultPatchBaselineResult = exports.RegisterDefaultPatchBaselineResult || (exports.RegisterDefaultPatchBaselineResult = {}));
var RegisterPatchBaselineForPatchGroupRequest;
(function (RegisterPatchBaselineForPatchGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterPatchBaselineForPatchGroupRequest");
    }
    RegisterPatchBaselineForPatchGroupRequest.isa = isa;
})(RegisterPatchBaselineForPatchGroupRequest = exports.RegisterPatchBaselineForPatchGroupRequest || (exports.RegisterPatchBaselineForPatchGroupRequest = {}));
var RegisterPatchBaselineForPatchGroupResult;
(function (RegisterPatchBaselineForPatchGroupResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterPatchBaselineForPatchGroupResult");
    }
    RegisterPatchBaselineForPatchGroupResult.isa = isa;
})(RegisterPatchBaselineForPatchGroupResult = exports.RegisterPatchBaselineForPatchGroupResult || (exports.RegisterPatchBaselineForPatchGroupResult = {}));
var RegisterTargetWithMaintenanceWindowRequest;
(function (RegisterTargetWithMaintenanceWindowRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterTargetWithMaintenanceWindowRequest");
    }
    RegisterTargetWithMaintenanceWindowRequest.isa = isa;
})(RegisterTargetWithMaintenanceWindowRequest = exports.RegisterTargetWithMaintenanceWindowRequest || (exports.RegisterTargetWithMaintenanceWindowRequest = {}));
var RegisterTargetWithMaintenanceWindowResult;
(function (RegisterTargetWithMaintenanceWindowResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterTargetWithMaintenanceWindowResult");
    }
    RegisterTargetWithMaintenanceWindowResult.isa = isa;
})(RegisterTargetWithMaintenanceWindowResult = exports.RegisterTargetWithMaintenanceWindowResult || (exports.RegisterTargetWithMaintenanceWindowResult = {}));
var RegisterTaskWithMaintenanceWindowRequest;
(function (RegisterTaskWithMaintenanceWindowRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterTaskWithMaintenanceWindowRequest");
    }
    RegisterTaskWithMaintenanceWindowRequest.isa = isa;
})(RegisterTaskWithMaintenanceWindowRequest = exports.RegisterTaskWithMaintenanceWindowRequest || (exports.RegisterTaskWithMaintenanceWindowRequest = {}));
var RegisterTaskWithMaintenanceWindowResult;
(function (RegisterTaskWithMaintenanceWindowResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterTaskWithMaintenanceWindowResult");
    }
    RegisterTaskWithMaintenanceWindowResult.isa = isa;
})(RegisterTaskWithMaintenanceWindowResult = exports.RegisterTaskWithMaintenanceWindowResult || (exports.RegisterTaskWithMaintenanceWindowResult = {}));
var RelatedOpsItem;
(function (RelatedOpsItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "RelatedOpsItem");
    }
    RelatedOpsItem.isa = isa;
})(RelatedOpsItem = exports.RelatedOpsItem || (exports.RelatedOpsItem = {}));
var RemoveTagsFromResourceRequest;
(function (RemoveTagsFromResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsFromResourceRequest");
    }
    RemoveTagsFromResourceRequest.isa = isa;
})(RemoveTagsFromResourceRequest = exports.RemoveTagsFromResourceRequest || (exports.RemoveTagsFromResourceRequest = {}));
var RemoveTagsFromResourceResult;
(function (RemoveTagsFromResourceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsFromResourceResult");
    }
    RemoveTagsFromResourceResult.isa = isa;
})(RemoveTagsFromResourceResult = exports.RemoveTagsFromResourceResult || (exports.RemoveTagsFromResourceResult = {}));
var ResetServiceSettingRequest;
(function (ResetServiceSettingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResetServiceSettingRequest");
    }
    ResetServiceSettingRequest.isa = isa;
})(ResetServiceSettingRequest = exports.ResetServiceSettingRequest || (exports.ResetServiceSettingRequest = {}));
var ResetServiceSettingResult;
(function (ResetServiceSettingResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResetServiceSettingResult");
    }
    ResetServiceSettingResult.isa = isa;
})(ResetServiceSettingResult = exports.ResetServiceSettingResult || (exports.ResetServiceSettingResult = {}));
var ResolvedTargets;
(function (ResolvedTargets) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResolvedTargets");
    }
    ResolvedTargets.isa = isa;
})(ResolvedTargets = exports.ResolvedTargets || (exports.ResolvedTargets = {}));
var ResourceComplianceSummaryItem;
(function (ResourceComplianceSummaryItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceComplianceSummaryItem");
    }
    ResourceComplianceSummaryItem.isa = isa;
})(ResourceComplianceSummaryItem = exports.ResourceComplianceSummaryItem || (exports.ResourceComplianceSummaryItem = {}));
var ResourceDataSyncAlreadyExistsException;
(function (ResourceDataSyncAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDataSyncAlreadyExistsException");
    }
    ResourceDataSyncAlreadyExistsException.isa = isa;
})(ResourceDataSyncAlreadyExistsException = exports.ResourceDataSyncAlreadyExistsException || (exports.ResourceDataSyncAlreadyExistsException = {}));
var ResourceDataSyncAwsOrganizationsSource;
(function (ResourceDataSyncAwsOrganizationsSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDataSyncAwsOrganizationsSource");
    }
    ResourceDataSyncAwsOrganizationsSource.isa = isa;
})(ResourceDataSyncAwsOrganizationsSource = exports.ResourceDataSyncAwsOrganizationsSource || (exports.ResourceDataSyncAwsOrganizationsSource = {}));
var ResourceDataSyncConflictException;
(function (ResourceDataSyncConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDataSyncConflictException");
    }
    ResourceDataSyncConflictException.isa = isa;
})(ResourceDataSyncConflictException = exports.ResourceDataSyncConflictException || (exports.ResourceDataSyncConflictException = {}));
var ResourceDataSyncCountExceededException;
(function (ResourceDataSyncCountExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDataSyncCountExceededException");
    }
    ResourceDataSyncCountExceededException.isa = isa;
})(ResourceDataSyncCountExceededException = exports.ResourceDataSyncCountExceededException || (exports.ResourceDataSyncCountExceededException = {}));
var ResourceDataSyncInvalidConfigurationException;
(function (ResourceDataSyncInvalidConfigurationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDataSyncInvalidConfigurationException");
    }
    ResourceDataSyncInvalidConfigurationException.isa = isa;
})(ResourceDataSyncInvalidConfigurationException = exports.ResourceDataSyncInvalidConfigurationException || (exports.ResourceDataSyncInvalidConfigurationException = {}));
var ResourceDataSyncItem;
(function (ResourceDataSyncItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDataSyncItem");
    }
    ResourceDataSyncItem.isa = isa;
})(ResourceDataSyncItem = exports.ResourceDataSyncItem || (exports.ResourceDataSyncItem = {}));
var ResourceDataSyncNotFoundException;
(function (ResourceDataSyncNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDataSyncNotFoundException");
    }
    ResourceDataSyncNotFoundException.isa = isa;
})(ResourceDataSyncNotFoundException = exports.ResourceDataSyncNotFoundException || (exports.ResourceDataSyncNotFoundException = {}));
var ResourceDataSyncOrganizationalUnit;
(function (ResourceDataSyncOrganizationalUnit) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDataSyncOrganizationalUnit");
    }
    ResourceDataSyncOrganizationalUnit.isa = isa;
})(ResourceDataSyncOrganizationalUnit = exports.ResourceDataSyncOrganizationalUnit || (exports.ResourceDataSyncOrganizationalUnit = {}));
var ResourceDataSyncS3Destination;
(function (ResourceDataSyncS3Destination) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDataSyncS3Destination");
    }
    ResourceDataSyncS3Destination.isa = isa;
})(ResourceDataSyncS3Destination = exports.ResourceDataSyncS3Destination || (exports.ResourceDataSyncS3Destination = {}));
var ResourceDataSyncS3Format;
(function (ResourceDataSyncS3Format) {
    ResourceDataSyncS3Format["JSON_SERDE"] = "JsonSerDe";
})(ResourceDataSyncS3Format = exports.ResourceDataSyncS3Format || (exports.ResourceDataSyncS3Format = {}));
var ResourceDataSyncSource;
(function (ResourceDataSyncSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDataSyncSource");
    }
    ResourceDataSyncSource.isa = isa;
})(ResourceDataSyncSource = exports.ResourceDataSyncSource || (exports.ResourceDataSyncSource = {}));
var ResourceDataSyncSourceWithState;
(function (ResourceDataSyncSourceWithState) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDataSyncSourceWithState");
    }
    ResourceDataSyncSourceWithState.isa = isa;
})(ResourceDataSyncSourceWithState = exports.ResourceDataSyncSourceWithState || (exports.ResourceDataSyncSourceWithState = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUseException");
    }
    ResourceInUseException.isa = isa;
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceLimitExceededException");
    }
    ResourceLimitExceededException.isa = isa;
})(ResourceLimitExceededException = exports.ResourceLimitExceededException || (exports.ResourceLimitExceededException = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["DOCUMENT"] = "Document";
    ResourceType["EC2_INSTANCE"] = "EC2Instance";
    ResourceType["MANAGED_INSTANCE"] = "ManagedInstance";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ResourceTypeForTagging;
(function (ResourceTypeForTagging) {
    ResourceTypeForTagging["DOCUMENT"] = "Document";
    ResourceTypeForTagging["MAINTENANCE_WINDOW"] = "MaintenanceWindow";
    ResourceTypeForTagging["MANAGED_INSTANCE"] = "ManagedInstance";
    ResourceTypeForTagging["OPS_ITEM"] = "OpsItem";
    ResourceTypeForTagging["PARAMETER"] = "Parameter";
    ResourceTypeForTagging["PATCH_BASELINE"] = "PatchBaseline";
})(ResourceTypeForTagging = exports.ResourceTypeForTagging || (exports.ResourceTypeForTagging = {}));
var ResultAttribute;
(function (ResultAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResultAttribute");
    }
    ResultAttribute.isa = isa;
})(ResultAttribute = exports.ResultAttribute || (exports.ResultAttribute = {}));
var ResumeSessionRequest;
(function (ResumeSessionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResumeSessionRequest");
    }
    ResumeSessionRequest.isa = isa;
})(ResumeSessionRequest = exports.ResumeSessionRequest || (exports.ResumeSessionRequest = {}));
var ResumeSessionResponse;
(function (ResumeSessionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResumeSessionResponse");
    }
    ResumeSessionResponse.isa = isa;
})(ResumeSessionResponse = exports.ResumeSessionResponse || (exports.ResumeSessionResponse = {}));
var S3OutputLocation;
(function (S3OutputLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3OutputLocation");
    }
    S3OutputLocation.isa = isa;
})(S3OutputLocation = exports.S3OutputLocation || (exports.S3OutputLocation = {}));
var S3OutputUrl;
(function (S3OutputUrl) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3OutputUrl");
    }
    S3OutputUrl.isa = isa;
})(S3OutputUrl = exports.S3OutputUrl || (exports.S3OutputUrl = {}));
var ScheduledWindowExecution;
(function (ScheduledWindowExecution) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScheduledWindowExecution");
    }
    ScheduledWindowExecution.isa = isa;
})(ScheduledWindowExecution = exports.ScheduledWindowExecution || (exports.ScheduledWindowExecution = {}));
var SendAutomationSignalRequest;
(function (SendAutomationSignalRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendAutomationSignalRequest");
    }
    SendAutomationSignalRequest.isa = isa;
})(SendAutomationSignalRequest = exports.SendAutomationSignalRequest || (exports.SendAutomationSignalRequest = {}));
var SendAutomationSignalResult;
(function (SendAutomationSignalResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendAutomationSignalResult");
    }
    SendAutomationSignalResult.isa = isa;
})(SendAutomationSignalResult = exports.SendAutomationSignalResult || (exports.SendAutomationSignalResult = {}));
var SendCommandRequest;
(function (SendCommandRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendCommandRequest");
    }
    SendCommandRequest.isa = isa;
})(SendCommandRequest = exports.SendCommandRequest || (exports.SendCommandRequest = {}));
var SendCommandResult;
(function (SendCommandResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendCommandResult");
    }
    SendCommandResult.isa = isa;
})(SendCommandResult = exports.SendCommandResult || (exports.SendCommandResult = {}));
var ServiceSetting;
(function (ServiceSetting) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceSetting");
    }
    ServiceSetting.isa = isa;
})(ServiceSetting = exports.ServiceSetting || (exports.ServiceSetting = {}));
var ServiceSettingNotFound;
(function (ServiceSettingNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceSettingNotFound");
    }
    ServiceSettingNotFound.isa = isa;
})(ServiceSettingNotFound = exports.ServiceSettingNotFound || (exports.ServiceSettingNotFound = {}));
var Session;
(function (Session) {
    function isa(o) {
        return smithy_client_1.isa(o, "Session");
    }
    Session.isa = isa;
})(Session = exports.Session || (exports.Session = {}));
var SessionFilter;
(function (SessionFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "SessionFilter");
    }
    SessionFilter.isa = isa;
})(SessionFilter = exports.SessionFilter || (exports.SessionFilter = {}));
var SessionFilterKey;
(function (SessionFilterKey) {
    SessionFilterKey["INVOKED_AFTER"] = "InvokedAfter";
    SessionFilterKey["INVOKED_BEFORE"] = "InvokedBefore";
    SessionFilterKey["OWNER"] = "Owner";
    SessionFilterKey["STATUS"] = "Status";
    SessionFilterKey["TARGET_ID"] = "Target";
})(SessionFilterKey = exports.SessionFilterKey || (exports.SessionFilterKey = {}));
var SessionManagerOutputUrl;
(function (SessionManagerOutputUrl) {
    function isa(o) {
        return smithy_client_1.isa(o, "SessionManagerOutputUrl");
    }
    SessionManagerOutputUrl.isa = isa;
})(SessionManagerOutputUrl = exports.SessionManagerOutputUrl || (exports.SessionManagerOutputUrl = {}));
var SessionState;
(function (SessionState) {
    SessionState["ACTIVE"] = "Active";
    SessionState["HISTORY"] = "History";
})(SessionState = exports.SessionState || (exports.SessionState = {}));
var SessionStatus;
(function (SessionStatus) {
    SessionStatus["CONNECTED"] = "Connected";
    SessionStatus["CONNECTING"] = "Connecting";
    SessionStatus["DISCONNECTED"] = "Disconnected";
    SessionStatus["FAILED"] = "Failed";
    SessionStatus["TERMINATED"] = "Terminated";
    SessionStatus["TERMINATING"] = "Terminating";
})(SessionStatus = exports.SessionStatus || (exports.SessionStatus = {}));
var SeveritySummary;
(function (SeveritySummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "SeveritySummary");
    }
    SeveritySummary.isa = isa;
})(SeveritySummary = exports.SeveritySummary || (exports.SeveritySummary = {}));
var SignalType;
(function (SignalType) {
    SignalType["APPROVE"] = "Approve";
    SignalType["REJECT"] = "Reject";
    SignalType["RESUME"] = "Resume";
    SignalType["START_STEP"] = "StartStep";
    SignalType["STOP_STEP"] = "StopStep";
})(SignalType = exports.SignalType || (exports.SignalType = {}));
var StartAssociationsOnceRequest;
(function (StartAssociationsOnceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartAssociationsOnceRequest");
    }
    StartAssociationsOnceRequest.isa = isa;
})(StartAssociationsOnceRequest = exports.StartAssociationsOnceRequest || (exports.StartAssociationsOnceRequest = {}));
var StartAssociationsOnceResult;
(function (StartAssociationsOnceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartAssociationsOnceResult");
    }
    StartAssociationsOnceResult.isa = isa;
})(StartAssociationsOnceResult = exports.StartAssociationsOnceResult || (exports.StartAssociationsOnceResult = {}));
var StartAutomationExecutionRequest;
(function (StartAutomationExecutionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartAutomationExecutionRequest");
    }
    StartAutomationExecutionRequest.isa = isa;
})(StartAutomationExecutionRequest = exports.StartAutomationExecutionRequest || (exports.StartAutomationExecutionRequest = {}));
var StartAutomationExecutionResult;
(function (StartAutomationExecutionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartAutomationExecutionResult");
    }
    StartAutomationExecutionResult.isa = isa;
})(StartAutomationExecutionResult = exports.StartAutomationExecutionResult || (exports.StartAutomationExecutionResult = {}));
var StartSessionRequest;
(function (StartSessionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartSessionRequest");
    }
    StartSessionRequest.isa = isa;
})(StartSessionRequest = exports.StartSessionRequest || (exports.StartSessionRequest = {}));
var StartSessionResponse;
(function (StartSessionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartSessionResponse");
    }
    StartSessionResponse.isa = isa;
})(StartSessionResponse = exports.StartSessionResponse || (exports.StartSessionResponse = {}));
var StatusUnchanged;
(function (StatusUnchanged) {
    function isa(o) {
        return smithy_client_1.isa(o, "StatusUnchanged");
    }
    StatusUnchanged.isa = isa;
})(StatusUnchanged = exports.StatusUnchanged || (exports.StatusUnchanged = {}));
var StepExecution;
(function (StepExecution) {
    function isa(o) {
        return smithy_client_1.isa(o, "StepExecution");
    }
    StepExecution.isa = isa;
})(StepExecution = exports.StepExecution || (exports.StepExecution = {}));
var StepExecutionFilter;
(function (StepExecutionFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "StepExecutionFilter");
    }
    StepExecutionFilter.isa = isa;
})(StepExecutionFilter = exports.StepExecutionFilter || (exports.StepExecutionFilter = {}));
var StepExecutionFilterKey;
(function (StepExecutionFilterKey) {
    StepExecutionFilterKey["ACTION"] = "Action";
    StepExecutionFilterKey["START_TIME_AFTER"] = "StartTimeAfter";
    StepExecutionFilterKey["START_TIME_BEFORE"] = "StartTimeBefore";
    StepExecutionFilterKey["STEP_EXECUTION_ID"] = "StepExecutionId";
    StepExecutionFilterKey["STEP_EXECUTION_STATUS"] = "StepExecutionStatus";
    StepExecutionFilterKey["STEP_NAME"] = "StepName";
})(StepExecutionFilterKey = exports.StepExecutionFilterKey || (exports.StepExecutionFilterKey = {}));
var StopAutomationExecutionRequest;
(function (StopAutomationExecutionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopAutomationExecutionRequest");
    }
    StopAutomationExecutionRequest.isa = isa;
})(StopAutomationExecutionRequest = exports.StopAutomationExecutionRequest || (exports.StopAutomationExecutionRequest = {}));
var StopAutomationExecutionResult;
(function (StopAutomationExecutionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopAutomationExecutionResult");
    }
    StopAutomationExecutionResult.isa = isa;
})(StopAutomationExecutionResult = exports.StopAutomationExecutionResult || (exports.StopAutomationExecutionResult = {}));
var StopType;
(function (StopType) {
    StopType["CANCEL"] = "Cancel";
    StopType["COMPLETE"] = "Complete";
})(StopType = exports.StopType || (exports.StopType = {}));
var SubTypeCountLimitExceededException;
(function (SubTypeCountLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubTypeCountLimitExceededException");
    }
    SubTypeCountLimitExceededException.isa = isa;
})(SubTypeCountLimitExceededException = exports.SubTypeCountLimitExceededException || (exports.SubTypeCountLimitExceededException = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var Target;
(function (Target) {
    function isa(o) {
        return smithy_client_1.isa(o, "Target");
    }
    Target.isa = isa;
})(Target = exports.Target || (exports.Target = {}));
var TargetInUseException;
(function (TargetInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetInUseException");
    }
    TargetInUseException.isa = isa;
})(TargetInUseException = exports.TargetInUseException || (exports.TargetInUseException = {}));
var TargetLocation;
(function (TargetLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetLocation");
    }
    TargetLocation.isa = isa;
})(TargetLocation = exports.TargetLocation || (exports.TargetLocation = {}));
var TargetNotConnected;
(function (TargetNotConnected) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetNotConnected");
    }
    TargetNotConnected.isa = isa;
})(TargetNotConnected = exports.TargetNotConnected || (exports.TargetNotConnected = {}));
var TerminateSessionRequest;
(function (TerminateSessionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminateSessionRequest");
    }
    TerminateSessionRequest.isa = isa;
})(TerminateSessionRequest = exports.TerminateSessionRequest || (exports.TerminateSessionRequest = {}));
var TerminateSessionResponse;
(function (TerminateSessionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminateSessionResponse");
    }
    TerminateSessionResponse.isa = isa;
})(TerminateSessionResponse = exports.TerminateSessionResponse || (exports.TerminateSessionResponse = {}));
var TooManyTagsError;
(function (TooManyTagsError) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTagsError");
    }
    TooManyTagsError.isa = isa;
})(TooManyTagsError = exports.TooManyTagsError || (exports.TooManyTagsError = {}));
var TooManyUpdates;
(function (TooManyUpdates) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyUpdates");
    }
    TooManyUpdates.isa = isa;
})(TooManyUpdates = exports.TooManyUpdates || (exports.TooManyUpdates = {}));
var TotalSizeLimitExceededException;
(function (TotalSizeLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TotalSizeLimitExceededException");
    }
    TotalSizeLimitExceededException.isa = isa;
})(TotalSizeLimitExceededException = exports.TotalSizeLimitExceededException || (exports.TotalSizeLimitExceededException = {}));
var UnsupportedCalendarException;
(function (UnsupportedCalendarException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedCalendarException");
    }
    UnsupportedCalendarException.isa = isa;
})(UnsupportedCalendarException = exports.UnsupportedCalendarException || (exports.UnsupportedCalendarException = {}));
var UnsupportedFeatureRequiredException;
(function (UnsupportedFeatureRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedFeatureRequiredException");
    }
    UnsupportedFeatureRequiredException.isa = isa;
})(UnsupportedFeatureRequiredException = exports.UnsupportedFeatureRequiredException || (exports.UnsupportedFeatureRequiredException = {}));
var UnsupportedInventoryItemContextException;
(function (UnsupportedInventoryItemContextException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedInventoryItemContextException");
    }
    UnsupportedInventoryItemContextException.isa = isa;
})(UnsupportedInventoryItemContextException = exports.UnsupportedInventoryItemContextException || (exports.UnsupportedInventoryItemContextException = {}));
var UnsupportedInventorySchemaVersionException;
(function (UnsupportedInventorySchemaVersionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedInventorySchemaVersionException");
    }
    UnsupportedInventorySchemaVersionException.isa = isa;
})(UnsupportedInventorySchemaVersionException = exports.UnsupportedInventorySchemaVersionException || (exports.UnsupportedInventorySchemaVersionException = {}));
var UnsupportedOperatingSystem;
(function (UnsupportedOperatingSystem) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedOperatingSystem");
    }
    UnsupportedOperatingSystem.isa = isa;
})(UnsupportedOperatingSystem = exports.UnsupportedOperatingSystem || (exports.UnsupportedOperatingSystem = {}));
var UnsupportedParameterType;
(function (UnsupportedParameterType) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedParameterType");
    }
    UnsupportedParameterType.isa = isa;
})(UnsupportedParameterType = exports.UnsupportedParameterType || (exports.UnsupportedParameterType = {}));
var UnsupportedPlatformType;
(function (UnsupportedPlatformType) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedPlatformType");
    }
    UnsupportedPlatformType.isa = isa;
})(UnsupportedPlatformType = exports.UnsupportedPlatformType || (exports.UnsupportedPlatformType = {}));
var UpdateAssociationRequest;
(function (UpdateAssociationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAssociationRequest");
    }
    UpdateAssociationRequest.isa = isa;
})(UpdateAssociationRequest = exports.UpdateAssociationRequest || (exports.UpdateAssociationRequest = {}));
var UpdateAssociationResult;
(function (UpdateAssociationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAssociationResult");
    }
    UpdateAssociationResult.isa = isa;
})(UpdateAssociationResult = exports.UpdateAssociationResult || (exports.UpdateAssociationResult = {}));
var UpdateAssociationStatusRequest;
(function (UpdateAssociationStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAssociationStatusRequest");
    }
    UpdateAssociationStatusRequest.isa = isa;
})(UpdateAssociationStatusRequest = exports.UpdateAssociationStatusRequest || (exports.UpdateAssociationStatusRequest = {}));
var UpdateAssociationStatusResult;
(function (UpdateAssociationStatusResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAssociationStatusResult");
    }
    UpdateAssociationStatusResult.isa = isa;
})(UpdateAssociationStatusResult = exports.UpdateAssociationStatusResult || (exports.UpdateAssociationStatusResult = {}));
var UpdateDocumentDefaultVersionRequest;
(function (UpdateDocumentDefaultVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDocumentDefaultVersionRequest");
    }
    UpdateDocumentDefaultVersionRequest.isa = isa;
})(UpdateDocumentDefaultVersionRequest = exports.UpdateDocumentDefaultVersionRequest || (exports.UpdateDocumentDefaultVersionRequest = {}));
var UpdateDocumentDefaultVersionResult;
(function (UpdateDocumentDefaultVersionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDocumentDefaultVersionResult");
    }
    UpdateDocumentDefaultVersionResult.isa = isa;
})(UpdateDocumentDefaultVersionResult = exports.UpdateDocumentDefaultVersionResult || (exports.UpdateDocumentDefaultVersionResult = {}));
var UpdateDocumentRequest;
(function (UpdateDocumentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDocumentRequest");
    }
    UpdateDocumentRequest.isa = isa;
})(UpdateDocumentRequest = exports.UpdateDocumentRequest || (exports.UpdateDocumentRequest = {}));
var UpdateDocumentResult;
(function (UpdateDocumentResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDocumentResult");
    }
    UpdateDocumentResult.isa = isa;
})(UpdateDocumentResult = exports.UpdateDocumentResult || (exports.UpdateDocumentResult = {}));
var UpdateMaintenanceWindowRequest;
(function (UpdateMaintenanceWindowRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMaintenanceWindowRequest");
    }
    UpdateMaintenanceWindowRequest.isa = isa;
})(UpdateMaintenanceWindowRequest = exports.UpdateMaintenanceWindowRequest || (exports.UpdateMaintenanceWindowRequest = {}));
var UpdateMaintenanceWindowResult;
(function (UpdateMaintenanceWindowResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMaintenanceWindowResult");
    }
    UpdateMaintenanceWindowResult.isa = isa;
})(UpdateMaintenanceWindowResult = exports.UpdateMaintenanceWindowResult || (exports.UpdateMaintenanceWindowResult = {}));
var UpdateMaintenanceWindowTargetRequest;
(function (UpdateMaintenanceWindowTargetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMaintenanceWindowTargetRequest");
    }
    UpdateMaintenanceWindowTargetRequest.isa = isa;
})(UpdateMaintenanceWindowTargetRequest = exports.UpdateMaintenanceWindowTargetRequest || (exports.UpdateMaintenanceWindowTargetRequest = {}));
var UpdateMaintenanceWindowTargetResult;
(function (UpdateMaintenanceWindowTargetResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMaintenanceWindowTargetResult");
    }
    UpdateMaintenanceWindowTargetResult.isa = isa;
})(UpdateMaintenanceWindowTargetResult = exports.UpdateMaintenanceWindowTargetResult || (exports.UpdateMaintenanceWindowTargetResult = {}));
var UpdateMaintenanceWindowTaskRequest;
(function (UpdateMaintenanceWindowTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMaintenanceWindowTaskRequest");
    }
    UpdateMaintenanceWindowTaskRequest.isa = isa;
})(UpdateMaintenanceWindowTaskRequest = exports.UpdateMaintenanceWindowTaskRequest || (exports.UpdateMaintenanceWindowTaskRequest = {}));
var UpdateMaintenanceWindowTaskResult;
(function (UpdateMaintenanceWindowTaskResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMaintenanceWindowTaskResult");
    }
    UpdateMaintenanceWindowTaskResult.isa = isa;
})(UpdateMaintenanceWindowTaskResult = exports.UpdateMaintenanceWindowTaskResult || (exports.UpdateMaintenanceWindowTaskResult = {}));
var UpdateManagedInstanceRoleRequest;
(function (UpdateManagedInstanceRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateManagedInstanceRoleRequest");
    }
    UpdateManagedInstanceRoleRequest.isa = isa;
})(UpdateManagedInstanceRoleRequest = exports.UpdateManagedInstanceRoleRequest || (exports.UpdateManagedInstanceRoleRequest = {}));
var UpdateManagedInstanceRoleResult;
(function (UpdateManagedInstanceRoleResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateManagedInstanceRoleResult");
    }
    UpdateManagedInstanceRoleResult.isa = isa;
})(UpdateManagedInstanceRoleResult = exports.UpdateManagedInstanceRoleResult || (exports.UpdateManagedInstanceRoleResult = {}));
var UpdateOpsItemRequest;
(function (UpdateOpsItemRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateOpsItemRequest");
    }
    UpdateOpsItemRequest.isa = isa;
})(UpdateOpsItemRequest = exports.UpdateOpsItemRequest || (exports.UpdateOpsItemRequest = {}));
var UpdateOpsItemResponse;
(function (UpdateOpsItemResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateOpsItemResponse");
    }
    UpdateOpsItemResponse.isa = isa;
})(UpdateOpsItemResponse = exports.UpdateOpsItemResponse || (exports.UpdateOpsItemResponse = {}));
var UpdatePatchBaselineRequest;
(function (UpdatePatchBaselineRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePatchBaselineRequest");
    }
    UpdatePatchBaselineRequest.isa = isa;
})(UpdatePatchBaselineRequest = exports.UpdatePatchBaselineRequest || (exports.UpdatePatchBaselineRequest = {}));
var UpdatePatchBaselineResult;
(function (UpdatePatchBaselineResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePatchBaselineResult");
    }
    UpdatePatchBaselineResult.isa = isa;
})(UpdatePatchBaselineResult = exports.UpdatePatchBaselineResult || (exports.UpdatePatchBaselineResult = {}));
var UpdateResourceDataSyncRequest;
(function (UpdateResourceDataSyncRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateResourceDataSyncRequest");
    }
    UpdateResourceDataSyncRequest.isa = isa;
})(UpdateResourceDataSyncRequest = exports.UpdateResourceDataSyncRequest || (exports.UpdateResourceDataSyncRequest = {}));
var UpdateResourceDataSyncResult;
(function (UpdateResourceDataSyncResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateResourceDataSyncResult");
    }
    UpdateResourceDataSyncResult.isa = isa;
})(UpdateResourceDataSyncResult = exports.UpdateResourceDataSyncResult || (exports.UpdateResourceDataSyncResult = {}));
var UpdateServiceSettingRequest;
(function (UpdateServiceSettingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServiceSettingRequest");
    }
    UpdateServiceSettingRequest.isa = isa;
})(UpdateServiceSettingRequest = exports.UpdateServiceSettingRequest || (exports.UpdateServiceSettingRequest = {}));
var UpdateServiceSettingResult;
(function (UpdateServiceSettingResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServiceSettingResult");
    }
    UpdateServiceSettingResult.isa = isa;
})(UpdateServiceSettingResult = exports.UpdateServiceSettingResult || (exports.UpdateServiceSettingResult = {}));
//# sourceMappingURL=index.js.map