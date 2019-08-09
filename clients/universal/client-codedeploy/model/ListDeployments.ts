import { ListDeploymentsInput } from "./ListDeploymentsInput";
import { ListDeploymentsOutput } from "./ListDeploymentsOutput";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { InvalidDeploymentGroupNameException } from "./InvalidDeploymentGroupNameException";
import { DeploymentGroupDoesNotExistException } from "./DeploymentGroupDoesNotExistException";
import { DeploymentGroupNameRequiredException } from "./DeploymentGroupNameRequiredException";
import { InvalidTimeRangeException } from "./InvalidTimeRangeException";
import { InvalidDeploymentStatusException } from "./InvalidDeploymentStatusException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
