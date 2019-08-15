import { AssociatePhoneNumberWithUserInput } from "../shapes/AssociatePhoneNumberWithUserInput";
import { AssociatePhoneNumberWithUserOutput } from "../shapes/AssociatePhoneNumberWithUserOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociatePhoneNumberWithUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociatePhoneNumberWithUser",
  http: {
    method: "POST",
    requestUri:
      "/accounts/{accountId}/users/{userId}?operation=associate-phone-number"
  },
  input: {
    shape: AssociatePhoneNumberWithUserInput
  },
  output: {
    shape: AssociatePhoneNumberWithUserOutput
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
