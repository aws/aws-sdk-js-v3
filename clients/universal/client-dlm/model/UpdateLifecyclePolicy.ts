import { UpdateLifecyclePolicyInput } from "./UpdateLifecyclePolicyInput";
import { UpdateLifecyclePolicyOutput } from "./UpdateLifecyclePolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServerException } from "./InternalServerException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
