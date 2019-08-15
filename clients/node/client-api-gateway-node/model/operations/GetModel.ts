import { GetModelInput } from "../shapes/GetModelInput";
import { GetModelOutput } from "../shapes/GetModelOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
