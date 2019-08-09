import { GetStageInput } from "./GetStageInput";
import { GetStageOutput } from "./GetStageOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetStage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetStage",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/stages/{stage_name}"
  },
  input: {
    shape: GetStageInput
  },
  output: {
    shape: GetStageOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
