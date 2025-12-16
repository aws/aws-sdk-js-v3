import {
  ApplicationSource$,
  AutoScalingPlans,
  AutoScalingPlansClient,
  AutoScalingPlansServiceException,
  ConcurrentUpdateException,
  ConcurrentUpdateException$,
  CreateScalingPlan$,
  CreateScalingPlanCommand,
  CreateScalingPlanRequest$,
  CreateScalingPlanResponse$,
  CustomizedLoadMetricSpecification$,
  CustomizedScalingMetricSpecification$,
  Datapoint$,
  DeleteScalingPlan$,
  DeleteScalingPlanCommand,
  DeleteScalingPlanRequest$,
  DeleteScalingPlanResponse$,
  DescribeScalingPlanResources$,
  DescribeScalingPlanResourcesCommand,
  DescribeScalingPlanResourcesRequest$,
  DescribeScalingPlanResourcesResponse$,
  DescribeScalingPlans$,
  DescribeScalingPlansCommand,
  DescribeScalingPlansRequest$,
  DescribeScalingPlansResponse$,
  ForecastDataType,
  GetScalingPlanResourceForecastData$,
  GetScalingPlanResourceForecastDataCommand,
  GetScalingPlanResourceForecastDataRequest$,
  GetScalingPlanResourceForecastDataResponse$,
  InternalServiceException,
  InternalServiceException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  LimitExceededException,
  LimitExceededException$,
  LoadMetricType,
  MetricDimension$,
  MetricStatistic,
  ObjectNotFoundException,
  ObjectNotFoundException$,
  PolicyType,
  PredefinedLoadMetricSpecification$,
  PredefinedScalingMetricSpecification$,
  PredictiveScalingMaxCapacityBehavior,
  PredictiveScalingMode,
  ScalableDimension,
  ScalingInstruction$,
  ScalingMetricType,
  ScalingPlan$,
  ScalingPlanResource$,
  ScalingPlanStatusCode,
  ScalingPolicy$,
  ScalingPolicyUpdateBehavior,
  ScalingStatusCode,
  ServiceNamespace,
  TagFilter$,
  TargetTrackingConfiguration$,
  UpdateScalingPlan$,
  UpdateScalingPlanCommand,
  UpdateScalingPlanRequest$,
  UpdateScalingPlanResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AutoScalingPlansClient === "function");
assert(typeof AutoScalingPlans === "function");
// commands
assert(typeof CreateScalingPlanCommand === "function");
assert(typeof CreateScalingPlan$ === "object");
assert(typeof DeleteScalingPlanCommand === "function");
assert(typeof DeleteScalingPlan$ === "object");
assert(typeof DescribeScalingPlanResourcesCommand === "function");
assert(typeof DescribeScalingPlanResources$ === "object");
assert(typeof DescribeScalingPlansCommand === "function");
assert(typeof DescribeScalingPlans$ === "object");
assert(typeof GetScalingPlanResourceForecastDataCommand === "function");
assert(typeof GetScalingPlanResourceForecastData$ === "object");
assert(typeof UpdateScalingPlanCommand === "function");
assert(typeof UpdateScalingPlan$ === "object");
// structural schemas
assert(typeof ApplicationSource$ === "object");
assert(typeof CreateScalingPlanRequest$ === "object");
assert(typeof CreateScalingPlanResponse$ === "object");
assert(typeof CustomizedLoadMetricSpecification$ === "object");
assert(typeof CustomizedScalingMetricSpecification$ === "object");
assert(typeof Datapoint$ === "object");
assert(typeof DeleteScalingPlanRequest$ === "object");
assert(typeof DeleteScalingPlanResponse$ === "object");
assert(typeof DescribeScalingPlanResourcesRequest$ === "object");
assert(typeof DescribeScalingPlanResourcesResponse$ === "object");
assert(typeof DescribeScalingPlansRequest$ === "object");
assert(typeof DescribeScalingPlansResponse$ === "object");
assert(typeof GetScalingPlanResourceForecastDataRequest$ === "object");
assert(typeof GetScalingPlanResourceForecastDataResponse$ === "object");
assert(typeof MetricDimension$ === "object");
assert(typeof PredefinedLoadMetricSpecification$ === "object");
assert(typeof PredefinedScalingMetricSpecification$ === "object");
assert(typeof ScalingInstruction$ === "object");
assert(typeof ScalingPlan$ === "object");
assert(typeof ScalingPlanResource$ === "object");
assert(typeof ScalingPolicy$ === "object");
assert(typeof TagFilter$ === "object");
assert(typeof TargetTrackingConfiguration$ === "object");
assert(typeof UpdateScalingPlanRequest$ === "object");
assert(typeof UpdateScalingPlanResponse$ === "object");
// enums
assert(typeof ForecastDataType === "object");
assert(typeof LoadMetricType === "object");
assert(typeof MetricStatistic === "object");
assert(typeof PolicyType === "object");
assert(typeof PredictiveScalingMaxCapacityBehavior === "object");
assert(typeof PredictiveScalingMode === "object");
assert(typeof ScalableDimension === "object");
assert(typeof ScalingMetricType === "object");
assert(typeof ScalingPlanStatusCode === "object");
assert(typeof ScalingPolicyUpdateBehavior === "object");
assert(typeof ScalingStatusCode === "object");
assert(typeof ServiceNamespace === "object");
// errors
assert(ConcurrentUpdateException.prototype instanceof AutoScalingPlansServiceException);
assert(typeof ConcurrentUpdateException$ === "object");
assert(InternalServiceException.prototype instanceof AutoScalingPlansServiceException);
assert(typeof InternalServiceException$ === "object");
assert(InvalidNextTokenException.prototype instanceof AutoScalingPlansServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(LimitExceededException.prototype instanceof AutoScalingPlansServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ObjectNotFoundException.prototype instanceof AutoScalingPlansServiceException);
assert(typeof ObjectNotFoundException$ === "object");
assert(ValidationException.prototype instanceof AutoScalingPlansServiceException);
assert(typeof ValidationException$ === "object");
assert(AutoScalingPlansServiceException.prototype instanceof Error);
console.log(`AutoScalingPlans index test passed.`);
