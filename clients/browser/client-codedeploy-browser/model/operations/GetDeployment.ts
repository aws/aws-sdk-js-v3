import { GetDeploymentInput } from "../shapes/GetDeploymentInput";
import { GetDeploymentOutput } from "../shapes/GetDeploymentOutput";
import { DeploymentIdRequiredException } from "../shapes/DeploymentIdRequiredException";
import { InvalidDeploymentIdException } from "../shapes/InvalidDeploymentIdException";
import { DeploymentDoesNotExistException } from "../shapes/DeploymentDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeployment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDeploymentInput
  },
  output: {
    shape: GetDeploymentOutput
  },
  errors: [
    {
      shape: DeploymentIdRequiredException
    },
    {
      shape: InvalidDeploymentIdException
    },
    {
      shape: DeploymentDoesNotExistException
    }
  ]
};
