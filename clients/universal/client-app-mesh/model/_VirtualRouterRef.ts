import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualRouterRef: _Structure_ = {
  type: "structure",
  required: ["arn", "meshName", "virtualRouterName"],
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
    virtualRouterName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
