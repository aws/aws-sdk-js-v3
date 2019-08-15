import { ListServicesInput } from "../shapes/ListServicesInput";
import { ListServicesOutput } from "../shapes/ListServicesOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListServices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListServices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListServicesInput
  },
  output: {
    shape: ListServicesOutput
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
    }
  ]
};
