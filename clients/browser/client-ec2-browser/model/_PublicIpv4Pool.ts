import { _PublicIpv4PoolRangeSet } from "./_PublicIpv4PoolRangeSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PublicIpv4Pool: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PoolId: {
      shape: {
        type: "string"
      },
      locationName: "poolId"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    PoolAddressRanges: {
      shape: _PublicIpv4PoolRangeSet,
      locationName: "poolAddressRangeSet"
    },
    TotalAddressCount: {
      shape: {
        type: "integer"
      },
      locationName: "totalAddressCount"
    },
    TotalAvailableAddressCount: {
      shape: {
        type: "integer"
      },
      locationName: "totalAvailableAddressCount"
    }
  }
};
