import { ExportServerEngineAttributeInput } from "./ExportServerEngineAttributeInput";
import { ExportServerEngineAttributeOutput } from "./ExportServerEngineAttributeOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
