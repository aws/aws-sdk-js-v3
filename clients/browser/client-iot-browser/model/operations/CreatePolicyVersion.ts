import { CreatePolicyVersionInput } from "../shapes/CreatePolicyVersionInput";
import { CreatePolicyVersionOutput } from "../shapes/CreatePolicyVersionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { MalformedPolicyException } from "../shapes/MalformedPolicyException";
import { VersionsLimitExceededException } from "../shapes/VersionsLimitExceededException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
