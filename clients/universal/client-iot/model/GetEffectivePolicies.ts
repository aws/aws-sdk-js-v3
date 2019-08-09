import { GetEffectivePoliciesInput } from "./GetEffectivePoliciesInput";
import { GetEffectivePoliciesOutput } from "./GetEffectivePoliciesOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetEffectivePolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEffectivePolicies",
  http: {
    method: "POST",
    requestUri: "/effective-policies"
  },
  input: {
    shape: GetEffectivePoliciesInput
  },
  output: {
    shape: GetEffectivePoliciesOutput
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
