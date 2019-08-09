import { GetAggregateDiscoveredResourceCountsInput } from "./GetAggregateDiscoveredResourceCountsInput";
import { GetAggregateDiscoveredResourceCountsOutput } from "./GetAggregateDiscoveredResourceCountsOutput";
import { ValidationException } from "./ValidationException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAggregateDiscoveredResourceCounts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAggregateDiscoveredResourceCounts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAggregateDiscoveredResourceCountsInput
  },
  output: {
    shape: GetAggregateDiscoveredResourceCountsOutput
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
