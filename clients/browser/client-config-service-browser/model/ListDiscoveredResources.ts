import { ListDiscoveredResourcesInput } from "./ListDiscoveredResourcesInput";
import { ListDiscoveredResourcesOutput } from "./ListDiscoveredResourcesOutput";
import { ValidationException } from "./ValidationException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { NoAvailableConfigurationRecorderException } from "./NoAvailableConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
