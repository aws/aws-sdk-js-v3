import { CreateComputeEnvironmentInput } from "../shapes/CreateComputeEnvironmentInput";
import { CreateComputeEnvironmentOutput } from "../shapes/CreateComputeEnvironmentOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateComputeEnvironment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateComputeEnvironment",
  http: {
    method: "POST",
    requestUri: "/v1/createcomputeenvironment"
  },
  input: {
    shape: CreateComputeEnvironmentInput
  },
  output: {
    shape: CreateComputeEnvironmentOutput
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
