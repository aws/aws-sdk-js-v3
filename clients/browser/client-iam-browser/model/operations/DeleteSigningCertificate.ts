import { DeleteSigningCertificateInput } from "../shapes/DeleteSigningCertificateInput";
import { DeleteSigningCertificateOutput } from "../shapes/DeleteSigningCertificateOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
