"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ApplicationSource;
(function (ApplicationSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationSource");
    }
    ApplicationSource.isa = isa;
})(ApplicationSource = exports.ApplicationSource || (exports.ApplicationSource = {}));
var ConcurrentUpdateException;
(function (ConcurrentUpdateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentUpdateException");
    }
    ConcurrentUpdateException.isa = isa;
})(ConcurrentUpdateException = exports.ConcurrentUpdateException || (exports.ConcurrentUpdateException = {}));
var CreateScalingPlanRequest;
(function (CreateScalingPlanRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateScalingPlanRequest");
    }
    CreateScalingPlanRequest.isa = isa;
})(CreateScalingPlanRequest = exports.CreateScalingPlanRequest || (exports.CreateScalingPlanRequest = {}));
var CreateScalingPlanResponse;
(function (CreateScalingPlanResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateScalingPlanResponse");
    }
    CreateScalingPlanResponse.isa = isa;
})(CreateScalingPlanResponse = exports.CreateScalingPlanResponse || (exports.CreateScalingPlanResponse = {}));
var CustomizedLoadMetricSpecification;
(function (CustomizedLoadMetricSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomizedLoadMetricSpecification");
    }
    CustomizedLoadMetricSpecification.isa = isa;
})(CustomizedLoadMetricSpecification = exports.CustomizedLoadMetricSpecification || (exports.CustomizedLoadMetricSpecification = {}));
var CustomizedScalingMetricSpecification;
(function (CustomizedScalingMetricSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomizedScalingMetricSpecification");
    }
    CustomizedScalingMetricSpecification.isa = isa;
})(CustomizedScalingMetricSpecification = exports.CustomizedScalingMetricSpecification || (exports.CustomizedScalingMetricSpecification = {}));
var Datapoint;
(function (Datapoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "Datapoint");
    }
    Datapoint.isa = isa;
})(Datapoint = exports.Datapoint || (exports.Datapoint = {}));
var DeleteScalingPlanRequest;
(function (DeleteScalingPlanRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteScalingPlanRequest");
    }
    DeleteScalingPlanRequest.isa = isa;
})(DeleteScalingPlanRequest = exports.DeleteScalingPlanRequest || (exports.DeleteScalingPlanRequest = {}));
var DeleteScalingPlanResponse;
(function (DeleteScalingPlanResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteScalingPlanResponse");
    }
    DeleteScalingPlanResponse.isa = isa;
})(DeleteScalingPlanResponse = exports.DeleteScalingPlanResponse || (exports.DeleteScalingPlanResponse = {}));
var DescribeScalingPlanResourcesRequest;
(function (DescribeScalingPlanResourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScalingPlanResourcesRequest");
    }
    DescribeScalingPlanResourcesRequest.isa = isa;
})(DescribeScalingPlanResourcesRequest = exports.DescribeScalingPlanResourcesRequest || (exports.DescribeScalingPlanResourcesRequest = {}));
var DescribeScalingPlanResourcesResponse;
(function (DescribeScalingPlanResourcesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScalingPlanResourcesResponse");
    }
    DescribeScalingPlanResourcesResponse.isa = isa;
})(DescribeScalingPlanResourcesResponse = exports.DescribeScalingPlanResourcesResponse || (exports.DescribeScalingPlanResourcesResponse = {}));
var DescribeScalingPlansRequest;
(function (DescribeScalingPlansRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScalingPlansRequest");
    }
    DescribeScalingPlansRequest.isa = isa;
})(DescribeScalingPlansRequest = exports.DescribeScalingPlansRequest || (exports.DescribeScalingPlansRequest = {}));
var DescribeScalingPlansResponse;
(function (DescribeScalingPlansResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeScalingPlansResponse");
    }
    DescribeScalingPlansResponse.isa = isa;
})(DescribeScalingPlansResponse = exports.DescribeScalingPlansResponse || (exports.DescribeScalingPlansResponse = {}));
var ForecastDataType;
(function (ForecastDataType) {
    ForecastDataType["CapacityForecast"] = "CapacityForecast";
    ForecastDataType["LoadForecast"] = "LoadForecast";
    ForecastDataType["ScheduledActionMaxCapacity"] = "ScheduledActionMaxCapacity";
    ForecastDataType["ScheduledActionMinCapacity"] = "ScheduledActionMinCapacity";
})(ForecastDataType = exports.ForecastDataType || (exports.ForecastDataType = {}));
var GetScalingPlanResourceForecastDataRequest;
(function (GetScalingPlanResourceForecastDataRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetScalingPlanResourceForecastDataRequest");
    }
    GetScalingPlanResourceForecastDataRequest.isa = isa;
})(GetScalingPlanResourceForecastDataRequest = exports.GetScalingPlanResourceForecastDataRequest || (exports.GetScalingPlanResourceForecastDataRequest = {}));
var GetScalingPlanResourceForecastDataResponse;
(function (GetScalingPlanResourceForecastDataResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetScalingPlanResourceForecastDataResponse");
    }
    GetScalingPlanResourceForecastDataResponse.isa = isa;
})(GetScalingPlanResourceForecastDataResponse = exports.GetScalingPlanResourceForecastDataResponse || (exports.GetScalingPlanResourceForecastDataResponse = {}));
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
var LoadMetricType;
(function (LoadMetricType) {
    LoadMetricType["ALBTargetGroupRequestCount"] = "ALBTargetGroupRequestCount";
    LoadMetricType["ASGTotalCPUUtilization"] = "ASGTotalCPUUtilization";
    LoadMetricType["ASGTotalNetworkIn"] = "ASGTotalNetworkIn";
    LoadMetricType["ASGTotalNetworkOut"] = "ASGTotalNetworkOut";
})(LoadMetricType = exports.LoadMetricType || (exports.LoadMetricType = {}));
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
var ObjectNotFoundException;
(function (ObjectNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ObjectNotFoundException");
    }
    ObjectNotFoundException.isa = isa;
})(ObjectNotFoundException = exports.ObjectNotFoundException || (exports.ObjectNotFoundException = {}));
var PolicyType;
(function (PolicyType) {
    PolicyType["TargetTrackingScaling"] = "TargetTrackingScaling";
})(PolicyType = exports.PolicyType || (exports.PolicyType = {}));
var PredefinedLoadMetricSpecification;
(function (PredefinedLoadMetricSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "PredefinedLoadMetricSpecification");
    }
    PredefinedLoadMetricSpecification.isa = isa;
})(PredefinedLoadMetricSpecification = exports.PredefinedLoadMetricSpecification || (exports.PredefinedLoadMetricSpecification = {}));
var PredefinedScalingMetricSpecification;
(function (PredefinedScalingMetricSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "PredefinedScalingMetricSpecification");
    }
    PredefinedScalingMetricSpecification.isa = isa;
})(PredefinedScalingMetricSpecification = exports.PredefinedScalingMetricSpecification || (exports.PredefinedScalingMetricSpecification = {}));
var PredictiveScalingMaxCapacityBehavior;
(function (PredictiveScalingMaxCapacityBehavior) {
    PredictiveScalingMaxCapacityBehavior["SetForecastCapacityToMaxCapacity"] = "SetForecastCapacityToMaxCapacity";
    PredictiveScalingMaxCapacityBehavior["SetMaxCapacityAboveForecastCapacity"] = "SetMaxCapacityAboveForecastCapacity";
    PredictiveScalingMaxCapacityBehavior["SetMaxCapacityToForecastCapacity"] = "SetMaxCapacityToForecastCapacity";
})(PredictiveScalingMaxCapacityBehavior = exports.PredictiveScalingMaxCapacityBehavior || (exports.PredictiveScalingMaxCapacityBehavior = {}));
var PredictiveScalingMode;
(function (PredictiveScalingMode) {
    PredictiveScalingMode["ForecastAndScale"] = "ForecastAndScale";
    PredictiveScalingMode["ForecastOnly"] = "ForecastOnly";
})(PredictiveScalingMode = exports.PredictiveScalingMode || (exports.PredictiveScalingMode = {}));
var ScalableDimension;
(function (ScalableDimension) {
    ScalableDimension["AutoScalingGroupDesiredCapacity"] = "autoscaling:autoScalingGroup:DesiredCapacity";
    ScalableDimension["DynamoDBIndexReadCapacityUnits"] = "dynamodb:index:ReadCapacityUnits";
    ScalableDimension["DynamoDBIndexWriteCapacityUnits"] = "dynamodb:index:WriteCapacityUnits";
    ScalableDimension["DynamoDBTableReadCapacityUnits"] = "dynamodb:table:ReadCapacityUnits";
    ScalableDimension["DynamoDBTableWriteCapacityUnits"] = "dynamodb:table:WriteCapacityUnits";
    ScalableDimension["EC2SpotFleetRequestTargetCapacity"] = "ec2:spot-fleet-request:TargetCapacity";
    ScalableDimension["ECSServiceDesiredCount"] = "ecs:service:DesiredCount";
    ScalableDimension["RDSClusterReadReplicaCount"] = "rds:cluster:ReadReplicaCount";
})(ScalableDimension = exports.ScalableDimension || (exports.ScalableDimension = {}));
var ScalingInstruction;
(function (ScalingInstruction) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalingInstruction");
    }
    ScalingInstruction.isa = isa;
})(ScalingInstruction = exports.ScalingInstruction || (exports.ScalingInstruction = {}));
var ScalingMetricType;
(function (ScalingMetricType) {
    ScalingMetricType["ALBRequestCountPerTarget"] = "ALBRequestCountPerTarget";
    ScalingMetricType["ASGAverageCPUUtilization"] = "ASGAverageCPUUtilization";
    ScalingMetricType["ASGAverageNetworkIn"] = "ASGAverageNetworkIn";
    ScalingMetricType["ASGAverageNetworkOut"] = "ASGAverageNetworkOut";
    ScalingMetricType["DynamoDBReadCapacityUtilization"] = "DynamoDBReadCapacityUtilization";
    ScalingMetricType["DynamoDBWriteCapacityUtilization"] = "DynamoDBWriteCapacityUtilization";
    ScalingMetricType["EC2SpotFleetRequestAverageCPUUtilization"] = "EC2SpotFleetRequestAverageCPUUtilization";
    ScalingMetricType["EC2SpotFleetRequestAverageNetworkIn"] = "EC2SpotFleetRequestAverageNetworkIn";
    ScalingMetricType["EC2SpotFleetRequestAverageNetworkOut"] = "EC2SpotFleetRequestAverageNetworkOut";
    ScalingMetricType["ECSServiceAverageCPUUtilization"] = "ECSServiceAverageCPUUtilization";
    ScalingMetricType["ECSServiceAverageMemoryUtilization"] = "ECSServiceAverageMemoryUtilization";
    ScalingMetricType["RDSReaderAverageCPUUtilization"] = "RDSReaderAverageCPUUtilization";
    ScalingMetricType["RDSReaderAverageDatabaseConnections"] = "RDSReaderAverageDatabaseConnections";
})(ScalingMetricType = exports.ScalingMetricType || (exports.ScalingMetricType = {}));
var ScalingPlan;
(function (ScalingPlan) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalingPlan");
    }
    ScalingPlan.isa = isa;
})(ScalingPlan = exports.ScalingPlan || (exports.ScalingPlan = {}));
var ScalingPlanResource;
(function (ScalingPlanResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalingPlanResource");
    }
    ScalingPlanResource.isa = isa;
})(ScalingPlanResource = exports.ScalingPlanResource || (exports.ScalingPlanResource = {}));
var ScalingPlanStatusCode;
(function (ScalingPlanStatusCode) {
    ScalingPlanStatusCode["Active"] = "Active";
    ScalingPlanStatusCode["ActiveWithProblems"] = "ActiveWithProblems";
    ScalingPlanStatusCode["CreationFailed"] = "CreationFailed";
    ScalingPlanStatusCode["CreationInProgress"] = "CreationInProgress";
    ScalingPlanStatusCode["DeletionFailed"] = "DeletionFailed";
    ScalingPlanStatusCode["DeletionInProgress"] = "DeletionInProgress";
    ScalingPlanStatusCode["UpdateFailed"] = "UpdateFailed";
    ScalingPlanStatusCode["UpdateInProgress"] = "UpdateInProgress";
})(ScalingPlanStatusCode = exports.ScalingPlanStatusCode || (exports.ScalingPlanStatusCode = {}));
var ScalingPolicy;
(function (ScalingPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScalingPolicy");
    }
    ScalingPolicy.isa = isa;
})(ScalingPolicy = exports.ScalingPolicy || (exports.ScalingPolicy = {}));
var ScalingPolicyUpdateBehavior;
(function (ScalingPolicyUpdateBehavior) {
    ScalingPolicyUpdateBehavior["KeepExternalPolicies"] = "KeepExternalPolicies";
    ScalingPolicyUpdateBehavior["ReplaceExternalPolicies"] = "ReplaceExternalPolicies";
})(ScalingPolicyUpdateBehavior = exports.ScalingPolicyUpdateBehavior || (exports.ScalingPolicyUpdateBehavior = {}));
var ScalingStatusCode;
(function (ScalingStatusCode) {
    ScalingStatusCode["Active"] = "Active";
    ScalingStatusCode["Inactive"] = "Inactive";
    ScalingStatusCode["PartiallyActive"] = "PartiallyActive";
})(ScalingStatusCode = exports.ScalingStatusCode || (exports.ScalingStatusCode = {}));
var ServiceNamespace;
(function (ServiceNamespace) {
    ServiceNamespace["AUTOSCALING"] = "autoscaling";
    ServiceNamespace["DYNAMODB"] = "dynamodb";
    ServiceNamespace["EC2"] = "ec2";
    ServiceNamespace["ECS"] = "ecs";
    ServiceNamespace["RDS"] = "rds";
})(ServiceNamespace = exports.ServiceNamespace || (exports.ServiceNamespace = {}));
var TagFilter;
(function (TagFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagFilter");
    }
    TagFilter.isa = isa;
})(TagFilter = exports.TagFilter || (exports.TagFilter = {}));
var TargetTrackingConfiguration;
(function (TargetTrackingConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetTrackingConfiguration");
    }
    TargetTrackingConfiguration.isa = isa;
})(TargetTrackingConfiguration = exports.TargetTrackingConfiguration || (exports.TargetTrackingConfiguration = {}));
var UpdateScalingPlanRequest;
(function (UpdateScalingPlanRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateScalingPlanRequest");
    }
    UpdateScalingPlanRequest.isa = isa;
})(UpdateScalingPlanRequest = exports.UpdateScalingPlanRequest || (exports.UpdateScalingPlanRequest = {}));
var UpdateScalingPlanResponse;
(function (UpdateScalingPlanResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateScalingPlanResponse");
    }
    UpdateScalingPlanResponse.isa = isa;
})(UpdateScalingPlanResponse = exports.UpdateScalingPlanResponse || (exports.UpdateScalingPlanResponse = {}));
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
//# sourceMappingURL=index.js.map