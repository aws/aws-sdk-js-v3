import { DisassociateMembersInput } from "../shapes/DisassociateMembersInput";
import { DisassociateMembersOutput } from "../shapes/DisassociateMembersOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
