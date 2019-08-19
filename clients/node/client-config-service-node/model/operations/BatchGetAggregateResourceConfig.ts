import { BatchGetAggregateResourceConfigInput } from "../shapes/BatchGetAggregateResourceConfigInput";
import { BatchGetAggregateResourceConfigOutput } from "../shapes/BatchGetAggregateResourceConfigOutput";
import { ValidationException } from "../shapes/ValidationException";
import { NoSuchConfigurationAggregatorException } from "../shapes/NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
