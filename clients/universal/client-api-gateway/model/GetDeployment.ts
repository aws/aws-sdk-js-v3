import { GetDeploymentInput } from "./GetDeploymentInput";
import { GetDeploymentOutput } from "./GetDeploymentOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeployment",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/deployments/{deployment_id}"
  },
  input: {
    shape: GetDeploymentInput
  },
  output: {
    shape: GetDeploymentOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
