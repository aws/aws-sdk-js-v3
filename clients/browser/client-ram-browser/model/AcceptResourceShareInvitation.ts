import { AcceptResourceShareInvitationInput } from "./AcceptResourceShareInvitationInput";
import { AcceptResourceShareInvitationOutput } from "./AcceptResourceShareInvitationOutput";
import { MalformedArnException } from "./MalformedArnException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ResourceShareInvitationArnNotFoundException } from "./ResourceShareInvitationArnNotFoundException";
import { ResourceShareInvitationAlreadyAcceptedException } from "./ResourceShareInvitationAlreadyAcceptedException";
import { ResourceShareInvitationAlreadyRejectedException } from "./ResourceShareInvitationAlreadyRejectedException";
import { ResourceShareInvitationExpiredException } from "./ResourceShareInvitationExpiredException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AcceptResourceShareInvitation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptResourceShareInvitation",
  http: {
    method: "POST",
    requestUri: "/acceptresourceshareinvitation"
  },
  input: {
    shape: AcceptResourceShareInvitationInput
  },
  output: {
    shape: AcceptResourceShareInvitationOutput
  },
  errors: [
    {
      shape: MalformedArnException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: ResourceShareInvitationArnNotFoundException
    },
    {
      shape: ResourceShareInvitationAlreadyAcceptedException
    },
    {
      shape: ResourceShareInvitationAlreadyRejectedException
    },
    {
      shape: ResourceShareInvitationExpiredException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
