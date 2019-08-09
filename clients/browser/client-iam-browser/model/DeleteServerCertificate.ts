import { DeleteServerCertificateInput } from "./DeleteServerCertificateInput";
import { DeleteServerCertificateOutput } from "./DeleteServerCertificateOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { DeleteConflictException } from "./DeleteConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteServerCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteServerCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteServerCertificateInput
  },
  output: {
    shape: DeleteServerCertificateOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: DeleteConflictException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
