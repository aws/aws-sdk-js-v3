import { GetInstanceAccessInput } from "../shapes/GetInstanceAccessInput";
import { GetInstanceAccessOutput } from "../shapes/GetInstanceAccessOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
