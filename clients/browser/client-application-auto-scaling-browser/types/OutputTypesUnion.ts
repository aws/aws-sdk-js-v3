import { DeleteScalingPolicyOutput } from "./DeleteScalingPolicyOutput";
import { DeleteScheduledActionOutput } from "./DeleteScheduledActionOutput";
import { DeregisterScalableTargetOutput } from "./DeregisterScalableTargetOutput";
import { DescribeScalableTargetsOutput } from "./DescribeScalableTargetsOutput";
import { DescribeScalingActivitiesOutput } from "./DescribeScalingActivitiesOutput";
import { DescribeScalingPoliciesOutput } from "./DescribeScalingPoliciesOutput";
import { DescribeScheduledActionsOutput } from "./DescribeScheduledActionsOutput";
import { PutScalingPolicyOutput } from "./PutScalingPolicyOutput";
import { PutScheduledActionOutput } from "./PutScheduledActionOutput";
import { RegisterScalableTargetOutput } from "./RegisterScalableTargetOutput";
export type OutputTypesUnion =
  | DeleteScalingPolicyOutput
  | DeleteScheduledActionOutput
  | DeregisterScalableTargetOutput
  | DescribeScalableTargetsOutput
  | DescribeScalingActivitiesOutput
  | DescribeScalingPoliciesOutput
  | DescribeScheduledActionsOutput
  | PutScalingPolicyOutput
  | PutScheduledActionOutput
  | RegisterScalableTargetOutput;
