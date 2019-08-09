import { BatchGetResourceConfigInput } from "./BatchGetResourceConfigInput";
import { BatchGetResourceConfigOutput } from "./BatchGetResourceConfigOutput";
import { ValidationException } from "./ValidationException";
import { NoAvailableConfigurationRecorderException } from "./NoAvailableConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchGetResourceConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetResourceConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetResourceConfigInput
  },
  output: {
    shape: BatchGetResourceConfigOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: NoAvailableConfigurationRecorderException
    }
  ]
};
