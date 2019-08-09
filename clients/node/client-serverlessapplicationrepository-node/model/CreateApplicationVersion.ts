import { CreateApplicationVersionInput } from "./CreateApplicationVersionInput";
import { CreateApplicationVersionOutput } from "./CreateApplicationVersionOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
