import { DeleteFleetInput } from "../shapes/DeleteFleetInput";
import { DeleteFleetOutput } from "../shapes/DeleteFleetOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteFleetInput
  },
  output: {
    shape: DeleteFleetOutput
  },
  errors: [
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
