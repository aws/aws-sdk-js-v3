import { InviteMembersInput } from "./InviteMembersInput";
import { InviteMembersOutput } from "./InviteMembersOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
