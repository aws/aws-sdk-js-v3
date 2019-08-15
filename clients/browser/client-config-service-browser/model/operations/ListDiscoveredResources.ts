import { ListDiscoveredResourcesInput } from "../shapes/ListDiscoveredResourcesInput";
import { ListDiscoveredResourcesOutput } from "../shapes/ListDiscoveredResourcesOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { NoAvailableConfigurationRecorderException } from "../shapes/NoAvailableConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDiscoveredResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDiscoveredResources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDiscoveredResourcesInput
  },
  output: {
    shape: ListDiscoveredResourcesOutput
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
      shape: NoAvailableConfigurationRecorderException
    }
  ]
};
