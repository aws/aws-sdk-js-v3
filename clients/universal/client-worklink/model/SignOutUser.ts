import { SignOutUserInput } from "./SignOutUserInput";
import { SignOutUserOutput } from "./SignOutUserOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
