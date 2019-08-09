import { DeleteCertificateAuthorityInput } from "./DeleteCertificateAuthorityInput";
import { DeleteCertificateAuthorityOutput } from "./DeleteCertificateAuthorityOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCertificateAuthority",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCertificateAuthorityInput
  },
  output: {
    shape: DeleteCertificateAuthorityOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidStateException
    }
  ]
};
