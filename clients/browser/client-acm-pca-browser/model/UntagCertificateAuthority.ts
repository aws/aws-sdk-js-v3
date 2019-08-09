import { UntagCertificateAuthorityInput } from "./UntagCertificateAuthorityInput";
import { UntagCertificateAuthorityOutput } from "./UntagCertificateAuthorityOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidTagException } from "./InvalidTagException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
