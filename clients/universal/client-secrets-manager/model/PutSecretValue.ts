import { PutSecretValueInput } from "./PutSecretValueInput";
import { PutSecretValueOutput } from "./PutSecretValueOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { EncryptionFailure } from "./EncryptionFailure";
import { ResourceExistsException } from "./ResourceExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceError } from "./InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
