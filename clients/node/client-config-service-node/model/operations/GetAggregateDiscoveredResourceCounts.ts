import { GetAggregateDiscoveredResourceCountsInput } from "../shapes/GetAggregateDiscoveredResourceCountsInput";
import { GetAggregateDiscoveredResourceCountsOutput } from "../shapes/GetAggregateDiscoveredResourceCountsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { NoSuchConfigurationAggregatorException } from "../shapes/NoSuchConfigurationAggregatorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
