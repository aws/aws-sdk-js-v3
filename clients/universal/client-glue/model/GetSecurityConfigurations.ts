import { GetSecurityConfigurationsInput } from "./GetSecurityConfigurationsInput";
import { GetSecurityConfigurationsOutput } from "./GetSecurityConfigurationsOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSecurityConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSecurityConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSecurityConfigurationsInput
  },
  output: {
    shape: GetSecurityConfigurationsOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
