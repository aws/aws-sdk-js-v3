import { CreateNetworkProfileInput } from "../shapes/CreateNetworkProfileInput";
import { CreateNetworkProfileOutput } from "../shapes/CreateNetworkProfileOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidCertificateAuthorityException } from "../shapes/InvalidCertificateAuthorityException";
import { InvalidServiceLinkedRoleStateException } from "../shapes/InvalidServiceLinkedRoleStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
