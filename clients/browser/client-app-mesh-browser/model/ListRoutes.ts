import { ListRoutesInput } from "./ListRoutesInput";
import { ListRoutesOutput } from "./ListRoutesOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListRoutes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRoutes",
  http: {
    method: "GET",
    requestUri:
      "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes"
  },
  input: {
    shape: ListRoutesInput
  },
  output: {
    shape: ListRoutesOutput
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
