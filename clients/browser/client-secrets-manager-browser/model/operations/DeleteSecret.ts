import { DeleteSecretInput } from "../shapes/DeleteSecretInput";
import { DeleteSecretOutput } from "../shapes/DeleteSecretOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSecret: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSecret",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSecretInput
  },
  output: {
    shape: DeleteSecretOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalServiceError
    }
  ]
};
