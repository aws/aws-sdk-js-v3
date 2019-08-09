import { RotateSecretInput } from "./RotateSecretInput";
import { RotateSecretOutput } from "./RotateSecretOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
