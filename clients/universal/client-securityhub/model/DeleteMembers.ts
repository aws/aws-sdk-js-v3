import { DeleteMembersInput } from "./DeleteMembersInput";
import { DeleteMembersOutput } from "./DeleteMembersOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMembers",
  http: {
    method: "POST",
    requestUri: "/members/delete"
  },
  input: {
    shape: DeleteMembersInput
  },
  output: {
    shape: DeleteMembersOutput
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
