import { UpdateContainerAgentInput } from "./UpdateContainerAgentInput";
import { UpdateContainerAgentOutput } from "./UpdateContainerAgentOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { UpdateInProgressException } from "./UpdateInProgressException";
import { NoUpdateAvailableException } from "./NoUpdateAvailableException";
import { MissingVersionException } from "./MissingVersionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
