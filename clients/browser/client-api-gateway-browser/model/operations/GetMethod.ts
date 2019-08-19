import { GetMethodInput } from "../shapes/GetMethodInput";
import { GetMethodOutput } from "../shapes/GetMethodOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetMethod: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMethod",
  http: {
    method: "GET",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
  },
  input: {
    shape: GetMethodInput
  },
  output: {
    shape: GetMethodOutput
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
