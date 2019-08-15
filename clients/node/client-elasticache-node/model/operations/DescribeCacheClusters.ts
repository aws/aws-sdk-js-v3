import { DescribeCacheClustersInput } from "../shapes/DescribeCacheClustersInput";
import { DescribeCacheClustersOutput } from "../shapes/DescribeCacheClustersOutput";
import { CacheClusterNotFoundFault } from "../shapes/CacheClusterNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
