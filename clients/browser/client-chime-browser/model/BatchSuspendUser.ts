import { BatchSuspendUserInput } from "./BatchSuspendUserInput";
import { BatchSuspendUserOutput } from "./BatchSuspendUserOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
