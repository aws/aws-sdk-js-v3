import { ImportRestApiInput } from "../shapes/ImportRestApiInput";
import { ImportRestApiOutput } from "../shapes/ImportRestApiOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ImportRestApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportRestApi",
  http: {
    method: "POST",
    requestUri: "/restapis?mode=import"
  },
  input: {
    shape: ImportRestApiInput
  },
  output: {
    shape: ImportRestApiOutput
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
    },
    {
      shape: ConflictException
    }
  ]
};
