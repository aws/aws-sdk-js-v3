"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountLimit;
(function (AccountLimit) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountLimit");
    }
    AccountLimit.isa = isa;
})(AccountLimit = exports.AccountLimit || (exports.AccountLimit = {}));
var AlreadyExistsException;
(function (AlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlreadyExistsException");
    }
    AlreadyExistsException.isa = isa;
})(AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {}));
var CFNRegistryException;
(function (CFNRegistryException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CFNRegistryException");
    }
    CFNRegistryException.isa = isa;
})(CFNRegistryException = exports.CFNRegistryException || (exports.CFNRegistryException = {}));
var CancelUpdateStackInput;
(function (CancelUpdateStackInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelUpdateStackInput");
    }
    CancelUpdateStackInput.isa = isa;
})(CancelUpdateStackInput = exports.CancelUpdateStackInput || (exports.CancelUpdateStackInput = {}));
var Capability;
(function (Capability) {
    Capability["CAPABILITY_AUTO_EXPAND"] = "CAPABILITY_AUTO_EXPAND";
    Capability["CAPABILITY_IAM"] = "CAPABILITY_IAM";
    Capability["CAPABILITY_NAMED_IAM"] = "CAPABILITY_NAMED_IAM";
})(Capability = exports.Capability || (exports.Capability = {}));
var Change;
(function (Change) {
    function isa(o) {
        return smithy_client_1.isa(o, "Change");
    }
    Change.isa = isa;
})(Change = exports.Change || (exports.Change = {}));
var ChangeAction;
(function (ChangeAction) {
    ChangeAction["Add"] = "Add";
    ChangeAction["Import"] = "Import";
    ChangeAction["Modify"] = "Modify";
    ChangeAction["Remove"] = "Remove";
})(ChangeAction = exports.ChangeAction || (exports.ChangeAction = {}));
var ChangeSetNotFoundException;
(function (ChangeSetNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ChangeSetNotFoundException");
    }
    ChangeSetNotFoundException.isa = isa;
})(ChangeSetNotFoundException = exports.ChangeSetNotFoundException || (exports.ChangeSetNotFoundException = {}));
var ChangeSetStatus;
(function (ChangeSetStatus) {
    ChangeSetStatus["CREATE_COMPLETE"] = "CREATE_COMPLETE";
    ChangeSetStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    ChangeSetStatus["CREATE_PENDING"] = "CREATE_PENDING";
    ChangeSetStatus["DELETE_COMPLETE"] = "DELETE_COMPLETE";
    ChangeSetStatus["FAILED"] = "FAILED";
})(ChangeSetStatus = exports.ChangeSetStatus || (exports.ChangeSetStatus = {}));
var ChangeSetSummary;
(function (ChangeSetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ChangeSetSummary");
    }
    ChangeSetSummary.isa = isa;
})(ChangeSetSummary = exports.ChangeSetSummary || (exports.ChangeSetSummary = {}));
var ChangeSetType;
(function (ChangeSetType) {
    ChangeSetType["CREATE"] = "CREATE";
    ChangeSetType["IMPORT"] = "IMPORT";
    ChangeSetType["UPDATE"] = "UPDATE";
})(ChangeSetType = exports.ChangeSetType || (exports.ChangeSetType = {}));
var ChangeSource;
(function (ChangeSource) {
    ChangeSource["Automatic"] = "Automatic";
    ChangeSource["DirectModification"] = "DirectModification";
    ChangeSource["ParameterReference"] = "ParameterReference";
    ChangeSource["ResourceAttribute"] = "ResourceAttribute";
    ChangeSource["ResourceReference"] = "ResourceReference";
})(ChangeSource = exports.ChangeSource || (exports.ChangeSource = {}));
var ChangeType;
(function (ChangeType) {
    ChangeType["Resource"] = "Resource";
})(ChangeType = exports.ChangeType || (exports.ChangeType = {}));
var ContinueUpdateRollbackInput;
(function (ContinueUpdateRollbackInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContinueUpdateRollbackInput");
    }
    ContinueUpdateRollbackInput.isa = isa;
})(ContinueUpdateRollbackInput = exports.ContinueUpdateRollbackInput || (exports.ContinueUpdateRollbackInput = {}));
var ContinueUpdateRollbackOutput;
(function (ContinueUpdateRollbackOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContinueUpdateRollbackOutput");
    }
    ContinueUpdateRollbackOutput.isa = isa;
})(ContinueUpdateRollbackOutput = exports.ContinueUpdateRollbackOutput || (exports.ContinueUpdateRollbackOutput = {}));
var CreateChangeSetInput;
(function (CreateChangeSetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateChangeSetInput");
    }
    CreateChangeSetInput.isa = isa;
})(CreateChangeSetInput = exports.CreateChangeSetInput || (exports.CreateChangeSetInput = {}));
var CreateChangeSetOutput;
(function (CreateChangeSetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateChangeSetOutput");
    }
    CreateChangeSetOutput.isa = isa;
})(CreateChangeSetOutput = exports.CreateChangeSetOutput || (exports.CreateChangeSetOutput = {}));
var CreateStackInput;
(function (CreateStackInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStackInput");
    }
    CreateStackInput.isa = isa;
})(CreateStackInput = exports.CreateStackInput || (exports.CreateStackInput = {}));
var CreateStackOutput;
(function (CreateStackOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStackOutput");
    }
    CreateStackOutput.isa = isa;
})(CreateStackOutput = exports.CreateStackOutput || (exports.CreateStackOutput = {}));
var DeleteChangeSetInput;
(function (DeleteChangeSetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteChangeSetInput");
    }
    DeleteChangeSetInput.isa = isa;
})(DeleteChangeSetInput = exports.DeleteChangeSetInput || (exports.DeleteChangeSetInput = {}));
var DeleteChangeSetOutput;
(function (DeleteChangeSetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteChangeSetOutput");
    }
    DeleteChangeSetOutput.isa = isa;
})(DeleteChangeSetOutput = exports.DeleteChangeSetOutput || (exports.DeleteChangeSetOutput = {}));
var DeleteStackInput;
(function (DeleteStackInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteStackInput");
    }
    DeleteStackInput.isa = isa;
})(DeleteStackInput = exports.DeleteStackInput || (exports.DeleteStackInput = {}));
var DeregisterTypeInput;
(function (DeregisterTypeInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterTypeInput");
    }
    DeregisterTypeInput.isa = isa;
})(DeregisterTypeInput = exports.DeregisterTypeInput || (exports.DeregisterTypeInput = {}));
var DeregisterTypeOutput;
(function (DeregisterTypeOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterTypeOutput");
    }
    DeregisterTypeOutput.isa = isa;
})(DeregisterTypeOutput = exports.DeregisterTypeOutput || (exports.DeregisterTypeOutput = {}));
var DescribeAccountLimitsInput;
(function (DescribeAccountLimitsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAccountLimitsInput");
    }
    DescribeAccountLimitsInput.isa = isa;
})(DescribeAccountLimitsInput = exports.DescribeAccountLimitsInput || (exports.DescribeAccountLimitsInput = {}));
var DescribeAccountLimitsOutput;
(function (DescribeAccountLimitsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAccountLimitsOutput");
    }
    DescribeAccountLimitsOutput.isa = isa;
})(DescribeAccountLimitsOutput = exports.DescribeAccountLimitsOutput || (exports.DescribeAccountLimitsOutput = {}));
var DescribeChangeSetInput;
(function (DescribeChangeSetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeChangeSetInput");
    }
    DescribeChangeSetInput.isa = isa;
})(DescribeChangeSetInput = exports.DescribeChangeSetInput || (exports.DescribeChangeSetInput = {}));
var DescribeChangeSetOutput;
(function (DescribeChangeSetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeChangeSetOutput");
    }
    DescribeChangeSetOutput.isa = isa;
})(DescribeChangeSetOutput = exports.DescribeChangeSetOutput || (exports.DescribeChangeSetOutput = {}));
var DescribeStackDriftDetectionStatusInput;
(function (DescribeStackDriftDetectionStatusInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackDriftDetectionStatusInput");
    }
    DescribeStackDriftDetectionStatusInput.isa = isa;
})(DescribeStackDriftDetectionStatusInput = exports.DescribeStackDriftDetectionStatusInput || (exports.DescribeStackDriftDetectionStatusInput = {}));
var DescribeStackDriftDetectionStatusOutput;
(function (DescribeStackDriftDetectionStatusOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackDriftDetectionStatusOutput");
    }
    DescribeStackDriftDetectionStatusOutput.isa = isa;
})(DescribeStackDriftDetectionStatusOutput = exports.DescribeStackDriftDetectionStatusOutput || (exports.DescribeStackDriftDetectionStatusOutput = {}));
var DescribeStackEventsInput;
(function (DescribeStackEventsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackEventsInput");
    }
    DescribeStackEventsInput.isa = isa;
})(DescribeStackEventsInput = exports.DescribeStackEventsInput || (exports.DescribeStackEventsInput = {}));
var DescribeStackEventsOutput;
(function (DescribeStackEventsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackEventsOutput");
    }
    DescribeStackEventsOutput.isa = isa;
})(DescribeStackEventsOutput = exports.DescribeStackEventsOutput || (exports.DescribeStackEventsOutput = {}));
var DescribeStackResourceDriftsInput;
(function (DescribeStackResourceDriftsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackResourceDriftsInput");
    }
    DescribeStackResourceDriftsInput.isa = isa;
})(DescribeStackResourceDriftsInput = exports.DescribeStackResourceDriftsInput || (exports.DescribeStackResourceDriftsInput = {}));
var DescribeStackResourceDriftsOutput;
(function (DescribeStackResourceDriftsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackResourceDriftsOutput");
    }
    DescribeStackResourceDriftsOutput.isa = isa;
})(DescribeStackResourceDriftsOutput = exports.DescribeStackResourceDriftsOutput || (exports.DescribeStackResourceDriftsOutput = {}));
var DescribeStackResourceInput;
(function (DescribeStackResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackResourceInput");
    }
    DescribeStackResourceInput.isa = isa;
})(DescribeStackResourceInput = exports.DescribeStackResourceInput || (exports.DescribeStackResourceInput = {}));
var DescribeStackResourceOutput;
(function (DescribeStackResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackResourceOutput");
    }
    DescribeStackResourceOutput.isa = isa;
})(DescribeStackResourceOutput = exports.DescribeStackResourceOutput || (exports.DescribeStackResourceOutput = {}));
var DescribeStackResourcesInput;
(function (DescribeStackResourcesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackResourcesInput");
    }
    DescribeStackResourcesInput.isa = isa;
})(DescribeStackResourcesInput = exports.DescribeStackResourcesInput || (exports.DescribeStackResourcesInput = {}));
var DescribeStackResourcesOutput;
(function (DescribeStackResourcesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackResourcesOutput");
    }
    DescribeStackResourcesOutput.isa = isa;
})(DescribeStackResourcesOutput = exports.DescribeStackResourcesOutput || (exports.DescribeStackResourcesOutput = {}));
var DescribeStacksInput;
(function (DescribeStacksInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStacksInput");
    }
    DescribeStacksInput.isa = isa;
})(DescribeStacksInput = exports.DescribeStacksInput || (exports.DescribeStacksInput = {}));
var DescribeStacksOutput;
(function (DescribeStacksOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStacksOutput");
    }
    DescribeStacksOutput.isa = isa;
})(DescribeStacksOutput = exports.DescribeStacksOutput || (exports.DescribeStacksOutput = {}));
var DescribeTypeInput;
(function (DescribeTypeInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTypeInput");
    }
    DescribeTypeInput.isa = isa;
})(DescribeTypeInput = exports.DescribeTypeInput || (exports.DescribeTypeInput = {}));
var DescribeTypeOutput;
(function (DescribeTypeOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTypeOutput");
    }
    DescribeTypeOutput.isa = isa;
})(DescribeTypeOutput = exports.DescribeTypeOutput || (exports.DescribeTypeOutput = {}));
var DescribeTypeRegistrationInput;
(function (DescribeTypeRegistrationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTypeRegistrationInput");
    }
    DescribeTypeRegistrationInput.isa = isa;
})(DescribeTypeRegistrationInput = exports.DescribeTypeRegistrationInput || (exports.DescribeTypeRegistrationInput = {}));
var DescribeTypeRegistrationOutput;
(function (DescribeTypeRegistrationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTypeRegistrationOutput");
    }
    DescribeTypeRegistrationOutput.isa = isa;
})(DescribeTypeRegistrationOutput = exports.DescribeTypeRegistrationOutput || (exports.DescribeTypeRegistrationOutput = {}));
var DetectStackDriftInput;
(function (DetectStackDriftInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectStackDriftInput");
    }
    DetectStackDriftInput.isa = isa;
})(DetectStackDriftInput = exports.DetectStackDriftInput || (exports.DetectStackDriftInput = {}));
var DetectStackDriftOutput;
(function (DetectStackDriftOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectStackDriftOutput");
    }
    DetectStackDriftOutput.isa = isa;
})(DetectStackDriftOutput = exports.DetectStackDriftOutput || (exports.DetectStackDriftOutput = {}));
var DetectStackResourceDriftInput;
(function (DetectStackResourceDriftInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectStackResourceDriftInput");
    }
    DetectStackResourceDriftInput.isa = isa;
})(DetectStackResourceDriftInput = exports.DetectStackResourceDriftInput || (exports.DetectStackResourceDriftInput = {}));
var DetectStackResourceDriftOutput;
(function (DetectStackResourceDriftOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectStackResourceDriftOutput");
    }
    DetectStackResourceDriftOutput.isa = isa;
})(DetectStackResourceDriftOutput = exports.DetectStackResourceDriftOutput || (exports.DetectStackResourceDriftOutput = {}));
var DifferenceType;
(function (DifferenceType) {
    DifferenceType["ADD"] = "ADD";
    DifferenceType["NOT_EQUAL"] = "NOT_EQUAL";
    DifferenceType["REMOVE"] = "REMOVE";
})(DifferenceType = exports.DifferenceType || (exports.DifferenceType = {}));
var EstimateTemplateCostInput;
(function (EstimateTemplateCostInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "EstimateTemplateCostInput");
    }
    EstimateTemplateCostInput.isa = isa;
})(EstimateTemplateCostInput = exports.EstimateTemplateCostInput || (exports.EstimateTemplateCostInput = {}));
var EstimateTemplateCostOutput;
(function (EstimateTemplateCostOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "EstimateTemplateCostOutput");
    }
    EstimateTemplateCostOutput.isa = isa;
})(EstimateTemplateCostOutput = exports.EstimateTemplateCostOutput || (exports.EstimateTemplateCostOutput = {}));
var EvaluationType;
(function (EvaluationType) {
    EvaluationType["Dynamic"] = "Dynamic";
    EvaluationType["Static"] = "Static";
})(EvaluationType = exports.EvaluationType || (exports.EvaluationType = {}));
var ExecuteChangeSetInput;
(function (ExecuteChangeSetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExecuteChangeSetInput");
    }
    ExecuteChangeSetInput.isa = isa;
})(ExecuteChangeSetInput = exports.ExecuteChangeSetInput || (exports.ExecuteChangeSetInput = {}));
var ExecuteChangeSetOutput;
(function (ExecuteChangeSetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExecuteChangeSetOutput");
    }
    ExecuteChangeSetOutput.isa = isa;
})(ExecuteChangeSetOutput = exports.ExecuteChangeSetOutput || (exports.ExecuteChangeSetOutput = {}));
var ExecutionStatus;
(function (ExecutionStatus) {
    ExecutionStatus["AVAILABLE"] = "AVAILABLE";
    ExecutionStatus["EXECUTE_COMPLETE"] = "EXECUTE_COMPLETE";
    ExecutionStatus["EXECUTE_FAILED"] = "EXECUTE_FAILED";
    ExecutionStatus["EXECUTE_IN_PROGRESS"] = "EXECUTE_IN_PROGRESS";
    ExecutionStatus["OBSOLETE"] = "OBSOLETE";
    ExecutionStatus["UNAVAILABLE"] = "UNAVAILABLE";
})(ExecutionStatus = exports.ExecutionStatus || (exports.ExecutionStatus = {}));
var Export;
(function (Export) {
    function isa(o) {
        return smithy_client_1.isa(o, "Export");
    }
    Export.isa = isa;
})(Export = exports.Export || (exports.Export = {}));
var GetStackPolicyInput;
(function (GetStackPolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetStackPolicyInput");
    }
    GetStackPolicyInput.isa = isa;
})(GetStackPolicyInput = exports.GetStackPolicyInput || (exports.GetStackPolicyInput = {}));
var GetStackPolicyOutput;
(function (GetStackPolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetStackPolicyOutput");
    }
    GetStackPolicyOutput.isa = isa;
})(GetStackPolicyOutput = exports.GetStackPolicyOutput || (exports.GetStackPolicyOutput = {}));
var GetTemplateInput;
(function (GetTemplateInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTemplateInput");
    }
    GetTemplateInput.isa = isa;
})(GetTemplateInput = exports.GetTemplateInput || (exports.GetTemplateInput = {}));
var GetTemplateOutput;
(function (GetTemplateOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTemplateOutput");
    }
    GetTemplateOutput.isa = isa;
})(GetTemplateOutput = exports.GetTemplateOutput || (exports.GetTemplateOutput = {}));
var GetTemplateSummaryInput;
(function (GetTemplateSummaryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTemplateSummaryInput");
    }
    GetTemplateSummaryInput.isa = isa;
})(GetTemplateSummaryInput = exports.GetTemplateSummaryInput || (exports.GetTemplateSummaryInput = {}));
var GetTemplateSummaryOutput;
(function (GetTemplateSummaryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTemplateSummaryOutput");
    }
    GetTemplateSummaryOutput.isa = isa;
})(GetTemplateSummaryOutput = exports.GetTemplateSummaryOutput || (exports.GetTemplateSummaryOutput = {}));
var HandlerErrorCode;
(function (HandlerErrorCode) {
    HandlerErrorCode["AccessDenied"] = "AccessDenied";
    HandlerErrorCode["AlreadyExists"] = "AlreadyExists";
    HandlerErrorCode["GeneralServiceException"] = "GeneralServiceException";
    HandlerErrorCode["InternalFailure"] = "InternalFailure";
    HandlerErrorCode["InvalidCredentials"] = "InvalidCredentials";
    HandlerErrorCode["InvalidRequest"] = "InvalidRequest";
    HandlerErrorCode["NetworkFailure"] = "NetworkFailure";
    HandlerErrorCode["NotFound"] = "NotFound";
    HandlerErrorCode["NotUpdatable"] = "NotUpdatable";
    HandlerErrorCode["ResourceConflict"] = "ResourceConflict";
    HandlerErrorCode["ServiceInternalError"] = "ServiceInternalError";
    HandlerErrorCode["ServiceLimitExceeded"] = "ServiceLimitExceeded";
    HandlerErrorCode["ServiceTimeout"] = "NotStabilized";
    HandlerErrorCode["Throttling"] = "Throttling";
})(HandlerErrorCode = exports.HandlerErrorCode || (exports.HandlerErrorCode = {}));
var InsufficientCapabilitiesException;
(function (InsufficientCapabilitiesException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsufficientCapabilitiesException");
    }
    InsufficientCapabilitiesException.isa = isa;
})(InsufficientCapabilitiesException = exports.InsufficientCapabilitiesException || (exports.InsufficientCapabilitiesException = {}));
var InvalidChangeSetStatusException;
(function (InvalidChangeSetStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidChangeSetStatusException");
    }
    InvalidChangeSetStatusException.isa = isa;
})(InvalidChangeSetStatusException = exports.InvalidChangeSetStatusException || (exports.InvalidChangeSetStatusException = {}));
var InvalidStateTransitionException;
(function (InvalidStateTransitionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidStateTransitionException");
    }
    InvalidStateTransitionException.isa = isa;
})(InvalidStateTransitionException = exports.InvalidStateTransitionException || (exports.InvalidStateTransitionException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListChangeSetsInput;
(function (ListChangeSetsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListChangeSetsInput");
    }
    ListChangeSetsInput.isa = isa;
})(ListChangeSetsInput = exports.ListChangeSetsInput || (exports.ListChangeSetsInput = {}));
var ListChangeSetsOutput;
(function (ListChangeSetsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListChangeSetsOutput");
    }
    ListChangeSetsOutput.isa = isa;
})(ListChangeSetsOutput = exports.ListChangeSetsOutput || (exports.ListChangeSetsOutput = {}));
var ListExportsInput;
(function (ListExportsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListExportsInput");
    }
    ListExportsInput.isa = isa;
})(ListExportsInput = exports.ListExportsInput || (exports.ListExportsInput = {}));
var ListExportsOutput;
(function (ListExportsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListExportsOutput");
    }
    ListExportsOutput.isa = isa;
})(ListExportsOutput = exports.ListExportsOutput || (exports.ListExportsOutput = {}));
var ListImportsInput;
(function (ListImportsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListImportsInput");
    }
    ListImportsInput.isa = isa;
})(ListImportsInput = exports.ListImportsInput || (exports.ListImportsInput = {}));
var ListImportsOutput;
(function (ListImportsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListImportsOutput");
    }
    ListImportsOutput.isa = isa;
})(ListImportsOutput = exports.ListImportsOutput || (exports.ListImportsOutput = {}));
var ListStackResourcesInput;
(function (ListStackResourcesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStackResourcesInput");
    }
    ListStackResourcesInput.isa = isa;
})(ListStackResourcesInput = exports.ListStackResourcesInput || (exports.ListStackResourcesInput = {}));
var ListStackResourcesOutput;
(function (ListStackResourcesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStackResourcesOutput");
    }
    ListStackResourcesOutput.isa = isa;
})(ListStackResourcesOutput = exports.ListStackResourcesOutput || (exports.ListStackResourcesOutput = {}));
var ListStacksInput;
(function (ListStacksInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStacksInput");
    }
    ListStacksInput.isa = isa;
})(ListStacksInput = exports.ListStacksInput || (exports.ListStacksInput = {}));
var ListStacksOutput;
(function (ListStacksOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStacksOutput");
    }
    ListStacksOutput.isa = isa;
})(ListStacksOutput = exports.ListStacksOutput || (exports.ListStacksOutput = {}));
var ListTypeRegistrationsInput;
(function (ListTypeRegistrationsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTypeRegistrationsInput");
    }
    ListTypeRegistrationsInput.isa = isa;
})(ListTypeRegistrationsInput = exports.ListTypeRegistrationsInput || (exports.ListTypeRegistrationsInput = {}));
var ListTypeRegistrationsOutput;
(function (ListTypeRegistrationsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTypeRegistrationsOutput");
    }
    ListTypeRegistrationsOutput.isa = isa;
})(ListTypeRegistrationsOutput = exports.ListTypeRegistrationsOutput || (exports.ListTypeRegistrationsOutput = {}));
var ListTypeVersionsInput;
(function (ListTypeVersionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTypeVersionsInput");
    }
    ListTypeVersionsInput.isa = isa;
})(ListTypeVersionsInput = exports.ListTypeVersionsInput || (exports.ListTypeVersionsInput = {}));
var ListTypeVersionsOutput;
(function (ListTypeVersionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTypeVersionsOutput");
    }
    ListTypeVersionsOutput.isa = isa;
})(ListTypeVersionsOutput = exports.ListTypeVersionsOutput || (exports.ListTypeVersionsOutput = {}));
var ListTypesInput;
(function (ListTypesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTypesInput");
    }
    ListTypesInput.isa = isa;
})(ListTypesInput = exports.ListTypesInput || (exports.ListTypesInput = {}));
var ListTypesOutput;
(function (ListTypesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTypesOutput");
    }
    ListTypesOutput.isa = isa;
})(ListTypesOutput = exports.ListTypesOutput || (exports.ListTypesOutput = {}));
var LoggingConfig;
(function (LoggingConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoggingConfig");
    }
    LoggingConfig.isa = isa;
})(LoggingConfig = exports.LoggingConfig || (exports.LoggingConfig = {}));
var OnFailure;
(function (OnFailure) {
    OnFailure["DELETE"] = "DELETE";
    OnFailure["DO_NOTHING"] = "DO_NOTHING";
    OnFailure["ROLLBACK"] = "ROLLBACK";
})(OnFailure = exports.OnFailure || (exports.OnFailure = {}));
var OperationStatus;
(function (OperationStatus) {
    OperationStatus["FAILED"] = "FAILED";
    OperationStatus["IN_PROGRESS"] = "IN_PROGRESS";
    OperationStatus["PENDING"] = "PENDING";
    OperationStatus["SUCCESS"] = "SUCCESS";
})(OperationStatus = exports.OperationStatus || (exports.OperationStatus = {}));
var OperationStatusCheckFailedException;
(function (OperationStatusCheckFailedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationStatusCheckFailedException");
    }
    OperationStatusCheckFailedException.isa = isa;
})(OperationStatusCheckFailedException = exports.OperationStatusCheckFailedException || (exports.OperationStatusCheckFailedException = {}));
var Output;
(function (Output) {
    function isa(o) {
        return smithy_client_1.isa(o, "Output");
    }
    Output.isa = isa;
})(Output = exports.Output || (exports.Output = {}));
var Parameter;
(function (Parameter) {
    function isa(o) {
        return smithy_client_1.isa(o, "Parameter");
    }
    Parameter.isa = isa;
})(Parameter = exports.Parameter || (exports.Parameter = {}));
var ParameterConstraints;
(function (ParameterConstraints) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterConstraints");
    }
    ParameterConstraints.isa = isa;
})(ParameterConstraints = exports.ParameterConstraints || (exports.ParameterConstraints = {}));
var ParameterDeclaration;
(function (ParameterDeclaration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterDeclaration");
    }
    ParameterDeclaration.isa = isa;
})(ParameterDeclaration = exports.ParameterDeclaration || (exports.ParameterDeclaration = {}));
var PhysicalResourceIdContextKeyValuePair;
(function (PhysicalResourceIdContextKeyValuePair) {
    function isa(o) {
        return smithy_client_1.isa(o, "PhysicalResourceIdContextKeyValuePair");
    }
    PhysicalResourceIdContextKeyValuePair.isa = isa;
})(PhysicalResourceIdContextKeyValuePair = exports.PhysicalResourceIdContextKeyValuePair || (exports.PhysicalResourceIdContextKeyValuePair = {}));
var PropertyDifference;
(function (PropertyDifference) {
    function isa(o) {
        return smithy_client_1.isa(o, "PropertyDifference");
    }
    PropertyDifference.isa = isa;
})(PropertyDifference = exports.PropertyDifference || (exports.PropertyDifference = {}));
var RecordHandlerProgressInput;
(function (RecordHandlerProgressInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecordHandlerProgressInput");
    }
    RecordHandlerProgressInput.isa = isa;
})(RecordHandlerProgressInput = exports.RecordHandlerProgressInput || (exports.RecordHandlerProgressInput = {}));
var RecordHandlerProgressOutput;
(function (RecordHandlerProgressOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecordHandlerProgressOutput");
    }
    RecordHandlerProgressOutput.isa = isa;
})(RecordHandlerProgressOutput = exports.RecordHandlerProgressOutput || (exports.RecordHandlerProgressOutput = {}));
var RegisterTypeInput;
(function (RegisterTypeInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterTypeInput");
    }
    RegisterTypeInput.isa = isa;
})(RegisterTypeInput = exports.RegisterTypeInput || (exports.RegisterTypeInput = {}));
var RegisterTypeOutput;
(function (RegisterTypeOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterTypeOutput");
    }
    RegisterTypeOutput.isa = isa;
})(RegisterTypeOutput = exports.RegisterTypeOutput || (exports.RegisterTypeOutput = {}));
var Replacement;
(function (Replacement) {
    Replacement["Conditional"] = "Conditional";
    Replacement["False"] = "False";
    Replacement["True"] = "True";
})(Replacement = exports.Replacement || (exports.Replacement = {}));
var RequiresRecreation;
(function (RequiresRecreation) {
    RequiresRecreation["Always"] = "Always";
    RequiresRecreation["Conditionally"] = "Conditionally";
    RequiresRecreation["Never"] = "Never";
})(RequiresRecreation = exports.RequiresRecreation || (exports.RequiresRecreation = {}));
var ResourceAttribute;
(function (ResourceAttribute) {
    ResourceAttribute["CreationPolicy"] = "CreationPolicy";
    ResourceAttribute["DeletionPolicy"] = "DeletionPolicy";
    ResourceAttribute["Metadata"] = "Metadata";
    ResourceAttribute["Properties"] = "Properties";
    ResourceAttribute["Tags"] = "Tags";
    ResourceAttribute["UpdatePolicy"] = "UpdatePolicy";
})(ResourceAttribute = exports.ResourceAttribute || (exports.ResourceAttribute = {}));
var ResourceChange;
(function (ResourceChange) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceChange");
    }
    ResourceChange.isa = isa;
})(ResourceChange = exports.ResourceChange || (exports.ResourceChange = {}));
var ResourceChangeDetail;
(function (ResourceChangeDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceChangeDetail");
    }
    ResourceChangeDetail.isa = isa;
})(ResourceChangeDetail = exports.ResourceChangeDetail || (exports.ResourceChangeDetail = {}));
var ResourceIdentifierSummary;
(function (ResourceIdentifierSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceIdentifierSummary");
    }
    ResourceIdentifierSummary.isa = isa;
})(ResourceIdentifierSummary = exports.ResourceIdentifierSummary || (exports.ResourceIdentifierSummary = {}));
var ResourceSignalStatus;
(function (ResourceSignalStatus) {
    ResourceSignalStatus["FAILURE"] = "FAILURE";
    ResourceSignalStatus["SUCCESS"] = "SUCCESS";
})(ResourceSignalStatus = exports.ResourceSignalStatus || (exports.ResourceSignalStatus = {}));
var ResourceStatus;
(function (ResourceStatus) {
    ResourceStatus["CREATE_COMPLETE"] = "CREATE_COMPLETE";
    ResourceStatus["CREATE_FAILED"] = "CREATE_FAILED";
    ResourceStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    ResourceStatus["DELETE_COMPLETE"] = "DELETE_COMPLETE";
    ResourceStatus["DELETE_FAILED"] = "DELETE_FAILED";
    ResourceStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    ResourceStatus["DELETE_SKIPPED"] = "DELETE_SKIPPED";
    ResourceStatus["IMPORT_COMPLETE"] = "IMPORT_COMPLETE";
    ResourceStatus["IMPORT_FAILED"] = "IMPORT_FAILED";
    ResourceStatus["IMPORT_IN_PROGRESS"] = "IMPORT_IN_PROGRESS";
    ResourceStatus["IMPORT_ROLLBACK_COMPLETE"] = "IMPORT_ROLLBACK_COMPLETE";
    ResourceStatus["IMPORT_ROLLBACK_FAILED"] = "IMPORT_ROLLBACK_FAILED";
    ResourceStatus["IMPORT_ROLLBACK_IN_PROGRESS"] = "IMPORT_ROLLBACK_IN_PROGRESS";
    ResourceStatus["UPDATE_COMPLETE"] = "UPDATE_COMPLETE";
    ResourceStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    ResourceStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(ResourceStatus = exports.ResourceStatus || (exports.ResourceStatus = {}));
var ResourceTargetDefinition;
(function (ResourceTargetDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceTargetDefinition");
    }
    ResourceTargetDefinition.isa = isa;
})(ResourceTargetDefinition = exports.ResourceTargetDefinition || (exports.ResourceTargetDefinition = {}));
var ResourceToImport;
(function (ResourceToImport) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceToImport");
    }
    ResourceToImport.isa = isa;
})(ResourceToImport = exports.ResourceToImport || (exports.ResourceToImport = {}));
var RollbackConfiguration;
(function (RollbackConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "RollbackConfiguration");
    }
    RollbackConfiguration.isa = isa;
})(RollbackConfiguration = exports.RollbackConfiguration || (exports.RollbackConfiguration = {}));
var RollbackTrigger;
(function (RollbackTrigger) {
    function isa(o) {
        return smithy_client_1.isa(o, "RollbackTrigger");
    }
    RollbackTrigger.isa = isa;
})(RollbackTrigger = exports.RollbackTrigger || (exports.RollbackTrigger = {}));
var SetStackPolicyInput;
(function (SetStackPolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetStackPolicyInput");
    }
    SetStackPolicyInput.isa = isa;
})(SetStackPolicyInput = exports.SetStackPolicyInput || (exports.SetStackPolicyInput = {}));
var SetTypeDefaultVersionInput;
(function (SetTypeDefaultVersionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetTypeDefaultVersionInput");
    }
    SetTypeDefaultVersionInput.isa = isa;
})(SetTypeDefaultVersionInput = exports.SetTypeDefaultVersionInput || (exports.SetTypeDefaultVersionInput = {}));
var SetTypeDefaultVersionOutput;
(function (SetTypeDefaultVersionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetTypeDefaultVersionOutput");
    }
    SetTypeDefaultVersionOutput.isa = isa;
})(SetTypeDefaultVersionOutput = exports.SetTypeDefaultVersionOutput || (exports.SetTypeDefaultVersionOutput = {}));
var SignalResourceInput;
(function (SignalResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SignalResourceInput");
    }
    SignalResourceInput.isa = isa;
})(SignalResourceInput = exports.SignalResourceInput || (exports.SignalResourceInput = {}));
var Stack;
(function (Stack) {
    function isa(o) {
        return smithy_client_1.isa(o, "Stack");
    }
    Stack.isa = isa;
})(Stack = exports.Stack || (exports.Stack = {}));
var StackDriftDetectionStatus;
(function (StackDriftDetectionStatus) {
    StackDriftDetectionStatus["DETECTION_COMPLETE"] = "DETECTION_COMPLETE";
    StackDriftDetectionStatus["DETECTION_FAILED"] = "DETECTION_FAILED";
    StackDriftDetectionStatus["DETECTION_IN_PROGRESS"] = "DETECTION_IN_PROGRESS";
})(StackDriftDetectionStatus = exports.StackDriftDetectionStatus || (exports.StackDriftDetectionStatus = {}));
var StackDriftInformation;
(function (StackDriftInformation) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackDriftInformation");
    }
    StackDriftInformation.isa = isa;
})(StackDriftInformation = exports.StackDriftInformation || (exports.StackDriftInformation = {}));
var StackDriftInformationSummary;
(function (StackDriftInformationSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackDriftInformationSummary");
    }
    StackDriftInformationSummary.isa = isa;
})(StackDriftInformationSummary = exports.StackDriftInformationSummary || (exports.StackDriftInformationSummary = {}));
var StackDriftStatus;
(function (StackDriftStatus) {
    StackDriftStatus["DRIFTED"] = "DRIFTED";
    StackDriftStatus["IN_SYNC"] = "IN_SYNC";
    StackDriftStatus["NOT_CHECKED"] = "NOT_CHECKED";
    StackDriftStatus["UNKNOWN"] = "UNKNOWN";
})(StackDriftStatus = exports.StackDriftStatus || (exports.StackDriftStatus = {}));
var StackEvent;
(function (StackEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackEvent");
    }
    StackEvent.isa = isa;
})(StackEvent = exports.StackEvent || (exports.StackEvent = {}));
var StackResource;
(function (StackResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackResource");
    }
    StackResource.isa = isa;
})(StackResource = exports.StackResource || (exports.StackResource = {}));
var StackResourceDetail;
(function (StackResourceDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackResourceDetail");
    }
    StackResourceDetail.isa = isa;
})(StackResourceDetail = exports.StackResourceDetail || (exports.StackResourceDetail = {}));
var StackResourceDrift;
(function (StackResourceDrift) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackResourceDrift");
    }
    StackResourceDrift.isa = isa;
})(StackResourceDrift = exports.StackResourceDrift || (exports.StackResourceDrift = {}));
var StackResourceDriftInformation;
(function (StackResourceDriftInformation) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackResourceDriftInformation");
    }
    StackResourceDriftInformation.isa = isa;
})(StackResourceDriftInformation = exports.StackResourceDriftInformation || (exports.StackResourceDriftInformation = {}));
var StackResourceDriftInformationSummary;
(function (StackResourceDriftInformationSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackResourceDriftInformationSummary");
    }
    StackResourceDriftInformationSummary.isa = isa;
})(StackResourceDriftInformationSummary = exports.StackResourceDriftInformationSummary || (exports.StackResourceDriftInformationSummary = {}));
var StackResourceDriftStatus;
(function (StackResourceDriftStatus) {
    StackResourceDriftStatus["DELETED"] = "DELETED";
    StackResourceDriftStatus["IN_SYNC"] = "IN_SYNC";
    StackResourceDriftStatus["MODIFIED"] = "MODIFIED";
    StackResourceDriftStatus["NOT_CHECKED"] = "NOT_CHECKED";
})(StackResourceDriftStatus = exports.StackResourceDriftStatus || (exports.StackResourceDriftStatus = {}));
var StackResourceSummary;
(function (StackResourceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackResourceSummary");
    }
    StackResourceSummary.isa = isa;
})(StackResourceSummary = exports.StackResourceSummary || (exports.StackResourceSummary = {}));
var StackSetNotFoundException;
(function (StackSetNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackSetNotFoundException");
    }
    StackSetNotFoundException.isa = isa;
})(StackSetNotFoundException = exports.StackSetNotFoundException || (exports.StackSetNotFoundException = {}));
var StackStatus;
(function (StackStatus) {
    StackStatus["CREATE_COMPLETE"] = "CREATE_COMPLETE";
    StackStatus["CREATE_FAILED"] = "CREATE_FAILED";
    StackStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    StackStatus["DELETE_COMPLETE"] = "DELETE_COMPLETE";
    StackStatus["DELETE_FAILED"] = "DELETE_FAILED";
    StackStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    StackStatus["IMPORT_COMPLETE"] = "IMPORT_COMPLETE";
    StackStatus["IMPORT_IN_PROGRESS"] = "IMPORT_IN_PROGRESS";
    StackStatus["IMPORT_ROLLBACK_COMPLETE"] = "IMPORT_ROLLBACK_COMPLETE";
    StackStatus["IMPORT_ROLLBACK_FAILED"] = "IMPORT_ROLLBACK_FAILED";
    StackStatus["IMPORT_ROLLBACK_IN_PROGRESS"] = "IMPORT_ROLLBACK_IN_PROGRESS";
    StackStatus["REVIEW_IN_PROGRESS"] = "REVIEW_IN_PROGRESS";
    StackStatus["ROLLBACK_COMPLETE"] = "ROLLBACK_COMPLETE";
    StackStatus["ROLLBACK_FAILED"] = "ROLLBACK_FAILED";
    StackStatus["ROLLBACK_IN_PROGRESS"] = "ROLLBACK_IN_PROGRESS";
    StackStatus["UPDATE_COMPLETE"] = "UPDATE_COMPLETE";
    StackStatus["UPDATE_COMPLETE_CLEANUP_IN_PROGRESS"] = "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS";
    StackStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
    StackStatus["UPDATE_ROLLBACK_COMPLETE"] = "UPDATE_ROLLBACK_COMPLETE";
    StackStatus["UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS"] = "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS";
    StackStatus["UPDATE_ROLLBACK_FAILED"] = "UPDATE_ROLLBACK_FAILED";
    StackStatus["UPDATE_ROLLBACK_IN_PROGRESS"] = "UPDATE_ROLLBACK_IN_PROGRESS";
})(StackStatus = exports.StackStatus || (exports.StackStatus = {}));
var StackSummary;
(function (StackSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackSummary");
    }
    StackSummary.isa = isa;
})(StackSummary = exports.StackSummary || (exports.StackSummary = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TemplateParameter;
(function (TemplateParameter) {
    function isa(o) {
        return smithy_client_1.isa(o, "TemplateParameter");
    }
    TemplateParameter.isa = isa;
})(TemplateParameter = exports.TemplateParameter || (exports.TemplateParameter = {}));
var TemplateStage;
(function (TemplateStage) {
    TemplateStage["Original"] = "Original";
    TemplateStage["Processed"] = "Processed";
})(TemplateStage = exports.TemplateStage || (exports.TemplateStage = {}));
var TokenAlreadyExistsException;
(function (TokenAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TokenAlreadyExistsException");
    }
    TokenAlreadyExistsException.isa = isa;
})(TokenAlreadyExistsException = exports.TokenAlreadyExistsException || (exports.TokenAlreadyExistsException = {}));
var TypeNotFoundException;
(function (TypeNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TypeNotFoundException");
    }
    TypeNotFoundException.isa = isa;
})(TypeNotFoundException = exports.TypeNotFoundException || (exports.TypeNotFoundException = {}));
var TypeSummary;
(function (TypeSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TypeSummary");
    }
    TypeSummary.isa = isa;
})(TypeSummary = exports.TypeSummary || (exports.TypeSummary = {}));
var TypeVersionSummary;
(function (TypeVersionSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TypeVersionSummary");
    }
    TypeVersionSummary.isa = isa;
})(TypeVersionSummary = exports.TypeVersionSummary || (exports.TypeVersionSummary = {}));
var UpdateStackInput;
(function (UpdateStackInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateStackInput");
    }
    UpdateStackInput.isa = isa;
})(UpdateStackInput = exports.UpdateStackInput || (exports.UpdateStackInput = {}));
var UpdateStackOutput;
(function (UpdateStackOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateStackOutput");
    }
    UpdateStackOutput.isa = isa;
})(UpdateStackOutput = exports.UpdateStackOutput || (exports.UpdateStackOutput = {}));
var UpdateTerminationProtectionInput;
(function (UpdateTerminationProtectionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTerminationProtectionInput");
    }
    UpdateTerminationProtectionInput.isa = isa;
})(UpdateTerminationProtectionInput = exports.UpdateTerminationProtectionInput || (exports.UpdateTerminationProtectionInput = {}));
var UpdateTerminationProtectionOutput;
(function (UpdateTerminationProtectionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTerminationProtectionOutput");
    }
    UpdateTerminationProtectionOutput.isa = isa;
})(UpdateTerminationProtectionOutput = exports.UpdateTerminationProtectionOutput || (exports.UpdateTerminationProtectionOutput = {}));
var ValidateTemplateInput;
(function (ValidateTemplateInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidateTemplateInput");
    }
    ValidateTemplateInput.isa = isa;
})(ValidateTemplateInput = exports.ValidateTemplateInput || (exports.ValidateTemplateInput = {}));
var ValidateTemplateOutput;
(function (ValidateTemplateOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidateTemplateOutput");
    }
    ValidateTemplateOutput.isa = isa;
})(ValidateTemplateOutput = exports.ValidateTemplateOutput || (exports.ValidateTemplateOutput = {}));
var AccountGateResult;
(function (AccountGateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountGateResult");
    }
    AccountGateResult.isa = isa;
})(AccountGateResult = exports.AccountGateResult || (exports.AccountGateResult = {}));
var CreateStackInstancesInput;
(function (CreateStackInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStackInstancesInput");
    }
    CreateStackInstancesInput.isa = isa;
})(CreateStackInstancesInput = exports.CreateStackInstancesInput || (exports.CreateStackInstancesInput = {}));
var CreateStackInstancesOutput;
(function (CreateStackInstancesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStackInstancesOutput");
    }
    CreateStackInstancesOutput.isa = isa;
})(CreateStackInstancesOutput = exports.CreateStackInstancesOutput || (exports.CreateStackInstancesOutput = {}));
var CreateStackSetInput;
(function (CreateStackSetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStackSetInput");
    }
    CreateStackSetInput.isa = isa;
})(CreateStackSetInput = exports.CreateStackSetInput || (exports.CreateStackSetInput = {}));
var CreateStackSetOutput;
(function (CreateStackSetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStackSetOutput");
    }
    CreateStackSetOutput.isa = isa;
})(CreateStackSetOutput = exports.CreateStackSetOutput || (exports.CreateStackSetOutput = {}));
var CreatedButModifiedException;
(function (CreatedButModifiedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatedButModifiedException");
    }
    CreatedButModifiedException.isa = isa;
})(CreatedButModifiedException = exports.CreatedButModifiedException || (exports.CreatedButModifiedException = {}));
var DeleteStackInstancesInput;
(function (DeleteStackInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteStackInstancesInput");
    }
    DeleteStackInstancesInput.isa = isa;
})(DeleteStackInstancesInput = exports.DeleteStackInstancesInput || (exports.DeleteStackInstancesInput = {}));
var DeleteStackInstancesOutput;
(function (DeleteStackInstancesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteStackInstancesOutput");
    }
    DeleteStackInstancesOutput.isa = isa;
})(DeleteStackInstancesOutput = exports.DeleteStackInstancesOutput || (exports.DeleteStackInstancesOutput = {}));
var DeleteStackSetInput;
(function (DeleteStackSetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteStackSetInput");
    }
    DeleteStackSetInput.isa = isa;
})(DeleteStackSetInput = exports.DeleteStackSetInput || (exports.DeleteStackSetInput = {}));
var DeleteStackSetOutput;
(function (DeleteStackSetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteStackSetOutput");
    }
    DeleteStackSetOutput.isa = isa;
})(DeleteStackSetOutput = exports.DeleteStackSetOutput || (exports.DeleteStackSetOutput = {}));
var DescribeStackInstanceInput;
(function (DescribeStackInstanceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackInstanceInput");
    }
    DescribeStackInstanceInput.isa = isa;
})(DescribeStackInstanceInput = exports.DescribeStackInstanceInput || (exports.DescribeStackInstanceInput = {}));
var DescribeStackInstanceOutput;
(function (DescribeStackInstanceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackInstanceOutput");
    }
    DescribeStackInstanceOutput.isa = isa;
})(DescribeStackInstanceOutput = exports.DescribeStackInstanceOutput || (exports.DescribeStackInstanceOutput = {}));
var DescribeStackSetInput;
(function (DescribeStackSetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackSetInput");
    }
    DescribeStackSetInput.isa = isa;
})(DescribeStackSetInput = exports.DescribeStackSetInput || (exports.DescribeStackSetInput = {}));
var DescribeStackSetOperationInput;
(function (DescribeStackSetOperationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackSetOperationInput");
    }
    DescribeStackSetOperationInput.isa = isa;
})(DescribeStackSetOperationInput = exports.DescribeStackSetOperationInput || (exports.DescribeStackSetOperationInput = {}));
var DescribeStackSetOperationOutput;
(function (DescribeStackSetOperationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackSetOperationOutput");
    }
    DescribeStackSetOperationOutput.isa = isa;
})(DescribeStackSetOperationOutput = exports.DescribeStackSetOperationOutput || (exports.DescribeStackSetOperationOutput = {}));
var DescribeStackSetOutput;
(function (DescribeStackSetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStackSetOutput");
    }
    DescribeStackSetOutput.isa = isa;
})(DescribeStackSetOutput = exports.DescribeStackSetOutput || (exports.DescribeStackSetOutput = {}));
var DetectStackSetDriftInput;
(function (DetectStackSetDriftInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectStackSetDriftInput");
    }
    DetectStackSetDriftInput.isa = isa;
})(DetectStackSetDriftInput = exports.DetectStackSetDriftInput || (exports.DetectStackSetDriftInput = {}));
var DetectStackSetDriftOutput;
(function (DetectStackSetDriftOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectStackSetDriftOutput");
    }
    DetectStackSetDriftOutput.isa = isa;
})(DetectStackSetDriftOutput = exports.DetectStackSetDriftOutput || (exports.DetectStackSetDriftOutput = {}));
var InvalidOperationException;
(function (InvalidOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOperationException");
    }
    InvalidOperationException.isa = isa;
})(InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {}));
var ListStackInstancesInput;
(function (ListStackInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStackInstancesInput");
    }
    ListStackInstancesInput.isa = isa;
})(ListStackInstancesInput = exports.ListStackInstancesInput || (exports.ListStackInstancesInput = {}));
var ListStackInstancesOutput;
(function (ListStackInstancesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStackInstancesOutput");
    }
    ListStackInstancesOutput.isa = isa;
})(ListStackInstancesOutput = exports.ListStackInstancesOutput || (exports.ListStackInstancesOutput = {}));
var ListStackSetOperationResultsInput;
(function (ListStackSetOperationResultsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStackSetOperationResultsInput");
    }
    ListStackSetOperationResultsInput.isa = isa;
})(ListStackSetOperationResultsInput = exports.ListStackSetOperationResultsInput || (exports.ListStackSetOperationResultsInput = {}));
var ListStackSetOperationResultsOutput;
(function (ListStackSetOperationResultsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStackSetOperationResultsOutput");
    }
    ListStackSetOperationResultsOutput.isa = isa;
})(ListStackSetOperationResultsOutput = exports.ListStackSetOperationResultsOutput || (exports.ListStackSetOperationResultsOutput = {}));
var ListStackSetOperationsInput;
(function (ListStackSetOperationsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStackSetOperationsInput");
    }
    ListStackSetOperationsInput.isa = isa;
})(ListStackSetOperationsInput = exports.ListStackSetOperationsInput || (exports.ListStackSetOperationsInput = {}));
var ListStackSetOperationsOutput;
(function (ListStackSetOperationsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStackSetOperationsOutput");
    }
    ListStackSetOperationsOutput.isa = isa;
})(ListStackSetOperationsOutput = exports.ListStackSetOperationsOutput || (exports.ListStackSetOperationsOutput = {}));
var ListStackSetsInput;
(function (ListStackSetsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStackSetsInput");
    }
    ListStackSetsInput.isa = isa;
})(ListStackSetsInput = exports.ListStackSetsInput || (exports.ListStackSetsInput = {}));
var ListStackSetsOutput;
(function (ListStackSetsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStackSetsOutput");
    }
    ListStackSetsOutput.isa = isa;
})(ListStackSetsOutput = exports.ListStackSetsOutput || (exports.ListStackSetsOutput = {}));
var NameAlreadyExistsException;
(function (NameAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NameAlreadyExistsException");
    }
    NameAlreadyExistsException.isa = isa;
})(NameAlreadyExistsException = exports.NameAlreadyExistsException || (exports.NameAlreadyExistsException = {}));
var OperationIdAlreadyExistsException;
(function (OperationIdAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationIdAlreadyExistsException");
    }
    OperationIdAlreadyExistsException.isa = isa;
})(OperationIdAlreadyExistsException = exports.OperationIdAlreadyExistsException || (exports.OperationIdAlreadyExistsException = {}));
var OperationInProgressException;
(function (OperationInProgressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationInProgressException");
    }
    OperationInProgressException.isa = isa;
})(OperationInProgressException = exports.OperationInProgressException || (exports.OperationInProgressException = {}));
var OperationNotFoundException;
(function (OperationNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationNotFoundException");
    }
    OperationNotFoundException.isa = isa;
})(OperationNotFoundException = exports.OperationNotFoundException || (exports.OperationNotFoundException = {}));
var StackInstance;
(function (StackInstance) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackInstance");
    }
    StackInstance.isa = isa;
})(StackInstance = exports.StackInstance || (exports.StackInstance = {}));
var StackInstanceNotFoundException;
(function (StackInstanceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackInstanceNotFoundException");
    }
    StackInstanceNotFoundException.isa = isa;
})(StackInstanceNotFoundException = exports.StackInstanceNotFoundException || (exports.StackInstanceNotFoundException = {}));
var StackInstanceSummary;
(function (StackInstanceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackInstanceSummary");
    }
    StackInstanceSummary.isa = isa;
})(StackInstanceSummary = exports.StackInstanceSummary || (exports.StackInstanceSummary = {}));
var StackSet;
(function (StackSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackSet");
    }
    StackSet.isa = isa;
})(StackSet = exports.StackSet || (exports.StackSet = {}));
var StackSetDriftDetectionDetails;
(function (StackSetDriftDetectionDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackSetDriftDetectionDetails");
    }
    StackSetDriftDetectionDetails.isa = isa;
})(StackSetDriftDetectionDetails = exports.StackSetDriftDetectionDetails || (exports.StackSetDriftDetectionDetails = {}));
var StackSetDriftDetectionStatus;
(function (StackSetDriftDetectionStatus) {
    StackSetDriftDetectionStatus["COMPLETED"] = "COMPLETED";
    StackSetDriftDetectionStatus["FAILED"] = "FAILED";
    StackSetDriftDetectionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    StackSetDriftDetectionStatus["PARTIAL_SUCCESS"] = "PARTIAL_SUCCESS";
    StackSetDriftDetectionStatus["STOPPED"] = "STOPPED";
})(StackSetDriftDetectionStatus = exports.StackSetDriftDetectionStatus || (exports.StackSetDriftDetectionStatus = {}));
var StackSetDriftStatus;
(function (StackSetDriftStatus) {
    StackSetDriftStatus["DRIFTED"] = "DRIFTED";
    StackSetDriftStatus["IN_SYNC"] = "IN_SYNC";
    StackSetDriftStatus["NOT_CHECKED"] = "NOT_CHECKED";
})(StackSetDriftStatus = exports.StackSetDriftStatus || (exports.StackSetDriftStatus = {}));
var StackSetNotEmptyException;
(function (StackSetNotEmptyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackSetNotEmptyException");
    }
    StackSetNotEmptyException.isa = isa;
})(StackSetNotEmptyException = exports.StackSetNotEmptyException || (exports.StackSetNotEmptyException = {}));
var StackSetOperation;
(function (StackSetOperation) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackSetOperation");
    }
    StackSetOperation.isa = isa;
})(StackSetOperation = exports.StackSetOperation || (exports.StackSetOperation = {}));
var StackSetOperationPreferences;
(function (StackSetOperationPreferences) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackSetOperationPreferences");
    }
    StackSetOperationPreferences.isa = isa;
})(StackSetOperationPreferences = exports.StackSetOperationPreferences || (exports.StackSetOperationPreferences = {}));
var StackSetOperationResultSummary;
(function (StackSetOperationResultSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackSetOperationResultSummary");
    }
    StackSetOperationResultSummary.isa = isa;
})(StackSetOperationResultSummary = exports.StackSetOperationResultSummary || (exports.StackSetOperationResultSummary = {}));
var StackSetOperationSummary;
(function (StackSetOperationSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackSetOperationSummary");
    }
    StackSetOperationSummary.isa = isa;
})(StackSetOperationSummary = exports.StackSetOperationSummary || (exports.StackSetOperationSummary = {}));
var StackSetSummary;
(function (StackSetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackSetSummary");
    }
    StackSetSummary.isa = isa;
})(StackSetSummary = exports.StackSetSummary || (exports.StackSetSummary = {}));
var StaleRequestException;
(function (StaleRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "StaleRequestException");
    }
    StaleRequestException.isa = isa;
})(StaleRequestException = exports.StaleRequestException || (exports.StaleRequestException = {}));
var StopStackSetOperationInput;
(function (StopStackSetOperationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopStackSetOperationInput");
    }
    StopStackSetOperationInput.isa = isa;
})(StopStackSetOperationInput = exports.StopStackSetOperationInput || (exports.StopStackSetOperationInput = {}));
var StopStackSetOperationOutput;
(function (StopStackSetOperationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopStackSetOperationOutput");
    }
    StopStackSetOperationOutput.isa = isa;
})(StopStackSetOperationOutput = exports.StopStackSetOperationOutput || (exports.StopStackSetOperationOutput = {}));
var UpdateStackInstancesInput;
(function (UpdateStackInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateStackInstancesInput");
    }
    UpdateStackInstancesInput.isa = isa;
})(UpdateStackInstancesInput = exports.UpdateStackInstancesInput || (exports.UpdateStackInstancesInput = {}));
var UpdateStackInstancesOutput;
(function (UpdateStackInstancesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateStackInstancesOutput");
    }
    UpdateStackInstancesOutput.isa = isa;
})(UpdateStackInstancesOutput = exports.UpdateStackInstancesOutput || (exports.UpdateStackInstancesOutput = {}));
var UpdateStackSetInput;
(function (UpdateStackSetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateStackSetInput");
    }
    UpdateStackSetInput.isa = isa;
})(UpdateStackSetInput = exports.UpdateStackSetInput || (exports.UpdateStackSetInput = {}));
var UpdateStackSetOutput;
(function (UpdateStackSetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateStackSetOutput");
    }
    UpdateStackSetOutput.isa = isa;
})(UpdateStackSetOutput = exports.UpdateStackSetOutput || (exports.UpdateStackSetOutput = {}));
//# sourceMappingURL=index.js.map