import { UpdateLifecyclePolicyInput } from "../shapes/UpdateLifecyclePolicyInput";
import { UpdateLifecyclePolicyOutput } from "../shapes/UpdateLifecyclePolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServerException } from "../shapes/InternalServerException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateLifecyclePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateLifecyclePolicy",
  http: {
    method: "PATCH",
    requestUri: "/policies/{policyId}"
  },
  input: {
    shape: UpdateLifecyclePolicyInput
  },
  output: {
    shape: UpdateLifecyclePolicyOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalServerException
    },
    {
      shape: LimitExceededException
    }
  ]
};
