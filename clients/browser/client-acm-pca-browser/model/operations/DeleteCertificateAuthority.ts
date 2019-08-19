import { DeleteCertificateAuthorityInput } from "../shapes/DeleteCertificateAuthorityInput";
import { DeleteCertificateAuthorityOutput } from "../shapes/DeleteCertificateAuthorityOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
