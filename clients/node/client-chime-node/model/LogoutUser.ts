import { LogoutUserInput } from "./LogoutUserInput";
import { LogoutUserOutput } from "./LogoutUserOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const LogoutUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "LogoutUser",
  http: {
    method: "POST",
    requestUri: "/accounts/{accountId}/users/{userId}?operation=logout"
  },
  input: {
    shape: LogoutUserInput
  },
  output: {
    shape: LogoutUserOutput
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
