import { _VirtualRouterData } from "./_VirtualRouterData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVirtualRouterOutput: _Structure_ = {
  type: "structure",
  required: ["virtualRouter"],
  members: {
    virtualRouter: {
      shape: _VirtualRouterData
    }
  },
  payload: "virtualRouter"
};
