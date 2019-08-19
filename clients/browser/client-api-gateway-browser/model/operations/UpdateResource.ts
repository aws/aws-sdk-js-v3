import { UpdateResourceInput } from "../shapes/UpdateResourceInput";
import { UpdateResourceOutput } from "../shapes/UpdateResourceOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateResource",
  http: {
    method: "PATCH",
    requestUri: "/restapis/{restapi_id}/resources/{resource_id}"
  },
  input: {
    shape: UpdateResourceInput
  },
  output: {
    shape: UpdateResourceOutput
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
