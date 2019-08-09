import { DeleteResourceInput } from "./DeleteResourceInput";
import { DeleteResourceOutput } from "./DeleteResourceOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
