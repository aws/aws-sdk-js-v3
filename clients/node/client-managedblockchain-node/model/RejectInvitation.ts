import { RejectInvitationInput } from "./RejectInvitationInput";
import { RejectInvitationOutput } from "./RejectInvitationOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { IllegalActionException } from "./IllegalActionException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RejectInvitation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RejectInvitation",
  http: {
    method: "DELETE",
    requestUri: "/invitations/{invitationId}"
  },
  input: {
    shape: RejectInvitationInput
  },
  output: {
    shape: RejectInvitationOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: IllegalActionException
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
      shape: InternalServiceErrorException
    }
  ]
};
