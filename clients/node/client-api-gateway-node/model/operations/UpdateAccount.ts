import { UpdateAccountInput } from "../shapes/UpdateAccountInput";
import { UpdateAccountOutput } from "../shapes/UpdateAccountOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAccount",
  http: {
    method: "PATCH",
    requestUri: "/account"
  },
  input: {
    shape: UpdateAccountInput
  },
  output: {
    shape: UpdateAccountOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
