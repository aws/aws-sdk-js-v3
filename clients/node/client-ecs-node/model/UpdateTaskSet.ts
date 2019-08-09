import { UpdateTaskSetInput } from "./UpdateTaskSetInput";
import { UpdateTaskSetOutput } from "./UpdateTaskSetOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { UnsupportedFeatureException } from "./UnsupportedFeatureException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ServiceNotFoundException } from "./ServiceNotFoundException";
import { ServiceNotActiveException } from "./ServiceNotActiveException";
import { TaskSetNotFoundException } from "./TaskSetNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateTaskSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTaskSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTaskSetInput
  },
  output: {
    shape: UpdateTaskSetOutput
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
      shape: AccessDeniedException
    },
    {
      shape: ServiceNotFoundException
    },
    {
      shape: ServiceNotActiveException
    },
    {
      shape: TaskSetNotFoundException
    }
  ]
};
