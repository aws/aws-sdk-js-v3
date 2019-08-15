import { _GatewayGroup } from "./_GatewayGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGatewayGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayGroup: {
      shape: _GatewayGroup
    }
  }
};
