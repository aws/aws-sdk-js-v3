import { _FilterList } from "./_FilterList";
import { _VpnGatewayIdStringList } from "./_VpnGatewayIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpnGatewaysInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    VpnGatewayIds: {
      shape: _VpnGatewayIdStringList,
      locationName: "VpnGatewayId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
