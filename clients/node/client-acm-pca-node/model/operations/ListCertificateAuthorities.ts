import { ListCertificateAuthoritiesInput } from "../shapes/ListCertificateAuthoritiesInput";
import { ListCertificateAuthoritiesOutput } from "../shapes/ListCertificateAuthoritiesOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCertificateAuthorities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCertificateAuthorities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCertificateAuthoritiesInput
  },
  output: {
    shape: ListCertificateAuthoritiesOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    }
  ]
};
