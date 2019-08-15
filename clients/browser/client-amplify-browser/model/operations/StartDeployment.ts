import { StartDeploymentInput } from "../shapes/StartDeploymentInput";
import { StartDeploymentOutput } from "../shapes/StartDeploymentOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartDeployment",
  http: {
    method: "POST",
    requestUri: "/apps/{appId}/branches/{branchName}/deployments/start"
  },
  input: {
    shape: StartDeploymentInput
  },
  output: {
    shape: StartDeploymentOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    }
  ]
};
