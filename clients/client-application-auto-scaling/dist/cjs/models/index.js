"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AdjustmentType;
(function (AdjustmentType) {
    AdjustmentType["ChangeInCapacity"] = "ChangeInCapacity";
    AdjustmentType["ExactCapacity"] = "ExactCapacity";
    AdjustmentType["PercentChangeInCapacity"] = "PercentChangeInCapacity";
})(AdjustmentType = exports.AdjustmentType || (exports.AdjustmentType = {}));
var Alarm;
(function (Alarm) {
    function isa(o) {
        return smithy_client_1.isa(o, "Alarm");
    }
    Alarm.isa = isa;
})(Alarm = exports.Alarm || (exports.Alarm = {}));
var ConcurrentUpdateException;
(function (ConcurrentUpdateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentUpdateException");
    }
    ConcurrentUpdateException.isa = isa;
})(ConcurrentUpdateException = exports.ConcurrentUpdateException || (exports.ConcurrentUpdateException = {}));
var CustomizedMetricSpecification;
(function (CustomizedMetricSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomizedMetricSpecification");
    }
    CustomizedMetricSpecification.isa = isa;
})(CustomizedMetricSpecification = exports.CustomizedMetricSpecification || (exports.CustomizedMetricSpecification = {}));
var DeleteScalingPolicyRequest;
(function (DeleteScalingPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteScalingPolicyRequest");
    }
    DeleteScalingPolicyRequest.isa = isa;
})(DeleteScalingPolicyRequest = exports.DeleteScalingPolicyRequest || (exports.DeleteScalingPolicyRequest = {}));
var DeleteScalingPolicyResponse;
(function (DeleteScalingPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteScalingPolicyResponse");
    }
    DeleteScalingPolicyResponse.isa = isa;
})(DeleteScalingPolicyResponse = exports.DeleteScalingPolicyResponse || (exports.DeleteScalingPolicyResponse = {}));
var DeleteScheduledActionRequest;
(function (DeleteScheduledActionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteScheduledActionRequest");
    }
    DeleteScheduledActionRequest.isa = isa;
})(DeleteScheduledActionRequest = exports.DeleteScheduledActionRequest || (exports.DeleteScheduledActionRequest = {}));
var DeleteScheduledActionResponse;
(function (DeleteScheduledActionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteScheduledActionResponse");
    }
    DeleteScheduledActionResponse.isa = isa;
})(DeleteScheduledActionResponse = exports.DeleteScheduledActionResponse || (exports.DeleteScheduledActionResponse = {}));
var DeregisterScalableTargetRequest;
(function (DeregisterScalableTargetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterScalableTargetRequest");
    }
    DeregisterScalableTargetRequest.isa = isa;
})(DeregisterScalableTargetRequest = exports.DeregisterScalableTargetRequest || (exports.DeregisterScalableTargetRequest = {}));
var DeregisterScalableTargetResponse;
(function (DeregisterScalableTargetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterScalableTargetResponse");
    }
    DeregisterScalableTargetResponse.isa = isa;
})(DeregisterScalableTargetResponse = exports.DeregisterScalableTargetResponse || (exports.DeregisterScalableTargetResponse = {}));
var DescribeScalableTargetsRequest;
(function (DescribeScalableTargetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScalableTargetsRequest");
    }
    DescribeScalableTargetsRequest.isa = isa;
})(DescribeScalableTargetsRequest = exports.DescribeScalableTargetsRequest || (exports.DescribeScalableTargetsRequest = {}));
var DescribeScalableTargetsResponse;
(function (DescribeScalableTargetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScalableTargetsResponse");
    }
    DescribeScalableTargetsResponse.isa = isa;
})(DescribeScalableTargetsResponse = exports.DescribeScalableTargetsResponse || (exports.DescribeScalableTargetsResponse = {}));
var DescribeScalingActivitiesRequest;
(function (DescribeScalingActivitiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScalingActivitiesRequest");
    }
    DescribeScalingActivitiesRequest.isa = isa;
})(DescribeScalingActivitiesRequest = exports.DescribeScalingActivitiesRequest || (exports.DescribeScalingActivitiesRequest = {}));
var DescribeScalingActivitiesResponse;
(function (DescribeScalingActivitiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScalingActivitiesResponse");
    }
    DescribeScalingActivitiesResponse.isa = isa;
})(DescribeScalingActivitiesResponse = exports.DescribeScalingActivitiesResponse || (exports.DescribeScalingActivitiesResponse = {}));
var DescribeScalingPoliciesRequest;
(function (DescribeScalingPoliciesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScalingPoliciesRequest");
    }
    DescribeScalingPoliciesRequest.isa = isa;
})(DescribeScalingPoliciesRequest = exports.DescribeScalingPoliciesRequest || (exports.DescribeScalingPoliciesRequest = {}));
var DescribeScalingPoliciesResponse;
(function (DescribeScalingPoliciesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScalingPoliciesResponse");
    }
    DescribeScalingPoliciesResponse.isa = isa;
})(DescribeScalingPoliciesResponse = exports.DescribeScalingPoliciesResponse || (exports.DescribeScalingPoliciesResponse = {}));
var DescribeScheduledActionsRequest;
(function (DescribeScheduledActionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScheduledActionsRequest");
    }
    DescribeScheduledActionsRequest.isa = isa;
})(DescribeScheduledActionsRequest = exports.DescribeScheduledActionsRequest || (exports.DescribeScheduledActionsRequest = {}));
var DescribeScheduledActionsResponse;
(function (DescribeScheduledActionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScheduledActionsResponse");
    }
    DescribeScheduledActionsResponse.isa = isa;
})(DescribeScheduledActionsResponse = exports.DescribeScheduledActionsResponse || (exports.DescribeScheduledActionsResponse = {}));
var FailedResourceAccessException;
(function (FailedResourceAccessException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailedResourceAccessException");
    }
    FailedResourceAccessException.isa = isa;
})(FailedResourceAccessException = exports.FailedResourceAccessException || (exports.FailedResourceAccessException = {}));
var InternalServiceException;
(function (InternalServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServiceException");
    }
    InternalServiceException.isa = isa;
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextTokenException");
    }
    InvalidNextTokenException.isa = isa;
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var MetricAggregationType;
(function (MetricAggregationType) {
    MetricAggregationType["Average"] = "Average";
    MetricAggregationType["Maximum"] = "Maximum";
    MetricAggregationType["Minimum"] = "Minimum";
})(MetricAggregationType = exports.MetricAggregationType || (exports.MetricAggregationType = {}));
var MetricDimension;
(function (MetricDimension) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricDimension");
    }
    MetricDimension.isa = isa;
})(MetricDimension = exports.MetricDimension || (exports.MetricDimension = {}));
var MetricStatistic;
(function (MetricStatistic) {
    MetricStatistic["Average"] = "Average";
    MetricStatistic["Maximum"] = "Maximum";
    MetricStatistic["Minimum"] = "Minimum";
    MetricStatistic["SampleCount"] = "SampleCount";
    MetricStatistic["Sum"] = "Sum";
})(MetricStatistic = exports.MetricStatistic || (exports.MetricStatistic = {}));
var MetricType;
(function (MetricType) {
    MetricType["ALBRequestCountPerTarget"] = "ALBRequestCountPerTarget";
    MetricType["AppStreamAverageCapacityUtilization"] = "AppStreamAverageCapacityUtilization";
    MetricType["ComprehendInferenceUtilization"] = "ComprehendInferenceUtilization";
    MetricType["DynamoDBReadCapacityUtilization"] = "DynamoDBReadCapacityUtilization";
    MetricType["DynamoDBWriteCapacityUtilization"] = "DynamoDBWriteCapacityUtilization";
    MetricType["EC2SpotFleetRequestAverageCPUUtilization"] = "EC2SpotFleetRequestAverageCPUUtilization";
    MetricType["EC2SpotFleetRequestAverageNetworkIn"] = "EC2SpotFleetRequestAverageNetworkIn";
    MetricType["EC2SpotFleetRequestAverageNetworkOut"] = "EC2SpotFleetRequestAverageNetworkOut";
    MetricType["ECSServiceAverageCPUUtilization"] = "ECSServiceAverageCPUUtilization";
    MetricType["ECSServiceAverageMemoryUtilization"] = "ECSServiceAverageMemoryUtilization";
    MetricType["LambdaProvisionedConcurrencyUtilization"] = "LambdaProvisionedConcurrencyUtilization";
    MetricType["RDSReaderAverageCPUUtilization"] = "RDSReaderAverageCPUUtilization";
    MetricType["RDSReaderAverageDatabaseConnections"] = "RDSReaderAverageDatabaseConnections";
    MetricType["SageMakerVariantInvocationsPerInstance"] = "SageMakerVariantInvocationsPerInstance";
})(MetricType = exports.MetricType || (exports.MetricType = {}));
var ObjectNotFoundException;
(function (ObjectNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ObjectNotFoundException");
    }
    ObjectNotFoundException.isa = isa;
})(ObjectNotFoundException = exports.ObjectNotFoundException || (exports.ObjectNotFoundException = {}));
var PolicyType;
(function (PolicyType) {
    PolicyType["StepScaling"] = "StepScaling";
    PolicyType["TargetTrackingScaling"] = "TargetTrackingScaling";
})(PolicyType = exports.PolicyType || (exports.PolicyType = {}));
var PredefinedMetricSpecification;
(function (PredefinedMetricSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "PredefinedMetricSpecification");
    }
    PredefinedMetricSpecification.isa = isa;
})(PredefinedMetricSpecification = exports.PredefinedMetricSpecification || (exports.PredefinedMetricSpecification = {}));
var PutScalingPolicyRequest;
(function (PutScalingPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutScalingPolicyRequest");
    }
    PutScalingPolicyRequest.isa = isa;
})(PutScalingPolicyRequest = exports.PutScalingPolicyRequest || (exports.PutScalingPolicyRequest = {}));
var PutScalingPolicyResponse;
(function (PutScalingPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutScalingPolicyResponse");
    }
    PutScalingPolicyResponse.isa = isa;
})(PutScalingPolicyResponse = exports.PutScalingPolicyResponse || (exports.PutScalingPolicyResponse = {}));
var PutScheduledActionRequest;
(function (PutScheduledActionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutScheduledActionRequest");
    }
    PutScheduledActionRequest.isa = isa;
})(PutScheduledActionRequest = exports.PutScheduledActionRequest || (exports.PutScheduledActionRequest = {}));
var PutScheduledActionResponse;
(function (PutScheduledActionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutScheduledActionResponse");
    }
    PutScheduledActionResponse.isa = isa;
})(PutScheduledActionResponse = exports.PutScheduledActionResponse || (exports.PutScheduledActionResponse = {}));
var RegisterScalableTargetRequest;
(function (RegisterScalableTargetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterScalableTargetRequest");
    }
    RegisterScalableTargetRequest.isa = isa;
})(RegisterScalableTargetRequest = exports.RegisterScalableTargetRequest || (exports.RegisterScalableTargetRequest = {}));
var RegisterScalableTargetResponse;
(function (RegisterScalableTargetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterScalableTargetResponse");
    }
    RegisterScalableTargetResponse.isa = isa;
})(RegisterScalableTargetResponse = exports.RegisterScalableTargetResponse || (exports.RegisterScalableTargetResponse = {}));
var ScalableDimension;
(function (ScalableDimension) {
    ScalableDimension["AppstreamFleetDesiredCapacity"] = "appstream:fleet:DesiredCapacity";
    ScalableDimension["ComprehendDocClassifierEndpointInferenceUnits"] = "comprehend:document-classifier-endpoint:DesiredInferenceUnits";
    ScalableDimension["CustomResourceScalableDimension"] = "custom-resource:ResourceType:Property";
    ScalableDimension["DynamoDBIndexReadCapacityUnits"] = "dynamodb:index:ReadCapacityUnits";
    ScalableDimension["DynamoDBIndexWriteCapacityUnits"] = "dynamodb:index:WriteCapacityUnits";
    ScalableDimension["DynamoDBTableReadCapacityUnits"] = "dynamodb:table:ReadCapacityUnits";
    ScalableDimension["DynamoDBTableWriteCapacityUnits"] = "dynamodb:table:WriteCapacityUnits";
    ScalableDimension["EC2SpotFleetRequestTargetCapacity"] = "ec2:spot-fleet-request:TargetCapacity";
    ScalableDimension["ECSServiceDesiredCount"] = "ecs:service:DesiredCount";
    ScalableDimension["EMRInstanceGroupInstanceCount"] = "elasticmapreduce:instancegroup:InstanceCount";
    ScalableDimension["LambdaFunctionProvisionedConcurrency"] = "lambda:function:ProvisionedConcurrency";
    ScalableDimension["RDSClusterReadReplicaCount"] = "rds:cluster:ReadReplicaCount";
    ScalableDimension["SageMakerVariantDesiredInstanceCount"] = "sagemaker:variant:DesiredInstanceCount";
})(ScalableDimension = exports.ScalableDimension || (exports.ScalableDimension = {}));
var ScalableTarget;
(function (ScalableTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalableTarget");
    }
    ScalableTarget.isa = isa;
})(ScalableTarget = exports.ScalableTarget || (exports.ScalableTarget = {}));
var ScalableTargetAction;
(function (ScalableTargetAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalableTargetAction");
    }
    ScalableTargetAction.isa = isa;
})(ScalableTargetAction = exports.ScalableTargetAction || (exports.ScalableTargetAction = {}));
var ScalingActivity;
(function (ScalingActivity) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalingActivity");
    }
    ScalingActivity.isa = isa;
})(ScalingActivity = exports.ScalingActivity || (exports.ScalingActivity = {}));
var ScalingActivityStatusCode;
(function (ScalingActivityStatusCode) {
    ScalingActivityStatusCode["Failed"] = "Failed";
    ScalingActivityStatusCode["InProgress"] = "InProgress";
    ScalingActivityStatusCode["Overridden"] = "Overridden";
    ScalingActivityStatusCode["Pending"] = "Pending";
    ScalingActivityStatusCode["Successful"] = "Successful";
    ScalingActivityStatusCode["Unfulfilled"] = "Unfulfilled";
})(ScalingActivityStatusCode = exports.ScalingActivityStatusCode || (exports.ScalingActivityStatusCode = {}));
var ScalingPolicy;
(function (ScalingPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalingPolicy");
    }
    ScalingPolicy.isa = isa;
})(ScalingPolicy = exports.ScalingPolicy || (exports.ScalingPolicy = {}));
var ScheduledAction;
(function (ScheduledAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScheduledAction");
    }
    ScheduledAction.isa = isa;
})(ScheduledAction = exports.ScheduledAction || (exports.ScheduledAction = {}));
var ServiceNamespace;
(function (ServiceNamespace) {
    ServiceNamespace["APPSTREAM"] = "appstream";
    ServiceNamespace["COMPREHEND"] = "comprehend";
    ServiceNamespace["CUSTOM_RESOURCE"] = "custom-resource";
    ServiceNamespace["DYNAMODB"] = "dynamodb";
    ServiceNamespace["EC2"] = "ec2";
    ServiceNamespace["ECS"] = "ecs";
    ServiceNamespace["EMR"] = "elasticmapreduce";
    ServiceNamespace["LAMBDA"] = "lambda";
    ServiceNamespace["RDS"] = "rds";
    ServiceNamespace["SAGEMAKER"] = "sagemaker";
})(ServiceNamespace = exports.ServiceNamespace || (exports.ServiceNamespace = {}));
var StepAdjustment;
(function (StepAdjustment) {
    function isa(o) {
        return smithy_client_1.isa(o, "StepAdjustment");
    }
    StepAdjustment.isa = isa;
})(StepAdjustment = exports.StepAdjustment || (exports.StepAdjustment = {}));
var StepScalingPolicyConfiguration;
(function (StepScalingPolicyConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "StepScalingPolicyConfiguration");
    }
    StepScalingPolicyConfiguration.isa = isa;
})(StepScalingPolicyConfiguration = exports.StepScalingPolicyConfiguration || (exports.StepScalingPolicyConfiguration = {}));
var SuspendedState;
(function (SuspendedState) {
    function isa(o) {
        return smithy_client_1.isa(o, "SuspendedState");
    }
    SuspendedState.isa = isa;
})(SuspendedState = exports.SuspendedState || (exports.SuspendedState = {}));
var TargetTrackingScalingPolicyConfiguration;
(function (TargetTrackingScalingPolicyConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetTrackingScalingPolicyConfiguration");
    }
    TargetTrackingScalingPolicyConfiguration.isa = isa;
})(TargetTrackingScalingPolicyConfiguration = exports.TargetTrackingScalingPolicyConfiguration || (exports.TargetTrackingScalingPolicyConfiguration = {}));
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
//# sourceMappingURL=index.js.map