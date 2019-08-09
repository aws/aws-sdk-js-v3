import { DeleteScalingPolicyInput } from "./DeleteScalingPolicyInput";
import { DeleteScheduledActionInput } from "./DeleteScheduledActionInput";
import { DeregisterScalableTargetInput } from "./DeregisterScalableTargetInput";
import { DescribeScalableTargetsInput } from "./DescribeScalableTargetsInput";
import { DescribeScalingActivitiesInput } from "./DescribeScalingActivitiesInput";
import { DescribeScalingPoliciesInput } from "./DescribeScalingPoliciesInput";
import { DescribeScheduledActionsInput } from "./DescribeScheduledActionsInput";
import { PutScalingPolicyInput } from "./PutScalingPolicyInput";
import { PutScheduledActionInput } from "./PutScheduledActionInput";
import { RegisterScalableTargetInput } from "./RegisterScalableTargetInput";
export type InputTypesUnion =
  | DeleteScalingPolicyInput
  | DeleteScheduledActionInput
  | DeregisterScalableTargetInput
  | DescribeScalableTargetsInput
  | DescribeScalingActivitiesInput
  | DescribeScalingPoliciesInput
  | DescribeScheduledActionsInput
  | PutScalingPolicyInput
  | PutScheduledActionInput
  | RegisterScalableTargetInput;
