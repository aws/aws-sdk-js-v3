import { GetGameSessionLogUrlInput } from "./GetGameSessionLogUrlInput";
import { GetGameSessionLogUrlOutput } from "./GetGameSessionLogUrlOutput";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
