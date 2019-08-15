import { CreateImportJobInput } from "../shapes/CreateImportJobInput";
import { CreateImportJobOutput } from "../shapes/CreateImportJobOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateImportJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateImportJob",
  http: {
    method: "POST",
    requestUri: "/v1/apps/{application-id}/jobs/import"
  },
  input: {
    shape: CreateImportJobInput
  },
  output: {
    shape: CreateImportJobOutput
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
