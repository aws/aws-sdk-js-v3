import { GetSdkInput } from "./GetSdkInput";
import { GetSdkOutput } from "./GetSdkOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
