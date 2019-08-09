import { CreateServerInput } from "./CreateServerInput";
import { CreateServerOutput } from "./CreateServerOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceExistsException } from "./ResourceExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateServerInput
  },
  output: {
    shape: CreateServerOutput
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
    }
  ]
};
