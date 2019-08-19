import { SetDefaultPolicyVersionInput } from "../shapes/SetDefaultPolicyVersionInput";
import { SetDefaultPolicyVersionOutput } from "../shapes/SetDefaultPolicyVersionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetDefaultPolicyVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetDefaultPolicyVersion",
  http: {
    method: "PATCH",
    requestUri: "/policies/{policyName}/version/{policyVersionId}"
  },
  input: {
    shape: SetDefaultPolicyVersionInput
  },
  output: {
    shape: SetDefaultPolicyVersionOutput
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
