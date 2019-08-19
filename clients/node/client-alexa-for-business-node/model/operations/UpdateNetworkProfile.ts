import { UpdateNetworkProfileInput } from "../shapes/UpdateNetworkProfileInput";
import { UpdateNetworkProfileOutput } from "../shapes/UpdateNetworkProfileOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { NameInUseException } from "../shapes/NameInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidCertificateAuthorityException } from "../shapes/InvalidCertificateAuthorityException";
import { InvalidSecretsManagerResourceException } from "../shapes/InvalidSecretsManagerResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateNetworkProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateNetworkProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateNetworkProfileInput
  },
  output: {
    shape: UpdateNetworkProfileOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: NameInUseException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidCertificateAuthorityException
    },
    {
      shape: InvalidSecretsManagerResourceException
    }
  ]
};
