import { GetDeploymentsInput } from "./GetDeploymentsInput";
import { GetDeploymentsOutput } from "./GetDeploymentsOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDeployments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeployments",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/deployments"
  },
  input: {
    shape: GetDeploymentsInput
  },
  output: {
    shape: GetDeploymentsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
