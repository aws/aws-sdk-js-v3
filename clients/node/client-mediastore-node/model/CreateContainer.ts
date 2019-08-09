import { CreateContainerInput } from "./CreateContainerInput";
import { CreateContainerOutput } from "./CreateContainerOutput";
import { ContainerInUseException } from "./ContainerInUseException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateContainer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateContainer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateContainerInput
  },
  output: {
    shape: CreateContainerOutput
  },
  errors: [
    {
      shape: ContainerInUseException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServerError
    }
  ]
};
