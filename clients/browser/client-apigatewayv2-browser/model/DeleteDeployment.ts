import { DeleteDeploymentInput } from "./DeleteDeploymentInput";
import { DeleteDeploymentOutput } from "./DeleteDeploymentOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDeployment",
  http: {
    method: "DELETE",
    requestUri: "/v2/apis/{apiId}/deployments/{deploymentId}"
  },
  input: {
    shape: DeleteDeploymentInput
  },
  output: {
    shape: DeleteDeploymentOutput
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
