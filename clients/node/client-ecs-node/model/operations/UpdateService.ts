import { UpdateServiceInput } from "../shapes/UpdateServiceInput";
import { UpdateServiceOutput } from "../shapes/UpdateServiceOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { ServiceNotFoundException } from "../shapes/ServiceNotFoundException";
import { ServiceNotActiveException } from "../shapes/ServiceNotActiveException";
import { PlatformUnknownException } from "../shapes/PlatformUnknownException";
import { PlatformTaskDefinitionIncompatibilityException } from "../shapes/PlatformTaskDefinitionIncompatibilityException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateService: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateService",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateServiceInput
  },
  output: {
    shape: UpdateServiceOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClusterNotFoundException
    },
    {
      shape: ServiceNotFoundException
    },
    {
      shape: ServiceNotActiveException
    },
    {
      shape: PlatformUnknownException
    },
    {
      shape: PlatformTaskDefinitionIncompatibilityException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
