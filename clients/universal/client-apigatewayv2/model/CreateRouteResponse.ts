import { CreateRouteResponseInput } from "./CreateRouteResponseInput";
import { CreateRouteResponseOutput } from "./CreateRouteResponseOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
