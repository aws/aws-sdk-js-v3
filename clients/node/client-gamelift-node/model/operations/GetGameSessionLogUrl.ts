import { GetGameSessionLogUrlInput } from "../shapes/GetGameSessionLogUrlInput";
import { GetGameSessionLogUrlOutput } from "../shapes/GetGameSessionLogUrlOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetGameSessionLogUrl: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGameSessionLogUrl",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetGameSessionLogUrlInput
  },
  output: {
    shape: GetGameSessionLogUrlOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
