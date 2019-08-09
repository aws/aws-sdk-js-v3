import { SetDefaultPolicyVersionInput } from "./SetDefaultPolicyVersionInput";
import { SetDefaultPolicyVersionOutput } from "./SetDefaultPolicyVersionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
