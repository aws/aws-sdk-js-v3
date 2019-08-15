import { GetInvitationsCountInput } from "../shapes/GetInvitationsCountInput";
import { GetInvitationsCountOutput } from "../shapes/GetInvitationsCountOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
