import { DeleteRouteInput } from "../shapes/DeleteRouteInput";
import { DeleteRouteOutput } from "../shapes/DeleteRouteOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRoute",
  http: {
    method: "DELETE",
    requestUri: "/v2/apis/{apiId}/routes/{routeId}"
  },
  input: {
    shape: DeleteRouteInput
  },
  output: {
    shape: DeleteRouteOutput
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
