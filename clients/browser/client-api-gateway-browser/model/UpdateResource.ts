import { UpdateResourceInput } from "./UpdateResourceInput";
import { UpdateResourceOutput } from "./UpdateResourceOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
