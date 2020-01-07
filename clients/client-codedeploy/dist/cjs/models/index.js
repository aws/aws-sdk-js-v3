"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AddTagsToOnPremisesInstancesInput;
(function (AddTagsToOnPremisesInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsToOnPremisesInstancesInput");
    }
    AddTagsToOnPremisesInstancesInput.isa = isa;
})(AddTagsToOnPremisesInstancesInput = exports.AddTagsToOnPremisesInstancesInput || (exports.AddTagsToOnPremisesInstancesInput = {}));
var Alarm;
(function (Alarm) {
    function isa(o) {
        return smithy_client_1.isa(o, "Alarm");
    }
    Alarm.isa = isa;
})(Alarm = exports.Alarm || (exports.Alarm = {}));
var AlarmConfiguration;
(function (AlarmConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlarmConfiguration");
    }
    AlarmConfiguration.isa = isa;
})(AlarmConfiguration = exports.AlarmConfiguration || (exports.AlarmConfiguration = {}));
var AlarmsLimitExceededException;
(function (AlarmsLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlarmsLimitExceededException");
    }
    AlarmsLimitExceededException.isa = isa;
})(AlarmsLimitExceededException = exports.AlarmsLimitExceededException || (exports.AlarmsLimitExceededException = {}));
var AppSpecContent;
(function (AppSpecContent) {
    function isa(o) {
        return smithy_client_1.isa(o, "AppSpecContent");
    }
    AppSpecContent.isa = isa;
})(AppSpecContent = exports.AppSpecContent || (exports.AppSpecContent = {}));
var ApplicationAlreadyExistsException;
(function (ApplicationAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationAlreadyExistsException");
    }
    ApplicationAlreadyExistsException.isa = isa;
})(ApplicationAlreadyExistsException = exports.ApplicationAlreadyExistsException || (exports.ApplicationAlreadyExistsException = {}));
var ApplicationDoesNotExistException;
(function (ApplicationDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationDoesNotExistException");
    }
    ApplicationDoesNotExistException.isa = isa;
})(ApplicationDoesNotExistException = exports.ApplicationDoesNotExistException || (exports.ApplicationDoesNotExistException = {}));
var ApplicationInfo;
(function (ApplicationInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationInfo");
    }
    ApplicationInfo.isa = isa;
})(ApplicationInfo = exports.ApplicationInfo || (exports.ApplicationInfo = {}));
var ApplicationLimitExceededException;
(function (ApplicationLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationLimitExceededException");
    }
    ApplicationLimitExceededException.isa = isa;
})(ApplicationLimitExceededException = exports.ApplicationLimitExceededException || (exports.ApplicationLimitExceededException = {}));
var ApplicationNameRequiredException;
(function (ApplicationNameRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationNameRequiredException");
    }
    ApplicationNameRequiredException.isa = isa;
})(ApplicationNameRequiredException = exports.ApplicationNameRequiredException || (exports.ApplicationNameRequiredException = {}));
var ApplicationRevisionSortBy;
(function (ApplicationRevisionSortBy) {
    ApplicationRevisionSortBy["FirstUsedTime"] = "firstUsedTime";
    ApplicationRevisionSortBy["LastUsedTime"] = "lastUsedTime";
    ApplicationRevisionSortBy["RegisterTime"] = "registerTime";
})(ApplicationRevisionSortBy = exports.ApplicationRevisionSortBy || (exports.ApplicationRevisionSortBy = {}));
var ArnNotSupportedException;
(function (ArnNotSupportedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ArnNotSupportedException");
    }
    ArnNotSupportedException.isa = isa;
})(ArnNotSupportedException = exports.ArnNotSupportedException || (exports.ArnNotSupportedException = {}));
var AutoRollbackConfiguration;
(function (AutoRollbackConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoRollbackConfiguration");
    }
    AutoRollbackConfiguration.isa = isa;
})(AutoRollbackConfiguration = exports.AutoRollbackConfiguration || (exports.AutoRollbackConfiguration = {}));
var AutoRollbackEvent;
(function (AutoRollbackEvent) {
    AutoRollbackEvent["DEPLOYMENT_FAILURE"] = "DEPLOYMENT_FAILURE";
    AutoRollbackEvent["DEPLOYMENT_STOP_ON_ALARM"] = "DEPLOYMENT_STOP_ON_ALARM";
    AutoRollbackEvent["DEPLOYMENT_STOP_ON_REQUEST"] = "DEPLOYMENT_STOP_ON_REQUEST";
})(AutoRollbackEvent = exports.AutoRollbackEvent || (exports.AutoRollbackEvent = {}));
var AutoScalingGroup;
(function (AutoScalingGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingGroup");
    }
    AutoScalingGroup.isa = isa;
})(AutoScalingGroup = exports.AutoScalingGroup || (exports.AutoScalingGroup = {}));
var BatchGetApplicationRevisionsInput;
(function (BatchGetApplicationRevisionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetApplicationRevisionsInput");
    }
    BatchGetApplicationRevisionsInput.isa = isa;
})(BatchGetApplicationRevisionsInput = exports.BatchGetApplicationRevisionsInput || (exports.BatchGetApplicationRevisionsInput = {}));
var BatchGetApplicationRevisionsOutput;
(function (BatchGetApplicationRevisionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetApplicationRevisionsOutput");
    }
    BatchGetApplicationRevisionsOutput.isa = isa;
})(BatchGetApplicationRevisionsOutput = exports.BatchGetApplicationRevisionsOutput || (exports.BatchGetApplicationRevisionsOutput = {}));
var BatchGetApplicationsInput;
(function (BatchGetApplicationsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetApplicationsInput");
    }
    BatchGetApplicationsInput.isa = isa;
})(BatchGetApplicationsInput = exports.BatchGetApplicationsInput || (exports.BatchGetApplicationsInput = {}));
var BatchGetApplicationsOutput;
(function (BatchGetApplicationsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetApplicationsOutput");
    }
    BatchGetApplicationsOutput.isa = isa;
})(BatchGetApplicationsOutput = exports.BatchGetApplicationsOutput || (exports.BatchGetApplicationsOutput = {}));
var BatchGetDeploymentGroupsInput;
(function (BatchGetDeploymentGroupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetDeploymentGroupsInput");
    }
    BatchGetDeploymentGroupsInput.isa = isa;
})(BatchGetDeploymentGroupsInput = exports.BatchGetDeploymentGroupsInput || (exports.BatchGetDeploymentGroupsInput = {}));
var BatchGetDeploymentGroupsOutput;
(function (BatchGetDeploymentGroupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetDeploymentGroupsOutput");
    }
    BatchGetDeploymentGroupsOutput.isa = isa;
})(BatchGetDeploymentGroupsOutput = exports.BatchGetDeploymentGroupsOutput || (exports.BatchGetDeploymentGroupsOutput = {}));
var BatchGetDeploymentInstancesInput;
(function (BatchGetDeploymentInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetDeploymentInstancesInput");
    }
    BatchGetDeploymentInstancesInput.isa = isa;
})(BatchGetDeploymentInstancesInput = exports.BatchGetDeploymentInstancesInput || (exports.BatchGetDeploymentInstancesInput = {}));
var BatchGetDeploymentInstancesOutput;
(function (BatchGetDeploymentInstancesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetDeploymentInstancesOutput");
    }
    BatchGetDeploymentInstancesOutput.isa = isa;
})(BatchGetDeploymentInstancesOutput = exports.BatchGetDeploymentInstancesOutput || (exports.BatchGetDeploymentInstancesOutput = {}));
var BatchGetDeploymentTargetsInput;
(function (BatchGetDeploymentTargetsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetDeploymentTargetsInput");
    }
    BatchGetDeploymentTargetsInput.isa = isa;
})(BatchGetDeploymentTargetsInput = exports.BatchGetDeploymentTargetsInput || (exports.BatchGetDeploymentTargetsInput = {}));
var BatchGetDeploymentTargetsOutput;
(function (BatchGetDeploymentTargetsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetDeploymentTargetsOutput");
    }
    BatchGetDeploymentTargetsOutput.isa = isa;
})(BatchGetDeploymentTargetsOutput = exports.BatchGetDeploymentTargetsOutput || (exports.BatchGetDeploymentTargetsOutput = {}));
var BatchGetDeploymentsInput;
(function (BatchGetDeploymentsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetDeploymentsInput");
    }
    BatchGetDeploymentsInput.isa = isa;
})(BatchGetDeploymentsInput = exports.BatchGetDeploymentsInput || (exports.BatchGetDeploymentsInput = {}));
var BatchGetDeploymentsOutput;
(function (BatchGetDeploymentsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetDeploymentsOutput");
    }
    BatchGetDeploymentsOutput.isa = isa;
})(BatchGetDeploymentsOutput = exports.BatchGetDeploymentsOutput || (exports.BatchGetDeploymentsOutput = {}));
var BatchGetOnPremisesInstancesInput;
(function (BatchGetOnPremisesInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetOnPremisesInstancesInput");
    }
    BatchGetOnPremisesInstancesInput.isa = isa;
})(BatchGetOnPremisesInstancesInput = exports.BatchGetOnPremisesInstancesInput || (exports.BatchGetOnPremisesInstancesInput = {}));
var BatchGetOnPremisesInstancesOutput;
(function (BatchGetOnPremisesInstancesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetOnPremisesInstancesOutput");
    }
    BatchGetOnPremisesInstancesOutput.isa = isa;
})(BatchGetOnPremisesInstancesOutput = exports.BatchGetOnPremisesInstancesOutput || (exports.BatchGetOnPremisesInstancesOutput = {}));
var BatchLimitExceededException;
(function (BatchLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchLimitExceededException");
    }
    BatchLimitExceededException.isa = isa;
})(BatchLimitExceededException = exports.BatchLimitExceededException || (exports.BatchLimitExceededException = {}));
var BlueGreenDeploymentConfiguration;
(function (BlueGreenDeploymentConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "BlueGreenDeploymentConfiguration");
    }
    BlueGreenDeploymentConfiguration.isa = isa;
})(BlueGreenDeploymentConfiguration = exports.BlueGreenDeploymentConfiguration || (exports.BlueGreenDeploymentConfiguration = {}));
var BlueInstanceTerminationOption;
(function (BlueInstanceTerminationOption) {
    function isa(o) {
        return smithy_client_1.isa(o, "BlueInstanceTerminationOption");
    }
    BlueInstanceTerminationOption.isa = isa;
})(BlueInstanceTerminationOption = exports.BlueInstanceTerminationOption || (exports.BlueInstanceTerminationOption = {}));
var BucketNameFilterRequiredException;
(function (BucketNameFilterRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BucketNameFilterRequiredException");
    }
    BucketNameFilterRequiredException.isa = isa;
})(BucketNameFilterRequiredException = exports.BucketNameFilterRequiredException || (exports.BucketNameFilterRequiredException = {}));
var BundleType;
(function (BundleType) {
    BundleType["JSON"] = "JSON";
    BundleType["Tar"] = "tar";
    BundleType["TarGZip"] = "tgz";
    BundleType["YAML"] = "YAML";
    BundleType["Zip"] = "zip";
})(BundleType = exports.BundleType || (exports.BundleType = {}));
var ComputePlatform;
(function (ComputePlatform) {
    ComputePlatform["ECS"] = "ECS";
    ComputePlatform["LAMBDA"] = "Lambda";
    ComputePlatform["SERVER"] = "Server";
})(ComputePlatform = exports.ComputePlatform || (exports.ComputePlatform = {}));
var ContinueDeploymentInput;
(function (ContinueDeploymentInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContinueDeploymentInput");
    }
    ContinueDeploymentInput.isa = isa;
})(ContinueDeploymentInput = exports.ContinueDeploymentInput || (exports.ContinueDeploymentInput = {}));
var CreateApplicationInput;
(function (CreateApplicationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateApplicationInput");
    }
    CreateApplicationInput.isa = isa;
})(CreateApplicationInput = exports.CreateApplicationInput || (exports.CreateApplicationInput = {}));
var CreateApplicationOutput;
(function (CreateApplicationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateApplicationOutput");
    }
    CreateApplicationOutput.isa = isa;
})(CreateApplicationOutput = exports.CreateApplicationOutput || (exports.CreateApplicationOutput = {}));
var CreateDeploymentConfigInput;
(function (CreateDeploymentConfigInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeploymentConfigInput");
    }
    CreateDeploymentConfigInput.isa = isa;
})(CreateDeploymentConfigInput = exports.CreateDeploymentConfigInput || (exports.CreateDeploymentConfigInput = {}));
var CreateDeploymentConfigOutput;
(function (CreateDeploymentConfigOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeploymentConfigOutput");
    }
    CreateDeploymentConfigOutput.isa = isa;
})(CreateDeploymentConfigOutput = exports.CreateDeploymentConfigOutput || (exports.CreateDeploymentConfigOutput = {}));
var CreateDeploymentGroupInput;
(function (CreateDeploymentGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeploymentGroupInput");
    }
    CreateDeploymentGroupInput.isa = isa;
})(CreateDeploymentGroupInput = exports.CreateDeploymentGroupInput || (exports.CreateDeploymentGroupInput = {}));
var CreateDeploymentGroupOutput;
(function (CreateDeploymentGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeploymentGroupOutput");
    }
    CreateDeploymentGroupOutput.isa = isa;
})(CreateDeploymentGroupOutput = exports.CreateDeploymentGroupOutput || (exports.CreateDeploymentGroupOutput = {}));
var CreateDeploymentInput;
(function (CreateDeploymentInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeploymentInput");
    }
    CreateDeploymentInput.isa = isa;
})(CreateDeploymentInput = exports.CreateDeploymentInput || (exports.CreateDeploymentInput = {}));
var CreateDeploymentOutput;
(function (CreateDeploymentOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeploymentOutput");
    }
    CreateDeploymentOutput.isa = isa;
})(CreateDeploymentOutput = exports.CreateDeploymentOutput || (exports.CreateDeploymentOutput = {}));
var DeleteApplicationInput;
(function (DeleteApplicationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationInput");
    }
    DeleteApplicationInput.isa = isa;
})(DeleteApplicationInput = exports.DeleteApplicationInput || (exports.DeleteApplicationInput = {}));
var DeleteDeploymentConfigInput;
(function (DeleteDeploymentConfigInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDeploymentConfigInput");
    }
    DeleteDeploymentConfigInput.isa = isa;
})(DeleteDeploymentConfigInput = exports.DeleteDeploymentConfigInput || (exports.DeleteDeploymentConfigInput = {}));
var DeleteDeploymentGroupInput;
(function (DeleteDeploymentGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDeploymentGroupInput");
    }
    DeleteDeploymentGroupInput.isa = isa;
})(DeleteDeploymentGroupInput = exports.DeleteDeploymentGroupInput || (exports.DeleteDeploymentGroupInput = {}));
var DeleteDeploymentGroupOutput;
(function (DeleteDeploymentGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDeploymentGroupOutput");
    }
    DeleteDeploymentGroupOutput.isa = isa;
})(DeleteDeploymentGroupOutput = exports.DeleteDeploymentGroupOutput || (exports.DeleteDeploymentGroupOutput = {}));
var DeleteGitHubAccountTokenInput;
(function (DeleteGitHubAccountTokenInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGitHubAccountTokenInput");
    }
    DeleteGitHubAccountTokenInput.isa = isa;
})(DeleteGitHubAccountTokenInput = exports.DeleteGitHubAccountTokenInput || (exports.DeleteGitHubAccountTokenInput = {}));
var DeleteGitHubAccountTokenOutput;
(function (DeleteGitHubAccountTokenOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGitHubAccountTokenOutput");
    }
    DeleteGitHubAccountTokenOutput.isa = isa;
})(DeleteGitHubAccountTokenOutput = exports.DeleteGitHubAccountTokenOutput || (exports.DeleteGitHubAccountTokenOutput = {}));
var DeploymentAlreadyCompletedException;
(function (DeploymentAlreadyCompletedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentAlreadyCompletedException");
    }
    DeploymentAlreadyCompletedException.isa = isa;
})(DeploymentAlreadyCompletedException = exports.DeploymentAlreadyCompletedException || (exports.DeploymentAlreadyCompletedException = {}));
var DeploymentConfigAlreadyExistsException;
(function (DeploymentConfigAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentConfigAlreadyExistsException");
    }
    DeploymentConfigAlreadyExistsException.isa = isa;
})(DeploymentConfigAlreadyExistsException = exports.DeploymentConfigAlreadyExistsException || (exports.DeploymentConfigAlreadyExistsException = {}));
var DeploymentConfigDoesNotExistException;
(function (DeploymentConfigDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentConfigDoesNotExistException");
    }
    DeploymentConfigDoesNotExistException.isa = isa;
})(DeploymentConfigDoesNotExistException = exports.DeploymentConfigDoesNotExistException || (exports.DeploymentConfigDoesNotExistException = {}));
var DeploymentConfigInUseException;
(function (DeploymentConfigInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentConfigInUseException");
    }
    DeploymentConfigInUseException.isa = isa;
})(DeploymentConfigInUseException = exports.DeploymentConfigInUseException || (exports.DeploymentConfigInUseException = {}));
var DeploymentConfigInfo;
(function (DeploymentConfigInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentConfigInfo");
    }
    DeploymentConfigInfo.isa = isa;
})(DeploymentConfigInfo = exports.DeploymentConfigInfo || (exports.DeploymentConfigInfo = {}));
var DeploymentConfigLimitExceededException;
(function (DeploymentConfigLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentConfigLimitExceededException");
    }
    DeploymentConfigLimitExceededException.isa = isa;
})(DeploymentConfigLimitExceededException = exports.DeploymentConfigLimitExceededException || (exports.DeploymentConfigLimitExceededException = {}));
var DeploymentConfigNameRequiredException;
(function (DeploymentConfigNameRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentConfigNameRequiredException");
    }
    DeploymentConfigNameRequiredException.isa = isa;
})(DeploymentConfigNameRequiredException = exports.DeploymentConfigNameRequiredException || (exports.DeploymentConfigNameRequiredException = {}));
var DeploymentCreator;
(function (DeploymentCreator) {
    DeploymentCreator["Autoscaling"] = "autoscaling";
    DeploymentCreator["CodeDeployRollback"] = "codeDeployRollback";
    DeploymentCreator["User"] = "user";
})(DeploymentCreator = exports.DeploymentCreator || (exports.DeploymentCreator = {}));
var DeploymentDoesNotExistException;
(function (DeploymentDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentDoesNotExistException");
    }
    DeploymentDoesNotExistException.isa = isa;
})(DeploymentDoesNotExistException = exports.DeploymentDoesNotExistException || (exports.DeploymentDoesNotExistException = {}));
var DeploymentGroupAlreadyExistsException;
(function (DeploymentGroupAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentGroupAlreadyExistsException");
    }
    DeploymentGroupAlreadyExistsException.isa = isa;
})(DeploymentGroupAlreadyExistsException = exports.DeploymentGroupAlreadyExistsException || (exports.DeploymentGroupAlreadyExistsException = {}));
var DeploymentGroupDoesNotExistException;
(function (DeploymentGroupDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentGroupDoesNotExistException");
    }
    DeploymentGroupDoesNotExistException.isa = isa;
})(DeploymentGroupDoesNotExistException = exports.DeploymentGroupDoesNotExistException || (exports.DeploymentGroupDoesNotExistException = {}));
var DeploymentGroupInfo;
(function (DeploymentGroupInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentGroupInfo");
    }
    DeploymentGroupInfo.isa = isa;
})(DeploymentGroupInfo = exports.DeploymentGroupInfo || (exports.DeploymentGroupInfo = {}));
var DeploymentGroupLimitExceededException;
(function (DeploymentGroupLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentGroupLimitExceededException");
    }
    DeploymentGroupLimitExceededException.isa = isa;
})(DeploymentGroupLimitExceededException = exports.DeploymentGroupLimitExceededException || (exports.DeploymentGroupLimitExceededException = {}));
var DeploymentGroupNameRequiredException;
(function (DeploymentGroupNameRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentGroupNameRequiredException");
    }
    DeploymentGroupNameRequiredException.isa = isa;
})(DeploymentGroupNameRequiredException = exports.DeploymentGroupNameRequiredException || (exports.DeploymentGroupNameRequiredException = {}));
var DeploymentIdRequiredException;
(function (DeploymentIdRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentIdRequiredException");
    }
    DeploymentIdRequiredException.isa = isa;
})(DeploymentIdRequiredException = exports.DeploymentIdRequiredException || (exports.DeploymentIdRequiredException = {}));
var DeploymentInfo;
(function (DeploymentInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentInfo");
    }
    DeploymentInfo.isa = isa;
})(DeploymentInfo = exports.DeploymentInfo || (exports.DeploymentInfo = {}));
var DeploymentIsNotInReadyStateException;
(function (DeploymentIsNotInReadyStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentIsNotInReadyStateException");
    }
    DeploymentIsNotInReadyStateException.isa = isa;
})(DeploymentIsNotInReadyStateException = exports.DeploymentIsNotInReadyStateException || (exports.DeploymentIsNotInReadyStateException = {}));
var DeploymentLimitExceededException;
(function (DeploymentLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentLimitExceededException");
    }
    DeploymentLimitExceededException.isa = isa;
})(DeploymentLimitExceededException = exports.DeploymentLimitExceededException || (exports.DeploymentLimitExceededException = {}));
var DeploymentNotStartedException;
(function (DeploymentNotStartedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentNotStartedException");
    }
    DeploymentNotStartedException.isa = isa;
})(DeploymentNotStartedException = exports.DeploymentNotStartedException || (exports.DeploymentNotStartedException = {}));
var DeploymentOption;
(function (DeploymentOption) {
    DeploymentOption["WITHOUT_TRAFFIC_CONTROL"] = "WITHOUT_TRAFFIC_CONTROL";
    DeploymentOption["WITH_TRAFFIC_CONTROL"] = "WITH_TRAFFIC_CONTROL";
})(DeploymentOption = exports.DeploymentOption || (exports.DeploymentOption = {}));
var DeploymentOverview;
(function (DeploymentOverview) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentOverview");
    }
    DeploymentOverview.isa = isa;
})(DeploymentOverview = exports.DeploymentOverview || (exports.DeploymentOverview = {}));
var DeploymentReadyAction;
(function (DeploymentReadyAction) {
    DeploymentReadyAction["CONTINUE_DEPLOYMENT"] = "CONTINUE_DEPLOYMENT";
    DeploymentReadyAction["STOP_DEPLOYMENT"] = "STOP_DEPLOYMENT";
})(DeploymentReadyAction = exports.DeploymentReadyAction || (exports.DeploymentReadyAction = {}));
var DeploymentReadyOption;
(function (DeploymentReadyOption) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentReadyOption");
    }
    DeploymentReadyOption.isa = isa;
})(DeploymentReadyOption = exports.DeploymentReadyOption || (exports.DeploymentReadyOption = {}));
var DeploymentStatus;
(function (DeploymentStatus) {
    DeploymentStatus["CREATED"] = "Created";
    DeploymentStatus["FAILED"] = "Failed";
    DeploymentStatus["IN_PROGRESS"] = "InProgress";
    DeploymentStatus["QUEUED"] = "Queued";
    DeploymentStatus["READY"] = "Ready";
    DeploymentStatus["STOPPED"] = "Stopped";
    DeploymentStatus["SUCCEEDED"] = "Succeeded";
})(DeploymentStatus = exports.DeploymentStatus || (exports.DeploymentStatus = {}));
var DeploymentStyle;
(function (DeploymentStyle) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentStyle");
    }
    DeploymentStyle.isa = isa;
})(DeploymentStyle = exports.DeploymentStyle || (exports.DeploymentStyle = {}));
var DeploymentTarget;
(function (DeploymentTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentTarget");
    }
    DeploymentTarget.isa = isa;
})(DeploymentTarget = exports.DeploymentTarget || (exports.DeploymentTarget = {}));
var DeploymentTargetDoesNotExistException;
(function (DeploymentTargetDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentTargetDoesNotExistException");
    }
    DeploymentTargetDoesNotExistException.isa = isa;
})(DeploymentTargetDoesNotExistException = exports.DeploymentTargetDoesNotExistException || (exports.DeploymentTargetDoesNotExistException = {}));
var DeploymentTargetIdRequiredException;
(function (DeploymentTargetIdRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentTargetIdRequiredException");
    }
    DeploymentTargetIdRequiredException.isa = isa;
})(DeploymentTargetIdRequiredException = exports.DeploymentTargetIdRequiredException || (exports.DeploymentTargetIdRequiredException = {}));
var DeploymentTargetListSizeExceededException;
(function (DeploymentTargetListSizeExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentTargetListSizeExceededException");
    }
    DeploymentTargetListSizeExceededException.isa = isa;
})(DeploymentTargetListSizeExceededException = exports.DeploymentTargetListSizeExceededException || (exports.DeploymentTargetListSizeExceededException = {}));
var DeploymentTargetType;
(function (DeploymentTargetType) {
    DeploymentTargetType["ECS_TARGET"] = "ECSTarget";
    DeploymentTargetType["INSTANCE_TARGET"] = "InstanceTarget";
    DeploymentTargetType["LAMBDA_TARGET"] = "LambdaTarget";
})(DeploymentTargetType = exports.DeploymentTargetType || (exports.DeploymentTargetType = {}));
var DeploymentType;
(function (DeploymentType) {
    DeploymentType["BLUE_GREEN"] = "BLUE_GREEN";
    DeploymentType["IN_PLACE"] = "IN_PLACE";
})(DeploymentType = exports.DeploymentType || (exports.DeploymentType = {}));
var DeploymentWaitType;
(function (DeploymentWaitType) {
    DeploymentWaitType["READY_WAIT"] = "READY_WAIT";
    DeploymentWaitType["TERMINATION_WAIT"] = "TERMINATION_WAIT";
})(DeploymentWaitType = exports.DeploymentWaitType || (exports.DeploymentWaitType = {}));
var DeregisterOnPremisesInstanceInput;
(function (DeregisterOnPremisesInstanceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterOnPremisesInstanceInput");
    }
    DeregisterOnPremisesInstanceInput.isa = isa;
})(DeregisterOnPremisesInstanceInput = exports.DeregisterOnPremisesInstanceInput || (exports.DeregisterOnPremisesInstanceInput = {}));
var DescriptionTooLongException;
(function (DescriptionTooLongException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescriptionTooLongException");
    }
    DescriptionTooLongException.isa = isa;
})(DescriptionTooLongException = exports.DescriptionTooLongException || (exports.DescriptionTooLongException = {}));
var Diagnostics;
(function (Diagnostics) {
    function isa(o) {
        return smithy_client_1.isa(o, "Diagnostics");
    }
    Diagnostics.isa = isa;
})(Diagnostics = exports.Diagnostics || (exports.Diagnostics = {}));
var EC2TagFilter;
(function (EC2TagFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "EC2TagFilter");
    }
    EC2TagFilter.isa = isa;
})(EC2TagFilter = exports.EC2TagFilter || (exports.EC2TagFilter = {}));
var EC2TagFilterType;
(function (EC2TagFilterType) {
    EC2TagFilterType["KEY_AND_VALUE"] = "KEY_AND_VALUE";
    EC2TagFilterType["KEY_ONLY"] = "KEY_ONLY";
    EC2TagFilterType["VALUE_ONLY"] = "VALUE_ONLY";
})(EC2TagFilterType = exports.EC2TagFilterType || (exports.EC2TagFilterType = {}));
var EC2TagSet;
(function (EC2TagSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "EC2TagSet");
    }
    EC2TagSet.isa = isa;
})(EC2TagSet = exports.EC2TagSet || (exports.EC2TagSet = {}));
var ECSService;
(function (ECSService) {
    function isa(o) {
        return smithy_client_1.isa(o, "ECSService");
    }
    ECSService.isa = isa;
})(ECSService = exports.ECSService || (exports.ECSService = {}));
var ECSServiceMappingLimitExceededException;
(function (ECSServiceMappingLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ECSServiceMappingLimitExceededException");
    }
    ECSServiceMappingLimitExceededException.isa = isa;
})(ECSServiceMappingLimitExceededException = exports.ECSServiceMappingLimitExceededException || (exports.ECSServiceMappingLimitExceededException = {}));
var ECSTarget;
(function (ECSTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "ECSTarget");
    }
    ECSTarget.isa = isa;
})(ECSTarget = exports.ECSTarget || (exports.ECSTarget = {}));
var ECSTaskSet;
(function (ECSTaskSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "ECSTaskSet");
    }
    ECSTaskSet.isa = isa;
})(ECSTaskSet = exports.ECSTaskSet || (exports.ECSTaskSet = {}));
var ELBInfo;
(function (ELBInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "ELBInfo");
    }
    ELBInfo.isa = isa;
})(ELBInfo = exports.ELBInfo || (exports.ELBInfo = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["AGENT_ISSUE"] = "AGENT_ISSUE";
    ErrorCode["ALARM_ACTIVE"] = "ALARM_ACTIVE";
    ErrorCode["APPLICATION_MISSING"] = "APPLICATION_MISSING";
    ErrorCode["AUTOSCALING_VALIDATION_ERROR"] = "AUTOSCALING_VALIDATION_ERROR";
    ErrorCode["AUTO_SCALING_CONFIGURATION"] = "AUTO_SCALING_CONFIGURATION";
    ErrorCode["AUTO_SCALING_IAM_ROLE_PERMISSIONS"] = "AUTO_SCALING_IAM_ROLE_PERMISSIONS";
    ErrorCode["CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND"] = "CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND";
    ErrorCode["CUSTOMER_APPLICATION_UNHEALTHY"] = "CUSTOMER_APPLICATION_UNHEALTHY";
    ErrorCode["DEPLOYMENT_GROUP_MISSING"] = "DEPLOYMENT_GROUP_MISSING";
    ErrorCode["ECS_UPDATE_ERROR"] = "ECS_UPDATE_ERROR";
    ErrorCode["ELASTIC_LOAD_BALANCING_INVALID"] = "ELASTIC_LOAD_BALANCING_INVALID";
    ErrorCode["ELB_INVALID_INSTANCE"] = "ELB_INVALID_INSTANCE";
    ErrorCode["HEALTH_CONSTRAINTS"] = "HEALTH_CONSTRAINTS";
    ErrorCode["HEALTH_CONSTRAINTS_INVALID"] = "HEALTH_CONSTRAINTS_INVALID";
    ErrorCode["HOOK_EXECUTION_FAILURE"] = "HOOK_EXECUTION_FAILURE";
    ErrorCode["IAM_ROLE_MISSING"] = "IAM_ROLE_MISSING";
    ErrorCode["IAM_ROLE_PERMISSIONS"] = "IAM_ROLE_PERMISSIONS";
    ErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ErrorCode["INVALID_ECS_SERVICE"] = "INVALID_ECS_SERVICE";
    ErrorCode["INVALID_LAMBDA_CONFIGURATION"] = "INVALID_LAMBDA_CONFIGURATION";
    ErrorCode["INVALID_LAMBDA_FUNCTION"] = "INVALID_LAMBDA_FUNCTION";
    ErrorCode["INVALID_REVISION"] = "INVALID_REVISION";
    ErrorCode["MANUAL_STOP"] = "MANUAL_STOP";
    ErrorCode["MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION"] = "MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION";
    ErrorCode["MISSING_ELB_INFORMATION"] = "MISSING_ELB_INFORMATION";
    ErrorCode["MISSING_GITHUB_TOKEN"] = "MISSING_GITHUB_TOKEN";
    ErrorCode["NO_EC2_SUBSCRIPTION"] = "NO_EC2_SUBSCRIPTION";
    ErrorCode["NO_INSTANCES"] = "NO_INSTANCES";
    ErrorCode["OVER_MAX_INSTANCES"] = "OVER_MAX_INSTANCES";
    ErrorCode["RESOURCE_LIMIT_EXCEEDED"] = "RESOURCE_LIMIT_EXCEEDED";
    ErrorCode["REVISION_MISSING"] = "REVISION_MISSING";
    ErrorCode["THROTTLED"] = "THROTTLED";
    ErrorCode["TIMEOUT"] = "TIMEOUT";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var ErrorInformation;
(function (ErrorInformation) {
    function isa(o) {
        return smithy_client_1.isa(o, "ErrorInformation");
    }
    ErrorInformation.isa = isa;
})(ErrorInformation = exports.ErrorInformation || (exports.ErrorInformation = {}));
var FileExistsBehavior;
(function (FileExistsBehavior) {
    FileExistsBehavior["DISALLOW"] = "DISALLOW";
    FileExistsBehavior["OVERWRITE"] = "OVERWRITE";
    FileExistsBehavior["RETAIN"] = "RETAIN";
})(FileExistsBehavior = exports.FileExistsBehavior || (exports.FileExistsBehavior = {}));
var GenericRevisionInfo;
(function (GenericRevisionInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenericRevisionInfo");
    }
    GenericRevisionInfo.isa = isa;
})(GenericRevisionInfo = exports.GenericRevisionInfo || (exports.GenericRevisionInfo = {}));
var GetApplicationInput;
(function (GetApplicationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetApplicationInput");
    }
    GetApplicationInput.isa = isa;
})(GetApplicationInput = exports.GetApplicationInput || (exports.GetApplicationInput = {}));
var GetApplicationOutput;
(function (GetApplicationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetApplicationOutput");
    }
    GetApplicationOutput.isa = isa;
})(GetApplicationOutput = exports.GetApplicationOutput || (exports.GetApplicationOutput = {}));
var GetApplicationRevisionInput;
(function (GetApplicationRevisionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetApplicationRevisionInput");
    }
    GetApplicationRevisionInput.isa = isa;
})(GetApplicationRevisionInput = exports.GetApplicationRevisionInput || (exports.GetApplicationRevisionInput = {}));
var GetApplicationRevisionOutput;
(function (GetApplicationRevisionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetApplicationRevisionOutput");
    }
    GetApplicationRevisionOutput.isa = isa;
})(GetApplicationRevisionOutput = exports.GetApplicationRevisionOutput || (exports.GetApplicationRevisionOutput = {}));
var GetDeploymentConfigInput;
(function (GetDeploymentConfigInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeploymentConfigInput");
    }
    GetDeploymentConfigInput.isa = isa;
})(GetDeploymentConfigInput = exports.GetDeploymentConfigInput || (exports.GetDeploymentConfigInput = {}));
var GetDeploymentConfigOutput;
(function (GetDeploymentConfigOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeploymentConfigOutput");
    }
    GetDeploymentConfigOutput.isa = isa;
})(GetDeploymentConfigOutput = exports.GetDeploymentConfigOutput || (exports.GetDeploymentConfigOutput = {}));
var GetDeploymentGroupInput;
(function (GetDeploymentGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeploymentGroupInput");
    }
    GetDeploymentGroupInput.isa = isa;
})(GetDeploymentGroupInput = exports.GetDeploymentGroupInput || (exports.GetDeploymentGroupInput = {}));
var GetDeploymentGroupOutput;
(function (GetDeploymentGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeploymentGroupOutput");
    }
    GetDeploymentGroupOutput.isa = isa;
})(GetDeploymentGroupOutput = exports.GetDeploymentGroupOutput || (exports.GetDeploymentGroupOutput = {}));
var GetDeploymentInput;
(function (GetDeploymentInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeploymentInput");
    }
    GetDeploymentInput.isa = isa;
})(GetDeploymentInput = exports.GetDeploymentInput || (exports.GetDeploymentInput = {}));
var GetDeploymentInstanceInput;
(function (GetDeploymentInstanceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeploymentInstanceInput");
    }
    GetDeploymentInstanceInput.isa = isa;
})(GetDeploymentInstanceInput = exports.GetDeploymentInstanceInput || (exports.GetDeploymentInstanceInput = {}));
var GetDeploymentInstanceOutput;
(function (GetDeploymentInstanceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeploymentInstanceOutput");
    }
    GetDeploymentInstanceOutput.isa = isa;
})(GetDeploymentInstanceOutput = exports.GetDeploymentInstanceOutput || (exports.GetDeploymentInstanceOutput = {}));
var GetDeploymentOutput;
(function (GetDeploymentOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeploymentOutput");
    }
    GetDeploymentOutput.isa = isa;
})(GetDeploymentOutput = exports.GetDeploymentOutput || (exports.GetDeploymentOutput = {}));
var GetDeploymentTargetInput;
(function (GetDeploymentTargetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeploymentTargetInput");
    }
    GetDeploymentTargetInput.isa = isa;
})(GetDeploymentTargetInput = exports.GetDeploymentTargetInput || (exports.GetDeploymentTargetInput = {}));
var GetDeploymentTargetOutput;
(function (GetDeploymentTargetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeploymentTargetOutput");
    }
    GetDeploymentTargetOutput.isa = isa;
})(GetDeploymentTargetOutput = exports.GetDeploymentTargetOutput || (exports.GetDeploymentTargetOutput = {}));
var GetOnPremisesInstanceInput;
(function (GetOnPremisesInstanceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOnPremisesInstanceInput");
    }
    GetOnPremisesInstanceInput.isa = isa;
})(GetOnPremisesInstanceInput = exports.GetOnPremisesInstanceInput || (exports.GetOnPremisesInstanceInput = {}));
var GetOnPremisesInstanceOutput;
(function (GetOnPremisesInstanceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOnPremisesInstanceOutput");
    }
    GetOnPremisesInstanceOutput.isa = isa;
})(GetOnPremisesInstanceOutput = exports.GetOnPremisesInstanceOutput || (exports.GetOnPremisesInstanceOutput = {}));
var GitHubAccountTokenDoesNotExistException;
(function (GitHubAccountTokenDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "GitHubAccountTokenDoesNotExistException");
    }
    GitHubAccountTokenDoesNotExistException.isa = isa;
})(GitHubAccountTokenDoesNotExistException = exports.GitHubAccountTokenDoesNotExistException || (exports.GitHubAccountTokenDoesNotExistException = {}));
var GitHubAccountTokenNameRequiredException;
(function (GitHubAccountTokenNameRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "GitHubAccountTokenNameRequiredException");
    }
    GitHubAccountTokenNameRequiredException.isa = isa;
})(GitHubAccountTokenNameRequiredException = exports.GitHubAccountTokenNameRequiredException || (exports.GitHubAccountTokenNameRequiredException = {}));
var GitHubLocation;
(function (GitHubLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "GitHubLocation");
    }
    GitHubLocation.isa = isa;
})(GitHubLocation = exports.GitHubLocation || (exports.GitHubLocation = {}));
var GreenFleetProvisioningAction;
(function (GreenFleetProvisioningAction) {
    GreenFleetProvisioningAction["COPY_AUTO_SCALING_GROUP"] = "COPY_AUTO_SCALING_GROUP";
    GreenFleetProvisioningAction["DISCOVER_EXISTING"] = "DISCOVER_EXISTING";
})(GreenFleetProvisioningAction = exports.GreenFleetProvisioningAction || (exports.GreenFleetProvisioningAction = {}));
var GreenFleetProvisioningOption;
(function (GreenFleetProvisioningOption) {
    function isa(o) {
        return smithy_client_1.isa(o, "GreenFleetProvisioningOption");
    }
    GreenFleetProvisioningOption.isa = isa;
})(GreenFleetProvisioningOption = exports.GreenFleetProvisioningOption || (exports.GreenFleetProvisioningOption = {}));
var IamArnRequiredException;
(function (IamArnRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IamArnRequiredException");
    }
    IamArnRequiredException.isa = isa;
})(IamArnRequiredException = exports.IamArnRequiredException || (exports.IamArnRequiredException = {}));
var IamSessionArnAlreadyRegisteredException;
(function (IamSessionArnAlreadyRegisteredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IamSessionArnAlreadyRegisteredException");
    }
    IamSessionArnAlreadyRegisteredException.isa = isa;
})(IamSessionArnAlreadyRegisteredException = exports.IamSessionArnAlreadyRegisteredException || (exports.IamSessionArnAlreadyRegisteredException = {}));
var IamUserArnAlreadyRegisteredException;
(function (IamUserArnAlreadyRegisteredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IamUserArnAlreadyRegisteredException");
    }
    IamUserArnAlreadyRegisteredException.isa = isa;
})(IamUserArnAlreadyRegisteredException = exports.IamUserArnAlreadyRegisteredException || (exports.IamUserArnAlreadyRegisteredException = {}));
var IamUserArnRequiredException;
(function (IamUserArnRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IamUserArnRequiredException");
    }
    IamUserArnRequiredException.isa = isa;
})(IamUserArnRequiredException = exports.IamUserArnRequiredException || (exports.IamUserArnRequiredException = {}));
var InstanceAction;
(function (InstanceAction) {
    InstanceAction["KEEP_ALIVE"] = "KEEP_ALIVE";
    InstanceAction["TERMINATE"] = "TERMINATE";
})(InstanceAction = exports.InstanceAction || (exports.InstanceAction = {}));
var InstanceDoesNotExistException;
(function (InstanceDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceDoesNotExistException");
    }
    InstanceDoesNotExistException.isa = isa;
})(InstanceDoesNotExistException = exports.InstanceDoesNotExistException || (exports.InstanceDoesNotExistException = {}));
var InstanceIdRequiredException;
(function (InstanceIdRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceIdRequiredException");
    }
    InstanceIdRequiredException.isa = isa;
})(InstanceIdRequiredException = exports.InstanceIdRequiredException || (exports.InstanceIdRequiredException = {}));
var InstanceInfo;
(function (InstanceInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceInfo");
    }
    InstanceInfo.isa = isa;
})(InstanceInfo = exports.InstanceInfo || (exports.InstanceInfo = {}));
var InstanceLimitExceededException;
(function (InstanceLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceLimitExceededException");
    }
    InstanceLimitExceededException.isa = isa;
})(InstanceLimitExceededException = exports.InstanceLimitExceededException || (exports.InstanceLimitExceededException = {}));
var InstanceNameAlreadyRegisteredException;
(function (InstanceNameAlreadyRegisteredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceNameAlreadyRegisteredException");
    }
    InstanceNameAlreadyRegisteredException.isa = isa;
})(InstanceNameAlreadyRegisteredException = exports.InstanceNameAlreadyRegisteredException || (exports.InstanceNameAlreadyRegisteredException = {}));
var InstanceNameRequiredException;
(function (InstanceNameRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceNameRequiredException");
    }
    InstanceNameRequiredException.isa = isa;
})(InstanceNameRequiredException = exports.InstanceNameRequiredException || (exports.InstanceNameRequiredException = {}));
var InstanceNotRegisteredException;
(function (InstanceNotRegisteredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceNotRegisteredException");
    }
    InstanceNotRegisteredException.isa = isa;
})(InstanceNotRegisteredException = exports.InstanceNotRegisteredException || (exports.InstanceNotRegisteredException = {}));
var InstanceStatus;
(function (InstanceStatus) {
    InstanceStatus["FAILED"] = "Failed";
    InstanceStatus["IN_PROGRESS"] = "InProgress";
    InstanceStatus["PENDING"] = "Pending";
    InstanceStatus["READY"] = "Ready";
    InstanceStatus["SKIPPED"] = "Skipped";
    InstanceStatus["SUCCEEDED"] = "Succeeded";
    InstanceStatus["UNKNOWN"] = "Unknown";
})(InstanceStatus = exports.InstanceStatus || (exports.InstanceStatus = {}));
var InstanceSummary;
(function (InstanceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceSummary");
    }
    InstanceSummary.isa = isa;
})(InstanceSummary = exports.InstanceSummary || (exports.InstanceSummary = {}));
var InstanceTarget;
(function (InstanceTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceTarget");
    }
    InstanceTarget.isa = isa;
})(InstanceTarget = exports.InstanceTarget || (exports.InstanceTarget = {}));
var _InstanceType;
(function (_InstanceType) {
    _InstanceType["BLUE"] = "Blue";
    _InstanceType["GREEN"] = "Green";
})(_InstanceType = exports._InstanceType || (exports._InstanceType = {}));
var InvalidAlarmConfigException;
(function (InvalidAlarmConfigException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAlarmConfigException");
    }
    InvalidAlarmConfigException.isa = isa;
})(InvalidAlarmConfigException = exports.InvalidAlarmConfigException || (exports.InvalidAlarmConfigException = {}));
var InvalidApplicationNameException;
(function (InvalidApplicationNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidApplicationNameException");
    }
    InvalidApplicationNameException.isa = isa;
})(InvalidApplicationNameException = exports.InvalidApplicationNameException || (exports.InvalidApplicationNameException = {}));
var InvalidArnException;
(function (InvalidArnException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidArnException");
    }
    InvalidArnException.isa = isa;
})(InvalidArnException = exports.InvalidArnException || (exports.InvalidArnException = {}));
var InvalidAutoRollbackConfigException;
(function (InvalidAutoRollbackConfigException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAutoRollbackConfigException");
    }
    InvalidAutoRollbackConfigException.isa = isa;
})(InvalidAutoRollbackConfigException = exports.InvalidAutoRollbackConfigException || (exports.InvalidAutoRollbackConfigException = {}));
var InvalidAutoScalingGroupException;
(function (InvalidAutoScalingGroupException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAutoScalingGroupException");
    }
    InvalidAutoScalingGroupException.isa = isa;
})(InvalidAutoScalingGroupException = exports.InvalidAutoScalingGroupException || (exports.InvalidAutoScalingGroupException = {}));
var InvalidBlueGreenDeploymentConfigurationException;
(function (InvalidBlueGreenDeploymentConfigurationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidBlueGreenDeploymentConfigurationException");
    }
    InvalidBlueGreenDeploymentConfigurationException.isa = isa;
})(InvalidBlueGreenDeploymentConfigurationException = exports.InvalidBlueGreenDeploymentConfigurationException || (exports.InvalidBlueGreenDeploymentConfigurationException = {}));
var InvalidBucketNameFilterException;
(function (InvalidBucketNameFilterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidBucketNameFilterException");
    }
    InvalidBucketNameFilterException.isa = isa;
})(InvalidBucketNameFilterException = exports.InvalidBucketNameFilterException || (exports.InvalidBucketNameFilterException = {}));
var InvalidComputePlatformException;
(function (InvalidComputePlatformException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidComputePlatformException");
    }
    InvalidComputePlatformException.isa = isa;
})(InvalidComputePlatformException = exports.InvalidComputePlatformException || (exports.InvalidComputePlatformException = {}));
var InvalidDeployedStateFilterException;
(function (InvalidDeployedStateFilterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeployedStateFilterException");
    }
    InvalidDeployedStateFilterException.isa = isa;
})(InvalidDeployedStateFilterException = exports.InvalidDeployedStateFilterException || (exports.InvalidDeployedStateFilterException = {}));
var InvalidDeploymentConfigNameException;
(function (InvalidDeploymentConfigNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeploymentConfigNameException");
    }
    InvalidDeploymentConfigNameException.isa = isa;
})(InvalidDeploymentConfigNameException = exports.InvalidDeploymentConfigNameException || (exports.InvalidDeploymentConfigNameException = {}));
var InvalidDeploymentGroupNameException;
(function (InvalidDeploymentGroupNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeploymentGroupNameException");
    }
    InvalidDeploymentGroupNameException.isa = isa;
})(InvalidDeploymentGroupNameException = exports.InvalidDeploymentGroupNameException || (exports.InvalidDeploymentGroupNameException = {}));
var InvalidDeploymentIdException;
(function (InvalidDeploymentIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeploymentIdException");
    }
    InvalidDeploymentIdException.isa = isa;
})(InvalidDeploymentIdException = exports.InvalidDeploymentIdException || (exports.InvalidDeploymentIdException = {}));
var InvalidDeploymentInstanceTypeException;
(function (InvalidDeploymentInstanceTypeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeploymentInstanceTypeException");
    }
    InvalidDeploymentInstanceTypeException.isa = isa;
})(InvalidDeploymentInstanceTypeException = exports.InvalidDeploymentInstanceTypeException || (exports.InvalidDeploymentInstanceTypeException = {}));
var InvalidDeploymentStatusException;
(function (InvalidDeploymentStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeploymentStatusException");
    }
    InvalidDeploymentStatusException.isa = isa;
})(InvalidDeploymentStatusException = exports.InvalidDeploymentStatusException || (exports.InvalidDeploymentStatusException = {}));
var InvalidDeploymentStyleException;
(function (InvalidDeploymentStyleException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeploymentStyleException");
    }
    InvalidDeploymentStyleException.isa = isa;
})(InvalidDeploymentStyleException = exports.InvalidDeploymentStyleException || (exports.InvalidDeploymentStyleException = {}));
var InvalidDeploymentTargetIdException;
(function (InvalidDeploymentTargetIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeploymentTargetIdException");
    }
    InvalidDeploymentTargetIdException.isa = isa;
})(InvalidDeploymentTargetIdException = exports.InvalidDeploymentTargetIdException || (exports.InvalidDeploymentTargetIdException = {}));
var InvalidDeploymentWaitTypeException;
(function (InvalidDeploymentWaitTypeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeploymentWaitTypeException");
    }
    InvalidDeploymentWaitTypeException.isa = isa;
})(InvalidDeploymentWaitTypeException = exports.InvalidDeploymentWaitTypeException || (exports.InvalidDeploymentWaitTypeException = {}));
var InvalidEC2TagCombinationException;
(function (InvalidEC2TagCombinationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidEC2TagCombinationException");
    }
    InvalidEC2TagCombinationException.isa = isa;
})(InvalidEC2TagCombinationException = exports.InvalidEC2TagCombinationException || (exports.InvalidEC2TagCombinationException = {}));
var InvalidEC2TagException;
(function (InvalidEC2TagException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidEC2TagException");
    }
    InvalidEC2TagException.isa = isa;
})(InvalidEC2TagException = exports.InvalidEC2TagException || (exports.InvalidEC2TagException = {}));
var InvalidECSServiceException;
(function (InvalidECSServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidECSServiceException");
    }
    InvalidECSServiceException.isa = isa;
})(InvalidECSServiceException = exports.InvalidECSServiceException || (exports.InvalidECSServiceException = {}));
var InvalidFileExistsBehaviorException;
(function (InvalidFileExistsBehaviorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidFileExistsBehaviorException");
    }
    InvalidFileExistsBehaviorException.isa = isa;
})(InvalidFileExistsBehaviorException = exports.InvalidFileExistsBehaviorException || (exports.InvalidFileExistsBehaviorException = {}));
var InvalidGitHubAccountTokenException;
(function (InvalidGitHubAccountTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidGitHubAccountTokenException");
    }
    InvalidGitHubAccountTokenException.isa = isa;
})(InvalidGitHubAccountTokenException = exports.InvalidGitHubAccountTokenException || (exports.InvalidGitHubAccountTokenException = {}));
var InvalidGitHubAccountTokenNameException;
(function (InvalidGitHubAccountTokenNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidGitHubAccountTokenNameException");
    }
    InvalidGitHubAccountTokenNameException.isa = isa;
})(InvalidGitHubAccountTokenNameException = exports.InvalidGitHubAccountTokenNameException || (exports.InvalidGitHubAccountTokenNameException = {}));
var InvalidIamSessionArnException;
(function (InvalidIamSessionArnException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidIamSessionArnException");
    }
    InvalidIamSessionArnException.isa = isa;
})(InvalidIamSessionArnException = exports.InvalidIamSessionArnException || (exports.InvalidIamSessionArnException = {}));
var InvalidIamUserArnException;
(function (InvalidIamUserArnException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidIamUserArnException");
    }
    InvalidIamUserArnException.isa = isa;
})(InvalidIamUserArnException = exports.InvalidIamUserArnException || (exports.InvalidIamUserArnException = {}));
var InvalidIgnoreApplicationStopFailuresValueException;
(function (InvalidIgnoreApplicationStopFailuresValueException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidIgnoreApplicationStopFailuresValueException");
    }
    InvalidIgnoreApplicationStopFailuresValueException.isa = isa;
})(InvalidIgnoreApplicationStopFailuresValueException = exports.InvalidIgnoreApplicationStopFailuresValueException || (exports.InvalidIgnoreApplicationStopFailuresValueException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputException");
    }
    InvalidInputException.isa = isa;
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var InvalidInstanceNameException;
(function (InvalidInstanceNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInstanceNameException");
    }
    InvalidInstanceNameException.isa = isa;
})(InvalidInstanceNameException = exports.InvalidInstanceNameException || (exports.InvalidInstanceNameException = {}));
var InvalidInstanceStatusException;
(function (InvalidInstanceStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInstanceStatusException");
    }
    InvalidInstanceStatusException.isa = isa;
})(InvalidInstanceStatusException = exports.InvalidInstanceStatusException || (exports.InvalidInstanceStatusException = {}));
var InvalidInstanceTypeException;
(function (InvalidInstanceTypeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInstanceTypeException");
    }
    InvalidInstanceTypeException.isa = isa;
})(InvalidInstanceTypeException = exports.InvalidInstanceTypeException || (exports.InvalidInstanceTypeException = {}));
var InvalidKeyPrefixFilterException;
(function (InvalidKeyPrefixFilterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidKeyPrefixFilterException");
    }
    InvalidKeyPrefixFilterException.isa = isa;
})(InvalidKeyPrefixFilterException = exports.InvalidKeyPrefixFilterException || (exports.InvalidKeyPrefixFilterException = {}));
var InvalidLifecycleEventHookExecutionIdException;
(function (InvalidLifecycleEventHookExecutionIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidLifecycleEventHookExecutionIdException");
    }
    InvalidLifecycleEventHookExecutionIdException.isa = isa;
})(InvalidLifecycleEventHookExecutionIdException = exports.InvalidLifecycleEventHookExecutionIdException || (exports.InvalidLifecycleEventHookExecutionIdException = {}));
var InvalidLifecycleEventHookExecutionStatusException;
(function (InvalidLifecycleEventHookExecutionStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidLifecycleEventHookExecutionStatusException");
    }
    InvalidLifecycleEventHookExecutionStatusException.isa = isa;
})(InvalidLifecycleEventHookExecutionStatusException = exports.InvalidLifecycleEventHookExecutionStatusException || (exports.InvalidLifecycleEventHookExecutionStatusException = {}));
var InvalidLoadBalancerInfoException;
(function (InvalidLoadBalancerInfoException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidLoadBalancerInfoException");
    }
    InvalidLoadBalancerInfoException.isa = isa;
})(InvalidLoadBalancerInfoException = exports.InvalidLoadBalancerInfoException || (exports.InvalidLoadBalancerInfoException = {}));
var InvalidMinimumHealthyHostValueException;
(function (InvalidMinimumHealthyHostValueException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidMinimumHealthyHostValueException");
    }
    InvalidMinimumHealthyHostValueException.isa = isa;
})(InvalidMinimumHealthyHostValueException = exports.InvalidMinimumHealthyHostValueException || (exports.InvalidMinimumHealthyHostValueException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextTokenException");
    }
    InvalidNextTokenException.isa = isa;
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidOnPremisesTagCombinationException;
(function (InvalidOnPremisesTagCombinationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOnPremisesTagCombinationException");
    }
    InvalidOnPremisesTagCombinationException.isa = isa;
})(InvalidOnPremisesTagCombinationException = exports.InvalidOnPremisesTagCombinationException || (exports.InvalidOnPremisesTagCombinationException = {}));
var InvalidOperationException;
(function (InvalidOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOperationException");
    }
    InvalidOperationException.isa = isa;
})(InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {}));
var InvalidRegistrationStatusException;
(function (InvalidRegistrationStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRegistrationStatusException");
    }
    InvalidRegistrationStatusException.isa = isa;
})(InvalidRegistrationStatusException = exports.InvalidRegistrationStatusException || (exports.InvalidRegistrationStatusException = {}));
var InvalidRevisionException;
(function (InvalidRevisionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRevisionException");
    }
    InvalidRevisionException.isa = isa;
})(InvalidRevisionException = exports.InvalidRevisionException || (exports.InvalidRevisionException = {}));
var InvalidRoleException;
(function (InvalidRoleException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRoleException");
    }
    InvalidRoleException.isa = isa;
})(InvalidRoleException = exports.InvalidRoleException || (exports.InvalidRoleException = {}));
var InvalidSortByException;
(function (InvalidSortByException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSortByException");
    }
    InvalidSortByException.isa = isa;
})(InvalidSortByException = exports.InvalidSortByException || (exports.InvalidSortByException = {}));
var InvalidSortOrderException;
(function (InvalidSortOrderException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSortOrderException");
    }
    InvalidSortOrderException.isa = isa;
})(InvalidSortOrderException = exports.InvalidSortOrderException || (exports.InvalidSortOrderException = {}));
var InvalidTagException;
(function (InvalidTagException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTagException");
    }
    InvalidTagException.isa = isa;
})(InvalidTagException = exports.InvalidTagException || (exports.InvalidTagException = {}));
var InvalidTagFilterException;
(function (InvalidTagFilterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTagFilterException");
    }
    InvalidTagFilterException.isa = isa;
})(InvalidTagFilterException = exports.InvalidTagFilterException || (exports.InvalidTagFilterException = {}));
var InvalidTagsToAddException;
(function (InvalidTagsToAddException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTagsToAddException");
    }
    InvalidTagsToAddException.isa = isa;
})(InvalidTagsToAddException = exports.InvalidTagsToAddException || (exports.InvalidTagsToAddException = {}));
var InvalidTargetFilterNameException;
(function (InvalidTargetFilterNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTargetFilterNameException");
    }
    InvalidTargetFilterNameException.isa = isa;
})(InvalidTargetFilterNameException = exports.InvalidTargetFilterNameException || (exports.InvalidTargetFilterNameException = {}));
var InvalidTargetGroupPairException;
(function (InvalidTargetGroupPairException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTargetGroupPairException");
    }
    InvalidTargetGroupPairException.isa = isa;
})(InvalidTargetGroupPairException = exports.InvalidTargetGroupPairException || (exports.InvalidTargetGroupPairException = {}));
var InvalidTargetInstancesException;
(function (InvalidTargetInstancesException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTargetInstancesException");
    }
    InvalidTargetInstancesException.isa = isa;
})(InvalidTargetInstancesException = exports.InvalidTargetInstancesException || (exports.InvalidTargetInstancesException = {}));
var InvalidTimeRangeException;
(function (InvalidTimeRangeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTimeRangeException");
    }
    InvalidTimeRangeException.isa = isa;
})(InvalidTimeRangeException = exports.InvalidTimeRangeException || (exports.InvalidTimeRangeException = {}));
var InvalidTrafficRoutingConfigurationException;
(function (InvalidTrafficRoutingConfigurationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTrafficRoutingConfigurationException");
    }
    InvalidTrafficRoutingConfigurationException.isa = isa;
})(InvalidTrafficRoutingConfigurationException = exports.InvalidTrafficRoutingConfigurationException || (exports.InvalidTrafficRoutingConfigurationException = {}));
var InvalidTriggerConfigException;
(function (InvalidTriggerConfigException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTriggerConfigException");
    }
    InvalidTriggerConfigException.isa = isa;
})(InvalidTriggerConfigException = exports.InvalidTriggerConfigException || (exports.InvalidTriggerConfigException = {}));
var InvalidUpdateOutdatedInstancesOnlyValueException;
(function (InvalidUpdateOutdatedInstancesOnlyValueException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidUpdateOutdatedInstancesOnlyValueException");
    }
    InvalidUpdateOutdatedInstancesOnlyValueException.isa = isa;
})(InvalidUpdateOutdatedInstancesOnlyValueException = exports.InvalidUpdateOutdatedInstancesOnlyValueException || (exports.InvalidUpdateOutdatedInstancesOnlyValueException = {}));
var LambdaFunctionInfo;
(function (LambdaFunctionInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "LambdaFunctionInfo");
    }
    LambdaFunctionInfo.isa = isa;
})(LambdaFunctionInfo = exports.LambdaFunctionInfo || (exports.LambdaFunctionInfo = {}));
var LambdaTarget;
(function (LambdaTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "LambdaTarget");
    }
    LambdaTarget.isa = isa;
})(LambdaTarget = exports.LambdaTarget || (exports.LambdaTarget = {}));
var LastDeploymentInfo;
(function (LastDeploymentInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "LastDeploymentInfo");
    }
    LastDeploymentInfo.isa = isa;
})(LastDeploymentInfo = exports.LastDeploymentInfo || (exports.LastDeploymentInfo = {}));
var LifecycleErrorCode;
(function (LifecycleErrorCode) {
    LifecycleErrorCode["SCRIPT_FAILED"] = "ScriptFailed";
    LifecycleErrorCode["SCRIPT_MISSING"] = "ScriptMissing";
    LifecycleErrorCode["SCRIPT_NOT_EXECUTABLE"] = "ScriptNotExecutable";
    LifecycleErrorCode["SCRIPT_TIMED_OUT"] = "ScriptTimedOut";
    LifecycleErrorCode["SUCCESS"] = "Success";
    LifecycleErrorCode["UNKNOWN_ERROR"] = "UnknownError";
})(LifecycleErrorCode = exports.LifecycleErrorCode || (exports.LifecycleErrorCode = {}));
var LifecycleEvent;
(function (LifecycleEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "LifecycleEvent");
    }
    LifecycleEvent.isa = isa;
})(LifecycleEvent = exports.LifecycleEvent || (exports.LifecycleEvent = {}));
var LifecycleEventAlreadyCompletedException;
(function (LifecycleEventAlreadyCompletedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LifecycleEventAlreadyCompletedException");
    }
    LifecycleEventAlreadyCompletedException.isa = isa;
})(LifecycleEventAlreadyCompletedException = exports.LifecycleEventAlreadyCompletedException || (exports.LifecycleEventAlreadyCompletedException = {}));
var LifecycleEventStatus;
(function (LifecycleEventStatus) {
    LifecycleEventStatus["FAILED"] = "Failed";
    LifecycleEventStatus["IN_PROGRESS"] = "InProgress";
    LifecycleEventStatus["PENDING"] = "Pending";
    LifecycleEventStatus["SKIPPED"] = "Skipped";
    LifecycleEventStatus["SUCCEEDED"] = "Succeeded";
    LifecycleEventStatus["UNKNOWN"] = "Unknown";
})(LifecycleEventStatus = exports.LifecycleEventStatus || (exports.LifecycleEventStatus = {}));
var LifecycleHookLimitExceededException;
(function (LifecycleHookLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LifecycleHookLimitExceededException");
    }
    LifecycleHookLimitExceededException.isa = isa;
})(LifecycleHookLimitExceededException = exports.LifecycleHookLimitExceededException || (exports.LifecycleHookLimitExceededException = {}));
var ListApplicationRevisionsInput;
(function (ListApplicationRevisionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListApplicationRevisionsInput");
    }
    ListApplicationRevisionsInput.isa = isa;
})(ListApplicationRevisionsInput = exports.ListApplicationRevisionsInput || (exports.ListApplicationRevisionsInput = {}));
var ListApplicationRevisionsOutput;
(function (ListApplicationRevisionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListApplicationRevisionsOutput");
    }
    ListApplicationRevisionsOutput.isa = isa;
})(ListApplicationRevisionsOutput = exports.ListApplicationRevisionsOutput || (exports.ListApplicationRevisionsOutput = {}));
var ListApplicationsInput;
(function (ListApplicationsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListApplicationsInput");
    }
    ListApplicationsInput.isa = isa;
})(ListApplicationsInput = exports.ListApplicationsInput || (exports.ListApplicationsInput = {}));
var ListApplicationsOutput;
(function (ListApplicationsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListApplicationsOutput");
    }
    ListApplicationsOutput.isa = isa;
})(ListApplicationsOutput = exports.ListApplicationsOutput || (exports.ListApplicationsOutput = {}));
var ListDeploymentConfigsInput;
(function (ListDeploymentConfigsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeploymentConfigsInput");
    }
    ListDeploymentConfigsInput.isa = isa;
})(ListDeploymentConfigsInput = exports.ListDeploymentConfigsInput || (exports.ListDeploymentConfigsInput = {}));
var ListDeploymentConfigsOutput;
(function (ListDeploymentConfigsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeploymentConfigsOutput");
    }
    ListDeploymentConfigsOutput.isa = isa;
})(ListDeploymentConfigsOutput = exports.ListDeploymentConfigsOutput || (exports.ListDeploymentConfigsOutput = {}));
var ListDeploymentGroupsInput;
(function (ListDeploymentGroupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeploymentGroupsInput");
    }
    ListDeploymentGroupsInput.isa = isa;
})(ListDeploymentGroupsInput = exports.ListDeploymentGroupsInput || (exports.ListDeploymentGroupsInput = {}));
var ListDeploymentGroupsOutput;
(function (ListDeploymentGroupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeploymentGroupsOutput");
    }
    ListDeploymentGroupsOutput.isa = isa;
})(ListDeploymentGroupsOutput = exports.ListDeploymentGroupsOutput || (exports.ListDeploymentGroupsOutput = {}));
var ListDeploymentInstancesInput;
(function (ListDeploymentInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeploymentInstancesInput");
    }
    ListDeploymentInstancesInput.isa = isa;
})(ListDeploymentInstancesInput = exports.ListDeploymentInstancesInput || (exports.ListDeploymentInstancesInput = {}));
var ListDeploymentInstancesOutput;
(function (ListDeploymentInstancesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeploymentInstancesOutput");
    }
    ListDeploymentInstancesOutput.isa = isa;
})(ListDeploymentInstancesOutput = exports.ListDeploymentInstancesOutput || (exports.ListDeploymentInstancesOutput = {}));
var ListDeploymentTargetsInput;
(function (ListDeploymentTargetsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeploymentTargetsInput");
    }
    ListDeploymentTargetsInput.isa = isa;
})(ListDeploymentTargetsInput = exports.ListDeploymentTargetsInput || (exports.ListDeploymentTargetsInput = {}));
var ListDeploymentTargetsOutput;
(function (ListDeploymentTargetsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeploymentTargetsOutput");
    }
    ListDeploymentTargetsOutput.isa = isa;
})(ListDeploymentTargetsOutput = exports.ListDeploymentTargetsOutput || (exports.ListDeploymentTargetsOutput = {}));
var ListDeploymentsInput;
(function (ListDeploymentsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeploymentsInput");
    }
    ListDeploymentsInput.isa = isa;
})(ListDeploymentsInput = exports.ListDeploymentsInput || (exports.ListDeploymentsInput = {}));
var ListDeploymentsOutput;
(function (ListDeploymentsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeploymentsOutput");
    }
    ListDeploymentsOutput.isa = isa;
})(ListDeploymentsOutput = exports.ListDeploymentsOutput || (exports.ListDeploymentsOutput = {}));
var ListGitHubAccountTokenNamesInput;
(function (ListGitHubAccountTokenNamesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGitHubAccountTokenNamesInput");
    }
    ListGitHubAccountTokenNamesInput.isa = isa;
})(ListGitHubAccountTokenNamesInput = exports.ListGitHubAccountTokenNamesInput || (exports.ListGitHubAccountTokenNamesInput = {}));
var ListGitHubAccountTokenNamesOutput;
(function (ListGitHubAccountTokenNamesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGitHubAccountTokenNamesOutput");
    }
    ListGitHubAccountTokenNamesOutput.isa = isa;
})(ListGitHubAccountTokenNamesOutput = exports.ListGitHubAccountTokenNamesOutput || (exports.ListGitHubAccountTokenNamesOutput = {}));
var ListOnPremisesInstancesInput;
(function (ListOnPremisesInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOnPremisesInstancesInput");
    }
    ListOnPremisesInstancesInput.isa = isa;
})(ListOnPremisesInstancesInput = exports.ListOnPremisesInstancesInput || (exports.ListOnPremisesInstancesInput = {}));
var ListOnPremisesInstancesOutput;
(function (ListOnPremisesInstancesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOnPremisesInstancesOutput");
    }
    ListOnPremisesInstancesOutput.isa = isa;
})(ListOnPremisesInstancesOutput = exports.ListOnPremisesInstancesOutput || (exports.ListOnPremisesInstancesOutput = {}));
var ListStateFilterAction;
(function (ListStateFilterAction) {
    ListStateFilterAction["Exclude"] = "exclude";
    ListStateFilterAction["Ignore"] = "ignore";
    ListStateFilterAction["Include"] = "include";
})(ListStateFilterAction = exports.ListStateFilterAction || (exports.ListStateFilterAction = {}));
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
var LoadBalancerInfo;
(function (LoadBalancerInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancerInfo");
    }
    LoadBalancerInfo.isa = isa;
})(LoadBalancerInfo = exports.LoadBalancerInfo || (exports.LoadBalancerInfo = {}));
var MinimumHealthyHosts;
(function (MinimumHealthyHosts) {
    function isa(o) {
        return smithy_client_1.isa(o, "MinimumHealthyHosts");
    }
    MinimumHealthyHosts.isa = isa;
})(MinimumHealthyHosts = exports.MinimumHealthyHosts || (exports.MinimumHealthyHosts = {}));
var MultipleIamArnsProvidedException;
(function (MultipleIamArnsProvidedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MultipleIamArnsProvidedException");
    }
    MultipleIamArnsProvidedException.isa = isa;
})(MultipleIamArnsProvidedException = exports.MultipleIamArnsProvidedException || (exports.MultipleIamArnsProvidedException = {}));
var OnPremisesTagSet;
(function (OnPremisesTagSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "OnPremisesTagSet");
    }
    OnPremisesTagSet.isa = isa;
})(OnPremisesTagSet = exports.OnPremisesTagSet || (exports.OnPremisesTagSet = {}));
var OperationNotSupportedException;
(function (OperationNotSupportedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationNotSupportedException");
    }
    OperationNotSupportedException.isa = isa;
})(OperationNotSupportedException = exports.OperationNotSupportedException || (exports.OperationNotSupportedException = {}));
var PutLifecycleEventHookExecutionStatusInput;
(function (PutLifecycleEventHookExecutionStatusInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutLifecycleEventHookExecutionStatusInput");
    }
    PutLifecycleEventHookExecutionStatusInput.isa = isa;
})(PutLifecycleEventHookExecutionStatusInput = exports.PutLifecycleEventHookExecutionStatusInput || (exports.PutLifecycleEventHookExecutionStatusInput = {}));
var PutLifecycleEventHookExecutionStatusOutput;
(function (PutLifecycleEventHookExecutionStatusOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutLifecycleEventHookExecutionStatusOutput");
    }
    PutLifecycleEventHookExecutionStatusOutput.isa = isa;
})(PutLifecycleEventHookExecutionStatusOutput = exports.PutLifecycleEventHookExecutionStatusOutput || (exports.PutLifecycleEventHookExecutionStatusOutput = {}));
var RawString;
(function (RawString) {
    function isa(o) {
        return smithy_client_1.isa(o, "RawString");
    }
    RawString.isa = isa;
})(RawString = exports.RawString || (exports.RawString = {}));
var RegisterApplicationRevisionInput;
(function (RegisterApplicationRevisionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterApplicationRevisionInput");
    }
    RegisterApplicationRevisionInput.isa = isa;
})(RegisterApplicationRevisionInput = exports.RegisterApplicationRevisionInput || (exports.RegisterApplicationRevisionInput = {}));
var RegisterOnPremisesInstanceInput;
(function (RegisterOnPremisesInstanceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterOnPremisesInstanceInput");
    }
    RegisterOnPremisesInstanceInput.isa = isa;
})(RegisterOnPremisesInstanceInput = exports.RegisterOnPremisesInstanceInput || (exports.RegisterOnPremisesInstanceInput = {}));
var RegistrationStatus;
(function (RegistrationStatus) {
    RegistrationStatus["Deregistered"] = "Deregistered";
    RegistrationStatus["Registered"] = "Registered";
})(RegistrationStatus = exports.RegistrationStatus || (exports.RegistrationStatus = {}));
var RemoveTagsFromOnPremisesInstancesInput;
(function (RemoveTagsFromOnPremisesInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsFromOnPremisesInstancesInput");
    }
    RemoveTagsFromOnPremisesInstancesInput.isa = isa;
})(RemoveTagsFromOnPremisesInstancesInput = exports.RemoveTagsFromOnPremisesInstancesInput || (exports.RemoveTagsFromOnPremisesInstancesInput = {}));
var ResourceArnRequiredException;
(function (ResourceArnRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceArnRequiredException");
    }
    ResourceArnRequiredException.isa = isa;
})(ResourceArnRequiredException = exports.ResourceArnRequiredException || (exports.ResourceArnRequiredException = {}));
var ResourceValidationException;
(function (ResourceValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceValidationException");
    }
    ResourceValidationException.isa = isa;
})(ResourceValidationException = exports.ResourceValidationException || (exports.ResourceValidationException = {}));
var RevisionDoesNotExistException;
(function (RevisionDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevisionDoesNotExistException");
    }
    RevisionDoesNotExistException.isa = isa;
})(RevisionDoesNotExistException = exports.RevisionDoesNotExistException || (exports.RevisionDoesNotExistException = {}));
var RevisionInfo;
(function (RevisionInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevisionInfo");
    }
    RevisionInfo.isa = isa;
})(RevisionInfo = exports.RevisionInfo || (exports.RevisionInfo = {}));
var RevisionLocation;
(function (RevisionLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevisionLocation");
    }
    RevisionLocation.isa = isa;
})(RevisionLocation = exports.RevisionLocation || (exports.RevisionLocation = {}));
var RevisionLocationType;
(function (RevisionLocationType) {
    RevisionLocationType["AppSpecContent"] = "AppSpecContent";
    RevisionLocationType["GitHub"] = "GitHub";
    RevisionLocationType["S3"] = "S3";
    RevisionLocationType["String"] = "String";
})(RevisionLocationType = exports.RevisionLocationType || (exports.RevisionLocationType = {}));
var RevisionRequiredException;
(function (RevisionRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevisionRequiredException");
    }
    RevisionRequiredException.isa = isa;
})(RevisionRequiredException = exports.RevisionRequiredException || (exports.RevisionRequiredException = {}));
var RoleRequiredException;
(function (RoleRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RoleRequiredException");
    }
    RoleRequiredException.isa = isa;
})(RoleRequiredException = exports.RoleRequiredException || (exports.RoleRequiredException = {}));
var RollbackInfo;
(function (RollbackInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "RollbackInfo");
    }
    RollbackInfo.isa = isa;
})(RollbackInfo = exports.RollbackInfo || (exports.RollbackInfo = {}));
var S3Location;
(function (S3Location) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Location");
    }
    S3Location.isa = isa;
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var SkipWaitTimeForInstanceTerminationInput;
(function (SkipWaitTimeForInstanceTerminationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SkipWaitTimeForInstanceTerminationInput");
    }
    SkipWaitTimeForInstanceTerminationInput.isa = isa;
})(SkipWaitTimeForInstanceTerminationInput = exports.SkipWaitTimeForInstanceTerminationInput || (exports.SkipWaitTimeForInstanceTerminationInput = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["Ascending"] = "ascending";
    SortOrder["Descending"] = "descending";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var StopDeploymentInput;
(function (StopDeploymentInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopDeploymentInput");
    }
    StopDeploymentInput.isa = isa;
})(StopDeploymentInput = exports.StopDeploymentInput || (exports.StopDeploymentInput = {}));
var StopDeploymentOutput;
(function (StopDeploymentOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopDeploymentOutput");
    }
    StopDeploymentOutput.isa = isa;
})(StopDeploymentOutput = exports.StopDeploymentOutput || (exports.StopDeploymentOutput = {}));
var StopStatus;
(function (StopStatus) {
    StopStatus["PENDING"] = "Pending";
    StopStatus["SUCCEEDED"] = "Succeeded";
})(StopStatus = exports.StopStatus || (exports.StopStatus = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagFilter;
(function (TagFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagFilter");
    }
    TagFilter.isa = isa;
})(TagFilter = exports.TagFilter || (exports.TagFilter = {}));
var TagFilterType;
(function (TagFilterType) {
    TagFilterType["KEY_AND_VALUE"] = "KEY_AND_VALUE";
    TagFilterType["KEY_ONLY"] = "KEY_ONLY";
    TagFilterType["VALUE_ONLY"] = "VALUE_ONLY";
})(TagFilterType = exports.TagFilterType || (exports.TagFilterType = {}));
var TagLimitExceededException;
(function (TagLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagLimitExceededException");
    }
    TagLimitExceededException.isa = isa;
})(TagLimitExceededException = exports.TagLimitExceededException || (exports.TagLimitExceededException = {}));
var TagRequiredException;
(function (TagRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagRequiredException");
    }
    TagRequiredException.isa = isa;
})(TagRequiredException = exports.TagRequiredException || (exports.TagRequiredException = {}));
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
var TagSetListLimitExceededException;
(function (TagSetListLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagSetListLimitExceededException");
    }
    TagSetListLimitExceededException.isa = isa;
})(TagSetListLimitExceededException = exports.TagSetListLimitExceededException || (exports.TagSetListLimitExceededException = {}));
var TargetFilterName;
(function (TargetFilterName) {
    TargetFilterName["SERVER_INSTANCE_LABEL"] = "ServerInstanceLabel";
    TargetFilterName["TARGET_STATUS"] = "TargetStatus";
})(TargetFilterName = exports.TargetFilterName || (exports.TargetFilterName = {}));
var TargetGroupInfo;
(function (TargetGroupInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetGroupInfo");
    }
    TargetGroupInfo.isa = isa;
})(TargetGroupInfo = exports.TargetGroupInfo || (exports.TargetGroupInfo = {}));
var TargetGroupPairInfo;
(function (TargetGroupPairInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetGroupPairInfo");
    }
    TargetGroupPairInfo.isa = isa;
})(TargetGroupPairInfo = exports.TargetGroupPairInfo || (exports.TargetGroupPairInfo = {}));
var TargetInstances;
(function (TargetInstances) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetInstances");
    }
    TargetInstances.isa = isa;
})(TargetInstances = exports.TargetInstances || (exports.TargetInstances = {}));
var TargetLabel;
(function (TargetLabel) {
    TargetLabel["BLUE"] = "Blue";
    TargetLabel["GREEN"] = "Green";
})(TargetLabel = exports.TargetLabel || (exports.TargetLabel = {}));
var TargetStatus;
(function (TargetStatus) {
    TargetStatus["FAILED"] = "Failed";
    TargetStatus["IN_PROGRESS"] = "InProgress";
    TargetStatus["PENDING"] = "Pending";
    TargetStatus["READY"] = "Ready";
    TargetStatus["SKIPPED"] = "Skipped";
    TargetStatus["SUCCEEDED"] = "Succeeded";
    TargetStatus["UNKNOWN"] = "Unknown";
})(TargetStatus = exports.TargetStatus || (exports.TargetStatus = {}));
var ThrottlingException;
(function (ThrottlingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThrottlingException");
    }
    ThrottlingException.isa = isa;
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var TimeBasedCanary;
(function (TimeBasedCanary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TimeBasedCanary");
    }
    TimeBasedCanary.isa = isa;
})(TimeBasedCanary = exports.TimeBasedCanary || (exports.TimeBasedCanary = {}));
var TimeBasedLinear;
(function (TimeBasedLinear) {
    function isa(o) {
        return smithy_client_1.isa(o, "TimeBasedLinear");
    }
    TimeBasedLinear.isa = isa;
})(TimeBasedLinear = exports.TimeBasedLinear || (exports.TimeBasedLinear = {}));
var TimeRange;
(function (TimeRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "TimeRange");
    }
    TimeRange.isa = isa;
})(TimeRange = exports.TimeRange || (exports.TimeRange = {}));
var TrafficRoute;
(function (TrafficRoute) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrafficRoute");
    }
    TrafficRoute.isa = isa;
})(TrafficRoute = exports.TrafficRoute || (exports.TrafficRoute = {}));
var TrafficRoutingConfig;
(function (TrafficRoutingConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrafficRoutingConfig");
    }
    TrafficRoutingConfig.isa = isa;
})(TrafficRoutingConfig = exports.TrafficRoutingConfig || (exports.TrafficRoutingConfig = {}));
var TrafficRoutingType;
(function (TrafficRoutingType) {
    TrafficRoutingType["AllAtOnce"] = "AllAtOnce";
    TrafficRoutingType["TimeBasedCanary"] = "TimeBasedCanary";
    TrafficRoutingType["TimeBasedLinear"] = "TimeBasedLinear";
})(TrafficRoutingType = exports.TrafficRoutingType || (exports.TrafficRoutingType = {}));
var TriggerConfig;
(function (TriggerConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "TriggerConfig");
    }
    TriggerConfig.isa = isa;
})(TriggerConfig = exports.TriggerConfig || (exports.TriggerConfig = {}));
var TriggerEventType;
(function (TriggerEventType) {
    TriggerEventType["DEPLOYMENT_FAILURE"] = "DeploymentFailure";
    TriggerEventType["DEPLOYMENT_READY"] = "DeploymentReady";
    TriggerEventType["DEPLOYMENT_ROLLBACK"] = "DeploymentRollback";
    TriggerEventType["DEPLOYMENT_START"] = "DeploymentStart";
    TriggerEventType["DEPLOYMENT_STOP"] = "DeploymentStop";
    TriggerEventType["DEPLOYMENT_SUCCESS"] = "DeploymentSuccess";
    TriggerEventType["INSTANCE_FAILURE"] = "InstanceFailure";
    TriggerEventType["INSTANCE_READY"] = "InstanceReady";
    TriggerEventType["INSTANCE_START"] = "InstanceStart";
    TriggerEventType["INSTANCE_SUCCESS"] = "InstanceSuccess";
})(TriggerEventType = exports.TriggerEventType || (exports.TriggerEventType = {}));
var TriggerTargetsLimitExceededException;
(function (TriggerTargetsLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TriggerTargetsLimitExceededException");
    }
    TriggerTargetsLimitExceededException.isa = isa;
})(TriggerTargetsLimitExceededException = exports.TriggerTargetsLimitExceededException || (exports.TriggerTargetsLimitExceededException = {}));
var UnsupportedActionForDeploymentTypeException;
(function (UnsupportedActionForDeploymentTypeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedActionForDeploymentTypeException");
    }
    UnsupportedActionForDeploymentTypeException.isa = isa;
})(UnsupportedActionForDeploymentTypeException = exports.UnsupportedActionForDeploymentTypeException || (exports.UnsupportedActionForDeploymentTypeException = {}));
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
var UpdateApplicationInput;
(function (UpdateApplicationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateApplicationInput");
    }
    UpdateApplicationInput.isa = isa;
})(UpdateApplicationInput = exports.UpdateApplicationInput || (exports.UpdateApplicationInput = {}));
var UpdateDeploymentGroupInput;
(function (UpdateDeploymentGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDeploymentGroupInput");
    }
    UpdateDeploymentGroupInput.isa = isa;
})(UpdateDeploymentGroupInput = exports.UpdateDeploymentGroupInput || (exports.UpdateDeploymentGroupInput = {}));
var UpdateDeploymentGroupOutput;
(function (UpdateDeploymentGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDeploymentGroupOutput");
    }
    UpdateDeploymentGroupOutput.isa = isa;
})(UpdateDeploymentGroupOutput = exports.UpdateDeploymentGroupOutput || (exports.UpdateDeploymentGroupOutput = {}));
//# sourceMappingURL=index.js.map