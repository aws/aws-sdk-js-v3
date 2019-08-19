import { DescribeCacheParameterGroupsInput } from "../shapes/DescribeCacheParameterGroupsInput";
import { DescribeCacheParameterGroupsOutput } from "../shapes/DescribeCacheParameterGroupsOutput";
import { CacheParameterGroupNotFoundFault } from "../shapes/CacheParameterGroupNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCacheParameterGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCacheParameterGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCacheParameterGroupsInput
  },
  output: {
    shape: DescribeCacheParameterGroupsOutput,
    resultWrapper: "DescribeCacheParameterGroupsResult"
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
