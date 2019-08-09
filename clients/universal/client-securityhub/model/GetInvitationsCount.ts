import { GetInvitationsCountInput } from "./GetInvitationsCountInput";
import { GetInvitationsCountOutput } from "./GetInvitationsCountOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetInvitationsCount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInvitationsCount",
  http: {
    method: "GET",
    requestUri: "/invitations/count"
  },
  input: {
    shape: GetInvitationsCountInput
  },
  output: {
    shape: GetInvitationsCountOutput
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
