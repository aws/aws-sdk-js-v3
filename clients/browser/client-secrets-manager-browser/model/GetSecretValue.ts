import { GetSecretValueInput } from "./GetSecretValueInput";
import { GetSecretValueOutput } from "./GetSecretValueOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { DecryptionFailure } from "./DecryptionFailure";
import { InternalServiceError } from "./InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSecretValue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSecretValue",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSecretValueInput
  },
  output: {
    shape: GetSecretValueOutput
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
      shape: DecryptionFailure
    },
    {
      shape: InternalServiceError
    }
  ]
};
