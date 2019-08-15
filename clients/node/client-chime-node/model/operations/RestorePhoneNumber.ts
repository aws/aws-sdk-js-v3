import { RestorePhoneNumberInput } from "../shapes/RestorePhoneNumberInput";
import { RestorePhoneNumberOutput } from "../shapes/RestorePhoneNumberOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RestorePhoneNumber: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestorePhoneNumber",
  http: {
    method: "POST",
    requestUri: "/phone-numbers/{phoneNumberId}?operation=restore"
  },
  input: {
    shape: RestorePhoneNumberInput
  },
  output: {
    shape: RestorePhoneNumberOutput
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
