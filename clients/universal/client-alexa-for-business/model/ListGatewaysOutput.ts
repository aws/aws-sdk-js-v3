import { _GatewaySummaries } from "./_GatewaySummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGatewaysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Gateways: {
      shape: _GatewaySummaries
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
