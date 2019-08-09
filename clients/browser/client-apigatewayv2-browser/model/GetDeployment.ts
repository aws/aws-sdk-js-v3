import { GetDeploymentInput } from "./GetDeploymentInput";
import { GetDeploymentOutput } from "./GetDeploymentOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeployment",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/deployments/{deploymentId}"
  },
  input: {
    shape: GetDeploymentInput
  },
  output: {
    shape: GetDeploymentOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
