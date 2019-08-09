import { DeleteJobTemplateInput } from "./DeleteJobTemplateInput";
import { DeleteJobTemplateOutput } from "./DeleteJobTemplateOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteJobTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteJobTemplate",
  http: {
    method: "DELETE",
    requestUri: "/2017-08-29/jobTemplates/{name}"
  },
  input: {
    shape: DeleteJobTemplateInput
  },
  output: {
    shape: DeleteJobTemplateOutput
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
