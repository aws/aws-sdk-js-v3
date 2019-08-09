import { UpdateRouteInput } from "./UpdateRouteInput";
import { UpdateRouteOutput } from "./UpdateRouteOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
