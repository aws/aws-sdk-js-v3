import { BatchUnsuspendUserInput } from "./BatchUnsuspendUserInput";
import { BatchUnsuspendUserOutput } from "./BatchUnsuspendUserOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchUnsuspendUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchUnsuspendUser",
  http: {
    method: "POST",
    requestUri: "/accounts/{accountId}/users?operation=unsuspend"
  },
  input: {
    shape: BatchUnsuspendUserInput
  },
  output: {
    shape: BatchUnsuspendUserOutput
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
