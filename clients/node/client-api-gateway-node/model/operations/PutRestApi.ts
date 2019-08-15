import { PutRestApiInput } from "../shapes/PutRestApiInput";
import { PutRestApiOutput } from "../shapes/PutRestApiOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutRestApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutRestApi",
  http: {
    method: "PUT",
    requestUri: "/restapis/{restapi_id}"
  },
  input: {
    shape: PutRestApiInput
  },
  output: {
    shape: PutRestApiOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: NotFoundException
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
