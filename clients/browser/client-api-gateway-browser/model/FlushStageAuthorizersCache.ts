import { FlushStageAuthorizersCacheInput } from "./FlushStageAuthorizersCacheInput";
import { FlushStageAuthorizersCacheOutput } from "./FlushStageAuthorizersCacheOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
