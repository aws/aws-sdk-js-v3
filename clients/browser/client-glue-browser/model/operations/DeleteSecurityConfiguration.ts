import { DeleteSecurityConfigurationInput } from "../shapes/DeleteSecurityConfigurationInput";
import { DeleteSecurityConfigurationOutput } from "../shapes/DeleteSecurityConfigurationOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSecurityConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSecurityConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSecurityConfigurationInput
  },
  output: {
    shape: DeleteSecurityConfigurationOutput
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
