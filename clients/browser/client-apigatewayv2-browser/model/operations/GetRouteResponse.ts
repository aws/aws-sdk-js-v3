import { GetRouteResponseInput } from "../shapes/GetRouteResponseInput";
import { GetRouteResponseOutput } from "../shapes/GetRouteResponseOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRouteResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRouteResponse",
  http: {
    method: "GET",
    requestUri:
      "/v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}"
  },
  input: {
    shape: GetRouteResponseInput
  },
  output: {
    shape: GetRouteResponseOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
