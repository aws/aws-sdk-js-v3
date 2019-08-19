import { RequestUploadCredentialsInput } from "../shapes/RequestUploadCredentialsInput";
import { RequestUploadCredentialsOutput } from "../shapes/RequestUploadCredentialsOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RequestUploadCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RequestUploadCredentials",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RequestUploadCredentialsInput
  },
  output: {
    shape: RequestUploadCredentialsOutput
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
