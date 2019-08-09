import { UpdateComputeEnvironmentInput } from "./UpdateComputeEnvironmentInput";
import { UpdateComputeEnvironmentOutput } from "./UpdateComputeEnvironmentOutput";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateComputeEnvironment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateComputeEnvironment",
  http: {
    method: "POST",
    requestUri: "/v1/updatecomputeenvironment"
  },
  input: {
    shape: UpdateComputeEnvironmentInput
  },
  output: {
    shape: UpdateComputeEnvironmentOutput
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
