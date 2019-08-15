import { UpdateUserInput } from "../shapes/UpdateUserInput";
import { UpdateUserOutput } from "../shapes/UpdateUserOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ConflictException } from "../shapes/ConflictException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUser",
  http: {
    method: "PUT",
    requestUri: "/v1/brokers/{broker-id}/users/{username}"
  },
  input: {
    shape: UpdateUserInput
  },
  output: {
    shape: UpdateUserOutput
  },
  errors: [
    {
      shape: NotFoundException
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
