import { ResolveCustomerInput } from "./ResolveCustomerInput";
import { ResolveCustomerOutput } from "./ResolveCustomerOutput";
import { InvalidTokenException } from "./InvalidTokenException";
import { ExpiredTokenException } from "./ExpiredTokenException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { DisabledApiException } from "./DisabledApiException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
