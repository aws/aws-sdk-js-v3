import { SearchAvailablePhoneNumbersInput } from "../shapes/SearchAvailablePhoneNumbersInput";
import { SearchAvailablePhoneNumbersOutput } from "../shapes/SearchAvailablePhoneNumbersOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchAvailablePhoneNumbers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchAvailablePhoneNumbers",
  http: {
    method: "GET",
    requestUri: "/search?type=phone-numbers"
  },
  input: {
    shape: SearchAvailablePhoneNumbersInput
  },
  output: {
    shape: SearchAvailablePhoneNumbersOutput
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
