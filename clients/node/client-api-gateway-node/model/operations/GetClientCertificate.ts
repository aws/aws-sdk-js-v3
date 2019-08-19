import { GetClientCertificateInput } from "../shapes/GetClientCertificateInput";
import { GetClientCertificateOutput } from "../shapes/GetClientCertificateOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetClientCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetClientCertificate",
  http: {
    method: "GET",
    requestUri: "/clientcertificates/{clientcertificate_id}"
  },
  input: {
    shape: GetClientCertificateInput
  },
  output: {
    shape: GetClientCertificateOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
