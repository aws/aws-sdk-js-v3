import { GetMembersInput } from "./GetMembersInput";
import { GetMembersOutput } from "./GetMembersOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
