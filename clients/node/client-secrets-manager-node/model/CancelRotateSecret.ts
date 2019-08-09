import { CancelRotateSecretInput } from "./CancelRotateSecretInput";
import { CancelRotateSecretOutput } from "./CancelRotateSecretOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
