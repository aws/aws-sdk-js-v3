import { UpdateContainerAgentInput } from "../shapes/UpdateContainerAgentInput";
import { UpdateContainerAgentOutput } from "../shapes/UpdateContainerAgentOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { UpdateInProgressException } from "../shapes/UpdateInProgressException";
import { NoUpdateAvailableException } from "../shapes/NoUpdateAvailableException";
import { MissingVersionException } from "../shapes/MissingVersionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateContainerAgent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateContainerAgent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateContainerAgentInput
  },
  output: {
    shape: UpdateContainerAgentOutput
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
      shape: UpdateInProgressException
    },
    {
      shape: NoUpdateAvailableException
    },
    {
      shape: MissingVersionException
    }
  ]
};
