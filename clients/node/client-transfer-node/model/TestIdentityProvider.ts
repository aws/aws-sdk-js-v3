import { TestIdentityProviderInput } from "./TestIdentityProviderInput";
import { TestIdentityProviderOutput } from "./TestIdentityProviderOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TestIdentityProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestIdentityProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TestIdentityProviderInput
  },
  output: {
    shape: TestIdentityProviderOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
