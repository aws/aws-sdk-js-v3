import { _IpRangeList } from "./_IpRangeList";
import { _Ipv6RangeList } from "./_Ipv6RangeList";
import { _PrefixListIdList } from "./_PrefixListIdList";
import { _UserIdGroupPairList } from "./_UserIdGroupPairList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IpPermission: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FromPort: {
      shape: {
        type: "integer"
      },
      locationName: "fromPort"
    },
    IpProtocol: {
      shape: {
        type: "string"
      },
      locationName: "ipProtocol"
    },
    IpRanges: {
      shape: _IpRangeList,
      locationName: "ipRanges"
    },
    Ipv6Ranges: {
      shape: _Ipv6RangeList,
      locationName: "ipv6Ranges"
    },
    PrefixListIds: {
      shape: _PrefixListIdList,
      locationName: "prefixListIds"
    },
    ToPort: {
      shape: {
        type: "integer"
      },
      locationName: "toPort"
    },
    UserIdGroupPairs: {
      shape: _UserIdGroupPairList,
      locationName: "groups"
    }
  }
};
