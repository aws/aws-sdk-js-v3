import { GetInstanceAccessInput } from "./GetInstanceAccessInput";
import { GetInstanceAccessOutput } from "./GetInstanceAccessOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetInstanceAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInstanceAccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetInstanceAccessInput
  },
  output: {
    shape: GetInstanceAccessOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
