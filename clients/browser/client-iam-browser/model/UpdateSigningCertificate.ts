import { UpdateSigningCertificateInput } from "./UpdateSigningCertificateInput";
import { UpdateSigningCertificateOutput } from "./UpdateSigningCertificateOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateSigningCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSigningCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSigningCertificateInput
  },
  output: {
    shape: UpdateSigningCertificateOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
