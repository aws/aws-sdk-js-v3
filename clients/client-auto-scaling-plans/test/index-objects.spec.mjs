import {
  AutoScalingPlans,
  AutoScalingPlansClient,
  AutoScalingPlansServiceException,
  ConcurrentUpdateException,
  CreateScalingPlanCommand,
  DeleteScalingPlanCommand,
  DescribeScalingPlanResourcesCommand,
  DescribeScalingPlansCommand,
  ForecastDataType,
  GetScalingPlanResourceForecastDataCommand,
  InternalServiceException,
  InvalidNextTokenException,
  LimitExceededException,
  LoadMetricType,
  MetricStatistic,
  ObjectNotFoundException,
  PolicyType,
  PredictiveScalingMaxCapacityBehavior,
  PredictiveScalingMode,
  ScalableDimension,
  ScalingMetricType,
  ScalingPlanStatusCode,
  ScalingPolicyUpdateBehavior,
  ScalingStatusCode,
  ServiceNamespace,
  UpdateScalingPlanCommand,
  ValidationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AutoScalingPlansClient === "function");
assert(typeof AutoScalingPlans === "function");
// commands
assert(typeof CreateScalingPlanCommand === "function");
assert(typeof DeleteScalingPlanCommand === "function");
assert(typeof DescribeScalingPlanResourcesCommand === "function");
assert(typeof DescribeScalingPlansCommand === "function");
assert(typeof GetScalingPlanResourceForecastDataCommand === "function");
assert(typeof UpdateScalingPlanCommand === "function");
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
assert(InternalServiceException.prototype instanceof AutoScalingPlansServiceException);
assert(InvalidNextTokenException.prototype instanceof AutoScalingPlansServiceException);
assert(LimitExceededException.prototype instanceof AutoScalingPlansServiceException);
assert(ObjectNotFoundException.prototype instanceof AutoScalingPlansServiceException);
assert(ValidationException.prototype instanceof AutoScalingPlansServiceException);
assert(AutoScalingPlansServiceException.prototype instanceof Error);
console.log(`AutoScalingPlans index test passed.`);
