import { _VirtualRouterListeners } from "./_VirtualRouterListeners";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualRouterSpec: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    listeners: {
      shape: _VirtualRouterListeners
    }
  }
};
