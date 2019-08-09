import { UpdateServiceAccessPoliciesInput } from "./UpdateServiceAccessPoliciesInput";
import { UpdateServiceAccessPoliciesOutput } from "./UpdateServiceAccessPoliciesOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidTypeException } from "./InvalidTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
