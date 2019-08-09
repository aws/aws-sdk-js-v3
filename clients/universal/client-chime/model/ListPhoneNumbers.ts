import { ListPhoneNumbersInput } from "./ListPhoneNumbersInput";
import { ListPhoneNumbersOutput } from "./ListPhoneNumbersOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
