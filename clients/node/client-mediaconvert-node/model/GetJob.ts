import { GetJobInput } from "./GetJobInput";
import { GetJobOutput } from "./GetJobOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJob",
  http: {
    method: "GET",
    requestUri: "/2017-08-29/jobs/{id}"
  },
  input: {
    shape: GetJobInput
  },
  output: {
    shape: GetJobOutput
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
