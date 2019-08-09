import { DeleteRouteResponseInput } from "./DeleteRouteResponseInput";
import { DeleteRouteResponseOutput } from "./DeleteRouteResponseOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteRouteResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRouteResponse",
  http: {
    method: "DELETE",
    requestUri:
      "/v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}"
  },
  input: {
    shape: DeleteRouteResponseInput
  },
  output: {
    shape: DeleteRouteResponseOutput
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
