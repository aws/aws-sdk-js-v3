import {
  AdjustmentType,
  ApplicationAutoScaling,
  ApplicationAutoScalingClient,
  ApplicationAutoScalingServiceException,
  ConcurrentUpdateException,
  DeleteScalingPolicyCommand,
  DeleteScheduledActionCommand,
  DeregisterScalableTargetCommand,
  DescribeScalableTargetsCommand,
  DescribeScalingActivitiesCommand,
  DescribeScalingPoliciesCommand,
  DescribeScheduledActionsCommand,
  FailedResourceAccessException,
  GetPredictiveScalingForecastCommand,
  InternalServiceException,
  InvalidNextTokenException,
  LimitExceededException,
  ListTagsForResourceCommand,
  MetricAggregationType,
  MetricStatistic,
  MetricType,
  ObjectNotFoundException,
  PolicyType,
  PredictiveScalingMaxCapacityBreachBehavior,
  PredictiveScalingMode,
  PutScalingPolicyCommand,
  PutScheduledActionCommand,
  RegisterScalableTargetCommand,
  ResourceNotFoundException,
  ScalableDimension,
  ScalingActivityStatusCode,
  ServiceNamespace,
  TagResourceCommand,
  TooManyTagsException,
  UntagResourceCommand,
  ValidationException,
  paginateDescribeScalableTargets,
  paginateDescribeScalingActivities,
  paginateDescribeScalingPolicies,
  paginateDescribeScheduledActions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApplicationAutoScalingClient === "function");
assert(typeof ApplicationAutoScaling === "function");
// commands
assert(typeof DeleteScalingPolicyCommand === "function");
assert(typeof DeleteScheduledActionCommand === "function");
assert(typeof DeregisterScalableTargetCommand === "function");
assert(typeof DescribeScalableTargetsCommand === "function");
assert(typeof DescribeScalingActivitiesCommand === "function");
assert(typeof DescribeScalingPoliciesCommand === "function");
assert(typeof DescribeScheduledActionsCommand === "function");
assert(typeof GetPredictiveScalingForecastCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutScalingPolicyCommand === "function");
assert(typeof PutScheduledActionCommand === "function");
assert(typeof RegisterScalableTargetCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof AdjustmentType === "object");
assert(typeof MetricAggregationType === "object");
assert(typeof MetricStatistic === "object");
assert(typeof MetricType === "object");
assert(typeof PolicyType === "object");
assert(typeof PredictiveScalingMaxCapacityBreachBehavior === "object");
assert(typeof PredictiveScalingMode === "object");
assert(typeof ScalableDimension === "object");
assert(typeof ScalingActivityStatusCode === "object");
assert(typeof ServiceNamespace === "object");
// errors
assert(ConcurrentUpdateException.prototype instanceof ApplicationAutoScalingServiceException);
assert(FailedResourceAccessException.prototype instanceof ApplicationAutoScalingServiceException);
assert(InternalServiceException.prototype instanceof ApplicationAutoScalingServiceException);
assert(InvalidNextTokenException.prototype instanceof ApplicationAutoScalingServiceException);
assert(LimitExceededException.prototype instanceof ApplicationAutoScalingServiceException);
assert(ObjectNotFoundException.prototype instanceof ApplicationAutoScalingServiceException);
assert(ResourceNotFoundException.prototype instanceof ApplicationAutoScalingServiceException);
assert(TooManyTagsException.prototype instanceof ApplicationAutoScalingServiceException);
assert(ValidationException.prototype instanceof ApplicationAutoScalingServiceException);
assert(ApplicationAutoScalingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeScalableTargets === "function");
assert(typeof paginateDescribeScalingActivities === "function");
assert(typeof paginateDescribeScalingPolicies === "function");
assert(typeof paginateDescribeScheduledActions === "function");
console.log(`ApplicationAutoScaling index test passed.`);
