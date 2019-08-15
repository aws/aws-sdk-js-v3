import { CreatePhoneNumberOrderInput } from "../shapes/CreatePhoneNumberOrderInput";
import { CreatePhoneNumberOrderOutput } from "../shapes/CreatePhoneNumberOrderOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePhoneNumberOrder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePhoneNumberOrder",
  http: {
    method: "POST",
    requestUri: "/phone-number-orders"
  },
  input: {
    shape: CreatePhoneNumberOrderInput
  },
  output: {
    shape: CreatePhoneNumberOrderOutput
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
