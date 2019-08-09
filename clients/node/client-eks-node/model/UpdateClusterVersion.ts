import { UpdateClusterVersionInput } from "./UpdateClusterVersionInput";
import { UpdateClusterVersionOutput } from "./UpdateClusterVersionOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
