import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MeshRef: _Structure_ = {
  type: "structure",
  required: ["arn", "meshName"],
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
    }
  }
};
