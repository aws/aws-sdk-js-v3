import { ListCertificatesInput } from "../shapes/ListCertificatesInput";
import { ListCertificatesOutput } from "../shapes/ListCertificatesOutput";
import { InvalidArgsException } from "../shapes/InvalidArgsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCertificates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCertificates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCertificatesInput
  },
  output: {
    shape: ListCertificatesOutput
  },
  errors: [
    {
      shape: InvalidArgsException
    }
  ]
};
