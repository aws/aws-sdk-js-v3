import { GenerateClientCertificateInput } from "./GenerateClientCertificateInput";
import { GenerateClientCertificateOutput } from "./GenerateClientCertificateOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GenerateClientCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GenerateClientCertificate",
  http: {
    method: "POST",
    requestUri: "/clientcertificates"
  },
  input: {
    shape: GenerateClientCertificateInput
  },
  output: {
    shape: GenerateClientCertificateOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
    }
  ]
};
