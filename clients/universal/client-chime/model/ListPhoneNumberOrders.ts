import { ListPhoneNumberOrdersInput } from "./ListPhoneNumberOrdersInput";
import { ListPhoneNumberOrdersOutput } from "./ListPhoneNumberOrdersOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
