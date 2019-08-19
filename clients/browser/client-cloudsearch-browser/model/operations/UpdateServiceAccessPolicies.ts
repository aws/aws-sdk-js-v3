import { UpdateServiceAccessPoliciesInput } from "../shapes/UpdateServiceAccessPoliciesInput";
import { UpdateServiceAccessPoliciesOutput } from "../shapes/UpdateServiceAccessPoliciesOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateServiceAccessPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateServiceAccessPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateServiceAccessPoliciesInput
  },
  output: {
    shape: UpdateServiceAccessPoliciesOutput,
    resultWrapper: "UpdateServiceAccessPoliciesResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidTypeException
    }
  ]
};
