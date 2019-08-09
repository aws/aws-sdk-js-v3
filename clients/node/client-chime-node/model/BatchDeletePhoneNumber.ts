import { BatchDeletePhoneNumberInput } from "./BatchDeletePhoneNumberInput";
import { BatchDeletePhoneNumberOutput } from "./BatchDeletePhoneNumberOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
