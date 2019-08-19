import { DeleteMeshInput } from "../shapes/DeleteMeshInput";
import { DeleteMeshOutput } from "../shapes/DeleteMeshOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteMesh: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMesh",
  http: {
    method: "DELETE",
    requestUri: "/v20190125/meshes/{meshName}"
  },
  input: {
    shape: DeleteMeshInput
  },
  output: {
    shape: DeleteMeshOutput
  },
  errors: [
    {
      shape: BadRequestException
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
      shape: ResourceInUseException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
