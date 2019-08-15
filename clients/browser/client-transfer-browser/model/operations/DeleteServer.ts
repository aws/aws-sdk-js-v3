import { DeleteServerInput } from "../shapes/DeleteServerInput";
import { DeleteServerOutput } from "../shapes/DeleteServerOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteServerInput
  },
  output: {
    shape: DeleteServerOutput
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
