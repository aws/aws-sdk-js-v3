import { GetModelInput } from "./GetModelInput";
import { GetModelOutput } from "./GetModelOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetModel",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/models/{modelId}"
  },
  input: {
    shape: GetModelInput
  },
  output: {
    shape: GetModelOutput
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
