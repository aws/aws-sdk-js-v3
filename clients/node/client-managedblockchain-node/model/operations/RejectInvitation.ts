import { RejectInvitationInput } from "../shapes/RejectInvitationInput";
import { RejectInvitationOutput } from "../shapes/RejectInvitationOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { IllegalActionException } from "../shapes/IllegalActionException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
