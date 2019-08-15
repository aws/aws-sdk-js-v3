import { DeleteDeploymentConfigInput } from "../shapes/DeleteDeploymentConfigInput";
import { DeleteDeploymentConfigOutput } from "../shapes/DeleteDeploymentConfigOutput";
import { InvalidDeploymentConfigNameException } from "../shapes/InvalidDeploymentConfigNameException";
import { DeploymentConfigNameRequiredException } from "../shapes/DeploymentConfigNameRequiredException";
import { DeploymentConfigInUseException } from "../shapes/DeploymentConfigInUseException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDeploymentConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDeploymentConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDeploymentConfigInput
  },
  output: {
    shape: DeleteDeploymentConfigOutput
  },
  errors: [
    {
      shape: InvalidDeploymentConfigNameException
    },
    {
      shape: DeploymentConfigNameRequiredException
    },
    {
      shape: DeploymentConfigInUseException
    },
    {
      shape: InvalidOperationException
    }
  ]
};
