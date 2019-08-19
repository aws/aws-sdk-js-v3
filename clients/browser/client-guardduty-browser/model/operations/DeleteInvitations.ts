import { DeleteInvitationsInput } from "../shapes/DeleteInvitationsInput";
import { DeleteInvitationsOutput } from "../shapes/DeleteInvitationsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteInvitations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInvitations",
  http: {
    method: "POST",
    requestUri: "/invitation/delete"
  },
  input: {
    shape: DeleteInvitationsInput
  },
  output: {
    shape: DeleteInvitationsOutput
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
