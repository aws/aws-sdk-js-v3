import { GetRequestValidatorsInput } from "./GetRequestValidatorsInput";
import { GetRequestValidatorsOutput } from "./GetRequestValidatorsOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
