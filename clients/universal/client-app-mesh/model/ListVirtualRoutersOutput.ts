import { _VirtualRouterList } from "./_VirtualRouterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVirtualRoutersOutput: _Structure_ = {
  type: "structure",
  required: ["virtualRouters"],
  members: {
    nextToken: {
      shape: {
        type: "string"
      }
    },
    virtualRouters: {
      shape: _VirtualRouterList
    }
  }
};
