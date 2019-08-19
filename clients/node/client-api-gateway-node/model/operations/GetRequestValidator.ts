import { GetRequestValidatorInput } from "../shapes/GetRequestValidatorInput";
import { GetRequestValidatorOutput } from "../shapes/GetRequestValidatorOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRequestValidator: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRequestValidator",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}"
  },
  input: {
    shape: GetRequestValidatorInput
  },
  output: {
    shape: GetRequestValidatorOutput
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
