import { GetDeploymentsInput } from "./GetDeploymentsInput";
import { GetDeploymentsOutput } from "./GetDeploymentsOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDeployments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeployments",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/deployments"
  },
  input: {
    shape: GetDeploymentsInput
  },
  output: {
    shape: GetDeploymentsOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
