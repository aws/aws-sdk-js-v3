import { GetRoutesInput } from "../shapes/GetRoutesInput";
import { GetRoutesOutput } from "../shapes/GetRoutesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRoutes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRoutes",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/routes"
  },
  input: {
    shape: GetRoutesInput
  },
  output: {
    shape: GetRoutesOutput
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
