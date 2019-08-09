import { RestoreSecretInput } from "./RestoreSecretInput";
import { RestoreSecretOutput } from "./RestoreSecretOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceError } from "./InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RestoreSecret: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreSecret",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreSecretInput
  },
  output: {
    shape: RestoreSecretOutput
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
