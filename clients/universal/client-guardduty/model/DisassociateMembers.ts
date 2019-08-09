import { DisassociateMembersInput } from "./DisassociateMembersInput";
import { DisassociateMembersOutput } from "./DisassociateMembersOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateMembers",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/member/disassociate"
  },
  input: {
    shape: DisassociateMembersInput
  },
  output: {
    shape: DisassociateMembersOutput
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
