import { DeleteEnvironmentConfigurationInput } from "../shapes/DeleteEnvironmentConfigurationInput";
import { DeleteEnvironmentConfigurationOutput } from "../shapes/DeleteEnvironmentConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEnvironmentConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEnvironmentConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEnvironmentConfigurationInput
  },
  output: {
    shape: DeleteEnvironmentConfigurationOutput
  },
  errors: []
};
