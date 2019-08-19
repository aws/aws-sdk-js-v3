import { CreateSecretInput } from "../shapes/CreateSecretInput";
import { CreateSecretOutput } from "../shapes/CreateSecretOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { EncryptionFailure } from "../shapes/EncryptionFailure";
import { ResourceExistsException } from "../shapes/ResourceExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { PreconditionNotMetException } from "../shapes/PreconditionNotMetException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSecret: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSecret",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSecretInput
  },
  output: {
    shape: CreateSecretOutput
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
      shape: MalformedPolicyDocumentException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: PreconditionNotMetException
    }
  ]
};
