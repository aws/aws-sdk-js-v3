import { GetMembersInput } from "../shapes/GetMembersInput";
import { GetMembersOutput } from "../shapes/GetMembersOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
