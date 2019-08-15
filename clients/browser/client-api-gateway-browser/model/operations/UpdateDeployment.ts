import { UpdateDeploymentInput } from "../shapes/UpdateDeploymentInput";
import { UpdateDeploymentOutput } from "../shapes/UpdateDeploymentOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDeployment",
  http: {
    method: "PATCH",
    requestUri: "/restapis/{restapi_id}/deployments/{deployment_id}"
  },
  input: {
    shape: UpdateDeploymentInput
  },
  output: {
    shape: UpdateDeploymentOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
