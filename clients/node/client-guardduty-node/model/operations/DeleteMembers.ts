import { DeleteMembersInput } from "../shapes/DeleteMembersInput";
import { DeleteMembersOutput } from "../shapes/DeleteMembersOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMembers",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/member/delete"
  },
  input: {
    shape: DeleteMembersInput
  },
  output: {
    shape: DeleteMembersOutput
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
