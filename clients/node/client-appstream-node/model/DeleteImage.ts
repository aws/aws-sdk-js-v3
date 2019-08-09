import { DeleteImageInput } from "./DeleteImageInput";
import { DeleteImageOutput } from "./DeleteImageOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteImageInput
  },
  output: {
    shape: DeleteImageOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
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
