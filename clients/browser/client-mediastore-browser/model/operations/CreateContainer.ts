import { CreateContainerInput } from "../shapes/CreateContainerInput";
import { CreateContainerOutput } from "../shapes/CreateContainerOutput";
import { ContainerInUseException } from "../shapes/ContainerInUseException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
