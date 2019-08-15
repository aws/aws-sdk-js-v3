import { DescribeMeshInput } from "../shapes/DescribeMeshInput";
import { DescribeMeshOutput } from "../shapes/DescribeMeshOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMesh: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMesh",
  http: {
    method: "GET",
    requestUri: "/v20190125/meshes/{meshName}"
  },
  input: {
    shape: DescribeMeshInput
  },
  output: {
    shape: DescribeMeshOutput
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
