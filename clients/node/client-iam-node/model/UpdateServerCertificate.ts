import { UpdateServerCertificateInput } from "./UpdateServerCertificateInput";
import { UpdateServerCertificateOutput } from "./UpdateServerCertificateOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateServerCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateServerCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateServerCertificateInput
  },
  output: {
    shape: UpdateServerCertificateOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
