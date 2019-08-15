import { CreateRouteResponseInput } from "../shapes/CreateRouteResponseInput";
import { CreateRouteResponseOutput } from "../shapes/CreateRouteResponseOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRouteResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRouteResponse",
  http: {
    method: "POST",
    requestUri: "/v2/apis/{apiId}/routes/{routeId}/routeresponses"
  },
  input: {
    shape: CreateRouteResponseInput
  },
  output: {
    shape: CreateRouteResponseOutput
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
