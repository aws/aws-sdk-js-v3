import { GetPhoneNumberOrderInput } from "./GetPhoneNumberOrderInput";
import { GetPhoneNumberOrderOutput } from "./GetPhoneNumberOrderOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPhoneNumberOrder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPhoneNumberOrder",
  http: {
    method: "GET",
    requestUri: "/phone-number-orders/{phoneNumberOrderId}"
  },
  input: {
    shape: GetPhoneNumberOrderInput
  },
  output: {
    shape: GetPhoneNumberOrderOutput
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
