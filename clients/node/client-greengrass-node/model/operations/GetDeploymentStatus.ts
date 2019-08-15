import { GetDeploymentStatusInput } from "../shapes/GetDeploymentStatusInput";
import { GetDeploymentStatusOutput } from "../shapes/GetDeploymentStatusOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDeploymentStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeploymentStatus",
  http: {
    method: "GET",
    requestUri: "/greengrass/groups/{GroupId}/deployments/{DeploymentId}/status"
  },
  input: {
    shape: GetDeploymentStatusInput
  },
  output: {
    shape: GetDeploymentStatusOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
