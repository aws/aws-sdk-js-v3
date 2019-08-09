import { CreateApplicationInput } from "./CreateApplicationInput";
import { CreateApplicationOutput } from "./CreateApplicationOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApplication",
  http: {
    method: "POST",
    requestUri: "/applications"
  },
  input: {
    shape: CreateApplicationInput
  },
  output: {
    shape: CreateApplicationOutput
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
