import { GetStagesInput } from "../shapes/GetStagesInput";
import { GetStagesOutput } from "../shapes/GetStagesOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetStages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetStages",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/stages"
  },
  input: {
    shape: GetStagesInput
  },
  output: {
    shape: GetStagesOutput
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
