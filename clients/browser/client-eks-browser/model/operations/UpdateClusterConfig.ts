import { UpdateClusterConfigInput } from "../shapes/UpdateClusterConfigInput";
import { UpdateClusterConfigOutput } from "../shapes/UpdateClusterConfigOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
