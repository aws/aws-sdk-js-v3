import { UpdateCertificateAuthorityInput } from "./UpdateCertificateAuthorityInput";
import { UpdateCertificateAuthorityOutput } from "./UpdateCertificateAuthorityOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgsException } from "./InvalidArgsException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidPolicyException } from "./InvalidPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateCertificateAuthority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCertificateAuthority",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateCertificateAuthorityInput
  },
  output: {
    shape: UpdateCertificateAuthorityOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArgsException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: InvalidPolicyException
    }
  ]
};
