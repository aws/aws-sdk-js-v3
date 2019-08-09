import { GetLifecyclePoliciesInput } from "./GetLifecyclePoliciesInput";
import { GetLifecyclePoliciesOutput } from "./GetLifecyclePoliciesOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServerException } from "./InternalServerException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetLifecyclePolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLifecyclePolicies",
  http: {
    method: "GET",
    requestUri: "/policies"
  },
  input: {
    shape: GetLifecyclePoliciesInput
  },
  output: {
    shape: GetLifecyclePoliciesOutput
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
