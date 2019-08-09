import { GetApisInput } from "./GetApisInput";
import { GetApisOutput } from "./GetApisOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
