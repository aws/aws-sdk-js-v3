import { GetRouteInput } from "./GetRouteInput";
import { GetRouteOutput } from "./GetRouteOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
