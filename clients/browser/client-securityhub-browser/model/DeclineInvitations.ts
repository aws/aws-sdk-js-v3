import { DeclineInvitationsInput } from "./DeclineInvitationsInput";
import { DeclineInvitationsOutput } from "./DeclineInvitationsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
