import { ListMeshesInput } from "../shapes/ListMeshesInput";
import { ListMeshesOutput } from "../shapes/ListMeshesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListMeshes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMeshes",
  http: {
    method: "GET",
    requestUri: "/v20190125/meshes"
  },
  input: {
    shape: ListMeshesInput
  },
  output: {
    shape: ListMeshesOutput
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
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
