import { UpdateMethodResponseInput } from "./UpdateMethodResponseInput";
import { UpdateMethodResponseOutput } from "./UpdateMethodResponseOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
