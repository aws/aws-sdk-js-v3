import {
  AdjustmentType,
  ApplicationAutoScaling,
  ApplicationAutoScalingClient,
  ApplicationAutoScalingServiceException,
  DeleteScalingPolicyCommand,
  DeleteScheduledActionCommand,
  DeregisterScalableTargetCommand,
  DescribeScalableTargetsCommand,
  DescribeScalingActivitiesCommand,
  DescribeScalingPoliciesCommand,
  DescribeScheduledActionsCommand,
  GetPredictiveScalingForecastCommand,
  ListTagsForResourceCommand,
  MetricAggregationType,
  MetricStatistic,
  MetricType,
  PolicyType,
  PredictiveScalingMaxCapacityBreachBehavior,
  PredictiveScalingMode,
  PutScalingPolicyCommand,
  PutScheduledActionCommand,
  RegisterScalableTargetCommand,
  ScalableDimension,
  ScalingActivityStatusCode,
  ServiceNamespace,
  TagResourceCommand,
  UntagResourceCommand,
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
assert(ApplicationAutoScalingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeScalableTargets === "function");
assert(typeof paginateDescribeScalingActivities === "function");
assert(typeof paginateDescribeScalingPolicies === "function");
assert(typeof paginateDescribeScheduledActions === "function");
console.log(`ApplicationAutoScaling index test passed.`);
