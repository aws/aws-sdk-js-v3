import { DeleteInvitationsInput } from "../shapes/DeleteInvitationsInput";
import { DeleteInvitationsOutput } from "../shapes/DeleteInvitationsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteInvitations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInvitations",
  http: {
    method: "POST",
    requestUri: "/invitations/delete"
  },
  input: {
    shape: DeleteInvitationsInput
  },
  output: {
    shape: DeleteInvitationsOutput
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
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidAccessException
    }
  ]
};
