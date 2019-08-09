import { AcceptInvitationInput } from "./AcceptInvitationInput";
import { AcceptInvitationOutput } from "./AcceptInvitationOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
