import { ListDeploymentsInput } from "../shapes/ListDeploymentsInput";
import { ListDeploymentsOutput } from "../shapes/ListDeploymentsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDeployments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeployments",
  http: {
    method: "GET",
    requestUri: "/greengrass/groups/{GroupId}/deployments"
  },
  input: {
    shape: ListDeploymentsInput
  },
  output: {
    shape: ListDeploymentsOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
