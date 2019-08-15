import { CreateExportJobInput } from "../shapes/CreateExportJobInput";
import { CreateExportJobOutput } from "../shapes/CreateExportJobOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateExportJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateExportJob",
  http: {
    method: "POST",
    requestUri: "/v1/apps/{application-id}/jobs/export"
  },
  input: {
    shape: CreateExportJobInput
  },
  output: {
    shape: CreateExportJobOutput
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
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
