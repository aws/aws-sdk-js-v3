import { DescribeCacheSecurityGroupsInput } from "../shapes/DescribeCacheSecurityGroupsInput";
import { DescribeCacheSecurityGroupsOutput } from "../shapes/DescribeCacheSecurityGroupsOutput";
import { CacheSecurityGroupNotFoundFault } from "../shapes/CacheSecurityGroupNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
