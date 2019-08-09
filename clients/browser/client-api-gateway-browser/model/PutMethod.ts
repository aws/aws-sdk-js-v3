import { PutMethodInput } from "./PutMethodInput";
import { PutMethodOutput } from "./PutMethodOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutMethod: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutMethod",
  http: {
    method: "PUT",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
  },
  input: {
    shape: PutMethodInput
  },
  output: {
    shape: PutMethodOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ConflictException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
