import { GetRouteResponsesInput } from "../shapes/GetRouteResponsesInput";
import { GetRouteResponsesOutput } from "../shapes/GetRouteResponsesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRouteResponses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRouteResponses",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/routes/{routeId}/routeresponses"
  },
  input: {
    shape: GetRouteResponsesInput
  },
  output: {
    shape: GetRouteResponsesOutput
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
