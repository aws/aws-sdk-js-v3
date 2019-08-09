import { GetResourceInput } from "./GetResourceInput";
import { GetResourceOutput } from "./GetResourceOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
