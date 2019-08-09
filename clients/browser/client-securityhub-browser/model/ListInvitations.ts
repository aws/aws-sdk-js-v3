import { ListInvitationsInput } from "./ListInvitationsInput";
import { ListInvitationsOutput } from "./ListInvitationsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
