import { RotateSecretInput } from "../shapes/RotateSecretInput";
import { RotateSecretOutput } from "../shapes/RotateSecretOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RotateSecret: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RotateSecret",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RotateSecretInput
  },
  output: {
    shape: RotateSecretOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    }
  ]
};
