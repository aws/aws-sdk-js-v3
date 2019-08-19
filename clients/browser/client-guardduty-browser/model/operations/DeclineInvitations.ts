import { DeclineInvitationsInput } from "../shapes/DeclineInvitationsInput";
import { DeclineInvitationsOutput } from "../shapes/DeclineInvitationsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeclineInvitations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeclineInvitations",
  http: {
    method: "POST",
    requestUri: "/invitation/decline"
  },
  input: {
    shape: DeclineInvitationsInput
  },
  output: {
    shape: DeclineInvitationsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
