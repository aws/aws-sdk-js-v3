import { AssociatePhoneNumberWithUserInput } from "./AssociatePhoneNumberWithUserInput";
import { AssociatePhoneNumberWithUserOutput } from "./AssociatePhoneNumberWithUserOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
