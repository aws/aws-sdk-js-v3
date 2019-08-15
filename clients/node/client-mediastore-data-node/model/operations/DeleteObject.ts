import { DeleteObjectInput } from "../shapes/DeleteObjectInput";
import { DeleteObjectOutput } from "../shapes/DeleteObjectOutput";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { ObjectNotFoundException } from "../shapes/ObjectNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteObject",
  http: {
    method: "DELETE",
    requestUri: "/{Path+}"
  },
  input: {
    shape: DeleteObjectInput
  },
  output: {
    shape: DeleteObjectOutput
  },
  errors: [
    {
      shape: ContainerNotFoundException
    },
    {
      shape: ObjectNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
