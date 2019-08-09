import { DeleteUserInput } from "./DeleteUserInput";
import { DeleteUserOutput } from "./DeleteUserOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUser",
  http: {
    method: "DELETE",
    requestUri: "/v1/brokers/{broker-id}/users/{username}"
  },
  input: {
    shape: DeleteUserInput
  },
  output: {
    shape: DeleteUserOutput
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
      shape: ForbiddenException
    }
  ]
};
