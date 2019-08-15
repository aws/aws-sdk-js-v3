import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Ulimit: _Structure_ = {
  type: "structure",
  required: ["hardLimit", "name", "softLimit"],
  members: {
    hardLimit: {
      shape: {
        type: "integer"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    softLimit: {
      shape: {
        type: "integer"
      }
    }
  }
};
