import { InviteMembersInput } from "../shapes/InviteMembersInput";
import { InviteMembersOutput } from "../shapes/InviteMembersOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const InviteMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InviteMembers",
  http: {
    method: "POST",
    requestUri: "/members/invite"
  },
  input: {
    shape: InviteMembersInput
  },
  output: {
    shape: InviteMembersOutput
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
