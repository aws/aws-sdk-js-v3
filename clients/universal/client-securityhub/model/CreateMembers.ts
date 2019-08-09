import { CreateMembersInput } from "./CreateMembersInput";
import { CreateMembersOutput } from "./CreateMembersOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceConflictException } from "./ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
