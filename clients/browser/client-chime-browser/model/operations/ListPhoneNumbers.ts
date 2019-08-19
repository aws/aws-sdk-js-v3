import { ListPhoneNumbersInput } from "../shapes/ListPhoneNumbersInput";
import { ListPhoneNumbersOutput } from "../shapes/ListPhoneNumbersOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPhoneNumbers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPhoneNumbers",
  http: {
    method: "GET",
    requestUri: "/phone-numbers"
  },
  input: {
    shape: ListPhoneNumbersInput
  },
  output: {
    shape: ListPhoneNumbersOutput
  },
  errors: [
    {
      shape: UnauthorizedClientException
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
