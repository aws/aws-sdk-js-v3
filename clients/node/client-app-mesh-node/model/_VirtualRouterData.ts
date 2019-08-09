import { _ResourceMetadata } from "./_ResourceMetadata";
import { _VirtualRouterSpec } from "./_VirtualRouterSpec";
import { _VirtualRouterStatus } from "./_VirtualRouterStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualRouterData: _Structure_ = {
  type: "structure",
  required: ["meshName", "metadata", "spec", "status", "virtualRouterName"],
  members: {
    meshName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    metadata: {
      shape: _ResourceMetadata
    },
    spec: {
      shape: _VirtualRouterSpec
    },
    status: {
      shape: _VirtualRouterStatus
    },
    virtualRouterName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
