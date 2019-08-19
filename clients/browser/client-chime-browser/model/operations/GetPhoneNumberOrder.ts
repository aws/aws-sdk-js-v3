import { GetPhoneNumberOrderInput } from "../shapes/GetPhoneNumberOrderInput";
import { GetPhoneNumberOrderOutput } from "../shapes/GetPhoneNumberOrderOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
