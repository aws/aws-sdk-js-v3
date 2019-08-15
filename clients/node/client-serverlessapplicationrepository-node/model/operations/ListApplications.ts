import { ListApplicationsInput } from "../shapes/ListApplicationsInput";
import { ListApplicationsOutput } from "../shapes/ListApplicationsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListApplications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListApplications",
  http: {
    method: "GET",
    requestUri: "/applications"
  },
  input: {
    shape: ListApplicationsInput
  },
  output: {
    shape: ListApplicationsOutput
  },
  errors: [
    {
      shape: NotFoundException
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
