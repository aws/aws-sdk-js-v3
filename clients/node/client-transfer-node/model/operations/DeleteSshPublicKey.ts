import { DeleteSshPublicKeyInput } from "../shapes/DeleteSshPublicKeyInput";
import { DeleteSshPublicKeyOutput } from "../shapes/DeleteSshPublicKeyOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
