import { DeleteComputeEnvironmentInput } from "./DeleteComputeEnvironmentInput";
import { DeleteComputeEnvironmentOutput } from "./DeleteComputeEnvironmentOutput";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
