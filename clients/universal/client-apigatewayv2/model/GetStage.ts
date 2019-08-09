import { GetStageInput } from "./GetStageInput";
import { GetStageOutput } from "./GetStageOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetStage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetStage",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/stages/{stageName}"
  },
  input: {
    shape: GetStageInput
  },
  output: {
    shape: GetStageOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
