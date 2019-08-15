import { BatchDeletePhoneNumberInput } from "../shapes/BatchDeletePhoneNumberInput";
import { BatchDeletePhoneNumberOutput } from "../shapes/BatchDeletePhoneNumberOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchDeletePhoneNumber: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchDeletePhoneNumber",
  http: {
    method: "POST",
    requestUri: "/phone-numbers?operation=batch-delete"
  },
  input: {
    shape: BatchDeletePhoneNumberInput
  },
  output: {
    shape: BatchDeletePhoneNumberOutput
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
