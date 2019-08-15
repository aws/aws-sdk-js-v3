import { _VirtualNodeData } from "./_VirtualNodeData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVirtualNodeOutput: _Structure_ = {
  type: "structure",
  required: ["virtualNode"],
  members: {
    virtualNode: {
      shape: _VirtualNodeData
    }
  },
  payload: "virtualNode"
};
