import { ListBulkDeploymentsInput } from "./ListBulkDeploymentsInput";
import { ListBulkDeploymentsOutput } from "./ListBulkDeploymentsOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListBulkDeployments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBulkDeployments",
  http: {
    method: "GET",
    requestUri: "/greengrass/bulk/deployments"
  },
  input: {
    shape: ListBulkDeploymentsInput
  },
  output: {
    shape: ListBulkDeploymentsOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
