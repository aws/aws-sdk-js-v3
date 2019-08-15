import { GetModelInput } from "../shapes/GetModelInput";
import { GetModelOutput } from "../shapes/GetModelOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
