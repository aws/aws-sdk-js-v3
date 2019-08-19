import { ListAttachedPoliciesInput } from "../shapes/ListAttachedPoliciesInput";
import { ListAttachedPoliciesOutput } from "../shapes/ListAttachedPoliciesOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAttachedPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAttachedPolicies",
  http: {
    method: "POST",
    requestUri: "/attached-policies/{target}"
  },
  input: {
    shape: ListAttachedPoliciesInput
  },
  output: {
    shape: ListAttachedPoliciesOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: LimitExceededException
    }
  ]
};
