import { UpdateTaskSetInput } from "../shapes/UpdateTaskSetInput";
import { UpdateTaskSetOutput } from "../shapes/UpdateTaskSetOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { UnsupportedFeatureException } from "../shapes/UnsupportedFeatureException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ServiceNotFoundException } from "../shapes/ServiceNotFoundException";
import { ServiceNotActiveException } from "../shapes/ServiceNotActiveException";
import { TaskSetNotFoundException } from "../shapes/TaskSetNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
