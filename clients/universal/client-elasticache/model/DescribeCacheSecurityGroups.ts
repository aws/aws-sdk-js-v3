import { DescribeCacheSecurityGroupsInput } from "./DescribeCacheSecurityGroupsInput";
import { DescribeCacheSecurityGroupsOutput } from "./DescribeCacheSecurityGroupsOutput";
import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeCacheSecurityGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCacheSecurityGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCacheSecurityGroupsInput
  },
  output: {
    shape: DescribeCacheSecurityGroupsOutput,
    resultWrapper: "DescribeCacheSecurityGroupsResult"
  },
  errors: [
    {
      shape: CacheSecurityGroupNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
