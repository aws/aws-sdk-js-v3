import { CreateRestApiInput } from "./CreateRestApiInput";
import { CreateRestApiOutput } from "./CreateRestApiOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateRestApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRestApi",
  http: {
    method: "POST",
    requestUri: "/restapis"
  },
  input: {
    shape: CreateRestApiInput
  },
  output: {
    shape: CreateRestApiOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
