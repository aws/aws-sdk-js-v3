import { DescribeCertificateAuthorityInput } from "../shapes/DescribeCertificateAuthorityInput";
import { DescribeCertificateAuthorityOutput } from "../shapes/DescribeCertificateAuthorityOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCertificateAuthority",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCertificateAuthorityInput
  },
  output: {
    shape: DescribeCertificateAuthorityOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    }
  ]
};
