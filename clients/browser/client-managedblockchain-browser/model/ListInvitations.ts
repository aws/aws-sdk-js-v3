import { ListInvitationsInput } from "./ListInvitationsInput";
import { ListInvitationsOutput } from "./ListInvitationsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListInvitations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInvitations",
  http: {
    method: "GET",
    requestUri: "/invitations"
  },
  input: {
    shape: ListInvitationsInput
  },
  output: {
    shape: ListInvitationsOutput
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
