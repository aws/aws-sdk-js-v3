import { DescribeCacheParametersInput } from "../shapes/DescribeCacheParametersInput";
import { DescribeCacheParametersOutput } from "../shapes/DescribeCacheParametersOutput";
import { CacheParameterGroupNotFoundFault } from "../shapes/CacheParameterGroupNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCacheParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCacheParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCacheParametersInput
  },
  output: {
    shape: DescribeCacheParametersOutput,
    resultWrapper: "DescribeCacheParametersResult"
  },
  errors: [
    {
      shape: CacheParameterGroupNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
