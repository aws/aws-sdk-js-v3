import { BatchUnsuspendUserInput } from "../shapes/BatchUnsuspendUserInput";
import { BatchUnsuspendUserOutput } from "../shapes/BatchUnsuspendUserOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
