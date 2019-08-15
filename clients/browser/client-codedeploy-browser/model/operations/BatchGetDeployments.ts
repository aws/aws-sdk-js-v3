import { BatchGetDeploymentsInput } from "../shapes/BatchGetDeploymentsInput";
import { BatchGetDeploymentsOutput } from "../shapes/BatchGetDeploymentsOutput";
import { DeploymentIdRequiredException } from "../shapes/DeploymentIdRequiredException";
import { InvalidDeploymentIdException } from "../shapes/InvalidDeploymentIdException";
import { BatchLimitExceededException } from "../shapes/BatchLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
