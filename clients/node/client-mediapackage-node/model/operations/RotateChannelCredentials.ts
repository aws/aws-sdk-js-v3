import { RotateChannelCredentialsInput } from "../shapes/RotateChannelCredentialsInput";
import { RotateChannelCredentialsOutput } from "../shapes/RotateChannelCredentialsOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RotateChannelCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RotateChannelCredentials",
  http: {
    method: "PUT",
    requestUri: "/channels/{id}/credentials"
  },
  input: {
    shape: RotateChannelCredentialsInput
  },
  output: {
    shape: RotateChannelCredentialsOutput
  },
  errors: [
    {
      shape: UnprocessableEntityException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
