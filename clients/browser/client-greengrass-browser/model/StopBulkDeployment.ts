import { StopBulkDeploymentInput } from "./StopBulkDeploymentInput";
import { StopBulkDeploymentOutput } from "./StopBulkDeploymentOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopBulkDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopBulkDeployment",
  http: {
    method: "PUT",
    requestUri: "/greengrass/bulk/deployments/{BulkDeploymentId}/$stop"
  },
  input: {
    shape: StopBulkDeploymentInput
  },
  output: {
    shape: StopBulkDeploymentOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
