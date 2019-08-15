import { GetApisInput } from "../shapes/GetApisInput";
import { GetApisOutput } from "../shapes/GetApisOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApis: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApis",
  http: {
    method: "GET",
    requestUri: "/v2/apis"
  },
  input: {
    shape: GetApisInput
  },
  output: {
    shape: GetApisOutput
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
