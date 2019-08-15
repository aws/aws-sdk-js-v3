import { DeleteRestApiInput } from "../shapes/DeleteRestApiInput";
import { DeleteRestApiOutput } from "../shapes/DeleteRestApiOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRestApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRestApi",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}"
  },
  input: {
    shape: DeleteRestApiInput
  },
  output: {
    shape: DeleteRestApiOutput
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
    },
    {
      shape: BadRequestException
    }
  ]
};
