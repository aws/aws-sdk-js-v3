import { ListInvitationsInput } from "../shapes/ListInvitationsInput";
import { ListInvitationsOutput } from "../shapes/ListInvitationsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
