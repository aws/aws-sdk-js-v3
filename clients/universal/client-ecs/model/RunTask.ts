import { RunTaskInput } from "./RunTaskInput";
import { RunTaskOutput } from "./RunTaskOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { UnsupportedFeatureException } from "./UnsupportedFeatureException";
import { PlatformUnknownException } from "./PlatformUnknownException";
import { PlatformTaskDefinitionIncompatibilityException } from "./PlatformTaskDefinitionIncompatibilityException";
import { AccessDeniedException } from "./AccessDeniedException";
import { BlockedException } from "./BlockedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RunTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RunTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RunTaskInput
  },
  output: {
    shape: RunTaskOutput
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
      shape: BlockedException
    }
  ]
};
