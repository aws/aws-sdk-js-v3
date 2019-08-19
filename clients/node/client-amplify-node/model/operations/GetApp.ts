import { GetAppInput } from "../shapes/GetAppInput";
import { GetAppOutput } from "../shapes/GetAppOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApp",
  http: {
    method: "GET",
    requestUri: "/apps/{appId}"
  },
  input: {
    shape: GetAppInput
  },
  output: {
    shape: GetAppOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    }
  ]
};
