import { GetEffectivePoliciesInput } from "../shapes/GetEffectivePoliciesInput";
import { GetEffectivePoliciesOutput } from "../shapes/GetEffectivePoliciesOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
