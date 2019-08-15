import { PutSecretValueInput } from "../shapes/PutSecretValueInput";
import { PutSecretValueOutput } from "../shapes/PutSecretValueOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { EncryptionFailure } from "../shapes/EncryptionFailure";
import { ResourceExistsException } from "../shapes/ResourceExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutSecretValue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutSecretValue",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutSecretValueInput
  },
  output: {
    shape: PutSecretValueOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: EncryptionFailure
    },
    {
      shape: ResourceExistsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServiceError
    }
  ]
};
