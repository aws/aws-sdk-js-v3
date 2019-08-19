import { StartBulkDeploymentInput } from "../shapes/StartBulkDeploymentInput";
import { StartBulkDeploymentOutput } from "../shapes/StartBulkDeploymentOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartBulkDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartBulkDeployment",
  http: {
    method: "POST",
    requestUri: "/greengrass/bulk/deployments"
  },
  input: {
    shape: StartBulkDeploymentInput
  },
  output: {
    shape: StartBulkDeploymentOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
