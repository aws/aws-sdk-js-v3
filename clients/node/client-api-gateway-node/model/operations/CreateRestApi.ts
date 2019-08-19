import { CreateRestApiInput } from "../shapes/CreateRestApiInput";
import { CreateRestApiOutput } from "../shapes/CreateRestApiOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
