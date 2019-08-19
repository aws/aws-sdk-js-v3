import { RevokeInvitationInput } from "../shapes/RevokeInvitationInput";
import { RevokeInvitationOutput } from "../shapes/RevokeInvitationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RevokeInvitation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeInvitation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RevokeInvitationInput
  },
  output: {
    shape: RevokeInvitationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
