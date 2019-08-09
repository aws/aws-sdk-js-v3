import { DeleteDeploymentInput } from "./DeleteDeploymentInput";
import { DeleteDeploymentOutput } from "./DeleteDeploymentOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
