import { PutRestApiInput } from "./PutRestApiInput";
import { PutRestApiOutput } from "./PutRestApiOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { LimitExceededException } from "./LimitExceededException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
