"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcceptMatchInput;
(function (AcceptMatchInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcceptMatchInput");
    }
    AcceptMatchInput.isa = isa;
})(AcceptMatchInput = exports.AcceptMatchInput || (exports.AcceptMatchInput = {}));
var AcceptMatchOutput;
(function (AcceptMatchOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcceptMatchOutput");
    }
    AcceptMatchOutput.isa = isa;
})(AcceptMatchOutput = exports.AcceptMatchOutput || (exports.AcceptMatchOutput = {}));
var Alias;
(function (Alias) {
    function isa(o) {
        return smithy_client_1.isa(o, "Alias");
    }
    Alias.isa = isa;
})(Alias = exports.Alias || (exports.Alias = {}));
var AttributeValue;
(function (AttributeValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttributeValue");
    }
    AttributeValue.isa = isa;
})(AttributeValue = exports.AttributeValue || (exports.AttributeValue = {}));
var AwsCredentials;
(function (AwsCredentials) {
    function isa(o) {
        return smithy_client_1.isa(o, "AwsCredentials");
    }
    AwsCredentials.isa = isa;
})(AwsCredentials = exports.AwsCredentials || (exports.AwsCredentials = {}));
var BackfillMode;
(function (BackfillMode) {
    BackfillMode["AUTOMATIC"] = "AUTOMATIC";
    BackfillMode["MANUAL"] = "MANUAL";
})(BackfillMode = exports.BackfillMode || (exports.BackfillMode = {}));
var Build;
(function (Build) {
    function isa(o) {
        return smithy_client_1.isa(o, "Build");
    }
    Build.isa = isa;
})(Build = exports.Build || (exports.Build = {}));
var BuildStatus;
(function (BuildStatus) {
    BuildStatus["FAILED"] = "FAILED";
    BuildStatus["INITIALIZED"] = "INITIALIZED";
    BuildStatus["READY"] = "READY";
})(BuildStatus = exports.BuildStatus || (exports.BuildStatus = {}));
var CertificateConfiguration;
(function (CertificateConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateConfiguration");
    }
    CertificateConfiguration.isa = isa;
})(CertificateConfiguration = exports.CertificateConfiguration || (exports.CertificateConfiguration = {}));
var CertificateType;
(function (CertificateType) {
    CertificateType["Disabled"] = "DISABLED";
    CertificateType["Generated"] = "GENERATED";
})(CertificateType = exports.CertificateType || (exports.CertificateType = {}));
var ComparisonOperatorType;
(function (ComparisonOperatorType) {
    ComparisonOperatorType["GreaterThanOrEqualToThreshold"] = "GreaterThanOrEqualToThreshold";
    ComparisonOperatorType["GreaterThanThreshold"] = "GreaterThanThreshold";
    ComparisonOperatorType["LessThanOrEqualToThreshold"] = "LessThanOrEqualToThreshold";
    ComparisonOperatorType["LessThanThreshold"] = "LessThanThreshold";
})(ComparisonOperatorType = exports.ComparisonOperatorType || (exports.ComparisonOperatorType = {}));
var ConflictException;
(function (ConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConflictException");
    }
    ConflictException.isa = isa;
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateAliasInput;
(function (CreateAliasInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAliasInput");
    }
    CreateAliasInput.isa = isa;
})(CreateAliasInput = exports.CreateAliasInput || (exports.CreateAliasInput = {}));
var CreateAliasOutput;
(function (CreateAliasOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAliasOutput");
    }
    CreateAliasOutput.isa = isa;
})(CreateAliasOutput = exports.CreateAliasOutput || (exports.CreateAliasOutput = {}));
var CreateBuildInput;
(function (CreateBuildInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBuildInput");
    }
    CreateBuildInput.isa = isa;
})(CreateBuildInput = exports.CreateBuildInput || (exports.CreateBuildInput = {}));
var CreateBuildOutput;
(function (CreateBuildOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBuildOutput");
    }
    CreateBuildOutput.isa = isa;
})(CreateBuildOutput = exports.CreateBuildOutput || (exports.CreateBuildOutput = {}));
var CreateFleetInput;
(function (CreateFleetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFleetInput");
    }
    CreateFleetInput.isa = isa;
})(CreateFleetInput = exports.CreateFleetInput || (exports.CreateFleetInput = {}));
var CreateFleetOutput;
(function (CreateFleetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFleetOutput");
    }
    CreateFleetOutput.isa = isa;
})(CreateFleetOutput = exports.CreateFleetOutput || (exports.CreateFleetOutput = {}));
var CreateGameSessionInput;
(function (CreateGameSessionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGameSessionInput");
    }
    CreateGameSessionInput.isa = isa;
})(CreateGameSessionInput = exports.CreateGameSessionInput || (exports.CreateGameSessionInput = {}));
var CreateGameSessionOutput;
(function (CreateGameSessionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGameSessionOutput");
    }
    CreateGameSessionOutput.isa = isa;
})(CreateGameSessionOutput = exports.CreateGameSessionOutput || (exports.CreateGameSessionOutput = {}));
var CreateGameSessionQueueInput;
(function (CreateGameSessionQueueInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGameSessionQueueInput");
    }
    CreateGameSessionQueueInput.isa = isa;
})(CreateGameSessionQueueInput = exports.CreateGameSessionQueueInput || (exports.CreateGameSessionQueueInput = {}));
var CreateGameSessionQueueOutput;
(function (CreateGameSessionQueueOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGameSessionQueueOutput");
    }
    CreateGameSessionQueueOutput.isa = isa;
})(CreateGameSessionQueueOutput = exports.CreateGameSessionQueueOutput || (exports.CreateGameSessionQueueOutput = {}));
var CreateMatchmakingConfigurationInput;
(function (CreateMatchmakingConfigurationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMatchmakingConfigurationInput");
    }
    CreateMatchmakingConfigurationInput.isa = isa;
})(CreateMatchmakingConfigurationInput = exports.CreateMatchmakingConfigurationInput || (exports.CreateMatchmakingConfigurationInput = {}));
var CreateMatchmakingConfigurationOutput;
(function (CreateMatchmakingConfigurationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMatchmakingConfigurationOutput");
    }
    CreateMatchmakingConfigurationOutput.isa = isa;
})(CreateMatchmakingConfigurationOutput = exports.CreateMatchmakingConfigurationOutput || (exports.CreateMatchmakingConfigurationOutput = {}));
var CreateMatchmakingRuleSetInput;
(function (CreateMatchmakingRuleSetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMatchmakingRuleSetInput");
    }
    CreateMatchmakingRuleSetInput.isa = isa;
})(CreateMatchmakingRuleSetInput = exports.CreateMatchmakingRuleSetInput || (exports.CreateMatchmakingRuleSetInput = {}));
var CreateMatchmakingRuleSetOutput;
(function (CreateMatchmakingRuleSetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMatchmakingRuleSetOutput");
    }
    CreateMatchmakingRuleSetOutput.isa = isa;
})(CreateMatchmakingRuleSetOutput = exports.CreateMatchmakingRuleSetOutput || (exports.CreateMatchmakingRuleSetOutput = {}));
var CreatePlayerSessionInput;
(function (CreatePlayerSessionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePlayerSessionInput");
    }
    CreatePlayerSessionInput.isa = isa;
})(CreatePlayerSessionInput = exports.CreatePlayerSessionInput || (exports.CreatePlayerSessionInput = {}));
var CreatePlayerSessionOutput;
(function (CreatePlayerSessionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePlayerSessionOutput");
    }
    CreatePlayerSessionOutput.isa = isa;
})(CreatePlayerSessionOutput = exports.CreatePlayerSessionOutput || (exports.CreatePlayerSessionOutput = {}));
var CreatePlayerSessionsInput;
(function (CreatePlayerSessionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePlayerSessionsInput");
    }
    CreatePlayerSessionsInput.isa = isa;
})(CreatePlayerSessionsInput = exports.CreatePlayerSessionsInput || (exports.CreatePlayerSessionsInput = {}));
var CreatePlayerSessionsOutput;
(function (CreatePlayerSessionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePlayerSessionsOutput");
    }
    CreatePlayerSessionsOutput.isa = isa;
})(CreatePlayerSessionsOutput = exports.CreatePlayerSessionsOutput || (exports.CreatePlayerSessionsOutput = {}));
var CreateScriptInput;
(function (CreateScriptInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateScriptInput");
    }
    CreateScriptInput.isa = isa;
})(CreateScriptInput = exports.CreateScriptInput || (exports.CreateScriptInput = {}));
var CreateScriptOutput;
(function (CreateScriptOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateScriptOutput");
    }
    CreateScriptOutput.isa = isa;
})(CreateScriptOutput = exports.CreateScriptOutput || (exports.CreateScriptOutput = {}));
var CreateVpcPeeringAuthorizationInput;
(function (CreateVpcPeeringAuthorizationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVpcPeeringAuthorizationInput");
    }
    CreateVpcPeeringAuthorizationInput.isa = isa;
})(CreateVpcPeeringAuthorizationInput = exports.CreateVpcPeeringAuthorizationInput || (exports.CreateVpcPeeringAuthorizationInput = {}));
var CreateVpcPeeringAuthorizationOutput;
(function (CreateVpcPeeringAuthorizationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVpcPeeringAuthorizationOutput");
    }
    CreateVpcPeeringAuthorizationOutput.isa = isa;
})(CreateVpcPeeringAuthorizationOutput = exports.CreateVpcPeeringAuthorizationOutput || (exports.CreateVpcPeeringAuthorizationOutput = {}));
var CreateVpcPeeringConnectionInput;
(function (CreateVpcPeeringConnectionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVpcPeeringConnectionInput");
    }
    CreateVpcPeeringConnectionInput.isa = isa;
})(CreateVpcPeeringConnectionInput = exports.CreateVpcPeeringConnectionInput || (exports.CreateVpcPeeringConnectionInput = {}));
var CreateVpcPeeringConnectionOutput;
(function (CreateVpcPeeringConnectionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVpcPeeringConnectionOutput");
    }
    CreateVpcPeeringConnectionOutput.isa = isa;
})(CreateVpcPeeringConnectionOutput = exports.CreateVpcPeeringConnectionOutput || (exports.CreateVpcPeeringConnectionOutput = {}));
var DeleteAliasInput;
(function (DeleteAliasInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAliasInput");
    }
    DeleteAliasInput.isa = isa;
})(DeleteAliasInput = exports.DeleteAliasInput || (exports.DeleteAliasInput = {}));
var DeleteBuildInput;
(function (DeleteBuildInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBuildInput");
    }
    DeleteBuildInput.isa = isa;
})(DeleteBuildInput = exports.DeleteBuildInput || (exports.DeleteBuildInput = {}));
var DeleteFleetInput;
(function (DeleteFleetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFleetInput");
    }
    DeleteFleetInput.isa = isa;
})(DeleteFleetInput = exports.DeleteFleetInput || (exports.DeleteFleetInput = {}));
var DeleteGameSessionQueueInput;
(function (DeleteGameSessionQueueInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGameSessionQueueInput");
    }
    DeleteGameSessionQueueInput.isa = isa;
})(DeleteGameSessionQueueInput = exports.DeleteGameSessionQueueInput || (exports.DeleteGameSessionQueueInput = {}));
var DeleteGameSessionQueueOutput;
(function (DeleteGameSessionQueueOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGameSessionQueueOutput");
    }
    DeleteGameSessionQueueOutput.isa = isa;
})(DeleteGameSessionQueueOutput = exports.DeleteGameSessionQueueOutput || (exports.DeleteGameSessionQueueOutput = {}));
var DeleteMatchmakingConfigurationInput;
(function (DeleteMatchmakingConfigurationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMatchmakingConfigurationInput");
    }
    DeleteMatchmakingConfigurationInput.isa = isa;
})(DeleteMatchmakingConfigurationInput = exports.DeleteMatchmakingConfigurationInput || (exports.DeleteMatchmakingConfigurationInput = {}));
var DeleteMatchmakingConfigurationOutput;
(function (DeleteMatchmakingConfigurationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMatchmakingConfigurationOutput");
    }
    DeleteMatchmakingConfigurationOutput.isa = isa;
})(DeleteMatchmakingConfigurationOutput = exports.DeleteMatchmakingConfigurationOutput || (exports.DeleteMatchmakingConfigurationOutput = {}));
var DeleteMatchmakingRuleSetInput;
(function (DeleteMatchmakingRuleSetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMatchmakingRuleSetInput");
    }
    DeleteMatchmakingRuleSetInput.isa = isa;
})(DeleteMatchmakingRuleSetInput = exports.DeleteMatchmakingRuleSetInput || (exports.DeleteMatchmakingRuleSetInput = {}));
var DeleteMatchmakingRuleSetOutput;
(function (DeleteMatchmakingRuleSetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMatchmakingRuleSetOutput");
    }
    DeleteMatchmakingRuleSetOutput.isa = isa;
})(DeleteMatchmakingRuleSetOutput = exports.DeleteMatchmakingRuleSetOutput || (exports.DeleteMatchmakingRuleSetOutput = {}));
var DeleteScalingPolicyInput;
(function (DeleteScalingPolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteScalingPolicyInput");
    }
    DeleteScalingPolicyInput.isa = isa;
})(DeleteScalingPolicyInput = exports.DeleteScalingPolicyInput || (exports.DeleteScalingPolicyInput = {}));
var DeleteScriptInput;
(function (DeleteScriptInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteScriptInput");
    }
    DeleteScriptInput.isa = isa;
})(DeleteScriptInput = exports.DeleteScriptInput || (exports.DeleteScriptInput = {}));
var DeleteVpcPeeringAuthorizationInput;
(function (DeleteVpcPeeringAuthorizationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVpcPeeringAuthorizationInput");
    }
    DeleteVpcPeeringAuthorizationInput.isa = isa;
})(DeleteVpcPeeringAuthorizationInput = exports.DeleteVpcPeeringAuthorizationInput || (exports.DeleteVpcPeeringAuthorizationInput = {}));
var DeleteVpcPeeringAuthorizationOutput;
(function (DeleteVpcPeeringAuthorizationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVpcPeeringAuthorizationOutput");
    }
    DeleteVpcPeeringAuthorizationOutput.isa = isa;
})(DeleteVpcPeeringAuthorizationOutput = exports.DeleteVpcPeeringAuthorizationOutput || (exports.DeleteVpcPeeringAuthorizationOutput = {}));
var DeleteVpcPeeringConnectionInput;
(function (DeleteVpcPeeringConnectionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVpcPeeringConnectionInput");
    }
    DeleteVpcPeeringConnectionInput.isa = isa;
})(DeleteVpcPeeringConnectionInput = exports.DeleteVpcPeeringConnectionInput || (exports.DeleteVpcPeeringConnectionInput = {}));
var DeleteVpcPeeringConnectionOutput;
(function (DeleteVpcPeeringConnectionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVpcPeeringConnectionOutput");
    }
    DeleteVpcPeeringConnectionOutput.isa = isa;
})(DeleteVpcPeeringConnectionOutput = exports.DeleteVpcPeeringConnectionOutput || (exports.DeleteVpcPeeringConnectionOutput = {}));
var DescribeAliasInput;
(function (DescribeAliasInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAliasInput");
    }
    DescribeAliasInput.isa = isa;
})(DescribeAliasInput = exports.DescribeAliasInput || (exports.DescribeAliasInput = {}));
var DescribeAliasOutput;
(function (DescribeAliasOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAliasOutput");
    }
    DescribeAliasOutput.isa = isa;
})(DescribeAliasOutput = exports.DescribeAliasOutput || (exports.DescribeAliasOutput = {}));
var DescribeBuildInput;
(function (DescribeBuildInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBuildInput");
    }
    DescribeBuildInput.isa = isa;
})(DescribeBuildInput = exports.DescribeBuildInput || (exports.DescribeBuildInput = {}));
var DescribeBuildOutput;
(function (DescribeBuildOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBuildOutput");
    }
    DescribeBuildOutput.isa = isa;
})(DescribeBuildOutput = exports.DescribeBuildOutput || (exports.DescribeBuildOutput = {}));
var DescribeEC2InstanceLimitsInput;
(function (DescribeEC2InstanceLimitsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEC2InstanceLimitsInput");
    }
    DescribeEC2InstanceLimitsInput.isa = isa;
})(DescribeEC2InstanceLimitsInput = exports.DescribeEC2InstanceLimitsInput || (exports.DescribeEC2InstanceLimitsInput = {}));
var DescribeEC2InstanceLimitsOutput;
(function (DescribeEC2InstanceLimitsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEC2InstanceLimitsOutput");
    }
    DescribeEC2InstanceLimitsOutput.isa = isa;
})(DescribeEC2InstanceLimitsOutput = exports.DescribeEC2InstanceLimitsOutput || (exports.DescribeEC2InstanceLimitsOutput = {}));
var DescribeFleetAttributesInput;
(function (DescribeFleetAttributesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFleetAttributesInput");
    }
    DescribeFleetAttributesInput.isa = isa;
})(DescribeFleetAttributesInput = exports.DescribeFleetAttributesInput || (exports.DescribeFleetAttributesInput = {}));
var DescribeFleetAttributesOutput;
(function (DescribeFleetAttributesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFleetAttributesOutput");
    }
    DescribeFleetAttributesOutput.isa = isa;
})(DescribeFleetAttributesOutput = exports.DescribeFleetAttributesOutput || (exports.DescribeFleetAttributesOutput = {}));
var DescribeFleetCapacityInput;
(function (DescribeFleetCapacityInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFleetCapacityInput");
    }
    DescribeFleetCapacityInput.isa = isa;
})(DescribeFleetCapacityInput = exports.DescribeFleetCapacityInput || (exports.DescribeFleetCapacityInput = {}));
var DescribeFleetCapacityOutput;
(function (DescribeFleetCapacityOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFleetCapacityOutput");
    }
    DescribeFleetCapacityOutput.isa = isa;
})(DescribeFleetCapacityOutput = exports.DescribeFleetCapacityOutput || (exports.DescribeFleetCapacityOutput = {}));
var DescribeFleetEventsInput;
(function (DescribeFleetEventsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFleetEventsInput");
    }
    DescribeFleetEventsInput.isa = isa;
})(DescribeFleetEventsInput = exports.DescribeFleetEventsInput || (exports.DescribeFleetEventsInput = {}));
var DescribeFleetEventsOutput;
(function (DescribeFleetEventsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFleetEventsOutput");
    }
    DescribeFleetEventsOutput.isa = isa;
})(DescribeFleetEventsOutput = exports.DescribeFleetEventsOutput || (exports.DescribeFleetEventsOutput = {}));
var DescribeFleetPortSettingsInput;
(function (DescribeFleetPortSettingsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFleetPortSettingsInput");
    }
    DescribeFleetPortSettingsInput.isa = isa;
})(DescribeFleetPortSettingsInput = exports.DescribeFleetPortSettingsInput || (exports.DescribeFleetPortSettingsInput = {}));
var DescribeFleetPortSettingsOutput;
(function (DescribeFleetPortSettingsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFleetPortSettingsOutput");
    }
    DescribeFleetPortSettingsOutput.isa = isa;
})(DescribeFleetPortSettingsOutput = exports.DescribeFleetPortSettingsOutput || (exports.DescribeFleetPortSettingsOutput = {}));
var DescribeFleetUtilizationInput;
(function (DescribeFleetUtilizationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFleetUtilizationInput");
    }
    DescribeFleetUtilizationInput.isa = isa;
})(DescribeFleetUtilizationInput = exports.DescribeFleetUtilizationInput || (exports.DescribeFleetUtilizationInput = {}));
var DescribeFleetUtilizationOutput;
(function (DescribeFleetUtilizationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFleetUtilizationOutput");
    }
    DescribeFleetUtilizationOutput.isa = isa;
})(DescribeFleetUtilizationOutput = exports.DescribeFleetUtilizationOutput || (exports.DescribeFleetUtilizationOutput = {}));
var DescribeGameSessionDetailsInput;
(function (DescribeGameSessionDetailsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeGameSessionDetailsInput");
    }
    DescribeGameSessionDetailsInput.isa = isa;
})(DescribeGameSessionDetailsInput = exports.DescribeGameSessionDetailsInput || (exports.DescribeGameSessionDetailsInput = {}));
var DescribeGameSessionDetailsOutput;
(function (DescribeGameSessionDetailsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeGameSessionDetailsOutput");
    }
    DescribeGameSessionDetailsOutput.isa = isa;
})(DescribeGameSessionDetailsOutput = exports.DescribeGameSessionDetailsOutput || (exports.DescribeGameSessionDetailsOutput = {}));
var DescribeGameSessionPlacementInput;
(function (DescribeGameSessionPlacementInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeGameSessionPlacementInput");
    }
    DescribeGameSessionPlacementInput.isa = isa;
})(DescribeGameSessionPlacementInput = exports.DescribeGameSessionPlacementInput || (exports.DescribeGameSessionPlacementInput = {}));
var DescribeGameSessionPlacementOutput;
(function (DescribeGameSessionPlacementOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeGameSessionPlacementOutput");
    }
    DescribeGameSessionPlacementOutput.isa = isa;
})(DescribeGameSessionPlacementOutput = exports.DescribeGameSessionPlacementOutput || (exports.DescribeGameSessionPlacementOutput = {}));
var DescribeGameSessionQueuesInput;
(function (DescribeGameSessionQueuesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeGameSessionQueuesInput");
    }
    DescribeGameSessionQueuesInput.isa = isa;
})(DescribeGameSessionQueuesInput = exports.DescribeGameSessionQueuesInput || (exports.DescribeGameSessionQueuesInput = {}));
var DescribeGameSessionQueuesOutput;
(function (DescribeGameSessionQueuesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeGameSessionQueuesOutput");
    }
    DescribeGameSessionQueuesOutput.isa = isa;
})(DescribeGameSessionQueuesOutput = exports.DescribeGameSessionQueuesOutput || (exports.DescribeGameSessionQueuesOutput = {}));
var DescribeGameSessionsInput;
(function (DescribeGameSessionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeGameSessionsInput");
    }
    DescribeGameSessionsInput.isa = isa;
})(DescribeGameSessionsInput = exports.DescribeGameSessionsInput || (exports.DescribeGameSessionsInput = {}));
var DescribeGameSessionsOutput;
(function (DescribeGameSessionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeGameSessionsOutput");
    }
    DescribeGameSessionsOutput.isa = isa;
})(DescribeGameSessionsOutput = exports.DescribeGameSessionsOutput || (exports.DescribeGameSessionsOutput = {}));
var DescribeInstancesInput;
(function (DescribeInstancesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInstancesInput");
    }
    DescribeInstancesInput.isa = isa;
})(DescribeInstancesInput = exports.DescribeInstancesInput || (exports.DescribeInstancesInput = {}));
var DescribeInstancesOutput;
(function (DescribeInstancesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInstancesOutput");
    }
    DescribeInstancesOutput.isa = isa;
})(DescribeInstancesOutput = exports.DescribeInstancesOutput || (exports.DescribeInstancesOutput = {}));
var DescribeMatchmakingConfigurationsInput;
(function (DescribeMatchmakingConfigurationsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMatchmakingConfigurationsInput");
    }
    DescribeMatchmakingConfigurationsInput.isa = isa;
})(DescribeMatchmakingConfigurationsInput = exports.DescribeMatchmakingConfigurationsInput || (exports.DescribeMatchmakingConfigurationsInput = {}));
var DescribeMatchmakingConfigurationsOutput;
(function (DescribeMatchmakingConfigurationsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMatchmakingConfigurationsOutput");
    }
    DescribeMatchmakingConfigurationsOutput.isa = isa;
})(DescribeMatchmakingConfigurationsOutput = exports.DescribeMatchmakingConfigurationsOutput || (exports.DescribeMatchmakingConfigurationsOutput = {}));
var DescribeMatchmakingInput;
(function (DescribeMatchmakingInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMatchmakingInput");
    }
    DescribeMatchmakingInput.isa = isa;
})(DescribeMatchmakingInput = exports.DescribeMatchmakingInput || (exports.DescribeMatchmakingInput = {}));
var DescribeMatchmakingOutput;
(function (DescribeMatchmakingOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMatchmakingOutput");
    }
    DescribeMatchmakingOutput.isa = isa;
})(DescribeMatchmakingOutput = exports.DescribeMatchmakingOutput || (exports.DescribeMatchmakingOutput = {}));
var DescribeMatchmakingRuleSetsInput;
(function (DescribeMatchmakingRuleSetsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMatchmakingRuleSetsInput");
    }
    DescribeMatchmakingRuleSetsInput.isa = isa;
})(DescribeMatchmakingRuleSetsInput = exports.DescribeMatchmakingRuleSetsInput || (exports.DescribeMatchmakingRuleSetsInput = {}));
var DescribeMatchmakingRuleSetsOutput;
(function (DescribeMatchmakingRuleSetsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMatchmakingRuleSetsOutput");
    }
    DescribeMatchmakingRuleSetsOutput.isa = isa;
})(DescribeMatchmakingRuleSetsOutput = exports.DescribeMatchmakingRuleSetsOutput || (exports.DescribeMatchmakingRuleSetsOutput = {}));
var DescribePlayerSessionsInput;
(function (DescribePlayerSessionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePlayerSessionsInput");
    }
    DescribePlayerSessionsInput.isa = isa;
})(DescribePlayerSessionsInput = exports.DescribePlayerSessionsInput || (exports.DescribePlayerSessionsInput = {}));
var DescribePlayerSessionsOutput;
(function (DescribePlayerSessionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePlayerSessionsOutput");
    }
    DescribePlayerSessionsOutput.isa = isa;
})(DescribePlayerSessionsOutput = exports.DescribePlayerSessionsOutput || (exports.DescribePlayerSessionsOutput = {}));
var DescribeRuntimeConfigurationInput;
(function (DescribeRuntimeConfigurationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRuntimeConfigurationInput");
    }
    DescribeRuntimeConfigurationInput.isa = isa;
})(DescribeRuntimeConfigurationInput = exports.DescribeRuntimeConfigurationInput || (exports.DescribeRuntimeConfigurationInput = {}));
var DescribeRuntimeConfigurationOutput;
(function (DescribeRuntimeConfigurationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRuntimeConfigurationOutput");
    }
    DescribeRuntimeConfigurationOutput.isa = isa;
})(DescribeRuntimeConfigurationOutput = exports.DescribeRuntimeConfigurationOutput || (exports.DescribeRuntimeConfigurationOutput = {}));
var DescribeScalingPoliciesInput;
(function (DescribeScalingPoliciesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScalingPoliciesInput");
    }
    DescribeScalingPoliciesInput.isa = isa;
})(DescribeScalingPoliciesInput = exports.DescribeScalingPoliciesInput || (exports.DescribeScalingPoliciesInput = {}));
var DescribeScalingPoliciesOutput;
(function (DescribeScalingPoliciesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScalingPoliciesOutput");
    }
    DescribeScalingPoliciesOutput.isa = isa;
})(DescribeScalingPoliciesOutput = exports.DescribeScalingPoliciesOutput || (exports.DescribeScalingPoliciesOutput = {}));
var DescribeScriptInput;
(function (DescribeScriptInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScriptInput");
    }
    DescribeScriptInput.isa = isa;
})(DescribeScriptInput = exports.DescribeScriptInput || (exports.DescribeScriptInput = {}));
var DescribeScriptOutput;
(function (DescribeScriptOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScriptOutput");
    }
    DescribeScriptOutput.isa = isa;
})(DescribeScriptOutput = exports.DescribeScriptOutput || (exports.DescribeScriptOutput = {}));
var DescribeVpcPeeringAuthorizationsInput;
(function (DescribeVpcPeeringAuthorizationsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeVpcPeeringAuthorizationsInput");
    }
    DescribeVpcPeeringAuthorizationsInput.isa = isa;
})(DescribeVpcPeeringAuthorizationsInput = exports.DescribeVpcPeeringAuthorizationsInput || (exports.DescribeVpcPeeringAuthorizationsInput = {}));
var DescribeVpcPeeringAuthorizationsOutput;
(function (DescribeVpcPeeringAuthorizationsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeVpcPeeringAuthorizationsOutput");
    }
    DescribeVpcPeeringAuthorizationsOutput.isa = isa;
})(DescribeVpcPeeringAuthorizationsOutput = exports.DescribeVpcPeeringAuthorizationsOutput || (exports.DescribeVpcPeeringAuthorizationsOutput = {}));
var DescribeVpcPeeringConnectionsInput;
(function (DescribeVpcPeeringConnectionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeVpcPeeringConnectionsInput");
    }
    DescribeVpcPeeringConnectionsInput.isa = isa;
})(DescribeVpcPeeringConnectionsInput = exports.DescribeVpcPeeringConnectionsInput || (exports.DescribeVpcPeeringConnectionsInput = {}));
var DescribeVpcPeeringConnectionsOutput;
(function (DescribeVpcPeeringConnectionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeVpcPeeringConnectionsOutput");
    }
    DescribeVpcPeeringConnectionsOutput.isa = isa;
})(DescribeVpcPeeringConnectionsOutput = exports.DescribeVpcPeeringConnectionsOutput || (exports.DescribeVpcPeeringConnectionsOutput = {}));
var DesiredPlayerSession;
(function (DesiredPlayerSession) {
    function isa(o) {
        return smithy_client_1.isa(o, "DesiredPlayerSession");
    }
    DesiredPlayerSession.isa = isa;
})(DesiredPlayerSession = exports.DesiredPlayerSession || (exports.DesiredPlayerSession = {}));
var EC2InstanceCounts;
(function (EC2InstanceCounts) {
    function isa(o) {
        return smithy_client_1.isa(o, "EC2InstanceCounts");
    }
    EC2InstanceCounts.isa = isa;
})(EC2InstanceCounts = exports.EC2InstanceCounts || (exports.EC2InstanceCounts = {}));
var EC2InstanceLimit;
(function (EC2InstanceLimit) {
    function isa(o) {
        return smithy_client_1.isa(o, "EC2InstanceLimit");
    }
    EC2InstanceLimit.isa = isa;
})(EC2InstanceLimit = exports.EC2InstanceLimit || (exports.EC2InstanceLimit = {}));
var Event;
(function (Event) {
    function isa(o) {
        return smithy_client_1.isa(o, "Event");
    }
    Event.isa = isa;
})(Event = exports.Event || (exports.Event = {}));
var EventCode;
(function (EventCode) {
    EventCode["FLEET_ACTIVATION_FAILED"] = "FLEET_ACTIVATION_FAILED";
    EventCode["FLEET_ACTIVATION_FAILED_NO_INSTANCES"] = "FLEET_ACTIVATION_FAILED_NO_INSTANCES";
    EventCode["FLEET_BINARY_DOWNLOAD_FAILED"] = "FLEET_BINARY_DOWNLOAD_FAILED";
    EventCode["FLEET_CREATED"] = "FLEET_CREATED";
    EventCode["FLEET_CREATION_EXTRACTING_BUILD"] = "FLEET_CREATION_EXTRACTING_BUILD";
    EventCode["FLEET_CREATION_RUNNING_INSTALLER"] = "FLEET_CREATION_RUNNING_INSTALLER";
    EventCode["FLEET_CREATION_VALIDATING_RUNTIME_CONFIG"] = "FLEET_CREATION_VALIDATING_RUNTIME_CONFIG";
    EventCode["FLEET_DELETED"] = "FLEET_DELETED";
    EventCode["FLEET_INITIALIZATION_FAILED"] = "FLEET_INITIALIZATION_FAILED";
    EventCode["FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED"] = "FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED";
    EventCode["FLEET_SCALING_EVENT"] = "FLEET_SCALING_EVENT";
    EventCode["FLEET_STATE_ACTIVATING"] = "FLEET_STATE_ACTIVATING";
    EventCode["FLEET_STATE_ACTIVE"] = "FLEET_STATE_ACTIVE";
    EventCode["FLEET_STATE_BUILDING"] = "FLEET_STATE_BUILDING";
    EventCode["FLEET_STATE_DOWNLOADING"] = "FLEET_STATE_DOWNLOADING";
    EventCode["FLEET_STATE_ERROR"] = "FLEET_STATE_ERROR";
    EventCode["FLEET_STATE_VALIDATING"] = "FLEET_STATE_VALIDATING";
    EventCode["FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE"] = "FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE";
    EventCode["FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND"] = "FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND";
    EventCode["FLEET_VALIDATION_TIMED_OUT"] = "FLEET_VALIDATION_TIMED_OUT";
    EventCode["FLEET_VPC_PEERING_DELETED"] = "FLEET_VPC_PEERING_DELETED";
    EventCode["FLEET_VPC_PEERING_FAILED"] = "FLEET_VPC_PEERING_FAILED";
    EventCode["FLEET_VPC_PEERING_SUCCEEDED"] = "FLEET_VPC_PEERING_SUCCEEDED";
    EventCode["GAME_SESSION_ACTIVATION_TIMEOUT"] = "GAME_SESSION_ACTIVATION_TIMEOUT";
    EventCode["GENERIC_EVENT"] = "GENERIC_EVENT";
    EventCode["INSTANCE_INTERRUPTED"] = "INSTANCE_INTERRUPTED";
    EventCode["SERVER_PROCESS_CRASHED"] = "SERVER_PROCESS_CRASHED";
    EventCode["SERVER_PROCESS_FORCE_TERMINATED"] = "SERVER_PROCESS_FORCE_TERMINATED";
    EventCode["SERVER_PROCESS_INVALID_PATH"] = "SERVER_PROCESS_INVALID_PATH";
    EventCode["SERVER_PROCESS_PROCESS_EXIT_TIMEOUT"] = "SERVER_PROCESS_PROCESS_EXIT_TIMEOUT";
    EventCode["SERVER_PROCESS_PROCESS_READY_TIMEOUT"] = "SERVER_PROCESS_PROCESS_READY_TIMEOUT";
    EventCode["SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT"] = "SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT";
    EventCode["SERVER_PROCESS_TERMINATED_UNHEALTHY"] = "SERVER_PROCESS_TERMINATED_UNHEALTHY";
})(EventCode = exports.EventCode || (exports.EventCode = {}));
var FleetAction;
(function (FleetAction) {
    FleetAction["AutoScaling"] = "AUTO_SCALING";
})(FleetAction = exports.FleetAction || (exports.FleetAction = {}));
var FleetAttributes;
(function (FleetAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "FleetAttributes");
    }
    FleetAttributes.isa = isa;
})(FleetAttributes = exports.FleetAttributes || (exports.FleetAttributes = {}));
var FleetCapacity;
(function (FleetCapacity) {
    function isa(o) {
        return smithy_client_1.isa(o, "FleetCapacity");
    }
    FleetCapacity.isa = isa;
})(FleetCapacity = exports.FleetCapacity || (exports.FleetCapacity = {}));
var FleetCapacityExceededException;
(function (FleetCapacityExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FleetCapacityExceededException");
    }
    FleetCapacityExceededException.isa = isa;
})(FleetCapacityExceededException = exports.FleetCapacityExceededException || (exports.FleetCapacityExceededException = {}));
var FleetStatus;
(function (FleetStatus) {
    FleetStatus["ACTIVATING"] = "ACTIVATING";
    FleetStatus["ACTIVE"] = "ACTIVE";
    FleetStatus["BUILDING"] = "BUILDING";
    FleetStatus["DELETING"] = "DELETING";
    FleetStatus["DOWNLOADING"] = "DOWNLOADING";
    FleetStatus["ERROR"] = "ERROR";
    FleetStatus["NEW"] = "NEW";
    FleetStatus["TERMINATED"] = "TERMINATED";
    FleetStatus["VALIDATING"] = "VALIDATING";
})(FleetStatus = exports.FleetStatus || (exports.FleetStatus = {}));
var FleetType;
(function (FleetType) {
    FleetType["OnDemand"] = "ON_DEMAND";
    FleetType["Spot"] = "SPOT";
})(FleetType = exports.FleetType || (exports.FleetType = {}));
var FleetUtilization;
(function (FleetUtilization) {
    function isa(o) {
        return smithy_client_1.isa(o, "FleetUtilization");
    }
    FleetUtilization.isa = isa;
})(FleetUtilization = exports.FleetUtilization || (exports.FleetUtilization = {}));
var GameProperty;
(function (GameProperty) {
    function isa(o) {
        return smithy_client_1.isa(o, "GameProperty");
    }
    GameProperty.isa = isa;
})(GameProperty = exports.GameProperty || (exports.GameProperty = {}));
var GameSession;
(function (GameSession) {
    function isa(o) {
        return smithy_client_1.isa(o, "GameSession");
    }
    GameSession.isa = isa;
})(GameSession = exports.GameSession || (exports.GameSession = {}));
var GameSessionConnectionInfo;
(function (GameSessionConnectionInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "GameSessionConnectionInfo");
    }
    GameSessionConnectionInfo.isa = isa;
})(GameSessionConnectionInfo = exports.GameSessionConnectionInfo || (exports.GameSessionConnectionInfo = {}));
var GameSessionDetail;
(function (GameSessionDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "GameSessionDetail");
    }
    GameSessionDetail.isa = isa;
})(GameSessionDetail = exports.GameSessionDetail || (exports.GameSessionDetail = {}));
var GameSessionFullException;
(function (GameSessionFullException) {
    function isa(o) {
        return smithy_client_1.isa(o, "GameSessionFullException");
    }
    GameSessionFullException.isa = isa;
})(GameSessionFullException = exports.GameSessionFullException || (exports.GameSessionFullException = {}));
var GameSessionPlacement;
(function (GameSessionPlacement) {
    function isa(o) {
        return smithy_client_1.isa(o, "GameSessionPlacement");
    }
    GameSessionPlacement.isa = isa;
})(GameSessionPlacement = exports.GameSessionPlacement || (exports.GameSessionPlacement = {}));
var GameSessionPlacementState;
(function (GameSessionPlacementState) {
    GameSessionPlacementState["CANCELLED"] = "CANCELLED";
    GameSessionPlacementState["FAILED"] = "FAILED";
    GameSessionPlacementState["FULFILLED"] = "FULFILLED";
    GameSessionPlacementState["PENDING"] = "PENDING";
    GameSessionPlacementState["TIMED_OUT"] = "TIMED_OUT";
})(GameSessionPlacementState = exports.GameSessionPlacementState || (exports.GameSessionPlacementState = {}));
var GameSessionQueue;
(function (GameSessionQueue) {
    function isa(o) {
        return smithy_client_1.isa(o, "GameSessionQueue");
    }
    GameSessionQueue.isa = isa;
})(GameSessionQueue = exports.GameSessionQueue || (exports.GameSessionQueue = {}));
var GameSessionQueueDestination;
(function (GameSessionQueueDestination) {
    function isa(o) {
        return smithy_client_1.isa(o, "GameSessionQueueDestination");
    }
    GameSessionQueueDestination.isa = isa;
})(GameSessionQueueDestination = exports.GameSessionQueueDestination || (exports.GameSessionQueueDestination = {}));
var GameSessionStatus;
(function (GameSessionStatus) {
    GameSessionStatus["ACTIVATING"] = "ACTIVATING";
    GameSessionStatus["ACTIVE"] = "ACTIVE";
    GameSessionStatus["ERROR"] = "ERROR";
    GameSessionStatus["TERMINATED"] = "TERMINATED";
    GameSessionStatus["TERMINATING"] = "TERMINATING";
})(GameSessionStatus = exports.GameSessionStatus || (exports.GameSessionStatus = {}));
var GameSessionStatusReason;
(function (GameSessionStatusReason) {
    GameSessionStatusReason["INTERRUPTED"] = "INTERRUPTED";
})(GameSessionStatusReason = exports.GameSessionStatusReason || (exports.GameSessionStatusReason = {}));
var GetGameSessionLogUrlInput;
(function (GetGameSessionLogUrlInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGameSessionLogUrlInput");
    }
    GetGameSessionLogUrlInput.isa = isa;
})(GetGameSessionLogUrlInput = exports.GetGameSessionLogUrlInput || (exports.GetGameSessionLogUrlInput = {}));
var GetGameSessionLogUrlOutput;
(function (GetGameSessionLogUrlOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGameSessionLogUrlOutput");
    }
    GetGameSessionLogUrlOutput.isa = isa;
})(GetGameSessionLogUrlOutput = exports.GetGameSessionLogUrlOutput || (exports.GetGameSessionLogUrlOutput = {}));
var GetInstanceAccessInput;
(function (GetInstanceAccessInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceAccessInput");
    }
    GetInstanceAccessInput.isa = isa;
})(GetInstanceAccessInput = exports.GetInstanceAccessInput || (exports.GetInstanceAccessInput = {}));
var GetInstanceAccessOutput;
(function (GetInstanceAccessOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceAccessOutput");
    }
    GetInstanceAccessOutput.isa = isa;
})(GetInstanceAccessOutput = exports.GetInstanceAccessOutput || (exports.GetInstanceAccessOutput = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdempotentParameterMismatchException");
    }
    IdempotentParameterMismatchException.isa = isa;
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var Instance;
(function (Instance) {
    function isa(o) {
        return smithy_client_1.isa(o, "Instance");
    }
    Instance.isa = isa;
})(Instance = exports.Instance || (exports.Instance = {}));
var InstanceAccess;
(function (InstanceAccess) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceAccess");
    }
    InstanceAccess.isa = isa;
})(InstanceAccess = exports.InstanceAccess || (exports.InstanceAccess = {}));
var InstanceCredentials;
(function (InstanceCredentials) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceCredentials");
    }
    InstanceCredentials.isa = isa;
})(InstanceCredentials = exports.InstanceCredentials || (exports.InstanceCredentials = {}));
var InstanceStatus;
(function (InstanceStatus) {
    InstanceStatus["ACTIVE"] = "ACTIVE";
    InstanceStatus["PENDING"] = "PENDING";
    InstanceStatus["TERMINATING"] = "TERMINATING";
})(InstanceStatus = exports.InstanceStatus || (exports.InstanceStatus = {}));
var InternalServiceException;
(function (InternalServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServiceException");
    }
    InternalServiceException.isa = isa;
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var InvalidFleetStatusException;
(function (InvalidFleetStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidFleetStatusException");
    }
    InvalidFleetStatusException.isa = isa;
})(InvalidFleetStatusException = exports.InvalidFleetStatusException || (exports.InvalidFleetStatusException = {}));
var InvalidGameSessionStatusException;
(function (InvalidGameSessionStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidGameSessionStatusException");
    }
    InvalidGameSessionStatusException.isa = isa;
})(InvalidGameSessionStatusException = exports.InvalidGameSessionStatusException || (exports.InvalidGameSessionStatusException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRequestException");
    }
    InvalidRequestException.isa = isa;
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var IpPermission;
(function (IpPermission) {
    function isa(o) {
        return smithy_client_1.isa(o, "IpPermission");
    }
    IpPermission.isa = isa;
})(IpPermission = exports.IpPermission || (exports.IpPermission = {}));
var IpProtocol;
(function (IpProtocol) {
    IpProtocol["TCP"] = "TCP";
    IpProtocol["UDP"] = "UDP";
})(IpProtocol = exports.IpProtocol || (exports.IpProtocol = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListAliasesInput;
(function (ListAliasesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAliasesInput");
    }
    ListAliasesInput.isa = isa;
})(ListAliasesInput = exports.ListAliasesInput || (exports.ListAliasesInput = {}));
var ListAliasesOutput;
(function (ListAliasesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAliasesOutput");
    }
    ListAliasesOutput.isa = isa;
})(ListAliasesOutput = exports.ListAliasesOutput || (exports.ListAliasesOutput = {}));
var ListBuildsInput;
(function (ListBuildsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBuildsInput");
    }
    ListBuildsInput.isa = isa;
})(ListBuildsInput = exports.ListBuildsInput || (exports.ListBuildsInput = {}));
var ListBuildsOutput;
(function (ListBuildsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBuildsOutput");
    }
    ListBuildsOutput.isa = isa;
})(ListBuildsOutput = exports.ListBuildsOutput || (exports.ListBuildsOutput = {}));
var ListFleetsInput;
(function (ListFleetsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFleetsInput");
    }
    ListFleetsInput.isa = isa;
})(ListFleetsInput = exports.ListFleetsInput || (exports.ListFleetsInput = {}));
var ListFleetsOutput;
(function (ListFleetsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFleetsOutput");
    }
    ListFleetsOutput.isa = isa;
})(ListFleetsOutput = exports.ListFleetsOutput || (exports.ListFleetsOutput = {}));
var ListScriptsInput;
(function (ListScriptsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListScriptsInput");
    }
    ListScriptsInput.isa = isa;
})(ListScriptsInput = exports.ListScriptsInput || (exports.ListScriptsInput = {}));
var ListScriptsOutput;
(function (ListScriptsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListScriptsOutput");
    }
    ListScriptsOutput.isa = isa;
})(ListScriptsOutput = exports.ListScriptsOutput || (exports.ListScriptsOutput = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceRequest");
    }
    ListTagsForResourceRequest.isa = isa;
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceResponse");
    }
    ListTagsForResourceResponse.isa = isa;
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var MatchedPlayerSession;
(function (MatchedPlayerSession) {
    function isa(o) {
        return smithy_client_1.isa(o, "MatchedPlayerSession");
    }
    MatchedPlayerSession.isa = isa;
})(MatchedPlayerSession = exports.MatchedPlayerSession || (exports.MatchedPlayerSession = {}));
var MatchmakingConfiguration;
(function (MatchmakingConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "MatchmakingConfiguration");
    }
    MatchmakingConfiguration.isa = isa;
})(MatchmakingConfiguration = exports.MatchmakingConfiguration || (exports.MatchmakingConfiguration = {}));
var MatchmakingRuleSet;
(function (MatchmakingRuleSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "MatchmakingRuleSet");
    }
    MatchmakingRuleSet.isa = isa;
})(MatchmakingRuleSet = exports.MatchmakingRuleSet || (exports.MatchmakingRuleSet = {}));
var MatchmakingTicket;
(function (MatchmakingTicket) {
    function isa(o) {
        return smithy_client_1.isa(o, "MatchmakingTicket");
    }
    MatchmakingTicket.isa = isa;
})(MatchmakingTicket = exports.MatchmakingTicket || (exports.MatchmakingTicket = {}));
var NotFoundException;
(function (NotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotFoundException");
    }
    NotFoundException.isa = isa;
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var OperatingSystem;
(function (OperatingSystem) {
    OperatingSystem["AMAZON_LINUX"] = "AMAZON_LINUX";
    OperatingSystem["AMAZON_LINUX_2"] = "AMAZON_LINUX_2";
    OperatingSystem["WINDOWS_2012"] = "WINDOWS_2012";
})(OperatingSystem = exports.OperatingSystem || (exports.OperatingSystem = {}));
var PlacedPlayerSession;
(function (PlacedPlayerSession) {
    function isa(o) {
        return smithy_client_1.isa(o, "PlacedPlayerSession");
    }
    PlacedPlayerSession.isa = isa;
})(PlacedPlayerSession = exports.PlacedPlayerSession || (exports.PlacedPlayerSession = {}));
var Player;
(function (Player) {
    function isa(o) {
        return smithy_client_1.isa(o, "Player");
    }
    Player.isa = isa;
})(Player = exports.Player || (exports.Player = {}));
var PlayerLatency;
(function (PlayerLatency) {
    function isa(o) {
        return smithy_client_1.isa(o, "PlayerLatency");
    }
    PlayerLatency.isa = isa;
})(PlayerLatency = exports.PlayerLatency || (exports.PlayerLatency = {}));
var PlayerLatencyPolicy;
(function (PlayerLatencyPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "PlayerLatencyPolicy");
    }
    PlayerLatencyPolicy.isa = isa;
})(PlayerLatencyPolicy = exports.PlayerLatencyPolicy || (exports.PlayerLatencyPolicy = {}));
var PlayerSession;
(function (PlayerSession) {
    function isa(o) {
        return smithy_client_1.isa(o, "PlayerSession");
    }
    PlayerSession.isa = isa;
})(PlayerSession = exports.PlayerSession || (exports.PlayerSession = {}));
var PlayerSessionCreationPolicy;
(function (PlayerSessionCreationPolicy) {
    PlayerSessionCreationPolicy["ACCEPT_ALL"] = "ACCEPT_ALL";
    PlayerSessionCreationPolicy["DENY_ALL"] = "DENY_ALL";
})(PlayerSessionCreationPolicy = exports.PlayerSessionCreationPolicy || (exports.PlayerSessionCreationPolicy = {}));
var PlayerSessionStatus;
(function (PlayerSessionStatus) {
    PlayerSessionStatus["ACTIVE"] = "ACTIVE";
    PlayerSessionStatus["COMPLETED"] = "COMPLETED";
    PlayerSessionStatus["RESERVED"] = "RESERVED";
    PlayerSessionStatus["TIMEDOUT"] = "TIMEDOUT";
})(PlayerSessionStatus = exports.PlayerSessionStatus || (exports.PlayerSessionStatus = {}));
var PolicyType;
(function (PolicyType) {
    PolicyType["RuleBased"] = "RuleBased";
    PolicyType["TargetBased"] = "TargetBased";
})(PolicyType = exports.PolicyType || (exports.PolicyType = {}));
var ProtectionPolicy;
(function (ProtectionPolicy) {
    ProtectionPolicy["FullProtection"] = "FullProtection";
    ProtectionPolicy["NoProtection"] = "NoProtection";
})(ProtectionPolicy = exports.ProtectionPolicy || (exports.ProtectionPolicy = {}));
var PutScalingPolicyInput;
(function (PutScalingPolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutScalingPolicyInput");
    }
    PutScalingPolicyInput.isa = isa;
})(PutScalingPolicyInput = exports.PutScalingPolicyInput || (exports.PutScalingPolicyInput = {}));
var PutScalingPolicyOutput;
(function (PutScalingPolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutScalingPolicyOutput");
    }
    PutScalingPolicyOutput.isa = isa;
})(PutScalingPolicyOutput = exports.PutScalingPolicyOutput || (exports.PutScalingPolicyOutput = {}));
var RequestUploadCredentialsInput;
(function (RequestUploadCredentialsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestUploadCredentialsInput");
    }
    RequestUploadCredentialsInput.isa = isa;
})(RequestUploadCredentialsInput = exports.RequestUploadCredentialsInput || (exports.RequestUploadCredentialsInput = {}));
var RequestUploadCredentialsOutput;
(function (RequestUploadCredentialsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestUploadCredentialsOutput");
    }
    RequestUploadCredentialsOutput.isa = isa;
})(RequestUploadCredentialsOutput = exports.RequestUploadCredentialsOutput || (exports.RequestUploadCredentialsOutput = {}));
var ResolveAliasInput;
(function (ResolveAliasInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResolveAliasInput");
    }
    ResolveAliasInput.isa = isa;
})(ResolveAliasInput = exports.ResolveAliasInput || (exports.ResolveAliasInput = {}));
var ResolveAliasOutput;
(function (ResolveAliasOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResolveAliasOutput");
    }
    ResolveAliasOutput.isa = isa;
})(ResolveAliasOutput = exports.ResolveAliasOutput || (exports.ResolveAliasOutput = {}));
var ResourceCreationLimitPolicy;
(function (ResourceCreationLimitPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceCreationLimitPolicy");
    }
    ResourceCreationLimitPolicy.isa = isa;
})(ResourceCreationLimitPolicy = exports.ResourceCreationLimitPolicy || (exports.ResourceCreationLimitPolicy = {}));
var RoutingStrategy;
(function (RoutingStrategy) {
    function isa(o) {
        return smithy_client_1.isa(o, "RoutingStrategy");
    }
    RoutingStrategy.isa = isa;
})(RoutingStrategy = exports.RoutingStrategy || (exports.RoutingStrategy = {}));
var RoutingStrategyType;
(function (RoutingStrategyType) {
    RoutingStrategyType["SIMPLE"] = "SIMPLE";
    RoutingStrategyType["TERMINAL"] = "TERMINAL";
})(RoutingStrategyType = exports.RoutingStrategyType || (exports.RoutingStrategyType = {}));
var RuntimeConfiguration;
(function (RuntimeConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuntimeConfiguration");
    }
    RuntimeConfiguration.isa = isa;
})(RuntimeConfiguration = exports.RuntimeConfiguration || (exports.RuntimeConfiguration = {}));
var S3Location;
(function (S3Location) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Location");
    }
    S3Location.isa = isa;
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var ScalingAdjustmentType;
(function (ScalingAdjustmentType) {
    ScalingAdjustmentType["ChangeInCapacity"] = "ChangeInCapacity";
    ScalingAdjustmentType["ExactCapacity"] = "ExactCapacity";
    ScalingAdjustmentType["PercentChangeInCapacity"] = "PercentChangeInCapacity";
})(ScalingAdjustmentType = exports.ScalingAdjustmentType || (exports.ScalingAdjustmentType = {}));
var ScalingPolicy;
(function (ScalingPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalingPolicy");
    }
    ScalingPolicy.isa = isa;
})(ScalingPolicy = exports.ScalingPolicy || (exports.ScalingPolicy = {}));
var ScalingStatusType;
(function (ScalingStatusType) {
    ScalingStatusType["ACTIVE"] = "ACTIVE";
    ScalingStatusType["DELETED"] = "DELETED";
    ScalingStatusType["DELETE_REQUESTED"] = "DELETE_REQUESTED";
    ScalingStatusType["DELETING"] = "DELETING";
    ScalingStatusType["ERROR"] = "ERROR";
    ScalingStatusType["UPDATE_REQUESTED"] = "UPDATE_REQUESTED";
    ScalingStatusType["UPDATING"] = "UPDATING";
})(ScalingStatusType = exports.ScalingStatusType || (exports.ScalingStatusType = {}));
var Script;
(function (Script) {
    function isa(o) {
        return smithy_client_1.isa(o, "Script");
    }
    Script.isa = isa;
})(Script = exports.Script || (exports.Script = {}));
var SearchGameSessionsInput;
(function (SearchGameSessionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchGameSessionsInput");
    }
    SearchGameSessionsInput.isa = isa;
})(SearchGameSessionsInput = exports.SearchGameSessionsInput || (exports.SearchGameSessionsInput = {}));
var SearchGameSessionsOutput;
(function (SearchGameSessionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchGameSessionsOutput");
    }
    SearchGameSessionsOutput.isa = isa;
})(SearchGameSessionsOutput = exports.SearchGameSessionsOutput || (exports.SearchGameSessionsOutput = {}));
var ServerProcess;
(function (ServerProcess) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerProcess");
    }
    ServerProcess.isa = isa;
})(ServerProcess = exports.ServerProcess || (exports.ServerProcess = {}));
var StartFleetActionsInput;
(function (StartFleetActionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartFleetActionsInput");
    }
    StartFleetActionsInput.isa = isa;
})(StartFleetActionsInput = exports.StartFleetActionsInput || (exports.StartFleetActionsInput = {}));
var StartFleetActionsOutput;
(function (StartFleetActionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartFleetActionsOutput");
    }
    StartFleetActionsOutput.isa = isa;
})(StartFleetActionsOutput = exports.StartFleetActionsOutput || (exports.StartFleetActionsOutput = {}));
var StartGameSessionPlacementInput;
(function (StartGameSessionPlacementInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartGameSessionPlacementInput");
    }
    StartGameSessionPlacementInput.isa = isa;
})(StartGameSessionPlacementInput = exports.StartGameSessionPlacementInput || (exports.StartGameSessionPlacementInput = {}));
var StartGameSessionPlacementOutput;
(function (StartGameSessionPlacementOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartGameSessionPlacementOutput");
    }
    StartGameSessionPlacementOutput.isa = isa;
})(StartGameSessionPlacementOutput = exports.StartGameSessionPlacementOutput || (exports.StartGameSessionPlacementOutput = {}));
var StartMatchBackfillInput;
(function (StartMatchBackfillInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartMatchBackfillInput");
    }
    StartMatchBackfillInput.isa = isa;
})(StartMatchBackfillInput = exports.StartMatchBackfillInput || (exports.StartMatchBackfillInput = {}));
var StartMatchBackfillOutput;
(function (StartMatchBackfillOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartMatchBackfillOutput");
    }
    StartMatchBackfillOutput.isa = isa;
})(StartMatchBackfillOutput = exports.StartMatchBackfillOutput || (exports.StartMatchBackfillOutput = {}));
var StartMatchmakingInput;
(function (StartMatchmakingInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartMatchmakingInput");
    }
    StartMatchmakingInput.isa = isa;
})(StartMatchmakingInput = exports.StartMatchmakingInput || (exports.StartMatchmakingInput = {}));
var StartMatchmakingOutput;
(function (StartMatchmakingOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartMatchmakingOutput");
    }
    StartMatchmakingOutput.isa = isa;
})(StartMatchmakingOutput = exports.StartMatchmakingOutput || (exports.StartMatchmakingOutput = {}));
var StopFleetActionsInput;
(function (StopFleetActionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopFleetActionsInput");
    }
    StopFleetActionsInput.isa = isa;
})(StopFleetActionsInput = exports.StopFleetActionsInput || (exports.StopFleetActionsInput = {}));
var StopFleetActionsOutput;
(function (StopFleetActionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopFleetActionsOutput");
    }
    StopFleetActionsOutput.isa = isa;
})(StopFleetActionsOutput = exports.StopFleetActionsOutput || (exports.StopFleetActionsOutput = {}));
var StopGameSessionPlacementInput;
(function (StopGameSessionPlacementInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopGameSessionPlacementInput");
    }
    StopGameSessionPlacementInput.isa = isa;
})(StopGameSessionPlacementInput = exports.StopGameSessionPlacementInput || (exports.StopGameSessionPlacementInput = {}));
var StopGameSessionPlacementOutput;
(function (StopGameSessionPlacementOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopGameSessionPlacementOutput");
    }
    StopGameSessionPlacementOutput.isa = isa;
})(StopGameSessionPlacementOutput = exports.StopGameSessionPlacementOutput || (exports.StopGameSessionPlacementOutput = {}));
var StopMatchmakingInput;
(function (StopMatchmakingInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopMatchmakingInput");
    }
    StopMatchmakingInput.isa = isa;
})(StopMatchmakingInput = exports.StopMatchmakingInput || (exports.StopMatchmakingInput = {}));
var StopMatchmakingOutput;
(function (StopMatchmakingOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopMatchmakingOutput");
    }
    StopMatchmakingOutput.isa = isa;
})(StopMatchmakingOutput = exports.StopMatchmakingOutput || (exports.StopMatchmakingOutput = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResponse");
    }
    TagResourceResponse.isa = isa;
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var TaggingFailedException;
(function (TaggingFailedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaggingFailedException");
    }
    TaggingFailedException.isa = isa;
})(TaggingFailedException = exports.TaggingFailedException || (exports.TaggingFailedException = {}));
var TargetConfiguration;
(function (TargetConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetConfiguration");
    }
    TargetConfiguration.isa = isa;
})(TargetConfiguration = exports.TargetConfiguration || (exports.TargetConfiguration = {}));
var TerminalRoutingStrategyException;
(function (TerminalRoutingStrategyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminalRoutingStrategyException");
    }
    TerminalRoutingStrategyException.isa = isa;
})(TerminalRoutingStrategyException = exports.TerminalRoutingStrategyException || (exports.TerminalRoutingStrategyException = {}));
var UnauthorizedException;
(function (UnauthorizedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnauthorizedException");
    }
    UnauthorizedException.isa = isa;
})(UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {}));
var UnsupportedRegionException;
(function (UnsupportedRegionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedRegionException");
    }
    UnsupportedRegionException.isa = isa;
})(UnsupportedRegionException = exports.UnsupportedRegionException || (exports.UnsupportedRegionException = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResponse");
    }
    UntagResourceResponse.isa = isa;
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateAliasInput;
(function (UpdateAliasInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAliasInput");
    }
    UpdateAliasInput.isa = isa;
})(UpdateAliasInput = exports.UpdateAliasInput || (exports.UpdateAliasInput = {}));
var UpdateAliasOutput;
(function (UpdateAliasOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAliasOutput");
    }
    UpdateAliasOutput.isa = isa;
})(UpdateAliasOutput = exports.UpdateAliasOutput || (exports.UpdateAliasOutput = {}));
var UpdateBuildInput;
(function (UpdateBuildInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateBuildInput");
    }
    UpdateBuildInput.isa = isa;
})(UpdateBuildInput = exports.UpdateBuildInput || (exports.UpdateBuildInput = {}));
var UpdateBuildOutput;
(function (UpdateBuildOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateBuildOutput");
    }
    UpdateBuildOutput.isa = isa;
})(UpdateBuildOutput = exports.UpdateBuildOutput || (exports.UpdateBuildOutput = {}));
var UpdateFleetAttributesInput;
(function (UpdateFleetAttributesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFleetAttributesInput");
    }
    UpdateFleetAttributesInput.isa = isa;
})(UpdateFleetAttributesInput = exports.UpdateFleetAttributesInput || (exports.UpdateFleetAttributesInput = {}));
var UpdateFleetAttributesOutput;
(function (UpdateFleetAttributesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFleetAttributesOutput");
    }
    UpdateFleetAttributesOutput.isa = isa;
})(UpdateFleetAttributesOutput = exports.UpdateFleetAttributesOutput || (exports.UpdateFleetAttributesOutput = {}));
var UpdateFleetCapacityInput;
(function (UpdateFleetCapacityInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFleetCapacityInput");
    }
    UpdateFleetCapacityInput.isa = isa;
})(UpdateFleetCapacityInput = exports.UpdateFleetCapacityInput || (exports.UpdateFleetCapacityInput = {}));
var UpdateFleetCapacityOutput;
(function (UpdateFleetCapacityOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFleetCapacityOutput");
    }
    UpdateFleetCapacityOutput.isa = isa;
})(UpdateFleetCapacityOutput = exports.UpdateFleetCapacityOutput || (exports.UpdateFleetCapacityOutput = {}));
var UpdateFleetPortSettingsInput;
(function (UpdateFleetPortSettingsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFleetPortSettingsInput");
    }
    UpdateFleetPortSettingsInput.isa = isa;
})(UpdateFleetPortSettingsInput = exports.UpdateFleetPortSettingsInput || (exports.UpdateFleetPortSettingsInput = {}));
var UpdateFleetPortSettingsOutput;
(function (UpdateFleetPortSettingsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFleetPortSettingsOutput");
    }
    UpdateFleetPortSettingsOutput.isa = isa;
})(UpdateFleetPortSettingsOutput = exports.UpdateFleetPortSettingsOutput || (exports.UpdateFleetPortSettingsOutput = {}));
var UpdateGameSessionInput;
(function (UpdateGameSessionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGameSessionInput");
    }
    UpdateGameSessionInput.isa = isa;
})(UpdateGameSessionInput = exports.UpdateGameSessionInput || (exports.UpdateGameSessionInput = {}));
var UpdateGameSessionOutput;
(function (UpdateGameSessionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGameSessionOutput");
    }
    UpdateGameSessionOutput.isa = isa;
})(UpdateGameSessionOutput = exports.UpdateGameSessionOutput || (exports.UpdateGameSessionOutput = {}));
var UpdateGameSessionQueueInput;
(function (UpdateGameSessionQueueInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGameSessionQueueInput");
    }
    UpdateGameSessionQueueInput.isa = isa;
})(UpdateGameSessionQueueInput = exports.UpdateGameSessionQueueInput || (exports.UpdateGameSessionQueueInput = {}));
var UpdateGameSessionQueueOutput;
(function (UpdateGameSessionQueueOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGameSessionQueueOutput");
    }
    UpdateGameSessionQueueOutput.isa = isa;
})(UpdateGameSessionQueueOutput = exports.UpdateGameSessionQueueOutput || (exports.UpdateGameSessionQueueOutput = {}));
var UpdateMatchmakingConfigurationInput;
(function (UpdateMatchmakingConfigurationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMatchmakingConfigurationInput");
    }
    UpdateMatchmakingConfigurationInput.isa = isa;
})(UpdateMatchmakingConfigurationInput = exports.UpdateMatchmakingConfigurationInput || (exports.UpdateMatchmakingConfigurationInput = {}));
var UpdateMatchmakingConfigurationOutput;
(function (UpdateMatchmakingConfigurationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMatchmakingConfigurationOutput");
    }
    UpdateMatchmakingConfigurationOutput.isa = isa;
})(UpdateMatchmakingConfigurationOutput = exports.UpdateMatchmakingConfigurationOutput || (exports.UpdateMatchmakingConfigurationOutput = {}));
var UpdateRuntimeConfigurationInput;
(function (UpdateRuntimeConfigurationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRuntimeConfigurationInput");
    }
    UpdateRuntimeConfigurationInput.isa = isa;
})(UpdateRuntimeConfigurationInput = exports.UpdateRuntimeConfigurationInput || (exports.UpdateRuntimeConfigurationInput = {}));
var UpdateRuntimeConfigurationOutput;
(function (UpdateRuntimeConfigurationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRuntimeConfigurationOutput");
    }
    UpdateRuntimeConfigurationOutput.isa = isa;
})(UpdateRuntimeConfigurationOutput = exports.UpdateRuntimeConfigurationOutput || (exports.UpdateRuntimeConfigurationOutput = {}));
var UpdateScriptInput;
(function (UpdateScriptInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateScriptInput");
    }
    UpdateScriptInput.isa = isa;
})(UpdateScriptInput = exports.UpdateScriptInput || (exports.UpdateScriptInput = {}));
var UpdateScriptOutput;
(function (UpdateScriptOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateScriptOutput");
    }
    UpdateScriptOutput.isa = isa;
})(UpdateScriptOutput = exports.UpdateScriptOutput || (exports.UpdateScriptOutput = {}));
var ValidateMatchmakingRuleSetInput;
(function (ValidateMatchmakingRuleSetInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidateMatchmakingRuleSetInput");
    }
    ValidateMatchmakingRuleSetInput.isa = isa;
})(ValidateMatchmakingRuleSetInput = exports.ValidateMatchmakingRuleSetInput || (exports.ValidateMatchmakingRuleSetInput = {}));
var ValidateMatchmakingRuleSetOutput;
(function (ValidateMatchmakingRuleSetOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidateMatchmakingRuleSetOutput");
    }
    ValidateMatchmakingRuleSetOutput.isa = isa;
})(ValidateMatchmakingRuleSetOutput = exports.ValidateMatchmakingRuleSetOutput || (exports.ValidateMatchmakingRuleSetOutput = {}));
var VpcPeeringAuthorization;
(function (VpcPeeringAuthorization) {
    function isa(o) {
        return smithy_client_1.isa(o, "VpcPeeringAuthorization");
    }
    VpcPeeringAuthorization.isa = isa;
})(VpcPeeringAuthorization = exports.VpcPeeringAuthorization || (exports.VpcPeeringAuthorization = {}));
var VpcPeeringConnection;
(function (VpcPeeringConnection) {
    function isa(o) {
        return smithy_client_1.isa(o, "VpcPeeringConnection");
    }
    VpcPeeringConnection.isa = isa;
})(VpcPeeringConnection = exports.VpcPeeringConnection || (exports.VpcPeeringConnection = {}));
var VpcPeeringConnectionStatus;
(function (VpcPeeringConnectionStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "VpcPeeringConnectionStatus");
    }
    VpcPeeringConnectionStatus.isa = isa;
})(VpcPeeringConnectionStatus = exports.VpcPeeringConnectionStatus || (exports.VpcPeeringConnectionStatus = {}));
//# sourceMappingURL=index.js.map