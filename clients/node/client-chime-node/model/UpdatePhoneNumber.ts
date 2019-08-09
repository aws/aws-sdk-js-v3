import { UpdatePhoneNumberInput } from "./UpdatePhoneNumberInput";
import { UpdatePhoneNumberOutput } from "./UpdatePhoneNumberOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdatePhoneNumber: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePhoneNumber",
  http: {
    method: "POST",
    requestUri: "/phone-numbers/{phoneNumberId}"
  },
  input: {
    shape: UpdatePhoneNumberInput
  },
  output: {
    shape: UpdatePhoneNumberOutput
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
