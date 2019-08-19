import { GetSdkInput } from "../shapes/GetSdkInput";
import { GetSdkOutput } from "../shapes/GetSdkOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSdk: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSdk",
  http: {
    method: "GET",
    requestUri: "/restapis/{restapi_id}/stages/{stage_name}/sdks/{sdk_type}"
  },
  input: {
    shape: GetSdkInput
  },
  output: {
    shape: GetSdkOutput
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
