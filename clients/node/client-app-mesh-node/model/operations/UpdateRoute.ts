import { UpdateRouteInput } from "../shapes/UpdateRouteInput";
import { UpdateRouteOutput } from "../shapes/UpdateRouteOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRoute",
  http: {
    method: "PUT",
    requestUri:
      "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}"
  },
  input: {
    shape: UpdateRouteInput
  },
  output: {
    shape: UpdateRouteOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
