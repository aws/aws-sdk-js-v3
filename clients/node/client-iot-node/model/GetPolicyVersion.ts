import { GetPolicyVersionInput } from "./GetPolicyVersionInput";
import { GetPolicyVersionOutput } from "./GetPolicyVersionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPolicyVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPolicyVersion",
  http: {
    method: "GET",
    requestUri: "/policies/{policyName}/version/{policyVersionId}"
  },
  input: {
    shape: GetPolicyVersionInput
  },
  output: {
    shape: GetPolicyVersionOutput
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
    }
  ]
};
