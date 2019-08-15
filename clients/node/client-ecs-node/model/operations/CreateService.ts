import { CreateServiceInput } from "../shapes/CreateServiceInput";
import { CreateServiceOutput } from "../shapes/CreateServiceOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { UnsupportedFeatureException } from "../shapes/UnsupportedFeatureException";
import { PlatformUnknownException } from "../shapes/PlatformUnknownException";
import { PlatformTaskDefinitionIncompatibilityException } from "../shapes/PlatformTaskDefinitionIncompatibilityException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateService: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateService",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateServiceInput
  },
  output: {
    shape: CreateServiceOutput
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
      shape: UnsupportedFeatureException
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
