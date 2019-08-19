import { ListPoliciesInput } from "../shapes/ListPoliciesInput";
import { ListPoliciesOutput } from "../shapes/ListPoliciesOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPoliciesInput
  },
  output: {
    shape: ListPoliciesOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidOperationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalErrorException
    }
  ]
};
