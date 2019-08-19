import { GetRestApiInput } from "../shapes/GetRestApiInput";
import { GetRestApiOutput } from "../shapes/GetRestApiOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRestApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRestApi",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}"
  },
  input: {
    shape: GetRestApiInput
  },
  output: {
    shape: GetRestApiOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
