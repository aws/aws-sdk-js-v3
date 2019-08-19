import { ListTargetsForPolicyInput } from "../shapes/ListTargetsForPolicyInput";
import { ListTargetsForPolicyOutput } from "../shapes/ListTargetsForPolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTargetsForPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTargetsForPolicy",
  http: {
    method: "POST",
    requestUri: "/policy-targets/{policyName}"
  },
  input: {
    shape: ListTargetsForPolicyInput
  },
  output: {
    shape: ListTargetsForPolicyOutput
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
