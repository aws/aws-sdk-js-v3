import { CreateServerInput } from "../shapes/CreateServerInput";
import { CreateServerOutput } from "../shapes/CreateServerOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceExistsException } from "../shapes/ResourceExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
