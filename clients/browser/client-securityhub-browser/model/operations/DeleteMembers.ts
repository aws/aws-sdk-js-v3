import { DeleteMembersInput } from "../shapes/DeleteMembersInput";
import { DeleteMembersOutput } from "../shapes/DeleteMembersOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
