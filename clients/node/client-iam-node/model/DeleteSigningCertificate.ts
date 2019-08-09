import { DeleteSigningCertificateInput } from "./DeleteSigningCertificateInput";
import { DeleteSigningCertificateOutput } from "./DeleteSigningCertificateOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteSigningCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSigningCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSigningCertificateInput
  },
  output: {
    shape: DeleteSigningCertificateOutput
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
