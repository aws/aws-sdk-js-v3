import { RequestCertificateInput } from "./RequestCertificateInput";
import { RequestCertificateOutput } from "./RequestCertificateOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidDomainValidationOptionsException } from "./InvalidDomainValidationOptionsException";
import { InvalidArnException } from "./InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RequestCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RequestCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RequestCertificateInput
  },
  output: {
    shape: RequestCertificateOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidDomainValidationOptionsException
    },
    {
      shape: InvalidArnException
    }
  ]
};
