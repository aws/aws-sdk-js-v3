import { GetDeploymentInput } from "./GetDeploymentInput";
import { GetDeploymentOutput } from "./GetDeploymentOutput";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { DeploymentDoesNotExistException } from "./DeploymentDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
