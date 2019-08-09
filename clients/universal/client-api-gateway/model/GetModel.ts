import { GetModelInput } from "./GetModelInput";
import { GetModelOutput } from "./GetModelOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetModel",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/models/{model_name}"
  },
  input: {
    shape: GetModelInput
  },
  output: {
    shape: GetModelOutput
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
