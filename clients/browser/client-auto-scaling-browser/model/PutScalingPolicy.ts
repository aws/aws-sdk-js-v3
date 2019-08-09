import { PutScalingPolicyInput } from "./PutScalingPolicyInput";
import { PutScalingPolicyOutput } from "./PutScalingPolicyOutput";
import { LimitExceededFault } from "./LimitExceededFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutScalingPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutScalingPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutScalingPolicyInput
  },
  output: {
    shape: PutScalingPolicyOutput,
    resultWrapper: "PutScalingPolicyResult"
  },
  errors: [
    {
      shape: LimitExceededFault
    },
    {
      shape: ResourceContentionFault
    },
    {
      shape: ServiceLinkedRoleFailure
    }
  ]
};
