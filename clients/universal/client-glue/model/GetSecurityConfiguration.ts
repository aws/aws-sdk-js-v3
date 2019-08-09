import { GetSecurityConfigurationInput } from "./GetSecurityConfigurationInput";
import { GetSecurityConfigurationOutput } from "./GetSecurityConfigurationOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSecurityConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSecurityConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSecurityConfigurationInput
  },
  output: {
    shape: GetSecurityConfigurationOutput
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
