import { GetStagesInput } from "../shapes/GetStagesInput";
import { GetStagesOutput } from "../shapes/GetStagesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetStages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetStages",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/stages"
  },
  input: {
    shape: GetStagesInput
  },
  output: {
    shape: GetStagesOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
