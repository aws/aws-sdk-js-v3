import { UpdateDeploymentInput } from "./UpdateDeploymentInput";
import { UpdateDeploymentOutput } from "./UpdateDeploymentOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
