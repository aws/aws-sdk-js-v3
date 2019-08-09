import { UpdateRouteResponseInput } from "./UpdateRouteResponseInput";
import { UpdateRouteResponseOutput } from "./UpdateRouteResponseOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
