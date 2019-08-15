import { GetPolicyVersionInput } from "../shapes/GetPolicyVersionInput";
import { GetPolicyVersionOutput } from "../shapes/GetPolicyVersionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
