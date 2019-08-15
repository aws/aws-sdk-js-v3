import { RunTaskInput } from "../shapes/RunTaskInput";
import { RunTaskOutput } from "../shapes/RunTaskOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { UnsupportedFeatureException } from "../shapes/UnsupportedFeatureException";
import { PlatformUnknownException } from "../shapes/PlatformUnknownException";
import { PlatformTaskDefinitionIncompatibilityException } from "../shapes/PlatformTaskDefinitionIncompatibilityException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { BlockedException } from "../shapes/BlockedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
