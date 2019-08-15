import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualNodeRef: _Structure_ = {
  type: "structure",
  required: ["arn", "meshName", "virtualNodeName"],
  members: {
    arn: {
      shape: {
        type: "string"
      }
    },
    meshName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    virtualNodeName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
