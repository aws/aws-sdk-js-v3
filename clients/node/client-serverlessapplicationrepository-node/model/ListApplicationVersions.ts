import { ListApplicationVersionsInput } from "./ListApplicationVersionsInput";
import { ListApplicationVersionsOutput } from "./ListApplicationVersionsOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
