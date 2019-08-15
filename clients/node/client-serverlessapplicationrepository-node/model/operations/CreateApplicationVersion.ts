import { CreateApplicationVersionInput } from "../shapes/CreateApplicationVersionInput";
import { CreateApplicationVersionOutput } from "../shapes/CreateApplicationVersionOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ConflictException } from "../shapes/ConflictException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateApplicationVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApplicationVersion",
  http: {
    method: "PUT",
    requestUri: "/applications/{applicationId}/versions/{semanticVersion}"
  },
  input: {
    shape: CreateApplicationVersionInput
  },
  output: {
    shape: CreateApplicationVersionOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ConflictException
    },
    {
      shape: ForbiddenException
    }
  ]
};
