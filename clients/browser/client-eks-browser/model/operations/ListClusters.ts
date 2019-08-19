import { ListClustersInput } from "../shapes/ListClustersInput";
import { ListClustersOutput } from "../shapes/ListClustersOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListClusters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListClusters",
  http: {
    method: "GET",
    requestUri: "/clusters"
  },
  input: {
    shape: ListClustersInput
  },
  output: {
    shape: ListClustersOutput
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
      shape: ServiceUnavailableException
    }
  ]
};
