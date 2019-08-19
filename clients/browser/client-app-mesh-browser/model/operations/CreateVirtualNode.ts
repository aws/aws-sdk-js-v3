import { CreateVirtualNodeInput } from "../shapes/CreateVirtualNodeInput";
import { CreateVirtualNodeOutput } from "../shapes/CreateVirtualNodeOutput";
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

export const CreateVirtualNode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVirtualNode",
  http: {
    method: "PUT",
    requestUri: "/v20190125/meshes/{meshName}/virtualNodes"
  },
  input: {
    shape: CreateVirtualNodeInput
  },
  output: {
    shape: CreateVirtualNodeOutput
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
