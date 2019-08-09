import { DeleteObjectInput } from "./DeleteObjectInput";
import { DeleteObjectOutput } from "./DeleteObjectOutput";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
