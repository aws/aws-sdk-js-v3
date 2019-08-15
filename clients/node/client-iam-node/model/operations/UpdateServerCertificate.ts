import { UpdateServerCertificateInput } from "../shapes/UpdateServerCertificateInput";
import { UpdateServerCertificateOutput } from "../shapes/UpdateServerCertificateOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
