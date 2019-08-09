import { RotateChannelCredentialsInput } from "./RotateChannelCredentialsInput";
import { RotateChannelCredentialsOutput } from "./RotateChannelCredentialsOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
