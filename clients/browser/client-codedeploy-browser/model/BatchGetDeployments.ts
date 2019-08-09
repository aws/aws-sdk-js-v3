import { BatchGetDeploymentsInput } from "./BatchGetDeploymentsInput";
import { BatchGetDeploymentsOutput } from "./BatchGetDeploymentsOutput";
import { DeploymentIdRequiredException } from "./DeploymentIdRequiredException";
import { InvalidDeploymentIdException } from "./InvalidDeploymentIdException";
import { BatchLimitExceededException } from "./BatchLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchGetDeployments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetDeployments",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetDeploymentsInput
  },
  output: {
    shape: BatchGetDeploymentsOutput
  },
  errors: [
    {
      shape: DeploymentIdRequiredException
    },
    {
      shape: InvalidDeploymentIdException
    },
    {
      shape: BatchLimitExceededException
    }
  ]
};
