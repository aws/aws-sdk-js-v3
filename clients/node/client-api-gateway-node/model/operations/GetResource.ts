import { GetResourceInput } from "../shapes/GetResourceInput";
import { GetResourceOutput } from "../shapes/GetResourceOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResource",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/resources/{resource_id}"
  },
  input: {
    shape: GetResourceInput
  },
  output: {
    shape: GetResourceOutput
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
    }
  ]
};
