import { GetApiInput } from "../shapes/GetApiInput";
import { GetApiOutput } from "../shapes/GetApiOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApi",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}"
  },
  input: {
    shape: GetApiInput
  },
  output: {
    shape: GetApiOutput
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
