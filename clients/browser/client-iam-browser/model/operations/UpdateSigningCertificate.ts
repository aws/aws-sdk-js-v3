import { UpdateSigningCertificateInput } from "../shapes/UpdateSigningCertificateInput";
import { UpdateSigningCertificateOutput } from "../shapes/UpdateSigningCertificateOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
