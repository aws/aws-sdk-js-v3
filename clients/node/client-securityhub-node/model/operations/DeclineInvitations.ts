import { DeclineInvitationsInput } from "../shapes/DeclineInvitationsInput";
import { DeclineInvitationsOutput } from "../shapes/DeclineInvitationsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeclineInvitations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeclineInvitations",
  http: {
    method: "POST",
    requestUri: "/invitations/decline"
  },
  input: {
    shape: DeclineInvitationsInput
  },
  output: {
    shape: DeclineInvitationsOutput
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
      shape: ResourceNotFoundException
    }
  ]
};
