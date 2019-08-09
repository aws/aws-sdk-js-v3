import { UpdateUserInput } from "./UpdateUserInput";
import { UpdateUserOutput } from "./UpdateUserOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
