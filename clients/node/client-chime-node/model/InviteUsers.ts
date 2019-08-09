import { InviteUsersInput } from "./InviteUsersInput";
import { InviteUsersOutput } from "./InviteUsersOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const InviteUsers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InviteUsers",
  http: {
    method: "POST",
    requestUri: "/accounts/{accountId}/users?operation=add"
  },
  input: {
    shape: InviteUsersInput
  },
  output: {
    shape: InviteUsersOutput
  },
  errors: [
    {
      shape: UnauthorizedClientException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ThrottledClientException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
