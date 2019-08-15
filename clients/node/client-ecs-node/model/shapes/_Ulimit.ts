import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Ulimit: _Structure_ = {
  type: "structure",
  required: ["name", "softLimit", "hardLimit"],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    softLimit: {
      shape: {
        type: "integer"
      }
    },
    hardLimit: {
      shape: {
        type: "integer"
      }
    }
  }
};
