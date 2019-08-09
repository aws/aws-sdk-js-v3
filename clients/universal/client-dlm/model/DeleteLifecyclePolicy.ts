import { DeleteLifecyclePolicyInput } from "./DeleteLifecyclePolicyInput";
import { DeleteLifecyclePolicyOutput } from "./DeleteLifecyclePolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
