import { UpdateMeshInput } from "./UpdateMeshInput";
import { UpdateMeshOutput } from "./UpdateMeshOutput";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
