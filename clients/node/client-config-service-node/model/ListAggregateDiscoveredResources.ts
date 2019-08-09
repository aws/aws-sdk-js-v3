import { ListAggregateDiscoveredResourcesInput } from "./ListAggregateDiscoveredResourcesInput";
import { ListAggregateDiscoveredResourcesOutput } from "./ListAggregateDiscoveredResourcesOutput";
import { ValidationException } from "./ValidationException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
