import { UpdateServerEngineAttributesInput } from "../shapes/UpdateServerEngineAttributesInput";
import { UpdateServerEngineAttributesOutput } from "../shapes/UpdateServerEngineAttributesOutput";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
