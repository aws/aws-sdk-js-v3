import { GetAppInput } from "./GetAppInput";
import { GetAppOutput } from "./GetAppOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
