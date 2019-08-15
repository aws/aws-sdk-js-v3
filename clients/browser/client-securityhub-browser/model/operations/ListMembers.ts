import { ListMembersInput } from "../shapes/ListMembersInput";
import { ListMembersOutput } from "../shapes/ListMembersOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMembers",
  http: {
    method: "GET",
    requestUri: "/members"
  },
  input: {
    shape: ListMembersInput
  },
  output: {
    shape: ListMembersOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: LimitExceededException
    }
  ]
};
