import { GetMembersInput } from "../shapes/GetMembersInput";
import { GetMembersOutput } from "../shapes/GetMembersOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMembers",
  http: {
    method: "POST",
    requestUri: "/detector/{detectorId}/member/get"
  },
  input: {
    shape: GetMembersInput
  },
  output: {
    shape: GetMembersOutput
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
