import { UpdateClusterVersionInput } from "../shapes/UpdateClusterVersionInput";
import { UpdateClusterVersionOutput } from "../shapes/UpdateClusterVersionOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateClusterVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateClusterVersion",
  http: {
    method: "POST",
    requestUri: "/clusters/{name}/updates"
  },
  input: {
    shape: UpdateClusterVersionInput
  },
  output: {
    shape: UpdateClusterVersionOutput
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
