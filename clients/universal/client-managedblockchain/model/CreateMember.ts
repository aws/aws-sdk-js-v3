import { CreateMemberInput } from "./CreateMemberInput";
import { CreateMemberOutput } from "./CreateMemberOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotReadyException } from "./ResourceNotReadyException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
