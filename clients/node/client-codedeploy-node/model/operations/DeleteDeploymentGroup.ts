import { DeleteDeploymentGroupInput } from "../shapes/DeleteDeploymentGroupInput";
import { DeleteDeploymentGroupOutput } from "../shapes/DeleteDeploymentGroupOutput";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { DeploymentGroupNameRequiredException } from "../shapes/DeploymentGroupNameRequiredException";
import { InvalidDeploymentGroupNameException } from "../shapes/InvalidDeploymentGroupNameException";
import { InvalidRoleException } from "../shapes/InvalidRoleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
