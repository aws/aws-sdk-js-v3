import { GetRequestValidatorInput } from "./GetRequestValidatorInput";
import { GetRequestValidatorOutput } from "./GetRequestValidatorOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
