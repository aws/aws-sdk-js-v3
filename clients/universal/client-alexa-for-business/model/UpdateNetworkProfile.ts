import { UpdateNetworkProfileInput } from "./UpdateNetworkProfileInput";
import { UpdateNetworkProfileOutput } from "./UpdateNetworkProfileOutput";
import { NotFoundException } from "./NotFoundException";
import { NameInUseException } from "./NameInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidCertificateAuthorityException } from "./InvalidCertificateAuthorityException";
import { InvalidSecretsManagerResourceException } from "./InvalidSecretsManagerResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
