import { ListInvitationsInput } from "../shapes/ListInvitationsInput";
import { ListInvitationsOutput } from "../shapes/ListInvitationsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListInvitations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInvitations",
  http: {
    method: "GET",
    requestUri: "/invitations"
  },
  input: {
    shape: ListInvitationsInput
  },
  output: {
    shape: ListInvitationsOutput
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
    }
  ]
};
