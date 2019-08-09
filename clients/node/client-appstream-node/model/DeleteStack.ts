import { DeleteStackInput } from "./DeleteStackInput";
import { DeleteStackOutput } from "./DeleteStackOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
