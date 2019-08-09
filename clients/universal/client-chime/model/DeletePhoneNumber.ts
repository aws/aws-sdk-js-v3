import { DeletePhoneNumberInput } from "./DeletePhoneNumberInput";
import { DeletePhoneNumberOutput } from "./DeletePhoneNumberOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePhoneNumber: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePhoneNumber",
  http: {
    method: "DELETE",
    requestUri: "/phone-numbers/{phoneNumberId}"
  },
  input: {
    shape: DeletePhoneNumberInput
  },
  output: {
    shape: DeletePhoneNumberOutput
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
