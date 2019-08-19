import { UpdateApplicationInput } from "../shapes/UpdateApplicationInput";
import { UpdateApplicationOutput } from "../shapes/UpdateApplicationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApplication",
  http: {
    method: "PATCH",
    requestUri: "/applications/{applicationId}"
  },
  input: {
    shape: UpdateApplicationInput
  },
  output: {
    shape: UpdateApplicationOutput
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
