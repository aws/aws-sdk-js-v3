import { BatchGetAggregateResourceConfigInput } from "./BatchGetAggregateResourceConfigInput";
import { BatchGetAggregateResourceConfigOutput } from "./BatchGetAggregateResourceConfigOutput";
import { ValidationException } from "./ValidationException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchGetAggregateResourceConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetAggregateResourceConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetAggregateResourceConfigInput
  },
  output: {
    shape: BatchGetAggregateResourceConfigOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: NoSuchConfigurationAggregatorException
    }
  ]
};
