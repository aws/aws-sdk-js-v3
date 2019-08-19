import { _PublicIpv4PoolSet } from "./_PublicIpv4PoolSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePublicIpv4PoolsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PublicIpv4Pools: {
      shape: _PublicIpv4PoolSet,
      locationName: "publicIpv4PoolSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
