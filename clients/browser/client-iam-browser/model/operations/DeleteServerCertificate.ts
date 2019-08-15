import { DeleteServerCertificateInput } from "../shapes/DeleteServerCertificateInput";
import { DeleteServerCertificateOutput } from "../shapes/DeleteServerCertificateOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
