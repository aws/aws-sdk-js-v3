import { DeleteLifecyclePolicyInput } from "../shapes/DeleteLifecyclePolicyInput";
import { DeleteLifecyclePolicyOutput } from "../shapes/DeleteLifecyclePolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLifecyclePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLifecyclePolicy",
  http: {
    method: "DELETE",
    requestUri: "/policies/{policyId}/"
  },
  input: {
    shape: DeleteLifecyclePolicyInput
  },
  output: {
    shape: DeleteLifecyclePolicyOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    },
    {
      shape: LimitExceededException
    }
  ]
};
