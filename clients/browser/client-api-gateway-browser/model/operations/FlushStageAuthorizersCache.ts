import { FlushStageAuthorizersCacheInput } from "../shapes/FlushStageAuthorizersCacheInput";
import { FlushStageAuthorizersCacheOutput } from "../shapes/FlushStageAuthorizersCacheOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const FlushStageAuthorizersCache: _Operation_ = {
  metadata: ServiceMetadata,
  name: "FlushStageAuthorizersCache",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}/stages/{stage_name}/cache/authorizers"
  },
  input: {
    shape: FlushStageAuthorizersCacheInput
  },
  output: {
    shape: FlushStageAuthorizersCacheOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
