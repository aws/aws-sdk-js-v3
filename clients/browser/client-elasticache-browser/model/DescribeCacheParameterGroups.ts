import { DescribeCacheParameterGroupsInput } from "./DescribeCacheParameterGroupsInput";
import { DescribeCacheParameterGroupsOutput } from "./DescribeCacheParameterGroupsOutput";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
