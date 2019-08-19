import { CreateDeploymentInput } from "../shapes/CreateDeploymentInput";
import { CreateDeploymentOutput } from "../shapes/CreateDeploymentOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDeployment",
  http: {
    method: "POST",
    requestUri: "/apps/{appId}/branches/{branchName}/deployments"
  },
  input: {
    shape: CreateDeploymentInput
  },
  output: {
    shape: CreateDeploymentOutput
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
      shape: LimitExceededException
    }
  ]
};
