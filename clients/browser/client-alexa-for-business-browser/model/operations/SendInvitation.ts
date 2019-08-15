import { SendInvitationInput } from "../shapes/SendInvitationInput";
import { SendInvitationOutput } from "../shapes/SendInvitationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidUserStatusException } from "../shapes/InvalidUserStatusException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
