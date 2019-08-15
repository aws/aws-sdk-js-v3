import { BatchUpdatePhoneNumberInput } from "../shapes/BatchUpdatePhoneNumberInput";
import { BatchUpdatePhoneNumberOutput } from "../shapes/BatchUpdatePhoneNumberOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchUpdatePhoneNumber: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchUpdatePhoneNumber",
  http: {
    method: "POST",
    requestUri: "/phone-numbers?operation=batch-update"
  },
  input: {
    shape: BatchUpdatePhoneNumberInput
  },
  output: {
    shape: BatchUpdatePhoneNumberOutput
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
