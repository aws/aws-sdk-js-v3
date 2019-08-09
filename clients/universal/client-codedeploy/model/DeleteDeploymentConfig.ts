import { DeleteDeploymentConfigInput } from "./DeleteDeploymentConfigInput";
import { DeleteDeploymentConfigOutput } from "./DeleteDeploymentConfigOutput";
import { InvalidDeploymentConfigNameException } from "./InvalidDeploymentConfigNameException";
import { DeploymentConfigNameRequiredException } from "./DeploymentConfigNameRequiredException";
import { DeploymentConfigInUseException } from "./DeploymentConfigInUseException";
import { InvalidOperationException } from "./InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
