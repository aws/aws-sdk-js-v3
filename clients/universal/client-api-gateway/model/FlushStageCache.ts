import { FlushStageCacheInput } from "./FlushStageCacheInput";
import { FlushStageCacheOutput } from "./FlushStageCacheOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
