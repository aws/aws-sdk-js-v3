import { RestorePhoneNumberInput } from "./RestorePhoneNumberInput";
import { RestorePhoneNumberOutput } from "./RestorePhoneNumberOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
