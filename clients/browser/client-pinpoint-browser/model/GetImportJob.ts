import { GetImportJobInput } from "./GetImportJobInput";
import { GetImportJobOutput } from "./GetImportJobOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetImportJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetImportJob",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/jobs/import/{job-id}"
  },
  input: {
    shape: GetImportJobInput
  },
  output: {
    shape: GetImportJobOutput
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
