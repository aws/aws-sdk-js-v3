import { UpdateJobTemplateInput } from "./UpdateJobTemplateInput";
import { UpdateJobTemplateOutput } from "./UpdateJobTemplateOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
