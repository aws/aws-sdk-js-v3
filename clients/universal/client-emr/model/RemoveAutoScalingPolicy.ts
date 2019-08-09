import { RemoveAutoScalingPolicyInput } from "./RemoveAutoScalingPolicyInput";
import { RemoveAutoScalingPolicyOutput } from "./RemoveAutoScalingPolicyOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveAutoScalingPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveAutoScalingPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveAutoScalingPolicyInput
  },
  output: {
    shape: RemoveAutoScalingPolicyOutput
  },
  errors: []
};
