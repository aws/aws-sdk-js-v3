import { GetRequestValidatorsInput } from "../shapes/GetRequestValidatorsInput";
import { GetRequestValidatorsOutput } from "../shapes/GetRequestValidatorsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRequestValidators: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRequestValidators",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/requestvalidators"
  },
  input: {
    shape: GetRequestValidatorsInput
  },
  output: {
    shape: GetRequestValidatorsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
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
