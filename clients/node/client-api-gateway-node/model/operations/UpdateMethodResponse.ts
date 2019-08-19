import { UpdateMethodResponseInput } from "../shapes/UpdateMethodResponseInput";
import { UpdateMethodResponseOutput } from "../shapes/UpdateMethodResponseOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateMethodResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateMethodResponse",
  http: {
    method: "PATCH",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}"
  },
  input: {
    shape: UpdateMethodResponseInput
  },
  output: {
    shape: UpdateMethodResponseOutput
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
