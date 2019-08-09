import { DeleteRouteInput } from "./DeleteRouteInput";
import { DeleteRouteOutput } from "./DeleteRouteOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
