import { BatchGetDeploymentGroupsInput } from "./BatchGetDeploymentGroupsInput";
import { BatchGetDeploymentGroupsOutput } from "./BatchGetDeploymentGroupsOutput";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { DeploymentGroupNameRequiredException } from "./DeploymentGroupNameRequiredException";
import { InvalidDeploymentGroupNameException } from "./InvalidDeploymentGroupNameException";
import { BatchLimitExceededException } from "./BatchLimitExceededException";
import { DeploymentConfigDoesNotExistException } from "./DeploymentConfigDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
