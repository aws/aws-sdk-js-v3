import { ListDiscoveredResourcesInput } from "../shapes/ListDiscoveredResourcesInput";
import { ListDiscoveredResourcesOutput } from "../shapes/ListDiscoveredResourcesOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
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
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
