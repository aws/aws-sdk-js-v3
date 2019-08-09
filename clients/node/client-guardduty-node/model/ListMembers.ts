import { ListMembersInput } from "./ListMembersInput";
import { ListMembersOutput } from "./ListMembersOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMembers",
  http: {
    method: "GET",
    requestUri: "/detector/{detectorId}/member"
  },
  input: {
    shape: ListMembersInput
  },
  output: {
    shape: ListMembersOutput
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
