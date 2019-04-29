import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventorySchedule: _Structure_ = {
  type: "structure",
  required: ["Frequency"],
  members: {
    Frequency: {
      shape: {
        type: "string"
      }
    }
  }
};
