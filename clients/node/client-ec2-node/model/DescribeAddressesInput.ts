import { _FilterList } from "./_FilterList";
import { _PublicIpStringList } from "./_PublicIpStringList";
import { _AllocationIdList } from "./_AllocationIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAddressesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    PublicIps: {
      shape: _PublicIpStringList,
      locationName: "PublicIp"
    },
    AllocationIds: {
      shape: _AllocationIdList,
      locationName: "AllocationId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
