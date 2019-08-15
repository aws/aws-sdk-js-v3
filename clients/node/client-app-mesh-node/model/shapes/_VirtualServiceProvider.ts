import { _VirtualNodeServiceProvider } from "./_VirtualNodeServiceProvider";
import { _VirtualRouterServiceProvider } from "./_VirtualRouterServiceProvider";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualServiceProvider: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    virtualNode: {
      shape: _VirtualNodeServiceProvider
    },
    virtualRouter: {
      shape: _VirtualRouterServiceProvider
    }
  }
};
