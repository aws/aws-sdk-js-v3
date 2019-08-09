import { _VTLDevices } from "./_VTLDevices";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVTLDevicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    VTLDevices: {
      shape: _VTLDevices
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
