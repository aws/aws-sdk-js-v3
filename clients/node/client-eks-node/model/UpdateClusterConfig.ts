import { UpdateClusterConfigInput } from "./UpdateClusterConfigInput";
import { UpdateClusterConfigOutput } from "./UpdateClusterConfigOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateClusterConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateClusterConfig",
  http: {
    method: "POST",
    requestUri: "/clusters/{name}/update-config"
  },
  input: {
    shape: UpdateClusterConfigInput
  },
  output: {
    shape: UpdateClusterConfigOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ServerException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
