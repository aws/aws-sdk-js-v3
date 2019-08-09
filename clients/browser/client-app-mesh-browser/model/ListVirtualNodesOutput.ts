import { _VirtualNodeList } from "./_VirtualNodeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVirtualNodesOutput: _Structure_ = {
  type: "structure",
  required: ["virtualNodes"],
  members: {
    nextToken: {
      shape: {
        type: "string"
      }
    },
    virtualNodes: {
      shape: _VirtualNodeList
    }
  }
};
