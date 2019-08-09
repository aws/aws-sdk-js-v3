import { DeleteSecretInput } from "./DeleteSecretInput";
import { DeleteSecretOutput } from "./DeleteSecretOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceError } from "./InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
