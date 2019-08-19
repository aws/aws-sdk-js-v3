import { GetLifecyclePolicyInput } from "../shapes/GetLifecyclePolicyInput";
import { GetLifecyclePolicyOutput } from "../shapes/GetLifecyclePolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetLifecyclePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLifecyclePolicy",
  http: {
    method: "GET",
    requestUri: "/policies/{policyId}/"
  },
  input: {
    shape: GetLifecyclePolicyInput
  },
  output: {
    shape: GetLifecyclePolicyOutput
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
