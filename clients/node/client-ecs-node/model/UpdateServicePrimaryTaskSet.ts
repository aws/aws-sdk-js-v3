import { UpdateServicePrimaryTaskSetInput } from "./UpdateServicePrimaryTaskSetInput";
import { UpdateServicePrimaryTaskSetOutput } from "./UpdateServicePrimaryTaskSetOutput";
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

export const UpdateServicePrimaryTaskSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateServicePrimaryTaskSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateServicePrimaryTaskSetInput
  },
  output: {
    shape: UpdateServicePrimaryTaskSetOutput
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
    },
    {
      shape: AccessDeniedException
    }
  ]
};
