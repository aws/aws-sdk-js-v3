import { UpdateDestinationInput } from "./UpdateDestinationInput";
import { UpdateDestinationOutput } from "./UpdateDestinationOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateDestination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDestination",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDestinationInput
  },
  output: {
    shape: UpdateDestinationOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
