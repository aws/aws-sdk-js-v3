import { ListTargetsForPolicyInput } from "./ListTargetsForPolicyInput";
import { ListTargetsForPolicyOutput } from "./ListTargetsForPolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
