import { ExportServerEngineAttributeInput } from "../shapes/ExportServerEngineAttributeInput";
import { ExportServerEngineAttributeOutput } from "../shapes/ExportServerEngineAttributeOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ExportServerEngineAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExportServerEngineAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ExportServerEngineAttributeInput
  },
  output: {
    shape: ExportServerEngineAttributeOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidStateException
    }
  ]
};
