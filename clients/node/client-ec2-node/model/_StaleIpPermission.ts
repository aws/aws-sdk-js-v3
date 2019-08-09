import { _IpRanges } from "./_IpRanges";
import { _PrefixListIdSet } from "./_PrefixListIdSet";
import { _UserIdGroupPairSet } from "./_UserIdGroupPairSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StaleIpPermission: _Structure_ = {
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
      shape: _IpRanges,
      locationName: "ipRanges"
    },
    PrefixListIds: {
      shape: _PrefixListIdSet,
      locationName: "prefixListIds"
    },
    ToPort: {
      shape: {
        type: "integer"
      },
      locationName: "toPort"
    },
    UserIdGroupPairs: {
      shape: _UserIdGroupPairSet,
      locationName: "groups"
    }
  }
};
