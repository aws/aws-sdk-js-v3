import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Spend: _Structure_ = {
  type: "structure",
  required: ["Amount", "Unit"],
  members: {
    Amount: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Unit: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
