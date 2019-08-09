import { GetStagesInput } from "./GetStagesInput";
import { GetStagesOutput } from "./GetStagesOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
