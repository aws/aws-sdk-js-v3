import { AcceptInvitationInput } from "../shapes/AcceptInvitationInput";
import { AcceptInvitationOutput } from "../shapes/AcceptInvitationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AcceptInvitation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptInvitation",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/master"
  },
  input: {
    shape: AcceptInvitationInput
  },
  output: {
    shape: AcceptInvitationOutput
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
