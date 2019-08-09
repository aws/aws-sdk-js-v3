import { TagResourceInput } from "./TagResourceInput";
import { TagResourceOutput } from "./TagResourceOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: ClusterNotFoundException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
