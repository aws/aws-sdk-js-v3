import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualRouterServiceProvider: _Structure_ = {
  type: "structure",
  required: ["virtualRouterName"],
  members: {
    virtualRouterName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
