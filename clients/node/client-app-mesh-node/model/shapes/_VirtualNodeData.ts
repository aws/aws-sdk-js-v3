import { _ResourceMetadata } from "./_ResourceMetadata";
import { _VirtualNodeSpec } from "./_VirtualNodeSpec";
import { _VirtualNodeStatus } from "./_VirtualNodeStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualNodeData: _Structure_ = {
  type: "structure",
  required: ["meshName", "metadata", "spec", "status", "virtualNodeName"],
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
      shape: _VirtualNodeSpec
    },
    status: {
      shape: _VirtualNodeStatus
    },
    virtualNodeName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
