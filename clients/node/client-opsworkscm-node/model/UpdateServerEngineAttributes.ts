import { UpdateServerEngineAttributesInput } from "./UpdateServerEngineAttributesInput";
import { UpdateServerEngineAttributesOutput } from "./UpdateServerEngineAttributesOutput";
import { InvalidStateException } from "./InvalidStateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateServerEngineAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateServerEngineAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateServerEngineAttributesInput
  },
  output: {
    shape: UpdateServerEngineAttributesOutput
  },
  errors: [
    {
      shape: InvalidStateException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
