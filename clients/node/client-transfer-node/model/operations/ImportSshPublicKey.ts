import { ImportSshPublicKeyInput } from "../shapes/ImportSshPublicKeyInput";
import { ImportSshPublicKeyOutput } from "../shapes/ImportSshPublicKeyOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceExistsException } from "../shapes/ResourceExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
