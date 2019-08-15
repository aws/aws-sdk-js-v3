import { DeleteJobTemplateInput } from "../shapes/DeleteJobTemplateInput";
import { DeleteJobTemplateOutput } from "../shapes/DeleteJobTemplateOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
