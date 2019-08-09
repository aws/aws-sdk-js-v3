import { StartDeploymentInput } from "./StartDeploymentInput";
import { StartDeploymentOutput } from "./StartDeploymentOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
