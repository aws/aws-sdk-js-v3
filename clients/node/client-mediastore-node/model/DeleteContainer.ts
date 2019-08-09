import { DeleteContainerInput } from "./DeleteContainerInput";
import { DeleteContainerOutput } from "./DeleteContainerOutput";
import { ContainerInUseException } from "./ContainerInUseException";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteContainer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteContainer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteContainerInput
  },
  output: {
    shape: DeleteContainerOutput
  },
  errors: [
    {
      shape: ContainerInUseException
    },
    {
      shape: ContainerNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
