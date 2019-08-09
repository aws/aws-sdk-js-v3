import { GetMembersInput } from "./GetMembersInput";
import { GetMembersOutput } from "./GetMembersOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMembers",
  http: {
    method: "POST",
    requestUri: "/members/get"
  },
  input: {
    shape: GetMembersInput
  },
  output: {
    shape: GetMembersOutput
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
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
