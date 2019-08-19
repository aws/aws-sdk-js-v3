import { PutMethodResponseInput } from "../shapes/PutMethodResponseInput";
import { PutMethodResponseOutput } from "../shapes/PutMethodResponseOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutMethodResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutMethodResponse",
  http: {
    method: "PUT",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}"
  },
  input: {
    shape: PutMethodResponseInput
  },
  output: {
    shape: PutMethodResponseOutput
  },
  errors: [
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
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
