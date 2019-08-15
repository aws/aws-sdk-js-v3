import { BatchSuspendUserInput } from "../shapes/BatchSuspendUserInput";
import { BatchSuspendUserOutput } from "../shapes/BatchSuspendUserOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchSuspendUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchSuspendUser",
  http: {
    method: "POST",
    requestUri: "/accounts/{accountId}/users?operation=suspend"
  },
  input: {
    shape: BatchSuspendUserInput
  },
  output: {
    shape: BatchSuspendUserOutput
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
