import { ListPhoneNumberOrdersInput } from "../shapes/ListPhoneNumberOrdersInput";
import { ListPhoneNumberOrdersOutput } from "../shapes/ListPhoneNumberOrdersOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPhoneNumberOrders: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPhoneNumberOrders",
  http: {
    method: "GET",
    requestUri: "/phone-number-orders"
  },
  input: {
    shape: ListPhoneNumberOrdersInput
  },
  output: {
    shape: ListPhoneNumberOrdersOutput
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
