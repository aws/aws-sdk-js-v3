import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualServiceRef: _Structure_ = {
  type: "structure",
  required: ["arn", "meshName", "virtualServiceName"],
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
    virtualServiceName: {
      shape: {
        type: "string"
      }
    }
  }
};
