import { ListServerCertificatesInput } from "./ListServerCertificatesInput";
import { ListServerCertificatesOutput } from "./ListServerCertificatesOutput";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListServerCertificates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListServerCertificates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListServerCertificatesInput
  },
  output: {
    shape: ListServerCertificatesOutput,
    resultWrapper: "ListServerCertificatesResult"
  },
  errors: [
    {
      shape: ServiceFailureException
    }
  ]
};
