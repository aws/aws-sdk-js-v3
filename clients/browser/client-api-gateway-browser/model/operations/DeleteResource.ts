import { DeleteResourceInput } from "../shapes/DeleteResourceInput";
import { DeleteResourceOutput } from "../shapes/DeleteResourceOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteResource",
  http: {
    method: "DELETE",
    requestUri: "/restapis/{restapi_id}/resources/{resource_id}"
  },
  input: {
    shape: DeleteResourceInput
  },
  output: {
    shape: DeleteResourceOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
