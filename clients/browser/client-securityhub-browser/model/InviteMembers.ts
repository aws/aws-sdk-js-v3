import { InviteMembersInput } from "./InviteMembersInput";
import { InviteMembersOutput } from "./InviteMembersOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
