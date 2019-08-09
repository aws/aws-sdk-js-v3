import { DisassociateMembersInput } from "./DisassociateMembersInput";
import { DisassociateMembersOutput } from "./DisassociateMembersOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateMembers",
  http: {
    method: "POST",
    requestUri: "/members/disassociate"
  },
  input: {
    shape: DisassociateMembersInput
  },
  output: {
    shape: DisassociateMembersOutput
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
