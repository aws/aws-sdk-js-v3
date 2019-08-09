import { CreateVirtualRouterInput } from "./CreateVirtualRouterInput";
import { CreateVirtualRouterOutput } from "./CreateVirtualRouterOutput";
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

export const CreateVirtualRouter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVirtualRouter",
  http: {
    method: "PUT",
    requestUri: "/v20190125/meshes/{meshName}/virtualRouters"
  },
  input: {
    shape: CreateVirtualRouterInput
  },
  output: {
    shape: CreateVirtualRouterOutput
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
