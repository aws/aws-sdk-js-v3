import { ListClustersInput } from "../shapes/ListClustersInput";
import { ListClustersOutput } from "../shapes/ListClustersOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
      shape: InvalidNextTokenException
    }
  ]
};
