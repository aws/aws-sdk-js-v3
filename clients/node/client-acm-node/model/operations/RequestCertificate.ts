import { RequestCertificateInput } from "../shapes/RequestCertificateInput";
import { RequestCertificateOutput } from "../shapes/RequestCertificateOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidDomainValidationOptionsException } from "../shapes/InvalidDomainValidationOptionsException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
