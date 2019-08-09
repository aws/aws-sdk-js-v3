import { ListDeploymentConfigsInput } from "./ListDeploymentConfigsInput";
import { ListDeploymentConfigsOutput } from "./ListDeploymentConfigsOutput";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDeploymentConfigs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeploymentConfigs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDeploymentConfigsInput
  },
  output: {
    shape: ListDeploymentConfigsOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    }
  ]
};
