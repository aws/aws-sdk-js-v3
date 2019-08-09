import { ListSigningCertificatesInput } from "./ListSigningCertificatesInput";
import { ListSigningCertificatesOutput } from "./ListSigningCertificatesOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSigningCertificates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSigningCertificates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSigningCertificatesInput
  },
  output: {
    shape: ListSigningCertificatesOutput,
    resultWrapper: "ListSigningCertificatesResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
