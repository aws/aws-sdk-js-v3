import { GetBulkDeploymentStatusInput } from "../shapes/GetBulkDeploymentStatusInput";
import { GetBulkDeploymentStatusOutput } from "../shapes/GetBulkDeploymentStatusOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBulkDeploymentStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBulkDeploymentStatus",
  http: {
    method: "GET",
    requestUri: "/greengrass/bulk/deployments/{BulkDeploymentId}/status"
  },
  input: {
    shape: GetBulkDeploymentStatusInput
  },
  output: {
    shape: GetBulkDeploymentStatusOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
