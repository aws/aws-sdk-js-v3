import { ListApplicationVersionsInput } from "../shapes/ListApplicationVersionsInput";
import { ListApplicationVersionsOutput } from "../shapes/ListApplicationVersionsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListApplicationVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListApplicationVersions",
  http: {
    method: "GET",
    requestUri: "/applications/{applicationId}/versions"
  },
  input: {
    shape: ListApplicationVersionsInput
  },
  output: {
    shape: ListApplicationVersionsOutput
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
