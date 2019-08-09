import { BatchUpdateUserInput } from "./BatchUpdateUserInput";
import { BatchUpdateUserOutput } from "./BatchUpdateUserOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchUpdateUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchUpdateUser",
  http: {
    method: "POST",
    requestUri: "/accounts/{accountId}/users"
  },
  input: {
    shape: BatchUpdateUserInput
  },
  output: {
    shape: BatchUpdateUserOutput
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
