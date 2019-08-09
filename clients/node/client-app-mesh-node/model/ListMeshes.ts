import { ListMeshesInput } from "./ListMeshesInput";
import { ListMeshesOutput } from "./ListMeshesOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
