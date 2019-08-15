import { DescribeCacheSubnetGroupsInput } from "../shapes/DescribeCacheSubnetGroupsInput";
import { DescribeCacheSubnetGroupsOutput } from "../shapes/DescribeCacheSubnetGroupsOutput";
import { CacheSubnetGroupNotFoundFault } from "../shapes/CacheSubnetGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCacheSubnetGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCacheSubnetGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCacheSubnetGroupsInput
  },
  output: {
    shape: DescribeCacheSubnetGroupsOutput,
    resultWrapper: "DescribeCacheSubnetGroupsResult"
  },
  errors: [
    {
      shape: CacheSubnetGroupNotFoundFault
    }
  ]
};
