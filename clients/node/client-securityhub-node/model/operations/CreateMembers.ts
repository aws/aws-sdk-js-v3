import { CreateMembersInput } from "../shapes/CreateMembersInput";
import { CreateMembersOutput } from "../shapes/CreateMembersOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateMembers",
  http: {
    method: "POST",
    requestUri: "/members"
  },
  input: {
    shape: CreateMembersInput
  },
  output: {
    shape: CreateMembersOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: ResourceConflictException
    }
  ]
};
