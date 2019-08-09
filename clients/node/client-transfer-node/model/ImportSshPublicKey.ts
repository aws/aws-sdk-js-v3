import { ImportSshPublicKeyInput } from "./ImportSshPublicKeyInput";
import { ImportSshPublicKeyOutput } from "./ImportSshPublicKeyOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceExistsException } from "./ResourceExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ImportSshPublicKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportSshPublicKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportSshPublicKeyInput
  },
  output: {
    shape: ImportSshPublicKeyOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceExistsException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
