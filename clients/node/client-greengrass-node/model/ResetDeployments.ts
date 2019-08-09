import { ResetDeploymentsInput } from "./ResetDeploymentsInput";
import { ResetDeploymentsOutput } from "./ResetDeploymentsOutput";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResetDeployments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetDeployments",
  http: {
    method: "POST",
    requestUri: "/greengrass/groups/{GroupId}/deployments/$reset"
  },
  input: {
    shape: ResetDeploymentsInput
  },
  output: {
    shape: ResetDeploymentsOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
