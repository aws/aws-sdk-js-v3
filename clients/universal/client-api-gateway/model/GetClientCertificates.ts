import { GetClientCertificatesInput } from "./GetClientCertificatesInput";
import { GetClientCertificatesOutput } from "./GetClientCertificatesOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetClientCertificates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetClientCertificates",
  http: {
    method: "GET",
    requestUri: "/clientcertificates"
  },
  input: {
    shape: GetClientCertificatesInput
  },
  output: {
    shape: GetClientCertificatesOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
