import { _ClientVpnConnectionSet } from "./_ClientVpnConnectionSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClientVpnConnectionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Connections: {
      shape: _ClientVpnConnectionSet,
      locationName: "connections"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
