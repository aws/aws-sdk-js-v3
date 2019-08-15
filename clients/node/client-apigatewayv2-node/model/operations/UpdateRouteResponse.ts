import { UpdateRouteResponseInput } from "../shapes/UpdateRouteResponseInput";
import { UpdateRouteResponseOutput } from "../shapes/UpdateRouteResponseOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateRouteResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRouteResponse",
  http: {
    method: "PATCH",
    requestUri:
      "/v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}"
  },
  input: {
    shape: UpdateRouteResponseInput
  },
  output: {
    shape: UpdateRouteResponseOutput
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
