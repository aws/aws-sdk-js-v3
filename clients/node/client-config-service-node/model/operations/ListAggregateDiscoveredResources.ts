import { ListAggregateDiscoveredResourcesInput } from "../shapes/ListAggregateDiscoveredResourcesInput";
import { ListAggregateDiscoveredResourcesOutput } from "../shapes/ListAggregateDiscoveredResourcesOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { NoSuchConfigurationAggregatorException } from "../shapes/NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAggregateDiscoveredResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAggregateDiscoveredResources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAggregateDiscoveredResourcesInput
  },
  output: {
    shape: ListAggregateDiscoveredResourcesOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: InvalidLimitException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: NoSuchConfigurationAggregatorException
    }
  ]
};
