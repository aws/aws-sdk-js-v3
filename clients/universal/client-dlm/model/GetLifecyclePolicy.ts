import { GetLifecyclePolicyInput } from "./GetLifecyclePolicyInput";
import { GetLifecyclePolicyOutput } from "./GetLifecyclePolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
