import { ListAttachedPoliciesInput } from "./ListAttachedPoliciesInput";
import { ListAttachedPoliciesOutput } from "./ListAttachedPoliciesOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
