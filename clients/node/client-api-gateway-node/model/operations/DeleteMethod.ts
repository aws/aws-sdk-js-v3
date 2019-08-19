import { DeleteMethodInput } from "../shapes/DeleteMethodInput";
import { DeleteMethodOutput } from "../shapes/DeleteMethodOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteMethod: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMethod",
  http: {
    method: "DELETE",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
  },
  input: {
    shape: DeleteMethodInput
  },
  output: {
    shape: DeleteMethodOutput
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
      shape: ConflictException
    }
  ]
};
