import { ListDiscoveredResourcesInput } from "./ListDiscoveredResourcesInput";
import { ListDiscoveredResourcesOutput } from "./ListDiscoveredResourcesOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
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
