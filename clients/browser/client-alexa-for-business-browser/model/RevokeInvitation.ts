import { RevokeInvitationInput } from "./RevokeInvitationInput";
import { RevokeInvitationOutput } from "./RevokeInvitationOutput";
import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
