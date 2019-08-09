import { ListApplicationDependenciesInput } from "./ListApplicationDependenciesInput";
import { ListApplicationDependenciesOutput } from "./ListApplicationDependenciesOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
