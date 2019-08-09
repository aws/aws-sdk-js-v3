import { ListClustersInput } from "./ListClustersInput";
import { ListClustersOutput } from "./ListClustersOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListClusters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListClusters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListClustersInput
  },
  output: {
    shape: ListClustersOutput
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
    }
  ]
};
