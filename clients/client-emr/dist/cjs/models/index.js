"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ActionOnFailure;
(function (ActionOnFailure) {
    ActionOnFailure["CANCEL_AND_WAIT"] = "CANCEL_AND_WAIT";
    ActionOnFailure["CONTINUE"] = "CONTINUE";
    ActionOnFailure["TERMINATE_CLUSTER"] = "TERMINATE_CLUSTER";
    ActionOnFailure["TERMINATE_JOB_FLOW"] = "TERMINATE_JOB_FLOW";
})(ActionOnFailure = exports.ActionOnFailure || (exports.ActionOnFailure = {}));
var AddInstanceFleetInput;
(function (AddInstanceFleetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddInstanceFleetInput");
    }
    AddInstanceFleetInput.isa = isa;
})(AddInstanceFleetInput = exports.AddInstanceFleetInput || (exports.AddInstanceFleetInput = {}));
var AddInstanceFleetOutput;
(function (AddInstanceFleetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddInstanceFleetOutput");
    }
    AddInstanceFleetOutput.isa = isa;
})(AddInstanceFleetOutput = exports.AddInstanceFleetOutput || (exports.AddInstanceFleetOutput = {}));
var AddInstanceGroupsInput;
(function (AddInstanceGroupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddInstanceGroupsInput");
    }
    AddInstanceGroupsInput.isa = isa;
})(AddInstanceGroupsInput = exports.AddInstanceGroupsInput || (exports.AddInstanceGroupsInput = {}));
var AddInstanceGroupsOutput;
(function (AddInstanceGroupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddInstanceGroupsOutput");
    }
    AddInstanceGroupsOutput.isa = isa;
})(AddInstanceGroupsOutput = exports.AddInstanceGroupsOutput || (exports.AddInstanceGroupsOutput = {}));
var AddJobFlowStepsInput;
(function (AddJobFlowStepsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddJobFlowStepsInput");
    }
    AddJobFlowStepsInput.isa = isa;
})(AddJobFlowStepsInput = exports.AddJobFlowStepsInput || (exports.AddJobFlowStepsInput = {}));
var AddJobFlowStepsOutput;
(function (AddJobFlowStepsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddJobFlowStepsOutput");
    }
    AddJobFlowStepsOutput.isa = isa;
})(AddJobFlowStepsOutput = exports.AddJobFlowStepsOutput || (exports.AddJobFlowStepsOutput = {}));
var AddTagsInput;
(function (AddTagsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsInput");
    }
    AddTagsInput.isa = isa;
})(AddTagsInput = exports.AddTagsInput || (exports.AddTagsInput = {}));
var AddTagsOutput;
(function (AddTagsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsOutput");
    }
    AddTagsOutput.isa = isa;
})(AddTagsOutput = exports.AddTagsOutput || (exports.AddTagsOutput = {}));
var AdjustmentType;
(function (AdjustmentType) {
    AdjustmentType["CHANGE_IN_CAPACITY"] = "CHANGE_IN_CAPACITY";
    AdjustmentType["EXACT_CAPACITY"] = "EXACT_CAPACITY";
    AdjustmentType["PERCENT_CHANGE_IN_CAPACITY"] = "PERCENT_CHANGE_IN_CAPACITY";
})(AdjustmentType = exports.AdjustmentType || (exports.AdjustmentType = {}));
var Application;
(function (Application) {
    function isa(o) {
        return smithy_client_1.isa(o, "Application");
    }
    Application.isa = isa;
})(Application = exports.Application || (exports.Application = {}));
var AutoScalingPolicy;
(function (AutoScalingPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingPolicy");
    }
    AutoScalingPolicy.isa = isa;
})(AutoScalingPolicy = exports.AutoScalingPolicy || (exports.AutoScalingPolicy = {}));
var AutoScalingPolicyDescription;
(function (AutoScalingPolicyDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingPolicyDescription");
    }
    AutoScalingPolicyDescription.isa = isa;
})(AutoScalingPolicyDescription = exports.AutoScalingPolicyDescription || (exports.AutoScalingPolicyDescription = {}));
var AutoScalingPolicyState;
(function (AutoScalingPolicyState) {
    AutoScalingPolicyState["ATTACHED"] = "ATTACHED";
    AutoScalingPolicyState["ATTACHING"] = "ATTACHING";
    AutoScalingPolicyState["DETACHED"] = "DETACHED";
    AutoScalingPolicyState["DETACHING"] = "DETACHING";
    AutoScalingPolicyState["FAILED"] = "FAILED";
    AutoScalingPolicyState["PENDING"] = "PENDING";
})(AutoScalingPolicyState = exports.AutoScalingPolicyState || (exports.AutoScalingPolicyState = {}));
var AutoScalingPolicyStateChangeReason;
(function (AutoScalingPolicyStateChangeReason) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingPolicyStateChangeReason");
    }
    AutoScalingPolicyStateChangeReason.isa = isa;
})(AutoScalingPolicyStateChangeReason = exports.AutoScalingPolicyStateChangeReason || (exports.AutoScalingPolicyStateChangeReason = {}));
var AutoScalingPolicyStateChangeReasonCode;
(function (AutoScalingPolicyStateChangeReasonCode) {
    AutoScalingPolicyStateChangeReasonCode["CLEANUP_FAILURE"] = "CLEANUP_FAILURE";
    AutoScalingPolicyStateChangeReasonCode["PROVISION_FAILURE"] = "PROVISION_FAILURE";
    AutoScalingPolicyStateChangeReasonCode["USER_REQUEST"] = "USER_REQUEST";
})(AutoScalingPolicyStateChangeReasonCode = exports.AutoScalingPolicyStateChangeReasonCode || (exports.AutoScalingPolicyStateChangeReasonCode = {}));
var AutoScalingPolicyStatus;
(function (AutoScalingPolicyStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingPolicyStatus");
    }
    AutoScalingPolicyStatus.isa = isa;
})(AutoScalingPolicyStatus = exports.AutoScalingPolicyStatus || (exports.AutoScalingPolicyStatus = {}));
var BlockPublicAccessConfiguration;
(function (BlockPublicAccessConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "BlockPublicAccessConfiguration");
    }
    BlockPublicAccessConfiguration.isa = isa;
})(BlockPublicAccessConfiguration = exports.BlockPublicAccessConfiguration || (exports.BlockPublicAccessConfiguration = {}));
var BlockPublicAccessConfigurationMetadata;
(function (BlockPublicAccessConfigurationMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "BlockPublicAccessConfigurationMetadata");
    }
    BlockPublicAccessConfigurationMetadata.isa = isa;
})(BlockPublicAccessConfigurationMetadata = exports.BlockPublicAccessConfigurationMetadata || (exports.BlockPublicAccessConfigurationMetadata = {}));
var BootstrapActionConfig;
(function (BootstrapActionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "BootstrapActionConfig");
    }
    BootstrapActionConfig.isa = isa;
})(BootstrapActionConfig = exports.BootstrapActionConfig || (exports.BootstrapActionConfig = {}));
var BootstrapActionDetail;
(function (BootstrapActionDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "BootstrapActionDetail");
    }
    BootstrapActionDetail.isa = isa;
})(BootstrapActionDetail = exports.BootstrapActionDetail || (exports.BootstrapActionDetail = {}));
var CancelStepsInfo;
(function (CancelStepsInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelStepsInfo");
    }
    CancelStepsInfo.isa = isa;
})(CancelStepsInfo = exports.CancelStepsInfo || (exports.CancelStepsInfo = {}));
var CancelStepsInput;
(function (CancelStepsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelStepsInput");
    }
    CancelStepsInput.isa = isa;
})(CancelStepsInput = exports.CancelStepsInput || (exports.CancelStepsInput = {}));
var CancelStepsOutput;
(function (CancelStepsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelStepsOutput");
    }
    CancelStepsOutput.isa = isa;
})(CancelStepsOutput = exports.CancelStepsOutput || (exports.CancelStepsOutput = {}));
var CancelStepsRequestStatus;
(function (CancelStepsRequestStatus) {
    CancelStepsRequestStatus["FAILED"] = "FAILED";
    CancelStepsRequestStatus["SUBMITTED"] = "SUBMITTED";
})(CancelStepsRequestStatus = exports.CancelStepsRequestStatus || (exports.CancelStepsRequestStatus = {}));
var CloudWatchAlarmDefinition;
(function (CloudWatchAlarmDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudWatchAlarmDefinition");
    }
    CloudWatchAlarmDefinition.isa = isa;
})(CloudWatchAlarmDefinition = exports.CloudWatchAlarmDefinition || (exports.CloudWatchAlarmDefinition = {}));
var Cluster;
(function (Cluster) {
    function isa(o) {
        return smithy_client_1.isa(o, "Cluster");
    }
    Cluster.isa = isa;
})(Cluster = exports.Cluster || (exports.Cluster = {}));
var ClusterState;
(function (ClusterState) {
    ClusterState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    ClusterState["RUNNING"] = "RUNNING";
    ClusterState["STARTING"] = "STARTING";
    ClusterState["TERMINATED"] = "TERMINATED";
    ClusterState["TERMINATED_WITH_ERRORS"] = "TERMINATED_WITH_ERRORS";
    ClusterState["TERMINATING"] = "TERMINATING";
    ClusterState["WAITING"] = "WAITING";
})(ClusterState = exports.ClusterState || (exports.ClusterState = {}));
var ClusterStateChangeReason;
(function (ClusterStateChangeReason) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClusterStateChangeReason");
    }
    ClusterStateChangeReason.isa = isa;
})(ClusterStateChangeReason = exports.ClusterStateChangeReason || (exports.ClusterStateChangeReason = {}));
var ClusterStateChangeReasonCode;
(function (ClusterStateChangeReasonCode) {
    ClusterStateChangeReasonCode["ALL_STEPS_COMPLETED"] = "ALL_STEPS_COMPLETED";
    ClusterStateChangeReasonCode["BOOTSTRAP_FAILURE"] = "BOOTSTRAP_FAILURE";
    ClusterStateChangeReasonCode["INSTANCE_FAILURE"] = "INSTANCE_FAILURE";
    ClusterStateChangeReasonCode["INSTANCE_FLEET_TIMEOUT"] = "INSTANCE_FLEET_TIMEOUT";
    ClusterStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ClusterStateChangeReasonCode["STEP_FAILURE"] = "STEP_FAILURE";
    ClusterStateChangeReasonCode["USER_REQUEST"] = "USER_REQUEST";
    ClusterStateChangeReasonCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(ClusterStateChangeReasonCode = exports.ClusterStateChangeReasonCode || (exports.ClusterStateChangeReasonCode = {}));
var ClusterStatus;
(function (ClusterStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClusterStatus");
    }
    ClusterStatus.isa = isa;
})(ClusterStatus = exports.ClusterStatus || (exports.ClusterStatus = {}));
var ClusterSummary;
(function (ClusterSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClusterSummary");
    }
    ClusterSummary.isa = isa;
})(ClusterSummary = exports.ClusterSummary || (exports.ClusterSummary = {}));
var ClusterTimeline;
(function (ClusterTimeline) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClusterTimeline");
    }
    ClusterTimeline.isa = isa;
})(ClusterTimeline = exports.ClusterTimeline || (exports.ClusterTimeline = {}));
var Command;
(function (Command) {
    function isa(o) {
        return smithy_client_1.isa(o, "Command");
    }
    Command.isa = isa;
})(Command = exports.Command || (exports.Command = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["GREATER_THAN"] = "GREATER_THAN";
    ComparisonOperator["GREATER_THAN_OR_EQUAL"] = "GREATER_THAN_OR_EQUAL";
    ComparisonOperator["LESS_THAN"] = "LESS_THAN";
    ComparisonOperator["LESS_THAN_OR_EQUAL"] = "LESS_THAN_OR_EQUAL";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var Configuration;
(function (Configuration) {
    function isa(o) {
        return smithy_client_1.isa(o, "Configuration");
    }
    Configuration.isa = isa;
})(Configuration = exports.Configuration || (exports.Configuration = {}));
var CreateSecurityConfigurationInput;
(function (CreateSecurityConfigurationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSecurityConfigurationInput");
    }
    CreateSecurityConfigurationInput.isa = isa;
})(CreateSecurityConfigurationInput = exports.CreateSecurityConfigurationInput || (exports.CreateSecurityConfigurationInput = {}));
var CreateSecurityConfigurationOutput;
(function (CreateSecurityConfigurationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSecurityConfigurationOutput");
    }
    CreateSecurityConfigurationOutput.isa = isa;
})(CreateSecurityConfigurationOutput = exports.CreateSecurityConfigurationOutput || (exports.CreateSecurityConfigurationOutput = {}));
var DeleteSecurityConfigurationInput;
(function (DeleteSecurityConfigurationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSecurityConfigurationInput");
    }
    DeleteSecurityConfigurationInput.isa = isa;
})(DeleteSecurityConfigurationInput = exports.DeleteSecurityConfigurationInput || (exports.DeleteSecurityConfigurationInput = {}));
var DeleteSecurityConfigurationOutput;
(function (DeleteSecurityConfigurationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSecurityConfigurationOutput");
    }
    DeleteSecurityConfigurationOutput.isa = isa;
})(DeleteSecurityConfigurationOutput = exports.DeleteSecurityConfigurationOutput || (exports.DeleteSecurityConfigurationOutput = {}));
var DescribeClusterInput;
(function (DescribeClusterInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeClusterInput");
    }
    DescribeClusterInput.isa = isa;
})(DescribeClusterInput = exports.DescribeClusterInput || (exports.DescribeClusterInput = {}));
var DescribeClusterOutput;
(function (DescribeClusterOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeClusterOutput");
    }
    DescribeClusterOutput.isa = isa;
})(DescribeClusterOutput = exports.DescribeClusterOutput || (exports.DescribeClusterOutput = {}));
var DescribeJobFlowsInput;
(function (DescribeJobFlowsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeJobFlowsInput");
    }
    DescribeJobFlowsInput.isa = isa;
})(DescribeJobFlowsInput = exports.DescribeJobFlowsInput || (exports.DescribeJobFlowsInput = {}));
var DescribeJobFlowsOutput;
(function (DescribeJobFlowsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeJobFlowsOutput");
    }
    DescribeJobFlowsOutput.isa = isa;
})(DescribeJobFlowsOutput = exports.DescribeJobFlowsOutput || (exports.DescribeJobFlowsOutput = {}));
var DescribeSecurityConfigurationInput;
(function (DescribeSecurityConfigurationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSecurityConfigurationInput");
    }
    DescribeSecurityConfigurationInput.isa = isa;
})(DescribeSecurityConfigurationInput = exports.DescribeSecurityConfigurationInput || (exports.DescribeSecurityConfigurationInput = {}));
var DescribeSecurityConfigurationOutput;
(function (DescribeSecurityConfigurationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSecurityConfigurationOutput");
    }
    DescribeSecurityConfigurationOutput.isa = isa;
})(DescribeSecurityConfigurationOutput = exports.DescribeSecurityConfigurationOutput || (exports.DescribeSecurityConfigurationOutput = {}));
var DescribeStepInput;
(function (DescribeStepInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStepInput");
    }
    DescribeStepInput.isa = isa;
})(DescribeStepInput = exports.DescribeStepInput || (exports.DescribeStepInput = {}));
var DescribeStepOutput;
(function (DescribeStepOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStepOutput");
    }
    DescribeStepOutput.isa = isa;
})(DescribeStepOutput = exports.DescribeStepOutput || (exports.DescribeStepOutput = {}));
var EbsBlockDevice;
(function (EbsBlockDevice) {
    function isa(o) {
        return smithy_client_1.isa(o, "EbsBlockDevice");
    }
    EbsBlockDevice.isa = isa;
})(EbsBlockDevice = exports.EbsBlockDevice || (exports.EbsBlockDevice = {}));
var EbsBlockDeviceConfig;
(function (EbsBlockDeviceConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "EbsBlockDeviceConfig");
    }
    EbsBlockDeviceConfig.isa = isa;
})(EbsBlockDeviceConfig = exports.EbsBlockDeviceConfig || (exports.EbsBlockDeviceConfig = {}));
var EbsConfiguration;
(function (EbsConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "EbsConfiguration");
    }
    EbsConfiguration.isa = isa;
})(EbsConfiguration = exports.EbsConfiguration || (exports.EbsConfiguration = {}));
var EbsVolume;
(function (EbsVolume) {
    function isa(o) {
        return smithy_client_1.isa(o, "EbsVolume");
    }
    EbsVolume.isa = isa;
})(EbsVolume = exports.EbsVolume || (exports.EbsVolume = {}));
var Ec2InstanceAttributes;
(function (Ec2InstanceAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "Ec2InstanceAttributes");
    }
    Ec2InstanceAttributes.isa = isa;
})(Ec2InstanceAttributes = exports.Ec2InstanceAttributes || (exports.Ec2InstanceAttributes = {}));
var FailureDetails;
(function (FailureDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailureDetails");
    }
    FailureDetails.isa = isa;
})(FailureDetails = exports.FailureDetails || (exports.FailureDetails = {}));
var GetBlockPublicAccessConfigurationInput;
(function (GetBlockPublicAccessConfigurationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBlockPublicAccessConfigurationInput");
    }
    GetBlockPublicAccessConfigurationInput.isa = isa;
})(GetBlockPublicAccessConfigurationInput = exports.GetBlockPublicAccessConfigurationInput || (exports.GetBlockPublicAccessConfigurationInput = {}));
var GetBlockPublicAccessConfigurationOutput;
(function (GetBlockPublicAccessConfigurationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBlockPublicAccessConfigurationOutput");
    }
    GetBlockPublicAccessConfigurationOutput.isa = isa;
})(GetBlockPublicAccessConfigurationOutput = exports.GetBlockPublicAccessConfigurationOutput || (exports.GetBlockPublicAccessConfigurationOutput = {}));
var HadoopJarStepConfig;
(function (HadoopJarStepConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HadoopJarStepConfig");
    }
    HadoopJarStepConfig.isa = isa;
})(HadoopJarStepConfig = exports.HadoopJarStepConfig || (exports.HadoopJarStepConfig = {}));
var HadoopStepConfig;
(function (HadoopStepConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HadoopStepConfig");
    }
    HadoopStepConfig.isa = isa;
})(HadoopStepConfig = exports.HadoopStepConfig || (exports.HadoopStepConfig = {}));
var Instance;
(function (Instance) {
    function isa(o) {
        return smithy_client_1.isa(o, "Instance");
    }
    Instance.isa = isa;
})(Instance = exports.Instance || (exports.Instance = {}));
var InstanceCollectionType;
(function (InstanceCollectionType) {
    InstanceCollectionType["INSTANCE_FLEET"] = "INSTANCE_FLEET";
    InstanceCollectionType["INSTANCE_GROUP"] = "INSTANCE_GROUP";
})(InstanceCollectionType = exports.InstanceCollectionType || (exports.InstanceCollectionType = {}));
var InstanceFleet;
(function (InstanceFleet) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceFleet");
    }
    InstanceFleet.isa = isa;
})(InstanceFleet = exports.InstanceFleet || (exports.InstanceFleet = {}));
var InstanceFleetConfig;
(function (InstanceFleetConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceFleetConfig");
    }
    InstanceFleetConfig.isa = isa;
})(InstanceFleetConfig = exports.InstanceFleetConfig || (exports.InstanceFleetConfig = {}));
var InstanceFleetModifyConfig;
(function (InstanceFleetModifyConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceFleetModifyConfig");
    }
    InstanceFleetModifyConfig.isa = isa;
})(InstanceFleetModifyConfig = exports.InstanceFleetModifyConfig || (exports.InstanceFleetModifyConfig = {}));
var InstanceFleetProvisioningSpecifications;
(function (InstanceFleetProvisioningSpecifications) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceFleetProvisioningSpecifications");
    }
    InstanceFleetProvisioningSpecifications.isa = isa;
})(InstanceFleetProvisioningSpecifications = exports.InstanceFleetProvisioningSpecifications || (exports.InstanceFleetProvisioningSpecifications = {}));
var InstanceFleetState;
(function (InstanceFleetState) {
    InstanceFleetState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    InstanceFleetState["PROVISIONING"] = "PROVISIONING";
    InstanceFleetState["RESIZING"] = "RESIZING";
    InstanceFleetState["RUNNING"] = "RUNNING";
    InstanceFleetState["SUSPENDED"] = "SUSPENDED";
    InstanceFleetState["TERMINATED"] = "TERMINATED";
    InstanceFleetState["TERMINATING"] = "TERMINATING";
})(InstanceFleetState = exports.InstanceFleetState || (exports.InstanceFleetState = {}));
var InstanceFleetStateChangeReason;
(function (InstanceFleetStateChangeReason) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceFleetStateChangeReason");
    }
    InstanceFleetStateChangeReason.isa = isa;
})(InstanceFleetStateChangeReason = exports.InstanceFleetStateChangeReason || (exports.InstanceFleetStateChangeReason = {}));
var InstanceFleetStateChangeReasonCode;
(function (InstanceFleetStateChangeReasonCode) {
    InstanceFleetStateChangeReasonCode["CLUSTER_TERMINATED"] = "CLUSTER_TERMINATED";
    InstanceFleetStateChangeReasonCode["INSTANCE_FAILURE"] = "INSTANCE_FAILURE";
    InstanceFleetStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    InstanceFleetStateChangeReasonCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(InstanceFleetStateChangeReasonCode = exports.InstanceFleetStateChangeReasonCode || (exports.InstanceFleetStateChangeReasonCode = {}));
var InstanceFleetStatus;
(function (InstanceFleetStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceFleetStatus");
    }
    InstanceFleetStatus.isa = isa;
})(InstanceFleetStatus = exports.InstanceFleetStatus || (exports.InstanceFleetStatus = {}));
var InstanceFleetTimeline;
(function (InstanceFleetTimeline) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceFleetTimeline");
    }
    InstanceFleetTimeline.isa = isa;
})(InstanceFleetTimeline = exports.InstanceFleetTimeline || (exports.InstanceFleetTimeline = {}));
var InstanceFleetType;
(function (InstanceFleetType) {
    InstanceFleetType["CORE"] = "CORE";
    InstanceFleetType["MASTER"] = "MASTER";
    InstanceFleetType["TASK"] = "TASK";
})(InstanceFleetType = exports.InstanceFleetType || (exports.InstanceFleetType = {}));
var InstanceGroup;
(function (InstanceGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceGroup");
    }
    InstanceGroup.isa = isa;
})(InstanceGroup = exports.InstanceGroup || (exports.InstanceGroup = {}));
var InstanceGroupConfig;
(function (InstanceGroupConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceGroupConfig");
    }
    InstanceGroupConfig.isa = isa;
})(InstanceGroupConfig = exports.InstanceGroupConfig || (exports.InstanceGroupConfig = {}));
var InstanceGroupDetail;
(function (InstanceGroupDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceGroupDetail");
    }
    InstanceGroupDetail.isa = isa;
})(InstanceGroupDetail = exports.InstanceGroupDetail || (exports.InstanceGroupDetail = {}));
var InstanceGroupModifyConfig;
(function (InstanceGroupModifyConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceGroupModifyConfig");
    }
    InstanceGroupModifyConfig.isa = isa;
})(InstanceGroupModifyConfig = exports.InstanceGroupModifyConfig || (exports.InstanceGroupModifyConfig = {}));
var InstanceGroupState;
(function (InstanceGroupState) {
    InstanceGroupState["ARRESTED"] = "ARRESTED";
    InstanceGroupState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    InstanceGroupState["ENDED"] = "ENDED";
    InstanceGroupState["PROVISIONING"] = "PROVISIONING";
    InstanceGroupState["RECONFIGURING"] = "RECONFIGURING";
    InstanceGroupState["RESIZING"] = "RESIZING";
    InstanceGroupState["RUNNING"] = "RUNNING";
    InstanceGroupState["SHUTTING_DOWN"] = "SHUTTING_DOWN";
    InstanceGroupState["SUSPENDED"] = "SUSPENDED";
    InstanceGroupState["TERMINATED"] = "TERMINATED";
    InstanceGroupState["TERMINATING"] = "TERMINATING";
})(InstanceGroupState = exports.InstanceGroupState || (exports.InstanceGroupState = {}));
var InstanceGroupStateChangeReason;
(function (InstanceGroupStateChangeReason) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceGroupStateChangeReason");
    }
    InstanceGroupStateChangeReason.isa = isa;
})(InstanceGroupStateChangeReason = exports.InstanceGroupStateChangeReason || (exports.InstanceGroupStateChangeReason = {}));
var InstanceGroupStateChangeReasonCode;
(function (InstanceGroupStateChangeReasonCode) {
    InstanceGroupStateChangeReasonCode["CLUSTER_TERMINATED"] = "CLUSTER_TERMINATED";
    InstanceGroupStateChangeReasonCode["INSTANCE_FAILURE"] = "INSTANCE_FAILURE";
    InstanceGroupStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    InstanceGroupStateChangeReasonCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(InstanceGroupStateChangeReasonCode = exports.InstanceGroupStateChangeReasonCode || (exports.InstanceGroupStateChangeReasonCode = {}));
var InstanceGroupStatus;
(function (InstanceGroupStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceGroupStatus");
    }
    InstanceGroupStatus.isa = isa;
})(InstanceGroupStatus = exports.InstanceGroupStatus || (exports.InstanceGroupStatus = {}));
var InstanceGroupTimeline;
(function (InstanceGroupTimeline) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceGroupTimeline");
    }
    InstanceGroupTimeline.isa = isa;
})(InstanceGroupTimeline = exports.InstanceGroupTimeline || (exports.InstanceGroupTimeline = {}));
var InstanceGroupType;
(function (InstanceGroupType) {
    InstanceGroupType["CORE"] = "CORE";
    InstanceGroupType["MASTER"] = "MASTER";
    InstanceGroupType["TASK"] = "TASK";
})(InstanceGroupType = exports.InstanceGroupType || (exports.InstanceGroupType = {}));
var InstanceResizePolicy;
(function (InstanceResizePolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceResizePolicy");
    }
    InstanceResizePolicy.isa = isa;
})(InstanceResizePolicy = exports.InstanceResizePolicy || (exports.InstanceResizePolicy = {}));
var InstanceState;
(function (InstanceState) {
    InstanceState["AWAITING_FULFILLMENT"] = "AWAITING_FULFILLMENT";
    InstanceState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    InstanceState["PROVISIONING"] = "PROVISIONING";
    InstanceState["RUNNING"] = "RUNNING";
    InstanceState["TERMINATED"] = "TERMINATED";
})(InstanceState = exports.InstanceState || (exports.InstanceState = {}));
var InstanceStateChangeReason;
(function (InstanceStateChangeReason) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceStateChangeReason");
    }
    InstanceStateChangeReason.isa = isa;
})(InstanceStateChangeReason = exports.InstanceStateChangeReason || (exports.InstanceStateChangeReason = {}));
var InstanceStateChangeReasonCode;
(function (InstanceStateChangeReasonCode) {
    InstanceStateChangeReasonCode["BOOTSTRAP_FAILURE"] = "BOOTSTRAP_FAILURE";
    InstanceStateChangeReasonCode["CLUSTER_TERMINATED"] = "CLUSTER_TERMINATED";
    InstanceStateChangeReasonCode["INSTANCE_FAILURE"] = "INSTANCE_FAILURE";
    InstanceStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    InstanceStateChangeReasonCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
})(InstanceStateChangeReasonCode = exports.InstanceStateChangeReasonCode || (exports.InstanceStateChangeReasonCode = {}));
var InstanceStatus;
(function (InstanceStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceStatus");
    }
    InstanceStatus.isa = isa;
})(InstanceStatus = exports.InstanceStatus || (exports.InstanceStatus = {}));
var InstanceTimeline;
(function (InstanceTimeline) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceTimeline");
    }
    InstanceTimeline.isa = isa;
})(InstanceTimeline = exports.InstanceTimeline || (exports.InstanceTimeline = {}));
var InstanceTypeConfig;
(function (InstanceTypeConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceTypeConfig");
    }
    InstanceTypeConfig.isa = isa;
})(InstanceTypeConfig = exports.InstanceTypeConfig || (exports.InstanceTypeConfig = {}));
var InstanceTypeSpecification;
(function (InstanceTypeSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceTypeSpecification");
    }
    InstanceTypeSpecification.isa = isa;
})(InstanceTypeSpecification = exports.InstanceTypeSpecification || (exports.InstanceTypeSpecification = {}));
var InternalServerError;
(function (InternalServerError) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerError");
    }
    InternalServerError.isa = isa;
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var InternalServerException;
(function (InternalServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerException");
    }
    InternalServerException.isa = isa;
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRequestException");
    }
    InvalidRequestException.isa = isa;
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var JobFlowDetail;
(function (JobFlowDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobFlowDetail");
    }
    JobFlowDetail.isa = isa;
})(JobFlowDetail = exports.JobFlowDetail || (exports.JobFlowDetail = {}));
var JobFlowExecutionState;
(function (JobFlowExecutionState) {
    JobFlowExecutionState["BOOTSTRAPPING"] = "BOOTSTRAPPING";
    JobFlowExecutionState["COMPLETED"] = "COMPLETED";
    JobFlowExecutionState["FAILED"] = "FAILED";
    JobFlowExecutionState["RUNNING"] = "RUNNING";
    JobFlowExecutionState["SHUTTING_DOWN"] = "SHUTTING_DOWN";
    JobFlowExecutionState["STARTING"] = "STARTING";
    JobFlowExecutionState["TERMINATED"] = "TERMINATED";
    JobFlowExecutionState["WAITING"] = "WAITING";
})(JobFlowExecutionState = exports.JobFlowExecutionState || (exports.JobFlowExecutionState = {}));
var JobFlowExecutionStatusDetail;
(function (JobFlowExecutionStatusDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobFlowExecutionStatusDetail");
    }
    JobFlowExecutionStatusDetail.isa = isa;
})(JobFlowExecutionStatusDetail = exports.JobFlowExecutionStatusDetail || (exports.JobFlowExecutionStatusDetail = {}));
var JobFlowInstancesConfig;
(function (JobFlowInstancesConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobFlowInstancesConfig");
    }
    JobFlowInstancesConfig.isa = isa;
})(JobFlowInstancesConfig = exports.JobFlowInstancesConfig || (exports.JobFlowInstancesConfig = {}));
var JobFlowInstancesDetail;
(function (JobFlowInstancesDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobFlowInstancesDetail");
    }
    JobFlowInstancesDetail.isa = isa;
})(JobFlowInstancesDetail = exports.JobFlowInstancesDetail || (exports.JobFlowInstancesDetail = {}));
var KerberosAttributes;
(function (KerberosAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "KerberosAttributes");
    }
    KerberosAttributes.isa = isa;
})(KerberosAttributes = exports.KerberosAttributes || (exports.KerberosAttributes = {}));
var KeyValue;
(function (KeyValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "KeyValue");
    }
    KeyValue.isa = isa;
})(KeyValue = exports.KeyValue || (exports.KeyValue = {}));
var ListBootstrapActionsInput;
(function (ListBootstrapActionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBootstrapActionsInput");
    }
    ListBootstrapActionsInput.isa = isa;
})(ListBootstrapActionsInput = exports.ListBootstrapActionsInput || (exports.ListBootstrapActionsInput = {}));
var ListBootstrapActionsOutput;
(function (ListBootstrapActionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBootstrapActionsOutput");
    }
    ListBootstrapActionsOutput.isa = isa;
})(ListBootstrapActionsOutput = exports.ListBootstrapActionsOutput || (exports.ListBootstrapActionsOutput = {}));
var ListClustersInput;
(function (ListClustersInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListClustersInput");
    }
    ListClustersInput.isa = isa;
})(ListClustersInput = exports.ListClustersInput || (exports.ListClustersInput = {}));
var ListClustersOutput;
(function (ListClustersOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListClustersOutput");
    }
    ListClustersOutput.isa = isa;
})(ListClustersOutput = exports.ListClustersOutput || (exports.ListClustersOutput = {}));
var ListInstanceFleetsInput;
(function (ListInstanceFleetsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstanceFleetsInput");
    }
    ListInstanceFleetsInput.isa = isa;
})(ListInstanceFleetsInput = exports.ListInstanceFleetsInput || (exports.ListInstanceFleetsInput = {}));
var ListInstanceFleetsOutput;
(function (ListInstanceFleetsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstanceFleetsOutput");
    }
    ListInstanceFleetsOutput.isa = isa;
})(ListInstanceFleetsOutput = exports.ListInstanceFleetsOutput || (exports.ListInstanceFleetsOutput = {}));
var ListInstanceGroupsInput;
(function (ListInstanceGroupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstanceGroupsInput");
    }
    ListInstanceGroupsInput.isa = isa;
})(ListInstanceGroupsInput = exports.ListInstanceGroupsInput || (exports.ListInstanceGroupsInput = {}));
var ListInstanceGroupsOutput;
(function (ListInstanceGroupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstanceGroupsOutput");
    }
    ListInstanceGroupsOutput.isa = isa;
})(ListInstanceGroupsOutput = exports.ListInstanceGroupsOutput || (exports.ListInstanceGroupsOutput = {}));
var ListInstancesInput;
(function (ListInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstancesInput");
    }
    ListInstancesInput.isa = isa;
})(ListInstancesInput = exports.ListInstancesInput || (exports.ListInstancesInput = {}));
var ListInstancesOutput;
(function (ListInstancesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstancesOutput");
    }
    ListInstancesOutput.isa = isa;
})(ListInstancesOutput = exports.ListInstancesOutput || (exports.ListInstancesOutput = {}));
var ListSecurityConfigurationsInput;
(function (ListSecurityConfigurationsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSecurityConfigurationsInput");
    }
    ListSecurityConfigurationsInput.isa = isa;
})(ListSecurityConfigurationsInput = exports.ListSecurityConfigurationsInput || (exports.ListSecurityConfigurationsInput = {}));
var ListSecurityConfigurationsOutput;
(function (ListSecurityConfigurationsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSecurityConfigurationsOutput");
    }
    ListSecurityConfigurationsOutput.isa = isa;
})(ListSecurityConfigurationsOutput = exports.ListSecurityConfigurationsOutput || (exports.ListSecurityConfigurationsOutput = {}));
var ListStepsInput;
(function (ListStepsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStepsInput");
    }
    ListStepsInput.isa = isa;
})(ListStepsInput = exports.ListStepsInput || (exports.ListStepsInput = {}));
var ListStepsOutput;
(function (ListStepsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListStepsOutput");
    }
    ListStepsOutput.isa = isa;
})(ListStepsOutput = exports.ListStepsOutput || (exports.ListStepsOutput = {}));
var MarketType;
(function (MarketType) {
    MarketType["ON_DEMAND"] = "ON_DEMAND";
    MarketType["SPOT"] = "SPOT";
})(MarketType = exports.MarketType || (exports.MarketType = {}));
var MetricDimension;
(function (MetricDimension) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricDimension");
    }
    MetricDimension.isa = isa;
})(MetricDimension = exports.MetricDimension || (exports.MetricDimension = {}));
var ModifyClusterInput;
(function (ModifyClusterInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyClusterInput");
    }
    ModifyClusterInput.isa = isa;
})(ModifyClusterInput = exports.ModifyClusterInput || (exports.ModifyClusterInput = {}));
var ModifyClusterOutput;
(function (ModifyClusterOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyClusterOutput");
    }
    ModifyClusterOutput.isa = isa;
})(ModifyClusterOutput = exports.ModifyClusterOutput || (exports.ModifyClusterOutput = {}));
var ModifyInstanceFleetInput;
(function (ModifyInstanceFleetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyInstanceFleetInput");
    }
    ModifyInstanceFleetInput.isa = isa;
})(ModifyInstanceFleetInput = exports.ModifyInstanceFleetInput || (exports.ModifyInstanceFleetInput = {}));
var ModifyInstanceGroupsInput;
(function (ModifyInstanceGroupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyInstanceGroupsInput");
    }
    ModifyInstanceGroupsInput.isa = isa;
})(ModifyInstanceGroupsInput = exports.ModifyInstanceGroupsInput || (exports.ModifyInstanceGroupsInput = {}));
var PlacementType;
(function (PlacementType) {
    function isa(o) {
        return smithy_client_1.isa(o, "PlacementType");
    }
    PlacementType.isa = isa;
})(PlacementType = exports.PlacementType || (exports.PlacementType = {}));
var PortRange;
(function (PortRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "PortRange");
    }
    PortRange.isa = isa;
})(PortRange = exports.PortRange || (exports.PortRange = {}));
var PutAutoScalingPolicyInput;
(function (PutAutoScalingPolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAutoScalingPolicyInput");
    }
    PutAutoScalingPolicyInput.isa = isa;
})(PutAutoScalingPolicyInput = exports.PutAutoScalingPolicyInput || (exports.PutAutoScalingPolicyInput = {}));
var PutAutoScalingPolicyOutput;
(function (PutAutoScalingPolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAutoScalingPolicyOutput");
    }
    PutAutoScalingPolicyOutput.isa = isa;
})(PutAutoScalingPolicyOutput = exports.PutAutoScalingPolicyOutput || (exports.PutAutoScalingPolicyOutput = {}));
var PutBlockPublicAccessConfigurationInput;
(function (PutBlockPublicAccessConfigurationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutBlockPublicAccessConfigurationInput");
    }
    PutBlockPublicAccessConfigurationInput.isa = isa;
})(PutBlockPublicAccessConfigurationInput = exports.PutBlockPublicAccessConfigurationInput || (exports.PutBlockPublicAccessConfigurationInput = {}));
var PutBlockPublicAccessConfigurationOutput;
(function (PutBlockPublicAccessConfigurationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutBlockPublicAccessConfigurationOutput");
    }
    PutBlockPublicAccessConfigurationOutput.isa = isa;
})(PutBlockPublicAccessConfigurationOutput = exports.PutBlockPublicAccessConfigurationOutput || (exports.PutBlockPublicAccessConfigurationOutput = {}));
var RemoveAutoScalingPolicyInput;
(function (RemoveAutoScalingPolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveAutoScalingPolicyInput");
    }
    RemoveAutoScalingPolicyInput.isa = isa;
})(RemoveAutoScalingPolicyInput = exports.RemoveAutoScalingPolicyInput || (exports.RemoveAutoScalingPolicyInput = {}));
var RemoveAutoScalingPolicyOutput;
(function (RemoveAutoScalingPolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveAutoScalingPolicyOutput");
    }
    RemoveAutoScalingPolicyOutput.isa = isa;
})(RemoveAutoScalingPolicyOutput = exports.RemoveAutoScalingPolicyOutput || (exports.RemoveAutoScalingPolicyOutput = {}));
var RemoveTagsInput;
(function (RemoveTagsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsInput");
    }
    RemoveTagsInput.isa = isa;
})(RemoveTagsInput = exports.RemoveTagsInput || (exports.RemoveTagsInput = {}));
var RemoveTagsOutput;
(function (RemoveTagsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsOutput");
    }
    RemoveTagsOutput.isa = isa;
})(RemoveTagsOutput = exports.RemoveTagsOutput || (exports.RemoveTagsOutput = {}));
var RepoUpgradeOnBoot;
(function (RepoUpgradeOnBoot) {
    RepoUpgradeOnBoot["NONE"] = "NONE";
    RepoUpgradeOnBoot["SECURITY"] = "SECURITY";
})(RepoUpgradeOnBoot = exports.RepoUpgradeOnBoot || (exports.RepoUpgradeOnBoot = {}));
var RunJobFlowInput;
(function (RunJobFlowInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RunJobFlowInput");
    }
    RunJobFlowInput.isa = isa;
})(RunJobFlowInput = exports.RunJobFlowInput || (exports.RunJobFlowInput = {}));
var RunJobFlowOutput;
(function (RunJobFlowOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RunJobFlowOutput");
    }
    RunJobFlowOutput.isa = isa;
})(RunJobFlowOutput = exports.RunJobFlowOutput || (exports.RunJobFlowOutput = {}));
var ScaleDownBehavior;
(function (ScaleDownBehavior) {
    ScaleDownBehavior["TERMINATE_AT_INSTANCE_HOUR"] = "TERMINATE_AT_INSTANCE_HOUR";
    ScaleDownBehavior["TERMINATE_AT_TASK_COMPLETION"] = "TERMINATE_AT_TASK_COMPLETION";
})(ScaleDownBehavior = exports.ScaleDownBehavior || (exports.ScaleDownBehavior = {}));
var ScalingAction;
(function (ScalingAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalingAction");
    }
    ScalingAction.isa = isa;
})(ScalingAction = exports.ScalingAction || (exports.ScalingAction = {}));
var ScalingConstraints;
(function (ScalingConstraints) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalingConstraints");
    }
    ScalingConstraints.isa = isa;
})(ScalingConstraints = exports.ScalingConstraints || (exports.ScalingConstraints = {}));
var ScalingRule;
(function (ScalingRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalingRule");
    }
    ScalingRule.isa = isa;
})(ScalingRule = exports.ScalingRule || (exports.ScalingRule = {}));
var ScalingTrigger;
(function (ScalingTrigger) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalingTrigger");
    }
    ScalingTrigger.isa = isa;
})(ScalingTrigger = exports.ScalingTrigger || (exports.ScalingTrigger = {}));
var ScriptBootstrapActionConfig;
(function (ScriptBootstrapActionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScriptBootstrapActionConfig");
    }
    ScriptBootstrapActionConfig.isa = isa;
})(ScriptBootstrapActionConfig = exports.ScriptBootstrapActionConfig || (exports.ScriptBootstrapActionConfig = {}));
var SecurityConfigurationSummary;
(function (SecurityConfigurationSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "SecurityConfigurationSummary");
    }
    SecurityConfigurationSummary.isa = isa;
})(SecurityConfigurationSummary = exports.SecurityConfigurationSummary || (exports.SecurityConfigurationSummary = {}));
var SetTerminationProtectionInput;
(function (SetTerminationProtectionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetTerminationProtectionInput");
    }
    SetTerminationProtectionInput.isa = isa;
})(SetTerminationProtectionInput = exports.SetTerminationProtectionInput || (exports.SetTerminationProtectionInput = {}));
var SetVisibleToAllUsersInput;
(function (SetVisibleToAllUsersInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetVisibleToAllUsersInput");
    }
    SetVisibleToAllUsersInput.isa = isa;
})(SetVisibleToAllUsersInput = exports.SetVisibleToAllUsersInput || (exports.SetVisibleToAllUsersInput = {}));
var ShrinkPolicy;
(function (ShrinkPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "ShrinkPolicy");
    }
    ShrinkPolicy.isa = isa;
})(ShrinkPolicy = exports.ShrinkPolicy || (exports.ShrinkPolicy = {}));
var SimpleScalingPolicyConfiguration;
(function (SimpleScalingPolicyConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "SimpleScalingPolicyConfiguration");
    }
    SimpleScalingPolicyConfiguration.isa = isa;
})(SimpleScalingPolicyConfiguration = exports.SimpleScalingPolicyConfiguration || (exports.SimpleScalingPolicyConfiguration = {}));
var SpotProvisioningSpecification;
(function (SpotProvisioningSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "SpotProvisioningSpecification");
    }
    SpotProvisioningSpecification.isa = isa;
})(SpotProvisioningSpecification = exports.SpotProvisioningSpecification || (exports.SpotProvisioningSpecification = {}));
var Statistic;
(function (Statistic) {
    Statistic["AVERAGE"] = "AVERAGE";
    Statistic["MAXIMUM"] = "MAXIMUM";
    Statistic["MINIMUM"] = "MINIMUM";
    Statistic["SAMPLE_COUNT"] = "SAMPLE_COUNT";
    Statistic["SUM"] = "SUM";
})(Statistic = exports.Statistic || (exports.Statistic = {}));
var Step;
(function (Step) {
    function isa(o) {
        return smithy_client_1.isa(o, "Step");
    }
    Step.isa = isa;
})(Step = exports.Step || (exports.Step = {}));
var StepConfig;
(function (StepConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "StepConfig");
    }
    StepConfig.isa = isa;
})(StepConfig = exports.StepConfig || (exports.StepConfig = {}));
var StepDetail;
(function (StepDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "StepDetail");
    }
    StepDetail.isa = isa;
})(StepDetail = exports.StepDetail || (exports.StepDetail = {}));
var StepExecutionStatusDetail;
(function (StepExecutionStatusDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "StepExecutionStatusDetail");
    }
    StepExecutionStatusDetail.isa = isa;
})(StepExecutionStatusDetail = exports.StepExecutionStatusDetail || (exports.StepExecutionStatusDetail = {}));
var StepState;
(function (StepState) {
    StepState["CANCELLED"] = "CANCELLED";
    StepState["CANCEL_PENDING"] = "CANCEL_PENDING";
    StepState["COMPLETED"] = "COMPLETED";
    StepState["FAILED"] = "FAILED";
    StepState["INTERRUPTED"] = "INTERRUPTED";
    StepState["PENDING"] = "PENDING";
    StepState["RUNNING"] = "RUNNING";
})(StepState = exports.StepState || (exports.StepState = {}));
var StepStateChangeReason;
(function (StepStateChangeReason) {
    function isa(o) {
        return smithy_client_1.isa(o, "StepStateChangeReason");
    }
    StepStateChangeReason.isa = isa;
})(StepStateChangeReason = exports.StepStateChangeReason || (exports.StepStateChangeReason = {}));
var StepStatus;
(function (StepStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "StepStatus");
    }
    StepStatus.isa = isa;
})(StepStatus = exports.StepStatus || (exports.StepStatus = {}));
var StepSummary;
(function (StepSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "StepSummary");
    }
    StepSummary.isa = isa;
})(StepSummary = exports.StepSummary || (exports.StepSummary = {}));
var StepTimeline;
(function (StepTimeline) {
    function isa(o) {
        return smithy_client_1.isa(o, "StepTimeline");
    }
    StepTimeline.isa = isa;
})(StepTimeline = exports.StepTimeline || (exports.StepTimeline = {}));
var SupportedProductConfig;
(function (SupportedProductConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "SupportedProductConfig");
    }
    SupportedProductConfig.isa = isa;
})(SupportedProductConfig = exports.SupportedProductConfig || (exports.SupportedProductConfig = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TerminateJobFlowsInput;
(function (TerminateJobFlowsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminateJobFlowsInput");
    }
    TerminateJobFlowsInput.isa = isa;
})(TerminateJobFlowsInput = exports.TerminateJobFlowsInput || (exports.TerminateJobFlowsInput = {}));
var Unit;
(function (Unit) {
    Unit["BITS"] = "BITS";
    Unit["BITS_PER_SECOND"] = "BITS_PER_SECOND";
    Unit["BYTES"] = "BYTES";
    Unit["BYTES_PER_SECOND"] = "BYTES_PER_SECOND";
    Unit["COUNT"] = "COUNT";
    Unit["COUNT_PER_SECOND"] = "COUNT_PER_SECOND";
    Unit["GIGA_BITS"] = "GIGA_BITS";
    Unit["GIGA_BITS_PER_SECOND"] = "GIGA_BITS_PER_SECOND";
    Unit["GIGA_BYTES"] = "GIGA_BYTES";
    Unit["GIGA_BYTES_PER_SECOND"] = "GIGA_BYTES_PER_SECOND";
    Unit["KILO_BITS"] = "KILO_BITS";
    Unit["KILO_BITS_PER_SECOND"] = "KILO_BITS_PER_SECOND";
    Unit["KILO_BYTES"] = "KILO_BYTES";
    Unit["KILO_BYTES_PER_SECOND"] = "KILO_BYTES_PER_SECOND";
    Unit["MEGA_BITS"] = "MEGA_BITS";
    Unit["MEGA_BITS_PER_SECOND"] = "MEGA_BITS_PER_SECOND";
    Unit["MEGA_BYTES"] = "MEGA_BYTES";
    Unit["MEGA_BYTES_PER_SECOND"] = "MEGA_BYTES_PER_SECOND";
    Unit["MICRO_SECONDS"] = "MICRO_SECONDS";
    Unit["MILLI_SECONDS"] = "MILLI_SECONDS";
    Unit["NONE"] = "NONE";
    Unit["PERCENT"] = "PERCENT";
    Unit["SECONDS"] = "SECONDS";
    Unit["TERA_BITS"] = "TERA_BITS";
    Unit["TERA_BITS_PER_SECOND"] = "TERA_BITS_PER_SECOND";
    Unit["TERA_BYTES"] = "TERA_BYTES";
    Unit["TERA_BYTES_PER_SECOND"] = "TERA_BYTES_PER_SECOND";
})(Unit = exports.Unit || (exports.Unit = {}));
var VolumeSpecification;
(function (VolumeSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "VolumeSpecification");
    }
    VolumeSpecification.isa = isa;
})(VolumeSpecification = exports.VolumeSpecification || (exports.VolumeSpecification = {}));
//# sourceMappingURL=index.js.map