import { RestoreSecretInput } from "../shapes/RestoreSecretInput";
import { RestoreSecretOutput } from "../shapes/RestoreSecretOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
