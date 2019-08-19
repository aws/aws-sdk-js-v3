import { _PortInfoList } from "./_PortInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutInstancePublicPortsInput: _Structure_ = {
  type: "structure",
  required: ["portInfos", "instanceName"],
  members: {
    portInfos: {
      shape: _PortInfoList
    },
    instanceName: {
      shape: {
        type: "string"
      }
    }
  }
};
