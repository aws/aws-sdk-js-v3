import { UpdateSecretInput } from "./UpdateSecretInput";
import { UpdateSecretOutput } from "./UpdateSecretOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { EncryptionFailure } from "./EncryptionFailure";
import { ResourceExistsException } from "./ResourceExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { InternalServiceError } from "./InternalServiceError";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
