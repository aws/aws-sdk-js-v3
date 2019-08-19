import { TestIdentityProviderInput } from "../shapes/TestIdentityProviderInput";
import { TestIdentityProviderOutput } from "../shapes/TestIdentityProviderOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
