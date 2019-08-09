import { DeleteInvitationsInput } from "./DeleteInvitationsInput";
import { DeleteInvitationsOutput } from "./DeleteInvitationsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
