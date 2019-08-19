import { ListDeploymentsInput } from "../shapes/ListDeploymentsInput";
import { ListDeploymentsOutput } from "../shapes/ListDeploymentsOutput";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { InvalidDeploymentGroupNameException } from "../shapes/InvalidDeploymentGroupNameException";
import { DeploymentGroupDoesNotExistException } from "../shapes/DeploymentGroupDoesNotExistException";
import { DeploymentGroupNameRequiredException } from "../shapes/DeploymentGroupNameRequiredException";
import { InvalidTimeRangeException } from "../shapes/InvalidTimeRangeException";
import { InvalidDeploymentStatusException } from "../shapes/InvalidDeploymentStatusException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDeployments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeployments",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDeploymentsInput
  },
  output: {
    shape: ListDeploymentsOutput
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
      shape: InvalidDeploymentGroupNameException
    },
    {
      shape: DeploymentGroupDoesNotExistException
    },
    {
      shape: DeploymentGroupNameRequiredException
    },
    {
      shape: InvalidTimeRangeException
    },
    {
      shape: InvalidDeploymentStatusException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
