import { UpdateRouteInput } from "../shapes/UpdateRouteInput";
import { UpdateRouteOutput } from "../shapes/UpdateRouteOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRoute",
  http: {
    method: "PATCH",
    requestUri: "/v2/apis/{apiId}/routes/{routeId}"
  },
  input: {
    shape: UpdateRouteInput
  },
  output: {
    shape: UpdateRouteOutput
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
    },
    {
      shape: ConflictException
    }
  ]
};
