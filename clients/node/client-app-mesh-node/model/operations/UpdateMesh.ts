import { UpdateMeshInput } from "../shapes/UpdateMeshInput";
import { UpdateMeshOutput } from "../shapes/UpdateMeshOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateMesh: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateMesh",
  http: {
    method: "PUT",
    requestUri: "/v20190125/meshes/{meshName}"
  },
  input: {
    shape: UpdateMeshInput
  },
  output: {
    shape: UpdateMeshOutput
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
