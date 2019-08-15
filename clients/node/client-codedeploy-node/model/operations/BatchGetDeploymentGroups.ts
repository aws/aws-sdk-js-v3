import { BatchGetDeploymentGroupsInput } from "../shapes/BatchGetDeploymentGroupsInput";
import { BatchGetDeploymentGroupsOutput } from "../shapes/BatchGetDeploymentGroupsOutput";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { DeploymentGroupNameRequiredException } from "../shapes/DeploymentGroupNameRequiredException";
import { InvalidDeploymentGroupNameException } from "../shapes/InvalidDeploymentGroupNameException";
import { BatchLimitExceededException } from "../shapes/BatchLimitExceededException";
import { DeploymentConfigDoesNotExistException } from "../shapes/DeploymentConfigDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetDeploymentGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetDeploymentGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetDeploymentGroupsInput
  },
  output: {
    shape: BatchGetDeploymentGroupsOutput
  },
  errors: [
    {
      shape: ApplicationNameRequiredException
    },
    {
      shape: InvalidApplicationNameException
    },
    {
      shape: ApplicationDoesNotExistException
    },
    {
      shape: DeploymentGroupNameRequiredException
    },
    {
      shape: InvalidDeploymentGroupNameException
    },
    {
      shape: BatchLimitExceededException
    },
    {
      shape: DeploymentConfigDoesNotExistException
    }
  ]
};
