import { _FilterList } from "./_FilterList";
import { _VpnConnectionIdStringList } from "./_VpnConnectionIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpnConnectionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    VpnConnectionIds: {
      shape: _VpnConnectionIdStringList,
      locationName: "VpnConnectionId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
