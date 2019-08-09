import { DeleteInvitationsInput } from "./DeleteInvitationsInput";
import { DeleteInvitationsOutput } from "./DeleteInvitationsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAccessException } from "./InvalidAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
