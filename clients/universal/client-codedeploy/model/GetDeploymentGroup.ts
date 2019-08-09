import { GetDeploymentGroupInput } from "./GetDeploymentGroupInput";
import { GetDeploymentGroupOutput } from "./GetDeploymentGroupOutput";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { DeploymentGroupNameRequiredException } from "./DeploymentGroupNameRequiredException";
import { InvalidDeploymentGroupNameException } from "./InvalidDeploymentGroupNameException";
import { DeploymentGroupDoesNotExistException } from "./DeploymentGroupDoesNotExistException";
import { DeploymentConfigDoesNotExistException } from "./DeploymentConfigDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDeploymentGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeploymentGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDeploymentGroupInput
  },
  output: {
    shape: GetDeploymentGroupOutput
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
      shape: DeploymentGroupDoesNotExistException
    },
    {
      shape: DeploymentConfigDoesNotExistException
    }
  ]
};
