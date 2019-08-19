import { UpdateCertificateAuthorityInput } from "../shapes/UpdateCertificateAuthorityInput";
import { UpdateCertificateAuthorityOutput } from "../shapes/UpdateCertificateAuthorityOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArgsException } from "../shapes/InvalidArgsException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { InvalidPolicyException } from "../shapes/InvalidPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
