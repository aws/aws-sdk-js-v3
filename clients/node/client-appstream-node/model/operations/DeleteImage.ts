import { DeleteImageInput } from "../shapes/DeleteImageInput";
import { DeleteImageOutput } from "../shapes/DeleteImageOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
