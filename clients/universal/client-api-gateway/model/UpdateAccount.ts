import { UpdateAccountInput } from "./UpdateAccountInput";
import { UpdateAccountOutput } from "./UpdateAccountOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
