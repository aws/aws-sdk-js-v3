import { DescribeCacheParametersInput } from "./DescribeCacheParametersInput";
import { DescribeCacheParametersOutput } from "./DescribeCacheParametersOutput";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
