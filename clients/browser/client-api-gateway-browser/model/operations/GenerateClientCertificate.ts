import { GenerateClientCertificateInput } from "../shapes/GenerateClientCertificateInput";
import { GenerateClientCertificateOutput } from "../shapes/GenerateClientCertificateOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
