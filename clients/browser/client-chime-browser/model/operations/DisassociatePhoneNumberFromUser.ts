import { DisassociatePhoneNumberFromUserInput } from "../shapes/DisassociatePhoneNumberFromUserInput";
import { DisassociatePhoneNumberFromUserOutput } from "../shapes/DisassociatePhoneNumberFromUserOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociatePhoneNumberFromUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociatePhoneNumberFromUser",
  http: {
    method: "POST",
    requestUri:
      "/accounts/{accountId}/users/{userId}?operation=disassociate-phone-number"
  },
  input: {
    shape: DisassociatePhoneNumberFromUserInput
  },
  output: {
    shape: DisassociatePhoneNumberFromUserOutput
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
