import { ImportRestApiInput } from "./ImportRestApiInput";
import { ImportRestApiOutput } from "./ImportRestApiOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
