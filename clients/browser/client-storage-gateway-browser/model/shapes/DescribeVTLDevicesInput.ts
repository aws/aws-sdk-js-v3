import { _VTLDeviceARNs } from "./_VTLDeviceARNs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVTLDevicesInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN"],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    VTLDeviceARNs: {
      shape: _VTLDeviceARNs
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
