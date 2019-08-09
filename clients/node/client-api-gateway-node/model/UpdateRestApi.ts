import { UpdateRestApiInput } from "./UpdateRestApiInput";
import { UpdateRestApiOutput } from "./UpdateRestApiOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
