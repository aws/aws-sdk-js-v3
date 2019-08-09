import { DisassociatePhoneNumberFromUserInput } from "./DisassociatePhoneNumberFromUserInput";
import { DisassociatePhoneNumberFromUserOutput } from "./DisassociatePhoneNumberFromUserOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
