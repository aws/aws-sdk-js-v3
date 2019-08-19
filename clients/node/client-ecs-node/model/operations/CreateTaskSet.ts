import { CreateTaskSetInput } from "../shapes/CreateTaskSetInput";
import { CreateTaskSetOutput } from "../shapes/CreateTaskSetOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { UnsupportedFeatureException } from "../shapes/UnsupportedFeatureException";
import { PlatformUnknownException } from "../shapes/PlatformUnknownException";
import { PlatformTaskDefinitionIncompatibilityException } from "../shapes/PlatformTaskDefinitionIncompatibilityException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ServiceNotFoundException } from "../shapes/ServiceNotFoundException";
import { ServiceNotActiveException } from "../shapes/ServiceNotActiveException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
