import { DeleteContainerInput } from "../shapes/DeleteContainerInput";
import { DeleteContainerOutput } from "../shapes/DeleteContainerOutput";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
