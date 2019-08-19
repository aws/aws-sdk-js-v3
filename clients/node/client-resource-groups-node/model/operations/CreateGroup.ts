import { CreateGroupInput } from "../shapes/CreateGroupInput";
import { CreateGroupOutput } from "../shapes/CreateGroupOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGroup",
  http: {
    method: "POST",
    requestUri: "/groups"
  },
  input: {
    shape: CreateGroupInput
  },
  output: {
    shape: CreateGroupOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
