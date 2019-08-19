import { GetLifecyclePoliciesInput } from "../shapes/GetLifecyclePoliciesInput";
import { GetLifecyclePoliciesOutput } from "../shapes/GetLifecyclePoliciesOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServerException } from "../shapes/InternalServerException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
