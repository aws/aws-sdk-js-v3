import { GetStagesInput } from "./GetStagesInput";
import { GetStagesOutput } from "./GetStagesOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
