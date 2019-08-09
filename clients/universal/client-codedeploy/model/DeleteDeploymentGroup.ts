import { DeleteDeploymentGroupInput } from "./DeleteDeploymentGroupInput";
import { DeleteDeploymentGroupOutput } from "./DeleteDeploymentGroupOutput";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { DeploymentGroupNameRequiredException } from "./DeploymentGroupNameRequiredException";
import { InvalidDeploymentGroupNameException } from "./InvalidDeploymentGroupNameException";
import { InvalidRoleException } from "./InvalidRoleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDeploymentGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDeploymentGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDeploymentGroupInput
  },
  output: {
    shape: DeleteDeploymentGroupOutput
  },
  errors: [
    {
      shape: ApplicationNameRequiredException
    },
    {
      shape: InvalidApplicationNameException
    },
    {
      shape: DeploymentGroupNameRequiredException
    },
    {
      shape: InvalidDeploymentGroupNameException
    },
    {
      shape: InvalidRoleException
    }
  ]
};
