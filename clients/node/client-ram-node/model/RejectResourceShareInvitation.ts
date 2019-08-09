import { RejectResourceShareInvitationInput } from "./RejectResourceShareInvitationInput";
import { RejectResourceShareInvitationOutput } from "./RejectResourceShareInvitationOutput";
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

export const RejectResourceShareInvitation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RejectResourceShareInvitation",
  http: {
    method: "POST",
    requestUri: "/rejectresourceshareinvitation"
  },
  input: {
    shape: RejectResourceShareInvitationInput
  },
  output: {
    shape: RejectResourceShareInvitationOutput
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
