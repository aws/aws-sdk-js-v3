import { GetMethodResponseInput } from "./GetMethodResponseInput";
import { GetMethodResponseOutput } from "./GetMethodResponseOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMethodResponse: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMethodResponse",
  http: {
    method: "GET",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}"
  },
  input: {
    shape: GetMethodResponseInput
  },
  output: {
    shape: GetMethodResponseOutput
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
