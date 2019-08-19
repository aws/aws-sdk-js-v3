import { _VirtualServiceList } from "./_VirtualServiceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVirtualServicesOutput: _Structure_ = {
  type: "structure",
  required: ["virtualServices"],
  members: {
    nextToken: {
      shape: {
        type: "string"
      }
    },
    virtualServices: {
      shape: _VirtualServiceList
    }
  }
};
