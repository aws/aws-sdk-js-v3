import { DeleteServiceInput } from "./DeleteServiceInput";
import { DeleteServiceOutput } from "./DeleteServiceOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { ServiceNotFoundException } from "./ServiceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteService: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteService",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteServiceInput
  },
  output: {
    shape: DeleteServiceOutput
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
      shape: ServiceNotFoundException
    }
  ]
};
