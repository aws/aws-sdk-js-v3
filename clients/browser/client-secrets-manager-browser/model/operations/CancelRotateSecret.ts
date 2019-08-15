import { CancelRotateSecretInput } from "../shapes/CancelRotateSecretInput";
import { CancelRotateSecretOutput } from "../shapes/CancelRotateSecretOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelRotateSecret: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelRotateSecret",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelRotateSecretInput
  },
  output: {
    shape: CancelRotateSecretOutput
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
