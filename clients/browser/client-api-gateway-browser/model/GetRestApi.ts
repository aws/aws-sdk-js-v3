import { GetRestApiInput } from "./GetRestApiInput";
import { GetRestApiOutput } from "./GetRestApiOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
