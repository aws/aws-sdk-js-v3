import { DeleteStackInput } from "../shapes/DeleteStackInput";
import { DeleteStackOutput } from "../shapes/DeleteStackOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteStackInput
  },
  output: {
    shape: DeleteStackOutput
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
