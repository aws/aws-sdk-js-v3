import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProcessType: _Structure_ = {
  type: "structure",
  required: ["ProcessName"],
  members: {
    ProcessName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
