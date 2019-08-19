import { UpdateDestinationInput } from "../shapes/UpdateDestinationInput";
import { UpdateDestinationOutput } from "../shapes/UpdateDestinationOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
