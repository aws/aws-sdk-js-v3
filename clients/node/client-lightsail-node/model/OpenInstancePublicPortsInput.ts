import { _PortInfo } from "./_PortInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const OpenInstancePublicPortsInput: _Structure_ = {
  type: "structure",
  required: ["portInfo", "instanceName"],
  members: {
    portInfo: {
      shape: _PortInfo
    },
    instanceName: {
      shape: {
        type: "string"
      }
    }
  }
};
