import { DeleteRestApiInput } from "./DeleteRestApiInput";
import { DeleteRestApiOutput } from "./DeleteRestApiOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
