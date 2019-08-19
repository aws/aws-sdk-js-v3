import { _Gateways } from "./_Gateways";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGatewaysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Gateways: {
      shape: _Gateways
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
