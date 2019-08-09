import { DeleteServerInput } from "./DeleteServerInput";
import { DeleteServerOutput } from "./DeleteServerOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
