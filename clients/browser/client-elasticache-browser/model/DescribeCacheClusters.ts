import { DescribeCacheClustersInput } from "./DescribeCacheClustersInput";
import { DescribeCacheClustersOutput } from "./DescribeCacheClustersOutput";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeCacheClusters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCacheClusters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCacheClustersInput
  },
  output: {
    shape: DescribeCacheClustersOutput,
    resultWrapper: "DescribeCacheClustersResult"
  },
  errors: [
    {
      shape: CacheClusterNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
