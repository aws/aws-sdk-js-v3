import { GetAccountInput } from "../shapes/GetAccountInput";
import { GetAccountOutput } from "../shapes/GetAccountOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAccount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccount",
  http: {
    method: "GET",
    requestUri: "/v1/email/account"
  },
  input: {
    shape: GetAccountInput
  },
  output: {
    shape: GetAccountOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
