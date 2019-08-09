import { GetAggregateResourceConfigInput } from "./GetAggregateResourceConfigInput";
import { GetAggregateResourceConfigOutput } from "./GetAggregateResourceConfigOutput";
import { ValidationException } from "./ValidationException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
import { OversizedConfigurationItemException } from "./OversizedConfigurationItemException";
import { ResourceNotDiscoveredException } from "./ResourceNotDiscoveredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAggregateResourceConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAggregateResourceConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAggregateResourceConfigInput
  },
  output: {
    shape: GetAggregateResourceConfigOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: NoSuchConfigurationAggregatorException
    },
    {
      shape: OversizedConfigurationItemException
    },
    {
      shape: ResourceNotDiscoveredException
    }
  ]
};
