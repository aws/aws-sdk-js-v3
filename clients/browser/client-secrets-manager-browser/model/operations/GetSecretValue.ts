import { GetSecretValueInput } from "../shapes/GetSecretValueInput";
import { GetSecretValueOutput } from "../shapes/GetSecretValueOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { DecryptionFailure } from "../shapes/DecryptionFailure";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
