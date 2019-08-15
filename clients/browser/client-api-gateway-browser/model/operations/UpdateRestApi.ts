import { UpdateRestApiInput } from "../shapes/UpdateRestApiInput";
import { UpdateRestApiOutput } from "../shapes/UpdateRestApiOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateRestApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRestApi",
  http: {
    method: "PATCH",
    requestUri: "/restapis/{restapi_id}"
  },
  input: {
    shape: UpdateRestApiInput
  },
  output: {
    shape: UpdateRestApiOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ConflictException
    },
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
