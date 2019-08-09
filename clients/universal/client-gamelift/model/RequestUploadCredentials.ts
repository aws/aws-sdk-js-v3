import { RequestUploadCredentialsInput } from "./RequestUploadCredentialsInput";
import { RequestUploadCredentialsOutput } from "./RequestUploadCredentialsOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
