import { ListInvitationsInput } from "../shapes/ListInvitationsInput";
import { ListInvitationsOutput } from "../shapes/ListInvitationsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListInvitations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInvitations",
  http: {
    method: "GET",
    requestUri: "/invitation"
  },
  input: {
    shape: ListInvitationsInput
  },
  output: {
    shape: ListInvitationsOutput
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
