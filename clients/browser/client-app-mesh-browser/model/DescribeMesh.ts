import { DescribeMeshInput } from "./DescribeMeshInput";
import { DescribeMeshOutput } from "./DescribeMeshOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
