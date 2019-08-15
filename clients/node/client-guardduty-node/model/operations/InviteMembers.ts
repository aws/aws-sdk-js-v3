import { InviteMembersInput } from "../shapes/InviteMembersInput";
import { InviteMembersOutput } from "../shapes/InviteMembersOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const InviteMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InviteMembers",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/member/invite"
  },
  input: {
    shape: InviteMembersInput
  },
  output: {
    shape: InviteMembersOutput
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
