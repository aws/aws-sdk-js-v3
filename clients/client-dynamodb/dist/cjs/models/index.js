"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var DescribeEndpointsRequest;
(function (DescribeEndpointsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEndpointsRequest");
    }
    DescribeEndpointsRequest.isa = isa;
})(DescribeEndpointsRequest = exports.DescribeEndpointsRequest || (exports.DescribeEndpointsRequest = {}));
var DescribeEndpointsResponse;
(function (DescribeEndpointsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEndpointsResponse");
    }
    DescribeEndpointsResponse.isa = isa;
})(DescribeEndpointsResponse = exports.DescribeEndpointsResponse || (exports.DescribeEndpointsResponse = {}));
var Endpoint;
(function (Endpoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "Endpoint");
    }
    Endpoint.isa = isa;
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var InvalidEndpointException;
(function (InvalidEndpointException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidEndpointException");
    }
    InvalidEndpointException.isa = isa;
})(InvalidEndpointException = exports.InvalidEndpointException || (exports.InvalidEndpointException = {}));
var ArchivalSummary;
(function (ArchivalSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ArchivalSummary");
    }
    ArchivalSummary.isa = isa;
})(ArchivalSummary = exports.ArchivalSummary || (exports.ArchivalSummary = {}));
var AttributeDefinition;
(function (AttributeDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttributeDefinition");
    }
    AttributeDefinition.isa = isa;
})(AttributeDefinition = exports.AttributeDefinition || (exports.AttributeDefinition = {}));
var AttributeValue;
(function (AttributeValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttributeValue");
    }
    AttributeValue.isa = isa;
})(AttributeValue = exports.AttributeValue || (exports.AttributeValue = {}));
var AttributeValueUpdate;
(function (AttributeValueUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttributeValueUpdate");
    }
    AttributeValueUpdate.isa = isa;
})(AttributeValueUpdate = exports.AttributeValueUpdate || (exports.AttributeValueUpdate = {}));
var AutoScalingPolicyDescription;
(function (AutoScalingPolicyDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingPolicyDescription");
    }
    AutoScalingPolicyDescription.isa = isa;
})(AutoScalingPolicyDescription = exports.AutoScalingPolicyDescription || (exports.AutoScalingPolicyDescription = {}));
var AutoScalingPolicyUpdate;
(function (AutoScalingPolicyUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingPolicyUpdate");
    }
    AutoScalingPolicyUpdate.isa = isa;
})(AutoScalingPolicyUpdate = exports.AutoScalingPolicyUpdate || (exports.AutoScalingPolicyUpdate = {}));
var AutoScalingSettingsDescription;
(function (AutoScalingSettingsDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingSettingsDescription");
    }
    AutoScalingSettingsDescription.isa = isa;
})(AutoScalingSettingsDescription = exports.AutoScalingSettingsDescription || (exports.AutoScalingSettingsDescription = {}));
var AutoScalingSettingsUpdate;
(function (AutoScalingSettingsUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingSettingsUpdate");
    }
    AutoScalingSettingsUpdate.isa = isa;
})(AutoScalingSettingsUpdate = exports.AutoScalingSettingsUpdate || (exports.AutoScalingSettingsUpdate = {}));
var AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
(function (AutoScalingTargetTrackingScalingPolicyConfigurationDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingTargetTrackingScalingPolicyConfigurationDescription");
    }
    AutoScalingTargetTrackingScalingPolicyConfigurationDescription.isa = isa;
})(AutoScalingTargetTrackingScalingPolicyConfigurationDescription = exports.AutoScalingTargetTrackingScalingPolicyConfigurationDescription || (exports.AutoScalingTargetTrackingScalingPolicyConfigurationDescription = {}));
var AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
(function (AutoScalingTargetTrackingScalingPolicyConfigurationUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingTargetTrackingScalingPolicyConfigurationUpdate");
    }
    AutoScalingTargetTrackingScalingPolicyConfigurationUpdate.isa = isa;
})(AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = exports.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate || (exports.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = {}));
var BackupDescription;
(function (BackupDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "BackupDescription");
    }
    BackupDescription.isa = isa;
})(BackupDescription = exports.BackupDescription || (exports.BackupDescription = {}));
var BackupDetails;
(function (BackupDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "BackupDetails");
    }
    BackupDetails.isa = isa;
})(BackupDetails = exports.BackupDetails || (exports.BackupDetails = {}));
var BackupInUseException;
(function (BackupInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BackupInUseException");
    }
    BackupInUseException.isa = isa;
})(BackupInUseException = exports.BackupInUseException || (exports.BackupInUseException = {}));
var BackupNotFoundException;
(function (BackupNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BackupNotFoundException");
    }
    BackupNotFoundException.isa = isa;
})(BackupNotFoundException = exports.BackupNotFoundException || (exports.BackupNotFoundException = {}));
var BackupSummary;
(function (BackupSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "BackupSummary");
    }
    BackupSummary.isa = isa;
})(BackupSummary = exports.BackupSummary || (exports.BackupSummary = {}));
var BackupType;
(function (BackupType) {
    BackupType["AWS_BACKUP"] = "AWS_BACKUP";
    BackupType["SYSTEM"] = "SYSTEM";
    BackupType["USER"] = "USER";
})(BackupType = exports.BackupType || (exports.BackupType = {}));
var BackupTypeFilter;
(function (BackupTypeFilter) {
    BackupTypeFilter["ALL"] = "ALL";
    BackupTypeFilter["AWS_BACKUP"] = "AWS_BACKUP";
    BackupTypeFilter["SYSTEM"] = "SYSTEM";
    BackupTypeFilter["USER"] = "USER";
})(BackupTypeFilter = exports.BackupTypeFilter || (exports.BackupTypeFilter = {}));
var BatchGetItemInput;
(function (BatchGetItemInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetItemInput");
    }
    BatchGetItemInput.isa = isa;
})(BatchGetItemInput = exports.BatchGetItemInput || (exports.BatchGetItemInput = {}));
var BatchGetItemOutput;
(function (BatchGetItemOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetItemOutput");
    }
    BatchGetItemOutput.isa = isa;
})(BatchGetItemOutput = exports.BatchGetItemOutput || (exports.BatchGetItemOutput = {}));
var BatchWriteItemInput;
(function (BatchWriteItemInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchWriteItemInput");
    }
    BatchWriteItemInput.isa = isa;
})(BatchWriteItemInput = exports.BatchWriteItemInput || (exports.BatchWriteItemInput = {}));
var BatchWriteItemOutput;
(function (BatchWriteItemOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchWriteItemOutput");
    }
    BatchWriteItemOutput.isa = isa;
})(BatchWriteItemOutput = exports.BatchWriteItemOutput || (exports.BatchWriteItemOutput = {}));
var BillingModeSummary;
(function (BillingModeSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "BillingModeSummary");
    }
    BillingModeSummary.isa = isa;
})(BillingModeSummary = exports.BillingModeSummary || (exports.BillingModeSummary = {}));
var CancellationReason;
(function (CancellationReason) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancellationReason");
    }
    CancellationReason.isa = isa;
})(CancellationReason = exports.CancellationReason || (exports.CancellationReason = {}));
var Capacity;
(function (Capacity) {
    function isa(o) {
        return smithy_client_1.isa(o, "Capacity");
    }
    Capacity.isa = isa;
})(Capacity = exports.Capacity || (exports.Capacity = {}));
var Condition;
(function (Condition) {
    function isa(o) {
        return smithy_client_1.isa(o, "Condition");
    }
    Condition.isa = isa;
})(Condition = exports.Condition || (exports.Condition = {}));
var ConditionCheck;
(function (ConditionCheck) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConditionCheck");
    }
    ConditionCheck.isa = isa;
})(ConditionCheck = exports.ConditionCheck || (exports.ConditionCheck = {}));
var ConditionalCheckFailedException;
(function (ConditionalCheckFailedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConditionalCheckFailedException");
    }
    ConditionalCheckFailedException.isa = isa;
})(ConditionalCheckFailedException = exports.ConditionalCheckFailedException || (exports.ConditionalCheckFailedException = {}));
var ConsumedCapacity;
(function (ConsumedCapacity) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConsumedCapacity");
    }
    ConsumedCapacity.isa = isa;
})(ConsumedCapacity = exports.ConsumedCapacity || (exports.ConsumedCapacity = {}));
var ContinuousBackupsDescription;
(function (ContinuousBackupsDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContinuousBackupsDescription");
    }
    ContinuousBackupsDescription.isa = isa;
})(ContinuousBackupsDescription = exports.ContinuousBackupsDescription || (exports.ContinuousBackupsDescription = {}));
var ContinuousBackupsUnavailableException;
(function (ContinuousBackupsUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContinuousBackupsUnavailableException");
    }
    ContinuousBackupsUnavailableException.isa = isa;
})(ContinuousBackupsUnavailableException = exports.ContinuousBackupsUnavailableException || (exports.ContinuousBackupsUnavailableException = {}));
var ContributorInsightsSummary;
(function (ContributorInsightsSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContributorInsightsSummary");
    }
    ContributorInsightsSummary.isa = isa;
})(ContributorInsightsSummary = exports.ContributorInsightsSummary || (exports.ContributorInsightsSummary = {}));
var CreateBackupInput;
(function (CreateBackupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBackupInput");
    }
    CreateBackupInput.isa = isa;
})(CreateBackupInput = exports.CreateBackupInput || (exports.CreateBackupInput = {}));
var CreateBackupOutput;
(function (CreateBackupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBackupOutput");
    }
    CreateBackupOutput.isa = isa;
})(CreateBackupOutput = exports.CreateBackupOutput || (exports.CreateBackupOutput = {}));
var CreateGlobalSecondaryIndexAction;
(function (CreateGlobalSecondaryIndexAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGlobalSecondaryIndexAction");
    }
    CreateGlobalSecondaryIndexAction.isa = isa;
})(CreateGlobalSecondaryIndexAction = exports.CreateGlobalSecondaryIndexAction || (exports.CreateGlobalSecondaryIndexAction = {}));
var CreateGlobalTableInput;
(function (CreateGlobalTableInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGlobalTableInput");
    }
    CreateGlobalTableInput.isa = isa;
})(CreateGlobalTableInput = exports.CreateGlobalTableInput || (exports.CreateGlobalTableInput = {}));
var CreateGlobalTableOutput;
(function (CreateGlobalTableOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGlobalTableOutput");
    }
    CreateGlobalTableOutput.isa = isa;
})(CreateGlobalTableOutput = exports.CreateGlobalTableOutput || (exports.CreateGlobalTableOutput = {}));
var CreateReplicaAction;
(function (CreateReplicaAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateReplicaAction");
    }
    CreateReplicaAction.isa = isa;
})(CreateReplicaAction = exports.CreateReplicaAction || (exports.CreateReplicaAction = {}));
var CreateReplicationGroupMemberAction;
(function (CreateReplicationGroupMemberAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateReplicationGroupMemberAction");
    }
    CreateReplicationGroupMemberAction.isa = isa;
})(CreateReplicationGroupMemberAction = exports.CreateReplicationGroupMemberAction || (exports.CreateReplicationGroupMemberAction = {}));
var CreateTableInput;
(function (CreateTableInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTableInput");
    }
    CreateTableInput.isa = isa;
})(CreateTableInput = exports.CreateTableInput || (exports.CreateTableInput = {}));
var CreateTableOutput;
(function (CreateTableOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTableOutput");
    }
    CreateTableOutput.isa = isa;
})(CreateTableOutput = exports.CreateTableOutput || (exports.CreateTableOutput = {}));
var Delete;
(function (Delete) {
    function isa(o) {
        return smithy_client_1.isa(o, "Delete");
    }
    Delete.isa = isa;
})(Delete = exports.Delete || (exports.Delete = {}));
var DeleteBackupInput;
(function (DeleteBackupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBackupInput");
    }
    DeleteBackupInput.isa = isa;
})(DeleteBackupInput = exports.DeleteBackupInput || (exports.DeleteBackupInput = {}));
var DeleteBackupOutput;
(function (DeleteBackupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBackupOutput");
    }
    DeleteBackupOutput.isa = isa;
})(DeleteBackupOutput = exports.DeleteBackupOutput || (exports.DeleteBackupOutput = {}));
var DeleteGlobalSecondaryIndexAction;
(function (DeleteGlobalSecondaryIndexAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGlobalSecondaryIndexAction");
    }
    DeleteGlobalSecondaryIndexAction.isa = isa;
})(DeleteGlobalSecondaryIndexAction = exports.DeleteGlobalSecondaryIndexAction || (exports.DeleteGlobalSecondaryIndexAction = {}));
var DeleteItemInput;
(function (DeleteItemInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteItemInput");
    }
    DeleteItemInput.isa = isa;
})(DeleteItemInput = exports.DeleteItemInput || (exports.DeleteItemInput = {}));
var DeleteItemOutput;
(function (DeleteItemOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteItemOutput");
    }
    DeleteItemOutput.isa = isa;
})(DeleteItemOutput = exports.DeleteItemOutput || (exports.DeleteItemOutput = {}));
var DeleteReplicaAction;
(function (DeleteReplicaAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReplicaAction");
    }
    DeleteReplicaAction.isa = isa;
})(DeleteReplicaAction = exports.DeleteReplicaAction || (exports.DeleteReplicaAction = {}));
var DeleteReplicationGroupMemberAction;
(function (DeleteReplicationGroupMemberAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReplicationGroupMemberAction");
    }
    DeleteReplicationGroupMemberAction.isa = isa;
})(DeleteReplicationGroupMemberAction = exports.DeleteReplicationGroupMemberAction || (exports.DeleteReplicationGroupMemberAction = {}));
var DeleteRequest;
(function (DeleteRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRequest");
    }
    DeleteRequest.isa = isa;
})(DeleteRequest = exports.DeleteRequest || (exports.DeleteRequest = {}));
var DeleteTableInput;
(function (DeleteTableInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTableInput");
    }
    DeleteTableInput.isa = isa;
})(DeleteTableInput = exports.DeleteTableInput || (exports.DeleteTableInput = {}));
var DeleteTableOutput;
(function (DeleteTableOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTableOutput");
    }
    DeleteTableOutput.isa = isa;
})(DeleteTableOutput = exports.DeleteTableOutput || (exports.DeleteTableOutput = {}));
var DescribeBackupInput;
(function (DescribeBackupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBackupInput");
    }
    DescribeBackupInput.isa = isa;
})(DescribeBackupInput = exports.DescribeBackupInput || (exports.DescribeBackupInput = {}));
var DescribeBackupOutput;
(function (DescribeBackupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBackupOutput");
    }
    DescribeBackupOutput.isa = isa;
})(DescribeBackupOutput = exports.DescribeBackupOutput || (exports.DescribeBackupOutput = {}));
var DescribeContinuousBackupsInput;
(function (DescribeContinuousBackupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeContinuousBackupsInput");
    }
    DescribeContinuousBackupsInput.isa = isa;
})(DescribeContinuousBackupsInput = exports.DescribeContinuousBackupsInput || (exports.DescribeContinuousBackupsInput = {}));
var DescribeContinuousBackupsOutput;
(function (DescribeContinuousBackupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeContinuousBackupsOutput");
    }
    DescribeContinuousBackupsOutput.isa = isa;
})(DescribeContinuousBackupsOutput = exports.DescribeContinuousBackupsOutput || (exports.DescribeContinuousBackupsOutput = {}));
var DescribeContributorInsightsInput;
(function (DescribeContributorInsightsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeContributorInsightsInput");
    }
    DescribeContributorInsightsInput.isa = isa;
})(DescribeContributorInsightsInput = exports.DescribeContributorInsightsInput || (exports.DescribeContributorInsightsInput = {}));
var DescribeContributorInsightsOutput;
(function (DescribeContributorInsightsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeContributorInsightsOutput");
    }
    DescribeContributorInsightsOutput.isa = isa;
})(DescribeContributorInsightsOutput = exports.DescribeContributorInsightsOutput || (exports.DescribeContributorInsightsOutput = {}));
var DescribeGlobalTableInput;
(function (DescribeGlobalTableInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeGlobalTableInput");
    }
    DescribeGlobalTableInput.isa = isa;
})(DescribeGlobalTableInput = exports.DescribeGlobalTableInput || (exports.DescribeGlobalTableInput = {}));
var DescribeGlobalTableOutput;
(function (DescribeGlobalTableOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeGlobalTableOutput");
    }
    DescribeGlobalTableOutput.isa = isa;
})(DescribeGlobalTableOutput = exports.DescribeGlobalTableOutput || (exports.DescribeGlobalTableOutput = {}));
var DescribeGlobalTableSettingsInput;
(function (DescribeGlobalTableSettingsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeGlobalTableSettingsInput");
    }
    DescribeGlobalTableSettingsInput.isa = isa;
})(DescribeGlobalTableSettingsInput = exports.DescribeGlobalTableSettingsInput || (exports.DescribeGlobalTableSettingsInput = {}));
var DescribeGlobalTableSettingsOutput;
(function (DescribeGlobalTableSettingsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeGlobalTableSettingsOutput");
    }
    DescribeGlobalTableSettingsOutput.isa = isa;
})(DescribeGlobalTableSettingsOutput = exports.DescribeGlobalTableSettingsOutput || (exports.DescribeGlobalTableSettingsOutput = {}));
var DescribeLimitsInput;
(function (DescribeLimitsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLimitsInput");
    }
    DescribeLimitsInput.isa = isa;
})(DescribeLimitsInput = exports.DescribeLimitsInput || (exports.DescribeLimitsInput = {}));
var DescribeLimitsOutput;
(function (DescribeLimitsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLimitsOutput");
    }
    DescribeLimitsOutput.isa = isa;
})(DescribeLimitsOutput = exports.DescribeLimitsOutput || (exports.DescribeLimitsOutput = {}));
var DescribeTableInput;
(function (DescribeTableInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTableInput");
    }
    DescribeTableInput.isa = isa;
})(DescribeTableInput = exports.DescribeTableInput || (exports.DescribeTableInput = {}));
var DescribeTableOutput;
(function (DescribeTableOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTableOutput");
    }
    DescribeTableOutput.isa = isa;
})(DescribeTableOutput = exports.DescribeTableOutput || (exports.DescribeTableOutput = {}));
var DescribeTableReplicaAutoScalingInput;
(function (DescribeTableReplicaAutoScalingInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTableReplicaAutoScalingInput");
    }
    DescribeTableReplicaAutoScalingInput.isa = isa;
})(DescribeTableReplicaAutoScalingInput = exports.DescribeTableReplicaAutoScalingInput || (exports.DescribeTableReplicaAutoScalingInput = {}));
var DescribeTableReplicaAutoScalingOutput;
(function (DescribeTableReplicaAutoScalingOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTableReplicaAutoScalingOutput");
    }
    DescribeTableReplicaAutoScalingOutput.isa = isa;
})(DescribeTableReplicaAutoScalingOutput = exports.DescribeTableReplicaAutoScalingOutput || (exports.DescribeTableReplicaAutoScalingOutput = {}));
var DescribeTimeToLiveInput;
(function (DescribeTimeToLiveInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTimeToLiveInput");
    }
    DescribeTimeToLiveInput.isa = isa;
})(DescribeTimeToLiveInput = exports.DescribeTimeToLiveInput || (exports.DescribeTimeToLiveInput = {}));
var DescribeTimeToLiveOutput;
(function (DescribeTimeToLiveOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTimeToLiveOutput");
    }
    DescribeTimeToLiveOutput.isa = isa;
})(DescribeTimeToLiveOutput = exports.DescribeTimeToLiveOutput || (exports.DescribeTimeToLiveOutput = {}));
var ExpectedAttributeValue;
(function (ExpectedAttributeValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExpectedAttributeValue");
    }
    ExpectedAttributeValue.isa = isa;
})(ExpectedAttributeValue = exports.ExpectedAttributeValue || (exports.ExpectedAttributeValue = {}));
var FailureException;
(function (FailureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailureException");
    }
    FailureException.isa = isa;
})(FailureException = exports.FailureException || (exports.FailureException = {}));
var Get;
(function (Get) {
    function isa(o) {
        return smithy_client_1.isa(o, "Get");
    }
    Get.isa = isa;
})(Get = exports.Get || (exports.Get = {}));
var GetItemInput;
(function (GetItemInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetItemInput");
    }
    GetItemInput.isa = isa;
})(GetItemInput = exports.GetItemInput || (exports.GetItemInput = {}));
var GetItemOutput;
(function (GetItemOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetItemOutput");
    }
    GetItemOutput.isa = isa;
})(GetItemOutput = exports.GetItemOutput || (exports.GetItemOutput = {}));
var GlobalSecondaryIndex;
(function (GlobalSecondaryIndex) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlobalSecondaryIndex");
    }
    GlobalSecondaryIndex.isa = isa;
})(GlobalSecondaryIndex = exports.GlobalSecondaryIndex || (exports.GlobalSecondaryIndex = {}));
var GlobalSecondaryIndexAutoScalingUpdate;
(function (GlobalSecondaryIndexAutoScalingUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlobalSecondaryIndexAutoScalingUpdate");
    }
    GlobalSecondaryIndexAutoScalingUpdate.isa = isa;
})(GlobalSecondaryIndexAutoScalingUpdate = exports.GlobalSecondaryIndexAutoScalingUpdate || (exports.GlobalSecondaryIndexAutoScalingUpdate = {}));
var GlobalSecondaryIndexDescription;
(function (GlobalSecondaryIndexDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlobalSecondaryIndexDescription");
    }
    GlobalSecondaryIndexDescription.isa = isa;
})(GlobalSecondaryIndexDescription = exports.GlobalSecondaryIndexDescription || (exports.GlobalSecondaryIndexDescription = {}));
var GlobalSecondaryIndexInfo;
(function (GlobalSecondaryIndexInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlobalSecondaryIndexInfo");
    }
    GlobalSecondaryIndexInfo.isa = isa;
})(GlobalSecondaryIndexInfo = exports.GlobalSecondaryIndexInfo || (exports.GlobalSecondaryIndexInfo = {}));
var GlobalSecondaryIndexUpdate;
(function (GlobalSecondaryIndexUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlobalSecondaryIndexUpdate");
    }
    GlobalSecondaryIndexUpdate.isa = isa;
})(GlobalSecondaryIndexUpdate = exports.GlobalSecondaryIndexUpdate || (exports.GlobalSecondaryIndexUpdate = {}));
var GlobalTable;
(function (GlobalTable) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlobalTable");
    }
    GlobalTable.isa = isa;
})(GlobalTable = exports.GlobalTable || (exports.GlobalTable = {}));
var GlobalTableAlreadyExistsException;
(function (GlobalTableAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlobalTableAlreadyExistsException");
    }
    GlobalTableAlreadyExistsException.isa = isa;
})(GlobalTableAlreadyExistsException = exports.GlobalTableAlreadyExistsException || (exports.GlobalTableAlreadyExistsException = {}));
var GlobalTableDescription;
(function (GlobalTableDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlobalTableDescription");
    }
    GlobalTableDescription.isa = isa;
})(GlobalTableDescription = exports.GlobalTableDescription || (exports.GlobalTableDescription = {}));
var GlobalTableGlobalSecondaryIndexSettingsUpdate;
(function (GlobalTableGlobalSecondaryIndexSettingsUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlobalTableGlobalSecondaryIndexSettingsUpdate");
    }
    GlobalTableGlobalSecondaryIndexSettingsUpdate.isa = isa;
})(GlobalTableGlobalSecondaryIndexSettingsUpdate = exports.GlobalTableGlobalSecondaryIndexSettingsUpdate || (exports.GlobalTableGlobalSecondaryIndexSettingsUpdate = {}));
var GlobalTableNotFoundException;
(function (GlobalTableNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlobalTableNotFoundException");
    }
    GlobalTableNotFoundException.isa = isa;
})(GlobalTableNotFoundException = exports.GlobalTableNotFoundException || (exports.GlobalTableNotFoundException = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdempotentParameterMismatchException");
    }
    IdempotentParameterMismatchException.isa = isa;
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var IndexNotFoundException;
(function (IndexNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IndexNotFoundException");
    }
    IndexNotFoundException.isa = isa;
})(IndexNotFoundException = exports.IndexNotFoundException || (exports.IndexNotFoundException = {}));
var InternalServerError;
(function (InternalServerError) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerError");
    }
    InternalServerError.isa = isa;
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var InvalidRestoreTimeException;
(function (InvalidRestoreTimeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRestoreTimeException");
    }
    InvalidRestoreTimeException.isa = isa;
})(InvalidRestoreTimeException = exports.InvalidRestoreTimeException || (exports.InvalidRestoreTimeException = {}));
var ItemCollectionMetrics;
(function (ItemCollectionMetrics) {
    function isa(o) {
        return smithy_client_1.isa(o, "ItemCollectionMetrics");
    }
    ItemCollectionMetrics.isa = isa;
})(ItemCollectionMetrics = exports.ItemCollectionMetrics || (exports.ItemCollectionMetrics = {}));
var ItemCollectionSizeLimitExceededException;
(function (ItemCollectionSizeLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ItemCollectionSizeLimitExceededException");
    }
    ItemCollectionSizeLimitExceededException.isa = isa;
})(ItemCollectionSizeLimitExceededException = exports.ItemCollectionSizeLimitExceededException || (exports.ItemCollectionSizeLimitExceededException = {}));
var ItemResponse;
(function (ItemResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ItemResponse");
    }
    ItemResponse.isa = isa;
})(ItemResponse = exports.ItemResponse || (exports.ItemResponse = {}));
var KeySchemaElement;
(function (KeySchemaElement) {
    function isa(o) {
        return smithy_client_1.isa(o, "KeySchemaElement");
    }
    KeySchemaElement.isa = isa;
})(KeySchemaElement = exports.KeySchemaElement || (exports.KeySchemaElement = {}));
var KeysAndAttributes;
(function (KeysAndAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "KeysAndAttributes");
    }
    KeysAndAttributes.isa = isa;
})(KeysAndAttributes = exports.KeysAndAttributes || (exports.KeysAndAttributes = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListBackupsInput;
(function (ListBackupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBackupsInput");
    }
    ListBackupsInput.isa = isa;
})(ListBackupsInput = exports.ListBackupsInput || (exports.ListBackupsInput = {}));
var ListBackupsOutput;
(function (ListBackupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBackupsOutput");
    }
    ListBackupsOutput.isa = isa;
})(ListBackupsOutput = exports.ListBackupsOutput || (exports.ListBackupsOutput = {}));
var ListContributorInsightsInput;
(function (ListContributorInsightsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListContributorInsightsInput");
    }
    ListContributorInsightsInput.isa = isa;
})(ListContributorInsightsInput = exports.ListContributorInsightsInput || (exports.ListContributorInsightsInput = {}));
var ListContributorInsightsOutput;
(function (ListContributorInsightsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListContributorInsightsOutput");
    }
    ListContributorInsightsOutput.isa = isa;
})(ListContributorInsightsOutput = exports.ListContributorInsightsOutput || (exports.ListContributorInsightsOutput = {}));
var ListGlobalTablesInput;
(function (ListGlobalTablesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGlobalTablesInput");
    }
    ListGlobalTablesInput.isa = isa;
})(ListGlobalTablesInput = exports.ListGlobalTablesInput || (exports.ListGlobalTablesInput = {}));
var ListGlobalTablesOutput;
(function (ListGlobalTablesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGlobalTablesOutput");
    }
    ListGlobalTablesOutput.isa = isa;
})(ListGlobalTablesOutput = exports.ListGlobalTablesOutput || (exports.ListGlobalTablesOutput = {}));
var ListTablesInput;
(function (ListTablesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTablesInput");
    }
    ListTablesInput.isa = isa;
})(ListTablesInput = exports.ListTablesInput || (exports.ListTablesInput = {}));
var ListTablesOutput;
(function (ListTablesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTablesOutput");
    }
    ListTablesOutput.isa = isa;
})(ListTablesOutput = exports.ListTablesOutput || (exports.ListTablesOutput = {}));
var ListTagsOfResourceInput;
(function (ListTagsOfResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsOfResourceInput");
    }
    ListTagsOfResourceInput.isa = isa;
})(ListTagsOfResourceInput = exports.ListTagsOfResourceInput || (exports.ListTagsOfResourceInput = {}));
var ListTagsOfResourceOutput;
(function (ListTagsOfResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsOfResourceOutput");
    }
    ListTagsOfResourceOutput.isa = isa;
})(ListTagsOfResourceOutput = exports.ListTagsOfResourceOutput || (exports.ListTagsOfResourceOutput = {}));
var LocalSecondaryIndex;
(function (LocalSecondaryIndex) {
    function isa(o) {
        return smithy_client_1.isa(o, "LocalSecondaryIndex");
    }
    LocalSecondaryIndex.isa = isa;
})(LocalSecondaryIndex = exports.LocalSecondaryIndex || (exports.LocalSecondaryIndex = {}));
var LocalSecondaryIndexDescription;
(function (LocalSecondaryIndexDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "LocalSecondaryIndexDescription");
    }
    LocalSecondaryIndexDescription.isa = isa;
})(LocalSecondaryIndexDescription = exports.LocalSecondaryIndexDescription || (exports.LocalSecondaryIndexDescription = {}));
var LocalSecondaryIndexInfo;
(function (LocalSecondaryIndexInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "LocalSecondaryIndexInfo");
    }
    LocalSecondaryIndexInfo.isa = isa;
})(LocalSecondaryIndexInfo = exports.LocalSecondaryIndexInfo || (exports.LocalSecondaryIndexInfo = {}));
var PointInTimeRecoveryDescription;
(function (PointInTimeRecoveryDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "PointInTimeRecoveryDescription");
    }
    PointInTimeRecoveryDescription.isa = isa;
})(PointInTimeRecoveryDescription = exports.PointInTimeRecoveryDescription || (exports.PointInTimeRecoveryDescription = {}));
var PointInTimeRecoverySpecification;
(function (PointInTimeRecoverySpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "PointInTimeRecoverySpecification");
    }
    PointInTimeRecoverySpecification.isa = isa;
})(PointInTimeRecoverySpecification = exports.PointInTimeRecoverySpecification || (exports.PointInTimeRecoverySpecification = {}));
var PointInTimeRecoveryUnavailableException;
(function (PointInTimeRecoveryUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PointInTimeRecoveryUnavailableException");
    }
    PointInTimeRecoveryUnavailableException.isa = isa;
})(PointInTimeRecoveryUnavailableException = exports.PointInTimeRecoveryUnavailableException || (exports.PointInTimeRecoveryUnavailableException = {}));
var Projection;
(function (Projection) {
    function isa(o) {
        return smithy_client_1.isa(o, "Projection");
    }
    Projection.isa = isa;
})(Projection = exports.Projection || (exports.Projection = {}));
var ProvisionedThroughput;
(function (ProvisionedThroughput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProvisionedThroughput");
    }
    ProvisionedThroughput.isa = isa;
})(ProvisionedThroughput = exports.ProvisionedThroughput || (exports.ProvisionedThroughput = {}));
var ProvisionedThroughputDescription;
(function (ProvisionedThroughputDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProvisionedThroughputDescription");
    }
    ProvisionedThroughputDescription.isa = isa;
})(ProvisionedThroughputDescription = exports.ProvisionedThroughputDescription || (exports.ProvisionedThroughputDescription = {}));
var ProvisionedThroughputExceededException;
(function (ProvisionedThroughputExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProvisionedThroughputExceededException");
    }
    ProvisionedThroughputExceededException.isa = isa;
})(ProvisionedThroughputExceededException = exports.ProvisionedThroughputExceededException || (exports.ProvisionedThroughputExceededException = {}));
var ProvisionedThroughputOverride;
(function (ProvisionedThroughputOverride) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProvisionedThroughputOverride");
    }
    ProvisionedThroughputOverride.isa = isa;
})(ProvisionedThroughputOverride = exports.ProvisionedThroughputOverride || (exports.ProvisionedThroughputOverride = {}));
var Put;
(function (Put) {
    function isa(o) {
        return smithy_client_1.isa(o, "Put");
    }
    Put.isa = isa;
})(Put = exports.Put || (exports.Put = {}));
var PutItemInput;
(function (PutItemInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutItemInput");
    }
    PutItemInput.isa = isa;
})(PutItemInput = exports.PutItemInput || (exports.PutItemInput = {}));
var PutItemOutput;
(function (PutItemOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutItemOutput");
    }
    PutItemOutput.isa = isa;
})(PutItemOutput = exports.PutItemOutput || (exports.PutItemOutput = {}));
var PutRequest;
(function (PutRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRequest");
    }
    PutRequest.isa = isa;
})(PutRequest = exports.PutRequest || (exports.PutRequest = {}));
var QueryInput;
(function (QueryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryInput");
    }
    QueryInput.isa = isa;
})(QueryInput = exports.QueryInput || (exports.QueryInput = {}));
var QueryOutput;
(function (QueryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryOutput");
    }
    QueryOutput.isa = isa;
})(QueryOutput = exports.QueryOutput || (exports.QueryOutput = {}));
var Replica;
(function (Replica) {
    function isa(o) {
        return smithy_client_1.isa(o, "Replica");
    }
    Replica.isa = isa;
})(Replica = exports.Replica || (exports.Replica = {}));
var ReplicaAlreadyExistsException;
(function (ReplicaAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaAlreadyExistsException");
    }
    ReplicaAlreadyExistsException.isa = isa;
})(ReplicaAlreadyExistsException = exports.ReplicaAlreadyExistsException || (exports.ReplicaAlreadyExistsException = {}));
var ReplicaAutoScalingDescription;
(function (ReplicaAutoScalingDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaAutoScalingDescription");
    }
    ReplicaAutoScalingDescription.isa = isa;
})(ReplicaAutoScalingDescription = exports.ReplicaAutoScalingDescription || (exports.ReplicaAutoScalingDescription = {}));
var ReplicaAutoScalingUpdate;
(function (ReplicaAutoScalingUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaAutoScalingUpdate");
    }
    ReplicaAutoScalingUpdate.isa = isa;
})(ReplicaAutoScalingUpdate = exports.ReplicaAutoScalingUpdate || (exports.ReplicaAutoScalingUpdate = {}));
var ReplicaDescription;
(function (ReplicaDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaDescription");
    }
    ReplicaDescription.isa = isa;
})(ReplicaDescription = exports.ReplicaDescription || (exports.ReplicaDescription = {}));
var ReplicaGlobalSecondaryIndex;
(function (ReplicaGlobalSecondaryIndex) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaGlobalSecondaryIndex");
    }
    ReplicaGlobalSecondaryIndex.isa = isa;
})(ReplicaGlobalSecondaryIndex = exports.ReplicaGlobalSecondaryIndex || (exports.ReplicaGlobalSecondaryIndex = {}));
var ReplicaGlobalSecondaryIndexAutoScalingDescription;
(function (ReplicaGlobalSecondaryIndexAutoScalingDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaGlobalSecondaryIndexAutoScalingDescription");
    }
    ReplicaGlobalSecondaryIndexAutoScalingDescription.isa = isa;
})(ReplicaGlobalSecondaryIndexAutoScalingDescription = exports.ReplicaGlobalSecondaryIndexAutoScalingDescription || (exports.ReplicaGlobalSecondaryIndexAutoScalingDescription = {}));
var ReplicaGlobalSecondaryIndexAutoScalingUpdate;
(function (ReplicaGlobalSecondaryIndexAutoScalingUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaGlobalSecondaryIndexAutoScalingUpdate");
    }
    ReplicaGlobalSecondaryIndexAutoScalingUpdate.isa = isa;
})(ReplicaGlobalSecondaryIndexAutoScalingUpdate = exports.ReplicaGlobalSecondaryIndexAutoScalingUpdate || (exports.ReplicaGlobalSecondaryIndexAutoScalingUpdate = {}));
var ReplicaGlobalSecondaryIndexDescription;
(function (ReplicaGlobalSecondaryIndexDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaGlobalSecondaryIndexDescription");
    }
    ReplicaGlobalSecondaryIndexDescription.isa = isa;
})(ReplicaGlobalSecondaryIndexDescription = exports.ReplicaGlobalSecondaryIndexDescription || (exports.ReplicaGlobalSecondaryIndexDescription = {}));
var ReplicaGlobalSecondaryIndexSettingsDescription;
(function (ReplicaGlobalSecondaryIndexSettingsDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaGlobalSecondaryIndexSettingsDescription");
    }
    ReplicaGlobalSecondaryIndexSettingsDescription.isa = isa;
})(ReplicaGlobalSecondaryIndexSettingsDescription = exports.ReplicaGlobalSecondaryIndexSettingsDescription || (exports.ReplicaGlobalSecondaryIndexSettingsDescription = {}));
var ReplicaGlobalSecondaryIndexSettingsUpdate;
(function (ReplicaGlobalSecondaryIndexSettingsUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaGlobalSecondaryIndexSettingsUpdate");
    }
    ReplicaGlobalSecondaryIndexSettingsUpdate.isa = isa;
})(ReplicaGlobalSecondaryIndexSettingsUpdate = exports.ReplicaGlobalSecondaryIndexSettingsUpdate || (exports.ReplicaGlobalSecondaryIndexSettingsUpdate = {}));
var ReplicaNotFoundException;
(function (ReplicaNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaNotFoundException");
    }
    ReplicaNotFoundException.isa = isa;
})(ReplicaNotFoundException = exports.ReplicaNotFoundException || (exports.ReplicaNotFoundException = {}));
var ReplicaSettingsDescription;
(function (ReplicaSettingsDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaSettingsDescription");
    }
    ReplicaSettingsDescription.isa = isa;
})(ReplicaSettingsDescription = exports.ReplicaSettingsDescription || (exports.ReplicaSettingsDescription = {}));
var ReplicaSettingsUpdate;
(function (ReplicaSettingsUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaSettingsUpdate");
    }
    ReplicaSettingsUpdate.isa = isa;
})(ReplicaSettingsUpdate = exports.ReplicaSettingsUpdate || (exports.ReplicaSettingsUpdate = {}));
var ReplicaUpdate;
(function (ReplicaUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicaUpdate");
    }
    ReplicaUpdate.isa = isa;
})(ReplicaUpdate = exports.ReplicaUpdate || (exports.ReplicaUpdate = {}));
var ReplicationGroupUpdate;
(function (ReplicationGroupUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicationGroupUpdate");
    }
    ReplicationGroupUpdate.isa = isa;
})(ReplicationGroupUpdate = exports.ReplicationGroupUpdate || (exports.ReplicationGroupUpdate = {}));
var RequestLimitExceeded;
(function (RequestLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestLimitExceeded");
    }
    RequestLimitExceeded.isa = isa;
})(RequestLimitExceeded = exports.RequestLimitExceeded || (exports.RequestLimitExceeded = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUseException");
    }
    ResourceInUseException.isa = isa;
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var RestoreSummary;
(function (RestoreSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreSummary");
    }
    RestoreSummary.isa = isa;
})(RestoreSummary = exports.RestoreSummary || (exports.RestoreSummary = {}));
var RestoreTableFromBackupInput;
(function (RestoreTableFromBackupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreTableFromBackupInput");
    }
    RestoreTableFromBackupInput.isa = isa;
})(RestoreTableFromBackupInput = exports.RestoreTableFromBackupInput || (exports.RestoreTableFromBackupInput = {}));
var RestoreTableFromBackupOutput;
(function (RestoreTableFromBackupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreTableFromBackupOutput");
    }
    RestoreTableFromBackupOutput.isa = isa;
})(RestoreTableFromBackupOutput = exports.RestoreTableFromBackupOutput || (exports.RestoreTableFromBackupOutput = {}));
var RestoreTableToPointInTimeInput;
(function (RestoreTableToPointInTimeInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreTableToPointInTimeInput");
    }
    RestoreTableToPointInTimeInput.isa = isa;
})(RestoreTableToPointInTimeInput = exports.RestoreTableToPointInTimeInput || (exports.RestoreTableToPointInTimeInput = {}));
var RestoreTableToPointInTimeOutput;
(function (RestoreTableToPointInTimeOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreTableToPointInTimeOutput");
    }
    RestoreTableToPointInTimeOutput.isa = isa;
})(RestoreTableToPointInTimeOutput = exports.RestoreTableToPointInTimeOutput || (exports.RestoreTableToPointInTimeOutput = {}));
var SSEDescription;
(function (SSEDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "SSEDescription");
    }
    SSEDescription.isa = isa;
})(SSEDescription = exports.SSEDescription || (exports.SSEDescription = {}));
var SSESpecification;
(function (SSESpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "SSESpecification");
    }
    SSESpecification.isa = isa;
})(SSESpecification = exports.SSESpecification || (exports.SSESpecification = {}));
var ScanInput;
(function (ScanInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScanInput");
    }
    ScanInput.isa = isa;
})(ScanInput = exports.ScanInput || (exports.ScanInput = {}));
var ScanOutput;
(function (ScanOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScanOutput");
    }
    ScanOutput.isa = isa;
})(ScanOutput = exports.ScanOutput || (exports.ScanOutput = {}));
var SourceTableDetails;
(function (SourceTableDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceTableDetails");
    }
    SourceTableDetails.isa = isa;
})(SourceTableDetails = exports.SourceTableDetails || (exports.SourceTableDetails = {}));
var SourceTableFeatureDetails;
(function (SourceTableFeatureDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceTableFeatureDetails");
    }
    SourceTableFeatureDetails.isa = isa;
})(SourceTableFeatureDetails = exports.SourceTableFeatureDetails || (exports.SourceTableFeatureDetails = {}));
var StreamSpecification;
(function (StreamSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "StreamSpecification");
    }
    StreamSpecification.isa = isa;
})(StreamSpecification = exports.StreamSpecification || (exports.StreamSpecification = {}));
var TableAlreadyExistsException;
(function (TableAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TableAlreadyExistsException");
    }
    TableAlreadyExistsException.isa = isa;
})(TableAlreadyExistsException = exports.TableAlreadyExistsException || (exports.TableAlreadyExistsException = {}));
var TableAutoScalingDescription;
(function (TableAutoScalingDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "TableAutoScalingDescription");
    }
    TableAutoScalingDescription.isa = isa;
})(TableAutoScalingDescription = exports.TableAutoScalingDescription || (exports.TableAutoScalingDescription = {}));
var TableDescription;
(function (TableDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "TableDescription");
    }
    TableDescription.isa = isa;
})(TableDescription = exports.TableDescription || (exports.TableDescription = {}));
var TableInUseException;
(function (TableInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TableInUseException");
    }
    TableInUseException.isa = isa;
})(TableInUseException = exports.TableInUseException || (exports.TableInUseException = {}));
var TableNotFoundException;
(function (TableNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TableNotFoundException");
    }
    TableNotFoundException.isa = isa;
})(TableNotFoundException = exports.TableNotFoundException || (exports.TableNotFoundException = {}));
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
var TimeToLiveDescription;
(function (TimeToLiveDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "TimeToLiveDescription");
    }
    TimeToLiveDescription.isa = isa;
})(TimeToLiveDescription = exports.TimeToLiveDescription || (exports.TimeToLiveDescription = {}));
var TimeToLiveSpecification;
(function (TimeToLiveSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "TimeToLiveSpecification");
    }
    TimeToLiveSpecification.isa = isa;
})(TimeToLiveSpecification = exports.TimeToLiveSpecification || (exports.TimeToLiveSpecification = {}));
var TransactGetItem;
(function (TransactGetItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransactGetItem");
    }
    TransactGetItem.isa = isa;
})(TransactGetItem = exports.TransactGetItem || (exports.TransactGetItem = {}));
var TransactGetItemsInput;
(function (TransactGetItemsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransactGetItemsInput");
    }
    TransactGetItemsInput.isa = isa;
})(TransactGetItemsInput = exports.TransactGetItemsInput || (exports.TransactGetItemsInput = {}));
var TransactGetItemsOutput;
(function (TransactGetItemsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransactGetItemsOutput");
    }
    TransactGetItemsOutput.isa = isa;
})(TransactGetItemsOutput = exports.TransactGetItemsOutput || (exports.TransactGetItemsOutput = {}));
var TransactWriteItem;
(function (TransactWriteItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransactWriteItem");
    }
    TransactWriteItem.isa = isa;
})(TransactWriteItem = exports.TransactWriteItem || (exports.TransactWriteItem = {}));
var TransactWriteItemsInput;
(function (TransactWriteItemsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransactWriteItemsInput");
    }
    TransactWriteItemsInput.isa = isa;
})(TransactWriteItemsInput = exports.TransactWriteItemsInput || (exports.TransactWriteItemsInput = {}));
var TransactWriteItemsOutput;
(function (TransactWriteItemsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransactWriteItemsOutput");
    }
    TransactWriteItemsOutput.isa = isa;
})(TransactWriteItemsOutput = exports.TransactWriteItemsOutput || (exports.TransactWriteItemsOutput = {}));
var TransactionCanceledException;
(function (TransactionCanceledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransactionCanceledException");
    }
    TransactionCanceledException.isa = isa;
})(TransactionCanceledException = exports.TransactionCanceledException || (exports.TransactionCanceledException = {}));
var TransactionConflictException;
(function (TransactionConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransactionConflictException");
    }
    TransactionConflictException.isa = isa;
})(TransactionConflictException = exports.TransactionConflictException || (exports.TransactionConflictException = {}));
var TransactionInProgressException;
(function (TransactionInProgressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransactionInProgressException");
    }
    TransactionInProgressException.isa = isa;
})(TransactionInProgressException = exports.TransactionInProgressException || (exports.TransactionInProgressException = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceInput");
    }
    UntagResourceInput.isa = isa;
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var Update;
(function (Update) {
    function isa(o) {
        return smithy_client_1.isa(o, "Update");
    }
    Update.isa = isa;
})(Update = exports.Update || (exports.Update = {}));
var UpdateContinuousBackupsInput;
(function (UpdateContinuousBackupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateContinuousBackupsInput");
    }
    UpdateContinuousBackupsInput.isa = isa;
})(UpdateContinuousBackupsInput = exports.UpdateContinuousBackupsInput || (exports.UpdateContinuousBackupsInput = {}));
var UpdateContinuousBackupsOutput;
(function (UpdateContinuousBackupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateContinuousBackupsOutput");
    }
    UpdateContinuousBackupsOutput.isa = isa;
})(UpdateContinuousBackupsOutput = exports.UpdateContinuousBackupsOutput || (exports.UpdateContinuousBackupsOutput = {}));
var UpdateContributorInsightsInput;
(function (UpdateContributorInsightsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateContributorInsightsInput");
    }
    UpdateContributorInsightsInput.isa = isa;
})(UpdateContributorInsightsInput = exports.UpdateContributorInsightsInput || (exports.UpdateContributorInsightsInput = {}));
var UpdateContributorInsightsOutput;
(function (UpdateContributorInsightsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateContributorInsightsOutput");
    }
    UpdateContributorInsightsOutput.isa = isa;
})(UpdateContributorInsightsOutput = exports.UpdateContributorInsightsOutput || (exports.UpdateContributorInsightsOutput = {}));
var UpdateGlobalSecondaryIndexAction;
(function (UpdateGlobalSecondaryIndexAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGlobalSecondaryIndexAction");
    }
    UpdateGlobalSecondaryIndexAction.isa = isa;
})(UpdateGlobalSecondaryIndexAction = exports.UpdateGlobalSecondaryIndexAction || (exports.UpdateGlobalSecondaryIndexAction = {}));
var UpdateGlobalTableInput;
(function (UpdateGlobalTableInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGlobalTableInput");
    }
    UpdateGlobalTableInput.isa = isa;
})(UpdateGlobalTableInput = exports.UpdateGlobalTableInput || (exports.UpdateGlobalTableInput = {}));
var UpdateGlobalTableOutput;
(function (UpdateGlobalTableOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGlobalTableOutput");
    }
    UpdateGlobalTableOutput.isa = isa;
})(UpdateGlobalTableOutput = exports.UpdateGlobalTableOutput || (exports.UpdateGlobalTableOutput = {}));
var UpdateGlobalTableSettingsInput;
(function (UpdateGlobalTableSettingsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGlobalTableSettingsInput");
    }
    UpdateGlobalTableSettingsInput.isa = isa;
})(UpdateGlobalTableSettingsInput = exports.UpdateGlobalTableSettingsInput || (exports.UpdateGlobalTableSettingsInput = {}));
var UpdateGlobalTableSettingsOutput;
(function (UpdateGlobalTableSettingsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGlobalTableSettingsOutput");
    }
    UpdateGlobalTableSettingsOutput.isa = isa;
})(UpdateGlobalTableSettingsOutput = exports.UpdateGlobalTableSettingsOutput || (exports.UpdateGlobalTableSettingsOutput = {}));
var UpdateItemInput;
(function (UpdateItemInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateItemInput");
    }
    UpdateItemInput.isa = isa;
})(UpdateItemInput = exports.UpdateItemInput || (exports.UpdateItemInput = {}));
var UpdateItemOutput;
(function (UpdateItemOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateItemOutput");
    }
    UpdateItemOutput.isa = isa;
})(UpdateItemOutput = exports.UpdateItemOutput || (exports.UpdateItemOutput = {}));
var UpdateReplicationGroupMemberAction;
(function (UpdateReplicationGroupMemberAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateReplicationGroupMemberAction");
    }
    UpdateReplicationGroupMemberAction.isa = isa;
})(UpdateReplicationGroupMemberAction = exports.UpdateReplicationGroupMemberAction || (exports.UpdateReplicationGroupMemberAction = {}));
var UpdateTableInput;
(function (UpdateTableInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTableInput");
    }
    UpdateTableInput.isa = isa;
})(UpdateTableInput = exports.UpdateTableInput || (exports.UpdateTableInput = {}));
var UpdateTableOutput;
(function (UpdateTableOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTableOutput");
    }
    UpdateTableOutput.isa = isa;
})(UpdateTableOutput = exports.UpdateTableOutput || (exports.UpdateTableOutput = {}));
var UpdateTableReplicaAutoScalingInput;
(function (UpdateTableReplicaAutoScalingInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTableReplicaAutoScalingInput");
    }
    UpdateTableReplicaAutoScalingInput.isa = isa;
})(UpdateTableReplicaAutoScalingInput = exports.UpdateTableReplicaAutoScalingInput || (exports.UpdateTableReplicaAutoScalingInput = {}));
var UpdateTableReplicaAutoScalingOutput;
(function (UpdateTableReplicaAutoScalingOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTableReplicaAutoScalingOutput");
    }
    UpdateTableReplicaAutoScalingOutput.isa = isa;
})(UpdateTableReplicaAutoScalingOutput = exports.UpdateTableReplicaAutoScalingOutput || (exports.UpdateTableReplicaAutoScalingOutput = {}));
var UpdateTimeToLiveInput;
(function (UpdateTimeToLiveInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTimeToLiveInput");
    }
    UpdateTimeToLiveInput.isa = isa;
})(UpdateTimeToLiveInput = exports.UpdateTimeToLiveInput || (exports.UpdateTimeToLiveInput = {}));
var UpdateTimeToLiveOutput;
(function (UpdateTimeToLiveOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTimeToLiveOutput");
    }
    UpdateTimeToLiveOutput.isa = isa;
})(UpdateTimeToLiveOutput = exports.UpdateTimeToLiveOutput || (exports.UpdateTimeToLiveOutput = {}));
var WriteRequest;
(function (WriteRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "WriteRequest");
    }
    WriteRequest.isa = isa;
})(WriteRequest = exports.WriteRequest || (exports.WriteRequest = {}));
//# sourceMappingURL=index.js.map