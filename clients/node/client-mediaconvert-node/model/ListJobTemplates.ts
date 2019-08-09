import { ListJobTemplatesInput } from "./ListJobTemplatesInput";
import { ListJobTemplatesOutput } from "./ListJobTemplatesOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListJobTemplates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListJobTemplates",
  http: {
    method: "GET",
    requestUri: "/2017-08-29/jobTemplates"
  },
  input: {
    shape: ListJobTemplatesInput
  },
  output: {
    shape: ListJobTemplatesOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};
