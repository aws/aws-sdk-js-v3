import { CreateNetworkProfileInput } from "./CreateNetworkProfileInput";
import { CreateNetworkProfileOutput } from "./CreateNetworkProfileOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidCertificateAuthorityException } from "./InvalidCertificateAuthorityException";
import { InvalidServiceLinkedRoleStateException } from "./InvalidServiceLinkedRoleStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateNetworkProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNetworkProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateNetworkProfileInput
  },
  output: {
    shape: CreateNetworkProfileOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidCertificateAuthorityException
    },
    {
      shape: InvalidServiceLinkedRoleStateException
    }
  ]
};
