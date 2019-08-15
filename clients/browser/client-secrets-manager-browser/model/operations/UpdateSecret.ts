import { UpdateSecretInput } from "../shapes/UpdateSecretInput";
import { UpdateSecretOutput } from "../shapes/UpdateSecretOutput";
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

export const UpdateSecret: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSecret",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSecretInput
  },
  output: {
    shape: UpdateSecretOutput
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
