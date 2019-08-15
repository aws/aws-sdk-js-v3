import { AcceptResourceShareInvitationInput } from "../shapes/AcceptResourceShareInvitationInput";
import { AcceptResourceShareInvitationOutput } from "../shapes/AcceptResourceShareInvitationOutput";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ResourceShareInvitationArnNotFoundException } from "../shapes/ResourceShareInvitationArnNotFoundException";
import { ResourceShareInvitationAlreadyAcceptedException } from "../shapes/ResourceShareInvitationAlreadyAcceptedException";
import { ResourceShareInvitationAlreadyRejectedException } from "../shapes/ResourceShareInvitationAlreadyRejectedException";
import { ResourceShareInvitationExpiredException } from "../shapes/ResourceShareInvitationExpiredException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
