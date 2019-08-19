import { _PortMapping } from "./_PortMapping";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualRouterListener: _Structure_ = {
  type: "structure",
  required: ["portMapping"],
  members: {
    portMapping: {
      shape: _PortMapping
    }
  }
};
