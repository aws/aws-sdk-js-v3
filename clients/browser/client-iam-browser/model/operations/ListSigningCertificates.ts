import { ListSigningCertificatesInput } from "../shapes/ListSigningCertificatesInput";
import { ListSigningCertificatesOutput } from "../shapes/ListSigningCertificatesOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
