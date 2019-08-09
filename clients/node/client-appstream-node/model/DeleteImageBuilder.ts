import { DeleteImageBuilderInput } from "./DeleteImageBuilderInput";
import { DeleteImageBuilderOutput } from "./DeleteImageBuilderOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteImageBuilder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteImageBuilder",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteImageBuilderInput
  },
  output: {
    shape: DeleteImageBuilderOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
