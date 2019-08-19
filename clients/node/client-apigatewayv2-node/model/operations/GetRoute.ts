import { GetRouteInput } from "../shapes/GetRouteInput";
import { GetRouteOutput } from "../shapes/GetRouteOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRoute",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/routes/{routeId}"
  },
  input: {
    shape: GetRouteInput
  },
  output: {
    shape: GetRouteOutput
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
