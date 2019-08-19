import { GetJobTemplateInput } from "../shapes/GetJobTemplateInput";
import { GetJobTemplateOutput } from "../shapes/GetJobTemplateOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetJobTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJobTemplate",
  http: {
    method: "GET",
    requestUri: "/2017-08-29/jobTemplates/{name}"
  },
  input: {
    shape: GetJobTemplateInput
  },
  output: {
    shape: GetJobTemplateOutput
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
