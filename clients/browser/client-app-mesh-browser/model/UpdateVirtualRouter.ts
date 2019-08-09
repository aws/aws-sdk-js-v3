import { UpdateVirtualRouterInput } from "./UpdateVirtualRouterInput";
import { UpdateVirtualRouterOutput } from "./UpdateVirtualRouterOutput";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { LimitExceededException } from "./LimitExceededException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateVirtualRouter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateVirtualRouter",
  http: {
    method: "PUT",
    requestUri:
      "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}"
  },
  input: {
    shape: UpdateVirtualRouterInput
  },
  output: {
    shape: UpdateVirtualRouterOutput
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
