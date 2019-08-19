import { ListApplicationDependenciesInput } from "../shapes/ListApplicationDependenciesInput";
import { ListApplicationDependenciesOutput } from "../shapes/ListApplicationDependenciesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListApplicationDependencies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListApplicationDependencies",
  http: {
    method: "GET",
    requestUri: "/applications/{applicationId}/dependencies"
  },
  input: {
    shape: ListApplicationDependenciesInput
  },
  output: {
    shape: ListApplicationDependenciesOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    }
  ]
};
