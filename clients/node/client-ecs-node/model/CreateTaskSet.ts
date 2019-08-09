import { CreateTaskSetInput } from "./CreateTaskSetInput";
import { CreateTaskSetOutput } from "./CreateTaskSetOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { UnsupportedFeatureException } from "./UnsupportedFeatureException";
import { PlatformUnknownException } from "./PlatformUnknownException";
import { PlatformTaskDefinitionIncompatibilityException } from "./PlatformTaskDefinitionIncompatibilityException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ServiceNotFoundException } from "./ServiceNotFoundException";
import { ServiceNotActiveException } from "./ServiceNotActiveException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateTaskSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTaskSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTaskSetInput
  },
  output: {
    shape: CreateTaskSetOutput
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
    },
    {
      shape: ServiceNotFoundException
    },
    {
      shape: ServiceNotActiveException
    }
  ]
};
