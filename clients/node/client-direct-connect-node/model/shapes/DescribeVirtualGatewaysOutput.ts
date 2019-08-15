import { _VirtualGatewayList } from "./_VirtualGatewayList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVirtualGatewaysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    virtualGateways: {
      shape: _VirtualGatewayList
    }
  }
};
