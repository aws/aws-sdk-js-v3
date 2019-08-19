import { ResetPersonalPINInput } from "../shapes/ResetPersonalPINInput";
import { ResetPersonalPINOutput } from "../shapes/ResetPersonalPINOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResetPersonalPIN: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetPersonalPIN",
  http: {
    method: "POST",
    requestUri:
      "/accounts/{accountId}/users/{userId}?operation=reset-personal-pin"
  },
  input: {
    shape: ResetPersonalPINInput
  },
  output: {
    shape: ResetPersonalPINOutput
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
