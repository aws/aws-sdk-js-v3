import { DeleteDeploymentInput } from "../shapes/DeleteDeploymentInput";
import { DeleteDeploymentOutput } from "../shapes/DeleteDeploymentOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDeployment",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}/deployments/{deployment_id}"
  },
  input: {
    shape: DeleteDeploymentInput
  },
  output: {
    shape: DeleteDeploymentOutput
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
    }
  ]
};
