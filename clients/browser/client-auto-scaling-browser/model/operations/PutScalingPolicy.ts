import { PutScalingPolicyInput } from "../shapes/PutScalingPolicyInput";
import { PutScalingPolicyOutput } from "../shapes/PutScalingPolicyOutput";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "../shapes/ServiceLinkedRoleFailure";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
