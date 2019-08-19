import { GetClientCertificatesInput } from "../shapes/GetClientCertificatesInput";
import { GetClientCertificatesOutput } from "../shapes/GetClientCertificatesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
