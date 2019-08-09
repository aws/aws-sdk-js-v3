import { DeleteSecurityConfigurationInput } from "./DeleteSecurityConfigurationInput";
import { DeleteSecurityConfigurationOutput } from "./DeleteSecurityConfigurationOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
