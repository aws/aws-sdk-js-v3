import { UpdateDeploymentInput } from "../shapes/UpdateDeploymentInput";
import { UpdateDeploymentOutput } from "../shapes/UpdateDeploymentOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDeployment",
  http: {
    method: "PATCH",
    requestUri: "/v2/apis/{apiId}/deployments/{deploymentId}"
  },
  input: {
    shape: UpdateDeploymentInput
  },
  output: {
    shape: UpdateDeploymentOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    }
  ]
};
