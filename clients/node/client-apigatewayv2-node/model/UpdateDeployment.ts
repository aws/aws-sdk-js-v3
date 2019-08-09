import { UpdateDeploymentInput } from "./UpdateDeploymentInput";
import { UpdateDeploymentOutput } from "./UpdateDeploymentOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
