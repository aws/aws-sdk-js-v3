import { GetResourcesInput } from "../shapes/GetResourcesInput";
import { GetResourcesOutput } from "../shapes/GetResourcesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResources",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/resources"
  },
  input: {
    shape: GetResourcesInput
  },
  output: {
    shape: GetResourcesOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
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
