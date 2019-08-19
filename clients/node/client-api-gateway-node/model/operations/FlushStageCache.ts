import { FlushStageCacheInput } from "../shapes/FlushStageCacheInput";
import { FlushStageCacheOutput } from "../shapes/FlushStageCacheOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const FlushStageCache: _Operation_ = {
  metadata: ServiceMetadata,
  name: "FlushStageCache",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}/stages/{stage_name}/cache/data"
  },
  input: {
    shape: FlushStageCacheInput
  },
  output: {
    shape: FlushStageCacheOutput
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
