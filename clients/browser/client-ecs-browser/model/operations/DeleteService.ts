import { DeleteServiceInput } from "../shapes/DeleteServiceInput";
import { DeleteServiceOutput } from "../shapes/DeleteServiceOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { ServiceNotFoundException } from "../shapes/ServiceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
