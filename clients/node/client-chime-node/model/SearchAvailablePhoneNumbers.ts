import { SearchAvailablePhoneNumbersInput } from "./SearchAvailablePhoneNumbersInput";
import { SearchAvailablePhoneNumbersOutput } from "./SearchAvailablePhoneNumbersOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
