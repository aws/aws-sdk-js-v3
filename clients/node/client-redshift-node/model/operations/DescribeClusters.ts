import { DescribeClustersInput } from "../shapes/DescribeClustersInput";
import { DescribeClustersOutput } from "../shapes/DescribeClustersOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClusters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClusters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClustersInput
  },
  output: {
    shape: DescribeClustersOutput,
    resultWrapper: "DescribeClustersResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
