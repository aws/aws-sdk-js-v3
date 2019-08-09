import { DeleteMeshInput } from "./DeleteMeshInput";
import { DeleteMeshOutput } from "./DeleteMeshOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
