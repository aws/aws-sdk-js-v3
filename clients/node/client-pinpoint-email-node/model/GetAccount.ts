import { GetAccountInput } from "./GetAccountInput";
import { GetAccountOutput } from "./GetAccountOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
