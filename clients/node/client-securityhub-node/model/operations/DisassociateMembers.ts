import { DisassociateMembersInput } from "../shapes/DisassociateMembersInput";
import { DisassociateMembersOutput } from "../shapes/DisassociateMembersOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
