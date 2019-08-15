import { AcceptInvitationInput } from "../shapes/AcceptInvitationInput";
import { AcceptInvitationOutput } from "../shapes/AcceptInvitationOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
