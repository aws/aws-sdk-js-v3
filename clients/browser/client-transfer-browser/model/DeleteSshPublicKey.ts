import { DeleteSshPublicKeyInput } from "./DeleteSshPublicKeyInput";
import { DeleteSshPublicKeyOutput } from "./DeleteSshPublicKeyOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteSshPublicKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSshPublicKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSshPublicKeyInput
  },
  output: {
    shape: DeleteSshPublicKeyOutput
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
      shape: ResourceNotFoundException
    }
  ]
};
