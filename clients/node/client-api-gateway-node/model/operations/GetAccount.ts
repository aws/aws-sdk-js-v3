import { GetAccountInput } from "../shapes/GetAccountInput";
import { GetAccountOutput } from "../shapes/GetAccountOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
