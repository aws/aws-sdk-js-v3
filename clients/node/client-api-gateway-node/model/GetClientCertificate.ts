import { GetClientCertificateInput } from "./GetClientCertificateInput";
import { GetClientCertificateOutput } from "./GetClientCertificateOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
