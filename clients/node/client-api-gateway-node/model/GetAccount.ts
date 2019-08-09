import { GetAccountInput } from "./GetAccountInput";
import { GetAccountOutput } from "./GetAccountOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccount",
  http: {
    method: "GET",
    requestUri: "/account"
  },
  input: {
    shape: GetAccountInput
  },
  output: {
    shape: GetAccountOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
