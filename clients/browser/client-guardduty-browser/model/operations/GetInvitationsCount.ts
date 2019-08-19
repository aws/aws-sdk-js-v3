import { GetInvitationsCountInput } from "../shapes/GetInvitationsCountInput";
import { GetInvitationsCountOutput } from "../shapes/GetInvitationsCountOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetInvitationsCount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInvitationsCount",
  http: {
    method: "GET",
    requestUri: "/invitation/count"
  },
  input: {
    shape: GetInvitationsCountInput
  },
  output: {
    shape: GetInvitationsCountOutput
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
