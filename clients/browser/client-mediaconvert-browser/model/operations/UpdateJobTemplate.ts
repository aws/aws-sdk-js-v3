import { UpdateJobTemplateInput } from "../shapes/UpdateJobTemplateInput";
import { UpdateJobTemplateOutput } from "../shapes/UpdateJobTemplateOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateJobTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateJobTemplate",
  http: {
    method: "PUT",
    requestUri: "/2017-08-29/jobTemplates/{name}"
  },
  input: {
    shape: UpdateJobTemplateInput
  },
  output: {
    shape: UpdateJobTemplateOutput
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
