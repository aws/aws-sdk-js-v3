import { SignOutUserInput } from "../shapes/SignOutUserInput";
import { SignOutUserOutput } from "../shapes/SignOutUserOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SignOutUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SignOutUser",
  http: {
    method: "POST",
    requestUri: "/signOutUser"
  },
  input: {
    shape: SignOutUserInput
  },
  output: {
    shape: SignOutUserOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
