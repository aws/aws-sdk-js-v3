import { DeleteComputeEnvironmentInput } from "../shapes/DeleteComputeEnvironmentInput";
import { DeleteComputeEnvironmentOutput } from "../shapes/DeleteComputeEnvironmentOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteComputeEnvironment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteComputeEnvironment",
  http: {
    method: "POST",
    requestUri: "/v1/deletecomputeenvironment"
  },
  input: {
    shape: DeleteComputeEnvironmentInput
  },
  output: {
    shape: DeleteComputeEnvironmentOutput
  },
  errors: [
    {
      shape: ClientException
    },
    {
      shape: ServerException
    }
  ]
};
