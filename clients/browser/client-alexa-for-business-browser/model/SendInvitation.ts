import { SendInvitationInput } from "./SendInvitationInput";
import { SendInvitationOutput } from "./SendInvitationOutput";
import { NotFoundException } from "./NotFoundException";
import { InvalidUserStatusException } from "./InvalidUserStatusException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SendInvitation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendInvitation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SendInvitationInput
  },
  output: {
    shape: SendInvitationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: InvalidUserStatusException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
