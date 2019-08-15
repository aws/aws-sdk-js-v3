import { UpdateServicePrimaryTaskSetInput } from "../shapes/UpdateServicePrimaryTaskSetInput";
import { UpdateServicePrimaryTaskSetOutput } from "../shapes/UpdateServicePrimaryTaskSetOutput";
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
