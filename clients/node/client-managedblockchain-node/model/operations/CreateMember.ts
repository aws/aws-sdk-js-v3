import { CreateMemberInput } from "../shapes/CreateMemberInput";
import { CreateMemberOutput } from "../shapes/CreateMemberOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotReadyException } from "../shapes/ResourceNotReadyException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateMember: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateMember",
  http: {
    method: "POST",
    requestUri: "/networks/{networkId}/members"
  },
  input: {
    shape: CreateMemberInput
  },
  output: {
    shape: CreateMemberOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotReadyException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
