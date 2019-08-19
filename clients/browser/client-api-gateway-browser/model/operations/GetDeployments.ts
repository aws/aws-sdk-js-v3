import { GetDeploymentsInput } from "../shapes/GetDeploymentsInput";
import { GetDeploymentsOutput } from "../shapes/GetDeploymentsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
