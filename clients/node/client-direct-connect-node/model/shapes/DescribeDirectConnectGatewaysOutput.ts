import { _DirectConnectGatewayList } from "./_DirectConnectGatewayList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDirectConnectGatewaysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    directConnectGateways: {
      shape: _DirectConnectGatewayList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
