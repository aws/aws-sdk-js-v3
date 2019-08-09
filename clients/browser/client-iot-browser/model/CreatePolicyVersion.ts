import { CreatePolicyVersionInput } from "./CreatePolicyVersionInput";
import { CreatePolicyVersionOutput } from "./CreatePolicyVersionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { MalformedPolicyException } from "./MalformedPolicyException";
import { VersionsLimitExceededException } from "./VersionsLimitExceededException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreatePolicyVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePolicyVersion",
  http: {
    method: "POST",
    requestUri: "/policies/{policyName}/version"
  },
  input: {
    shape: CreatePolicyVersionInput
  },
  output: {
    shape: CreatePolicyVersionOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: MalformedPolicyException
    },
    {
      shape: VersionsLimitExceededException
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
