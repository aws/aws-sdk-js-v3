import { AcceptInvitationInput } from "./AcceptInvitationInput";
import { AcceptInvitationOutput } from "./AcceptInvitationOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAccessException } from "./InvalidAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AcceptInvitation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptInvitation",
  http: {
    method: "POST",
    requestUri: "/master"
  },
  input: {
    shape: AcceptInvitationInput
  },
  output: {
    shape: AcceptInvitationOutput
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
