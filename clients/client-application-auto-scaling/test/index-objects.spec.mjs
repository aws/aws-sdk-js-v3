import {
  AdjustmentType,
  Alarm$,
  ApplicationAutoScaling,
  ApplicationAutoScalingClient,
  ApplicationAutoScalingServiceException,
  CapacityForecast$,
  ConcurrentUpdateException,
  ConcurrentUpdateException$,
  CustomizedMetricSpecification$,
  DeleteScalingPolicy$,
  DeleteScalingPolicyCommand,
  DeleteScalingPolicyRequest$,
  DeleteScalingPolicyResponse$,
  DeleteScheduledAction$,
  DeleteScheduledActionCommand,
  DeleteScheduledActionRequest$,
  DeleteScheduledActionResponse$,
  DeregisterScalableTarget$,
  DeregisterScalableTargetCommand,
  DeregisterScalableTargetRequest$,
  DeregisterScalableTargetResponse$,
  DescribeScalableTargets$,
  DescribeScalableTargetsCommand,
  DescribeScalableTargetsRequest$,
  DescribeScalableTargetsResponse$,
  DescribeScalingActivities$,
  DescribeScalingActivitiesCommand,
  DescribeScalingActivitiesRequest$,
  DescribeScalingActivitiesResponse$,
  DescribeScalingPolicies$,
  DescribeScalingPoliciesCommand,
  DescribeScalingPoliciesRequest$,
  DescribeScalingPoliciesResponse$,
  DescribeScheduledActions$,
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsRequest$,
  DescribeScheduledActionsResponse$,
  FailedResourceAccessException,
  FailedResourceAccessException$,
  GetPredictiveScalingForecast$,
  GetPredictiveScalingForecastCommand,
  GetPredictiveScalingForecastRequest$,
  GetPredictiveScalingForecastResponse$,
  InternalServiceException,
  InternalServiceException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  LimitExceededException,
  LimitExceededException$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LoadForecast$,
  MetricAggregationType,
  MetricDimension$,
  MetricStatistic,
  MetricType,
  NotScaledReason$,
  ObjectNotFoundException,
  ObjectNotFoundException$,
  paginateDescribeScalableTargets,
  paginateDescribeScalingActivities,
  paginateDescribeScalingPolicies,
  paginateDescribeScheduledActions,
  PolicyType,
  PredefinedMetricSpecification$,
  PredictiveScalingCustomizedMetricSpecification$,
  PredictiveScalingMaxCapacityBreachBehavior,
  PredictiveScalingMetric$,
  PredictiveScalingMetricDataQuery$,
  PredictiveScalingMetricDimension$,
  PredictiveScalingMetricSpecification$,
  PredictiveScalingMetricStat$,
  PredictiveScalingMode,
  PredictiveScalingPolicyConfiguration$,
  PredictiveScalingPredefinedLoadMetricSpecification$,
  PredictiveScalingPredefinedMetricPairSpecification$,
  PredictiveScalingPredefinedScalingMetricSpecification$,
  PutScalingPolicy$,
  PutScalingPolicyCommand,
  PutScalingPolicyRequest$,
  PutScalingPolicyResponse$,
  PutScheduledAction$,
  PutScheduledActionCommand,
  PutScheduledActionRequest$,
  PutScheduledActionResponse$,
  RegisterScalableTarget$,
  RegisterScalableTargetCommand,
  RegisterScalableTargetRequest$,
  RegisterScalableTargetResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ScalableDimension,
  ScalableTarget$,
  ScalableTargetAction$,
  ScalingActivity$,
  ScalingActivityStatusCode,
  ScalingPolicy$,
  ScheduledAction$,
  ServiceNamespace,
  StepAdjustment$,
  StepScalingPolicyConfiguration$,
  SuspendedState$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetTrackingMetric$,
  TargetTrackingMetricDataQuery$,
  TargetTrackingMetricDimension$,
  TargetTrackingMetricStat$,
  TargetTrackingScalingPolicyConfiguration$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApplicationAutoScalingClient === "function");
assert(typeof ApplicationAutoScaling === "function");
// commands
assert(typeof DeleteScalingPolicyCommand === "function");
assert(typeof DeleteScalingPolicy$ === "object");
assert(typeof DeleteScheduledActionCommand === "function");
assert(typeof DeleteScheduledAction$ === "object");
assert(typeof DeregisterScalableTargetCommand === "function");
assert(typeof DeregisterScalableTarget$ === "object");
assert(typeof DescribeScalableTargetsCommand === "function");
assert(typeof DescribeScalableTargets$ === "object");
assert(typeof DescribeScalingActivitiesCommand === "function");
assert(typeof DescribeScalingActivities$ === "object");
assert(typeof DescribeScalingPoliciesCommand === "function");
assert(typeof DescribeScalingPolicies$ === "object");
assert(typeof DescribeScheduledActionsCommand === "function");
assert(typeof DescribeScheduledActions$ === "object");
assert(typeof GetPredictiveScalingForecastCommand === "function");
assert(typeof GetPredictiveScalingForecast$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutScalingPolicyCommand === "function");
assert(typeof PutScalingPolicy$ === "object");
assert(typeof PutScheduledActionCommand === "function");
assert(typeof PutScheduledAction$ === "object");
assert(typeof RegisterScalableTargetCommand === "function");
assert(typeof RegisterScalableTarget$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof Alarm$ === "object");
assert(typeof CapacityForecast$ === "object");
assert(typeof CustomizedMetricSpecification$ === "object");
assert(typeof DeleteScalingPolicyRequest$ === "object");
assert(typeof DeleteScalingPolicyResponse$ === "object");
assert(typeof DeleteScheduledActionRequest$ === "object");
assert(typeof DeleteScheduledActionResponse$ === "object");
assert(typeof DeregisterScalableTargetRequest$ === "object");
assert(typeof DeregisterScalableTargetResponse$ === "object");
assert(typeof DescribeScalableTargetsRequest$ === "object");
assert(typeof DescribeScalableTargetsResponse$ === "object");
assert(typeof DescribeScalingActivitiesRequest$ === "object");
assert(typeof DescribeScalingActivitiesResponse$ === "object");
assert(typeof DescribeScalingPoliciesRequest$ === "object");
assert(typeof DescribeScalingPoliciesResponse$ === "object");
assert(typeof DescribeScheduledActionsRequest$ === "object");
assert(typeof DescribeScheduledActionsResponse$ === "object");
assert(typeof GetPredictiveScalingForecastRequest$ === "object");
assert(typeof GetPredictiveScalingForecastResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LoadForecast$ === "object");
assert(typeof MetricDimension$ === "object");
assert(typeof NotScaledReason$ === "object");
assert(typeof PredefinedMetricSpecification$ === "object");
assert(typeof PredictiveScalingCustomizedMetricSpecification$ === "object");
assert(typeof PredictiveScalingMetric$ === "object");
assert(typeof PredictiveScalingMetricDataQuery$ === "object");
assert(typeof PredictiveScalingMetricDimension$ === "object");
assert(typeof PredictiveScalingMetricSpecification$ === "object");
assert(typeof PredictiveScalingMetricStat$ === "object");
assert(typeof PredictiveScalingPolicyConfiguration$ === "object");
assert(typeof PredictiveScalingPredefinedLoadMetricSpecification$ === "object");
assert(typeof PredictiveScalingPredefinedMetricPairSpecification$ === "object");
assert(typeof PredictiveScalingPredefinedScalingMetricSpecification$ === "object");
assert(typeof PutScalingPolicyRequest$ === "object");
assert(typeof PutScalingPolicyResponse$ === "object");
assert(typeof PutScheduledActionRequest$ === "object");
assert(typeof PutScheduledActionResponse$ === "object");
assert(typeof RegisterScalableTargetRequest$ === "object");
assert(typeof RegisterScalableTargetResponse$ === "object");
assert(typeof ScalableTarget$ === "object");
assert(typeof ScalableTargetAction$ === "object");
assert(typeof ScalingActivity$ === "object");
assert(typeof ScalingPolicy$ === "object");
assert(typeof ScheduledAction$ === "object");
assert(typeof StepAdjustment$ === "object");
assert(typeof StepScalingPolicyConfiguration$ === "object");
assert(typeof SuspendedState$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetTrackingMetric$ === "object");
assert(typeof TargetTrackingMetricDataQuery$ === "object");
assert(typeof TargetTrackingMetricDimension$ === "object");
assert(typeof TargetTrackingMetricStat$ === "object");
assert(typeof TargetTrackingScalingPolicyConfiguration$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
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
assert(typeof ConcurrentUpdateException$ === "object");
assert(FailedResourceAccessException.prototype instanceof ApplicationAutoScalingServiceException);
assert(typeof FailedResourceAccessException$ === "object");
assert(InternalServiceException.prototype instanceof ApplicationAutoScalingServiceException);
assert(typeof InternalServiceException$ === "object");
assert(InvalidNextTokenException.prototype instanceof ApplicationAutoScalingServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(LimitExceededException.prototype instanceof ApplicationAutoScalingServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ObjectNotFoundException.prototype instanceof ApplicationAutoScalingServiceException);
assert(typeof ObjectNotFoundException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ApplicationAutoScalingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TooManyTagsException.prototype instanceof ApplicationAutoScalingServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof ApplicationAutoScalingServiceException);
assert(typeof ValidationException$ === "object");
assert(ApplicationAutoScalingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeScalableTargets === "function");
assert(typeof paginateDescribeScalingActivities === "function");
assert(typeof paginateDescribeScalingPolicies === "function");
assert(typeof paginateDescribeScheduledActions === "function");
console.log(`ApplicationAutoScaling index test passed.`);
