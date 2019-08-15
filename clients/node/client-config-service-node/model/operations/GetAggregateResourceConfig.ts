import { GetAggregateResourceConfigInput } from "../shapes/GetAggregateResourceConfigInput";
import { GetAggregateResourceConfigOutput } from "../shapes/GetAggregateResourceConfigOutput";
import { ValidationException } from "../shapes/ValidationException";
import { NoSuchConfigurationAggregatorException } from "../shapes/NoSuchConfigurationAggregatorException";
import { OversizedConfigurationItemException } from "../shapes/OversizedConfigurationItemException";
import { ResourceNotDiscoveredException } from "../shapes/ResourceNotDiscoveredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
