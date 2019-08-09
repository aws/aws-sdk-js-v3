import { ResetPersonalPINInput } from "./ResetPersonalPINInput";
import { ResetPersonalPINOutput } from "./ResetPersonalPINOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
