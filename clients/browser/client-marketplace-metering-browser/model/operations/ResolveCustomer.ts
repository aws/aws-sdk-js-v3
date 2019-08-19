import { ResolveCustomerInput } from "../shapes/ResolveCustomerInput";
import { ResolveCustomerOutput } from "../shapes/ResolveCustomerOutput";
import { InvalidTokenException } from "../shapes/InvalidTokenException";
import { ExpiredTokenException } from "../shapes/ExpiredTokenException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { DisabledApiException } from "../shapes/DisabledApiException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResolveCustomer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResolveCustomer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResolveCustomerInput
  },
  output: {
    shape: ResolveCustomerOutput
  },
  errors: [
    {
      shape: InvalidTokenException
    },
    {
      shape: ExpiredTokenException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: DisabledApiException
    }
  ]
};
