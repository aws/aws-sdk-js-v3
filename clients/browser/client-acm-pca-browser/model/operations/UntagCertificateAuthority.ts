import { UntagCertificateAuthorityInput } from "../shapes/UntagCertificateAuthorityInput";
import { UntagCertificateAuthorityOutput } from "../shapes/UntagCertificateAuthorityOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { InvalidTagException } from "../shapes/InvalidTagException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagCertificateAuthority",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagCertificateAuthorityInput
  },
  output: {
    shape: UntagCertificateAuthorityOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: InvalidTagException
    }
  ]
};
