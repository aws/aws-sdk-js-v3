import { CreateJobTemplateInput } from "./CreateJobTemplateInput";
import { CreateJobTemplateOutput } from "./CreateJobTemplateOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateJobTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateJobTemplate",
  http: {
    method: "POST",
    requestUri: "/2017-08-29/jobTemplates"
  },
  input: {
    shape: CreateJobTemplateInput
  },
  output: {
    shape: CreateJobTemplateOutput
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
