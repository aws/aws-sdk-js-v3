import { CreatePhoneNumberOrderInput } from "./CreatePhoneNumberOrderInput";
import { CreatePhoneNumberOrderOutput } from "./CreatePhoneNumberOrderOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
